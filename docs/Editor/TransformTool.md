# 移动、旋转和缩放工具

::: tip **阅读本文预计 10 分钟。**

**本文概述了在编辑器中如何使用移动、旋转和缩放工具。**

:::

工具栏中的**移动**（W）、**旋转**（E）、**缩放**（R）按钮用于切换变换工具的模式。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/0c1c6c412a24472a87afcbe54196fbc7_365409044.webp)|![](https://qn-cdn.233leyuan.com/athena/online/abaeeb172f694f5d8e0fbeda50d97706_365409553.webp)|

## 1. 移动工具

拖动红色/绿色/蓝色枢轴，选中对象沿对应轴向（X/Y/Z轴）移动。

<img src="https://cdn.233xyx.com/online/BhqIM3BOYHmv1706506503383.gif" width="80%">

拖动红色/绿色/蓝色控制面，选中对象沿对应平面（YZ/XZ/XY平面）移动。

<img src="https://cdn.233xyx.com/online/juW9eBLVcx3m1706506631327.gif" width="80%">

## 2. 旋转工具

拖动红色/绿色/蓝色枢轴，选中对象沿对应轴向（X/Y/Z轴）旋转。

<img src="https://cdn.233xyx.com/online/WSt2UPNOcuKs1706506885957.gif" width="80%">

拖动外围的白色枢轴，选中对象沿当前视图进行平面旋转。

<img src="https://cdn.233xyx.com/online/Sa5wVO6ChDJf1706506903029.gif" width="80%">

拖动球状区域，选中对象进行轨迹球式旋转。

<img src="https://cdn.233xyx.com/online/gNuBtZZlsF7n1706506916855.gif" width="80%">

## 3. 缩放工具

点击控件右侧展开下拉面板，选择缩放模式：**轴式缩放**或**盒式缩放**。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/3cf21f5560ce43a28567011c292bc34b_365417437.webp)|![](https://qn-cdn.233leyuan.com/athena/online/fbdd2ebc827d41d3a2c55d3a415212f1_365417919.webp)|

### 缩放模式1：盒式缩放

拖动红色/绿色/蓝色控制点，选中对象沿对应轴向（X/Y/Z轴）与控制点方向进行缩放。

<img src="https://cdn.233xyx.com/online/3OtR3tg4cAw41706513426665.gif" width="80%">

按住Shift键，选中对象沿控制点方向进行三轴等比缩放。

<img src="https://cdn.233xyx.com/online/lWikOW77CQeg1706513576771.gif" width="80%">

多选时，选中对象沿控制点方向进行三轴等比缩放。

<img src="https://cdn.233xyx.com/online/FHk65YMs0Xhh1706513694303.gif" width="80%">

### 缩放模式2：轴式缩放

拖动红色/绿色/蓝色枢轴，选中对象沿对应轴向（X/Y/Z轴）进行缩放。

<img src="https://cdn.233xyx.com/online/FZ41HJAmWdL21706514049542.gif" width="80%">

拖动红色/绿色/蓝色三角面，选中对象沿对应平面（YZ/XZ/XY平面）进行缩放。

<img src="https://cdn.233xyx.com/online/tPCFDYphnLqn1706514071687.gif" width="80%">

拖动轴式缩放工具的中心点，选中对象进行三轴等比缩放。

<img src="https://cdn.233xyx.com/online/WGE8HAyCKYW61706514105207.gif" width="80%">

### 缩放中心：中心模式和锚点模式

切换**中心**或**锚点**模式，可以改变变换工具中心点的位置。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/ee30f7848562487c95ac3540c6b375f1_365462279.webp)|![](https://qn-cdn.233leyuan.com/athena/online/5a5725b2011b4bc0bf7f0dc9459fcec9_365469697.webp)|

选择**中心模式**时，变换工具的中心点位于选中对象的几何中心处。
选中对象将相对于其**几何中心**进行移动、旋转和缩放，多选时，相对于**全部选中对象的几何中心**进行移动、旋转或缩放。

选择**锚点模式**时，变换工具的中心点位于选中对象的锚点处，多选时，位于最后选中对象的锚点处。
选中对象将根据其**锚点位置**进行移动、旋转和缩放，多选时，根据**选中对象各自的锚点位置**进行移动、旋转或缩放。
| | 中心模式  | 锚点模式 |
|-----| --------- | ------------ |
|**旋转**|<video controls src="https://qn-cdn.233leyuan.com/online/F1WU1YkWY5YS1724658138389.mp4"></video>|<video controls src="https://qn-cdn.233leyuan.com/online/12Dl62naBQOO1724658120038.mp4"></video>|
|**缩放**|<video controls src="https://qn-cdn.233leyuan.com/online/63ZoRzXFweoZ1724658104120.mp4"></video>|<video controls src="https://qn-cdn.233leyuan.com/online/hiozJ9RBcDnj1724658073691.mp4"></video>|


## 4. 变换工具坐标系

切换**世界**或**本地**轴向，可以改变变换工具的坐标系。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/fadfd249ae104755b93eb26f0a1d0dd5_365453815.webp)|![](https://qn-cdn.233leyuan.com/athena/online/fff91933eb73439fa80b895b3150e3e2_365453467.webp)|

选择世界轴向时，变换工具使用世界坐标系（选中对象将在世界坐标系下进行变化）；

<img src="https://cdn.233xyx.com/online/kAg8LcoVA0yx1706525711975.png" width="60%">

选择本地轴向时，变换工具使用选中对象的本地坐标系（选中对象将在本地坐标系下进行变化）。

<img src="https://cdn.233xyx.com/online/6VChEPFHGuBd1706525711975.png" width="60%">

## 5. 召唤变换工具

如果模型过大，变换工具不在主视口镜头之内，可以按住Tab键，在光标位置召唤变换工具。松开Tab键时，变换工具恢复到默认位置。

<img src="https://cdn.233xyx.com/online/LrXGYJWP05PK1706514582536.gif" width="80%">

## 6. 网格

开启网格功能后，对象将按照设定的单位移动、旋转或缩放。

可以点击下拉按钮，从预设值中选择网格数值，也可以直接输入数值。

移动工具支持1-1000的整数，旋转工具支持1-360的整数，缩放工具支持0.0625-10.0的小数。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/b78f34eeb8cc4f579eda5e5ab06cbf28_365499108.webp)|![](https://qn-cdn.233leyuan.com/athena/online/bb0c1c731f3a47579613167334961dd0_365499377.webp)|
