# 热武器
::: info
**阅读本文预计 20 分钟**

编辑器提供【热武器】对象来帮助用户自定义具有独特体验的发射类武器，创造良好的战斗体验。【热武器】对象涵盖发射、换弹、瞄准、上膛、射击精度、后坐力一共六个功能模块来模拟发射类武器的工作机制，用户可以在触发相应事件时执行对应的游戏逻辑。
:::
# 热武器对象

【热武器】是一个发射类武器的功能框架，框架内实现发射、换弹、瞄准、上膛、射击精度、后坐力六个功能模块来模拟发射类武器的工作机制。开发者可以决定是否启用这些功能并自定义功能中相关的各种属性。通过不同的属性配置来模拟不同类型武器的表现。【热武器】在工作流中会触发关键事件方便用户准确把握【热武器】当前的工作状态，同时执行对应的游戏逻辑：例如开火时播放枪口特效，发射子弹，播放音效等等。你可以在【本地资源库】中的【游戏功能对象】栏中找到【热武器】。

![img](https://arkimg.ark.online/1684045718029-20.webp)

# 创建热武器

## 通过放置资源创建：

【热武器】本身作为一个游戏对象可以放置于游戏场景中。你可以从【本地资源库】中的【游戏功能对象】栏将【热武器】拖入【场景】或者【对象管理器】来创建对象。

1. 在【本地资源库】的【游戏功能对象】栏中找到【热武器】

![img](https://arkimg.ark.online/1684045718023-1.webp)

2. 将对象拖入到场景中或者【对象管理器】

![img](https://arkimg.ark.online/1684045718023-2.webp)

3. 在右侧【对象管理器】中【对象】栏找到对应的【热武器】对象并自定义它的属性

![img](https://arkimg.ark.online/1684045718024-3.webp)![img](https://arkimg.ark.online/1684045718024-4.webp)

## 通过脚本创建：

通过脚本你也可以在游戏运行时通过【本地资源库】中的【热武器】资源ID："HotWeapon" 动态生成一个【热武器】对象来使用。在【工程内容】下的脚本目录中新建一个脚本文件，将脚本拖入【对象管理器】中【对象】栏。选中脚本进行编辑，将下列示例代码替换脚本中的onStart方法：异步生成一个【热武器】对象，开启双端同步，位置为（300，0，50），旋转为（0，0，0），缩放倍数为（1，1，1）。打印生成【热武器】对象的gameObjectId。

```TypeScript
protected async onStart(): Promise<void> {
    if(SystemUtil.isServer()) {
        let weapon = await GameObject.asyncSpawn("HotWeapon", {replicates: true, transform: new Transform(new Vector(300, 0, 50), Rotation.zero, Vector.one)}) as HotWeapon;
        console.log("HotWeapon gameObjectId: " + weapon.gameObjectId);
    }
}
```

::: tip
【热武器】是一个双端同步对象，它的工作状态和各功能模块参数都是服务器作为权威进行修改。同时【热武器】为方便用户使用封装了大量客户端接口方便用户与UI操作进行衔接。
:::

# 自定义热武器

## **发射功能：**

【发射】是热武器工作流中必须开启的功能，功能中定义了与发射相关的属性并提供相关接口。【发射】功能在【热武器】对象中作为一个功能组件对象存在：`fireComponent`，通过它我们可以定义武器发射表现。`fireComponent`的部分属性可以在属性面板进行配置，也可以通过代码去读写。`animationAssetId`属性用来指定发射动作；`fireMode`属性用来获取武器当前的发射模式（修改需要使用【热武器】本体接口，详情见后文）；`fireInterval`属性用来设置发射间隔；`clipSize`属性用来设置弹夹中的弹药数量；`multipleShot`属性设置一次开火中发射的子弹数量；

此外部分属性是动态变化的，只能在代码中读写。`currentBullet`属性用来表示弹夹中剩余弹药数量。

![img](https://arkimg.ark.online/1684045718024-5.webp)

- 发射动作绑定：热武器开火时播放的动作（支持资源库拖拽入参）
- 发射模式：
  - 单发：每次执行开火时，发射1次后自动停火。
  - 连发：每次执行开火时，发射【连发次数】次后停火。
	![img](https://arkimg.ark.online/1684045718024-6.webp)

  - 全自动：每次执行开火时持续发射，直到手动调用停火或者弹夹子弹为0；
- 发射间隔：热武器发射两发子弹的最小间隔时间
- 弹夹容量：热武器弹夹大小
- 多重射击：每发子弹的分裂数
- 屏幕中心发射：子弹会在摄像机中心位置生成
  - 发射偏移调整：子弹生成位置偏移
	![img](https://arkimg.ark.online/1684045718024-7.webp)

```TypeScript
// 获取热武器对象
let weapon = this.gameObject as HotWeapon;

// 设置发射动画4167
weapon.fireComponent.animationAssetId = "4167";
// 获取发射模式，当前不是全自动的话改成全自动
if(weapon.fireComponent.fireMode != HotWeaponFireMode.FullAutomationFire) {
    weapon.fireMode = HotWeaponFireMode.FullAutomationFire;
}
// 修改发射间隔为0.2s
weapon.fireComponent.fireInterval = 0.2;
// 修改弹夹容量为10（规定发射次数）
weapon.fireComponent.clipSize = 10;
// 修改发射子弹数为5（规定每次发射子弹数）
weapon.fireComponent.multipleShot = 5;
```

::: tip

发射间隔主要控制【连发】和【全自动】模式中的发射间隔，但是并没有屏蔽开火操作，武器发射后在间隔时间内再次调用开火还是会重新发射。弹夹容量规定了弹药上限，换弹数量不会超过弹夹容量。此外注意区分弹药数量（可以发射多少次）和发射的子弹数量（每发弹药的子弹数）。

:::

## **发射精度功能：**

【发射精度】是热武器工作流中可选的功能，属性面板上可以选择该功能是否启用。功能中定义了与发射精度相关的属性并提供相关接口。【发射精度】功能在【热武器】对象中作为一个功能组件对象存在：`accuracyOfFireComponent`，通过它开发者可以对射击范围进行设置，更改发射的锥形范围半径，调整射击精准度。`accuracyOfFireComponent`的部分属性可以在属性面板进行配置，也可以通过代码去读写。`defaultDispersionHalfAngle`属性表示默认散布范围。`maxDispersionHalfAngle`属性表示最大散布范围。`minDispersionHalfAngle`属性表示最小散布范围。`dispersionHalfAngleDecreaseSpeed`属性表示范围收缩速度。`dispersionHalfAngleIncreaseSpeed`属性表示范围扩张速度。

此外部分属性是动态变化的，只能在代码中读写。`dispersionHalfAngleIncreaseSpeed`属性表示范围扩张速度。`dispersionHalfAngleIncreasePerShot`属性表示子弹散布范围半径在每次射击后的扩张值。

![img](https://arkimg.ark.online/1684045718024-8.webp)

- 散布范围设置：默认散布范围半径，不开火时范围会向默认移动
- 最大散布范围：最大散布范围半径
- 最小散布范围：最小散布范围半径，提供上面两个参数的最低锚定值，可作为切换使用
- 范围收缩速度：散布范围收缩的速度，过大会使范围无法扩张
- 范围扩张速度：散布范围扩展的速度，过大会使范围扩张过快

![img](https://arkimg.ark.online/1684045718024-9.webp)![img](https://arkimg.ark.online/1684045718024-10.webp)

![image-20230514143221095](https://arkimg.ark.online/image-20230514143221095.webp)

![20230328-103749](https://arkimg.ark.online/20230328-103749-1684051023070-4.gif)

```TypeScript
// 获取热武器对象
let weapon = this.gameObject as HotWeapon;

weapon.accuracyOfFireComponent.defaultDispersionHalfAngle = 10;
weapon.accuracyOfFireComponent.maxDispersionHalfAngle = 20;
weapon.accuracyOfFireComponent.minDispersionHalfAngle = 1;
weapon.accuracyOfFireComponent.dispersionHalfAngleDecreaseSpeed = 10;
weapon.accuracyOfFireComponent.dispersionHalfAngleIncreaseSpeed = 10;
```

::: tip

收缩速度过快会导致范围无法扩散。使用射击进度后子弹会在当前散步夹角的圆锥范围内随机偏移。散布范围的值通常会用于准星UI范围的计算。范围的中心即是屏幕中心。

:::

## **瞄准功能：**

【瞄准】是热武器工作流中可选的功能，属性面板上可以选择该功能是否启用。功能中定义了与瞄准相关的属性并提供相关接口。【瞄准】功能在【热武器】对象中作为一个功能组件对象存在：`aimComponent`，通过它开发者可以修改瞄准时的摄像机距离，切换瞄准状态。

![img](https://arkimg.ark.online/1684045718025-12.webp)![img](https://arkimg.ark.online/1684045718025-13.webp)

- 瞄准模式：
  
  - 第三人称：

  - 摄像机距离调整：瞄准时摄像机杆的长度变化
  
    ![image-20230514143412765](https://arkimg.ark.online/image-20230514143412765.webp)

```TypeScript
// 获取热武器对象
let weapon = this.gameObject as HotWeapon;
// 设置瞄准时摄像机距离
weapon.aimComponent.cameraOffsetDistanceInThirdPersonMode = 300
//开启瞄准
weapon.aimComponent.enableAiming(true);
```

::: tip

瞄准切换导致的摄像机缩放过程中，不要删除【热武器】对象否则会报错。

:::

## **上膛功能：**

【上膛】是热武器工作流中可选的功能，属性面板上可以选择该功能是否启用。功能中定义了与上膛相关的属性并提供相关接口。【上膛】功能在【热武器】对象中作为一个功能组件对象存在：`loadComponent`，通过它开发者可以对上膛表现进行设置。`animationAssetId`属性用来指定上膛动作；`loadDuration`属性用来设置上膛时间；`loadAfterFireEnabled`属性用来设置是否每次开火都需要上膛（霰弹枪，狙击枪）；

![img](https://arkimg.ark.online/1684045718025-14.webp)

- 上膛动作绑定：热武器上膛时播放绑定的动作（支持资源库拖拽）
- 上膛时间：上膛动作完成的时间
- 发射后上膛：勾选后每次发射后会自动进行一次上膛（默认是换弹后才进行上膛）

```TypeScript
// 获取热武器对象
let weapon = this.gameObject as HotWeapon;

//设置上膛动画80482
weapon.loadComponent.animationAssetId = "80482";
//设置上膛时间0.5s
weapon.loadComponent.loadDuration = 0.5;
//设置发射后上膛为true
weapon.loadComponent.loadAfterFireEnabled = true;
```

::: tip

每次换弹时会自动进行一次上膛，上膛时间过短会导致动画无法播放。此外上膛时间与动画播放速率无关，且由于动画机制问题，上膛动画可以被其他动画打断。

:::

## **换弹功能：**

【换弹】是热武器工作流中可选的功能，属性面板上可以选择该功能是否启用。功能中定义了与换弹相关的属性并提供相关接口。【换弹】功能在【热武器】对象中作为一个功能组件对象存在：`reloadComponent`，通过它开发者可以对换弹表现进行设置。`animationAssetId`属性用来指定换弹动作；`reloadDuration`属性用来设置换弹时间；

![img](https://arkimg.ark.online/1684045718025-15.webp)

- 换弹动作绑定：热武器换弹时播放绑定的动作（资源库拖拽）
- 换弹时间：换弹动作完成的时间

```TypeScript
// 获取热武器对象
let weapon = this.gameObject as HotWeapon;

//设置换弹动画4170
weapon.reloadComponent.animationAssetId = "4170";
//设置换弹时间0.5s
weapon.reloadComponent.reloadDuration = 0.5;
```

::: tip

换弹时间过短会导致动画无法播放。此外换弹时间与动画播放速率无关，且由于动画机制问题，换弹动画可以被其他动画打断。

:::

## **后坐力功能：**

【后坐力】是热武器工作流中可选的功能，属性面板上可以选择该功能是否启用。功能中定义了与后坐力相关的属性并提供相关接口。【后坐力】功能在【热武器】对象中作为一个功能组件对象存在：`recoilForceComponent`，通过它开发者可以。`accuracyOfFireComponent`的部分属性可以在属性面板进行配置，也可以通过代码去读写。`defaultDispersionHalfAngle`属性表示默认散布范围。`maxDispersionHalfAngle`属性表示最大散布范围。`minDispersionHalfAngle`属性表示最小散布范围。`dispersionHalfAngleDecreaseSpeed`属性表示范围收缩速度。`dispersionHalfAngleIncreaseSpeed`属性表示范围扩张速度。

此外部分属性是动态变化的，只能在代码中读写。`dispersionHalfAngleIncreaseSpeed`属性表示范围扩张速度。`dispersionHalfAngleIncreasePerShot`属性表示子弹散布范围半径在每次射击后的扩张值。

![img](https://arkimg.ark.online/1684045718025-16.webp)

- 水平偏移最小值/最大值：热武器每次发射时，摄像机会基于开火时摄像机位置，进行水平方向的旋转，偏移值从设定的区间内随机。
- 垂直偏移最小值/最大值：热武器每次发射时，摄像机会基于开火时摄像机位置，进行垂直方向的旋转偏移，偏移值从设定的区间内随机。
- 水平抖动最小值/最大值：热武器发射时，摄像机会基于开火时摄像机位置，进行水平方向的旋转，在单次开火后，摄像机会回到水平偏移后的位置，即摄像机水平抖动是一个表现，并不会影响枪械的最终位置
- 垂直抖动最小值/最大值：热武器发射时，摄像机会基于开火时摄像机位置，进行垂直方向的旋转，在单次开火后，摄像机会回到垂直偏移后的位置，即摄像机垂直抖动是一个表现，并不会影响枪械的最终位置

![image-20230514143556555](https://arkimg.ark.online/image-20230514143556555.webp)

![20230327-165923](https://arkimg.ark.online/20230327-165923-1684051142727-7.gif)

```TypeScript
// 获取热武器对象
let weapon = this.gameObject as HotWeapon;

// 抖动属性
weapon.recoilForceComponent.minHorizontalOffset = -0.5;
weapon.recoilForceComponent.maxHorizontalOffset = 0.5;
weapon.recoilForceComponent.minVerticalOffset = -0.3;
weapon.recoilForceComponent.maxVerticalOffset = -0.2;

// 偏移属性
weapon.recoilForceComponent.minHorizontalJitter = -0.7;
weapon.recoilForceComponent.maxHorizontalJitter = 0.7;
weapon.recoilForceComponent.minVerticalJitter = -0.8;
weapon.recoilForceComponent.maxVerticalJitter = 0.8;
```

# 使用热武器

## **热武器的工作流程图：**

![weaponflow](https://arkimg.ark.online/weaponflow-1684051196671-10.webp)

## 获取热武器对象

### 【对象管理器】中【对象】栏下的【热武器】对象：

**使用`asyncFindGameObjectById`接口通过【触发器】对象的gameObjectId去获取：**

1. 选中【热武器】对象后右键点击【复制对象ID】获取它的gameObjectId。此处注意区分【热武器】资源的gameObjectId和【热武器】对象的gameObjectId。

![img](https://arkimg.ark.online/1684045718025-18.webp)

2. 将脚本拖入对象管理器下，用下列代码替换脚本中的`onStart`方法：代码将异步查找ID对应的对象以【热武器】对象进行接收。

```TypeScript
protected async onStart(): Promise<void> {
    if(SystemUtil.isServer()) {
        let weapon = await GameObject.asyncFindGameObjectById("1CAD6351") as HotWeapon;
        console.log("weapon gameObjectId " + weapon.gameObjectId);
    }
}
```

**使用脚本挂载的方式进行获取：**

1. 将脚本挂载到【热武器】对象下方

![img](https://arkimg.ark.online/1684045718025-19.webp)

2. 在脚本的`onStart`方法中添加下列代码：代码获取脚本挂载的对象并以【热武器】对象进行接收

```TypeScript
let weapon = this.gameObject as HotWeapon;
```

### 动态生成的【热武器】对象：

将下列示例代码替换脚本中的`onStart`方法：示例代码在客户端往`asyncSpawn`接口（中传入【热武器】的资源ID“HotWeapon”异步生成了一个对应的【热武器】对象。

```TypeScript
protected async onStart(): Promise<void> {
    if(SystemUtil.isServer()) {
        let weapon = await GameObject.asyncSpawn("HotWeapon", {replicates: true, transform: new Transform(new Vector(300, 0, 50), Rotation.zero, Vector.one)}) as HotWeapon;
        console.log("weapon gameObjectId: " + weapon.gameObjectId);
    }
}
```

## 组件功能开关

【热武器】中除了发射功能是不可控制开关之外，其余功能用户都可以选择性的开启或关闭。组件功能：换弹，上膛，后坐力，射击精度，瞄准需要开启才有对应的功能，热武器工作时才会执行对应的流程。【热武器】默认开启所有的功能。`recoilForceEnabled`属性对应后坐力功能开关；`reloadEnabled`属性对应换弹功能开关；`loadEnabled`属性对应上膛功能开关；`accuracyOfFireEnabled`属性对应射击精度功能开关；`aimEnabled`属性对应瞄准功能开关；

```TypeScript
// 获取热武器对象
let weapon = this.gameObject as HotWeapon;

// 操作各功能组件的开关（发射功能不可操作，默认开启）
weapon.aimEnabled = true;
weapon.loadEnabled = true;
weapon.reloadEnabled = true;
weapon.accuracyOfFireEnabled = true;
weapon.recoilForceEnabled = true;
```

## 装备&卸载

【热武器】提供了接口方便用户装备和卸载。要想使用【热武器】的功能需要调用`equip`接口将【热武器】对象装备到角色身上的某个插槽。此时【热武器】对象会刷新自己的owner，并且会瞬移到角色插槽的位置并绑定。而卸载热武器则可以调用`unequip`接口，此时【热武器】对象失去owner并且从角色身上解绑。

```TypeScript
@Class
export default class NewScript extends Script {

    // 热武器对象
    weapon: HotWeapon;
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        // 双端获取热武器对象
        this.weapon = this.gameObject as HotWeapon;
        console.log("this.weapon gameObjectId " + this.weapon.gameObjectId);
        
        // 服务端
        if(SystemUtil.isServer()) {
            // 添加服务端装备回调
            this.weapon.onEquip.add(() => {
                console.error("onEquippedServer")
            });
            
            // 添加服务端卸载回调
            this.weapon.onUnequip.add(() => {
                console.error("onUnequippedServer")
            });
        } 

        // 客户端
        if(SystemUtil.isClient()) {
            // 添加客户端装备回调
            this.weapon.onEquip.add(() => {
                console.error("onEquippedClient")
            });
            
            // 添加客户端卸载回调
            this.weapon.onUnequip.add(() => {
                console.error("onUnequippedClient")
            });

            // 添加按键方法，按下键盘“E”装备热武器
            InputUtil.onKeyDown(Keys.E, async () => {
                // 获取装备的角色对象
                let chara Player.localPlayer.character;
                // 调用RPC函数去服务端进行装备，将角色ID传到服务端
                this.equip_Server(chara.gameObjectId);
            });
            
            // 添加按键方法，按下键盘“Q”卸载热武器
            InputUtil.onKeyDown(Keys.Q, async () => {
                this.weapon.unequip();
            });
        } 
    }

    // 服务端RPC函数：装备热武器
    @RemoteFunction(Server)
    private equip_Server(charaGameObjectId: string) {
        // 异步找到角色后将热武器对象装备到角色右手插槽上，并调用RPC函数去所有客户端进行装备
        GameObject.asyncFindGameObjectById(charaGameObjectId).then((chara: Character) => {
            this.weapon.equip(chara, HumanoidSlotType.RightHand);
            this.equip_Client(charagameObjectId);
        });
    }

    // 客户端广播RPC函数：装备热武器
    @RemoteFunction(Client, Multicast)
    private equip_Client(charaGameObjectId: string) {
        // 异步找到角色后将热武器对象装备到角色右手插槽上
        GameObject.asyncFindGameObjectById(charaGameObjectId).then((chara: Character) => {
            this.weapon.equip(chara, HumanoidSlotType.RightHand);
        });
    }
}
```

::: tip

`equip`接口需要在服务端调用，客户端调用只是为了刷新一遍客户端的owner数据。注意需要TS层热武器构造完成之后再调用该函数（使用await、ready或then）。注意装备后弹药仍为0，需要换弹才能正常开火。`unequip`接口可以双端调用，客户端调用会自动广播。

:::

## 热武器owner

【热武器】提供了`getCurrentOwner`接口方便用户随时访问它的拥有者。当热武器没有拥有者时，该接口会返回一个空值。

```TypeScript
// 获取热武器对象
let weapon = this.gameObject as HotWeapon;

// 打印热武器对象Owner
console.log("weapon owner " + this.weapon.getCurrentOwner());
```

::: tip

当热武器装备完成时owner会刷新，需注意服务端完成装备的瞬间客户端还未刷新owner属性。不要在客户端装备事件触发时使用该接口（服务端可以）。此外当热武器卸载时，owner会立即置空，所以在卸载事件触发时访问的owner已经是空。

:::

## 开火&换弹&上膛

【热武器】中`startFire`接口执行开火操作，调用后【热武器】对象按照【发射】组件的设置进入开火流程。如果发射模式是全自动则需要调用`stopFire`接口执行停火操作，其他模式在执行完发射次数后会自动停火。`reload`接口执行换弹操作，用户需要往里面输入一个非负数进行弹药装填，但是最终弹药数量会收到弹夹容量限制。通过`breakReload`接口可以打断换弹操作。`load`接口执行上膛操作，一般该接口不会主动调用，上膛过程是自动执行的，例如换弹完成后或者勾选了每次发射会自动上膛。但是用户可以通过`breakLoad`接口打断上膛操作。

```TypeScript
// 获取热武器对象
let weapon = this.gameObject as HotWeapon;

// 添加按键方法，按下键盘“F”键开火
InputUtil.onKeyDown(Keys.F, async () => {
    weapon.startFire();
});

// 添加按键方法，抬起键盘“F”键停火
InputUtil.onKeyUp(Keys.F, async () => {
    weapon.stopFire();
});

// 添加按键方法，按下键盘“R”键换弹
InputUtil.onKeyDown(Keys.R, async () => {
    // 补充10发弹药，如果超出弹夹容量限制则将弹药数量置为弹夹容量
    weapon.reload(10);
});

// 添加按键方法，按下键盘“B”键打断上膛
InputUtil.onKeyUp(Keys.B, async () => {
    weapon.breakLoad();
});
```

::: info

`startFire`和`stopFire`接口更类似一个按下扳机，放开扳机的操作。然后根据【热武器】的发射组件设置来执行对应的工作流程。上述操作都不支持重复执行，即执行对应操作时再次调用相关接口是无效的。此外这些接口虽然支持双端调用，但是在客户端调用时，只有持有人的客户端发起的调用会生效。

:::

## 热武器工作状态

【热武器】有四种状态：准备（Idle = 0），换弹（Reloading = 1），上膛（Loading = 2），开火（Firing = 3）。热武器默认状态是【Idle】；当开始开火至开火结束时状态是【Firing】；执行换弹至换弹完成时状态为【Reloading】；执行上膛至上膛完成时状态为【Loading】；

### **热武器的状态图：**

![weaponState](https://arkimg.ark.online/weaponState.webp)

```TypeScript
enum HotWeaponState {
    /** 准备好，可以进行射击 非射机姿态 */
    Idle = 0,
    /** 换弹夹，装弹 */
    Reloading = 1,
    /** 上膛 */
    Loading = 2,
    /** 射击中 */
    Firing = 3
}
// 开启onUpdate方法
this.useUpdate = true;

// 获取热武器对象
let weapon = this.gameObject as HotWeapon;

// 每帧打印热武器对象当前状态
protected onUpdate(dt: number): void {
    console.log("weapon state " + weapon.getCurrentState(););
}
```

::: tip

需注意，真正的开火状态持续时间是非常短的，也就是1-3帧。这段时间【热武器】会处于【Firing】状态，然后会回到默认状态【Idle】等待下一次开火。这在全自动和连发模式中可以很明显的看出来。但是实际开发中经常需要将连发或全自动的开火认作一个整体状态，针对这个需求【热武器】在`fireComponent`中额外提供了一个`isFiring`接口去进行判断。

:::

## 常用接口

【热武器】虽然只是一个功能框架，没有实现具体的武器表现，但是它给武器一般需要实现的功能都提供对应的接口，方便用户直接调用接口来获取实现功能所需要的返回值。`getDefaultCrossHairSize`接口帮助用户获取默认准星UI的大小，`getShootDirWithDispersion`接口帮助用户获取计算射击精度偏移后向屏幕中心发射的方向。此外由于热武器功能组件较多，普通clone接口无法复制热武器对象下功能的，`cloneComponentsData`帮助用户复制组件内的数据。

## 热武器事件

【热武器】本体一共有两个事件：装备`onEquip`；卸载`onUnequip`；获取到【热武器】对象后。我们可以给对应的装备/卸载事件添加委托函数。当【热武器】装备或者卸载时，就会触发对应的事件并执行委托函数。

【发射组件】一共有5个事件：发射开始`onStartFire`；发射结束`onEndFireServer`；连发周期结束`onEndContinuousFire`；当【热武器】发射时，就会触发对应的事件并执行委托函数。

【换弹组件】一共有2个事件：换弹开始`onStartReload`；换弹结束`onEndReload`；当【热武器】换弹时，就会触发对应的事件并执行委托函数。

【上膛组件】一共有4个事件：上膛开始`onStartLoad`；上膛结束`onEndLoad`；当【热武器】上膛时，就会触发对应的事件并执行委托函数。

【瞄准组件】一共有4个事件：瞄准开始`onStartAim`；瞄准结束`onEndAim`；当【热武器】每次执行瞄准时，就会触发对应的事件并执行委托函数。

【后坐力组件】一共有2个事件：开始后坐力`onStartRecoil`；当【热武器】每次开火产生后坐力时，就会触发对应的事件并执行委托函数。

【射击精度组件】一共有1个事件：射击精度变化`onCurrentDispersionChange`。当【热武器】射击精度变化时，就会触发对应的事件并执行委托函数。

将下列示例代码替换脚本中的`onStart`方法：示例代码分别在双端添加对应回调

```TypeScript
// 获取热武器对象
let weapon = this.gameObject as HotWeapon;

// 服务端添加热武器回调
if(SystemUtil.isServer()) {
    this.weapon.onEquip.add(() => {
        // 需要在服务端热武器装备完成时执行的逻辑，例如更新玩家装备数据
        console.log("onEquippedServer")
    });

    this.weapon.onUnequip.add(() => {
        // 需要在服务端热武器卸载完成时执行的逻辑，例如更新玩家装备数据
        console.log("onUnequippedServer")
    });

    this.weapon.fireComponent.onStartFire.add(() => {
        // 需要在服务端热武器开始发射时执行的逻辑，例如生成一个双端模型作为子弹
        console.log("onStartFireServer")
    });

    this.weapon.fireComponent.onEndFire.add(() => {
        // 需要在服务端热武器结束发射时执行的逻辑，例如做一些枪械变形
        console.log("onEndFireServer")
    });

    this.weapon.fireComponent.onEndContinuousFire.add(() => {
        // 需要在服务端热武器一次连发结束时执行的逻辑，例如做一些枪械变形
        console.log("onEndContinuousFireServer")
    });

    this.weapon.reloadComponent.onStartReload.add(() => {
        // 需要在服务端热武器开始换弹时执行的逻辑，例如更新一下玩家状态
        console.log("onStartReloadServer")
    });

    this.weapon.reloadComponent.onEndReload.add(() => {
        // 需要在服务端热武器结束换弹时执行的逻辑，例如更新一下玩家状态
        console.log("onEndReloadServer")
    });

    this.weapon.loadComponent.onStartLoad.add(() => {
        // 需要在服务端热武器开始上膛时执行的逻辑，例如更新一下玩家状态
        console.log("onStartLoadServer")
    });

    this.weapon.loadComponent.onEndLoad.add(() => {
        // 需要在服务端热武器结束上膛时执行的逻辑，例如更新一下玩家状态
        console.log("onEndLoadServer")
    });

    this.weapon.aimComponent.onStartAim.add(() => {
        // 需要在服务端热武器开始瞄准时执行的逻辑，例如更新一下玩家状态
        console.log("onAimStartServer")
    });

    this.weapon.aimComponent.onEndAim.add(() => {
        // 需要在服务端热武器结束瞄准时执行的逻辑，例如更新一下玩家状态
        console.log("onAimEndServer")
    });

    this.weapon.recoilForceComponent.onStartRecoil.add(() => {
        // 需要在服务端热武器开始后坐力时执行的逻辑，例如更新一下枪械状态
        console.log("onStartRecoilForceServer")
    });
} 

// 客户端添加热武器回调
if(SystemUtil.isClient()) {
    this.weapon.onEquip.add(() => {
        // 需要在客户端热武器装备完成时执行的逻辑，例如播放一个装备音效特效
        console.log("onEquippedClient")
    });

    this.weapon.onUnequip.add(() => {
        // 需要在客户端热武器卸载完成时执行的逻辑，例如播放一个装备音效特效
        console.log("onUnequippedClient")
    });

    this.weapon.fireComponent.onStartFire.add(() => {
        // 需要在客户端热武器开始开火时执行的逻辑，例如播放一个开火音效特效
        console.log("onStartFireClient")
    });

    this.weapon.fireComponent.onEndFire.add(() => {
        // 需要在客户端热武器开始开火时执行的逻辑，例如更新一下UI界面的子弹数量
        console.log("onEndFireClient")
    });

    this.weapon.reloadComponent.onStartReload.add(() => {
        // 需要在客户端热武器开始换弹时执行的逻辑，例如播放一个换弹音效特效
        console.log("onStartReloadClient")
    });

    this.weapon.reloadComponent.onEndReload.add(() => {
        // 需要在客户端热武器结束换弹时执行的逻辑，例如更新一下UI界面的子弹数量
        console.log("onEndReloadClient")
    });

    this.weapon.loadComponent.onStartLoad.add(() => {
        // 需要在客户端热武器开始上膛时执行的逻辑，例如播放一个上膛音效特效
        console.log("onStartLoadClient")
    });

    this.weapon.loadComponent.onEndLoad.add(() => {
        // 需要在客户端热武器结束上膛时执行的逻辑，例如播放一个特效
        console.log("onEndLoadClient")
    });

    this.weapon.aimComponent.onStartAim.add(() => {
        // 需要在客户端热武器开始瞄准时执行的逻辑，例如更新一下UI
        console.log("onAimStartClient")
    });

    this.weapon.aimComponent.onEndAim.add(() => {
        // 需要在客户端热武器结束瞄准时执行的逻辑，例如更新一下UI
        console.log("onAimEndClient")
    });

    this.weapon.recoilForceComponent.onStartRecoil.add(() => {
        // 需要在客户端热武器开始后坐力时执行的逻辑，例如更新一下UI
        console.log("onStartRecoilForceClient")
    });

    this.weapon.accuracyOfFireComponent.onCurrentDispersionChanged.add(() => {
        // 需要在客户端热武器射击精度变化时执行的逻辑，例如更新一下准星UI大小
        console.log("onCurrentDispersionChangedClient")
    });
} 
```

::: tip

【射击精度】和玩家的摄像机相关，所以只能在客户端触发事件。添加委托函数的时候需要注意添加的位置。此外客户端事件触发的时机比收到属性同步要慢，使用时需要注意延迟问题。

:::
