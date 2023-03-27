<template>
    <div class="app-container">
        <el-divider content-position="left">画质优化</el-divider>
        <span class="prompt">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">masterpiece</span>
                <span v-if="setting.zh">【大师作品】</span>
            </el-button>
        </span>
        <span class="prompt">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">best quality</span>
                <span v-if="setting.zh">【最高画质】</span>
            </el-button>
        </span>
        <el-divider content-position="left">其他</el-divider>
        <span class="prompt">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">wedding dress:china dress:0.3</span>
                <span v-if="setting.zh">【旗袍婚纱】</span>
            </el-button>
        </span>
        <span class="prompt">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">arms behind head</span>
                <span v-if="setting.zh">【双手脑后】</span>
            </el-button>
        </span>
        <span class="prompt">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">tiamat (fate)</span>
                <span v-if="setting.zh">【提亚马特】</span>
            </el-button>
        </span>
        <el-divider content-position="left" v-if="setting.adult">成年</el-divider>
        <span class="prompt" v-if="setting.adult">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">surrounded, multiple others, exhibitionism, audience, background characters, crowd, public humiliation</span>
                <span v-if="setting.zh">【露出】</span>
            </el-button>
        </span>
        <span class="prompt" v-if="setting.adult">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">partially unbuttoned</span>
                <span v-if="setting.zh">【解开一部分扣子】</span>
            </el-button>
        </span>
        <span class="prompt" v-if="setting.adult">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">show foot</span>
                <span v-if="setting.zh">【展示足】</span>
            </el-button>
        </span>
        <span class="prompt" v-if="setting.adult">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">pubic tattoo on underbelly</span>
                <span v-if="setting.zh">【淫纹在小腹】</span>
            </el-button>
        </span>
        <span class="prompt" v-if="setting.adult">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">spread pussy</span>
                <span v-if="setting.zh">【掰开XX】</span>
            </el-button>
        </span>
        <span class="prompt" v-if="setting.adult">
            <el-button type="warning" v-if="setting.down" @click="downWeight">
                <el-icon><Remove /></el-icon>
            </el-button>
            <el-button type="warning" v-if="setting.up" @click="upWeight">
                <el-icon><CirclePlus /></el-icon>
            </el-button>
            <el-button>
                <span v-if="setting.en">ass_visible_through_thighs</span>
                <span v-if="setting.zh">【透过大腿可见屁股】</span>
            </el-button>
        </span>
    </div>
</template>
  
<script>
export default {
    name: 'Basic',
    props: {
        setting: Object
    },
    computed: {},
    methods: {
        downWeight($event) {
            let target = $event.currentTarget.parentElement.lastElementChild.firstElementChild.firstElementChild;
            if(target.innerText.startsWith('{') && target.innerText.endsWith('}')) {
                target.innerText = target.innerText.substring(1, target.innerText.length -1)
            }
        },
        upWeight($event) {
            let target = $event.currentTarget.parentElement.lastElementChild.firstElementChild.firstElementChild;
            target.innerText = `{${target.innerText}}`
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-button {
    margin-left: .2rem;
    margin-bottom: .5rem;
}

.prompt {
    margin: 2px;
}
</style>