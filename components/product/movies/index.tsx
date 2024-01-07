"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getAllMovies } from "@/lib/actions/movies.action";
import { AnimeCardProps } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

let page = 2;
const spinnerImage = "/assets/icons/spinner.svg";

interface FetchAllMoviesProps {
  initialData: AnimeCardProps[];
}

function FetchAllMovies({ initialData }: FetchAllMoviesProps) {
  const { ref, inView } = useInView();
  const router = useRouter();

  // const {data,  reFetch} = useMovies({initialData});
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<AnimeCardProps[]>([]);
  const urlParams = useSearchParams();
  const query = urlParams.get("query")?.toString() ?? "";

  useEffect(() => {
    if (inView && data?.length > 0) {
      setIsLoading(true);
      const delay = 500;
      const timeoutId = setTimeout(() => {
        getAllMovies({
          page,
          query: query,
        }).then((res) => {
          if (res.length === 0) return;

          setData((prev) => prev?.length > 0 ? [...prev, ...res] : res);
          page++;
        });
        setIsLoading(false);
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, query]);
  
  useEffect(() => {
    if (initialData) {
      page=2;
      setData(initialData);
    }
  }, [initialData]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src={spinnerImage}
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          )}
        </div>
      </section>
    </>
  );
}

export default FetchAllMovies;
