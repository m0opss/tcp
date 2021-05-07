import Link from "next/link";

export default function A({ href, className, children }) {
  return (
    <Link href={href}>
      <a className={className != undefined ? className : ""}>{children}</a>
    </Link>
  );
}
