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
      <div className="  flex border border-blue rounded-lg mr-4 bg-green">
        <span className=" tabular-nums tracking-tighter px-1 border-r border-blue">
          {h}
        </span>
        <span className=" tabular-nums tracking-tighter px-1 border-r border-blue">
          {m}
        </span>
        <span className=" tabular-nums tracking-tighter px-1">{s}</span>
      </div>
    </>
  );
}
