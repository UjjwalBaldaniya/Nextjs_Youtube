"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema } from "@/schema/auth.schema";
import FormInput from "@/shared/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signinFields = [
  {
    name: "username",
    label: "Email address or username",
    placeholder: "Email address or username",
    type: "string",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
  },
];

const Signin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("🚀 ~ onSubmit ~ values:", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full max-w-md"
          >
            {signinFields.map((field, index) => (
              <FormInput
                key={field.name || index}
                control={form.control}
                {...field}
              />
            ))}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
