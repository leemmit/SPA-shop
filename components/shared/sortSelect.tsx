import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface Props {
    className?: string;
}

export const SortSelect: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('py-5 gap-2',className)}>
        <p className='py-1'>Сортировка: </p>
        <Select>
            <SelectTrigger className="w-[210px]">
                <SelectValue placeholder={<ArrowUpDown size={16}/>} />
                <SelectValue placeholder="Наиболее подходящие"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="recommended">Наиболее подходящие</SelectItem>
                <SelectItem value="decrease">По возрастанию</SelectItem>
                <SelectItem value="increase">По убыванию</SelectItem>
            </SelectContent>
      </Select>
    </div>
  );
};