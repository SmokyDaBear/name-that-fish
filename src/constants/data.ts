import { Images } from "../assets/Images";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
  {
    name: "red snapper",
    url: Images.redSnapper,
  },
];

export const fishNames: Set<string> = new Set(
  ...[initialFishes.map((fish) => fish.name)]
);
