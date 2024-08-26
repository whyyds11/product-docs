# 动画与姿态

**阅读本文大概需要 15 分钟**

本文概述了动画的定义、姿态的定义、角色的默认姿态，以及如何使用动画与姿态。

## 动画与姿态的定义

### 动画定义

动画定义：动画是让角色执行一个独立的动作。

### 姿态定义

姿态定义：姿态是角色可以一直维持的状态的动作效果。

姿态包括：【基础姿态】与【二级姿态】两种效果。

 - 【基础姿态】：基础姿态是地面、飞行和游泳三种模式的状态机中所有的动作表现。其中包括了我们预制好的走跑跳等动作表现。也就是说，当你不进行任何修改直接进入游戏时，角色的动作表现就是基础姿态的效果。

 - 【二级姿态】：是动画系统的拓展功能，独立于基础姿态外的复杂动画逻辑，比如持枪等功能效果。

## 动画

### 资源

资源说明：我们需要使用loadAnimation加载相应的动画资源。

示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//加载角色动画资源
let animation = chara.loadAnimation("14700");
```

### 动画循环次数

功能说明：角色在播放动画时，多次重复播放该动画资源，直至达到循环次数上限后，停止播放动画。

实际应用：可以让NPC无限循环播放动作，也可以让NPC播放动作后进行待机。

首先我们将角色对象放置在场景中

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/bdf9180c3ac241078dc1a6867eb5e959_365403023.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/bab9a66e5362457dbca209cbd05fde6b_365403025.webp)|

然后挂载下面的脚本

```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        // 获取玩家
        let chara = Player.localPlayer.character
        // 通过对象ID，获取三个NPC对象。把刚刚复制的对象ID在这里进行替换。
        let npc1 = await GameObject.asyncFindGameObjectById("02186A6A") as Character
        let npc2 = await GameObject.asyncFindGameObjectById("3F58547B") as Character
        let npc3 = await GameObject.asyncFindGameObjectById("0DC8EEF6") as Character
        //加载角色动画资源
        let danceAnimation = chara.loadAnimation("14700");
        //加载NPC1的动画资源
        let AA = npc1.loadAnimation("14700");
        //NPC1的动画循环次数设为无限循环
        AA.loop = 0;
        //加载NPC2的动画资源
        let BB = npc2.loadAnimation("14700");        
        //NPC1的动画循环次数设为1次
        BB.loop = 1;
        // //由于NPC3是四足形象，所以动画模式需要更换为自定义模式。
        // npc3.animationMode = AnimationMode.Custom;
        //加载NPC3的动画资源
        let CC = npc3.loadAnimation("181289");  
        //NPC3的动画循环次数设为3次
        CC.loop = 3;
        //按下“1”键触发以下逻辑
        InputUtil.onKeyDown(Keys.One, () => {
            //让角色动画播放
            danceAnimation.play();            
            //让NPC1动画播放
            AA.play();
            //让NPC2动画播放
            BB.play();
            //让NPC3动画播放
            CC.play();
        });
    }
}
```

最后复制我们放置在场景中的角色对象的ID，并将脚本中的角色对象的ID进行替换，即可实现效果。

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/c5a4add751364f34acff3b2395d59034_365403024.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/a6e15d0e8864423a9405cae053cc4139_365403026.webp)|

效果图：

<video controls src="https://cdn.233xyx.com/online/YTcLjwvLklfI1694604277559.mp4"></video>

### 动画时长

功能说明：角色播放动画的总时长。

实际应用：目前我们只能获取动画时长，主要目的是通过动画时长控制速度的效果。举例说明，游戏中一般会存在术士魔法师的职业，他们会吟唱x秒去释放技能，这时我们就需要判断动画的时长是否满足吟唱时间，如果不满足，则需要调整动画播放速度来配合吟唱的动作效果。

示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//加载一个角色动画
let danceAnimation = chara.loadAnimation("14700");
//打印动画总时长
console.log(danceAnimation.length);
```

### 动画播放部位

功能说明：由角色的哪些部位进行播放动画。目前可播放动画的部位包括：全身、上半身、下半身。

实际应用：我们可以通过该动画部位，控制角色或NPC只播放上半身或下半身的动画，达到动画融合的效果。举个例子，上半身可以播放打招呼的动画，下半身可以播放坐着的姿态，实现上下半身播放不同的动画需求。

示例脚本：

```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart(): Promise<void> {
        // 获取玩家
        let chara = Player.localPlayer.character
        //加载一个角色动画
        let animation = chara.loadAnimation("14700");

        //按下“1”键触发以下逻辑
        InputUtil.onKeyDown(Keys.One, () => {
            //设置动画的播放部位为全身
            animation.slot = AnimSlot.FullyBody;
            //让角色动画播放
            animation.play();
        });
        //按下“2”键触发以下逻辑
        InputUtil.onKeyDown(Keys.Two, () => {
            //设置动画的播放部位为上半身
            animation.slot = AnimSlot.Upper;
            //让角色动画播放
            animation.play();
        });
        //按下“3”键触发以下逻辑
        InputUtil.onKeyDown(Keys.Three, () => {
            //设置动画的播放部位为下半身
            animation.slot = AnimSlot.Lower;
            //让角色动画播放
            animation.play();
        });
    }
}
```

效果图：

<video controls src="https://cdn.233xyx.com/online/YX3TxYm15qBp1694604277558.mp4"></video>

### 动画播放速度

功能说明：控制动画的播放速度，这里的速度代表的是播放速度的倍率，速度为1时，代表初始播放速度。速度值越大，播放速度越快，速度值越小，播放速度越慢。

实际应用：我们可以通过调整动画播放速度，延长角色的动画播放时长。

示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//加载一个角色动画
let animation = chara.loadAnimation("14700");
//按下“1”键触发以下逻辑
InputUtil.onKeyDown(Keys.One, () => {
    //设置动画的播放速度为0.5
    animation.speed = 0.5
    //让角色动画播放
    animation.play();
});
```

效果图：

<video controls src="https://cdn.233xyx.com/online/EKhBvkEHXVBa1694604277558.mp4"></video>

### 播放功能

功能说明：根据动画的循环/速度等属性，使指定角色播放该动画的功能。

示例脚本：

```ts
//动画播放
animation.play();
```

### 暂停功能

功能说明：让正在播放动画的角色暂停播放，并保持暂停时的动画姿势。

示例脚本：

```ts
//暂停播放动画
animation.pause();
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/H8buBQwO2AH81694604277559.mp4"></video>

### 继续功能

功能说明：使已经暂停动画的角色恢复播放状态，并继续播放完成后续的动画。

示例脚本：

```ts
//继续播放动画
animation.resume();
```

### 停止功能

功能说明：让正在播放动画的角色停止播放，并让角色恢复到默认待机状态。

示例脚本：

```ts
//停止播放动画
animation.stop();
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/VVY3iZH39k6f1694604277558.mp4"></video>

### 动画是否在播放

功能说明：检测动画是否还在进行播放。

实际应用：比如我们想要在角色播放动作时，无法进行移动等操作。就需要判断角色是否在进行播放动画，来屏蔽角色的操作系统。

示例脚本：

```ts
//判断动画是否正在播放
if (animation.isPlaying == true) {
    //动画正在播放的话，执行逻辑
} else {
    //动画没有播放的话，执行逻辑            
}
```

### 动画播放结束回调

功能说明：动画播放结束后，抛出结束事件。

实际应用：角色在播放完成动画后，播放特效。

示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//脸颊前后移动调整
chara.description.advance.headFeatures.faceShape.cheek.cheekFrontalShift = 1;
//脸颊左右缩放调整
chara.description.advance.headFeatures.faceShape.cheek.cheekHorizontalScale = 1;
//脸颊上下移动调整
chara.description.advance.headFeatures.faceShape.cheek.cheekVerticalShift = 1;
```

2. 颧骨功能包括：前后移动、左右缩放。

 - 示例脚本：

```ts
// 给【动画完成】委托添加函数，播放一个升级特效
animation.onFinish.add(() => {
    //在对象上播放特效（特效ID，目标对象）
    EffectService.playOnGameObject("106699", Player.localPlayer.character, 
    {
        //特效播放得插槽位置
        slotType:HumanoidSlotType.Root,
        //特效的旋转角度
        rotation:new Rotation(0,0,-90)
    });
});
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/xk8o9fk3Xu7n1694604277558.mp4"></video>

## 基础姿态

### 设置姿态

功能说明：更换基础姿态的资源

实际应用：目前我们根据角色的形象设定，提供了几种基础姿态仅供选择，包括Lowpoly基础女性姿态、Lowpoly基础男性姿态、写实基础女性姿态、写实基础男性姿态、欧美基础女性姿态、欧美基础男性姿态等等。然后我们就可以通过切换角色的基础姿态，让外观形象为女性的角色，播放男性的基础姿态或其他的姿态脚本：    

```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //获取玩家角色
        let chara = Player.localPlayer.character
        //加载一个写实风格男性的基础姿态资源
        let stance = chara.loadStance("119836");
        // 添加一个按键方法：按下键盘“1”，执行以下逻辑
        InputUtil.onKeyDown(Keys.One, () => {
            //播放写实风格男性的基础姿态
            stance.play();
        });
    }
}    
```

效果图：

<video controls src="https://cdn.233xyx.com/online/sdWAwMMFgqJe1694604277559.mp4"></video>

### 播放功能

功能说明：根据加载的基础姿态的资源，使指定角色播放该姿态的功能。

示例脚本：

```ts
//播放姿态
stance.play();
```

效果图：

<video controls src="https://cdn.233xyx.com/online/xd5UFBREaYSr1694604277559.mp4"></video>

### 停止功能

功能说明：根据加载的基础姿态的资源，使指定角色停止正在播放的姿态。

示例脚本：

```ts
//停止姿态
stance.stop();
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/4WU79guDpYwJ1694604277559.mp4"></video>

### 瞄准偏移功能

功能说明：开启瞄准偏移功能后，角色头部会跟随摄像机的方向进行移动，并且不会转动身体。关闭瞄准偏移后，摄像机移动并不会影响角色效果。

示例脚本：

```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //获取玩家角色
        let chara = Player.localPlayer.character
        // 给角色加载一个二次元女性基础姿态
        let stance = chara.loadStance("30274");
        // 默认关闭瞄准偏移
        stance.aimOffsetEnabled = false;
        // 添加一个按键方法：按下键盘“1”，执行以下逻辑
        InputUtil.onKeyDown(Keys.One, () => {
            stance.play();
            // 开启瞄准偏移
            stance.aimOffsetEnabled = true;
        });
    }
}    
```

效果图：

<video controls src="https://cdn.233xyx.com/online/feFEU7T38OHS1694604277559.mp4"></video>

## 二级姿态

### 设置姿态

功能说明：更换二级姿态的资源

示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//加载一个基础姿态资源
let subStance = chara.loadSubStance("94258");
```

【播放】、【停止】等功能的使用方式与基础姿态一致。

### 姿态混合

功能说明：根据加载的二级姿态的资源，使角色只播放该姿态的上半身效果或下半身效果或全身效果。

实际应用：在做射击游戏时，往往需要角色上半身保持持枪的动作姿态，下半身会根据基础姿态进行融合。实现角色既能在跑步的情况下，又能保持持枪的姿态效果。

示例脚本：

```ts
@Component
export default class stanceTest extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // 获取玩家角色
        let chara = Player.localPlayer.character
        //加载一个二级姿态资源（双手持枪）
        let stance = chara.loadSubStance("94258");
        //设置姿态效果为全身姿态
        //stance.blendMode = StanceBlendMode.WholeBody;
        //设置姿态效果为下半身姿态
        //stance.blendMode = StanceBlendMode.BlendLower;
        //设置姿态效果为上半身效果
        stance.blendMode = StanceBlendMode.BlendUpper;
        
        // 添加一个按键方法：按下键盘“1”，执行以下逻辑
        InputUtil.onKeyDown(Keys.One, () => {
            //播放姿态
            stance.play();
        });        
    }
}
```

效果图：

<video controls src="https://cdn.233xyx.com/online/NiIOC2MTsuvW1694604277559.mp4"></video>

### 动画转姿态

功能说明：loadSubStance()方法可以填写姿态资源或动画资源，如果识别资源类型是动画资源时，会让角色自动播放其动画的姿态效果。方便我们更加灵活的控制动作资源效果。

实际应用：我们可以选择想要的动画转为姿态实现效果。比如资源库中有盘腿打坐的动画资源。我们可以利用StanceBlendMode功能只保留下半身的效果，使角色实现盘腿坐的姿态。然后结合其他的动画需求，实现动画融合的效果，比如盘腿喝茶。

示例脚本：

```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

        // 获取玩家
        let chara = Player.localPlayer.character
        //将坐着打招呼的动画资源转为二级姿态
        let stance = chara.loadSubStance("29753");
        //加载一个挥手的角色动画
        let animation = chara.loadAnimation("29775");

        // 添加一个按键方法：按下键盘“1”，执行以下逻辑
        InputUtil.onKeyDown(Keys.One, () => {
            //设置姿态效果为全身姿态
            stance.blendMode = StanceBlendMode.WholeBody;
            //播放姿态
            stance.play();
        });

        // 添加一个按键方法：按下键盘“2”，执行以下逻辑
        InputUtil.onKeyDown(Keys.Two, () => {
            //停止姿态
            stance.stop();
            //设置姿态效果为下半身姿态
            stance.blendMode = StanceBlendMode.BlendLower;
            //播放姿态
            stance.play();
        });

        // 添加一个按键方法：按下键盘“3”，执行以下逻辑
        InputUtil.onKeyDown(Keys.Three, () => {
            //设置动画的播放部位为上半身
            animation.slot = AnimSlot.Upper;
            //播放动画
            animation.play();            
        });
    }
}
```

效果图：

<video controls src="https://cdn.233xyx.com/online/x1JeRlYkuikU1694604277559.mp4"></video>
