import { OnBoardingLayout } from "@/Layout";
import LadyImg from "../assets/PNG/Lady.png";

const Login = () => {
  return (
    <OnBoardingLayout
      imgUrl={LadyImg}
      feedback="“I love how intuitive AccMan interface is, making it easy to navigate and manage multiple accounts seamlessly.”"
      author="Idris Alabi"
    >
      <div>
        <h1>welcome</h1>
      </div>
    </OnBoardingLayout>
  );
};

export default Login;
