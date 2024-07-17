<template>
  <div class="site-detail">
    <div class="w1200">
      <div class="info-box block-div">
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
      <div class="data-chart block-div">
        <div class="section-title">
          <Icon class="icon" name="material-symbols:data-thresholding-outline" size="20" />
          人气走势
        </div>
        <div class="chart-box">
          <div ref="chartRef" style="width: 100%;height: 280px;"></div>
        </div>
      </div>
      <div class="correlation block-div">
        <div class="section-title">
          <Icon class="icon" name="mdi:link-variant-minus" size="20" />
          相关网站
        </div>
        <div class="module-zhaopinpingtai">
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
      </div>
      <div class="comment block-div">
        <div class="section-title">
          <Icon class="icon" name="carbon:chat" size="20" />
          评论 33
        </div>
        <div class="comment-form comment-editor">
          <div class="content">
            <div class="avatar-box">
              <img class="avatar-img"
                src="https://p3-passport.byteacctimg.com/img/user-avatar/cc2ab391aff2acdcca2a54156423fbda~50x50.awebp"
                loading="lazy">
            </div>
            <div class="form-box">
              <div class="input-box" :class="{ 'focused': isFocus }">
                <div class="rich-input" :class="{ 'empty': !content }" @input="updateContent" @blur="isFocus = false"
                  @focus="isFocus = true" contenteditable spellcheck="false" placeholder="平等表达，友善交流"
                  @keydown="handleSubmit"></div>
                <div class="action-box">
                  <div class="emoji-container emoji-btn">
                    <div class="emoji-box btn">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8.00002 0.666504C12.0501 0.666504 15.3334 3.94975 15.3334 7.99984C15.3334 12.0499 12.0501 15.3332 8.00002 15.3332C3.94993 15.3332 0.666687 12.0499 0.666687 7.99984C0.666687 3.94975 3.94993 0.666504 8.00002 0.666504ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.6667 5.66667V7.66667H9.33333V5.66667H10.6667ZM6.66667 5.66667V7.66667H5.33333V5.66667H6.66667ZM10.0767 9.33333H11.0495C11.1804 9.33333 11.2866 9.43951 11.2866 9.57048C11.2866 9.60754 11.2779 9.64409 11.2612 9.67718L11.244 9.71053C10.6294 10.8739 9.40726 11.6667 7.99998 11.6667C6.61523 11.6667 5.40977 10.8991 4.7859 9.76612L4.73786 9.67593C4.67845 9.56052 4.72385 9.4188 4.83926 9.35939C4.87253 9.34226 4.90941 9.33333 4.94683 9.33333H5.92347C6.02396 9.33332 6.11908 9.37865 6.18238 9.4567C6.26207 9.55496 6.32833 9.62955 6.38117 9.68046C6.80074 10.0847 7.37133 10.3333 7.99998 10.3333C8.63289 10.3333 9.20694 10.0814 9.62728 9.67224C9.67791 9.62296 9.74135 9.55121 9.8176 9.45698C9.88089 9.37877 9.97611 9.33333 10.0767 9.33333Z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div class="image-btn btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                      class="icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M14 1.3335C14.3514 1.3335 14.6394 1.60546 14.6648 1.95041L14.6666 2.00016V14.0002C14.6666 14.3516 14.3947 14.6396 14.0497 14.665L14 14.6668H1.99998C1.64853 14.6668 1.36059 14.3949 1.33514 14.0499L1.33331 14.0002V2.00016C1.33331 1.64871 1.60527 1.36077 1.95023 1.33532L1.99998 1.3335H14ZM13.3333 2.66618H2.66664V13.3328H13.3333V2.66618ZM11.9219 6.7879C11.9719 6.83791 12 6.90574 12 6.97647V11.7993C12 11.9098 11.9104 11.9993 11.8 11.9993H6.81615C6.7975 11.9993 6.77945 11.9968 6.76232 11.992L3.91042 11.9847C3.79996 11.9844 3.71063 11.8947 3.7109 11.7842C3.71102 11.7313 3.73209 11.6807 3.76948 11.6433L6.52468 8.88807C6.62882 8.78393 6.79766 8.78393 6.9018 8.88807L8.17297 10.1593L11.5447 6.7879C11.6489 6.68376 11.8177 6.68376 11.9219 6.7879ZM5.99997 3.99951V5.99951H3.99997V3.99951H5.99997Z">
                      </path>
                    </svg>
                  </div>
                  <div style="flex: 1 1 0%;"></div>
                  <div class="text-count-wrapper">
                    <div class="text-count">
                      <span class="text-count-real">{{ content.length }}</span>
                      <span class="text-count-limit"> / {{ contentMaxLength }}</span>
                    </div>
                    <span class="count-info">
                      <div class="byte-tooltip">
                        <span>标点符号、链接等不计算在有效字数内</span>
                        <div class="popper__arrow"></div>
                      </div>
                      <span class="byte-tooltip__wrapper">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg" class="info-icon">
                          <g>
                            <path
                              d="M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27209 14.75 1.25 11.7279 1.25 8C1.25 4.27209 4.27209 1.25 8 1.25C11.7279 1.25 14.75 4.27209 14.75 8Z"
                              stroke-width="1.25"></path>
                            <path
                              d="M8.00216 9.875L7.99976 9.5C7.99976 8.375 9.12476 8 9.79203 7.09914C10.4593 6.19828 9.6081 4.625 7.9953 4.625C6.49008 4.625 5.97697 5.58054 5.97461 6.31764V6.49197"
                              stroke-width="1.25"></path>
                            <path d="M8.00195 10.625V12.1279" stroke-width="1.25"></path>
                          </g>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div class="submit">
                    <span>
                      <div class="byte-tooltip byte-tooltip--dark" x-placement="top">
                        ⌘ + Enter
                        <div class="popper__arrow" style="left: 0px;"></div>
                      </div>
                      <span class="byte-tooltip__wrapper">
                        <button :disabled="content.length <= 0" class="submit-btn" :class="{ 'active': content.length }"
                          @click="handleSubmit('submit')">
                          发送 </button>
                      </span>
                    </span>
                  </div>
                </div>
                <input type="file" style="display: none;">
              </div>
            </div>
          </div>
        </div>
        <div class="comment-list" v-if="commentList.length">list</div>
        <div class="comment-empty" v-else>
          <div class="img-empty-wrap">
            <img class="img-empty" src="@/assets/images/empty/no_comment.png">
          </div>
          <div class="description">暂无评论数据</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const commentList = ref([])
const isFocus = ref(false)
const contentMaxLength = 1000;
const content = ref('')
function updateContent(event: Event) {
  if (content.value.length >= contentMaxLength) {
    return console.log(`输入的文字大于${contentMaxLength}个字符`)
  }
  console.log('event', event)
  content.value = ((event.target as HTMLInputElement).innerHTML).trim();
}
function handleSubmit(event: KeyboardEvent | string) {
  // 快捷键 mac ⌘（command） + Enter || win ctrl + Enter
  if (typeof event === 'string' || event.key === 'Enter' && event.metaKey || event.ctrlKey) {
    console.log('handleSubmit')
    isFocus.value = false;
  }
}

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

const { $echarts } = useNuxtApp()

const chartRef = ref<HTMLElement>()

onMounted(() => {
  console.log($echarts)
  const myChart = $echarts.init(chartRef.value!);

  const option = {
    backgroundColor: '#fff',//取消背景删除
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      type: 'category',
      itemStyle: {
        borderColor: 'black',
        color: 'black'
      },
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          show: true,
          color: '#1AC9FF',
          fontSize: '12'
        }
      },
      axisLine: {
        show: false,
        symbol: ['none', 'arrow'],
        symbolSize: [10, 15],
        symbolOffset: [0, 0],
        lineStyle: {
          width: 2,
          color: 'rgba(255,255,255,0.6)'
        }
      },
    },
    yAxis: {
      show: false,
    },
    grid: {
      left: '0',
      top: '0',
      right: '20px',
      bottom: '0',
      containLabel: true
    },
    series: [{
      data: [105, 120, 150, 100, 130, 78, 210],
      name: '',
      type: 'line',
      symbol: 'circle',
      smooth: true,
      symbolSize: 0,//不需要点就设置0
      lineStyle: {
        width: 2,
        type: 'solid'
      },
      itemStyle: {
        borderWidth: 5,
        borderColor: '#1AC9FF',
        color: '#1AC9FF'
      },
      areaStyle: {
        color: '#F4F65B',
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);
          color: new $echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
              offset: 0,
              color: 'rgba(26,201,255,1)'
            },
            {
              offset: 1,
              color: 'rgba(26,201,255,.1)'
            }
            ],
            false
          ),
        }
      }
    }]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})

definePageMeta({
  layout: 'default',
});
</script>

<style scoped lang="scss">
.site-detail {
  padding: 15px 0px;
  background-color: #fbfbfb;
}

.w1200 {
  width: 1200px;
  margin: 0 auto;
  // padding: 15px 0px;
}

.block-div {
  background-color: white;
  padding: 25px;
  margin: 15px 0px;
  border-radius: 5px;
  border: 1px solid #f3f5f8;
  // background-image: linear-gradient(180deg, #fff, #f3f5f8);
  // box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);

}

.section-title {
  display: flex;
  align-items: center;
  color: #333;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;

  .icon {
    margin-right: 3px;
  }
}

.info-box {
  width: 100%;
  display: flex;
  // padding: 15px 0px;
  // gap: 25px;
  margin-top: 0px;
  background-color: white;

  .info-left {
    .img-div {
      width: 220px;
      height: 160px;
      border: 1px solid #171717;
      border-radius: 4px;
      overflow: hidden;
    }

    .btn {
      width: 100%;
      margin-top: 15px;
      padding: 10px;
      color: white;
      border-radius: 4px;
      background-color: #171717;
    }
  }

  .info-right {
    width: 100%;
    margin-left: 25px;

    .site-title {
      font-size: 22px;
      font-weight: 500;
      color: #333;
    }

    .site-desc {
      margin: 15px 0px;
      color: #656060;
    }

    .site-col {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;

      font-size: 15px;

      li {
        cursor: text;
        padding: 10px 0px;
      }

      .label {
        color: #a0a0a0;
      }

      .value {
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}

.correlation {
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
        border: 1px solid #fff;
        border-radius: 5px;
        background-color: #f5f7fd;
        background-image: linear-gradient(0deg, #fff, #f3f5f8);
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
          width: 190px;
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

    .list {
      .item {
        color: #333;

        &:hover {
          box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
          transform: translateY(3px);
        }
      }
    }
  }
}

.comment-form {
  margin-top: 15px;
  display: flex;
  position: relative;
  border-radius: 2px;
  flex-direction: column;

  .content {
    display: flex;
    align-items: flex-start;

    .avatar-box {
      flex: 0 0 auto;

      .avatar-img {
        margin-right: 16px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }

    .form-box {
      flex: 1;

      .input-box {
        display: flex;
        flex-direction: column;
        min-height: 88px;
        font-size: 0;
        transition: all .3s;
        background: #f2f3f5;
        border: 1px solid transparent;
        border-radius: 4px;
        position: relative;

        .rich-input {
          flex: 1;
          max-height: none;
          position: relative;
          padding: 8px 12px;
          color: #515767;
          outline: none;
          box-sizing: border-box;
          line-height: 28px;
          font-size: 16px;
          min-height: 44px;
          max-height: 100px;
          overflow: auto;
        }

        .empty {
          &:before {
            content: attr(placeholder);
            position: absolute;
            pointer-events: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            color: #8a919f;
          }
        }
      }

      .focused {
        min-height: 150px;
        max-height: 300px;
        border-color: #333;
        background: #fff;
      }

      .action-box {
        flex-shrink: 0;
        height: 48px;
        padding: 0 12px 0 6px;
        display: flex;
        align-items: center;

        .emoji-container {
          position: relative;
        }

        .btn {
          .icon {
            fill: #8a919f;
            margin: 0;
            padding: 6px;
            width: 20px;
            height: 20px;
            transition: fill .3s;
            background-repeat: no-repeat;
            background-size: cover;
            cursor: pointer;
          }

          &:hover {
            .icon {
              fill: #333;
            }
          }
        }

        .emoji-btn {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          .emoji-box {
            display: flex;
            align-items: center;
            position: relative;
          }
        }

        .image-btn {
          margin-left: 12px;

          .icon {
            display: block;
          }
        }

        .text-count-wrapper {
          display: flex;
          align-items: center;
          color: #8a919f;
          margin-right: 16px;

          .text-count {
            font-size: 14px;
            font-weight: 400;
            line-height: 28px;
            margin-right: 8px;

            .text-count-real {
              color: #515767;
            }
          }

          .count-info {
            line-height: normal;
            position: relative;
            cursor: pointer;

            &:hover {
              .byte-tooltip {
                display: block !important;
                transform: translate3d(276px, 132px, 0px) !important;
              }
            }

            .test {
              width: 100px;
              padding: 10px;
              border-radius: 4px;
              background-color: black;
              color: white;
            }

            .byte-tooltip {
              display: none;
              transform: translate3d(390px, 76px, 0px);
              position: absolute;
              max-width: none;
              will-change: transform;
              z-index: 1011;
              top: 0px;
              left: 0px;
            }

            .popper__arrow {
              position: absolute;
              left: 110px;
              top: -4px;
              margin-top: 0;
              margin-bottom: 0;
              -webkit-transform: rotate(-45deg);
              -ms-transform: rotate(-45deg);
              transform: rotate(-45deg);
            }
          }

        }

        .submit {
          position: relative;

          .byte-tooltip {
            display: block;
            position: absolute;
            max-width: none;
            will-change: transform;
            z-index: 1012;
            top: 0px;
            left: 0px;
            transform: translate3d(444px, 42px, 0px);

            padding: 12px;
            border-radius: 4px;
            font-size: 12px;
            line-height: 20px;
          }


          .submit-btn {
            border-radius: 4px;
            background: #abcdff;
            height: 32px;
            flex-shrink: 0;
            color: white;
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 60px;
            cursor: no-drop;
          }

          .active {
            background: #1e80ff;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.comment {
  .comment-empty {
    padding: 40px;
    user-select: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .img-empty-wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 8px;

      .img-empty {
        max-width: 250px;
        max-height: 250px;
      }
    }

    .description {
      font-size: 16px;
      font-weight: 400;
      color: #8a919f;
    }
  }
}
</style>