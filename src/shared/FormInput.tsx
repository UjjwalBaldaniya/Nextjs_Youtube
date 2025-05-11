import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormInputProps = {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
};

const FormInput = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormInputProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="mb-6">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            type={type}
            onChange={(e) => {
              if (type === "file") {
                field.onChange(e.target.files);
              } else {
                field.onChange(e.target.value);
              }
            }}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormInput;
