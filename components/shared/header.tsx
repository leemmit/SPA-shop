import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Input } from "../ui/input";
import React from "react";
import { TriangleAlert } from "lucide-react";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className="flex items-center justify-between py-8">
                <h1>LOGO</h1>
                {/* <Image src="/logo.png" alt="logo" width={35} height={35}/> */}
            </Container>
        </header>
    )
}