import { Dispatch, SetStateAction } from "react";
import { Id } from "@/convex/_generated/dataModel";

export interface PodcastCardProps {
  imgUrl: string;
  title: string;
  description: string;
  podcastId: Id<"podcasts"> | number;
}

export type VoiceType =
  | "alloy"
  | "echo"
  | "fable"
  | "onyx"
  | "nova"
  | "shimmer";

export interface GeneratePodcastProps {
  voiceType: VoiceType;
  setAudio: Dispatch<SetStateAction<string>>;
  audio: string;
  setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  voicePrompt: string;
  setVoicePrompt: Dispatch<SetStateAction<string>>;
  setAudioDuration: Dispatch<SetStateAction<number>>;
}

export interface GenerateThumbnailProps {
  setImage: Dispatch<SetStateAction<string>>;
  setImageStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  image: string;
  imagePrompt: string;
  setImagePrompt: Dispatch<SetStateAction<string>>;
}

export interface EmptyStateProps {
  title: string;
  search?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

export interface PodcastDetailPlayerProps {
  audioUrl: string;
  podcastTitle: string;
  author: string;
  isOwner: boolean;
  imageUrl: string;
  podcastId: Id<"podcasts">;
  imageStorageId: Id<"_storage">;
  audioStorageId: Id<"_storage">;
  authorImageUrl: string;
  authorId: string;
}

export interface TopPodcastersProps {
  _id: Id<"users">;
  _creationTime: number;
  email: string;
  imageUrl: string;
  clerkId: string;
  name: string;
  podcast: {
    podcastTitle: string;
    pocastId: Id<"podcasts">;
  }[];
  totalPodcasts: number;
}

export interface CarouselProps {
  fansLikeDetail: TopPodcastersProps[];
}
