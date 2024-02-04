"use client";

import React, { useState } from "react";
import { uploadBytes, ref } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  {
    name: "Moda",
    href: "moda",
  },
  {
    name: "Deportes",
    href: "deportes",
  },
  {
    name: "Fotoproductos",
    href: "fotoproductos",
  },
  {
    name: "Retratos",
    href: "retratos",
  },
  {
    name: "Gastronomía",
    href: "gastronomia",
  },
  {
    name: "Highlights",
    href: "highlights",
  },
];

export default function UploadPicture() {
  const [file, setFile] = useState<File>();
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function imageInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
      return;
    }
  }

  function selectChangeHandler(str: string) {
    setCategory(str);
  }

  async function submit() {
    setLoading(true);
    if (!category.length) {
      setLoading(false);
      return alert("Seleccione una categoria");
    }
    if (!file) {
      setLoading(false);
      return alert("Seleccione un archivo primero");
    }
    try {
      let imgRef = ref(storage, `images/${category}/${file.name}`);
      let upref = await uploadBytes(imgRef, file);
      if (upref) {
        setFile(undefined);
        setCategory("");
        setLoading(false);
        return alert("Imagen subida con exito!");
      }
      return alert("Ha ocurrido un error, intente de nuevo por favor");
    } catch (err) {
      console.error(err);
      return alert("Ha ocurrido un error, intente de nuevo por favor");
    }
  }

  return (
    <div className="flex flex-col items-center justify-around">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center py-5">
        Cargar Imagen
      </h1>
      <div className="w-fit h-fit p-5 flex flex-col items-center rounded-md gap-5">
        {loading ? (
          <div className="flex flex-row items-center justify-center">
            <Loader2 className="animate-spin inline mr-1" /> Cargando
          </div>
        ) : (
          <>
            <Input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              onChange={imageInputHandler}
              className="bg-third"
              required
            />
            <Select onValueChange={selectChangeHandler}>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((el, i) => {
                  return (
                    <SelectItem value={el.href} key={i}>
                      {el.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              className="bg-third"
              onClick={async () => await submit()}
            >
              Subir
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
