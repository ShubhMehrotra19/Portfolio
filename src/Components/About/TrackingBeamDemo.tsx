"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

export function TrackingBeamDemo() {
  return (
    <TracingBeam className="px-6 mb-10">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative pb-10">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">

            <p className="text-2xl mb-4 font-semibold text-white ">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert text-white object-center">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  className="rounded-lg mb-10 object-cover hover:scale-[102%] hover:shadow-slate-900 hover:shadow-lg hover:transition-all duration-500 hover:ease-in-out"
                  style={{ height: "500px", width: "500px" }}
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "I love travelling 🧳",
    description: (
      <>
        <p className="text-md font-medium mb-3 leading-loose">
         I have always loved to explore and make new memories. Making great experiences and memories is what I love to do.
         I have been to many places and I have many more to go. This is from <span className=" bg-slate-800 opacity-80 text-white p-1 text-center rounded-sm">Cognizance'23</span>. 
        </p>
      </>
    ),
    image:
      "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220898/images/a4cqxq6isrh0iddshavv.png",
  },
  {
    title: "I love Designing 🎨",
    description: (
      <>
        <p className="text-md font-medium mb-3">
        I started UI Designing from my freshman year and now I am well versed in it. I can make designs with <br />
        completely <span className=" bg-slate-800 opacity-80 text-white p-1 text-center rounded-sm">functional prototypes</span>. I have worked with a client and have made designs for him too.
        </p>
      </>
    ),
    image:
      "images/projects/Projects.png",
  },
  {
    title: "I love Hackathons 🥷🏽",
    description: (
      <>
        <p className="text-md font-medium mb-3">
       All this started with my first hackathon at the <span className=" bg-slate-800 opacity-80 text-white p-1 text-center rounded-sm">Cognizance'23 IIT-Roorkee</span> <br />
       I got the motivation to start designing from there and started this whole web-designing journey.
        </p>
      </>
    ),
    image:
      "images/projects/hackathon.png",
  },
  {
    title: "and, I love Basketball 🏀",
    description: (
      <>
        <p className="text-md font-medium mb-3">
       I have loved playing basketball since my Senior year. <br />
        I have been playing it since then and I have been in the <span className=" bg-slate-800 opacity-80 text-white p-1 text-center rounded-sm">college team</span> too.
        </p>
      </>
    ),
    image:
      "https://res.cloudinary.com/dwftb7joy/image/upload/v1709220919/images/odfv5hpkgak4etsz9un9.png",
  },
];