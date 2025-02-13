"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const jobCategories = [
  { label: "Software Engineering", value: "SOFTWARE_ENGINEERING" },
  { label: "Data Science", value: "DATA_SCIENCE" },
  { label: "Design", value: "DESIGN" },
  { label: "Marketing", value: "MARKETING" },
  { label: "Product Management", value: "PRODUCT_MANAGEMENT" },
];

const FilterJobs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set("query", search);
    if (category) params.set("category", category);
    if (salaryRange) {
      params.set("minSalary", salaryRange[0].toString());
      params.set("maxSalary", salaryRange[1].toString());
    }

    router.push(`?${params.toString()}`);
  };
  return (
    <div className="mt-4 flex">
      <div className="flex flex-wrap gap-4">
        <Input
          type="text"
          placeholder="Software Engineer"
          className="rounded-xl px-4 w-[300px] min-h-11"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select onValueChange={setCategory}>
          <SelectTrigger className="w-[200px] rounded-xl min-h-11">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {jobCategories.map((job) => (
              <SelectItem key={job.value} value={job.value}>
                {job.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex flex-col w-64 space-y-2">
          <label className="text-sm font-medium">Salary Range</label>
          <Slider
            defaultValue={salaryRange}
            min={0}
            max={100}
            step={1}
            value={salaryRange}
            onValueChange={setSalaryRange}
          />
          <div className="flex justify-between text-xs mt-2 px-2">
            <span>{salaryRange[0]} lpa</span>
            <span>{salaryRange[1]} lpa</span>
          </div>
        </div>

        <Button
          onClick={handleSearch}
          variant={"primary"}
          className="rounded-xl min-h-11"
          size={"lg"}
        >
          Search <Search />
        </Button>
      </div>
    </div>
  );
};

export default FilterJobs;
