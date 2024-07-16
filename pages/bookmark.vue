<template>
  <div class="bookmark-container">
    <div class="bookmark-wrapper">
      <div class="time-box">
        <div class="dataTime">{{ dataTime }}</div>
        <div>{{ time }}</div>
      </div>
      <Search v-model="keyword"></Search>
      <div class="tabs-box">
        <div class="tabs-header">
          <div class="tabs-title" :class="{ 'active': activeIndex == index }" v-for="(item, index) in tabsData"
            :key="index" @click="activeIndex = index" @mousemove="activeIndex = index">
            {{ item.title }}
          </div>
        </div>
        <div class="tabs-content">
          <div class="list" v-if="activeIndexData.length">
            <a class="item" v-for="item in activeIndexData" :key="item.id" :href="item.url" target="_blank">
              <img class="item-icon" :src="item.icon"></img>
              <div class="item-title">{{ item.title }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const dataTime = ref('')
const time = ref('')
function getDateInfo() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 月份是从0开始的
  const day = now.getDate();
  const dayOfWeek = now.getDay(); // 星期几
  const daysOfWeek = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
 
  return {
    year,
    month,
    day,
    dayOfWeek: daysOfWeek[dayOfWeek] // 将数字转换为中文星期
  };
}
function getFormattedTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
onMounted(() => {
  const { year,month,day,dayOfWeek} = getDateInfo();
  time.value = `${year} 年 ${month} 月 ${day} 日  ${dayOfWeek}`
  
  setInterval(() => {
    dataTime.value = getFormattedTime();
  }, 1000);
})
const tabsData = ref([
  {
    id: 1,
    title: '常用',
    data: [
      {
        id: 1,
        icon: 'https://bookmarks.i6i8.cn/images/vue.svg',
        url: 'https://cn.vuejs.org/guide/introduction.html',
        title: 'Vue',
      },
      {
        id: 2,
        icon: 'https://bookmarks.i6i8.cn/images/vue.svg',
        url: 'https://router.vuejs.org/zh/guide/',
        title: 'VueRouter',
      },
      {
        id: 3,
        icon: 'https://bookmarks.i6i8.cn/images/uniapp.svg',
        url: 'https://uniapp.dcloud.net.cn/',
        title: 'UniApp',
      },
      {
        id: 4,
        icon: 'https://bookmarks.i6i8.cn/images/nuxt.svg',
        url: 'https://nuxt.com.cn/docs/getting-started/introduction',
        title: 'Nuxt',
      },
      {
        id: 5,
        icon: 'https://bookmarks.i6i8.cn/images/electron.svg',
        url: 'https://www.electronjs.org/zh/docs/latest',
        title: 'Electron',
      },
      {
        id: 6,
        icon: 'https://bookmarks.i6i8.cn/images/yuque.svg',
        url: 'https://www.yuque.com/dashboard',
        title: '语雀',
      },
      {
        id: 7,
        icon: 'https://bookmarks.i6i8.cn/images/youdao.svg',
        url: 'https://fanyi.youdao.com/index.html#/',
        title: '有道翻译',
      },
      {
        id: 8,
        icon: '',
        url: 'https://www.iconfont.cn/home/index',
        title: 'Iconfont',
      },
    ]
  },
  {
    id: 2,
    title: '服务端',
    data: [
      {
        id: 1,
        icon: 'https://bookmarks.i6i8.cn/images/nest.svg',
        url: 'https://nestjs.com/',
        title: 'Nest',
      },
      {
        id: 2,
        icon: 'https://bookmarks.i6i8.cn/images/prisma.svg',
        url: 'https://prisma.yoga/',
        title: 'prisma',
      },
      {
        id: 3,
        icon: '',
        url: '',
        title: 'A组件1',
      },
      {
        id: 4,
        icon: '',
        url: '',
        title: 'A组件1',
      },
      {
        id: 5,
        icon: '',
        url: '',
        title: 'A组件1',
      },
      {
        id: 6,
        icon: '',
        url: '',
        title: 'A组件1',
      },
      {
        id: 7,
        icon: '',
        url: '',
        title: 'A组件1',
      },
      {
        id: 8,
        icon: '',
        url: '',
        title: 'A组件1',
      },
    ]
  },
])
const activeIndex = ref(0)
const activeIndexData = computed(() => {
  let list = []
  if (tabsData.value.length) {
    list = tabsData.value[activeIndex.value].data
  }
  return list
})
const keyword = ref('')
definePageMeta({
  layout: false,
});
</script>

<style scoped lang="scss">
.bookmark-container {
  position: relative;
  // background-image: url(https://dss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/skin/495.jpg?2);
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  background-color: #242424;
  background-color: white;
  height: 100vh;
  width: 100vw;
  margin: 0;
  opacity: 1;
  padding: 0;
  zoom: 1;
  transition: opacity .5s ease 0s;
}

.bookmark-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.time-box{
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dataTime{
    font-size: 55px;
  }
}
.tabs-box {
  margin-top: 10px;
  font-size: 14px;

  .tabs-header {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 15px;

    .tabs-title {
      padding: 8px 5px;
      border-radius: 4px;
      text-align: center;
      cursor: pointer;
      color: #171717;
      background-color: #f6f6f7;
      transition: background-color .15s ease;
      &:hover {
        color: white;
        background-color: black;
      }
    }

    .active {
      color: white;
      background-color: black;
    }
  }

  .tabs-content {
    margin-top: 15px;
    min-height: 500px;

    .list {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 10px;
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 18px;
      cursor: pointer;
      border-radius: 4px;
      color: #171717;
      background-color: #f6f6f7;
      background-color: white;
      border: 1px solid rgba(0,0,0,.08);
      transition: border-color .15s ease;
      &:hover {
        // background-color: #f6f6f7;
        border: 1px solid hsla(0,0%,30%,0.5);
      }

      .item-icon {
        width: 40px;
        height: 40px;
        border-radius: 999px;
      }

      .item-title {
        margin-top: 10px;
      }
    }
  }
}
</style>