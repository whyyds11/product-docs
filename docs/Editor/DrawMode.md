# 绘制模式

::: tip **阅读本文预计 20 分钟。**

为了帮助开发者快速了解并使用绘制模式，本文主要包含以下 2 个内容：

1. 绘制模式简介
2. 绘制模式使用指南

:::

## 1. 绘制模式简介

### 1.1 绘制模式是什么

在工具栏中开启绘制模式后，选中的模型资源将跟随鼠标光标在主视口中移动。在主视口中单击左键，即可在光标位置处创建该模型；在主视口中长按左键并拖动，即可在拖动区域连续创建多个模型。

|中文示例|英文示例|
|-----|-----|
|<video controls src="https://cdn.233xyx.com/athena/online/8d6de33f18c04a36bb5af64b6f097455.mp4"></video>|<video controls src="https://cdn.233xyx.com/athena/online/2ba3999f45ad4db58e4adcda66e7c962.mp4"></video>|

### 1.2 绘制模式使用场景

在工程中，搭建一些简单重复性场景时，可以利用绘制模式来提高效率，比如树、栅栏、地砖等等。

|中文示例|英文示例|
|-----|-----|
|<video controls src="https://cdn.233xyx.com/athena/online/55310802f16742cea00306a3ce94245e.mp4"></video>|<video controls src="https://cdn.233xyx.com/athena/online/e5a1a76167bc49efa8dfe3a85d52a1cf.mp4"></video>|

### 1.3 绘制模式基础规则

- 仅静态模型资源支持使用绘制模式。
- 绘制模式下，非静态模型仍然可以通过常规的拖拽方式添加至场景中。

## 2. 绘制模式使用指南

### 2.1 选择绘制对象

- **概述**

  跟随鼠标光标在主视口中移动，想要在场景中创建的对象，称之为绘制对象。当前编辑器支持两种选择绘制对象的方式，分别是在**资源库**中选择和在**主视口**中选择。

- **在资源库中选择绘制对象**

  绘制模式下，在资源库中单击某一静态模型后，该模型会被设置为绘制对象，跟随鼠标光标在主视口中移动。

|中文示例|英文示例|
|-----|-----|
|<video controls src="">https://cdn.233xyx.com/athena/online/3299d09b34564ea2a5fb9fea500734a2.mp4</video>|<video controls src="">https://cdn.233xyx.com/athena/online/caad9283cd064e95833b35921789102f.mp4</video>|

- **在主视口中选择绘制对象**

  绘制模式下，右键选中主视口中的某一静态模型，在右键菜单中选择“设置为绘制对象”，将获取该静态模型资源，并设置为绘制对象，跟随鼠标光标在主视口中移动。若选中的对象有挂载的子级，则仅将光标选中的单个模型设置为绘制对象。

  <video controls src="https://cdn.233xyx.com/1678432324744_574.mp4"></video>

### 2.2 在场景中绘制

- **绘制单个模型**

  鼠标光标上有绘制对象时，在主视口中**单击左键**，将使用属性面板中配置的默认参数，在光标所在处创建该对象。

|中文示例|英文示例|
|-----|-----|
|<video controls src="">https://cdn.233xyx.com/athena/online/7b95cbb0d7bf423fa35946c4fbd9ee92.mp4</video>|<video controls src="">https://cdn.233xyx.com/athena/online/a6627867718e4e118ce858ab36abd329.mp4</video>|

- **绘制多个模型**

  方法一：鼠标拖动创建。鼠标光标上有绘制对象时，在主视口中**按住左键并拖动**，将出现一个**预定义区域**，松开左键后，在预定义区域连续创建多个对象。

|中文示例|英文示例|
|-----|-----|
|<video controls src="">https://cdn.233xyx.com/athena/online/1ce406ae1d704869960fb9b4e4ad2c52.mp4</video>|<video controls src="">https://cdn.233xyx.com/athena/online/529f394ef6c94d16878066e370d4cc40.mp4</video>|

  方法二：按住 Ctrl 拖动枢轴创建。鼠标光标上有绘制对象时，按住 ctrl 键，光标上的绘制对象将展示枢轴，可以通过拖动枢轴划定预定义区域。松开左键后，在预定义区域连续创建多个对象。
  <video controls src="https://cdn.233xyx.com/1678877575167_069.mp4"></video>

  若松开左键后，未松开 Ctrl 键，则创建对象后，会在新的绘制对象上展示枢轴，可继续拖动枢轴创建。
  <video controls src="https://cdn.233xyx.com/1678877574776_053.mp4"></video>

- **预测模型**

  在主视口中创建对象后，若鼠标光标在已创建对象包围盒的某个面上，则根据光标所在面的轴向，自动测算下一个摆放位置，并生成预测模型。

|中文示例|英文示例|
|-----|-----|
|<video controls src="">https://cdn.233xyx.com/athena/online/3a7ca04ef6384481bb581eb191247f68.mp4</video>|<video controls src="">https://cdn.233xyx.com/athena/online/a5cda49d3a33456bb6d4404ccf1762eb.mp4</video>|

  在已生成预测模型的情况下点击鼠标左键，则会在预测模型的位置处生成对象，同时鼠标光标上的绘制对象会自动生成在下一个预测模型的位置，然后出现新的预测模型。
  <video controls src="https://cdn.233xyx.com/1678877575192_067.mp4"></video>

  在光标不移动的情况下一直单击左键，则会沿着预测模型不断生成新的绘制对象。
  <video controls src="https://cdn.233xyx.com/1678877575081_427.mp4"></video>

### 2.3 移除绘制对象

点击鼠标右键，移除鼠标光标上的绘制对象。
