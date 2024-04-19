"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createProduct, updateProduct } from "../_actions/actions";
import { useFormState, useFormStatus } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import { useState } from "react";
import Image from "next/image";
import { Product } from "@prisma/client";

interface ProductFormProps {
  product?: Product;
}

const ProductForm = ({ product }: ProductFormProps) => {
  const [error, action] = useFormState(
    product ? updateProduct.bind(null, product.id) : createProduct,
    {}
  );
  // cloudinary image response
  const [res, setRes] = useState<any>(null);
  return (
    <form className="space-y-8 mb-20" action={action}>
      <div className="flex flex-col gap-3">
        <Label htmlFor="name">Product Name</Label>
        <Input
          name="name"
          id="name"
          type="text"
          required
          defaultValue={product?.name || ""}
        />
        {error?.name && <p className="text-red-500">{error?.name}</p>}
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="price">Product Price</Label>
        <Input
          name="price"
          id="price"
          type="number"
          required
          defaultValue={product?.price || ""}
        />
        {error?.price && <p className="text-red-500">{error?.price}</p>}
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="description">Product Description</Label>
        <Textarea
          name="description"
          id="description"
          required
          defaultValue={product?.description || ""}
        />
        {error?.description && (
          <p className="text-red-500">{error?.description}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        {/* {product?.id && (
          <> */}
        <Label htmlFor="image" className="hidden">
          Product Image
        </Label>
        <Input
          type="input"
          name="image"
          id="image"
          className="hidden"
          value={res?.url}
          defaultValue={product?.image || ""}
        />
        {/* <p className="text-sm text-muted-foreground">
              Dont edit this field
            </p>
          </>
        )} */}

        {/* img */}

        <CldUploadWidget
          uploadPreset="hwpdcpzp"
          // TODO
          options={{ maxFiles: 1 }}
          onSuccess={(result, { widget }) => {
            console.log(result);

            setRes(result?.info);
            // widget.close();
          }}
        >
          {({ open }) => {
            function handleOnClick() {
              setRes(undefined);
              open();
            }
            return (
              <>
                <div onClick={handleOnClick}>
                  <div className="font-semibold text-lg flex items-center">
                    <Button
                      className="flex  mb-8"
                      variant={"outline"}
                      type="button"
                    >
                      <TbPhotoPlus size={20} className="mr-2" /> Click to upload
                    </Button>
                  </div>
                  {res ? (
                    <div className="p-2 flex items-center justify-center">
                      <Image
                        src={res.url}
                        alt="prod image"
                        width={400}
                        height={200}
                        className=""
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ) : (
                    <div className="p-2 flex items-center justify-center">
                      <Image
                        src={product?.image}
                        alt="prod image"
                        width={400}
                        height={200}
                        className=""
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                </div>
              </>
            );
          }}
        </CldUploadWidget>
        {error?.image && <p className="text-red-500">Image is required!</p>}

        {/* img */}
      </div>
      <SubmitBtn />
    </form>
  );
};

export default ProductForm;

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <AiOutlineLoading3Quarters className={`animate-spin`} size={28} />
      ) : (
        "Submit"
      )}
    </Button>
  );
};
