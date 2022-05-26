---
banner_alt: A photo of a forest overlooking the bright white sky in the background
banner: https://images.unsplash.com/photo-1494825514961-674db1ac2700?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8
title_prefix: Introducing
title: 👋🏻 Hello World
description: This is my first blogpost on this website :)
date: '2022-5-26'
---

## :face_with_raised_eyebrow: What is this?

---

This is my new Website!

## :question: Why

---

This website will be used as a place there i can share my projects and thoughts with you. I'm usually very slow at updating my portfolio, but this website have an automated github rep fetcher, that fetches every project i have that i have sat with the keyword "Portfolio". So finally that updates automatically.

## :hammer: Tech Stack

---

This project is built using the following tools & frameworks:

-   :atom_symbol: [React](https://reactjs.org/) / [Preact](https://preactjs.com/) (For Production)
-   :muscle: [Next.js](https://nextjs.org/)
    -   :mag: [next-seo](https://github.com/garmeeh/next-seo)
    -   :crescent_moon: [next-themes](https://github.com/pacocoursey/next-themes)
-   :female-singer: [EmotionCSS](https://emotion.sh)
-   :lipstick: [Twin.macro](https://github.com/ben-rogerson/twin.macro) (For [Tailwind CSS](https://tailwindcss.com/))
-   :tokyo_tower: [Tailwind UI](https://tailwindui.com/)
-   :feather: [Feather Icons](https://feathericons.com/)
-   :file_cabinet: [Hookstate](https://hookstate.js.org/)
-   :+1: [react-use](https://github.com/streamich/react-use)

### :book: Blog

---

As you can tell by the fact you're currently reading this, I now have a blog! :tada:

This means that I finally have a place to create lengthy articles that can go more in-depth on topics I care deeply about. Everything from my thoughts to how my projects are made, and a place where i can talk about my interests.

<XButton href="/blog" icon="feather:external-link" label="Vist my Blog" />

### :clipboard: Projects

---

My new [projects page](/projects) has been designed to utilize server-side rendering for a very unique purpose.
The page will show a select number of projects that are publicly available on my GitHub repository. However, the way they are selected is very unique.

Every request made for the page (That isn't already cached) will return a newly server-side rendered page that is later hydrated on the client (As all SSR does).
When performing the render, the server will go out and fetch all of my available GitHub repositories & then filter down all of them based on a number of filters.
These include the following:

-   The repository isn't archived
-   Contains the `portfolio` topic in the repository meta data

From there we then strip out the emoji suffix used in the repository description so it can then be used as the project icon, with the description then being returned with that stripped out emoji.
The rest of the data returned is pretty standard (Homepage URL, GitHub repository URL, etc).

With this I can update the contents of my projects page by using GitHub as a form of CMS. All I will need to do to add a project to my projects page page is add the `portfolio` tag to any of my repositories.

<XButton href="/projects" icon="feather:external-link" label="Go to Projects" />

### :clock1: Timeline

---

When planning out my re-design I explored hundreds of portfolio websites. Some from big well known developers, to smaller less known devs. To very successfull designers, to students who have some really amazing looking sites so early on.

To quickly name a guy that helped me a lot:

-   [naru.dev]
