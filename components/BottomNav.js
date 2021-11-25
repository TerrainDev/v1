import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BottomNav() {
  const router = useRouter();

  return (
    <div className="w-full max-w-full px-16 sm:px-16 flex justify-center">
      <Tab.Group manual>
        <Tab.List className="shadow-lg fixed flex  items-center bottom-8 z-50 w-80 bg-gray-100 rounded-full border-2 border-blue-600 sm:w-[24rem] sm:bottom-8">
          <Link href={"/"} passHref>
            <a className="w-full ">
              <Tab
                className={() =>
                  classNames(
                    " w-full py-3 text-sm leading-5 font-medium  rounded-full ",
                    "focus:outline-none text-blue-600  hover:text-blue-800",
                    router.asPath.endsWith("/") ? "bg-blue-100" : "bg-gray-100"
                  )
                }
              >
                Projects
              </Tab>
            </a>
          </Link>
          <Link href={"/resources"}>
            <a className="w-full">
              <Tab
                className={() =>
                  classNames(
                    "w-full py-3 text-sm leading-5 font-medium  rounded-full ",
                    "focus:outline-none text-blue-600  hover:text-blue-800",
                    router.asPath === "/resources"
                      ? "bg-blue-100"
                      : "bg-gray-100"
                  )
                }
              >
                Resources
              </Tab>
            </a>
          </Link>
          <Link href={"/consultancy"}>
            <a className="w-full">
              <Tab
                className={() =>
                  classNames(
                    "w-full py-3 text-sm leading-5 font-medium  rounded-full ",
                    "focus:outline-none text-blue-600  hover:text-blue-800",
                    router.asPath === "/consultancy"
                      ? "bg-blue-100"
                      : "bg-gray-100"
                  )
                }
              >
                Consultancy
              </Tab>
            </a>
          </Link>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
