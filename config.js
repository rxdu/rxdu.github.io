module.exports = {
  pathPrefix: '',
  siteUrl: 'https://rdu.im',
  siteTitle: 'Ruixiang Du',
  siteDescription: 'Ruixiang\'s personal site',
  author: 'Ruixiang Du',
  email: 'ruixiang.du@gmail.com',
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
