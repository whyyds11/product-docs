# 实体建模工具

::: tip **阅读本文预计 10 分钟。**

**本文概述了在编辑器中如何使用实体建模工具。**

:::

**实体建模工具**可以对两个及以上的物体进行并集、差集运算，通过组合一些 **基本的静态模型** ，如方块、球体和圆柱体等，来创建新的 **复杂模型** ，可以让开发者可以自由组合出符合项目和游戏需求的物件。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/online/eInRyYHgRhyE1715331052150.png)|![](https://qn-cdn.233leyuan.com/athena/online/0265762a11f54942b444a5ce7eea0341_365322625.webp)|

| 工具 | 快捷键 | 描述 |
| - | - | - |
| 组合 | Ctrl+Shift+U | 基础模型可以使用组合工具将多个模型融合为一个模型。 |
| 镂空 | Ctrl+Shift+N | 基础模型可以使用镂空工具在实体状态和镂空状态之间切换。 |
| 分离 | Ctrl+Shift+S | 融合模型可以使用分离工具将组合起来的各个模型还原。 |

## 1. 组合工具

组合工具可以把两个及以上的基础模型组合在一起，形成一个Union模型。若基础模型材质不同，则操作后的融合模型继承运算时首个输入模型的材质，如A+B再+C，则A+B+C的融合模型继承A模型的材质。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/online/hDju7WIOe19O1715328269968.png)|![](https://qn-cdn.233leyuan.com/athena/online/29271a76e0404cec9c02024c9164526d_365328186.webp)|

## 2. 镂空工具

镂空工具可以将基础模型和Union模型切换为镂空状态，镂空状态的模型与常规实体模型进行组合时，将从实体模型中减去镂空模型的形状。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/online/7YpmvBUxjUqp1715328269162.png)|![](https://qn-cdn.233leyuan.com/athena/online/bba9e11705d747dd9ee6c1fde468aaed_365334526.webp)|

**步骤1**

选中想要进行镂空的模型。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/online/FCVDhqezNwR31715328593304.png)|![](https://qn-cdn.233leyuan.com/athena/online/bdc4ad84409f46fcbac9300edb9bd745_365375335.webp)|

**步骤2**

单击工具栏中的镂空工具，选中模型将切换为红色半透明的镂空状态。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/online/EDLYiYJ15tz81715328594138.png)|![](https://qn-cdn.233leyuan.com/athena/online/92d3ea5681f84d3fa87eb987fd3f88c9_365375955.webp)|

**步骤3**

选中想要被减去的实体模型和镂空模型。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/online/3frwbP6BxD3c1715328594888.png)|![](https://qn-cdn.233leyuan.com/athena/online/35981dd6a678446cbdc44ae6ce8db9c8_365335870.webp)|

**步骤4**

单击工具栏中的组合工具，将从实体模型中减去镂空状态的模型。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/online/PWnMVc106Bxm1715328595703.png)|![](https://qn-cdn.233leyuan.com/athena/online/a5683ed039914a0bacfa6a425853c881_365336295.webp)|

## 3. 分离工具

分离工具可以将合并后的模型分离回各个部分，类似于“撤销”工具。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/online/Btf2F3wtqsT81715328268248.png)|![](https://qn-cdn.233leyuan.com/athena/online/15c7acfb330d4dbb8d2a57daa7b956fe_365355739.webp)|

**步骤1**

选中想要进行分离的模型。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/online/qM7hIbpru5fk1715328591785.png)|![](https://qn-cdn.233leyuan.com/athena/online/b0b2a4e5be3548d0b56323be28b70834_365356174.webp)|

**步骤2**

单击工具栏中的分离工具，选中模型分离回上一次合并前的状态。

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/online/qyZfgzbsLXX01715328592547.png)|![](https://qn-cdn.233leyuan.com/athena/online/fc78ec03b0f0443db390a5a08e688ade_365376734.webp)|

## 4. 保存为本地文件

合并后的Union模型可以通过对象管理器右键菜单中的**保存为本地文件**选项，将模型文件导出到工程内容中。工程内容中的本地文件拖入场景中重新生成时，依然可以将模型分离为合并前的状态。

|中文示例|英文示例|
|-----|-----|
|<video controls src="https://cdn.233xyx.com/online/UqnZaBNclsj61715328622897.mp4"></video>|<video controls src="https://qn-cdn.233leyuan.com/athena/online/d785ad3f33cf44cb976b5cf2615aa841.mp4"></video>|


