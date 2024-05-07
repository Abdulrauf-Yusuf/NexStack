"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";
import StarIcon from "../icons/StarIcon";
import StarIconRotated from "../icons/RotatedStarIcon";

const AccordionItem = ({ open, toggle, title, descr }) => {
  return (
    <div>
      <div onClick={toggle} className="flex flex-row items-center gap-10 py-6 cursor-pointer max-md:py-3 max-md:gap-5">
        <div>{open ? <StarIconRotated /> : <StarIcon />}</div>
        <p className="text-[1.2rem] font-semibold max-md:text-[.8rem]">
          {title}
        </p>
      </div>

      <Collapse isOpened={open}>
        <div className="text-[1rem] font-medium text-left ml-[3.5rem] pb-[.5rem] leading-[1.5rem] max-md:text-[.75rem] max-md:ml-[2rem]">
          {descr}
        </div>
      </Collapse>
      <hr className="bg-black text-black ml-10" />
    </div>
  );
};

export default function Accordion() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  const accordionData = [
    {
      title: "What are the different payment plans you offer?",
      descr:
        "We offer a 3% discount on full payment of course fee at the start of the training session.",
    },
    {
      title: "What are the different payment plans you offer?",
      descr:
        "We offer a 3% discount on full payment of course fee at the start of the training session.",
    },
    {
      title: "What are the different payment plans you offer?",
      descr:
        "We offer a 3% discount on full payment of course fee at the start of the training session.",
    },
    {
      title: "What are the different payment plans you offer?",
      descr:
        "We offer a 3% discount on full payment of course fee at the start of the training session.",
    },
  ];
  return (
    <section className="mt-10">
      <div>
        {accordionData.map((data, index) => {
          return (
            <AccordionItem
              key={index}
              open={index === open}
              title={data.title}
              descr={data.descr}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </section>
  );
}
