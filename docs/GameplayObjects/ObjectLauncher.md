**阅读本文预计 15 分钟**

在项目中我们经常需要让对象进行各种轨迹的运动（抛物线或直线），有时还需要去获取碰撞结果。在诸如炮弹，高尔夫球以及追踪导弹等应用场景中，拟真的运动轨迹和撞击效果可以增强游戏的表现力。

# 对象发射器

对象发射器是一个可以发射`GameObject`，使其以抛物线轨迹运动，并返回途中碰撞结果的功能对象。它按照自身属性制造投掷物并将发射对象挂载在上面，类似大炮。通过设置对象发射器的属性，你可以实现：

- 修改初始速度、加速度、最大速度和重力实现不同的运动轨迹如：平抛、斜抛、匀速和加速。
- 设置胶囊体半径、胶囊体半长来构造碰撞体积，修改碰撞响应在反弹/穿透效果之间进行切换。
- 设置生命周期控制投掷物的销毁时机，修改速度保留率模拟真实碰撞形变造成的速度损失。
- 发射时传入追踪目标和追踪加速度，以创建有趣的追踪效果例如：跟踪导弹。

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_%E5%A4%A7%E7%82%AE%E5%8F%91%E5%B0%84.mp4"></video>


# 创建一个对象发射器

## 编辑态创建

对象发射器是一个功能对象，在资源库中的资源ID是：“ObjectLauncher”。要创建一个对象发射器，请执行以下操作：

![img](https://arkimg.ark.online/1699844575734-31.webp)

1. 在编辑器左侧找到资源库窗口，如果资源库窗口不存在，则点击菜单栏中视图选项，勾选显示资源库。

![img](https://arkimg.ark.online/1699844575735-32.webp)

1. 点击工具包图标，进入游戏对象资源库。
2. 点击游戏功能对象栏目查看编辑器提供的所有功能对象。
3. 找到资源：对象发射器。它由一个飞行投掷物作为图标。将鼠标悬停在对象上查看对象信息。

![img](https://arkimg.ark.online/1699844575735-33.webp)

1. 鼠标左键点击选中对象发射器，按住拖入到主视口，此时场景出现一个对应的对象。如果直接拖入对象管理器，那么发射器会生成在场景原点（0， 0， 0）。
2. 在编辑器右侧找到对象管理器窗口，对象栏下会出现发射器对象，选中对象在属性面板修改发射器的属性。如果对象管理器窗口或者属性面板窗口不存在，则点击菜单栏中视图选项，勾选显示。

![img](https://arkimg.ark.online/1699844575735-34.webp)

## 动态创建

在脚本中通过对象发射器的资源ID，你可以调用接口动态创建一个对象发射器。请执行以下操作：

1. 在编辑器下方找到工程目录窗口，如果窗口不存在，则点击菜单栏中视图选项，勾选显示。

![img](https://arkimg.ark.online/1699844575735-35.webp)

1. 点击新建脚本按钮，脚本目录下会出现一个新的脚本文件：NewScript。

![img](https://arkimg.ark.online/1699844575735-36.webp)

1. 双击打开脚本文件，将下列示例代码粘贴至脚本中的`onStart`方法：创建一个对象发射器，并在日志窗口打印它的对象ID。

```TypeScript
let objectLauncher = GameObject.spawn("ObjectLauncher") as ObjectLauncher;
console.log("ID " + objectLauncher.gameObjectId);
```

1. 鼠标左键点击选中脚本文件，按住拖入场景或者对象管理器。

![img](https://arkimg.ark.online/1699844575735-37.webp)

1. 点击运行按钮（F5）后可查看日志窗口打印结果。窗口不存在，则点击菜单栏中视图选项，勾选显示。
   1. ![img](https://arkimg.ark.online/1699844575735-38.webp)

# 对象发射器的工作流

通过发射命令的发送和传递过程，发射器以自身属性创建投掷物。投掷物携带着发射器的属性在客户端-服务器模型的三个方面触发对应事件并执行委托方法：

- 发送客户端，即发送发射消息的用户的本地设备。
- 接收客户端，即其他用户的本地设备。
- 服务端，它是从发送客户端接收发射消息并处理向接收客户端传递消息的中转站，也可作为消息的发送方。

![img](https://arkimg.ark.online/1699844575736-39.webp)

# 投掷物实例

发射器是一个制造投掷物的工厂，每次发射都会将发射对象挂载到新创建的投掷物实例下并发射出去。投掷物实例是一个GameObject，所以具备游戏对象的所有能力例如修改自身的Transform或者destroy。需要注意的是投掷物的初始属性在创建的时候由发射器提供属性值，修改发射器的属性并不会影响已被创建出来的投掷物。

投掷物实例还能获取创建自己的玩家。当玩家在客户端调用发射器launch方法时，本次发射创建的投掷物会用该客户端玩家赋值`owner`属性。当发射器在服务端调用发射时，`owner`属性为空。

`velocity`属性记录投掷物运动过程中的当前速度，表示投掷物的当前方向和速度矢量(cm/s)。你可以根据运动速度的不同，给发射对象设置不同的特效或者旋转速度。或者你也可以去设置投掷物的当前速度以修改它的飞行轨迹，例如将`velocity`属性设置为0，在无重力和加速度的情况下一帧投掷物会停止运动。

# 设置飞行速度

`initialSpeed`属性给投掷物设置初始运动速度。对象会应用该速度在场景内开始匀速直线运动（无重力）。初始速度是不为负的标量表示投掷物在场景内每秒移动距离（cm/s)。该属性默认值是5000，取值范围为[1, 100000]。修改初始速度不会改变运动方向，只会改变在发射方向上移动的速度。初始速度越大，投掷物飞的越高越远。

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_InitialSpeed.mp4"></video>

在飞行过程中，投掷物会持续受到`acceleration`属性影响进行匀加速（正值）或者匀减速运动（负值）。加速度的默认值是0，取值范围为[-10000, 10000]。修改该属性可以实现推进器加速或者空气阻力减速的模拟效果。

投掷物飞行时会受到最大速度`maxSpeed`属性的限制，它的运动速度永远小于等于给定的最大速度值。该属性默认值是0，表示没有最大速度限制，取值范围为[0, 100000]。这在投掷物追踪目标或受重力影响的情况下很有用——你可以确保速度永远不会超过特定的速度，无论它下降/加速了多长时间。

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_Acceleration.mp4"></video>

# 开启重力影响

`gravityScale`属性代表投掷物受世界重力影响的倍率，可以用来改变投掷物在飞行中的轨迹。当属性值为0，意味着投掷物不受重力影响，只会沿直线飞行，直到击中物体或者生命结束。属性默认值为1，取值范围为[-10, 10]，将其设置为大于零意味着投掷物将像正常投掷的物体一样进行抛体运动。将其设置为小于零意味着投掷物轨迹将像气球漂浮一样向上弯曲。

当投掷物受重力影响时，设置`isRotationFollowsVelocity`属性为true（默认），可以使投掷物（及其挂载对象）的世界正方向始终跟随运动方向：箭矢的箭头会指向速度方向并在飞行中旋转自身。当该属性为false时，投掷物仅按照轨迹计算结果更新自己的坐标位置，而自身旋转始终保持不变。

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_isRotationFollow_Gravity.mp4"></video>

# 碰撞检测

用户可以自定义投掷物的碰撞体积（通常需要包裹住发射对象），并由发射器在主视口动态绘制线框方便用户进行可视化配置。投掷物运动过程中，使用碰撞体进行检测并返回对应的击中结果。碰撞体的基础形状是一个半长为50，半径为100的水平胶囊体，半长和半径分别由属性`capsuleHalfLength`和`capsuleRadius`控制。由于胶囊体的限制，半径必须小于等于半长，且当半径等于半长时碰撞体变为球体。

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_Length_Radius.mp4"></video>

`isShouldBounce`属性决定投掷物击中表面后的碰撞响应结果：反弹/穿透。当`isShouldBounce = true`时，投掷物撞击表面后会向新的方向反弹，可以用来模拟手榴弹、反弹球、反弹特效等东西。当`isShouldBounce = false`时投掷物撞击表面后会维持之前的运动方向，可以用来模拟穿透子弹这类东西。

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_isShouldBounce_1.mp4"></video>

isShouldBounce = true

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_isShouldBounce_2.mp4"></video>

isShouldBounce = false

 投掷物碰撞后由于形变和摩擦力损失的能量（速度），可以通过`collisionVelocityRetention`属性进行控制。该属性碰撞后投掷物保持撞击前速度的比例，属性默认值为0.6，取值范围为[0, 1]。当属性值为1时，可视作完全弹性碰撞，速度没有损失。当属性值为0时，投掷物碰撞后立即停止运动并中止生命。需要注意的是该属性生效依赖于`isShouldBounce = true`。

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_retention_1.mp4"></video>

collisionVelocityRetention = 0.5

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_retention_2.mp4"></video>

collisionVelocityRetention = 0

投掷物击中表面时，它会触发击中委托`onProjectileHit`并执行绑定函数，该委托会提供各种相关的击中信息：击中对象，发射玩家以及击中地点距离法线等。更具体一些来说它会接受到三个对象引用：投掷物`ProjectileInst`、击中对象`GameObject`以及击中结果`HitResult`。其中`ProjectileInst`中可以访问投掷物对象的发射人和速度。而`HitResult`可以用户确定碰撞位置和角度等信息。通常的开发模式会在这个委托内对击中对象进行判定投掷物是否击中玩家，并执行对应的游戏业务逻辑如掉血，跳字和加分等。

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_onhit.mp4"></video>

# 运动周期

发射器自己的`lifeSpan`属性是用来控制它生产的投掷物可以运动的最大秒数。一旦时间结束，投掷物会解除身上挂载的对象并自行销毁。当`lifeSpan`= 0时意味着投掷物运动时间将不受限制，它将永远存在于场景中。属性默认值为10，取值范围为[0, 1000]。

当投掷物达到其生命终点时，它会触发一个生命终结委托`onProjectileLifeEnd`并执行绑定函数。该委托在投掷物销毁之前触发，因此在绑定函数中传出的`ProjectileInst`引用仍然有效。投掷物速度为0时（受`acceleration < 0`或者`collisionVelocityRetention = 0`影响）也会终止生命，触发该委托。通常的开发模式会在这个委托内对投掷物挂载的对象进行销毁或者回收处理。

```TypeScript
myLauncher.onProjectileLifeEnd.add((projectile) => {
    this.ammoPool.recycle(projectile.getChildByName("Ammo"));
});
```

# 发射 & 追踪发射

当设置好发射器的属性后，调用`spawnProjectileInstanceLaunch`方法按照当前参数生成投掷物实例并发射。接口要求传入1个必填参数：发射对象的`gameObjectId`，发射对象会自动挂载到生成的投掷物上。其次要求传入三个选填参数：发射位置、发射方向和客户端广播标识。如果不传入位置与方向，那么发射对象将会在原地面向正前方发射。该方法会返回生成的投掷物实例对象方便用户在别处进行操作。

```TypeScript
this.launcher.spawnProjectileInstanceLaunch(this.ball.gameObjectId, this.ball.worldTransform.position, new Vector(1, 0, 1));
```

调用`spawnProjectileInstanceLaunchToTarget`方法，不仅可以发射投掷物，同时投掷物还会附带一个目标追踪效果。除了上述四个参数外，该方法额外要求传入两个追踪参数：追踪目标和追踪加速度。在飞行过程中，投掷物持续受到目标方向施加的追踪加速度影响（受`maxSpeed`属性限制）朝目标飞去。追踪发射可以应用于跟踪导弹或者曲线轨迹飞行的棒球这类东西。

```TypeScript
myLauncher.spawnProjectileInstanceLaunchToTarget(ball.gameObjectId, target, 2000, ball.worldTransform.position, new Vector(1, 0, 1));
```

调用发射/追踪发射方法后，会触发一个生命开始委托`onProjectileLifeStart`并执行绑定函数。该委托在投掷物创建之后触发，并在绑定函数中传出新创建投掷物的引用。在委托的绑定函数中，可以对发射对象进行预处理例如修改相对位置以兼容不同的锚点位置，或者向投掷物挂载更多的发射对象。

```TypeScript
myLauncher.onProjectileLifeStart.add((projectile) => {

    // 调整发射对象的挂载位置，使碰撞体包裹住整个对象
    let grenade =  projectile.getChildByName("Grenade");
    grenade.localTransform.position = new Vector(0, 0, 30);

    // 生成一个特效对象并挂载
    let eff = GameObject.spawn("14318") as Effect;
    eff.parent = projectile;
    eff.localTransform.position = Vector.zero;
    eff.loop = true;
    eff.play();
    
});
```

如果投掷物设置了追踪目标，但是在追踪过程中目标由于某种原因消失时（通常是因为对象删除或者玩家退出），会触发一个追踪失败委托`onProjectileHomingFail`并执行绑定函数。绑定函数中传出投掷物的引用，用户可以对投掷物（及其挂载对象）进行回收或者删除处理。如果目标丢失后不对投掷物进行处理，那么投掷物将按照目标丢失前的速度和方向继续运动。
<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_homing.mp4"></video>

# 预测运动轨迹

调用发射器的`predictedTrajectory`方法可以返回投掷物的运动轨迹点。该方法在传入发射位置和方向后，还需要设置路径点密度和预测的时间。路径点密度表示在每秒返回的路径点个数，值越大路径点越密集，性能消耗越大。预测时长决定预测轨迹的总长度，时间越长预测的轨迹越长（中途没有碰撞）。需要注意的是预测轨迹会在首次检测到碰撞后停止预测，并不会预测碰撞后的轨迹。所以如果返回的数组长度为1，可能投掷物在起始位置即产生了碰撞。通过遍历返回的路径点数组，你可以在每个点坐标上创建特效或者模型来绘制出想要的轨迹线样式。

<video controls src="https://arkimg.ark.online/%E5%AF%B9%E8%B1%A1%E5%8F%91%E5%B0%84%E5%99%A8_predict.mp4"></video>

# 投掷物移动类

在大部分游戏场景中，同类的飞行道具表现相同，业务逻辑（碰撞处理）相同，且无需控制已发射的投掷物。你通过设置对象发射器的属性，然后在场景中批量制造相同表现的投掷物发射例如子弹，导弹等。但是在特殊场景中例如投篮，根据力度大小每次发射对象可能会有不同的动态表现，击中篮筐/地板也需要执行不同的游戏逻辑。游戏暂停等功能也需要在投掷物飞行过程中控制它暂停/继续运动来实现，此时对象发射器就显得不够灵活了。因此针对灵活控制投掷物的需求提供ProjectileMovement，它可以给每一个独立的GameObject提供投掷能力。

![img](https://arkimg.ark.online/1699844575736-40.webp)

创建投掷物移动对象要求传入一个GameObject，构造完成后，通过类成员接口，可以使对象以不同的表现发射。调用`getRelatedGameObject`方法可以获取投掷物移动对象的关联对象，而调用`setRelatedGameObject`方法可以切换它的关联对象。

投掷物另一个可选参数可以传入投掷物属性的数据对象`ProjectileMovementConfig`来对投掷移动对象的属性进行初始化。`ProjectileMovementConfig`中的属性与对象发射器基本相同，包括对象的速度、运动周期、重力、追踪目标和追踪加速度等等。这些属性共同决定投掷移动对象的移动轨迹。投掷移动对象也支持预测运动轨迹。

投掷移动对象同样可以获取/设置`velocity`属性，功能与发射器保持一致。由于没有创建新的`GameObject`，所以投掷移动对象的owner属性不能自动赋值，只能通过用户手动设置它的持有人，并用作后续碰撞回调里击中玩家的判断。投掷物具备的对应的击中委托、生命结束委托以及追踪失败委托，你可以绑定对应的事件方法。调用destroy方法可以根据传入参数的不同，来决定销毁投掷物及其关联对象，亦或是仅销毁投掷物。

```TypeScript
protected async onStart(): Promise<void> {

    // 下列逻辑在服务端执行
    if(SystemUtil.isServer()) {

        // 创建一个模型数组balls和标识curBall。
        let balls = new Array<Model>();
        let curBall = 0;

        // 在前方异步生成5个球，放入数组balls中。
        for (let i = 0; i < 5; i++) {
            let ball = await GameObject.asyncSpawn("84121") as Model;
            ball.worldTransform.position = new Vector(200, i * 100, 25);
            ball.name = "ball" + i;
            ball.setCollision(CollisionStatus.QueryCollisionOnly);
            balls.push(ball);
        }

        // 创建投掷物。
        let projectile = new ProjectileMovement(balls[curBall], {initialSpeed: 1000});

        // 给击中委托绑定一个函数，当击中对象是目标时，播放一个击中特效，0.5s后删除目标。
        projectile.onProjectileHit.add((hitGameObject, HitResult) => {
            EffectService.playAtPosition("99599", HitResult.impactPoint, {scale: new Vector(5, 5, 5)});
        });

        // 添加客户端发送的”LAUNCH“事件监听器，将球右前方发射。
        Event.addClientListener("LAUNCH", async (player: Player) => {
            projectile.launch(new Vector(1, 1, 1));   
        });

        // 添加客户端发送的”DESTROY“事件监听器，从数组里面删除球对象，并切换投掷物关联的对象。
        Event.addClientListener("DESTROY", async (player: Player) => {
            console.error("DESTROY");
            let deleteBall = projectile.getRelatedGameObject() as Model;
            let deleteIndex = balls.indexOf(deleteBall);  
            balls.splice(deleteIndex, 1);
            if(balls.length > 0) {
                curBall = (deleteIndex) % balls.length; 
                projectile.setRelatedGameObject(balls[curBall]);
                deleteBall.destroy();
            } else {
                projectile.destroy(true);
            }
        });
    }

    // 下列逻辑在客户端执行
    if(SystemUtil.isClient()) {
        // 添加一个按键方法：按下按键”1“，向服务端派送一个”LAUNCH“事件，发射球。
        InputUtil.onKeyDown(Keys.One, () => {
            Event.dispatchToServer("LAUNCH");
        });

        // 添加一个按键方法：按下按键”2“，向服务端派送一个”DESTROY“事件，切换至下一个球并删除上一个。
        InputUtil.onKeyDown(Keys.Two, () => {
            Event.dispatchToServer("DESTROY");
        });
    }
}
```

投掷物移动对象可以在发射过程中控制自己的运动状态。它在运动过程中为"Launched"状态，可以通过`status`属性获得。通过调用`pause`方法暂停投掷物移动对象的运动，你可以实现暂停游戏，或者时空停止等功能。此时投掷物的状态切换为"Ready"，在"Ready"状态调用发射/追踪发射方法会刷新内部的属性重新发射，如果希望继续之前的运动轨迹可以调用`resume`方法。

<video controls src="https://arkimg.ark.online/%E6%8A%95%E6%8E%B7%E7%89%A9%E7%B1%BB_Pause.mp4"></video>