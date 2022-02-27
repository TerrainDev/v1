import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="theme-base dark:theme-terrain bg-blue "
    >
      <div className=" py-32 max-w-4xl mx-auto min-h-screen px-4  dark:font-serif">
        <h1 className="font-semibold text-4xl text-white ">CONTACT</h1>
        <div className=" columns-sm py-12 lg:py-24 text-white">
          <div className="space-y-4">
            <p className="font-medium text-2xl  cursor-pointer hover:text-green dark:hover:text-steel ">
              &rarr; EMAIL
            </p>
            <p className="font-medium text-2xl  cursor-pointer hover:text-green dark:hover:text-steel ">
              &rarr; INSTAGRAM
            </p>
            <p className="font-medium text-2xl  cursor-pointer hover:text-green dark:hover:text-steel ">
              &rarr; TWITTER
            </p>
            <p className="font-medium text-2xl  cursor-pointer hover:text-green dark:hover:text-steel ">
              &rarr; TWITCH
            </p>
            <p className="font-medium text-2xl  cursor-pointer hover:text-green dark:hover:text-steel ">
              &rarr; SPOTIFY
            </p>
            <p className="font-medium text-2xl  cursor-pointer hover:text-green dark:hover:text-steel ">
              &rarr; ARE.NA
            </p>
            <p className="font-medium text-2xl  cursor-pointer hover:text-green dark:hover:text-steel ">
              &rarr; FACEBOOK
            </p>
            <p className="font-medium text-2xl  cursor-pointer hover:text-green dark:hover:text-steel ">
              &rarr; URBIT (coming soon)
            </p>
            <p className="font-medium text-2xl  cursor-pointer hover:text-green dark:hover:text-steel ">
              &rarr; NEWSLETTER
            </p>
          </div>
          {/* <div className="mt-4 flex flex-col">
            <p className="font-medium text-xl text-skin-titles-hover pl-2">
              Sign up to our weekly nesletter
            </p>

            <iframe
              src="https://newsfromterrain.substack.com/embed"
              width="480"
              height="320"
              style={{ border: "1px solid #EEE", background: "red" }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div> */}
        </div>
        <div className="font-medium text-xl text-white">
          TERRAIN Projects, <br />
          P.O Box 4196, Fitzroy, <br />
          VIC, 3065, Australia.
        </div>
      </div>
    </motion.div>
  );
}
