import Link from "next/link";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Navigation = () => {
  return (
    <>
      <nav>
        {links.map(({ label, path }) => (
          <Link href={path} key={label}>
            {label}
          </Link>
        ))}
      </nav>

      <style jsx>{`
          h1 {
            color: orange;
          }
          p {
            color: yellow;
          }
          .container {
            background-color: blue;
          }
      `}</style>
    </>
  );
};

export default Navigation;
