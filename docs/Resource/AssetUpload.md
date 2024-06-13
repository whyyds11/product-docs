# 资源导入上传工具

::: tip **阅读本文预计15分钟。**

为了帮助开发者快速了解并使用资源导入上传工具，本文主要包含以下2个内容：

1. 资源导入上传工具是什么？
2. 资源导入上传工具使用指南
:::
<br>

# 资源导入上传工具简介
## 资源导入上传工具是什么

* 资源导入上传工具为开发者提供了导入与上传美术资源的途径
  - 资源导入支持脚本、预制体、UI文件、角色、材质、静态模型、贴图、音效类资源
  - 资源上传支持静态模型、UI贴图、场景贴图、角色数据、预制体、音效类型的资源

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/pre/a9f5dcc509964d7585846992db135159_127692.webp)|![](https://cdn.233xyx.com/athena/pre/7cc7b80c67664f72acfea86fbca33a71_127693.webp)|

* 资源导入至本地项目，进行上传后将进入审核流程，资源通过审核并完成打包后，开发者可在我的资源中使用其上传的资源

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/pre/c126e45e3bd642f1b631a1c7d0e02fa0_127694.webp)|![](https://cdn.233xyx.com/athena/pre/6f80b47a167b413d838afcabe4d81a88_127695.webp)|

<br>

# 资源导入上传工具使用指南

## 支持导入的资源类型及规范
* 导入资源的文件名不能带中文，否则会导入失败

|资源类型|文件后缀名|资源规范|
|----------|----------|----------|
|脚本|.ts|无|
|预制体|.zip|仅支持使用口袋方舟编辑器生产的预制体资源|
|UI文件|.ui|仅支持使用口袋方舟编辑器生产的ui文件|
|角色|.asset|仅支持使用口袋方舟编辑器生产的角色资源|
|材质|.mat|仅支持使用口袋方舟编辑器生产的材质资源|
|静态模型|.fbx|网格顶点数需≤65535|
|UI贴图|.jpg  .png  .tga|仅支持32位压缩格式<br>分辨率最大支持2048|
|场景贴图|.jpg  .png  .tga|仅支持32位压缩格式<br>分辨率最大支持2048<br>分辨率需为2的N次幂|
|音效|.wav|资源大小需≤3MB|

## 资源导入工具入口

* 开发者可通过拖拽资源到【编辑器-工程内容】区域

|中文示例|英文示例|
|-----|-----|
|<video controls src="https://cdn.233xyx.com/athena/online/9476c99ce15d43499549d95abb21dbf1.SkK8d7aaRa8R1716949240822"></video>|<video controls src="https://cdn.233xyx.com/athena/online/23d7e432030e48fe8a1956e422fa9b5d.Xo9ckSrC78001716949241892"></video>|
  
* 开发者也可通过点击【工程内容】左下角资源导入功能按钮

|中文示例|英文示例|
|-----|-----|
|<video controls src="https://cdn.233xyx.com/athena/online/71cf3cb9f22d4d908467684149ee12c4.2OE0bpSZZvQC1716949242702"></video>|<video controls src="https://cdn.233xyx.com/athena/online/89cb00e43a194331a82de6429653ef05.RWprxfhyoYZ91716949244202"></video>|

* 开发者也可通过点击【工程内容】各资源类型分类下空白处右键导入资源

|中文示例|英文示例|
|-----|-----|
|<video controls src="https://cdn.233xyx.com/athena/online/9665437723f248dc9e9572e3c2cf3330.OoobQIPflSZG1716949245353"></video>|<video controls src="https://cdn.233xyx.com/athena/online/285692e29721436388e417ca8548bced.Ar2I42wsD7jm1716949247331"></video>|

## 资源校验

* 导入资源后，对这些资源进行校验，跳出窗口显示校验结果

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/pre/c23d82fc606447e0bef23125838b61ba_127696.webp)|![](https://cdn.233xyx.com/athena/pre/f8ddc29cf69c4ce0a6e3ad3500a729bd_127697.webp)|

## 资源导入配置

### 静态模型资源

* 在模型资源贴图引用关系正确的情况下，导入静态模型时可解析引用到的贴图资源自动导入

|中文示例|英文示例|
|-----|-----|
|<video controls src="https://cdn.233xyx.com/athena/online/cd2047b8105e4062a7c245212bc34ba8.Oy4SXdLcwvcl1716949248472"></video>|<video controls src="https://cdn.233xyx.com/athena/online/7d4ebf7b99ca42eebfc0045e1e1e3351.AN5G1JmhK5bk1716949252254"></video>|

### 场景贴图/UI贴图

* 因导入UI贴图和场景贴图的资源规范不同，所以单次导入贴图资源仅支持选择UI贴图或场景贴图其中一种类型进行导入。
* 如有UI贴图和场景贴图的导入需求，可根据类型分批导入
<br>

## 资源缩略图

### 自动生成

* 资源成功导入后，自动生成资源缩略图
* 模型、预制体、角色数据资源会在场景中以默认角度拍照作为缩略图
* 音效资源采用统一的默认缩略图

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/pre/82e182b9cf2a402989c1963f637e15ec_127698.webp)|![](https://cdn.233xyx.com/athena/pre/4b63b94ed309449287a2b8246de7e361_127699.webp)|

* 贴图资源采用原图作为缩略图

|中文示例|英文示例|
|-----|-----|
|![](https://cdn.233xyx.com/athena/pre/cb600f5eea364b0a84b24bfece779383_127700.webp)|![](https://cdn.233xyx.com/athena/pre/7eac42eab3264db6afcfa947161bb16b_127701.webp)|

### 手动生成

* 导入时将自动生成资源图标，也可通过点击导资源图标右上角“相机”，使用手动生成资源图标功能

|中文示例|英文示例|
|-----|-----|
|<video controls src="https://cdn.233xyx.com/athena/online/42b60b1fc3b54bb794d4f9a4fa894729.VFQ8qO8bDIMO1716949253540"></video>|<video controls src="https://cdn.233xyx.com/athena/online/b10eedb7e27c4444b9bd6667e54499f9.BMcdUCR99oE31716949257665"></video>|


## 预览配置

* 资源导入完成后会显示预览配置功能界面，在该功能中可对导入的静态模型资源和贴图资源进行预览和编辑
* 可编辑内容包括：
  - 静态模型：简单碰撞编辑、UV预览、LOD预览、贴图引用、材质颜色修改。支持打开材质编辑器进行更细化的材质属性参数、效果调整
* UI贴图/场景贴图：属性参数修改

|中文示例|英文示例|
|-----|-----|
|<video controls src="https://cdn.233xyx.com/athena/online/946f4763ed1f40bbbd9cc078fff4dea9.M4vqPUJ92jP31716949258776"></video>|<video controls src="https://cdn.233xyx.com/athena/online/bce44dc111b543229c0c51b28d97d3fe.RLOh7eUiqlNT1716949259773"></video>|
  


## 同步到工程内容
* 确认本次导入资源符合预期后，点击资源预览配置界面右上角同步到工程内容，即可在项目工程内容各资源分类中显示
<br>

## 本地资源直接使用

* 导入到工程内容的资源，可直接拖拽至主视口或对象管理器进行项目搭建（本地资源暂不支持动态调用加载）

|中文示例|英文示例|
|-----|-----|
|<video controls src="https://cdn.233xyx.com/athena/online/1f463e96cd2c488abfb5e3da71defd89.SW9cRZhBNEK91716949260849"></video>|<video controls src="https://cdn.233xyx.com/athena/online/f487c83168404219a576dc24ca154ccc.Gng0SxSJkv7F1716949261871"></video>|

<br>

## 资源上传途径

* 导入资源时在资源预览配置界面点击右上角资源上传按钮，本次导入的资源将在同步到工程内容的同时，进行上传。
* 工程内容中单选/多选资源后，点击工程内容右上角上传按钮，进行上传。
* 工程内容中选择某资源右键上传选项，进行上传。
* 发布游戏时自动将本地资源进行上传。

::: tip **注意：为减少因资源审核失败导致游戏发布失败的情况，请尽量在游戏开发过程中将确认符合使用需求的本地资源手动上传**
:::
<br>

## 创作者中心相关

* 开发者上传资源后，可在创作者中心的资源管理页面查看资源的审核状态，通过审核的资源将被打包，打包完成后可编辑资源的配置信息或公开资源

  ![](https://cdn.233xyx.com/1686550098361_374.png)
### 上传资源状态

* 资源被上传后，共可能显示下图五种状态
* 资源的正常上传流程为：检验中——审核中——打包中——可使用

![](https://cdn.233xyx.com/athena/online/7b90ea94a40b4ecaab73a41f20d3e062_12740286.webp)

* 当资源未通过校验或为通过审核时，资源状态变为“未通过审核”并在备注中注明对应原因，上传流程结束
![](https://cdn.233xyx.com/athena/online/a2d4a6683c324baf9904ad4bb16af2bf_12740287.webp)
