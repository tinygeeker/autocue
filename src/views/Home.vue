<template>
  <div class="app-container">
    <el-row type="flex" justify="center" align="middle">
      <h2>AI 标签生成器</h2>
    </el-row>
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="12">
        <el-form ref="form" :model="form" label-position="right" label-width="100px">
          <el-form-item label="正向预览">
            <el-row style="width:100%;height:6rem;overflow-y: scroll;">
              <el-tag :key="prompt" v-for="prompt in this.form.vprompts" type="success" :closable="setting.del"
                @close="closePrompt(prompt)" style="margin: .2rem;">
                <span v-if="setting.en">{{ prompt.en }}</span>
                <span v-if="setting.zh">「{{ prompt.zh }}」</span>
              </el-tag>
            </el-row>
          </el-form-item>
          <el-form-item>
            <template v-slot:label>
              <span style="align-items: center;">
                <span>正向标签 </span>
                <el-link type="primary" :underline="false">
                  <el-tooltip placement="top" content="根据使用场景在右侧选择">
                    <el-icon><Warning style="font-size: 15px; font-weight: 500" /></el-icon>
                  </el-tooltip>
                </el-link>
              </span>
            </template>
            <el-input v-model="form.prompts" type="textarea" :rows="5" placeholder="prompt" maxlength="9999"
              show-word-limit />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain @click="copyPrompt" class="copyBtn">复制</el-button>
            <el-button type="warning" style="margin-left: .5rem;" plain @click="cancelPrompts">清空</el-button>
            <el-button style="margin-left: .5rem;" plain @click="initPrompts">默认</el-button>
            <el-button type="danger" style="margin-left: .5rem;" plain v-if="setting.adult"
              @click="adultPrompt">大人默认</el-button>
          </el-form-item>
          <el-form-item label="反向预览">
            <el-row style="width:100%;height:6rem;overflow-y: scroll;">
              <el-tag :key="prompt" v-for="prompt in this.form.vnegative_prompts" type="danger" :closable="setting.del"
                @close="closeNegativePrompt(prompt)" style="margin: .2rem;">
                <span v-if="setting.en">{{ prompt.en }}</span>
                <span v-if="setting.zh">「{{ prompt.zh }}」</span>
              </el-tag>
            </el-row>
          </el-form-item>
          <el-form-item>
            <template v-slot:label>
              <span style="align-items: center;">
                <span>反向标签 </span>
                <el-link type="primary" :underline="false">
                  <el-tooltip placement="top" content="反向提示词基本万能，无需修改">
                    <el-icon><Warning style="font-size: 15px; font-weight: 500" /></el-icon>
                  </el-tooltip>
                </el-link>
              </span>
            </template>
            <el-input v-model="form.negative_prompts" type="textarea" :rows="5" placeholder="negative prompt"
              maxlength="9999" show-word-limit />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain @click="copyNegativePrompt" class="copyBtn">复制</el-button>
            <el-button style="margin-left: .5rem;" plain @click="initNegativePrompts">默认</el-button>
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
          <el-switch v-model="setting.adult" inactive-text="大人" />
        </el-steps>
        <el-tabs tabPosition="left" v-model="activeName" style="height: 600px; background: var(--el-fill-color-light);">
          <el-tab-pane label="基础" name="basic">
            <Basic :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="环境" name="environment">
            <Environment :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="风格" name="style">
            <Style :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="人物" name="character">
            <Character :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="头发" name="hair">
            <Hair :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="脸部" name="face">
            <Face :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="手部" name="hand">
            <Hand :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="胸部" name="chest">
            <Chest :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="腿部" name="foot">
            <Foot :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="服饰" name="dress">
            <Dress :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="动作" name="action">
            <Action :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
          </el-tab-pane>
          <el-tab-pane label="机甲" name="mecha">
            <Mecha :setting="this.setting" :vprompts="this.form.vprompts" @selectPrompt="selectPrompt" />
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
import Mecha from '../components/Mecha.vue'

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
    Action,
    Mecha
  },
  data() {
    return {
      activeName: 'basic',
      prompts: [
        { en: 'masterpiece', zh: '大师作品' },
        { en: 'best quality', zh: '最佳品质' },
        { en: 'top quality', zh: '最高质量' },
        { en: 'ultra highres', zh: '超高分辨率' },
        { en: '8k hdr', zh: '8k分辨率' },
        { en: '8k wallpaper', zh: '壁纸画质' },
        { en: 'RAW', zh: 'RAW照片' },
        { en: 'huge file size', zh: '大文件' },
        { en: 'intricate details', zh: '真实感' },
        { en: 'sharp focus', zh: '清晰聚焦' },
        { en: 'natural lighting', zh: '自然光线' },
        { en: 'realistic', zh: '写实' },
        { en: 'professional', zh: '专业的' },
        { en: 'delicate', zh: '精美' },
        { en: 'amazing', zh: '令人惊叹' },
        { en: 'CG', zh: '游戏CG' },
        { en: 'finely detailed', zh: '精细' },
        { en: 'beautiful detailed', zh: '细节' },
        { en: 'colourful', zh: '丰富多彩' },
      ],
      negative_prompts: [
        { en: 'paintings', zh: '绘画' },
        { en: 'sketches', zh: '素描' },
        { en: 'lowres', zh: '低分辨率' },
        { en: 'normal quality', zh: '普通质量' },
        { en: 'worst quality', zh: '差质量' },
        { en: 'low quality', zh: '低质量' },
        { en: 'cropped', zh: '裁剪' },
        { en: 'dot', zh: '斑点' },
        { en: 'mole', zh: '痣' },
        { en: 'ugly', zh: '丑陋' },
        { en: 'grayscale', zh: '灰度' },
        { en: 'monochrome', zh: '单色' },
        { en: 'duplicate', zh: '重复' },
        { en: 'morbid', zh: '病态' },
        { en: 'mutilated', zh: '残缺' },
        { en: 'missing fingers', zh: '缺失的手指' },
        { en: 'extra fingers', zh: '多余的手指' },
        { en: 'too many fingers', zh: '过多的手指' },
        { en: 'fused fingers', zh: '融合的手指' },
        { en: 'mutated hands', zh: '变异的手' },
        { en: 'bad hands', zh: '错误的手' },
        { en: 'poorly drawn hands', zh: '画的差的手' },
        { en: 'poorly drawn face', zh: '画的差的脸' },
        { en: 'poorly drawn eyebrows', zh: '画的差的眉毛' },
        { en: 'bad anatomy', zh: '错误的人体构造' },
        { en: 'cloned face', zh: '克隆脸' },
        { en: 'long neck', zh: '长脖子' },
        { en: 'extra legs', zh: '多余的腿' },
        { en: 'extra arms', zh: '多臂' },
        { en: 'missing arms missing legs', zh: '缺胳膊缺腿' },
        { en: 'malformed limbs', zh: '肢体畸形' },
        { en: 'deformed', zh: '变形' },
        { en: 'simple background', zh: '简单的背景' },
        { en: 'bad proportions', zh: '比例失调' },
        { en: 'disfigured', zh: '毁容' },
        { en: 'skin spots', zh: '皮肤斑点' },
        { en: 'skin blemishes', zh: '皮肤瑕疵' },
        { en: 'age spot', zh: '老年斑' },
        { en: 'bad feet', zh: '坏的脚' },
        { en: 'error', zh: '错误' },
        { en: 'text', zh: '文字' },
        { en: 'extra digit', zh: '多余的数字' },
        { en: 'fewer digits', zh: '更少的数字' },
        { en: 'jpeg artifacts', zh: '人造图' },
        { en: 'signature', zh: '签名' },
        { en: 'username', zh: '用户名' },
        { en: 'blurry', zh: '模糊' },
        { en: 'watermark', zh: '水印' },
        { en: 'mask', zh: '面罩' },
        { en: 'logo', zh: '徽标' },
      ],
      adult_prompts: [
        { en: 'masterpiece', zh: '大师作品' },
        { en: 'best quality', zh: '最佳品质' },
        { en: 'top quality', zh: '最高质量' },
        { en: 'ultra highres', zh: '超高分辨率' },
        { en: '8k hdr', zh: '8k分辨率' },
        { en: '8k wallpaper', zh: '壁纸画质' },
        { en: 'RAW', zh: 'RAW照片' },
        { en: 'huge file size', zh: '大文件' },
        { en: 'intricate details', zh: '真实感' },
        { en: 'sharp focus', zh: '清晰聚焦' },
        { en: 'natural lighting', zh: '自然光线' },
        { en: 'realistic', zh: '写实' },
        { en: 'real', zh: '真实' },
        { en: 'professional', zh: '专业的' },
        { en: 'delicate', zh: '精美' },
        { en: 'amazing', zh: '令人惊叹' },
        { en: 'CG', zh: '游戏CG' },
        { en: 'finely detailed', zh: '精细' },
        { en: 'beautiful detailed', zh: '细节' },
        { en: 'colourful', zh: '丰富多彩' },
        { en: 'humiliation', zh: '羞耻的' },
        { en: 'gorgeous', zh: '华丽的' },
        { en: 'clean skin', zh: '干净的皮肤' },
        { en: 'perfect skin', zh: '完美的皮肤' },
        { en: 'perfect body', zh: '完美的身体' },
        { en: 'sexy', zh: '性感的' },
        { en: 'lewd', zh: 'yin乱' },
        { en: 'thighhighs', zh: '大腿' },
        { en: 'erotic', zh: '涩情' },
        { en: 'no bra', zh: '不穿胸罩' },
        { en: 'breasts out', zh: '露胸' },
        { en: 'medium breasts', zh: '大小合适的胸' },
        { en: 'medium nipples', zh: '大小合适的乳头' },
        { en: 'partially unbuttoned', zh: '解开部分扣子' },
        { en: 'no panties', zh: '不穿短裤' },
        { en: 'undressing', zh: '脱裙子' },
        { en: 'skirt lift', zh: '提起裙子' },
        { en: 'shirt lift', zh: '提起衬衫' },
      ],
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
        prompts: '',
        negative_prompts: '',
        vprompts: [],
        vnegative_prompts: []
      }
    }
  },
  created() {
    /* 数据复制 */
    this.form.vprompts = Array.from(this.prompts)
    this.form.prompts = this.disposePrompts(this.form.vprompts)
    this.form.vnegative_prompts = Array.from(this.negative_prompts)
    this.form.negative_prompts = this.disposePrompts(this.form.vnegative_prompts)
  },
  methods: {
    disposePrompts: function (prompts) {
      return prompts.map(prompt => prompt.en).join(', ')
    },
    adultPrompt: function () {
      this.form.vprompts = Array.from(this.adult_prompts)
      this.form.prompts = this.disposePrompts(this.form.vprompts)
    },
    cancelPrompts: function () {
      this.form.vprompts = []
      this.form.prompts = ''
    },
    initPrompts: function () {
      this.form.vprompts = Array.from(this.prompts)
      this.form.prompts = this.disposePrompts(this.form.vprompts)
    },
    initNegativePrompts: function () {
      this.form.vnegative_prompts = Array.from(this.negative_prompts)
      this.form.negative_prompts = this.disposePrompts(this.form.vnegative_prompts)
    },
    closePrompt(prompt) {
      const index = this.form.vprompts.findIndex(item => item.en === prompt.en);
      if (index !== -1) {
        this.form.vprompts.splice(index, 1);
        this.form.prompts = this.disposePrompts(this.form.vprompts)
      }
    },
    closeNegativePrompt(prompt) {
      const index = this.form.vnegative_prompts.findIndex(item => item.en === prompt.en);
      if (index !== -1) {
        this.form.vnegative_prompts.splice(index, 1);
        this.form.negative_prompts = this.disposePrompts(this.form.vnegative_prompts)
      }
    },
    copyPrompt: function () {
      let that = this
      let clipboard = new Clipboard('.copyBtn', {
        text: function () {
          //返回要复制的文本
          return that.form.prompts
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
          return that.form.negative_prompts
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
    selectPrompt: function (data) {
      let prompt = { en: data.en, zh: data.zh }

      /* 仅英文判断 */
      if (data.checked) {
        if(!this.form.vprompts.some(item => item.en === prompt.en)) {
          this.form.vprompts.push(prompt)
          this.form.prompts = this.disposePrompts(this.form.vprompts)
        }
      } else {
        if(this.form.vprompts.some(item => item.en === prompt.en)) {
          const index = this.form.vprompts.findIndex(item => item.en === prompt.en);
          if (index !== -1) {
            this.form.vprompts.splice(index, 1);
            this.form.prompts = this.disposePrompts(this.form.vprompts)
          }
        }
      }
    }
  },
}
</script>

<style scoped>
.el-switch {
  margin: 0 1rem;
}
</style>