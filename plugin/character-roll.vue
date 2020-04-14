<template>
  <div class="CharacterRoll">
    <div
      class="roll_item_box"
      v-for="(item, index) in textCopy.split('')"
      :key="index"
      :style="essentialStyle"
    >
      <div class="roll_item_position" :style="roll_item_positionStyle">
        <div
          class="roll_item"
          v-for="(it, id) in presetObjectCopy.range"
          :key="id"
          :style="
            `width:${presetObjectCopy.width}px;height:${presetObjectCopy.height}px;`
          "
        >
          {{ it }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const transformKey =
  document.body.style.transform === undefined
    ? '-webkit-transform'
    : 'transform';
const transitionKey =
  document.body.style.transition === undefined
    ? '-webkit-transition'
    : 'transition';
export default {
  name: 'CharacterRoll',
  props: {
    presetObject: {
      type: Object,
      default: () => {
        return {};
      }
    },
    text: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      presetObjectCopy: {
        range: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        width: 50,
        height: 50,
        fontSize: 40,
        color: '#ff483f',
        fontWeight: 'bold',
        fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
        background: '',
        border: '',
        borderRadius: 0,
        rollboxsPerView: 10,
        speed: 0.5
      },
      textCopy: this.text,
      styleObj: {
        width: 'width:',
        height: 'height:',
        fontSize: 'font-size:',
        color: 'color:',
        fontWeight: 'font-weight:',
        fontFamily: 'font-family:',
        background: 'background:',
        border: 'border:',
        borderRadius: 'border-radius:',
        rollboxsPerView: 'margin-left:'
      },
      essentialStyle: '',
      roll_item_positionStyle: '',
      transformKey,
      transitionKey,
      allBox: null,
      boxHeight: 0
    };
  },
  watch: {
    text(val, oldval) {
      if (val.length == oldval.length) {
        this.textCopy = val;
        this.setPosition(val);
      } else {
        this.textCopy = val;
        this.$nextTick(() => {
          this.allBox = document.querySelectorAll('.roll_item_position');
          this.setPosition(val);
        });
      }
    }
  },
  methods: {
    getPositionArray(text) {
      let arr = [];
      text.split('').forEach(item => {
        arr.push(this.presetObjectCopy.range.findIndex(i => item == i));
      });
      return arr;
    },
    setPosition(val) {
      this.getPositionArray(val).forEach((item, index) => {
        this.allBox[index].style[transformKey] = `translate3d(0px,-${item *
          this.boxHeight}px,0px)`;
      });
    }
  },
  created() {
    Object.assign(this.presetObjectCopy, this.presetObject);
    if (toString.call(this.presetObjectCopy.range) !== '[object Array]') {
      throw new Error('range must be a Array');
    } else if (
      this.presetObjectCopy.range.find(item => typeof item !== 'string') ||
      this.presetObjectCopy.range.find(item => typeof item !== 'string') == 0
    ) {
      throw new Error('range element must be string');
    }

    Object.entries(this.presetObjectCopy).forEach(item => {
      if (this.styleObj[item[0]]) {
        if (
          item[0] == 'width' ||
          item[0] == 'height' ||
          item[0] == 'fontSize' ||
          item[0] == 'rollboxsPerView' ||
          item[0] == 'borderRadius'
        ) {
          this.essentialStyle =
            this.essentialStyle + `${this.styleObj[item[0]]}${item[1]}px;`;
        } else {
          this.essentialStyle =
            this.essentialStyle + `${this.styleObj[item[0]]}${item[1]};`;
        }
      }
    });
    if (this.presetObjectCopy.speed != 0) {
      this.roll_item_positionStyle = `${transitionKey}: ${this.presetObjectCopy.speed}s all ease-out;`;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.allBox = document.querySelectorAll('.roll_item_position');
      this.boxHeight = document
        .querySelector('.roll_item')
        .getBoundingClientRect().height;
      this.setPosition(this.textCopy);
    });
  }
};
</script>

<style scoped lang="scss">
.CharacterRoll {
  .roll_item_box {
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    &:first-of-type {
      margin-left: 0px !important;
    }
    .roll_item_position {
      .roll_item {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-content: center;
      }
    }
  }
}
</style>
