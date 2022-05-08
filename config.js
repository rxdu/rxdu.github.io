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
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/rxdu',
    facebook: 'https://www.facebook.com/ruixiang.du',
    linkedin: 'https://www.linkedin.com/in/ruixiang-du/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/<your-id>',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-47255965-1',
  tags: {
    hardware: {
        name: 'hardware',
        description: 'Robot hardware',
        color: '#f0da50',
    },
    firmware: {
        name: 'firmware',
        description: 'Robot firmware',
        color: '#90c53f',
    },
    software: {
        name: 'software',
        description: 'Robot software',
        color: '#61dbfa',
    },
  },
};
