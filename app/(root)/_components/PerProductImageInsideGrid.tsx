"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

export const ImageComp = ({
  product,
}: {
  product: {
    name: string;
    image: string;
  };
}) => {
  const router = useRouter();
  return (
    <>
      <div className="col-span-1 sm:col-span-5 md:col-span-5 container w-full">
        <div
          className="hover:cursor-pointer hover:opacity-60 transition-all duration-300 -mx-2"
          onClick={() => router.back()}
        >
          <IoChevronBack size={30} />
        </div>
        <Carousel className="top-48 sticky mx-auto ">
          <CarouselContent>
            <CarouselItem className="relative h-[400px]">
              {product?.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              )}
            </CarouselItem>
            {["center", "left", "right", "top", "bottom"].map((pos) => (
              <CarouselItem className="relative h-[400px]" key={pos}>
                {product?.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: pos }}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};
