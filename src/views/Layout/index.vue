<script setup>
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import Home from "@/views/Home/index.vue";
</script>
<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <div>
    <Home></Home>
  </div>
  <LayoutFooter></LayoutFooter>
</template>

<style scoped></style>
