import Image from "next/image";
import Link from "next/link";
import HomeImg from "@/assets/image/home/home-2x.jpg";
import PlayStore from "@/assets/png/playstore.png";
import AppleStore from "@/assets/png/applestore.png";
import MobileHero from "@/assets/image/home/mobile-hero.png";

export default function Home() {
  return (
    <div>
      <main className="bg-white mx-auto rounded-lg  py-8">
        {/* Hero Section */}
        <div className="bg-white/90 max-w-5xl mx-auto  p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={HomeImg.src}
              alt="Grommr Mascots"
              width={300}
              height={300}
              className="w-64 md:w-80"
            />
            <div className="space-y-4">
              <h1 className="text-[#8B9B3E] text-2xl font-medium">
                Grommr is a social network and community for gainers, bloaters,
                encouragers and admirers. A ragtag bunch into fat and fatter
                bellies, chubby men, starter guts, beer guts, big muscle and
                chunky muscle, bears, chubs, and so much more!
              </h1>
              <p className="text-[#FF4D4D] font-medium">
                78627 members and growing! 3937 currently online.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="bg-[#8B9B3E] text-white px-6 py-2 rounded-md hover:bg-[#7A8936] transition-colors"
                >
                  Join Us
                </Link>
                <Link
                  href="#"
                  className="bg-[#8B9B3E] text-white px-6 py-2 rounded-md hover:bg-[#7A8936] transition-colors"
                >
                  Sign In
                </Link>
              </div>
              <p className="text-sm text-neutral-600">
                This is a community website that helps to meet others, having
                fun, and more about gaining and encouraging on the{" "}
                <Link href="#" className="text-[#8B9B3E]">
                  Getting FAQ
                </Link>{" "}
                page. Find out about Grommr itself on the{" "}
                <Link href="#" className="text-[#8B9B3E]">
                  About Grommr
                </Link>{" "}
                page. Setting up a profile is free. So sign up now or log in and
                join the fun.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="bg-dark-gray max-h-[400px]  mx-auto mt-28 mb-12">
          <div className="flex max-w-5xl mx-auto flex-col p-8  md:flex-row  justify-between gap-8">
            <div>
              <h2 className="text-text-green mt-20 font-semibold text-xl mb-4">
                Also available via the
                <br />
                Grokio Communities app
                <br />
                for iPhone and Android
              </h2>
              <div className="flex gap-4">
                <Link href="#">
                  <Image
                    src={PlayStore}
                    alt="Get it on Google Play"
                    width={180}
                    height={62}
                    className="h-10 w-auto"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={AppleStore}
                    alt="Download on the App Store"
                    width={180}
                    height={62}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
            <Image
              src={MobileHero}
              alt="Mobile App Screenshots"
              width={500}
              height={400}
              className="w-full -mt-28 md:w-1/2"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid max-w-5xl mx-auto md:grid-cols-2 gap-8">
          {/* Newsfeed */}
          <div className="bg-white/90 rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-[#8B9B3E] rounded-full flex items-center justify-center">
                <Image
                  src="/newsfeed-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-[#8B9B3E] text-xl">
                A Newsfeed that keeps you in touch with
                <br />
                the community and your friends
              </h3>
            </div>
            <p className="text-neutral-600 text-sm">
              Don&#39;t miss out on the hottest topics and latest news! The
              newsfeed provides a summary of what people are writing on their
              walls and the community forums. You can customize what appears in
              your feed so you like and stay informed of what they publicly
              share. Posts you make on your own wall, which are made available
              to the newsfeed of others, can be set to only to show specific
              sections to your profile and get discovered by the users you want
              to talk to.
            </p>
          </div>

          {/* Community Tools */}
          <div className="bg-white/90 rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-[#8B9B3E] rounded-full flex items-center justify-center">
                <Image
                  src="/thumbs-up-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-[#8B9B3E] text-xl">
                Tools to get engaged with other
                <br />
                members and the community as a whole
              </h3>
            </div>
            <p className="text-neutral-600 text-sm">
              No matter your personality, Grommr has tools you can use to
              interact with the people you like most. Whether you prefer the
              privacy of direct messages, or the more public nature of wall
              posts and photo goals, the choice is yours. You can follow
              members, post to their walls, vote like their posts and photos (we
              call that a &#34;nom&#34;), send them a private message, or just a
              flirt - a kind of predefined message with break the ice.
            </p>
          </div>

          {/* Search */}
          <div className="bg-white/90 rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-[#8B9B3E] rounded-full flex items-center justify-center">
                <Image
                  src="/search-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-[#8B9B3E] text-xl">
                Powerful search engine to help you find
                <br />
                friends, dates and mates
              </h3>
            </div>
            <p className="text-neutral-600 text-sm">
              Our search engine is designed to help you discover people who
              share your interests, who dance your interests, who fit your type
              and have the same kinks as you. No matter what your criteria are,
              we&#39;ve got a search filter for it: age, location, relationship
              status, sexual preferences, type of body, languages spoken,
              relationship status, etc. Don&#39;t wait any longer to find the
              gainer, chubby bear, feeder, foodee, or encourager of your dreams!
            </p>
          </div>

          {/* Location */}
          <div className="bg-white/90 rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-[#8B9B3E] rounded-full flex items-center justify-center">
                <Image
                  src="/location-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-[#8B9B3E] text-xl">
                Location, location, location
              </h3>
            </div>
            <p className="text-neutral-600 text-sm">
              Location is everything. So of course we built Grommr with powerful
              location tools. When you add your location to your profile by
              entering a city name, zip/postal code, or even an address
              (don&#39;t worry, your exact location will always remain private),
              the system will automatically calculate and display to other
              members your approximate relative distance to other people. This
              way, you can see who&#39;s close to you, and whether you would
              like to meet them locally, have in your Chicago and London, you
              want to be sure to find the fatties in your area, not just
              somewhere in the same vast city. You can do that on Grommr!
            </p>
          </div>

          {/* Messaging */}
          <div className="bg-white/90 rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-[#8B9B3E] rounded-full flex items-center justify-center">
                <Image
                  src="/chat-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-[#8B9B3E] text-xl">
                Integrated messaging and chat
              </h3>
            </div>
            <p className="text-neutral-600 text-sm">
              On Grommr, chat and messaging are integrated. If you&#39;re busy
              chatting with someone and need to leave the site for a bit,
              that&#39;s fine! The chat message is kept in your inbox and you
              decide when to answer it. Unless you specifically delete them,
              conversations are kept forever. And if you want to know whether
              the people you&#39;re talking to are in for a live chat, you can
              just keep adding replies to the conversation timeline. The replies
              you receive will instantly be shown to you, just like in a chat.
              No need to keep refreshing the inbox.
            </p>
          </div>

          {/* Mobile Apps */}
          <div className="bg-white/90 rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-[#8B9B3E] rounded-full flex items-center justify-center">
                <Image
                  src="/mobile-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-[#8B9B3E] text-xl">
                Mobile apps for iPhone and Android
              </h3>
            </div>
            <p className="text-neutral-600 text-sm">
              Want to keep in touch while on the go? Nothing easier! Just take
              the Grokio Communities app from the App Store or from Google Play
              Store. The mobile apps have been designed to deliver an experience
              tailored for mobile devices, and uses your device&#39;s native
              features such as push notifications. You&#39;ll never miss a
              message again since you push notifications to let you know of new
              messages in your inbox!
            </p>
          </div>

          {/* Privacy */}
          <div className="bg-white/90 rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-[#8B9B3E] rounded-full flex items-center justify-center">
                <Image
                  src="/privacy-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-[#8B9B3E] text-xl">Your privacy matters</h3>
            </div>
            <p className="text-neutral-600 text-sm">
              Grommr is like a &#34;gated&#34; community. No user content
              (profiles, posts, photos) is accessible from commercial search
              engines such as Google, or from unauthenticated users. In addition
              to that first layer of privacy, all sensitive data such as your
              birthdate, email address, and location are kept private by
              default. You can also prevent specific users from accessing your
              profile and content. Lastly, if you&#39;re done with your dating
              journey, you can easily delete your profile and all of your
              content will be permanently removed, no questions asked.
            </p>
          </div>

          {/* International */}
          <div className="bg-white/90 rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-[#8B9B3E] rounded-full flex items-center justify-center">
                <Image
                  src="/globe-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-[#8B9B3E] text-xl">
                International community, website
                <br />
                translated in seven languages
              </h3>
            </div>
            <p className="text-neutral-600 text-sm">
              Use Grommr in one of the seven languages supported: English,
              French, German, Spanish, Italian, Portuguese and Dutch. Some
              languages don&#39;t have a full translation yet, so a few items
              may appear in English.) In addition to languages, Grommr supports
              many other local settings such as units (metric vs US/UK), date
              and time in your local format, and displaying weights, heights and
              distances using your preferred unit of measurement.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-600">
        <div className="flex justify-between items-center">
          <div>Version: 5.0.0-341600 | Legal Notice | Contact</div>
          <div className="flex gap-4">
            <Link href="#" className="flex items-center gap-2">
              <Image src="/twitter-icon.svg" alt="" width={16} height={16} />
              Follow us on Twitter
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <Image src="/shop-icon.svg" alt="" width={16} height={16} />
              Buy Grommr merchandise
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
