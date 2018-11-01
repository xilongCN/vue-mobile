<template>
    <div class="main">
        <div class="title"></div>
        <div class="content">
            <Scroll
                    ref="scroll"
                    :updateData="list"
                    class="scroll-content"
                    @pullingDown="loadRefresh"
                    @pullingUp="loadMore">
                <ul>
                    <li style="width: 100%;height: 50px;border-bottom: 1px solid red" v-for="(item, index) in list" :key="index">{{ item }}</li>
                </ul>
            </Scroll>
        </div>
    </div>
</template>

<script>
import Scroll from 'vue-slim-better-scroll'
import { scrollMixin } from '@/mixins/scroll/scroll-mixin.js'
export default {
    name: 'scroll_test',
    components: {
        Scroll
    },
    data () {
        return {

        }
    },
    mixins: [
        scrollMixin
    ],
    created () {
        this.loadRefresh()
    },
    mounted () {},
    methods: {
    // 滚动到顶部
        scrollToTop () {
            this.$refs.scroll.scrollToTop()
        },
        // 滚动到底部
        scrollToBottom () {
            this.$refs.scroll.scrollToBottom()
        },
        // 模拟一个异步获取列表操作
        getData (page = 1, pageSize = this.pageSize) {
            return new Promise(function (resolve) {
                setTimeout(() => {
                    let listArray = []
                    for (let i = (page - 1) * pageSize; i < page * pageSize; i++) {
                        listArray.push(i)
                    }
                    resolve(listArray)
                }, 2000)
            })
        }
    }
}
</script>
<style>
    .scroll-content{
       top: 0;
    }
</style>
<style lang="scss" scoped>
    .main {
        position: relative;
        width: 100%;
        height: 100vh;
        .title {
            position: relative;
            z-index: 3;
            width: 100%;
            height: 50px;
            background-color: aqua;
        }
        .content {
            position: absolute;
            top: 50px;
            bottom: 0;
            left: 0;
            z-index: 2;
            width: 100%;
        }
    }
</style>
