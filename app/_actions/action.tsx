"use server";

import AnimeCard, { AnimeProp } from "@/components/card/AnimeCard";

const PAGE_SIZE_LIMIT = 8;
const BASE_URL = `https://shikimori.one/api`;

export async function getMovies(page: number) {
  const response = await fetch(
    `${BASE_URL}/animes?page=${page}&limit=${PAGE_SIZE_LIMIT}&order=ranked`
  );

  const data = await response.json();

  if (!data || data?.length === 0) return <p>unable to fetch data</p>;

  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={index} anime={anime} index={index} />
  ));
}
