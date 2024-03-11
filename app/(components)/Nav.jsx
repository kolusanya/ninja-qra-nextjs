// import {
//   faAdd,
//   faFileEdit,
//   faHome,
//   faPlus,
//   faRectangleAd,
//   faTicket,
//   faVolumeControlPhone,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";

// const Nav = () => {
//   return (
//     <nav className="flex justify-between bg-nav p-4 w-full">
//       <div className="flex items-center space-x-4">
//         <Link href="/">
//           <FontAwesomeIcon icon={faHome} className="icon" />
//         </Link>
//         <Link href="/RiskMainPage/new">
//           <FontAwesomeIcon icon={faAdd} className="icon" />
//         </Link>
//         <Link href="/RiskMainPage/new">
//           <FontAwesomeIcon icon={faFileEdit} className="icon" />
//         </Link>
//       </div>
//       <div>
//         <p className=" text-default-text">info@tinfo.com</p>
//       </div>
//     </nav>
//   );
// };

//export default Nav;
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
// import Image from "next/image";
// import Logo from "./dojo-logo.png";

export default function Nav() {
  return (
    <nav>
      {/* <Image
        src={Logo}
        alt="Dojo Helpdesk logo"
        width={70}
        placeholder="blur"
        quality={100}
      /> */}
      <Link href="/">
        <FontAwesomeIcon icon={faHome} className="" />
      </Link>

      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
