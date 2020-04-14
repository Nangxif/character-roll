# CharacterRoll

一个尽可能让开发者自定义的字符滚动插件

## 一、使用方法

```javascript
npm i character-roll -S

import CharacterRoll from 'character-roll';

components: {
  CharacterRoll
}

<CharacterRoll :presetObject="presetObject" :text="text" />
```

## 二、参数解析

| 参数         | 类型   | 备注             |
| ------------ | ------ | ---------------- |
| presetObject | object | 插件的预设对象   |
| text         | string | 插件显示的字符串 |

## 三、关于presetObject

| 键              | 默认值                                             | 备注                                         |
| --------------- | -------------------------------------------------- | -------------------------------------------- |
| range           | ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] | 可能的字符集合                               |
| width           | 50                                                 | 滚动区域宽度，单位px，只需填写数字，无需单位 |
| height          | 50                                                 | 滚动区域高度，单位px，只需填写数字，无需单位 |
| fontSize        | 40                                                 | 字符大小，单位px，只需填写数字，无需单位     |
| color           | \#ff483f                                           | 字符颜色                                     |
| fontWeight      | bold                                               | 字符粗细                                     |
| fontFamily      | Avenir, Helvetica, Arial, sans-serif               | 字符字体                                     |
| background      | ''                                                 | 滚动区域背景，可自定义为渐变背景或者图片背景 |
| border          | ''                                                 | 滚动区域边框                                 |
| borderRadius    | 0                                                  | 滚动区域圆角，单位px，只需填写数字，无需单位 |
| rollboxsPerView | 10                                                 | 滚动区域间距，单位px，只需填写数字，无需单位 |
| speed           | 0.5                                                | 字符切换速度，为0的时候不显示动画，单位s     |

## 四、注意事项

1.presetObject.range里面的元素必须为字符串；

2.presetObject.speed的速度不要超过text的变化速度，否则没有意义。

## 五、用途

该插件可通过setInterval等定时器，定时设置传入的text参数，来动态地实现字符切换的效果。

有可能使用到的场景：

1.倒计时定时器；

2.当前日期或者时间；

3.定时轮询接口获取数据，然后动态显示在页面上，这些数据有可能是XX活动参与人数，报名人数等。

## 六、demo