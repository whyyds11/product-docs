# UI 控件-列表视图和瓦片视图

**阅读本文大概需要 5 分钟**

本文概述了 UI 控件—列表视图/瓦片视图的使用方法。

## 什么是列表视图/瓦片视图？
- 列表视图是可以显示大量条目的虚拟列表，相比于简单的使用滚动框结合容器布局功能来容纳多行条目，列表视图内仅会创建可见的条目以提升性能。例如一个只有5个条目可见的列表视图中容纳了50个项目（Item），并不会真的创建50个项目的UI，而只会创建当前实际可见的5个项目的UI。推荐列表中要展示较多项目时使用列表视图控件，而不是使用滚动框和容器布局功能。
  - 以及容器自动布局比较难维护每个条目的顺序信息，如果维护交换条目位置、把新条目插入指定位置的逻辑，推荐使用列表视图/瓦片视图。
- 瓦片视图与列表视图相似，区别仅是条目以瓦片集排列。
- 变换/对齐/通用/渲染属性请见 [UI 控件的基础属性](https://docs.ark.online/UI/UIWidget-BaseProperties.html)

## 列表视图/瓦片视图属性-样式
- 大部分对于列表视图/瓦片视图中项目的操作都需要在脚本中控制，属性面板上只能调整列表视图/瓦片视图的一些基础样式。

### 条目UI文件
- 设置此列表视图/瓦片视图的各项目所绑定的默认UI文件，在脚本中可以通过修改列表视图节点数据基类（即ListViewItemDataBase）针对每行项目的UI做单独的调整。
- 请注意条目UI文件只能在属性面板上或者newObject动态创建时设置，不能在创建好列表视图/瓦片视图后脚本动态设置。

### 滚动朝向
- 设置列表视图/瓦片视图中滚动条的滚动朝向，这决定了各项目UI是水平还是垂直方向排列的。
### 条目边距
- 用于调整各项目UI之间的间距。
### 菜单样式
#### 菜单行激活图片/悬浮图片/普通图片
- 设置菜单行在选中/悬浮/普通这三种状态下的样式，这些图片会显示在项目UI的下方，作为默认的项目底板图。
### 滚动条样式
#### 滚动条宽度/滚动条图片
- 设置滚动条的宽度以及图片，与滚动框的用法相同
#### 滚动条边距
- 菜单范围靠右侧的滚动条宽度的范围内为滚动条初始位置，滚动条边距可以基于这个初始位置让滚动条显示在一个有偏移的位置



## 如何使用列表视图/瓦片视图？

- 下面我们实现一个基础的列表视图，每行按顺序显示不同的数字。
- 第一步：新建一个UI文件，这个UI文件内存放各项目UI的默认UI样式，请注意最顶部RootCanvas层级的大小决定了该项目在列表视图中的高度（垂直滚动的列表视图中，列表视图的宽度决定了项目UI的宽度，而水平滚动的列表视图则相反）。
![](https://cdn.233xyx.com/online/t506mfXE9wHx1718169533166.png)
- 第二步：创建一个列表视图，将上一步创建的条目UI文件拖入到属性面板，并修改列表视图的基础样式，包括滚动朝向、条目边距、菜单行样式、滚动条样式。
![](https://cdn.233xyx.com/online/4rpEYGeYZDg31718169532608.png)
- 第三步：先编写条目UI文件对应的脚本，获取UI文件中的文本框，这里我们将列表视图实现节点数据基类（ListViewItemDataBase）的序号填入文本框，实际项目中这里可以写更多逻辑，让每行项目展示不同的内容。

```ts
// 继承实现ListViewItemDataBase，由于 baseGuid 是唯一值，不可控，因此新增一个自定义数据即可，本例中该值为 itemIndex
export default class ListViewItemData extends ListViewItemDataBase {
    itemIndex : number = 0
    
    constructor(index: number) {
        super()
        this.itemIndex = index
    }
}
```
```ts
export default class NewUIScript1 extends UIScript {
  TextBlock : mw.TextBlock;

    protected onStart() {
        this.TextBlock = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock') as TextBlock;
    }

    set data(inRowData : ListViewItemData) {
        // 使用继承类的 itemIndex 作为固定索引值
        this.TextBlock.text = inRowData.itemIndex.toString();
    }
}
```
- 第四步：编写列表视图所在UI文件对应的脚本，这里我们写一个按下数字键1新增项目的逻辑便于测试效果：
  - 触发列表视图刷新onItemRefreshed时，通过实现节点数据基类（ListViewItemDataBase）刷新各UI项目的表现；增加/删除/修改/玩家滚动列表视图/请求刷新等操作都会触发刷新，而清空不会触发刷新。
 
```ts
export default class NewUIScript extends UIScript {

    /** 
     * 构造UI文件成功后，在合适的时机最先初始化一次 
     */
    protected onStart() {
        this.ListView = this.uiWidgetBase.findChildByPath('RootCanvas/ListView') as mw.ListView;
        let index = 0
        //按下数字键1新增项目
        InputUtil.onKeyDown(Keys.One, () => {
            // 代码动态添加一份 ListViewItemData 数据进入 ListView
            this.ListView.addItems([new ListViewItemData(index)]);
            index++
        });

        this.ListView.onItemRefreshed.add((newWorkList : ListViewItemData[])=>{
          console.log("_____onItemRefreshed");
          newWorkList.forEach((workItem : ListViewItemData)=>{
            const typeSc = mw.findUIScript(workItem.widgetCanvas) as any;
            typeSc.data = workItem;
          });
        });
    }
}
```
::: tip
请注意如果是瓦片视图，需要在上述代码获得TileView控件之后，需要手动设置排列规则，如下：\n
this.TileView = this.uiWidgetBase.findChildByPath('RootCanvas/TileView') as mw.TileView\n
// 通过设置子对象的宽高来决定对象的排列规则\n
// 本例中TileView宽400+，这里设定itemWidth200\n
// 因此如下图一排容纳了两个\n
this.TileView.itemWidth = 200\n
this.TileView.itemHeight = 50\n

// TileView继承自ListView，相关数据也保持一致\n
let arrTileV:ListViewItemData[] = []\n
for(let index = 0; index < 10; index++){\n
    arrTileV.push(new ListViewItemData(index))\n
}\n
tileV.addItems(arrTileV)
:::

- 启动游戏后，我们按下数字键1，就能在列表视图中动态生成新项目了，并且每个项目中的数字都是节点数据基类的序号。
![](https://cdn.233xyx.com/online/69BYcSYeLEIR1718169531421.gif)
