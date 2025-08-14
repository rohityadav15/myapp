import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-amber-300 flex justify-between px-5 items-center">
      <figure className="font-extrabobold text-2x1">Brouser Router</figure>
      <ul className="flex gap-5 font-semibold">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4">
          <Link to="/Careers">Careers</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
