export const projects = [
  {
    name: "Console",
    date: "09:2025",
    description: [
      "BIRCH PLYWOOD, ALUMINIUM, ACRYLIC",
      "This cabinet combines warmth and precision through a restrained use of materials and detail. Constructed from birch plywood panels framed in brushed aluminium, the piece celebrates its structure rather than concealing it. Exposed fixings and clean lines highlight the junctions where natural wood meets industrial metal, creating a dialogue between craft and manufacture.",
      "The acrylic doors introduce a sense of lightness and transparency, softening the cabinet’s geometric form while allowing the contents to become part of the visual composition. Balanced proportions and considered hardware give the piece a quiet, architectural presence — functional yet sculptural.",
      "Designed and made by Kieran Slater in London, the cabinet reflects his ongoing exploration of honest materials, precise construction, and the space between utility and art.",
    ],
    image: "FULL_1515_nz2se2",
    gallery: [
      {
        image: "DETAIL_1378_zlfots",
        caption: "CAPTION"
      },
      {
        image: "DETAIL_1523_neofly",
        caption: "CAPTION"
      },
    ],
    link: "/work-projects/console-0925",
  },
];

export interface Project {
  name: string;
  date: string;
  description: string[];
  image: string,
  gallery: {
    image: string, 
    caption: string,
    width?: number,
    height?: number,
    stylesWidth?: number,
    mp4?: string,
    webm?: string,
    gif?: string,
  }[];
  video?: string;
  link: string;
}

export const profile = {
  image: "/Something.jpg",
  background: [
    "Kieran Slater is a London-based furniture maker dedicated to creating timeless, handcrafted pieces that blend contemporary design with traditional craftsmanship. Each piece is built with care, usingsustainably sourced materials and time-honoured joinery techniques to ensure beauty, integrity,\u00A0and\u00A0longevity.",
    "Driven by a deep respect for natural materials and fine craftsmanship, Kieran’s work celebrates the individuality of wood — its textures, imperfections, and character. From bespoke commissions to limited collections, every design begins with an idea, a sketch, and a commitment to quality that\u00A0transcends\u00A0trends.",
    "Kieran trained in furniture design and cabinetmaking before establishing his own workshop in London. His approach balances modern aesthetics with classic techniques, producing work that feels both grounded and refined — made to be lived with, not just\u00A0looked\u00A0at.",
    "Whether creating a statement piece for a private home or fitting out a public space, Kieran works closely with clients to ensure each commission reflects their story, their space, and\u00A0their\u00A0values.",
    "Furniture should be honest — made to last, made to be used, and made to\u00A0be\u00A0loved.",
    "Workshop based in London, UK.\nServing clients across the UK and internationally.",
  ],
  contact: [
    "something@something.com",
    "https://www.instagram.com/something/",
    "https://www.linkedin.com/in/something/",
  ],
  workedWith: [
    "DAZED", "ALL PURPOSE", "WITH PROJECTS", "NOWADAYS", "SUPERIMPOSE", "BOILER ROOM", "MTV", "NIKE", "ADIDAS", "AWAKE", "UMBRO", "LEVIS", "PUMA", "FIORUCCI", "URBAN OUTFITTERS"
  ],
  won: [
    {something: "Something - Something, Something - Something, Something - Something"},
    {something: "Something - Something, Something - Something, Something - Something"},
  ]
}

