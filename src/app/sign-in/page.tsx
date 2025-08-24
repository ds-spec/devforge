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
type FormData = z.infer<typeof formSchema>;
export default function SignIn() {
  const form = useForm({
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
          className="w-full flex flex-col items-center justify-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative w-[20vw]">
                {/* <FormLabel className="absolute text-white translate-y-0 transition-transform duration-300 peer-placeholder-shown:-translate-y-4">
                  Email
                </FormLabel> */}
                <FormControl className="p-6">
                  <Input
                    className="relative text-white rounded-full text-xl peer"
                    placeholder="Email Address"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative w-[20vw]">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="text-white rounded-full p-6"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
