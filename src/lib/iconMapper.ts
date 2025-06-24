import {
  Home,
  Flame,
  BadgeCheck,
  Youtube,
  User,
  Video,
  Clock,
  ListVideo,
  Clock4,
  ThumbsUp,
  Download,
} from "lucide-react";

type IconMap = Record<string, React.ElementType>;

export const iconMap: IconMap = {
  home: Home,
  flame: Flame,
  badgeCheck: BadgeCheck,
  youtube: Youtube,
  user: User,
  video: Video,

  // Personal routes
  clock: Clock,
  listVideo: ListVideo,
  clock4: Clock4,
  thumbsUp: ThumbsUp,
  download: Download,
};

export const getIconComponent = (name: string): React.ElementType => {
  return iconMap[name] || User; // fallback to User icon
};
