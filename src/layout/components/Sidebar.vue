<template>
  <el-menu
    :collapse="true"
    :default-active="activeMenu"
    :text-color="variables.menuText"
    :active-text-color="menuActiveTextColor">
    <sidebar-item
      v-for="(route, index) in routes"
      :key="index"
      :item="route"
      :base-path="route.path"/>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'
import { AppModule } from '../../store/modules/app'
import variables from '../../styles/_variables.scss'

@Component({
    name: 'Sidebar',
    components: {
        SidebarItem
    }
})
export default class extends Vue {
    get routes() {
        return (this.$router as any).options.routes
    }

    get variables() {
        return variables
    }

    get menuActiveTextColor() {
        return variables.menuActiveText
    }

    get activeMenu() {
        const route = this.$route
        const { meta, path } = route
        if (meta.activeMenu) {
            return meta.activeMenu
        }
        return path
    }
}
</script>

<style lang="scss">
</style>
