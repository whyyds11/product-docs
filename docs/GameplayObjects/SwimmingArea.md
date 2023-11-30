# 游泳区域

::: tip **阅读本文预计 10 分钟**
**本文概述了游泳区域的工作机制,展示在编辑器创建并使用游泳区域的过程和游泳区域在游戏中的应用.教程内容包含游泳区域功能对象的属性面板,类对象属性和接口以及一个示例工程.**
:::


## 什么是游泳区域

> 游泳区域是一个具有一定形状的一块区域，它用于将进入该区域的角色切换为游泳状态。开发者使用该对象在自己想要的区域实现角色游泳效果。例如场景中的游泳池，河流湖泊和海洋都可以放置游泳区域。


## 游泳区域 都包含什么



#### 游泳区域属性：

| 属性名 | 描述 |
| ------ | ---- | 
| `流体摩擦力`| 角色在游泳区域内的摩擦力，影响角色移动的速度 |


## 如何创建游泳区域

### 在编辑器工作区中直接使用：

**在本地资源库中搜索[游泳区域]，找到功能对象，拖入场景并自定义它的属性包括父类属性：位移旋转缩放**

![](https://cdn.233xyx.com/1681892585794_746.png)


### 通过脚本动态创建：

```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

        let pool = GameObject.spawn("SwimmingVolume",{
            replicates:true,
            transform:new Transform(Vector.zero,Rotation.zero,new Vector(50,50,10))  //设置游泳区域的位置和大小
        });
    }
}
```

## 如何通过脚本控制角色上浮下潜

**创建控制游泳区域的脚本,拖入到对象栏游泳区域下.**

![](https://cdn.233xyx.com/1681893186983_026.png)

**控制角色上浮下沉，获取角色游泳状态**

```ts
@Component
export default class NewScript extends Script {

    upInterval: number
    downInterval: number

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (Util.SystemUtil.isServer()) return;
        let player = Player.localPlayer;
        let pool = this.gameObject as SwimmingVolume;

        // 通过键盘方向键控制角色上浮
        InputUtil.onKeyPress(Keys.Up, () => {
            this.upInterval = setInterval(() => {
                player.character.swimmingUp(10);
            }, 50);
        });

        // 终止上浮
        InputUtil.onKeyUp(Keys.Up, () => {
            clearInterval(this.upInterval);
        });

        // 过键盘方向键控制角色下潜
        InputUtil.onKeyPress(Keys.Down, () => {
            this.upInterval = setInterval(() => {
                player.character.swimmingDown(10);
            }, 50);
        });

        // 终止下潜
        InputUtil.onKeyUp(Keys.Down, () => {
            clearInterval(this.downInterval);
        });
    }
}
```

##
