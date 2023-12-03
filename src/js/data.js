import eTx from './../assets/logo_tx.png';
import eSf from './../assets/logo_sf.png';
import eJm from './../assets/logo_jm.png';
import eLt from './../assets/logo_lt.png';
import eZh from './../assets/logo_zh.png';
import dHome from './../assets/d_home.svg';
import dSkills from './../assets/d_skills.svg';
import dExp from './../assets/d_exp.svg';
import dWorks from './../assets/d_works.svg';
import dContact from './../assets/d_contact.svg';
import sGithub from './../assets/s_github.svg';
import sSf from './../assets/s_sf.svg';
import sBlog from './../assets/s_blog.svg';
import sZh from './../assets/s_zh.svg';
import sJj from './../assets/s_Jj.svg';
import wJm from './../assets/w_jm.jpg';
import wLs from './../assets/w_ls.jpg';
import yj_gzh from './../assets/yj_gzh.jpg';

export default {
  cn: {
    header: {
      langList: ['中', '英'],
      titleList: [
        {
          svg: dHome,
          title: '首页'
        },
        {
          svg: dSkills,
          title: '能力'
        },
        {
          svg: dExp,
          title: '经历'
        },
        {
          svg: dWorks,
          title: '作品集'
        },
        {
          svg: dContact,
          title: '联系我'
        }
      ]
    },
    footer: ['Released under the MIT License', 'All Rights Reserved ', `Copyright © 2014-${new Date().getFullYear()} Korey Zhao`],
    overview: {
      infoList: [`${new Date().getFullYear() - 1996}岁`, '硕士', '深圳', '在职'],
      quote: '善始者实繁,克终者盖寡',
      desList: ['我叫戴金森，毕业于南京邮电大学', '现于顺丰科技/客户渠道产品研发中心担任前端开发工程师', 'keruisiya0818@163.com']
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'vue'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'Html5'
        },
        {
          bg: {
            backgroundColor: 'rgba(76,157,160,0.8)'
          },
          name: 'Css3'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'nodejs'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: '小程序'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'Js'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'Git'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'ts'
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: '调试'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: '优化'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: '测试'
        },
        // {
        //   bg: {
        //     backgroundColor: 'rgba(207,184,178,0.8)'
        //   },
        //   name: '开发'
        // },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: '部署'
        }
      ],
      desList: [
        '组内担任顺丰速运月结服务/签约、预付等业务模块的日常开发',
        '涉及PC、H5、小程序多端开发，有taro及webcomponent等跨平台技术开发经验',
        '前端技术栈VUE3、Webpack、TS, UI组件库均有尝试，包括echart',
        '自我驱动力强，参与公司开源项目UI组件库的建设开发, 撰写输出技术专利',
        '擅长样式布局、组件开发及构建优化等，有前端项目的部署工作经验'
        // '【2023-11-26】注：TS不熟、单元测试应该学一学 加入到项目中'
      ]
    },
    exp: {
      expList: [
        {
          title: '顺丰科技',
          time: '2021年5月~至今',
          post: '前端开发工程师',
          img: {
            backgroundImage: `url(${eSf})`,
            backgroundSize: '100%'
          },
          contentList: [
            '负责顺丰月结服务项目的开发设计工作',
            '参与业务需求拆解、方案设计、开发联调、代码评审',
            '输出主导业务相关文档，优化主导项目页面性能',
            '主持前端周例会议、组内分享，参与制定团队规范建设',
            '参与公司开源项目UI组件库建设开发'
          ]
        }
        // {
        //   title: '聚美优品',
        //   time: '2017年4月~2021年4月',
        //   post: '资深前端工程师/前端负责人',
        //   img: {
        //     backgroundImage: `url(${eJm})`
        //   },
        //   contentList: ['负责聚美优品电商及增长FE团队(10+)的日常工作', '参与街电CRM开发，美点无人货架C/S开发等', '主导开发聚美等若干小程序/快应用及增长活动', '优化重构聚美底层若干库如jumei-sdk等']
        // }
        // {
        //   title: '兰途科技',
        //   time: '2015年6月-2017年4月',
        //   post: 'web前端研发工程师',
        //   img: {
        //     backgroundImage: `url(${eLt})`
        //   },
        //   contentList: ['负责高校校园移动APP相关的H5混合开发', '负责快速构建高质量移动APP/PC/微信页面', '根据业务需求设计合适的工程项目', '高度组件化、模块化思维，拥有各平台调试能力']
        // },
        // {
        //   title: '卓煌企业',
        //   time: '2014年8月~2015年6月',
        //   post: '网页开发兼SEO优化',
        //   img: {
        //     backgroundImage: `url(${eZh})`
        //   },
        //   contentList: ['负责各企业站静态页开发及简单交互', '负责网站后台管理页面开发', '负责百度竞价操作及seo优化', '同期工作之余提升自己原生JS的编码能力']
        // }
      ]
    },
    works: {
      worksList: [
        {
          title: '顺丰速运月结服务公众号',
          des: `顺丰月结公众号是面向顺丰月结客户的专属服务平台，提供在线签约、寄件插件、对账发票、投诉理赔等模块功能。
          公众号页面交互功能基于H5开发，采用Multi-repo的方式独立托管管理各业务模块代码，快速响应迭代
          `,
          mini: yj_gzh,
          style: {}
        },
        {
          title: '企业服务平台',
          des: `企业服务平台是面向顺丰月结客户的一站式PC端平台，集企业寄件、查件、财务结算于一体，满足企业物流全生命周期需求，为子产品：数字商店、顺丰同城服务等导流。
          PC端页面基于VUE2框架进行开发，
          `,
          mini: wLs,
          style: {}
        }
        // {
        //   title: '聚美优品 快应用',
        //   des: '聚美优品快应用是聚美集团电商业务在安卓快应用上的实现，基于手机硬件平台的新型应用形态，为销售途径提供新的渠道。',
        //   url: 'http://hapjs.org/app/com.jm.quickapp',
        //   style: {}
        // },
        // {
        //   title: '聚美优品 H5',
        //   des: '聚美集团电商业务移动端的核心承载者，包括前三页，购物流程，用户中心等，通过jsbridge部分页面也在app内广泛应用。',
        //   url: 'https://h5.jumei.com',
        //   style: {}
        // },
        // {
        //   title: '聚美优品 增长活动',
        //   des: '聚美集团电商业务的新增长投放项目，电商主要的推广活动承载页面，实现采用多页面架构，支持打包单一活动的工作模式。',
        //   url: 'http://r.jumei.com',
        //   style: {}
        // },
        // {
        //   title: '街电crm后台管理系统',
        //   des: 'PC端街电crm后台商户管理系统，包括各种商户录入，统计，维护等若干功能。',
        //   url: '',
        //   style: {}
        // },
        // {
        //   title: '移动校园APP',
        //   des:
        //     '一站式、全生命周期的校园官方移动服务平台，涵盖PC、安卓、IOS、微信平台，上线学校包括中央财经大学，北京交通大学，中国戏曲学院，辽宁大学，西南财经大学等等，下载量数十万，深受学生老师喜爱。',
        //   url: 'http://app.cufe.edu.cn/',
        //   style: {}
        // },
        // {
        //   title: '移动校园管理系统',
        //   des: '针对校园APP的后台管理系统，包括人员架构，信息统计，权限设置，H5生产机，数据交换平台，各个模块的数据管理，反馈设置等等，为高校提供基于互联网运营的移动校园整体解决方案。',
        //   url: '',
        //   style: {}
        // },
        // {
        //   title: 'web前端工程师简历（2015年版）',
        //   des: '本简历初版，上线一个月后，百度关键词“web前端工程师简历”排名前三，点击量数百万，深受广大前端初学者的好评及模仿，至今搜该关键词百度前10页都处处能见该简历的仿版。',
        //   url: 'http://www.flqin.com/2015/',
        //   style: {}
        // },
        // {
        //   title: '@korey/MVVM',
        //   des: '一个简易的MVVM框架，实现了data-binding 和 view-refresh的功能，目前仅服务于本简历项目，仍在不断优化更新，欢迎学习交流',
        //   url: 'https://github.com/zhaoky/mvvm',
        //   style: {}
        // },
        // {
        //   title: '@korey/Fullpage',
        //   des: '一个简易的Fullpage框架，实现了上拉下拉，滑轮滚动，锚点直达的全屏翻页功能，目前仅服务于本简历项目，仍在不断优化更新，欢迎学习交流',
        //   url: 'https://github.com/zhaoky/fullpage',
        //   style: {}
        // }
      ],
      viewMore: 'github上面查看更多',
      gitUrl: 'https://github.com/yolo-612'
    },
    contact: {
      title: '联系我',
      desList1: ['灵感', '代码', '梦想', '未来'],
      desList2: ['注重效率，偏爱敏捷开发', '喜欢尝试，期待新鲜事物', '前端即兴趣，兴趣即未来', '行路有良友，便是捷径', '带上我吧，一起看到更大的世界'],
      download: '下载简历',
      fileList: [
        {
          title: 'HTML版',
          url: 'www.baidu.com'
        },
        {
          title: 'PDF版',
          url: 'www.baidu.com'
        }
      ],
      typeList: [
        {
          icon: sGithub,
          url: 'https://github.com/yolo-612'
        },
        {
          icon: sSf,
          url: ''
        },
        {
          icon: sBlog,
          url: ''
        }
        // {
        //   icon: sZh,
        //   url: 'https://www.zhihu.com/people/fe_korey'
        // },
        // {
        //   icon: sJj,
        //   url: 'https://juejin.im/user/57c91b3b165abd0068db89c2'
        // }
      ]
    }
  },
  en: {
    header: {
      langList: ['CN', 'EN'],
      titleList: [
        {
          svg: dHome,
          title: 'home'
        },
        {
          svg: dSkills,
          title: 'skills'
        },
        {
          svg: dExp,
          title: 'exp'
        },
        {
          svg: dWorks,
          title: 'works'
        },
        {
          svg: dContact,
          title: 'contact'
        }
      ]
    },
    footer: ['Released under the MIT License', 'All Rights Reserved ', `Copyright © 2014-${new Date().getFullYear()} Korey Zhao`],
    overview: {
      infoList: ['30years', 'B.S.', 'ChengDu', 'On Job'],
      quote: 'Life is a kind of endless yearning, eager to continue to rise, become more great and noble.',
      desList: ['I am Korey Zhao, Tencent Senior FE engineer', 'Used to be Jumei E-commerce & growth team FE leader', 'keyu.zhao@foxmail.com']
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'vue'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'react'
        },
        {
          bg: {
            backgroundColor: 'rgba(76,157,160,0.8)'
          },
          name: 'angular'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'nodejs'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: 'miniP'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'quickapp'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'ssr'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'ts'
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'build'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'opt'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'test'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'deploy'
        }
      ],
      desList: [
        '7 years FE development experience,2 years management experience',
        'Actually lead the development of many platform projects (APP, PC, H5, miniprogram, quickapp, etc.), formulated and standardized the team workflow',
        'Try different FE technology stacks, Good at component development and construction optimization',
        'Self-driven, Author of webpack, vue and other source code analysis series articles'
      ]
    },
    exp: {
      expList: [
        {
          title: 'Tencent',
          time: '2017.04-now',
          post: 'Senior FE engineer',
          img: {
            backgroundImage: `url(${eTx})`
          },
          contentList: [
            'Responsible for the development of Tencent UMA',
            'Participate in the formulation of team collaboration standards',
            'Participate in the development of UMA client miniP and SaaS',
            'Participate in the source community contribution'
          ]
        },
        {
          title: 'Jumei',
          time: '2017.04-2021.04',
          post: 'Senior FE engineer/leader',
          img: {
            backgroundImage: `url(${eJm})`
          },
          contentList: [
            'Responsible for daily work of jumei e-commerce and growth FE team(10+)',
            'Participated in CRM development of jiedian, C/S development of unmanned shelves of meidian, etc',
            'Lead the development of jumei and other miniprogram/quickapp and growth',
            'Optimize and reconstruct some basic libraries of jumei, such as jumei-sdk'
          ]
        },
        {
          title: 'LANTU TECH',
          time: '2015.06-2017.04',
          post: 'Web front-end R & D engineers',
          img: {
            backgroundImage: `url(${eLt})`
          },
          contentList: [
            'Responsible for H5 hybrid development related to university campus mobile APP',
            'Responsible for the rapid construction of high-quality APP / PC / WeChat page',
            'According to business needs to design the appropriate project',
            'Highly component, modular thinking, with the platform debugging capabilities'
          ]
        },
        {
          title: 'Zhuohuang Management Co., Ltd',
          time: '2014.08-2015.06',
          post: 'Web development and SEO',
          img: {
            backgroundImage: `url(${eZh})`
          },
          contentList: [
            'Responsible for enterprise station static page development and simple interaction',
            'Responsible for website background maintenance',
            'Responsible for Baidu bid operation and seo optimization',
            'Outside of work to enhance their own javascript coding ability'
          ]
        }
      ]
    },
    works: {
      worksList: [
        {
          title: 'Jumei+ MiniProgram',
          des:
            'Jumei+ MiniProgram is the realization of Jumei e-commerce business on WeChat small program, including general merchandise, sales process of shopping carts, shopping process, user center and other modules.',
          mini: wJm,
          style: {}
        },
        {
          title: 'lushangLife MiniProgram',
          des:
            'lushangLife MiniProgram is the realization of Jumei counter purchase business on WeChat small program, including a full set of sales processes such as counter purchase area selection and delivery methods, as well as shopping process and user center modules.',
          mini: wLs,
          style: {}
        },
        {
          title: 'Jumei quickapp',
          des:
            'Jumei quickapp is the realization of Jumei e-commerce business in Android quickapp. Based on the new application form of mobile phone hardware platform, it provides a new channel for sales channels.',
          url: 'http://hapjs.org/app/com.jm.quickapp',
          style: {}
        },
        {
          title: 'Jumei H5',
          des:
            'The core carrier of the mobile terminal of Jumei e-commerce business, including the three pages, shopping process, user center, etc., is also widely used in the app through the jsbridge part of the page.',
          url: 'https://h5.jumei.com',
          style: {}
        },
        {
          title: 'Jumei growth',
          des:
            'The new growth project of Jumei e-commerce business, the main promotion activities of e-commerce hosted the page, realized the adoption of multi-page architecture, and supported the work mode of packaging a single activity.',
          url: 'http://r.jumei.com',
          style: {}
        },
        {
          title: 'jiedian CRM',
          des: 'The PC-side street power crm back-end merchant management system includes several functions such as various merchant entry, statistics, and maintenance.',
          url: '',
          style: {}
        },
        {
          title: 'Campus APP',
          des:
            'One-stop, the whole life cycle of the campus official mobile service platform, covering PC, Andrews, IOS, WeChat platform, on-line schools, including CUFE, BJTU, NACTA, LNU, SWUFE and so on, download Hundreds of thousands, loved by the students teacher.',
          url: 'http://app.cufe.edu.cn/',
          style: {}
        },
        {
          title: 'campus management system',
          des:
            'According to the background management system of campus APP, including the personnel structure, information statistics, H5 production machine, data exchange platform, data management of each module, feedback settings, etc., for the university to provide Internet-based mobile campus overall solution.',
          url: '',
          style: {}
        },
        {
          title: 'Web front engineer resumes (2015)',
          des:
            'The first edition of this resume, on the line a month later, Baidu keyword `web front engineer resumes` ranked the top three, hundreds of millions of traffic, by the majority of front-end beginners praise and imitation, so far the search Baidu 10 pages are everywhere See the copy of the resume.',
          url: 'http://www.flqin.com/2015/',
          style: {}
        },
        {
          title: '@korey/MVVM',
          des:
            'A simple MVVM framework that implements the functions of data-binding and view-refresh. Currently, it only serves this resume project. It is still optimized and updated. Welcome to learn communication.',
          url: 'https://github.com/zhaoky/mvvm',
          style: {}
        },
        {
          title: '@korey/Fullpage',
          des:
            'A simple Fullpage framework that implements full-screen page-turning with pull-up, scrolling, and anchor-pointing. Currently only serves this resume project, it is still optimized and updated. Welcome to learn communication.',
          url: 'https://github.com/zhaoky/fullpage',
          style: {}
        }
      ],
      viewMore: 'Go to github see more'
    },
    contact: {
      title: 'Contact Me',
      desList1: ['INSPIRATION', 'CODE', 'DREAM', 'FUTURE'],
      desList2: [
        'Focus on efficiency, preference for agile development',
        'Like to try, look forward to something new',
        'Front is interested, interest is the future',
        'Line road friends, is a shortcut',
        'With me, see the bigger world together'
      ],
      download: 'Download Resume',
      fileList: [
        {
          title: 'HTML',
          url: 'www.baidu.com'
        },
        {
          title: 'PDF',
          url: 'www.baidu.com'
        }
      ],
      typeList: [
        {
          icon: sGithub,
          url: 'https://github.com/zhaoky'
        },
        {
          icon: sSf,
          url: 'https://segmentfault.com/u/fe_korey'
        },
        {
          icon: sBlog,
          url: 'https://blog.flqin.com'
        },
        {
          icon: sZh,
          url: 'https://www.zhihu.com/people/fe_korey'
        },
        {
          icon: sJj,
          url: 'https://juejin.im/user/57c91b3b165abd0068db89c2'
        }
      ]
    }
  }
};
