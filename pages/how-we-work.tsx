import LineDivider from 'components/atoms/LineDivider';
import PageSentence from 'components/molecules/PageSentence';
import SectionSentence from 'components/molecules/SectionSentence';
import PageTemplate from 'components/templates/PageTemplate';
import Image from 'next/image';
import React from 'react';

const HowWeWork = () => {
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="HOW WE WORK"
            title="We have a workflow that allows the job to be delivered well"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/discuss-illustration.webp'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt="Some people discuss"
            />
          </div>
        </aside>
        <aside
          className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left"
          data-aos="fade-up-left"
        >
          <SectionSentence
            badge="STEP 01"
            title={`Let's talk about your company's problems first`}
            paragraph={"Discuss the company's services, significant moments in its history, and elements of its mission and ideals that support your professional or personal objectives."}
          />
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside
          className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left"
          data-aos="fade-up-right"
        >
          <SectionSentence
            badge="STEP 02"
            title={`Doing planning,  until everything is finished`}
            paragraph="Planning lowers the likelihood of risk: Planning is a task that allows a manager to look ahead and anticipate changes. Planning takes into account the way to deal with changes and unforeseen consequences by establishing in advance the tasks that must be done. "
          />
        </aside>
        <aside className="w-full" data-aos="fade-up-left">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/development-illustration-2.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt="Development"
            />
          </div>
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/project-asset-illustration.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt="Project Asset"
            />
          </div>
        </aside>
        <aside
          className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left"
          data-aos="fade-up-left"
        >
          <SectionSentence
            badge="STEP 03"
            title={`The project is complete`}
            paragraph="Projects that: the first one satisfy business needs; second one are delivered and maintained on schedule; the third are delivered and maintained under budget; and the last are to provide the anticipated business value and return on investment are considered successful. "
          />
        </aside>
      </section>
      <LineDivider />
    </PageTemplate>
  );
};

export default HowWeWork;
