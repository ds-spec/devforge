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
  type: string;
}

export default function FloatingInput({ form, label, type }: InputProps) {
  return (
    <FormField
      control={form.control}
      name={type === "email" ? "email" : "password"}
      render={({ field }) => (
        <FormItem className="relative w-full">
          <FormControl className="p-6">
            <Input
              type={type === "email" ? "text" : "password"}
              className="relative text-white rounded-full text-xl peer placeholder-transparent focus:!ring-transparent border border-gray-600 focus:border-white"
              placeholder=" "
              {...field}
            />
          </FormControl>
          <FormLabel
            className={`absolute left-6 text-gray-600 transition-all duration-300 ${
              field.value
                ? "text-sm -top-2 px-1.5 bg-[#111112] text-gray-400"
                : "top-3 text-lg"
            } peer-focus:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:px-1.5 peer-focus:bg-[#111112]`}
          >
            {label}
          </FormLabel>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
