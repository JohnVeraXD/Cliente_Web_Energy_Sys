import React from "react";
import BarraNavegacion from "@/components/layouts/BarraNavegacion";
import Footer from "@/components/layouts/Footer";
import "@/styles/globals.css";
import SimpleNavbar from "@/components/layouts/SimpleNavar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Principal from "./Principal/Principal";
import { Dialog_Error, Loader } from '@/widgets';
import { useState, useEffect } from "react";

export default function Home() {
  //variable para mostrar el loader cuando carga una peticion
  const [load, setLoader] = useState(false);
  return (
    <DefaultLayout>
      <Principal />
    </DefaultLayout>
  );
}
