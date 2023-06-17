const Navbar = () => {
  return (
    <nav className="border-b border-neutral-300">
      <div className="container flex items-center h-20 justify-between md:px-0 px-5">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <div className="md:flex hidden">
          <ul className="flex items-center">
            <li className="mx-4">Home</li>
            <li className="mx-4">About</li>
            <li className="mx-4">Contact</li>
          </ul>
        </div>
        <div>ICON</div>
      </div>
    </nav>
  )
}

export default Navbar