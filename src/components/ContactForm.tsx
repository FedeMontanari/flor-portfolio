"use client";

import { MoreHorizontal, PlusCircle } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Contact {
  id: string;
  name: string;
  url: string;
}

export default function ContactForm() {
  const [contactData, setContactData] = useState<Contact[]>([]);
  const [contact, setContact] = useState<Contact>({
    id: "",
    name: "",
    url: "",
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setContactData(data))
      .catch((err) => {
        console.error(err);
        alert("Un error ha ocurrido. Por favor intente de nuevo");
      });
  }, []);

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  function onOpenChange() {
    setShow(!show);
    setContact({
      name: "",
      id: "",
      url: "",
    });
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Table className="pt-3">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Dirección</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {contactData.map((el, i) => {
            return (
              <TableRow key={el.id}>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.url}</TableCell>
                <TableCell className="text-right">
                  <Dialog open={show} onOpenChange={onOpenChange}>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontal />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Seleccionar</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DialogTrigger asChild>
                          <DropdownMenuItem>Editar</DropdownMenuItem>
                        </DialogTrigger>
                        <DropdownMenuItem>Eliminar</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar Link</DialogTitle>
                        <DialogDescription>
                          Realize los cambios deseados y al finalizar presione
                          Guardar
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right">Nombre</Label>
                          <Input
                            placeholder={el.name}
                            id={el.id}
                            name="name"
                            value={contact.name}
                            className="col-span-3"
                            onChange={onInputChange}
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right">Dirección</Label>
                          <Input
                            placeholder={el.url}
                            id={el.id}
                            name="url"
                            value={contact.url}
                            className="col-span-3"
                            onChange={onInputChange}
                          />
                        </div>
                      </div>
                      <Button type="submit">Guardar</Button>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button variant="ghost" size="icon">
        <PlusCircle />
      </Button>
    </div>
  );
}
