<template>
  <div class="app-container">
    <el-row type="flex" justify="center" align="middle">
      <h2>欢迎进交流群</h2>
    </el-row>
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="18" style="display: flex; justify-content: center; align-items: center;">
        <el-image 
          style="width: 100%;"
          :src="require('@/assets/group.jpg')"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Group',
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>