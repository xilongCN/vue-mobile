<template>
    <div class="home">

    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'home',
    components: {},
    created () {
        this.getData()
    },
    methods: {
        getData () {
            axios.get('/user?ID=12345')
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
