import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BottomNav() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="theme-base dark:theme-terrain w-full max-w-full px-16 sm:px-16 flex justify-center fixed bottom-8 z-50 "
    >
      <Tab.Group manual>
        <Tab.List className="shadow-lg shadow-green/20 flex items-center w-80 bg-white rounded-full border-2 border-blue sm:w-[24rem] sm:bottom-8">
          <Link href={"/"} passHref>
            <a className="w-full ">
              <Tab
                className={() =>
                  classNames(
                    " w-full py-3 text-sm leading-5 font-medium  rounded-full ",
                    "focus:outline-none text-blue hover:text-darkerBlue",
                    router.asPath.endsWith("/")
                      ? "bg-green text-blue"
                      : "bg-white"
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
                    " w-full py-3 text-sm leading-5 font-medium  rounded-full ",
                    "focus:outline-none text-blue  hover:text-darkerBlue",
                    router.asPath === "/resources"
                      ? "bg-green text-blue"
                      : "bg-white"
                  )
                }
              >
                Resources
              </Tab>
            </a>
          </Link>
          <Link href={"/services"}>
            <a className="w-full">
              <Tab
                className={() =>
                  classNames(
                    " w-full py-3 text-sm leading-5 font-medium  rounded-full ",
                    "focus:outline-none text-blue  hover:text-darkerBlue",
                    router.asPath === "/services"
                      ? "bg-green text-blue"
                      : "bg-white"
                  )
                }
              >
                Services
              </Tab>
            </a>
          </Link>
        </Tab.List>
      </Tab.Group>
    </motion.div>
  );
}
