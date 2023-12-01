<template>
<NavigationBar/>
<router-view/>
<FooterComponent/>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  components: {
    NavigationBar,
    FooterComponent,
  },
};
</script>
