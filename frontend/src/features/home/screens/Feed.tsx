import React, { useEffect, useState } from "react";
import { fetchLeaks } from "../services/leaks";

const Feed: React.FC = () => {
  const [Leaks, setLeaks] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    "https://roleaks-api.onrender.com/api/v1/leaks"
  );

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetchLeaks(url);
        if (response) {
          setLeaks(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-2xl">Latest Leaks</h3>

      <div className="flex flex-row w-full  gap-3">
        {loading ? (
          "loading "
        ) : (
          <div className="flex-1 flex flex-col gap-2">
            {Leaks?.map((item: any, i: number) => (
              <div key={i} className="w-[300px] h-[120px] bg-[#00000040] px-3 py-2 rounded-t-3xl rounded-bl-3xl">
                {item?.title}
              </div>
            ))}
          </div>
        )}

        <div className="basis-1/4 ">a</div>
      </div>
    </div>
  );
};

export default Feed;
