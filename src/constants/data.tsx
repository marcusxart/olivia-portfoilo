import { submergedGroup, swapGroup } from "../assets/images";
import hinder from "../assets/images/hinder";
import photoshot from "../assets/images/photoshot";

const projects = [
  {
    id: "hinder",
    name: "Hinder technology",
    hero: hinder.image01,
    tag: "branding",
    subtitle: "Immersive cybersecurity in a mixed reality world",
    description:
      "Hinder is a next-gen cybersecurity and threat detection solution, blending cutting-edge immersive interfaces with advanced threat monitoring. This branding visual captures a sleek, futuristic workspace where human interaction meets high-tech protection.",
    date: "2024-11-22",
    sections: [
      { type: "image", image: hinder.image03 },
      {
        text: "Hinder's interface is designed for seamless user experience, integrating advanced threat detection with an intuitive, immersive design. The workspace features a blend of digital and physical elements, showcasing the future of cybersecurity.",
      },
      { type: "image", image: hinder.image07 },
    ],
    photoGroup: [hinder.image03, hinder.image06],
    size: "large",
  },

  {
    id: "lake-lady",
    name: "Anya Thorne's lake lady",
    hero: photoshot.image01,
    tag: "digital",
    subtitle: "Where natural elegance meets handmade charm",
    description:
      "Captured in serene tones and wild textures, 'Lake Lady' showcases Anya Thorne’s intricate crochet design worn against the calm, earthy backdrop of nature. The composition exudes timeless femininity, grounding fashion in organic stillness.",
    date: "2024-09-05",
    size: "medium",
    photoGroup: [
      photoshot.image04,
      photoshot.image07,
      photoshot.image03,
      photoshot.image06,
    ],
  },
  {
    id: "swap-drink",
    name: "Swap drink",
    hero: swapGroup.image01,
    tag: "branding",
    subtitle: "Fizz meets flavor without the sugar",
    description:
      "A refreshing visual of Swap's fizzy drinks Lemon Zing and Orange Twist captured mid-cheers under a bright summer sky. Promoting a healthy lifestyle with zero sugar and no artificial sweeteners, this vibrant branding image emphasizes flavor without compromise.",
    date: "2024-08-17",
    height: 355,
    size: "large",
    photoGroup: [
      swapGroup.image03,
      swapGroup.image04,
      swapGroup.image07,
      swapGroup.image08,
    ],
  },

  {
    id: "ghost-girl",
    name: "Ghost girl",
    hero: submergedGroup.image06,
    tag: "digital",
    subtitle: "A journey into the unknown",
    description:
      "This series explores themes of mystery and introspection, featuring a solitary figure navigating dimly lit paths and overgrown trails. The use of light and shadow creates an ethereal atmosphere, hinting at a hidden world or an inner journey.",
    date: "2025-01-15",
    size: "large",
    sections: [
      { type: "image", image: submergedGroup.image02 },
      {
        type: "text",
        text: "In the first image, a person holds a glowing lantern, their face illuminated by its warm light against a dark background, suggesting a search for clarity or a guiding presence. The second image depicts a person walking through a lush, overgrown path, surrounded by dense foliage, evoking a sense of exploration and solitude in nature.",
      },
      { type: "image", image: submergedGroup.image04 },
    ],
    photoGroup: [submergedGroup.image05, submergedGroup.image03],
  },
];

export { projects };
