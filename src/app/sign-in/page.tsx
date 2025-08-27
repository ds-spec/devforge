"use client";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import FloatingInput from "./floating-input";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FormState } from "react-hook-form";

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
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("submitting form", data);
    const { email, password } = data;
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
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
      setIsLoading(false);
      form.reset();
    } catch (error) {
      console.error("Registration Failed:", error);
      toast("Registration Failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={`w-full flex flex-col items-center justify-center gap-4 ${
        isLoading ? "opacity-25" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-white text-3xl tracking-wide">Log in or sign up</h1>
        <p className="text-sm text-neutral-500 max-w-sm text-center">
          Your Personalised Research Assistant. Get mind maps, citations and
          more.
        </p>
      </div>
      <Form {...form}>
        <div className="w-full flex justify-center items-center">
          <form
            className="flex flex-col gap-4 items-center px-4 justify-center w-full max-w-[400px] md:max-w-sm mt-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FloatingInput form={form} label="Email Address" type="email" />
            <FloatingInput form={form} label="Password" type="password" />
            <Button
              type="submit"
              className="w-full cursor-pointer rounded-full py-6 text-md bg-white text-black hover:bg-gray-200"
            >
              Continue
            </Button>
            <div className="flex items-center w-full">
              <div className="flex-grow border-t border-neutral-600"></div>
              <span className="text-neutral-500 px-2">OR</span>
              <div className="flex-grow border-t border-neutral-600"></div>
            </div>
            <div className="w-full flex flex-col items-center">
              <Button
                type="button"
                onClick={() => signIn("google")}
                className="w-full cursor-pointer rounded-full border border-neutral-600 py-6 text-md bg-transparent text-white hover:bg-neutral-800"
              >
                Continue with Google
              </Button>
            </div>
          </form>
        </div>
      </Form>
    </div>
  );
}
