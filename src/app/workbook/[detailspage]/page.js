"use client";
import { RingLoader } from "react-spinners";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { GetData } from "@/app/Context/Context";
import { useState } from "react";
import Navbar from "../../Navbar/page";
import Image from "next/image";
const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const page = (dataa) => {
  const { getprojectsdata } = GetData();
  // react-hooks/rules-of-hooks
  const [loading, setloading] = useState(true);
  return (
    <>
      <div
        className={`bg_img bg-fixed bg-no-repeat min-h-screen bg-cover bg-center ${raleway.className} pb-[30px] md:pb-[50px]`}
      >
        {/* {loading && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "200",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              animation: "pulseBackground 2s infinite",
            }}
          >
            <div>
              <RingLoader
                color={"#ffffff"}
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </div>
        )} */}
        <div className="py-[30px] md:py-[50px]">
          <Navbar />
        </div>
        <div className=" container mx-auto px-3  xl:max-w-[1200px]">
          {getprojectsdata
            .filter((value, index, array) => {
              return (
                value.title.toLowerCase() ===
                dataa.searchParams.title.toLowerCase()
              );
            })
            .map((value, index) => {
              return (
                <div key={index}>
                  <div>
                    <div className=" flex flex-wrap gap-8 lg:gap-0 lg:flex-nowrap flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between">
                      <div className=" w-full md:w-10/12 lg:w-9/12">
                        <h1 className=" text-[22px] text-white font-semibold">
                          {value.title}
                        </h1>
                        <p className=" text-sm sm:text-base font-normal text-white mt-3">
                          {value.description}
                        </p>
                      </div>
                      <div className=" w-6/12 sm:w-4/12 lg:w-2/12">
                        <div className=" bg-white ">
                          {/* // @next/next/no-img-element */}
                          <img src={value.logo} alt="logo" />
                        </div>
                        <div className=" mt-5 text-end">
                          <Link
                            className=" text-[#3CFF00] text-base font-normal"
                            href={value.livelink}
                          >{`>> Visit Website`}</Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex gap-4 flex-wrap">
                      <div className=" mt-[50px]">
                        {value.frameworks.map((value, index) => {
                          console.log(value);
                          return (
                            <p
                              key={index}
                              className=" uppercase text-base text-white font-semibold bg-[#FFFFFF3D] rounded-[50px] px-4 py-1"
                            >
                              {value}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className=" mt-[30px] md:mt-[50px]">
                    {/* <img
                      className="w-full"
                      src={value.detailsimg}
                      alt={value.title}
                    /> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default page;
