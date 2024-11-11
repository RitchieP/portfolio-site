import Image from "next/image";
import { TbCircleArrowUpRight } from "react-icons/tb";
import { FaRegPaperPlane, FaGithub, FaStackOverflow  } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Home() {
  return (
    <div>
      {/* First impression of the home page */}
      <div className="flex flex-row flex-wrap-reverse p-10 mt-10 place-items-center">
        <div className="basis-2/3 tracking-widest font-[family-name:var(--font-titillium-web-light)] ">
          <p className="xl:text-3xl 2xl:text-6xl">
            Hi, I'm <span className="text-secondary">Ritchie</span>
          </p>
          <p className="my-4 text-5xl font-[family-name:var(--font-titillium-web-bold)]">
            Software Engineer
          </p>
          <p className="text-2xl">
            based in Penang, Malaysia <br/>
            Major in AI and minor in Mathematics
          </p>
          <div className="flex flex-row items-center justify-start gap-28">
            <a
              className="my-4 p-2 flex flex-row items-center gap-3 bg-secondary rounded-xl text-background font-[family-name:var(--font-titillium-web-semi-bold)]"
              href="mailto:ritchiepoh@gmail.com"
              target="_blank"
            >
              Let's Chat! <FaRegPaperPlane color="white"/> 
            </a>
            <div className="grid grid-cols-3 gap-5">
              <a href="https://www.linkedin.com/in/ritchie-p/" target="_blank"><CiLinkedin size={50}/></a>
              <a href="https://github.com/RitchieP" target="_blank"><FaGithub size={50}/></a>
              <a href="https://stackoverflow.com/users/13328625/invalidhop" target="_blank"><FaStackOverflow size={50}/></a>
            </div>
          </div>
        </div>

        {/* Image of me */}
        <div className="basis-1/3">
          <Image
            className="rounded-full border-2 border-secondary p-5"
            src="/profile_pic.jpg"
            alt="Picture of the author"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>

      {/* Experience section */}
      <p className="p-10 text-5xl font-[family-name:var(--font-titillium-web-bold)]">Experience</p>
      <div className="flex flex-col my-5 px-10">
        <div className="mb-5">
          <p className="text-3xl font-[family-name:var(--font-titillium-web-semi-bold)]">
            Part time <span className="text-secondary">Research and Development Engineer</span> @ Assassins Robotics
          </p>
          <p className="text-unhighlighted font-[family-name:var(--font-titillium-web-light)]">January 2019 - Present</p>
          <ul className="text-2xl list-disc px-10 my-5 font-[family-name:var(--font-titillium-web-regular)]">
            <li>Research and develop advanced robotics toolkits and algorithms with Python.</li>
            <li>Teaches students aged 7 to 15 about concepts in robotics and programming.</li>
            <li>Prepares students for tournaments, this includes brainstorming ideas, extensive testing on the robot, preparing test logs, and presentation practices.</li>
          </ul>
        </div>

        <div>
          <p className="text-3xl font-[family-name:var(--font-titillium-web-semi-bold)]">
            <span className="text-secondary">Software Engineer Intern</span> @ CodeTrace Sdn Bhd
          </p>
          <p className="text-unhighlighted font-[family-name:var(--font-titillium-web-light)]">March 2023 - August 2023</p>
          <ul className="text-2xl list-disc px-10 my-5 font-[family-name:var(--font-titillium-web-regular)]">
            <li>Developed and shipped an automated PDF data extraction software using ReactJS and Python. Wrapped into a desktop application using ElectronJS.</li>
            <li>Built and hosted an inventory management system with ReactJS combined with Tailwind CSS connected to a Firebase backend.</li>
          </ul>
        </div>
      </div>

      {/* Projects section */}
      <p className="p-10 text-5xl font-[family-name:var(--font-titillium-web-bold)]">Projects</p>
      <div className="grid grid-cols-2 gap-10 p-10">

        <div className="w-[542px]">
          {/* TODO: Replace this with Image later */}
          <div className="w-[542px] h-[365px] bg-unhighlighted rounded-3xl"></div>
          <div className="flex flex-row place-items-center justify-between">
            <p className="py-4 text-5xl font-[family-name:var(--font-titillium-web-semi-bold)]">VerbaLex</p>
            <TbCircleArrowUpRight className="size-10"/>
          </div>
          <p className="text-2xl text-unhighlighted font-[family-name:var(--font-titillium-web-regular)]">Text-to-speech application to help transcribe accented speech.</p>
        </div>

        <div className="w-[542px]">
          {/* TODO: Replace this with Image later */}
          <div className="w-[542px] h-[365px] bg-unhighlighted rounded-3xl"></div>
          <div className="flex flex-row place-items-center justify-between">
            <p className="py-4 text-5xl font-[family-name:var(--font-titillium-web-semi-bold)]">MyRescue</p>
            <TbCircleArrowUpRight className="size-10"/>
          </div>
          <p className="text-2xl text-unhighlighted font-[family-name:var(--font-titillium-web-regular)]">Resource management system during a natural disaster.</p>
        </div>

        <div className="w-[542px]">
          {/* TODO: Replace this with Image later */}
          <div className="w-[542px] h-[365px] bg-unhighlighted rounded-3xl"></div>
          <div className="flex flex-row place-items-center justify-between">
            <p className="py-4 text-5xl font-[family-name:var(--font-titillium-web-semi-bold)]">MyUSM</p>
            <TbCircleArrowUpRight className="size-10"/>
          </div>
          <p className="text-2xl text-unhighlighted font-[family-name:var(--font-titillium-web-regular)]">Centralized information system for all individuals associated with Universiti Sains Malaysia.</p>
        </div>

      </div>

      {/* Skills section */}
      <p className="p-10 text-5xl font-[family-name:var(--font-titillium-web-bold)]">Skills</p>
      <div className="flex flex-row flex-wrap place-content-center gap-56 p-10">
        <div>
          <p className="text-3xl font-[family-name:var(--font-titillium-web-bold)]">Frontend</p>
          <ul className="mt-4 text-2xl font-[family-name:var(--font-titillium-web-regular)]">
            <li>ReactJS</li>
            <li>Tailwind CSS</li>
            <li>Flutter</li>
          </ul>
        </div>

        <div>
          <p className="text-3xl font-[family-name:var(--font-titillium-web-bold)]">Backend</p>
          <ul className="mt-4 text-2xl font-[family-name:var(--font-titillium-web-regular)]">
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div>
          <p className="text-3xl font-[family-name:var(--font-titillium-web-bold)]">Soft Skills</p>
          <ul className="mt-4 text-2xl font-[family-name:var(--font-titillium-web-regular)]">
            <li>Collaboration</li>
            <li>Effective Communication</li>
            <li>Leadership</li>
            <li>Analytical Thinking</li>
          </ul>
        </div>

        <div>
          <p className="text-3xl font-[family-name:var(--font-titillium-web-bold)]">Others</p>
          <ul className="mt-4 text-2xl font-[family-name:var(--font-titillium-web-regular)]">
            <li>Python</li>
            <li>ElectronJS</li>
            <li>Google Cloud Services</li>
          </ul>
        </div>

      </div>

      {/* About me section */}
      <p className="p-10 text-5xl font-[family-name:var(--font-titillium-web-bold)]">How I got here?</p>
      <div className="p-10 text-2xl text-justify font-[family-name:var(--font-titillium-web-regular)]">
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
      <p className="px-10 pt-10 text-5xl font-[family-name:var(--font-titillium-web-bold)]">Interested in <span className="text-secondary">joining forces?</span></p>
      <div className="px-10 mb-10 grid grid-cols-11">
      <a
        className="my-4 p-2 flex flex-row items-center gap-3 bg-secondary rounded-xl text-background font-[family-name:var(--font-titillium-web-semi-bold)]"
        href="mailto:ritchiepoh@gmail.com"
        target="_blank"
      >
        Let's Chat! <FaRegPaperPlane color="white"/> 
      </a>
      </div>
    </div>
  );
}
