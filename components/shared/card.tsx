import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    text: string;
    className?: string;
}

export const Card: React.FC<Props> = ({ id, name, price, imageUrl, text, className }) => {
  return (
    <div className={className}>
        <Link href={`/product/${id}`}>
            <div className='flex justify-center p6 bg-secondary rounded-lg h-[260px]'>
                <img alt={name} src={imageUrl} width={250} height={250} className='object-cover w-full h-full'/>
            </div>

            <Title text={name} size='sm' className='mb-1 mt-3 font-bold'/>
            <p className='text-sm text-gray-400'>{text}</p>
            <div className='flex justify-between items-center mt-4'>
                <span className='text-[20px]'>
                    от <b>{price} руб.</b>
                </span>

                <Button variant='secondary' className='text-base font-bold'>
                    <Plus size={20} className='mr-1'/>
                    Добавить
                </Button>
            </div>
        </Link>
        
    </div>
  );
};