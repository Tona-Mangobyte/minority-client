<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Game Free
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary">Join Game Free</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted, useFetch, useAsync, useContext } from '@nuxtjs/composition-api'

const items = ref(null)

useFetch(() => {
  const { app } = useContext()
  items.value = useAsync(() =>
    app.$http.$get('/freeSelectItemList')
  )
  console.info(items.value)
})

onMounted(() => {
  console.info('======onMounted=======')
})
</script>
