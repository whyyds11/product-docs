# 创建游戏界面 (UI)

**阅读本文大概需要 10 分钟**

## 什么是游戏界面？

**游戏界面**指游戏软件的用户界面，包括游戏画面中的按钮、动画、文字、声音、窗口等与游戏用户直接或间接接触的游戏设计元素。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn6TY4Vc2JZhdHggVhlFS6Yd.png)

## 如何创建游戏界面？

- 首先在工程内容库中创建新的 UI 文件：点击工程内容的 UI 页签，点击新建 UI 按钮

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnL9xvf1LdabFWSFxh1QMtdp.png)

- 然后双击打开新创建的 UI 文件，会弹出 UI 编辑器
- 我们可以在 UI 编辑器中制作理想的游戏界面，并点击保存，即可保存此 UI 文件

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnpDtLBcodQqBpzQqxjwbeSm.png)

##### UI 编辑器模块说明：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnIm5u7XnzhGW34v31eqf49c.png)

- UI编辑器包括工具栏、系统UI控件和自定义UI列表、设计器、对象列表、属性面板、本地资源库、脚本列表：

  - 工具栏：放置保存、按键绑定、视图等常用设置功能。
  - 系统UI控件和自定义UI列表：放置通用的UI控件，以及自定义控件。
  - 设计器：展示界面效果，并可以对可视化的UI控件进行操作和修改。
  - 对象列表：放置所有UI控件，方便用户操作与管理。
  - 属性面板：展示选中的UI控件的所有属性，方便用户修改参数以达到预期效果。
  - 本地资源库：展示本地资源库中的所有UI贴图资源，方便拖拽到控件更换资源。
  - 脚本列表：展示工程内容中的所有脚本，方便拖拽到根目录Root的属性中。


## 如何使用 UI 编辑器拼接 UI？

- 首先我们要理解UI的基础控件都有哪些？
  - 包括：容器、图片、按钮、文本、输入框、进度条、滚动框等，具体UI控件的相关功能教程请见手册中的其他部分
- 我们在分析出一个UI的所有基本控件后，就可以将相应的控件拖入主视口内进行拼接UI。
- 例如我们想要拼接一个选择性别的界面。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcncPgfJH6lGczWN9Wjdebwrh.png)

- 首先我们拖入一个图片控件，作为界面的背景。
  - 可以调整图片的位置与大小，将图片放置在比较合理的位置；
  - 将对齐修改为水平方向为中心对齐，垂直方向为顶端对齐，方便界面适配；
  - 设置图片的样式。将资源库中的UI资源拖入到图片中，修改图片表现样式。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnjhS4e0az18uIVaDsAX8H7c.png)

- 其次我们拖入一个文本控件，作为界面的文字介绍。
  - 可以设置文字的位置与大小，将文字放置在比较合理的位置；
  - 将对齐修改为水平方向为中心对齐，垂直方向为顶端对齐，方便界面适配；
  - 设置文本内容，将文本修改为“请选择你的性别”，大小设置为24；
  - 设置文本样式，将文本颜色修改为黑色，对齐方式修改为居中。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnO4gd8PpMWzg4X2PzC6zwSd.png)

- 然后我们拖入三个按钮控件，作为性别选项和确认功能的UI，这样就完成了初步的UI拼接。
  - 分别设置按钮的位置与大小，将按钮放置在比较合理的位置；
  - 将三个按钮对齐修改为水平方向为中心对齐，垂直方向为顶端对齐，方便界面适配；
  - 再拖入一个文本控件挂在确认按钮下，并将文本修改为“确认”，大小设置为24；
  - 设置按钮的图片样式，将资源库中的UI资源拖入到图片中，修改图片。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnQnNwHToBWXzeIjU3tl7vgd.png)

##### 

## 如何将 UI 添加到游戏场景中？

- 在完成拼接 UI 后，我们将进行学习如何实现将 UI 添加到游戏场景中，并且能执行我们写在脚本中的逻辑。

### **方式一：在编辑器中将 UI 文件拖入场景**

- 在主编辑器中，直接将UI文件拖入游戏场景中或对象列表中，就可以把UI文件实例化为UI对象；
  - 使用这种方式不需要在脚本中编写如何添加UI，进入游戏后，对象列表中存在的UI对象会自动添加到游戏场景中

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnDCCIrwapz8gnFltfstOTxg.png)

- 如果想要为UI文件编写逻辑（例如用按钮执行跳跃/选择性别），首先我们需要创建一个新的UI脚本。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnEqnvluM4lJdtqUaPiSyKRb.png)

- 打开刚才拼好的UI文件，在其根目录Root的属性下，将UI脚本拖入属性栏，完成UI脚本与UI文件的绑定。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnAUFsMbAzA2Eo0bup5Hv2ab.png)

- 最后点击UI编辑器菜单栏的【打开脚本】按钮，或者双击【工程内容】-【脚本】中新建的UI脚本，打开此UI文件所绑定的UI脚本，就可以编写相关的UI逻辑。
  - 例如实现一个跳跃按钮的简单逻辑：

```ts
@UI.UICallOnly('')
export default class UIDefault extends UI.UIBehavior {
    character: Gameplay.Character;

    /** 仅在游戏时间对非模板实例调用一次 */
    protected onStart() { 
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        //找到对应的跳跃按钮
        const jumpBtn = this.uiWidgetBase.findChildByPath('Canvas/Button_Jump') as UI.StaleButton
        //点击跳跃按钮,异步获取人物后执行跳跃
        jumpBtn.onPressed.add(()=>{
                Gameplay.asyncGetCurrentPlayer().then((player) => {
                    this.character = player.character;
                    //角色执行跳跃功能
                    this.character.jump();
                });
        })  
    }
}
```

- 由于在编辑器中被拖入对象列表中的UI文件已实例化为UI对象，游戏开始后所绑定的UI脚本内编写的逻辑会在游戏中执行，只要玩家点击跳跃按钮就能使角色跳起来了。

### 方式二 ：在脚本中将 UI 文件创建为自定义 UI 组件，并挂在已有的 UI 对象内

- 使用createUIByName函数创建想要添加的UI文件为自定义UI控件，然后使用addChild函数将自定义UI控件挂在当前UI对象下的某个容器中，从而实现UI动态加载到游戏场景中。

```ts
//比如在UI脚本中创建一个自定义UI控件，并挂在UI对象的某个容器下
@UI.UICallOnly('')
export default class UIDefault extends UI.UIBehavior {
    character: Gameplay.Character;
    
    /** 仅在游戏时间对非模板实例调用一次 */
    protected onStart() {
        //通过路径找到按钮和容器
        const canvas_1=this.uiWidgetBase.findChildByPath('RootCanvas') as UI.Canvas
        const btn = this.uiWidgetBase.findChildByPath("RootCanvas/Button") as UI.Button; 
        //点击此按钮后打开某个自定义UI
        btn.onPressed.add(() => {
            let uiprefab1= UI.createUIByName('/NewUI_1.ui') as UI.UserWidget
            canvas_1.addChild(uiprefab1)
        })
    }
}
```

- 以上只介绍了两种常见的UI添加方法，编辑器还提供了很多其他方法
- 比如把项目中的UI文件动态创建成新UI对象并直接添加到画面中，不需要挂在已有UI对象内的某个容器下。使用这种创建方法时，需要将UI游戏逻辑编写在所创建的UI文件绑定的UI脚本中，类似于方式一。

```ts
//比如在普通脚本中实例化一个UI文件作为新的UI对象
@Core.Class
export default class NewScript extends Core.Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        UI.createUIByName('/NewUI_1.ui').addToViewport(0)
    }
```

## （进阶）如何使用 UI 脚本导出功能代替手动获取 UI 组件？

- 只有获取到UI控件之后，才能继续编写UI控件的游戏逻辑：
  - 在前文中，我们使用findChildByPath函数用路径找到了UI对象中的各个UI控件；
  - 而除了用findChildByPath函数逐一获取UI控件，还可以使用UI编辑器工具栏中的【导出所有脚本】和【UI脚本模板】功能高效的自动导出获取UI控件的脚本

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcng1SWYDyTQp5WUnmK1f81ff.png)

- 导出所有脚本：
  - 点击【导出所有脚本】按钮后，会弹出提示已导出成功的弹窗，同时把项目中所有UI文件内以小写开头的UI控件信息自动导入到名称为"UI文件名-generate"的脚本中完成声明，这些脚本将存放在ui-generate文件夹内

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnGNDeKEB6oA6FQhxVsxWcxd.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnRyKZ441cQ81iUbw5NkFswc.png)

  - 完成导出后，请将UI文件所绑定的UI脚本修改为继承"UI文件名-generate"脚本，之后就可以在UI文件所绑定的UI脚本中直接使用UI控件，无需再逐个使用findChildByPath函数获取UI控件

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnmKvJyUYoYNgMLjfXCgixTb.png)

  - 注意请勿在"UI文件名-generate"脚本内编写逻辑，每次执行【导出所有脚本】会重新导出所有UI控件信息，并且覆盖掉当前ui-generate文件夹内的全部脚本

- UI脚本模板：
  - 点击【UI脚本模板】按钮后，会打开脚本模板文件，在执行【导出所有脚本】时，会按照此脚本模板文件中的规则在"UI文件名-generate"脚本中填充代码，便于批量生成重复代码

```ts
${Import}

 @UI.UICallOnly('${UIPath}')
 export default class ${ClassName}_Generate extends ${SuperClassName} {
     ${Fileds}
 
      /**
      * before onStart called 
      */
    protected onAwake() {
        ${Button_Start}this.${Button}.onClicked.add(()=>{
             
        })${Button_End}
    }
     
 }
```

1. ${Import} ：用于自动化框架导入脚本引用
2. ${Fileds} ：用于自动化框架导入变量
3. ${UIPath} ：替换为脚本附加的 UI 路径
4. ${ClassName} ：替换为脚本的类名
5. ${SuperClassName} ：脚本的父类名称
6. ${Author} ：替换为用户名
7. ${Time} ：保存时间
8. ${UIName} ：UI 文件名字
9. ${FileName} ：脚本文件名字
10. ${Button_Start}this.${Button}...Any Code;${Button_End} ：会把所有导出的 Button 都填入到这个规则里。比如：脚本导出了两个 Button 变量 b1 和 b2 那么就会生成如下代码(其他组件同理)
11. ${Button_Path} ：可以替换为当前组件的路径，${Button_Start}${Button_Path}${Button_End}，这样就会替换重复生成时，当前写入的组件的 path 路径。(其他组件同理)
12. ${Button_HideStart}this.${Button}...Any Code;${Button_HideEnd} ：会把所有没有导出的 Button 都填入到这个规则里。比如：脚本没有导出了两个 Button 变量 b1 和 b2 那么就会生成如下代码(其他组件同理)

```ts
//例如根据模板：
${Button_Start}this.${Button}.onClicked.add(()=>{})${Button_End}
//自动生成的脚本：
this.b1.onClicked.add(()=>{});
this.b2.onClicked.add(()=>{});
```
