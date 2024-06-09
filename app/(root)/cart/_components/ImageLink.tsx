import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: Product;
}

const ImageLink = ({ item }: Props) => {
  return (
    <Link href={`/products/${item.id}`}>
      <Image alt={item.name} src={item.image} height={50} width={50} />
    </Link>
  );
};

export default ImageLink;
