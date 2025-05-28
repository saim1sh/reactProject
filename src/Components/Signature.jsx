import logo from "../assets/logo.svg";

function Signature() {
  return (
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
      <a href="#" className="flex items-center">
        <img src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Learn with Sumit
        </span>
      </a>
    </div>
  );
}

export default Signature;
