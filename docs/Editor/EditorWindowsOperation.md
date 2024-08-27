# 主编辑器各窗口操作

::: tip 阅读本文预计 30 分钟。

**本文涉及到的东西较多，建议用户分模块查看。**

**本文概述了编辑器各个窗口的常规操作。**

:::

## 什么是编辑器窗口

> 从界面上来看，编辑器的界面由各个窗口共同组成；
> 从功能上来看，每个窗口都承担了部分编辑器的功能，只有熟悉各窗口的操作以及功能，才能使用制作出精美的游戏。

## 编辑器窗口都包含什么

编辑器窗口由菜单栏、工具栏、资源库、主视口、对象管理器、工程内容、属性面板七个部分组成。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/9dba53129598450e874b7399b278eb6a_366895252.webp)|![](https://qn-cdn.233leyuan.com/athena/online/64c37a03bdba4b2ab5626b9045ad0478_366894250.webp)|

## 如何合理使用编辑器各个窗口

### 1. 菜单栏

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/38d3679efe4f451589d9ebbaeaef96dc_366903196.webp)|![](https://qn-cdn.233leyuan.com/athena/online/255c57c3fd5040f887ba22b4a20a6627_366905502.webp)|

#### 1.1 工程

工程菜单提供了一系列工程相关的操作，用户可以在此进行工程的新建、打开、保存、发布等。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/0dac603492ef44e48614a8d2a03cce0e_366676970.webp)|![](https://qn-cdn.233leyuan.com/athena/online/1bca9d2f89ac4c7181e80483499efeff_366918168.webp)|

#### 1.2 视图

控制各个窗口的显示与否，通过多选框操作。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/a0a2436d957c4fc38c2da200a4ce6602_366677387.webp)|![](https://qn-cdn.233leyuan.com/athena/online/20fad7d07b9d484a81877ea310a01c25_366918169.webp)|

#### 1.3 帮助

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/89f4de84a195462c873eccae168142fc_366922873.webp)|![](https://qn-cdn.233leyuan.com/athena/online/145ac2ab445b4aa4acdb24b2783ff6b9_366918166.webp)|

- 更新公告：查看此版本的更新内容。
- API 文档：查看各个 API 的使用方法。
- 官方教程：查看官方提供的各方面教程。
- 产品手册：查看编辑器各个模块、名词的作用和用法。
- 论坛：查看开发者提出的各种疑问与解答。

#### 1.4 撤销&恢复

常规的撤销恢复操作，快捷键：ctrl+z、ctrl+y。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/baf1f41108ea41f78087a20d3371cdf9_366678129.webp)|![](https://qn-cdn.233leyuan.com/athena/online/c806998e700f4054877efb5a3be32b16_366918167.webp)|

### 2. 工具栏

#### 2.1 绘制模式

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/780c9e02a8864189891d5ed416ee31dc_366938547.webp)|![](https://qn-cdn.233leyuan.com/athena/online/4e7dcbe6fdc34940bf4d41df62ef3ea0_366934374.webp)|

见[绘制模式](https://docs.ark.online/Editor/DrawMode.html)文档。

#### 2.2 移动、旋转和缩放工具

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/0f02b334d00444c8b9e721a01d0b0a88_366886205.webp)|![](https://qn-cdn.233leyuan.com/athena/online/4c7e250f1444488b8c089e63c606c59b_366934372.webp)|

见[Transform工具](https://docs-029.ark.online/Editor/TransformTool.html)文档。

#### 2.3 运行

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/50eae7ef8db448c88435d7c3e333fa82_366886213.webp)|![](https://qn-cdn.233leyuan.com/athena/online/f1e210e927d8464cba7c4f624368266a_366934377.webp)|

点击运行左侧图标，在本地运行游戏。点击运行右侧下拉图标，打开运行设置界面。

运行时会按照运行设置的条件运行：
- 端口：运行时的端口号，同一端口的玩家将进入服务器分配的同一空间中 **目前本地运行暂不支持多端口运行**。
- 单机模式：勾选该模式后，玩家数量只能为 1，无法与他人联机。
- 玩家数量：**非单机模式下可选**，决定本地运行时的玩家人数。
- 起始位置：可选择是以场景中默认出生点运行（F5）还是以当前实际摄像机位置运行（F6）。

#### 2.4 显示

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/f3b3a839d5a44c48a54de70fb426cc35_366886211.webp)|![](https://qn-cdn.233leyuan.com/athena/online/35354cb6adda43bfa61e423b3a937ba4_366934376.webp)|

1.寻路区域可视：在主视口中是否可以看见“寻路区域”逻辑对象显示的具体**绿色**区域。

![](https://qn-cdn.233leyuan.com/athena/online/b77373ae85c34e5f85c443663d1f2deb_366886212.webp)

2.隐藏图标和线框：在主视口中是否可以看见图标和线框；快捷键：V。

![](https://qn-cdn.233leyuan.com/athena/online/6d4f0278a2484f18bdcdc49a960cde2b_366886204.webp)

3.聊天区域可视：**在编辑阶段**（非发布后）是否在主视口中隐藏聊天区域（聊天区域为平台提供的通用聊天功能，在游戏发布至平台后会默认生成）。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/5d5009bac0d14b94ba3d073a95feffe6_366975124.webp)|![](https://qn-cdn.233leyuan.com/athena/online/e52bd0cbca9f4799acc9a8dd921986cc_366975123.webp)|

4.Ping区域、FPS区域：**在编辑阶段**（非发布后）是否在主视口中隐藏PING值区域和FPA值区域。

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/af6c818c29f24b55bacceb8b0ddb7e7f_366975122.webp)|![](https://qn-cdn.233leyuan.com/athena/online/98aa4afaadac428aad502df49865fefd_366975121.webp)|

#### 2.5 分辨率

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/40817058d3c54feb94884cfa51af455b_366886206.webp)|![](https://qn-cdn.233leyuan.com/athena/online/e37913f08cd24fdfaf0cbe7e6c10cefb_366934373.webp)|

见[分辨率模拟](https://docs.ark.online/Editor/ScreenOrientation&ResolutionSimulation.html)文档。

#### 2.6 摄像机

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/00d48941221242abb12ef1330c5124bd_366941615.webp)|![](https://qn-cdn.233leyuan.com/athena/online/b9e21b13c2004dc38fffe48d95dd6e42_366934375.webp)|

通过滑块设置当前摄像机移动的速度和加速/减速比例：
- 正常速度：主视口按下鼠标右键 +WASD 时，镜头移动的速度。
- 加倍速率：主视口按下鼠标右键 +WASD+Shift 时，镜头加速的倍率；如值为 2 则是两倍正常速度。
- 减速比例：主视口按下鼠标右键 +WASD+ Ctrl 时，镜头速度占正常速度的比例；如值为 0.1 则只有正常速度的 1/10。

#### 2.7 设置

|中文示例|英文示例|
|-----|-----|
|![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnvBgUVvsA3XXV4116ab7sQf.png)|![](https://qn-cdn.233leyuan.com/athena/online/eab7a72cd5c94b31953bceee51ec5b8d_366882271.webp)|

- 世界设置：设置世界场景的一些属性与玩家的一些属性，详情见[编辑器各设置](https://meta.feishu.cn/wiki/wikcnny98WrhiCiUaREV1W6pufe)文档。
- 编辑器设置：设置编辑器相关的一些属性，详情见[编辑器各设置](https://meta.feishu.cn/wiki/wikcnny98WrhiCiUaREV1W6pufe)文档。

#### 2.8 碰撞工具

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/0f4986a62fcf4f9a8a51e80586b6debe_367036413.webp)|![](https://qn-cdn.233leyuan.com/athena/online/36a927dca3fd4329b750592c6ea725c6_367036412.webp)|

**碰撞规则1：包围盒边对齐。**
- 拖动对象移动时，当包围盒某一边与其他对象的包围盒边对齐，对齐的包围盒边显示黄色。
- 对齐时增加判断，鼠标继续拖动一定距离时对象解除包围盒边对齐，可以继续移动。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnbpR8X621tJXgG1PEAIC56b.png)

**碰撞规则2：包围盒表面对齐。**
- 拖动对象移动时，当包围盒某一面与其他对象包围盒表面对齐，对齐的包围盒表面显示黄色。
- 对齐时增加判断，鼠标继续拖动一定距离时对象解除包围盒表面对齐，可以继续移动。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnu2JUHrQR46ka06bNfgOMZg.png)

#### 2.9 对齐工具

##### 功能入口：

|中文示例|英文示例|
|-----|-----|
|![](https://qn-cdn.233leyuan.com/athena/online/5f9e1c707a3d40f58c1675b09e5cbcf4_367061870.webp)|![](https://qn-cdn.233leyuan.com/athena/online/fc02086c3f9247b9a62aeed50baf8197_367067741.webp)|

##### 功能模式：

| 模式 | 图示 | 说明 |
| ----- | ----- | ----- |
| 最小对齐 | <img src="https://cdn.233xyx.com/athena/online/177da678765446f3a938b45b332598b3_222857489.webp" width="100%"> | 选中对象沿设定的轴向对齐到参照对象最小值的顶点所在的垂直平面上。|
| 居中对齐 | <img src="https://cdn.233xyx.com/athena/online/0b4fd3c217cc44288f568bc5ed054df1_222866467.webp" width="100%"> | 选中对象沿设定的轴向与参照对象中心对齐。 |
| 最大对齐 | <img src="https://cdn.233xyx.com/athena/online/43871d68b5e04740ac751a14bf302421_222867999.webp" width="100%"> | 选中对象沿设定的轴向对齐到参照对象最大值的顶点所在的垂直平面上。 |
| 均匀分布 | <img src="https://cdn.233xyx.com/athena/online/2171b3fb8bf1485d8b4255ded4795026_222868255.webp" width="100%"> | 选中对象中，沿设定的轴向固定一头一尾的对象，使所有相邻对象在选定轴向上相邻顶点之间的间距相同。 |
| 等距分布 | <img src="https://cdn.233xyx.com/athena/online/e5d1475521c74cbd87407c28bf295675_222868459.webp" width="100%"> | 选中对象中，固定参照对象，使其他对象相对于参照对象在选定轴向上按用户输入的间距排布。 |

##### 对齐轴向：

设定沿 X / Y / Z 轴中的哪个轴向进行对齐操作。

<img src="https://cdn.233xyx.com/athena/online/dde804a4c5e84ee8ad7460b72262a4c6_222916838.webp" width="20%">

##### 坐标系：

设定轴向使用的坐标系（世界轴向/本地轴向）。

<img src="https://cdn.233xyx.com/athena/online/f356910f1c8e4eb3a002265b279f1a6d_222921303.webp" width="20%">

##### 参照对象：

设定对齐操作相对于哪个对象进行。

<img src="https://cdn.233xyx.com/athena/online/adb29690e2f34cebbce65d8e463a8340_222925692.webp" width="20%">

##### 操作方式：

1. 设定功能模式、对齐轴向、坐标系与参照对象。
2. 光标移动到**“确认对齐”**按钮可以预览对齐后对象的位置变化。
3. 点击“确认对齐”执行对齐操作。

##### 演示：
- 沿不同轴向进行最小 / 居中 / 最大对齐：

<video controls src="https://cdn.233xyx.com/athena/online/f21f046b35914070b46ae46c7cb3bb19.mp4"></video>

- 沿特定轴向进行均匀分布：

<video controls src="https://cdn.233xyx.com/athena/online/8a5065bd1b5242c38724a04bbe36d315.mp4"></video>

- 结合“最小对齐”功能与“等距分布”功能搭建场景：

<video controls src="https://cdn.233xyx.com/athena/online/0aa0f194783e4984894bea3a77693726.mp4"></video>

### 3. 本地资源库

![](https://cdn.233xyx.com/athena/online/8312fdb150064b20a5554103474859d7_12328087.webp)

本地资源库提供了各种资源用以搭建各式各样的场景。
左侧 tab 切换分别是美术资源、预制体、游戏功能对象、收藏、历史记录、我的资源。

- 美术资源：用以搭建游戏世界。
  - 目录级别：美术资源——资源类型——主题。
- 预制体：包含复杂结构的对象组合。
  - 目录级别：预制体——主题。。
- 游戏功能对象：有某种通用能力的对象，用以实现游戏逻辑
  - 目录级别：游戏功能对象——资源类型。
- 收藏：供创作者自主收藏和使用资源。
  - 目录级别：收藏——资源类型——主题。
  - 创作者可通过资源预览窗口中的收藏按钮对指定资源进行收藏操作。
- 历史记录：记录最后使用的 100 个资源。
  - 目录级别：历史记录——资源类型——主题。
  - 信息存在本地，用户下次打开时的记录与之前一致。
- 我的资源：存放创作者上传的资源。
  - 目录级别：我的资源——资源类型。

#### 3.1 资源下载与预览

编辑器中的资源**存在云端**。需要**点击资源**进行下载。
点击下载完成的资源缩略图右上角放大镜，出现预览窗口对资源进行预览，静态模型、特效、动画支持**视口预览**。
若预制体内带有脚本，缩略图左上角将显示书页图标。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnN3IOQulKioAEqEnMc4aCfd.png)

其中，音效资源支持在资源缩略图中进行播放试听。

![](https://cdn.233xyx.com/1684490737758_200.gif)

##### 预览窗口相关：

1. 预览窗口中标签显示规则变化，隐藏了之前用以模糊搜索的**搜索标签**，新增**显示标签**，点击显示标签，可在资源库进行同类标签的搜索（暂时显示标签还未进行配置，配置后可看到各资源对应的显示标签）。
2. 隐藏了未配置注释的注释属性。
3. 支持通过方向键切换预览资源。
4. 对于可以播放的资源，播放入口如下图所示。

![](https://cdn.233xyx.com/1681957109950_611.png)

其中，音效资源支持在资源预览窗口中控制播放进度(其他可播放资源的播放功能优化将在后续版本上线)。
![](https://cdn.233xyx.com/1684490867541_125.gif)

每次进入工程时，会花费几秒的时间从服务器拉取资源的相关信息，用以资源的展示、筛选和搜索操作。

#### 3.2 资源使用

不同的资源有不同的使用方式，详情请参考资源相关手册。
右键资源可以复制资源 ID 和名称，方便在脚本中引用。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnMXxwgcXOmIf4XfBe87fjPf.png)

#### 3.3 筛选相关

支持对资源的**风格**和**分类**进行筛选。
风格的筛选通过下拉框选择，支持多选，结果取**并集**。
不同的资源类型有不同的风格，在同一类型下切换主题时，筛选不会清空。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnL0JI5oy2VX5zrDOcL804bh.png)

分类的筛选通过标签选择，支持多选，未显示完的标签可通过下拉按钮展开，结果取**并集**。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnko4H5zv1tovjN1kzWx9bUc.png)

分类筛选将对所选标签进行排列，取消某分类标签筛选时，该标签回归之原来位置。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnl0ggwAhwaIeSIItrdit8Ac.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnVWNM36sTMv2417FaY9KCMc.png)

风格与分类筛选条件之间取**交集**。
在切换**同一资源类型的不同主题**时，风格的筛选条件会被保留，分类的筛选条件会被移除。
支持搜索后进行筛选。

#### 3.4 搜索相关

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcngOPXaOUeOnEFfPSUpJ7Uzd.png)

可以通过资源名称、资源 ID、资源标签进行模糊搜索。
结束搜索状态时，会初始化导航目录，并清空当前的分类筛选，但风格筛选会在下次进入搜索前的目录时保留。

#### 3.5 其他

资源导航右侧支持拖动以调整区域大小。

- 拖拽存在宽度最小值与最大值，最小值一行显示四个资源，最大值显示两个资源。

![](https://cdn.233xyx.com/athena/online/18f21ce57b824d8bb2606e3b9d80ead5_12328510.webp)

资源导航支持快捷收起/展开。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnLC0o8uYV63PJCr8Vek9yHA.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnMKgLsopng8YxqD0dkrKGKc.png)

游戏功能对象支持通过 tips 跳转至对应产品手册。

- 鼠标悬浮至功能对象时，按住 alt 后可点击蓝色字体，从而跳转至对应手册。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnESnsILbC82Gv9X3gLfjdag.png)

### 4. 主视口

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcntJCC8Gdef0b29vWVoXvHag.png)

主视口用以搭建丰富多彩的游戏世界。

#### 4.1 选择对象

选择对象的方式有三种，分别是主视口点选、主视口框选、对象管理器点选。
 - 主视口点选：鼠标左键点击主视口中的对象即可选中，鼠标左键 +ctrl 多选对象。
 - 主视口框选：按住鼠标左键拖拽即可在界面中实现框选，可框选多个对象。
 - 对象管理器点选：鼠标左键点击对象管理器中的对象可以选中，鼠标左键 +ctrl 多选对象。

#### 4.2 摄像机操作

拖拽鼠标右键，可旋转摄像机（摄像机位置保持不变）。
滚轮滚动，可移动摄像机（摄像机朝向保持不变）。
WASD+ 鼠标右键，可移动摄像机并调整摄像机朝向（摄像机位置与朝向均改变）。

#### 4.3 主视口右键菜单

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnPHc3qnW9Xv7FWcV8llbXMe.png)

只有当选中某一对象时，主视口中的右键功能才可使用（粘贴除外）。
复制、粘贴等基本操作此处不再说明。
从对象某方观察：
- 将摄像机移动至该对象的某一个方位，方便从该方位观察此对象。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnobo82c2jBZOtwozMnVh8Hf.png)

对象聚焦：
  - 进入对象聚焦状态后，右键旋转摄像机角度时，摄像机将**围绕对象**进行旋转，方便从不同方位观察对象的细节。
  - 可通过快捷键 F，或主视口右键菜单中的“对象聚焦”，或者双击对象管理器中的某个对象进入对象聚焦状态。
移动对象至摄像机所在位置：
  - 将此对象移动至当前摄像机的位置，使得摄像机与当前对象锚点重合，修改的是对象的**位置**。
旋转对象至摄像机所对朝向：
  - 将此对象旋转至当前摄像机的朝向，修改的是对象的**旋转角度**。
向下吸附：
  - 将此对象向地面吸附，规则为**以包围盒触碰至地面为准**。
  - 若对象的包围盒已经和地面接触或者处于地面**下方，**则该操作无效。

#### 4.4 视图选择器

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnq9Mhzro2tfqxGMpMSUMNCe.png)

基础面（6 个）：包含前、后、左、右、上、下；
角面（8 个）：相邻三面所夹的角面，包含前上左、前上右、前下左、前下右、后上左、后上右、后下左、后下右；
单击视图选择器的某个**基础面/角面**，将旋转摄像机的位置和方向，将视图切换至该面。
按住鼠标左键，可拖拽视图选择器在主视口的位置。

#### 4.5 场景模式和预制体模式

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnpQoXeuLaL6sODaxPhjwoBe.png)

主视口分为两种编辑模式，场景模式与预制体模式：
- 场景模式下，编辑的是**游戏场景**。
- 预制体模式下，编辑的是**某个预制体**。
预制体模式下编辑预制体后，可点击工程内容中的保存按钮或切换至场景模式保存预制体。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcntvAgwUK9NjIjidiH4L4Hig.png)

当双击预制体文件或者新建预制体时，上图中的切换按钮将会出现，单击即可模式切换；也可以通过主视口右上角关闭按钮关闭预制体编辑界面。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcntKtojyJyCJoKGE7Ck44Ujf.png)

### 5. 工程内容

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnXkyb9xwX4bn7FMiO31Pigc.png)

工程内容目的是管理与编辑此工程使用的文件。
左侧目录为文件类型分类，不同分类的功能有所区别，同时左侧也是导航区域，可通过左侧导航快捷访问**文件夹路径**。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn952MNg4ED23joNEn2oaHoe.png)

左侧目录同时支持文件夹的右键菜单操作，下面会说明各类型下文件夹的功能。

#### 5.1 平铺模式和列表模式

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnhqzs7oCACvd9yKOCtf5PSg.png)

新增排列方式的选择：
  - 功能入口为在工程内容页右上角图标，左侧为列表方式显示，右侧为平铺方式显示。
  - 排列方式信息存储至本地。

#### 5.2 快捷路径访问

左上角提供快捷路径访问功能，点击对应文件夹，将跳转至该文件夹下。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn8r0l3wW3Aug8tm3Hvedn5d.png)

#### 5.3 搜索功能

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnQxuH5TBkEBpicFeOnMvlxd.png)

基于当前选中的目录**包含同级向下搜索**。
搜索规则为按名称模糊搜索。
切换左侧文件分类时，搜索关键词不会进行清除。

#### 5.4 预览功能

- 平铺模式：hover 至文件时，图标右上角出现预览入口。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnpZtvR6Sd39wPborM3PrJHe.png)

- 列表模式：hover 至文件时，该行最右侧出现预览入口。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnms1WbgUAz31y6JTyKzm1Af.png)

- 点击此按钮，打开预览窗口，预览窗口以单独窗口存在，可拖拽至屏幕内任何位置。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnBbkehFXmDtxOXQOvP0Uqlc.png)

- 脚本预览：提供 GUID、名称的复制按钮，并显示脚本详细信息。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnFX3bR7ndT3igeA0Jz3Eyxe.png)

- 预制体预览：提供 GUID、名称的复制按钮，并显示预制体结构，支持视口预览。

  - 预制体结构树支持展开与收起节点。
  - 视口预览：类同于主视口摄像机操作，可更好的观察此资源。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnh6G0w4wcOSodNt0nwFQUMd.png)

- UI 文件预览：提供 GUID、名称的复制按钮。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnCS7VvMEwYQPUHxPUww2sDc.png)

- 角色文件预览：提供 GUID、名称的复制按钮，以及预览视口。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn7XFUfeW7VkUKhKOW69EHUd.png)

#### 5.5 脚本

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn7lRDztjMNVPyerALgtT4lC.png)

- 左侧导航栏切换至脚本时，右侧提供新建脚本、新建 UI 脚本、导入脚本按钮。
- 新建脚本：点击此按钮，在**当前目录下**新建一个脚本。
- 新建 UI 脚本：点击此按钮，在**当前目录下**新建一个 UI 脚本。
- 导入脚本：点击打开 windows 资源管理器，在当前目录下导入脚本文件。
  - 只允许导入 ts 格式的文件。
  - 导入时支持多选。

- 脚本文件的使用：
  - 将脚本文件拖拽至主视口或对象管理器中即可生效。
  - 具体挂载层级和脚本里代码逻辑有关。

- 右键菜单——右键脚本文件

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnneX3ojMDR79vZe1apd2Xod.png)

- 复制、粘贴等基本操作此处不再说明。
- 选择最近引用对象

  - 工程内容中的文件与对象管理器中的同一对象是**引用关系**（如拖拽一个脚本至对象管理器内，对象管理器中的脚本对象实际上是引用的工程内容里的脚本文件）
  - 同一脚本文件可能被引用多次，故此功能为在**对象管理器中选中最近一次引用的对象**

- 编辑

  - 点击编辑后（或者双击脚本文件），将自动打开 VScode，编辑脚本
  - 若没有 VScode，请用户自行前往 VS 官网下载
- 导出

  - 点击导出后，打开 windows 资源管理器，存储脚本文件，主要目的是**不同工程复用脚本**
- 刷新

  - 更新脚本信息至最新（在 VS 中编辑后需要点保存）
- 右键菜单——右键空白区域

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnWy3mm96g0DSZ0x4wmnWuzh.png)

- 刷新、粘贴功能此处不进行说明
- 创建文件夹

  - 在当前目录创建一个文件夹
  - 可以将不同脚本拖入不同文件夹中，方便管理
- 右键菜单——右键文件夹

  - 一些基本的操作，此处不进行说明

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnzOsVMKyO1QhCRMvlBZRm7c.png)

#### 5.6 预制体

- 预制体在工程内容中以文件夹形式存在

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnHoHeFwQd6a73ftbp3zqeLh.png)

- 该文件夹包含了一个预制体文件，一个脚本文件夹与 UI 文件夹

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnOnx9xUTLY1LWOQSfWGyEDe.png)

- 双击**预制体文件**，主视口进入预制体编辑状态

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnwQqa5KxwKhoQrLJVKsjFcf.png)

- **修改后**，工程内容预制体界面出现保存按钮

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnZ59MhxS37NjatpO7cIfOVf.png)

- 预制体的右键功能与脚本大体一致，不同的点如下

  - 预制体界面不支持创建文件夹
  - 预制体文件夹中的脚本与 UI 文件夹**不支持删除、重命名、粘贴操作**
  - 预制体文件夹支持导出功能，方便**对于整个预制体进行复用**
- 预制体的使用

  - 将**预制体文件（非文件夹）**拖入主视口或对象管理器中即可生效
- 预制体详细功能请参考预制体使用手册[预制体功能说明](https://meta.feishu.cn/wiki/wikcnwUnCTbhvEDchl5oqeF89lf)

#### 5.7 UI文件

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnzZok93zOBd0ar5I7dQA3Oz.png)

- UI 文件界面提供新建 UI 按钮，点击后在**当前目录下**新建一个 UI 文件
- 文件夹操作与脚本一致
- 右键 UI 文件，功能与脚本基本一致，唯一区别是编辑（双击）UI 文件时，将自动拉起**UI 编辑器**
- UI 文件的使用

  - 将 UI 文件拖入主视口或对象管理器中即可生效
- UI 编辑器相关使用请参考 UI 编辑器手册

#### 5.8 角色

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnygrru6Bh41iQNSckamL1Nk.png)

- 角色界面提供新建形象与导入角色形象数据按钮
- 点击新建形象（或者双击角色数据文件），拉起**角色编辑器**
- 点击导入角色形象数据，拉起 windows 资源管理器，可选择之前导出的角色数据，主要目的也是为了不同工程**数据复用**
- 文件夹操作与脚本一致
- 右键角色数据文件功能与脚本一致，唯一区别是编辑（双击）角色数据时，将自动拉起**角色编辑器**
- 角色数据的使用

  - 可拖入主视口或对象管理器中**以单独的角色数据存在**
  - 角色数据目的是修改角色形象，若想用于角色身上（如把一件衣服穿在人身上），**需要在角色编辑器中使用或在脚本中调用对应****API**，具体请参考角色编辑器手册

#### 5.9 材质

- 材质文件与其他文件不同，需要具体的材质资源支持。材质文件为描述文件（prefab 也是描述文件），描述的是该材质资源的参数配置
- 欲自定义材质，首先需要到属性面板中找到材质属性，并点击编辑材质按钮

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnyBuVZul08kRUUqkiofn68b.png)

- 点击按钮后，会基于该材质资源，在工程内容中新建一份材质文件

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn9R9Hms6Y0LQilLroNOZYDb.png)

- 双击材质文件，可以编辑该材质的属性，以及该材质使用的贴图资源
- 修改后，点击保存，将保存该材质的参数设置

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn07dkh6SK9EGpyjOHXpTXTb.png)

### 6. 输出窗口

- 输出窗口用以查看日志

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnuAtPHJm6WWApxevgL1Z7YT.png)

- 输出窗口分为服务端，客户端 1/2/3/4，通过菜单栏——视图决定是否显示

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnvDwIHg9fiaNwxKcZl1lL3a.png)

- 日志级别分为信息、警告、错误、输出，通过下拉选择

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnDmhDOBaMT05QqhYbRfV2uh.png)

- 右键操作

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcni4WmpeLsKrhW8abKDJUHyg.png)

- 提供清空日志、复制、打开日志目录操作

### 7. 对象管理器

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnNvJb97jaeD3eIYvyACnyUc.png)

- 对象管理器用以管理场景中使用的各类对象
- 根目录分别是世界、对象、寻路区域、优先加载，每个区域对应的含义不同

  - 世界下对象：不可删除，场景中必须存在的对象，如摄像机、天空盒等
  - 对象下对象：一般的对象，也是构建游戏世界的主要部分
  - 寻路区域下对象：只允许挂载“寻路区域”“寻路区域修饰”逻辑对象以及脚本
  - 优先加载下对象：放入此区域的对象将在启动游戏时加载，加载完成后才会进入游戏

#### 7.1 挂载操作

- 将对象置于某对象的子级：拖拽对象至另一对象上

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnQZAFJlWjjiwHckF2IZ258f.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnLQnktWNPfcnEpL7BWZbC8d.png)

- 将对象置于某对象的平级：拖拽对象至两对象之间的横线上，同时也可用于平级移动

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnDTFTec9kVABDvwBzQpDEof.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnhUL3Ct1mZ9765wbap4JJph.png)

#### 7.2 全部展开或全部收起功能

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnehjEAkffhgZJfc2RY1852b.png)

- 只有**根目录“对象”**有此功能
- 点击此按钮，“对象”下的所有树状结构分支将全部展开/全部收起

#### 7.3 搜索功能

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn1y4mBZqCf6hEC3LmDJtNEd.png)

- 支持对各对象的**名称与 GUID**进行模糊搜索
- 搜索状态下选中对象后，退出搜索状态时仍可以定位至该对象（若多选则定位至最后一个选中的对象）

#### 7.4 筛选功能

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn03zoH1xjlCnTuJswrgqldb.png)

- 支持对对象的静态状态、网络状态、视口展示、视口锁定、文件属性进行筛选
- 筛选后的选项通过标签形式展现，点击标签清除按钮可删除该标签

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnsjNPFqqGqvxXjvwHIAy0Sh.png)

- 筛选结果**同一条件与不同条件之间均取并集**

#### 7.5 对象右侧网络、锁定、显示属性

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnCxxgXlFrN4tkGGelENYpzf.png)

- 锁定/隐藏按钮显示逻辑

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnJV6z6OZqJbZ9ZLO2c7NQh2.png)

- 锁定/隐藏按钮处于“已锁定”或“已隐藏”状态下时，按钮正常显示在对象管理器中
- 锁定/隐藏按钮处于“未锁定”或“未隐藏”状态下时，需鼠标悬停对象上才显示对应按钮
- 网络状态：点击图中“S&C”按钮，展开网络状态的选择

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnaHCFMSbQLQfi8yS2EDjrRg.png)

- 该属性也可以在属性面板中进行设置
- 锁定状态：点击锁定按钮，切换锁定/未锁定状态

  - 锁定的对象在主视口中不可选中，只有在对象管理器中选中该对象，并在主视口显示红色框

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnr0tDFCUQIXguMMMYyCm0Qh.png)

- 显隐状态：点击显隐状态按钮，切换显示/隐藏按钮

  - 隐藏的对象在主视口中不可见

#### 7.6 场景模式和预制体模式

- 和主视口一样，对象管理器也分场景/预制体模式
- 在进入预制体编辑状态后，对象管理器中将显示该预制体的结构，而不再是世界场景；和主视口同步

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnGnUv4Pn2jiJsO1mWI9fldb.png)

#### 7.7 右键菜单

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnub9VoNiXRtffxrP7Th3pCc.png)

- **不同根目录、文件类型**的右键菜单功能所提供的**功能范围不同**，**但功能种类基本一致**；下面说明一些常用的功能
- 基本操作此处不再进行说明
- 添加至优先加载对象

  - 将所选对象添加至优先加载区域中
- 粘贴和粘贴至

  - 粘贴：粘贴到选中对象的**同级**（未选中对象时粘贴到根目录“对象”子级）
  - 粘贴至：粘贴到选中对象**子级**
- 创建文件夹&&包含选中创建文件夹

  - 创建文件夹：在选中对象的**子级**创建文件夹
  - 包含选中创建文件夹：文件夹创建在选中对象的**同级**，选中对象变为文件夹的**子级**
- 创建合并对象&&包含选中创建合并对象

  - 只有静态模型才能合并，合并对象可以**优化运行时的性能**（多个 mesh 变一个 mesh）
  - 选中一个对象时或者“对象”根目录时，可以在该对象的子级创建一个空的合并对象，用户可以往空合并对象中拖拽静态模型
  - 选中一个或多个对象时，可以包含选中的这些对象创建一个合并对象，相当于把这些对象进行了合并
  - 右键合并对象，可解除合并

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnQ5ocY3zAJ7rvzwXHP0ShMf.png)

- 创建游戏功能对象

  - 仅在单选时可用，多选时不可用
  - 在该对象的**子级**创建一个指定的功能对象，方便对该对象处理游戏逻辑

![](https://cdn.233xyx.com/1681957211590_811.png)

- 对象聚焦：功能与主视口相同
- 定位来源

  - 背景：**对象管理器中的对象实际上是引用对象，本身只是一个引用关系，而不是数据本身**
  - 将对象的数据来源置于选中状态（**来源一般是资源库与工程内容**）
  - 如从资源库拖拽一个资源至主视口，定位来源按钮可直接定位至资源库该资源的位置，并置于选中状态
  - 若数据来源消失，则对象管理器中的对象将会变成红色，此时此对象已经没有意义

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnw0lwP65OPBFO0sWn6el8yg.png)

- 生成为预制体

  - 将选中的对象生成为预制体，并在工程内容中新建此预制体
- 预制体对象相关

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnD4VNfpAAaLeUjAYB1UyIuf.png)

- 预制体对象与常规对象功能有所区别，主要新增了图中所示三个功能
- 编辑预制体

  - 主视口与对象管理器均进入预制体编辑模式，对该预制体进行编辑
- 以预制体引用对象更新预制体

  - 未进入编辑状态时编辑预制体，如直接在对象管理器中修改预制体的树状结构时（**这时预制体在对象管理器中会变成黄色，此时预制体从普通状态进入实例状态**），使用此功能可以保存预制体的修改

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnt5jbOmWp2YHPPpTaJzlh9S.png)

- 重置预制体

  - 使预制体从实例状态变为普通状态（紫色变黄色），即撤回本次实例状态下在对象管理器中对此预制体结构的修改
- 另存为新预制体

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnRGK3veGoaz4mkYJnT4HW9d.png)

- 在预制体**进入实例状态后**，该选项出现

- 将此在对象管理器中修改过的预制体另存为一个新预制体，工程内容将新增此预制体，对象管理器中原预制体也同步更新为此新预制体

### 8. 属性面板

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnNzJb0qbIHbjxLHXxHhiYYf.png)

- 属性面板用以**预览资源信息和修改对象属性**
- 预览功能之前已经分别在本地资源库和工程内容中讲过，故下面主要说明修改对象属性相关操作

#### 8.1 搜索功能

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn4pbivzvA9rId27GcyMVQUh.png)

- 支持对**属性名称**进行**中/英文**的模糊搜索

#### 8.2 基础属性

- 名称、tag、网络状态、动静态、GUID 个属性统一归类于“基础属性”

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnXaagEhK5LMP02q60T1FLAc.png)

#### 8.2 数值修改

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnsFxzYeEWEBJiRehtaa4kzf.png)

- 数值基本都通过图中所示控件进行修改
- 按住输入框左右滑动可修改数值，也可以单击后直接输入
- 对于材质属性而言，编辑材质属性时，需要先自定义材质方可修改（生成一份材质描述文件至工程内容中）
- 当此材质资源引用了工程内容中的文件时，使用该材质的属性才可以在属性面板进行修改

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnaDIju8OwzoZrEFQeryXmd9.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnMw5AQpNzUh45Nlo8wZMXUe.png)

#### 8.4 重置按钮

- 几乎所有属性都支持重置，修改属性后重置按钮会出现
- 重置会将此属性重置为**系统默认初始值**

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnCHhQ9VodRT5EQTuPoV5QVg.png)

#### 8.5 取色器

* 点击图中的颜色区域，打开取色器

![](https://cdn.233xyx.com/1681959311438_968.png)

![](https://cdn.233xyx.com/1681959311710_690.png)

* 颜色修改操作
  * 取色器提供RGBA和HSV **两种色彩模型，** 一般来说，用户只需要调整RGBA或者HSV这两种色彩模型中的一个即可
  * 方式一：修改RGBA与HSV数值，可按住拖拽或者双击输入
  * 方式二：直接输入16进制颜色码
  * 方式三：单击或按住拖拽取色盘
    * 除了图中的圆形取色盘，点击下图按钮，可以切换至方形取色盘，用户可以根据自己的习惯进行选择
      ![](https://cdn.233xyx.com/1681959311521_635.png)![](https://cdn.233xyx.com/1681959311478_604.png)
* 新旧颜色对比
  * 旧颜色是指当前此颜色属性使用的颜色，新颜色是当前取色盘里的颜色，目的是**方便对比**
    ![](https://cdn.233xyx.com/1681959311561_738.png)
* 主题相关操作
  * 主题用以存储常用颜色，相当于颜色的收藏夹，用户可以对主题中的颜色进行新增或者删除，也可以新建多个主题
  * 点击右侧的下拉按钮，打开主题操作面板
    ![](https://cdn.233xyx.com/1681959311603_937.png)
  * 主题颜色的添加：用户可以将颜色从左侧“新旧颜色”**拖拽**至取色器下方颜色存储区域，被拖入的颜色将存储在一个主题中
    ![](https://cdn.233xyx.com/1681959311358_825.png)![](https://cdn.233xyx.com/1681959311228_858.png)![](https://cdn.233xyx.com/1681959311400_859.png)
  * 主题颜色的删除：打开主题显示界面，拖拽颜色方块时下方将出现回收站图标，将方块拖入图标中即可删除
    ![](https://cdn.233xyx.com/1681959311644_181.png)
  * 主题的新增、删除、重命名与拷贝：选中主题后，可对主题进行一系列操作，操作简单，此处不赘述
    ![](https://cdn.233xyx.com/1681959311314_180.png)

#### 8.6 吸管

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnP8yLCNhBG9ke70wYUivjve.png)

- 部分对象存在吸管控件，常见的如物理约束，也可以在脚本中定义吸管

![](https://cdn.233xyx.com/1681957350504_938.png)

- 操作方式：单击图中吸管图标后，在主视口点击对象即可；同时还可以直接将对象从对象管理器中拖拽入框中
- 对于已吸取的对象支持定位功能，方便找到所吸取的对象在对象管理器中的位置
- 吸管下的框禁止输入，若想清空吸管对象，点击吸管按钮旁的重置按钮即可

#### 8.7 资源选择控件

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnDBHyjODC84UNbp3fn4gTuQ.png)

- 该控件目的是**用资源库/工程内容中的资源替换当前使用的资源**
- 操作方式：拖拽本地资源库/工程内容中相同类型的资源，可实现资源的使用；具体详情请用户查阅资源相关手册

#### 8.8 加减组件

- 点击右侧新增按钮，可新增该属性对应的结构体
- 点击某一结构体右侧的删除按钮，可删除该结构体

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnBxpPDMJAudxgkrE6waBo2c.png)

#### 8.9 其他控件

- 除了上述几个控件之外，属性面板中还有一些常见的控件，如单选框、下拉框、文本输入框，操作简单，此处不再说明
