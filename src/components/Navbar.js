import localFont from "next/font/local";
import Image from "next/image";

const zaptron = localFont({ src: "../../public/Zaptron-Regular.otf" })


function Navbar() {
  return (
    <nav className={`${zaptron.className} bg-black text-white items-center flex justify-between px-16 top-0 sticky`}>
      <div className="flex items-center justify-center gap-3">
        <Image className="pb-4" width={55} height={55} src={"./favicon.svg"} alt="logo" />
        <h1 className="h-fit text-2xl text-primary">Esport<span className="text-secondary">egy</span></h1>
      </div>
      <ul className="flex items-center list-none gap-8">
        <li>
          <button className="">Home</button>
        </li>
        <li>
          <button className="border-2 py-3 px-4">Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
