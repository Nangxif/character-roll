<template>
  <div id="app">
    <CharacterRoll :presetObject="presetObject" :text="text" />
  </div>
</template>

<script>
import CharacterRoll from '../plugin/index';
import filters from '@nangxif/filters';
export default {
  name: 'App',
  data() {
    return {
      presetObject: {
        range: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':'],
        width: 25
      },
      text: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
