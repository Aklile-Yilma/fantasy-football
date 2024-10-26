import FantacyHome from "@/components/home/FantacyHome";
import NavBar from "@/components/layout/NavBar";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen overflow-y-scroll p-8 pb-20 gap-16 sm:p-20 bg-background font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <FantacyHome />
      <Toaster />
    </div>
  );
}
