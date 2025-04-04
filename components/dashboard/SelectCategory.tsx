"use client";

import { categoryItems } from "@/lib/categoryItem";
import { Card, CardHeader } from "../ui/card";
import { useState } from "react";

export default function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            onClick={() => setSelectedCategory(item.name)}
            className={
              selectedCategory === item.name
                ? "border-primary border-2"
                : "border-primary/10 border-2"
            }
          >
            <CardHeader>
              {item.image}
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
