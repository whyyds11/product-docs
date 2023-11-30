::: info
**阅读本文预计10分钟**
在项目中增加角色可以交互的场景对象可以有效的提升游戏世界的沉浸感，增加世界活力。【交互物】可以给场景的对象添加与角色交互的能力，定义不同的交互行为和交互部位。
::: 

# 交互物

【交互物】是一个给场景内对象提供与角色交互能力的逻辑对象。你可以自定义【交互物】的transform属性来控制检测区域的位置，朝向以此指定交互行为发生的位置。在角色与【交互物】交互时，角色会切换成指定的交互姿势，移动到交互位置并焊接至【交互物】上。处于交互中的角色不再受输入控制，转而通过控制【交互物】间接的控制与它交互的角色。交互行为会提供关键节点的委托事件便于用户执行对应的游戏逻辑。你可以在【本地资源库】中的【游戏功能对象】栏中找到【交互物】。

![img](https://arkimg.ark.online/1684030872767-31.webp)

# 创建交互物

## 通过放置资源创建：

【交互物】本身作为一个游戏对象可以放置于游戏场景中。你可以从【本地资源库】中的【游戏功能对象】栏将【交互物】拖入【场景】或者【对象管理器】来创建对象。

1. 在【本地资源库】的【游戏功能对象】栏中找到【交互物】

![img](https://arkimg.ark.online/1684030872767-32.webp)

2. 将对象拖入到场景中或者【对象管理器】

![img](https://arkimg.ark.online/1684030872768-33.webp)

3. 在右侧【对象管理器】中【对象】栏找到对应的【交互物】对象并自定义它的属性

![img](https://arkimg.ark.online/1684030872768-34.webp)![img](https://arkimg.ark.online/1684030872768-35.webp)

## 通过脚本创建：

通过脚本你也可以在游戏运行时通过【本地资源库】中的【交互物】资源ID："Interactor" 动态生成一个【交互物】对象来使用。在【工程内容】下的脚本目录中新建一个脚本文件，将脚本拖入【对象管理器】中【对象】栏。选中脚本进行编辑，将下列示例代码替换脚本中的onStart方法：异步生成一个【交互物】对象，开启双端同步，位置为（300，0，50），旋转为（0，0，0），缩放倍数为（1，1，1）。打印生成【交互物】对象的gameObjectId。

```TypeScript
if(SystemUtil.isServer()) {
    let chair = await GameObject.asyncSpawn("Interactor", {replicates: true, transform: new Transform(new Vector(300, 0, 50), Rotation.zero, Vector.one)}) as Interactor;
    console.log("Interactor: " + chair.gameObjectId);
}
```

::: tip

一个交互物在同一时刻只能与一个角色对象进行交互，当交互物已经处于交互状态时其他角色无法与其发生交互。如果同时发起交互请求那么先到的角色可以成功交互。

:::

# 自定义交互物

【交互物】的属性将共同决定交互行为的具体表现，例如：

- 交互插槽（`slot`）。
- 交互动画（`animationId`）。

......

在【对象管理器】中【对象】栏找到对应的【交互物】，选中后我们可以查看它的属性面板，通过属性面板我们可以修改【交互物】的部分属性。

![img](https://arkimg.ark.online/1684030872768-36.webp)

## 交互插槽

交互插槽`slot`指的是与【交互物】发生交互行为的角色身上的对应部位。它可读可写，是一个插槽的枚举值：角色身上根据位置不同定义了30个不同的插槽。当交互行为发生时，角色插槽就会与【交互物】中心重合，并将角色焊接在交互物上。

| 头发     | 脸部   | 头部左侧 | 头部右侧 | 眼镜     | 眼睛     |
| -------- | ------ | -------- | -------- | -------- | -------- |
| 面部装饰 | 嘴部   | 左肩     | 右肩     | 左手手套 | 右手手套 |
| 背部装饰 | 左背   | 右背     | 左手     | 右手     | 左脚     |
| 右脚     | 臀部   | 头顶光圈 | 头顶标题 | 聊天框   | 根节点   |
| 左手肘   | 右手肘 | 左大腿根 | 右大腿根 | 左膝盖   | 右膝盖   |

```TypeScript
// 将交互插槽修改为臀部
let chair = this.gameObject as Interactor;
chair.interactiveSlot = HumanoidSlotType.Buttocks;
```

## 交互动画

交互姿态`interactiveStance`指的是与【交互物】发生交互行为后角色的对应姿势。在【本地资源库】中存有【交互物】使用的动画资源。该属性可读可写，但是在交互过程中修改该值并不会影响角色。

```TypeScript
// 将交互姿态修改为 122449：荡秋千
chair.interactiveStance = "122449";
```
::: tip
由于交互姿态属于一种动画资源，所以在使用【交互物】之前需要保证资源加载完成。可以通过预加载或者优先加载的方式来提前加载资源。如果资源没准备好，交互姿态可能无法展现。
:::
# 使用交互物

## 获取交互物对象

### 【对象管理器】中【对象】栏下的【交互物】对象：

**使用`asyncFind`接口通过【交互物】对象的gameObjectId去获取：**

1. 选中【交互物】对象后右键点击【复制对象ID】获取它的gameObjectId。此处注意区分【交互物】资源的gameObjectId和【交互物】对象的gameObjectId。

![img](https://arkimg.ark.online/1684030872768-37.webp)

2. 将脚本拖入对象管理器下，用下列代码替换脚本中的`onStart`方法：代码将异步查找ID对应的对象以【交互物】对象进行接收。

```TypeScript
protected async onStart(): Promise<void> {
    let chair = await GameObject.asyncFind("1148C8C5") as Interactor;
    console.log("chair gameObjectId " + chair.gameObjectId);
}
```

1. 将脚本挂载到【交互物】对象下方

![img](https://arkimg.ark.online/1684030872768-38.webp)

2. 在脚本的onStart方法中添加下列代码：代码获取脚本挂载的对象并以【交互物】对象进行接收

```TypeScript
let chair = this.gameObject as Interactor;
```

### 动态生成的【交互物】对象：

将下列示例代码替换脚本中的`onStart`方法：示例代码在客户端往`asyncSpawn`接口（中传入【交互物】的资源ID“Interactor”异步生成了一个对应的【交互物】对象。

```TypeScript
protected async onStart(): Promise<void> {
    if(SystemUtil.isServer()) {
    let chair = await GameObject.asyncSpawn("Interactor", {replicates: true, transform: new Transform(new Type.Vector(300, 0, 50), Type.Rotation.zero, Type.Vector.one)}) as Interactor;
    console.log("Interactor gameObjectId: " + chair.gameObjectId);
    }
}
```

# 获取交互物的状态

【交互物】具有两种状态：”交互中“和“空闲”，两种状态互斥。状态由`occupied`获取，返回一个布尔值：true代表"交互中"，false表示”空闲“。游戏中通常会实时获取【交互物】的状态来执行对应的游戏逻辑。

```TypeScript
let chair = this.gameObject as Interactor;
console.log("交互物当前状态：" + chair.occupied);
```

# 获取交互中的角色

与【交互物】正在交互的角色可以通过`getCurrentCharacter()`去获取。该函数返回一个角色对象，如果【交互物】当前并未与角色交互，那么将会返回空值。

```TypeScript
let chair = this.gameObject as Interactor;
console.log("交互物当前交互角色：" + chair.getCurrentCharacter() ? chair.getCurrentCharacter().gameObjectId : "无");
```

# 开始交互&结束交互

你可以通过`startInteract`接口与交互物开始交互。`enter`接口要求必须传入一个角色对象，同时还有2个可选参数：交互插槽和交互姿态。如果不传入可选参数那么会使用【交互物】自身属性来执行交互行为。执行具体的交互行为前，交互物会记录当前的角色坐标，用于退出交互时使用。

通过endInteract接口退出与【交互物】的交互。`leave`接口有3个可选参数：退出坐标、退出朝向和退出姿态。你可以指定角色退出交互后的位置和姿态。如果不传入参数，那么角色将会刷新到以交互前的位置并朝向交互物的正前方，应用角色的默认姿态。

下列示例中展示角色与一把椅子进行交互。先在【对象管理器】中制作一把椅子：将【交互物】拖入场景后将交互动画设置为”坐下玩手机“，交互插槽为”臀部“。在下方挂载椅子模型并修改至合适的相对位置。将脚本挂载至【交互物】下方，将代码添加到脚本onStart方法中。代码获取挂载的【交互物】对象，并添加了2个按键方法，每次按下键盘“1”键，就会调用`startInteract`接口与【交互物】进行交互。每次按下键盘“2”键，就会调用`endInteract`接口退出与【交互物】的交互。

![img](https://arkimg.ark.online/1684030872768-39.webp)

```TypeScript
let chair = this.gameObject as Interactor;

if(SystemUtil.isClient()) {

    let myself = Player.localPlayer.character;

    InputUtil.onKeyDown(Type.Keys.One, () => {
        chair.enter(myself);
    });

    InputUtil.onKeyDown(Type.Keys.Two, () => {
        chair.leave(chair.worldLocation.add(new Type.Vector(100, 0, 0)), chair.worldRotation);
    });
}
```

<!-- <video src="C:\Users\admin\Downloads\20230509-161439.mp4"></video> -->

::: tip
玩家控制的角色推荐在对应的客户端去调用开始交互&结束交互接口，其余NPC角色则需要去服务端调用对应的函数，这样使用更加稳定可靠，不受网络通信的影响。
:::

# 交互物事件

【交互物】有两个事件：开始交互完成事件和退出交互完成事件。获取到【交互物】对象后。我们可以通过这两个事件添加委托执行的逻辑。每当交互行为进行到对应阶段后，就会触发对应的事件并执行委托的逻辑。

将下列示例代码添加到”开始交互&结束交互“示例中获取对象后：示例代码在该【交互物】对象的开始交互完成事件和退出交互完成事件中各添加一个函数：打印一行信息。

```TypeScript
chair.onEnter.add(() => {
    console.log("onInteractiveStarted");
});

chair.onLeave.add(() => {
    console.log("onInteractiveEnded");
});
```

![img](https://arkimg.ark.online/1684030872768-40.webp)

::: tip
委托事件最好与【交互物】的接口调用端保持一致，例如玩家角色建议在客户端添加委托函数，而NPC则建议去服务端添加回调函数。这样可以保证状态的属性同步的稳定。
:::
