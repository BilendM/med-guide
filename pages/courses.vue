<template>
  <div>
    <section>
      <v-row>
        <v-col v-for="course in niceCourses" :key="course.id" cols="4">
          <v-card
            :loading="loading"
            class="my-12 mx-6 d-inline-block"
            max-width="370"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="course.media.source_url"></v-img>

            <v-card-title>{{ course.title.rendered }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

              <div>
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="reserve">
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
      loading: false,
      selection: 1,
    }
  },
  computed: {
    niceCourses() {
      return { ...this.$store.state.courses }
    },
  },
  mounted() {
    this.$store.dispatch('getCourses')
  },
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 100)
    },
  },
}
</script>

<style scoped>
/* Card stuff */
</style>
