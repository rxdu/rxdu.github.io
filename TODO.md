# TODO

## Current site: open defects

The current Gatsby site gets fixes only where it fails to work as intended. Content defects wait for the new site; Ruixiang decided this on 2026-11-15.

- [ ] Blog and Tags meta descriptions are the template author's text about JavaScript, GraphQL and Prisma. Sites: `src/pages/blog/index.jsx:17`, `src/pages/tags/index.jsx:30`. Seen in the built HTML. Waits for the new site.
- [ ] The home meta description holds literal `<b>` tags and the whole education paragraph. Site: `src/components/PageFragments/HomePage/AboutMe.jsx:20`. Seen in the built HTML. Waits for the new site.
- [ ] Link previews show the template's 100×100 "code file" icon. Site: `src/components/Seo/index.jsx:12` (`src/images/facebook-icon.png`). Seen in the built HTML. Waits for the new site.
- [ ] Misspellings on the home page, the résumé page description and both posts. `aspell list` over `content/*/index.md` and `src/components/PageFragments/HomePage/*.jsx` finds them. Waits for the new site.
- [ ] The résumé PDF gives the current role as "Senior Software Architect (Tech Lead), 04/2019–Present", while the home page says CTO. It also shows the mobile number. Site: `static/RuixiangDuResume.pdf`. Seen on the live page on 2026-11-14. Waits for the résumé refresh.
- [ ] The résumé page has no menu back to the site, and its page buttons assume a 2-page PDF. Site: `src/pages/resume.jsx`. Seen on the live page on 2026-11-14.
- [ ] Canonical URLs have no trailing slash, so each names a redirect: `https://rdu.im/blog` answers 301 to `/blog/`. Site: `src/utils/pageUtils.js:29`. Probed with curl on 2026-11-15.
