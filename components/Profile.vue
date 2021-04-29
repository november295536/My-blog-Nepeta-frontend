<template lang="pug">
v-card.profile
  h2 Hi, I'm november295536
  v-divider.divider
  p.introduce
    | 台灣人，現居台北
    br
    | 軟體工程師
    br
    | 很愛買書，看完的比率有超過20％
    br
    | 貓狗通吃
  v-divider.divider
  .personal-links
    h2 Where to find me
    a.link(v-for="linkInfo in links", :href="linkInfo.link")
      img.link-img(:src="linkInfo.img")
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          link: 'https://github.com/november295536',
          img: '/github.png',
        },
        {
          link: 'https://leetcode.com/november295536/',
          img: '/LeetCode.png',
        },
        {
          link: 'https://www.linkedin.com/in/chenghao-lee-0683a2111/',
          img: '/linkedin.png',
        },
        {
          link: 'mailto:peter840606@gmail.com',
          img: '/mail.png',
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.profile
  width: 100%
  padding: 15px
  font-size: 1.2em
.divider
  margin: 10px 0
.link-img
  width: 28px
  height: 28px
  margin-right: 5px
.introduce
  margin-bottom: 10px
</style>
