<template>
  <div id="app">
    <h3>DEMO1</h3>
    <h4>参数</h4>
    <pre>
      {
        range: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':'],
        width: 29,
        rollboxsPerView: 0,
        borderRadius: 5
      }
    </pre>
    <CharacterRoll :presetObject="presetObject1" :text="text" />
    <h3>DEMO2</h3>
    <h4>参数</h4>
    <pre>
      {
        range: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':'],
        width: 29,
        background: ['black'],
        isOnlyFirstandLastRadius: false,
        rollboxsPerView: 0,
        borderRadius: 5
      }
    </pre>
    <CharacterRoll :presetObject="presetObject2" :text="text" />
    <h3>DEMO3</h3>
    <h4>参数</h4>
    <pre>
      {
        range: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':'],
        width: 29,
        background: ['black', 'yellow', 'orange'],
        rollboxsPerView: 0,
        borderRadius: 5
      }
    </pre>
    <CharacterRoll :presetObject="presetObject3" :text="text" />
  </div>
</template>

<script>
import CharacterRoll from '../plugin/index';
import filters from '@nangxif/filters';
export default {
  name: 'App',
  data() {
    return {
      presetObject1: {
        range: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':'],
        width: 29,
        rollboxsPerView: 0,
        borderRadius: 5
      },
      presetObject2: {
        range: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':'],
        width: 29,
        background: ['black'],
        isOnlyFirstandLastRadius: false,
        rollboxsPerView: 0,
        borderRadius: 5
      },
      presetObject3: {
        range: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':'],
        width: 29,
        background: ['black', 'yellow', 'orange'],
        rollboxsPerView: 0,
        borderRadius: 5
      },
      text: `${filters.filterToDateAndTime(new Date(), 'Time')}`
    };
  },
  components: {
    CharacterRoll
  },
  mounted() {
    setInterval(() => {
      this.text = `${filters.filterToDateAndTime(new Date(), 'Time')}`;
    }, 1000);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
