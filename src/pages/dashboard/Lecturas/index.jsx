import React from "react";
import "@/styles/globals.css";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Lecturas from "./Lecturas";
import { useState } from "react";

export default function Home() {
  //variable para mostrar el loader cuando carga una peticion
  const [load, setLoader] = useState(false);
  return (
    <DefaultLayout>
      <Lecturas />
    </DefaultLayout>
  );
}
