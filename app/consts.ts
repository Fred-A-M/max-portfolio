export const projects = [
  {
    name: "FW26",
    description: "FW26 GRAPHIC TEE - BOILER ROOM",
    gallery: [
      "DIRTY_FLYER_2_TEES_fuknk2",
      "BR-DIRTY-FLYER-MOCK-03_jpuvdk",
      "DIRTY_FLYER_2_ockmiy"
    ],
    link: "fw26",
  },
  {
    name: "Bondage",
    description: "BONDAGE AOP DRESS - BOILER ROOM",
    gallery: [
      "240111_VK_BR_AW24_LOOKBOOK_40_AW24DR01BLK_015_vztxms",
    ],
    link: "bondage",
  },
  {
    name: "Vault",
    description: "ADIDAS VAULT x BOILER ROOM",
    gallery: [
      "adidas_tee_mock_2_copy_asc81f",
      "adidas_tee_mock_1_copy_k3gfwv"
    ],
    link: "vault",
  },
  {
    name: "Awake",
    description: "BOILER ROOM x AWAKE EVENT FLYER",
    gallery: [
      "BR-AWAKE-2_koiktm",
      "BR-AWAKE-FLYER-V4_scfb30",
      "BR-AWAKE-FLYER-V2_a981az"
    ],
    link: "awake",
  },
  {
    name: "New York Festival",
    description: "NEW YORK FESTIVAL",
    gallery: [
      "",
    ],
    video: "https://res.cloudinary.com/duijfl1pq/video/upload/v1771566761/Media-Player-Scrolling-Line-Up_ghgnj1.mp4",
    link: "new-york-festival",
  },
  {
    name: "Hard Dance 02",
    description: "BOILER ROOM HARD DANCE TEE 02",
    gallery: [
      "BOILER_ROOM_HARD_DANCE_TEE_02_FRONT_gpgyhw",
      "BOILER_ROOM_HARD_DANCE_TEE_02_BACK_p04ppr"
    ],
    link: "hard-dance-02",
  },
];

export interface Project {
  name: string;
  description: string;
  gallery: string[],
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

