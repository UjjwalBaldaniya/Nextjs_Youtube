"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signinFields } from "@/constants/authFields";
import { formSchema } from "@/schema/auth.schema";
import { signinService } from "@/services/auth.services";
import FormInput from "@/shared/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Signin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await signinService(values);
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
