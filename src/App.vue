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
          <el-menu-item index="/donate">
            打赏/改需求
          </el-menu-item>
          <el-menu-item index="/group">
            交流/进群聊
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="22">
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-card>

  <div id="kefu">
    <el-popover width="200" placement="left-end" trigger="hover">
      <p style="text-align: center;"><b>扫一扫联系飞兔小哥</b></p>
      <img src="./assets/wechat.jpg" style="width: 100%;" />
      <template #reference>
        <el-icon>
          <User />
        </el-icon>
      </template>
    </el-popover>
    <el-popover width="200" placement="left-end" trigger="hover">
      <p style="text-align: center;"><b>扫一扫关注微信公众号</b></p>
      <p style="text-align: center;">编程自学 技能干货 考证提升</p>
      <img src="./assets/gzh.jpg" style="width: 100%;" />
      <template #reference>
        <el-icon>
          <ChatDotRound />
        </el-icon>
      </template>
    </el-popover>
    <el-popover width="200" placement="left-end" trigger="hover">
      <p style="text-align: center;"><b>欢迎关注小哥主页</b></p>
      <p style="text-align: center; margin: .2rem 0;">CSDN: <el-link href="https://tinygeeker.blog.csdn.net/" target="_blank" type="primary">点击访问➢</el-link></p>
      <p style="text-align: center; margin: .2rem 0;">掘金: <el-link href="https://juejin.cn/user/2467756640574845" target="_blank" type="primary">点击访问➢</el-link></p>
      <p style="text-align: center; margin: .2rem 0;">思否: <el-link href="https://segmentfault.com/u/tinygeeker" target="_blank" type="primary">点击访问➢</el-link></p>
      <p style="text-align: center; margin: .2rem 0;">51CTO: <el-link href="https://blog.51cto.com/tinygeeker" target="_blank" type="primary">点击访问➢</el-link></p>
      <p style="text-align: center; margin: .2rem 0;">阿里云: <el-link href="https://developer.aliyun.com/profile/expert/oirrcfhlzqzko" target="_blank" type="primary">点击访问➢</el-link></p>
      <p style="text-align: center; margin: .2rem 0;">腾讯云: <el-link href="https://cloud.tencent.com/developer/user/8345747" target="_blank" type="primary">点击访问➢</el-link></p>
      <p style="text-align: center; margin: .2rem 0;">华为云: <el-link href="https://bbs.huaweicloud.com/community/usersnew/id_1677736481816497" target="_blank" type="primary">点击访问➢</el-link></p>
      <p style="text-align: center; margin: .2rem 0;">InfoQ: <el-link href="https://www.infoq.cn/u/tinygeeker/" target="_blank" type="primary">点击访问➢</el-link></p>
      <p style="text-align: center; margin: .2rem 0;">博客园: <el-link href="https://www.cnblogs.com/tinygeeker/" target="_blank" type="primary">点击访问➢</el-link></p>
      <template #reference>
        <el-icon>
          <Link />
        </el-icon>
      </template>
    </el-popover>
  </div>
</template>

<script>
</script>

<style scoped>
#kefu .el-icon {
  width: 40px;
  height: 40px;
  color: #E65A65;
  border: 1px gray dashed;
  border-radius: 50%;
  margin: 0.3rem 0;
  cursor: pointer;
}

#kefu {
  position: fixed;
  right: 10px;
  bottom: 50%;
  z-index: 999;
  width: 60px;
  height: 60px;
}
</style>