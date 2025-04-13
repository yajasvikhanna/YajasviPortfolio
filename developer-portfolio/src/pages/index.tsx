import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiPostman,
  SiGreensock,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { FaLinkedin, FaGithub, FaCode, FaHackerrank, FaTwitter } from 'react-icons/fa';

const aboutStats = [
  { label: "Years of experience", value: "1.5+" },
  { label: "Technologies mastered", value: "5+" },
  { label: "Currently working as ", value: "SDE" },
];

const projects = [
  {
    title: "Mobix",
    description: "A rider sharing platform for the modern world",
    image: "/assets/Mobix.gif",
    href: "https://uberclone-frontend.onrender.com/",
  },
  {
    title: "Shoppie",
    description: "E commerce platform for all your needs",
    image: "/assets/Shoppie.gif",
    href: "https://shoppie-pi.vercel.app/",
  },
  {
    title: "Apple Vision Website Clone",
    description: "Apple Vision Pro website clone",
    image: "/assets/Apple_Vison_clone.gif",
    href: "https://yajasvikhanna.github.io/Apple-Vision-Website-Clone/",
  },
  {
    title: "Old Portfolio Website",
    description:
      "My old portfolio website made using GSAP, Locomotive Smooth scoll & Scroll-trigger",
    image: "/assets/Old_Portfolio_website.gif",
    href: "https://yajasvikhanna.github.io/Portfolio_Website/",
  },
];

const services = [
  {
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "UX Design",
    description:
      "Building intuitive, user-centric designs that drive engagement and conversion.",
    icon: Frame,
  },
  {
    service: "SEO Optimization",
    description:
      "Enhancing your website's visibility in search engines for increased organic traffic.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Designing websites that look and perform equally well on all devices and screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Developing robust, scalable server-side logic for a wide range of web applications.",
    icon: Eye,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
                className="animate-fade-in-up mx-auto max-w-5xl px-6 py-12 text-left"
              >
                <span className="font-satoshi mb-4 block text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl 2xl:text-8xl">
                  Hello, I&apos;m
                </span>
                <span className="clash-grotesk block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl 2xl:text-8xl">
                  Yajasvi Khanna.
                </span>
              </h1>

              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                An experienced full-stack website developer with a passion for
                crafting unique digital experiences.
              </p>
              <br />
              <br />
              {/* <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span >Made using: </span>
              <span className={styles.pill}>next.js</span>
              <span className={styles.pill}>tailwindcss</span>
              <span className={styles.pill}>typescript</span>
            </div> */}
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:yajasvikhanna@gmail.com" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          {/* <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div> */}
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
<h2 className="py-16 pb-2 text-2xl font-light leading-relaxed tracking-tight text-foreground xl:text-[30px] text-justify">
  <p>
    I'm a full-stack developer proficient in React.js, Tailwind CSS, GSAP, Redux, Node.js, Express.js, MySQL, and MongoDB.
  </p>
  <p>
    I have a strong foundation in programming languages like JavaScript, C++, and Python, and I'm also familiar with Django for backend development.
  </p>
  <p>
    I regularly use tools like Git, Postman, and AWS to streamline the development and deployment process.
  </p>
  <p>
    I'm passionate about building high-performance, scalable web applications and have a growing interest in AI/ML. I'm also a Three.js enthusiast, always exploring ways to create engaging 3D web experiences.
  </p>
</h2>



            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {
          <section className="overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 py-10">
            {/* Heading */}
            <h2 className="mb-6 text-center text-3xl font-bold text-white">
              Skills and Tech Stack
            </h2>

            {/* Ticker Row */}
            <motion.div
              className="flex items-center gap-12 px-4"
              animate={{ x: ["100%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
              {[
                {
                  icon: <FaHtml5 className="text-orange-600" />,
                  title: "HTML5",
                },
                {
                  icon: <FaCss3Alt className="text-blue-600" />,
                  title: "CSS3",
                },
                {
                  icon: <SiTailwindcss className="text-cyan-400" />,
                  title: "Tailwind CSS",
                },
                { icon: <FaReact className="text-blue-400" />, title: "React" },
                {
                  icon: <SiRedux className="text-purple-500" />,
                  title: "Redux",
                },
                {
                  icon: <SiNextdotjs className="text-black dark:text-white" />,
                  title: "Next.js",
                },
                {
                  icon: <FaNodeJs className="text-green-600" />,
                  title: "Node.js",
                },
                {
                  icon: <SiMongodb className="text-green-500" />,
                  title: "MongoDB",
                },
                { icon: <SiMysql className="text-blue-500" />, title: "MySQL" },
                {
                  icon: <SiCplusplus className="text-blue-800" />,
                  title: "C++",
                },
                {
                  icon: <SiPython className="text-yellow-500" />,
                  title: "Python",
                },
                {
                  icon: <SiJavascript className="text-yellow-400" />,
                  title: "JavaScript",
                },
                {
                  icon: <SiGreensock className="text-green-500" />,
                  title: "GSAP",
                },
                { icon: <FaGitAlt className="text-red-500" />, title: "Git" },
                { icon: <FaAws className="text-orange-400" />, title: "AWS" },
                {
                  icon: <SiPostman className="text-orange-500" />,
                  title: "Postman",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex min-w-[80px] flex-col items-center gap-2"
                >
                  <span className="text-5xl transition-transform duration-300 hover:scale-125">
                    {item.icon}
                  </span>
                  <p className="text-sm text-white">{item.title}</p>
                </div>
              ))}
            </motion.div>
          </section>
        }

        <section id="projects" data-scroll-section>
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-4xl font-bold tracking-tight sm:text-5xl">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Streamlined digital experiences.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;ve worked on a variety of projects, from small websites to
              large-scale web applications. Here are some of my favorites:
            </p>

            {/* Carousel */}

            <div className="relative mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-contain"
                            />
                          </Link>
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              {/* Carousel progress dots */}
              <div className="mt-4 flex justify-center gap-2">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`h-3 w-3 rounded-full ${current === index ? "bg-primary" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Need more info?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I got you.
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Here are some of the services I offer. If you have any
                  questions, feel free to reach out.
                </p>
              </div>
              {services.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for freelance work and open to
              discussing new projects.
            </p>
            <Link href="mailto:yajasvikhanna@gmail.com" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>

        
        {/* Connect with Me */}

        <section className="py-8 bg-background"> {/* Reduced padding */}
  <h2 className="text-center text-3xl font-semibold text-foreground mt-2"> {/* Reduced margin-top */}
    Connect with Me
  </h2>
  <div className="mt-4 flex justify-center space-x-6"> {/* Reduced margin-top on icons */}
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/yajasvikhanna"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary"
    >
      <FaLinkedin className="h-8 w-8 text-foreground hover:text-primary transition-colors" />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/yajasvikhanna"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary"
    >
      <FaGithub className="h-8 w-8 text-foreground hover:text-primary transition-colors" />
    </a>

    {/* LeetCode (Replaced with FaCode) */}
    <a
      href="https://leetcode.com/u/yajasvikhanna/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary"
    >
      <FaCode className="h-8 w-8 text-foreground hover:text-primary transition-colors" />
    </a>

    {/* HackerRank */}
    {/* <a
      href="https://www.hackerrank.com/your-hackerrank-url"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary"
    >
      <FaHackerrank className="h-8 w-8 text-foreground hover:text-primary transition-colors" />
    </a> */}

    {/* Twitter */}
    {/* <a
      href="https://twitter.com/your-twitter-url"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary"
    >
      <FaTwitter className="h-8 w-8 text-foreground hover:text-primary transition-colors" />
    </a> */}
  </div>
</section>


      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
