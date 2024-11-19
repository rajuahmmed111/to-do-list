import FeatureGridCard from "@/components/ui/FeatureGridCard";
import Header from "@/components/ui/Header";
import Image from "next/image";
import FAQ from "@/assets/image/about/about-2x.jpg";
import Link from "next/link";
import { FaFeatherAlt } from "react-icons/fa";

const topics = [
  {
    title: "Grommr",
    description: (
      <span>
        Grommr is a social network and online community. We&#39;ve blended the
        best of both worlds—allowing users to connect with their friends and the
        community at large and also seek out the kinds of guys they like for
        dates, romance, hook-ups or friendships. <br /> <br /> Grommr was
        created by a group of gainers and designed specifically to address the
        unique needs of the gainer community—including easier ways to meet
        face-to-face and set up group events; strong search functions to find
        local guys who share your kinks and interests; and customized features
        for tracking gains and progress.
      </span>
    ),
  },
  {
    title: "The Name",
    description:
      'So you might be wondering, what on earth is a "grommr"? Grommr is actually a contraction of two words: growth and community. It\'s a name that subtly conveys the idea of this site as a welcoming place for all guys into growth—whether that be belly, muscle, fat all over—but also takes on a new meaning all its own. "Grommr" has some meaning for our community, but it\'s also a name that you could feel comfortable saying out loud in a bar or having your roommate (or boyfriend) see in the browser history without knowing exactly what it meant. Having shared computers at one time or another in our lives, that\'s something that resonated with the Grommr team.',
  },
  {
    title: "Premium Costs",
    description:
      "In order to be self-sustaining, Grommr offers a paid premium option known as GrommrXL. By paying a small monthly fee (as low as $5 per month), premium members have access to special features, unlimited photo viewing and uploading, and unlimited message sending. But it's also important to the Grommr team that non-paying members can actively engage in the community as well. That's why regular members still have access to basic features (including updating their profiles, posting wall and photo comments, private messaging and more) and are able to view a limited number of full-size photos each day.",
  },
  {
    title: "Grokio Communities",
    description:
      "Grokio Communities is a small, independent, gay-owned and operated company of dedicated kinksters who built and manage Grommr. We’ve been providing safe, inclusive and welcoming virtual spaces for kink communities since we launched Grommr in 2011. Almost all our revenues come from our members in the form of premium subscriptions (the rest comes from ads served in our app). We aren’t funded or run by anyone in Silicon Valley or Wall Street or China. We’re just a group of kinksters who enjoy helping other kinksters connect.",
  },
  {
    title: "Our Admin Team",
    description: `Our admins are paid professionals who take seriously their responsibility to make Grommr a safe and inclusive space. All our admins are Grommr members or other kinksters--we don't outsource to folks who don't understand what our community is about. We believe that diversity is a strength. Our admin team is predominantly queer and proud to be so, including admins who identify as gay, bi and pan, as well as admins who identify as trans and non-binary. Our team also includes people of color and admins from a diverse array of countries spanning three continents.`,
  },
  {
    title: "Your Data",
    description:
      "We don’t sell your data. We’re not Facebook and we think your right to privacy is too important to go telling other companies what you like and who you talked to. What happens on Grommr stays on Grommr. We also don’t keep your data after you leave. If you ever decide to go—and we hope you won’t!—you can delete your profile and with it every single photo, message, profile field and post. When we say delete we actually mean delete.",
  },
];

function FAQPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 ">
      <div className="flex items-center px-5 justify-between md:mb-5 gap-4 flex-wrap">
        <Header Icon={FaFeatherAlt} className="text-3xl" iconClass="text-5xl">
          About Us
        </Header>
        <Link
          href="#"
          className="border border-primary-green flex items-center gap-2 font-bold text-primary-green px-3 py-2 rounded-md hover:bg-accent hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>
      <div className="text-sm px-5">
        <p className="pb-5">
          <span className="font-ubuntu font-semibold">
            Welcome to Grommr, the social network and online community for guys
            into gaining, encouraging and all things belly!
          </span>
        </p>
        <p>
          This is a community for guys of a similar mindset—that bigger is, most
          often, better. It&#39;s a community for all the guys who spent their
          childhoods stuffing pillows under their shirts or staring a little too
          long at big-bellied men in the supermarket. And for guys who always
          thought infomercials got the &#34;before&#34; and &#34;after&#34;
          pictures in the wrong order. This is a community for those of us who
          watched with an unexplained fascination The Santa Clause, Raging Bull
          or any other movie or TV show featuring men with expanding waistlines.
          And it&#39;s for the guys who always thought they were alone in their
          desires until the day they discovered Bellybuilders, Gainrweb, the
          Frat or Grommr. This is a community for doctors, lawyers, waiters,
          students, businessmen, truckers, dog-walkers, Oscar-nominees and
          everyone in between. And it&#39;s for guys of every size—from skinny
          to bellied to massively huge. But ultimately, this is a community for
          anyone who feels they belong here. Welcome home.
        </p>
      </div>
      <div className="grid mx-auto sm:grid-cols-2 gap-2">
        {topics.map((feature, index) => (
          <FeatureGridCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <div className="flex h-full justify-center w-full">
        <Image
          src={FAQ}
          alt="Mobile App Screenshots"
          width={500}
          height={400}
          className="w-80 md:max-w-sm mt-6 px-5"
        />
      </div>
    </div>
  );
}

export default FAQPage;
