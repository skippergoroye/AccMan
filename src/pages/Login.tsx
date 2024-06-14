"use client";

import Logo from "../assets/PNG/logo.png";
import { OnBoardingLayout } from "@/Layout";
import LadyImg from "../assets/PNG/Lady.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Enter a valid email address.").min(1, {
    message: "Email is required.",
  }),
  password: z.string().min(1, { message: "Must have at least 1 character" }),
});

const Login = () => {
  // const [showPassword, setShowPassword] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <OnBoardingLayout
      imgUrl={LadyImg}
      feedback="“I love how intuitive AccMan interface is, making it easy to navigate and manage multiple accounts seamlessly.”"
      author="Idris Alabi"
    >
      <div className="w-5/6 lg:w-[70%]">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="h-[20px] md:h-[34px]" />
        </NavLink>
        <h1 className="md:text-4xl text-2xl font-medium leading-[40px] mt-7">
          Welcome back!
        </h1>
        <p className="mt-px text-base font-normal text-neutral-600">
          Sign in to your account
        </p>
        <Form {...form}>
          <form className="mt-10 space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      className="border-neutral-300 focus:outline-none focus-visible:ring-0"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Password"
                      className="border-neutral-300 focus:outline-none focus-visible:ring-0"
                      // type={showPassword ? "text" : "password"}
                      {...field}
                      // rightIcon={
                      //   showPassword ? (
                      //     <Eye
                      //       className="cursor-pointer"
                      //       onClick={() => setShowPassword(!showPassword)}
                      //     />
                      //   ) : (
                      //     <EyeOff
                      //       className="cursor-pointer"
                      //       onClick={() => setShowPassword(!showPassword)}
                      //     />
                      //   )
                      // }
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <p className="text-purple-600 font-semibold text-sm mt-2">
            <Link to="/reset-password" className="text-primary">
              Forgot password?
            </Link>
          </p>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            className="bg-violet-600 hover:bg-violet-400 text-white w-full h-12 mt-6"
          >
            Sign In
          </Button>
          <p className="mt-4 text-sm text-center">
            Don’t have an account ?{" "}
            <span className="text-violet-600 font-semibold">
              Create an account
            </span>
          </p>
        </Form>
      </div>
    </OnBoardingLayout>
  );
};

export default Login;
