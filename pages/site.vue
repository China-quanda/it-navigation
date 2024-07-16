<template>
  <div class="w1200">
    <div class="info-box">
      <div class="info-left">
        <div class="img-div">
          <img src="https://www.daohangtx.cn/zb_users/upload/2022/05/202205231653304658555884.jpg">
        </div>
        <button class="btn">Go to Website</button>
      </div>
      <div class="info-right">
        <div class="site-title">115资源网 - 专注网络资源快速下载</div>
        <p class="site-desc">爱网络，爱这里。网络人的烟火，熬不尽的网络江湖。专注活动，软件，教程分享！总之就是网络那些事。</p>
        <ul class="site-col">
          <li>
            <span class="label">网址链接：</span>
            <span class="value">http://www.52zywang.com</span>
          </li>
          <li>
            <span class="label">收录时间：</span>
            <span class="value">2022年05月23日</span>
          </li>
          <li>
            <span class="label">所属分类：</span>
            <span class="value">资源</span>
          </li>
          <li>
            <span class="label">今日点击：</span>
            <span class="value">6次</span>
          </li>
          <li>
            <span class="label">本月点击：</span>
            <span class="value">205次</span>
          </li>
          <li>
            <span class="label">累计点击：</span>
            <span class="value">2495次</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="data-chart">
      <div class="section-title">
        <Icon class="icon" name="material-symbols:data-thresholding-outline" size="20"/>
        人气走势
      </div>
    </div>
    <div class="correlation">
      <div class="section-title">
        <Icon class="icon" name="mdi:link-variant-minus" size="20"/>
        相关网站
      </div>
    </div>
    <div class="comment">
      <div class="section-title">
        <Icon class="icon" name="carbon:chat" size="20"/>
        评论
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<style scoped lang="scss">
#__nuxt{
  background-color: #F9F9F9;
}
.w1200{
  width: 1200px;
  margin: 0 auto;
  padding: 15px 0px;
}
.section-title{
  display: flex;
  align-items: center;
}
.info-box{
  display: flex;
  padding: 15px 0px;
  gap:15px;
  background-color: white;
  .info-left{
    .img-div{
      width: 220px;
      height: 160px;
      border: 1px solid #171717;
      border-radius: 4px;
      overflow: hidden;
    }
    .btn{
      width: 100%;
      margin-top: 15px;
      padding: 10px;
      color: white;
      border-radius: 4px;
      background-color: #171717;
    }
  }
  .info-right{
    .site-title{
      font-size: 22px;
      font-weight: 500;
      color: #333;
    }
    .site-desc{
      margin: 15px 0px;
      color: #656060;
    }
    .site-col{
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      font-size: 15px;
      li{
        padding: 10px 0px;
      }
      .label{
        color: #a0a0a0;
      }
      .value{
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>