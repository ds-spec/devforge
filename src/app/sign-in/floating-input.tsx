import { UseFormReturn } from "react-hook-form";
import { FormData } from "./page";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface InputProps {
  form: UseFormReturn<FormData>;
  label: string;
}

export default function FloatingInput({ form, label }: InputProps) {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem className="relative w-full">
          <FormControl className="p-6">
            <Input
              className="relative text-white rounded-full text-xl peer placeholder-transparent focus:!ring-transparent border border-gray-600 focus:border-white"
              placeholder=" "
              {...field}
            />
          </FormControl>
          <FormLabel className="absolute top-5 left-6  text-gray-600 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:text-gray-400  peer-focus:-top-2 peer-focus:text-sm peer-focus:px-1.5 peer-focus:bg-[#111112]">
            {label}
          </FormLabel>
        </FormItem>
      )}
    />
  );
}
