<!-- Title -->
<h1 align="center">🌊 My portfolio</h1>

<p align="center">
  <!-- Short description -->
  <i align="center">My personal portfolio/website, directly linked to my GitHub account.</i>
  <!-- Screenshot -->
  <img src="https://raw.githubusercontent.com/vsantos1711/portfolio/main/public/assets/project-example.png" />
</p>

## Project Status
<img src="https://img.shields.io/static/v1?label=STATUS&message=IN%20PROGRESS&color=blue&style=for-the-badge"/>
 
> Since the application is still under development, please note that topics not yet completed will be highlighted with the following symbol: ⚠️

## Description
Welcome to my personal portfolio, a platform built with Next.js and TailwindCSS, specifically designed for developers who want to showcase their work in a dynamic and 100% integrated way with GitHub.

#### Main features:
* **Direct Connection with GitHub:** All my posts and projects are linked to my GitHub repositories. Any updates made to my repositories will automatically be reflected in the portfolio.

* **Dynamic Portfolio/Blog:** Each repository becomes a post on my portfolio/blog. Information is extracted directly from the README.md files of my repositories, displaying details about projects, challenges, and studies.

- **"About Me" and "CV" Sections:** Includes an "About Me" section where you can learn more about me, and a "CV" section where you can view my skills and experiences!

- **No Database or API:** No database or API needed. All content displayed on the website is hosted directly on GitHub, eliminating the need for additional databases or APIs. Simple and efficient!

## Tools

[<img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />](https://nextjs.org/)
[<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />](https://www.typescriptlang.org/)
[<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />](https://tailwindcss.com/)
[<img src="https://img.shields.io/badge/Vercel-242938?style=for-the-badge&logo=vercel&logoColor=white" />](https://vercel.com/)
[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/)

## ⚠️ Usage 

> We are currently assessing the need for standardizing the README.md files of projects so that they can be read by the application...

To start using our app, you need to make some changes and follow standard README.md formatting, which can be found [here](https://github.com/vsantos1711/useful-things)

## Development

If you like and want to customize your own portfolio, you can run the application locally for code generation purposes or contributions. Follow the steps below to get started:

<!-- Prerequisites -->
<details open>
<summary>
Pre-requisites
</summary> <br />
To be able to start development the application make sure that you have the following pre-requisites installed:

###

- Node.js (versão LTS)
- Pnpm
  ```bash
  npm install -g pnpm
  ```

##

</details>

<!-- Running the app -->
<details open>
<summary>
Running the app
</summary> <br />

To setup a local development environment the following steps can be followed:

###

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/vsantos1711/portfolio.git && cd portfolio && pnpm install
```

2. Change the env file :

```
rename the .evn.example to .env
change the GITHUB_USER value to your user
```

3. Run the app:

```bash
pnpm run dev
```

</details>

## License

Licensed under the [MIT license](LICENSE.md).
