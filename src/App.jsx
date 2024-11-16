import Footer from "./components/Footer";
import Safety from "./assets/images/safety_guideline.png";
import Cust1 from "./assets/images/cust1.png";
import Cust2 from "./assets/images/cust2.png";
import Cust3 from "./assets/images/cust3.png";
import Capt1 from "./assets/images/capt1.png";
import Capt2 from "./assets/images/capt2.png";
import Capt3 from "./assets/images/capt3.png";
import React from "react";
import Header from "./components/Header";
import Heroimg from "./assets/images/heroimg.png";
import { useEffect, useState, useRef } from "react";
import Impact1 from "./assets/images/impact1.png";
import Impact2 from "./assets/images/impact2.png";
import Impact3 from "./assets/images/impact3.png";
import Impact4 from "./assets/images/impact4.png";

function App() {
  const customers = [
    {
      image: Cust1,
      heading: "India’s largest Bike-Taxi",
      desc: "Cut through traffic, reach on time and save money. With Rapido Bike-Taxis, it’s that simple.",
    },
    {
      image: Cust2,
      heading: "5-minute Auto",
      desc: "Never wait for an auto ride again! Get a Rapido Auto within just 5 minutes! Anytime. Anywhere.",
    },
    {
      image: Cust3,
      heading: "Lowest Priced Cabs",
      desc: "More wheels. More comfort. And lower price than any other cab out there.",
    },
  ];

  const captains = [
    {
      image: Capt1,
      heading: "Zero Pressure Rides",
      desc: "Gives a Captain more room in a day without hampering their daily activities. You can decide on when to go on the next ride.",
    },
    {
      image: Capt2,
      heading: "Redeemable Earnings",
      desc: "What’s the use of getting paid when you can't withdraw money when you want to?Redeems can be transferred from Rapido wallet to your bank account at your convenience.",
    },
    {
      image: Capt3,
      heading: "Insured Rides",
      desc: "All rides are insured. Accidental coverage and medical benefits covered up to Rs 5 Lakh for Captain & family.",
    },
  ];

  const [selectedSection, setSelectedSection] = React.useState("customers");

  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.8) {
          setIsInView(true);
        } else if (scrollDirection === "up" && entry.intersectionRatio < 0.8) {
          setIsInView(false);
        }
      },
      { threshold: [0.8] }
    );
    window.addEventListener("scroll", handleScroll);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [scrollDirection]);

  const impacts = [
    {
      img: Impact1,
      count: "25 M",
      name: "Downloads",
    },
    {
      img: Impact2,
      count: "100 +",
      name: "Cities",
    },
    {
      img: Impact3,
      count: "1 + M",
      name: "Captains",
    },
    {
      img: Impact4,
      count: "10 + M",
      name: "Customers",
    },
  ];
  return (
    <div className="flex flex-col gap-20">
      <Header />

      {/* Hero section */}
      <div className="2xl:container mx-auto w-full relative overflow-hidden">
        <div className="w-[98%] mx-auto px-[30px] lg:px-[150px] py-[30px] lg:py-[100px] flex lg:flex-row gap-10">
          <div className="flex flex-col gap-5 md:gap-10 max-w-full xl:max-w-[500px]">
            <h2 className="text-3xl text-gray-800 font-semibold md:text-5xl md:font-medium ">
              Bharat moves on Rapido!
            </h2>
            <p className="text-lg font-medium leading-[40px]">
              Rapido, with Bike-Taxis, Autos & Cabs is revolutionising the way
              India travels. With a presence in 150+ cities and over 100 million
              safe rides completed, Rapido is becoming India’s go-to app for
              comfortable and affordable rides.
            </p>

            <div className="flex gap-6">
              <button className=" bg-[#F8CC4B] rounded-t-full rounded-br-full py-3 px-6 text-sm md:text-base font-bold w-fit">
                Download Rapido
              </button>
              <button className="bg-black rounded-t-full rounded-bl-full  text-white py-3 px-6  text-sm md:text-base font-bold w-fit">
                Sign-up as a Driver
              </button>
            </div>
          </div>
          <div className="hidden bg-[#F8CC4B] xl:block absolute -z-10 top-[-400px] right-0 rounded-full rotate-45 w-[600px] h-[1000px]"></div>
          <div className="xl:block hidden">
            <img src={Heroimg} />
          </div>
        </div>
        <div className="w-full bg-[#F8CC4B] mt-[40px] xl:hidden">
          <img src={Heroimg} />
        </div>
      </div>

      {/* Saftey guideline - section*/}
      <div className="2xl:container mx-auto w-full">
        <div className="w-[98%] mx-auto px-[50px] lg:px-[150px] flex flex-col-reverse md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-5 md:gap-10 md:max-w-[400px]">
            <h2 className="text-3xl font-semibold md:text-5xl md:font-medium">
              Safety for all.
            </h2>
            <p className="text-lg font-medium leading-[40px]">
              At Rapido, the well-being of our customers is above everything
              else. We are constantly in pursuit of enhancing our safety
              measures to ensure every Rapido ride is a pleasant and comfortable
              experience.
            </p>
            <button className=" bg-[#F8CC4B] rounded-full py-3 px-6 text-base font-bold w-fit">
              Know More
            </button>
          </div>
          <div className=" lg:max-w-[600px]">
            <img src={Safety} alt="safety_guideline img" className="w-full" />
          </div>
        </div>
      </div>

      {/* Our impact */}
      <div className="2xl:container mx-auto w-full">
        <div
          ref={sectionRef}
          className="w-[98%] mx-auto px-[20px] lg:px-[150px] lg:py-[120px] flex flex-col-reverse md:flex-row justify-center items-center gap-10 relative"
        >
          <div
            className={`hidden xl:block absolute -z-10 bg-[#FBF7DD] w-[80%] h-[600px] py-[200px] rounded-full transition-transform duration-700 ease-in-out ${
              isInView ? "-rotate-12" : "rotate-12"
            }`}
          ></div>
          <div className="flex flex-col items-center gap-5 md:gap-10">
            <div className="relative flex flex-col items-center">
              <h2 className="text-3xl font-bold ">Our Impact</h2>
              <span className="absolute bottom-[-10px] h-[3px] w-[50px] bg-[#f9c935]"></span>
            </div>

            <p className="text-lg text-[#4B4B4B] font-medium leading-[40px] text-center xl:w-[700px]">
              Our presence in the country has changed the concept of intra-city
              travel and made last-mile connectivity affordable for all.
            </p>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 w-full justify-between">
              {impacts.map((impact) => (
                <div className="xl:h-[170px] xl:w-[170px] bg-white flex flex-col items-center gap-2 justify-center xl:rounded-full">
                  <div className="w-10 h-10">
                    <img src={impact.img} />
                  </div>
                  <p className="font-semibold text-sm lg:text-base">
                    {impact.count}
                  </p>
                  <p className="text-sm lg:text-base">{impact.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What's in it for you - section*/}
      <div className="2xl:container mx-auto w-full">
        <div className="w-[98%] mx-auto  px-[20px]  flex flex-col gap-10 items-center">
          <div className="p-3 relative flex flex-col items-center">
            <h3 className="text-3xl font-bold relative cursor-pointer">
              What's in it for you
            </h3>
            <span className="absolute bottom-[-5px] h-[3px] w-[50px] bg-[#f9c935]"></span>
          </div>

          <div className="flex text-base font-semibold">
            {["customers", "captions"].map((section) => (
              <div
                key={section}
                className={`w-[130px] md:w-[200px] h-[40px] md:h-[50px] flex items-center justify-center border-[2px]  cursor-pointer ${
                  selectedSection === section
                    ? "bg-[#f9c935] border-[#f9c935]"
                    : "bg-white border"
                } ${
                  section === "customers"
                    ? "rounded-tl-3xl rounded-bl-md"
                    : "rounded-tr-md rounded-br-3xl"
                }`}
                onClick={() => setSelectedSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}
          </div>

          <div>
            {selectedSection === "customers" ? (
              <div className="grid gap-12 lg:grid-cols-3">
                {customers.map((cust, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-5 items-center h-full lg:max-w-[400px]"
                  >
                    <div className="w-[180px]">
                      <img src={cust.image} alt={`Customer ${i + 1}`} />
                    </div>

                    <h5 className="text-2xl font-medium text-center">
                      {cust.heading}
                    </h5>
                    <p className="text-center text-[#4B4B4B] text-base font-normal flex-grow">
                      {cust.desc}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-12 lg:grid-cols-3">
                {captains.map((capt, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-5 items-center h-full lg:max-w-[400px]"
                  >
                    <div className="w-[180px]">
                      <img src={capt.image} alt={`Captain ${i + 1}`} />
                    </div>
                    <h5 className="text-2xl font-medium text-center">
                      {capt.heading}
                    </h5>
                    <p className="text-center text-[#4B4B4B] text-base font-normal flex-grow">
                      {capt.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
