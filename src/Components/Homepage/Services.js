import React, { useEffect } from "react";
import CardService from "./CardService";
import ScrollMagic from "scrollmagic";

export default function Services() {
  return (
    <div
      className="w-full bg-fixed bg-center bg-cover h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className=" container mx-auto pt-10  ">
        <h2 className="text-5xl  text-center font-heading" id="test">
          What We Do
        </h2>
        <div className="flex justify-around flex-row flex-wrap  sm:mx-16 py-10">
          <CardService
            title="Public Relations "
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <CardService
            title="Digital Marketing "
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <CardService
            title="Social Media Management "
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />

          <CardService
            title="Influencer marketing  "
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <CardService
            title="SEO "
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <CardService
            title="Talent Management "
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </div>
      </div>
    </div>
  );
}
