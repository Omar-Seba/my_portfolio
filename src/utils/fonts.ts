import { Space_Grotesk } from "next/font/google";
import { Modak } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Passion_One } from "next/font/google";

export const passion_one = Passion_One({
  subsets: ["latin"],
  weight: "900",
  style: "normal",
});

export const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const modak = Modak({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
