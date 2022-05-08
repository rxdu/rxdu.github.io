module.exports = {
  pathPrefix: '',
  siteUrl: 'https://rdu.im',
  siteTitle: 'Ruixiang Du',
  siteDescription: 'Ruixiang\'s personal site',
  author: 'Ruixiang Du',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rxdugit.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    note: 'note',
    resume: 'resume',
  },
  social: {
    github: 'https://github.com/rxdu',
    facebook: 'https://www.facebook.com/ruixiang.du',
    linkedin: 'https://www.linkedin.com/in/ruixiang-du/',
    // rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-000000-2',
};
