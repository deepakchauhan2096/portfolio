import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 48 48"
            >
              <path
                fill="#cfd8dc"
                d="M24 3C12.4 3 3 12.4 3 24s9.4 21 21 21c.3 0 .7 0 1-.1V3.1c-.3-.1-.7-.1-1-.1"
              />
              <path
                fill="#37474f"
                d="M25 3.1V45c4.1-.2 7.9-1.5 11-3.7V6.8c-3.1-2.2-6.9-3.6-11-3.7"
              />
              <path
                fill="#ffb74d"
                d="M20.5 13c-6.4.3-11.6 5.7-11.5 12.1c0 2.8 1 5.4 2.7 7.5c1.4 1.7 2.3 3.9 2.3 6.1v3.8c3 1.6 6.4 2.5 10 2.5c.3 0 .7 0 1-.1c.7 0 1.3-.1 2-.2v-9.4c3.6-2.1 6-5.9 6-10.4c0-6.7-5.6-12.2-12.5-11.9"
              />
              <path
                fill="#ffb74d"
                d="m29 38.6l-4-.6v-9h8l-.7 7c-.2 1.6-1.6 2.8-3.3 2.6"
              />
              <path fill="#ffb74d" d="m39 29l-7 2l-1-5l1-4z" />
              <circle cx="29.5" cy="25.5" r="1.5" fill="#784719" />
              <path
                fill="#ff5722"
                d="M21 12c-7.2 0-13 5.8-13 13c0 7.6 5.1 9 6 13l4-3v-8l5-2l1-4c3.2 0 6-3.9 6-6.1c-2.1-1.9-5.6-2.9-9-2.9"
              />
              <circle cx="19" cy="27" r="3" fill="#ffb74d" />
              <path
                fill="#cfd8dc"
                d="M45 24c0-7.1-3.6-13.4-9-17.2v34.4c5.4-3.8 9-10.1 9-17.2"
              />
              <path
                fill="#ff9800"
                d="M20 44.6c1.3.2 2.6.4 4 .4c.3 0 .7 0 1-.1c.7 0 1.3-.1 2-.2v-6.5l-7-1z"
              />
            </svg>
          }
          name="Deepak's Blog"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="https://deepakresume.netlify.app" target="_blank">
          My Resume
        </NavMenuItem>
        <NavMenuItem
          href="https://github.com/deepakchauhan2096"
          target="_blank"
        >
          GitHub
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
