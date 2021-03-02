<template>
  <div>
    <section class="main_header_wrapper" justify="center" align="center">
      <v-container style="height: 80%">
        <v-row style="height: 100%" class="main_header mt-16 elevation-10">
          <v-col
            cols="12"
            sm="8"
            md="6"
            class="pl-13 text-left align-self-center"
          >
            <h1 class="accent--text" style="font-size: 6em">Med-Guide</h1>
            <p class="lead font-weight-bold">Your Online Practical Tutor</p>
            <v-btn elevation="2" class="primary white--text rounded-lg"
              >Join now</v-btn
            >
          </v-col>
          <v-col cols="12" sm="8" md="6" class="align-self-center">
            <v-img :src="require('~/assets/images/header_image.svg')" contain />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container class="my-16">
        <v-row>
          <v-col cols="12" md="4" class="text-center">
            <v-img
              :src="require('~/assets/images/icons/learn_icon.svg')"
              width="200"
              class="mx-auto"
            />
            <p class="mt-3 mb-0 font-weight-bold">Learn the latest skills</p>
            <p class="mt-0">More Text</p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-img
              :src="require('~/assets/images/icons/exam_icon.svg')"
              width="200"
              class="text-center mx-auto"
            />
            <p class="mt-3 mb-0 font-weight-bold">Prepare for exams</p>
            <p class="mt-0">More Text</p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-img
              :src="require('~/assets/images/icons/improve_icon.svg')"
              width="200"
              class="text-center mx-auto"
            />
            <p class="mt-3 mb-0 font-weight-bold">Improve your Career</p>
            <p class="mt-0">More Text</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style scoped>
.main_header_wrapper {
  width: 100%;
  height: 100vh;
  background-image: url('~/assets/images/header_background_image.png');
}
.main_header {
  background: rgba(255, 255, 255, 0.82);
  border-radius: 16px;
}
.main_header * {
  opacity: 1 !important;
}
</style>
