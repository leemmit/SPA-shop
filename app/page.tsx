import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import Image from "next/image";
import { SortSelect } from "@/components/shared/sortSelect";
import { Card } from "@/components/shared/card";
import { Title } from "@/components/shared/title";


export default function Home() {
  return (
    <Container>
      <Title text="Все товары" size="lg" className="font-bold"/>
      <SortSelect/>

      <div className="flex gap-[60px]">
        {/* Фильтрация */}
        <div className="w-[250px]">
          <p>Фильтры</p>
        </div>

        {/* Список товаров */}
        <div className="flex flex-col gap-4">
          <Card id={1} name="Nike" price={14999} imageUrl="https://cdn1.ozone.ru/s3/multimedia-g/c600/6900752536.jpg" text=""/>
        </div>
      </div>
      
    </Container>
    
  );
}
