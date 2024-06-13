# UI 控件-下拉菜单

**阅读本文大概需要 5 分钟**

本文概述了 UI 控件—下拉菜单的各项属性以及使用方法。

## 什么是下拉菜单？

下拉菜单是一种特殊的复合控件，点击组合按钮（Combo Button）后会弹出菜单（Menu），菜单由菜单背景（Menu Background）、菜单行（Menu Row）、滚动条（ScrollBar）组合而成，菜单行中的文字内容成为选项（option），玩家选择的选项文本会显示在组合按钮上。
- 变换/对齐/通用/渲染属性请见 [UI 控件的基础属性](https://docs.ark.online/UI/UIWidget-BaseProperties.html)
![](https://cdn.233xyx.com/online/rrrTNIV8nin71711267441206.gif)

## 下拉菜单属性-文本
- 可以设置下拉菜单中文本的样式，文本属性请见 [UI 控件-文本](https://docs.ark.online/UI/UIComponent-Text.html)
- 选中项字体颜色在样式属性中单独设置

## 下拉菜单属性-选项
![](https://cdn.233xyx.com/online/LgXBcpgGJa8p1711267454653.png)

### 默认选项
- 下拉菜单各选项的内容，也可以在脚本中动态修改选项
### 选中项
- 可用于设置下拉菜单当前选中项，如果有多个选项的内容均与选中项内容相同，以第一个作为选中项
### 列表最大高度
- 下拉菜单的菜单行最大高度，当下拉菜单的总高度超出这一范围后，需要使用滚动条查看没有展示出来的菜单行

## 下拉菜单属性-样式
![](https://cdn.233xyx.com/online/X8i2kcVZI6yx1711267452233.png)
### 组合按钮及菜单样式
#### 组合按钮普通图片/悬浮图片/按压图片/禁用图片
- 设置组合按钮在各种状态下的样式，与普通按钮的用法相同
#### 组合按钮内容边距
- 设置选中项文本显示在组合按钮中的位置
#### 菜单背景图片
- 设置菜单背景的样式，菜单行会显示在其上方
#### 菜单背景边距
- 设置菜单行整体在菜单背景的位置

### 菜单行样式
#### 菜单行激活图片/悬浮图片/普通图片
- 设置菜单行在选中/悬浮/普通这三种状态下的样式，这些图片会显示在菜单背景图片的上方
#### 菜单行内容边距
- 设置选项文本在菜单行中的位置
#### 选中项字体颜色
- 设置选中项的文本内容颜色，可以配合菜单行激活图片，设置一个不同于其他菜单行的醒目样式

### 滚动条样式
#### 滚动条宽度/滚动条图片
- 设置滚动条的宽度以及图片，与滚动框的用法相同
#### 滚动条边距
- 菜单范围靠右侧的滚动条宽度的范围内为滚动条初始位置，滚动条边距可以基于这个初始位置让滚动条显示在一个有偏移的位置


## 如何使用下拉菜单？

### 示例一：用下拉菜单控制切换摄像机预设
- 下面我们实现一个使用下拉菜单来控制切换摄像机预设的案例，创建一个下拉菜单控件并编写脚本。
```ts
@UIBind('')
export default class DefaultUI extends UIScript {

    
    /** 仅在游戏时间对非模板实例调用一次 */
    protected  onStart() {
        
        //找到对应的下拉菜单
        const dropdown = this.uiWidgetBase.findChildByPath('RootCanvas/Dropdown') as Dropdown
        //清空下拉菜单的默认选项
        dropdown.clearOptions()
        //打开菜单时增加各个选项
        dropdown.onOpeningEvent.add(()=>{
            if (dropdown.optionCount==0) {
                dropdown.addOption("FirstPerson")
                dropdown.addOption("ThirdPerson")
                dropdown.addOption("TopDownAngle")
                dropdown.addOption("TPSOverShoulderAngle")
                dropdown.addOption("FPSShootingAngle")
            }
        });
        //选中项发生改变时切换摄像机预设
        dropdown.onSelectionChangedEvent.add((item: string, select: mw.SelectInfo)=>{
            if(item=="FirstPerson"){
                Camera.currentCamera.preset=CameraPreset.FirstPerson
            }
            if(item=="ThirdPerson"){
                Camera.currentCamera.preset=CameraPreset.ThirdPerson
            }
            if(item=="TopDownAngle"){
                Camera.currentCamera.preset=CameraPreset.TopDownAngle
            }
            if(item=="TPSOverShoulderAngle"){
                Camera.currentCamera.preset=CameraPreset.TPSOverShoulderAngle
            }
            if(item=="FPSShootingAngle"){
                Camera.currentCamera.preset=CameraPreset.FPSShootingAngle
            }
        });
 
    }
 }
```

- 可实现以下效果：
![](https://cdn.233xyx.com/online/h62hUrTlvIme1711267443832.gif)
