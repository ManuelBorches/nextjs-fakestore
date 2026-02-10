"use client";

import { useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ProductsSearch() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFilter() {
    const category = inputRef.current?.value.trim() || "";
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category.toLowerCase());
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    replace(pathname);
  };

  return (
    <div className="flex max-w-xl items-center gap-2 mb-8">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="input-search" className="hidden md:block">
          Products
        </FieldLabel>

        <Input
          ref={inputRef}
          id="input-search"
          type="search"
          placeholder="Filter by category..."
          defaultValue={searchParams.get("category")?.toString()}
          onKeyDown={(e) => e.key === "Enter" && handleFilter()}
        />
        <Button onClick={handleFilter}>Filter</Button>
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
      </Field>
    </div>
  );
}
