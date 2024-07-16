<template>
  <div class="w-screen h-screen flex justify-center ">
    <div class="tips-container box-border w-150 mx-2 mt-30">
      <img class="tips-img w-35 h10 mb-2"
        src="https://lf-cdn-tos.bytescm.com/obj/static/link_juejin_cn/assets/logo_new.0ec938fb.svg">
      <div class="tips-content border-1px border-coolgray-3 border-solid p-8 rd-1">
        <div class="tips-title text-black text-5 mb-15px">即将离开xx导航，请注意账号财产安全</div>
        <div class="target flex flex-items-center text-gray-7 m-t-2">
          <Icon name="ep:link" class="mr-1" size="20"/>
          {{ target }}
        </div>
        <div class="flex flex-justify-end border-t border-t-coolGray-3 border-t-solid mt-5 pt-5">
          <button
            class="text-3 px-6 py-2 rd-1 border-1 border-solid border-b-dark bg-black text-white hover:bg-dark-5 no-underline" @click="goTo">继续访问</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
// 离开xxxx安全提示
const route = useRoute()
const target = ref('')
target.value = route.query.target as string

function goTo(){
  window.open(target.value,'_blank')
}
</script>