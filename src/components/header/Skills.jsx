import html from "../assets/image/Html.png";
import css from "../assets/image/CSS.png";
import bootstrap from "../assets/image/Bootsrap.png";
import js from "../assets/image/Js.png";
import react from "../assets/image/React.png";
import tailwind from "../assets/image/Tainwind.png";
import git from "../assets/image/Github.png";
import { FaPhp, FaVuejs } from "react-icons/fa";
import { SiLaravel, SiMysql, SiXampp } from "react-icons/si";


export const Skills = [
  {
    id: 1,
    title: "HTML",
    image: html,
    percent: "100%",
  },
  {
    id: 2,
    title: "CSS",
    image: css,
    percent: "80%",
  },
  {
    id: 3,
    title: "Bootstrap",
    image: bootstrap,
    percent: "85%",
  },
  {
    id: 4,
    title: "JavaScript",
    image: js,
    percent: "70%",
  },
  {
    id: 5,
    title: "React.js",
    image: react,
    percent: "65%",
  },
  {
    id: 6,
    title: "Tailwind CSS",
    image: tailwind,
    percent: "90%",
  },
  {
    id: 7,
    title: "GitHub",
    image: git,
    percent: "40%",
  },
  {
    id: 8,
    title: "Vue.js",
    icon: <FaVuejs />,
    color: "text-emerald-400",
    percent: "65%",
  },
  {
    id: 9,
    title: "Laravel",
    icon: <SiLaravel />,
    color: "text-red-500",
    percent: "70%",
  },
  {
    id: 10,
    title: "PHP",
    icon: <FaPhp />,
    color: "text-indigo-400",
    percent: "75%",
  },
  {
    id: 11,
    title: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-400",
    percent: "70%",
  },
  {
    id: 12,
    title: "XAMPP",
    icon: <SiXampp />,
    color: "text-orange-500",
    percent: "75%",
  },
];
