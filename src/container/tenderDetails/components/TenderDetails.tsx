"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  ShoppingBag,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination";
import { cn } from "@/lib/utils";
import TenderCard from "@/shared/components/TenderCard/TenderCard";
import { TenderData } from "@/shared/models/TenderModels";
import { ProductData } from "@/shared/models/ProductModels";
import { useRouter } from "next/navigation";
import { getAllMockProducts } from "@/data/product";


const getProductsForSlug = (id: number): ProductData[] => {
  const allProducts = getAllMockProducts();
  return allProducts.filter(product => product.tenderId === id);
};

// --- Product Card Component ---
function ProductCard({ product, tender }: { product: ProductData; tender: TenderData }) {
  const router = useRouter();
  return (
    <div className=" bg-[#FAFBFF] cursor-pointer hover:bg-[#F1F2F5] border border-gray-100 rounded-lg p-4 flex flex-col relative group shadow-sm hover:shadow-md transition-shadow duration-200" onClick={() => { router.push(`/tender/${tender.slug}/${product.slug}`); }}>
      <div className="h-[360px] bg-white rounded-md flex justify-center items-center p-6 mb-4 aspect-video relative overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={360}
          height={360}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          unoptimized
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = "/laptop-placeholder.svg"; // Fallback image path
          }}
        />
      </div>
      <h3 className="font-semibold text-zinc-900 mb-3 text-base">{product.name}</h3>
      <div className="flex flex-wrap gap-4 ">
        {product.specs.map((spec, index) => (
          <Badge
            key={index}
            variant="secondary"
            className={`px-2.5 py-1 text-xs font-medium border-none ${spec.color}`}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
            {spec.text}
          </Badge>
        ))}
      </div>
      <Link href={`/tender/${tender.slug}/${product.slug}`} className="pt-4 text-sm hover:underline flex items-center gap-1 mb-4">
        Ətraflı <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

interface TenderDetailsProps {
  slug: string;
  tender: TenderData; // TenderData tipini öz tələblərinizə uyğun olaraq müəyyən edin
}

const TenderDetails: React.FC<TenderDetailsProps> = ({ slug, tender }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Show 12 items per page

  // Get products based on the slug
  const productsForThisSlug = getProductsForSlug(tender.id);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(productsForThisSlug.length / itemsPerPage);
  const currentProducts = productsForThisSlug.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Scroll to top on page change
    }
  };
  const router = useRouter()
  return (

    <div className="container mx-auto  px-4">
      <section className="py-16">
        <TenderCard tender={tender} />
      </section>
      {/* Breadcrumbs */}
      <nav
        className="flex items-center text-sm text-gray-500 mb-8"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/tender"
              className="inline-flex items-center hover:text-[#009A85]"
            >
              Tenderlərin siyahısı
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="rtl:rotate-180 w-3 h-3 mx-1" />
              <span className="ms-1 font-medium md:ms-2 text-[#009A85]">
                Məhsulların siyahısı {/* Replace with dynamic title */}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 py-16">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} tender={tender} />
          ))
        ) : (
          <p className="text-center text-zinc-500 py-10 col-span-full">Bu tender üçün məhsul tapılmadı.</p>
        )}
        <Button className="fixed bottom-60 right-20 bg-teal-600 hover:bg-teal-700 z-10 h-auto px-3 py-1.5 text-sm shadow" onClick={() => { router.push("/cart") }}>
          <ShoppingBag className="w-4 h-4 mr-1.5" /> Səbətim (2)
        </Button>
      </section>

      {/* --- Pagination (Conditional & Styled) --- */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent className="gap-2">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                size="sm"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
                aria-disabled={currentPage === 1}
                className={cn(
                  "w-10 h-10 rounded-md bg-gray-50 hover:bg-gray-100 flex items-center justify-center", // Centering
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </PaginationPrevious>
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              const isActive = currentPage === page;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    size="sm"
                    href="#"
                    isActive={isActive}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handlePageChange(page);
                    }}
                    className={cn(
                      "w-10 h-10 rounded-md flex items-center justify-center", // Centering
                      isActive
                        ? "bg-[#F3F4F6] text-zinc-900 font-medium shadow-sm"
                        : "bg-white text-zinc-600 hover:bg-[#F9FAFB]"
                    )}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                size="sm"
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                aria-disabled={currentPage === totalPages}
                className={cn(
                  "w-10 h-10 rounded-md bg-gray-50 hover:bg-gray-100 flex items-center justify-center", // Centering
                  currentPage === totalPages ? "pointer-events-none opacity-50" : ""
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default TenderDetails; 