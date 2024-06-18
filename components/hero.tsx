"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Stepper from "@keyvaluesystems/react-stepper";

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const updateStep = () => {
      const now = new Date();
      const kenyaOffset = 3 * 60; // Kenya is UTC+3
      const localTime = new Date(
        now.getTime() + now.getTimezoneOffset() * 60000 + kenyaOffset * 60000
      );

      const currentHour = localTime.getHours();
      console.log(currentHour);
      if (currentHour >= 8 && currentHour < 16) {
        setActiveStep(2); // Arrived
      } else if (currentHour >= 17 || currentHour < 8) {
        setActiveStep(1); // In Transit
      } else if (currentHour >= 16 && currentHour < 17) {
        setActiveStep(0); // Departure
      }
    };

    updateStep();
    const interval = setInterval(updateStep, 60000); // Check every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="relative h-[100vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pwota.jpeg"
          layout="fill"
          objectFit="cover"
          alt="background image"
          className="pointer-events-none"
        />
      </div>
      <div className="relative z-10 top-[200px]">
        <Stepper
          steps={[
            {
              stepLabel: "Departure (5 PM)",
              stepDescription: "The journey begins.",
              completed: activeStep > 0,
            },
            {
              stepLabel: "In Transit (After 5 PM)",
              stepDescription: "Currently on the way.",
              completed: activeStep > 1,
            },
            {
              stepLabel: "Arrived (8 AM)",
              stepDescription: "The journey ends.",
              completed: activeStep > 2,
            },
          ]}
          currentStepIndex={activeStep}
          orientation="horizontal"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[50vh] flex items-end">
          <div
            className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
            aria-hidden="true"
            data-aos="fade-up"
            data-aos-delay="400"
          ></div>
        </div>
      </div>
    </section>
  );
}
