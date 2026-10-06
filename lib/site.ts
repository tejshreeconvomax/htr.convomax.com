// Site-wide shared data for the HTR-India replica.

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  {
    label: "All Products",
    href: "/all-products",
    children: [
      { label: "Battery Management Shunts", href: "/product-category/battery-management-shunt" },
      { label: "Electron Beam Welded", href: "/product-category/electron-beam-welded-resistors" },
      { label: "Aluminium Housed", href: "/product-category/aluminium-housed-resistors" },
      { label: "Metal Clad", href: "/product-category/metal-clad-resistors" },
      {
        label: "Wire Wound",
        href: "/product-category/wire-wound-resistors",
        children: [
          { label: "Ceramic Encased", href: "/product-category/wire-wound-resistors/ceramic-encased-resistor-wire-wound-resistors" },
          { label: "Silicone Coated", href: "/product-category/wire-wound-resistors/silicone-coated-resistors" },
          { label: "Symmetry", href: "/product-category/current-sense-resistors/symmetry-resistors" },
        ],
      },
      {
        label: "Current Sense",
        href: "#",
        children: [
          { label: "Current Sense Ceramic Encased", href: "/product-category/current-sense-resistors/ceramic-encased-resistor" },
          { label: "Current Sense Open Frame", href: "/product-category/current-sense-resistors/ceramic-sense-open-frame-resistors" },
          { label: "Current Sense Electron Beam Welded", href: "/product-category/electron-beam-welded-resistors" },
        ],
      },
      { label: "Surface Mount Resistors", href: "/product-category/surface-mount-resistors" },
      { label: "HVAC Solutions", href: "/hvac-solutions" },
      { label: "Noise Suppressor Resistors", href: "/product-category/automotive/noise-suppressor-resistor-automotive" },
      { label: "Resistive Load Banks", href: "/product-category/custom-resistive-load-banks" },
      { label: "Custom Products", href: "/custom-products" },
      { label: "Automotive", href: "/product-category/automotive" },
    ],
  },
  {
    label: "Distributors",
    href: "/distributors",
    children: [
      { label: "Distributors in India", href: "/distributors-in-india" },
      { label: "Worldwide Distributors", href: "/distributors" },
    ],
  },
  { label: "Certifications", href: "/certifications" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

// Left "CATEGORIES" sidebar links
export const sidebarCategories: NavItem[] = [
  { label: "Battery Management Shunts", href: "/product-category/battery-management-shunt" },
  { label: "Electron Beam Welded Resistors", href: "/product-category/electron-beam-welded-resistors" },
  { label: "Aluminium Housed Resistors", href: "/product-category/aluminium-housed-resistors" },
  { label: "Metal Clad Resistors", href: "/product-category/metal-clad-resistors" },
  {
    label: "Wire Wound Resistors",
    href: "/product-category/wire-wound-resistors",
    children: [
      { label: "Silicone Coated Resistors", href: "/product-category/wire-wound-resistors/silicone-coated-resistors" },
      { label: "Symmetry Resistors", href: "/product-category/current-sense-resistors/symmetry-resistors" },
      { label: "Ceramic Encased Resistor", href: "/product-category/wire-wound-resistors/ceramic-encased-resistor-wire-wound-resistors" },
    ],
  },
  {
    label: "Current Sense Resistors",
    href: "#",
    children: [
      { label: "Current Sense Ceramic Encased Resistors", href: "/product-category/current-sense-resistors/ceramic-encased-resistor" },
      { label: "Current Sense Open Frame Resistors", href: "/product-category/current-sense-resistors/ceramic-sense-open-frame-resistors" },
      { label: "Current Sense Electron Beam Welded Resistors", href: "/product-category/electron-beam-welded-resistors" },
    ],
  },
  { label: "Surface Mount Resistors", href: "/product-category/surface-mount-resistors" },
  { label: "Resistive Load Banks", href: "/product-category/custom-resistive-load-banks" },
  {
    label: "Automotive",
    href: "#",
    children: [
      { label: "Noise Suppressor Resistors", href: "/product-category/automotive/noise-suppressor-resistor-automotive" },
      { label: "HVAC Solutions", href: "/hvac-solutions" },
    ],
  },
  { label: "Noise Suppressor Resistor", href: "/product-category/automotive/noise-suppressor-resistor-automotive" },
  { label: "Custom Products", href: "/custom-products" },
];

// Blue button resource links under the sidebar categories
export const sidebarResourceLinks: NavItem[] = [
  { label: "Test Equipment", href: "/testing-validation" },
  { label: "cross reference chart", href: "/cross-reference-chart" },
  { label: "design notes", href: "/design-notes" },
  { label: "resistors by application", href: "/resistors-by-application" },
  { label: "automotive resistor usage", href: "/automotive-resistor-usage" },
  { label: "marking / taping", href: "/marking-taping" },
];

export const contact = {
  phones: ["+91-712-2533269", "+91-712-2531134", "+91-712-6617117"],
  telHref: "tel:+917122533269",
  emails: [
    { address: "info@htr-india.com", note: "For sales within India" },
    { address: "sales@htr-india.com", note: "International Sales" },
  ],
  whatsapp: "+91-8484880570",
  whatsappHref: "https://wa.me/+918484880570",
  address: "Buty Compound, Mount Road Extension, Nagpur – 440001, Maharashtra, India",
  telephoneFull: "(91-712) 2531134, 2533269, 2553691, 2531134",
  appStore: "https://apps.apple.com/us/app/htr-resistor-finder/id923363496",
  googlePlay: "https://play.google.com/store/apps/details?id=com.HtrApp&hl=en",
  webApp: "https://htr-india.com/app/v2/",
  convomax: "https://www.convomax.com/",
};

export type Distributor = {
  country: string;
  flag?: string;
  name: string;
  lines: string[];
};

export const worldwideDistributors: Distributor[] = [
  { country: "Australia", flag: "/images/flags/Australia-Flag.png", name: "Arrow Electronics", lines: ["14, Nicole Close, Bayswater, Victoria 3153", "Tel: +613 97374900", "Email: sales.anz@arrowasia.com"] },
  { country: "Austria", flag: "/images/flags/Austria-Flag.png", name: "AEK GMBH", lines: ["Lagerhausstrasse 8 5071 Wals/Salzburg | Austria", "Tel: +43 (0)662 830 810", "Fax: +43 (0)662 830 810 18", "Email: office@aek.at"] },
  { country: "Belgium", flag: "/images/flags/belgiumflag.png", name: "Heynen NV", lines: ["Centrum–Zuid 3047-B-3530 Houthalen Belgium", "Tel: +32(0)11 60 0910", "johan.de.ceuster@heynen.be", "Website: www.heynen.com"] },
  { country: "China", flag: "/images/flags/China-Flag.png", name: "IBS TECHNOLOGY SHENZHEN LTD", lines: ["Room 3705, 37/F, International Science and Technology Buiding,3007 Shen Nan Road, Shenzhen, CN -518033", "Tel: + 86 755 8221 0037", "Email: salescn@ibselectronics.com"] },
  { country: "Finland", flag: "/images/flags/Finland-Flag.png", name: "Elgood Oy", lines: ["Juurakkotie 5 B, FIN-01510 Vantaa Phone: +358 207 981 140", "Email: sales@elgood.fi", "www.elgood.fi"] },
  { country: "Germany", flag: "/images/flags/Germany-Flag.png", name: "AL-Elektronik Distribution GmbH", lines: ["Christian-Pommer-Str. 36", "DE-38112 Braunschweig", "Phone: +49 531 25669-0", "Mail: sales@al-elektronik.de", "Web: www.al-elektronik.de"] },
  { country: "Germany", flag: "/images/flags/Germany-Flag.png", name: "Weltronic GmbH Industrievertretungen", lines: ["Kronstadter Straße 4, 81677 Munich/ Germany", "Tel: +49 (0)89 492066", "Fax: +49 (0)89 496234", "www.weltronic.de", "Email: info@weltronic.de"] },
  { country: "Germany", flag: "/images/flags/Germany-Flag.png", name: "Weltron Elektronik GmbH", lines: ["Sommerauer Str. 11, D – 91555 Feuchtwangen, Germany", "Tel: +49 9852 81720-0", "Fax: +49 9852 81720-67", "Email: info@weltron.de"] },
  { country: "Germany", flag: "/images/flags/Germany-Flag.png", name: "WDI AG", lines: ["Industriestrasse 21 Industriezentrum, D-22880 Wedel (Holstein), Germany.", "Tel: + 49 4103 1800 152", "Email: sales@wdi.ag"] },
  { country: "Hongkong", flag: "/images/flags/Hong-Kong-Flag.png", name: "IBS TECH INT'L HK LTD", lines: ["Unit A, 8/F Ching Cheong Industrial Building 1-7 Kwai Cheong Road, N.T , Hongkong", "Tel: +852 2947 0009", "Email: saleshk@ibselectronics.com"] },
  { country: "Hongkong", flag: "/images/flags/Hong-Kong-Flag.png", name: "SUYU International Co., Ltd.", lines: ["33 Lockhart Rd, Wan Chai, Hongkong", "Tel: +852-2187-2428", "Fax: +852-3747-1369", "Email: hongkong@su-yu.co.kr"] },
  { country: "Israel", flag: "/images/flags/Israel-Flag.png", name: "Trust Electronics Ltd.", lines: ["43, Haatzmaut Way, St. Yehud, P. O. Box : 2800, Yehud 56302, Israel", "Tel: + 97 23 6322566", "Email: dov@trust-electronics.com", "benny@trust-electronics.com"] },
  { country: "Italy", flag: "/images/flags/Italy-Flag.png", name: "MOS srl", lines: ["Via San Martino 1,20834 Nova Milanese (MZ) Italy – 1", "Tel: + 39 0362 364615", "Email: acquisti@mossrl.com"] },
  { country: "Japan", flag: "/images/flags/japan.png", name: "Yokohama Electronic", lines: ["Devices 302 Three-one Bldg.,3-20-5, Shinyokohama, Kouhoku-ku, Yokohama, Kanagawa, 222-0033", "Tel: 81-45-471-0737", "Mobile: 81-90-1408-9513", "Email: higano@yed.jp", "Email: www.yed.jp"] },
  { country: "Malaysia", flag: "/images/flags/Malaysia-Flag.png", name: "Acumen Components Sdn Bhd", lines: ["155, Jalan Kikik,Taman Inderawasih,13600 Perai, Pulau Pinang, Malaysia", "Tel: + 60 4 3997713", "Email:cp.ng@acumen.my"] },
  { country: "Newzealand", flag: "/images/flags/New-Zealand-Flag.png", name: "Arrow Electronics", lines: ["Suite 3, Level 1, 12-18 Moorhouse Ave, Christchurch, New Zealand", "Tel: +649 2722520/+649 6220101", "(M): +64 21328850", "Email: sales.anz@arrowasia.com", "john.gillon@arrowasia.com"] },
  { country: "Netherlands", flag: "/images/flags/Netherlands-Flag.png", name: "HEYNEN BV", lines: ["P.O. Box 10, NL-6590 AA Gennep, The Netherlands", "Tel: + 31 485 550937", "Email: heynen@heynen.com"] },
  { country: "Phillipines", flag: "/images/flags/Philippines-Flag.png", name: "IBS Electronics Inc", lines: ["Unit 308, ALPAP II Building, Trade St., Corner Investment Drive, Madrigal Business Park, Ayala-Alabang, Muntinlupacity – 1770", "Tel: + 632 807 6927", "Email: salesph@ibselectronics.com"] },
  { country: "Slovenia", flag: "/images/flags/slovenia.png", name: "IC ELEKTRONIKA D. O. O.", lines: ["Vodovodna Cesta 100, SI – 1000 ljubljana, Slovenia", "Tel: +386 1 568 01 387", "Email: info@ic-elect.si"] },
  { country: "South Africa", flag: "/images/flags/South-Africa-Flag.png", name: "Hi-Q Electronics Pty Ltd.", lines: ["Syfin House, 2nd floor, Fairway Close, Ni – City / Parow, 7463, Cape Town, South Africa – 7463", "Tel: + 27 21 595 1307", "Email: sales@hi-q.co.za"] },
  { country: "South Africa", flag: "/images/flags/South-Africa-Flag.png", name: "Hi-Q Electronics Pty Ltd.", lines: ["Bartlett Lake Office Park, Unit 8, Cnr. Trichardt & Leith Road, Bartlett, Boksburg, South Africa", "Tel: + 27 11 894 8083", "Email: sales@hi-q.co.za"] },
  { country: "South Korea", flag: "/images/flags/south-korea-flag.jpg", name: "SUYU International Co., Ltd", lines: ["SUYU building, 135, Dogok-ro, Gangnam-gu, Seoul, Republic of Korea.", "Tel: +82-2-6011-1701/1707", "Fax: +82-2-6011-1708", "Email: gerrardlee@su-yu.co.kr"] },
  { country: "South Korea", flag: "/images/flags/south-korea-flag.jpg", name: "NEO TECH Corp.", lines: ["#512, A-Dong, Gwanggyo Woominewv B/D, 338 Gwanggyojungang-ro, Suji-gu, Yongin-si, Gyeonggi-do,16942, Rep. of Korea", "Tel: +82-70-8080-04821", "Mobile: +82-10-6449-8084", "Fax: +82-504-156-8084", "Email: ssson96@naver.com"] },
  { country: "Spain", flag: "/images/flags/Spain-Flag.png", name: "Aldinet Group Pol. Ind.", lines: ["Jose Ma Korta Parcela, A6, Nave 220750 Zumaia, Gipuzkoa", "Tel: + 34 943 805 420", "Email: aldinet@aldinet.com"] },
  { country: "Sweden", flag: "/images/flags/Sweden-Flag.png", name: "SAGA Components AB", lines: ["Fagerstagatan 9 163 53 Spånga", "Sweden", "Tel: +46 708 150 111", "Email: supp.order@sagacomponents.com"] },
  { country: "Switzerland", flag: "/images/flags/Switzerland-Flag.png", name: "Vibratec AG", lines: ["Industries trasse 21, CH-5507, Mellingen, Switzerland", "Tel: 41 56 481 77 77", "Email: info@vibratec.ch"] },
  { country: "Taiwan", flag: "/images/flags/Taiwan-Flag.png", name: "MME Technology Co., Ltd.", lines: ["11F-5, No.81, Sec.1, HsinTai 5th Rd., Xizhi Dist., New Taipei City 221-01, Taiwan (Postal Code: 221-01)R.O.C", "Tel: 886-2-2698-0809", "Fax: 886-2-2698-0810", "Contact: Gary / Anita", "Email: gary@mmetw.com", "anita@mmetw.com"] },
  { country: "Taiwan", flag: "/images/flags/Taiwan-Flag.png", name: "SUYU International Co., Ltd", lines: ["Rm. 2, 6F, No.163, Sec.1, Keelung Rd., Sinyi Dist., Taipei City 110 Tel: +886-2-27482728", "Contact: Gary / Anita", "Email: Taiwan@su-yu.co.kr"] },
  { country: "Turkey", flag: "/images/flags/Turkey-Flag.png", name: "CAN TİCARET VE ELEKTRONİK SAN.LTD. ŞTİ.", lines: ["Namık Kemal Mahallesi Motif Sokak No:8/1A", "Ümraniye/İSTANBUL", "TEL: 0216 424 46 48", "TEL: 0532 616 82 52", "Mobile: +90 532 616 82 52"] },
  { country: "Ukraine", flag: "/images/flags/Ukraine-Flag.png", name: '"INTEGRAL" LTD', lines: ["28, Tekstylna Street, Ternopil, 46010 Ukraine – 46010", "Tel: +380352 261955", "Email: 123@integral.te.ua"] },
  { country: "United States", flag: "/images/flags/United-States-Flag.png", name: "IBS Electronics Inc.", lines: ["3506-W,Lake Centre Drive, Santa Ana,CA 92704-6985, USA", "Tel: + 1 714 513 5343/ +1 714 751 6633", "Email: sales@ibselectronics.com"] },
  { country: "United Kingdom", flag: "/images/flags/United-Kingdom-Flag.png", name: "Distributed Micro Technology Ltd.", lines: ["The Old Bakery, 265 Yorktown Road, College Town, Sandhurst Berkshire, GU 47 0QA, UK", "Tel: + 44 1276 33391", "Email: info@dmtl.co.uk"] },
  { country: "United Kingdom", flag: "/images/flags/United-Kingdom-Flag.png", name: "VTM (UK) Ltd.", lines: ["Unit 6, Nash Hall, High Ongar, Essex, CM5 9NL, England", "Tel: + 44 1462 473820", "Email: sales@vtm.co.uk"] },
  { country: "United Kingdom", flag: "/images/flags/United-Kingdom-Flag.png", name: "Eurocap International Ltd.", lines: ["138, High Street, Cheshunt, Herts, EN8 0AP, England", "Tel: + 44 1992 625407", "Email: eurocap@dial.pipex.com"] },
];

export const indiaDistributors: Distributor[] = [
  { country: "Tamil Nadu", name: "Elektronika Sales Private Ltd.", lines: ["Plot No. 31-A, Ambit Park Road, Ambattur Industrial Estate (South), Ambattur, Chennai – 600 058, Tamil Nadu, India.", "Tel: (044) 26251290/26251291/26251415", "Email: kavitha@elektronikasales.com, info@elektronikasales.com"] },
  { country: "West Bengal", name: "National Electronics Corporation", lines: ["3, Chandni Approach, 1st Floor, Room No – 2 & 3, Kolkata – 700 072", "Tel: (033) 2212 4066, (M): 09831003907", "Fax: (033) 2212 4062", "Email: necorpn@yahoo.com, nec_cal_haque@vsnl.net"] },
  { country: "West Bengal", name: "Indian Electronics", lines: ["6, Madan Street, Kolkata – 700 072", "Tel: +91-33-22127548, (M): 09831232412", "Fax: (033) 22126385", "Email: indianelec1974@gmail.com, wasimul2006@yahoo.co.in"] },
  { country: "Maharashtra", name: "Multitek Electro Devices: Pune", lines: ["167, Above Apeksha Palace, Pune-Saswad Road, Phursungi Fata, Pune – 412 308", "Tel: (020) 26860032, (M): 09923391582", "Email: shahkumar@vsnl.net , multitekdevices@gmail.com"] },
  { country: "Maharashtra", name: "Stockist: Ramesh Electronics: Mumbai", lines: ["New Hanuman Building, Shop No. 8, 16, Shyamrao Vithal Marg, Lamington Road, (P. O. Kiln Lane), Mumbai – 400 007", "Tel: (022) 2388 5701 / 2387 5720, (M): 09323034815", "Fax: (022) 2385 0711 / 2385 1624", "Email: rameshelectronics9@yahoo.co.in"] },
  { country: "Maharashtra", name: "Electromark Technologies: Mumbai", lines: ["12A, Hanuman Terrace Building, 1st Floor, Behind Bombay Biscuits, Tara Temple Lane, Grant Road Mumbai – 400007", "Tel: 022-23820454/455/456", "Email: mahavir@electromarkindia.com"] },
  { country: "Kerala", name: "Roni Electronics", lines: ["# 40/5884 C & D, AVS Building, M. G. Road, Ernakulam, Kochi – 682 035", "Tel: (0484) 2355029, 2369926 , (M): 09846052928", "Fax: (0484) 2352928", "Email: roni@sify.com , roy@ronielectronics.com"] },
  { country: "Gujarat", name: "Electrodeal", lines: ["202, 203, Fatehsagar Complex, Opp. Convent School, Fatehganj, Vadodara – 390 002", "Tel: (0265) 3013099, 2793344", "Fax: (0265) 2786677", "Email: respond@electrodeal.com , sanjayvelani@electrodeal.com"] },
  { country: "Delhi Area", name: "Vam Electronics", lines: ["Shop No. 1 & 2, 1690, Sunder Bhawan, Bhagirath Palace, Delhi – 110 006", "Tel: (011) 23868159", "Fax: (011) 23868459", "Email: vam.electronics@yahoo.co.in, enquiry@vamelectronics.com"] },
  { country: "Karnataka", name: "Swift Electrocomp solutions (p) ltd", lines: ["# 681/99, 6th Main Road, Vijayanagar, Bangalore – 560 040", "Tel: +9180-23406770 / 23406774 Moblie:+91-9886017544", "Email: sales@swiftelectrocomp.in, vishwanath@swiftelectrocomp.in"] },
  { country: "Karnataka", name: "IBS Electronics, Inc.", lines: ["Regus, World Trade Center, 22nd Floor, Brigade Gateway Campus, Unit No 2201, No26/ 1, Dr.RajKumar Road,, Malleshwaram(W) Bangalore 560055", "Tel: +91-80-6793 5600", "Fax: +91-80-6793 5301", "Email: deepak@ibselectronics.com"] },
  { country: "Tamil Nadu", name: "MONARCH ENTERPRISES", lines: ["270/4 SRI BALAJI COMPLEX, 7TH STREET ENTEN., GANDHIPURAM, COIMBATORE – 641012, TAMIL NADU, INDIA", "Tel: 0091422 2526027, 00914222 4373768 , 0091422 2529030", "Mob: 00919843028797", "Email: monarch1971@dataone.in; monarchcbe@hotmail.com; monarchsundar@gmail.com"] },
];
