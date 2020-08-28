<template>
  <client-only>
    <peta></peta>
  </client-only>
</template>

<script>
import Peta from '~/components/pages/Peta.vue'
export default {
  components: {
    Peta,
  },
  head() {
    return {
      title: 'Peta',
    }
  },
}
</script>
