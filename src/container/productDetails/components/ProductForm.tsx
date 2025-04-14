import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Zod validation schema
const schema = z.object({
    offer: z.string().min(1, "Qiymat təklifi tələb olunur"),
    quantity: z.number().min(1, "Miqdar tələb olunur").int("Miqdar tam ədəd olmalıdır"),
    note: z.string().optional(),
    isVATIncluded: z.boolean(),
});

const ProductForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data:any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container rounded-lg bg-gradient-to-b from-white to-[#EAFFFC] p-10">
            <div className='max-w-[488px] mx-auto flex flex-col gap-6'>
                <h2 className="text-xl font-semibold mb-4 text-center">Qiymət təklifi ver</h2>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Qiymat təklifi *</label>
                    <input
                        type="text"
                        {...register('offer')}
                        className={`mt-1 block w-full border ${errors.offer ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                        placeholder="Təklif olunan qiyməti daxil edin"
                    />
                    {errors.offer && <p className="text-red-500 text-sm">{errors.offer.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Miqdar *</label>
                    <input
                        type="number"
                        {...register('quantity', { valueAsNumber: true })}
                        className={`mt-1 block w-full border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                        placeholder="Miqdarı daxil edin"
                    />
                    {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Əlavə qeydlər</label>
                    <textarea
                        {...register('note')}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Əlavə qeydinizi daxil edin"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id='check'
                        {...register('isVATIncluded')}
                        className="mr-2"
                    />
                    <label htmlFor='check' className="text-sm font-medium text-gray-700">ƏDV ilə əlaqəli başla</label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#1F2024] hover:bg-[#323337] text-white font-bold py-2 px-4 rounded"
                >
                    Səbətə əlavə et
                </button>
            </div>
        </form>
    );
};

export default ProductForm;