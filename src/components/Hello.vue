<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p>{{ galip }}</p>
    <p v-if="goster">bu kadar uzun {{ galip.length }}</p>
    <button @click="dondert">pişt</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      goster: true,
      galip: 'bu şekilde',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    dondert () {
      this.goster = !this.goster
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
