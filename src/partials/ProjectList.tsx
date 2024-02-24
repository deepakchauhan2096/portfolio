import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="tryScrum.com"
        description="tryScrum is impactful education and experienced trainers website to teach people. tryscrum support people wherever they are on their learning journey, from beginner to highly experienced practitioners, helping them grow over time with ongoing learning opportunities and resources. their Community is a platform for aspiring practitioners to learn and grow."
        link="https://tryScrum.com"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'tryscrum',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Gatsby.js</Tags>
            <Tags color={ColorTags.LIME}>Courses</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="trybusinessagility.com"
        description="tryBusinessAgility - a flagship of tryScrum. This website is Crafted entirely by me, the tryBusinessAgility website encompasses all aspects from homepage to blog, about, and contact pages. Each section meticulously designed for professionalism and user engagement, reflecting dedication to empowering organizations with agile strategies."
        link="https://trybusinessagility.com"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Courses</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="thebetterhabitat.org"
        description="A non-profit organization that intends to improve the quality of life in urban India, through socio-economic initiatives and infrastructure development"
        link="https://www.thebetterhabitat.org/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Wordpress</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>Javascript/Php</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
