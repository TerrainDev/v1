import Link from "next/link";
import { useState } from "react";

export default function Consultancy() {
  const [active, setActive] = useState(null);

  const nav = [
    { id: "#consultancy", title: "Consultancy" },
    { id: "#workshops", title: "Workshops" },
    { id: "#publicEngagement", title: "Public engagement" },
  ];

  return (
    <div className="theme-base dark:theme-terrain bg-white">
      <div className="theme-base  scroll-smooth  max-w-4xl mx-auto text-blue px-4">
        <nav className="fixed z-40 top-20 left-8 hidden xl:block text-sm">
          <h1 className=" text-blue text-2xl font-semibold ">Services</h1>
          <ul className="space-y-2 mt-4">
            {nav.map((n, i) => (
              <li
                key={n.id}
                onClick={() => setActive(n.id)}
                className={active === n.id ? "text-darkerBlue" : "text-blue"}
              >
                <a href={`${n.id}`}>{n.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="font-bold text-2xl mt-20 xl:hidden">SERVICES</h1>
        <div className="pt-8 xl:pt-20 scroll-mt-20 " id="consultancy">
          <h2 className="text-2xl font-semibold">Consultancy</h2>
          <p className="text-lg mt-4">
            If TERRAIN&apos;s vision resonates with you and you&apos;d like to
            find a way to integrate it into your organisation, business or
            practice, or if you have a project or an idea you would like us to
            develop with you; get in touch with us as we&apos;d love to see how
            we can help.
          </p>
          <h2 className="text-xl mt-4 font-semibold">
            Environmental Consultancy
          </h2>
          <p className="text-lg mt-4">
            We do sustainability consulting a little differently. With a more
            robust perspective on sustainability, we offer more-than-human
            consultancy services for organisations, projects and businesses.
            Narrative is a powerful force in all aspects of life, and is
            particularly relevant today within projects, organizations,
            companies and business to keep up and adapt to the rapidly changing
            tides. We passionately believe that the transitions we need in our
            world require finding ways to creatively align and prepare
            pre-existing industries for the future that&apos;s already here.
            This is why in addition to revitalising practical operations to
            lighten their impact on our planet and shift toward regenerative
            solutions, we also focus our attention holistically on underlying
            language, narratives and messaging within aspects such as roadmaps,
            vision, marketing and much more.
          </p>
          <p className="text-lg mt-4">
            Undergo More-Than-Human-Calibration For Your Organisation. Can we
            facilitate and seed ecological ethics into the global environmental
            consulting landscape? In a narrow view of Darwinian evolution,
            you&apos;d assume other consulting groups would be our competitors.
            However, applying the often neglected full scope of what Charles
            Darwin actually observed, we are collaborators. If we can work
            together in partnership with these firms, a more-than-human ethics
            rollout and normalisation within culture can be motivated with a far
            wider-reaching impact, at the pace required to tackle the complex
            challenges of our times.
          </p>
          <h2 className="text-xl mt-4 font-semibold">Creative Consultancy</h2>
          <p className="text-lg mt-4">
            Our capabilities include concept development, curation, spatial and
            experience design. These outcomes may or may not be shared as a
            TERRAIN Project, depending on the level of involvement.
          </p>
        </div>
        <div className="mt-8 scroll-mb-80 scroll-mt-20" id="workshops">
          <h2 className="text-2xl font-semibold">Workshops</h2>
          <p className="text-lg mt-4">
            Currently on offer is our closed-loop mossy terrarium workshop,
            where participants learn to make and maintain their own terrariums
            or one collective large group vessel that are able to self-sustain
            for weeks, months or even years and decades with the right balance
            inside. They are a beautiful example of what tiny organisms teach us
            about the art of seeing, and how nature can support itself alongside
            the processes that make it all possible.
          </p>
          <p className="text-lg mt-4">
            This engaging and hands-on workshop can be booked for private groups
            that can accommodate varying sizes, and is suited for all ages and
            abilities as a nature-oriented activity for school groups,
            leadership, professional development and team building.{" "}
          </p>
        </div>
        <div className="mt-8 min-h-screen scroll-mt-20" id="publicEngagement">
          <h2 className="text-2xl font-semibold">Public engagement</h2>
          <p className="text-lg mt-4">
            We&apos;re happy in openly sharing our vision, experiences and
            projects at events across various audiences and settings, both
            in-person and virtually, locally and internationally.
          </p>
          <div className="mt-8 flex flex-col justify-center h-64">
            <p className="text-4xl font-semibold">
              &rarr; For all consulting, workshop and public engagement
              enquiries,
              <Link href={"mailto:hello@terrain.earth"} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  {" "}
                  <span className="mx-1 cursor-pointer underline text-skin-titles hover:text-skin-titles-darker ">
                    email us
                  </span>
                </a>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
