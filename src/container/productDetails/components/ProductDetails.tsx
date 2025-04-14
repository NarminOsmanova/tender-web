import React, { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/shared/components/ui/badge';
import { ProductData, ProductSpec } from '@/shared/models/ProductModels';
import Link from 'next/link';
import { ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { Card, CardContent } from "@/shared/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/components/ui/carousel";

const ProductDetails: React.FC<{ product: ProductData, tenderSlug: string }> = ({ product, tenderSlug }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <section className="container mx-auto py-10 px-4">
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
                            <Link
                                href={`/tender/${tenderSlug}`}
                                className="inline-flex items-center hover:text-[#009A85]"
                            >
                                Məhsulların siyahısı
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <ChevronRight className="rtl:rotate-180 w-3 h-3 mx-1" />
                            <span className="ms-1 font-medium md:ms-2 text-[#009A85]">
                                Məhsul
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-start py-16">
                {/* Image section with vertical slider and main image */}
                <div className="flex flex-row gap-6 justify-center items-start">
                    {/* Vertical thumbnails with exactly 4 visible */}
                    <div className="relative h-80 w-24">
                        {/* Navigation button - Up */}
                        {product.images.length > 4 && (
                            <button
                                title='button'
                                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-1 z-10 hover:bg-gray-100"
                                onClick={() => {
                                    const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : product.images.length - 1;
                                    setSelectedImageIndex(newIndex);
                                }}
                            >
                                <ChevronUp className="h-5 w-5 text-gray-600" />
                            </button>
                        )}

                        {/* Fixed height container with exactly 4 thumbnails visible */}
                        <div className="h-full overflow-hidden flex flex-col space-y-2">
                            {product.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`shrink-0 cursor-pointer rounded border p-1 transition-all ${selectedImageIndex === index ? 'border-[#009A85] ring-1 ring-[#009A85]' : 'border-gray-200'
                                        }`}
                                    onClick={() => setSelectedImageIndex(index)}
                                    style={{
                                        transform: `translateY(-${Math.max(0, Math.min(product.images.length - 4, selectedImageIndex - 1)) * 90}px)`
                                    }}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className="object-cover rounded h-16 w-16"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation button - Down */}
                        {product.images.length > 4 && (
                            <button
                                title='button'
                                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-1 z-10 hover:bg-gray-100"
                                onClick={() => {
                                    const newIndex = selectedImageIndex < product.images.length - 1 ? selectedImageIndex + 1 : 0;
                                    setSelectedImageIndex(newIndex);
                                }}
                            >
                                <ChevronDown className="h-5 w-5 text-gray-600" />
                            </button>
                        )}
                    </div>

                    {/* Main selected image display */}
                    <div className="w-full max-w-md h-full">
                        <Card className="overflow-hidden border-0 rounded-lg h-full">
                            <CardContent className="p-0">
                                <Image
                                    src={product.images[selectedImageIndex]}
                                    alt={`${product.name} - Main Image`}
                                    width={500}
                                    height={400}
                                    objectFit='cover'
                                    className="object-cover h-full"
                                    unoptimized
                                    onError={(e) => {
                                        e.currentTarget.src = "/laptop-placeholder.svg";
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Product details section */}
                <div className="flex flex-col gap-4 mt-6 md:mt-0">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className="text-base text-[#494A50] max-w-[696px]">{product.description}</p>
                    <div className="flex flex-wrap gap-4">
                        {product.specs.map((spec: ProductSpec, index: number) => (
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
                </div>
            </div>

            <div className="py-10 flex flex-col gap-6">
                <h2 className="text-xl font-semibold">Xüsusiyyətlər</h2>
                {/* <ul className="flex flex-col divide-y divide-gray-200">
                    <li className="flex justify-between py-2">
                        <div className="font-medium w-1/2 text-[#71727A]">Prosessor:</div>
                        <div className="text-left text-gray-900 w-1/2">{product.processor}</div>
                    </li>
                    <li className="flex justify-between py-2">
                        <div className="font-medium text-[#71727A] w-1/2 text-left">RAM:</div>
                        <div className="text-gray-900 w-1/2 text-left">{product.ram}</div>
                    </li>
                    <li className="flex justify-between py-2">
                        <div className="font-medium text-[#71727A] w-1/2">Yaddaş:</div>
                        <div className="text-left text-gray-900 w-1/2">{product.storage}</div>
                    </li>
                    <li className="flex justify-between py-2">
                        <div className="font-medium text-[#71727A] w-1/2">Ekran:</div>
                        <div className="text-left text-gray-900 w-1/2">{product.screen}</div>
                    </li>
                    <li className="flex justify-between py-2">
                        <div className="font-medium text-[#71727A] w-1/2">Qrafik kartı:</div>
                        <div className="text-left text-gray-900 w-1/2">{product.graphicsCard}</div>
                    </li>
                    <li className="flex justify-between py-2">
                        <div className="font-medium text-[#71727A] w-1/2">Qoşulma seçimləri:</div>
                        <div className="text-left text-gray-900 w-1/2">{product.connectivity}</div>
                    </li>
                    <li className="flex justify-between py-2">
                        <div className="font-medium text-[#71727A] w-1/2">Batareya:</div>
                        <div className="text-left text-gray-900 w-1/2">{product.battery}</div>
                    </li>
                    <li className="flex justify-between py-2">
                        <div className="font-medium text-[#71727A] w-1/2">Çəki:</div>
                        <div className="text-left text-gray-900 w-1/2">{product.weight}</div>
                    </li>
                </ul> */}



                <ul className="flex flex-col divide-y divide-gray-200">
                    {product?.spesifics?.map((spec, index) => (
                        <li key={index} className="flex justify-between py-2">
                            <div className="font-medium w-1/2 text-[#71727A]">{Object.keys(spec)[0]}:</div>
                            <div className="text-left text-gray-900 w-1/2">{Object.values(spec)[0]}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProductDetails;