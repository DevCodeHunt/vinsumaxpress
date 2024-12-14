import {
  BriefcaseMedical,
  Building2,
  Code,
  Database,
  Megaphone,
  PenTool,
} from "lucide-react";
import { ROUTES } from "../utils/routes";

export const navLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: ROUTES.ABOUT,
  },
  {
    label: "Service",
    url: ROUTES.SERVICE,
  },
  {
    label: "Media Center",
    url: ROUTES.MEDIACENTER,
  },
  {
    label: "Career",
    url: ROUTES.CAREER,
  },
];

export const companyDetail = {
  contact: "1800-833-3513",
  email: "care@vinsumaxpress.com",
  location:
    "404- Electronic City, Udyog Vihar, Phase IV, Sector 18, Gurugram, 122015.",
  instagram: "https://www.instagram.com/vinsumaxpress?igsh=cHZudWkycjRxbWpv",
  facebook: "https://www.facebook.com/share/VBhwN2RJxduTKbNh/?mibextid=WC7FNe",
  twitter: "https://x.com/vinsum_",
  linkedin: "https://www.linkedin.com/company/vinsum-axpress",
  youtube: "www.youtube.com/@vinsumaxpressindiapvtltd.8044",
};

export const homeOurValues = [
  {
    image: "/images/people-first.png",
    title: "People First",
  },
  {
    image: "/images/integrity.png",
    title: "Integrity",
  },
  {
    image: "/images/partnership.png",
    title: "Partnerships",
  },
  {
    image: "/images/excellence.png",
    title: "Excellence",
  },
  {
    image: "/images/accountability.png",
    title: "Accountability",
  },
  {
    image: "/images/innovation.png",
    title: "Innovation",
  },
];

export const homeServices = [
  {
    image: "/images/multimodal.png",
    title: "Multimodal Transportation",
  },
  {
    image: "/images/warehousing.png",
    title: "Warehousing Solution",
  },
  {
    image: "/images/3pl-and-inventory.png",
    title: "3PL & Inventry Management",
  },
  {
    image: "/images/packaging.png",
    title: "Packaging Solution",
  },
  {
    image: "/images/4pl-inplant.png",
    title: "4PL/Inplant Logistics Project Management",
  },
];

export const aboutCards = [
  {
    image: "/images/real-time-locator.svg",
    title: "Real Time Tracking",
    description:
      "Experience immediate updates and reduced concerns. Prepare to engage with the future of logistics, where efficiency and reliability are paramount.",
  },
  {
    image: "/images/safe-delivery.svg",
    title: "Damage-free Delivery",
    description:
      "Count on us to ensure damage-free delivery with every shipment, setting the standard for excellence!",
  },
  {
    image: "/images/customized-packaging.svg",
    title: "Flexible Packaging Service",
    description:
      "We offer Versatile Packaging that provides limitless possibilities to meet the diverse needs of your organization effectively.",
  },
  {
    image: "/images/warehouse-service.svg",
    title: "Warehouse Services",
    description:
      "Streamline your warehouse, supercharge your efficiency! From storage to shipping, our smart solutions keep your operations moving at the speed of success.",
  },
  {
    image: "/images/tech-driven.svg",
    title: "Tech-Driven Solutions",
    description:
      "Unlock the future with tech-driven solutions that turn challenges into opportunities! Let innovation lead the way to smarter, faster, and more connected possibilities.",
  },
  {
    image: "/images/24-customer-support.svg",
    title: "24/7 Customer Support",
    description:
      "We are Here for You Around the Clock: Just a call away, our dedicated team is ready to assist 24/7",
  },
];

export const serviceQuestions = [
  {
    title: "Multimodal Transportation",
    description:
      "Multimodal transport can ease the journey by optimizing routes and using the most efficient modes for each leg of the journey.",
  },
  {
    title: "Warehouse Solution",
    description:
      "We are offering wide range of services including consolidation & packaging of cargoes of various types & sizes.",
  },
  {
    title: "Packaging Solutions",
    description:
      "Dedicated solution design team that can design solutions based on inputs provided by the customer about the component / part and produce feasibility reports for all your packaging needs consultation.",
  },
  {
    title: "3LP/4LP Management",
    description:
      "Our Services often extend beyond logistics to include value-added services related to the production or procurement of goods, such as services that integrate parts of the supply chain.",
  },
];

export const careerCategories = [
  {
    name: "Graphics & Design",
    icon: PenTool,
    position: 0,
  },
  {
    name: "IT & Programming",
    icon: Code,
    position: 8,
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
    position: 0,
  },
  {
    name: "Account & Finance",
    icon: Building2,
    position: 3,
  },
  {
    name: "Management",
    icon: BriefcaseMedical,
    position: 1,
  },
  {
    name: "Sales & Operations",
    icon: Database,
    position: 2,
  },
];

export const cardData = [
  {
    title: "Multimodal Transportation",
    description:
      "Multimodal transport can ease the journey by optimizing routes and using the most efficient modes for each leg of the journey.",
    price: "Air, Road, Rail",
    priceLabel: "650+ dedicated fleet — Air Plus & Air Premium",
    features: [
      "Time sensitive express deliveries",
      "Broad geographical reach",
      "Cost effective routing of cargoes",
      "Intelligent tracking and tracing (Road, Rail & air)",
      "Intelligent alerts of shipment status",
    ],
  },
  {
    title: "Warehouse Solution",
    description:
      "We are offering wide range of services including consolidation & packaging of cargoes of various types & sizes",
    price: "Stock & Inventry Management",
    priceLabel: "20,00,000+ sq.ft warehouse space",
    features: [
      "53+ warehousing customers",
      "Tailored solution as per the client needs",
      "Customizable Warehouse management system",
      "Kitting/De-Kitting services",
      "Material security & safety",
    ],
  },
  {
    title: "Packaging Solutions",
    description:
      "Dedicated solution design team that can design solutions based on inputs provided by the customer about the component / part and produce feasibility reports for all your packaging needs consultation.",
    price: "Packaging Manufacturing Plant",
    priceLabel: "50,000+ boxes per month",
    features: [
      "OPEX/CAPEX Model",
      "Eco – Friendly.",
      "Improves inventory management",
      "Freight cube efficiency",
      "Metal Identification of Parts & products",
    ],
  },
  {
    title: "3LP & 4LP Management",
    description:
      "Our Services often extend beyond logistics to include value-added services related to the production or procurement of goods, such as services that integrate parts of the supply chain.",
    price: "Inventory / Project Management",
    priceLabel: "",
    features: [
      "Distribution Management",
      "Store / SPD / PG Warehouse Management",
      "Picking/Packing & CKD/CBU pakaging",
      "Assemble line operation",
      "Inbound Store management",
    ],
  },
];

export const serviceData = [
  {
    name: "Medtronic",
    label: "Electric car charging",
    image: "/images/railway-trains-carrying-goods-pass-quickly-(1).jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi error recusandae animi, est velit officia alias inventore modi soluta, molestiae exercitationem reiciendis commodi deserunt temporibus illo harum. Voluptate, optio!",
  },
  {
    name: "Medtronic XYZ",
    label: "Residental solar panels",
    image: "/images/airplane-design-air-freight-logistics.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi error recusandae animi, est velit officia alias inventore modi soluta, molestiae exercitationem reiciendis commodi deserunt temporibus illo harum. Voluptate, optio!",
  },
  {
    name: "Medtronic ABC",
    label: "Wind power industry",
    image: "/images/back-closeup-view-delivery-truck-driving-road.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi error recusandae animi, est velit officia alias inventore modi soluta, molestiae exercitationem reiciendis commodi deserunt temporibus illo harum. Voluptate, optio!",
  },
];

export const multimodalTransPortations = [
  {
    image: "/images/",
    title: "Road Services",
    description:
      "Catering to the needs of our clients, we offer high volume of freight transportation by roads.",
    offers: [
      "Flexible routing & GPS enabled fleet",
      "FTL/PTL Managment",
      "OOC cargo movement",
      "With 920+ Fleet size covering more than 3 lakh km per day",
      "Milk run transportation",
      "Weather proof containerized vehicle",
    ],
  },
  {
    image: "/images/",
    title: "Speed Truck Services",
    description:
      "VINSUM is an organization who provides same day delivery to Customers at their Specified Locations considering the Customer Requirement in Current Scenario.",
    offers: [
      "Well defined routes (Dharuhera, Pune, Jamshedpur, Chennai, Ahmedabad, Nagpur, Nashik, Pantnagar & Bangalore)",
      "24-96 hrs TAT in pan India",
      "Cut off time at 2 a.m every day",
    ],
  },
  {
    image: "/images/",
    title: "Rail Services",
    description:
      "We collabarate with DFC, Indian Railways, and the Ministry of Railways under the PM Gati Shakti plan fo greener logistics. We currently operate 6 routes with dedicated freight trains and VPU wagons, connecting North India wuth Bangalore, Chennai, kolkata, Guwahati, and Gujarat.",
    offers: [
      "Truck On train (TOT)/RORO services",
      "VPU serices through dedicated freight trains",
      "SLR services",
      "NMG CBU Transportation",
    ],
  },
  {
    image: "/images/",
    title: "Air Services",
    description:
      "Our expeienced staff organize national and international air cargo shipping for a wide range of cargoes by selecting optimal routes based on your individual needs",
    offers: [
      "Time-sensitive express deliveries",
      "Wide geographical reach",
      "Dedicated cargo flights (GCR, Fast Track, Hand Carry)",
      "Door-to-door & airport-to-airport services",
      "18-24 hrs in metro cities",
      "24-48 hrs in non-metro cities airlines",
    ],
  },
];

export const integratedSupplyChains = [
  {
    image: "/images/",
    text: "Packaging Solutions Green returanable & Customized Packaging Solution",
  },
  {
    image: "/images/",
    text: "Multi-modal Transportation Surface Train & Air",
  },
  {
    image: "/images/",
    text: "Warehouse Management Dashboard Enables WMS",
  },
  {
    image: "/images/",
    text: "Inventory Control Customized App For Accurate & Real Time Visibility",
  },
  {
    image: "/images/",
    text: "Value Added Services Ownership of Quality People & Processes",
  },
  {
    image: "/images/",
    text: "Last Mile",
  },
  {
    image: "/images/",
    text: "Packaging Solutions Green returanable & Customized Packaging Solution",
  },
  {
    image: "/images/",
    text: "Consultancy Design & implement integrated Solution",
  },
];

export const openings = [
  {
    position: "IT Development Head-GM/AGM",
    experience: "12+ Year's",
    vacancy: 1,
    location: "Gurgaon Corporate-Udyog Vihar ph4",
    role: "Full Time",
  },
  {
    position: "Jr. Developer",
    experience: "2-5 Year's",
    vacancy: 3,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Sr. Developer",
    experience: "4-7 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Web Developer",
    experience: "4-7 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Desktop Support H & N",
    experience: "2-5 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "BA-Documentation / Training",
    experience: "4-7 Year's",
    vacancy: 1,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "SR. Manager (Female) - Sales & Operations",
    experience: "5-12 Year's",
    vacancy: 2,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Corporate Trainer",
    experience: "4-8 Year's",
    vacancy: 2,
    location: "GGCO",
    role: "Full Time",
  },
  {
    position: "Territory Head",
    experience: "10 to 15 Year's in Logistics",
    vacancy: 1,
    location: "Chennai",
    role: "Full Time",
  },
  {
    position: "Key Account Manager",
    experience: "3-7 Year's in logistics",
    vacancy: 1,
    location: "Kandivili (MBY)",
    role: "Full Time",
  },
  {
    position: "Key Account Manager",
    experience: "3-7 Year's in logistics",
    vacancy: 1,
    location: "JNPT (MBY)",
    role: "Full Time",
  },
];

export const leadershipTeams = [
  {
    image: "https://vinsumaxpress.com/assets/img/team/CMD.jpeg",
    name: "Mr. Vinod Sharma",
    position: "Chairman & Managing Director",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/team-4.jpg",
    name: "Mrs. Kusum Sharma",
    position: "Chair Person",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/Lalit%20Sharma.jpg",
    name: "Mr. Lalit Sharma",
    position: "Managing Director",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image:
      "https://vinsumaxpress.com/assets/img/team/Amit-Sharma-Executive-director.jpg",
    name: "Mr. Amit Sharma",
    position: "Executive Director",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/Ankit%20Sharma.jpg",
    name: "Mr. Ankit Sharma",
    position: "Executive Director",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "/images/man-placeholder.png",
    name: "Mr. Sumit Sharma",
    position: "Head Branding",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/tc_web.jpg",
    name: "Mr. T.C Sharma",
    position: "President",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/vimal.jpg",
    name: "Mr. Vimal Sharma",
    position: "Head Credit Control",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/BL%20SHarma.jpg",
    name: "Mr. Babulal Sharma",
    position: "Head - Audit & Cost Control",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/AK_web.jpg",
    name: "Mr. Anil Rajput",
    position: "Head Billing",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/Amitabha_IT-Head1.jpg",
    name: "Amitabha Mohapatra",
    position: "Head Information Technology(IT)",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/mohit-vashisht.jpg",
    name: "Mr. Mohit Vashisht",
    position: "Manager Packaging Manufacturing Plant",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/sudhir%20bansal.jpg",
    name: "Mr. Sudhir Mohan Bansal",
    position: "President",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "https://vinsumaxpress.com/assets/img/team/SUPRIYA_HR.jpg",
    name: "Mrs. Supriya Dutt",
    position: "HR HEAD",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "/images/man-placeholder.png",
    name: "Mr. Perminder Singh",
    position: "President (Sales & KAM)",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: "/images/Kamlesh-jha.jpeg",
    name: "Mr. Kamlesh Jha",
    position: "AVP (Warehouse Operation)",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
];

export const missionVisonValues = [
  {
    name: "Mission",
    image: "/images/mission.png",
    lists: [
      "Accomplish the desired goal within a defined timeframe.",
      "Build and utilize an infrastructure equipped with the latest technology.",
      "Employ trained manpower tailored to meet specific market requirements.",
      "Ensure the infrastructure and workforce are customized to align with market demands.",
    ],
  },
  {
    name: "Vision",
    image: "/images/vision.png",
    lists: [
      "Become a leading logistics services provider for Indian industries by leveraging the latest technology.",
      "Create a win-win situation for all associates through competitive, cost-effective, safe, secure, and timely services.",
      "Deliver error-free, high-quality services that meet stringent standards.",
      "Gain recognition as a top expert in logistics and supply chain services.",
      "Excel in customer service, providing top-notch experiences and solutions.",
    ],
  },
  {
    name: "Values",
    image: "/images/hand-shake.png",
    lists: [
      "Service Excellence: Zero Productivity Loss In The Supply Chain Process.",
      "Delivery Commitments - Economically Efficient And Time Bound Deliveries",
      "Diversity, Integrity & Accountability - Ethical standards and liability towards work.",
      "Sustainable Solutions - Biodegradable Packaging such as PP Boxes, FLC's, Steel Trolleys etc.",
    ],
  },
];

export const networks = [
  {
    name: "Owned Space",
    total: "30M Sqft",
  },
  {
    name: "Branches",
    total: "75+",
  },
  {
    name: "Warehouses",
    total: "53+",
  },
  {
    name: "Routes",
    total: "30+",
  },
  {
    name: "Serviceable PinCode",
    total: "15000+",
  },
  {
    name: "Regional Offices",
    total: "7",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Champion of Supply Chain Management 2020",
    images: [
      "https://vinsumaxpress.com/assets/img/blog/ET_01.png",
      "https://vinsumaxpress.com/assets/img/blog/ET_02.jpg",
      "https://vinsumaxpress.com/assets/img/blog/ET_03.jpg",
    ],
    description:
      'It is very pleasure and also a proud moment for us that The Economic Times has recognized our Company "VINSUM AXPRESS INDIA PVT LTD" as a Champion of Supply Chain Management 2020.',
    author: "Vinsum Axpress",
    cratedAt: "Jan 21, 2021",
  },
  {
    id: 2,
    title: "Champion of Supply Chain Management 2020",
    images: [
      "https://vinsumaxpress.com/assets/img/blog/road-freight-services.jpg",
      "https://vinsumaxpress.com/assets/img/blog/ET_02.jpg",
      "https://vinsumaxpress.com/assets/img/blog/ET_03.jpg",
    ],
    description:
      "<p>Trucks come in various shapes and sizes that support different types of loads. All these trucks are specially designed to do a particular type of job. These trucks, based on their size and shape, make transportation of goods easier. Now, many people need assistance in finding the most appropriate truck for the type of cargo. In this article, we will explain to you what types of trucks are there and what types of loads they are capable of.</p><h1>Refrigerated truck</h1><p>These types of trucks have refrigeration facilities. Goods prone to destruction are transported by these trucks as they provide freezing service and everyone knows that cold prevents things from being destroyed. Milk, eggs, edibles, medicines etc. are transported through them. Typically, transportation is done overnight.</p><h1>Flatbeds</h1><p>What is a flatbed? Flatbed trucks have a cabin for the driver and the rest of the truck is open. These trucks are best for loading wood, pipes {concrete or plastic whatever}, and other things like that. They are long and open which makes easy loading and unloading. A single flatbed trailer can carry a maximum fare of 48,000 pounds which it can easily handle.</p><h1>Box Truck</h1><p>They are simple trucks also known as cube trucks. These trucks are small in size, well sealed. Typically, these trucks are used for home furniture, while families move from one place to another. These are generally in good demand as they require low license requirements and are usually easily controlled and managed.</p><h1>Liftgate Trucks</h1><p>Liftgates is a generic term used in American slang. In British English the British lift tail is used for the same. These have an installed rear end that collects goods from the ground level and then loads it into the truck. This reduces heavy lifting to a great extent and also facilitates better service. Up-lifters can be hydraulic, mechanic, etc. depending on the truck and technology.</p><h1>Semi-trailer truck</h1><p>Now, the semi-trailer type of trucks is also widely used. They have an open edge, roof, or rear that suits you to load freight. Their capacity is 24,000 kg. It is best for items that are stored in the stack.</p><h1>Jumbo trailer truck</h1><p>They are as beautiful as the ones mentioned above. These trailers have more capacity than semi-trailer trucks because they have a lower wheel diameter and a G-shaped floor that supports capacity. These trucks are best for capacitive accessories as these trucks are very spacious and lightweight. Like a semi-trailer truck, one can load from either side or top or rear wherever it seems convenient.</p><p>Therefore, all of these were commonly used trucks in the logistics sector. One can easily understand their way of working and they can carry with ability and other features and can easily decide what kind of goods the customer supports. One should wisely choose the type of truck they need as they are all different rates that affect the freight rates.</p><h1>List of truck types</h1><p>The purpose of this list of truck types is to classify trucks and provide links to articles on different types. The three main classifications for road trucks by weight are light trucks, medium trucks, and heavy trucks. On top of this, there are particularly very heavy trucks and transporters such as heavy hellers for oversized moves, and off-road heavy trucks and very large trucks used for mining and highway use without special permits.</p>",
    author: "Vinsum Axpress",
    cratedAt: "May 20, 2020",
  },
];

export const galleries = [
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images1.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images2.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/994A0890.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images3.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images4.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/994A0911.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0569.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/Zone/PB.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/Zone/new3.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/Zone/new4.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0886.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0511.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0785.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0855.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/994A0579.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0707.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06544.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0502.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0789.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0503.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0834.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0805.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06519.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images12.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images16.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06540.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06536.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06501.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06454.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images15.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-corporate-office.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images17.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images18.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-warehouse-image-27.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-warehouse-image-28.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-warehouse-image-29.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-warehouse-image-30.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-warehouse-image-31.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images19.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images20.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images13.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images14.jpg",
];

export const clients = [
  {
    logo: "/images/clients/tata.png",
  },
  {
    logo: "/images/clients/tafe.png",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Fiat_logo23.png",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/3/34/Logo_for_Maruti_Suzuki.svg",
  },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/sonalika-international-logo.png",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/JCB-Logo.jpg",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/NBC_logo.png",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Suzuki_Motor_Corporation_logo.svg",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Yazaki_company_logo.svg",
  },
  {
    logo: "https://www.jtekt.co.in/Images/logo.png",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Ashok_Leyland_logo.svg",
  },
  {
    logo: "/images/clients/moonlight.png",
  },
  {
    logo: "https://musashi.co.in/images/logo.png",
  },
  {
    logo: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/f68ff49b2cb542afb061e36729b1da2a?v=80d468ad&t=Size200",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFIU2-8eAR2Kw/company-logo_200_200/company-logo_200_200/0/1728074552776/carraro_technologies_india_pvt_ltd_logo?e=2147483647&v=beta&t=vwUAM0nkeBHKLmzAWHGSnF266rT84NEsBud-sGqcmvk",
  },
  {
    logo: "https://www.surinauto.com/wp-content/uploads/2023/09/logo.webp",
  },
  {
    logo: "/images/clients/tennecco.svg",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Escorts_Kubota_Limited.jpg",
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide freight transportation, warehousing, customs brokerage, and supply chain management. We operate nationwide/internationally, serving key logistics hubs and regional markets.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "You can track your shipment using our online tracking tool with your tracking number. Our customer service is also availabe 24/7 for any concerns.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can request a quote through our website or by contacting our customer service team directly.",
  },
  {
    question: "How do you ensure the safety of my shipment?",
    answer:
      "We implement strict safety protocols and provide real-time monitoring throughout the transportation process.",
  },
  {
    question:
      "Are there any additional fees for using your technology services?",
    answer:
      "No, our technology services are included in our overall pricing. There are no hidden fees for utilizing our tracking or management tools.",
  },
];
