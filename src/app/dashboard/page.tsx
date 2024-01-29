import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutmeForm from "@/components/AboutmeForm";
import ContactForm from "@/components/ContactForm";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-max bg-second p-6 rounded-md border-2">
        <Tabs defaultValue="pictures" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="pictures">Fotos</TabsTrigger>
            <TabsTrigger value="aboutme">Sobre Mi</TabsTrigger>
            <TabsTrigger value="contact">Contacto</TabsTrigger>
          </TabsList>
          <TabsContent value="pictures">
            <h4>Editar sección Albums</h4>
          </TabsContent>
          <TabsContent value="aboutme">
            <AboutmeForm />
          </TabsContent>
          <TabsContent value="contact">
            <ContactForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
