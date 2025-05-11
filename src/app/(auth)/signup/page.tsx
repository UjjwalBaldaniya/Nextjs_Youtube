"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signupFields } from "@/constants/authFields";
import { signupSchema } from "@/schema/auth.schema";
import { signupService } from "@/services/auth.services";
import FormInput from "@/shared/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Signup = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      username: "",
      password: "",
      avatar: "",
      coverImage: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signupSchema>) => {
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("username", values.username);
    formData.append("password", values.password);

    if (values.avatar && values.avatar[0]) {
      formData.append("avatar", values.avatar[0]);
    }

    if (values.coverImage && values.coverImage[0]) {
      formData.append("coverImage", values.coverImage[0]);
    }

    await signupService(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/3 my-7">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full max-w-md"
          >
            {signupFields.map((field, index) => (
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

export default Signup;
