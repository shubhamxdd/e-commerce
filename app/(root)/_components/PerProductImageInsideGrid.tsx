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
          className="hover:cursor-pointer hover:opacity-60 mb-3 transition-all duration-300"
          onClick={() => router.back()}
        >
          <IoChevronBack size={30} />
        </div>
        <Carousel className="top-0 sticky mx-auto my-3 mb-10 ">
          <CarouselContent>
            <CarouselItem className="relative h-screen">
              {product?.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              )}
            </CarouselItem>
            <CarouselItem className="relative h-screen">
              {product?.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              )}
            </CarouselItem>
            {/* <CarouselItem className="relative h-screen">
              {product?.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              )}
            </CarouselItem>
            <CarouselItem className="relative h-screen">
              {product?.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "bottom" }}
                />
              )}
            </CarouselItem> */}
            <CarouselItem className="relative h-screen">
              {product?.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "left" }}
                />
              )}
            </CarouselItem>
            <CarouselItem className="relative h-screen">
              {product?.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "right" }}
                />
              )}
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};
