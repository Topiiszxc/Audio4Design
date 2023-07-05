import LineDivider from 'components/atoms/LineDivider';
import FaqTabbar from 'components/molecules/FaqTabbar';
import PageSentence from 'components/molecules/PageSentence';
import FaqList from 'components/organisms/FaqList';
import PageTemplate from 'components/templates/PageTemplate';
import React, { useEffect, useState } from 'react';
import getRandomItemsFromArray from 'utils/getRandomItemsFromArray';

const Faq = () => {
  const faqs = [
    {
      title: `Our Manpower`,
      description: `The Company has a team of people passionate about their work & dedicated to excellence. It has engaged the services of capable and skillful manpower, expert engineers who underwent thorough sales & technical training focused on service and commitment.`,
    },
    {
      title: `Our Service`,
      description: `Audio 4 Design n Technology is engaged in providing its Clientele a technological expertise with a high quality service. It is your company and guide in improving your Audio Systems for it offers services from consultation/ inspection, demonstration to installation. The company extends its service to accompany you even after the completion of the project. It also includes the service to introduce to you the most appropriate and newest technology for your Systems.
      `,
    },
    {
      title: `Our Mission / Vision      `,
      description: `We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.`,
    },
  ];
  const [randomFaqs, setRandomFaqs] = useState([faqs, faqs, faqs, faqs]);
  const [activeFaq, setActiveFaq] = useState(faqs);
  useEffect(() => {
    const faqs = [
      {
        title: `Government`,
        description: `- Air  Force<br>- Bangko Sentral ng Pilipinas, Manila<br>- Bureau of Customs, Manila<br>- Bureau of Soils and Water Management<br>- Bureau of Internal Revenue Fisher Mall<br>- Department of Health, Manila<br>- Department of Public Works and Highways, Manila<br>- IBAAN, Batangas<br>- Local Government Academy, DILG<br>- Malacana-Office o the President, Manila<br>- Manila International Airport Authority, Pasay<br>- Mendoza Park, Palawan<br>- Philippine Drug Enforcement Agency<br>- Philippine Statistical Research and Training Institute<br>- Palawan Tropical Forestry Protection Program, Palawan
                      <br>- Pamantasan ng Lungsod ng Manila, Manila<br>- Philippine International Convention Center, Manila<br>- Philippine International Convention Center, Manila<br>- Philippine International Trading Corp./ Philippine Army<br>- Philippine Normal University, Manila<br>- Philippine Senate, Manila<br>
                      - Puerto Princesa Palawan Coliseum<br>- DOST, Science and Technology Information Institute, Taguig<br>- PCIEERD<br>- National Research and Development Council<br>- MIRDC<br>- Supreme Court of the Philippines, Manila and Cebu<br>- Tolentino Sports and Activity Center, Tagaytay City<br>- US Embassy/ Peace Corps, Manila<br>-
                      Land Transportation Office<br>- University of the Philippines<br>- University of the Philippines System<br>- UP Business Research and Foundation Inc., Quezon City<br>- NAIA Terminal 3<br>- PMS- President Management Staff<br>- Maynilad<br>- Marikina City Government<br>- Teatro ng Marikina (UFC Christian Ministry)<br>- Marikina Sports Complex<br>
                      - BLGI Enterprise/ Parang Brgy.<br>- Sto. Tomas Municipal Hall<br>- Zamboanga Coliseum, Zamboanga<br>- National Kidney & Transplant Institute<br>- Mandaluyong City Government<br>- Comission on Audit<br>- Manila City Hall- Session HAll<br>- Manila Paco Park<br>- HDMF<br>- Philippine Charity Sweepstake Office<br>- Department of Agriculture<br>- Quezon City Sports Club<br>
                      - City Government of Tanaun<br>- Department of Interior and Local Government<br>- Department of Environment and Natural Resources<br>- National Grid<br>- Department of Transportation and Communication<br>- Department of Labor and Employment<br>- Philippine Statistic Authority, Quezon City`,
      },
      {
        title: `Corporate Accounts (Private)`,
        description: `ALC Group of Companies<br>- Araneta Center<br>- Alster Shipping Services Inc.<br>- Asia Incorporated<br>- BRHL Trading<br>- CATW-AP<br>- Charter Chemical Coating Corp.<br>- Comspec, Naga City<br>- Daeduck Phils., Cavite<br>- Digiwave Solutions Inc./ Premier Entertainment<br>- Gardenia Bakeries Philippines Inc.<br> -Globe Telecom<br>
                      - Isuzu Philippines<br>- Kaisa KA<br>- L'oreal Phils.,Inc.<br>- Lotus Packaging<br>- Manila Water Company Inc.<br>- Marlow Navigation Phils.,Inc.<br>*Training Room<br>* Dormitory<br>* Roofdeck Bar<br>* Simulator Rooms<br><br>- N-Tech Sounds & Lights, Pasay City<br>- Petron Corporation<br>- Cultural Hall, Makati<br>- Executive Lounge, Makati<br>- Board Room, Makati<br>- Petron Refinery, Bataan<br>- Petron Mega Plaza<br>
                      -Pointwest Technologies, Makati<br>- Samsung Electronics Phils.,Mfg.Corp.<br>- Standard Insurance<br>- Steel Asia Manufacturing Corporation<br>- Smart Communications<br>- Smart Communication (Jump Megamall)<br>- Taylor Nelsons Sofres Trends (TNS)<br>- Kalayaan Ave., Quezon City<br>- Shaw Blvd, Edsa Office<br>- Makati City Office<br>- Tom's World/ Fun House<br>- Wrigley Philippines, Inc.<br>- Wyeth Phils,Inc.<br>
                      -Small Business Guarantee & Finance Corporation<br> - AXA Philippines<br>- TS Tech Trim<br>- Datalec Technology Corporation<br> -HB Lumbang Electric and Industrial Corp.<br>- Yew Tree Services, Inc.<br>- Magsaysay Learning Resource Center<br>- Tzu Chi Foundation<br>- Media Convergence<br>- Micro Image International Corp.<br>- Pioneer Insurance Surety Corporation<br>
                      - Macquarie<br>- Jones lang at Yahoo<br>- Multiflex RNC Philippines Inc.(Uratex Philippines)<br>- Vibal Publishing<br>- RLINK Business Solution<br>- Solid State Infotech, Inc<br>- Philippine Pizza, Incorporated<br>- Alphaland<br>- Farmers Plaza<br>- Kawasaki Motors Philippines Inc.<br>- Sonion Philippines<br>- AIG Shared Sevices-Business Processing.,Inc.<br>- ASEANA HOLDINGS<br>- Lazada Warehouse-Calamba Laguna<br>
                      - Steel Asia, Calaca Batangas<br>- KAWASAKI, Muntinlupa City<br>- Arkray Industry West Inc.<br>- Standard Insurance Warehouse<br>- ASEANA 2,3 Bldg, Baclaran<br>- Asian Cable Enterprice<br>- Sanitary Care Products Asia, Inc. `,
      },
      {
        title: `Fitness Center/ Spa/ Salon `,
        description: `-Fitness First Philippines, Inc.<br>*Fitness First- RSC, Makati<br>*Fitness First- RCBC, Spa & Mandarin<br>*Fitness First- ABS-CBN<br>*Fitness First- Greenhills<br>*Fitness First- Eastwood, Libis<br>*Fitness First- Fort Bonifacio<br>*Fitness First- RME<br>*Fitness First- Alabang<br>*Fitness First- Cebu City<br>*Fitness First- Wynsum, Ortigas<br>*Fitness First- Manila<br>*Fitness First- SM, Southmall<br>*Fitness First- SM, North Edsa<br>*Fitness First- Pampanga<br>*Fitness First- Mall of Asia<br>*Fitness First- Trinoma<br>*Fitness First- Megamall
                      <br><br>- Zunic Philippines<br>*Makati City Office<br>*Alabang, Muntinlupa<br>*Timog, Manila<br><br>- Premium Wellness Venture Inc.  `,
      },
      {
        title:`Churches (Private)`,
        description:`-Kawilihan Chapel<br>- Our Lady of Holy Rosary Parish Church<br>- Bayan ng Diyos Church<br>- Couples for Christ<br>- Our Lady of Perpetual Help<br>- Nustra Senora De Salvation Parish Church<br>- Sta. Maria Della Strada-Quezon City<br>- San Agustin Church-Lubao Pampanga<br>- St. Alphonsus (Magallanes Church)<br>- United Church of Christ in the Phils., Calamba Chapter<br>- Sta. Ana Parish- Sta. Ana, Pampanga<br>- Our Lady of Miraculous Church-Project 4, Quezon City<br>- St. Peter the Fisherman Parish, Taguig City`,
      },
      {
        title:`Club House/ Resorts/ Hotels`,
        description:`- Traders Hotel<br>- Discovery Shores Boracay<br>- Discovery Suites<br>- Crystal Paradise Resort<br>- Cherry Blossoms Hotel<br>- Hyatt Hotel & Casino Manila<br>- Sulo Hotel<br>- City Garden Hotel<br>- Herald Suites<br>- Mandarin Oriental Hotel<br>- Citystate Tower Hotel Inc.<br>- Oxford Princess Casino<br>- Pussy Cat Bar<br>- SEDA Hotel<br>- Bayview Park Hotel<br>- Daisy Drive Inn<br>- Marriot Hotel Manila & Countyard Iloilo<br>- Traveller International Hotel Group Inc.<br>- Marriot Hotel Manila<br>- Lion's Park Residence`,
      },
      {
        title:`Call Centers/ BPO`,
        description:`- I-Contacts Corporation<br>- UT Starcom<br>- E-Performax<br>- Sutherland Global Services Philippines Inc.<br>- NTT Communication Philippines, Corp.`,
      },
      {
        title:`Residentials`,
        description:`- Lion's Park Residence<br>- Mr. Pancho Branas<br>- Gen. Nuqui Residence`,
      },
      {
        title:`Stores/ Supermarket/ Malls`,
        description:`- Citistores, Inc./ Centro Department Stores/ Uno Factory Outlet<br>* Centro Dep't Store, Olongapo<br>* Centro Dep't Store, Solano, Nueva Vizcaya<br>* Centro Dep't Store, Cauayan, Isabela<br>* Centro Dep't Store, San Pablo, Laguna<br>* Centro Dep't Store, Santiago, Isabela<br>* Centro Dep't Store, Sta. Cruz, Laguna<br>* Centro Dep't Store, Tuguegarao<br>* Centro Dep't Store, Catbalogan<br>* Centro Dep't Store, Daet<br>* Centro Dep't Store, Sorsogon<br>* Uno Outlet, Cabanutuan<br><br>- Waltermarts Malls and Supermarket<br>* Waltermart- North Edsa
                    <br>* Waltermart- Makati<br>* Waltermart- Sta. Maria<br>* Waltermart- Sta. Rosa<br>* Waltermart- Plaridel<br>* Waltermart- Calamba<br>* Waltermart- E.Rodriguez Ave. <br>* Waltermart- Dasmarinas`,
      },
      {
        title:`Disco/ Bars/ KTV's/ Restaurants`,
        description:`- Chicks O' Clock Sing Along & Lugawan<br>- Carlo's Bar and Restaurant<br>- Baang's Cafe<br>- Rockafella Restobar, Tagaytay<br>- Music 22<br>- Crobar, Malate<br>- Piedra, Fort Bonifacio<br>- Mezze Bar, Greenbelt, Makati<br>- Bottom's Bar, P. Burgos, Makati<br>- Filling Station, P. Burgos, Makati<br>- Society Lounge<br>- Johny Rockets<br>- The Mansion-Clark Pampanga<br>- Dairy Queen<br>* Blue Wave<br>* Waltermart Makati<br>* SM Sanlazaro<br>* MOA<br>* Pampanga<br>* Malolos<br>* SM Manila<br>* Robinson Magnolia<br>* Sm Marikina<br>* SM Sta. Mesa<br><br>- Queensland Catering Services`,
      },
      {
        title:`Private Hospital's`,
        description:`- Makati Medical Center<br>- Tagaytay Hospital & Medical Ceneter<br>- Veterans Memorial Medical Center<br>- St.Lukes Hospital, Taguig and Quezon City<br>- Las Pinas Doctors Hospital<br>- De Los Santos Medical Center<br>- Veterance Memorial Medical Center`,
      },
      {
        title:`Private Schools`,
        description:`- Dela Salle, Green Hills Campus<br>- Dela Salle, Dasmarinas Campus<br>- Dela Salle, Araneta University<br>- Lyceum of the Philippines, Manila<br>- Lyceum of the Philippines, Makati<br>- Lyceum of the Philippines, Cavite<br>- FEU East Asia College<br>- Enderun Colleges<br>- Delos Santos STI College<br>- Dr. Espinosa School Masbate<br>- Asian Institute of Management<br>- Jubilee Christian Academy<br>- St. Benedict College<br>- STI Taft<br>
                     - Southville International School<br>- University of Batangas<br>- Adamson University<br>- Centro Escolar University<br> - University of Baguio<br>- Chair of St. Peter School<br>- Rizal Technological University<br>- Centro De Cultura<br>- University of the East<br>- St. Benedictine Institute of Learning`,
      },
      {
        title:`Private Banks`,
        description:`- Bank of Makati<br>- Metrobank<br>- Premiere Bank<br>- PBCOM<br>* F1-Global City<br>* T.Alonzo<br>* Ongpin<br>* Masangkay<br>* Baguio<br>* La Union<br>* Pampanga<br>* Calamba<br>* Binondo<br>* Lucena<br>* Lipa<br>* Batangas<br><br>- Philippine National Bank, Main Office`,
      },
    ];
    setRandomFaqs([
      faqs,
      getRandomItemsFromArray(faqs, 5),
      getRandomItemsFromArray(faqs, 4),
      getRandomItemsFromArray(faqs, 3),
    ]);
  }, []);
  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div
          className="sm:w-10/12 md:8/12 lg:w-6/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="FAQ"
            title="Frequently asked questions, maybe the same as yours"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5">
        <div className="basis-12/12 md:basis-4/12" data-aos="fade-up">
          <FaqTabbar
            tabs={[
              {
                name: 'General',
                onClick: () => {
                  setActiveFaq(randomFaqs[0]);
                },
              },
              {
                name: 'Our Clients ',
                onClick: () => {
                  setActiveFaq(randomFaqs[0]);
                },
              },
            ]}
          />
        </div>
        <div className="basis-12/12 md:basis-8/12">
          <FaqList faqs={activeFaq} />
        </div>
      </section>
      <LineDivider />
    </PageTemplate>
  );
};

export default Faq;
