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
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  content: z.string(),
});

export default function AboutmeForm({
  className,
  ...props
}: {
  className?: string;
}) {
  const [fieldData, setFieldData] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/aboutme", {
      method: "put",
      body: JSON.stringify(values),
    });
    if (res.status == 200) {
      alert("success");
    }
  }

  fetch("/api/aboutme")
    .then((res) => res.json())
    .then((data) => {
      if (data.content) {
        setFieldData(data.content);
      } else if (data.error) {
        setFieldData("Ingrese el texto para la categoría Sobre Mi");
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Ha ocurrido un error. Intente de nuevo por favor");
    });

  return (
    <Form {...form}>
      <form className={className} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Editar sección Sobre Mi</FormLabel>
              <FormControl>
                <Textarea placeholder={fieldData} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-4" type="submit">
          Actualizar
        </Button>
      </form>
    </Form>
  );
}
