# 预制体功能说明

**阅读本文大概需要 20 分钟**

为了开发者更好的了解与使用预制体，本文主要包含以下 3 个内容：

（1）预制体简介（2）预制体使用指南（3）使用注意事项

## 预制体简介

### 预制体是什么

- 预制体是可重复使用的游戏对象组合，是一种将游戏对象组合成一个整体并保存为一个独立资源的机制。预制体可以用来创建和存储一个游戏对象的所有组件、各项属性和子对象。当需要多次重复使用同一个游戏对象时，便可以使用预制体，将该游戏对象设置为预制体。
- 预制体内包含的所有的节点均为引用关系。



### 预制体基础规则

- **预制体结构**

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnY362BcnTsQQcPL98Io67Hf.png)

- 预制体均包含一个预制体头结点，当创建一个空预制体时，会自动生成一个默认的头节点。
- 预制体头结点下为预制体子对象，子对象间可以是平级、父子级结构关系
  

## 预制体使用指南

### 预制体的创建与存储

- **新建预制体**

- 方法：点击工程内容-预制体分类中【新建预制体】按钮

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn9Bmp1nIqNhqZ3TSyFlqHxh.png)

- **已有对象生成为预制体**

  - 方法 1：选中对象管理器中对象，点击右键菜单中【生成为预制体】，将选中对象及其子对象生成为预制体

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnmLnQKbMBV7ecapGW82uiRd.png)

- 方法 2：选中对象管理器中某实例状态的预制体引用对象头结点，点击右键菜单中【另存为新预制体】，选中的实例状态预制体引用对象将与原预制体脱离引用关系，并生成为新预制体

![](https://cdn.233xyx.com/online/gHwYLRrfpbDR1700726601533.jpg)


- **预制体的存储**

  - 工程内容-预制体分类中存储着当前工程下所有的预制体资源

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnUy0z6rBLtCAHgjL9165dvd.png)

- 每个预制体以单独的 prefab 文件存在，其所**引用**的脚本、UI、材质均分别存于对应的文件类型下，**不会与 prefab 文件整合**

  - 名为“示例”的预制体中引用了名为“DefaultUI”的 UI 文件和名为“test”的脚本文件，锥体 1 引用了名为“新建材质”的材质文件

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnvncZmzqCJQjlxlRcA9lYlb.png)

- 此时各文件存于各自的目录下

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnOkQ82fz9b99zOLluAU3qqd.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnl1nddNq834pobOofJfOjBf.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnXimx5brqoviqOXz4j9UQqf.png)

### 预制体的编辑

- **预制体编辑视口中进行编辑**

  - 入口 1：在工程内容中选中某预制体，点击右键菜单中【编辑】或双击预制体文件，可在预制体编辑视口中打开选中预制体进行编辑

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnZ0kpC3ztV9KViUdye5gEEd.png)

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn4IQC5GJyWzW96Vg8iDBrMd.png)

（通过工程内容打开预制体进行编辑）

- 入口 2：在对象管理器中选中某预制体头结点，点击右键菜单中【编辑预制体】，可在预制体编辑视口中打开选中预制体进行编辑

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnTodZehIUXA8EphCrd60Nof.png)

（通过对象管理器打开预制体进行编辑）

- **在主场景中对预制体进行编辑**

- 直接在对象管理器中选中某预制体，进行节点信息或属性的编辑

::: tip
在预制体编辑视口中对预制体进行编辑，保存后会同步到场景中所有已引用的预制体上.
在主场景中对预制体进行编辑，不会同步到场景其他已引用的预制体上.
:::

- **保存预制体修改**

  - 预制体编辑视口中保存

    - 点击工程内容中【保存】按钮保存对预制体的修改

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnXLvo8qStJZCydWy9Mf3pme.png)

- 切换编辑状态及编辑对象时，点击保存提示弹窗中【保存】按钮

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnKnYwTaGciy7DZFYs3MxgCb.png)

- 主编辑器中保存

![](https://cdn.233xyx.com/online/gHwYLRrfpbDR1700726601533.jpg)

- 点击某预制体右键菜单中【更新预制体】，将当前在对象管理器中对预制体引用对象的修改保存
- 点击某预制体右键菜单中【另存为新预制体】，将当前在对象管理器中对预制体引用对象的修改另存为新预制体

### 预制体的使用

- **编辑状态**

  - 在资源库中找到需要使用的预制体,拖拽至对象管理器或主视口中创建预制体引用对象,此时预制体为网络资源,不可进行本地编辑,如果需要进行二次编辑,需要将预制体导入至本地工程内容.
<video controls src = "https://cdn.233xyx.com/athena/online/db8d7834232149eb8accb4c9409dba77.mp4"></video>

  - 在工程内容中找到预制体，拖拽至对象管理器及主视口中创建预制体引用对象
<video controls src = "https://cdn.233xyx.com/athena/online/de206300ff8d408c8853557972aa2c13.mp4"></video>


- **运行状态**

  - 通过 API 动态生成预制体引用对象

```ts
/*动态生成预制体引用对象，需要本地资源库或工程内容中预制体资源ID(需要预加载资源)*/
GameObject.spawn("AssetId")

/*异步生成预制体引用对象，需要本地资源库或工程内容中预制体资源ID(无需预加载资源)*/
GameObject.asyncSpawn("AssetId")
```

### 预制体的删除

- 当工程内容中的预制体时，将校验场景中是否含有该预制体的引用对象

  - 若有引用对象，则弹出弹窗

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnGklAUKt00uFTyqWaUKztvg.png)

- 删除引用对象：删除此预制体的同时，删除此预制体在场景中的引用对象

- 解除引用关系：删除此预制体，但保留场景中的对象，使其变为普通对象，不再依赖于原预制体文件

- 若没有引用对象，则显示二次确认弹窗

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnJgOA8Raod912urXxpbKoNc.png)

- 删除预制体文件夹时，显示二次确认弹窗，点击确认后，将对文件夹中的所有预制体执行“**删除引用对象**”逻辑

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnhO189ai1LVtrybbD5shAwf.png)

### 预制体的导入、导出

- **导出预制体**

  - 在工程内容-预制体分类下选中某预制体，点击右键菜单中【导出】按钮
  - 在弹出界面内可以查看被导出的预制体及其包含的文件,可以通过勾选的方法选择需要导出文件
  - 预制体引用的脚本、UI以及材质等文件会以相对应的路径被一同导出

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnmQqEtXaHNDMlVv80vX1fig.png)
![](https://cdn.233xyx.com/online/_预制体导出qE8EZWiHbgpE1711270756067.png)

- **导入预制体**

  - 点击工程内容-预制体分类下【导入预制体】按钮，在资源管理器中选择要导入的预制体后将预制体导入

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcne4rfPhEftcoqGBwjRZw7db.png)


- 导入时将解析预制体文件，并还原所有引用文件至工程中

- 导入时将显示导入详情面板，给开发者提供 prefab 的结构信息,可以通过文件前的勾选框来确定需要被导入的内容.
![](https://cdn.233xyx.com/online/_导入1111QNukGTGclbCM1711270726363.png)

- 若当前工程中的文件与导入的 prefab 有冲突，将给用户提供重命名或覆盖操作
- 覆盖：选择覆盖，导入时将导入的文件覆盖导入；并在文件右侧显示覆盖图标
- 重命名：选择重命名，导入时将导入的文件自动重命名导入

### 更新预制体

- 在对象管理器中,对预制体进行编辑后,使用[更新预制体]功能,会将编辑后的状态同步给其他引用的预制体,同时更新工程内容中的预制体文件.
- 

### 重置预制体

- 在对象管理器中,选中预制体使用[重置预制体]功能,会将选中的预制体还原成工程内容中预制体的状态.


### 解除预制体

- 在对象管理器中，右键预制体头结点，提供解除预制体操作
- 该操作能够将预制体引用对象变为普通对象（紫色——白色）

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnfC9Rw249yC5efo4RiCR6ab.png)

## 使用预制体功能的注意事项与建议

使用 spawn 动态生成预制体时，需要 使用AssetUtil类去下载加载 预制体 资源，或者将预制体拖入对象管理器中的优先加载区域

使用 asyncSpawn 异步生成预制体时，无需预加载资源
