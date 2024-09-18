"use client";
import Navbar from "../Navbar/page";
import { Outfit } from "next/font/google";
import Image from "next/image";
import slider_img from "../images/png/slider_img.png";
import StackGrid, { transitions } from "react-stack-grid";
import Link from "next/link";
import { GetData } from "../Context/Context";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Page = () => {
  const { scaleDown } = transitions;
  const { getprojectsdata } = GetData();

  return (
    <>
      <div className="bg_img bg-fixed bg-no-repeat min-h-screen bg-cover bg-center pt-[50px]">
        <div>
          <Navbar />
        </div>
        <div className=" pt-[58px]">
          <div className="container mx-auto px-3">
            <div>
              <StackGrid
                columnWidth={300}
                duration={600}
                gutterWidth={15}
                gutterHeight={15}
                appear={scaleDown.appear}
                appeared={scaleDown.appeared}
                enter={scaleDown.enter}
                entered={scaleDown.entered}
                leaved={scaleDown.leaved}
              >
                {getprojectsdata.map((value, index, array) => {
                  return (
                    <div key={index}>
                      <Link
                        href={{
                          pathname: "./workbook/detailspage",
                          query: { title: value.title },
                        }}
                      >
                        <div>
                          <Image
                            src={value.cubeImg}
                            alt="slider_img"
                            width={value.width || 700}
                            height={value.height || 500}
                            priority={false}
                          />
                          <h5
                            className={`${outfit.className} text-white text-base font-semibold mt-4`}
                          >
                            {value.title}
                          </h5>
                          <p className=" text-[11px] opacity-75 text-white font-normal mt-1">
                            {value.category_name}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </StackGrid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
