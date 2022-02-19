import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="theme-base dark:theme-terrain bg-skin-fill "
    >
      <div className=" py-32 max-w-4xl mx-auto min-h-screen px-4 ">
        <h1 className="font-semibold text-4xl text-skin-titles-darker ">
          CONTACT
        </h1>
        <div className=" columns-sm py-12 lg:py-24 ">
          <div className="space-y-4">
            <p className="font-medium text-2xl text-skin-titles-darker cursor-pointer hover:opacity-80 ">
              &rarr; EMAIL
            </p>
            <p className="font-medium text-2xl text-skin-titles-darker cursor-pointer hover:opacity-80 ">
              &rarr; INSTAGRAM
            </p>
            <p className="font-medium text-2xl text-skin-titles-darker cursor-pointer hover:opacity-80 ">
              &rarr; TWITTER
            </p>
            <p className="font-medium text-2xl text-skin-titles-darker cursor-pointer hover:opacity-80 ">
              &rarr; TWITCH
            </p>
            <p className="font-medium text-2xl text-skin-titles-darker cursor-pointer hover:opacity-80 ">
              &rarr; SPOTIFY
            </p>
            <p className="font-medium text-2xl text-skin-titles-darker cursor-pointer hover:opacity-80 ">
              &rarr; ARE.NA
            </p>
            <p className="font-medium text-2xl text-skin-titles-darker cursor-pointer hover:opacity-80 ">
              &rarr; FACEBOOK
            </p>
            <p className="font-medium text-2xl text-skin-titles-darker cursor-pointer hover:opacity-80 ">
              &rarr; URBIT (coming soon)
            </p>
            <p className="font-medium text-2xl text-skin-titles-darker cursor-pointer hover:opacity-80 ">
              &rarr; NEWSLETTER
            </p>
          </div>
          {/* <div className="mt-4 flex flex-col   ">
          <p className="font-medium text-xl text-skin-titles-hover pl-2">
            Sign up to our weekly nesletter
          </p>

          <iframe
            src="https://newsfromterrain.substack.com/embed"
            width="480"
            height="320"
            style={{ border: "1px solid #EEE", background: "transparent" }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div> */}
        </div>
        <div className="font-medium text-xl text-skin-titles-darker">
          TERRAIN Projects, <br />
          P.O Box 4196, Fitzroy, <br />
          VIC, 3065, Australia.
        </div>
      </div>
    </motion.div>
  );
}
