import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadPicture from "@/components/UploadPicture";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-max bg-second p-6 rounded-md border-2">
        <Tabs defaultValue="pictures" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="pictures">Fotos</TabsTrigger>
          </TabsList>
          <TabsContent value="pictures">
            <UploadPicture />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
