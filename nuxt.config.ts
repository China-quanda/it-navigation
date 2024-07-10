// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    baseURL: '/it-navigation/',
  },
  devtools: { enabled: true },
  // 环境变量和私有令牌 
  // https://nuxt.com.cn/docs/getting-started/configuration#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%92%8C%E7%A7%81%E6%9C%89%E4%BB%A4%E7%89%8C
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: '123',
    // public中的键也可以在客户端使用
    public: {
      apiBase: '/api'
    }
  },
  // CSS 属性 全局样式导入
  // https://nuxt.com.cn/docs/getting-started/styling#css-%E5%B1%9E%E6%80%A7
  css: ['~/assets/styles/main.css','~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        // 全局变量导入
        // https://nuxt.com.cn/docs/getting-started/assets#%E5%85%A8%E5%B1%80%E6%A0%B7%E5%BC%8F%E5%AF%BC%E5%85%A5
        scss: {
          additionalData: '@use "@/assets/styles/_colors.scss" as *;'
        }
      }
    }
  }
})
