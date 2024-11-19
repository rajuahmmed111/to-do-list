import FeatureGridCard from "@/components/ui/FeatureGridCard";
import Header from "@/components/ui/Header";
import Image from "next/image";
import FAQ from "@/assets/image/faq/faq-2x.jpg";
import { TbBook } from "react-icons/tb";
import Link from "next/link";
import { LiaUserPlusSolid } from "react-icons/lia";

const topics = [
  {
    title: "What's a gainer?",
    description:
      "Gainers are guys who like the idea or physical act of growing bigger, fatter and/or rounder. Gainers come in all shapes and sizes and their fantasies, goals and ideal guys vary all the way from the first-15-pounds frat boys to superchub territory. We're a diverse bunch. There is no one way to be a gainer. Some gainers have put on or are putting on serious amounts of weight. Some are still considering doing so, or waiting for a better time in their lives. Some may never actually gain themselves, but find satisfaction in padding, bloating or inflating. There's no wrong way to be a gainer, so just follow your heart… er… gut.",
  },
  {
    title: "What's an encourager?",
    description:
      'Encouragers are guys who like the idea or physical act of helping someone else grow bigger. Encouragers may be any size—fat, muscular or thin—and many gainers also identify as encouragers. Encouraging exists along a wide spectrum, from guys who just want to cook for a gainer and provide moral support, to guys who enjoy "forcing" a gainer to eat copious amounts (this is always a consensual act). Again, there\'s no wrong way to be an encourager, so keep an open mind.',
  },
  {
    title: "What's a bloater?",
    description:
      "Bloaters are guys who like the idea of bloating or inflating their bellies with water, soda, food or air in order to achieve a more pronounced belly, albeit temporarily. Bloaters can be thin or large.",
  },
  {
    title: "What's an admirer?",
    description:
      "Admirers are guys who appreciate gainers, bloaters and/or the act of gaining, but don't take an active role as encouragers do. Admirers can be any size. Admirer is really a self-explanatory term—they admire others.",
  },
  {
    title: "What's a maintainer?",
    description: `A maintainer is someone who enjoys the idea of gaining weight and has gained some amount of weight, but at the present time is not looking to gain more. Some guys might gain and then maintain for the rest of their lives—others might be constantly moving between being a gainer and a maintainer depending on their priorities and interests. The maintainer label is a simple way of telling the world "I enjoy the idea of gaining, but I'm not currently trying to gain."`,
  },
  {
    title: "Isn't gaining unhealthy?",
    description:
      "The short answer is yes, but we think this question requires a bigger picture view of the role risk plays in our lives. Rock climbing is an incredibly risky hobby, but nobody shames or discourages people from climbing mountains. Driving is one of the most dangerous things we do everyday, but we don't think twice before getting behind the wheel of a car. Technically we could maximize our years on this earth by avoiding most fun, rewarding things and never leaving our homes, but we don't do that, because that would be awful. The truth is, we accept all kinds of risk in life in order to be happy, fulfilled, whole human beings. Can gaining weight come with added health risks? Yes. Are there ways to gain weight while remaining relatively healthy and living a long life? Also yes. Is it okay to take part in something that is deeply fulfilling and important, even if it may add some health risks? That's a question each person needs to answer. For us, the answer is yes.",
  },
  {
    title: "OK, is this a se-xual, romantic, or platonic thing?",
    description:
      "It's different for different guys. Most gainers and encouragers find physical and se-x-ual gratification from it. Many also find a romantic connection—either making gaining a part of a relationship or in some way maintaining the fantasy with their partners. Some just want a buddy to gain with or help grow.",
  },
  {
    title: "What's the difference between a gainer and chub?",
    description:
      "Simply put: Chub is a term used to describe a physical state and gainer is a term used to describe a mentality or way of being. The term chub is used to describe any man who is overweight, while gainer is a term used to describe anyone who enjoys or is turned on by gaining weight. Most people who identify as chubs are not big on purpose and do not also identify as gainers, though some larger gainers also identify as chubs. Because gaining is about a mindset, gainers can be any physical shape or size. Some gainers may only gain a few pounds, some will pack on hundreds of pounds, some will gain and lose weight and some may never grow—all of these are valid ways to be a gainer.",
  },
  {
    title: "What's the difference between chasers and encouragers?",
    description:
      "A chaser is a man who finds chubby men attractive; an encourager is a man who enjoys helping another man gain weight. While chasers by definition are attracted primarily or exclusively to larger bodies, encouragers may be attracted to any range of body types. While some people may identify as both a chaser and encourager, many only identify as one.",
  },
  {
    title: "It sounds like gainers and encouragers have a weird se-xua-lity.",
    description:
      "Yeah, it's weird, but then again, what se-x-ual intersts aren't weird? se-x- is weird. People are weird. Some people are just more honest about their weird. And for the record, we don't think weird means bad—on the contrary, normal is severely overrated. Sure, gainer/encourager se-x-uality is off the beaten path, but it's not homogenous. Some gainers and encouragers have relatively normative se-x-ual desires, but most appear to enjoy activities in bed that are well outside the mainstream. That can range from sensual belly-rubbing to mixing food and se-x- to role playing to good-old-fashioned mutual masturbation.",
  },
  {
    title: "Can't I just hide this part of me?",
    description:
      "Choosing which parts of yourself to express and hide is always a personal choice. But here on Grommr we don't have to hide this part of ourselves and we find it incredibly liberating. We've found that trying to suppress or ignore something as innate and unchangeable as being into gaining is harmful and, ultimately, doesn't work. Grommr is a safe space to explore this part of you without the need to hide, so while the choice is yours, we are here and ready to welcome you.",
  },
  {
    title: "But if I accept this, what does that mean for relationships?",
    description:
      "It can mean whatever you want it to mean. If you are in a relationship or end up in a relationship with someone who isn't into gaining, it might be a good idea to let them know about your interest, so it doesn't become a big secret that hurts your relationship down the road. If you want to date someone who's also into gaining, it means your options are more limited and you may need to travel or be open to be relocating (the odds of finding Mr. Perfect Gainer within 10 miles of you are not impossible, but not exactly likely). Whatever you choose, embrace that choice with honesty and openness and you'll set yourself up for success.",
  },
  {
    title: "How can I learn more?",
    description:
      "Honestly, the best way to learn more is to dive in—start chatting with guys and try to attend a local GrommOff or a big event like BRW, The Grom or EuroGrom. But if you'd like a cool introductory video, check out the documentary HardFat on Youtube—which covers some basic territory for gainers and encouragers. We also recommend exploring gainerhouse.com, which has lots of resources for those new to the gainer community.",
  },
];

function FAQPage() {
  return (
    <div className=" max-w-5xl mx-auto py-10 ">
      <div className="flex items-center justify-between md:mb-5 gap-4 flex-wrap">
        <Header Icon={TbBook} className="text-3xl" iconClass="text-5xl">
          Gaining FAQ
        </Header>
        <Link
          href="#"
          className="border border-primary-green flex items-center gap-2 font-bold text-primary-green px-3 py-2 rounded-md hover:bg-accent hover:text-white transition-colors"
        >
          <LiaUserPlusSolid />
          Join Us
        </Link>
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
