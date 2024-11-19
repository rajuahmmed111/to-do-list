import React from "react";
import { FaRegNewspaper, FaThumbsUp } from "react-icons/fa";
import { MdOutlineFindInPage } from "react-icons/md";
import {
  IoLocationSharp,
  IoPhonePortrait,
  IoShieldCheckmark,
} from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { HiMiniWrench } from "react-icons/hi2";
import { TbFlagFilled } from "react-icons/tb";

// FeatureCard component for reusability
interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  Icon,
}) => (
  <div className="bg-white/90 rounded-lg p-5">
    <div className="mb-4 flex flex-col gap-2">
      <div className="text-7xl text-secondary-green">
        <Icon />
      </div>
      <h3 className="text-text-green font-ubuntu font-bold text-xl">{title}</h3>
    </div>
    <p className="text-sm">{description}</p>
  </div>
);

// FeaturesGrid component with mapped data
const FeaturesGrid = () => {
  const features = [
    {
      title:
        "A Newsfeed that keeps you in touch with the community and your friends",
      description: `Don't miss out on the hottest topics and latest news! The newsfeed 
        provides a summary of what people are writing on their walls and the 
        community forums. You can customize what appears in your feed so you 
        like and stay informed of what they publicly share. Posts you make on 
        your own wall, which are made available to the newsfeed of others, can 
        be set to only to show specific sections to your profile and get discovered by 
        the users you want to talk to.`,
      Icon: FaRegNewspaper,
    },
    {
      title:
        "Tools to get engaged with other members and the community as a whole",
      description: `No matter your personality, Grommr has tools you can use to interact 
        with the people you like most. Whether you prefer the privacy of direct messages, 
        or the more public nature of wall posts and photo goals, the choice is yours. 
        You can follow members, post to their walls, vote like their posts and photos 
        (we call that a "nom"), send them a private message, or just a flirt - a kind 
        of predefined message with break the ice.`,
      Icon: FaThumbsUp,
    },
    {
      title: "Powerful search engine to help you find friends, dates and mates",
      description: `Our search engine is designed to help you discover people who share 
        your interests, who fit your type and have the same kinks as you. No matter 
        what your criteria are, we've got a search filter for it: age, location, relationship 
        status, sexual preferences, type of body, languages spoken, etc. Don't wait any 
        longer to find the gainer, chubby bear, feeder, foodee, or encourager of your dreams!`,
      Icon: MdOutlineFindInPage,
    },
    {
      title: "Location, location, location",
      description: `Location is everything. So of course we built Grommr with powerful 
        location tools. When you add your location to your profile by entering a city name, 
        zip/postal code, or even an address (don't worry, your exact location will always 
        remain private), the system will automatically calculate and display to other members 
        your approximate relative distance. This way, you can see who's close to you and meet them locally.`,
      Icon: IoLocationSharp,
    },
    {
      title: "Integrated messaging and chat",
      description: `On Grommr, chat and messaging are integrated. If you're busy chatting 
        with someone and need to leave the site for a bit, that's fine! The chat message is 
        kept in your inbox and you decide when to answer it. Conversations are kept forever 
        unless deleted. Replies are shown instantly, just like in a chat.`,
      Icon: TiMessages,
    },
    {
      title: "Meet other members in person through our GrommOff events",
      description: `There's no better way to get to know other Grommr members than by attending an event. 
        Grommr members organize community gatherings called GrommOffs, aimed at getting more folks to go 
        offline once in a while. Don't miss out on the chance to meet other guys in person!`,
      Icon: HiMiniWrench,
    },
    {
      title: "Mobile apps for iPhone and Android",
      description: `Want to keep in touch while on the go? Just take the Grokio Communities app from the App 
        Store or Google Play Store. The mobile apps deliver a tailored experience for mobile devices, 
        using native features like push notifications to keep you updated.`,
      Icon: IoPhonePortrait,
    },
    {
      title: "Your privacy matters",
      description: `Grommr is like a "gated" community. No user content is accessible from commercial search 
        engines such as Google, or unauthenticated users. Sensitive data like birthdate and location 
        are kept private by default. You can also prevent specific users from accessing your profile.`,
      Icon: IoShieldCheckmark,
    },
    {
      title: "International community, website translated in seven languages",
      description: `Use Grommr in one of the seven supported languages: English, French, German, Spanish, 
        Italian, Portuguese, and Dutch. Local settings such as metric units, date formats, and weight measurements 
        are also supported.`,
      Icon: TbFlagFilled,
    },
  ];

  return (
    <div className="grid max-w-5xl mx-auto sm:grid-cols-2 gap-2">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          Icon={feature.Icon}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
