# 光照系统

**阅读本文大概需要 15 分钟。**

本文概述了光照系统的概念，以及他的所有基础属性，以及如何在编辑器中，如何使用光照系统。

## 光照系统是什么？都有哪些功能？

光照系统是游戏场景当中主体光源效果的世界对象，可以改变环境和氛围效果等。目前包括全局属性、平行光属性、天光属性。
- 全局属性：是针对光源的整体变化的改动。
- 平行光属性：是指平行光源照射到环境下的效果，主要是模拟太阳光照射的环境效果。
- 天光属性：是指物体反射的光源效果，主要是烘托整体的环境气氛。

## 全局属性

### 偏色值

- 属性说明：全局的后处理调色，调整全局的灯光颜色效果。

- 演示效果：

<video controls src="https://cdn.233xyx.com/online/nCQJ77axT3ds1701326099473.mp4"></video>

- 相关接口：

```ts
//设置偏色值颜色
Lighting.lightColor = new LinearColor(255,0,0)
```

### 曝光补偿

- 属性说明：曝光的控制方式，比如环境偏暗就需要适当增加曝光值，突显画面的清晰度。

- 演示效果：

<video controls src="https://cdn.233xyx.com/online/RLYFbLtpNMSY1701326099473.mp4"></video>

- 相关接口：

```ts
//设置曝光补偿值
Lighting.ev100 = 0.5
```

## 平行光属性

### 朝向角度

- 属性说明：决定太阳在天空中的横向位置（XY轴）
- 数值范围：【-180,180】
- 演示效果：

<video controls src="https://cdn.233xyx.com/1682496673529_626.mp4"></video>

- 相关接口：

```ts
//设置太阳朝向角度为30
Lighting.yawAngle = 30;
```

### 俯仰角度

- 属性说明：决定太阳在天空中的纵向位置（Z轴）
- 数值范围：【-90,90】
- 演示效果：

<video controls src="https://cdn.233xyx.com/1682496689797_482.mp4"></video>

- 相关接口：

```ts
//设置太阳俯仰角度为-30
Lighting.pitchAngle = -30;
```

### 平行光强度

- 属性说明：开发者可通过滑动滚轮调整平行光强度。
- 数值范围：0-100。
<div style="text-align: center">强度为0时候的地面</div>

![](https://cdn.233xyx.com/1682496758313_708.PNG)

<div style="text-align: center">强度为50时候的地面</div>

![](https://cdn.233xyx.com/1682496924716_543.PNG)

<div style="text-align: center">强度为100时候的地面</div>

![](https://cdn.233xyx.com/1682496937447_114.PNG)

- 相关接口：

```ts
//设置平行光强度为10
Lighting.directionalLightIntensity = 10;
```

### 平行光颜色

- 属性说明：开发者可选择平行光的颜色。最终生成的地面颜色由材质、贴图与光照共同决定。

![](https://cdn.233xyx.com/1682496951113_980.PNG)

<div style="text-align: center">颜色选择</div>

- 下面以水贴图作为地面图片演示效果。

光照强度为 0。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnvopE5Qg0JsznULpKqmg8Ef.png)

<div style="text-align: center">光照强度为0时的地面</div>

色调使用纯红色（R=1.0,G=0,B=0），光照强度 100。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcndjrMltYS0rNkDueZvs42rc.png)

色调使用纯绿色（R=0.0,G=1.0,B=0），光照强度 100。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnuIhJiz8w3rvyGUxwtYI8tb.png)

色调使用纯蓝色（R=0.0,G=0.0,B=1.0），光照强度 100。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn3brnUChnTSb3wJuGrnCqeg.png)

- 相关接口：

```ts
//设置平行光颜色为淡黄色
Lighting.directionalLightColor = new Type.LinearColor(255,240,200);
```

### 投射阴影

- 投射阴影：是否启动阴影效果。

<div style="text-align: center">有阴影</div>

![](https://cdn.233xyx.com/1682496962624_098.PNG)

<div style="text-align: center">无阴影</div>

![](https://cdn.233xyx.com/1682496976042_699.PNG)

- 阴影距离：影响阴影的视觉表现。

  - 此值越大，图越模糊，阴影像素越大。

<div style="text-align: center">阴影距离为5000</div>

![](https://cdn.233xyx.com/1682496995125_331.PNG)

- 此值越小，图越清晰，阴影像素越小。

<div style="text-align: center">阴影距离为1000</div>

![](https://cdn.233xyx.com/1682497007917_744.PNG)

- 相关接口：

```ts
//关闭投射阴影
Lighting.castShadowsEnabled = false;

//开启投射阴影
Lighting.castShadowsEnabled = true;
```

### 色温

- 是否启用色温：勾选后启用色温效果
- 色温：太阳温度的大小，范围【1000，14000】

![](https://cdn.233xyx.com/1682497045786_681.PNG)

<div style="text-align: center">温度1000</div>

![](https://cdn.233xyx.com/1682497065043_327.PNG)

<div style="text-align: center">温度4000</div>

![](https://cdn.233xyx.com/1682497091239_037.PNG)

<div style="text-align: center">温度14000</div>

- 相关接口：

```ts
//关闭太阳光色温
Lighting.temperatureEnabled = false;

//开启太阳光色温
Lighting.temperatureEnabled = true;

//设置太阳光色温为4000
Lighting.temperature = 4000;
```

## 天光属性

### 天光贴图

- 功能说明：天光贴图是我们预设好的反射球贴图，可以让用户可以快速选择环境的反射效果，营造想要的气氛。

- 操作步骤：
- 首先我们打开【资源库】的【天空盒】列表，从中找到【反射球】的类型资源
- 然后可以将其中的贴图拖入到天光贴图中。

![](https://cdn.233xyx.com/online/NGc6YBc9eYEL1701326099473.png)

### 天光强度

- 功能说明：物体反射光的效果强弱程度；数值越低效果越弱，数值越高效果越强

<div style="text-align: center">天光强度为0.2时：整个世界的光线昏暗</div>

![](https://cdn.233xyx.com/1682487606481_474.PNG)

<div style="text-align: center">天光强度为1.0时：整个世界的光线明亮</div>

![](https://cdn.233xyx.com/1682487622388_418.PNG)

<div style="text-align: center">天光强度为6.0时：整个世界的光线过于耀眼</div>

<div style="text-align: center"></div>

![](https://cdn.233xyx.com/1682487634605_222.PNG)

- 相关接口：

```ts
//设置天光强度为2
Lighting.skyLightIntensity = 2;
```

### 天光颜色

- 功能说明：天光色调是照射在整个世界的天光的色调；可根据开发者的喜好进行调整。

<div style="text-align: center">天光色调为红 FF000000</div>

![](https://cdn.233xyx.com/1682487650922_535.PNG)

<div style="text-align: center">天光色调为绿 00FF0000</div>

![](https://cdn.233xyx.com/1682487665645_794.PNG)

<div style="text-align: center">天光色调为蓝 0000FF00</div>

<div style="text-align: center"></div>

![](https://cdn.233xyx.com/1682487679156_154.PNG)

- 相关接口：

```ts
//设置天光强度为绿色
Lighting.skyLightColor = new Type.LinearColor(255, 0, 0);
```
