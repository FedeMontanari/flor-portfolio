"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "El ususario debe contener al menos 2 caracteres",
    })
    .max(50, {
      message: "El usuario no puede contener más de 50 caractreres",
    }),
  password: z
    .string()
    .min(2, {
      message: "La contraseña debe contener al menos 2 caracteres",
    })
    .max(50, {
      message: "La contraseña no puede contener más de 50 caractreres",
    }),
});

export default function LoginForm({
  className,
  ...props
}: {
  className: string;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify(values),
    });
    if (res.status == 200) {
      router.replace("/dashboard");
    }
  }

  return (
    <Form {...form}>
      <form className={className} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese su usuario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese su contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-4" type="submit">
          Ingresar
        </Button>
      </form>
    </Form>
  );
}
