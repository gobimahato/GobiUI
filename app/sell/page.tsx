import { TipTapEditor } from "@/components/dashboard/Editor";
import SelectCategory from "@/components/dashboard/SelectCategory";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SellRoute() {
  return (
    <section className="mx-auto mb-14 max-w-7xl px-4 md:px-8">
      <Card>
        <form className="space-y-6">
          {/* Card Header */}
          <CardHeader>
            <CardTitle className="text-3xl font-bold md:text-4xl">
              Sell your product with ease
            </CardTitle>
            <CardDescription className="text-base md:text-xl">
              Please describe your product here in detail so that it can be sold
            </CardDescription>
          </CardHeader>

          {/* Card Content */}
          <CardContent className="flex flex-col gap-y-6 pt-6 md:gap-y-10">
            {/* Product Name */}
            <div className="flex flex-col gap-y-2">
              <Label className="md:text-base">Name</Label>
              <Input
                type="text"
                placeholder="Name of your product"
                className="w-full"
              />
            </div>

            {/* Product Category */}
            <div className="flex flex-col gap-y-2">
              <Label className="md:text-base">Category</Label>
              <SelectCategory />
            </div>

            {/* Product Price */}
            <div className="flex flex-col gap-y-2">
              <Label className="md:text-base">Price</Label>
              <Input type="number" placeholder="$29" className="w-full px-3" />
            </div>

            {/* Small Summary */}
            <div className="flex flex-col gap-y-2">
              <Label className="md:text-base">Small Summary</Label>
              <Textarea
                placeholder="Please describe your product shortly right here.."
                className="w-full min-h-[100px]"
              />
            </div>

            {/* Full Product Description */}
            <div className="flex flex-col gap-y-2">
              <Label className="md:text-base">Description</Label>
              <TipTapEditor />
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}
