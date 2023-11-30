# 脚本的生命周期

::: tip **阅读本文大概需要 15 分钟**
:::
## 什么是生命周期

生命周期就是指一个对象从诞生到死亡

> 生命周期（Life Cycle）的概念应用很广泛，特别是在政治、经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓”（Cradle-to-Grave）的整个过程。而对于脚本而言，生命周期代表着一个脚本从激活（Activate）到销毁（Destroy）的全过程，也代表着代码中脚本函数的执行过程与执行顺序。
  
![](https://cdn.233xyx.com/athena/online/8db445bee7e24ff49777060d3d129449_11843170.webp)
## 脚本的生命周期包括什么

#### onStart( ) : void

当脚本被实例后，会在第一帧更新之前调用 onStart 函数

**注：编辑器在为任何脚本调用 onUpdate 等函数之前，将在所有脚本上调用 onStart 函数**

#### onUpdate(dt : number) : void

编辑器会在游戏每帧调用一次 onUpdate 函数

这是用于帧更新的主要函数

**注：其中（dt : number）为时间差值，表示当前帧与上一帧的延迟 / 秒**

#### onDestroy( ) : void

脚本存在的最后一帧执行完，且在 onUpdate 函数执行完毕后，调用此函数

#### useUpdate : boolean

控制编辑器是否开启 onUpdate 函数的调用

默认编辑器不会开启脚本 onUpdate 的生命周期，需要开发者自行调用

```ts
this. useUpdate = true;
```

#### isRunningClient( ) : boolean

判断当前脚本是否执行在客户端，反之则运行在服务端

有关编辑器客户端与服务端的区别，请看[网络同步原理和结构](https://docs.ark.online/Scripting/NetworkSynchronizationStructureandMechanics.html)

#### 脚本示例：

```ts
@Component
export default class TestScript extends Script {
    protected onStart(): void {

        //开启onUpdate的函数
        this.useUpdate = true;

        //向控制台输出当前脚本是否执行在客户端
        this.myLog(`The script is running client? ===> ${this.isRunningClient()}`);

        if (this.isRunningClient()) {   //客户端===>

            //根据GUID持有cube对象
            let cube = GameObject.findGameObjectById(`48A8055A40BBA143D723B19BDB2D21ED`);

            this.myLog(`Into Client onStart()`);

            //向服务器派发删除cube事件，并将cube对象发送至服务端
            Event.dispatchToServer("DeleteCube", cube);
        }
        else {                          //服务端===>

            this.myLog(`Into Server onStart()`);

            //监听客户端删除cube的事件
            Event.addClientListener("DeleteCube", (player, cube: GameObject) => {

                //删除cube对象
                cube.destroy();

            });
        }
    }

    protected onUpdate(dt: number): void {

        if (this.isRunningClient()) {

            this.myLog(`Into Client onUpdate() > dTime:${dt}`);

        }
        else {

            this.myLog(`Into Server onUpdate() > dTime:${dt}`);
        }
    }

    protected onDestroy(): void {


        if (this.isRunningClient()) {

            this.myLog(`Into Client onDestroy()`);

        }
        else {
            
            this.myLog(`Into Server onDestroy()`);
        }

    }

    public myLog(msg:string)
    {
        console.log(`TestLog ===> ${msg}`);
        
    }
}
```

#### 客户端 Log：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnncIR1zRDmK2U2Ck6batn8d.png)

#### 服务端 Log：

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnwGBQL0XZ63UlqF45xdBYId.png)

## 如何合理利用脚本的生命周期

#### 初始化

1）通常会将对象属性（例如：位置、状态等）的初始化做成一个函数，放在 onStart 中执行

2）来自服务器或者客户端的事件的监听，很多时候会写在 onStart 函数中

**脚本示例：**

```ts
@Component
export default class TestScript extends Script {

    //声明一些属性
    public v3: Vector;
    public level: number;
    public name: string;

    protected onStart(): void {
    
        //在游戏开始第一帧初始化属性
        this.initUser();
        
        //在游戏开始第一帧注册事件监听
        this. initEvents();
        
    }
    
    //初始化属性的函数
    public initUser()
    {
        this.v3 = Vector.ZERO;
        this.level = 0;
        this.name = `userName`;
    
    }
    
    //初始化事件监听
    public initEvents()
    {
    
        Event.addServerListener("eventName",parm);
    
    }
   
}
```

#### onUpdate 的函数‘潜规则’

1）尽量减少在 onUpdate 函数中写循环逻辑、递归

避免死循环或循环内出现空引用阻塞程序执行

2）逻辑代码尽量写成函数在 onUpdate 中调用，提高代码阅读性

3）在 onUpdate 函数执行的逻辑中，引用的对象尽量都做判空处理

提高定位逻辑问题效率，同时避免空引用阻塞程序执行

4）若非必要使用 onUpdate，尽量使用其他函数代替（例：计时器可用 setTimeout）

例：在做连击的判断中，需要对计时器做终止或重新计时的需求，此时 setTimeout 无法满足

```ts
@Component
export default class TestScript extends Script {

    /** 是否可点击 */
    isCanHit = true;
    /** 点击CD */
    hitCD:number = 2;
    /** 控制点击的计时器 */
    canHitTimer:number = 0;

    /** 是否连击 */
    isCombo = false;
    /** 有效连击的CD */
    comboCD = 5;
    /** 控制连击的计时器 */
    comboTimer:number = 0;
    /** 连击次数 */
    comboCount:number = 0;
    /** 最大连击数 */
    maxComboCount:number = 0;

    protected onStart(): void {
    
        //开启onUpdate的函数
        this.useUpdate = true;
        
    }
    
    protected onUpdate(dt: number): void {
        
        //检查并计时连击与点击
        this.checkHit_Combo(dt);
        
    }
    
    checkHit_Combo(dt: number)
    {
        if (!this.isCanHit) {
            this.canHitTimer += dt;

            if (this.canHitTimer >= this.hitCD) {
                this.isCanHit = true;
                this.canHitTimer = 0;
            }
        }

        if (this.isCombo) {
            this.comboTimer += dt;
            if (this.comboTimer >= this.comboCD) {
                this.comboTimer = 0;
                this.comboCount = 0;

                this.isCombo = false;
            }
        }
    }
    
    //当用户点击
    puclic hit()
    {
        if (this.isCanHit) {
        
            this.canHitTimer = 0;
            this.isCanHit = false;
            
            if (this.isCombo) {
                this.comboCount++;
                this.comboTimer = 0;
                if(this.comboCount >= this.maxComboCount)
                {
                    this.comboCount = 0;
                }
            }
            else {
                this.comboTimer = 0;
                this.comboCount = 0;
                this.isCombo = true;
            }
            
            console.log(` this.comboCount ===> ${ this.comboCount}`);
        }
    }
}
```

#### 关闭监听（disconnectListener）

通常在 onStart 函数中或者在 UI 脚本中，我们会大量的使用 addListener 来监听事件

但是在该脚本所对应的对象被销毁（Destroy）的时候，其注册在系统内的监听事件并没有被关闭

所以，我们可以在生命周期中的**onDestroy**函数中增加关闭事件监听的逻辑

**代码示例：**

```ts
@Component
export default class TestEvents extends Script {

    //声明事件数组
    myEvents = new Array<EventListener>();

    //声明一个计数变量
    public temp:number;

    protected async onStart(): Promise`<void>` {

        //初始化计数变量为0
        this.temp = 0;

        //根据GUID持有cube对象
        let cube = await GameObject.findGameObjectById(`48A8055A40BBA143D723B19BDB2D21ED`);


        //添加本地事件监听，并将监听器对象保存到事件数组
        this.myEvent.push(Event.addLocalListener("TestEvent1",()=>{
            console.log("========================>");
            console.log(`this.temp ===> ${this.temp}`);
        }));

        //当按下按键‘K’
        this.myEvent.push(InputUtil.OnKeyDown(Keys.K,()=>{
            this.temp ++;
            Event.dispatchToLocal("TestEvent1");
        }));

        //当按下横排按键‘L’
        this.myEvent.push(InputUtil.OnKeyDown(Keys.L,()=>{
            cube.Destroy();
            Event.dispatchToLocal("TestEvent1");
        }));
    }

    protected onDestroy(): void {

        console.log(`Into onDestroy()`);

        //在对象被销毁时，遍历所有事件对象，关闭所有事件监听
        this.myEvent.forEach(element => {
            element.disconnect();
        });
    }
}
```

## 编写脚本时有关生命周期的注意事项

#### 开启 onUpdate 函数

::: tip **useUpdate 的值默认为 false**

必须手动修改 useUpdate 为 true 时，onUpdate 函数才会执行
:::
#### 异步函数
::: tip 在 onStart 中，我们经常使用异步寻找等函数或语法

在使用异步的时候，要将函数添加 async 标识

例：protected async onStart(): Promise`<void>` { }
:::
