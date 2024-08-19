# 空锚点
::: info
**阅读本文预计 5 分钟**

使用【空锚点】来解决场景搭建和对象挂载中由于对象的锚点固定导致根据锚点进行的旋转，缩放无法满足需求的情况。
:::

# 空锚点

通常情况下资源库中的对象锚点都是固定的，而以锚点为基础执行对象变换经常不满足需求。【空锚点】提供用户去自定义对象锚点位置的功能，利用【空锚点】对象本身作为对象的锚点来使用。而且通过**自动居中，顶点吸附和手动偏移**3种偏移方式，提升【空锚点】作为父对象时在编辑状态下的操作便捷性。【空锚点】在工程内作为父对象存在时，【场景】内显示所有子对象所产生的的包围盒。你可以在【本地资源库】中的【游戏功能对象】栏中找到【空锚点】。

![img](https://qn-cdn.233leyuan.com/athena/online/48566ed569a040b3af440d94e0f6d32d_354363796.webp)
![img](https://qn-cdn.233leyuan.com/athena/online/c05dd83b571549eba1a7f8f81389ed2d_354363797.webp)

# 创建空锚点

## 通过放置资源创建：

【空锚点】对象本身作为一个`GameObject`可以存在于游戏场景中。你可以从【本地资源库】中将【空锚点】拖入【场景】或者【对象管理器】来自动生成一个【空锚点】对象。

1. 在【本地资源库】中找到【空锚点】

![img](https://qn-cdn.233leyuan.com/athena/online/3b68624c3b7b4f9b8e1e3e9c15ec29a9_354363798.webp)
![img](https://qn-cdn.233leyuan.com/athena/online/9718bee36436486dad038d75cf656ac3_354363799.webp)

2. 将对象拖入到【场景】中或者【对象管理器】下

![img](https://arkimg.ark.online/1684043767476-106.webp)
![img](https://qn-cdn.233leyuan.com/athena/online/79b0fcc957024f7aa8d440edbf64d6d7_354363800.webp)

3. 在右侧【对象管理器】中【对象】栏找到对应的【空锚点对象】并自定义锚点变换和锚点偏移。

![img](https://qn-cdn.233leyuan.com/athena/online/17dc4ef867f045979f99f81314391811_354363801.webp)![img](https://qn-cdn.233leyuan.com/athena/online/e132652e25d449868b00af4abd75c26e_354363803.webp)
![img](https://qn-cdn.233leyuan.com/athena/online/d61f4810627f4cf8b000a4e45b523696_354410597.webp)![img](https://qn-cdn.233leyuan.com/athena/online/495d692270114a2dbab5f1fc7575a16a_354363804.webp)

::: tip

设定锚点偏移并不会改变【空锚点】对象实际的Transform值。但是锚点偏移会影响编辑器下【空锚点】对象的枢轴点，并作用于Transform修改中。

:::

# 自定义空锚点偏移

【空锚点】对象的偏移将决定执行变换时【空锚点】对象的枢轴点。

**变换**：执行变换时以锚点位置作为枢轴点进行移动，旋转，缩放。

<video controls src="https://qn-cdn.233leyuan.com/online/hMgbWECvJzPk1724064429813.mp4"></video>
<video controls src="https://qn-cdn.233leyuan.com/online/smPCrObo2Axi1724064459509.mp4"></video>

**自定义偏移**：执行变换时以【空锚点】偏移后位置作为枢轴点进行移动，旋转，缩放。

<video controls src="https://qn-cdn.233leyuan.com/online/4Y3LFnn2d3jJ1724064473675.mp4"></video>
<video controls src="https://qn-cdn.233leyuan.com/online/pztMoAu4ZEaM1724064501396.mp4"></video>

# 使用空锚点

::: tip

锚点偏移功能只作用于编辑器下，在游戏运行中，运行态【空锚点】执行变换时仍然以自身实际值为准，只作为一个空对象存在。

:::

## 获取空锚点对象

### 【对象管理器】中【对象】栏下的【空锚点】**对象**：

**使用`asyncFind`接口通过【空锚点】对象的ID去获取：**

1. 选中【空锚点】对象后右键点击【复制对象ID】获取它的ID。注意区分对象ID与资源ID的区别。

![img](https://arkimg.ark.online/1684043767476-113.webp)
![img](https://qn-cdn.233leyuan.com/athena/online/7ae1b9d4d5a249e78d5f68a0fab968e2_354363805.webp)

1. 在脚本的onStart方法中添加下列代码：代码将异步查找ID对应的对象并以【空锚点】对象进行接收。

```TypeScript
if(SystemUtil.isServer()) {
    let anchor = await GameObject.asyncFindGameObjectById("3819014E") as GameObject;
    console.log("anchor gameObjectId " + anchor.gameObjectId);
}
```

**使用脚本挂载的方式进行获取：**

1. 将脚本挂载到【空锚点】对象下方

![img](https://qn-cdn.233leyuan.com/athena/online/bcb7634300f44ab194f733f659cba201_354363806.webp)
![img](https://qn-cdn.233leyuan.com/athena/online/2453033189b047b0a1482076e070ec30_354363807.webp)

2. 在脚本的onStart方法中添加下列代码：代码获取脚本挂载的对象并以【空锚点】对象进行接收

```TypeScript
let anchor = this.gameObject as GameObject;
```

