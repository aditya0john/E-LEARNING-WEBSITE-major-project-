import Navbar2 from "./Navbar2";

export default function Layout2({ children }) {
  return (
    <>
      <div className="bg-white">
        <Navbar2 />
        <div className="bg-white p-1 body">{children}</div>
      </div>
    </>
  );
}
