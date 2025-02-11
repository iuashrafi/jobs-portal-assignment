"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const FilterJobs = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`?query=${search}`);
  };

  return (
    <div className="mt-4 flex">
      <div className="flex">
        <Input
          type="text"
          placeholder="Software Engineer"
          className="rounded-full px-4 max-w-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch} variant={"outline"}>
          <Search />
        </Button>
      </div>
    </div>
  );
};

export default FilterJobs;
