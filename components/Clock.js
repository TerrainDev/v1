import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function Clock() {
  const [h, sH] = useState(format(new Date(), "HH"));
  const [m, sM] = useState(format(new Date(), "mm"));
  const [s, sS] = useState(format(new Date(), "ss"));

  useEffect(() => {
    let now = setInterval(() => {
      sH(format(new Date(), "HH"));
      sM(format(new Date(), "mm"));
      sS(format(new Date(), "ss"));
    }, 1000);
    return;
  }, []);

  return (
    <>
      <div className=" text-sm lg: text-lg text-blue dark:text-slate-800  dark:font-mono  flex justify-center items-center border border-blue dark:border-slate-800 dark:border-0 rounded-lg mr-4 lg:mr-0 bg-green dark:bg-white">
        <span className=" tabular-nums tracking-tighter px-1 border-r border-blue dark:border-0 dark:border-slate-800">
          {h}
        </span>
        <span className=" tabular-nums tracking-tighter px-1 border-r border-blue dark:border-0  dark:border-slate-800">
          {m}
        </span>
        <span className=" tabular-nums tracking-tighter px-1">{s}</span>
      </div>
    </>
  );
}
