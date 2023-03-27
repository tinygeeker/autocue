<template>
  <el-row type="flex" justify="center" align="middle">
    <el-card shadow="hover" style="width: 95%; border-radius: 4px;">
      <el-row>
        <el-col :span="2">
          <el-menu 
            router
            background-color="#545c64" 
            text-color="#ffffff"
            :default-active="$route.path"
            style="height: 750px;"
          >
              <el-menu-item index="/">
                首页
              </el-menu-item>
              <el-menu-item index="/donate">
                打赏_提需求
              </el-menu-item>
              <el-menu-item index="/group">
                交流_进群聊
              </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="22">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<style>
</style>

<script>
</script>
