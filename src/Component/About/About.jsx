import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  return (
    <>
      <section className="bg-[#080707] text-white w-full flex flex-col   px-6 md:px-10 lg:px-20 py-[105px]">
        <div className="text-3xl lg:text-4xl md:text-4xl font-extrabold mb-8 flex items-center justify-center">
          <h1 className='text-center'>
            About Me <span className="text-yellow-400">(Web Designer)</span>{" "}
          </h1>
        </div>
        <div className="text-[24px] ml-[10px] mb-[15px]">
          <h3 className="text-left">
            Hi, I'm Chidinma – A Creative Web Designer!
          </h3>
        </div>
        <div className="text-center">
          <p className="mb-[10px]">
            I’m a{" "}
            <span className="font-bold text-[18px] italic">
              creative and detail-oriented web designer
            </span>{" "}
            dedicated to building visually appealing and highly functional
            websites that bring brands to life. My goal is to craft{" "}
            <span className="font-bold text-[18px] italic">
              engaging, user-friendly, and responsive
            </span>{" "}
            web experiences that help brands establish a strong online presence.
          </p>
          <p>
            I believe a website is more than just an online space—it’s a{" "}
            <span className="font-bold text-[18px] italic">
              digital identity
            </span>{" "}
            that speaks for your brand. Whether it’s a{" "}
            <span className="font-bold text-[18px] italic">
              personal portfolio, business website, or e-commerce store,{" "}
            </span>
            I bring creativity, technical skills, and problem-solving abilities
            to design platforms that{" "}
            <span className="font-bold text-[18px] italic">
              captivate, convert and leaves a lasting impact.
            </span>
          </p>
        </div>

        <div className="text-[24px] ml-[10px] mb-[15px] mt-[15px] underline decoration-4">
          <h2>What I Do Best</h2>
        </div>

        <div>
          <div className="flex items-center gap-[10px]">
            <IoIosCheckmarkCircleOutline />
            <p>
              Web Design & UI/UX – I design beautiful, clean, and modern
              websites that enhance user experience.
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <IoIosCheckmarkCircleOutline />
            <p>
              Front-End Development/Tools – I bring designs to life using HTML,
              CSS, JavaScript, React.js, and Tailwind CSS Others:.
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <IoIosCheckmarkCircleOutline />
            <p>
              Mobile-Responsive Design – Ensuring your website looks perfect on
              all devices (desktop, tablet, and mobile).
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <IoIosCheckmarkCircleOutline />
            <p>
              SEO & Performance Optimization – Creating fast-loading,
              SEO-friendly websites to boost visibility and engagement.
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <IoIosCheckmarkCircleOutline />
            <p>
              Branding & Visual Identity – I help businesses create a strong and
              consistent digital presence that aligns with their brand.
            </p>
          </div>
        </div>

        <div className="text-[24px] ml-[10px] mb-[15px] mt-[15px] underline decoration-4">
          <h2>My Approach:</h2>
        </div>

        <div>
          <div className="flex items-center gap-[10px]">
            <IoIosCheckmarkCircleOutline />
            <p class="">
              I believe that a great website is more than just visuals—it’s
              about storytelling, functionality, and a smooth user experience.
              By understanding your brand and target audience, I create digital
              solutions that align with your vision and business goals.
            </p>
          </div>
        </div>

        <div className="text-[24px] ml-[10px] mb-[15px] mt-[15px] underline decoration-4">
          <h2>Why Work With Me?</h2>
        </div>

        <div>
          <div className="flex items-center gap-[10px]">
            <IoIosCheckmarkCircleOutline />
            <p>
              <span className="font-bold">Creative & Detail-Oriented – </span>I
              bring fresh ideas and attention to detail to every project.
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <IoIosCheckmarkCircleOutline />
            <p>
              <span className="font-bold">Timely & Professional - </span>I
              respect deadlines and ensure smooth communication throughout the
              project.
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <IoIosCheckmarkCircleOutline />
            <p>
              <span className="font-bold">Client-Centric Approach – </span>Your
              satisfaction is my top priority. I work closely with clients to
              turn their vision into reality.
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <IoIosCheckmarkCircleOutline />
            <p>
              <span className="font-bold">Passion for Learning – </span>The
              digital world is constantly evolving, and I stay updated with the
              latest web design trends and technologies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
