import React from "react";
import Image from "next/image";

export const CardProject = () => {
  return (
    <div className="backdrop-blur[2px] flex h-full w-fit max-w-[505px] flex-col items-start overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition duration-150 hover:border-cosmic-blue dark:border-dark-gray-200 dark:bg-gray-900 hover:dark:border-cosmic-blue">
      <Image src={"/assets/wbsite.webp"} alt="" width={100} height={100} />
      <div></div>
      <div className="flex flex-col items-start gap-y-2 p-6 lg:gap-y-4">
        <h3 className="text-[24px] font-extrabold leading-[29.05px] text-gray-700 dark:text-gray-200  lg:text-[28px] lg:leading-8">
          Company websites
        </h3>
        <p className="text-base text-gray-500 md:text-[20px] md:leading-[30px]">
          Manage content efficiently and equip your entire team.
        </p>
      </div>
    </div>
  );
};
