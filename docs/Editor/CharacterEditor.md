# 角色编辑工具

::: tip **阅读本文大概需要 20 分钟**

为了帮助开发者快速了解并使用角色编辑工具，本文主要包含以下 2 个内容：

1. 角色编辑工具简介
2. 角色编辑工具使用指南

:::

![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnbeN6MP1cK0NuVJ8hCPm5ae.png)

## 1. 角色编辑工具简介

### 1.1 角色编辑工具是什么

角色编辑工具为开发者提供可视化的角色形象编辑能力，通过调整工具中体型、发型、服饰、妆容等选项可以对游戏中的角色形象进行个性化定制。

### 1.2 角色编辑工具的应用场景

编辑状态下自定义游戏角色形象 ↓

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/3c26ea6d01d14d40b390720f7781fc2d_219488010.webp)|![](https://cdn.233xyx.com/athena/online/7f078decf61d45f095e8aa2ea848b824_219488011.webp)|

运行状态下自定义游戏角色形象 ↓（通过 API）

<video controls src="https://cdn.233xyx.com/athena/online/80d5190d7e3c4f00971c41347a1def7f.mp4"></video>

### 1.3 角色编辑基础规则

**1.3.1 角色风格**

角色编辑工具目前提供的角色风格主要分为：**二次元风格**、**多边形风格**、**写实风格**和**欧美卡通风格**。

二次元风格 ↓

| 男  | 女 |
| --------- | ------------ |
| ![](https://cdn.233xyx.com/1681727691521_797.png) | ![](https://cdn.233xyx.com/1681727691476_917.png) |

多边形风格 ↓

| 男  | 女 |
| --------- | ------------ |
| ![](https://cdn.233xyx.com/1681727691613_794.png) | ![](https://cdn.233xyx.com/1681727691429_659.png) |

写实风格 ↓

| 男  | 女 |
| --------- | ------------ |
| ![](https://cdn.233xyx.com/1681727691659_808.png) | ![](https://cdn.233xyx.com/1681727691566_381.png) |

欧美卡通风格 ↓

| 男  | 女 |
| --------- | ------------ |
| ![](https://cdn.233xyx.com/athena/online/6e1fc63378da4181a610d3249dbc5592_74082639.webp) | ![](https://cdn.233xyx.com/athena/online/fa9af05a46534161bc7a33ee32c84a55_74082640.webp) |

**1.3.2 编辑项**

- **捏人类**

  捏人类编辑项，可以通过调整**部位缩放、拉伸**等参数来改变角色形象。
  可以调节的选项有：**头部相关**和**身材相关**。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/603cf5bc542f42b687963cb011ad5197_219488012.webp)|![](https://cdn.233xyx.com/athena/online/a58726a06b0e4cb792099f5f6eecd6c3_219488013.webp)|

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/6af86f0bfc464994a890328de2ce02da_219488014.webp)|![](https://cdn.233xyx.com/athena/online/7acf5eaee9794d2a8220df550134dc1e_219488015.webp)|

- **换装类**

  换装类编辑项，可以通过**替换资源**、**调整颜色和花纹**等参数来改变角色形象。
  可以替换的资源有：**化妆相关**、**发型相关**和**服饰相关**。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/91496b2da9d34ce990ac9ebae77a392d_219488016.webp)|![](https://cdn.233xyx.com/athena/online/78057c1164b348fc8cdfb320b71a0905_219488017.webp)|

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/628d89f4c8554797b392eeed7a8945cf_219488018.webp)|![](https://cdn.233xyx.com/athena/online/c826cee219bb49f089ba79fca49b67ec_219488019.webp)|

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/8f10ade955594098a610dc980f3da93d_219488020.webp)|![](https://cdn.233xyx.com/athena/online/f0b1197bb2644dec9b17d7057b9e347c_219488021.webp)|

## 2. 角色编辑工具使用指南

### 2.1 角色编辑工具入口

**入口1：编辑 Player 角色形象**

点击 Player 对象属性面板中的“编辑玩家形象”。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/706b03ef81b140dfa990abcead1299ab_219488022.webp)|![](https://cdn.233xyx.com/athena/online/207c56517c164d10bc2ed2ea6c8336cc_219488023.webp)|

**入口2：编辑人形对象角色形象**

点击人形对象 v2 中的“编辑人形对象”。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/1bcb705fcb99464aae0c4597805bfc2e_219488024.webp)|![](https://cdn.233xyx.com/athena/online/02887ef862de4b568cae9f7aa00462d6_219488025.webp)|

**入口3：编辑本地角色形象**

双击工程内容中的角色形象数据文件，或点击右键菜单中的编辑选项。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/55a2a17d464542f492eb544ef5837736_219488026.webp)|![](https://cdn.233xyx.com/athena/online/c7ef85ff41444de5b99ddf183dc09952_219488027.webp)|

### 2.2 角色编辑数据的保存与使用

- **保存**

  编辑 PLayer/人形对象/本地角色文件时，显示**保存**选项，点击保存后将编辑数据更新至 PLayer/人形对象/本地角色文件中。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/611eeba6745b40d3b25d9145be9993f2_219488028.webp)|![](https://cdn.233xyx.com/athena/online/a5bab6ea6bc04f0ba154568e3c5c7935_219488029.webp)|

- **另存为**

  点击另存为，将角色编辑数据**整体**或**组合**存储在工程内容的角色分类下。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/d284531037014f5eb66f7861fcea6944_219488030.webp)|![](https://cdn.233xyx.com/athena/online/c960042b5cd648a09f2bdf153c4d5f27_219488031.webp)|

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/4e21312e001d40e8832f06da5104bceb_219488032.webp)|![](https://cdn.233xyx.com/athena/online/3a4e9b3044044be9a0fa43f399a97eaa_219488033.webp)|

- **角色编辑数据说明**

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/a31fe5dd1b6c48c697dae425770c3ef3_219488034.webp)|![](https://cdn.233xyx.com/athena/online/077db13c0c3342319f1ed38bd5b1046f_219488035.webp)|

  | 数据名称   | 用途                                 |
  | ---------- | ------------------------------------ |
  | 体型与姿态 | 存储基础、面部相关、身材相关编辑数据 |
  | 发型       | 存储前发、后发部分编辑数据           |
  | 上衣       | 存储上衣部分编辑数据                 |
  | 下衣       | 存储下衣部分编辑数据                 |
  | 手套       | 存储手套部分编辑数据                 |
  | 鞋         | 存储鞋袜部分编辑数据                 |
  | 插槽参数   | 存储插槽调整、物品预览相关编辑数据   |

- **角色编辑数据应用**

  - **编辑时应用**

    将角色形象数据文件拖入主视口，将数据文件中存储的角色数据应用至角色。

  - **运行时应用**

    通过 API 将数据文件中存储的数据应用至角色。

      ```ts
      //调用工程内容-角色数据文件资源ID改变人形对象对应数据
      LoadEditorDataByGuid("<del>GUID</del>")
      //将角色形象同步至多端
      SyncDIYDataBegin()
      ```

### 2.3 角色编辑数据的导入与导出

- **导入**

  - 点击工程内容-左侧分类正下方**资源导入**按钮，在资源管理器中选择要导入的角色文件后将数据导入。（可支持批量导入）
  - 支持从外部Window资源管理器中直接**拖拽角色资源文件**至工程内容面板后进行数据导入。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/3468ae1d9e71430ca49be9cd1398712a_219488036.webp)|![](https://cdn.233xyx.com/athena/online/06622888bdfc4b1f99a47b550d0c7822_219488037.webp)|

- **导出**

  在工程内容-角色分类下选中某个角色形象数据文件，点击右键菜单中**导出**按钮，在资源管理器中选择导出路径后将该数据导出。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/70705ca9c47f42d09489b75745d6069d_219488038.webp)|![](https://cdn.233xyx.com/athena/online/f574abf8d32f4a04a371f59dc97cce0b_219488039.webp)|
