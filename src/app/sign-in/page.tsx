import { Form } from "@/components/ui/form";
import { z } from "zod";

export default function SignIn() {
  const formSchema = z.object({
    username: z
      .string()
      .min(2, { message: "Username must be atleast 2 characters" }),
    email: z.email()
  });
  return <></>;
}
