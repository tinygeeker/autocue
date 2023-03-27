<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'Eyes',
    props: {
        msg: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>