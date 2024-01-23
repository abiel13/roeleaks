const _ = require("lodash");

const UserDTO = (value) => {
  const excludedFields = [
    "password",
    "updatedAt",
    "createdAt",
    "apiKey",
    "otpExpires",
    "otpKey",
    "leaks",
    "pinnedLeaks",
    "likedLeaks", 
  ];
  const updated = _.omit(value, excludedFields);
  return updated;
};

module.exports = { UserDTO };
