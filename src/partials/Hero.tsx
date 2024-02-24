import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Deepak</GradientText> 👋
        </>
      }
      description={
        <>
          Experienced{' '}
          <a className="text-cyan-400 hover:underline">React JS Developer</a>{' '}
          with 2+ years of expertise in{' '}
          <a className="text-cyan-400 hover:underline">
            frontend web development
          </a>
          , proficient in{' '}
          <a className="text-cyan-400 hover:underline">JavaScript</a>,{' '}
          <a className="text-cyan-400 hover:underline">React.js</a>,{' '}
          <a className="text-cyan-400 hover:underline">Redux</a>, and{' '}
          <a className="text-cyan-400 hover:underline">HTML5/CSS</a>. Seeking a
          challenging role to leverage my skills and contribute to creating
          innovative and usercentric web applications. Passionate about
          optimizing user experiences through clean and efficient code while
          staying updated with the latest industry trends and technologies.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/Dipakchauhan96" target="_blank">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="https://twitter.com/Dipakchauhan96"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/deepakchauhan2096/"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="https://www.linkedin.com/in/deepakchauhan2096/"
            />
          </a>
          <a href="https://www.youtube.com/@jankariya_24" target="_blank">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="https://www.youtube.com/@jankariya_24"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
