import React from "react";

export default function WhatWeDoCard(props) {
  const mouseOver = () => {
    const desc = document.querySelector(`#Wdesc${props.id}`);
    // console.log(card+"dadsada")
    const title = document.querySelector(`#title${props.id}`);
    // desc.classList.remove('scale-0');
    desc.classList.remove("opacity-0");
    desc.classList.remove("text-sm");
    // desc.classList.add('scale-100');
    title.classList.remove("text-2xl");
    title.classList.add("text-6xl");
  };
  const mouseExit = () => {
    const desc = document.querySelector(`#Wdesc${props.id}`);
    // console.log(card+"dadsada")
    const title = document.querySelector(`#title${props.id}`);
    // desc.classList.add('scale-0');
    desc.classList.add("opacity-0");
    desc.classList.add("text-sm");
    // desc.classList.remove('scale-100');
    title.classList.add("text-2xl");
    title.classList.remove("text-6xl");
  };
  return (
    <div>
      <div
        onMouseEnter={() => mouseOver()}
        onMouseLeave={() => mouseExit()}
        id="wwdcard"
        className=" wwdCard flex flex-col justify-around py-64 px-12 max-w-lg min-h-full  "
        style={{
          backgroundImage: `url(${props.bg})`,
        }}
      >
        <span id={`title${props.id}`} className="text-2xl animate ">
          {props.title}
        </span>
        <div
          id={`Wdesc${props.id}`}
          className="text-sm transform  animate opacity-0"
        >
          {props.desc}
        </div>
      </div>
    </div>
  );
}
