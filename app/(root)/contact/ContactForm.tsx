"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SubmitBtn from "./SubmitBtn";
import { useFormState } from "react-dom";
import { submitContactForm } from "./contactAction";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [data, action] = useFormState(submitContactForm, {});
  const { toast } = useToast();
  return (
    <>
      {/* todo send email saying will contact soon etc fom here */}
      <form action={action} className="my-5 space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required type="text" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" required type="email" />
        </div>
        <div>
          <Label htmlFor="query">Your query</Label>
          <Textarea id="query" name="query" />
        </div>
        {"message" in data && (
          <p className="text-green-500 text-sm">
            <span
              className="cursor-pointer"
              onClick={() => {
                toast({
                  title: "FID has been copied to clipboard",
                  description: "You can paste it anywhere you want",
                });
                navigator.clipboard.writeText(data.message);
              }}
            >
              Please keep FID{data.message} for future reference
            </span>
          </p>
        )}
        <div>
          <SubmitBtn />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
