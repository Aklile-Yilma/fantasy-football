import FantacyHome from "@/components/home/FantacyHome";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-background font-[family-name:var(--font-geist-sans)]">
      <FantacyHome />
      <Toaster />
    </div>
  );
}
