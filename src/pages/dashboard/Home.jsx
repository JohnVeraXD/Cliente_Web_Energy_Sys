import React from "react";
import BarraNavegacion from "@/components/layouts/BarraNavegacion";
import Footer from "@/components/layouts/Footer";
import "@/styles/globals.css";
import SimpleNavbar from "@/components/layouts/SimpleNavar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Principal from "./Principal/Principal";

export default function Home() {
  return (
    <DefaultLayout>
        <Principal/>
    </DefaultLayout>
  );
}
