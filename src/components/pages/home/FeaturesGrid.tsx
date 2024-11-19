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
import FeatureGridCard from "@/components/ui/FeatureGridCard";

// FeatureCard component for reusability

// FeaturesGrid component with mapped data
const FeaturesGrid = () => {
  const features = [
    {
      title:
        "A Newsfeed that keeps you in touch with the community and your friends",
      description: `Don't miss out on the hottest topics and latest news: The newsfeed provides a summary of what people are writing on their walls and the comments others are making. You can choose to follow the members you like and stay informed of what they publicly share. Posts you make on your own wall, which are made available to the newsfeed of others, are also a great way to draw some attention to your profile and get discovered by the guys you want to talk to.`,
      Icon: FaRegNewspaper,
    },
    {
      title:
        "Tools to get engaged with other members and the community as a whole",
      description: `No matter your personality, Grommr has tools you can use to interact with the people you like most. Whether you prefer the privacy of direct messages or leaving a public comment on someone's post or photo, the choice is yours. You can follow members, post to their public wall, like their posts and photos (we call that a "Nom"), send them a private message, or just a flirt—a kind of predefined message—to break the ice.`,
      Icon: FaThumbsUp,
    },
    {
      title: "Powerful search engine to help you find friends, dates and mates",
      description: `On Grommr you will find advanced search tools to help you discover guys in your area, who share your interests, who fit your type and have the same kinks as you. No matter what your criteria are, we’ve got a search for it: Age, location, weight, BMI, sexual kinks and preferences, type of body, languages spoken, relationship status, etc. Don't wait any longer to find the gainer, chubby bear, feeder, bloater or encourager of your dreams.`,
      Icon: MdOutlineFindInPage,
    },
    {
      title: "Location, location, location",
      description: `Location is everything! So of course we built Grommr with powerful location-based tools. You can specify your location in your profile by entering a city name, zip/postal code, or even an address (don't worry, your exact location will always remain private). The system will translate your location to geographical coordinates to calculate your relative distance to other people. This way you can see who's close to you, sorted by distance. In big cities like New York, Los Angeles, Chicago and London, you want to know who actually lives in your area, not just somewhere in the same vast city. You can do that on Grommr.

`,
      Icon: IoLocationSharp,
    },
    {
      title: "Integrated messaging and chat",
      description: `On Grommr, chat and messaging are integrated. If you're busy chatting with others and can't respond to a new message right away, that's fine! The chat message is kept in your inbox and you decide when to answer it. Unless you specifically delete them, conversations are saved so you can always refer to them later. And if both you and the recipient are in for a live chat, you can just keep adding replies to the conversation window: The replies you receive will instantly appear on the page, without the need to refresh the page or keep checking the inbox.

`,
      Icon: TiMessages,
    },
    {
      title: "Meet other members in person through our GrommOff events",
      description: `There's no better way to get to know other Grommr members than by attending an event. Through the course of a year Grommr members organize community gatherings, called GrommOffs, aimed at getting more folks to go offline once in a while and get together in person. There are also several large events each year, like Belly Rub Weekend (BRW), The Grom, EuroGrom and The Grom of the Seas Cruise. Don’t miss out on the chance to meet other guys in person from the community, check out the events listing for more info!`,
      Icon: HiMiniWrench,
    },
    {
      title: "Mobile apps for iPhone and Android",
      description: `Want to keep in touch while on the go? Nothing easier! Just install the Grokio Communities app found in the Apple App Store or Google Play Store. The mobile apps have been designed to deliver an experience tailored for smaller screens, and uses your device's native features. Don't miss any communication—with your permission, we will send you push notifications to let you know of new messages in your inbox!`,
      Icon: IoPhonePortrait,
    },
    {
      title: "Your privacy matters",
      description: `Grommr is like a "gated" community. No user content (profiles, posts, photos, etc.) is accessible from Internet search engines such as Google, or from unauthenticated users. In addition to that first layer of privacy, all sensitive data such as your birthdate, email address, location coordinates, is kept confidential. You can also opt to block specific users from accessing your profile and content. Lastly, if you're ever thinking of leaving Grommr, you can easily delete your profile and all of your user-data will be permanently wiped, no questions asked.`,
      Icon: IoShieldCheckmark,
    },
    {
      title: "International community, website translated in seven languages",
      description: `Use Grommr in one of the seven languages supported: English, French, German, Spanish, Italian, Portuguese, and Japanese. (Note: some languages don't have a full translation yet, so a few items may appear in English.) In addition to languages, Grommr supports many other very useful internationalization features, such as displaying dates and times in your local format, and displaying weights, heights and distances using your preferred unit of measurement.`,
      Icon: TbFlagFilled,
    },
  ];

  return (
    <div className="grid max-w-5xl mx-auto sm:grid-cols-2 gap-2">
      {features.map((feature, index) => (
        <FeatureGridCard
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
