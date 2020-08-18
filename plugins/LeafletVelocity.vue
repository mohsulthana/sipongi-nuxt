<template></template>

<script>
import L from 'leaflet'
import 'leaflet-velocity'

export default {
  props: {
    options: {
      type: Object,
      default: function () {
        return {}
      },
    },
    visible: {
      type: Boolean,
      default: function () {
        return true
      },
    },
  },

  data() {
    return {
      mapObject: null,
    }
  },

  watch: {
    options() {
      this.updateLayer()
    },
    visible() {
      this.updateLayer()
    },
  },

  mounted() {
    if (this.options.data.length > 0) {
      this.mapObject = L.velocityLayer(this.options)
      if (this.options) {
        L.DomEvent.on(this.mapObject, this.$listeners)
      }
      if (this.$parent._isMounted) {
        this.deferredMountedTo(this.$parent.mapObject)
      }
    }
  },

  beforeDestroy() {
    this.removeLayer()
  },

  methods: {
    deferredMountedTo(parent) {
      if (this.visible) {
        if (this.options.data.length > 0) {
          this.mapObject.addTo(parent)
        }
      }
    },
    removeLayer() {
      this.$parent.mapObject.removeLayer(this.mapObject)
    },
    updateLayer() {
      this.removeLayer()
      this.mapObject = L.velocityLayer(this.options)
      this.deferredMountedTo(this.$parent.mapObject)
    },
  },
}
</script>
<style lang="scss">
.leaflet-control-velocity {
  color: #fff;
}
</style>
