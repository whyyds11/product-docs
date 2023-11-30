# 环境雾

**阅读本文大概需要 15 分钟。**

本文概述了环境雾的概念，以及他的所有基础属性，以及如何在编辑器中，如何使用环境雾。

## 什么是环境雾？

**环境雾**是模拟现实生活中的雾气的一种常见天气现象。主要通过雾效将周围的环境显示成模糊的效果。

<video controls src="https://cdn.233xyx.com/1683197169744_337.mp4"></video>

## 如何编辑环境雾？

在【对象管理器】-【世界对象】列表中找到【环境雾】对象。

![](https://cdn.233xyx.com/athena/online/0ce394ece5c04947a0f302e001239640_12104543.webp)

可以根据需求调整雾效效果。然后我们点击环境雾对象，就可以在属性面板(默认右下角)中编辑环境雾。勾选是否启用，雾效就会显示出来。以下展开介绍具体得环境雾属性：

![](https://cdn.233xyx.com/athena/online/e3d953c2cfb8474d9f7746d91bc98c88_12104555.webp)

### 是否启用

- 属性说明：是否启用环境雾的效果，勾选后，场景中将显示雾效，取消勾选则场景中没有雾效。
- 效果图：

<video controls src="https://cdn.233xyx.com/1683255257416_461.mp4"></video>

- 实际应用：因为环境雾是客户端效果，所以每个客户端可以显示得效果可以完全不同。换句话说，我们完全可以制作几个不同得环境区域，玩家进入沙漠地带就会呈现沙漠雾得效果，别的玩家没有进入沙漠，所以就不会开启雾得效果。
- 实现步骤：
- 首先我们将触发器对象放置在场景中，然后绑定以下脚本即可实现一个沙漠的环境区域。

```ts
@Component
export default class NewScript extends Script {

    fog: Fog

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
       
        //声明触发器
        let trigger = this.gameObject as Trigger;

        //角色进入触发器时，环境雾开启，并设置为沙漠雾
        trigger.onEnter.add(() => {

            //开启环境雾
            Fog.enabled = true;
            //环境雾预设：沙漠雾
            Fog.setPreset(4)

        });

        //角色进入触发器时，环境雾开启，并设置为沙漠雾
        trigger.onLeave.add(() => {

            //关闭环境雾
            Fog.enabled = false;

        });

    }
}
```

- 效果图：

<video controls src="https://cdn.233xyx.com/1683197520943_860.mp4"></video>

### 环境雾预设

- 属性说明：环境雾提供了便捷的预设效果，供用户选择。后续可能会拓展更多环境雾效果

| 枚举名称 | 英文名称 | 枚举值  | 说明 |
| ----- | ----- | ----- | ----- |
| 默认 | Default | 0 | 默认效果，距离和浓度适中 |
| 近景雾 | NearFog | 1 | 近处的环境雾，距离较短 |
| 远景雾 | FarFog | 2 | 远处的环境雾，距离较远 |
| 地下雾 | UndergroundFog | 3 | 黑暗的地下洞穴的环境效果 |
| 默沙漠雾 | DesertFog | 4 | 沙漠地带的环境效果 |

- 实际应用：我们可以根据不同的环境切换不同的环境雾的预设，便捷的完成环境雾的切换，而不需要每个参数都设置一遍。也可以通过预设功能，进行快速的还原。
- 实现步骤：
- 首先我们添加几个UI按钮，方便我们切换环境雾预设，当然可以通过其他的机制进行切换。然后编写UI脚本。

```ts
export default class NewUIScript extends UIScript {

    /** 仅在游戏时间对非模板实例调用一次 */
    protected onStart() {

        //找到对应的预设1按钮
        const Preset1Btn = this.uiWidgetBase.findChildByPath('MWCanvas/Button_11') as UI.Button
        //找到对应的预设2按钮
        const Preset2Btn = this.uiWidgetBase.findChildByPath('MWCanvas/Button_12') as UI.Button
        //找到对应的预设3按钮
        const Preset3Btn = this.uiWidgetBase.findChildByPath('MWCanvas/Button_13') as UI.Button
        //找到对应的预设4按钮
        const Preset4Btn = this.uiWidgetBase.findChildByPath('MWCanvas/Button_14') as UI.Button
        //找到对应的预设5按钮
        const Preset5Btn = this.uiWidgetBase.findChildByPath('MWCanvas/Button_15') as UI.Button

        //点击按钮，发送预设事件
        Preset1Btn.onPressed.add(() => {
            Event.dispatchToLocal("Preset1");
        });

        //点击按钮，发送预设事件
        Preset2Btn.onPressed.add(() => {
            Event.dispatchToLocal("Preset2");
        });

        //点击按钮，发送预设事件
        Preset3Btn.onPressed.add(() => {
            Event.dispatchToLocal("Preset3");
        });

        //点击按钮，发送预设事件
        Preset4Btn.onPressed.add(() => {
            Event.dispatchToLocal("Preset4");
        });

        //点击按钮，发送预设事件
        Preset5Btn.onPressed.add(() => {
            Event.dispatchToLocal("Preset5");
        });

    }

}
```

- 然后我们编写接受事件的脚本。

```ts
@Component
export default class NewScript extends Script {

    fog:Fog

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {

        this.fog = await GameObject.asyncFindGameObjectById("22F16EC4") as Fog

        Events.addLocalListener("Preset1", () => {
            //环境雾预设：默认
            Fog.setPreset(0)
        });

        Events.addLocalListener("Preset2", () => {
            //环境雾预设：近景雾
            Fog.setPreset(1)

        });

        Events.addLocalListener("Preset3", () => {
            //环境雾预设：远景雾
            Fog.setPreset(2)
        });

        Events.addLocalListener("Preset4", () => {
            //环境雾预设：地下雾
            Fog.setPreset(3)

        });

        Events.addLocalListener("Preset5", () => {
            //环境雾预设：沙漠雾
            Fog.setPreset(4)
        });

    }

}
```

- 效果图：

<video controls src="https://cdn.233xyx.com/1683255320520_589.mp4"></video>

### 雾密度

- 属性说明：此为整体密度系数，是可视雾层的厚度。
- 效果图：

<video controls src="https://cdn.233xyx.com/1683255361727_623.mp4"></video>

- 相关接口：

```ts
//设置环境雾密度
Fog.density = 1;
```

### 雾高度

- 属性说明：雾效的起始世界高度，也就是环境雾Z轴的位置，高度越低，雾的效果越淡，高度越高，雾的效果越浓。
- 效果图：

<video controls src="https://cdn.233xyx.com/1683255410319_057.mp4"></video>

- 相关接口：

```ts
//设置环境雾高度
Fog.height = 5000;
```

### 雾高度衰弱

- 属性说明：雾效从高到低，雾效效果逐渐变浓，该值是控制雾效的过度效果，值越小效果越柔和。
- 效果图：

<video controls src="https://cdn.233xyx.com/1683255472617_490.mp4"></video>

- 相关接口：

```ts
//设置环境雾高度衰弱
Fog.heightFalloff = 0.7;
```

### 雾散射颜色

- 属性说明：设置雾的内散射颜色，就是雾的主要颜色。
- 效果图：

<video controls src="https://cdn.233xyx.com/1683255497901_578.mp4"></video>

- 相关接口：

```ts
//设置环境雾颜色
Fog.inscatteringColor = new LinearColor(255, 0, 0);
```

### 雾最大透明度

- 属性说明：控制雾的最大不透明度。值为1时雾完全不透明，值为0时雾基本不可见。
- 效果图：

<video controls src="https://cdn.233xyx.com/1683255529531_758.mp4"></video>

- 相关接口：

```ts
//设置环境雾透明度
Fog.maxOpacity = 0.5;
```

### 起始距离

- 属性说明：雾出现处与摄像机的距离。
- 效果图：

<video controls src="https://cdn.233xyx.com/1683255559645_735.mp4"></video>

- 相关接口：

```ts
//环境雾初始距离
Fog.startDistance = 1000;
```

### 太阳光散射颜色

- 属性说明：设置在环境雾中太阳光的散射颜色，就是太阳光的主要颜色。
- 效果图：

<video controls src="https://cdn.233xyx.com/1683255618322_042.mp4"></video>

- 相关接口：

```ts
//太阳光散色颜色
Fog.directionalInscatteringColor = new LinearColor(0, 137, 60);
```

### 太阳光散射指数

- 属性说明：控制太阳光颜色影响的散射强弱，指数越强，散射的范围就越大。
- 效果图：

<video controls src="https://cdn.233xyx.com/1683255661535_153.mp4"></video>

- 相关接口：

```ts
//设置太阳光散色指数
Fog.directionalInscatteringExponent = 20;
```

### 太阳光散射起始距离

- 属性说明：太阳光散射的初始距离
- 效果图：

<video controls src="https://cdn.233xyx.com/1683255709761_176.mp4"></video>

- 相关接口：

```ts
//设置太阳光散色距离
Fog.directionalInscatteringStartDistance = 20000;
```

## 如何使用环境雾？

- 最后我们就可以通过相关接口和代码动态调整环境雾的效果。
- 示例工程：

[环境雾示例](https://cdn.233xyx.com/1683278889860_420.rar)

- 效果图：

<video controls src="https://cdn.233xyx.com/1683255815579_618.mp4"></video>
