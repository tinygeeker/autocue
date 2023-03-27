<template>
  <div class="app-container">
    <el-row type="flex" justify="center" align="middle">
      <h2>AI 标签生成器</h2>
    </el-row>
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="12">
        <el-form ref="form" :model="form" label-position="right" label-width="100px">
          <el-form-item label="正向标签">
            <el-input v-model="form.prompt" type="textarea" :rows="5" placeholder="Prompt" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">复制</el-button>
            <el-button style="margin-left: .5rem;">清空</el-button>
          </el-form-item>
          <el-form-item label="反向标签">
            <el-input v-model="form.negative_prompt" type="textarea" :rows="5" placeholder="Negative Prompt" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">复制</el-button>
            <el-button style="margin-left: .5rem;">清空</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-steps simple>
          <el-switch v-model="setting.en" inactive-text="英文" disabled />
          <el-switch v-model="setting.zh" inactive-text="中文" />
          <el-switch v-model="setting.down" inactive-text="降权" />
          <el-switch v-model="setting.up" inactive-text="加权" />
          <el-switch v-model="setting.del" inactive-text="删除" />
          <el-switch v-model="setting.adult" inactive-text="成年" />
        </el-steps>
        <el-tabs tabPosition="left" activeName="basic" style="background: var(--el-fill-color-light);">
          <el-tab-pane label="常用" name="basic">
            <Basic :setting="this.setting" />
          </el-tab-pane>
          <el-tab-pane label="环境" name="environment">配置管理</el-tab-pane>
          <el-tab-pane label="风格" name="style">角色管理</el-tab-pane>
          <el-tab-pane label="人物" name="character">定时任务补偿</el-tab-pane>
          <el-tab-pane label="头发" name="hair">定时任务补偿</el-tab-pane>
          <el-tab-pane label="五官" name="features">定时任务补偿</el-tab-pane>
          <el-tab-pane label="眼睛" name="eyes">定时任务补偿</el-tab-pane>
          <el-tab-pane label="身体" name="body">定时任务补偿</el-tab-pane>
          <el-tab-pane label="服装" name="clothing">定时任务补偿</el-tab-pane>
          <el-tab-pane label="腿部" name="legs">定时任务补偿</el-tab-pane>
          <el-tab-pane label="鞋子" name="shoe">定时任务补偿</el-tab-pane>
          <el-tab-pane label="动作" name="action">定时任务补偿</el-tab-pane>
          <el-tab-pane label="表情" name="emoji">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Basic from '../components/Basic.vue'
import Environment from '../components/Environment.vue'
import Style from '../components/Style.vue'
import Character from '../components/Character.vue'
import Hair from '../components/Hair.vue'
import Features from '../components/Features.vue'
import Eyes from '../components/Eyes.vue'
import Body from '../components/Body.vue'
import Clothing from '../components/Clothing.vue'
import Legs from '../components/Legs.vue'
import Shoe from '../components/Shoe.vue'
import Action from '../components/Action.vue'
import Emoji from '../components/Emoji.vue'

export default {
  name: 'Home',
  components: {
    Basic,
    Environment,
    Style,
    Character,
    Hair,
    Features,
    Eyes,
    Body,
    Clothing,
    Legs,
    Shoe,
    Action,
    Emoji
  },
  data() {
    return {
      setting: {
        en: true,
        zh: false,
        down: false,
        up: false,
        del: false,
        cut: false,
        adult: false
      },
      form: {
        prompt: 'masterpiece, best quality, ',
        negative_prompt: 'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet,'
      }
    }
  }
}
</script>

<style scoped>
.el-switch {
  margin: 0 1rem;
}
</style>