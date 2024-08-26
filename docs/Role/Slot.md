# 角色插槽

**阅读本文大概需要 10 分钟**

本文概述了插槽分类，插槽的位置，以及使用效果。

## 插槽介绍

插槽定义：插槽是根据角色模型预留的不同点位，玩家可以利用插槽在角色模型上附加对象，比如预制组件或物体，达到装扮的效果。并且附加对象会跟随角色模型进行移动和旋转。

目前插槽功能划分为两类，分别是：【人形插槽】/【非人形插槽】

  - 【人形插槽】：是根据人形形象的效果，设置的插槽位置，方便用户放置武器、翅膀、特效、称号等效果。

  - 【非人形插槽】：是根据非人形形象的效果，设置的插槽位置，方便用户放置武器、道具装饰等效果。

## 人形形象插槽

### 人形插槽介绍说明

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/ff6f5721012647f1a65cae81028958ad_365631213.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/6ecd120789a74256984662116a6241cb_365631214.webp)|

| 中文名称  | 枚举名称 | 枚举序号  | 应用说明 |
| ----- | ----- | ----- | ----- |
| 头发 | Hair | 0 | 放置发卡、帽子等装饰物 |
| 脸部 | Head | 1 | 放置面具等装饰物 |
| 头部左侧 | LeftHead | 2 | 放置精灵耳朵等装饰物 |
| 头部右侧 | RightHead | 3 | 放置精灵耳朵等装饰物 |
| 眼镜 | Glasses | 4 | 放置眼镜等装饰物 |
| 眼睛 | Eyes | 5 | 放置眼镜等装饰物 |
| 面部装饰 | FaceOrnamental | 6 | 放置面具等装饰物 |
| 嘴部 | Mouse | 7 | 放置烟、口哨、棒棒糖等装饰物 |
| 左肩部 | LeftShoulder | 8 | 组装角色模型可能会用到 |
| 右肩部 | RightShoulder | 9 | 组装角色模型可能会用到 |
| 左手手套 | LeftGlove | 10 | 放置拳套等装饰物 |
| 右手手套 | RightGlove | 11 | 放置拳套等装饰物 |
| 背部装饰 | BackOrnamental | 12 | 放置飞行道具、特效等装饰物 |
| 左背 | LeftBack | 13 | 放置飞行道具、特效等装饰物 |
| 右背 | RightBack | 14 | 放置飞行道具、特效等装饰物 |
| 左手 | LeftHand | 15 | 放置武器、交互道具等 |
| 右手 | RightHand | 16 | 放置武器、交互道具等 |
| 左脚 | LeftFoot | 17 | 放置鞋类装饰物 |
| 右脚 | RightFoot | 18 | 放置鞋类装饰物 |
| 臀部 | Buttocks | 19 | 放置妖精尾巴等装饰物 |
| 头顶光圈 | Rings | 20 | 放置光环特效等装饰物 |
| 头顶标题 | Nameplate | 21 | 放置名称、称号、血条等UI效果 |
| 聊天框 | ChatFrame | 22 | 放置聊天框的UI效果 |
| 根节点 | Root | 23 | 由于根节点不会跟随角色动作晃动，相对于比较稳定，所以会放置一些脚底特效等。 |
| 左手肘 | LeftLowerArm | 24 | 组装角色模型可能会用到 |
| 右手肘 | RightLowerArm | 25 | 组装角色模型可能会用到 |
| 左大腿根 | LeftThigh | 26 | 组装角色模型可能会用到 |
| 右大腿根 | RightThigh | 27 | 组装角色模型可能会用到 |
| 左膝盖 | LeftCalf | 28 | 组装角色模型可能会用到 |
| 右膝盖 | RightCalf | 29 | 组装角色模型可能会用到 |
| 第一人称摄像机 | FirstpersonCamera | 30 | 可以放置第一人称摄像机 |

插槽说明：角色的插槽数量较多，有些插槽可能只有在组装角色时才能用到，当然插槽位置不合适时，也可以通过调整物体的相对位置和相对旋转进行微调。

使用说明：人形插槽有两种使用方式，分别是在角色编辑器中使用，以及在脚本中使用。

### 角色编辑器的插槽使用

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/ad68268fe2324d0880f5226d8a6b9a40_365631219.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/d8cdef60c74d4d1e8a67dc06af9c60c7_365631221.webp)|

【角色编辑器】中可以点击【挂件】页签。

在【挂件】页签下，找到我们需要的插槽部位。

然后点击【添加】功能，就会显示可以附加的物体。

最后从【资源库】中，找到相应的【物体】或【预制体】拖入到改物品槽中。并可以在视口中看到插槽效果。

### 如何使用插槽功能？

#### 将物体附加到插槽上

实际应用：我们可以利用插槽功能，将武器和装饰物或者特效套在角色上。实现想要的效果。

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/974587bb716b451eaf4dd2964251fa29_365631220.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/d7d7c05329a34a7fab45c915e0712eb4_365631222.webp)|

首先我们将【29052】的武器资源和【27704】的特效的资源放置在优先加载的列表

然后放置下面的脚本，即可实现效果。

```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //获取玩家
        let chara = Player.localPlayer.character
        //新增光环特效
        let halo = GameObject.spawn("27704", {replicates: true}) as Effect;
        //将光环插到角色头顶插槽上
        chara.attachToSlot(halo, HumanoidSlotType.Nameplate);
        //新增物体_钢剑
        let sword = GameObject.spawn("29052")
        
        //按下“1”键触发以下逻辑
        InputUtil.onKeyDown(Keys.One, () => {
            //将“钢剑”插到角色的右手插槽上
            chara.attachToSlot(sword, HumanoidSlotType.RightHand)
        });
    }
}
```

效果图：

<video controls src="https://cdn.233xyx.com/online/MfJ0MREP2RUC1694604176305.mp4"></video>

#### 调整物体的位置

功能说明：当物体插到插槽上的位置不合适时，我们可以通过调整物体的相对位置或者是插槽位置来改变物体的位置效果，但是由于插槽位置会影响插到该插槽的所有附加物体的位置，所以我们更推荐使用更改物体本身的位置进行调整效果。

插槽位置调整：

```ts
//获取玩家
let chara = Player.localPlayer.character 
//设置角色[右手插槽]的位置
chara.description.advance.slotAndDecoration.slot[HumanoidSlotType.RightHand].slotOffset.position = new Vector(10, 0, -10)
//设置角色[右手插槽]的旋转
chara.description.advance.slotAndDecoration.slot[HumanoidSlotType.RightHand].slotOffset.rotation = new Rotation(0, 0, 180)
//设置角色[右手插槽]的缩放
chara.description.advance.slotAndDecoration.slot[HumanoidSlotType.RightHand].slotOffset.scale = Vector.one
```

插槽位置调整：

```ts
//调整角色光环特效的本地位置和大小
halo.localTransform = new Transform(new Vector(-50, 0, -50),new Rotation(0, 90, 0),new Vector(3, 3, 3));
```

效果图：

<video controls src="https://cdn.233xyx.com/online/6fQP9aWIrgpZ1694604176305.mp4"></video>

#### 将物体从插槽中分离

功能说明：分离是指附加物体与角色的插槽不再有绑定关系。物体将脱离插槽，独立显示在世界中。

示例脚本：

```ts
// 分离角色光环特效
chara.detachFromSlot(halo);
```

效果图：

<video controls src="https://cdn.233xyx.com/online/jGiNyFOQG2HG1694604176305.mp4"></video>

#### 将物体从插槽中移除

功能说明：物体移除是将物体彻底从世界中删除。

示例脚本：

```ts
//移除角色光环特效
halo.destroy()
```

效果图：

<video controls src="https://cdn.233xyx.com/online/GTTW3nwykWG01694604176305.mp4"></video>

## 非人形形象插槽

无论是人形插槽还是非人形插槽，使用均一致，具体请见上方，这里主要描述每个不同形象的插槽位置。

### 四足插槽介绍说明

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/bfdbd8f388414988a941155a3b71416f_365631215.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/4e6e06f67180487f85519aa0394aabf4_365631216.webp)|

| 中文名称  | 枚举名称 | 枚举序号  | 应用说明 |
| ----- | ----- | ----- | ----- |
| 根节点 | Root | 0 | 由于根节点不会跟随动作晃动，相对于比较稳定，所以会放置一些脚底特效等。 |
| 胸腔 | Chest | 1 | 放置胸部等装饰物 |
| 上脊柱 | UpperSpine | 2 | 放置背部等装饰物 |
| 下脊柱 | LowerSpine | 3 | 放置背部等装饰物 |
| 脖子 | Neck | 4 | 放置围脖、吊牌等装饰物 |
| 头部 | Head | 5 | 放置眼镜、帽子等装饰物 |
| 左前脚 | FrontalLeftFoot | 6 | 放置攻击特效和道具等 |
| 右前脚 | FrontalRightFoot | 7 | 放置攻击特效和道具等 |
| 左后脚 | RearLeftFoot | 8 | 放置攻击特效和道具等 |
| 右后脚 | RearRightFoot | 9 | 放置攻击特效和道具等 |
| 尾巴 | Tail | 10 | 放置尾部装饰物 |

示例脚本：

```ts
//新增光环特效
let halo = GameObject.spawn("27704",{ replicates: true }) as Effect;
//将光环插到非人形对象的头部插槽上
chara.attachToSlot(halo, NonHumanoidType.Head);
```

效果图：

<video controls src="https://cdn.233xyx.com/online/HxZTe1GGAQEk1694604176304.mp4"></video>

### 鱼插槽介绍说明

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/19ad9fafdd1f4b05896e75ec9dbfa0ed_365631217.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/47e1a4d9d8604e53bd173f5cd79588ec_365639250.webp)|

| 中文名称  | 枚举名称 | 枚举序号  | 应用说明 |
| ----- | ----- | ----- | ----- |
| 根节点 | Root | 0 | 由于根节点不会跟随动作晃动，相对于比较稳定，所以会放置一些脚底特效等。 |
| 胸腔 | Chest | 1 | 放置胸部等装饰物 |
| 上脊柱 | UpperSpine | 2 | 放置背部等装饰物 |
| 下脊柱 | LowerSpine | 3 | 放置背部等装饰物 |
| 头部 | Head | 5 | 放置眼镜、帽子等装饰物 |
| 尾巴 | Tail | 10 | 放置尾部装饰物 |
| 上边鱼鳍 | FrontalRightFoot | 7 | 放置攻击特效和道具等 |
| 左边鱼鳍 | RearLeftFoot | 8 | 放置攻击特效和道具等 |
| 右边鱼鳍 | RearRightFoot | 9 | 放置攻击特效和道具等 |

### 西方龙插槽介绍说明

| 中文名称  | 枚举名称 | 枚举序号  | 应用说明 |
| ----- | ----- | ----- | ----- |
| 根节点 | Root | 0 | 由于根节点不会跟随动作晃动，相对于比较稳定，所以会放置一些脚底特效等。 |
| 胸腔 | Chest | 1 | 放置胸部等装饰物 |
| 上脊柱 | UpperSpine | 2 | 放置背部等装饰物 |
| 下脊柱 | LowerSpine | 3 | 放置背部等装饰物 |
| 脖子 | Neck | 4 | 放置围脖、吊牌等装饰物 |
| 头部 | Head | 5 | 放置眼镜、帽子等装饰物 |
| 左前脚 | FrontalLeftFoot | 6 | 放置攻击特效和道具等 |
| 右前脚 | FrontalRightFoot | 7 | 放置攻击特效和道具等 |
| 左后脚 | RearLeftFoot | 8 | 放置攻击特效和道具等 |
| 右后脚 | RearRightFoot | 9 | 放置攻击特效和道具等 |
| 尾巴 | Tail | 10 | 放置尾部装饰物 |
| 左翼翅膀 | LeftWing | 19 | 放置飞行特效 |
| 右翼翅膀 | RightWing | 18 | 放置飞行特效 |

### 东方龙插槽介绍说明

| 中文名称  | 枚举名称 | 枚举序号  | 应用说明 |
| ----- | ----- | ----- | ----- |
| 根节点 | Root | 0 | 由于根节点不会跟随动作晃动，相对于比较稳定，所以会放置一些脚底特效等。 |
| 胸腔 | Chest | 1 | 放置胸部等装饰物 |
| 上脊柱 | UpperSpine | 2 | 放置背部等装饰物 |
| 下脊柱 | LowerSpine | 3 | 放置背部等装饰物 |
| 脖子 | Neck | 4 | 放置围脖、吊牌等装饰物 |
| 头部 | Head | 5 | 放置眼镜、帽子等装饰物 |
| 左前脚 | FrontalLeftFoot | 6 | 放置攻击特效和道具等 |
| 右前脚 | FrontalRightFoot | 7 | 放置攻击特效和道具等 |
| 左后脚 | RearLeftFoot | 8 | 放置攻击特效和道具等 |
| 右后脚 | RearRightFoot | 9 | 放置攻击特效和道具等 |
| 尾巴 | Tail | 10 | 放置尾部装饰物 |

