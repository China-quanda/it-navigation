<script setup lang="ts">
const { data } = await useFetch('/api/hello')
const youjianzuList = ref([
  {
    id: 1,
    url: 'https://mail.163.com/',
    icon: 'https://mail.163.com/favicon.ico',
    title: '163邮箱'
  },
  {
    id: 2,
    url: 'https://mail.qq.com/',
    icon: 'https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_16h.png',
    title: 'QQ邮箱'
  },
  {
    id: 3,
    url: 'https://www.microsoft.com/zh-cn/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_5c9c455cd98a4eb3a6fa2d1dc34a303d.png',
    title: 'outlook'
  },
  {
    id: 4,
    url: 'https://mail.aliyun.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8342c19e33c041ebad4c9476bcc19734.png',
    title: '阿里邮箱'
  },
  {
    id: 5,
    url: 'https://mp.weixin.qq.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e139fb309da04298b5a155e2a8cac81d.png',
    title: '订阅号'
  },
  {
    id: 6,
    url: 'https://creator.xiaohongshu.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_448272fa87c04513b9337b07c2838555.png',
    title: '小红书创作者'
  },
  {
    id: 7,
    url: 'https://creator.douyin.com/creator-micro/home',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_133c5416b6c445259e3d97459868ab3b.png',
    title: '抖音创作者'
  },
])
const cloudServerList = ref([
  {
    id: 1,
    url: 'https://www.aliyun.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a21cfe9a964d4d5aad479e8ca4342844.png',
    title: '阿里云'
  },
  {
    id: 2,
    url: 'https://cloud.tencent.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_7dc6c92ca4bf4e3aa500034f23fe948c.png',
    title: '腾讯云'
  },
  {
    id: 3,
    url: 'https://cloud.baidu.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ddc3bf7a83bc400e910749c2842b452f.png',
    title: '百度云'
  },
  {
    id: 4,
    url: 'https://activity.huaweicloud.com',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_dd311b81980d4959a57d59b80bf17737.png',
    title: '华为云'
  },
  {
    id: 5,
    url: 'https://www.ctyun.cn/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ca913ff39074405aaf964321fa75685b.png',
    title: '天翼云'
  },
  {
    id: 6,
    url: 'https://www.volcengine.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_af6f916096a04e49bb2a147114bb0823.png',
    title: '火山引擎'
  },
  {
    id: 7,
    url: 'https://aws.amazon.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_0bafe72325a3496294862dbd0cd66ab6.png',
    title: '亚马逊aws'
  },
  {
    id: 8,
    url: 'https://www.ibm.com/cn-zh',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8bfcd285ee9347958dccbe1950d57d9a.png',
    title: 'IBM'
  },
  {
    id: 9,
    url: 'https://yunxin.163.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_cfc805942a334eaf8cd248f54fdcddce.png',
    title: '网易云信'
  },
  {
    id: 10,
    url: 'https://www.ksyun.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_25089ed6136645299aaa9e86aed09290.png',
    title: '金山云'
  },
  {
    id: 11,
    url: 'https://www.tsycdn.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ae67b511edc346ff85a42a0524465c1f.png',
    title: '蓝易云'
  },
  {
    id: 12,
    url: '#',
    icon: '#',
    title: '等待添加'
  },
  {
    id: 13,
    url: '#',
    icon: '#',
    title: '等待添加'
  },
  {
    id: 14,
    url: '#',
    icon: '#',
    title: '等待添加'
  },
])
const starList = ref([
  {
    id: 1,
    url: '',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_95c2b89b43424e9d9ccac295861ec84f.png?x-oss-process=image/resize,m_fill,w_50,h_50',
    title: 'it读书交流',
    desc: 'it行业读书交流社区：必读好书推荐、读后感、读书打卡、笔记、分享、知识',
  },
  {
    id: 2,
    url: '',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/cc/path/file_4203780221324c5bb33319a226f1b4ae.jpg?x-oss-process=image/resize,m_fill,w_50,h_50',
    title: 'Sora中文社区',
    desc: '汇集了开放人工智能Sora的视频、文章、资讯、Prompt、赚钱方法、报告等，提供了全面的信息，帮助您了解更多关于Sora的信息。',
  },
  {
    id: 3,
    url: '',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_0119791cff704fc2b51dfa60b77cccc1.png?x-oss-process=image/resize,m_fill,w_50,h_50',
    title: '程序员盒子技术学院',
    desc: '七七作者的盒子技术分享交流星球，在这里会一步步拆解盒子的技术实现，设计方案，架构等',
  },
  {
    id: 4,
    url: '',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ab821bcc126e4db3848df42f4891017c.png?x-oss-process=image/resize,m_fill,w_50,h_50',
    title: 'ai应用开发启蒙课',
    desc: 'ai应用开发启蒙课是由程序员盒子作者七七亲自运营、分享、教学的一个技术社区，希望大家在这里能有所收获！',
  },
  {
    id: 5,
    url: '',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/cc/path/file_6ca32a3fc27d4dbbb5a675277b166634.png?x-oss-process=image/resize,m_fill,w_50,h_50',
    title: 'Ai智能工具图谱',
    desc: 'AI智能工具图谱社区是一个汇聚各种人工智能工具和资源的平台，旨在为开发者和用户提供一站式的智能解决方案。这里不仅有最新的AI工具和技术分享，还有丰富的案例分析和实践指导，是探索AI创新应用的理想之地。',
  },
  {
    id: 6,
    url: '',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/cc/path/file_c36a3114f6f04b2a8b278333428c8f82.png?x-oss-process=image/resize,m_fill,w_50,h_50',
    title: 'Flutter开发者社区',
    desc: '向所有人开放的 Flutter 社区，加入社区，共同推动 Flutter 蓬勃发展。Flutter 是全球最受欢迎的移动端跨平台框架。',
  },
  {
    id: 7,
    url: '',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/cc/path/file_d60d5d7c6b224887ad72e2af226684e8.png?x-oss-process=image/resize,m_fill,w_50,h_50',
    title: 'JianBot交流社区',
    desc: '找理想工作，就用简历Bot。简历制作相关问题交流、经验与资料分享、简历模版下载',
  },
  {
    id: 8,
    url: '',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/cc/path/file_13de5c0bcb5c4ba6b4ebe5ee44994844.png?x-oss-process=image/resize,m_fill,w_50,h_50',
    title: '互联网失业与再就业者联盟',
    desc: '互联网失业与再就业者联盟”：汇聚失业英才，共谋职业发展，助力再启航程。',
  }
])
const aiList = ref([
  {
    id: 1,
    url: 'https://chatgai.lovepor.cn',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_7474fc1170be4782992f58d76021a165.png',
    title: '免费ChatGPT中文版',
    desc: '国内免费使用ai聊天问答、写作、文生视频、生成ppt、ai绘画于一体的产品',
  },
  {
    id: 2,
    url: 'https://openai.com/product/gpt-4',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_7ccb0a6aec7546018e0b42fc3a40c0e9.png',
    title: 'ChatGpt4',
    desc: 'OpenAI旗下最新ChatGPT4模型',
  },
  {
    id: 3,
    url: 'https://studio.d-id.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_72ccf40e6d0f428dac4e109e92499f0a.png',
    title: 'D-ID',
    desc: '静态人像图开口说话',
  },
  {
    id: 4,
    url: 'https://weeklyreport.avemaria.fun/zh',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d766b2af44984a3696e8260395077c54.png',
    title: 'weeklyreport',
    desc: '基于GPT-3的日/周报生成器',
  },
  {
    id: 5,
    url: 'https://www.uyanai.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_76e36c5968124b1dbb86842f9e969f77.png',
    title: '免费ChatGPT',
    desc: '免费GPT4.0、多模态、MJ绘画',
  },
  {
    id: 6,
    url: 'https://aicodeconvert.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_db0e257c1b994e498b5dbfd20879af33.png',
    title: 'aicodeconvert',
    desc: '智能代码转换器',
  },
  {
    id: 7,
    url: 'http://beta.dreamstudio.ai/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_3a305bf1f31d449fb55ad2f1647d4980.png',
    title: 'Stable Diffusion',
    desc: '文本到图像生成AI模型',
  },
  {
    id: 8,
    url: 'https://agentgpt.reworkd.ai/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_542dd5fd6eb247d1bf6215513ec66b02.png',
    title: 'agentgpt',
    desc: '自主人工智能的开源项',
  },
  {
    id: 9,
    url: 'https://17yongai.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_14a1d272a09f4781911c7e6aef8cf196.png',
    title: '一起用AI导航',
    desc: '一起用AI | AI工具导航',
  },
  {
    id: 10,
    url: 'https://ai-bot.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1a1c7d72c6af4156a9a594397093e8f0.png',
    title: 'AI工具集导航',
    desc: '500+ AI工具导航大全',
  },
  {
    id: 11,
    url: 'https://web3.yunyingbiji.cn/',
    icon: 'https://web3.yunyingbiji.cn/wp-content/uploads/2022/10/ac1v2-lsg7h-001.ico',
    title: 'Web3导航',
    desc: '全网web3热门工具集',
  }
])
const xuexishouceList = ref([
  {
    id: 1,
    url: 'https://v3.cn.vuejs.org/guide/introduction.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_11fcb00a6c92461fa39760806cbb2039.png',
    title: 'Vue.js手册',
    desc: '构建用户界面的渐进式框架',
  },
  {
    id: 2,
    url: 'https://zh-hans.reactjs.org/docs/getting-started.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_fd7e080582de47ef8666d1d0d76472e7.png',
    title: 'React教程',
    desc: '构建用户界面的 JavaScript 库',
  },
  {
    id: 3,
    url: 'https://www.apiref.com/css-zh/index.htm',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_624cf64d147b422ba2405b5e1719d4d2.png',
    title: 'css3中文手册',
    desc: 'css3中文手册',
  },
  {
    id: 4,
    url: 'http://shouce.jb51.net/spring/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8eff5cc726bd4d7395cedb21eb0db80d.png',
    title: 'Spring中文手册',
    desc: 'Spring中文手册',
  },
  {
    id: 5,
    url: 'http://felord.cn/_doc/_springboot/2.1.5.RELEASE/_book/pages/boot-documentation.html#boot-documentation',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8eff5cc726bd4d7395cedb21eb0db80d.png',
    title: 'SpringBoot中文手册',
    desc: 'SpringBoot中文手册',
  },
  {
    id: 6,
    url: 'https://www.springcloud.cc/spring-cloud-greenwich.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8eff5cc726bd4d7395cedb21eb0db80d.png',
    title: 'SpringCloud中文手册',
    desc: 'SpringCloud中文手册',
  },
  {
    id: 7,
    url: 'https://www.springcloud.cc/spring-data-jpa.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8eff5cc726bd4d7395cedb21eb0db80d.png',
    title: 'Spring Data JPA',
    desc: 'Spring Data JPA - 参考文档',
  },
  {
    id: 8,
    url: 'https://pdai.tech',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a5b9a342aacc48d78723826790bcb46a.png',
    title: 'pdai.tech',
    desc: 'Java 全栈知识体系',
  },
  {
    id: 9,
    url: 'https://www.redis.com.cn/tutorial.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d375648269eb4e618d6d60df03dba46a.png',
    title: 'Redis中文教程',
    desc: '简洁清晰的Redis中文教程',
  },
  {
    id: 10,
    url: 'https://docs.docker.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_887becd320f4402899d4ab235998a2d9.png',
    title: 'docker官方手册',
    desc: 'docker官方手册',
  },
  {
    id: 11,
    url: 'https://www.elastic.co/guide/cn/elasticsearch/guide/current/getting-started.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_36907798f62349f0bad2d902b14e4a37.png',
    title: 'Elasticsearch教程',
    desc: '实时的分布式搜索分析引擎',
  },
  {
    id: 12,
    url: 'https://www.mongodb.org.cn/tutorial/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_68fdfb49d02244f889b2af696cf0fe74.png',
    title: 'MongoDB教程',
    desc: '分布式文件存储的数据库',
  },
  {
    id: 13,
    url: 'https://www.topgoer.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_316cef59a1a04989b23240a4027e315d.png',
    title: 'Go中文文档',
    desc: 'Go中文文档',
  },
  {
    id: 14,
    url: 'https://docs.python.org/zh-cn/3/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e3011e8244534cbdb06eaad61e41069e.png',
    title: 'Python3.10.4文档',
    desc: 'Python官方文档来了',
  },
  {
    id: 15,
    url: 'https://www.liaoxuefeng.com/wiki/1252599548343744',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d136236971d74f38a71d71d8d84dafd6.png',
    title: 'Java教程',
    desc: '廖雪峰的Java教程',
  },
  {
    id: 16,
    url: 'https://aiyanbo.gitbooks.io/spark-programming-guide-zh-cn/content/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_dedc4d67bb79491692f8847e2e282282.png',
    title: 'Spark编程指南',
    desc: 'Spark编程指南简体中文版',
  },
  {
    id: 17,
    url: 'https://git-scm.com/book/zh/v2',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_500076cda08d4823b8e08194d992b563.png',
    title: 'Git学习手册',
    desc: 'git --fast-version-control',
  },
  {
    id: 18,
    url: 'https://www.kancloud.cn/wizardforcel/w3school-sql/93915',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_607659f922c049ea896f9449bcc198d0.png',
    title: 'SQL教程',
    desc: '简洁明了的SQL教程手册',
  },
  {
    id: 19,
    url: 'http://cn.linux.vbird.org/linux_basic/linux_basic.php',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_3a4825d15ae14ce5bffabccf8aac883b.png',
    title: '鸟哥的Linux私房菜',
    desc: '非常详细的Linux教程',
  },
  {
    id: 20,
    url: 'https://books.sonatype.com/mvnref-book/reference/index.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_62c439e2d40f4283a0d7f3718cebb240.png',
    title: 'maven手册',
    desc: '最详细详细的Maven手册',
  },
  {
    id: 21,
    url: 'https://books.halfrost.com/leetcode/ChapterOne/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_6b1c97e60ebf4eb19d8d6cad0728ad37.png',
    title: 'LeetCode刷题手册',
    desc: '经典丰富的算法在线刷题手册',
  },
  {
    id: 22,
    url: 'https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/structural.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_c152812a2a4042fc942db0255c3edead.png',
    title: '图说设计模式',
    desc: '内容讲解详细生动',
  },
  {
    id: 23,
    url: 'https://mybatis.org/mybatis-3/zh/index.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d9bbf97d8e5f43059fc822649399d7dd.png',
    title: 'Mybatis手册',
    desc: '优秀的持久层框架',
  },
  {
    id: 24,
    url: 'https://www.oraclejsq.com/article.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_5f07e4dd78ef48adb8a5c4499435a4fc.png',
    title: 'Oracle教程',
    desc: 'Free IT-Oracle教程',
  },
  {
    id: 25,
    url: 'http://www.yanhuangxueyuan.com/WebGL/',
    icon: '',
    title: 'WebGL入门手册',
    desc: 'WebGL零基础入门教程(郭隆邦)',
  },
  {
    id: 20,
    url: 'http://www.yanhuangxueyuan.com/Three.js/',
    icon: '',
    title: 'Three.js入门手册',
    desc: 'Three.js零基础入门教程(郭隆邦)',
  },
  {
    id: 20,
    url: 'https://www.runoob.com/',
    icon: '',
    title: '菜鸟教程',
    desc: '学的不仅是技术，更是梦想',
  }
])
const jishushequList = ref([
  {
    id: 1,
    url: 'https://www.cnblogs.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cnblogs.png',
    title: '博客园',
    desc: '开发者的网上家园',
  },
  {
    id: 2,
    url: 'https://www.csdn.net/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/csdn.png',
    title: 'CSDN',
    desc: '中文最大的技术社区',
  },
  {
    id: 3,
    url: 'https://www.oschina.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e50a240308c048569975c76889c7e5d4.png?x-oss-process=image/resize,m_fill,w_40,h_40',
    title: '开源中国',
    desc: '目前国内最大的开源技术社区',
  },
  {
    id: 4,
    url: 'https://segmentfault.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_87feae864e274579824d7398a588e042.png',
    title: 'SF思否',
    desc: '思否是中国领先的开发者技术社区',
  },
  {
    id: 5,
    url: 'https://juejin.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/juejin.png',
    title: '掘金',
    desc: '一个帮助开发者成长的社区',
  },
  {
    id: 6,
    url: 'https://www.51cto.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/51.ico',
    title: '51CTO',
    desc: '中国领先的IT技术网站',
  },
  {
    id: 7,
    url: 'https://toutiao.io/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/toutiao.png',
    title: '开发者头条',
    desc: '程序员分享平台',
  },
  {
    id: 8,
    url: 'https://xie.infoq.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/InfoQ.jpg',
    title: 'InfoQ',
    desc: '一个实践驱动的技术社区资讯站点',
  },
  {
    id: 9,
    url: 'https://stackoverflow.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/stackoverflow.svg',
    title: 'StackOverflow',
    desc: '全球最大的技术问答社区',
  },
  {
    id: 10,
    url: 'http://www.chinaunix.net/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cu.png',
    title: 'ChinaUnix',
    desc: '中国最大的Linux/Unix技术社区',
  },
  {
    id: 11,
    url: 'https://ruby-china.org/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/ruby.png',
    title: 'Ruby china',
    desc: '国内最权威的 Ruby 社区',
  },
  {
    id: 12,
    url: 'https://studygolang.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/golang.ico',
    title: 'Golang中文社区',
    desc: 'Go语言爱好者的学习家园',
  },
  {
    id: 13,
    url: 'http://www.oschina.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e50a240308c048569975c76889c7e5d4.png?x-oss-process=image/resize,m_fill,w_40,h_40',
    title: '开源中国',
    desc: '领先的中文开源技术社区',
  },
  {
    id: 14,
    url: 'https://www.runoob.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_271d8c04c9e54805844359e1e7fec3aa.png',
    title: '菜鸟教程',
    desc: '学的不仅是技术，更是梦想',
  },
  {
    id: 15,
    url: 'https://gocn.vip',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_58638886f8f9485cab8cd846643c87ea.png',
    title: 'GoCN社区',
    desc: '国内活跃的 Go 社区',
  }
])
const xietongbangongList = ref([
  {
    id: 1,
    url: 'https://shimo.im/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/shimo.ico',
    title: '石墨文档',
    desc: '石墨文档,全新一代云Office办公软件,支持多人在线协同办公',
  },
  {
    id: 2,
    url: 'https://www.kdocs.cn',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/wps.png',
    title: '金山文档',
    desc: '完全免费，多人实时协作的在线Office',
  },
  {
    id: 3,
    url: 'https://www.baklib.com?utm_campaign=1&amp;utm_content=20&amp;utm_term=d2afe4c9-daef-4185-a9fc-77f0aa62c5c9&amp;utm_source=coderutil',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/website/file_0a2da71228d64a1dadbf929a294c697e.png',
    title: 'Baklib',
    desc: '优雅的云知识库构建平台，基于企业“帮助中心”的全场景解决方案',
  },
  {
    id: 4,
    url: 'https://doc.weiyun.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/weiyun.ico',
    title: '微云文档',
    desc: '腾讯公司打造的智能云服务，多人协同编辑，云端办公黑科技<',
  },
  {
    id: 5,
    url: 'https://note.youdao.com/web/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/youdao.ico',
    title: '有道云笔记',
    desc: '专注办公提效的笔记软件',
  },
  {
    id: 6,
    url: 'https://pan.baidu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/pan.ico',
    title: '百度网盘',
    desc: '文件网络备份、同步和分享服务',
  },
  {
    id: 7,
    url: 'https://www.aliyundrive.com/',
    icon: 'https://gw.alicdn.com/imgextra/i3/O1CN01aj9rdD1GS0E8io11t_!!6000000000620-73-tps-16-16.ico',
    title: '阿里云盘',
    desc: '阿里云盘，不限速',
  },
  {
    id: 8,
    url: 'https://www.yuque.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/yue.png',
    title: '语雀',
    desc: '优雅高效在线文档编辑与协同工具',
  },
  {
    id: 9,
    url: 'https://www.teambition.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tb.ico',
    title: 'Teambition',
    desc: '阿里巴巴工作学习套件',
  },
  {
    id: 10,
    url: 'http://www.mikecrm.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/mk.png',
    title: '麦客',
    desc: '一款在线表单制作工',
  },
  {
    id: 11,
    url: 'https://www.wjx.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/wjx.png',
    title: '问卷星',
    desc: '问卷调查',
  },
  {
    id: 12,
    url: 'https://h5.bce.baidu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/h5.png',
    title: '百度H5',
    desc: '一个在线H5制作平台',
  },
  {
    id: 13,
    url: 'https://www.tubiaoxiu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tbx.png',
    title: '图表秀',
    desc: '免费的在线图表制作工具',
  },
  {
    id: 14,
    url: 'https://web.baimiaoapp.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/baimiao.ico',
    title: '白描',
    desc: '高效的中文ocr文字识别软件',
  },
  {
    id: 15,
    url: 'https://modao.cc/brand',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_6722f6def1f140c0af6892af5d2ab851.png',
    title: '墨刀',
    desc: '在线产品设计协同一体化',
  }
])
const moyuhuashuiList = ref([
  {
    id: 1,
    url: 'https://www.coderutil.com/bbs',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-bbs.png',
    title: 'C 圈',
    desc: 'Coder自己的圈子',
  },
  {
    id: 2,
    url: 'https://www.coderutil.com/citerm',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_880c50d8dd034d83b3b9f88870040294.png',
    title: 'ciTerm',
    desc: '程序员终端摸鱼天花板',
  },
  {
    id: 3,
    url: 'https://www.coderutil.com/nft/graph',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ca6088d229034c428e5fafb85a481560.png',
    title: '像素头像',
    desc: 'NFT像素头像制作',
  },
  {
    id: 4,
    url: 'https://www.bilibili.com',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_10dfe78d27cd4a4a8ce64d293e546237.png',
    title: 'B站',
    desc: 'bilibili哔哩哔哩',
  },
  {
    id: 5,
    url: 'https://tophub.today/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tophub.png',
    title: '今日热榜',
    desc: '今日热榜提供各站热榜聚合',
  },
  {
    id: 6,
    url: 'https://dig.chouti.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/chouti.png',
    title: '抽屉新热榜',
    desc: '聚合每日热门、搞笑、有趣资讯 每日热门、搞笑、有趣资讯',
  },
  {
    id: 7,
    url: 'https://www.allhistory.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_70bdf797c47f48108a231a06d00e770f.png',
    title: '全历史',
    desc: '以AI知识图谱为核心引擎',
  },
  {
    id: 8,
    url: 'http://slither.io/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_fa61b26a4c33408592ed9a965a448acd.png',
    title: '滑行者',
    desc: '游戏贪吃蛇',
  },
  {
    id: 9,
    url: 'https://www.yikm.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_4db7d4caae184eb8af05a411dd731ff8.png',
    title: '小霸王',
    desc: '小霸王，其乐无穷',
  },
  {
    id: 10,
    url: 'https://toonme.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_046e9d711e74485cb45be6d3d1a2889a.png',
    title: 'toonme',
    desc: '在线照片转卡通画',
  },
  {
    id: 11,
    url: 'https://youquhome.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/youqu.png',
    title: '有趣网',
    desc: '收藏全球最有趣的网站',
  }
])
const xuexipingtaiList = ref([
  {
    id: 1,
    url: 'https://time.geekbang.org/?code=I-dvIrU30BwOueI1tRpoWi2tb4CtqKUSN6U4r9SVQQE%253D',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/time.jpg',
    title: '极客时间',
    desc: '轻松学习，高效学习',
  },
  {
    id: 2,
    url: 'https://www.bilibili.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_67257074550c4f3fb1ce68964ba25e62.png',
    title: 'B站',
    desc: '哔哩哔哩',
  },
  {
    id: 3,
    url: 'https://www.runoob.com',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cn.ico',
    title: '菜鸟教程',
    desc: '学的不仅是技术，更是梦想！',
  },
  {
    id: 4,
    url: 'https://www.yiibai.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/yibai.png',
    title: '易百教程',
    desc: '专注于IT教程和实例',
  },
  {
    id: 5,
    url: 'https://www.w3school.com.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/w3.png',
    title: 'W3school',
    desc: '全球最大的中文 Web 技术教程',
  },
  {
    id: 6,
    url: 'https://www.imooc.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/imooc.png',
    title: '慕课网',
    desc: '程序员的梦工厂',
  },
  {
    id: 7,
    url: 'https://gitbook.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/gitchat.png',
    title: 'Gitchat',
    desc: 'IT知识分享平台',
  },
  {
    id: 8,
    url: 'https://leetcode-cn.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/leet.jpg',
    title: '力扣LeetCode',
    desc: '专业的LeetCode分享平台',
  },
  {
    id: 9,
    url: 'https://github.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/github.svg',
    title: 'GitHub',
    desc: '世界最大的开源代码共享社区',
  },
  {
    id: 10,
    url: 'https://gitee.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/gitee.png',
    title: 'Gitee',
    desc: '中国最大的开源代码共享社区',
  },
  {
    id: 11,
    url: 'https://www.zhihu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/zhihu.png',
    title: '知乎',
    desc: '中国最大的问答社区',
  },
  {
    id: 12,
    url: 'https://study.163.com/category/480000003131009',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/163.png',
    title: '网易云课堂',
    desc: '网易云课堂编程语言频道',
  },
  {
    id: 13,
    url: 'http://www.manongjc.com',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/ma.ico',
    title: '码农教程',
    desc: 'IT编程入门网',
  },
  {
    id: 14,
    url: 'http://techblog.pub/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/blog.jpg',
    title: '技术博客',
    desc: '原创技术博客大联盟',
  },
  {
    id: 15,
    url: 'https://kaiwu.lagou.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/lagou.png',
    title: '拉钩教育',
    desc: '互联网人职场专业能力提升平台',
  }
])
const toubushequList = ref([
  {
    id: 1,
    url: 'https://www.douban.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/douban.ico',
    title: '豆瓣',
    desc: '文艺青年聚集地',
  },
  {
    id: 2,
    url: 'https://www.bilibili.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/bili.ico',
    title: 'B站',
    desc: '国内知名的视频弹幕网站',
  },
  {
    id: 3,
    url: 'https://www.zhihu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/zhihu.png',
    title: '知乎',
    desc: '中国最大的问答社区',
  },
  {
    id: 4,
    url: 'https://www.toutiao.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/toutiao.ico',
    title: '今日头条',
    desc: '是一个通用信息平台',
  },
  {
    id: 5,
    url: 'https://creator.douyin.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/dou.ico',
    title: '抖音',
    desc: '短视频-记录美好生活',
  },
  {
    id: 6,
    url: 'https://video.kuaishou.com',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/kwai.ico',
    title: '快手',
    desc: '短视频-拥抱每一种生活',
  },
  {
    id: 7,
    url: 'https://www.xiaohongshu.com/explore',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/xhs.jpg',
    title: '小红书',
    desc: '标记我的生活',
  },
  {
    id: 8,
    url: 'https://www.jianshu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/jian.ico',
    title: '简书',
    desc: '一个写作的社区',
  },
  {
    id: 9,
    url: 'https://xueqiu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/xueqiu.png',
    title: '雪球',
    desc: '专业股票交流社区',
  },
  {
    id: 10,
    url: 'https://tieba.baidu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/baidu.ico',
    title: '百度贴吧',
    desc: '全球最大的中文社区',
  },
  {
    id: 11,
    url: 'https://www.hupu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/hu.ico',
    title: '虎扑',
    desc: '体育赛事为主的社区网站',
  },
])
const jiedanList = ref([
  {
    id: 1,
    url: 'https://www.freetalen.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_963f831d30b344d7ad6a8212949912d0.png',
    title: '飞援',
    desc: '程序员兼职平台-飞援',
  },
  {
    id: 2,
    url: 'https://beijing.zbj.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ef26da80d9b74ea591d741db8e7099d3.png',
    title: '猪八戒',
    desc: '中国领先的企业服务平台',
  },
  {
    id: 3,
    url: 'https://zb.oschina.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_f736c6061a69488595b8a79da7bdb5f8.png',
    title: '开源众包',
    desc: '靠谱的IT软件开发服务交易平台',
  },
  {
    id: 4,
    url: 'https://www.proginn.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_231d62c0f3174a5ca78cedc7a735a2fe.png',
    title: '程序员客栈',
    desc: '程序员自由远程工作平台',
  },
  {
    id: 5,
    url: 'https://www.xiaohuodui.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b17890caefed42d78dc47ffcd75ef16a.png',
    title: '杭州 | 小火堆科技',
    desc: '小火堆科技是一个为客户提供定制化数字解决方案的品牌，致力为企业提供可持续的业务数字化支撑团队。',
  },
  {
    id: 6,
    url: 'https://eleduck.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_48ee223fc873489c8ab0639c586e8c12.png',
    title: '电鸭社区',
    desc: '远程工作招聘社区，也是远程办公互联网工作者们的聚集地, 分享外包、零活、兼职等非主流工作机会。',
  },
  {
    id: 7,
    url: 'https://codemart.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_66510141af164b75bdb6c9444ee6b1ae.png',
    title: '码市',
    desc: '码市是互联网软件外包服务平台，意在连接需求方与广大开发者。让项目的需求方快速的找到合适的开发者。',
  },
  {
    id: 8,
    url: 'https://www.zbj.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8b77a728fae040da93d85cd8c60f3d68.png',
    title: '码市',
    desc: '汇集海量程序员、设计师等人才招聘求职信息，国内领先的企业服务平台。',
  }
])
const tupianziyuanList = ref([
  {
    id: 1,
    url: 'https://www.iconfont.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/website/file_12d932cd31d1480b97018e2dd656edad.png',
    title: 'iconfont',
    desc: '阿里巴巴出品图标库',
  },
  {
    id: 2,
    url: 'https://iconpark.oceanengine.com/home',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b221c4c29273473d8e59e51203aa5bff.png',
    title: 'iconpark',
    desc: '字节跳动出品图标库',
  },
  {
    id: 3,
    url: 'https://js.design?source=coder&amp;plan=001',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1b82af1006544b1fbbf68e00cad13729.png',
    title: '即时设计',
    desc: '实时协作专业UI设计工具',
  },
  {
    id: 4,
    url: 'https://818ps.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tuguaishou.png',
    title: '图怪兽',
    desc: '会打字就能用的在线编辑器',
  },
  {
    id: 5,
    url: 'https://www.gaoding.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/dinggaosheji.ico',
    title: '稿定设计',
    desc: '稿定设计_让设计更简单',
  },
  {
    id: 6,
    url: 'https://www.tusij.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tusiji.png',
    title: '图司机',
    desc: '10秒快速出图-人人都是设计师！',
  },
  {
    id: 7,
    url: 'https://www.fotor.com.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/fotor.png',
    title: 'Fotor懒设计',
    desc: '在线设计神器免费设计素材模板',
  },
  {
    id: 8,
    url: 'https://www.chuangkit.com/designtools/designindex',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/chuangketie.png',
    title: '创可贴',
    desc: '做图做视频常备工具',
  },
  {
    id: 9,
    url: 'https://www.paixin.com/',
    icon: 'https://static.paixin.com/paixin-home/static/favicon_1.ico',
    title: '信拍',
    desc: '中国领先的创意内容素材平台',
  },
  {
    id: 10,
    url: 'https://pixabay.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/pixabay.png',
    title: 'Pixabay',
    desc: '免费正版高清图片素材库',
  },
  {
    id: 11,
    url: 'https://www.pexels.com/zh-cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/pexels.ico',
    title: 'Pexel',
    desc: '免费可商用图片视频素材网站',
  },
  {
    id: 12,
    url: 'https://www.bigbigwork.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/dazuo.png',
    title: '大作',
    desc: 'unsplash中文网站',
  },
  {
    id: 13,
    url: 'https://500px.com.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/500px.ico',
    title: '500px',
    desc: '全球摄影爱好者学习交流',
  },
  {
    id: 14,
    url: 'https://shejishow.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d29c59fb4ae6470e8128e0406211773a.png',
    title: '设计秀',
    desc: '设计师工具箱丨免费下载网站',
  },
  {
    id: 15,
    url: 'https://www.tukeli.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_bdaa68429a084bf48ec6b45f0f8cd536.png',
    title: '皮卡智能',
    desc: '皮卡智能一键抠图',
  },
])
const ziyuantuijianList = ref([
  {
    id: 1,
    url: 'https://www.extfans.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_140fd7a0a4c14f92bdd3382ee41101ad.png',
    title: 'Extfans',
    desc: 'Chrome插件扩展下载网',
  },
  {
    id: 2,
    url: 'https://www.100font.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a062a161050484986683dd55171a2e1.png',
    title: '100font - 字体',
    desc: '100font 免费商用字体',
  },
  {
    id: 3,
    url: 'https://www.bookstack.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_4e8295a06d714f08a9b42dd6710aa4fe.png',
    title: '书栈网',
    desc: '程序员开源书籍免费读',
  },
  {
    id: 4,
    url: 'https://book.zhishikoo.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_3dd6648268c7482e955c074f558d57c7.png',
    title: '书籍知识库',
    desc: '优质的电子书分享站',
  },
  {
    id: 5,
    url: 'https://www.jiumodiary.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/mo.png',
    title: '鸠摩搜索',
    desc: '文档搜索引擎',
  },
  {
    id: 6,
    url: 'https://mac.macsc.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b9b147430c4c41ff92191e0483a14755.png',
    title: 'MacSC',
    desc: '精品mac软件下载',
  },
  {
    id: 7,
    url: 'https://www.macdo.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9910b27e4c33461683884a6abd78a751.png',
    title: 'Mac毒',
    desc: 'Mac软件下载网站',
  },
  {
    id: 8,
    url: 'https://www.ypppt.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/youpin.svg',
    title: '优品PPT',
    desc: '免费PPT模板下载网站',
  },
  {
    id: 9,
    url: 'https://www.wdku.net/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/wd.ico',
    title: '依奇',
    desc: '在线超级转换工具',
  },
  {
    id: 10,
    url: 'https://www.flvcd.com/index.htm',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/flvcd.png',
    title: '硕鼠',
    desc: '最稳定的视频下载平台',
  },
  {
    id: 11,
    url: 'http://www.shipinyu.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/stackoverflow.svg',
    title: '视频鱼',
    desc: '一个视频自助解析的服务平台',
  },
  {
    id: 12,
    url: 'http://czjx8.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/vip.jpg',
    title: '船长解析',
    desc: 'vip视频在线解析',
  },
  {
    id: 13,
    url: 'https://lv.ulikecam.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/jy.jpg',
    title: '剪映',
    desc: '最好用的视频剪辑工具',
  },
  {
    id: 14,
    url: 'https://www.savetweetvid.com/zh',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/savetd.ico',
    title: 'Twitter视频下载器',
    desc: '将Twitter视频下载到Mp4和Mp3',
  },
  {
    id: 15,
    url: 'http://wherebt.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/bt.ico',
    title: 'BT导航网',
    desc: '提供各种BT资源导航',
  },
])
const zhanzhanggongjuList = ref([
  {
    id: 1,
    url: 'https://invite.51.la/1NMdrUBK?target=V6',
    icon: 'https://www.51.la/favicon.ico',
    title: '51.LA',
    desc: '51la网站流量统计',
  },
  {
    id: 2,
    url: 'https://tool.chinaz.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cz.ico',
    title: '站长之家',
    desc: '站长工具是站长的必备工具',
  },
  {
    id: 3,
    url: 'https://tongji.baidu.com/web/welcome/login',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/baidu.ico',
    title: '百度统计',
    desc: '领先的中文网站分析平台',
  },
  {
    id: 4,
    url: 'https://passport.umeng.com/login?appId=cnzz',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cnzz.ico',
    title: 'CNZZ',
    desc: 'CNZZ网站流量统计',
  },
  {
    id: 5,
    url: 'http://www.alexa.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/alexa.png',
    title: '网站排名',
    desc: 'Alexa网站流量全球综合排名查询',
  },
  {
    id: 6,
    url: 'https://www.5118.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/5118.ico',
    title: '5118',
    desc: '长尾词挖掘,营销情报,站长工具',
  },
  {
    id: 7,
    url: 'https://www.aizhan.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/az.ico',
    title: '爱站网',
    desc: '各种网站工具，关键词排名',
  },
  {
    id: 8,
    url: 'https://www.similarsites.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/sim.png',
    title: 'Similarsites',
    desc: '查询相同类型网站',
  },
  {
    id: 9,
    url: 'https://xiaomark.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/xm.png',
    title: '小码短链',
    desc: '短网址跳转工具',
  },
  {
    id: 10,
    url: 'https://yinliu.club/member/KeywordHot/index',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/jk.png',
    title: '极客增长',
    desc: '流量操盘手的必备工具',
  },
  {
    id: 11,
    url: 'https://www.aliyun.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/ali.png',
    title: '阿里云ECS',
    desc: '弹性可伸缩的云服务器',
  },
  {
    id: 12,
    url: 'https://curl.qcloud.com/JtswGRWT',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tengxun.ico',
    title: '腾讯云',
    desc: '提供云计算，云主机、云服务器',
  },
  {
    id: 13,
    url: 'http://hao.199it.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/199.png',
    title: '大数据导航',
    desc: '快速找到大数据相关的工具平台',
  },
  {
    id: 14,
    url: 'https://wanwang.aliyun.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/wanwang.ico',
    title: '域名注册',
    desc: '域名注册',
  },
  {
    id: 15,
    url: 'https://www.tianyancha.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tianya.png',
    title: '天眼查',
    desc: '查公司、查老板、查关系',
  }
])
const chromechajianList = ref([
  {
    id: 1,
    url: 'https://www.baidufe.com/fehelper/index/index.html',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_bd656703b32a42429e2bb7821c9d9711.png',
    title: 'FeHelper',
    desc: '前端必备，集成了包括 JSON 格式化、二维码生成与解码、信息编解码、代码压缩、美化、页面取色、Markdown与 HTML 互转、网页滚动截屏、正则表达式、时间转换工具、编码规范检测、页面性能检测、Ajax 接口调试、密码生成器、JSON 比对工具、网页编码设置、便签笔记等各种功能。',
    tipText: '前端必备',
    tipBgColor: '#f6416c',
  },
  {
    id: 2,
    url: 'https://jsonview.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_453d9f8a79d34d1e9dbdf767399fff2d.png',
    title: 'JSONView',
    desc: '具有代码自动高亮,自动缩进,自动折叠功能.甚至JSON文件中有错误，JSONView仍然可以显示原始代码',
    tipText: 'JSON格式化',
    tipBgColor: '#3f72af',
  },
  {
    id: 3,
    url: 'https://www.crx4chrome.com/extensions/aejoelaoggembcahagimdiliamlcdmfm/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_4b785829b9da4e59991ebe0ebb3731c7.png',
    title: 'Talend API Tester',
    desc: '被称为专为编程人员开发的一款进行网页调试的工具。使测试HTTP和RESTAPI变得容易。可与REST，SOAP和HTTP API进行可视化交互。',
    tipText: 'API调试工具',
    tipBgColor: '#112d4e',
  },
  {
    id: 4,
    url: 'https://www.extfans.com/web-development/dogkpdfcklifaemcdfbildhcofnopogp/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_afafbbd7c0814da4a4415720d91e6278.jpeg',
    title: 'Axure RP',
    desc: 'Axure RP Extension是一款谷歌插件，主要可以用来查看原型文件',
    tipText: '预览Axure',
    tipBgColor: '#fc5185',
  },
  {
    id: 5,
    url: 'https://www.extfans.com/productivity/aapbdbdomjkkjkaonfhkkikfgjllcleb/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_63c85511be6746278b91f53b3eab2f05.png',
    title: 'Google翻译',
    desc: 'Google官方团队出品，具有划词翻译能力，当然是Chrome最好用的汉译英插件',
    tipText: '翻译',
    tipBgColor: '#0074e4',
  },
  {
    id: 6,
    url: 'https://www.octotree.io/download',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1e5701d372d943758bd5ef672a4c4114.png',
    title: 'Octotree',
    desc: '让你通过文档库的方式管理、查看你的 GitHub 仓库，简单直观的同时，也方便你进行文件之间的跳转操作',
    tipText: 'GitHub 文档库',
    tipBgColor: '#f67280',
  },
  {
    id: 7,
    url: 'https://www.tampermonkey.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a2ef8b53ede140188cc0fda115e3c4d0.png',
    title: 'tampermonkey',
    desc: '可以称之为是一个伟大的Chrome插件，他的魅力在于脚本文件',
    tipText: '脚本',
    tipBgColor: '#5da0a2',
  },
  {
    id: 8,
    url: 'https://adblockplus.org',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_133f32f6425c4c2c9546882702cfb37d.png',
    title: 'AdBlock chrome',
    desc: '最知名的广告拦截插件之一，拥有数千万用户，也是最受欢迎的 Chrome 扩展程序之一',
    tipText: '广告拦截',
    tipBgColor: '#c06c84',
  },
  {
    id: 9,
    url: 'https://www.one-tab.com/',
    icon: 'https://www.one-tab.com/web/images/favicon/apple-touch-icon.png',
    title: 'OneTab',
    desc: 'Save up to 95% memory and reduce tab clutter in Google',
    tipText: '标签管理',
    tipBgColor: '#3498db',
  }
])
const jishutuanduiList = ref([
  {
    id: 1,
    url: 'https://tech.meituan.com',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_63395250de7a43c8a42223e723b45c25.png',
    title: '美团技术团队',
    desc: 'meituan',
  },
  {
    id: 2,
    url: 'https://blog.csdn.net/Taobaojishu',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b2f6357dbd094a31a9f48531d0dbfdcc.png',
    title: '阿里淘系技术团队',
    desc: 'CSDN',
  },
  {
    id: 3,
    url: 'https://fex.baidu.com',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_f326100ab94c4992a4e0fd9a990788f4.png',
    title: '百度FEX团队',
    desc: 'FEX',
  },
  {
    id: 4,
    url: 'https://blog.csdn.net/ByteDanceTech',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_45125bd292ef430fbb9e4cdafd76b1f3.png',
    title: '字节跳动技术团队',
    desc: 'CSDN',
  },
  {
    id: 5,
    url: 'https://blog.csdn.net/Tencent_TEG',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_5fb68f6c152f4559885015420a822a51.png',
    title: '腾讯技术工程',
    desc: 'CSDN',
  },
  {
    id: 6,
    url: 'https://blog.csdn.net/devcloud',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_af9f7b7ab037445cb052579d3652cc0b.png',
    title: '华为云技术团队',
    desc: 'CSDN',
  },
  {
    id: 7,
    url: 'https://xiaomi-info.github.io/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_768f4304e81d4002beb35fd041e0ffa0.png',
    title: '小米技术团队',
    desc: 'xiaomi-info',
  },
  {
    id: 8,
    url: 'http://www.alloyteam.com/page/0',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_2d73e2a0bfb74ce1a0b3e06035f372c5.png',
    title: '腾讯全端',
    desc: 'alloyteam',
  },
  {
    id: 9,
    url: 'https://75.team/cate/article/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_2d73e2a0bfb74ce1a0b3e06035f372c5.png',
    title: '360前端奇舞团',
    desc: '奇舞团',
  },
  {
    id: 10,
    url: 'https://fed.taobao.org/blogs/1',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_c12c999504a543d58e6d7107cbbac423.png',
    title: '淘系前端',
    desc: '前端',
  },
  {
    id: 11,
    url: 'https://blog.csdn.net/jILRvRTrc',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_afa7d4e0e1b64a738d6a8421acc28734.png',
    title: 'Google 开发者',
    desc: 'CSDN',
  },
  {
    id: 12,
    url: 'https://blog.csdn.net/UbuntuTouch',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1a1b401668964f65ba3f07388546185c.png',
    title: 'Elastic中国社区',
    desc: 'CSDN',
  },
  {
    id: 13,
    url: 'https://blog.csdn.net/weixin_38912070',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_6dfb0ecb87314d64a5490ae69109b28c.png',
    title: '咸鱼技术',
    desc: 'CSDN',
  },
  {
    id: 14,
    url: 'https://isux.tencent.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a5afe9311d504a3bb9bdb9391c4f2279.png',
    title: '腾讯ISUX',
    desc: 'isux',
  },
  {
    id: 15,
    url: 'https://jelly.jd.com/',
    icon: 'https://jelly.jd.com/3.0/fonts/2657ceafd877a9cbe0e7604b36c21906.svg',
    title: '京东设计中心',
    desc: 'jelly',
  },
  {
    id: 16,
    url: 'https://efe.baidu.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e855394b0fd94e7f924e85fcd94b9b17.png',
    title: '百度EFE技术体系',
    desc: '百度EFE',
  },
  {
    id: 17,
    url: 'https://zhuanlan.zhihu.com/ElemeFE',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d2c05dac268c46e989de3d62399886b7.png',
    title: '饿了么前端',
    desc: '知乎',
  },
  {
    id: 18,
    url: 'https://blog.csdn.net/DiDi_Tech',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b44a121b657048a2b47784a3f9c8b3c2.png',
    title: '滴滴技术',
    desc: 'CSDN',
  },
  {
    id: 19,
    url: 'https://blog.csdn.net/HUAWEI_HMSCore',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_071ba3b6d6874fe99afbe8a58adb38bd.png',
    title: '华为移动服务',
    desc: 'CSDN',
  },
  {
    id: 20,
    url: 'https://aws.amazon.com/cn/blogs/aws/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_7c2610f186df46d2a75bd7ebb3328ccb.png',
    title: 'Amazon Blog',
    desc: '亚马逊',
  },
  {
    id: 21,
    url: 'https://engineering.fb.com',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a5f72c028f114584b302954b036c40d9.png',
    title: 'Facebook',
    desc: 'Facebook',
  },
  {
    id: 22,
    url: 'https://devblogs.microsoft.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_5058ecc4abb0473da60293637b62b790.png',
    title: 'Microsoft',
    desc: 'Microsoft',
  },
  {
    id: 23,
    url: 'https://eng.uber.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_cfff97ab757b44eca91f5a9f0875cffa.png',
    title: 'Uber Engineering',
    desc: 'Uber',
  },
  {
    id: 24,
    url: 'https://tech.souyunku.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b9335d4d5d794b54834d7b32fa08f77e.png',
    title: '搜云库技术团队',
    desc: '搜云库',
  },
  {
    id: 25,
    url: 'https://aotu.io/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_fe97a9f2fce44bafb481d8590f9678b6.png',
    title: '凹凸实验室',
    desc: '京东用户体验设计部',
  },
  {
    id: 26,
    url: 'https://tech.ebayinc.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_f7156d9d99fe41219f3145c5c6dc864d.png',
    title: 'eBay Tech',
    desc: 'eBay',
  },
  {
    id: 27,
    url: 'https://developer.ibm.com/blogs/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1e20503c1d304e8a81571125259564a8.png',
    title: 'IBM Blog',
    desc: 'IBM',
  },
  {
    id: 28,
    url: 'https://blog.csdn.net/tensorflowforum',
    icon: 'https://profile-avatar.csdnimg.cn/79679033db174a30abf82ba2e03eb4d0_tensorflowforum.jpg!1',
    title: 'TensorFlow',
    desc: 'TensorFlow',
  },
])
const cyZixunList = ref([
  {
    id: 1,
    url: 'https://www.qbitai.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ae9093a777ef4738912b80d122f0388c.png',
    title: '量子位',
    desc: '追踪人工智能新趋势，报道科技行业新突破',
  },
  {
    id: 2,
    url: 'https://www.huxiu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/huxiuwang.png',
    title: '虎嗅网',
    desc: '虎嗅网,聚合优质的创新信息与人群',
  },
  {
    id: 3,
    url: 'https://www.tmtpost.com',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/taimeiti.png',
    title: '钛媒体',
    desc: '钛媒体_专业无止境-网罗天下创新事',
  },
  {
    id: 4,
    url: 'https://36kr.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/36kr.png',
    title: '36Kr',
    desc: '36氪_为创业者提供最好的产品和服务',
  },
  {
    id: 5,
    url: 'https://www.cyzone.cn',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/chuangyebang.png',
    title: '创业邦',
    desc: '创业邦 - 关注创新经济及其推动者',
  },
  {
    id: 6,
    url: 'https://chaping.cn',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_2c9220f0211844088c3c0acdab1300e7.png',
    title: '差评',
    desc: 'DEBUG THE WORLD，科技类产品评测资讯网',
  },
  {
    id: 7,
    url: 'http://www.geekpark.net/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/jikegongyuan.png',
    title: '极客公园',
    desc: '最新的科技动态，关注极具创新精神的科技产品',
  },
  {
    id: 8,
    url: 'https://www.itjuzi.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/itjizi.png',
    title: 'IT 桔子',
    desc: '泛互联网创业投资项目信息库及商业信息服务商',
  }
])
const zhaopinpingtaiList = ref([
  {
    id: 1,
    url: 'https://www.zhipin.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/zhaopin/boss.png',
    title: 'Boss直聘',
    desc: '专业的计算机人才招聘平台',
  },
  {
    id: 2,
    url: 'https://www.lagou.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/zhaopin/lagou.png',
    title: '拉勾网',
    desc: '一家专为互联网从业者提供工作机会的招聘网站',
  },
  {
    id: 3,
    url: 'https://www.nowcoder.com/contestRoom',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/zhaopin/niuke.png',
    title: '牛客网',
    desc: '集笔面试系统、题库、社群交流于一体',
  },
  {
    id: 4,
    url: 'https://leetcode-cn.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/zhaopin/likou.png',
    title: 'LeetCode 力扣',
    desc: '全球极客挚爱的技术成长平台官方',
  }
])
const ruanjianxiazaiList = ref([
  {
    id: 1,
    url: 'https://www.jetbrains.com/idea/download/#section=mac',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ca93d7ef4faf46d8926c969ca3286593.png',
    title: 'IntelliJ IDEA',
    desc: 'JetBrains 致力于为开发者打造最高效智能的开发工具',
  },
  {
    id: 2,
    url: 'https://www.myeclipsecn.com/download/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_21fd25e5490b4f9f90f69d93a4fe3665.png',
    title: 'MyEclipse',
    desc: 'MyEclipse-功能最全面的Java IDE',
  },
  {
    id: 3,
    url: 'https://tomcat.apache.org/download-9.cgi',
    icon: 'https://tomcat.apache.org/res/images/tomcat.png',
    title: 'Tomcat 9',
    desc: 'Tomcat 是一个小型轻量的应用服务器',
  },
  {
    id: 4,
    url: 'https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_f3456314ccf34f91987a0664f02fcae5.png',
    title: 'JDK 8',
    desc: '使用 Java 编程语言构建应用和组件的开发环境',
  },
  {
    id: 5,
    url: 'https://jmeter.apache.org/download_jmeter.cgi',
    icon: 'https://jmeter.apache.org/images/apple-touch-icon.png" class="web-page-module-link-card-icon',
    title: 'JMeter',
    desc: 'JMeter 轻量、易上手压测工具',
  },
  {
    id: 6,
    url: 'https://maven.apache.org/download.cgi#',
    icon: 'https://jmeter.apache.org/images/apple-touch-icon.png" class="web-page-module-link-card-icon',
    title: 'Maven',
    desc: '最流行的Java项目构建系统',
  },
  {
    id: 7,
    url: 'http://download.redis.io/releases/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_33274c8638824eeaaca9156a27e37803.png',
    title: 'Redis',
    desc: '最常用的NoSQL型数据库',
  },
  {
    id: 8,
    url: 'https://www.mysql.com/downloads',
    icon: 'https://labs.mysql.com/common/logos/mysql-logo.svg?v2" class="web-page-module-link-card-icon',
    title: 'MySQL',
    desc: '最常用的关系型数据库',
  },
  {
    id: 9,
    url: 'http://www.navicat.com.cn/download/navicat-for-mysql',
    icon: 'http://www.navicat.com.cn/images/02.Product_00_AllProducts_Premium.png',
    title: 'Navicat',
    desc: '使用相对比较多的MySQL可视化管理工具',
  },
  {
    id: 10,
    url: 'http://www.sublimetext.com/3',
    icon: 'https://www.sublimetext.com/favicon.ico',
    title: 'Sublime Text',
    desc: 'Sublime Text 文本编辑器，同时也是一个先进的代码编辑器',
  },
  {
    id: 11,
    url: 'https://www.typora.io/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a08c04790e0846e6a468346658ff317d.png',
    title: 'Typora',
    desc: 'Typora，有被成为世界上最漂亮的写作App',
  },
  {
    id: 12,
    url: 'https://www.charlesproxy.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e1e26aae35174a14b9e1eb67cc954d71.png',
    title: 'Charles',
    desc: 'Charles，最好用的抓包工具',
  },
])
const ruisuosiList = ref([
  {
    id: 1,
    class: 'hot',
    title: '热门下载榜',
    list: [
      {
        id: 1,
        fileNamn: 'Java成神之路',
        fileUrl: '/resource/view?resid=RESOURCE_826fafe6fa884f6295ddd7293af18d95',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'http://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_bc8f8e6c9ca74a7ba6c18b36e4e800f6.jpeg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '侠与飞',
        upTime: '2023 / 3 / 20',
        downloadCount: 36
      },
      {
        id: 2,
        fileNamn: 'JAVA开发手册（嵩山版）.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_fdb6cc8dccb74e8aa4ef1b167d9ca1ba',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'http://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_cad9e8ac361043d187536ebe93c3dd8b.png?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '瑞索斯',
        upTime: '2023 / 3 / 20',
        downloadCount: 88
      },
      {
        id: 3,
        fileNamn: '码了个码-程序员盒子出品-纯前端-源代码',
        fileUrl: '/resource/view?resid=RESOURCE_1f801b03cbdd445795ce3c6800fe9002',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ba600ddd80c74e188cff9af33de03c5c.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023/3/20',
        downloadCount: 527
      },
      {
        id: 4,
        fileNamn: '你不知道的JavaScript（下卷）.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_8f8f741410724aa68a9c1ef1ef03fb48',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2022 / 1 / 6',
        downloadCount: 49
      },
      {
        id: 5,
        fileNamn: 'java面试宝典',
        fileUrl: '/resource/view?resid=RESOURCE_f4b09628d8da4957b8c254c105f755a8',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'http://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_8daac707090044e4ac169eec66ae92be.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '不知所以然',
        upTime: '2023 / 10 / 3',
        downloadCount: 33
      },
      {
        id: 6,
        fileNamn: 'IDEA全家桶一键激活工具支持Win系统和Mac',
        fileUrl: '/resource/view?resid=RESOURCE_b15c10d782a840a4b6b8c26c2a5c266e',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ba600ddd80c74e188cff9af33de03c5c.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_601e236e38054bd4bda74c81a35a7c05.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: 'kk',
        upTime: '2023 / 10 / 3',
        downloadCount: 21
      },
      {
        id: 7,
        fileNamn: '软技能：代码之外的生存指南.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e2391439a38a4b1883705288ac5859f6',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2022 / 8 / 1',
        downloadCount: 87
      },
      {
        id: 8,
        fileNamn: 'Idea激活器，非破解',
        fileUrl: '/resource/view?resid=RESOURCE_13167487a43742f1bb9eb62cc0a5b4ed',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ba600ddd80c74e188cff9af33de03c5c.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_601e236e38054bd4bda74c81a35a7c05.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: 'kk',
        upTime: '2022 / 8 / 1',
        downloadCount: 11
      },
    ]
  },
  {
    id: 2,
    class: 'book',
    title: '电子书',
    list: [
      {
        id: 1,
        fileNamn: 'Java面试手册.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_b10dfa59c2e0471faaac8702cd0cef15',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 0
      },
      {
        id: 2,
        fileNamn: 'JAVA核心知识笔记大全.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_0dec3373e2384f4eb753efeaef7d665a',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 3,
        fileNamn: 'Java高级架构面试知识点整理.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_f9101ca04bd94071b953aab81118d236',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 4,
        fileNamn: 'Java高工面试手册汇总.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 5,
        fileNamn: 'Java 面试顶级解析（2023版）.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 6,
        fileNamn: '中国平安面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 7,
        fileNamn: '腾讯面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 8,
        fileNamn: '美团面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
    ]
  },
  {
    id: 3,
    class: 'vip',
    title: '精品付费资源',
    list: [
      {
        id: 1,
        fileNamn: '腾讯面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 2,
        fileNamn: '中国平安面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 3,
        fileNamn: 'Java面试手册.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 4,
        fileNamn: 'Java高级架构面试知识点整理.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 5,
        fileNamn: '字节跳动 Java 面试顶级解析（2023版.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 6,
        fileNamn: 'JAVA核心知识笔记大全.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 7,
        fileNamn: 'Java高工面试手册汇总.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 8,
        fileNamn: '美团面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
    ]
  },
])
const testList = ref([
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
  {
    id: 1,
    url: '',
    icon: '',
    title: '',
    desc: '',
  },
])
</script>

<template>
  <!-- <pre>{{ data }}</pre> -->
  <!-- <QuickMenu></QuickMenu> -->
  <main class="web-page-container">
    <!-- 热门菜单 -->
    <div class="web-page-module module-hot-menu" id="module-hot-menu">
      <a class="simple-web-link" href="/ai" target="_blank"><img
          src="https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_61eefd17808a4cc7bbe8e0856f8ef451.png"
          style="width: 15px; height: 15px; margin-right: 5px; border-radius: 100px;">Ai导航</a>
      <a class="simple-web-link" href="http://www.baidu.com" target="_blank" style="font-weight: 500">
        <span style="color: red">百</span><span style="color: #003bdf">度</span>
      </a>
      <a class="simple-web-link" href="http://www.google.com" target="_blank" style="font-weight: 500">
        <span style="color: #1c88f0">G</span><span style="color: #f03e39">o</span><span
          style="color: #ffbb2d">o</span><span style="color: #1c88f0">g</span><span style="color: #2ca858">l</span><span
          style="color: #f03e39">e</span>
      </a>
      <a class="simple-web-link" href="https://volctrack.com/w/pqzX5CQU" target="_blank"><img
          src="https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ff74a18a9e9f4ad2bf56210a80012130.jpg"
          style="width: 15px; height: 15px; margin-right: 5px; border-radius: 3px;">kimi.Ai</a>
      <a class="simple-web-link" href="https://fanyi.baidu.com/" target="_blank">汉译英</a>
      <a class="simple-web-link" href="https://github.com" target="_blank">GitHub</a>
      <a class="simple-web-link" href="https://www.baidu.com/s?ie=UTF-8&amp;wd=%E4%B8%87%E5%B9%B4%E5%8E%86"
        target="_blank">万年历</a>
      <a class="simple-web-link" href="https://gitee.com/" target="_blank">Gitee</a>
      <a class="simple-web-link" href="https://www.bilibili.com/" style="color: #00b0e9" target="_blank">B站</a>
      <a class="simple-web-link" href="https://www.csdn.net/" target="_blank" style="color: orangered">CSDN</a>
      <a class="simple-web-link" href="https://juejin.cn/" target="_blank" style="color: #0862ce">掘金</a>
      <a class="simple-web-link" href="https://www.processon.com/" target="_blank" style="font-weight: 500">
        process<span style="background-color: #007eeb; padding: 2px; font-size: 10px; color: white;
                    border-radius: 2px;margin-left: 3px; border-radius: 20px">On</span></a>
      <a class="simple-web-link" href="https://app.diagrams.net/" target="_blank"><b>draw.io</b></a>
      <a class="simple-web-link" href="https://naotu.baidu.com/" target="_blank">脑图</a>
      <a class="simple-web-link" href="https://www.extfans.com/" target="_blank">Chrome插件</a>
      <a class="simple-web-link" href="http://www.woshipm.com/" target="_blank">我是PM</a>
      <a class="simple-web-link" href="https://js.design?source=coder&amp;plan=001" target="_blank"
        style="color: black; font-weight: 500">即时设计
      </a>
      <a class="simple-web-link" href="https://www.zhipin.com/" style="color: #00c8c3" target="_blank">Boss直聘</a>
      <a class="simple-web-link" href="https://time.geekbang.org/?code=I-dvIrU30BwOueI1tRpoWi2tb4CtqKUSN6U4r9SVQQE%253D"
        style="color: #e8620e" target="_blank">极客时间</a>
      <div style="clear: both"></div>
    </div>
    <!-- 工具 -->
    <div class="web-page-module module-hot-tool" id="module-hot-tool" style="padding: 20px 15px 10px 15px;">
      <a class="normal-tool-card" target="_blank"
        onclick="drawerPopUpReSizePos('大头（程序员盒子技术社区超级AI助理）', '/cutool/datou', '900px', 'rt')"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_1549a6af99f142d78d33616c6e84f8ee.png?x-oss-process=image/resize,m_fill,w_30,h_30"
          class="small-tool-icon">AI助手</a>
      <a class="normal-tool-card" target="_blank" onclick="drawerPopUpReSize(' ', '/cutool/sqlcreator', '1000px')"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_28ad7e6e208841af9f320bcbd028056c.png?x-oss-process=image/resize,m_fill,w_30,h_30"
          class="small-tool-icon">SQL生成器</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerPopUpReSize('程序员盒子 / 在线工具大全 / 代码格式化万能工具', '/cutool/codeFormat', '800px')">代码格式化</a>
      <a class="normal-tool-card" target="_blank" onclick="drawerPopUpReSize(' ', '/cutool/cucolor', '1000px')"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_82d883480eb54b3180e1bf744a35c46e.png?x-oss-process=image/resize,m_fill,w_30,h_30"
          class="small-tool-icon">盒子调色板</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerTool(&quot;程序员盒子 / 在线工具大全/ Cron表达式&quot;, &quot;cron&quot;)">
        <img src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_4887bfbb936c477cb716b047756983db.png"
          class="small-tool-icon">Cron表达式</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerTool(&quot;程序员盒子 / 在线工具大全/ 时间戳转换&quot;, &quot;time&quot;)"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_bf9f317d7dc0457f97bd15898e61cb8b.png"
          class="small-tool-icon">时间戳转换</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerTool(&quot;程序员盒子 / 在线工具大全/ MD5在线加密&quot;, &quot;md5&quot;)"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_0781a7a3af984ce184b813936f520f40.png"
          class="small-tool-icon">MD5</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerTool(&quot;程序员盒子 / 在线工具大全/ URL编解码&quot;, &quot;urlcode&quot;)"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_2010ceea133946cdabd72ec18fe71943.png"
          class="small-tool-icon">URL编解码</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerTool(&quot;程序员盒子 / 在线工具大全/ 图片Base64在线互转&quot;, &quot;imgBase64&quot;)"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ae723aa2432a47d8bdbc3bb5efcc6ef8.png"
          class="small-tool-icon">图片Base64互转</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerTool(&quot;程序员盒子 / 在线工具大全/ 二维码生成器&quot;, &quot;qr&quot;)">二维码</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerTool(&quot;程序员盒子 / 在线工具大全/ 在线取色器&quot;, &quot;colorSelector&quot;)"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8d0ec6eecc3043599a7f7baca1318f32.png"
          class="small-tool-icon">取色器</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerTool(&quot;程序员盒子 / 在线工具大全/ 字母大小写转换&quot;, &quot;LUCase&quot;)"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9b876a8dae4b4f028e85f947dfcbd4c9.png"
          class="small-tool-icon">大小写互换</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerTool(&quot;程序员盒子 / 在线工具大全/ 中文Unicode编解码&quot;, &quot;unicode&quot;)"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_93e6b331307f4e9dac3c2e8685a7f904.png?x-oss-process=image/resize,m_fill,w_30,h_30"
          class="small-tool-icon">中文Unicode编解码</a>
      <a class="normal-tool-card" target="_blank"
        onclick="drawerTool(&quot;程序员盒子 / 在线工具大全/ IP归属地查询&quot;, &quot;ipAddress&quot;)">IP归属地查询</a>
      <a href="https://regexr.com/" class="normal-tool-card" target="_blank"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1dc0baa8c35743f5be054b4e4757a287.png"
          class="small-tool-icon">正则校验</a>
      <a href="https://jex.im/regulex/#!flags=&amp;re=%5E(a%7Cb)*%3F%24" class="normal-tool-card" target="_blank"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_18afed0375774bfaae6235072b965997.png"
          class="small-tool-icon">正则可视化</a>
      <a href="https://man.niaoge.com/" class="normal-tool-card" target="_blank"><img
          src="https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/redhat.png"
          class="small-tool-icon">Linux 命令</a>
      <a href="https://color.uisdc.com/pick.html" class="normal-tool-card" target="_blank"><img
          src="https://color.uisdc.com/favicon.ico" class="small-tool-icon">配色导航</a>
      <a href="https://tool.lu/hexconvert/" class="normal-tool-card" target="_blank"><img
          src="https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/hexconvert.png"
          class="small-tool-icon">进制转换</a>
      <a href="https://www.baidu.com/s?ie=utf-8&amp;f=8&amp;rsv_bp=1&amp;tn=baidu&amp;wd=%E8%AE%A1%E7%AE%97%E5%99%A8"
        class="normal-tool-card" target="_blank"><img
          src="https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cal.png"
          class="small-tool-icon">计算器</a>
      <a href="https://squoosh.app/" class="normal-tool-card" target="_blank">图片压缩</a>
      <a href="https://tool.lu/encdec/" class="normal-tool-card" target="_blank"><img
          src="https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/jj.png"
          class="small-tool-icon">加密解密</a>
      <a href="https://cdnjs.com/" class="normal-tool-card" target="_blank"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_3d786defdf9248659efc02be62182d88.png"
          class="small-tool-icon">cdnJs</a>
      <a href="https://cli.im/" class="normal-tool-card" target="_blank"><img
          src="https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/er.png"
          class="small-tool-icon">草料二维码</a>
      <a href="https://carbon.now.sh/" class="normal-tool-card" target="_blank"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_742b0bad5bdd42b8a50a14bd5a3a61be.png"
          class="small-tool-icon">代码海报图</a>
      <a href="https://www.cs.usfca.edu/~galles/visualization/Algorithms.html" class="normal-tool-card"
        target="_blank"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_05a1712488654f00a2363028903b25c6.png"
          class="small-tool-icon">数据结构可视化</a>
      <a href="https://caniuse.com/" class="normal-tool-card" target="_blank"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_00f8509852764c7c88801e4c6d66d57b.png"
          class="small-tool-icon">caniuse</a>
      <a href="https://www.speedtest.cn/" class="normal-tool-card" target="_blank"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8680a9cff9dd46c08bfb207fc0c25156.png"
          class="small-tool-icon">测网速</a>
      <a href="http://www.lingdaima.com/" class="normal-tool-card" target="_blank" title="零代码，网页布局设计"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_92798d8d9ee14e128b1203c412d526a3.png"
          class="small-tool-icon">零代码</a>
      <a href="https://www.codejie.net/nginxconfig/?global.app.lang=zhCN" class="normal-tool-card" target="_blank"><img
          src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_0ec5a27535414dbfbcee8142a5d30763.png"
          class="small-tool-icon">Nginx配置在线生成</a>
      <div style="clear: both"></div>
    </div>
    <div class="flex"
      style="display: flex;justify-content: space-between;">
      <div class="layout-left-module">
        <div class="layout-left-module-item" id="module-bbs-hot">
          <p class="layout-left-module-item-title">
            <a href="https://www.coderutil.com/bbs">C圈精选</a>
          </p>
          <a href="/live/player">
            <div class="line1ppp" id="in-live"
              style="display: none; padding: 5px 10px; margin: 5px 0px 10px 0px;
                    border-radius: 50px 0px 0px 50px; text-align: left; line-height: 20px; color: white; background: linear-gradient(to right, rgb(7,127,219), white);">
              <span class="layui-badge">直播中</span> <span id="live-name"></span>
            </div>
          </a>
          <a href="/bbs">
            <div id="vote" class="line1ppp"
              style="display: none; padding: 5px 10px; margin:
                    5px 0px;
                    border-radius: 50px 0px 0px 50px; text-align: left; line-height: 20px; color: white; background: linear-gradient(to right, rgb(251, 99, 72), white);">
              <span class="layui-badge layui-bg-cyan">调研</span>
              <span id="vote-title"></span>
            </div>
          </a>
          <a href="/luck">
            <div class="line1ppp" id="in-lottery"
              style="padding: 5px 10px; margin: 5px 0px 10px; border-radius: 50px 0px 0px 50px; text-align: left; line-height: 20px; color: white; background: linear-gradient(to right, rgb(0, 122, 255), white);">
              【已结束】程序员盒子积分抽奖第五期</div>
          </a>
          <a href="/citerm" target="_blank">
            <div class="line1ppp" style="padding: 5px 10px; margin: 5px 0px
                     10px 0px; border-radius: 0px 50px 50px 0px;
                        text-align: right; line-height: 20px; color: white;
                        background:-webkit-linear-gradient(to left, black, white);
                        background:linear-gradient(to left, black, white);">
              ciTerm - 在线摸鱼神器天花板！
            </div>
          </a>
          <a href="/process">
            <div class="line1ppp" id="in-xuqiu"
              style="padding: 5px 10px; margin: 5px 0px 10px; border-radius: 50px 0px 0px 50px; text-align: left; line-height: 20px; color: white; background: linear-gradient(to right, rgb(0, 122, 255), white);">
              上需求池：提需求，反馈BUG，提创意！
            </div>
          </a>
          <div id="recommend-community-div" style="min-height: 200px">
            <a href="/bbs/detail?id=5344" target="_blank">
              <div class="bbs-jingxuan-item-list" style="margin: 5px 0px; width: 270px;">
                <p class="line2ppp bbs-jingxuan-item-content-noimg">早上好！今天是 2024年07月02日 星期二</p>
                <p class="bbs-jingxuan-item-list-operate-data">14 浏览 · 0 评论</p>
                <div class="bbs-jingxuan-item-img-div">
                  <img class="img-hover"
                    src="https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/moyurili/1d70213fb7ce4119b0f4bd3ecfc8ef24_1719882028079.png?x-oss-process=image/resize,m_fill,w_70,h_70">
                </div>
              </div>
            </a>
            <a href="/bbs/detail?id=5340" target="_blank">
              <div class="bbs-jingxuan-item-list" style="margin: 5px 0px; width: 270px;">
                <p class="line2ppp bbs-jingxuan-item-content-noimg">早上好！今天是 2024年07月01日 星期一</p>
                <p class="bbs-jingxuan-item-list-operate-data">22 浏览 · 0 评论</p>
                <div class="bbs-jingxuan-item-img-div">
                  <img class="img-hover"
                    src="https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/moyurili/70c861f241bb418ab45f2d4156217f2b_1719795602153.png?x-oss-process=image/resize,m_fill,w_70,h_70">
                </div>
              </div>
            </a>
            <a href="/bbs/detail?id=5338" target="_blank">
              <div class="bbs-jingxuan-item-list" style="margin: 5px 0px; width: 270px;">
                <p class="line2ppp bbs-jingxuan-item-content">讯飞星火V4.0 发布，全面对标GPT-4 Turbo</p>
                <p class="bbs-jingxuan-item-list-operate-data">17 浏览 · 1 评论</p>
              </div>
            </a>
            <a href="/bbs/detail?id=5331" target="_blank">
              <div class="bbs-jingxuan-item-list" style="margin: 5px 0px; width: 270px;">
                <p class="line2ppp bbs-jingxuan-item-content-noimg">早上好！今天是 2024年06月28日 星期五</p>
                <p class="bbs-jingxuan-item-list-operate-data">25 浏览 · 0 评论</p>
                <div class="bbs-jingxuan-item-img-div">
                  <img class="img-hover"
                    src="https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/moyurili/ed48aac750c24be5abf864b02617878a_1719536464536.png?x-oss-process=image/resize,m_fill,w_70,h_70">
                </div>
              </div>
            </a>
            <a href="/bbs/detail?id=5330" target="_blank">
              <div class="bbs-jingxuan-item-list" style="margin: 5px 0px; width: 270px;">
                <p class="line2ppp bbs-jingxuan-item-content">包阅AI-你的智能AI阅读助手，即时提练总结，高效获取答案</p>
                <p class="bbs-jingxuan-item-list-operate-data">17 浏览 · 1 评论</p>
              </div>
            </a>
          </div>
        </div>
        <div class="layout-left-module-item" id="recommend-card-4"
          style="background-color: transparent; border: 1px solid rgb(236, 234, 234); border-radius: 5px; padding: 0px; width: 295px;overflow: hidden;">
          <a href="https://www.coderutil.com/star/39" target="_blank">
            <img src="https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_35f1b43589f54a1e977ec49492689196.png"
              style="width: 100%;">
            <button class="adv-tag" style="background-color: coral">优质好课</button>
          </a>
        </div>
        <div class="layout-left-module-item" id="module-csdn-hot-search">
          <div class="layout-left-module-item-title">
            <a href="https://www.coderutil.com/cuapi/2003" target="_blank">CSDN热门文章</a>
            <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 8V24" stroke="#3d3d3d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 24L6 40" stroke="#3d3d3d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519"
                  stroke="#3d3d3d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </div>
          <p style="line-height: 40px; color: #c68686; display: none" id="csdn-hot-search-refresh-finished">CSDN热门文章已刷新
          </p>
          <div class="csdn-hot-search-result" id="csdn-hot-search-result" style="text-align: left; line-height: 30px;">
            <p class="hot-search-result-p line1ppp"><span class="layui-badge"
                style="font-size: 10px; padding: 0px 5px;">1</span>&nbsp;<a class="api-data"
                href="https://blog.csdn.net/rjdeng/article/details/139694569"
                target="_blank">【AI大模型】跌倒监控与健康：技术实践及如何改变未来</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-blue"
                style="font-size: 10px; padding: 0px 5px;">2</span>&nbsp;<a class="api-data"
                href="https://blog.csdn.net/qq_61024956/article/details/140097611"
                target="_blank">【机器学习】机器学习与医疗健康在疾病预测中的融合应用与性能优化新探索</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-orange"
                style="font-size: 10px; padding: 0px 5px;">3</span>&nbsp;<a class="api-data"
                href="https://blog.csdn.net/shsjssnn/article/details/136856051" target="_blank">【Rust】——所有的模式语法</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">4</span>&nbsp;<a class="api-data"
                href="https://blog.csdn.net/m0_73367097/article/details/140091081"
                target="_blank">【Python】利用代理IP爬取当当网数据做数据分析</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">5</span>&nbsp;<a class="api-data"
                href="https://blog.csdn.net/Easonmax/article/details/139470408"
                target="_blank">【机器学习】机器学习的重要技术——生成对抗网络：理论、算法与实践</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">6</span>&nbsp;<a class="api-data"
                href="https://blog.csdn.net/2303_77720864/article/details/140055251"
                target="_blank">【机器学习】在【Pycharm】中的应用：【线性回归模型】进行【房价预测】</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">7</span>&nbsp;<a class="api-data"
                href="https://blog.csdn.net/weixin_48007632/article/details/140106912"
                target="_blank">【机器学习】FFmpeg+Whisper：二阶段法视频理解（video-to-text）大模型实战</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">8</span>&nbsp;<a class="api-data"
                href="https://blog.csdn.net/strive_mianyang/article/details/140025424"
                target="_blank">C++——探索智能指针的设计原理</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">9</span>&nbsp;<a class="api-data"
                href="https://blog.csdn.net/benshu_001/article/details/140103238"
                target="_blank">Kubernetes的发展历程:从Google内部项目到云原生计算的基石</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">10</span>&nbsp;<a class="api-data"
                href="https://blog.csdn.net/2302_76516899/article/details/140111951" target="_blank">人工智能--目标检测</a></p>
          </div>
        </div>
        <div class="layout-left-module-item" id="module-csdn-hot-search">
          <div class="layout-left-module-item-title">
            <a href="https://www.coderutil.com/cuapi/2003" target="_blank">微博热搜</a>
            <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 8V24" stroke="#3d3d3d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 24L6 40" stroke="#3d3d3d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519"
                  stroke="#3d3d3d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </div>
          <p style="line-height: 40px; color: #c68686; display: none" id="csdn-hot-search-refresh-finished">CSDN热门文章已刷新
          </p>
          <div id="weibo-hot-search-result" style="text-align: left; line-height: 30px;">
            <p class="hot-search-result-p line1ppp"><span class="layui-badge"
                style="font-size: 10px; padding: 0px 5px;">1</span>&nbsp;<a class="api-data"
                href="https://s.weibo.com/weibo?q=%23%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%B8%AD%E4%BA%9A%E8%A1%8C%23&amp;Refer=new_time"
                target="_blank">习近平中亚行</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-blue"
                style="font-size: 10px; padding: 0px 5px;">2</span>&nbsp;<a class="api-data"
                href="https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%83%A8%E9%95%BF%E4%BA%B2%E8%87%AA%E6%8E%A5%E6%9C%BA%E4%B8%AD%E5%9B%BD%E5%A8%83%E5%9C%88%E5%A5%B3%E6%98%8E%E6%98%9F%23&amp;t=31&amp;band_rank=1&amp;Refer=top"
                target="_blank">泰国部长亲自接机中国娃圈女明星</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-orange"
                style="font-size: 10px; padding: 0px 5px;">3</span>&nbsp;<a class="api-data"
                href="https://s.weibo.com/weibo?q=%E5%BE%90%E8%89%BA%E6%B4%8B%20%E8%80%81%E6%9D%BF%E5%B0%B1%E8%83%BD%E4%B8%8A%E6%88%91%E5%8D%AB%E7%94%9F%E9%97%B4%E5%90%97&amp;t=31&amp;band_rank=2&amp;Refer=top"
                target="_blank">徐艺洋 老板就能上我卫生间吗</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">4</span>&nbsp;<a class="api-data"
                href="https://s.weibo.com/weibo?q=%23%E5%85%B3%E4%BA%8E%E4%B8%8A%E5%90%88%E7%BB%84%E7%BB%87%E4%BD%A0%E6%83%B3%E7%9F%A5%E9%81%93%E7%9A%84%E9%83%BD%E5%9C%A8%E8%BF%99%E9%87%8C%23&amp;t=31&amp;band_rank=3&amp;Refer=top"
                target="_blank">关于上合组织你想知道的都在这里</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">5</span>&nbsp;<a class="api-data"
                href="https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%E5%9C%9F%E8%80%B3%E5%85%B65%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%BC%95%E5%8F%91%E9%AA%9A%E4%B9%B1%23&amp;t=31&amp;band_rank=4&amp;Refer=top"
                target="_blank">外国男子强奸土耳其5岁女童引发骚乱</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">6</span>&nbsp;<a class="api-data"
                href="https://s.weibo.com/weibo?q=%23%E6%9C%AC%E6%9C%88%E4%BD%A0%E7%9A%84%E5%B7%A5%E8%B5%84%E6%88%96%E6%9C%89%E5%A4%9A%E9%A1%B9%E8%B0%83%E6%95%B4%23&amp;t=31&amp;band_rank=5&amp;Refer=top"
                target="_blank">本月你的工资或有多项调整</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">7</span>&nbsp;<a class="api-data"
                href="https://s.weibo.com/weibo?q=%234%E5%90%8D%E6%B8%94%E6%B0%91%E9%A5%AE%E7%94%A8%E6%BC%82%E6%B5%81%E7%93%B6%E4%B8%AD%E6%B6%B2%E4%BD%93%E5%90%8E%E8%BA%AB%E4%BA%A1%23&amp;t=31&amp;band_rank=6&amp;Refer=top"
                target="_blank">4名渔民饮用漂流瓶中液体后身亡</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">8</span>&nbsp;<a class="api-data"
                href="https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7%E4%BB%8A%E5%A4%A9%E5%AE%98%E5%AE%A3%E4%BA%86%E5%A5%BD%E5%A4%9A%E5%89%A7%23&amp;t=31&amp;band_rank=8&amp;Refer=top"
                target="_blank">优酷今天官宣了好多剧</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">9</span>&nbsp;<a class="api-data"
                href="https://s.weibo.com/weibo?q=%23%E9%83%91%E7%88%BD%E6%9C%AA%E5%B1%A5%E8%A1%8C%E9%87%91%E9%A2%9D%E8%B6%851.2%E4%BA%BF%23&amp;t=31&amp;band_rank=9&amp;Refer=top"
                target="_blank">郑爽未履行金额超1.2亿</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">10</span>&nbsp;<a class="api-data"
                href="https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E9%80%9A%E7%9F%A5%E4%B9%A6%E6%8A%8A%E6%B5%AA%E6%BC%AB%E7%8E%A9%E5%88%B0%E6%9E%81%E8%87%B4%E4%BA%86%23&amp;t=31&amp;band_rank=10&amp;Refer=top"
                target="_blank">高校通知书把浪漫玩到极致了</a></p>
          </div>
        </div>
        <div class="layout-left-module-item" id="module-csdn-hot-search">
          <div class="layout-left-module-item-title">
            <a href="https://www.coderutil.com/cuapi/2003" target="_blank">百度热搜</a>
            <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 8V24" stroke="#3d3d3d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 24L6 40" stroke="#3d3d3d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519"
                  stroke="#3d3d3d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </div>
          <p style="line-height: 40px; color: #c68686; display: none" id="csdn-hot-search-refresh-finished">CSDN热门文章已刷新
          </p>
          <div id="baidu-hot-search-result" style="text-align: left; line-height: 30px;">
            <p class="hot-search-result-p line1ppp"><span class="layui-badge"
                style="font-size: 10px; padding: 0px 5px;">1</span>&nbsp;<a class="api-data"
                href="https://www.baidu.com/s?wd=%E4%B8%AD%E5%93%88%E8%B5%B0%E5%A5%BD%E6%96%B0%E7%9A%84%E2%80%9C%E9%BB%84%E9%87%91%E4%B8%89%E5%8D%81%E5%B9%B4%E2%80%9D&amp;sa=fyb_news&amp;rsv_dl=fyb_news"
                target="_blank">中哈走好新的“黄金三十年”</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-blue"
                style="font-size: 10px; padding: 0px 5px;">2</span>&nbsp;<a class="api-data"
                href="https://www.baidu.com/s?wd=%E6%B9%96%E5%8D%97%E5%B9%B3%E6%B1%9F%E6%9A%B4%E9%9B%A8%E5%86%85%E6%B6%9D+%E6%B0%B4%E4%BD%8D%E9%80%BC%E8%BF%91%E7%BA%A2%E7%BB%BF%E7%81%AF&amp;sa=fyb_news&amp;rsv_dl=fyb_news"
                target="_blank">湖南平江暴雨内涝 水位逼近红绿灯</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-orange"
                style="font-size: 10px; padding: 0px 5px;">3</span>&nbsp;<a class="api-data"
                href="https://www.baidu.com/s?wd=%E5%A4%AE%E5%AA%92%E8%AF%84%E5%A4%9A%E5%9C%B0%E6%8C%AA%E7%94%A8%E5%86%9C%E6%9D%91%E5%AD%A6%E7%94%9F%E8%90%A5%E5%85%BB%E9%A4%90%E8%A1%A5%E8%B4%B4&amp;sa=fyb_news&amp;rsv_dl=fyb_news"
                target="_blank">央媒评多地挪用农村学生营养餐补贴</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">4</span>&nbsp;<a class="api-data"
                href="https://www.baidu.com/s?wd=%E4%B8%AD%E6%AC%A7%E7%8F%AD%E5%88%97%E2%80%9C%E8%B7%91%E2%80%9D%E5%87%BA%E5%8A%A0%E9%80%9F%E5%BA%A6&amp;sa=fyb_news&amp;rsv_dl=fyb_news"
                target="_blank">中欧班列“跑”出加速度</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">5</span>&nbsp;<a class="api-data"
                href="https://www.baidu.com/s?wd=3%E4%B8%AA%E6%9C%888%E5%90%8D%E5%8E%85%E5%AE%98%E8%A2%AB%E6%9F%A5+%E5%94%90%E5%B1%B1%E5%AE%98%E5%9C%BA%E5%B7%A8%E9%9C%87&amp;sa=fyb_news&amp;rsv_dl=fyb_news"
                target="_blank">3个月8名厅官被查 唐山官场巨震</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">6</span>&nbsp;<a class="api-data"
                href="https://www.baidu.com/s?wd=%E9%98%BF%E9%87%8C%E4%BA%91%E5%9B%9E%E5%BA%94B%E7%AB%99%E3%80%81%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%B4%A9%E4%BA%86&amp;sa=fyb_news&amp;rsv_dl=fyb_news"
                target="_blank">阿里云回应B站、小红书崩了</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">7</span>&nbsp;<a class="api-data"
                href="https://www.baidu.com/s?wd=%E7%94%B7%E5%AD%90%E5%90%83%E7%83%A7%E7%83%A4%E8%A2%AB%E7%83%AB%E5%87%BA%E5%BE%AE%E7%AC%91%E5%94%87&amp;sa=fyb_news&amp;rsv_dl=fyb_news"
                target="_blank">男子吃烧烤被烫出微笑唇</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">8</span>&nbsp;<a class="api-data"
                href="https://www.baidu.com/s?wd=%E8%8C%85%E5%8F%B0%E5%85%A8%E7%BA%BF%E4%B8%8A%E6%B6%A8%EF%BC%9A%E9%A3%9E%E5%A4%A9%E8%8C%85%E5%8F%B0%E8%BF%AB%E8%BF%912400&amp;sa=fyb_news&amp;rsv_dl=fyb_news"
                target="_blank">茅台全线上涨：飞天茅台迫近2400</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">9</span>&nbsp;<a class="api-data"
                href="https://www.baidu.com/s?wd=%E5%B2%B3%E9%98%B3%E5%B1%B1%E4%BD%93%E6%BB%91%E5%9D%A1%E8%87%B4%E6%88%BF%E5%B1%8B%E5%80%92%E5%A1%8C%EF%BC%9F%E5%81%87&amp;sa=fyb_news&amp;rsv_dl=fyb_news"
                target="_blank">岳阳山体滑坡致房屋倒塌？假</a></p>
            <p class="hot-search-result-p line1ppp"><span class="layui-badge layui-bg-gray"
                style="font-size: 10px; padding: 0px 5px;">10</span>&nbsp;<a class="api-data"
                href="https://www.baidu.com/s?wd=%E5%8E%82%E5%AE%B6%E5%9B%9E%E5%BA%94%E7%8E%8B%E6%B5%B7%E6%89%93%E5%81%87%E5%91%A8%E6%B0%8F%E8%97%95%E7%B2%89%E4%B8%8D%E5%90%AB%E8%97%95&amp;sa=fyb_news&amp;rsv_dl=fyb_news"
                target="_blank">厂家回应王海打假周氏藕粉不含藕</a></p>
          </div>
        </div>
        <div class="layout-left-module-item" style="height: 460px;">
          <div class="layout-left-module-item-title">
            <a href="https://www.coderutil.com/cuapi/2003" target="_blank" style="display: flex;align-items: center;">
              <img src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-resource.png" style="width: 23px; margin-right: 5px"/>
              更多常用工具集
            </a>
          </div>
          <a class="simple-web-link bg200 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://tools.pdf24.org/zh/" target="_blank">tools.pdf24 - 免费强大的PDF在线处理工具</a>
          <a class="simple-web-link bg200 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.bejson.com/" target="_blank">Json格式转换</a>
          <a class="simple-web-link bg200 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://tool.lu/html/" target="_blank">Html格式转换</a>
          <a class="simple-web-link bg200 margin-right-bottom-10px" style="font-size: 12px;" href="https://tool.lu/js/"
            target="_blank">Js格式转换</a>
          <a class="simple-web-link bg200 margin-right-bottom-10px" style="font-size: 12px;" href="https://tool.lu/css/"
            target="_blank">Css格式转换</a>
          <a class="simple-web-link bg200 margin-right-bottom-10px" style="font-size: 12px;" href="https://tool.lu/sql/"
            target="_blank">Sql格式转换</a>
          <a class="simple-web-link bg200 margin-right-bottom-10px" style="font-size: 12px;" href="https://tool.lu/xml/"
            target="_blank">Xml格式转换</a>
          <a class="simple-web-link bg201 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.iloveimg.com/zh-cn" target="_blank">在线图片编辑</a>
          <a class="simple-web-link bg201 margin-right-bottom-10px" style="font-size: 12px;"
            href="http://www.zuohaotu.com/cut-image.aspx" target="_blank">图片合并分割</a>
          <a class="simple-web-link bg201 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.onlinedo.cn/img-shuiyin" target="_blank">图片加水印</a>
          <a class="simple-web-link bg201 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.apowersoft.cn/image-watermark-remover" target="_blank">图片去水印</a>
          <a class="simple-web-link bg201 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://convertio.co/zh/" target="_blank">文件格式转换</a>
          <a class="simple-web-link bg201 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.remove.bg/zh" target="_blank">图片背景消除</a>
          <a class="simple-web-link bg201 margin-right-bottom-10px" style="font-size: 12px;" href="https://www.6k6k.cn/"
            target="_blank">AI抠图</a>
          <a class="simple-web-link bg201 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://koutu.gaoding.com/" target="_blank">在线抠图</a>
          <a class="simple-web-link bg201 margin-right-bottom-10px" style="font-size: 12px;" href="https://tinypng.com/"
            target="_blank">图片无损压缩</a>
          <a class="simple-web-link bg202 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://js.design?source=coder&amp;plan=001" target="_blank">即时设计</a>
          <a class="simple-web-link bg202 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.gaoding.com/s/newmedia" target="_blank">搞定设计</a>
          <a class="simple-web-link bg202 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.chuangkit.com/newcustomera" target="_blank">创可贴</a>
          <a class="simple-web-link bg202 margin-right-bottom-10px" style="font-size: 12px;" href="https://818ps.com/"
            target="_blank">图怪兽</a>
          <a class="simple-web-link bg202 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.tutieshi.com/" target="_blank">制作Gif图片</a>
          <a class="simple-web-link bg202 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.designevo.com/cn/logo-maker/" target="_blank">Logo设计</a>
          <a class="simple-web-link bg202 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.tutieshi.com/compose/" target="_blank">Gif之家</a>
          <a class="simple-web-link bg202 margin-right-bottom-10px" style="font-size: 12px;" href="http://www.ico51.cn/"
            target="_blank">生成透明ICO</a>
          <a class="simple-web-link bg203 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.pexels.com/zh-cn/" target="_blank">Pexels</a>
          <a class="simple-web-link bg203 margin-right-bottom-10px" style="font-size: 12px;" href="https://pixabay.com/"
            target="_blank">pixabay</a>
          <a class="simple-web-link bg203 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://unsplash.com/" target="_blank">Unsplash</a>
          <a class="simple-web-link bg203 margin-right-bottom-10px" style="font-size: 12px;" href="https://pxhere.com/"
            target="_blank">Pxhere</a>
          <a class="simple-web-link bg203 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://image.baidu.com/" target="_blank">百度图片</a>
          <a class="simple-web-link bg203 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.fabiaoqing.com/" target="_blank">发表情</a>
          <a class="simple-web-link bg203 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.dbbqb.com/" target="_blank">表情包制作</a>
          <a class="simple-web-link bg203 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.52doutu.cn/" target="_blank">斗图网</a>
          <a class="simple-web-link bg204 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.ilovepdf.com/zh-cn" target="_blank">PDF全能工具</a>
          <a class="simple-web-link bg204 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://lightpdf.com/zh/" target="_blank">Light PDF</a>
          <a class="simple-web-link bg204 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://pdf2doc.com/zh/" target="_blank">PDF2Word</a>
          <a class="simple-web-link bg205 margin-right-bottom-10px" style="font-size: 12px;"
            href="http://tool.liumingye.cn/video/" target="_blank">VIP视频解析</a>
          <a class="simple-web-link bg205 margin-right-bottom-10px" style="font-size: 12px;"
            href="http://data.viggo.site/" target="_blank">数据可视化</a>
          <a class="simple-web-link bg205 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.videvo.net/" target="_blank">视频素材下载</a>
          <a class="simple-web-link bg205 margin-right-bottom-10px" style="font-size: 12px;"
            href="https://www.tukeli.net/" target="_blank">皮卡智能抠图</a>
        </div>
      </div>
      <div class="layout-right-module">
        <!-- 邮件 -->
        <div class="web-page-module  module-youjianzu" id="module-youjianzu">
          <div class="list">
            <a class="item" v-for="item in youjianzuList" :key=item.id :href="item.url" target="_blank">
              <img class="icon" :src="item.icon">
              <p class="title"><b>{{ item.title }}</b></p>
            </a>
          </div>
        </div>
        <!-- 云服务器 -->
        <div class="web-page-module module-cloud-server" id="module-cloud-server">
          <div class="list">
            <a class="item" v-for="item in cloudServerList" :key=item.id :href="item.url" target="_blank">
              <img class="icon" :src="item.icon">
              <p class="title"><b>{{ item.title }}</b></p>
            </a>
          </div>
        </div>
        <a id="技术星球" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-star" id="module-star">
          <a href="https://www.coderutil.com/star/39" target="_blank">
            <button class="module-recommend-container" id="smartbot">
              《 Ai应用开发启蒙课 》 更适合程序员的大模型应用开发好课，紧跟行业大模型应用案例，超越身边人只需这一门课！
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L31 24L19 36" stroke="#fff" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </a>
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-book.png">
              <span class="text">知识社区</span>
            </div>
            <a class="title-right" href="/star" target="_blank">
              <span class="text">更多知识社区</span>
              <svg class="icon" width="16" height="16" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L31 24L19 36" stroke="#000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div class="list" style="" id="recommend-ctc-path">
            <a class="item" v-for="item in starList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img class="img" :src="item.icon">
                <div class="right">
                  <p class="title line1ppp">{{ item.title }}</p>
                  <button class="recommnd-sign">系统推荐</button>
                </div>
              </div>
              <div class="description line2ppp">
                {{ item.desc }}
              </div>
            </a>
          </div>
        </div>
        <a id="热门AI" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-ai" id="module-ai">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-game.png">
              <span class="text">热门AI产品</span>
            </div>
            <a class="title-right" href="/star" target="_blank">
              <span class="text">切换到智能工具导航</span>
              <svg class="icon" width="16" height="16" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L31 24L19 36" stroke="#000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div class="hot-list">
            <a class="item" href="/aigc?tab=koutu" target="_blank">
              智能抠图
            </a>
            <a class="item" href="/aigc?tab=ocr" target="_blank">
              OCR文字识别
            </a>
            <a class="item" href="/aigc?tab=zhengjian" target="_blank">
              智能证件照
            </a>
            <a class="item" href="/aigc?tab=chat" target="_blank">
              AiChat智能对话
            </a>
            <a class="item" href="/aigc?tab=tts" target="_blank">
              文字转语音
            </a>
          </div>
          <div class="hot-list">
            <a class="item" href="https://xinghuo.xfyun.cn/sparkapi?ch=gja" target="_blank"
              style="border: 1px solid #0048ec; color: #0048ec">
              200万tokens免费领
            </a>
            <a class="item" href="/jianlibot" target="_blank" style="border: 1px solid #ffaf46; color: #ffaf46">
              <img
                src="https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_814b78ec2a4344f494f15bd6c24f5c72.png">
              简历Bot
            </a>
            <a class="item" href="https://ai.pptsupermarket.com/index/Y29tcGFueWlkPWNvZGVydXRpbF9jb21fd3hfY29kZXItNzc~"
              target="_blank" style="border: 1px solid #ee5543; color: #ee5543">
              <img
                src="https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_fbbbc750b6a64f41a4a1df82954e5c65.png">
              AI PPT
            </a>
            <a class="item" href="/aigc" target="_blank" style="border: 1px solid #4b66b9; color: #4b66b9">
              ChatGPT/MJ账号代购
            </a>
            <a class="item" href="https://xinghuo.xfyun.cn/sparkapi?ch=gja" target="_blank"
              style="border: 1px solid #0048ec; color: #0048ec">
              <img
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e90880bf5c5147e486c8037a8bc4391d.png">
              AIGOpen
            </a>
          </div>
          <div class="yuan-list">
            <a class="item" href="https://volctrack.com/w/pqzX5CQU" target="_blank">
              <img
                src="https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e127936265ae463fa2a79e72cfdd5b1a.jpg"
                class="icon">
            </a>
            <a class="item" href="https://openai.com/" target="_blank">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9be26e7fda274a3cb441f31e960e7b85.png">
            </a>
            <a class="item" href="https://yiyan.baidu.com/welcome" target="_blank">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_6b96669309cf4ef7b0e4a3895f2fc1c7.png">
            </a>
            <a class="item" href="https://yige.baidu.com/" target="_blank">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_7b68a908622640a2b00f8c4b7a7d7f59.png">
            </a>
            <a class="item" href="https://www.midjourney.com/home" target="_blank">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_3d10e376b04d4daaa0492439c9b43db6.png">
            </a>
            <a class="item" href="https://www.notion.so/product/ai" target="_blank">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_4b2c14d3824c4f2d80ee9f953aa7cf4a.png">
            </a>
            <a class="item" href="https://poly.ai/technology/#" target="_blank">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d71d38e26f784a4f97ac57f1affff7a9.png">
            </a>
            <a class="item" href="https://soundraw.io/" target="_blank">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9d0425554c8b4cea8f656b0ab7fc6fa1.png">
            </a>
            <a class="item" href="https://boomy.com/" target="_blank">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_96df330c87fb4ab6b9299cfc9387c877.png">
            </a>
            <a class="item" href="https://cascadeur.com/" target="_blank">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e3f5c26a2e344e5083b6e1daa0d926f4.png">
            </a>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in aiList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
            <a onclick="drawerTool('程序员盒子 / 更多好用的AI产品', 'more-nav?code=AI', true)">
              <div class="web-page-module-link-card more-card-btn">
                <p class="web-page-module-link-card-title more-card-title" style="color: rgb(0, 122, 255);"><i
                    class="layui-icon"></i> <b>更多AI产品</b></p>
                <p class="web-page-module-link-card-desc more-card-description">更多好用的AI产品合集</p>
              </div>
            </a>
          </div>
          <div style="clear: both"></div>
        </div>
        <a id="学习手册" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-xuexishouce" id="module-xuexishouce">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-book.png">
              <span class="text">常用学习手册</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in xuexishouceList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
            <a onclick="drawerTool('程序员盒子 / 更多学习手册', 'more-nav?code=MANUAL', true)">
              <div class="web-page-module-link-card more-card-btn">
                <p class="web-page-module-link-card-title more-card-title" style="color: rgb(0, 122, 255);"><i
                    class="layui-icon"></i> <b>更多学习手册</b></p>
                <p class="web-page-module-link-card-desc more-card-description">更多学习手册合集</p>
              </div>
            </a>
            <div style="clear:both"></div>
          </div>
        </div>
        <a id="技术社区" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-jishushequ" id="module-jishushequ">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-tec.png">
              <span class="text">技术社区</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in jishushequList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
            <a onclick="drawerTool('程序员盒子 / 更多技术社区', 'more-nav?code=COMMUNITY', true)">
              <div class="web-page-module-link-card more-card-btn">
                <p class="web-page-module-link-card-title more-card-title" style="color: rgb(0, 122, 255);"><i
                    class="layui-icon"></i> <b>更多技术社区</b></p>
                <p class="web-page-module-link-card-desc more-card-description">更多高质量技术社区合集</p>
              </div>
            </a>
          </div>
        </div>
        <a id="技术团队" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-jishutuandui" id="module-jishutuandui">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-team.png">
              <span class="text">技术团队</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in jishutuanduiList" :key="item.id" :href="item.url" target="_blank">
              <img class="icon" :src="item.icon">
              <div>
                <p class="title"><b>{{ item.title }}</b></p>
                <p class="desc">&nbsp;&nbsp;来源：{{ item.desc }}</p>
              </div>
            </a>
            <button class="more">
              <div class="more-content">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36 18L24 30L12 18" stroke="#c7c9cb" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                展开
              </div>
              <div class="more-content">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 30L25 18L37 30" stroke="#c7c9cb" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                收起
              </div>
            </button>
            <div style="clear: both"></div>
          </div>
          <div style="clear: both"></div>
        </div>
        <a id="创业资讯" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module zixun-module" id="module-zixun">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="">
              <span class="text">创业&amp;科技快讯</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in cyZixunList" :key="item.id" :href="item.url" target="_blank">
              <img class="icon" :src="item.icon">
              <div>
                <p class="title"><b>{{ item.title }}</b></p>
                <p class="desc">{{ item.desc }}</p>
              </div>
            </a>
          </div>
        </div>
        <a id="摸鱼划水" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-moyuhuashui" id="module-moyuhuashui">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-game.png">
              <span class="text">摸鱼划水</span>
            </div>
          </div>
          <div class="yuan-list">
            <a class="item" href="https://music.163.com/" target="_blank">
              <img src="https://qiqihao.oss-cn-beijing.aliyuncs.com/coder/hot/wangyiyun.jpeg" class="icon">
            </a>
            <a class="item" href="https://www.douyin.com/" target="_blank">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a481646ee8074818ae9a49792d745b8c.png">
            </a>
            <a class="item" href="https://www.iqiyi.com/" target="_blank">
              <img class="icon" src="https://qiqihao.oss-cn-beijing.aliyuncs.com/coder/hot/aiqiyi.png">
            </a>
            <a class="item" href="https://www.youku.com/" target="_blank">
              <img class="icon" src="https://qiqihao.oss-cn-beijing.aliyuncs.com/coder/hot/youku.jpeg">
            </a>
            <a class="item" href="https://weibo.com/" target="_blank">
              <img class="icon" src="https://qiqihao.oss-cn-beijing.aliyuncs.com/coder/hot/weibo.png">
            </a>
            <a class="item" href="https://www.zhihu.com/" target="_blank">
              <img class="icon" src="https://qiqihao.oss-cn-beijing.aliyuncs.com/coder/hot/zhihu.png">
            </a>
            <a class="item" href="hhttps://www.taobao.com/" target="_blank">
              <img class="icon" src="https://qiqihao.oss-cn-beijing.aliyuncs.com/coder/hot/taobao.png">
            </a>
            <a class="item" href="https://www.tmall.com/" target="_blank">
              <img class="icon" src="https://qiqihao.oss-cn-beijing.aliyuncs.com/coder/hot/tianmao.png">
            </a>
            <a class="item" href="https://www.jd.com/" target="_blank">
              <img class="icon" src="https://qiqihao.oss-cn-beijing.aliyuncs.com/coder/hot/jingdong.png">
            </a>
            <a class="item" href="http://www.dangdang.com/" target="_blank">
              <img class="icon" src="https://qiqihao.oss-cn-beijing.aliyuncs.com/coder/hot/dangdang.png">
            </a>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in moyuhuashuiList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
            <a onclick="drawerTool('程序员盒子 / 更多摸鱼划水', 'more-nav?code=MOYU', true)">
              <div class="web-page-module-link-card more-card-btn">
                <p class="web-page-module-link-card-title more-card-title" style="color: rgb(0, 122, 255);"><i
                    class="layui-icon"></i> <b>更多在线摸鱼</b></p>
                <p class="web-page-module-link-card-desc more-card-description">更多在线摸鱼资源合集</p>
              </div>
            </a>
          </div>
          <div style="clear: both"></div>
        </div>
        <a id="招聘求职" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-zhaopinpingtai" id="module-zhaopinpingtai">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-team.png">
              <span class="text">招聘求职</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in zhaopinpingtaiList" :key="item.id" :href="item.url" target="_blank">
              <img class="icon" :src="item.icon">
              <div>
                <p class="title"><b>{{ item.title }}</b></p>
                <p class="desc">{{ item.desc }}</p>
              </div>
            </a>
          </div>
        </div>
        <a id="协同办公" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-xietongbangong" id="module-xietongbangong">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-work.png">
              <span class="text">协同办公</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in xietongbangongList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
            <a onclick="drawerTool('程序员盒子 / 更多协同办公', 'more-nav?code=WORK', true)">
              <div class="web-page-module-link-card more-card-btn">
                <p class="web-page-module-link-card-title more-card-title" style="color: rgb(0, 122, 255);"><i
                    class="layui-icon"></i> <b>更多协同办公</b></p>
                <p class="web-page-module-link-card-desc more-card-description">更多协同办公资源合集</p>
              </div>
            </a>
          </div>
          <div style="clear: both"></div>
        </div>
        <a id="精品课程" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-jingpinkecheng" id="module-jingpinkecheng">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-jike.png">
              <span class="text">精品课程</span>
            </div>
          </div>
          <div class="list">
            <a class="item" href="http://gk.link/a/10qFS" target="_blank">
              <img class="img"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_429f7d07c086487bb35302d5a1699080.png">
            </a>
            <a class="item" href="http://gk.link/a/10qFT" target="_blank">
              <img class="img"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_f95a2557a92743c9b8ea408e1cfb368d.png">
            </a>
            <a class="item" href="http://gk.link/a/10qFU" target="_blank">
              <img class="img"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_5e6a6724b3c748d8ba2a1da75411e0a8.png">
            </a>
            <a class="item" href="http://gk.link/a/10qFV" target="_blank">
              <img class="img"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9c699a3f763b46729b24dc667c9a6000.png">
            </a>
            <a class="item" href="http://gk.link/a/10qFX" target="_blank">
              <img class="img"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_0754bfa874c345bfa5f053b0d5b67e7a.png">
            </a>
            <a class="item" href="http://gk.link/a/10qFY" target="_blank">
              <img class="img"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_cdcae7b8d0de4400a2771e2defc51106.png">
            </a>
            <a class="item" href="http://gk.link/a/10qG0" target="_blank">
              <img class="img"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b1318234e37e4506ab7cb5407e32753b.png">
            </a>
            <a class="item" href="http://gk.link/a/10qFZ" target="_blank">
              <img class="img"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_5f39b5cf9e8f480ba80d17db1aa48171.png">
            </a>
          </div>
        </div>
        <a id="学习平台" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-xuexipingtai" id="module-xuexipingtai">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-crouse.png">
              <span class="text">学习平台</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in xuexipingtaiList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
            <a onclick="drawerTool('程序员盒子 / 更多学习平台', 'more-nav?code=LEARNING', true)">
              <div class="web-page-module-link-card more-card-btn">
                <p class="web-page-module-link-card-title more-card-title" style="color: rgb(0, 122, 255);"><i
                    class="layui-icon"></i> <b>更多学习平台</b></p>
                <p class="web-page-module-link-card-desc more-card-description">更多学习平台资源合集</p>
              </div>
            </a>
          </div>
          <div style="clear: both"></div>
        </div>
        <a id="头部社区" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-toubushequ" id="module-toubushequ">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-bbs.png">
              <span class="text">头部社区</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in toubushequList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
            <a onclick="drawerTool('程序员盒子 / 更多更多头部社区', 'more-nav?code=HEADCOMMUNITY', true)">
              <div class="web-page-module-link-card more-card-btn">
                <p class="web-page-module-link-card-title more-card-title" style="color: rgb(0, 122, 255);"><i
                    class="layui-icon"></i> <b>更多头部社区</b></p>
                <p class="web-page-module-link-card-desc more-card-description">更多头部社区合集</p>
              </div>
            </a>
          </div>
          <div style="clear: both"></div>
        </div>
        <a id="程序员接单" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-jiedan" id="module-jiedan">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-bbs.png">
              <span class="text">程序员接单</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in jiedanList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
          </div>
        </div>
        <a id="图片素材" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-tupianziyuan" id="module-tupianziyuan">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-image.png">
              <span class="text">图片素材/设计类网站</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in tupianziyuanList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
            <a onclick="drawerTool('程序员盒子 / 更多图片素材设计资源', 'more-nav?code=DESIGN', true)">
              <div class="web-page-module-link-card more-card-btn">
                <p class="web-page-module-link-card-title more-card-title" style="color: rgb(0, 122, 255);"><i
                    class="layui-icon"></i> <b>更多图片素材设计资源</b></p>
                <p class="web-page-module-link-card-desc more-card-description">更多图片素材设计资源合集</p>
              </div>
            </a>
          </div>
        </div>
        <a id="资源推荐" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-ziyuantuijian" id="module-ziyuantuijian">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-resource.png">
              <span class="text">资源下载</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in ziyuantuijianList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
            <a onclick="drawerTool('程序员盒子 / 更多资源下载站', 'more-nav?code=DOWNLOAD', true)">
              <div class="web-page-module-link-card more-card-btn">
                <p class="web-page-module-link-card-title more-card-title" style="color: rgb(0, 122, 255);"><i
                    class="layui-icon"></i> <b>更多资源下载站</b></p>
                <p class="web-page-module-link-card-desc more-card-description">更多资源下载站合集</p>
              </div>
            </a>
          </div>
          <div style="clear: both"></div>
        </div>
        <a id="站长工具" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-zhanzhanggongju" id="module-zhanzhanggongju">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-tool.png">
              <span class="text">站长工具</span>
            </div>
          </div>
          <div class="web-page-module-link list">
            <a class="item" v-for="item in zhanzhanggongjuList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
            <a onclick="drawerTool('程序员盒子 / 更多站长工具', 'more-nav?code=STATIONMASTER', true)">
              <div class="web-page-module-link-card more-card-btn">
                <p class="web-page-module-link-card-title more-card-title" style="color: rgb(0, 122, 255);"><i
                    class="layui-icon"></i> <b>更多站长工具</b></p>
                <p class="web-page-module-link-card-desc more-card-description">更多站长工具合集</p>
              </div>
            </a>
          </div>
          <div style="clear: both"></div>
        </div>
        <a id="Chrome插件" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-chromechajian" id="module-chromechajian">
          <div class="module-title">
            <div class="title-left">
              <img class="icon"
                src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_4167ba77523b4c96bbe5d87865983ba0.png">
              <span class="text">Chrome插件</span>
            </div>
            <a class="title-right" href="/star" target="_blank">
              <span class="text">前往Chrome应用商店</span>
              <svg class="icon" width="16" height="16" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L31 24L19 36" stroke="#000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <p class="module-tip">如果你可以访问Chrome应用商店，建议直接在Chrome应用商店搜索，一键安装更方便。</p>
          <div class="web-page-module-link list" style="margin-top: 10px;">
            <a class="item" v-for="item in chromechajianList" :key="item.id" :href="item.url" target="_blank">
              <div class="top">
                <img class="img" :src="item.icon">
                <div class="right">
                  <div class="title line1ppp">{{ item.title }}</div>
                  <button class="tip" :style="`background-color: ${item.tipBgColor}`">{{ item.tipText }}</button>
                </div>
              </div>
              <div class="desc line2ppp"> {{ item.desc }} </div>
            </a>
          </div>
        </div>
        <a id="资源下载" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-ruisuosi" id="module-ruisuosi">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-subject.png">
              <span class="text">资源下载</span>
            </div>
            <a class="title-right" href="/resource" target="_blank">
              <span class="text">前往瑞索斯资源下载</span>
              <svg class="icon" width="16" height="16" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L31 24L19 36" stroke="#000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div class="web-page-module-link list">
            <div class="item" v-for="item in ruisuosiList" :key="item.id">
              <div class="title hot" :class="item.class">{{ item.title }}</div>
              <div id="hotResources" v-if="item.list.length">
                <a v-for="file in item.list" :key="file.id" :href="file.fileUrl" target="_blank">
                  <div class="item-item">
                    <div class="top">
                      <img class="icon" :src="file.fileIcon">
                      <div class="name line1ppp">{{ file.fileNamn }}</div>
                    </div>
                    <div class="bottom">
                      <div class="left">
                        <img class="avatar"
                          src="http://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_bc8f8e6c9ca74a7ba6c18b36e4e800f6.jpeg?x-oss-process=image/resize,m_fill,w_30,h_30">
                        <span class="username">{{ file.userName }}</span>
                      </div>
                      <span>{{ file.upTime }} 上传</span>
                      <span>{{ file.downloadCount }} 下载</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
        <a id="常用下载" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-ruanjianxiazai" id="module-ruanjianxiazai">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-app.png">
              <span class="text">常用软件下载</span>
            </div>
          </div>
          <div class="tabs">
            <button class="tab tab-select" id="1001">后端</button>
            <button class="tab" id="1002">前端</button>
            <button class="tab" id="1003">产品</button>
            <button class="tab" id="1005">UE</button>
            <button class="tab" id="1006">UI</button>
            <button class="tab" id="1007">测试</button>
            <button class="tab" id="1008">运维</button>
            <button class="tab" id="1009">运营</button>
            <button class="tab" id="1010">其他</button>
          </div>
          <div class="tab-content list isShowTab" id="tab-content-1001">
            <a class="item" v-for="item in ruanjianxiazaiList" :key=item.id :href="item.url" target="_blank">
              <div class="top">
                <img :src="item.icon" class="icon">
                <p class="title"><b>{{ item.title }}</b></p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </a>
          </div>
          <div class="tab-content" id="tab-content-1002">暂无更多数据</div>
          <div class="tab-content" id="tab-content-1003">暂无更多数据</div>
          <div class="tab-content" id="tab-content-1004">暂无更多数据</div>
          <div class="tab-content" id="tab-content-1005">暂无更多数据</div>
          <div class="tab-content" id="tab-content-1006">暂无更多数据</div>
          <div class="tab-content" id="tab-content-1007">暂无更多数据</div>
          <div class="tab-content" id="tab-content-1008">暂无更多数据</div>
          <div class="tab-content" id="tab-content-1009">暂无更多数据</div>
          <div class="tab-content" id="tab-content-1010">暂无更多数据</div>
          <div class="tab-content" id="tab-content-1011">暂无更多数据</div>
          <div class="tab-content" id="tab-content-1012">暂无更多数据</div>
          <div style="clear: both"></div>
        </div>
        <a id="推荐书籍" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-jishushuji" id="module-jishushuji">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-book.png">
              <span class="text">技术书籍推荐</span>
            </div>
          </div>
          <div class="tabs">
            <button class="tab tab-select" id="1001">后端研发</button>
            <button class="tab" id="1002">前端研发</button>
            <button class="tab" id="1003">产品经理</button>
            <button class="tab" id="1005">大数据</button>
            <button class="tab" id="1006">架构</button>
            <button class="tab" id="1007">UE</button>
            <button class="tab" id="1008">运营</button>
            <button class="tab" id="1010">其他</button>
          </div>
          <div class="tab-content isShowTab" id="tab-book-content-10001">
            <a href="https://union-click.jd.com/jdc?e=&amp;p=AyIGZRprFQMTA1wbXBAyVlgNRQQlW1dCFFlQCxxKQgFHRE5XDVULR0UVAxMDXBtcEB1LQglGaxwHYHsvbidJYk5fS1AZb3VFYVR7HkMOHjdQG1oUAxIGVxtdJQITBlYfWx0GFwZlK1sUMkRpVRpaFAMTAlQfWCUAEwZWE1kXAxoCZRtcFQsUBVQTXxADFgVlHFscMklSOxxeHFFBAgcdXkEBEwJlK1sUAxYOVRxeJQEiN2UbaxYyUGlUSwtHUBJSUUkMEVEXAgVIUxJSEwVWGVwdB0EPVh1aEjIQBlQfUg%3D%3D"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t2191/111/699154754/198998/32d7bfe0/5624b582Nbc01af5b.jpg">
            </a>
            <a href="https://union-click.jd.com/jdc?e=&amp;p=AyIGZRprFQIVB1cbXxYyVlgNRQQlW1dCFFlQCxxKQgFHRE5XDVULR0UVAhUHVxtfFh1LQglGa1xmdHwsRlhnZ2JfEB8uRUZsfVF7P3UOHjdQG1oUAxIGVxtdJQITBlYfWx0GFwZlK1sUMkRpVRpaFAMTAlUbWyUAEwZWE1kXAxoCZRtcFQsUBVUSWhEFEANlHFscMklSOxxeHFFBAgcdXkEBEwJlK1sVBRIFVR9YJQEiN2UbaxYyUGlXGlMQUUEABxlTEwoXBFRMC0YHRwRUTgwcBhNUUR5bRjIQBlQfUg%3D%3D"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t550/60/1238908075/138279/9d7e14ac/54ab81e8Nee7312f4.jpg">
            </a>
            <a href="https://union-click.jd.com/jdc?e=&amp;p=AyIGZRprFQEXBFQTXBQyVlgNRQQlW1dCFFlQCxxKQgFHRE5XDVULR0UVARcEVBNcFB1LQglGa21hFFojBT0VYFtPXXsFanlQRwdoKGUOHjdUK1sUAxEDVRNfEAMiN1Uca0NsEgZUGloUBxMDVitaJQIVB1wdWRUCFgNXGV4lBRIOZUAOewUXDgZIXkcEF1NWGl4lMiIEZStrFTIRNxd1UhdWQgNXGwxHARtXUB1aHQsSBl1LUxNXFlMHGAwXBRM3VxpaEQs%3D"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t24313/175/2545740156/263813/ada1e94/5b84b2c5N9429c93a.jpg">
            </a>
            <a href="https://union-click.jd.com/jdc?e=&amp;p=AyIGZRprFQIRA1YZWBIyVlgNRQQlW1dCFFlQCxxKQgFHRE5XDVULR0UVAhEDVhlYEh1LQglGa2N9VX1ceDl3YUBxKWYrfWBwBS1LEGUOHjdQG1oUAxIGVxtdJQITBlYfWx0GFwZlK1sUMkRpVRpaFAMTAlQfWCUAEwZWE1kXAxoCZRtcFQsUBVUeWBMLFARlHFscMklSOxxeHFFBAgcdXkEBEwJlK1sVARYEVxhcJQEiN2UbaxYyUGkAHAsQUEEABRMOFwIXA1ZIU0ALRVRVGg4cBkIFAhldEjIQBlQfUg%3D%3D"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/g12/M00/0D/11/rBEQYFGsbu8IAAAAAAXacET4JwkAACpJgP5a54ABdqI349.jpg">
            </a>
            <a href="https://union-click.jd.com/jdc?e=&amp;p=AyIGZRprFQIUD1UcWhMyVlgNRQQlW1dCFFlQCxxKQgFHRE5XDVULR0UVAhQPVRxaEx1LQglGa1ZcbkQseA0RYnJbLEgYQ1VLDi9%2BK2UOHjdQG1oUAxIGVxtdJQITBlYfWx0GFwZlK1sUMkRpVRpaFAMTAlEcXCUAEwZWE1kXAxoCZRtcFQsUBVUYXhQBFQBlHFscMklSOxxeHFFBAgcdXkEBEwJlK1sVBBoHUhpdJQEiN2UbaxYyUGlTTFlGVxYOAE5aFwEXD1BJC0cAGw5TSQlBBEcPUBNSRTIQBlQfUg%3D%3D"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/163349/35/2339/236309/60000cc8E4d7a7dfd/2f5effce029df54b.jpg">
            </a>
            <a href="https://union-click.jd.com/jdc?e=&amp;p=AyIGZRprFQERAVQYUxEyVlgNRQQlW1dCFFlQCxxKQgFHRE5XDVULR0UVAREBVBhTER1LQglGa1VUc2AuZBt1YnZDV24eVFUMAEtgPmUOHjdQG1oUAxIGVxtdJQITBlYfWx0GFwZlK1sUMkRpVRpaFAMTAlEcXCUAEwZWE1kXAxoCZRtcFQsUBVUZWRAHFwJlHFscMklSOxxeHFFBAgcdXkEBEwJlK1sWARQGVhNfJQEiN2UbaxYyUGlVGF5HChUAAEsLEAQXUgIcCBEAFAVSGwgXChMCAkxbEzIQBlQfUg%3D%3D"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t12697/94/2641609326/220339/6810c63b/5a4642faNce206c28.jpg">
            </a>
            <a href="https://union-click.jd.com/jdc?e=&amp;p=AyIGZRprFQEVBFYSWB0yVlgNRQQlW1dCFFlQCxxKQgFHRE5XDVULR0UVARUEVhJYHR1LQglGa25DVUAWclxtZ1JhAU4HE0J7dShoL2UOHjdQG1oUAxIGVxtdJQITBlYfWx0GFwZlK1sUMkRpVRpaFAMTAlEcXCUAEwZWE1kXAxoCZRtcFQsUBVUZXBIHEAZlHFscMklSOxxeHFFBAgcdXkEBEwJlK1sWBREEXBhTJQEiN2UbaxYyUGlRGFkVCxoCUx5fHQQXUwUYU0FXGgZVEl9FUkUOAkxaHTIQBlQfUg%3D%3D"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/107693/6/7149/161374/5e5786c9E1bb744ef/f9a64ab20c9228ef.jpg">
            </a>
            <a href="https://union-click.jd.com/jdc?e=&amp;p=AyIGZRprFQEbBVMaWBIyVlgNRQQlW1dCFFlQCxxKQgFHRE5XDVULR0UVARsFUxpYEh1LQglGa0MLV2wFHgJ1YUEAT306SAdLZTQSImUOHjdQG1oUAxIGVxtdJQITBlYfWx0GFwZlK1sUMkRpVRpaFAMTAlEcXCUAEwZWE1kXAxoCZRtcFQsUBVUZUxYEFARlHFscMklSOxxeHFFBAgcdXkEBEwJlK1sWCxABVBhcJQEiN2UbaxYyUGlXS1xFURAEBR9dRlIXAABIUxcAEAFcE1xGAhpVUU9SEDIQBlQfUg%3D%3D"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/114250/24/446/133307/5e8c860aE8441fad4/8ab91b7572a6b1d5.jpg">
            </a>
            <a href="https://union-click.jd.com/jdc?e=&amp;p=AyIGZRtaEAYUBFYYXRUyFQNcE1MXChcFXRxrUV1KWQorAlBHU0VeBUVNR0ZbSkAOClBMW0scXxwKGgVdHlkdBQ1eEEcGJRxiYFRCKGZFcgFPWx9IQmIBM2Y%2FZlQeC2UeWxQDEwdUGVsTMhIGVBhfFQoWAlQraxUDIkY7ElgUARU3VxpaFgoQBVQTXiUCFQdcHVkVBRsBUhxeJQUSDmVADnsFFw4GSF5HBBdTVhpeJTIVA1wTUxcKFwVdHGsWMiI3VStYJUB8BVEcDkICEVNVHVNHB0AHVxNTQQIaBgJLDkYCFwJTTA4lABMGURI%3D"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/142421/36/3385/96475/5f16a0efE0d6203b1/e8e05d56217dfcb0.jpg">
            </a>
            <a href="https://union-click.jd.com/jdc?e=&amp;p=AyIGZRprFQEVBFcfUhwyVlgNRQQlW1dCFFlQCxxKQgFHRE5XDVULR0UVARUEVx9SHB1LQglGa1VVER0TYBMRZ0xfPGMdYHZbWi9tU2UOHjdQG1oUAxIGVxtdJQITBlYfWx0GFwZlK1sUMkRpVRpaFAMTAlQfWCUAEwZWE1kXAxoCZRtcFQsUBVUdXxEHFgdlHFscMklSOxxeHFFBAgcdXkEBEwJlK1sWBREFURJSJQEiN2UbaxYyUGlST1IQAxNUVhteEVUXU1cfCxBXRw9TGQ4UVxBXV09bFDIQBlQfUg%3D%3D"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/82087/19/1517/147822/5cfdc72cE324e523d/855b76d5bdab57d6.jpg">
            </a>
            <a href="https://item.jd.com/11940558.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=0d94fa1482c541918a08896868d76ed5"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t2581/194/1677153664/219489/c904963b/57450e66N724b6160.jpg">
            </a>
            <a href="https://item.jd.com/12607299.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=7357b12cafdd4b1abf81d1b6c6a70456"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/88306/3/4620/259118/5de865cdE6678a233/6193b6435bb973d1.jpg">
            </a>
            <a href="https://item.jd.com/11486101.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=36ab278a10fd4aaeb9dc754f1d162dde"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t205/232/1259726431/185788/d1f006b5/53a8dc4aNacc44a89.jpg">
            </a>
            <a href="https://item.jd.com/12584498.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=251a9f5174e241f6b6d25e97dfffa5a0"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/32715/9/10213/133305/5cad454dEd2081b47/36074d6f094d3353.jpg">
            </a>
          </div>
          <div class="tab-content" id="tab-book-content-10002">
            <a href="https://item.jd.com/12068636.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=ed290353435042aead441af5ce93e54d"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t3640/142/1695345313/491175/474b0f11/582e6f62N531a0ddd.jpg">
            </a>
            <a href="https://item.jd.com/12510935.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=ca348888356b482b90b80e9e282c1adb"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/29898/23/13805/456931/5ca2c8a9Ec11849e4/0a09f5c31c511cb3.jpg">
            </a>
            <a href="https://item.jd.com/11332506.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=c7b7919276ad49d1acf1d34fb4df97c7"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t1885/267/1631684951/147491/9428b493/566f8aeaNfc21b138.jpg">
            </a>
          </div>
          <div class="tab-content" id="tab-book-content-10003">
            <a href="https://item.jd.com/12976672.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=08395426a27c4e91ae489d923f93f4ef"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/139306/40/8751/149379/5f6418deEcce0da13/55c385d66d352842.jpg">
            </a>
            <a href="https://item.jd.com/60087214930.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=218df6019a214d90960007d010d5bdea"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/62749/5/13603/94309/5db2c98bEca5cb7fc/38b7415f0aca283f.jpg">
            </a>
            <a href="https://item.jd.com/12633508.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=639b882ce209495ba060ec184757bbc5"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/39686/11/9697/123064/5d10604cE03465473/acbd8c82d74549fe.jpg">
            </a>
            <a href="https://item.jd.com/12413055.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=b8576e19c387497e88999ea24158b727"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t24343/65/2351920626/72625/4c7e42dc/5b7d3561N9150a4c1.jpg">
            </a>
            <a href="https://item.jd.com/12771376.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=7dc012ccc81e41f78d1ac463525420a0"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/90120/7/4704/139666/5de89639E42275016/326ea6515d8cf588.jpg">
            </a>
            <a href="https://item.jd.com/12512975.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=8d6cc171ca7f49f0b3709d76953b4d95"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/26068/15/15112/126600/5cad4cafE2605a9b0/1b5b85b05dcb8dd6.jpg">
            </a>
            <a href="https://item.jd.com/11118413637.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=5dc4277eff604c21abe81089aa2b995a"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t5743/23/7166966487/51408/959af87d/596ef1e3N952d3332.jpg">
            </a>
          </div>
          <div class="tab-content" id="tab-book-content-10004">
            <a href="https://item.jd.com/12824930.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=08ba9862ff0f464ebd974c112a4968de"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/94163/30/15660/118673/5e7480f3E16bcf3e8/27b8208f1e560829.jpg">
            </a>
            <a href="https://item.jd.com/12114572.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=d24aba0259904cdcb9d8da6791db61a9"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t3184/323/5783816728/134467/e70859a4/587d915bN86a06883.jpg">
            </a>
            <a href="https://item.jd.com/12425746.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=1e4e5088b71246aab8909d0f0085e7cc"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t25348/68/795917200/169925/6cdd186f/5b7d183eN7b00b631.jpg">
            </a>
            <a href="https://item.jd.com/12457215.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=a0eb7364ce124cbe9b3f01771ebed724"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t27496/183/2074539376/466172/d78ee185/5bf67e3bNd97a22b9.jpg">
            </a>
            <a href="https://item.jd.com/11321037.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=d939cda5ba344897913eeaf80daf6327"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/g14/M07/12/0C/rBEhVlJEA5cIAAAAAATKjHh5T5YAADmFAGeS9cABMqk187.jpg">
            </a>
            <a href="https://item.jd.com/12109713.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=4d473565e3ef40bf96d7a81c5ad8c0d6"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t6121/263/3540266534/496787/b714482a/5954aae9N97ad4817.jpg">
            </a>
          </div>
          <div class="tab-content" id="tab-book-content-10005">
            <a href="https://item.jd.com/12848452.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=351b3f592020482b84dc7b27abcfa1c9"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/133668/24/19237/235998/5fcf2adbEaba0e24f/c11d945cd9351817.jpg">
            </a>
            <a href="https://item.jd.com/12566383.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=2f656eb55de84d3786b9fb1a5ee13f81"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/45635/14/8946/147047/5d65c4acE9ab81980/bea180ddbe7557a9.jpg">
            </a>
            <a href="https://item.jd.com/11917800.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=91ce4a7ed22d4fcead3c4d9579235c99"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t5794/124/1972631427/163010/fcb37c8b/592bf16eN6f4608a0.jpg">
            </a>
            <a href="https://item.jd.com/11519010.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=03af883420334585a6e7c5ce6600980b"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t319/189/185826501/329822/44da22c4/54043716Na58b03ca.jpg">
            </a>
            <a href="https://item.jd.com/13061232.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=e0ed9ac5ef834299b0aa38565fa8c589"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/159514/26/4272/315355/6009168cE37cacaad/7b414bb1373b88cb.jpg">
            </a>
            <a href="https://item.jd.com/11973579.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=fbc74609c0bf4a68bb0bfdcf9d458ab6"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t5608/34/1967756979/165511/28eeab4b/592bf16fNe945b34e.jpg">
            </a>
          </div>
          <div class="tab-content" id="tab-book-content-10006">
            <a href="https://item.jd.com/12395880.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=392df9ee5a7449bc8b15827c6b70f1ec"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t22513/77/624600498/69154/47979252/5b39a5c0N780a162f.jpg">
            </a>
            <a href="https://item.jd.com/11937344.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=355fe6ad3ea14c70ba796428ea2c41d6"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t2887/353/1649286870/320286/571aba3c/57457e26N7bb45644.jpg">
            </a>
            <a href="https://item.jd.com/12646439.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=5251ff9be43d4f9488157a77c94a3a72"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/108297/21/13537/189047/5e9ff37eE4dc78bd5/593dbf73f1f4b1e9.jpg">
            </a>
            <a href="https://item.jd.com/12692167.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=45e52ddc279143d79b78ebe67d4637c7"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/137485/17/4408/114343/5f0d3044E8704c549/cd4e2f11811c1aed.jpg">
            </a>
          </div>
          <div class="tab-content" id="tab-book-content-10007">
            <a href="https://item.jd.com/12030614.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=8e3aa49f42a64081abc02bb743ad27ba"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t3211/137/1596632928/278663/e2d8fffa/57d0b123Nc685d518.jpg">
            </a>
            <a href="https://item.jd.com/12876366.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=b9d5c1ec266c48abade6e2c60396a607"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/123914/35/3206/227777/5ecf0c85Ea62667a9/f4c2abc7045eb73a.jpg">
            </a>
            <a href="https://item.jd.com/12374401.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=5ae57bd8e2c94b3da75b537972b13cfd"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t20371/214/1230280089/23026/929812ae/5b238a8aN5094fc97.jpg">
            </a>
            <a href="https://item.jd.com/11948354.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=9f92b391373747f48f1a0ffa68996cb6"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/120673/25/7696/258945/5f193690E3f292586/b0e313a392a7d31b.jpg">
            </a>
            <a href="https://item.jd.com/12321199.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=628978052a814a7ea9167898042103ff"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t18676/105/1490500613/226050/c6daa7c6/5acddd73Nfea5b384.jpg">
            </a>
            <a href="https://item.jd.com/12679277.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=29e500e44d344d8aa3c7de0d205afea1"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/117419/1/10469/268008/5eec8737E8f499404/addc8855593723de.jpg">
            </a>
            <a href="https://item.jd.com/12188002.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=9c547a2569f544c7979acd58718e02a7"
              target="_blank">
              <img src="https://img14.360buyimg.com/n1/jfs/t5506/87/1012597177/197896/f96876a7/590a9c12N7e2e4c4d.jpg">
            </a>
          </div>
          <div class="tab-content" id="tab-book-content-10008">
            <a href="https://item.jd.com/12744922.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=19008817305b428893174df5a57b98aa"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/50577/9/16017/144654/5dd20ecbE552d8e3f/2d075b5b6215c1d7.jpg">
            </a>
            <a href="https://item.jd.com/71254198638.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=10e9af3a60a84cddb97262afa766cbb6"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n0/jfs/t1/125406/39/6223/88182/5efe9a32E1875eb8e/1d30995824c0cbdb.jpg">
            </a>
            <a href="https://item.jd.com/12715627.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=7011476023794486978e39321bb13975"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/120700/28/11023/163661/5f468971E2c9221fd/57402e4e099f7a85.jpg">
            </a>
            <a href="https://item.jd.com/12163054.html?cu=true&amp;utm_source=kong&amp;utm_medium=tuiguang&amp;utm_campaign=t_1002519540_&amp;utm_term=c2208eac046a46a1846e0a9b47226e31"
              target="_blank">
              <img
                src="https://img14.360buyimg.com/n1/jfs/t1/156843/7/8531/131050/6018a703Eea9248f1/8812b420a79738e8.jpg">
            </a>
          </div>
          <div class="more-box">
            <div class="more">
              <span>查看全部专题</span>
              <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L31 24L19 36" stroke="#000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <a id="热门专区" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-remenzhuanqu" id="module-remenzhuanqu">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-subject.png">
              <span class="text">热门专题</span>
            </div>
          </div>
          <div class="web-page-module-link list" id="feed-subjects">
            <a class="item" target="_blank" href="/portal/subject?sid=28">
              <div class="img-box">
                <img class="img"
                  src="http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_90124a7342e64fa9879ed35c16f2fa64.png?x-oss-process=image/resize,m_fill,w_260,h_160">
                <div class="meta"> 共 1 篇文章 </div>
              </div>
              <div class="text">
                <p class="title line1ppp">大语言模型技术分享专栏</p>
                <p class="desc line2ppp">关于大语言模型的深度思考、案例分享、技术实现、技术选型、业务架构等内容资讯分享专栏</p>
              </div>
            </a>
            <a class="item" target="_blank" href="/portal/subject?sid=29">
              <div class="img-box">
                <img class="img"
                  src="https://coderutil.oss-cn-beijing.aliyuncs.com/website/file_33cbaf49e8044e90a57f208c024845d1.png?x-oss-process=image/resize,m_fill,w_260,h_160">
                <div class="meta"> 共 6 篇文章 </div>
              </div>
              <div class="text">
                <p class="title line1ppp">IDEA IntelliJ的永久激活码分享</p>
                <p class="desc line2ppp">IDEA IntelliJ最新永久激活破解教程及激活码分享</p>
              </div>
            </a>
            <a class="item" target="_blank" href="/portal/subject?sid=30">
              <div class="img-box">
                <img class="img"
                  src="http://coderutil.oss-cn-beijing.aliyuncs.com/website/file_73643c5cc8a14285b03f4ea2d39c1a43.png?x-oss-process=image/resize,m_fill,w_260,h_160">
                <div class="meta"> 共 33 篇文章 </div>
              </div>
              <div class="text">
                <p class="title line1ppp">程序员盒子技术团队技术分享</p>
                <p class="desc line2ppp">程序员盒子内部产品设计、技术方案设计、具体代码实现分享专题</p>
              </div>
            </a>
          </div>
          <div class="more-box">
            <div class="more">
              <span>查看全部专题</span>
              <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L31 24L19 36" stroke="#000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <a id="文章推荐" style="scroll-margin-top: 70px;"></a>
        <div class="web-page-module module-wenzhangtuijian" id="module-wenzhangtuijian">
          <div class="module-title">
            <div class="title-left">
              <img class="icon" src="https://coderutil.oss-cn-beijing.aliyuncs.com/static/icon/icon-article.png">
              <span class="text">文章推荐</span>
            </div>
          </div>
          <div class="list" id="recommend-articles">
            <a class="item" v-for="item in 10" :key="item" href="/article?id=320" target="_blank">
              <h2 class="title line1ppp">程序员盒子接口统一返回结构定义</h2>
              <div class="center">
                <div class="left">
                  <p class="desc line2ppp">
                    本文定义了程序员盒子接口的统一返回结构，包括状态码、消息提示和数据体等字段。统一返回结构有助于前端处理和展示接口结果。
                  </p>
                  <p class="other">
                    <span class="username line1ppp">程序员七七</span>
                    <span class="time">2024-04-08 19:20:09</span>
                    <span class="read">247 阅读</span>
                  </p>
                </div>
                <div class="cover-image">
                  <img class="img"
                    src="https://coderutil.oss-cn-beijing.aliyuncs.com/cc/experience/file_5b3fd51377d340f59d1120c53caaa609.png">
                </div>
              </div>
            </a>

          </div>
          <div class="more-box">
            <div class="more">
              <span>查看更多文章</span>
              <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L31 24L19 36" stroke="#000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
.web-page-container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
  --maya-home-box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
  --maya-home-border-solid: 1px solid #fff;
  --maya-home-linear-gradient: linear-gradient(0deg, #fff, #f3f5f8);


  .line1ppp {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }

  .line2ppp {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

}

.web-page-module {
  position: relative;
  margin-bottom: 15px;
  width: 100%;
  min-height: 10px;
  height: auto;
  padding: 20px 15px;
  background-color: white;
  font-size: 14px;
  border-radius: 8px;
  /* box-shadow: 0px 0px 20px rgb(238 242 245 / 80%); */
  background-image: var(--maya-home-linear-gradient);
  border: 2px solid #fff;
  // box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
  box-shadow: var(--maya-home-box-shadow);
}

.layout-left-module {
  position: relative;
  width: 295px;
  min-height: 200px;
  background-color: transparent;

  .layout-left-module-item {
    position: relative;
    height: auto;
    min-height: 100px;
    margin-bottom: 10px;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    /* box-shadow: 0px 0px 20px rgb(238 242 245 / 80%); */
    background-image: var(--maya-home-linear-gradient);
    border: 2px solid #fff;
    box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);

    .layout-left-module-item-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 40px;
      // text-align: left;
      font-weight: 600;
      svg{
        cursor: pointer;
      }
    }
    .api-data{
          font-size: 14px;
        }

    .bbs-jingxuan-item-list {
        position: relative;
        margin: 5px 10px 10px 10px;
        width: 250px;
        height: 73px;
        background-color: transparent;
        border-bottom: 0.2px solid #f6f7fb;



        .bbs-jingxuan-item-content,
        .bbs-jingxuan-item-content-noimg {
          position: relative;
          font-size: 13px;
          line-height: 22px;
          text-align: left;
          width: 250px;
          float: left;
        }

        .bbs-jingxuan-item-content-noimg {
          width: 172px;
        }

        .bbs-jingxuan-item-list-operate-data {
          position: absolute;
          bottom: 5px;
          left: 0px;
          font-size: 12px;
          color: #666;
          text-align: left;
        }

        .bbs-jingxuan-item-img-div {
          position: relative;
          float: right;
          margin-left: 5px;
          height: 60px;
          width: 70px;
          border-radius: 3px;
          overflow: hidden;
          margin-top: 5px;

          .bbs-jingxuan-item-img-div img {
            width: 70px;
          }

          .img-hover {
            cursor: pointer;
            transition: all 0.5s;
          }
        }
      }

    .bg200,
    .bg201,
    .bg202,
    .bg203,
    .bg204,
    .bg205 {
      padding: 5px;
      background-color: #f5f7fd;
      border-radius: 3px;
    }

    .bg201 {
      background-color: #efede8;
    }

    .bg202 {
      background-color: #f5e6e6;
    }

    .bg203 {
      background-color: #d6d6ec;
    }

    .bg204 {
      background-color: #beecbe;
    }

    .bg205 {
      background-color: #eee3e3;
    }

    .margin-right-bottom-10px {
      margin-right: 6px;
      margin-bottom: 7px;
      padding: 2px 5px;
    }

    .simple-web-link {
      position: relative;
      float: left;
      margin-right: 12px;
      color: #232222;
      min-height: 18px;
      line-height: 18px;
    }

    .line1ppp {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;

      .layui-badge {
        height: 18px;
        line-height: 18px;
      }

      .layui-badge,
      .layui-badge-dot,
      .layui-badge-rim {
        position: relative;
        display: inline-block;
        padding: 0 6px;
        font-size: 12px;
        text-align: center;
        background-color: #FF5722;
        color: #fff;
        border-radius: 2px;
      }

      .layui-bg-blue {
        background-color: #1E9FFF !important;
      }

      .layui-bg-orange {
        background-color: #FFB800 !important;
      }

    }

    .adv-tag {
      position: absolute;
      right: 20px;
      bottom: 20px;
      padding: 3px 10px;
      font-size: 12px;
      color: white;
      background-color: black;
      opacity: 0.8;
      border-radius: 3px;
      border: 0px;
    }
  }
}

.layout-right-module {
  position: relative;
  width: 890px;

  // 公共标题 左右布局
  .module-title {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .title-left {
        display: flex;
        align-items: center;
        line-height: 30px;
        text-align: left;
        font-weight: 600;
        margin-top: -5px;
        color: #666;

        .icon {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }

      .title-right {
        display: flex;
        align-items: center;
        padding: 5px 15px;
        border-radius: 20px;
        box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1), -8px -8px 20px 0 #fff;
        background-image: linear-gradient(0deg, #ffffff 0%, #f3f5f8 100%);
        border: 2px solid #fff;
      &:hover {
        box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
        transform: translateY(3px);
      }

        .text {
          font-size: 13px;
          color: #111;
        }

        .icon {
          path {
            stroke: #111;
          }

        }
      }
    }

    .web-page-module-link {
      // 列表更多按钮
      .web-page-module-link-card {
        position: relative;
        padding: 9px;
        background-color: #f5f7fd;
        float: left;
        margin-right: 20px;
        margin-bottom: 10px;
        overflow: hidden;
        min-height: 42px;
        border-radius: 5px;
        background-image: var(--maya-home-linear-gradient);
        border: var(--maya-home-border-solid);
        box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);

        .web-page-module-link-card-title,
        .web-page-module-link-card-desc {
          text-align: left;
          width: 180px;
          font-weight: 400;
          text-indent: 5px;
        }


        .web-page-module-link-card-desc {
          font-size: 11px;
          color: #7c7a7a;
          text-indent: 0px;
          margin-top: 5px;
          text-align: left;
          width: 180px;
          font-weight: 400;
          text-indent: 5px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
      }

    }
}



// 热门菜单
.module-hot-menu {
  display: flex;
  flex-wrap: nowrap;
  gap: 13px;

  .simple-web-link {
    display: flex;
    align-items: center;
  }
}

// 工具
.module-hot-tool {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 10px;

  .normal-tool-card {
    width: 105px;
    text-align: center;
    gap: 3px;
    padding: 8px 5px;
    box-sizing: border-box;
    font-size: 13px;
    border-radius: 50px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    background-image: var(--maya-home-linear-gradient);
    border: var(--maya-home-border-solid);
    box-shadow: var(--maya-home-box-shadow);
    color: #333;
      &:hover {
        box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
      }

    .small-tool-icon {
      width: 15px;
      height: 15px;
      border-radius: 40px;
      margin-right: 5px;
      vertical-align: middle;
    }
  }
}
// 公共样式
.module-youjianzu,
.module-cloud-server,
.module-star,
.module-ai,
.module-xuexishouce,
.module-jishushequ,
.module-xietongbangong,
.module-moyuhuashui,
.module-xuexipingtai,
.module-toubushequ,
.module-jiedan,
.module-tupianziyuan,
.module-ziyuantuijian,
.module-zhanzhanggongju,
.module-chromechajian,
.module-jishutuandui,
.zixun-module,
.module-zhaopinpingtai,
.module-ruanjianxiazai,
.module-jishushuji
{
  .list{
    .item{
      color: #333;
      &:hover {
        box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
        transform: translateY(3px);
      }
    }
  }
}

// 邮件 云服务器
.module-youjianzu,
.module-cloud-server {
  min-height: 50px;
  padding: 10px 15px;

  .list {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    gap: 15px;

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 42px;
      padding: 0 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      border-radius: 30px;
      background-image: var(--maya-home-linear-gradient);
      border: var(--maya-home-border-solid);
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
      
      .icon {
        width: 20px;
        height: 20px;
        border-radius: 999px;
      }

      .title {
        text-indent: 5px;
      }
    }
  }
}

// module-star
.module-star {
  .module-recommend-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 15px;
    font-size: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    color: white;
    background-color: #000;

    &:hover {
      opacity: 0.9;
      box-shadow: 8px 8px 20px 0 rgba(194, 195, 198, 0.4);
    }
  }

  .list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 15px;

    .item {
      position: relative;
      width: 205px;
      height: 100px;
      padding: 5px;
      border-radius: 5px;
      border: 2px solid #fff;
      transition: all 0.2s;
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1), -8px -8px 20px 0 #fff;
      background-image: linear-gradient(0deg, #ffffff 0%, #f3f5f8 100%);

      .top {
        display: flex;

        .img {
          width: 50px;
          height: 50px;
          border-radius: 3px;
        }

        .right {
          margin-left: 8px;

          .title {
            width: 145px;
            height: 25px;
            line-height: 25px;
            font-weight: 500;
            color: #24262c;
          }

          .recommnd-sign {
            padding: 2px 3px;
            color: #127cb6;
            font-weight: 500;
            font-size: 10px;
            border-radius: 3px;
            background-color: #f4f6fd;
          }
        }
      }

      .description {
        width: 190px;
        line-height: 18px;
        font-size: 10px;
        color: #73767a;
      }
    }
  }
}

// module-ai .module-xuexishouce module-jishushequ module-xietongbangong module-moyuhuashui module-xuexipingtai module-toubushequ module-jiedan
// module-tupianziyuan
// module-ziyuantuijian
// module-zhanzhanggongju
.module-ai,
.module-xuexishouce,
.module-jishushequ,
.module-xietongbangong,
.module-moyuhuashui,
.module-xuexipingtai,
.module-toubushequ,
.module-jiedan,
.module-tupianziyuan,
.module-ziyuantuijian,
.module-zhanzhanggongju {
  .hot-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    gap: 15px;

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 15px;
      width: 100%;
      height: 42px;
      line-height: 42px;
      border-radius: 100px;
      font-size: 15px;
      color: #6b778c;
      transition: .3s;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      background-image: var(--maya-home-linear-gradient);
      border: var(--maya-home-border-solid);
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
      &:hover {
        box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
      }

      &:hover {
        cursor: pointer;
        box-shadow: 0px 10px 10px #efefef;
        border: 1px solid #5151fd;
      }

      img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }

  .yuan-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    gap: 15px;

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      width: 65px;
      height: 65px;
      overflow: hidden;
      border-radius: 999px;
      border: var(--maya-home-border-solid);
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
      &:hover {
        box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
      }

      .icon {
        width: 40px;
        height: 40px;
        border-radius: 100px;
        border: 1px solid white;
        padding: 2px;
        box-shadow: 0px 0px 3px #bcbbbb;
      }
    }
  }

  .list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    // grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 15px;

    .item {
      padding: 9px;
      background-color: #f5f7fd;
      overflow: hidden;
      height: 61px;
      border-radius: 5px;
      background-image: var(--maya-home-linear-gradient);
      border: var(--maya-home-border-solid);
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);

      .top {
        display: flex;
      }

      .icon {
        width: 20px;
        height: 20px;
        border-radius: 999px;
      }

      .title,
      .desc {
        text-align: left;
        width: 180px;
        font-weight: 400;
        text-indent: 5px;
      }

      .desc {
        width: 180px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        font-size: 11px;
        color: #7c7a7a;
        text-indent: 0px;
        margin-top: 5px;
      }

    }
  }

}

// module-jingpinkecheng
.module-jingpinkecheng {
  .list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 10px;

    .item {
      border-radius: 8px;
      overflow: hidden;
      height: 88px;

      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        .img {
          transform: scale(1.2);
        }
      }

      .img {
        height: 100%;
        width: 100%;
        transition: all 0.5s ease;
      }
    }

  }
}

// .module-jiedan
.module-jiedan {
  .list {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
}

// module-chromechajian
.module-chromechajian {
  .module-tip {
    padding: 10px;
    ;
    font-size: 13px;
    margin: 10px 0px;
    border-radius: 3px;
    background-color: rgba(221, 162, 60, .1);
    color: #8f661f;
    box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
  }

  .list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 15px;

    .item {
      position: relative;
      height: 125px;
      padding: 5px;
      border: 1px solid #eaeaea;
      border-radius: 5px;
      overflow: hidden;
      font-family: Courier;
      background-image: var(--maya-home-linear-gradient);
      border: 2px solid #fff;
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
      // transition: 0.5s all ease;
      // -webkit-transition: 0.5s all ease;
      // -moz-transition: 0.5s all ease;
      // -o-transition: 0.5s all ease;
      // -ms-transition: 0.5s all ease;

      &:hover {
        // box-shadow: 0 20px 5px -10px #efecec;
        transform: translateY(3px);
      }

      .top {
        display: flex;

        .img {
          width: 50px;
          height: 50px;
          border-radius: 5px;
          overflow: hidden;
        }

        .right {
          margin-left: 10px;
          display: flex;
          flex-direction: column;

          .title {
            // width: 167px;
            line-height: 25px;
            font-size: 16px;
            font-weight: 500;
          }

          .tip {
            width: 50px;
            text-wrap: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: center;
            border: 0px;
            margin-top: 5px;
            font-size: 11px;
            color: white;
            background-color: orangered;
            padding: 2px 5px;
            border-radius: 2px;
            font-weight: 400;
          }
        }

      }

      .desc {
        height: 40px;
        line-height: 22px;
        font-size: 13px;
        color: #696868;
      }
    }
  }
}

// module-remenzhuanqu
.module-remenzhuanqu {
  .list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px;

    .item {
      position: relative;

      .img-box {
        width: 100%;
        height: 160px;
        overflow: hidden;
        position: relative;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:before {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: "";
          transition: all 0.3s ease;
          background-color: rgba(0, 0, 0, .3);
        }

        .img {
          width: 100%;
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.1);
          }
        }

        .meta {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 8px 18px;
          font-size: 12px;
          color: #fff;
        }
      }

      .text {
        padding: 5px;
        margin-top: 10px;

        .title {
          position: relative;
          font-size: 16px;
          line-height: 1.4;
        }

        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, .5);
          padding: 10px 0 0;
        }
      }


    }


  }
}

//module-jishutuandui
// zixun-module
// module-zhaopinpingtai
.module-jishutuandui,
.zixun-module,
.module-zhaopinpingtai {

  .list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 15px;

    .item {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 9px;
      overflow: hidden;
      border: var(--maya-home-border-solid);
      border-radius: 5px;
      background-color: #f5f7fd;
      background-image: var(--maya-home-linear-gradient);
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);

      .icon {
        width: 40px;
        height: 40px;
        border-radius: 100px;
        border: 1px solid white;
        padding: 2px;
        box-shadow: 0px 0px 3px #bcbbbb;
      }

      .title,
      .desc {
        width: 130px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }

      .title {
        text-indent: 5px;
      }

      .desc {
        font-size: 11px;
        color: #7c7a7a;
        margin-top: 5px;
      }
    }

    .more {
      display: flex;
      justify-content: center;
      background-color: transparent;

      .more-content {
        display: flex;
        align-items: center;
        color: #c7c9cb;
      }
    }
  }
}

.module-ruanjianxiazai,
.module-jishushuji {
  .tabs {
    display: flex;
    // justify-content: center;
    gap: 10px;
    margin-top: 10px;

    .tab {
      padding: 2px 7px;
      color: #666;
      font-size: 12px;
      border-radius: 3px;
      background-color: white;

      &:hover {
        background-color: #3c3939;
        color: white;
      }
    }

    .tab-select {
      background-color: #3c3939;
      color: white;
    }
  }

  .tab-content {
    margin-top: 20px;
    display: none;
    min-height: 100px;
  }

  .isShowTab {
    display: grid;
  }
}

// module-ruanjianxiazai
.module-ruanjianxiazai {
  .list {

    // display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 15px;

    .item {
      padding: 9px;
      background-color: #f5f7fd;
      overflow: hidden;
      height: 61px;
      border-radius: 5px;
      background-image: var(--maya-home-linear-gradient);
      border: var(--maya-home-border-solid);
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);

      .top {
        display: flex;
      }

      .icon {
        width: 20px;
        height: 20px;
        border-radius: 999px;
      }

      .title,
      .desc {
        text-align: left;
        width: 180px;
        font-weight: 400;
        text-indent: 5px;
      }

      .desc {
        width: 180px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        font-size: 11px;
        color: #7c7a7a;
        text-indent: 0px;
        margin-top: 5px;
      }

    }
  }
}

// module-jishushuji
.module-jishushuji {

  .tab-content {
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 15px;

    a {
      img {
        height: 100px;
      }
    }
  }

}

//module-ruisuosi
.module-ruisuosi {
  .list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px;
  }

  .item {
    // padding: 50px 10px 20px 10px;
    height: 400px;
    height: 350px;
    width: 256px;
    overflow: hidden;
    margin-right: 15px;
    border: 1px solid whitesmoke;

    .title {
      padding: 8px 50px 8px 20px;
      border-radius: 0px 50px 50px 0px;
      text-align: left;
      color: white;
      opacity: 0.8;
    }

    .item-item {
      width: 250px;
      height: 50px;
      padding: 5px;
      border-radius: 5px;
      // margin-bottom: 5px;

      .top {
        display: flex;
        align-items: center;

        .icon {
          width: 17px;
          height: 17px;
          border-radius: 3px;
          margin-right: 10px;
        }

        .name {
          font-size: 15px;
          line-height: 30px;
          overflow: hidden;
        }
      }

      .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 20px;
        font-size: 12px;
        color: gray;

        .left {
          display: flex;
          align-items: center;
          gap: 5px;

          .avatar {
            width: 15px;
            height: 15px;
            margin-right: 5px;
            border-radius: 20px;
          }

          .username {
            color: #0a5370;
          }
        }

      }
    }

    .hot {
      background: linear-gradient(to right, #e84545, white);
    }

    .vip {
      background: linear-gradient(to right, #7e6bc4, white);
    }

    .book {
      background: linear-gradient(to right, #3490de, white);
    }
  }
}

.module-remenzhuanqu,
.module-wenzhangtuijian,
.module-jishushuji {
  .more-box {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 20px;

    .more {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 25px;
      color: #565656;
      font-size: 12px;
      font-weight: 700;
      border-radius: 100px;
      border: 2px solid #fff;
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1), -8px -8px 20px 0 #fff;
      &:hover {
        box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
        transform: translateY(3px);
      }
    }
  }
}
// module-wenzhangtuijian
.module-wenzhangtuijian {

  .list {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .item {
      border-bottom: 1px solid #f0f2f7;
      padding-bottom: 10px;

      .title {
        line-height: 30px;
        font-weight: 600;
        font-size: 20px;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
          color: #2572ee;
        }
      }

      .center {
        display: flex;
        justify-content: space-between;

        .left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .desc {
            width: 600px;
            height: 42px;
            margin-top: 10px;
            line-height: 1.8;
            color: #666;
            font-size: 13px;
          }

          .other {
            line-height: 20px;
            font-size: 13px;
            color: #666;
            display: flex;
            align-items: center;
            gap: 20px;

            .username {
              max-width: 100px;
            }

            // .time{ }
            // .read{ }
          }
        }

        .cover-image {
          height: 90px;
          width: 150px;
          flex-shrink: 0;
          border-radius: 3px;
          overflow: hidden;

          .img {
            width: 100%;
            height: 100%;
            transition: all 0.5s;

            &:hover {
              transform: scale(1.2);
            }
          }
        }


      }
    }
  }
}
</style>
