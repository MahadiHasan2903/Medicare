import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/faq-img.png";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import Features from "../components/Features/Features";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testomonials/Testimonial";

const Home = () => {
  return (
    <>
      {/* ==========Hero section  start========== */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row  gap-[90px]  items-center justify-between">
            {/* ==========Hero content ========== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text_para">
                  Empowering patients to easily schedule appointments,
                  connecting them with caring and skilled healthcare
                  professionals for optimal wellness.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>

              {/* ==========Hero counter ========== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    50+
                  </h2>
                  <span className="w-[100px] h-3 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20+
                  </h2>
                  <span className="w-[100px] h-3 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-3 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* ==========Hero counter ========== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="doctor" />
              </div>
              <div className="mt-[30px]">
                <img
                  src={heroImg02}
                  alt="doctor"
                  className="w-full mb-[30px]"
                />
                <img src={heroImg03} alt="doctor" className="w-full " />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Hero section  end========== */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="text-center heading">
              Providing the best medical services
            </h2>
            <p className="text-center text_para">
              World class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                <img src={icon01} alt="icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyonce. Our health System offers
                  unmatched, expert health care. From the lab to the clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="w-6 h-5 group-hover:text-white" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                <img src={icon02} alt="icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyonce. Our health System offers
                  unmatched, expert health care. From the lab to the clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="w-6 h-5 group-hover:text-white" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center ">
                <img src={icon03} alt="icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyonce. Our health System offers
                  unmatched, expert health care. From the lab to the clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="w-6 h-5 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* ==========Service section  start========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading">Our Medical Services</h2>
            <p className="text-center text_para">
              World class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* ==========Service section  end========== */}

      <Features />

      {/* ==========Doctor section  start========== */}
      <section>
        <div className="conatiner">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text-para text-center">
              World class care for eeryone. Our health System offers unmatched
              exper healt care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* ==========Doctor section  end========== */}

      {/* ==========FAQ section  start========== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="faqImg" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* ==========FAQ section  end========== */}

      {/* ==========Testomonial section  start========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading">What our patients say</h2>
            <p className="text-center text_para">
              World class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* ==========Testomonial section  end========== */}
    </>
  );
};

export default Home;
