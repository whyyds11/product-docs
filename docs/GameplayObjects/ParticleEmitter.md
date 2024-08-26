# 粒子发射器
::: info
阅读本文预计 15 分钟
本文概述了 游戏功能对象——粒子发射器的使用方法。
:::

## 1. 什么是粒子发射器？
- 粒子发射器是能发射粒子的特效单元，可以修改各种属性实现丰富的特效表现。
- 粒子发射器制作的特效可以通过生成预制体的方法，上传到预制体-特效资源库中。

## 2. 如何创建粒子发射器？
- 将发射器从功能组件中拖出到场景或对象管理器中，选中粒子发射器后可以在面板中更改属性。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/30d931c1167e4813b76c85215cfda222_354326875.webp)|![](https://qn-cdn.233leyuan.com/athena/online/177823862f7b414fb41412fc46bc8340_354326876.webp)|

## 3. 粒子发射器有哪些属性和接口？
### 3.1 变换

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/c3aab7481a08432aa8d47876f97bf556_354387306.webp)|![](https://qn-cdn.233leyuan.com/athena/online/8f366ee676ec48b092771f2188aded66_354387307.webp)|

#### 3.1.1 相对位置：粒子发射器在世界中的位置。
#### 3.1.2 相对旋转：粒子发射器在世界中的旋转。
#### 3.1.3 相对缩放：固定为(1,1,1)，无法更改。

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/AhjzQ9rDeOhk1724121800083.gif)|![](https://qn-cdn.233leyuan.com/online/HHBOqt2cP4Cv1724121801485.gif)|

### 3.2 效果属性
#### 3.2.1 启用：打开时，粒子发射器会在游戏启动时发射粒子，反之则不会。暂停按钮可以让粒子发射器在编辑器中暂停发射。该属性仅可在编辑器中修改。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/e89bb53e5e5f41f9ad6bd7e35609dd55_355160419.webp)|![](https://qn-cdn.233leyuan.com/athena/online/7393312142ce4b5d956a24525ca9b8a4_355160420.webp)|

::: tip
脚本中使用ParticleEmitter.play()开始发射粒子，使用ParticleEmitter.stop()停止发射粒子，使用ParticleEmitter.forceStop()停止发射并销毁所有已经发射的粒子。
:::

#### 3.2.2 颜色：控制粒子在生命周期中的颜色以及变化。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/560d4761dd58420fab9cdcd57fac4ef7_355165817.webp)|![](https://qn-cdn.233leyuan.com/athena/online/ec694aba692f407da4c6d8c3f1d577e4_355165818.webp)|

::: tip
如上这种数据形式为“关键帧插值”，在粒子发射器中被频繁使用，以实现丰富的效果。
使用方法：
1. 点击加号新增关键帧节点。
2. “时间点”属性为粒子从诞生到被销毁整个生命周期中的百分比。
3. “值”可以为颜色、透明度甚至加速度等，代表粒子会从上个“时间点”的该属性向当前值变化。
4. 脚本中实现关键帧插值请见如下代码示例。
:::

```TypeScript
// 在脚本中实现关键帧插值
let Effect = this.gameObject as ParticleEmitter;

// 创建粒子颜色的关键帧数组 效果为由蓝线性过度至红色
let ColorSequence = Array<mw.colorSequencePoint>();
// 生命周期0%时为蓝色
ColorSequence.push(new mw.colorSequencePoint(0, new LinearColor(1,0,0)));
// 生命周期100%时为红色
ColorSequence.push(new mw.colorSequencePoint(1, new LinearColor(0,0,1)));
Effect.color = ColorSequence;
```

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/vCYHok2uOoiS1724122019915.gif)|![](https://qn-cdn.233leyuan.com/online/JMCjlUUmYpeO1724122020706.gif)|

#### 3.2.3 亮度：控制粒子的亮度。默认值1。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/74e4ea603f7043a085e4bf8e55b342c4_355193083.webp)|![](https://qn-cdn.233leyuan.com/athena/online/7143dd8f9a234844be297e89d9a89bda_355193084.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/PJMLvvPn2cgk1724122436199.gif)|![](https://qn-cdn.233leyuan.com/online/g4wenq0vjoEO1724122437140.gif)|

#### 3.2.4 光照影响：控制粒子收到环境光照影响的程度，0到1代表完全不受影响到完全受影响。默认值0。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/c02e00b3c9a94dbc8d5a7a3942e27acb_355238617.webp)|![](https://qn-cdn.233leyuan.com/athena/online/4ab84e9ee26a492891c3b3c96d9cc8ee_355238618.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/f7jsMrHS4Tjo1724123814494.gif)|![](https://qn-cdn.233leyuan.com/online/L0RdNVVXTRAs1724123815163.gif)|

#### 3.2.5 透明度：控制粒子的透明度，支持“关键帧插值”，默认值1。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/7e15c95d4d27443bb61c085efb6afa40_356142115.webp)|![](https://qn-cdn.233leyuan.com/athena/online/4683c537300f48a3a12b7e45b008251d_356142116.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/3IVQJraVhWpl1724151102791.gif)|![](https://qn-cdn.233leyuan.com/online/kWk2GXfbTmGm1724151103646.gif)|

#### 3.2.6 贴图：单个粒子的贴图，目前仅适配场景贴图。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/e06cfb8a64c34f219e2669a38ab9b090_357130482.webp)|![](https://qn-cdn.233leyuan.com/athena/online/9021c8555a4f4faca0c1ada09d5c60dd_357130483.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/JSENxtsUzzKb1724217240042.gif)|![](https://qn-cdn.233leyuan.com/online/vcv7Y7vpgwaw1724217240990.gif)|

#### 3.2.7 大小：控制粒子的大小，支持“关键帧插值”，默认值1。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/4bfae4b8354645bb8eab871d4a6dc638_357218218.webp)|![](https://qn-cdn.233leyuan.com/athena/online/13a0642918c44b148ea4725c57bc6cab_357218219.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/fIVLTuLuRBDA1724219685249.gif)|![](https://qn-cdn.233leyuan.com/online/PGx8jGmBAEYd1724219686016.gif)|

#### 3.2.8 宽高比：控制粒子的宽高比，默认值0。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/0cc5c0e9d15c42968504e13ab6b7708e_357252542.webp)|![](https://qn-cdn.233leyuan.com/athena/online/1dd0e6dc170d4bd9bb0e2657537f74d8_357252543.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/u7jqgngVdZy71724220636221.gif)|![](https://qn-cdn.233leyuan.com/online/mDeHyxumQvuO1724223492299.gif)|

### 3.3 释放属性
#### 3.3.1 生命周期：控制粒子从诞生到销毁的时间，X和Y代表区间，当相同时，生命周期恒定，当不同时，生命周期会在二者中间随机，默认值(10,10)。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/c5e8b73eca8442608b6fefbb203a41b8_357280096.webp)|![](https://qn-cdn.233leyuan.com/athena/online/ceade2447a794789807aa1809c2d56f0_357280097.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/LUEVuuEyr5UC1724221375094.gif)|![](https://qn-cdn.233leyuan.com/online/oihvc49ed9Cu1724221375859.gif)|

#### 3.3.2 发射频率：控制粒子的发射频率，单位“个/秒”，范围0-100，默认值20。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/5a9d9d1778034783bc6d1caecfe63f13_357292457.webp)|![](https://qn-cdn.233leyuan.com/athena/online/1dc31912774f4278aa62378fcac8498b_357292458.webp)|

::: tip
如果单个粒子发射器所发射出去但仍未被销毁的粒子达到了1000个，那么就会自动减缓发射频率，以保证数量维持在1000以内。
如果您需要大片粒子的效果，不妨将多个粒子整合为单张图片以减缓渲染压力。
如果效果仍不理想，可以试试堆叠多个粒子发射器。
:::

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/OtxIBsCBMDK41724221719427.gif)|![](https://qn-cdn.233leyuan.com/online/S3EjLqLAyZoM1724221720146.gif)|

#### 3.3.3 速度：控制粒子的速度，单位“厘米/秒”。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/909b767f02c04d0ea415cb115dcf5080_357308586.webp)|![](https://qn-cdn.233leyuan.com/athena/online/1a1c36499de84fce9a01f07bc218a6ea_357308587.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/H1AdmZuKx90s1724222163510.gif)|![](https://qn-cdn.233leyuan.com/online/1LQ56QPg2hOt1724222164405.gif)|

#### 3.3.4 加速度：控制粒子在生命周期中的加速度，支持“关键帧插值”。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/20465dc5f5914f9984dd412fc38ab0c4_357322792.webp)|![](https://qn-cdn.233leyuan.com/athena/online/a74a6ada1a0b45c19d622c42570cbe5c_357322793.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/uu2XqcwP9zOD1724222550085.gif)|![](https://qn-cdn.233leyuan.com/online/bKqrHID7d9L11724222550942.gif)|

#### 3.3.5 初始旋转角度：控制粒子在发射时的初始旋转角度，默认值0。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/a76d908cde754fe3b4600a9d2fc8e692_357342792.webp)|![](https://qn-cdn.233leyuan.com/athena/online/dcae1866e4a74c9280b13e66b833cacc_357342793.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/87YcKQZH5fu71724223094371.gif)|![](https://qn-cdn.233leyuan.com/online/XW3nQT9ym6vS1724223095083.gif)|

#### 3.3.6 旋转速度：粒子在生命周期过程中旋转的速度，支持“序列帧插值”。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/c00f5cdba8334e8d9fc7cb7d01988eeb_357353019.webp)|![](https://qn-cdn.233leyuan.com/athena/online/0cd02c64ccc143a49c5be36e8cc5be0a_357353020.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/5xBqUA9pDxj91724223382174.gif)|![](https://qn-cdn.233leyuan.com/online/TSL2KJqOKF8V1724223382849.gif)|

#### 3.3.7 扩散角度：粒子偏离发射垂直方向的角度

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/8f400d94e4764f2c90415e9b1097ccc7_357367478.webp)|![](https://qn-cdn.233leyuan.com/athena/online/95d633d1d4224baaaaf845979e070c3f_357367479.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/R7ZZCiS6iAen1724223812712.gif)|![](https://qn-cdn.233leyuan.com/online/qUb1pcgTB7Qw1724223813677.gif)|

### 3.4 发射器属性
#### 3.4.1 形状范围：当前版本粒子发射器仅支持矩形，XYZ表示矩形的长宽高。默认值(50,50,50)。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/574b40e6786e4d299180fc2db26f1c80_357376390.webp)|![](https://qn-cdn.233leyuan.com/athena/online/0c977b8f748d4b8286380ebb7ad78f62_357376391.webp)|

::: tip
在矩形粒子发射器下，缩小XYZ可以实现粒子从单个点发射；缩小一个一个值，放大其他两个值，可以实现方形平面发射的效果等。
通过
:::

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/seP2ewlWZGcD1724224071375.gif)|![](https://qn-cdn.233leyuan.com/online/LT6iuHM4JxLb1724224072166.gif)|

#### 3.4.2 形状样式：分为仅表面发射和体积内发射，仅表面发射代表粒子只会从发射器的表面生成，体积内发射代表粒子会从发射器内部生成。默认为体积内发射。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/f2418f76048b4e5eb96a532b9b3d7177_357399481.webp)|![](https://qn-cdn.233leyuan.com/athena/online/1bc8bbf6c93a4c0582cf6b62d73c5a64_357399482.webp)|

效果演示：

| 中文示例 | 英文示例 |
| - | - |
|![](https://qn-cdn.233leyuan.com/online/MXl07CW8sNMp1724224755246.gif)|![](https://qn-cdn.233leyuan.com/online/N77UVAlu5ugd1724224756533.gif)|

### 3.5 其他属性
#### 3.5.1 阻力：粒子从发射开始速度衰减到0的速率，计算公式“粒子速度 += 粒子速度 * -阻力 * DeltaTime”，取值范围0-1，默认值0。

| 中文示例 | 英文示例 |
| - | - |
|![](https://qn-cdn.233leyuan.com/athena/online/33abf995ab944f63bfd953e37ab21f74_357410366.webp)|![](https://qn-cdn.233leyuan.com/athena/online/29ea1b7e76ee4e0985b5e8eb05a058cf_357410367.webp)|

效果演示：

| 中文示例 | 英文示例 |
| - | - |
|![](https://qn-cdn.233leyuan.com/online/h4uWoIRoh6dj1724225069792.gif)|![](https://qn-cdn.233leyuan.com/online/GszJNukxPBUz1724225070584.gif)|

#### 3.5.2 遮罩半径：设置粒子的边缘遮罩裁剪，取值范围0-1，默认值0.5。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/de7d767ae4cd407b93ab4f31a3f47898_357420012.webp)|![](https://qn-cdn.233leyuan.com/athena/online/850d71024aac46819d873b462877c7e2_357420013.webp)|

效果演示：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/online/7FQdtRdLlSpv1724225351623.gif)|![](https://qn-cdn.233leyuan.com/online/mJyBTsmFDD0V1724225352353.gif)|

### 4. 粒子发射器的使用建议
- 需要发射大量粒子时，可以考虑将多个粒子合成一张图片，减少渲染压力。
- 注意粒子的生命周期，如果长时间未销毁粒子，可能会影响新发射的粒子数量。
- 粒子发射器可以制作大量效果，如落叶，雨雪，升级特效，脚底行走特效等。但是需要注意实现方法，如下，实现雨雪效果时，可以考虑将粒子发射器挂载在摄像机中而不是世界中。

```TypeScript
// 脚本中将粒子发射器挂载在摄像机上
@Component
export default class EffectExample extends Script {
    private character: Character;
    
    protected onStart(): void {

        let Effect = this.gameObject as ParticleEmitter;
        Player.asyncGetLocalPlayer().then((player) => {
            Effect.parent=Camera.currentCamera
            Effect.localTransform.position=new Vector(0,0,50)
        });
    }
}
```

效果演示：

![](https://qn-cdn.233leyuan.com/online/OkYHYl3SgpCE1724225531402.gif)
