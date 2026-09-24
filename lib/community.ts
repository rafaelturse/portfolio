import { InstagramIcon, XIcon, LinkedinIcon, GithubIcon, BehanceIcon, YoutubeIcon, type IconProps } from "./icons";
import { contacts } from "./contacts";
import type { ReactElement } from "react";

export type CommunityPlatformId = "linkedin" | "github" | "behance" | "x" | "instagram" | "youtube";

export type CommunityPlatform = {
  id: CommunityPlatformId;
  name: string;
  icon: (props: IconProps) => ReactElement;
  iconColor: string;
  href: string;
  description: string;
};

const ICON_MAP: Record<CommunityPlatformId, (props: IconProps) => ReactElement> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  behance: BehanceIcon,
  x: XIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const COLOR_MAP: Record<CommunityPlatformId, string> = {
  linkedin: "#0A66C2",
  github: "#ffffff",
  behance: "#1769FF",
  x: "#ffffff",
  instagram: "#E4405F",
  youtube: "#FF0000",
};

const DESCRIPTION_MAP: Record<CommunityPlatformId, string> = {
  linkedin: "Connect with me professionally and follow updates on my career.",
  github: "Explore my code, projects, and open-source contributions.",
  behance: "Browse my illustrations, design work, and creative projects.",
  x: "Quick updates, thoughts, and behind-the-scenes on my work.",
  instagram: "Photos and glimpses into my creative process and daily life.",
  youtube: "Videos related to my projects and interests.",
};

function toPlatformId(label: string): CommunityPlatformId {
  return label.toLowerCase() as CommunityPlatformId;
}

export const COMMUNITY_PLATFORMS: CommunityPlatform[] = contacts
  .filter((c) => toPlatformId(c.label) in ICON_MAP)
  .map((c) => {
    const id = toPlatformId(c.label);
    return {
      id,
      name: c.label,
      icon: ICON_MAP[id],
      iconColor: COLOR_MAP[id],
      href: c.href,
      description: DESCRIPTION_MAP[id],
    };
  });