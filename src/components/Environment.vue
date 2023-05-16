<template>
    <div class="app-container" style="height: 600px;overflow-y: auto;">
        <span v-for="prompt in prompts">
            <span v-if="prompt.visible">
                <el-divider content-position="left">{{ prompt.name }}</el-divider>
                <span v-for="item in prompt.items" class="prompt">
                    <el-button type="danger" v-if="setting.down" @click="downWeight" plain>
                        <el-icon>
                            <Remove />
                        </el-icon>
                    </el-button>
                    <el-button type="success" v-if="setting.up" @click="upWeight" plain>
                        <el-icon>
                            <CirclePlus />
                        </el-icon>
                    </el-button>
                    <el-button :type="item.checked ? 'primary' : ''" @click="selectPrompt($event, item);" plain>
                        <span v-if="setting.en">{{ item.en }}</span>
                        <span v-if="setting.zh">「{{ item.zh }}」</span>
                    </el-button>
                </span>
            </span>
        </span>
    </div>
</template>
  
<script>
import prompts from '../data/environment'

export default {
    name: 'Environment',
    props: {
        setting: Object
    },
    data() {
        return {}
    },
    created() { },
    methods: {
        downWeight($event) {
            let target = $event.currentTarget.parentElement.lastElementChild.firstElementChild.firstElementChild
            if (target.innerText.startsWith('(') && target.innerText.endsWith(')')) {
                target.innerText = target.innerText.substring(1, target.innerText.length - 1)
            } else {
                target.innerText = `[${target.innerText}]`
            }
        },
        upWeight($event) {
            let target = $event.currentTarget.parentElement.lastElementChild.firstElementChild.firstElementChild
            if (target.innerText.startsWith('[') && target.innerText.endsWith(']')) {
                target.innerText = target.innerText.substring(1, target.innerText.length - 1)
            } else {
                target.innerText = `(${target.innerText})`
            }
        },
        selectPrompt($event, item) {
            let prompt = $event.currentTarget.firstElementChild.firstElementChild
            this.$emit('updateSelect', prompt.innerText)

            item.checked = !item.checked
            this.$forceUpdate()
        }
    },
    computed: {
        prompts: function () {
            return prompts.map((item) => {
                if (this.setting.adult) {
                    if (item.range == 'adult') {
                        item.visible = true
                    }
                } else {
                    if (item.range == 'adult') {
                        item.visible = false
                    }
                }

                return item
            });
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