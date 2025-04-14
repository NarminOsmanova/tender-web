"use client"

import React, { useState } from 'react'
import { Input } from "@/shared/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select"
import { Button } from "@/shared/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination"
import { Search,SlidersHorizontal } from 'lucide-react' // Added SlidersHorizontal
import { mockTenders } from '@/data/tenders'; // Import from new file
import TenderCard from '@/shared/components/TenderCard/TenderCard'

export function Tender() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Show 5 tenders per page like the image

  // --- Filtering State ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  const [selectedCity, setSelectedCity] = useState<string | undefined>(undefined);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false); // State for mobile filter toggle

  // --- Filtering Logic --- 
  const filteredTenders = mockTenders.filter(tender => {
    const matchesSearch = (
      tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesCategory = !selectedCategory || tender.category === selectedCategory;
    const matchesStatus = !selectedStatus || tender.status === selectedStatus;
    const matchesCity = !selectedCity || tender.location === selectedCity;

    return matchesSearch && matchesCategory && matchesStatus && matchesCity;
  });

  // --- Pagination Logic (Applied to filtered data) ---
  const totalPages = Math.ceil(filteredTenders.length / itemsPerPage);
  const currentTenders = filteredTenders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Ensure currentPage is valid after filtering
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages); // Go to last page if current page is out of bounds
  } else if (currentPage < 1 && totalPages > 0) {
    setCurrentPage(1); // Go to first page if current page is out of bounds
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory(undefined);
    setSelectedStatus(undefined);
    setSelectedCity(undefined);
    setCurrentPage(1); // Reset to first page
    setIsMobileFilterOpen(false); // Close mobile filter on reset
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Filters Section */}
      <div className="bg-white mb-8 rounded-lg">
        {/* Combined Search and Mobile Toggle Row */}
        <div className="flex items-center gap-2 mb-4">
          {/* Search Input Container */}
          <div className="flex items-center border border-gray-300 rounded-md p-1 flex-grow max-w-[485px]">
            <Search className="h-5 w-5 text-gray-400 mx-2 flex-shrink-0" />
            <Input
              id="search"
              placeholder="Axtar"
              className="flex-grow border-none focus:ring-0 shadow-none px-2 h-10"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            {/* Axtar button kept for consistency, consider removing if search is instant */}
            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-md ml-2 px-6 h-10 hidden sm:flex">
              Axtar
            </Button>
          </div>
          {/* Mobile Filter Toggle Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden flex-shrink-0 w-12 h-12 bg-zinc-900 text-white hover:bg-zinc-800 rounded-md border-none"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <SlidersHorizontal className="h-5 w-5 hover:text-white" />
            <span className="sr-only">Filterləri aç/bağla</span>
          </Button>
        </div>

        {/* Desktop Filters (Hidden on Mobile) */}
        <div className="hidden md:flex flex-wrap gap-4 items-center justify-between w-full">
          <div className="grid grid-cols-3 gap-4 items-center w-4/5">
            {/* Category Select */}
            <Select value={selectedCategory} onValueChange={(value: string) => { setSelectedCategory(value === 'all' ? undefined : value); setCurrentPage(1); }}>
              <SelectTrigger id="category-desktop" className="w-full md:w-auto min-w-[180px] h-12 px-4 border-gray-200 bg-white hover:bg-gray-50">
                <SelectValue placeholder="Kateqoriya" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Hamısı</SelectItem>
                <SelectItem value="Tikinti">Tikinti</SelectItem>
                <SelectItem value="Texnologiya">Texnologiya</SelectItem>
                <SelectItem value="Təchizat">Təchizat</SelectItem>
              </SelectContent>
            </Select>
            {/* Status Select */}
            <Select value={selectedStatus} onValueChange={(value: string) => { setSelectedStatus(value === 'all' ? undefined : value); setCurrentPage(1); }}>
              <SelectTrigger id="status-desktop" className="w-full md:w-auto min-w-[180px] h-12 px-4 border-gray-200 bg-white hover:bg-gray-50">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Hamısı</SelectItem>
                <SelectItem value="Davam edir">Davam edir</SelectItem>
                <SelectItem value="Tamamlanmış">Tamamlanmış</SelectItem>
              </SelectContent>
            </Select>
            {/* City Select */}
            <Select value={selectedCity} onValueChange={(value: string) => { setSelectedCity(value === 'all' ? undefined : value); setCurrentPage(1); }}>
              <SelectTrigger id="city-desktop" className="w-full md:w-auto min-w-[180px] h-12 px-4 border-gray-200 bg-white hover:bg-gray-50">
                <SelectValue placeholder="Şəhər" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Hamısı</SelectItem>
                <SelectItem value="Bakı">Bakı</SelectItem>
                <SelectItem value="Sumqayıt">Sumqayıt</SelectItem>
                <SelectItem value="Gəncə">Gəncə</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button variant="ghost" onClick={resetFilters} className="bg-gray-50 hover:bg-gray-100 text-gray-600 px-5 py-3 h-12 rounded-md">
              Filteri təmizlə
            </Button>
          </div>
        </div>

        {/* --- Mobile Filters (Conditional) --- */}
        {isMobileFilterOpen && (
          <div className="md:hidden mt-4 space-y-4 rounded-md">
            {/* Category Select (Mobile) */}
            <Select value={selectedCategory} onValueChange={(value: string) => { setSelectedCategory(value === 'all' ? undefined : value); setCurrentPage(1); }}>
              <SelectTrigger id="category-mobile" className="w-full h-12 px-4 border-gray-700 text-[#8F9098]">
                <SelectValue placeholder="Kateqoriya" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Hamısı</SelectItem>
                <SelectItem value="Tikinti">Tikinti</SelectItem>
                <SelectItem value="Texnologiya">Texnologiya</SelectItem>
                <SelectItem value="Təchizat">Təchizat</SelectItem>
              </SelectContent>
            </Select>
            {/* Status Select (Mobile) */}
            <Select value={selectedStatus} onValueChange={(value: string) => { setSelectedStatus(value === 'all' ? undefined : value); setCurrentPage(1); }}>
              <SelectTrigger id="status-mobile" className="w-full h-12 px-4 border-gray-700 text-[#8F9098]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Hamısı</SelectItem>
                <SelectItem value="Davam edir">Davam edir</SelectItem>
                <SelectItem value="Tamamlanmış">Tamamlanmış</SelectItem>
              </SelectContent>
            </Select>
            {/* City Select (Mobile) */}
            <Select value={selectedCity} onValueChange={(value: string) => { setSelectedCity(value === 'all' ? undefined : value); setCurrentPage(1); }}>
              <SelectTrigger id="city-mobile" className="w-full h-12 px-4 border-gray-700  text-[#8F9098]">
                <SelectValue placeholder="Şəhər" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Hamısı</SelectItem>
                <SelectItem value="Bakı">Bakı</SelectItem>
                <SelectItem value="Sumqayıt">Sumqayıt</SelectItem>
                <SelectItem value="Gəncə">Gəncə</SelectItem>
              </SelectContent>
            </Select>
            {/* Clear Filters Button (Mobile) */}
            <Button variant="outline" onClick={resetFilters} className="w-full h-12 text-[#2F3036] bg-[#FAFBFF]">
              Filteri təmizlə
            </Button>
          </div>
        )}
      </div>

      {/* Tender List Section */}
      <div className="space-y-6">
        {currentTenders.length > 0 ? (
          currentTenders.map((tender) => (
            <TenderCard
              key={tender.id}
              tender={tender}/>
          ))
        ) : (
          <p className="text-center text-zinc-500 py-10">Filterlərə uyğun tender tapılmadı.</p>
        )}
      </div>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  size="sm"
                  href="#"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                  aria-disabled={currentPage === 1}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                const showPage = page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
                const showEllipsis = Math.abs(page - currentPage) === 2 && totalPages > 5;

                if (showEllipsis) {
                  const isEllipsisBefore = page < currentPage;
                  const showThisEllipsis = (isEllipsisBefore && Math.abs(page - 1) > 1) || (!isEllipsisBefore && Math.abs(page - totalPages) > 1);
                  if (showThisEllipsis) {
                    return <PaginationItem key={`ellipsis-${page}`}><PaginationEllipsis /></PaginationItem>;
                  }
                }

                if (showPage) {
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        size="sm"
                        href="#"
                        isActive={currentPage === page}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); handlePageChange(page); }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                return null;
              })}
              <PaginationItem>
                <PaginationNext
                  size="sm"
                  href="#"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                  aria-disabled={currentPage === totalPages}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
} 