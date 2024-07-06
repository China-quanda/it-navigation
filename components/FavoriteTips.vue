<template>
  <div class="FavoriteTips-container">
    <div class="FavoriteTips-wrapper">
      <div class="text">如果您觉得本站有用! 可以按<span style="color: #ff6600">Ctrl+D</span>收藏，或设置成浏览器主页。</div>
      <div class="text">登陆账号，开启永久个人书签收藏同步和便签功能。</div>
      <div class="btns">
        <button>
          <svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8L40 40" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 40L40 8" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          不再提示
        </button>
        <span class="line"></span>
        <button>
          <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="12" r="8" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44" stroke="#000" stroke-width="4"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          账号登陆
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.FavoriteTips-container {
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  transition: All 0.5s ease-in-out;
  -webkit-transition: All 0.5s ease-in-out;
  -moz-transition: All 0.5s ease-in-out;
  -o-transition: All 0.5s ease-in-out;
  background: #fff;

  .FavoriteTips-wrapper {
    width: 100%;
    padding: 15px 0px;
    align-content: center;
  }

  .text {
    font-size: 16px;
    color: #000;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .line {
      display: inline-block;
      width: 1px;
      height: 15px;
      background: #ccc;
    }

    button {
      display: flex;
      align-items: center;
      gap: 3px;
      color: #090909;
      padding: 8px 15px;
      font-size: 14px;
      border-radius: 8px;

      background: #f5f3f3;
      cursor: pointer;
      border: 1px solid #2d2c2c;
      transition: all 0.3s;
    }

    button:hover {
      border: 1px solid white;
      box-shadow: 6px 6px 12px #e6e5e5, -6px -6px 12px #ffffff;
    }

    button:active {
      box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
    }
  }

}
</style>