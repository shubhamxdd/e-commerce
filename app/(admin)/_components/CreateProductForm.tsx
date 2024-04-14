import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formAction } from "../_actions/actions";

const CreateProductForm = () => {
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
        <Label htmlFor="image">Product Image</Label>
        <Input type="file" name="image" id="image" required />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default CreateProductForm;
