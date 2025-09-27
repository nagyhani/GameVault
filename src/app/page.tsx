"use client";

import React, { useEffect, useState } from "react";
import { getGames } from "./(main)/getGamesAction/getGamesAction";
import { Games } from "./Interface/games";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import Category from "./(main)/Category/page";
import BackGround from "./(main)/backGround/backGround";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [games, setGames] = useState<Games[]>([]);
  const [filteredGames, setFilteredGames] = useState<Games[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const limit = 15;

  useEffect(() => {
    document.title = "Home";
  }, []);

  useEffect(() => {
    getAllGames(page);
  }, [page]);

  async function getAllGames(page: number) {
    const data = await getGames(page, limit);
    setGames(data.games);
    setTotal(data.total);
    setFilteredGames(data.games); 
  }


  useEffect(() => {
    if (!search.trim()) {
      setFilteredGames(games);
    } else {
      const filtered = games.filter((g) =>
        g.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredGames(filtered);
    }
  }, [search, games]);

  const totalPages = Math.ceil(total / limit);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 3;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > maxVisible + 1) pages.push("...");
      const start = Math.max(2, page - maxVisible);
      const end = Math.min(totalPages - 1, page + maxVisible);
      for (let i = start; i <= end; i++) pages.push(i);
      if (page < totalPages - maxVisible) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div>
      <BackGround />

    
      <div className="flex justify-center gap-2 mt-6">
        <Input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-14 px-3.5">
        {filteredGames.map((gam) => (
          <Link key={gam.id} href={"/gameDetails/" + gam.id}>
            <div className="mx-auto cursor-pointer">
              <Image
                className="rounded-2xl hover:scale-105 transition duration-300"
                alt={gam.title}
                src={gam.thumbnail}
                width={450}
                height={250}
              />
              <div>
                <p className="text-white py-2">
                  {gam.title} - {gam.platform}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

   
      <Pagination className="py-4 flex justify-center text-orange-600">
        <PaginationContent className="flex flex-wrap justify-center gap-1">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (page > 1) setPage(page - 1);
              }}
            />
          </PaginationItem>

          {getPageNumbers().map((p, idx) => (
            <PaginationItem key={idx}>
              {p === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href="#"
                  isActive={page === p}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(Number(p));
                  }}
                >
                  {p}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (page < totalPages) setPage(page + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Category />
    </div>
  );
}
