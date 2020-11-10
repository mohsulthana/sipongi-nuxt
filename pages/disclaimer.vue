<template>
    <div class="inner-page">
        <div class="page-desc">
            <b-container>
                <b-row>
                    <b-col md="12">
                        <h3>Disclaimer</h3>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div class="tentang-wrap">
            <b-container>
                <div v-html="data.text">
                </div>
                <div>Last updated : {{data.updated_at}}</div>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'front',
    async fetch() {
        const url = !process.server
        ? `/v1/data/disclaimer`
        : `/api/data/disclaimer`

        await this.$axios
        .$get(url)
        .then((res) => {
            this.data = res
        })
        .catch((err) => {
            if (err.response) {
            const { status, data } = err.response
            if (status === 500) {
                this.$nuxt.error({ statusCode: 500, message: data.message })
            }

            if (status === 404) {
                this.$nuxt.error({ statusCode: 404, message: data.message })
            }
            }
        })
    },
    data() {
        return {
            data: {},
        }
    },
    methods: {
        updateHeader() {
            this.$store.commit('head/innerHeader', true)
        },
        head() {
            return {
            title: 'Disclaimer',
            }
        },
    },
    created() {
        this.$nextTick(function () {
            this.updateHeader()
        })
    },
}
</script>