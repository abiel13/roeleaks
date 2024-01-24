import React, { useEffect, useState } from "react";
import { fetchLeaks } from "../services/leaks";
import LeakCard from "../components/LeakCard";
import { Separator } from "@/components/ui/separator";
import { Rings } from "react-loader-spinner";
import { Divide } from "lucide-react";

const Feed: React.FC = () => {
  const [Leaks, setLeaks] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetchLeaks(
          "https://roleaks-api.onrender.com/api/v1/leaks"
        );
        if (response) {
          setLeaks(response);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-2xl">Latest Leaks</h3>

      <div className="flex flex-row w-full  gap-3">
        {loading ? (
          <div className="flex-1">
            <Rings color="#A94141" />
          </div>
        ) : (
          <div className="flex-1 flex flex-col gap-3">
            {Leaks?.length  ? (
              <div>
                {Leaks?.data?.map((item: any, i: number) => (
                  <LeakCard key={i} {...item} />
                ))}
              </div>
            ) : (
              <div>No leak found</div>
            )}

            {Leaks?.pagination?.hasNextPage ? "" : ""}
          </div>
        )}

        <div className="basis-1/4 h-[50vh] bg-[#00000040] rounded-lg px-3 py-3 sticky top-[14%]">
          <h3 className="font-bold">Pinned Leaks</h3>
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default Feed;
