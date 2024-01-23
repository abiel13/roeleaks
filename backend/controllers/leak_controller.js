const handler = require("express-async-handler");
const Leaks = require("../models/Leaks");
const User = require("../models/User");

const fetchLeaks = handler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const totalDocuments = await Leaks.countDocuments();
    const totalPages = Math.ceil(totalDocuments / limit);

    const data = await Leaks.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    const paginationInfo = {
      hasNextPage,
      hasPrevPage,
      nextPage: hasNextPage ? page + 1 : null,
      prevPage: hasPrevPage ? page - 1 : null,
      totalPages,
      totalDocuments,
    };

    const baseUrl = `http://${req.headers.host}${req.baseUrl}`;

    const result = {
      data,
      pagination: {
        ...paginationInfo,
        nextUrl: hasNextPage
          ? `${baseUrl}?page=${page + 1}&limit=${limit}`
          : null,
        prevUrl: hasPrevPage
          ? `${baseUrl}?page=${page - 1}&limit=${limit}`
          : null,
      },
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const createLeak = handler(async (req, res) => {
  const { title, content } = req.body;
  const author = req.user;
  console.log(title, content);
  if (!title.length || !content.length || !author) {
    return res.status(400).send({
      data: null,
      error: "title , content  fields required",
    });
  }

  try {
    const Leak = await Leaks.create({
      title,
      content,
      author,
    });
    const user = await User.findById(author);
    user.leaks.push(Leak);
    await user.save();
    if (Leak) {
      res.status(200).send({ data: "leak created succesfully ", error: null });
    }
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
});

module.exports = { fetchLeaks, createLeak };
