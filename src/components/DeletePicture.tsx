"use client";

import { MouseEvent, useEffect, useState } from "react";
import {
  ref,
  listAll,
  StorageReference,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "@/lib/firebase";
import { AlertCircle, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Card } from "./ui/card";

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

export default function DeletePicture() {
  const [category, setCategory] = useState<string>("");
  const [catLoading, setCatLoading] = useState<boolean>(false);
  const [list, setList] = useState<StorageReference[]>([]);
  const [uriList, setUriList] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setCatLoading(true);
        setUriList([]);
        let imgsRef = ref(storage, `images/${category}`);
        const { items } = await listAll(imgsRef);
        setList(items);
      } catch (err) {
        console.error(err);
        return alert("Ha ocurrido un error, intente de nuevo por favor");
      }
      setCatLoading(false);
    })();
  }, [category]);

  useEffect(() => {
    (async () => {
      const arr = list.map(async (el) => {
        const urlPromise = await getDownloadURL(el);
        return urlPromise;
      });
      setUriList(await Promise.all(arr));
    })();
  }, [list]);

  function selectChangeHandler(str: string) {
    setCategory(str);
  }

  function deleteHandler(e: MouseEvent<HTMLButtonElement>) {
    let cat = category;
    //@ts-ignore
    deleteObject(list[e.target.id])
      .then(() => {
        setCategory("");
      })
      .catch((er) => console.error(er));
    setTimeout(() => setCategory(cat), 1000);
  }

  return (
    <div className="flex flex-col items-center justify-around">
      <h1 className="scroll-m-20 py-5 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Eliminar Imagen
      </h1>
      <div className="flex h-fit w-fit flex-col items-center gap-5 rounded-md p-5">
        <>
          <Select onValueChange={selectChangeHandler}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione una Categoria" />
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
          {catLoading ? (
            <div className="flex flex-row items-center justify-center">
              <Loader2 className="mr-1 inline animate-spin" /> Cargando
            </div>
          ) : (
            <>
              {uriList.length ? (
                <>
                  {uriList.map((url, i) => {
                    return (
                      <AlertDialog key={i}>
                        <AlertDialogTrigger>
                          <Card
                            className="size-40 border-destructive transition-transform duration-500 hover:scale-110 hover:cursor-pointer hover:border-2 hover:shadow-lg hover:shadow-destructive"
                            style={{
                              backgroundImage: `url(${url})`,
                              backgroundSize: "cover",
                            }}
                          ></Card>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              <AlertCircle className="inline text-destructive" />{" "}
                              Desea eliminar esta imagen?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Esta acción no se puede deshacer, al aceptar esta
                              imagen se eliminará del servidor
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                              id={i.toString()}
                              onClick={deleteHandler}
                              className="bg-destructive"
                            >
                              Aceptar
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    );
                  })}
                </>
              ) : (
                <p>No se encontraron imagenes</p>
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
}
