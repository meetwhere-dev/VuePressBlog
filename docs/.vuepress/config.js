module.exports = {
  title: "Wonderful", // 首页标题
  shouldPrefetch: () => false, // 关闭预加载，可能导致首页渲染比较慢
  description: "Just do it", // 首页描述
  themeConfig: {
    // logo: '/assets/img/logo.png',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // repo: "godbasin/vuepress-demo",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Github",
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    // 这里我们是放置在docs下的
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    // 这里我们放在一个叫sourcecode的分支下，因为master需要用来放置生成的静态文件
    docsBranch: "sourcecode",
    // navbar: false,
    // 顶部导航配置
    nav: [
      { text: "概述", link: "/" },
      { text: "人脸识别", link: "/facedectect/index" },
      // 我们也可以添加FAQ的
      { text: 'FAQ', link: '/faq' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      '/guide/',
      ['/page-a/', 'Explicit link text']
    ]
    // 左侧导航菜单配置
  }
};