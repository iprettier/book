<template>
  <button :class="{'btn-info-read':status===true}"><slot></slot></button>
</template>

<script>
export default {
  name: 'BookButton',
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    console.log(props);
  }
}
</script>

<style scoped>
.btn-info-read {
  width: 2.78rem;
  background: #f47983;
  color: #fff;
}
button {
  text-align: center;
  width: 1.82rem;
  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.3rem;
  color: #f47983;
  border: 1px solid #f47983;
  background-color: #fff;
  border-radius: 0.1rem;
  -wekit-border-radius: 0.1rem;
}
</style>