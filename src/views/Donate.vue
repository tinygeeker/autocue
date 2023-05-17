<template>
  <div class="app-container">
    <el-row type="flex" justify="center" align="middle">
      <h2>打赏创作者</h2>
    </el-row>
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="12" style="display: flex; justify-content: center; align-items: center;">
        <el-image 
          style="width: 100%;"
          :src="require('@/assets/pay.jpg')"
        />
      </el-col>
      <el-col :span="12">
          <el-card>
            <el-table
              :data="list"
              height="600px"
              style="width: 100%"
            >
              <el-table-column
                prop="username"
                label="昵称"
                width="180"
              />
              <el-table-column
                prop="money"
                label="金额"
                width="100"
              />
              <el-table-column
                prop="message"
                label="留言"
              />
              <el-table-column
                prop="feedback"
                label="反馈"
              />
            </el-table>
          </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Donate',
  data() {
    return {
      list: [
        { username: '*壁', money: '0.81', message: '还没有使用，但是先支持。', feedback: '感谢支持' },
        { username: 'E*k', money: '6.6', message: '看见Vue写的直接来膜拜！', feedback: 'Vue很菜，因为是后端工程师。嘻嘻' },
        { username: '年**', money: '0.7', message: '好用，替群友感谢你', feedback: '感谢支持！' },
        { username: '鸡你太美', money: '0.3', message: '大佬加油啊，希望能加上权重', feedback: '已加' },
        { username: '希**', money: '0.01', message: '希望大佬多出一点常用组合', feedback: '好的，马上出' },
        { username: '忍**', money: '0.5', message: '评价是请尽力做下去', feedback: '会的' },
        { username: '陆**', money: '0.2', message: '求加搜索和英文首字母首排列功能', feedback: '会尽快的' },
        { username: '凨**', money: '0.5', message: '谢谢大佬，支持一下', feedback: '谢谢' },
        { username: '尘**', money: '0.5', message: '希望大佬继续做下去', feedback: '必须的' },
        { username: '堂**', money: '0.3', message: '谢谢你hero', feedback: '不客气' },
        { username: '洛**', money: '0.01', message: '作为一名小白，感谢大佬的分享和整理。', feedback: '感谢支持' },
        { username: '德**', money: '0.01', message: '浅浅的支持一下	', feedback: '谢谢支持' },
        { username: '笑**', money: '0.8', message: '工具很好用', feedback: '会的' },
        { username: '峰**', money: '0.52', message: '好用，替群友感谢你', feedback: '谢谢' },
        { username: '渊**', money: '0.13', message: '中国式英雄', feedback: '谢谢你，陌生人' },
        { username: '桢**', money: '0.26', message: '膜拜大佬', feedback: '还是成长中的菜鸟' },
      ]
    }
  }
}
</script>

<style scoped>
</style>