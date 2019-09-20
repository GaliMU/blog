module.exports = {
  title: "GaliMu Blog",
  description: "日常吹水",
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  head: [["link", { ref: "icon", href: "/favicon.png" }]],
  theme: "meteorlxy",
  themeConfig: {
    lang: "zh-CN",
    personalInfo: {
      nickname: "GaliMu",
      description: "(>^_^<)",
      email: "1096122891@qq.com",
      location: "中国 北京",
      organization: "",
      avatar: "/avatar.jpeg",
      sns: {
        github: {
          account: "GaliMu",
          link: "https://github.com/GaliMu"
        }
      }
    },
    header: {
      background: {
        useGeo: true
      },
      showTitle: true
    },
    // 是否显示文章的最近更新时间
    lastUpdated: true,
    // 顶部导航栏内容
    nav: [
      { text: "首页", link: "/", exact: true },
      { text: "文章", link: "/posts/", exact: false },
      { text: "Github", link: "https://github.com/GaliMu/blog", exact: false }
    ],
    // 评论配置，参考下方 [页面评论] 章节
    comments: {
      owner: "GaliMu",
      repo: "blog",
      clientId: "64ba8f4316fd86a8bb53",
      clientSecret: "922616fed1068dffbde4f88b33b2ac720b37a140"
    },
    // 分页配置
    pagination: {
      perPage: 20
    },
    // 默认页面（可选，默认全为 true）
    defaultPages: {
      // 是否允许主题自动添加 Home 页面 (url: /)
      home: true,
      // 是否允许主题自动添加 Posts 页面 (url: /posts/)
      posts: true
    }
  }
};
