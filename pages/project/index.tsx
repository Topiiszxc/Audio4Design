import Button from "components/atoms/Button";
import Select from "components/atoms/Form/Select";
import LineDivider from "components/atoms/LineDivider";
import PageSentence from "components/molecules/PageSentence";
import ProjectCard from "components/molecules/Card/ProjectCard";
import PageTemplate from "components/templates/PageTemplate";
import React, { useState, ChangeEvent } from "react";

import randomString from "utils/randomString";

const Project: React.FC = () => {
  interface Project {
    num: string;
    category: string;
    title: string;
    image: string;
  }
  const projectList: Project[] = [
    //Conference Systems
    {
      num: "1",
      category: "Conference-&-Discussion-System",
      title: "Conference & Discussion System",
      image: "/images/projects/CDS1.jpg",
    },
    //Equipment Racks/Cases
    {
      num: "2",
      category: "Electrical-&-Mechanical",
      title: "Equipment Racks",
      image: "/images/projects/Q1.PNG",
    },
    //Radio Systems
    {
      num: "3",
      category: "Radio-System",
      title: "Radio System",
      image: "/images/projects/RR.JPG",
    },
    //Video Projection system
    {
      num: "4",
      category: "Video-Projection-System",
      title: " Video Projection system",
      image: "/images/projects/VPS1.jpg",
    },
    //Telephone & PABX Systems
    {
      num: "5",
      category: "Telephone-PABX-System",
      title: "Telephone & PABX System",
      image: "/images/projects/pipi.jpg",
    },
    //Surveillance Cameras
    {
      num: "6",
      category: "CCTV-System-&-Surveillance-Cameras",
      title: "CCTV System & Surveillance Cameras",
      image: "/images/projects/xc.jpg",
    },
    //Speech Laboratory Systems
    {
      num: "7",
      category: "Speech-Laboratory",
      title: "Speech Laboratory Systems",
      image: "/images/projects/Laboratory.jpg",
    },

    //Intercom-Systems
    {
      num: "8",
      category: "Intercom-System",
      title: "Intercom System",
      image: "/images/projects/iiii.jpg",
    },

    //Paging Power Amplifiers
    {
      num: "9",
      category: "Paging-System",
      title: "Paging System ",
      image: "/images/projects/popoo.jpg",
    },

    //Specialize Speakers
    {
      num: "10",
      category: "Specialized-Speaker",
      title: "WaterProof Speaker",
      image: "/images/projects/oooo.jpg",
    },
    {
      num: "11",
      category: "Specialized-Speaker",
      title: "Ceiling Speaker",
      image: "/images/projects/Ceiling.jpg",
    },

    //Lighting-Systems
    {
      num: "12",
      category: "Lighting-System-&-LED-Technology",
      title: "Lighting System & LED Technology",
      image: "/images/projects/l.jpg",
    },
    {
      num: "13",
      category: "Lighting-System-&-LED-Technology",
      title: "Light Controllers",
      image: "/images/projects/LG6.JPG",
    },

    //Fog Machine
    {
      num: "14",
      category: "Fog-Machine",
      title: " Fog Machine",
      image: "/images/projects/FOOG.JPG",
    },

    //Professional-Sound-Systems
    {
      num: "15",
      category: "Professional-Sound-System",
      image: "/images/projects/AMP1.JPG",
      title: "Amplifier",
    },
    {
      num: "16",
      category: "Professional-Sound-System",
      title: "Wireless System",
      image: "/images/projects/wireless.webp",
    },
    {
      num: "17",
      category: "Professional-Sound-System",
      title: "Wireless  Lectern",
      image: "/images/projects/WirelessLecturn.jpg",
    },
    {
      num: "18",
      category: "Professional-Sound-System",
      title: "P.A System",
      image: "/images/projects/papa.jpg",
    },
    {
      num: "19",
      category: "Professional-Sound-System",
      title: "Audio Mixer",
      image: "/images/projects/AD1.jpg",
    },

    //new item
    {
      num: "20",
      category: "Specialized-Speaker",
      title: "Wall Speaker",
      image: "/images/projects/wall.jpg",
    },

    {
      num: "21",
      category: "LED-Category",
      title: "LED Wall",
      image: "/images/projects/LED1.PNG",
    },
    {
      num: "22",
      category: "Interactive-Devices",
      title: "Interactive Display",
      image: "/images/projects/SM1.png",
    },

    {
      num: "23",
      category: "Fire-System",
      title: "Fire Detection Alarm System",
      image: "/images/projects/fire.jpeg",
    },
    {
      num: "24",
      category: "Window-Intercoms-System",
      title: "Window Intercoms",
      image: "/images/projects/IN1.jpg",
    },

    {
      num: "25",
      category: "Professional-Sound-System",
      title: "Microphone Mixer",
      image: "/images/projects/mmm.jpg",
      
    },

    {
      num: "26",
      category: "LED-Category",
      title: "LED Display Board",
      image: "/images/projects/qa.jpg",
      
    },

    {
      num: "27",
      category: "LED-Category",
      title: "LED Calendar Alarm Wall/ Clock with Temperature",
      image: "/images/projects/loo.jpg",
      
    },

    {
      num: "28",
      category: "LED-Category",
      title: "LED Electronic Scoreboard/ Bulletin Display Board",
      image: "/images/projects/sp.jpg",
      
    },

    {
      num: "29",
      category: "LED-Category",
      title: "LED Digital Clock and Queuing System",
      image: "/images/projects/lkk.avif",
      
    },

    {
      num: "30",
      category: "Fire-System",
      title: "Fire Protection System",
      image: "/images/projects/f1.jpg",
    },

    {
      num: "31",
      category: "Fire-System",
      title: "Inert Gas Fire Suppresssion",
      image: "/images/projects/a1.jpg",
    },

    {
      num: "32",
      category: "Interactive-Devices",
      title: "Kiosk",
      image: "/images/projects/k1.jpg",
    },

    {
      num: "33",
      category: "Interactive-Devices",
      title: "Queuing System",
      image: "/images/projects/lp.avif",
    },

    {
      num: "34",
      category: "Interactive-Devices",
      title: "Smart Whiteboard",
      image: "/images/projects/w1.jpg",
    },

    {
      num: "35",
      category: "Interactive-Devices",
      title: "Wireless Calling System",
      image: "/images/projects/xv1.jpg",
    },

    {
      num: "36",
      category: "Electrical-&-Mechanical",
      title: "Electrical Breaker",
      image: "/images/projects/e1.jpg",
    },

    {
      num: "37",
      category: "Paging-System",
      title: "Pipe in Music/ BGM System",
      image: "/images/projects/bg1.png",
    },

    {
      num: "38",
      category: "Acoustic-Treatment-&-Installation",
      title: "Acoustic Treatment & Installation",
      image: "/images/projects/aq.jpg",
    },

    {
      num: "39",
      category: "Digital-Devices",
      title: "Digital Time Zone Clocks",
      image: "/images/projects/df.jpg",
    },

    {
      num: "40",
      category: "Digital-Devices",
      title: "Digital Temperature/ Digital Timers",
      image: "/images/projects/ds1.jpg",
    },

    {
      num: "41",
      category: "Interactive-Devices",
      title: "Door Access",
      image: "/images/projects/dr.jpg",
    },

    {
      num: "42",
      category: "Electrical-&-Mechanical",
      title: "Supply/ Cabling of Voice and Data",
      image: "/images/projects/da.jpg",
    },

    {
      num: "43",
      category: "Lighting-System-&-LED-Technology",
      title: "Lighting Solution",
      image: "/images/projects/sqq.jpg",
    },

    {
      num: "44",
      category: "LED-Category",
      title: "Production Counter",
      image: "/images/projects/cz.png",
      
    },

    {
      num: "45",
      category: "LED-Category",
      title: "LED Scrolling/ Running Message",
      image: "/images/projects/la.jpg",
      
    },

    {
      num: "46",
      category: "LED-Category",
      title: "Foreign Currency Exchange Rate Board (FOREX)",
      image: "/images/projects/mq.jpg",
      
    },

    {
      num: "47",
      category: "Air-Ventilation-System",
      title: "Air Ventilation System",
      image: "/images/projects/av.jpg",
      
    },

    {
      num: "48",
      category: "Ducting-Ventilation",
      title: "Ducting Ventilation",
      image: "/images/projects/a5.jpg",
      
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const filteredProducts: Project[] = selectedCategory
    ? projectList.filter((product) => product.category === selectedCategory)
    : projectList;

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <PageTemplate title="Project - AUDIO 4">
      <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <aside
          className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12"
          data-aos="fade-right"
        >
          <div className="text-center md:text-left">
            <PageSentence
              badge="PROJECTS/SERVICES OFFERED"
              title="We have  many amazing Products for your needs"
            />
          </div>
        </aside>
        <aside className="w-full min-w-[375px] md:w-fit  " data-aos="fade-left">
          <Select
            onChange={handleCategoryChange}
            options={[
              { label: "Conference & Discussion System", value: "Conference-&-Discussion-System" },
              { label: "Specialized Speaker", value: "Specialized-Speaker" },
              {
                label: "Paging System",
                value: "Paging-System",
              },
              {
                label: "Professional Sound System",
                value: "Professional-Sound-System",
              },
              {
                label: "Fog Machine",
                value: "Fog-Machine",
              },
              {
                label: "Lighting System & LED Technology",
                value: "Lighting-System-&-LED-Technology",
              },
              {
                label: "Intercom System",
                value: "Intercom-System",
              },
              {
                label: "Speech Laboratory",
                value: "Speech-Laboratory",
              },
              {
                label: "CCTV System & Surveillance Cameras",
                value: "CCTV-System-&-Surveillance-Cameras",
              },
              {
                label: "Telephone & PABX System",
                value: "Telephone-PABX-System",
              },
              {
                label: " Video Projection System",
                value: "Video-Projection-System",
              },
              {
                label: "Radio System",
                value: "Radio-System",
              },
              {
                label: "Electrical & Mechanical",
                value: "Electrical-&-Mechanical",
              },

              {
                label: "LED Category",
                value: "LED-Category",
              },
              {
                label: "Interactive Devices",
                value: "Interactive-Devices",
              },
              {
                label: "Fire System",
                value: "Fire-System",
              },
              {
                label: "Window Intercoms System",
                value: "Window-Intercoms-System",
              },
              {
                label: "Acoustic Treatment & Installation",
                value: "Acoustic-Treatment-&-Installation",
              },
              {
                label: "Digital Devices",
                value: "Digital-Devices",
              },
              {
                label: "Air Ventilation System",
                value: "Air-Ventilation-System",
              },
              {
                label: "Ducting Ventilation",
                value: "Ducting-Ventilation",
              },
            ]}
          />
        </aside>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 gap-y-12 mt-64 sm:grid-cols-2 sm:gap-x-5">
          {filteredProducts.map((project) => {
            return (
              <div
                className="basis-full lg:basis-1/2"
                key={randomString(64)}
                data-aos="zoom-in-up"
              >
                <ProjectCard
                  num={project.num}
                  title={project.title}
                  image={project.image} description={""}                />
              </div>
            );
          })}
        </div>
      </section>
    </PageTemplate>
  );
};

export default Project;
