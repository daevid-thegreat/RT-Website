import { femaleMemoji, maleMemoji } from "./memojis";

function getFemaleMemoji() {
  return femaleMemoji[
    Math.floor(Math.random() * femaleMemoji.length)
  ];
}
function getMaleMemoji() {
  return maleMemoji[Math.floor(Math.random() * maleMemoji.length)];
}

export const auMent = [
  {
    image: getMaleMemoji(),
    heading: "Caveman",
  },

  {
    image: getMaleMemoji(),
    heading: "Alex",
  },

  {
    image: getFemaleMemoji(),
    heading: "IBK",
  },

  {
    image: getFemaleMemoji(),
    heading: "MsVick",
  },

  {
    image: getFemaleMemoji(),
    heading: "UkDev",
  },
  {
    image: getMaleMemoji(),
    heading: "Caveman",
  },

  {
    image: getMaleMemoji(),
    heading: "Alex",
  },

  {
    image: getFemaleMemoji(),
    heading: "IBK",
  },

  {
    image: getFemaleMemoji(),
    heading: "MsVick",
  },

  {
    image: getFemaleMemoji(),
    heading: "UkDev",
  },
];
export const auVol = [
  {
    image: getMaleMemoji(),
    heading: "Caveman",
  },

  {
    image: getMaleMemoji(),
    heading: "Alex",
  },

  {
    image: getFemaleMemoji(),
    heading: "IBK",
  },

  {
    image: getFemaleMemoji(),
    heading: "MsVick",
  },

  {
    image: getFemaleMemoji(),
    heading: "UkDev",
  },
  {
    image: getMaleMemoji(),
    heading: "Caveman",
  },

  {
    image: getMaleMemoji(),
    heading: "Alex",
  },

  {
    image: getFemaleMemoji(),
    heading: "IBK",
  },

  {
    image: getFemaleMemoji(),
    heading: "MsVick",
  },

  {
    image: getFemaleMemoji(),
    heading: "UkDev",
  },
];
export const roles = [
  "All roles",
  "Design",
  "Illustration",
  "Podcast",
  "Motion",
  "UI/UX",
  "Growth",
  "Engineering",
  "Marketing",
  "Product",
  "Copywriting",
];
