import Link from "next/link";



const Navigation = () => {
  return (
    <>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/services">Servicios</Link>
        <Link href="/contact">Contacto</Link>
      </nav>
    </>
  );
};

export default Navigation;
