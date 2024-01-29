"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  name: z.string(),
  url: z.string(),
});

interface AboutmeElements {
  id: string;
  name: string;
  url: string;
}

export default function ContactForm({
  className,
  ...props
}: {
  className?: string;
}) {
  const [fieldData, setFieldData] = useState<AboutmeElements[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      url: "",
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

  fetch("/api/contact")
    .then((res) => res.json())
    .then((data) => {
      if (data.length) {
        setFieldData(data);
      } else if (data.error) {
        setFieldData([]);
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Ha ocurrido un error. Intente de nuevo por favor");
    });

  return (
    <Form {...form}>
      <form className={className} onSubmit={form.handleSubmit(onSubmit)}>
        {fieldData.length ? (
          fieldData.map((el) => (
            <FormField
              key={el.id}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{el.name}</FormLabel>
                  <FormControl>
                    <Input placeholder={el.url} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))
        ) : (
          <>
            <p>No data</p>
          </>
        )}
        <Button className="mt-4" type="submit">
          Actualizar
        </Button>
      </form>
    </Form>
  );
}
