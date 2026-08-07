export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-white text-2xl font-light">
          Olga PMU TJ
        </h1>

        <div className="hidden md:flex gap-8 text-white">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

      </div>
    </nav>
  );
}