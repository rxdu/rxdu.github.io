# TODO

## Current site: open defects

The current Gatsby site gets fixes only where it fails to work as intended. Content defects wait for the new site; Ruixiang decided this on 2026-11-15.

- [ ] The Blog meta description is the template author's text about JavaScript, GraphQL and Prisma. Site: `src/pages/blog/index.jsx:17`. Seen in the built HTML. Waits for the new site.
- [ ] The home meta description holds literal `<b>` tags and the whole education paragraph. Site: `src/components/PageFragments/HomePage/AboutMe.jsx:20`. Seen in the built HTML. Waits for the new site.
- [ ] Link previews show the template's 100×100 "code file" icon. Site: `src/components/Seo/index.jsx:12` (`src/images/facebook-icon.png`). Seen in the built HTML. Waits for the new site.
- [ ] Misspellings on the home page, the résumé page description and both posts. `aspell list` over `content/*/index.md` and `src/components/PageFragments/HomePage/*.jsx` finds them. Waits for the new site.
- [ ] The résumé PDF gives the current role as "Senior Software Architect (Tech Lead), 04/2019–Present", while the home page says CTO. It also shows the mobile number. Site: `static/RuixiangDuResume.pdf`. Seen on the live page on 2026-11-14. Waits for the résumé refresh.
- [ ] The résumé page has no menu back to the site, and its page buttons assume a 2-page PDF. Site: `src/pages/resume.jsx`. Seen on the live page on 2026-11-14.
- [ ] The sitemap lists the two posts without a trailing slash, so each entry is a 301 redirect. The post paths come from each post's front matter `path`. Site: `gatsby-node.js:38`. Seen in the built `sitemap.xml` on 2026-11-15.
