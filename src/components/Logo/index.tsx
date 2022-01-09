import Image from "next/image";
import Link from "next/link";
import LogoImg from "./logo_transparent.png";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <a className="root">
        <Image src={LogoImg} width={200} height={200} alt="logo" />
        <style jsx>{`
          .root {
            margin: 0 auto;
          }
        `}</style>
      </a>
    </Link>
  );
}
