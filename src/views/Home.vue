<template>
  <div class="Home">
    <h2>六合彩/彩票随机数生成器</h2>
    <p class="tip">该随机数生成器生成的数据仅供娱乐使用，输钱请找豪仔</p>
    <input type="text" v-model="min" placeholder="请输入最小值" />
    <input type="text" v-model="max" placeholder="请输入最大值" maxlength="8" />
    <div class="createNum" @click="createNum">点击生成</div>
    <CharacterRoll :presetObject="presetObject" :text="text" v-if="isClick" />
  </div>
</template>
<script>
import CharacterRoll from '../../plugin/index';
export default {
  name: 'Home',
  data() {
    return {
      presetObject: {
        range: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        width: 29,
        color: 'black',
        rollboxsPerView: 0,
        borderRadius: 5
      },
      text: '00000000',
      min: 0,
      max: 10,
      isClick: false
    };
  },
  components: {
    CharacterRoll
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    createNum() {
      this.isClick = true;
      this.$nextTick(() => {
        this.text = this.random(Number(this.min), Number(this.max)).toString();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.Home {
  text-align: center;
  .tip {
    margin: 0 auto;
    margin-bottom: 15px;
    width: 90%;
    padding: 8px 16px;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    opacity: 1;
    display: flex;
    align-items: center;
    background-color: #f56c6c;
    color: #fff;
    text-align: left;
  }
  input {
    margin: 0 auto;
    margin-bottom: 15px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 90%;
  }
  .createNum {
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #409eff;
    color: white;
    border-radius: 4px;
    margin-bottom: 15px;
    height: 40px;
    line-height: 40px;
    width: 90%;
  }
}
</style>
