<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Gatsby Portfolio Template using <a href='https://ant.design/' target='_blank'>ant-design</a>
</h1>
<!-- <h3 align="center">Probably the most beautiful 😍 gatsby starter template</h3> -->

**This site is adapted from [Gatsby's RolwinReevan Portfolio template](https://github.com/rolwin100/rolwinreevan_gatsby_blog) with my fork [here](https://github.com/rxdu/gatsby_portfolio_template).**

---

This starter consists of ant design system you can use it for your personal blog. 

## Build and deploy

CI builds with the Node version in `.nvmrc`. These steps run that version in Docker, from the repository root.

1. Install the locked dependencies:

    ```shell
    docker run --rm -u $(id -u):$(id -g) -e HOME=/tmp -v "$PWD":/site -w /site node:15.14.0-buster npm ci
    ```

2. Build the site into `public/`:

    ```shell
    docker run --rm -u $(id -u):$(id -g) -e HOME=/tmp -v "$PWD":/site -w /site node:15.14.0-buster npx gatsby build --prefix-paths
    ```

3. Serve the build at `http://localhost:8000`:

    ```shell
    python3 -m http.server 8000 --directory public
    ```

Use the `-buster` image. The plain `node:15.14.0` image is Debian stretch, and `npm ci` fails there because its zlib is too old for the prebuilt mozjpeg binary.

A push to `main` runs `.github/workflows/npm-publish.yml`, which builds the site and pushes it to the `gh-pages` branch. GitHub Pages serves that branch at https://rdu.im. A push to any other branch runs the same build without publishing.


## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── content
    ├── node_modules
    ├── src
    ├── static
    ├── .eslintrc
    ├── .example.env
    ├── .gitignore
    ├── .prettierrc
    ├── config.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-config.plugins.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`config.js`**: all the configuration variables that are necessary for the site are added in this file.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-config.plugins.js`**: This file contains the plugin configurations which is used in the gatsby-config.js. For modularity purpose we do this. 

8.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

9.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

10.  **`LICENSE`**: Gatsby is licensed under the MIT license.

11. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

12. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

13. **`README.md`**: A text file containing useful reference information about your project.

14. **`content`**: This is the folder where we write our Markdowns for the blogs.

<!-- AUTO-GENERATED-CONTENT:END -->
