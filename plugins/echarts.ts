import * as echartsPlugin from 'echarts'
 
export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide:{
          echarts: echartsPlugin
        }
    }
})