import LazyCard from "components/atoms/LazyCard";
import LineDivider from "components/atoms/LineDivider";
import Text from "components/atoms/Text";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const ProjectDetail = () => {
  const router = useRouter();
  const { index } = router.query;

  interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    image: string;
    imageb: string;
    imagec: string;
  }
  const projectList: Project[] = [
    //Conference Systems
    {
      id: "1",
      category: "Conference-&-Discussion-System",
      title: "Conference & Discussion System",
      description: "A full audio setup that enables comfortable communication among conference participants.",
      image: "/images/projects/CDS2.png",
      imageb: "/images/projects/CDS3.jpg",
      imagec: "/images/projects/CDS4.jpg",
    },
    //Equipment Racks/Cases
    {
      id: "2",
      category: "Electrical-&-Mechanical",
      title: "Equipment Racks",
      description: "An enclosure or frame that is standardized for mounting many electronic equipment components.",
      image: "/images/projects/rer.jpg",
      imageb: "/images/projects/rerr.jpg",
      imagec: "/images/projects/rerrr.jpg",
    },
    //Radio Systems
    {
      id: "3",
      category: "Radio-System",
      title: "Radio System",
      description: "Sophisticated wireless communications systems with a terrestrial foundation. Not every radio. The systems are identical. As a result of their ability to transmit and receive, they are known as two-way radio systems. obtain a signal.",
      image: "/images/projects/RS4.jpg",
      imageb: "/images/projects/re.jpeg",
      imagec: "/images/projects/ree.jpg",
    },
    //Video Projection system
    {
      id: "4",
      category: "Video-Projection-System",
      title: "Video Projection system",
      description: "Comprised of projection panels and projectors. Such systems are utilized to get a bigger image for less money, and they are especially important when a transportable solution is needed.",
      image: "/images/projects/z1.jpg",
      imageb: "/images/projects/z2.jpg",
      imagec: "/images/projects/z3.JPG",
    },
    //Telephone & PABX Systems
    {
      id: "5",
      category: "Telephone-PABX-System",
      title: "Telephone & PABX System",
      description: "Private automatic branch exchanges are switchboards that link various devices, such as telephones, fax machines, and answering machines, to the public telephone network and to one another.",
      image: "/images/projects/pipii.jpg",
      imageb: "/images/projects/PBX1.jpg",
      imagec: "/images/projects/PBX2.jpg",
    },
    //Surveillance Cameras
    {
      id: "6",
      category: "CCTV-System-&-Surveillance-Cameras",
      title: "CCTV System & Surveillance Cameras",
      description: "CCTV cameras can transfer their video directly to a monitor either nearby or at a distance via wired or wireless data networks. On the other hand, video surveillance uses a quick ethernet connection to transfer footage so that it can be stored for later use.",
      image: "/images/projects/xcc.jpg",
      imageb: "/images/projects/xccc.jpg",
      imagec: "/images/projects/cam2.jpg",
    },
    //Speech Laboratory Systems
    {
      id: "7",
      category: "Speech-Laboratory",
      title: "Speech Laboratory System",
      description: "Can develop their oral communication abilities, including proper articulation and pronunciation. There are headphones and other communication devices available in this area.",
      image: "/images/projects/sasa.jpg",
      imageb: "/images/projects/sasa1.jpg",
      imagec: "/images/projects/sasa2.jpg",
    },

    //Intercom-Systems
    {
      id: "8",
      category: "Intercom-System",
      title: "Intercom System",
      description: "A piece of technology that allows for two-way conversation between people. Intercom systems also enable occupants of a building to remotely unlock a gate or door for visitors. ",
      image: "/images/projects/i.jpg",
      imageb: "/images/projects/ii.jpg",
      imagec: "/images/projects/iii.jpg",
    },

    //Paging Power Amplifiers
    {
      id: "9",
      category: "Paging-System",
      title: "Paging System ",
      description: "Enables communication in one direction to a big audience.",
      image: "/images/projects/popo.jpg",
      imageb: "/images/projects/ttt.jpg",
      imagec: "/images/projects/popooo.jpg",
    },

    //Specialize Speakers
    {
      id: "10",
      category: "Specialized-Speaker",
      title: "Waterproof Speaker",
      description: "Greater water protection is provided by waterproof speakers. Many of them are even resistant to being completely submerged in water. In general, unless it's an accident, you shouldn't completely submerge your speaker.",
      image: "/images/projects/ooo.jpg",
      imageb: "/images/projects/oo.jpg",
      imagec: "/images/projects/WS5.jpg",
    },
    {
      id: "11",
      category: "Specialized-Speaker",
      title: "Ceiling Speaker",
      description: "Beautifully detailed music may be sent from above using ceiling speakers, which can also improve the surround sound produced by your speakers. ",
      image: "/images/projects/caaa.jpg",
      imageb: "/images/projects/CS1.jpg",
      imagec: "/images/projects/ca.jpg",
    },

    //Lighting-Systems
    {
      id: "12",
      category: "Lighting-System",
      title: "Lighting System / LED Technology",
      description: "Utilizes one or more central processing devices to integrate communication between multiple system inputs and outputs linked to lighting control.",
      image: "/images/projects/ll.png",
      imageb: "/images/projects/PAR3.jpg",
      imagec: "/images/projects/llll.jpg",
    },
    {
      id: "13",
      category: "Lighting-System",
      title: "Light Controller",
      description: "Controlling the lighting in and around your home may involve turning off lights automatically when they are not needed, lowering light levels when full brightness is not required, or some other method.",
      image: "/images/projects/LG5.JPG",
      imageb: "/images/projects/l4.jpg",
      imagec: "/images/projects/loppp.jpg",
    },

    //Fog Machine
    {
      id: "14",
      category: "Fog-Machine",
      title: " Fog Machine",
      description: "Employed in a variety of settings, such as Halloween haunted homes, dance clubs, pop music concerts, ballets like The Nutcracker, Shakespearean plays, scary movies, fire safety instruction, and industrial testing. Machines for fog and haze are currently available for rental.",
      image: "/images/projects/FOG4.JPG",
      imageb: "/images/projects/fddd.jpg",
      imagec: "/images/projects/FOG6.jpg",
    },

    //Professional-Sound-Systems
    {
      id: "15",
      category: "Professional-Sound-System",
      image: "/images/projects/AMP2.JPG",
      title: "Amplifier",
      description: "Used to boost a speaker's voice loudness so they may be heard more clearly in huge spaces.",
      imageb: "/images/projects/00.jpg",
      imagec: "/images/projects/AMP4.jpg",
    },
    {
      id: "16",
      category: "Professional-Sound-System",
      title: "Wireless System",
      description: "A useful tool for today's tech-savvy age because it makes information sharing simple and increases productivity. ",
      image: "/images/projects/WWR1.JPG",
      imageb: "/images/projects/WWR2.jpg",
      imagec: "/images/projects/WR3.jpg",
    },
    {
      id: "17",
      category: "Professional-Sound-System",
      title: "Wireless Lectern",
      description: "Permit public speakers, interviewers, performers, and entertainers to walk around without restriction while using a microphone that isn't connected to a wire.",
      image: "/images/projects/WL4.jpg",
      imageb: "/images/projects/WL5.jpg",
      imagec: "/images/projects/qwe.jpg",
    },
    {
      id: "18",
      category: "Professional-Sound-System",
      title: "P.A System",
      description: "Uses that range from speech amplification to amplification of electronic musical instruments and A/V to sound reinforcement and stage monitoring for events.",
      image: "/images/projects/PS1.jpg",
      imageb: "/images/projects/pq.jpg",
      imagec: "/images/projects/ppa.png",
    },
    {
      id: "19",
      category: "Professional-Sound-System",
      title: "Audio Mixer",
      description: "Diverse sounds and audio signals, from sources like microphones, instruments, and synthesizers, or previously recorded audio, are mixed, balanced, and combined.",
      image: "/images/projects/aau.jpg",
      imageb: "/images/projects/AD2.jpg",
      imagec: "/images/projects/aauu.jpg",
    },

    //new item
    {
      id: "20",
      category: "Specialized-Speaker",
      title: "Wall Speaker",
      description: "In-ceiling speakers are frequently less powerful and of lower quality than wall speakers.",
      image: "/images/projects/weew.jpg",
      imageb: "/images/projects/wews.jpg",
      imagec: "/images/projects/WALL2.jpg",
    },

    {
      id: "21",
      category: "LED-Wall",
      title: "LED Wall",
      description: "A sizable light-emitting diode display used to show visual material like videos, photos, text, and other visuals. It evokes the impression of a tall, bright wall that lacks any connections between its many component sections.",
      image: "/images/projects/asss.jpg",
      imageb: "/images/projects/ass.jpg",
      imagec: "/images/projects/as.png",
    },
    {
      id: "22",
      category: "Interactive-Devices",
      title: "Interactive Display",
      description: "A touchscreen tablet computer that is bigger than a tablet, allowing users to access, manipulate, and interact with content directly on the screen.",
      image: "/images/projects/SM5.png",
      imageb: "/images/projects/SM3.jpg",
      imagec: "/images/projects/das.jpg",
    },

    {
      id: "23",
      category: "Fire-System",
      title: "Fire Detection Alarm System",
      description: "Produces audio and visual signals as a result of manual or automatic fire alarm initiating devices operating, such as a Manual Fire Alarm station, smoke detector, heat detector, or from other protective equipment, such as a fire sprinkler system.",
      image: "/images/projects/FA1.jpg",
      imageb: "/images/projects/ff.jpg",
      imagec: "/images/projects/FA3.jpg",
    },

    {
      id: "24",
      category: "Window-Intercoms-System",
      title: "Window Intercom System",
      description: "When glass, a security screen, or other such barriers make it difficult to speak normally, provide unambiguous communication. Every system has a hearing loop facility, which facilitates communication for users of hearing aids.",
      image: "/images/projects/qwer.jpg",
      imageb: "/images/projects/yu.jpg",
      imagec: "/images/projects/IN3.jpg",
    },
    
    {
      id: "25",
      category: "Professional-Sound-System",
      title: "Microphone Mixer",
      description: "To quickly activate any microphone that is being spoken to while also attenuating (or lowering in volume) any microphones that are not being spoken to.",
      image: "/images/projects/MC1.jpg",
      imageb: "/images/projects/mama.png",
      imagec: "/images/projects/m.jpg",
    },

    {
      id: "26",
      category: "LED-Category",
      title: "LED Display Board",
      description: "A flat panel display with pixels made up of a number of light-emitting diodes. Due to their brightness, they can be utilized for outdoor billboards and store signs that are visible in the sun.",
      image: "/images/projects/qaa.png",
      imageb: "/images/projects/qaaa.jpg",
      imagec: "/images/projects/qaaaa.jpg",
    },

    {
      id: "27",
      category: "LED-Category",
      title: "LED Calendar Alarm Wall/ Clock with Temperature",
      description: "Each counter has a connection to an electronic chip that sends signals to the display, which displays the time visually using lights. ",
      image: "/images/projects/l5.jpg",
      imageb: "/images/projects/looo.jpg",
      imagec: "/images/projects/loooo.png",
    },

    {
      id: "28",
      category: "LED-Category",
      title: "LED Electronic Scoreboard/ Bulletin Display Board",
      description: "A lever is drawn in by the magnetic field, and as it contacts various parts of the circuit, it generates various outputs. Different electrical signals are given to the switches in accordance with the desired digits, resulting in various reactions.",
      image: "/images/projects/spp.jpg",
      imageb: "/images/projects/sppp.jpg",
      imagec: "/images/projects/s4.jpg",
    },

    {
      id: "29",
      category: "LED-Category",
      title: "LED Digital Clock and Queuing System",
      description: "Using computers, kiosks, mobile devices, or on-site kiosks, users can enter digital lineups created by queue management software.",
      image: "/images/projects/q1.jpg",
      imageb: "/images/projects/q2.jpg",
      imagec: "/images/projects/q3.jpg",
    },

    {
      id: "30",
      category: "Fire-System",
      title: "Fire Protection System",
      description: "Standard construction elements that either actively or passively aid in limiting the amount of damage that may be done to a structure and shielding its occupants from fire.",
      image: "/images/projects/f2.jpg",
      imageb: "/images/projects/f3.jpg",
      imagec: "/images/projects/f4.jpg",
    },
    
    {
      id: "31",
      category: "Fire-System",
      title: "Inert Gas Fire Suppresssion",
      description: "Rely on the idea of lowering the oxygen content inside the protected danger and utilize argon, nitrogen, and their combinations as an extinguishing agent.",
      image: "/images/projects/a2.jpg",
      imageb: "/images/projects/a3.jpg",
      imagec: "/images/projects/a4.jpg",
    },

    {
      id: "32",
      category: "Interactive-Devices",
      title: "Kiosk",
      description: "Businesses employ temporary booths positioned in high-traffic locations to connect with clients in a more direct and casual way. Kiosks can be manned by people or be self-service, and they are largely utilized for marketing purposes.",
      image: "/images/projects/k7.jpg",
      imageb: "/images/projects/k5.jpg",
      imagec: "/images/projects/k4.jpg",
    },

    {
      id: "33",
      category: "Interactive-Devices",
      title: "Queuing System",
      description: "The procedure by which a customer or customers are chosen from those who are waiting for service and how a queue or queues are formed. ",
      image: "/images/projects/dqq.jpg",
      imageb: "/images/projects/dqqq.jpg",
      imagec: "/images/projects/dq4.jpg",
    },

    {
      id: "34",
      category: "Interactive-Devices",
      title: "Smart Whiteboard",
      description: "A touch-sensitive interactive whiteboard that accepts input from users. With your fingers in place of a mouse, you use it the same way you would a computer to edit documents, access the web, and work together on projects.",
      image: "/images/projects/w2.jpg",
      imageb: "/images/projects/w3.jpg",
      imagec: "/images/projects/w4.jpg",
    },

    {
      id: "35",
      category: "Interactive-Devices",
      title: "Wireless Calling System",
      description: "A phone service that dispenses with cellular signals altogether and allows customers to make and receive calls using a wireless internet connection.",
      image: "/images/projects/xv2.jpg",
      imageb: "/images/projects/xv5.jpg",
      imagec: "/images/projects/xv4.jpg",
    },

    {
      id: "36",
      category: "Electrical-&-Mechanical",
      title: "Electrical Breaker",
      description: "An electrical switch created to guard against short circuit, overload, and overcurrent damage to an electrical circuit. ",
      image: "/images/projects/e2.jpg",
      imageb: "/images/projects/e5.jpg",
      imagec: "/images/projects/e4.png",
    },

    {
      id: "37",
      category: "Paging-System",
      title: "Pipe in Music/ BGM System",
      description: "Pipe is a general term for any aerophonic (wind) instrument made of pipes, such as flutes or reed pipes (such as a clarinet), as well as the reed and flue pipes of organs. In music, pipe especially refers to the three-holed flute played with a tabor drum (see pipe and tabor).",
      image: "/images/projects/bg6.jpg",
      imageb: "/images/projects/bg3.jpg",
      imagec: "/images/projects/bg4.png",
    },

    {
      id: "38",
      category: "Acoustic-Treatment-&-Installation",
      title: "Acoustic Treatment & Installation",
      description: "Solutions that aid in sound 's acoustics. These treatments come in a varin of different kinds to obtain the best acoustics possible.",
      image: "/images/projects/aqq.jpg",
      imageb: "/images/projects/aqqq.jpg",
      imagec: "/images/projects/aqqqq.jpg",
    },

    {
      id: "39",
      category: "Digital-Devices",
      title: "Digital Time Zone Clocks",
      description: "A replacement for the conventional analogue clock. On a watch, phone, or alarm clock, this kind of clock uses digits to display the time in a digital format. Both a 12- and 24-hour format is possible.",
      image: "/images/projects/dff.jpg",
      imageb: "/images/projects/d5.jpg",
      imagec: "/images/projects/dffff.gif",
    },

    {
      id: "40",
      category: "Digital-Devices",
      title: "Digital Temperature/ Digital Timers",
      description: "A piece of electronics used to keep something's temperature consistent. The microprocessor-based technique uses a sensor to capture electrical temperature levels and compares them to the intended set point.",
      image: "/images/projects/ds2.jpg",
      imageb: "/images/projects/ds3.jpg",
      imagec: "/images/projects/ds4.jpg",
    },

    {
      id: "41",
      category: "Interactive-Devices",
      title: "Door Access",
      description: "A who, where, and when issue. Who is permitted to enter or exit, where they are permitted to exit or enter, and when they are permitted to do so are all determined by an access control system.",
      image: "/images/projects/drr.png",
      imageb: "/images/projects/drrr.jpg",
      imagec: "/images/projects/drrrr.jpg",
    },

    {
      id: "42",
      category: "Electrical-&-Mechanical",
      title: "Supply/ Cabling of Voice and Data",
      description: "The link between your end device, such as a computer, phone, printer, or fax, and the technology world that enables its use in your organization. To avoid problems, cabling must be done correctly from the start. ",
      image: "/images/projects/daa.jpg",
      imageb: "/images/projects/daaa.jpg",
      imagec: "/images/projects/daaaa.jpg",
    },

    {
      id: "43",
      category: "Lighting-System",
      title: "Lighting Solution",
      description: "Luminaires, lighting architecture, and lighting control technology make up a smart lighting solution.",
      image: "/images/projects/ss3.jpg",
      imageb: "/images/projects/zxxx.png",
      imagec: "/images/projects/zxx.jpg",
    },

    {
      id: "44",
      category: "LED-Category",
      title: "Production Counter",
      description: "A counter system display that keeps tabs on the actual daily production figures generated in your plant.",
      image: "/images/projects/czz.png",
      imageb: "/images/projects/czzz.jpg",
      imagec: "/images/projects/czzzz.png",
    },

    {
      id: "45",
      category: "LED-Category",
      title: "LED Scrolling/ Running Message",
      description: "It is possible to create an LED scrolling message display matrix by connecting all of the anodes to a microcontroller and the columns to a shift register (74LS164).",
      image: "/images/projects/laa.jpg",
      imageb: "/images/projects/laaa.jpg",
      imagec: "/images/projects/ww.jpg",
    },

    {
      id: "46",
      category: "LED-Category",
      title: "Foreign Currency Exchange Rate Board (FOREX)",
      description: "A board with LED displays that shows changes in exchange rates. In a variety of businesses, including banks, hotels, airports, jewelry stores, and others, it can also be utilized for price display.",
      image: "/images/projects/mqq.jpg",
      imageb: "/images/projects/mqqq.jpg",
      imagec: "/images/projects/mqqqq.jpg",
    },

    {
      id: "47",
      category: "Air-Ventilation-System",
      title: "Air Ventilation System",
      description: "Supply ventilation systems use a fan to pressurize your house, bringing outside air inside while allowing air to escape through gaps in the shell, bathroom and range fan duct leaks, and (if any) purposeful vents.",
      image: "/images/projects/avv.jpg",
      imageb: "/images/projects/a8.jpg",
      imagec: "/images/projects/a9.jpg",
    },

    {
      id: "48",
      category: "Ducting-Ventilation",
      title: "Ducting Ventilation",
      description: "air delivery and removal conduits or passageways used in heating, ventilation, and air conditioning (HVAC). Examples of the necessary airflows include supply air, return air, and exhaust air. As part of the supply air, ducts frequently deliver ventilation air as well.",
      image: "/images/projects/a6.jpg",
      imageb: "/images/projects/avvvv.jpg",
      imagec: "/images/projects/a7.jpg",
    },

  ];


  const filteredProducts = projectList.filter(
    (product) => product.id === `${index}`
  );
  return (
    <PageTemplate title="Project Detail - AUDIO 4">
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Products Landing Page"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProducts.map((product) => (
          <>
            <aside data-aos="fade-up-right">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
              />
            </aside>
            <aside data-aos="fade-up-right">
              <Image
                src={product.imageb}
                alt={product.title}
                width={300}
                height={300}
              />
            </aside>
            <aside data-aos="fade-up-right">
              <Image
                src={product.imagec}
                alt={product.title}
                width={300}
                height={300}
              />
            </aside>
            <aside
              className="grid gap-12 place-content-center"
              data-aos="fade-up-left"
            >
              <Text
                textStyle="SectionParagraph"
                value={`${product.description}`}
              />
              <div className="grid gap-6">
              

                <div className="grid gap-2">
                  <Text value="PROJECT NAME" textStyle="ProjectDetailLabel" />
                  <Text
                    value={`${product.title}`}
                    textStyle="ProjectDetailValue"
                  />
                </div>
              </div>
            </aside>
          </>
        ))}
      </section>
      <LineDivider />
      <section className="grid gap-16 place-items-center">
        <div
          className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Product Landing Page"
          />
        </div>
      </section>
    </PageTemplate>
  );
};

export default ProjectDetail;
