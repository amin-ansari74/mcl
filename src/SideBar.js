import Link from "./Link";

function SideBar() {
  const links = [
    { label: "mcl-info", path: "/" },
    { label: "trophies", path: "/trophies" },
    { label: "rankings", path: "/rankings" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
}

export default SideBar;
