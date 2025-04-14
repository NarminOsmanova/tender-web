import TenderCard from '@/shared/components/TenderCard/TenderCard'
import { ProductData } from '@/shared/models/ProductModels'
import { TenderData } from '@/shared/models/TenderModels'
import { ChevronRight, Edit, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface IProps {
    tender: TenderData
    product: ProductData[]
}

const Cart = ({ tender, product }: IProps) => {
    return (
        <section className="py-8 px-4 container">
            <section className="py-16 ">
                <TenderCard tender={tender} />
            </section>
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
                                href={`/tender/${tender.slug}`}
                                className="inline-flex items-center hover:text-[#009A85]"
                            >
                                Məhsulların siyahısı
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <ChevronRight className="rtl:rotate-180 w-3 h-3 mx-1" />
                            <span className="ms-1 font-medium md:ms-2 hover:text-[#009A85]">
                                Məhsul
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <ChevronRight className="rtl:rotate-180 w-3 h-3 mx-1" />
                            <span className="ms-1 font-medium md:ms-2 text-[#009A85]">
                                Səbətim
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>


            <div className='bg-[#FAFBFF] rounded-lg p-0 md:p-10'>
                <h1 className="text-2xl font-bold mb-6 hidden md:block">Mənim təkliflərim</h1>

                {/* Desktop view - Table-like structure with divs */}
                <div className="hidden md:block">
                    {/* Header row */}
                    <div className="grid grid-cols-5 bg-gray-50 rounded-t-lg">
                        <div className="py-4  text-green-500 font-medium">Məhsulun adı</div>
                        <div className="py-4  text-green-500 font-medium">Məhsulun miqdarı</div>
                        <div className="py-4  text-green-500 font-medium">Məhsulun qiyməti</div>
                        <div className="py-4  text-green-500 font-medium">Əlavə qeyd</div>
                        <div className="py-4  text-green-500 font-medium">Təklifi redaktə et</div>
                    </div>
                    {/* Product rows */}
                    {product.map((item, index) => (
                        <div key={index} className="grid grid-cols-5 border-b border-gray-100 hover:bg-gray-50">
                            <div className="py-4">{item.name}</div>
                            <div className="py-4">{item.quantity}</div>
                            <div className="py-4">{item.price} AZN</div>
                            <div className="py-4 truncate">{item.note}</div>
                            <div className="py-4 flex space-x-4">
                                <button title='edit' className="text-gray-500 hover:text-green-500">
                                    <Edit size={18} />
                                </button>
                                <button title='delete' className="text-gray-500 hover:text-red-500">
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Mobile view - Card layout */}
            <h1 className="text-xl font-bold mb-6 block md:hidden">Mənim təkliflərim</h1>

            <div className="md:hidden space-y-4">

                {product.map((product, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-3">
                            <div>
                                <div className="text-green-500 font-medium">Məhsulun adı:</div>
                                <div>{product.name}</div>
                            </div>

                            <div>
                                <div className="text-green-500 font-medium">Məhsulun miqdarı:</div>
                                <div>{product.quantity}</div>
                            </div>

                            <div>
                                <div className="text-green-500 font-medium">Məhsulun qiyməti:</div>
                                <div>{product.price}</div>
                            </div>

                            <div>
                                <div className="text-green-500 font-medium">Əlavə qeyd:</div>
                                <div className="text-sm">{product.note}</div>
                            </div>

                            <div>
                                <div className="text-green-500 font-medium">Qrafik kartı:</div>
                                <div>{product.graphicsCard}</div>
                            </div>

                            <div className="flex justify-between pt-2">
                                <button className="flex items-center text-gray-600">
                                    <Edit size={18} className="mr-2" />
                                    Redaktə et
                                </button>
                                <button className="flex items-center text-gray-600">
                                    <X size={18} className="mr-2" />
                                    Sil
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Confirm button */}
            <div className="mt-8 flex justify-center">
                <button className="bg-[#1F2024] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                    Təklifi təsdiq et
                </button>
            </div>

        </section>
    )
}

export default Cart