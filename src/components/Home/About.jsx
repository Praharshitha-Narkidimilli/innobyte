import React from "react";
import { useInView } from "react-intersection-observer";
import AboutImage from "../../assets/About.jpg";

function About() {
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [subHeadingRef, subHeadingInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [paragraphRef, paragraphInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [addressRef, addressInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [buttonRef, buttonInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="flex flex-col relative md:flex-row justify-between items-center px-8 py-16 mt-32 gap-y-8 md:gap-x-12 max-w-screen-lg mx-auto">
      {/* Image Section */}
      <div
        ref={imageRef}
        className={`w-4/5 md:w-1/2 flex justify-center mb-8 relative ${
          imageInView ? "animate-fadeLeft" : "opacity-0"
        }`}
      >
        <img
          src={AboutImage}
          alt="About Kingsukh Guest House"
          className="w-[110%] h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-6">
        <h2
          ref={headingRef}
          className={`text-2xl font-semibold ${
            headingInView ? "animate-fadeUpTop opacity-0" : "opacity-0"
          }`}
          style={{
            animationDuration: "2s",   // Set total animation duration
            animationDelay: imageInView ? "0.25s" : "0s",  // Delay the animation itself
            transition: "opacity 2s",
            animationFillMode: "forwards",  // Smooth transition for opacity
          }}
        >
          ABOUT US______
        </h2>

        <p
          ref={subHeadingRef}
          className={`text-4xl font-bold mb-5 ${
            subHeadingInView ? "animate-fadeUpTop opacity-0" : "opacity-0"
          }`}
          style={{
            animationDuration: "2s",   // Set total animation duration
            animationDelay: imageInView ? "0.5s" : "0s",  // Delay the animation itself
            transition: "opacity 2s", 
            animationFillMode: "forwards", // Smooth transition for opacity
          }}
        >
          The Best Holidays Start Here!
        </p>

        <p
          ref={paragraphRef}
          className={`text-base text-gray-700 mb-5 ${
            paragraphInView ? "animate-fadeUpTop opacity-0" : "opacity-0"
          }`}
          style={{
            animationDuration: "2s",   // Set total animation duration
            animationDelay: imageInView ? "0.75s" : "0s",  // Delay the animation itself
            transition: "opacity 2s",
            animationFillMode: "forwards",  // Smooth transition for opacity
          }}
        >
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
          the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill,
          Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel
          in the embrace of comfort, relish delightful meals, and unwind in our verdant
          garden oasis. Your ideal retreat beckons, promising a harmonious blend of
          nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia,
          creating memories that linger long after your stay.
        </p>

        <p
          ref={addressRef}
          className={`text-lg font-medium cursor-pointer text-purple_text ${
            addressInView ? "animate-fadeUpTop opacity-0" : "opacity-0"
          }`}
          style={{
            animationDuration: "2s",   // Set total animation duration
            animationDelay: imageInView ? "1s" : "0s",  // Delay the animation itself
            transition: "opacity 2s",
            animationFillMode: "forwards",  // Smooth transition for opacity
          }}
        >
          <strong>Address:</strong>{" "}
          <a
            href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA"
            className="hover:underline"
          >
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </a>
        </p>

        <p
          ref={contactRef}
          className={`text-lg font-medium text-blue_text mb-5 ${
            contactInView ? "animate-fadeUpTop opacity-0" : "opacity-0"
          }`}
          style={{
            animationDuration: "2s",   // Set total animation duration
            animationDelay: imageInView ? "1.25s" : "0s",  // Delay the animation itself
            transition: "opacity 2s", 
            animationFillMode: "forwards", // Smooth transition for opacity
          }}
        >
          <strong>Contact us:</strong>{" "}
          <a
            href="tel:+919007062180"
            className="text-blue-600 hover:underline"
            aria-label="Call us at +91 9007062180"
          >
            +91 9007062180
          </a>
        </p>

        <div
          ref={buttonRef}
          className={`${
            buttonInView ? "animate-fadeUpTop opacity-0" : "opacity-0"
          }`}
          style={{
            animationDuration: "2s",   // Set total animation duration
            animationDelay: imageInView ? "1.5s" : "0s",  // Delay the animation itself
            transition: "opacity 2s", 
            animationFillMode: "forwards", // Smooth transition for opacity
          }}
        >
          <a
            href="https://wa.link/at5ion"
            className="bg-pink-600 text-white px-8 py-2 rounded-xl hover:bg-pink-800 inline-block"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
