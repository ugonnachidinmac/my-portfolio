import React from "react";
import { Image } from "cloudinary-react";

const Portfolio = () => {
  return (
    <section className="bg-[#080707] text-white w-full flex flex-col px-6 md:px-10 lg:px-20 py-[105px]">
      <h1 className="text-[24px]">
        A Little More About <span className="text-yellow-400">Me</span>
      </h1>
      <p>
        When I’m not designing websites, you’ll find me exploring design trends,
        learning new coding skills, or creating fun projects. I love
        experimenting with colors, typography, and layouts to craft unique web
        experiences.
      </p>
      <h2 className="text-[30px] mt-[20px] mb-[25px]">Check it out 🎨✨</h2>

      <div className="w-full flex flex-col gap-[35px]">
        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-[50px]">
          <div className="w-full lg:w-[400px] relative group">
            <a
              href="https://marviefoodslandingpg.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-full rounded-lg shadow-lg"
                cloudName="dqtyrjpeh"
                publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1739803118/Marvie_ve2you.png"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-lg font-bold transition-opacity">
                <p><span className="text-yellow-400">Click</span>  Me</p>
              </div>
            </a>
          </div>

          <div className="w-full lg:w-[400px] relative group">
            <a
              href="https://agrowebpg.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >

              
              <Image
                className="w-full rounded-lg shadow-lg"
                cloudName="dqtyrjpeh"
                publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1739802972/FarmSol_phd7qp.png"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-lg font-bold transition-opacity">
                <p><span className="text-yellow-400">Click</span>  Me</p>
              </div>
            </a>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center gap-[50px]">
          <div className="w-full lg:w-[400px] relative group">
            <a
              href="https://ecommerce-xi-two-29.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-full rounded-lg shadow-lg"
                cloudName="dqtyrjpeh"
                publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1739802970/Furniro_xza0ma.png"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-lg font-bold transition-opacity">
                <p><span className="text-yellow-400">Click</span>  Me</p>
              </div>
            </a>
          </div>

          <div className="w-full lg:w-[400px] relative group">
            <a
              href="https://agritechlink.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-full rounded-lg shadow-lg"
                cloudName="dqtyrjpeh"
                publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1739802972/Agriculture_f9beoe.png"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-lg font-bold transition-opacity">
                <p><span className="text-yellow-400">Click</span>  Me</p>
                
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
