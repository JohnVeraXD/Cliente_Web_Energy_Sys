import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Loader } from "@/widgets";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Energy System",
  description: "Sistema de monitoreo de energia electrica en el hogar",
};

export default function RootLayout({ children }) {
  //variable para mostrar el loader cuando carga una peticion
  const [load, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {load ? <Loader /> : children}
        </div>
      </body>
    </html>
  );
}
