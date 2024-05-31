# 场景管理与跳转

**阅读本文大概需要 20 分钟**

本文概述了在编辑器上创建场景和管理场景的基础概念和操作步骤、并且描述了通过脚本实现场景跳转、游戏跳转、房间跳转，以及跨场景通讯等功能。

## 什么是场景？

场景功能：场景是指游戏中一个具有独立空间的单元，其中包含了环境、建筑、物体等视觉元素，以及相关的游戏逻辑，构建出来的玩家的游戏世界。场景设计是游戏开发中非常重要的一环，需要考虑场景风格、氛围、细节和美感，以及游戏类型和玩法等。

编辑器中我们将场景划分为【主场景】和【子场景】。【主场景】是游戏中玩家主要活动的游戏场景，玩家在游戏与游戏之间发生跳转时，如果没有指定场景或房间，我们会优先将玩家传送到主场景中。【子场景】是游戏中相对独立的游戏场景，用户可以利用子场景设计独立关卡或副本，并通过跳转机制进行场景传送。

## 场景管理 

### 场景界面介绍

![](https://cdn.233xyx.com/online/JalEUsbjOQky1700648068178.PNG)

在【工程内容】的左侧导航栏中，切换为【场景】后，右侧将会显示目前项目内的所有场景列表。
【工程内容】右上侧将会提供【新建场景】按钮，帮助用户创建新的场景。

【场景文件】操作说明：
  - 鼠标左键双击场景文件，切换当前的场景。
  - 鼠标右键点击场景文件，会弹出右键菜单，方便操作修改场景文件。

### 创建场景

功能说明：在当前项目工程中，创建一个新的场景，可以作为独立关卡或副本使用。

操作说明：

![](https://cdn.233xyx.com/online/sHiAN9JtXw2V1700648068179.PNG)

  - 点击【新建场景】按钮，会弹出新建场景的二级面板，我们可以为自己新建的场景进行命名。

![](https://cdn.233xyx.com/online/2R0SF5NtYDdg1700648068179.PNG)

  - 填好场景名称后，我们点击二级面板中的新建场景按钮，就完成了创建场景。并且会在【工程内容】的【场景】模块中找到我们新建的场景。

![](https://cdn.233xyx.com/online/PAbO2DYF293H1700648068179.PNG)

### 切换场景

功能说明：把当前场景切换成选择的场景，并且场景内的对象和脚本都会更换。

操作说明：
  - 鼠标左键双击场景文件，切换当前的场景。
 
![](https://cdn.233xyx.com/online/xE5vHp8nCuAc1700648068179.png)

  - 鼠标右键点击场景文件后，弹出右键菜单，点击【切换场景】功能。
 
![](https://cdn.233xyx.com/online/YqpfIJAEjMkp1700648068179.png)

  - 弹出切换场景的确认面板后，点击确定按钮，会进行切换场景；点击取消按钮，会关闭确认面板，但不会切换场景。

### 设置主场景

功能说明：场景中有主场景和子场景的区分，主场景是主要承载玩家的游戏场景，进入游戏后，默认加载的游戏场景，每个项目必须且只能有一个主场景。子场景是属于项目内的附属游戏场景，并不会展示在游戏列表中。

操作说明：

![](https://cdn.233xyx.com/online/lAtoutitEAD91700648068179.png)

  - 鼠标右键点击场景文件后，弹出右键菜单，点击【设置为主场景】功能。

![](https://cdn.233xyx.com/online/agpbHX3HhGiU1700648068179.png)

  - 弹出设置主场景的确认面板后，点击确定按钮，会将选择的场景设置为主场景，并且将根据场景排序规则，会将主场景放置在场景文件的第一个；点击取消按钮，会关闭确认面板，但不会进行设置主场景。

### 设置为公开传送

功能说明：公开传送就是允许第三方的游戏跳转到该游戏场景中，目前游戏中的主场景的【公开传送】功能是默认开启的，且无法进行修改。子场景的【公开传送】功能可以进行修改，修改后场景文件的左上角会有一个【眼睛】的标示，代表已经开启了公开传送功能。开启后，其他游戏就可以直接传送到该游戏的子场景中。

注意：主场景与子场景之间的跳转不受公开传送的功能限制，只有外部游戏跳转到该游戏中时，需要检测【公开传送】功能是否已经开启。

操作说明：

![](https://cdn.233xyx.com/online/1YfO7qpjWykY1700648068179.png)

  - 鼠标右键点击场景文件后，弹出右键菜单，点击【设置为公开传送】功能。

![](https://cdn.233xyx.com/online/x1CYFDrqnKqK1700648068179.png)

  - 设置完成后，场景文件的右上角会显示公开的标示。如果再次设置为公开传送，将会取消公开传送功能。

### 复制场景

功能说明：将选择的场景文件复制并创建一个相同的场景文件。

操作说明：

![](https://cdn.233xyx.com/online/YoKaXFFTJKIk1700648068179.png)

  - 鼠标右键点击场景文件后，弹出右键菜单，点击【复制场景】功能。

![](https://cdn.233xyx.com/online/DLmKTfdkVvvP1700648068179.png)

  - 复制完成后，会新增一个场景文件，与该场景文件基本一致，新增场景的名称为原名称_1。

### 重命名

功能说明：修改场景文件的名称。当前正在使用的场景文件无法进行修改名称。

注意：由于场景跳转是通过【场景名称】进行的场景之间的传送，所以场景内无法出现相同名称的场景。并且在修改完成场景名称后，一定要记得修改跳转的场景名称的参数哦！！！

操作说明：

![](https://cdn.233xyx.com/online/X5nvqrNE7LOa1700723104589.png)

  - 鼠标右键点击场景文件后，弹出右键菜单，点击【重命名】功能。就可以修改场景名称啦，但注意正在打开的场景无法进行修改名称。

### 替换场景

功能说明：将选择的场景文件替换成另一个已有的场景文件。

操作说明：

![](https://cdn.233xyx.com/online/gyKam39kckA21700648068179.png)

  - 鼠标右键点击场景文件后，弹出右键菜单，点击【替换场景】功能。

![](https://cdn.233xyx.com/online/B18om76qrQGU1700648068179.png)

  - 弹出替换场景的确认面板后，点击确定按钮，会弹出场景设置界面，用户可以选择其中一个场景进行替换。点击确认后，选择的场景将会变成替换的场景。点击取消按钮，将会关闭界面，取消本次的替换功能。

### 删除场景

功能说明：将选择的场景文件删除。

操作说明：
  - 选中场景文件后，点击Delete快捷键，可以删除场景文件。
 
![](https://cdn.233xyx.com/online/oaK0pyJtbIhr1700648068179.png)

  - 鼠标右键点击场景文件后，弹出右键菜单，点击【删除】功能。

![](https://cdn.233xyx.com/online/w4UGJ1jfqITQ1700648068179.png)

  - 弹出删除场景的确认面板后，点击确定按钮，会删除掉选中场景，点击取消按钮，将会关闭界面，取消删除功能。

## 场景跳转

功能说明：玩家们在同一个游戏项目中的不同场景之间进行传送，将玩家们从一个场景传送至另一个场景内。

实际应用：我们可以利用触发器对象和传送门特效，制作一个场景跳转的传送门，或者通过UI触发事件，将目标玩家进行传送，实现副本关卡等功能。

实现步骤：
- 首先我们点击新增场景，创建一个新的场景，命名为Level_1
 
![](https://cdn.233xyx.com/online/bDhUGf8LC8b91700648068178.png)

- 然后我们将触发器对象放置在主场景中

![](https://cdn.233xyx.com/online/jmSHHv8BEOSY1700648068179.png)

- 再将一个传送门特效放置在触发器附近，尽量让触发器与特效贴合在一起。

![](https://cdn.233xyx.com/online/qtA22ay0uMkT1700648068179.png)

- 然后触发器对象下挂载以下脚本，即可实现一个可以场景间传送的传送门。


```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

        // 下列代码仅在服务端执行
        if (SystemUtil.isServer()) {
            //声明触发器
            let trigger = this.gameObject as Trigger;
            //角色进入陷阱触发器时触发以下逻辑
            trigger.onEnter.add((chara: Character) => {
                //将当前角色传送到“Level_1”的场景中
                TeleportService.asyncTeleportToScene("Level_1", [chara.player.userId]).then(onResolve, onReject);

            });
        }
    }
}
function onResolve(value: TeleportResult): TeleportResult | PromiseLike<TeleportResult> {
    throw new Error("Function not implemented.");
}

function onReject(reason: any): PromiseLike<never> {
    throw new Error("Function not implemented.");
}
```

最后我们为了区别于第一个场景，我们可以双击点开Level_1的场景文件，进入到Level_1的场景内添加一些建筑。

![](https://cdn.233xyx.com/online/GVEqRifxYjE81700648068179.png)


效果图：

<video controls src="https://cdn.233xyx.com/online/m4K6bdiXD2Xm1700648068179.mp4"></video>

## 房间跳转

功能说明：玩家们在同一个游戏项目中的相同场景的不同房间或不同场景的房间进行传送，将玩家们从一个场景房间传送至另一个场景房间内。

实际应用：由于我们的房间有人数上限，很大概率上可能会出现这种情况：两个玩家在同一个游戏的同一个场景内，但是因为不在同一个房间内，所以这两个玩家是看不见的彼此的。我们可以通过房间跳转功能，实现玩家在不同场景不同房间的传送效果。以及我们可以获取到玩家上一个跳转信息，进而通过跳转信息，返回到原来的房间内。

实现步骤：
- 我们以不同场景的不同房间为例，在用户跳转到另一个场景的房间后，我们再根据传送信息，返回到原来的房间。
- 刚开始的步骤与【场景跳转】一致，这里不再赘述。我们完成场景跳转的步骤后，进入下面的步骤。
- 首先我们可以双击点开Level_1的场景文件，进入到Level_1的场景内，打开UI编辑器，放置一个游戏跳转按钮。
 
![](https://cdn.233xyx.com/online/3OYmZ8KGoaZw1700648068179.png)

- 保存UI文件后，我们在默认的DefaultUI脚本中，加入按钮的触发事件。

```ts
//找到对应的传送按钮
const teleportBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Button') as Button

//点击传送按钮,发送传送事件
teleportBtn.onPressed.add(()=>{
    Event.dispatchToServer("return");
})  
```

- 然后我们新增一个脚本，将下面的脚本挂载到场景中，挂载后即完成了游戏跳游戏的逻辑。

```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //监听"传送"事件
        Event.addClientListener("return", (chara: Player) => {
            //获取角色的传送来源信息（房间ID）
            let teleportID = TeleportService.getSourceInfo(chara.teleportId).roomId
            //将当前玩家传送回原来房间
            TeleportService.asyncTeleportToRoom(teleportID, [chara.userId]).then(onResolve, onReject);

        })
    }
}

function onResolve(value: TeleportResult): void{
    console.log(value.errorCode);
}

function onReject(reason: any):  void{
    console.log(reason);
} 
```

效果图：

<video controls src="https://cdn.233xyx.com/online/NI42m57WIX031700648068179.mp4"></video>

- 注意：如果原有房间没有玩家后，房间会自动销毁。或者房间内进入了其他玩家，导致房间人数达到了人数上限，都会导致该名玩家无法返回到原有的房间内，需要有额外的逻辑进行处理。

## 服务器通讯

功能说明：在同一个游戏项目中不同场景或不同房间时，可以进行跨房间或跨场景进行传递信息。

实际应用：可以在触发事件后，进行跨房间或跨场景广播，然后接收到的用户可以触发其他事件。举例说明，比如一个副本需要3个玩家才能够进入，可以在玩家点击匹配按钮时，通过跨服通讯发送匹配事件，在不同房间或不同场景的玩家都可以收到这个匹配事件，然后会弹出匹配面板，在其他房间的玩家通过点击匹配面板的信息，同意并跟随发起玩家进行组队跳转到相应的副本中。

### 跨房间通讯

功能说明：指的是在同一个场景下，不同的房间内时，可以发生的通讯。

注册事件：

```ts
//注册“匹配”事件
Event.addSceneEventListener("mate", () => {
    //添加游戏逻辑
});
```

监听事件：

```ts
//接受“匹配”事件，并携带一些信息数据
Event.dispatchSceneEvent("mate", player.userId);
```

### 跨场景通讯

功能说明：指的是在同一游戏项目下，不同场景不同房间时，可以发生的通讯。

注册事件：

```ts
//注册“匹配”事件
Event.addGameEventListener("mate", () => {
    //添加游戏逻辑
});
```

监听事件：

```ts
//接受“匹配”事件，并携带一些信息数据
Event.dispatchGameEvent("mate", player.userId);
```
