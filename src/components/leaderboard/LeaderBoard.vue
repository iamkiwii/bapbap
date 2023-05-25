<template>
    <div>

    </div>
</template>

<script setup>
import axios from 'axios'

</script>

<script>

export default {
    data() {
        return {
        }
    },
    mounted() {
        axios({
            method: 'get',
            url: `https://bapbap.gg/api/leaderboards/all/7?page=0`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
            },
            data: null,
            reponseType: null,
            timeout: 0,
            params: null
        })
    }
}


</script>


<style lang="scss" scoped></style>