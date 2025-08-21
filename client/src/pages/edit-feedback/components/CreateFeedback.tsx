import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const CreateFeedback = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, category, description });
    // Handle form submission slogic here
  };

  return (
    <div className="flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-[2.5rem] rounded-lg bg-white p-8"
      >
        <h2 className="text-2xl font-bold text-[#3A4374]">
          Create New Feedback
        </h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="mb-1 block text-sm font-semibold text-[#3A4374]"
          >
            Feedback Title
          </label>
          <p className="mb-2 text-xs text-[#647196]">
            Add a short, descriptive headline
          </p>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-[3rem] w-full rounded-md border bg-[#F7F8FD] p-2 text-[#3A4374]"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="mb-1 block text-sm font-semibold text-[#3A4374]"
          >
            Category
          </label>
          <p className="mb-2 text-xs text-[#647196]">
            Choose a category for your feedback
          </p>
          <Select onValueChange={(value) => setCategory(value)}>
            <SelectTrigger className="h-[3rem] w-full rounded-md border bg-[#F7F8FD] p-2 text-left text-[#3A4374]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="w-full bg-red-300">
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="feature">Feature</SelectItem>
                <SelectItem value="ui">UI</SelectItem>
                <SelectItem value="ux">UX</SelectItem>
                <SelectItem value="enhancement">Enhancement</SelectItem>
                <SelectItem value="bug">Bug</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-semibold text-[#3A4374]"
          >
            Feedback Detail
          </label>
          <p className="mb-2 text-xs text-[#647196]">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-[7.5rem] bg-[#F7F8FD]"
            rows={4}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Button
            type="button"
            className="w-full rounded-md bg-[#3A4374] px-6 py-2 text-white hover:bg-[#3A4374]/90"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-md bg-[#AD1FEA] px-6 py-2 text-white hover:bg-[#AD1FEA]/90"
          >
            Add Feedback
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateFeedback;
