# 禁行区
::: info
**阅读本文预计 10 分钟**

项目中经常存在一些区域对部分角色开放，对其他角色不开放的情况。可以使用【禁行区】给某一个区域添加进出权限管理能力完成上述使用场景。通过【禁行区】我们可以给角色动态设置通行权限，阻挡玩家角色进入或者限制玩家角色的活动范围。
:::
# 禁行区对象
【禁行区】是一种功能对象，在项目中用来控制一片区域对其他对象的通行权限。你可以自定义【禁行区】的属性来控制区域的位置，大小和旋转。在检测到对象接近区域边缘后，【禁行区】会检测该对象是否有通过权限并返回对应的碰撞结果。你可以在【本地资源库】中的【游戏功能对象】栏中找到【禁行区】。

![img](https://arkimg.ark.online/1684047518629-11.webp)

# 创建禁行区

## 通过放置资源创建：

【禁行区】本身作为一个游戏对象可以放置于游戏场景中。你可以从【本地资源库】中的【游戏功能对象】栏将【禁行区】拖入【场景】或者【对象管理器】来创建对象。

1. 在【本地资源库】的【游戏功能对象】栏中找到【禁行区】

![img](https://arkimg.ark.online/1684047518627-1.webp)

2. 将对象拖入到场景中或者【对象管理器】

![img](https://arkimg.ark.online/1684047518627-2.webp)

3. 在右侧【对象管理器】中【对象】栏找到对应的【禁行区】对象并自定义它的属性

![img](https://arkimg.ark.online/1684047518627-3.webp)![img](https://arkimg.ark.online/1684047518627-4.webp)

## 通过脚本创建：

通过脚本你也可以在游戏运行时通过【本地资源库】中的【禁行区】资源ID："Projectile" 动态生成一个【禁行区】对象来使用。在【工程内容】下的脚本目录中新建一个脚本文件，将脚本拖入【对象管理器】中【对象】栏。选中脚本进行编辑，将下列示例代码替换脚本中的`onStart`方法：异步生成一个【禁行区】对象，开启双端同步，位置为（300，0，50），旋转为（0，0，0），缩放倍数为（1，1，1）。打印生成【禁行区】对象的gameObjectId。

```TypeScript
protected async onStart(): Promise<void> {
    if(SystemUtil.isServer()) {
        let wall = await GameObject.asyncSpawn("BlockingVolume", {replicates: true, transform: new Transform(new Vector(300, 0, 50), Rotation.zero, Vector.one)}) as BlockingVolume;
        console.log("wall gameObjectId: " + wall.gameObjectId);
    }
}
```

::: tip
【禁行区】是一个空间的概念，不仅可以阻止外部的角色进入，同时也可以阻止内部的角色出去。
:::
# 自定义禁行区

【禁行区】的transform属性将决定它的位置，朝向，大小。而自身函数能给角色动态设置通行权限。在【对象管理器】中【对象】栏找到对应的【禁行区】对象，选中后我们可以查看它的属性面板，通过属性面板我们可以修改它的部分属性。需要注意的是发射【禁行区】需要调用它提供的函数，编辑器修改属性主要是提前配置好它的轨迹参数，方便在脚本中直接使用。

![img](https://arkimg.ark.online/1684047518627-5.webp)
::: tip
【禁行区】的自定义属性主要就是transform，其他属性对它的功能来说没有太多意义。
:::
## 禁行区位置

【禁行区】的位置由继承自父类`GameObject`的`worldTransform.position`世界位置属性控制，可读可写。你可以在属性面板中修改场景中【禁行区】对象的位置，也可以在代码中动态读写【禁行区】对象的属性来控制它的位置。

![img](https://arkimg.ark.online/1684047518627-6.webp)

```TypeScript
if(SystemUtil.isServer()) {
    let wall = await GameObject.asyncSpawn("BlockingVolume", {replicates: true, transform: new Transform(new Vector(300, 0, 50), Rotation.zero, Vector.one)}) as BlockingVolume;
    wall.worldTransform.position = new Vector(300, 0, 50);
    console.log("wall worldTransform.position: " + wall.worldTransform.position);
}
```

## 禁行区旋转

【禁行区】的旋转由继承自父类`GameObject`的`worldTransform.rotation`世界旋转属性控制，可读可写。你可以在属性面板中修改场景中【禁行区】对象的旋转，也可以在代码中动态读写【禁行区】对象的属性来控制它的位置。

![img](https://arkimg.ark.online/1684047518628-7.webp)

```TypeScript
if(SystemUtil.isServer()) {
    let wall = await GameObject.asyncSpawn("BlockingVolume", {replicates: true, transform: new Transform(new Vector(300, 0, 50), Rotation.zero, Vector.one)}) as BlockingVolume;
    wall.worldTransform.rotation = new Rotation(45, 0, 0);
    console.log("wall worldTransform.rotation: " + wall.worldTransform.rotation);
}
```

## 禁行区大小

【禁行区】的大小可以由继承自父类`GameObject`的`worldTransform.scale`世界缩放属性控制，可读可写。当【禁行区】形状为盒体时，XYZ值分别表示盒体的长宽高。

![img](https://arkimg.ark.online/1684047518628-8.webp)

```TypeScript
// 通过scale属性设置禁行区大小
if(SystemUtil.isServer()) {
    let wall = await GameObject.asyncSpawn("BlockingVolume", {replicates: true, transform: new Transform(new Vector(300, 0, 50), Rotation.zero, Vector.one)}) as BlockingVolume;
    wall.worldTransform.scale = new Vector(2, 2, 2);
    wall.worldTransform.scale = new Vector(300, 0, 50);
    console.log("wall worldTransform.scale: " + wall.worldTransform.scale);
}
```

# 使用禁行区

## 获取禁行区对象

### 【对象管理器】中【对象】栏下的【禁行区】对象：

**使用`asyncFindGameObjectById`接口通过【禁行区】对象的gameObjectId去获取：**

1. 选中【禁行区】对象后右键点击【复制对象ID】获取它的gameObjectId。此处注意区分【禁行区】资源的ID和【禁行区】对象的gameObjectId。

![img](https://arkimg.ark.online/1684047518628-9.webp)

2. 将脚本拖入对象管理器下，用下列代码替换脚本中的`onStart`方法：代码将异步查找ID对应的对象以【禁行区】对象进行接收。

```TypeScript
protected async onStart(): Promise<void> {
    if(SystemUtil.isServer()) {
        let wall = await GameObject.asyncFindGameObjectById("13CB1A8B") as BlockingVolume;
        console.log("wall gameObjectId " + wall.gameObjectId);
    }
}
```

**使用脚本挂载的方式进行获取：**

1. 选中【禁行区】对象，将脚本挂载到【禁行区】对象下方

![img](https://arkimg.ark.online/1684047518629-10.webp)

2. 在脚本的onStart方法中添加下列代码：代码获取脚本挂载的对象并以【禁行区】对象进行接收

```TypeScript
let wall = this.gameObject as BlockingVolume;
```

### 动态生成的【禁行区】对象：

将下列示例代码替换脚本中的`onStart`方法：示例代码在客户端往`asyncSpawn`接口（中传入【禁行区】的资源ID“BlockingVolume”异步生成了一个对应的【禁行区】对象。

```TypeScript
protected async onStart(): Promise<void> {
    if(SystemUtil.isServer()) {
        let wall = await GameObject.asyncSpawn("BlockingVolume", {replicates: true, transform: new Transform(new Vector(300, 0, 50), Rotation.zero, Vector.one)}) as BlockingVolume;
        console.log("wall gameObjectId: " + wall.gameObjectId);
    }
}
```

## 设置单个对象的通行权限

【禁行区】通过`addPassableTarget`和`removePassableTarget`两个接口来设置具体对象的通行权限。当对象获得通过【禁行区】的权限后可以自由通行，未获得权限的对象会受到阻挡（如果对象本身需具备碰撞能力）。将下列示例代码复制到脚本中的`onStart`方法中：首先获取脚本挂载的【禁行区】对象。在客户端获取本地玩家角色后添加两个按键方法：按下“1”键给本地角色添加该【禁行区】的通过权限；按下“2”键给本地角色移除该【禁行区】的通过权限；

```TypeScript
let wall = this.gameObject as BlockingVolume;

        if(SystemUtil.isClient()) {
           
            let myself = Player.localPlayer.character;
            
            InputUtil.onKeyDown(Keys.One, () => {
                wall.addPassableTarget(myself);
            });

            InputUtil.onKeyDown(Keys.Two, () => {
                wall.removePassableTarget(myself);
            });
            
        }
```

<!-- <video src="C:/Users/admin/Downloads/20230510-151129.mp4"></video> -->

## 获取对象是否有通行权限

【禁行区】提供`getTargetPassable`接口去获取当前对象是否有通行权限。将下列示例代码补充到上例中：每次设置完本地角色的通过权限后打印结果。

```TypeScript
let wall = this.gameObject as BlockingVolume;

        if(SystemUtil.isClient()) {
            
            let myself = Player.localPlayer.character;
            
            InputUtil.onKeyDown(Keys.One, () => {
                wall.addPassableTarget(myself);
                console.log("passable: " + wall.getTargetPassable(myself));
            });

            InputUtil.onKeyDown(Keys.Two, () => {
                wall.removePassableTarget(myself);
                console.log("passable: " + wall.getTargetPassable(myself));
            });
            
        }
```

## 对整个禁行区设置通行权限

【禁行区】通过`clear`和`unblockAll`两个接口来设置具体场景内所有对象的通行权限。调用`clear`接口后，所有对象的通过权限都将被移除；调用`unblockAll`接口后，所有对象都将添加该【禁行区】的通过权限；将下列示例代码补充到上例中：添加两个按键方法：按下“3”键给所有角色移除该【禁行区】的通过权限；按下“4”键给所有角色添加该【禁行区】的通过权限；

```TypeScript
let wall = this.gameObject as BlockingVolume;

        if(SystemUtil.isClient()) {
            
            let myself = Player.localPlayer.character;
            
            InputUtil.onKeyDown(Keys.One, () => {
                wall.addPassableTarget(myself);
                console.log("passable: " + wall.getTargetPassable(myself));
            });

            InputUtil.onKeyDown(Keys.Two, () => {
                wall.removePassableTarget(myself);
                console.log("passable: " + wall.getTargetPassable(myself));
            });
            
            InputUtil.onKeyDown(Keys.Three, () => {
                wall.clear();
                console.log("passable: " + wall.getTargetPassable(myself));
            });

            InputUtil.onKeyDown(Keys.Four, () => {
                wall.unblockAll();
                console.log("passable: " + wall.getTargetPassable(myself));
            });
            
        }
```

::: tip

【禁行区】请尽量放置在场景中，不推荐动态生成。此外【禁行区】不支持重叠使用。

:::
