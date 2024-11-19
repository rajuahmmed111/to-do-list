import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineFindInPage } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { HiMiniWrench } from "react-icons/hi2";
import { IoPhonePortrait } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { TbFlagFilled } from "react-icons/tb";

const FeaturesGrid = () => {
  return (
    <div className="grid max-w-5xl mx-auto md:grid-cols-2">
      {/* Newsfeed */}
      <div className="bg-white/90  rounded-lg py-5 px-5">
        <div className="mb-4 flex flex-col  gap-2">
          <div className="text-7xl text-secondary-green ">
            <FaRegNewspaper />
          </div>
          <h3 className="text-text-green font-ubuntu font-bold text-xl">
            A Newsfeed that keeps you in touch with the community and your
            friends
          </h3>
        </div>
        <p className="text- text-sm">
          Don&#39;t miss out on the hottest topics and latest news! The newsfeed
          provides a summary of what people are writing on their walls and the
          community forums. You can customize what appears in your feed so you
          like and stay informed of what they publicly share. Posts you make on
          your own wall, which are made available to the newsfeed of others, can
          be set to only to show specific sections to your profile and get
          discovered by the users you want to talk to.
        </p>
      </div>

      {/* Community Tools */}
      <div className="bg-white/90 rounded-lg p-5">
        <div className="mb-4 flex flex-col  gap-2">
          <div className="text-7xl  text-secondary-green">
            <FaThumbsUp />
          </div>
          <h3 className="text-text-green font-ubuntu font-bold text-xl">
            Tools to get engaged with other members and the community as a whole
          </h3>
        </div>
        <p className=" text-sm">
          No matter your personality, Grommr has tools you can use to interact
          with the people you like most. Whether you prefer the privacy of
          direct messages, or the more public nature of wall posts and photo
          goals, the choice is yours. You can follow members, post to their
          walls, vote like their posts and photos (we call that a
          &#34;nom&#34;), send them a private message, or just a flirt - a kind
          of predefined message with break the ice.
        </p>
      </div>

      {/* Search */}
      <div className="bg-white/90 rounded-lg p-5">
        <div className="mb-4 flex flex-col  gap-2">
          <div className="text-7xl text-secondary-green ">
            <MdOutlineFindInPage />
          </div>
          <h3 className="text-text-green font-ubuntu font-bold text-xl">
            Powerful search engine to help you find friends, dates and mates
          </h3>
        </div>
        <p className="text- text-sm">
          Our search engine is designed to help you discover people who share
          your interests, who dance your interests, who fit your type and have
          the same kinks as you. No matter what your criteria are, we&#39;ve got
          a search filter for it: age, location, relationship status, sexual
          preferences, type of body, languages spoken, relationship status, etc.
          Don&#39;t wait any longer to find the gainer, chubby bear, feeder,
          foodee, or encourager of your dreams!
        </p>
      </div>

      {/* Location */}
      <div className="bg-white/90 rounded-lg p-5">
        <div className="mb-4 flex flex-col  gap-2">
          <div className="text-7xl text-secondary-green ">
            <IoLocationSharp />
          </div>
          <h3 className="text-text-green font-ubuntu font-bold text-xl">
            Location, location, location
          </h3>
        </div>
        <p className="text- text-sm">
          Location is everything. So of course we built Grommr with powerful
          location tools. When you add your location to your profile by entering
          a city name, zip/postal code, or even an address (don&#39;t worry,
          your exact location will always remain private), the system will
          automatically calculate and display to other members your approximate
          relative distance to other people. This way, you can see who&#39;s
          close to you, and whether you would like to meet them locally, have in
          your Chicago and London, you want to be sure to find the fatties in
          your area, not just somewhere in the same vast city. You can do that
          on Grommr!
        </p>
      </div>

      {/* Messaging */}
      <div className="bg-white/90 rounded-lg p-5">
        <div className="mb-4 flex flex-col  gap-2">
          <div className="text-7xl text-secondary-green ">
            <TiMessages />
          </div>
          <h3 className="text-text-green font-ubuntu font-bold text-xl">
            Integrated messaging and chat
          </h3>
        </div>
        <p className="text- text-sm">
          On Grommr, chat and messaging are integrated. If you&#39;re busy
          chatting with someone and need to leave the site for a bit, that&#39;s
          fine! The chat message is kept in your inbox and you decide when to
          answer it. Unless you specifically delete them, conversations are kept
          forever. And if you want to know whether the people you&#39;re talking
          to are in for a live chat, you can just keep adding replies to the
          conversation timeline. The replies you receive will instantly be shown
          to you, just like in a chat. No need to keep refreshing the inbox.
        </p>
      </div>

      {/* Mobile Apps */}
      <div className="bg-white/90 rounded-lg p-5">
        <div className="mb-4 flex flex-col  gap-2">
          <div className="text-7xl text-secondary-green ">
            <HiMiniWrench />
          </div>
          <h3 className="text-text-green font-ubuntu font-bold text-xl">
            Meet other members in person through our GrommOff events
          </h3>
        </div>
        <p className="text- text-sm">
          There&#39;s no better way to get to know other Grommr members than by
          attending an event. Through the course of a year Grommr members
          organize community gatherings, called GrommOffs, aimed at getting more
          folks to go offline once in a while and get together in person. There
          are also several large events each year, like Belly Rub Weekend (BRW),
          The Grom, EuroGrom and The Grom of the Seas Cruise. Don’t miss out on
          the chance to meet other guys in person from the community, check out
          the events listing for more info!
        </p>
      </div>
      {/* Mobile Apps */}
      <div className="bg-white/90 rounded-lg p-5">
        <div className="mb-4 flex flex-col  gap-2">
          <div className="text-7xl text-secondary-green ">
            <IoPhonePortrait />
          </div>
          <h3 className="text-text-green font-ubuntu font-bold text-xl">
            Mobile apps for iPhone and Android
          </h3>
        </div>
        <p className="text- text-sm">
          Want to keep in touch while on the go? Nothing easier! Just take the
          Grokio Communities app from the App Store or from Google Play Store.
          The mobile apps have been designed to deliver an experience tailored
          for mobile devices, and uses your device&#39;s native features such as
          push notifications. You&#39;ll never miss a message again since you
          push notifications to let you know of new messages in your inbox!
        </p>
      </div>

      {/* Privacy */}
      <div className="bg-white/90 rounded-lg p-5">
        <div className="mb-4 flex flex-col  gap-2">
          <div className="text-7xl text-secondary-green ">
            <IoShieldCheckmark />
          </div>
          <h3 className="text-text-green font-ubuntu font-bold text-xl">
            Your privacy matters
          </h3>
        </div>
        <p className="text- text-sm">
          Grommr is like a &#34;gated&#34; community. No user content (profiles,
          posts, photos) is accessible from commercial search engines such as
          Google, or from unauthenticated users. In addition to that first layer
          of privacy, all sensitive data such as your birthdate, email address,
          and location are kept private by default. You can also prevent
          specific users from accessing your profile and content. Lastly, if
          you&#39;re done with your dating journey, you can easily delete your
          profile and all of your content will be permanently removed, no
          questions asked.
        </p>
      </div>

      {/* International */}
      <div className="bg-white/90 rounded-lg p-5">
        <div className="mb-4 flex flex-col  gap-2">
          <div className="text-7xl text-secondary-green ">
            <TbFlagFilled />
          </div>
          <h3 className="text-text-green font-ubuntu font-bold text-xl">
            International community, website translated in seven languages
          </h3>
        </div>
        <p className="text- text-sm">
          Use Grommr in one of the seven languages supported: English, French,
          German, Spanish, Italian, Portuguese and Dutch. Some languages
          don&#39;t have a full translation yet, so a few items may appear in
          English.) In addition to languages, Grommr supports many other local
          settings such as units (metric vs US/UK), date and time in your local
          format, and displaying weights, heights and distances using your
          preferred unit of measurement.
        </p>
      </div>
    </div>
  );
};

export default FeaturesGrid;
