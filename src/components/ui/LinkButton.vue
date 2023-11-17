<template>
    <a href="">
      <slot></slot>
    </a>
</template>
<script>
export default {
  setup() {
      
  },
}
</script>
<style scoped>
a {
  border: none;
  border-radius: 8px;
  background-color: blue;
  color: white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  width: 6rem;
  text-decoration: none;

}

a:hover {
  text-shadow: 0 0 5px white;
  cursor: pointer;
}

a:visited, a:link {
    border: none;
    border-radius: 8px;
    background-color: blue;
    color: white;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    width: 6rem;
    text-decoration: none;
}

</style>