import Image from "next/image";
import Link from "next/link";
import LogoImg from "./logo_transparent.png";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <a className="root">
        <Image src={LogoImg} alt="logo" />
        <style jsx>{`
          .root {
            width: 200px;
            height: 200px;
            margin: 0 auto;
          }
        `}</style>
      </a>
    </Link>
  );
}
