<template>
  <div class="quick-menus">
    <a href="#技术星球"><button>星球</button></a>
    <a href="#热门AI"><button>AI</button></a>
    <a href="#学习手册"><button>手册</button></a>
    <a href="#技术社区"><button>社区</button></a>
    <a href="#技术团队"><button>团队</button></a>
    <a href="#创业资讯"><button>创业</button></a>
    <a href="#摸鱼划水"><button>摸鱼</button></a>
    <a href="#招聘求职"><button>求职</button></a>
    <a href="#协同办公"><button>办公</button></a>
    <a href="#精品课程"><button>课程</button></a>
    <a href="#学习平台"><button>学习</button></a>
    <a href="#头部社区"><button>社区</button></a>
    <a href="#图片素材"><button>图片</button></a>
    <a href="#资源推荐"><button>资源</button></a>
    <a href="#站长工具"><button>站长</button></a>
    <a href="#Chrome插件"><button>插件</button></a>
    <a href="#常用下载"><button>下载</button></a>
    <a href="#常用下载"><button>瑞索斯</button></a>
    <a href="#推荐书籍"><button>书籍</button></a>
    <a href="#文章博文"><button>文章</button></a>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.quick-menus {
  position: fixed;
  left: calc((100% - 1200px) / 2 - 75px);
  width: 60px;
  // height: 450px;
  top: 200px;
  background-color: white;
  padding: 5px;
  border-radius: 8px;
  overflow: hidden;
  /* box-shadow: 0px 0px 20px rgb(238 242 245 / 80%); */
  box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
  border-top: 3px solid #007AFF;

  button {
    width: 50px;
    height: 32px;
    cursor: pointer;
    border-radius: 3px;
    background-color: white;
    color: #666;
    font-size: 13px;
    &:hover {
      color: #111;
    }
  }
}
</style>