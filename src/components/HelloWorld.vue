<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{children}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>