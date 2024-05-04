interface UserOnBoardingProps {
  feedback: string;
  imgUrl: string;
  author: string;
  children: React.ReactNode;
}

const UserOnBoarding = ({
  children,
  imgUrl,
  feedback,
  author,
}: UserOnBoardingProps) => {
  return (
    <main className="grid grid-cols-12 max-h-screen">
      <div className="hidden lg:flex overflow-hidden h-screen bg-violet-100 col-span-5 relative">
        <img
          src={imgUrl}
          alt="image url"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-10 left-10 py-6 px-4 bg-transparent/50 backdrop-blur-sm backdrop-filter bg-clip-padding w-[85%] rounded-xl">
          <div>
            <p className="text-xl font-normal text-white">{feedback}</p>
            <p className="mt-2 text-base italic font-normal text-white">
              {author}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen col-span-12 lg:col-span-7 overflow-y-hidden">
        {children}
      </div>
    </main>

    // <main className="flex justify-center items-center max-h-screen">
    //   <div className="hidden lg:flex overflow-hidden h-screen bg-violet-100 w-2/5">
    //     <img
    //       src={imgUrl}
    //       alt="image url"
    //       className="object-cover w-full h-full"
    //     />
    //   </div>
    //   <div className="flex items-center  h-screen w-3/5">
    //     {children}
    //   </div>
    // </main>
  );
};

export default UserOnBoarding;
