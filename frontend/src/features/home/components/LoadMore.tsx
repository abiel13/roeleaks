import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Rings } from "react-loader-spinner";
import { fetchLeaks } from "../services/leaks";

interface LoadMoreI {
  url: string;
}

const LoadMore: FC<LoadMoreI> = ({ url }) => {
  const [data, setdata] = useState<any>();
  const [ref, inView] = useInView();

  useEffect(() => {
    const getdata = async () => {
      if (inView) {
        const response = await fetchLeaks(url);
        if (response) {
          setdata((prev: any) => {
            return { ...prev, response };
          });
        }
      }
    };
    getdata();
  }, [inView]);

  return (
    <div>
      <div>
      {data.data.map((item:any, i:number)=> (
        <div key={i}>
            {item?.name}
        </div>
      ))}
      </div>
      <div ref={ref}>
        <Rings />
      </div>
    </div>
  );
};

export default LoadMore;
