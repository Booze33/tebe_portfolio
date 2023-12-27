import Theme from "../features/theme";

const Navbar = () => {
  return (
    <div className="fixed flex flex-row mt-0 justify-between items-center h-24">
      <div className="relative p-2 left-96 duration-100 dark:bg-slate-700 bg-gary-100 rounded-full">
        <a className="mx-2 text-xl" href="#">Features</a>
        <a className="mx-2 text-xl" href="#">About</a>
      </div>
      <Theme />
    </div>
  )
}

export default Navbar;
