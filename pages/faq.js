import { Disclosure, Transition } from "@headlessui/react";
import { GlobeIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="theme-base dark:theme-terrain bg-skin-fill"
    >
      <div className="  w-full px-4 py-24 max-w-4xl mx-auto">
        <h1 className="text-skin-titles-darker mb-8 font-medium text-2xl lg:text-4xl pl-2">
          FAQ / HELP
        </h1>
        <div className="w-full  p-2 bg-borderCol-main  sm:bg-skin-lighter-fill text-skin-titles-darker rounded-2xl">
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-lg font-medium text-left bg-skin-fill rounded-lg hover:bg-green-200  dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    How is TERRAIN funded? Are you a not for profit
                    organisation?
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 text-skin-titles-darker hidden md:block`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    <p>
                      We are a for-profit initiative and choose to be so in
                      order to enable the longevity of our work, and remove
                      reliance upon external funding support needed to start us
                      up. We also think it&apos;s important to remove reliance
                      on funding bodies to make way and open opportunities in
                      our communities for supporting new and emerging
                      initiatives in the future. We self-finance and pay
                      ourselves through services alone, via consultation,
                      workshops and various other contributions. This allows us
                      to maintain the creative integrity of our projects and
                      resources as they are not compromised with a need for
                      monetisation.
                    </p>
                    <p className="mt-4">
                      Being for-profit doesn&apos;t make us raging capitalists.
                      We all face many structural challenges as a direct result
                      of our current form of capitalism that is fundamentally
                      broken. Being a for-profit initiative means that we can be
                      part of reimagining our economic system instead of working
                      outside of it by taking direct responsibility for our
                      decisions. We envision our future governed by principles
                      of ecological economics, a pluralist view that sees the
                      human economy as a subsystem of the global ecological
                      system; thus, materials and energy flow as part of the
                      larger transfer of materials within our biosphere.
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">Can I support TERRAIN?</span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 hidden md:block `}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    We are still getting on our feet and starting up, and so
                    extra financial support at this time is greatly appreciated
                    and highly felt. If you are a philanthropic organisation,
                    investor or other private or public funding body that
                    resonates with our work and vision, please get in touch with
                    us at hello@terrain.earth. Or, if you&apos;d simply like to
                    buy us a cup of coffee - you can do so{" "}
                    <Link href={"https://ko-fi.com/terrain"} passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        <span className=" underline">here!</span>
                      </a>
                    </Link>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    Do you take interns and volunteers?
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 hidden md:block `}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    The short answer is yes, drop us an email to
                    hello@terrain.earth with a little introduction, your
                    curiosity and a CV. However, the long answer is that we
                    simply don&apos;t have the bandwidth [yet] to pay more
                    staff, we&apos;d like to soon though as we continue to grow.
                    As soon as paid positions are possible we will make them
                    known!
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">Where are you located?</span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 hidden md:block `}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    37.8136° S 144.9631° E; Wurundjeri Land, Melbourne,
                    Australia, Earth.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">Can we collaborate?</span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 hidden md:block `}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    Our projects are either directly conceived or collaborative
                    from the get-go - they can be one-off or ongoing. We are
                    open to collaboration on projects and we&apos;d love to hear
                    from you - send us an email to hello@terrain.earth if you
                    feel so inclined!
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    What do you send in the newsletter if I subscribe?
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 hidden md:block `}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    Updates on upcoming happenings by us and our friends, new
                    arrivals to the Bookshelf, and the occasional music playlist
                    with what we&apos;re listening to. We don&apos;t send them
                    often, only when we have something to share to your inbox.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    Can you explain your digital garden and resources?
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6  hidden md:block`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    <p>
                      It comes as no surprise that the Internet borrows language
                      from nature (i.e. mouse, stream, root, tree, bug, cloud,
                      virus), which could be perceived as a desire and possibly
                      even a compatibility that might be waiting for our digital
                      landscapes to evolve into. If the internet were a forest,
                      hyperlinks would be a mechanism that allows the web to
                      grow the same as how synapses of a brain or hyphae of
                      mycelium form.
                    </p>
                    <p className="mt-4">
                      The web that makes sense is that which is emerging with
                      platforms like Are.na and Urbit, or open source
                      information, digital gardens and personal wikis that
                      extend outward, connect, entwine and relate - and grow
                      communities. When an algorithm decides what is hyperlinked
                      inside or outside of an ecosystem, a natural and robust
                      community cannot lay down proper roots and so often these
                      relations that may emerge can be short-lived and the buzz
                      can die off — which is why sometimes after bursts like
                      this we&apos;re left feeling kind of malnourished
                      afterward... and not refreshed like taking a walk in the
                      woods.
                    </p>
                    <p className="mt-4">
                      We&apos;re growing our digital garden inside this website,
                      which contains all kinds of resources, media formats and
                      peers within our network - which is a work-in-progress and
                      was initially sparked after first compiling our Digital
                      Directory[page link] project with
                      <Link href={"https://girlonroad.tech/"} passHref>
                        <a rel="noopener noreferrer" target="_blank">
                          <span className=" underline mx-1">
                            Girl On Road (G.O.R.)
                          </span>
                        </a>
                      </Link>
                      in 2020. We also maintain an active presence on Are.na via
                      <Link
                        href={
                          "https://www.are.na/terrain/visualisations-toward-a-more-than-human-world"
                        }
                        passHref
                      >
                        <a rel="noopener noreferrer" target="_blank">
                          <span className=" underline mx-1">our channels</span>
                        </a>
                      </Link>
                      and connect visual articles and artefacts together in this
                      connected and hyperlinked way.
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    Bookshelf orders, location and hours
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 hidden md:block`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    All orders are available for local delivery, pick-up or 100%
                    carbon negative Australia wide shipping (via
                    <Link href={"https://try.sendle.com/en-au/impact"}>
                      <a rel="noopener noreferrer" target="_blank">
                        <span className=" underline mx-1">Sendle</span>
                      </a>
                    </Link>
                    ). Pick-up orders can be collected from inside
                    Melbourne&apos;s
                    <Link href={"https://collingwoodyards.org/visit/"}>
                      <a rel="noopener noreferrer" target="_blank">
                        <span className=" underline mx-1">
                          Collingwood Yards
                        </span>
                      </a>
                    </Link>
                    weekdays from 10am to 5pm, with further instructions for
                    collection provided when ordering.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    Bookshelf exchanges and refunds
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 hidden md:block `}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    We're unable to offer refunds for change of mind, but you
                    can return a book to us within 14 days for an exchange or
                    store-credit if it's in as-new condition (no scuffs or
                    wear). Credit will only cover the value of the book and will
                    need to be returned to us at the customer's expense. <br />{" "}
                    Send us an email to hello@terrain.earth with the reason for
                    your exchange and we'll be in touch.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    How is the Bookshelf shipping carbon negative?
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6  hidden md:block`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    Shipping with
                    <Link href={"https://try.sendle.com/en-au/impact"}>
                      <a rel="noopener noreferrer" target="_blank">
                        <span className=" underline ml-1">Sendle</span>
                      </a>
                    </Link>
                    , all handling is carbon neutral. When we plant one tree
                    with every book purchased (not every order), it tips this
                    scale over to negative - though we are not calculating the
                    embodied emissions of the publications themselves, just the
                    shipping logistics.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    How does One Tree Planted work?
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6  hidden md:block`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    One Book = One Tree Planted. For every book sold we'll be
                    planting one tree on your behalf. We&apos;ve partnered with
                    <Link
                      href={"https://onetreeplanted.org/products/plant-trees"}
                    >
                      <a rel="noopener noreferrer" target="_blank">
                        <span className=" underline mx-1">
                          One Tree Planted
                        </span>
                      </a>
                    </Link>
                    to do the planting, who are a not for profit dedicated to
                    global reforestation. They plant trees to restore
                    biodiversity and ecosystem health, and also raise awareness
                    about the importance of trees.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    Do you sell anything besides Books?
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 hidden md:block `}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    Essentially, you can&apos;t buy TERRAIN, you can only engage
                    with it presently; as it is not a thwarted attempt to join
                    the commerce bandwagon, there is no face oil or incense that
                    will help you here. <br /> There is no paradoxical
                    consumption required for simplification - you already have
                    everything you need. We avoid commodifying ourselves with
                    objects or things that could easily become a distraction
                    from our mission and further contribute to excessive habits
                    of over-consumption. If we do make or sell anything besides
                    the resources held on the Bookshelf, they will likely be a
                    limited run, and made and sold locally; accompanied with
                    transparency in their production, manufacture,
                    transportation and disposal (though hopefully this last step
                    won&apos;t be necessary). Each decision we make is embodied
                    by our values and seen as an opportunity to do
                    business-as-usual a little differently.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    Can you elaborate on the physical and digital aspects of
                    TERRAIN?
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 hidden md:block`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    TERRAIN encompasses digital and physical aspects. Both are
                    equally important for how TERRAIN functions - with the
                    different spaces they occupy and the people they interact
                    with. Some projects will be entirely digital, some totally
                    physical - and some are hybrids (phygital). <br />{" "}
                    Everything we do is grounded in and is an expression of
                    reminding humans that they are embedded in a more-than-human
                    world, the format and language each of these expressions
                    takes will therefore be secondary and informed by the
                    specific audience being engaged. Each outcome serves a
                    different higher up function too, these are outlined in the
                    respective sections below. <br /> We seek to create
                    approachable and playful physical and digital (phygital)
                    spaces embedded with a story that decenter human
                    positionality - by providing an alternative perspective of
                    our geographies that is one of a multi-species and
                    more-than-human way of being. <br /> Each TERRAIN Project
                    aims to move beyond the static uniformity of comfort culture
                    to challenge individuals with information and ideas
                    harmonised across a wide breadth of disciplines.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center  w-full px-4 py-2 text-lg font-medium text-left  bg-skin-fill rounded-lg hover:bg-green-200 dark:hover:bg-borderCol-main focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span className=" sm:w-full">
                    Is TERRAIN part of a social justice movement?
                  </span>
                  <GlobeIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 hidden md:block`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-md ">
                    <p>
                      In the phrase “social justice” we question what exactly we
                      refer to when we say social. There are incredible acts of
                      restorative justice that are being initiated all over the
                      world. These acts exemplify the work being done out there
                      on the front lines that not only brings much needed
                      visibility to the public, but are also providing resources
                      and the support needed for how we are to move forward
                      through the pain and heal, and importantly - putting us in
                      back our place by reminding us what it means to be
                      compassionate social creatures. Being social or having
                      sociality is something we tend to only award as a status
                      to humans; rendering our environments and landscapes
                      devoid, mute, machinic, and in many ways unworthy of our
                      superior social lives and all that come with it (such as
                      rights and protection) - when in truth there are social
                      lives and exchanges, mutualisms and symbiosis between all
                      things happening all the time, some so sophisticated our
                      scientists still struggle to grasp.
                    </p>
                    <p className="mt-4">
                      As said by Martin Luther King, “a threat to justice
                      anywhere is a threat to justice everywhere”. We cannot
                      entirely respect the rights of nature if we are still
                      struggling to address systematic human rights and social
                      abuses across many forms. It is our job now to connect
                      these dots of how women&apos;s rights are connected to
                      climate, how ecosystem health returns and flourishes once
                      lands are returned to and managed by their Indigenous
                      owners, how injustices perpetuated by classical and
                      neoclassical capitalism contribute to the diminishing of
                      collective prosperity, and how LGBTQIA+ understanding and
                      respect will continue to pave the way for embracing a
                      fluid and non-binary world that is at the core of how our
                      ecosystems have and always will function. There is
                      tremendous intersectionality in how we will not only
                      present the visual media of what a just and harmonious
                      world will look like - but the transition and
                      collaboration it will take to get us there in making it a
                      living reality for all. We therefore see ourselves as a
                      node within a massive global network of restorative
                      justice movements across all scales.
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        <p className="pl-2  text-2xl font-medium mt-12 text-skin-titles-darker">
          Got more questions regarding our operation? <br /> Feel free to
          contact us at &rarr;
          <a
            href="mailto:contact@terrain.earth"
            target="_blank"
            className="text-green-500 hover:text-green-600 dark:text-borderCol-main pl-2"
          >
            contact@terrain.earth
          </a>
        </p>
      </div>
    </motion.div>
  );
}
