# 数据存储与共享

::: tip **阅读本文预计 20 分钟**
**本文概述了如何通过编辑器提供的 API 对游戏进行数据存储，以及如何将游戏的云端数据共享给多个游戏**
:::


## 数据存储功能概述

> 用于处理数据持久存储，每个玩家在每一个游戏中，单条数据存储容量最大支持 64Kb 。超过此限制的任何数据都不能保证被存储，并且可能导致存储数据丢失。超过限制时会在编辑器的 Log 中显示警告。


## 如何使用数据存储

##### 2.1 存储环境

**多人联网游戏**和**单机游戏**对于数据存储方式不同，在**单机游戏**模式下，临时数据存储在手机地本内存中，在不卸载 APP 的情况下，数据会持久保存。

在**多人联网游戏**模式中，数据存储环境分为临时数据和永久数据，通过 setTemporaryStorage()函数进行设置，默认为本地存储。

- true 设置为临时数据，会以房间为单位，创建一份临时数据记录，当游戏房间销毁时，存储的数据会一同销毁。
- false 设置为永久数据， 会以游戏为单位创建一份永久数据记录，该数据不会随着游戏房间销毁而消失。

##### 2.2 设置数据存储

编辑器提供自定义数据的存储方式

- **通过自定义存储数据的方法**

  - 使用 asyncSetData()的方法进行数据进行存储时，可以通过自定义的键值对同一个数据进行管理。
  - 对使用自定义索引值进行存储的数据，使用 asyncSetData()进行数据读取。

```ts
//数据存储
    SaveCustomData(value) {
        //在服务器端执行
        if (SystemUtil.isServer()) {

            //设置为临时数据存储，将数据存放在本地进程中
            DataStorage.setTemporaryStorage(true);


            let myData = new CustomData();

            //getDataSize()获取当前数据的大小,单位为bytes（字节）,，以确保不会超过编码数据的存储限制
            let myDataSize = DataStorage.getDataSize(myData);
            console.log(`---当前数据大小: ${myDataSize}`);

            /*将myData中的分数属性通过“score"键名进行存储
              -参数设置：key:string,value:unknown
              -返回值：Promise<DataStorageResultCode>
            */
            DataStorage.asyncSetData("score", value).then(async (state) => {

                //判断是否存储成功
                if (state == DataStorageResultCode.Success) {

                    /*通过键名异步获取自定义数据
                      -参数设置：key:string
                      -返回值：Promise<unknown>
                    */

                    //读取数据
                    this._CustomData = await DataStorage.asyncGetData("score");
                    console.log(`asyncGetData:${this._CustomData}`);
                } else {
                    //存储失败时，返回本次存储状态
                    console.log(`asyncSetCustomData:"${DataStorageResultCode[state]}`);
                }
            });
        }
    }
```

## 使用数据存储的注意事项与建议

数据存储相关接口只能通过服务器脚本访问，尝试在客户端脚本中进行访问将导致错误。

目前可存储数据类型暂不支持 map 类型、自定义函数。


## 共享数据概述

> 根据文档内容，我们了解到了如何通过编辑器提供的 API 将游戏数据存储下来，当我们将游戏数据存储为**永久数据**后，就可以使用 API 将数据存储到我们的开发者平台上。然后我们可以通过开发者平台控制这份数据的读取权限，这样我们就可以将这份数据共享给其他游戏，完成让多款游戏共用一份游戏数据。更多相关内容请查阅：【[共享数据](https://docs.ark.online/Scripting/DataSharing.html) 】

## 共享数据的步骤

##### 2.1 存储数据

::: warning **注意**
**一定要将数据存储环境设置为永久数据**
:::

- 首先我们在脚本中将数据存储环境改为 false，也就是设置为永久数据， 这样会以游戏为单位创建一份永久数据记录，该数据不会随着游戏房间销毁而消失。

```ts
//将游戏数据设置为永久存储，在游戏退出时数据不会被删除。
DataStorage.setTemporaryStorage(false);
```

- 然后我们通过 asyncSetData()函数将数据存储到开发者平台上，这样我们在开发者平台就会看到这份数据。也可以通过 asyncSetData()函数获取到该数据。

```ts
//设置一个key为“hp”的数据，Value为“50”
await DataStorage.asyncSetData("hp", "50");
//设置一个key为“lv”的数据，Value为“1”
await DataStorage.asyncSetData("lv", "1");
//设置一个key为“coin”的数据，Value为“9999”
await DataStorage.asyncSetData("coin", "9999");
//获取key为“hp”的数据
let data1 = await DataStorage.asyncGetData("hp");
//获取key为“lv”的数据
let data2 = await DataStorage.asyncGetData("lv");
//获取key为“coin”的数据
let data3 = await DataStorage.asyncGetData("coin");
```

##### 2.2 查看开发者平台中游戏数据

- 我们在发布完游戏，并通过审核后，打开开发者平台，找到存档管理列表。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnTlNSqwT4chVzV0pCdAjOFh.png)

- 然后选择我们的游戏名，定位我们所要找的游戏存档。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnHpVNAyHu9EAxMRRL9fvB4c.png)

- 接下来数据类型选择自定义。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnP0gTVAgSPf9onxMY7091xd.png)

- 最后根据 key 进行搜索，或直接点击搜索按钮，就可以看到我们游戏中存储的所有的数据啦！

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnDi0RyxBzoJkRPBXNg9PFMb.png)

- 注意：平台上的游戏数据需要等实际游戏的运行后，即执行了数据存储的游戏逻辑后，开发者平台上面才会存在相应的数据。

##### 2.3 开发者平台设置权限

- 找到授权管理按钮，并点击打开游戏授权的管理界面。

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnK6q9I67GPYgrzFipQMkCWh.png)

- 点击添加按钮，添加授权游戏。

  - 游戏名称：需要共享数据的游戏
  - 权限范围：是设置数据更改权限的能力
  - 授权游戏：被授权的游戏，可以填写 gameid 指定某些游戏
  - 状态：开启授权或关闭授权

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnw91nIKk7sVs30sbSUf0sdc.png)

##### 2.4 其他游戏读取并修改共享数据

- 当游戏开通了数据授权后，另一个游戏就可以进行读取和修改数据啦！
- 首先我们还是在脚本中将数据存储环境改为 false，也就是设置为永久数据。

```ts
//将游戏数据设置为永久存储，在游戏退出时数据不会被删除。
DataStorage.setTemporaryStorage(false);
```

- 然后我们通过 asyncGetOtherGameData()函数中 gameid，获取到对应游戏的平台数据。当然我们也可以通过 asyncSetOtherGameData()函数修改该数据。

```ts
//通过游戏ID和key，获取其他游戏的共享平台数据
this.hp = await DataStorage.asyncGetOtherGameData("gameid", "hp");
//通过游戏ID和key，修改其他游戏的共享平台数据
DataStorage.asyncSetOtherGameData("gameid", "hp", "600");
```

