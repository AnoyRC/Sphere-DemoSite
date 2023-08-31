import LaunchApp from "./Navbar/LaunchApp";
import Logo from "./Navbar/Logo";
import NavMenu from "./Navbar/NavMenu";

export default function Navbar() {
  return (
    <div className=" bg-transparent w-full h-[76px] flex py-[16px] px-[112px] items-center justify-between border-b-[1px] border-[#E4EBFF]">
      <Logo />
      <NavMenu />
      <LaunchApp />
    </div>
  );
}
