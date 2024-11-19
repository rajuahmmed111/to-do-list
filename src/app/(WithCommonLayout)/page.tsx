import Image from "next/image";
import Link from "next/link";
import HomeImg from "@/assets/image/home/home-2x.jpg";
import PlayStore from "@/assets/png/playstore.png";
import AppleStore from "@/assets/png/applestore.png";
import MobileHero from "@/assets/image/home/mobile-hero.png";
import FeaturesGrid from "@/components/pages/home/FeaturesGrid";

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
              <p className="text-sm text-">
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
        <div className="relative z-10 h-fit mb-20">
          <div className="bg-dark-gray bottom-0 left-0 w-full -z-10 absolute min-h-[350px] mx-auto mt-28"></div>
          <div className="flex max-w-5xl mx-auto max-md:bg-dark-gray flex-col z-20  md:flex-row items-center   justify-between gap-10">
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
            <div className=" md:w-1/2 max-w-xl px-5 flex flex-col justify-start place-items-start">
              <Image
                src={MobileHero}
                alt="Mobile App Screenshots"
                width={500}
                height={400}
                className="w-full "
              />
            </div>
          </div>
        </div>
        <FeaturesGrid />
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-8 text-sm text-">
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
