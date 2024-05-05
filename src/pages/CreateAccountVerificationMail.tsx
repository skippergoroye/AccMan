import Logo from "../assets/PNG/logo.svg";
import VerifyImg from "../assets/PNG/envilope.png";
import { NavLink } from 'react-router-dom';

const CreateAccountVerificationMail = () => {
  return (
    <section className="bg-[#eef2ff] h-screen w-full">
      <div className="flex flex-col items-center pt-24 gap-8">
        <div className="lg:mb-8">
          <img
            src={Logo}
            alt="verification logo icon"
            width={130}
            height={34}
            
          />
        </div>
        <div className="bg-white lg:w-[754px] flex flex-col items-center rounded-xl pt-14 py-20 mx-6">
          <img src={VerifyImg} alt="email icon"  className="h-[45px] md:h-[90px] " />
          <div className="text-center p-2 pt-8 px-2">
            <p className="font-regular text-2 lg:text-10  text-[#444C66]">
              Dear Customer, your verification link has just been sent to your
              email address <NavLink to="" className="text-[#7C3AED] font-semibold">(jamessoon@gmail.com)</NavLink>. Click the link to verify your account.
            </p>
            <p className="pt-6 text-[#444C66]">Didn’t get the mail?
            <NavLink to="/reset-new-password" className="text-[#7C3AED] font-semibold"> Click to resend</NavLink> </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccountVerificationMail;
