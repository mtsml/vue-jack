<template>
  <div class="hello">
    <a href="/">{{ head }}</a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    head: String
  }
}
</script>