# 后处理

阅读本文预计 5 分钟 使用【后处理】给项目画面添加不同风格

【后处理】是一个提供游戏滤镜的对象，通过切换预设和自定义参数将画面调整为理想的效果。【后处理】并不支持叠加使用，场景中有且仅有一份生效。你可以在【对象管理器】的“世界对象”里找到。

![img](https://arkimg.ark.online/1700627336021-9.png)

## 自定义后处理

### 属性面板

在【对象管理器】中选中【后处理】，并在属性面板修改预设和属性。

![img](https://arkimg.ark.online/1700627336020-1.png)

- 预设效果
  -  后处理自身提供的7种预先配置好后处理效果的预设模板，切换模板可以快速应用不同的后处理效果。默认值为Default=0。在不同模板下你可以进一步修改后处理属性达到想要的效果。
  - 默认 Default = 0
    - ![img](https://arkimg.ark.online/1700627336020-2.png)
  - 梦境 Dreamy = 1
    - ![img](https://arkimg.ark.online/1700627336020-3.png)
  - 反差色 Contrast = 2
    - ![img](https://arkimg.ark.online/1700627336020-4.png)
  - 暖阳 WarmSunshine = 3
    - ![img](https://arkimg.ark.online/1700627336020-5.png)
  - 老照片 OldPhoto = 4
    - ![img](https://arkimg.ark.online/1700627336020-6.png)
  - 夜幕 Night = 5
    - ![img](https://arkimg.ark.online/1700627336020-7.png)
  - 鲜暖色 WarmContrast = 6
  - ![img](https://arkimg.ark.online/1700627336020-8.png)
- 泛光

修改该值可以调节镜头中泛光，值越大泛光越强。取值范围0 ~ 8，默认值为 1.5。
<video src="https://arkimg.ark.online/20231122-121605.mp4"></video>

- 全局饱和度

修改该值可以调节镜头颜色的饱和度，饱和度越高颜色越生动。取值范围0 ~ 2，默认值为 1.2。
<video src="https://arkimg.ark.online/20231122-121817.mp4"></video>


- 全局对比度

修改该值可以调节镜头颜色的对比度，对比度越高颜色越鲜明。取值范围0 ~ 5，默认值为 1。
<video src="https://arkimg.ark.online/20231122-122117.mp4"></video>


### 动态设置

【后处理】属性支持动态修改，可以通过脚本获取对象并调用接口。

```TypeScript
@Component
export default class NewScript extends Script {

    protected onStart(): void {
        if(SystemUtil.isClient()) {
            PostProcess.bloom= 1.5;
            PostProcess.saturation = 1.1;
            PostProcess.contrast = 1;
        }
    }
}
```

## 后处理配置

【后处理配置】包含【后处理】属性，作为数据层使用。【后处理】中通过`config`属性切换不同的后处理配置。

```TypeScript
@Component
export default class NewScript extends Script {

    protected onStart(): void {
        if(SystemUtil.isClient()) {

            let config1 = new PostProcessConfig();
            config1.bloomIntensity = 3;

            let config2 = new PostProcessConfig();
            config2.bloomIntensity = 1;

            InputUtil.onKeyDown(Keys.One, () => {
                PostProcess.config = config1;
            });

            InputUtil.onKeyDown(Keys.Two, () => {
                PostProcess.config = config2;
            });
        }
    }
}
```
