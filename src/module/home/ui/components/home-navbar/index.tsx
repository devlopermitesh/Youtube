import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import YoutubeIcon from "@/../public/social-06-512.svg";
import SearchBar from "./SearchBar";
import MicButton from "./mic-button";
import AuthButton from "@/module/auth/ui/components/auth-button";

const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background text-foreground px-4 flex items-center justify-between border-b">
      {/*  Menu + Logo */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <Image src={YoutubeIcon} alt="Logo" height={20} width={40} />
            <p className="text-xl font-semibold tracking-tight">YouTube</p>
          </div>
        </Link>
      </div>

      {/*  Search + Mic */}
      <div className="flex flex-1 justify-center max-w-[720px] gap-2 px-4">
        <SearchBar />
        <MicButton />
      </div>

      {/*  Auth Button */}
      <div className="flex items-center">
        <AuthButton />
      </div>
    </nav>
  );
};

export default HomeNavbar;
