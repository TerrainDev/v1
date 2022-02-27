import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut",
        duration: 1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, translateY: 100 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: { ease: "easeIn", duration: 0.4 },
    },
  };

  return (
    <div className="theme-base dark:theme-terrain min-h-screen bg-green dark:bg-white dark:font-serif relative pt-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 pb-32  w-full flex flex-col  px-4 md:px-8 text-blue dark:text-black text-xl tracking-tight "
      >
        <motion.h1 className=" text-2xl font-semibold tracking-tighter">
          TERRAIN is an initiative and platform designed to remind humans that
          they are embedded in a more-than-human world.
        </motion.h1>
        <motion.p variants={item} className="my-4  ">
          The worldview of human-nature separation that has saturated society is
          the underlying cause of Earth&apos;s ecological crisis. This
          undermines the longevity of technological solutions as they exist
          within an unsustainable foundation of separation. TERRAIN Projects
          function to bridge this misalignment through incubating playful social
          spaces and collaborative projects with ideas across diverse
          disciplines and knowledge systems. Simultaneously, TERRAIN Projects
          reinforce the transformative reconciliatory effect interdisciplinary
          arts can have on human-nature relatedness in civic life.
        </motion.p>
        <motion.p variants={item} className="my-4  ">
          Our current geo-political climate continues to induce an attitude of
          not caring, that obstructs prioritising the environment with strong
          Earth jurisprudence. To fall back in love with the Earth would be to
          recognise what is lost when we are not in love. This same thread then
          directs us towards questioning what made us fall out of love with the
          Earth in the first place. Each TERRAIN Project explores a dimension of
          our ecological web, providing a space to reconcile our relationship
          with it, piece by piece. Decentralising our human positionality places
          the emerging posthuman in a context of deep time, as geological
          fragments part of a larger ecosystem.
        </motion.p>
        <motion.p variants={item} className="my-4 ">
          As each epoch of the Earth is immortalised in layers, TERRAIN Projects
          allow space for us to ask what kind of geological sedimentary imprint
          humans are leaving behind. This question is raised in an effort to
          understand what lies within our geosocial formations so that we can
          contribute as sustainable co-existent posthuman-beings in a
          more-than-human world.{" "}
        </motion.p>
        <motion.p variants={item} className="my-4 ">
          Our TERRAIN is a symbol that unites us. During social, ecological,
          political and economic upheaval, we must all remember the planet and
          its truly borderless terrain as one ecosystem. Our terrain will always
          be the fabric of society
        </motion.p>
        <motion.p className="my-4" variants={item}>
          Meet TERRAIN.
        </motion.p>
        <motion.p className="my-4" variants={item}>
          [Click{" "}
          <motion.span
            className="text-darkerBlue dark:text-slate-800 underline cursor-pointer hover:text-blue dark:hover:text-gray"
            onClick={() => setShowMore(!showMore)}
            variants={item}
          >
            here
          </motion.span>{" "}
          for the extended manifesto, land acknowledgment and inclusivity policy
          to be used on an about page]
        </motion.p>
        {showMore && (
          <>
            <motion.p className="my-4" variants={item}>
              TERRAIN Projects reinforce the powerful transformative effect
              interdisciplinary arts can have on humans within civic life. Each
              TERRAIN Project incubates social spaces to engage with
              post-humanist substances, by fusing re-emerging ideas and
              practices from diverse disciplines. TERRAIN is an initiative used
              to address wider ecological solutions continuously undermined by
              human (Homo Sapien) and more-than-human (human, atom, plant,
              machine, animal) separation.
            </motion.p>
            <motion.p className="my-4" variants={item}>
              Humanity&apos;s new-TERRAIN will radically evolve humans from
              living individualistically in isolated silos into a coherent whole
              built both on and out of Earth. Shifting from self-care to
              community-care, from isolated professional disciplines toward an
              openness for multi-disciplinary experiments. The post-human is no
              more important as the citizens and more-than-human constituents to
              which you are inescapably embedded.{" "}
            </motion.p>
            <motion.p variants={item} className="my-4">
              Our modern geo-political climate continually reiterates that
              humans won&apos;t care, legislate or prioritise the environment if
              they don&apos;t feel connected-to or appreciate it first. To
              extend the human &apos;self&apos; to include the more-than-human
              world, would mean to act and care for the self is to act and care
              for the natural environment – raising the question of why you
              would ever do anything to hurt something you love, or, be
              self-destructive? This also directs us towards questioning what
              made us endure such selfishness and disconnection with the Earth
              in the first place.
            </motion.p>
            <motion.p variants={item} className="my-4">
              Contemplating our relevance in such a way is powerful. Because,
              very slowly, we remove our layers by decentring the human from
              centre-stage in order to empathetically connect and emerge as the
              post-human (species, atom, machine). To see through the eyes of
              the more-than-human, hereby biologically evolving ourselves to
              adapt with renewed vision and perception.
            </motion.p>
            <motion.p variants={item} className="my-4">
              Each TERRAIN Project critically explores an aspect of this complex
              web to reconcile our relationship with it, piece by piece. Kind of
              like therapy, but way less human-centred. Whereby, decentralising
              human positionality within the world places the post-human back
              into the context of deep time, as a geological fragment with a
              time before, and a time after.{" "}
            </motion.p>
            <motion.p variants={item} className="my-4">
              TERRAIN Projects address the broader question of the kind of
              geological sedimentary layer humans would like to leave behind,
              and how they’d like to live whilst still in it. To understand what
              lies within our geo-social formations so that we can reinstate
              positionality as sustainably post-human.
            </motion.p>
            <motion.p variants={item} className="my-4">
              Living as post-human is relevant to all. Because once aware of
              more-than-human relations, it will permeate everything you do with
              a multi-scalar, multi-positional perspective.
            </motion.p>
            <motion.p variants={item} className="my-4">
              Meet TERRAIN. <br /> 37.8136° S, 144.9631° E <br /> Wurundjeri
              land
            </motion.p>
            <motion.h2
              variants={item}
              className=" text-2xl font-semibold tracking-tighter my-4"
            >
              Land Acknowledgement
            </motion.h2>
            <motion.p variants={item} className="my-4">
              TERRAIN emerged and operates primarily on the unceded land of the
              Wurundjeri Woi Wurrung people of the Eastern Kulin Nations. We
              acknowledge and pay respect to their elders past, present and
              emerging, to their wisdom, culture and lands that continually
              remind us of what it means to be human. We also recognise that
              today we are in relationship with many lands all at once. Our
              emerging digital territories of the internet rely on
              infrastructures that include millions of data servers, satellites
              in space, and cables that run through the deep sea - touching
              aspects of this planet far beyond the physical reach of our two
              feet.
            </motion.p>
            <motion.p variants={item} className="my-4">
              Aboriginal and Torres Strait Islander people have been living
              harmoniously with these lands for over 60,000 years, as the oldest
              living culture on Earth. We dedicate ourselves to the continual
              unlearning of colonial ways and worldviews as we listen and learn
              from our Indigenous teachers and elders on how we are to live in
              harmony with all land, waters, air, space, and seas - and with all
              of the inhabitants to which we share them with.
            </motion.p>
            <motion.p variants={item} className="my-4">
              Colonial, binary and separatist thinking, are some of the many
              active culprits in the initial and ongoing suppressions of firstly
              the Indigenous wisdom that has been subjected to being severed,
              ignored and left behind, but also our capacity and ability to see
              clearly through the layers of junk we’ve systematically layered
              over it - which conceals further the very core of what it means to
              be human and has endured for far too long. Being on Country means
              being in a constant relationship, one that does not see nature as
              out there and separate from ourselves because we are part of
              Country, as kin.
            </motion.p>
            <motion.p variants={item} className="my-4">
              (What land are you on? Find out here:{" "}
              <Link href={"https://native-land.ca/"} passHref>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue underline hover:text-darkerBlue"
                >
                  native-land.ca
                </a>
              </Link>{" "}
              )
            </motion.p>
          </>
        )}
      </motion.div>
    </div>
  );
}
