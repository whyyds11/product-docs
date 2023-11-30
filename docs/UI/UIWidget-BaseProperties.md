# UI 控件的基础属性

**阅读本文大概需要 15 分钟**

本文概述了 UI 控件的变换、对齐、通用、渲染这四类基础属性的使用方法。
在每种控件的具体介绍文档中，我们会说明各个控件其他属性的作用和使用方法。

## 什么是 UI 控件以及基础属性？

**UI 控件**是搭建游戏界面时能够用到的基础控件，在 UI 编辑器中我们会提供了容器、图片、按钮、文本、输入框、进度条、滚动框、摇杆、摄像机滑动区等控件。

**基础属性**是指每种 UI 控件都包含的**变换、对齐、通用、渲染这四类属性。**

## 变换

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn950nr4JyqJ3p6YhE1venJh.png)

### 坐标-位置

- 修改 UI 控件在主视口的显示位置
- 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnBWIN3NBaul6bBT66rDgi1c.gif)

### 坐标-大小

- 修改 UI 控件在主视口的显示大小
- 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn8aI4US7tX0TrfCa2Jgn8ec.gif)

### 角度

- 修改 UI 控件在主视口的旋转角度，正数为顺时针旋转，负数为逆时针旋转。
- 以渲染锚点为旋转中心，渲染锚点的设置方法见下文【渲染】-【渲染锚点】
- 数值范围：-180 - 180
- 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnKb7yeaNrSwU4vUguR32reh.gif)

### Z 系数

- 修改 UI 控件的层级，系数越大层级越高。
- UI 控件的层级逻辑：同一父级下的各控件层级由 Z 系数决定，Z 系数相同时由对象列表上下顺序决定，对象列表中位于更下方下的控件显示在上层；任何子级控件都显示在其父级控件上层
- 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnsBYkYpkrsluOy3GWoPU5cf.gif)

::: tip
这里请注意区分 UI 控件 Z 系数和 UI 对象层级的区别：UI 控件 Z 系数是用于修改某个 UI 对象中的某个控件或者自定义 UI 控件的层级，而 UI 对象层级是用于修改 UI 对象的整体层级，UI 对象层级的优先级高于 UI 控件 Z 系数
:::

- 两个处于不同 UI 对象中的 UI 控件，UI 对象层级更高的 UI 控件渲染在上层，与 UI 控件 Z 系数无关
- 两个处于同一 UI 对象内的 UI 控件，UI 控件 Z 系数更大的控件渲染在上层
- UI 控件 Z 系数在 UI 编辑器对象列表中选中 UI 控件后再属性面板中修改，而 UI 对象层级在主编辑器对象列表中选中 UI 对象后在属性面板中修改，两者也都可以在脚本中修改

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnRuCFkO0jlJ30jJKtjjSvSb.png)

修改 UI 控件 Z 系数和 UI 对象层级的脚本示例：

```ts
//修改某个UI控件或者自定义UI的z系数
btn.zOrder=0
//修改UI对象层级
this.uiObject.zOrder=0
```

### 溢出隐藏

- 超过容器的大小范围时，是否隐藏超过范围的内容
- 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnxHnqEzLP0HGoHBBf5WHzQe.gif)

### 自动大小

- 选择自动大小后，UI 控件的大小还原至初始大小

  - 例如文本控件开启自动大小将还原至文字内容的大小，图片控件开启自动大小将还原至图片-图片大小
  - 自动大小不能与对齐-自适应/上下对齐/左右对齐同时使用，如果启用自适应等对齐方式，将不能使用自动大小
  - 为了避免冲突，对于文本控件，仅在水平显示=裁剪且不开启自适应文本框的情况下允许开启此选项

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcni3iz3T97mbMsdg5XsA3obj.gif)

## 对齐

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnOtFGmHz6ebeVQUKCJMNlab.png)

### 对齐

- 是指根据父级的拉伸/位移进行 UI 布局的对齐方式，方便对不同机型进行 UI 适配。

### 水平方向
- 靠左对齐
  父级无论如何变化，UI 控件依旧保持靠左边距的距离不变，且大小不变
  示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnZDllX6w9A90igPaRSH5f35.gif)

::: tip
需要说明的是，在这一系列的演示动图中，白色图片并不是直接跟随游戏画面长宽比自适应变化的；白色图片的父级是上下对齐+左右对齐的Rootcanvas以及Root，Rootcanvas以及Root会自动跟随游戏画面长宽比变化填满屏幕，进而改变白色图片的位置和尺寸
:::

- 靠右对齐
  父级无论如何变化，UI 控件依旧保持靠右边距的距离不变，且大小不变
  示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn9dmacbOvcxViETmJKhEeih.gif)

- 左右对齐
  父级无论如何变化，UI 控件依旧保持靠左边距和靠右边距的距离不变，大小会发生变化
  示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnbYalFiZPrAV2FFIhskhPqh.gif)

- 中心对齐
  父级无论如何变化，水平方向上，UI 控件依旧保持和父级中心位置的相对距离不变，且大小不变
  示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnHjkvN8PBa9bwBsexKWTo8d.gif)

- 自适应
  水平方向上，UI 控件会根据会根据父级的变化进行自适应的变化比例大小
  示意图：
  ![](https://cdn.233xyx.com/1681612910124_593.gif)

### 垂直方向

- 靠上对齐
  父级无论如何变化，UI 控件依旧保持靠上边距的距离不变，且大小不变
  示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnywBOu5DiFHLrYPGlO3jpWe.gif)

- 靠下对齐
  父级无论如何变化，UI 控件依旧保持靠下边距的距离不变，且大小不变
  示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn02FUkSErKNs3HNQY9vwwze.gif)

- 上下对齐
  父级无论如何变化，UI 控件依旧保持靠上边距和靠下边距的距离不变，大小会发生变化
  示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnIjAuQSkJWq9jPPHl6ZZO6g.gif)

- 中心对齐
  父级无论如何变化，垂直方向上，UI 控件依旧保持和父级中心位置的相对距离不变，且大小不变
  示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcni8ioTU2U8FdbhczLx6jJge.gif)

- 自适应
  垂直方向上，UI 控件会根据会根据父级的变化进行自适应的变化比例大小，
  示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnp9b8MMxFAA3WRDmxWgWEzf.gif)

### 举例：不同情景下的对齐使用方式：

- 1.如果想摇杆/摄像机控件大小按玩家屏幕比例自动变化，推荐摇杆/摄像机控件的对齐方式=自适应

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnyl5gHztJWlpcx7cdQSPVBe.gif)

- 2.如果制作自动计算高度的文本气泡，想让文本控件与容器的边距保持不变，推荐文本控件的对齐方式=上下 + 左右对齐

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnFfFyjw2wlCzBbGVSr15Htf.gif)

- 3.如果制作一个菜单，并不想其比例跟随玩家屏幕比例变化，推荐容纳菜单的容器控件对齐方式=中心对齐
  
  - 这时，由于菜单大小固定不变，容器内部各控件的对齐方式不会各自大小产生影响，最终菜单的效果会和 UI 编辑器中相同

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnt6EAq9LBv1nlNjrbACuTkg.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnkgUkiytPtSG1DUZjVdj6Ah.png)

## 通用

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnToqu5TdGSUvNFZbGNkRFKh.png)

### 名字

- UI 控件的名称，方便用户在脚本中进行调用。

```ts
//找到对应的按钮
let btn = this.uiWidgetBase.findChildByPath('Canvas/btn') as Button
```

### 可用性

- UI 控件是否可以与用户进行交互式修改；

  - 当设置为不可用时，该控件进入禁用模式，外观会按照禁用模式下的相关设置进行改变。
  - 无论是否可用，UI 控件的可见性为可见时，所有操作都无法穿透此控件

### 可见性

- 可见（Visible）

  - 可见，并可以进行点击交互
  - 举例说明：两个重叠的按钮，Btn2 层级高于 Btn1，两个按钮均设置为可见，执行点击后则仅能点击到上层的按钮（Btn2）。
  - 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn2ulI0omYzoFiuoyZr58sVd.gif)

- 折叠（Collapsed）

  - 不可见，不占用布局空间，不能进行点击交互
  - 布局空间：UI 控件的位置和大小，相当于减少控件的部分计算。
  - 举例说明：多个按钮进行放置在容器里，容器将他们自动布局，排列为垂直方式，其中将第二个按钮进行折叠，则表现为第二个按钮的位置将会被第三个按钮所替代。
  - 示意图：

- 隐藏（Hidden）

  - 不可见，占用布局空间，不能进行点击交互
  - 举例说明：多个按钮进行放置在容器里，容器将他们自动布局，排列为垂直方式，其中将第二个按钮进行隐藏，则表现为第二个按钮的位置将会被预留出来，显示为空的状态。
  - 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn5Ko00T8aT1XjIvP6gKnIkg.png)

- 可见不可交互（HitTestInvisible）

  - 可见，但无法进行点击交互，且层级中的子项也无法进行点击交互，所有操作会穿透此控件及其子项
  - 举例说明：容器里放 Btn1 和 Btn2，如果容器设置为可见不可交互，则 Btn1 和 Btn2 均不可点击。
  - 注意：虽然容器不可点击，但容器具有穿透效果，如果该容器层级下有一个按钮（非该容器的子项），则依旧可以点击到该按钮。
  - 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnGTjHuTSIyiM1ErPPAedNVh.gif)

- 可见不可交互仅自身（SelfHitTestInvisible）

  - 可见，但无法进行点击交互，但不影响层级中的子项进行点击交互，所有操作会穿透此控件
  - 举例说明：容器里放 Btn1，如果容器设置为可见不可交互仅自身，则 Btn1 可被点击。
  - 注意：虽然容器不可点击，但容器具有穿透效果，如果该容器层级下有一个按钮（不属于该容器的子级），则依旧可以点击到此按钮
  - 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn1x4VVn4xEqPqeT18AX56bf.gif)

## 渲染

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcniS5OiyIJtN1thMOBjeWGAf.png)

- 渲染属性是在 UI 控件的布局空间不变的情况下，针对 UI 控件进行的位移和形变。

  - 修改渲染倾斜度、渲染缩放、渲染偏移的 UI 控件将无法使用 UI 编辑器的对齐辅助线功能

### 渲染锚点

- 渲染锚点是 UI 控件进行形变和位移时，所依据的中心点位置。

| 锚点 Y\锚点 X | X=0                                         | X=0.5                                       | X=1                                         |
| ------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| Y=0           | ![](https://cdn.233xyx.com/athena/online/b3ddfc2812b149d2bf8c45ad832bb444_11631162.webp) | ![](https://cdn.233xyx.com/athena/online/af032167828d48f9b66b98481c68fb7b_11631163.webp) | ![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnUFz9YbzteH3Wkn5k8sDjqc.png) |
| Y=0.5         | ![](https://cdn.233xyx.com/athena/online/d81d5c008b44451e838d60788e150343_11631164.webp) | ![](https://cdn.233xyx.com/athena/online/d73ceaacc4214b2dba0747e5a9755442_11631165.webp) | ![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnlsETwfrgKXayqx89XbW5bg.png) |
| Y=1           | ![](https://cdn.233xyx.com/athena/online/4a549433c39e42848a54b4535866cfad_11631166.webp) | ![](https://cdn.233xyx.com/athena/online/418f52e399bb4ae7a28802b592bb6a3d_11631167.webp) | ![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnj1povWrJtRyMOzcaVvUQTg.png) |

### 渲染倾斜度

- 以渲染锚点为中心，进行横向倾斜和纵向倾斜
- 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnNQCNh2I8QRCuf2nTuKxyUb.png)

### 渲染缩放

- 以渲染锚点为中心，进行 UI 控件的缩放。
- 举例说明：将 UI 控件放入容器中，进行自动布局后，如果修改的是 Transform 的大小，则自动布局的将会根据图形的变化而变化，而如果修改的是渲染缩放，则自动布局不会发生改变。
- 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnYvMbJuX50TzganW8w3WHXd.png)

### 渲染透明

- 渲染透明主要用于统一处理成组的 UI 控件，方便操作与管理。
- 举例说明：将容器内所有 UI 控件不透明度都降低至完全透明，并且仍可交互
- 示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnLjY7JfWZzWsHSyUo7ERpQf.gif)

### 渲染偏移

- 渲染偏移主要用于设置渲染出的图形与 UI 控件的相对位置。

### 渲染空白大小

- 渲染空白大小主要设置渲染出的图形与 UI 控件的相对大小。
- 组合举例说明：制作一个可点击范围的大小和位置与实际渲染不同的按钮。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnEzZPfT9AMXmJvKIvhmN7uh.png)

## UI文件（自定义UI）的整体属性——Root属性

- 打开某个UI文件后，选中对象管理器中的Root，可以在对象属性面板中修改这个UI文件的整体属性
![](https://cdn.233xyx.com/1681459811547_635.png)

### 变换/对齐/通用/渲染

- 这四个分组的属性的用法与前文单个UI控件的这四个分组的属性完全相同，不再赘述
  
  - 例如调整Root的渲染透明度，就是此UI文件整体的渲染透明度
    ![](https://cdn.233xyx.com/1681458030118_551.gif)
  - 除了属性面板，还可以在脚本中找到UIScript.uiWidgetBase或UIObject.uiWidgetBase来找到对应的UI对象的Root节点，进而调整UI对象的整体属性，uiWidgetBase与属性面板中的Root完全对应
  - UI文件还可以作为自定义UI控件（即UserWidget），在UI编辑器拖拽到其他UI文件里或者在脚本中动态添加到其他UI对象中，UI文件内root的变换/对齐/通用/渲染这四个分组的属性会自动应用到新建的自定义UI控件；**也就是说只需要修改一次UI文件root的属性，不需要每次创建自定义UI都设置一次**
    ![](https://cdn.233xyx.com/athena/online/17068f7ebe604db6836835f1e394c538_11631157.webp)
- 下面，我们来单独介绍一下Root对齐属性的用法，这部分较难理解，也比较容易出问题：
  
  - 用UI文件新创建自定义UI控件时会把原UI文件内最底部设计尺寸视为旧容器，然后再根据其创建时新父级容器的大小和位置，以及自定义UI控件的对齐方式（也就是UI文件Root中的对齐属性），来决定创建后的自定义UI控件的位置和大小
    ![](https://cdn.233xyx.com/athena/online/c66331dfcd4146a08e4eb095e8538f3a_11631158.webp)
  - 新创建的自定义UI控件内部的每个控件仍然根据各控件的对齐方式，自上而下的决定大小和位置
    ::: tip
    请注意这一点！新建UI文件root会默认设为上下对齐+左右对齐，这是为了UI文件用作全屏HUD时能够自适应玩家设备尺寸比例。
    但如果此UI文件作为自定义UI控件使用时，不希望自定义UI控件的大小和位置跟随父级自适应变化（比如制作背包中的某一个格子），务必把此UI文件root设置为靠左对齐+靠上对齐！
    :::
    ![](https://cdn.233xyx.com/athena/online/40c64a242c4046b9be12406b8c6cbce6_11631159.webp)![](https://cdn.233xyx.com/1681458030869_215.gif)
  
    ![](https://cdn.233xyx.com/athena/online/1912e5e2670d43e6bc2e1b48d7d919ba_11631160.webp)![](https://cdn.233xyx.com/1681458030494_798.gif)

### TS脚本

- 用于设置当前UI文件所绑定的UI脚本，可以将想绑定的UI脚本拖拽到这里完成绑定

![](https://cdn.233xyx.com/athena/online/a4f71b3c1758473c962a04715a9004f8_11631161.webp)

::: tip
这里可以理解为：在此UI文件里，绑定了某个UI脚本；
当此UI文件作为UI对象被添加到游戏画面中，或者作为自定义UI控件被添加到某个已有UI对象中，这个UI脚本里的逻辑将会执行。
:::

- 除了可以在编辑器拖拽完成绑定，还有两种在脚本中将UI脚本与UI对象绑定的用法：
- **1.使用UIBind装饰器**
  - 首先，在UI脚本中使用UIBind装饰器，标记UI脚本归属于哪个UI文件
  - 然后，在另一个普通脚本/UI脚本中使用UIService.show运行此UI脚本，此UI文件也会作为UI对象添加到游戏画面

```TypeScript
import NewUI_generate from "./ui-generate/NewUI_generate";

@UIBind('NewUI.ui')
 export default class NewUI extends NewUI_generate {
     protected onStart() {
     }
 }
```

```TypeScript
import NewUI from "./NewUIScript"
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        UIService.show(NewUI)
    }
}
```


::: tip
这里可以理解为：在此UI脚本里，绑定了某个UI文件；
使用show函数将此UI脚本添加到游戏画面中，也就是将UI文件作为UI对象添加到游戏画面
:::

* **2.使用createUI创建UI并且同时完成绑定**

- 在普通脚本/UI脚本中都可以使用createUI创建UI并同时完成绑定，然后使用addToViewport添加到画面，这种方法不需要使用UIBind装饰器

- 注意：使用createUI时，参数中的UI脚本和UI文件绑定优先级最高，如果createUI参数中的UI脚本中用UIBind装饰器绑定了其他UI文件，其他UI文件会被覆盖；如果createUI参数中的UI文件挂载了其他UI脚本，其他UI脚本也会被覆盖


```TypeScript
import NewUI from "./NewUIScript"
@Component
 export default class NewScript extends Script {

     /** 当脚本被实例后，会在第一帧更新前调用此函数 */
     protected onStart(): void {
         let newui=createUI('NewUI.ui',NewUI) as UIScript
         newui.uiWidgetBase.addToViewport(0)
     }
 }
```
