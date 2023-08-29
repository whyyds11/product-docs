# 摄像机

**阅读本文大概需要 20 分钟。**

本文概述了如何通过修改摄像机的各种属性，实现各种各样的镜头效果。

### 什么是摄像机？

**摄像机**就像我们的眼睛， 决定了玩家在 3D 游戏世界中看到什么样的画面；游戏进行时，摄像机默认和玩家角色绑定在一起。

## 摄像机属性说明

在编辑器右上角【世界】中，找到【摄像机】，点击后在右下属性面板中修改摄像机的属性

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn4ujiEwJWC0u4EKxa2yKuie.png)

### 基础属性

* **距离调整：**
  * 摄像机与摄像机插槽之间存在一定距离，这个距离又称为弹簧臂长度，改变摄像机之间的距离，就是改变弹簧臂的长度。
  * 制作第一人称游戏时，请将此属性大小调整为0
  * 弹簧臂长度（即距离调整）示意图如下：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnOUNH5RuhI6Fj9nbjzrIwHc.png)



* **摄像机位置延迟**
  * 摄像机延迟是对摄像机跟随人物的运动、视角的旋转进行延迟、滞后，使得运镜更顺滑、更有代入感。开启摄像机位置延迟后，在人物位移时，摄像机跟随人物的运动会有延迟效果
* **摄像机位置延迟速度**
  * 控制人物在位移时，摄像机抵达目标位置的速度。低数值较慢(延迟高)，高数值较快(延迟低)，零为即时(无延迟)。

| **位置延迟速度=8**       | ![](https://cdn.233xyx.com/1684475954511_620.gif) |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **位置延迟速度=2**       | ![](https://cdn.233xyx.com/1684475955080_298.gif) |
| **位置延迟速度=0 或关闭** | ![](https://cdn.233xyx.com/1684475954511_919.gif) |

* **摄像机旋转延迟**
  * 开启摄像机旋转延迟后，在手指/鼠标控制摄像机滑动区进行视角旋转时，摄像机旋转会有延迟效果
* **摄像机旋转延迟速度**
  * 控制视角在旋转时，摄像机抵达目标位置的速度。低数值较慢(延迟高)，高数值较快(延迟低)，零为即时(无延迟)。

| **旋转延迟速度=8**        | ![](https://cdn.233xyx.com/1684475954189_668.gif) |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **旋转延迟速度=2**        | ![](https://cdn.233xyx.com/1684475954897_433.gif) |
| **旋转延迟速度=0或关闭** | ![](https://cdn.233xyx.com/1684475954321_282.gif) |

* **视场**
  * 视场（FOV），也就是透视模式下的水平视野角度，FOV越大，可见的视野角度越大。

| **视场为60时** | ![](https://cdn.233xyx.com/1684475954533_734.png) |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **视场为90时**  | ![](https://cdn.233xyx.com/1684475954609_668.png) |
| **视场为120时** | ![](https://cdn.233xyx.com/1684475954510_291.png) |

如果需要使用正交视角（例如制作拥有3D效果的2D休闲游戏），推荐使用 **视场=35（或更小）** ，并同时调整**摄像机距离、位置、角度**等参数来模拟正交视角

![](https://cdn.233xyx.com/1684475955081_332.png)

* **是否有摄像机碰撞**
  * 摄像机与其他物体存在碰撞效果，碰撞后会将摄像机位置前移，防止穿模或者玩家角色被遮挡。

关闭摄像机碰撞
![](https://cdn.233xyx.com/1684475955081_665.gif)

开启摄像机碰撞
![](https://cdn.233xyx.com/1684475954182_709.gif)

* **物体透明(仅在摄像机碰撞关闭时生效）**
  * 开启后当摄像机与角色之间有其他障碍物体时，会让障碍物体变透明。
  * 关闭后则不会让障碍物体变透明。
* **物体透明度**
  * 开启物体透明时，当摄像机与角色之间障碍物体的透明度，越接近0越透明，越接近1越不透明。

提示：目前物体透明功能与编辑器自动合批功能有冲突，正在优化中，部分情况下效果不理想，现阶段请谨慎使用。

### 摄像机变换（API：cameraRelativeTransform）和弹簧臂变换（API：cameraSystemRelativeTransform）

* **摄像机变换-相对位置**
  
  * 即摄像机相对默认位置的偏移，修改此属性时，不会改变镜头旋转时围绕的中心位置
* **弹簧臂变换-相对位置**
  
  * 即弹簧臂挂点相对角色的位置，摄像机通过弹簧臂挂点连接到角色，旋转视角时，镜头围绕弹簧臂挂点旋转
  * 示例：
    摄像机变换-相对位置（0,100,0）；弹簧臂变换-相对位置（0,0,0）
    ![](https://cdn.233xyx.com/1684475955151_703.gif)
    摄像机变换-相对位置（0,0,0）；弹簧臂变换-相对位置（0,100,0）
    ![](https://cdn.233xyx.com/1684475955081_503.gif)
* **摄像机变换-相对旋转**
  
  * 即摄像机相对默认位置的旋转
* **弹簧臂变换-相对旋转**
  
  * 设定弹簧臂角度，即摄像机相对弹簧臂挂点角度，在游戏中拖动屏幕转动视角就相当于动态调整此属性，因此该属性仅在摄像机朝向模式为固定朝向和跟随朝向时生效，用于制作俯视角游戏；摄像机变换-相对旋转相比于此属性不同的是仅改变摄像机角度，不改变弹簧臂角度
  * 示例：
    弹簧臂变换-相对旋转（0,-30,0）；摄像机变换-相对旋转（0,0,0）
    ![](https://cdn.233xyx.com/1684475954179_624.png)
    弹簧臂变换-相对旋转（0,0,0）摄像机变换-相对旋转（0,-30,0）
    ![](https://cdn.233xyx.com/1684475954194_880.png)

### 摄像机模式

* **摄像机模式**
  * 为了开发者能快捷选择需要的视角，编辑器提供了若干套预置的【摄像机模式】，开发者可以在属性面板或脚本中的switchCameraMode方法快捷选择想要使用的摄像机模式，而不需要手动调整众多参数；
  * 使用某个摄像机模式后，各相关的摄像机属性会按照这一预置模式的预设值自动刷新
    由于摄像机的各项参数较为复杂，强烈推荐新入门开发者使用这些预置摄像机模式；或者在这些预置摄像机模式的基础上微调

**摄像机模式-枚举（CameraMode）**

| **枚举名称** | **英文名称**   | **枚举值** | **说明**               |
| -------------------- | ---------------------- | ------------------ | ------------------------------ |
| 第一人称           | FirstPerson          | 0                | 第一人称视角的摄像机效果     |
| 第三人称           | ThirdPerson          | 1                | 第三人称视角的摄像机效果     |
| 俯视角             | TopDownAngle         | 2                | 俯视角45度的摄像机效果       |
| 默认               | Default              | 3                | 类似樱花校园模拟器的默认效果 |
| TPS过肩视角        | TPSOverShoulderAngle | 4                | 第三人称过肩视角的摄像机效果 |
| FPS射击视角        | FPSShootingAngle     | 5                | 第一人称射击视角的摄像机效果 |

* 推荐在射击类游戏中使用TPS过肩视角和FPS射击视角
  * FPS射击视角下，摄像机只能能看见玩家角色手持的武器，而看不到玩家角色
  * TPS过肩视角下，摄像机能看见玩家的上半身，且玩家在屏幕的左下区域，不会遮挡正前方视野

<video controls src="https://cdn.233xyx.com/1684475955075_215.mp4"></video>

* **开启真实效果**
  * 如果开启真实效果，摄像机会跟随角色模型头部移动，模拟角色移动时跟随头部上下抖动的画面，用于制作第一视角游戏；如果关闭真实效果，摄像机会跟随角色胶囊体移动，不会跟着头部上下抖动
  * 示例：
    关闭真实效果
    ![](https://cdn.233xyx.com/1684475954229_814.gif)
    开启真实效果
    ![](https://cdn.233xyx.com/1684475954700_076.gif)

### 摄像机位置

* **摄像机位置模式**
  * 固定模式
    * 摄像机固定在某一位置，不可移动。
  * 跟随模式
    * 摄像机跟随某个物体（默认是玩家角色）一直移动。
* **固定摄像机Z轴方向**
  * 固定摄像机在Z轴上的坐标，比如角色在跳跃时，摄像机不会跟随角色改变Z轴位置，用于制作俯视角游戏。
  * 示例：
    关闭固定摄像机Z轴方向
    ![](https://cdn.233xyx.com/1684475954245_027.gif)
    开启固定摄像机Z轴方向
    ![](https://cdn.233xyx.com/1684475954186_776.gif)

### 摄像机朝向

* **摄像机朝向模式**
  * 固定朝向：摄像机固定朝向某一个方向。
  * 跟随朝向：摄像机跟随目标面朝方向。
  * 控制朝向：摄像机的朝向受到输入控制。
* **向上限制角度**
  * 摄像机向上旋转时的最大角度，防止旋转至角色模型下方，导致穿模效果。
  * 范围：0~90°  数值越大，可旋转的角度越大。
* **向下限制角度**
  * 摄像机向下旋转时的最大角度，防止旋转至角色模型上方，导致穿模效果。
  * 范围：0~90°  数值越大，可旋转的角度越大。
  * 限制角度示意图：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnKh5HB410OoxfCelWMrDMth.png)




## 如何通过API动态修改摄像机效果？


### 示例1：调整视场和摄像机位置以实现狙击枪瞄准效果

* 现在我们来制作一个FPS射击游戏中狙击枪的瞄准效果，在非瞄准状态下使用预置的FPS射击视角，摄像机能看到手持的狙击枪；进入瞄准状态后，摄像机显示瞄准镜中看到的画面，且不再能看到手持的狙击枪
* 因此，我们需要处理一下逻辑：
  * 将视场调小，来模拟瞄准镜中的画面
  * 将摄像机位置向前移动，使画面中不再出现狙击枪
  * 将射击摇杆的灵敏度调低，防止瞄准状态时调整瞄准方向过于灵敏
* 脚本示例：

```TypeScript
//按下射击摇杆进入瞄准状态
fireButton.onJoyStickDown.add(() => {
    //将视场调小，来模拟瞄准镜中的画面
    Gameplay.getCurrentPlayer().character.cameraSystem.cameraFOV=70
    //将将摄像机位置向前移动，使画面中不再出现狙击枪
    let cameradata=Gameplay.getCurrentPlayer().character.cameraSystem.cameraRelativeTransform
    cameradata.location.x+=100
    Gameplay.getCurrentPlayer().character.cameraSystem.cameraRelativeTransform =cameradata
    //将射击摇杆的灵敏度调低，防止瞄准状态时调整瞄准方向过于灵敏
    fireButton.inputScale=(new Type.Vector2(0.04, 0.03))
});

//松开射击摇杆发射子弹，并恢复到原有的TPS射击视角
fireButton.onJoyStickUp.add(() => {
    Events.dispatchLocal("FIRE_CLICK_Gun");
    //恢复预置的TPS射击视角，switchCameraMode会重置摄像机位置和视场为TPS射击视角的默认值
    Gameplay.getCurrentPlayer().character.cameraSystem.switchCameraMode(5,true)
    //恢复原有的射击摇杆灵敏度
    fireButton.inputScale=(new Type.Vector2(0.08, 0.06))
});
```

* 实现效果：<video controls src="https://cdn.233xyx.com/1684475955078_130.mp4"></video>

### 示例2：调整摄像机距离实现双指放缩功能

* 现在我们来制作一个双指放缩效果，双指距离变大时，摄像机距离（也就是弹簧臂长度）变小，摄像机向前移动；双指距离变小时，摄像机距离变大，摄像机向后移动
* 脚本示例：

```TypeScript
@Core.Class
export default class NewScript extends Core.Script {
    Character: Gameplay.Character;
    touch: Gameplay.TouchInput;
    touchNum: number;
    oldPointSize: number;
    cameradata: Transform
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.setFinger()
        
    }
    
    // 设置手指事件
    private setFinger() {

        // 找到UI对象DefaultUI，及其内部的UI控件
        let UI1 = UI.UIObject.findGameObjectByTag("DefaultUI")[0] as UI.UIObject;
        const touchpad = UI1.uiWidgetBase.findChildByPath('Canvas/TouchPadDesigner') as UI.TouchPad
        const canvas = UI1.uiWidgetBase.findChildByPath('Canvas') as UI.Canvas

        
        // 双指缩放镜头视角
        this.touch = new Gameplay.TouchInput();
        // 将当前玩家的控制器赋值给触摸器
        this.touch.setPlayerController();
        // 使用touchNum记录当前屏幕的触摸点数量
        this.touchNum=0
        
        //开始触摸（包括第一个和第二个触摸点）
        this.touch.onTouchBegin.add(() => {

            this.touchNum++;
            if (this.touchNum < 2)return
            //当出现第二个触摸点时，移除UI对象中的摄像机滑动区
            touchpad.removeObject()
            //使用oldPointSize记录两个触摸点的初始距离
            let touchPoint = this.touch.getTouchVectorArray();
            this.oldPointSize = touchPoint[0].subtract(touchPoint[1]).length;
        });

        //触摸点移动（包括第一个和第二个触摸点）
        this.touch.onTouchMove.add(() => {

            if (this.touchNum < 2) return
            //计算两个触摸点移动过程中的最新距离
            let touchPoint = this.touch.getTouchVectorArray();
            let newPointSize = touchPoint[0].subtract(touchPoint[1]).length;
            //计算初始距离和最新距离之差
            let char = Gameplay.getCurrentPlayer().character;
            let distance = newPointSize - this.oldPointSize;
            //使用length记录当前弹簧臂长度，也就是摄像机距离，加上或者减去两个触摸点初始距离和最新距离之差
            let length = char.cameraSystem.targetArmLength;
            length += (distance > 0 ? -1 : distance < 0 ? 1 : 0) * 1 * Math.abs(distance);
            length = Math.max(length, 60);
            length = Math.min(length, 500);
            //应用length记录的弹簧臂长度，并且用oldPointSize再次记录两个触摸点的初始距离
            char.cameraSystem.targetArmLength = length;
            this.oldPointSize = newPointSize;
        });

        //结束触摸点离开（包括第一个和第二个触摸点）
        this.touch.onTouchEnd.add(() => {
            this.touchNum--;
            console.log(this.touchNum);
            //当最后一个触摸点离开屏幕时，重新挂载UI对象中的摄像机滑动区
            if (this.touchNum < 1) {
                canvas.addChild(touchpad)
            }
        })}
}
```

* 实现效果及项目文件（请发布后在手机上测试）：<video controls src="https://cdn.233xyx.com/1684475954184_475.mp4"></video>

[点击下载](https://cdn.233xyx.com/1684475955108_755.7z)

### 示例3：动态切换摄像机的位置模式和固定模式

* 目前用法较繁琐，预计在026/027版本优化
* 脚本示例：

```TypeScript
import DefaultUI_generate from "./ui-generate/DefaultUI_generate";

@UI.UICallOnly('')
export default class UIDefault extends DefaultUI_generate {
    Character: Gameplay.Character;

    oldCameraSystemRelativeTransform: Type.Transform;
    oldCameraSystemWorldTransform: Type.Transform;
    oldCameraRelativeTransform: Type.Transform;
    oldCameraWorldTransform: Type.Transform;

    /** 仅在游戏时间对非模板实例调用一次 */
    protected onStart() { 
        //设置能否每帧触发onUpdate
        this.canUpdate = false;

        //找到对应的跳跃按钮
        const JumpBtn = this.uiWidgetBase.findChildByPath('Canvas/Button_Jump') as UI.StaleButton
        const touchpad = this.uiWidgetBase.findChildByPath('Canvas/TouchPadDesigner') as UI.TouchPad

        //点击跳跃按钮,异步获取人物后执行跳跃
        JumpBtn.onPressed.add(()=>{
            if (this.Character) {
                this.Character.jump();
            } else {
                Gameplay.asyncGetCurrentPlayer().then((player) => {
                    this.Character = player.character;
                    //角色执行跳跃功能
                    this.Character.jump();
                });
            }
        })  

        //LocationFixed
        this.mStaleButton.onClicked.add(() => {
            Gameplay.asyncGetCurrentPlayer().then((player) => {
                this.Character = player.character;
                this.oldCameraSystemRelativeTransform=this.Character.cameraSystem.cameraSystemRelativeTransform;
                this.oldCameraSystemWorldTransform=this.Character.cameraSystem.cameraSystemWorldTransform;
                this.Character.cameraSystem.cameraLocationMode=0;
                this.Character.cameraSystem.cameraSystemWorldTransform=this.oldCameraSystemWorldTransform;
            })
        })
        //LocationFollow
        this.mStaleButton_1.onClicked.add(() => {
            Gameplay.asyncGetCurrentPlayer().then((player) => {
                this.Character = player.character;
                this.Character.cameraSystem.cameraLocationMode=1;
                this.Character.cameraSystem.cameraSystemRelativeTransform=this.oldCameraSystemRelativeTransform;
        });})
        //RotationFixed
        this.mStaleButton_2.onClicked.add(() => {
            Gameplay.asyncGetCurrentPlayer().then((player) => {
                this.Character = player.character;
                this.oldCameraWorldTransform=this.Character.cameraSystem.cameraWorldTransform;
                this.oldCameraWorldTransform.location=this.Character.cameraSystem.cameraSystemWorldTransform.location;
                this.Character.cameraSystem.cameraRotationMode=0;
                this.Character.cameraSystem.setOverrideCameraRotation(this.oldCameraWorldTransform.rotation)
                this.Character.cameraSystem.cameraSystemWorldTransform=this.oldCameraWorldTransform;
        });})
        //RotationFollow
        this.mStaleButton_3.onClicked.add(() => {
            Gameplay.asyncGetCurrentPlayer().then((player) => {
                this.Character = player.character;
                this.oldCameraSystemWorldTransform=this.Character.cameraSystem.cameraSystemWorldTransform;
                this.Character.cameraSystem.cameraRotationMode=1;
                this.Character.cameraSystem.setOverrideCameraRotation(this.oldCameraSystemWorldTransform.rotation)
                this.oldCameraSystemWorldTransform.rotation=this.Character.getForwardVector().toRotation();
                this.Character.cameraSystem.cameraSystemWorldTransform=this.oldCameraSystemWorldTransform;
        });})
        //RotationControl
        this.mStaleButton_4.onClicked.add(() => {
            Gameplay.asyncGetCurrentPlayer().then((player) => {
                this.Character = player.character;
                this.Character.cameraSystem.cameraRotationMode=2
                this.Character.cameraSystem.resetOverrideCameraRotation()
                
        });})
    }
}
```

* 实现效果及项目文件：

<video controls src="https://cdn.233xyx.com/1684475954572_044.mp4"></video>

[点击下载](https://cdn.233xyx.com/1684475954503_229.7z)
