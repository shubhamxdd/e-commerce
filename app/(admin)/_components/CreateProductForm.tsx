"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formAction } from "../_actions/actions";
import { useFormStatus } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import { useState } from "react";
import Image from "next/image";

const CreateProductForm = () => {
  const [res, setRes] = useState<any>(null);
  return (
    <form className="space-y-8" action={formAction}>
      <div className="flex flex-col gap-3">
        <Label htmlFor="name">Product Name</Label>
        <Input name="name" id="name" type="text" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="price">Product Price</Label>
        <Input name="price" id="price" type="number" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="description">Product Description</Label>
        <Textarea name="description" id="description" required />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="image" className="hidden">
          Product Image
        </Label>
        <Input
          type="input"
          name="image"
          id="image"
          className="hidden"
          value={res?.url}
          required
        />

        {/* img */}

        <CldUploadWidget
          uploadPreset="hwpdcpzp"
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
                    <Button className="flex  mb-8" variant={"outline"}>
                      <TbPhotoPlus size={20} className="mr-2" /> Click to upload
                    </Button>
                  </div>
                  {res && (
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
                  )}
                </div>
              </>
            );
          }}
        </CldUploadWidget>

        {/* img */}
      </div>
      <SubmitBtn />
    </form>
  );
};

export default CreateProductForm;

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <AiOutlineLoading3Quarters className={`animate-spin`} size={30} />
      ) : (
        "Submit"
      )}
    </Button>
  );
};
