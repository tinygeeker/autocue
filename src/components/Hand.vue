<template>
    <div class="app-container" style="height: 600px;overflow-y: auto;">
        <span v-for="prompt in prompts">
            <span v-if="prompt.visible">
                <el-divider content-position="left">{{ prompt.name }}</el-divider>
                <span v-for="item in prompt.items" class="prompt">
                    <el-button type="danger" v-if="setting.down" @click="downWeight(item)" plain>
                        <el-icon>
                            <Remove />
                        </el-icon>
                    </el-button>
                    <el-button type="success" v-if="setting.up" @click="upWeight(item)" plain>
                        <el-icon>
                            <CirclePlus />
                        </el-icon>
                    </el-button>
                    <el-button :type="item.checked ? 'primary' : ''" @click="selectPrompt(item);" plain>
                        <span v-if="setting.en">{{ item.en }}</span>
                        <span v-if="setting.zh">「{{ item.zh }}」</span>
                    </el-button>
                </span>
            </span>
        </span>
    </div>
</template>
  
<script>
import prompts from '../data/hand'

export default {
    name: 'Hand',
    props: {
        setting: Object
    },
    data() {
        return {}
    },
    created() { },
    methods: {
        downWeight(item) {
            if (item.en.startsWith('(') && item.en.endsWith(')')) {
                item.en = item.en.substring(1, item.en.length - 1)
            } else {
                item.en = `[${item.en}]`
            }
            this.$forceUpdate()
        },
        upWeight(item) {
            if (item.en.startsWith('[') && item.en.endsWith(']')) {
                item.en = item.en.substring(1, item.en.length - 1)
            } else {
                item.en = `(${item.en})`
            }
            this.$forceUpdate()
        },
        selectPrompt(item) {
            this.$emit('selectPrompt', { en: item.en, zh: item.zh })

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