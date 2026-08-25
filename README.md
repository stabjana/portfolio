# Stefanie Jana — Portfolio

Hi, this is my personal portfolio site. A single page with my bio, projects and a way to reach me. Nothing fancy, just a clean place to point people to instead of a PDF.

## About this project

Full honesty: this is about 80% vibecoded. I worked closely with Claude to build the structure, styling and components, and then went in myself to adjust content, fix bugs, tweak spacing and wire up the pieces I actually understood and cared about, like the contact form and the images. I think that's a totally normal way to build things in 2026 and I'm not going to pretend otherwise. I learned a lot along the way, and that's what matters to me.

## Tech stack

- React + TypeScript
- Vite
- Plain CSS (no framework, just custom properties for the color palette)
- Formspree for the contact form (no backend needed)

## Running it locally

\`\`\`bash
npm install
npm run dev
\`\`\`

You'll need a \`.env\` file in the root with:

\`\`\`
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint_here
\`\`\`

## Project structure

\`\`\`
src/
components/ -> Navbar, Hero, Bio, Projects, Hobbies, Contact
data.ts -> all the actual content (bio entries, projects, hobbies)
styles/ -> one CSS file per component
public/
hobbies/ -> photos used on the hobbies page
\`\`\`

Content lives in \`data.ts\`, so if I want to update a project or add a new bio entry, I only touch that file, not the components.

## What's on the site

- Home / hero with a short intro
- Bio, experience and education merged into one timeline, no need to separate them, it's all part of the same story
- Projects, with links to the actual repos
- A hobbies page, because I'm more than my job title
- A contact form that actually sends me an email

## Contact

steff.dev.jana@gmail.com
[github.com/stabjana](https://github.com/stabjana)
[linkedin.com/in/stefanie-jana](https://www.linkedin.com/in/stefanie-jana-a0b094a8/)
