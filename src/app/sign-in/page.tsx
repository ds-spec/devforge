"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FloatingInput from "./floating-input";

const formSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Invalid email address" })),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
export type FormData = z.infer<typeof formSchema>;
export default function SignIn() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  console.log(form);
  const onSubmit = async (data: FormData) => {
    console.log("submitting form", data);
    const { email, password } = data;

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Network Response was not ok!");
      }
      const result = await response.json();
      console.log(result, "Registered user");
      toast("Registration Successful!");
    } catch (error) {
      console.error("Registration Failed:", error);
      toast("Registration Failed");
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-white text-3xl tracking-wide">Log in or sign up</h1>
        <p></p>
      </div>
      <Form {...form}>
        <form
          className="flex flex-col gap-4 items-center justify-center w-[20vw]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FloatingInput form={form} label="Email Address" />
          <FloatingInput form={form} label="Password" />
          <Button
            type="submit"
            className="w-full cursor-pointer rounded-full py-6 text-md bg-white text-black hover:bg-gray-200"
          >
            Submit
          </Button>
          <div className="flex items-center w-full">
            <div className="flex-grow border-t border-neutral-600"></div>
            <span className="text-neutral-500 px-2">OR</span>
            <div className="flex-grow border-t border-neutral-600"></div>
          </div>
        </form>
      </Form>
    </div>
  );
}
