import Image from "next/image";
import  NavbarComp  from "./components/NavbarComp";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <div className="w-screen">
    <NavbarComp/>
    <Feed/>
    </div>
  );
}
