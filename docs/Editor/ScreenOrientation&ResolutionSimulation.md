# 横竖屏、分辨率模拟功能说明

::: tip **阅读本文预计 10 分钟**

为了让开发者了解如何制作、调试和发布横屏/竖屏游戏，本文主要介绍了以下内容：

1. 分辨率模拟功能
2. 横竖屏功能

:::

## 1. 分辨率模拟功能

开发者可以通过分辨率模拟功能在编辑状态和 PIE 状态下调试不同分辨率下的游戏效果。

### **1.1 功能入口**

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/bdc3731fa73c4ab88b5fa8a1ec237e39_219749857.webp)|![](https://cdn.233xyx.com/athena/online/a01eded94e444a36ae896af643da4840_219749858.webp)|

### **1.2 面板说明**

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/344758a10f144a0b86ddd5b6de89660f_219749859.webp)|![](https://cdn.233xyx.com/athena/online/e740b980134a4a2a91214973c0e0860b_219749860.webp)|

**1.2.1 添加分辨率**

Step.1 点击添加分辨率按钮打开自定义分辨率弹窗。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/6b47fddafebc40bd980ad40dd6140e7a_219749861.webp)|![](https://cdn.233xyx.com/athena/online/310a5c8d24754007924af3538bbe292e_219749862.webp)|

Step.2 在自定义分辨率弹窗内填写名称、尺寸。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/b849e25ba8a248059610a62d55da2a03_219749863.webp)|![](https://cdn.233xyx.com/athena/online/28fb634cd59b4f0b8baf8ee5f3c09a9a_219749864.webp)|

Step.3 点击确认，即可添加分辨率。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/4a69a1b5d7cc4f01bfd572f711d85128_219749865.webp)|![](https://cdn.233xyx.com/athena/online/36788a192ce04d378748e89cc363b2bb_219749866.webp)|

**1.2.2 分辨率列表**

分辨率列表中包含默认的**主视口平铺**及开发者添加的**自定义分辨率**，点击某个分辨率进行切换。
开发者添加的自定义分辨率可删除。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/f8a5acdfcc5b44129ae8c6e1a51931ab_219756961.webp)|![](https://cdn.233xyx.com/athena/online/988603947cef4e9187969c4162bbca55_219756962.webp)|

### **1.3 使用效果**

**主视口**

主视口会根据视口大小和选择的分辨率，在视口内划分可操作区域和无效操作区域。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/388a8e7ff2074414b6df95fb32a4d80f_219749869.webp)|![](https://cdn.233xyx.com/athena/online/e13c26c433b448f0a0287d5195eba25b_219749870.webp)|

**PIE**

PIE 窗口会根据选择分辨率的长宽比例，自适应调整窗口大小。

| 16:9  | 4:3 |
| --------- | ------------ |
| ![](https://cdn.233xyx.com/athena/online/3433953f6aac4ef4b6709845a422bccd_219749871.webp) | ![](https://cdn.233xyx.com/athena/online/d85f36f1135e49b4879c21bb13556b8a_219749872.webp) |

## 2. 横竖屏功能

游戏在手机平台上区分为横屏模式与竖屏模式。

开发者可以通过横竖屏功能在编辑状态、PIE 状态下调试制作的游戏，游戏发布后也将以此为标识，设置其在手机平台的横竖屏模式。

### **2.1 功能入口**

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/d0b255c54a964d9298a837a931d00323_219749873.webp)|![](https://cdn.233xyx.com/athena/online/52e5e51204f9449fba8d0a8855e48138_219749874.webp)|

### **2.2 面板说明**

点击左侧选项，切换为竖屏模式；点击右侧选项，切换为横屏模式。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/online/ca093f3de165410daa482b3b32403f66_219749875.webp)|![](https://cdn.233xyx.com/athena/online/fb7e148631124cd8b5de98382a647c47_219749876.webp)|

### **2.3 使用效果**

**主视口**

主视口会根据横竖屏和分辨率设置，在视口内划分可操作区域和无效操作区域。

|| 横屏  | 竖屏 |
|---| --------- | ------------ |
|**中文示例**| ![](https://cdn.233xyx.com/athena/online/59b432f80feb4a07a452702c0d858125_219749877.webp) | ![](https://cdn.233xyx.com/athena/online/d854984323c44be88396a21bbb5efe5b_219749879.webp) |
|**英文示例**| ![](https://cdn.233xyx.com/athena/online/e647c172a6864299bc8bdd7d3b43c993_219749878.webp) | ![](https://cdn.233xyx.com/athena/online/40ba156d019b4bd3a97dc91ec21a7d9a_219749880.webp) |

**PIE**

PIE 窗口会根据横竖屏和分辨率设置，自适应调整窗口大小。
| 横屏  | 竖屏 |
| --------- | ------------ |
| ![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnhys18zFlPgyQtbQzjga1gg.png) | ![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcn6KnQ3D91AJu7Tc4TJ8wWSg.png) |


**Mobile**

Mobile 会根据设置的横屏模式/竖屏模式展现发布的游戏。
| 横屏  | 竖屏 |
| --------- | ------------ |
| ![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcnK17DEEE0fnY4GY2ImnhA5b.png) | ![](https://wstatic-a1.233leyuan.com/productdocs/static/boxcncaxaMBitpVqWk2pbU2v5kc.png) |
  

## 3. 注意事项与建议

- 编辑器默认为横屏模式，提供了横屏模式下的角色控制 UI、角色摄像机参数。

- 当开发者由横屏切换至竖屏模式后，需要根据游戏玩法、内容调整对应角色控制 UI、角色摄像机参数。

- 当分辨率为主视口平铺时，不支持切换横竖屏。
