import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BottomNav() {
  let categories = ["Projects", "Resources", "Consultancy"];
  return (
    <div className="w-full max-w-full px-16 sm:px-16 flex justify-center ">
      <Tab.Group>
        <Tab.List className=" shadow-lg fixed flex bottom-8 z-50 w-80 bg-gray-100 rounded-full border-2 border-blue-600 sm:w-[24rem] sm:bottom-8">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-3 text-sm leading-5 font-medium  rounded-full ",
                  "focus:outline-none text-blue-600  hover:text-blue-800",
                  selected ? "bg-green-100" : "bg-gray-100"
                )
              }
            >
              <Link
                href={
                  category === "Projects" ? "/" : `/${category.toLowerCase()}`
                }
                passHref
              >
                {category}
              </Link>
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
