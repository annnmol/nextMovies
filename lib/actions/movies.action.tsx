"use server";

import AnimeCard from "@/components/product/card/AnimeCard";
import { AnimeProp, GetAllQueryParams } from "@/types";

const PAGE_SIZE_LIMIT = 8;
const BASE_URL = `https://shikimori.one/api`;

export async function getAllMovies({
  query = "",
  page = 1,
}: GetAllQueryParams) {

  const limitQuery = PAGE_SIZE_LIMIT ? `?limit=${PAGE_SIZE_LIMIT}` : "";
  const searchQuery = query ? `&search=${query}` : "";
  // const categoryQuery = category ? `&kind=${category}` : "";
  const pageQuery = page ? `&page=${page}` : "";
  const orderQuery = `&order=ranked`;

  // console.log("-------------------------",
  //   `${BASE_URL}/animes${limitQuery}${searchQuery}${pageQuery}${orderQuery}`
  // );

  const response = await fetch(
    `${BASE_URL}/animes${limitQuery}${searchQuery}${pageQuery}${orderQuery}`
  );

  const data = await response.json();

  if (!data || data?.length === 0) return <p>unable to fetch data</p>;

  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={index} anime={anime} index={index} />
  ));
}
