# UI 控件-广告按钮

**阅读本文大概需要 5 分钟**

本文概述了 UI 控件—广告按钮的各项属性以及使用方法。

## 什么是广告按钮？

**广告按钮**内部封装了广告播放功能，广告按钮的大部分样式是固定不可修改的，并且只有当其没有被遮挡并完整显示在屏幕范围内的时候才能点击播放广告。
- 变换/对齐/通用/渲染属性请见 [UI 控件的基础属性](https://docs.ark.online/UI/UIWidget-BaseProperties.html)
- 文本属性请见 [UI 控件-文本](https://docs.ark.online/UI/UIComponent-Text.html)
![](https://cdn.233xyx.com/online/jgWOpagPetoO1713506794210.png)
<video controls src="https://cdn.233xyx.com/online/yPqG1S21pSa81713506793496.mp4"></video>

## 广告按钮的功能说明

- 玩家在游戏中点击广告按钮能触发播放广告，并且包含两个事件onClose/onShow能够在即将播放广告之前和播放完成提供回调，提供当前是否有广告可以播放/玩家是否成功看完广告的信息。
- 广告按钮大部分有关表现层面的属性都不允许修改（包括控件大小、按钮样式及颜色、各项渲染属性都不允许修改），仅允许修改整体位置、对齐方式、可见性、可用性、Z系数以及广告文本部分，并且为了保持固定大小，广告按钮的对齐方式选择上下对齐/左右对齐/自适应不会生效。
  - 制作UI界面时，请注意应结合广告按钮的固定样式将界面设计得尽可能协调统一，该按钮的无色版资源在资源库ID为142733，制作界面其他按钮可以使用该资源。
- 请注意：广告按钮整体任何地方不要被任何实际可见的UI控件遮挡（包括被可见不可交互/修改渲染属性等UI控件遮挡）或超出屏幕可见范围，不符合要求的广告按钮将无法播放广告且无法触发任何事件（但能触发一条报错）。
![](https://cdn.233xyx.com/online/FDrACr5E6zuI1713506793043.png)
- 从开发者后台扫码进入测试游戏，不会播放真实广告，而是会播放一段测试广告。
- 注意必须在TS脚本中实际获取到广告按钮（例如执行至少一次onClose或者onShow）才能成功播放广告，仅单纯创建一个广告按钮不执行任何TS逻辑无法触发广告。

  
## 如何使用广告按钮？

- onShow会在向客户端请求到是否有广告可以播放的结果后（即isReady的值）触发，如果有广告可以播放，onShow会在拉起广告之前触发；如果5秒内没有请求到结果，则会再5秒后自动触发，并且isReady的参数值为False。
  - 如果玩家点击广告按钮后，此时并没有广告可以播放，会给玩家展示一个2秒的提示（仅移动端）。
- onClose会在用户关闭广告后触发，但请注意用户跳过广告也会触发onClose，是否应该发放奖励还需要参考isSuccess的参数值。
![](https://cdn.233xyx.com/online/2uQoUnbUzqnN1713511759294.png)
- 如果希望使用广告按钮实现广告播放功能可以参考以下写法：
```ts
    //创建广告按钮，注意其被任何可见性不为隐藏/折叠的UI遮挡时无法播放广告
    let adsbutton1=AdsButton.newObject(canvas)
    //在玩家点击广告按钮之后，即将播放广告之前触发onShow
    adsbutton1.onShow.add((isReady: boolean)=>{
        //可以根据isReady的值执行不同的逻辑，比如没有广告可以播放时弹出提示，有广告并播放的时候暂停怪物攻击
  			if (isReady) {
  				this.onShowReady();
  			}else{
  				this.onShowUnready();
  			}
    })         
    //在玩家关闭广告之后，触发onClose
    adsbutton1.onClose.add((isSuccess: boolean)=>{
        //可以根据isSuccess的值执行不同的逻辑，比如是否要给玩家发放奖励
  			if (isSuccess) {
  				this.onCloseSuccess();
  			}else{
  				this.onCloseFailure();
  			}
    })  
```
- 如果希望在没有创建广告按钮的时候就能查询到当前是否有可以播放的广告，可以使用AdsService.isReady进行查询，例如想要实现有广告可以播放才创建广告按钮的逻辑，可以参考以下写法：
  - 请注意使用AdsService.isReady查询是否有广告可以播放不是必须的前置步骤，可以不写，可以直接在AdsButton.onShow的回调中获取是否有广告可以播放。
```ts
    //可以在创建广告按钮之前检测目前是否有广告可以播放，如果不需要在创建广告按钮之前检测，可以不写这一步
    AdsService.isReady( (isReady) => {
        if (!isReady) {
            //这里执行没有广告可以播放的逻辑
            this.onShowUnready();
        }else{
            //这里执行有广告可以播放的逻辑，例如创建广告按钮
            //创建广告按钮，注意其被任何可见性不为隐藏/折叠的UI遮挡时无法播放广告
            let adsbutton1=AdsButton.newObject(canvas)
            //在玩家点击广告按钮之后，即将播放广告之前触发onShow
            adsbutton1.onShow.add((isReady: boolean)=>{
                //可以根据isReady的值执行不同的逻辑，比如没有广告可以播放时弹出提示，有广告并播放的时候暂停怪物攻击
          			if (isReady) {
          				this.onShowReady();
          			}else{
          				this.onShowUnready();
          			}
            })         
            //在玩家关闭广告之后，触发onClose
            adsbutton1.onClose.add((isSuccess: boolean)=>{
                //可以根据isSuccess的值执行不同的逻辑，比如是否要给玩家发放奖励
          			if (isSuccess) {
          				this.onCloseSuccess();
          			}else{
          				this.onCloseFailure();
          			}
            })  
        }
    }) 
```
