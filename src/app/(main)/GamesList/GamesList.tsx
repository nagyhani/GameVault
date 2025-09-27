"use client";

import { useState } from "react";
import { Games } from "@/app/Interface/games";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

import Image from "next/image";
import Link from "next/link";

export default function GamesList({ games }: { games: Games[] }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;

  const totalPages = Math.ceil(games.length / itemsPerPage);

 
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentGames = games.slice(start, end);

 
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div>
   
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-14 px-3.5">
        {currentGames.map((gam) => (
        <Link key={gam.id} href={'/gameDetails/' + gam.id}>
          <div  className="mx-auto cursor-pointer">
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

      {/* Pagination */}
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

          {/* Page numbers */}
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

          {/* Next */}
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
    </div>
  );
}
