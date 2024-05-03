import { Footer, Navbar } from "../components/index";
import DocumentImg from "../assets/PNG/documents.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <Navbar />

      <div className="pt-[120px] text-center flex flex-col items-center justify-center">
        <h1 className="font-bold text-[62px]">
          Unlock <span className="text-violet-300">Efficiency</span>.
        </h1>
        <h5 className="font-regular text-[32px] text-gray-600">
          Seamlessly Manage your Accounts Today!
        </h5>

        <div className="flex gap-2 mt-3">
          <NavLink
            to="/login"
            className="text-gray-700 bg-gray-50 border-2 border-slate-300  py-2 px-8 rounded-lg"
          >
            Learn More
          </NavLink>
          <NavLink
            to="/create-account"
            className="text-white bg-gray-700 py-2 px-8 rounded-lg"
          >
            Get Started
          </NavLink>
        </div>
        <div>
          <img
            src={DocumentImg}
            alt="home image"
            width={300}
            height={300}
            className="mt-12"
          />
        </div>
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
