export const SITE = {
  website: "https://algorithmich.github.io/", // replace this with your deployed domain
  author: "Michelle Diaz",
  profile: "https://github.com/algorithmich/",
  desc: "A personal blog about machine learning, running, books, and more. Notes and reflections from a hyperactive mind.",
  title: "Home",
  //ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/algorithmich/algorithmich.github.io",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Zurich", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
