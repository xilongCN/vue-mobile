<template>
    <div class="main">
        <div class="title"></div>
        <div class="content">
            <scroll :main-data="contentList">
                <ul style="min-height: 100.1%">
                    <li style="width: 100%;height: 50px;border-bottom: 1px solid red;" v-for="(item,index) in contentList" :key="index">{{item}}</li>
                </ul>
            </scroll>
        </div>
    </div>
</template>

<script>
import scroll from '@/components/base/scroll/scroll'
export default {
  name: 'scroll_test',
  components: {
    scroll
  },
  data () {
    return {
      contentList: 10
    }
  }
}
</script>

<style lang="scss" scoped>
    .main{
        position: relative;
        width: 100%;height: 100vh;
        .title{
            position: relative;z-index: 3;
            width: 100%;height: 50px;background-color: aqua;
        }
        .content{
            position: absolute;top: 50px;bottom:0;left: 0;z-index: 2;
            width: 100%;
            /*background-color: red;*/
        }
    }
</style>
