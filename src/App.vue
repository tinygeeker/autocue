<template>
  <el-card>
    <el-row type="flex" justify="center">
      <el-col :span="2">
        <el-menu 
          router
          background-color="#545c64" 
          text-color="#ffffff"
          :default-active="$route.path"
          style="height: 750px;"
        >
          <el-menu-item index="/">
            首页/生成器
          </el-menu-item>
          <!-- <el-menu-item index="/donate">
            打赏/改需求
          </el-menu-item>
          <el-menu-item index="/group">
            交流/进群聊
          </el-menu-item> -->
        </el-menu>
      </el-col>
      <el-col :span="22">
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
</script>

<style scoped>
</style>