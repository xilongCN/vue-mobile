<template>
    <div class="home">

    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
    name: 'home',
    components: {},
    created () {
        this.getData()
    },
    methods: {
        getData () {
            axios.get(' https://easy-mock.com/mock/5c666d110e565f2def10b686/api/login')
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }
}
</script>
<style lang="scss">
    .test {
        width: 100px;
        height: 100px;
        background-color: aqua;
    }
</style>
