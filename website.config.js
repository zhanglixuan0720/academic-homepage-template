export const personalInfo = {
  name: 'Lixuan Zhang',
  profilePicture: '/profile.jpg', //optional
  role: 'Ph.D. Student',
  university: 'UCAS/ICT IIP Lab VIPL Group',
  universityWebsite: 'https://vipl.ict.ac.cn/',
  socialMedia: [
    { name: 'Email', url: 'lixuan.zhang@vipl.ict.ac.cn' },
    // { name: 'Twitter', url: 'https://twitter.com/anxndsgn' },
    {
      name: 'GitHub',
      url: 'https://github.com/zhanglixuan0720',
    },
    // { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'ORCID', url: 'https://orcid.org/0009-0008-9230-9879' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?hl=en&user=btKkMTMAAAAJ' },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'Vision & Robotics researcher',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  { name: 'Projects', route: '/projects' },
  { name: 'Publications', route: '/publications' },
  // { name: "News", route: "/news" },
  // { name: 'About', route: '/about' },
  // { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  // SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle = 'sans'; // "sans" | "serif" | "mono"
