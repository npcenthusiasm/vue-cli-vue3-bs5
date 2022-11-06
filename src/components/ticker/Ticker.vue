<template>
  <div class="ticker-wrap">
    <div class="ticker">
      <p class="ticker__item">這裡是跑馬燈的文字</p>
      <p class="ticker__item">這裡是跑馬燈的文字</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">


.ticker-wrap {
  position: fixed;
  /* bottom: 0; */
  width: 100%;
  overflow: hidden;
  height: 4rem;
  padding-left: 100%;
  box-sizing: content-box;
  background-color: #1a1a1a;
  color: #fafafa;
}

.ticker {
  display: inline-block;
  height: 4rem;
  line-height: 4rem;  
  white-space: nowrap;
  padding-right: 100%;
  box-sizing: content-box;
  animation: ticker 15s linear infinite;


  &__item {
    display: inline-block;
    padding: 0 2rem;
    margin: 0 auto;
  }
}

@keyframes ticker {
  from {
    transform: translateX(0);
    visibility: visible;
  }
  to {
    transform: translateX(-100%);
  }
}
</style>