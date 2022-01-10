import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import LogoImg from "./logo_transparent.png";

type Props = {} & HTMLAttributes<HTMLDivElement>;

export default function Logo({ className, ...props }: Props) {
  return (
    <div className={clsx("root", className)} {...props}>
      <Link href="/" passHref>
        <a className="link">
          <Image src={LogoImg} width={134} height={134} alt="logo" />
        </a>
      </Link>
      <style jsx>{`
        .root {
          width: 100%;
        }
        .root .link {
          display: block;
          width: 134px;
          height: 134px;
          margin: 0 auto;
          padding: 8px;
        }
      `}</style>
    </div>
  );
}
