/* eslint-disable prettier/prettier */
export const state = () => ({
    courses: [],
})

export const actions = {
    async getCourses(state) {
        const coursesData = await this.$axios.$get(
            'http://localhost/wp-json/ldlms/v2/sfwd-courses',
            {
                Authorization:
                    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3QiLCJpYXQiOjE2MTUwNTA0OTAsIm5iZiI6MTYxNTA1MDQ5MCwiZXhwIjoxNjE1NjU1MjkwLCJkYXRhIjp7InVzZXIiOnsiaWQiOiI3In19fQ.wAy7C3KwoPTLQXrLYlY7YNJY8jY0OoA-neToJaF0D1o',
            }
        )
        console.log(coursesData);
        for (let i = 0; i < coursesData.length; i++) {
            console.log(i);
            const media = await this.$axios.$get(
                `http://localhost/wp-json/wp/v2/media/${coursesData[i].featured_media}`
            )
            coursesData[i] = Object.assign({}, coursesData[i], {
                media
            });
        }
        state.commit('getCourses', coursesData)
    },
}

export const mutations = {
    getCourses(state, payload) {
        state.courses = payload
    },
}
