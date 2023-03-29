<template>
  <div class="app-container">
    <el-row type="flex" justify="center" align="middle">
      <h2>AI 标签生成器</h2>
    </el-row>
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="12">
        <el-form ref="form" :model="form" label-position="right" label-width="100px">
          <el-form-item label="正向标签">
            <el-input v-model="form.prompt" type="textarea" :rows="10" placeholder="Prompt" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain @click="copyPrompt" class="copyBtn">复制</el-button>
            <el-button type="warning" style="margin-left: .5rem;" plain @click="this.form.prompt=''">清空</el-button>
            <el-button style="margin-left: .5rem;" plain @click="this.form.prompt=this.prompt">默认</el-button>
            <el-button type="danger" style="margin-left: .5rem;" plain v-if="setting.adult" @click="adultPrompt">成人默认</el-button>
          </el-form-item>
          <el-form-item label="反向标签">
            <el-input v-model="form.negative_prompt" type="textarea" :rows="10" placeholder="Negative Prompt" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain @click="copyNegativePrompt" class="copyBtn">复制</el-button>
            <el-button type="warning" style="margin-left: .5rem;" plain @click="this.form.negative_prompt=''">清空</el-button>
            <el-button style="margin-left: .5rem;" plain @click="this.form.negative_prompt=this.negative_prompt">默认</el-button>
            <el-button type="danger" style="margin-left: .5rem;" plain v-if="setting.adult" @click="adultNegativePrompt">成人默认</el-button>
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
        <el-tabs tabPosition="left" activeName="basic" style="height: 600px; background: var(--el-fill-color-light);" >
          <el-tab-pane label="基础" name="basic">
            <Basic :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
          <el-tab-pane label="环境" name="environment">
            <Environment :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
          <el-tab-pane label="风格" name="style">
            <Style :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
          <el-tab-pane label="人物" name="character">
            <Character :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
          <el-tab-pane label="头发" name="hair">
            <Hair :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
          <el-tab-pane label="脸部" name="face">
            <Face :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
          <el-tab-pane label="手部" name="hand">
            <Hand :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
          <el-tab-pane label="胸部" name="chest">
            <Chest :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
          <el-tab-pane label="腿部" name="foot">
            <Foot :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
          <el-tab-pane label="服饰" name="dress">
            <Dress :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
          <el-tab-pane label="动作" name="action">
            <Action :setting="this.setting" @updateSelect="updateSelect"/>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import Clipboard from 'clipboard'

import Basic from '../components/Basic.vue'
import Environment from '../components/Environment.vue'
import Style from '../components/Style.vue'
import Character from '../components/Character.vue'
import Hair from '../components/Hair.vue'
import Face from '../components/Face.vue'
import Hand from '../components/Hand.vue'
import Chest from '../components/Chest.vue'
import Foot from '../components/Foot.vue'
import Dress from '../components/Dress.vue'
import Action from '../components/Action.vue'

export default {
  name: 'Home',
  components: {
    Basic,
    Environment,
    Style,
    Character,
    Hair,
    Face,
    Hand,
    Chest,
    Foot,
    Dress,
    Action
  },
  data() {
    return {
      prompt: 'masterpiece, best quality, top quality, ultra highres, 8k hdr, 8k wallpaper, huge file size, intricate details, sharp focus, realistic, delicate, amazing, CG, finely detailed, beautiful detailed, colourful, ',
      negative_prompt: 'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet, ',
      adult_prompt: 'masterpiece, best quality, top quality, ultra highres, 8k hdr, 8k wallpaper, huge file size, intricate details, sharp focus, realistic, delicate, amazing, CG, finely detailed, beautiful detailed, colourful, humiliation, partially unbuttoned, realistic, photo, real, {{breasts out}}, {{large breasts}}, no bra, no_panties, undressing, skirt lift, shirt lift, middle_nipples, leash, ',
      adult_negative_prompt: 'worst quality, low quality, normal quality, ugly, bad_anatomy, bad_hands, extra_hands, missing_fingers, broken hand, more than two hands,well proportioned hands, more than two legs, unclear eyes, missing_arms, mutilated, extra limbs, extra legs, cloned face, fused fingers,extra_digit, ewer_digits, extra_digits, fewer digits, jpeg_artifacts, text, error, signature, watermark, username, blurry, worst_quality, low_quality, normal_quality, mirror image, Vague, paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, cropped, bad feet, ',
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
        prompt: '',
        negative_prompt: ''
      }
    }
  },
  created () {
    this.form.prompt = this.prompt;
    this.form.negative_prompt = this.negative_prompt;
  },
  methods: {
    adultPrompt: function() {
      this.form.prompt = this.adult_prompt
    },
    adultNegativePrompt: function () {
      this.form.negative_prompt = this.adult_negative_prompt
    },
    copyPrompt: function () {
      let that = this
      let clipboard = new Clipboard('.copyBtn', {
        text: function () {
          //返回要复制的文本
          return that.form.prompt
        }
      })
      clipboard.on('success', () => {
        ElMessage.success('复制成功');
        //释放内存
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        ElMessage.error('复制失败');
        //释放内存
        clipboard.destroy()
      })
    },
    copyNegativePrompt: function () {
      let that = this
      let clipboard = new Clipboard('.copyBtn', {
        text: function () {
          //返回要复制的文本
          return that.form.negative_prompt
        }
      })
      clipboard.on('success', () => {
        ElMessage.success('复制成功');
        //释放内存
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        ElMessage.error('复制失败');
        //释放内存
        clipboard.destroy()
      })
    },
    updateSelect: function(prompt) {
      this.form.prompt += prompt + ', '
    }
  },
}
</script>

<style scoped>
.el-switch {
  margin: 0 1rem;
}
</style>