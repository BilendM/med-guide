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
        <!-- Slider main container -->
        <v-row>
          <v-div>
            <div id="curve" class="card">
              <div class="footer">
                <div class="card_info">
                  <v-card class="mx-auto">
                    <v-list-item three-line>
                      <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <div class="overline">OVERLINE</div>
                        <v-list-item-title class="headline">
                          Headline 5
                        </v-list-item-title>
                        <v-list-item-subtitle
                          >Greyhound divisely hello coldly
                          fonwderfully</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text> Button </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card class="mx-auto">
                    <v-list-item three-line>
                      <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <div class="overline">OVERLINE</div>
                        <v-list-item-title class="headline">
                          Headline 5
                        </v-list-item-title>
                        <v-list-item-subtitle
                          >Greyhound divisely hello coldly
                          fonwderfully</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text> Button </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card class="mx-auto">
                    <v-list-item three-line>
                      <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <div class="overline">OVERLINE</div>
                        <v-list-item-title class="headline">
                          Headline 5
                        </v-list-item-title>
                        <v-list-item-subtitle
                          >Greyhound divisely hello coldly
                          fonwderfully</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text> Button </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>
              </div>
              <div class="card-blur"></div>
            </div>
          </v-div>
        </v-row>

        <div
          v-swiper="swiperOption"
          class="swiper-container w-5/6 ml-auto relative"
          :loadtheme="false"
        >
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- If we need scrollbar -->
          <div class="swiper-scrollbar"></div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

export default {
  name: 'Slider',
  directives: {
    swiper: directive,
  },
  data() {
    return {
      banners: ['adasdasdasd', 'asdasdasd', 'asdasdsaasd'],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
}
</script>

<style scoped>
/* Card stuff */

.card {
  position: relative;
  border-radius: 8px;
  height: 650px;
  width: 320px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-image: url(https://images.pexels.com/photos/5645081/pexels-photo-5645081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 10px -10px black;
  overflow: hidden;
}

.card-blur {
  position: absolute;
  height: 100%;
  width: calc(100% + 1px);
  background-color: black;
  opacity: 0;
  transition: opacity 0.15s ease-in;
}

.card:hover .card-blur {
  opacity: 0.6;
}

.footer {
  z-index: 1;
  position: absolute;
  height: 80%;
  width: 100%;
  bottom: 0;
}

.card_info {
  transform: translateY(240%);
  background: white !important;

  transition: transform 1s cubic-bezier(0.31, 1.21, 0.64, 1.02);
}

.card:hover .card_info {
  transform: translateY(0px);
}

.name {
  font-weight: bolder;
  padding-top: 5px;
}

.job {
  margin-top: 10px;
}
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
