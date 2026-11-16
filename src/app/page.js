import Image from "next/image";
import Link from "next/link";
import { TbCircleArrowUpRight } from "react-icons/tb";
import { FaRegPaperPlane, FaGithub, FaStackOverflow } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import {
  EXPERIENCES_QUERY,
  PROFILE_QUERY,
  PROJECTS_QUERY,
  SKILL_CATEGORIES_QUERY,
} from "@/sanity/queries";
import {
  techIconMap,
  fallbackExperiences,
  fallbackProjects,
  fallbackSkillCategories,
} from "@/constants";

async function getExperiences() {
  try {
    const data = await client.fetch(EXPERIENCES_QUERY, {}, { next: { revalidate: 60 } });
    return data && data.length > 0 ? data : fallbackExperiences;
  } catch (error) {
    console.error("Failed to fetch experiences from Sanity:", error);
    return fallbackExperiences;
  }
}

async function getProfile() {
  try {
    return await client.fetch(PROFILE_QUERY, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Failed to fetch profile from Sanity:", error);
    return null;
  }
}

async function getProjects() {
  try {
    const data = await client.fetch(PROJECTS_QUERY, {}, { next: { revalidate: 60 } });
    return data && data.length > 0 ? data : fallbackProjects;
  } catch (error) {
    console.error("Failed to fetch projects from Sanity:", error);
    return fallbackProjects;
  }
}

async function getSkillCategories() {
  try {
    const data = await client.fetch(SKILL_CATEGORIES_QUERY, {}, { next: { revalidate: 60 } });
    return data && data.length > 0 ? data : fallbackSkillCategories;
  } catch (error) {
    console.error("Failed to fetch skill categories from Sanity:", error);
    return fallbackSkillCategories;
  }
}

export default async function Home() {
  const [experiences, profile, projects, skillCategories] = await Promise.all([
    getExperiences(),
    getProfile(),
    getProjects(),
    getSkillCategories(),
  ]);

  const name = profile?.name || "Ritchie";
  const headline = profile?.headline || "Software Engineer";
  const location = profile?.location || "based in Penang, Malaysia";
  const subheading = profile?.subheading || "Major in AI and minor in Mathematics";
  const email = profile?.email || "ritchiepoh@gmail.com";
  const linkedin = profile?.socialLinks?.linkedin || "https://www.linkedin.com/in/ritchie-p/";
  const github = profile?.socialLinks?.github || "https://github.com/RitchieP";
  const stackoverflow = profile?.socialLinks?.stackoverflow || "https://stackoverflow.com/users/13328625/invalidhop";
  const avatarUrl = profile?.avatar ? urlFor(profile.avatar).width(600).height(600).url() : "/profile_pic.jpg";

  return (
    <div>
      {/* First impression of the home page */}
      <div className="flex flex-row flex-wrap-reverse mt-10 place-items-center justify-center
                      md:px-16
                      lg:px-20
                      2xl:px-32">
        <div className="mt-10 text-center basis-2/3 tracking-widest font-[family-name:var(--font-titillium-web-light)]
                        md:text-justify">
          <p className="text-3xl
                        lg:text-5xl
                        xl:text-6xl 
                        2xl:text-7xl">
            Hi, I&apos;m <span className="text-secondary">{name}</span>
          </p>
          <p className="my-4 text-4xl font-[family-name:var(--font-titillium-web-bold)]
                        lg:text-5xl
                        xl:text-6xl
                        2xl:text-7xl">
            {headline}
          </p>
          <p className="text-lg
                        lg:text-2xl
                        xl:text-3xl
                        2xl:text-4xl">
            {location} <br/>
            {subheading}
          </p>
          <div className="flex flex-row items-center justify-center gap-10
                          md:justify-start md:gap-20
                          lg:gap-36
                          xl:gap-56">
            <a
              className="text-sm my-4 p-2 flex flex-row items-center gap-3 bg-secondary rounded-xl text-background font-[family-name:var(--font-titillium-web-semi-bold)]
                         lg:text-lg
                         2xl:text-2xl"
              href={`mailto:${email}`}
              target="_blank"
            >
              Let&apos;s Chat! <FaRegPaperPlane color="white"/> 
            </a>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <a href={linkedin} target="_blank"><CiLinkedin className="h-6 w-6 md:h-9 md:w-9 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"/></a>
              <a href={github} target="_blank"><FaGithub className="h-6 w-6 md:h-9 md:w-9 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"/></a>
              <a href={stackoverflow} target="_blank"><FaStackOverflow className="h-6 w-6 md:h-9 md:w-9 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12"/></a>
            </div>
          </div>
        </div>

        {/* Image of me */}
        <div className="basis-1/3">
          <Image
            className="rounded-full border-2 border-secondary p-5 min-w-52"
            src={avatarUrl}
            alt={profile?.avatar?.alt || "Picture of the author"}
            width={300}
            height={300}
            priority
          />
        </div>
      </div>

      {/* Experience section */}
      <p className="mt-10 px-10 text-5xl text-center font-[family-name:var(--font-titillium-web-bold)]
                    lg:px-20 lg:text-left
                    2xl:px-32 2xl:text-6xl">Experience</p>
      <div className="flex flex-col my-5 px-10 text-center
                      lg:px-20 lg:text-left
                      2xl:px-32">
        {experiences.map((item) => (
          <div key={item._id} className="mt-5">
            <p className="text-2xl font-[family-name:var(--font-titillium-web-semi-bold)]
                          lg:text-3xl
                          2xl:text-4xl">
              {item.employmentType && item.employmentType !== "Full-time" && (
                <span>{item.employmentType} </span>
              )}
              <span className="text-secondary">{item.jobTitle}</span> @ {item.company}
            </p>
            <p className="text-unhighlighted text-sm font-[family-name:var(--font-titillium-web-light)]
                          xl:text-xl">
              {item.startDate} - {item.isCurrent ? "Present" : item.endDate || "Present"}
            </p>
            <ul className="text-lg text-justify leading-relaxed list-disc px-10 my-5 font-[family-name:var(--font-titillium-web-regular)]
                           md:text-xl
                           xl:text-2xl
                           2xl:leading-9">
              {item.bulletPoints?.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects section */}
      <p className="mt-10 px-10 text-5xl text-center font-[family-name:var(--font-titillium-web-bold)]
                    lg:px-20 lg:text-left
                    2xl:px-32 2xl:text-6xl">Projects</p>
      <div className="grid grid-cols-1 gap-10 p-10 place-items-center
                      lg:px-20 lg:grid-cols-2
                      2xl:grid-cols-3">
        {projects.map((project) => {
          const imageSrc = project.thumbnail
            ? urlFor(project.thumbnail).width(542).height(365).url()
            : project.thumbnailSrc || "/verbalex.png";

          return (
            <div
              key={project._id}
              className="w-[360px] md:w-[480px] lg:w-[360px] xl:w-[480px] 2xl:w-[400px]"
            >
              <div className="w-[360px] md:w-[480px] lg:w-[360px] xl:w-[480px] 2xl:w-[400px] grid grid-cols-1 grid-rows-1 items-end">
                <Image
                  src={imageSrc}
                  alt={project.thumbnail?.alt || `${project.title} Thumbnail`}
                  width={542}
                  height={365}
                  priority
                  className="rounded-3xl col-start-1 row-start-1 object-cover w-full h-auto"
                />
                {project.technologies && project.technologies.length > 0 && (
                  <div
                    className="bg-white/50 backdrop-blur-[2px] col-start-1 row-start-1 rounded-b-3xl flex flex-row items-center px-10 py-2 gap-10 text-sm
                                md:text-md"
                  >
                    {project.technologies.map((tech, idx) => {
                      const Icon = techIconMap[tech];
                      return (
                        <div key={idx} className="place-items-center">
                          {Icon ? (
                            <Icon className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5" />
                          ) : (
                            <span className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5 flex items-center justify-center font-bold text-xs">•</span>
                          )}
                          <p>{tech}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="flex flex-row place-items-center justify-between">
                <p className="pt-4 text-4xl font-[family-name:var(--font-titillium-web-semi-bold)]">
                  {project.title}
                </p>
                {project.projectUrl && (
                  <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <TbCircleArrowUpRight className="size-8 md:size-10 lg:size-9 xl:size-10 2xl:size-9" />
                  </Link>
                )}
              </div>
              <p className="text-lg text-unhighlighted font-[family-name:var(--font-titillium-web-regular)]">
                {project.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Skills section */}
      <p className="mt-10 px-10 text-5xl text-center font-[family-name:var(--font-titillium-web-bold)]
                    lg:px-20 lg:text-left
                    2xl:px-32 2xl:text-6xl">Skills</p>
      <div className="my-10 flex flex-col justify-center place-items-center place-content-center gap-10 text-center
                      md:grid md:grid-cols-2 text-3xl font-[family-name:var(--font-titillium-web-bold)]
                      lg:px-20 lg:flex lg:flex-row lg:justify-between lg:place-items-start lg:text-left
                      2xl:px-32 2xl:text-4xl">
        {skillCategories.map((cat) => (
          <div key={cat._id}>
            <p>{cat.title}</p>
            <ul className="mt-4 text-3xl font-[family-name:var(--font-titillium-web-regular)]">
              {cat.skills?.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* About me section */}
      <p className="mt-10 px-10 text-5xl text-center font-[family-name:var(--font-titillium-web-bold)]
                    lg:px-20 lg:text-left
                    2xl:mt-20 2xl:px-32 2xl:text-6xl">How I got here?</p>
      <div className="p-10 text-xl text-justify font-[family-name:var(--font-titillium-web-regular)]
                      lg:px-20
                      2xl:px-32 2xl:text-2xl">
        <p>
        My story as a developer began back in <span className="text-secondary">2016</span>, when I joined the robotics club back in high school. That was the first ever time I was able to turn a few lines of blocks into actual output, tangible by hand.
        <br/>
        <br/>
        After graduating from high school, I furthered studies in Computer Sciences for my pre-university program and continued the trend at <span className="text-secondary">Universiti Sains Malaysia (USM)</span>.
        <br/>
        <br/>
        At USM, I joined the Google Developer Groups on Campus (aka. Google Developer Student Clubs back then), it was my first time getting in touch with developer communities and it was so vibrant and full of positivity and energy. Eventually I moved on to become a <span className="text-secondary">GDG George Town</span> Co-Lead today.
        <br/>
        <br/>
        I was also fortunate enough to join <span className="text-secondary">CodeTrace</span> as a Software Engineer Intern where I really had an insight into how factories and manufacturing lines leverages AI in scanning barcodes and machine vision.
        <br/>
        <br/>
        All these opportunities has allowed to learn from various industry professionals and made valuable connections. And I’m currently applying all my knowledge and expertise to help an academy that teaches students about robotics (What a round of events!). And guess what? I love what I’m doing!
        </p>
      </div>

      {/* Contact me section */}
      <p className="mt-10 px-10 text-5xl text-center font-[family-name:var(--font-titillium-web-bold)]
                    lg:px-20 lg:text-left
                    2xl:px-32 2xl:text-6xl">Interested in <span className="text-secondary">joining forces?</span></p>
      <div className="px-10 mb-10 grid grid-cols-3
                      md:grid-cols-5
                      lg:px-20 lg:grid-cols-10
                      xl:grid-cols-12
                      2xl:px-32 2xl:grid-cols-9">
        <a
          className="my-8 p-2 flex flex-row items-center justify-center text-xs col-start-2 gap-3 bg-secondary rounded-xl text-background font-[family-name:var(--font-titillium-web-semi-bold)]
                     md:col-start-3 md:text-lg
                     lg:col-start-1 lg:col-span-2 lg:text-xl
                     2xl:col-span-1"
          href={`mailto:${email}`}
          target="_blank"
        >
          Let&apos;s Chat! <FaRegPaperPlane color="white"/> 
        </a>
      </div>
    </div>
  );
}
