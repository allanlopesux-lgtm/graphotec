import { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">

      <Navbar />

      <main className="flex-1">

        {children}

      </main>

      <Footer />

    </div>
  );
}

export default Layout;