import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import { NavLink } from "react-router-dom";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-transparent w-full">
      <MacbookScroll
        badge={
          <NavLink to="https://shubh-portfolio-delta.vercel.app/">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </NavLink>
        }
        src={`https://shubh-portfolio-delta.vercel.app/`}
        showGradient={false}
      />
    </div>
  );
}

const Badge = ({ className }: { className?: string }) => {
  return (
  <>
  <img className="h-12 w-12 rotate-12" src="/images/Shubh_AvatarSmiling.png" alt="" />
  </>
  );
};
