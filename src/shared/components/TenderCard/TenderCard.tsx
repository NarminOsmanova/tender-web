'use client'
import Image from 'next/image';
import React from 'react'
import { Badge } from '../ui/badge';
import { ChevronRight, Clock4, Eye, Hourglass, MapPin, MessageCircle } from 'lucide-react';
import { TenderData } from '@/shared/models/TenderModels';
import { usePathname } from 'next/navigation';


const TenderCard: React.FC<{ tender: TenderData }> = ({ tender }) => {
    const pathname = usePathname();
    const isOnTenderPage = pathname.startsWith('/tender/');
    const isOnCartPage = pathname.startsWith('/cart');


    return (
        <div
            key={tender.id}
            className="p-6 rounded-lg bg-[#FAFBFF] border border-gray-200 hover:bg-[linear-gradient(270deg,_#EAFFFC_0%,_#FFFFFF_100%)] transition-colors duration-200 flex flex-col gap-6"
        >
            {/* Company Info (Left - Stacked) */}
            <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col items-start sm:items-start text-center sm:text-left w-full sm:w-auto flex-shrink-0 sm:max-w-[150px] min-w-[240px]">
                    <Image
                        src={tender.companyLogo}
                        alt={tender.companyName}
                        width={64} 
                        height={64}
                        className="rounded-full mb-2 object-cover"
                        unoptimized
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = '/GrandmartLogo.svg'; }}
                    />
                    <span className="font-medium text-zinc-900 break-words">{tender.companyName}</span>
                </div>

                {/* Main Content (Right) */}
                <div className="flex-1 flex flex-col">
                    {/* Top part: Title and Status Badge */}
                    <div className="flex justify-between items-start mb-4 flex-col-reverse md:flex-row gap-2">
                        <h3 className="text-[20px] font-semibold text-zinc-900">{tender.title}</h3>
                        <Badge
                            variant={tender.status === "Tamamlanmış" ? "default" : "secondary"}
                            className={`${tender.status === "Tamamlanmış" ? 'bg-teal-100 text-teal-700' : 'bg-orange-100 text-orange-700'} whitespace-nowrap flex-shrink-0`}
                        >
                            {tender.status}
                        </Badge>
                    </div>

                    {/* Description and Link */}
                    <p className="text-sm text-zinc-600 mb-10 line-clamp-2">{tender.description}</p>
                    {(!isOnTenderPage && !isOnCartPage) && (
                        <a href={`/tender/${tender?.slug}`} className="text-sm hover:underline flex items-center gap-1 mb-4">
                            Ətraflı <ChevronRight className="w-4 h-4" />
                        </a>
                    )}

                </div>
            </div>
            <div className="flex flex-wrap justify-start md:justify-between w-full gap-x-4 gap-y-2 text-xs text-zinc-500 mt-auto pt-4 border-t border-gray-100">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#009A85]" /> {tender.location}</span>
                <span className="flex items-center gap-1"><Clock4 className="w-3 h-3 text-[#009A85]" /> {tender.postedAgo}</span>
                <span className="flex items-center gap-1"><Hourglass className="w-3 h-3 text-[#009A85]" /> {tender.deadline}</span>
                <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3 text-[#009A85]" /> {tender.bids}</span>
                <span className="flex items-center gap-1"><Eye className="w-3 h-3 text-[#009A85]" /> {tender.views}</span>
            </div>
        </div>
    )
}

export default TenderCard