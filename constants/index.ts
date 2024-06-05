import { Id } from "@/convex/_generated/dataModel";

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/discover.svg",
    route: "/discover",
    label: "Discover",
  },
  {
    imgURL: "/icons/microphone.svg",
    route: "/create-podcast",
    label: "Create Podcast",
  },
];

export const podcastData = [
  {
    id: 1,
    title: "The Joe Rogan Experience",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/3106b884-548d-4ba0-a179-785901f69806",
  },
  {
    id: 2,
    title: "The Futur",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/16fbf9bd-d800-42bc-ac95-d5a586447bf6",
  },
  {
    id: 3,
    title: "Waveform",
    description: "Join Michelle Obama in conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/60f0c1d9-f2ac-4a96-9178-f01d78fa3733",
  },
  {
    id: 4,
    title: "The Tech Talks Daily Podcast",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445",
  },
  {
    id: 5,
    title: "GaryVee Audio Experience",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23",
  },
  {
    id: 6,
    title: "Syntax ",
    description: "Join Michelle Obama in conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
  },
  {
    id: 7,
    title: "IMPAULSIVE",
    description: "A long form, in-depth conversation",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c",
  },
  {
    id: 8,
    title: "Ted Tech",
    description: "This is how the news should sound",
    imgURL:
      "https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e",
  },
];

export const singlePodcastData = {
  _id: "5f7b4b4b-0b3b-4b3b-8b3b-4b3b0b3b4b3b" as Id<"podcasts">,
  audioStorageId: "5f7b4b4b-0b3b-4b3b-8b3b-4b3b0b3b4b3b" as Id<"_storage">,
  user: "5f7b4b4b-0b3b-4b3b-8b3b-4b3b0b3b4b3b",
  podcastTitle: "The Joe Rogan Experience",
  podcastDescription:
    "Welcome to the 'Javascript Jungle Podcast'! Join us as we navigate through the dense and ever-evolving world of JavaScript. Whether you're a seasoned developer or just starting your journey, our podcast has something for everyone.",
  audioUrl:
    "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
  imageUrl:
    "https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e" as Id<"_storage">,
  imageStorageId: "5f7b4b4b-0b3b-4b3b-8b3b-4b3b0b3b4b3b" as Id<"_storage">,
  author: "John Doe",
  authorId: "5f7b4b4b-0b3b-4b3b-8b3b-4b3b0b3b4b3b" as Id<"users">,
  authorImageUrl:
    "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
  voicePrompt:
    "JavaScript has evolved significantly since its inception. From its humble beginnings as a language for enhancing web pages with interactive elements, it has grown into a powerhouse for both frontend and backend development. One of the most intriguing aspects of JavaScript is its versatility. It can be used for everything from building dynamic websites and web applications to developing server-side applications with Node.js. Absolutely! And let's not forget about the vibrant ecosystem surrounding JavaScript, with a plethora of frameworks, libraries, and tools available to developers. Indeed! Whether it's React, Vue.js, or Angular on the frontend, or Express.js, Nest.js, or Meteor.js on the backend, there's no shortage of options.",
  imagePrompt:
    "Welcome to JavaScript Jungle, your go-to podcast for all things JavaScript! In today's episode, we're diving deep into the fascinating world of JavaScript and exploring some of the most interesting aspects of this powerful programming language.",
  voiceType: "A long form, in-depth conversation",
  audioDuration: 0,
  views: 2,
};
