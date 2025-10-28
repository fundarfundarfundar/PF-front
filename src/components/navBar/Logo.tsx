import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/images/shared/logo-fundar.webp"
        alt="Imagen de logo"
        width={220}
        height={220}
        className="hidden lg:block"
      />
    </>
  );
}
