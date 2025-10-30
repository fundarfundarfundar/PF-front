import { IProject } from "@/interfaces/IProject";

export const MockProjects: IProject[] = [
  {
    id: 1,
    title: "Feeding Hope",
    resume: "Providing nutritious meals to children in need.",
    description:
      "Feeding Hope delivers healthy meals to children in vulnerable communities, supporting their growth, dignity, and educational opportunities for a brighter future.",
    country: "Kenya",
    goalAmount: 50000,
    currentAmount: 32000,
    images: [
      "https://www.henkel.es/resource/image/1124140/16x9/1920/1098/8c7739889076c6bbb295328959533e6e/7B165B5BF5647DDBEF6C79647FA4F6A9/proyectos-sociales-stage-jpg.webp",
      "https://cdn.pixabay.com/photo/2023/02/14/04/39/volunteer-7788809_1280.jpg",
      "https://as1.ftcdn.net/v2/jpg/14/48/80/98/1000_F_1448809845_p0dhcZnqqWsL9MrwOtzglhIdA9btfy2n.jpg",
    ],
    categoryId: 1,
  },
  {
    id: 2,
    title: "Education for All",
    resume: "Promoting equal access to education for every child.",
    description:
      "Education for All provides learning materials, teacher support, and scholarships to ensure that children in rural areas can attend school and build a better future.",
    country: "Peru",
    goalAmount: 20000,
    currentAmount: 15000,
    images: [
      "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/j0z44gmji2zpaujaq1bq",
      "https://as2.ftcdn.net/v2/jpg/09/72/66/13/1000_F_972661357_Pa5f2uo1gy0bMdbWxeMsfXPh54Gp7o9f.jpg",
    ],
    categoryId: 2,
  },
  {
    id: 3,
    title: "Clean Water",
    resume: "Bringing safe drinking water to remote communities.",
    description:
      "Clean Water installs sustainable wells and filtration systems to provide access to safe water, improving health and reducing diseases in rural regions.",
    country: "Uganda",
    goalAmount: 30000,
    currentAmount: 10000,
    images: [
      "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/frpivkmxtvxs4rola6zs",
      "https://as2.ftcdn.net/v2/jpg/07/16/05/71/1000_F_716057139_FUM5NhLKLYdC8PAzJO6Fy5jgmO0dJHdW.jpg",
    ],
    categoryId: 3,
  },
  {
    id: 4,
    title: "Building Smiles",
    resume: "Rebuilding homes and restoring hope after disasters.",
    description:
      "Building Smiles helps families recover from natural disasters by rebuilding safe homes and community spaces, bringing back security and dignity to those affected.",
    country: "Mexico",
    goalAmount: 50000,
    currentAmount: 32000,
    images: [
      "https://cdn.pixabay.com/photo/2023/02/14/04/39/volunteer-7788809_1280.jpg",
      "https://as2.ftcdn.net/v2/jpg/09/83/84/89/1000_F_983848937_YQDpUZ5llDlr4IAvP8w5gD6WNzrwigi5.jpg",
    ],
    categoryId: 1,
  },
  {
    id: 5,
    title: "Digital Literacy",
    resume: "Empowering youth through technology education.",
    description:
      "Digital Literacy offers computer training and internet access to teenagers and adults, helping them acquire modern skills and improve employment opportunities.",
    country: "Colombia",
    goalAmount: 25000,
    currentAmount: 12000,
    images: [
      "https://as2.ftcdn.net/v2/jpg/17/14/93/71/1000_F_1714937110_9Jwmvpr0J2mVop0HoJaGDAUMmtrqChGm.jpg",
      "https://as2.ftcdn.net/v2/jpg/09/72/66/13/1000_F_972661357_Pa5f2uo1gy0bMdbWxeMsfXPh54Gp7o9f.jpg",
    ],
    categoryId: 2,
  },
  {
    id: 6,
    title: "Pure Waters",
    resume:
      "Delivering sustainable water solutions to dry zones Delivering sustainable water solutions to dry zones Delivering sustainable water solutions to dry zones",
    description:
      "Pure Waters builds wells and rainwater collection systems in drought-prone areas, ensuring long-term access to clean and safe water. Pure Waters builds wells and rainwater collection systems in drought-prone areas, ensuring long-term access to clean and safe water. Pure Waters builds wells and rainwater collection systems in drought-prone areas, ensuring long-term access to clean and safe water.",
    country: "Perú",
    goalAmount: 35000,
    currentAmount: 15000,
    images: [
      "https://as1.ftcdn.net/v2/jpg/14/48/80/98/1000_F_1448809845_p0dhcZnqqWsL9MrwOtzglhIdA9btfy2n.jpg",
      "https://as2.ftcdn.net/v2/jpg/07/16/05/71/1000_F_716057139_FUM5NhLKLYdC8PAzJO6Fy5jgmO0dJHdW.jpg",
    ],
    categoryId: 3,
  },
];
