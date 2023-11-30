<!-- Index.vue -->
<script setup>
import VPTheme from 'doc-theme-323'
import Documate from '@documate/vue'
const { Layout } = VPTheme
</script>
<template>
  <Layout>
    <template #nav-bar-content-before>
      <Documate endpoint="https://38wnp18uy7.us.aircode.run/ask" />
    </template>
    <template #doc-copyright>
      <div style="margin-top: 20px">
        Copyright © 2023 ark.online All Rights Reserved |
        <a href="https://beian.miit.gov.cn/#/">京ICP备18003564号-14</a>
      </div>
    </template>
  </Layout>
</template>
