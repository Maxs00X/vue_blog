<template>
    <div>
        <h1>测试</h1>
        <div v-html="Cdata.content"></div>
        <div><h3>{{Cdata.author}}</h3></div>
        <div><h4>{{Cdata.gtm_create}}</h4></div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    data() {
        return {
            cid: this.$route.params.cid,
            Cdata: [],
        }
    },
    created() {
        this.getContent(this.cid)
    },
    methods: {
        async getContent(cid) {
            console.log(cid)
            const {data: res} = await this.$axios.get('/content/'+cid)
            if(res.code == 200){
                this.Cdata = res.data
            }
        }
    },
}
</script>
<style lang="less" scoped>

</style>