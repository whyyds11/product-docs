# 角色形象与换装

**阅读本文大概需要 40 分钟**

本文概述了角色的形象分类，每个形象如何进行换装，以及如何使用代码动态调整角色外观。

## 角色形象介绍

- 目前角色形象根据外观类型和功能划分为三大类，分别是：【基础人形形象】/【高级人形形象】/【多足形象】

  - 【基础人形形象】：是人形的整体形象，功能上只能切换整体外观效果，无法切换部位。但是他的性能相对较好，可以应用在大量使用的NPC和怪物等方面。
  - 【高级人形形象】：是更加完善得人形形象，功能上可以更换角色的服装（上衣、裤子、手套、鞋子），以及脸部效果（前发、后发、瞳孔、眉毛、睫毛、肤色）等等效果，主要应用在角色以及注重形象效果的NPC模型上，不宜大量同屏使用。
  - 【多足形象】：是非人形的整体形象，目前已经提供了多套资源分别为：猫、狗、鸡、牛、龙、鸭子。后续还会继续拓展形象需求。该类型的功能上与基础人形形象一致，只能修改整体外观效果，无法切换部位。主要应用在宠物和坐骑等方面。

## 角色换装方式

- 角色换装方式分为三种，分别是【角色属性面板换装】、【角色编辑器换装】以及【通过API进行动态换装】。
 - 【角色属性面板换装】：应用场景主要是在实例化NPC和怪物后，快速的调整角色形象外观。具体操作说明请见：[角色基础功能](https://docs-027.ark.online/Role/RoleBasicAbility.html)
 - 【角色编辑器换装】：角色编辑器是调整【高级人形形象】的工具，主要是调整较为详细的外观效果（包括：五官、服饰花纹、体型大小等等），以及预设出角色外观数据，方便后续使用API的动态调用外观数据等等。具体操作说明请见：[角色编辑工具](https://docs-027.ark.online/Editor/CharacterEditor.html#_1-2-%E8%A7%92%E8%89%B2%E7%BC%96%E8%BE%91%E5%B7%A5%E5%85%B7%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)
 - 【通过API进行动态换装】：使用API进行动态换装是游戏中比较常见的效果和手段。下面进行详细说明。

## 基础人形形象换装/多足形象换装

【基础人形形象】与【多足形象】功能上一致，都是只能进行整体更换外观效果，具体操作如下。

### 基础人形形象换装

首先我们需要找到需要更换的资源ID。

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/699f06fe08b545c298acbbec229be207_365221812.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/1aa5ff64685a4c70b23e62718f589e96_365221816.webp)|

在【本地资源库】的【角色/NPC】列表中找到【基础人形形象】。

然后选中比较心仪的一个资源，鼠标右键点击该资源对象，弹出列表。

在弹出列表中选择【复制资源ID】

然后开始编写以下脚本，注意要将刚刚复制过来的资源ID进行更换，然后挂载到场景中即可。

```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        //获取玩家角色
        let chara = Player.localPlayer.character
        //按下“1”键触发以下逻辑
        InputUtil.onKeyDown(Keys.One, () => {
            //设置V1的GUID，将刚才复制过的资源ID放到这里
            chara.description.base.wholeBody = "146035"
        });
        //按下“2”键触发以下逻辑
        InputUtil.onKeyDown(Keys.Two, () => {
            //设置V1的GUID，将刚才复制过的资源ID放到这里
            chara.description.base.wholeBody = "151006"
        });
        //按下“3”键触发以下逻辑
        InputUtil.onKeyDown(Keys.Three, () => {
            //设置V1的GUID，将刚才复制过的资源ID放到这里
            chara.description.base.wholeBody = "156952"
        });

    }
}
```

效果图：

<video controls src="https://cdn.233xyx.com/online/9SRLVATvoRRv1694158606115.mp4"></video>

### 多足形象换装

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/2f4d4036b2c7422c802c1771793b7409_365221813.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/1ddf41ce65aa4e6aa1c607238df55c21_365221817.webp)|

在【本地资源库】的【角色/NPC】列表中找到【多足形象】。

然后选中比较心仪的一个资源，鼠标右键点击该资源对象，弹出列表。

在弹出列表中选择【复制资源ID】

然后与【基础人形形象】的示例脚本一致，调整资源ID即可。

效果图：

<video controls src="https://cdn.233xyx.com/online/JjKOidyHliLf1694158606114.mp4"></video>

注意事项：
 - 如果多足形象发生抖动状况，是由于客户端修改形象后，没有同步到服务器，导致客户端与服务器的胶囊体大小不一致，从而进行拉扯。需要添加syncStyle()函数同步一下即可。

```ts
//按下“1”键触发以下逻辑
InputUtil.onKeyDown(Keys.One, () => {
    //设置多足形象的GUID，将刚才复制过的资源ID放到这里
    chara.description.base.wholeBody = "159610"
    //将外观数据同步到服务器
    chara.syncDescription();
});
```

- 多足形象默认没有动画功能，需要主动添加动画。

## 高级人形形象形象换装

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/a164a8e9a419463ba1338172c0ce5f50_365221814.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/2da64c96592d41dfbdeeed6badfb9db1_365221818.webp)|

切换高级人形形象与在角色编辑器内的操作一样，需要先切换角色设定的角色效果。

示例脚本：

```ts
//按下“1”键触发以下逻辑
InputUtil.onKeyDown(Keys.One, () => {
    //切换成高级人形形象：二次元成年女性
    chara.description.advance.base.characterSetting.characterTemplate = CharacterTemplate.AnimeFemale;
});
//按下“2”键触发以下逻辑
InputUtil.onKeyDown(Keys.Two, () => {
     //切换成高级人形形象：二次元成年男性
     chara.description.advance.base.characterSetting.characterTemplate = CharacterTemplate.AnimeMale;
});
//按下“3”键触发以下逻辑
InputUtil.onKeyDown(Keys.Three, () => {
     //切换成高级人形形象：美式卡通女性
     chara.description.advance.base.characterSetting.characterTemplate = CharacterTemplate.CartoonyFemale;
});
//按下“4”键触发以下逻辑
InputUtil.onKeyDown(Keys.Four, () => {
      //切换成高级人形形象：美式卡通男性
      chara.description.advance.base.characterSetting.characterTemplate = CharacterTemplate.CartoonyMale;
});
//按下“5”键触发以下逻辑
InputUtil.onKeyDown(Keys.Five, () => {
      //切换成高级人形形象：Lowpoly成年女性
      chara.description.advance.base.characterSetting.characterTemplate = CharacterTemplate.LowpolyAdultFemale;
});
//按下“6”键触发以下逻辑
InputUtil.onKeyDown(Keys.Six, () => {
      //切换成高级人形形象：Lowpoly成年男性
      chara.description.advance.base.characterSetting.characterTemplate = CharacterTemplate.LowpolyAdultMale;
});
//按下“7”键触发以下逻辑
InputUtil.onKeyDown(Keys.Seven, () => {
      //切换成高级人形形象：写实成年女性
      chara.description.advance.base.characterSetting.characterTemplate = CharacterTemplate.RealisticAdultFemale;
});
//按下“8”键触发以下逻辑
InputUtil.onKeyDown(Keys.Eight, () => {
      //切换成高级人形形象：写实成年男性
      chara.description.advance.base.characterSetting.characterTemplate = CharacterTemplate.RealisticAdultMale;
});
//按下“9”键触发以下逻辑
InputUtil.onKeyDown(Keys.Nine, () => {
      //切换成高级人形形象：无类型
      chara.description.advance.base.characterSetting.characterTemplate = CharacterTemplate.None;
});
```

效果图：

<video controls src="https://cdn.233xyx.com/online/XoiTkQ0C5Xg11694158606114.mp4"></video>

### 五官相关调整

#### 头部

属性说明：头部功能可以调整样式，进行整体调整。

示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置头部样式
chara.description.advance.headFeatures.head.style = ""
```

#### 眼睛

属性说明：眼睛功能可以细分为整体功能、眼角功能、瞳孔功能。

1. 整体功能包括：整体旋转、前后移动、左右移动、左右缩放、上下移动、上下缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//眼睛整体旋转调整
chara.description.advance.headFeatures.eyes.overall.eyeOverallRotation = 1;
//眼睛左右缩放调整
chara.description.advance.headFeatures.eyes.overall.eyeHorizontalScale = 1;
//眼睛左右移动调整
chara.description.advance.headFeatures.eyes.overall.eyeHorizontalShift = 1;
//眼睛前后移动调整
chara.description.advance.headFeatures.eyes.overall.eyeFrontalShift = 1;
//眼睛上下缩放调整
chara.description.advance.headFeatures.eyes.overall.eyeVerticalScale = 1;
//眼睛上下移动调整
chara.description.advance.headFeatures.eyes.overall.eyeVerticalShift = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/r6byywGcWaqI1694158606115.mp4"></video>

2. 眼角功能包括：内眼角左右移动、外眼角上下移动

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//内眼角左右移动调整
chara.description.advance.headFeatures.eyes.eyeCorners.innerEyeCornerHorizontalShift = 1;
//外眼角上下移动调整            
chara.description.advance.headFeatures.eyes.eyeCorners.outerEyeCornerVerticalShift = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/s4GQry78IjFj1694158606115.mp4"></video>

3. 瞳孔功能包括：瞳孔左右移动、瞳孔左右缩放、瞳孔上下移动、瞳孔上下缩放、上高光颜色、上高光样式、下高光颜色、下高光样式、左瞳孔颜色、右瞳孔颜色、瞳孔颜色、瞳孔样式

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//瞳孔左右缩放调整
chara.description.advance.headFeatures.eyes.pupils.pupilHorizontalScale = 0;
//瞳孔左右移动调整
chara.description.advance.headFeatures.eyes.pupils.pupilHorizontalShift = 0;
//瞳孔上下缩放调整
chara.description.advance.headFeatures.eyes.pupils.pupilVerticalScale = 0;
//瞳孔上下移动调整
chara.description.advance.headFeatures.eyes.pupils.pupilVerticalShift = 0;
//上高光颜色调整
chara.description.advance.makeup.coloredContacts.highlight.upperHighlightColor = new LinearColor(255,40,40);
//上高光样式调整
chara.description.advance.makeup.coloredContacts.highlight.upperHighlightStyle = "48030";
//下高光颜色调整
chara.description.advance.makeup.coloredContacts.highlight.lowerHighlightColor = new LinearColor(255,40,40);
//下高光样式调整
chara.description.advance.makeup.coloredContacts.highlight.lowerHighlightStyle = "";
//左瞳孔颜色调整
chara.description.advance.makeup.coloredContacts.style.leftPupilColor = new LinearColor(255,40,40);
//右瞳孔颜色调整
chara.description.advance.makeup.coloredContacts.style.rightPupilColor = new LinearColor(255,40,40);
//内瞳孔样式调整
chara.description.advance.makeup.coloredContacts.style.pupilStyle = "108742";
//内瞳孔颜色调整
chara.description.advance.makeup.coloredContacts.style.pupilColor = new LinearColor(0,0,0);
//瞳孔样式调整            
chara.description.advance.makeup.coloredContacts.decal.pupilStyle = "77769";
//瞳孔颜色调整          
chara.description.advance.makeup.coloredContacts.decal.pupilColor = new LinearColor(40,0,0);
//瞳孔大小缩放           
chara.description.advance.makeup.coloredContacts.decal.pupilSizeScale = 1.3;
//瞳孔左右位置调整            
chara.description.advance.makeup.coloredContacts.decal.pupilHorizontalPosition = 0;
//瞳孔上下位置调整            
chara.description.advance.makeup.coloredContacts.decal.pupilVerticalPosition = 0;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/ZfdHlaqBFHwy1694158606115.mp4"></video>

#### 嘴

嘴部功能可以细分为整体功能、嘴唇功能、嘴角功能。

1. 整体功能包括：前后移动、左右缩放、上下移动。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//嘴部整体前后移动调整
chara.description.advance.headFeatures.mouth.overall.mouthFrontalShift = 1;
//嘴部整体左右缩放调整
chara.description.advance.headFeatures.mouth.overall.mouthHorizontalScale = 1;
//嘴部整体上下移动调整
chara.description.advance.headFeatures.mouth.overall.mouthVerticalShift = 1;
```

2. 嘴唇功能包括：下嘴唇厚度、上嘴唇厚度。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//下嘴唇厚度调整
chara.description.advance.headFeatures.mouth.lips.lowerLipThickness = 1;
//上嘴唇厚度调整
chara.description.advance.headFeatures.mouth.lips.upperLipThickness = 1;
```

3. 嘴角功能包括：前后移动、上下移动。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//嘴角前后移动调整
chara.description.advance.headFeatures.mouth.mouthCorners.mouthCornerFrontalShift = 1;
//嘴角上下移动调整
chara.description.advance.headFeatures.mouth.mouthCorners.mouthCornerVerticalShift = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/oA87SsGRYNaF1694158606115.mp4"></video>

#### 鼻子

鼻子功能可以细分为整体功能、鼻梁功能、鼻尖功能、鼻翼功能。

1. 整体功能包括：前后移动、上下移动。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//鼻子整体前后移动调整
chara.description.advance.headFeatures.nose.overall.noseOverallFrontalShift = 1;
//鼻子整体上下移动调整
chara.description.advance.headFeatures.nose.overall.noseOverallVerticalShift = 1;
```

2. 鼻梁功能包括：前后移动、左右缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//鼻梁前后移动调整
chara.description.advance.headFeatures.nose.noseBridge.noseBridgeFrontalShift = 1;
//鼻梁左右缩放调整
chara.description.advance.headFeatures.nose.noseBridge.noseBridgeHorizontalScale = 1;
```

3. 鼻尖功能包括：上下移动。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//鼻尖上下移动调整
chara.description.advance.headFeatures.nose.noseTip.noseTipVerticalShift = 1;
```

4. 鼻翼功能包括：前后移动、上下移动、左右缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//鼻翼前后移动调整
chara.description.advance.headFeatures.nose.nostrils.nostrilForntalShift = 1;
//鼻翼上下移动调整
chara.description.advance.headFeatures.nose.nostrils.nostrilVerticalShift = 1;
//鼻翼左右缩放调整
chara.description.advance.headFeatures.nose.nostrils.nostrilHorizontalScale = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/iLCDXQWsx1xu1694158606115.mp4"></video>

#### 眉毛

眉毛功能包括：眉间前后移动、眉头上下移动、眉尾上下移动、眉毛前后移动、眉毛左右移动、眉毛上下移动、眉毛整体旋转移动。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//眉间前后移动调整
chara.description.advance.headFeatures.eyebrows.eyebrowBridgeFrontalShift = 1;
//眉头上下移动调整
chara.description.advance.headFeatures.eyebrows.eyebrowInnerVerticalShift = 1;
//眉尾上下移动调整
chara.description.advance.headFeatures.eyebrows.eyebrowOuterVerticalShift = 1;
//眉毛前后移动调整
chara.description.advance.headFeatures.eyebrows.eyebrowFrontalShift = 1;
//眉毛左右移动调整
chara.description.advance.headFeatures.eyebrows.eyebrowHorizontalShift = 1;
//眉毛上下移动调整
chara.description.advance.headFeatures.eyebrows.eyebrowVerticalShift = 1;
//眉毛整体旋转调整
chara.description.advance.headFeatures.eyebrows.eyebrowOverallRotation = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/Q9iXB7AFpbxy1694158606115.mp4"></video>

#### 耳朵

耳朵功能包括：前后旋转、左右旋转、整体缩放、上部缩放、下部缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//耳朵前后旋转调整
chara.description.advance.headFeatures.ears.earFrontalRotation = 1;
//耳朵左右旋转调整
chara.description.advance.headFeatures.ears.earHorizontalRotation = 1;
//耳朵整体缩放调整
chara.description.advance.headFeatures.ears.earLowerScale = 1;
//耳朵上部缩放调整
chara.description.advance.headFeatures.ears.earUpperScale = 1;
//耳朵下部缩放调整
chara.description.advance.headFeatures.ears.earOverallScale = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/I3XPoPdCnjib1694158606115.mp4"></video>

#### 脸型

脸部功能可以细分为脸颊功能、颧骨功能、下巴功能、下颚功能、面部功能。

1. 脸颊功能包括：前后移动、左右缩放、上下移动。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//脸颊前后移动调整
chara.description.advance.headFeatures.faceShape.cheek.cheekFrontalShift = 1;
//脸颊左右缩放调整
chara.description.advance.headFeatures.faceShape.cheek.cheekHorizontalScale = 1;
//脸颊上下移动调整
chara.description.advance.headFeatures.faceShape.cheek.cheekVerticalShift = 1;
```

2. 颧骨功能包括：前后移动、左右缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//颧骨前后移动调整
chara.description.advance.headFeatures.faceShape.cheekbone.cheekboneFrontalShift = 1;
//颧骨左右缩放调整
chara.description.advance.headFeatures.faceShape.cheekbone.cheekboneHorizontalScale = 1;
```

3. 下巴功能包括：下巴前后移动、下巴尖前后移动、下巴尖左右缩放、下巴尖上下移动。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//下巴前后移动调整
chara.description.advance.headFeatures.faceShape.chin.chinFrontalShift = 1;
//下巴尖前后移动调整
chara.description.advance.headFeatures.faceShape.chin.chinTipFrontalShift = 1;
//下巴尖左右缩放调整
chara.description.advance.headFeatures.faceShape.chin.chinTipHorizontalScale = 1;
//下巴尖上下移动调整
chara.description.advance.headFeatures.faceShape.chin.chinTipVerticalShift = 1;
```

4. 下颚功能包括：前后移动、左右缩放、上下移动、圆度。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//下颚前后移动调整
chara.description.advance.headFeatures.faceShape.jawline.jawFrontalShift = 1;
//下颚左右缩放调整
chara.description.advance.headFeatures.faceShape.jawline.jawHorizontalScale = 1;
//下颚圆度调整
chara.description.advance.headFeatures.faceShape.jawline.jawlineRoundness = 1;
//下颚上下移动调整
chara.description.advance.headFeatures.faceShape.jawline.jawlineVerticalShift = 1;
```

5. 面部功能包括：面部左右缩放、下半脸前后移动、下半脸左右缩放、上半脸整体缩放、上半脸前后移动、上半脸上下移动。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//面部左右缩放调整
chara.description.advance.headFeatures.faceShape.overall.faceHorizontalScale = 1;
//下半脸前后移动调整
chara.description.advance.headFeatures.faceShape.overall.lowerFaceFrontalShift = 1;
//下半脸左右缩放调整
chara.description.advance.headFeatures.faceShape.overall.lowerFaceHorizontalScale = 1;
//上半脸前后移动调整
chara.description.advance.headFeatures.faceShape.overall.upperFaceFrontalShift = 1;
//上半脸整体缩放调整
chara.description.advance.headFeatures.faceShape.overall.upperFaceOverallScale = 1;
//上半脸上下移动调整
chara.description.advance.headFeatures.faceShape.overall.upperFaceVerticalShift = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/XQvjwW0gdabS1694158606115.mp4"></video>

#### 表情

表情功能只有切换角色的表情。表情包括：默认、微笑、开心、伤心、生气、尴尬、笑、调皮、可爱、疑惑。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//表情切换调整为：默认
chara.description.advance.headFeatures.expressions.changeExpression = 0;
//表情切换调整为：微笑
chara.description.advance.headFeatures.expressions.changeExpression = 1;
//表情切换调整为：开心
chara.description.advance.headFeatures.expressions.changeExpression = 2;
//表情切换调整为：伤心
chara.description.advance.headFeatures.expressions.changeExpression = 3;
//表情切换调整为：生气
chara.description.advance.headFeatures.expressions.changeExpression = 4;
//表情切换调整为：尴尬
chara.description.advance.headFeatures.expressions.changeExpression = 5;
//表情切换调整为：笑
chara.description.advance.headFeatures.expressions.changeExpression = 6;
//表情切换调整为：调皮
chara.description.advance.headFeatures.expressions.changeExpression = 7;
//表情切换调整为：可爱
chara.description.advance.headFeatures.expressions.changeExpression = 8;
//表情切换调整为：疑惑
chara.description.advance.headFeatures.expressions.changeExpression = 9;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/yAJm88aMnPSv1694158606115.mp4"></video>

### 化妆调整

#### 腮红

腮红功能包括：腮红样式、腮红颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置腮红样式效果
chara.description.advance.makeup.blush.blushStyle = "48030";
//设置腮红颜色
chara.description.advance.makeup.blush.blushColor = new LinearColor(255,40,40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/dK9umrjishDq1694158606114.mp4"></video>

#### 睫毛

睫毛功能包括：睫毛样式、睫毛颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置睫毛样式效果
chara.description.advance.makeup.eyelashes.eyelashStyle = "48030";
//设置睫毛颜色
chara.description.advance.makeup.eyelashes.eyelashColor = new LinearColor(255,40,40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/80kDqf7FnM2S1694158606114.mp4"></video>

#### 口红

口红功能包括：口红样式、口红颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置口红样式效果
chara.description.advance.makeup.lipstick.lipstickStyle = "48030";
//设置口红颜色
chara.description.advance.makeup.lipstick.lipstickColor = new LinearColor(255,40,40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/XOdqEEYFB5xQ1694158606114.mp4"></video>

#### 身体贴花

贴花功能：主要是在某个位置贴上附着于表面的花纹，但是我们要确定贴花的位置。进行贴花的调整，调整范围包括：贴花样式、贴花颜色、贴花左右移动、贴花上下移动、贴花整体缩放、贴花整体旋转。

身体贴花：是显示在角色皮肤上的图案，只有皮肤部分会显示花纹，如果角色穿着衣服，可能会看不到身体贴花的效果。

部位说明：身体会有多个部位进行贴花，该部位是由美术资源控制，无法进行增减。所以我们只能通过代码bodyDecal.length获取部位数量，或者通过提前在角色编辑器中观察该资源的部位数量。然后再通过代码调整每个部位的贴花效果，其中bodyDecal[0]函数中，[0]代表的就是部位位置，我们根据获取到的部位数量进行修改。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//打印获取角色身体部位数量
console.log(chara.description.advance.makeup.bodyDecal.length);
//设置身体贴花样式
chara.description.advance.makeup.bodyDecal[0].decalStyle = "32099"; 
//设置身体贴花颜色
chara.description.advance.makeup.bodyDecal[0].decalColor = new LinearColor(255,40,40); 
//设置身体贴花左右移动
chara.description.advance.makeup.bodyDecal[0].decalHorizontalShift = 0; 
//设置身体贴花整体旋转
chara.description.advance.makeup.bodyDecal[0].decalOverallRotation = 0; 
//设置身体贴花整体缩放
chara.description.advance.makeup.bodyDecal[0].decalOverallScale = 10; 
//设置身体贴花样式
chara.description.advance.makeup.bodyDecal[1].decalStyle = "32099"; 
//设置身体贴花上下移动
chara.description.advance.makeup.bodyDecal[0].decalVerticalShift = 0; 
//设置身体贴花颜色
chara.description.advance.makeup.bodyDecal[1].decalColor = new LinearColor(40,255,40);
//设置身体贴花整体缩放
chara.description.advance.makeup.bodyDecal[1].decalOverallScale = 10; 
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/vCkOMDRhXRha1694158606114.mp4"></video>

#### 眼影

眼影功能包括：眼影样式、眼影颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置眼影样式效果
chara.description.advance.makeup.eyeShadow.eyeshadowStyle = "48030"; 
//设置眼影颜色
chara.description.advance.makeup.eyeShadow.eyeshaowColor = new LinearColor(255,40,40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/QSh91diNNTLZ1694158606115.mp4"></video>

#### 脸部贴花

贴花功能：主要是在某个位置贴上附着于表面的花纹，但是我们要确定贴花的位置。进行贴花的调整，调整范围包括：贴花样式、贴花颜色、贴花左右移动、贴花上下移动、贴花整体缩放、贴花整体旋转。

脸部贴花：是显示在角色脸部上的图案，只在脸部会显示花纹，如果角色佩戴面具等，可能会看不到脸部贴花的效果。

部位说明：脸部会有多个部位进行贴花，该部位是由美术资源控制，无法进行增减。所以我们只能通过代码faceDecal.length获取部位数量，或者通过提前在角色编辑器中观察该资源的部位数量。然后再通过代码调整每个部位的贴花效果，其中faceDecal[0]函数中，[0]代表的就是部位位置，我们根据获取到的部位数量进行修改。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置脸部贴花颜色
chara.description.advance.makeup.faceDecal[0].decalColor = new LinearColor(255,40,40);
//设置脸部贴花左右移动
chara.description.advance.makeup.faceDecal[0].decalHorizontalShift = -0.1; 
//设置脸部贴花整体旋转
chara.description.advance.makeup.faceDecal[0].decalOverallRotation = 15; 
//设置脸部贴花整体缩放
chara.description.advance.makeup.faceDecal[0].decalOverallScale = 10; 
//设置脸部贴花样式
chara.description.advance.makeup.faceDecal[0].decalStyle = "32099"; 
//设置脸部贴花上下移动
chara.description.advance.makeup.faceDecal[0].decalVerticalShift = 0; 
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/oZyjq0Xatoql1694158606114.mp4"></video>

#### 头皮贴花

贴花功能：主要是在某个位置贴上附着于表面的花纹，但是我们要确定贴花的位置。进行贴花的调整，调整范围包括：贴花样式、贴花颜色、贴花左右移动、贴花上下移动、贴花整体缩放、贴花整体旋转。

头皮贴花：主要显示为头皮效果，普遍应用在写实风格的角色头顶上。

部位说明：暂无其他部位，只使用faceDecal[0]即可。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置头部贴花颜色
chara.description.advance.makeup.headDecal[0].decalColor = new LinearColor(255,40,40);
//设置头部贴花左右移动
chara.description.advance.makeup.headDecal[0].decalHorizontalShift = -0.1; 
//设置头部贴花整体旋转
chara.description.advance.makeup.headDecal[0].decalOverallRotation = 15; 
//设置头部贴花整体缩放
chara.description.advance.makeup.headDecal[0].decalOverallScale = 10; 
//设置头部贴花样式
chara.description.advance.makeup.headDecal[0].decalStyle = "32099"; 
//设置头部贴花上下移动
chara.description.advance.makeup.headDecal[0].decalVerticalShift = 0; 
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/kCKGSr850Lyd1694158606115.mp4"></video>

#### 肤色

肤色功能：就是调整角色的皮肤颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置肤色
chara.description.advance.makeup.skinTone.skinColor = new LinearColor(255,40,40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/LfIjnSkKrdl91694158606114.mp4"></video>

### 头发调整

#### 前发

前发功能：可以细分为前发功能、头饰图案功能、头饰纹理功能、高光功能。头饰功能是部分头发样式携带的功能。比如帽子，发卡等装饰物。然后我们可以通过代码改变装饰物的效果。

头饰说明：前发资源会根据不同的资源存在不同数量的头饰部位，该头饰部位是由美术资源控制，无法进行增减。所以我们只能通过代码accessories.length获取头饰数量，或者通过提前在角色编辑器中观察该资源的头饰数量。然后再通过代码调整每个头饰的效果，其中accessories[0]函数中，[0]代表的就是头饰位置，我们根据获取到的头饰数量进行修改。

1. 前发功能包括：前发样式、前发颜色、渐变程度、渐变颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置前发样式
chara.description.advance.hair.frontHair.style = "";
//设置前发颜色
chara.description.advance.hair.frontHair.color.color = new LinearColor(255, 40, 40);  
//设置前发渐变程度
chara.description.advance.hair.frontHair.color.gradientArea = 1;
//设置前发渐变颜色
chara.description.advance.hair.frontHair.color.gradientColor = new LinearColor(255, 40, 40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/gK5Ixb9iywj51694158606115.mp4"></video>

2. 头饰图案功能包括：头饰颜色、图案样式、图案颜色、图案旋转、图案缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//打印头饰部位
console.log(chara.description.advance.hair.frontHair.accessories.length);
//设置头饰颜色
chara.description.advance.hair.frontHair.accessories[0].color.accessoryColor = new LinearColor(255, 40, 40);
//设置头饰图案样式
chara.description.advance.hair.frontHair.accessories[0].design.designStyle = "";
//设置头饰图案旋转
chara.description.advance.hair.frontHair.accessories[0].design.designRotation = 1;
//设置头饰图案颜色
chara.description.advance.hair.frontHair.accessories[0].design.designColor = new LinearColor(255, 40, 40);
//设置头饰图案缩放
chara.description.advance.hair.frontHair.accessories[0].design.designScale = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/qRcfRuv5ysul1694158606115.mp4"></video>

3. 头饰纹理功能包括：纹理样式、纹理颜色、纹理左右缩放、纹理上下缩放、纹理旋转、纹理显示程度。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置头饰纹理颜色
chara.description.advance.hair.frontHair.accessories[0].pattern.patternColor = new LinearColor(255, 40, 40);
//设置头饰纹理左右缩放
chara.description.advance.hair.frontHair.accessories[0].pattern.patternHorizontalScale = 1;
//设置头饰纹理旋转
chara.description.advance.hair.frontHair.accessories[0].pattern.patternRotation = 1;
//设置头饰纹理样式
chara.description.advance.hair.frontHair.accessories[0].pattern.patternStyle = "";
//设置头饰纹理上下缩放
chara.description.advance.hair.frontHair.accessories[0].pattern.patternVerticalScale = 1;
//设置头饰纹理显示程度
chara.description.advance.hair.frontHair.accessories[0].pattern.patternVisibility = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/ZYRMJLEREfLM1694158606115.mp4"></video>

4. 高光功能包括：高光样式。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置前发高光样式
chara.description.advance.hair.frontHair.highlight.highlightStyle = "";
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/Phil7MAk4rn61694158606115.mp4"></video>

#### 后发

后发功能与前发功能基本一致，可以细分为后发功能、头饰图案功能、头饰纹理功能、高光功能。头饰功能是部分头发样式携带的功能。比如帽子，发卡等装饰物。然后我们可以通过代码改变装饰物的效果。

头饰说明：后发资源会根据不同的资源存在不同数量的头饰部位，该头饰部位是由美术资源控制，无法进行增减。所以我们只能通过代码accessories.length获取头饰数量，或者通过提前在角色编辑器中观察该资源的头饰数量。然后再通过代码调整每个头饰的效果，其中accessories[0]函数中，[0]代表的就是头饰位置，我们根据获取到的头饰数量进行修改。

1. 后发功能包括：后发样式、后发颜色、渐变程度、渐变颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置后发样式
chara.description.advance.hair.backHair.style = "";
//设置后发颜色
chara.description.advance.hair.backHair.color.color = new LinearColor(255, 40, 40);  
//设置后发渐变程度
chara.description.advance.hair.backHair.color.gradientArea = 1;
//设置后发渐变颜色
chara.description.advance.hair.backHair.color.gradientColor = new LinearColor(255, 40, 40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/4kksGgL6E8SW1694158606115.mp4"></video>

2. 头饰图案功能包括：头饰颜色、图案样式、图案颜色、图案旋转、图案缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//打印头饰部位
console.log(chara.description.advance.hair.backHair.accessories.length);
//设置头饰颜色
chara.description.advance.hair.backHair.accessories[0].color.accessoryColor = new LinearColor(255, 40, 40);
//设置头饰图案样式
chara.description.advance.hair.backHair.accessories[0].design.designStyle = "";
//设置头饰图案旋转
chara.description.advance.hair.backHair.accessories[0].design.designRotation = 1;
//设置头饰图案颜色
chara.description.advance.hair.backHair.accessories[0].design.designColor = new LinearColor(255, 40, 40);
//设置头饰图案缩放
chara.description.advance.hair.backHair.accessories[0].design.designScale = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/daBOn1U5Joep1694158606115.mp4"></video>

3. 头饰纹理功能包括：纹理样式、纹理颜色、纹理左右缩放、纹理上下缩放、纹理旋转、纹理显示程度。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置头饰纹理颜色
chara.description.advance.hair.backHair.accessories[0].pattern.patternColor = new LinearColor(255, 40, 40);
//设置头饰纹理左右缩放
chara.description.advance.hair.backHair.accessories[0].pattern.patternHorizontalScale = 1;
//设置头饰纹理旋转
chara.description.advance.hair.backHair.accessories[0].pattern.patternRotation = 1;
//设置头饰纹理样式
chara.description.advance.hair.backHair.accessories[0].pattern.patternStyle = "";
//设置头饰纹理上下缩放
chara.description.advance.hair.backHair.accessories[0].pattern.patternVerticalScale = 1;
//设置头饰纹理显示程度
chara.description.advance.hair.backHair.accessories[0].pattern.patternVisibility = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/YSWxsaUmucnj1694158606115.mp4"></video>

4. 高光功能包括：高光样式。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置后发高光样式
chara.description.advance.hair.backHair.highlight.highlightStyle = "";
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/Jj0eCRDp9N9t1694158606115.mp4"></video>

### 服饰调整

#### 上衣

上衣功能：可以细分为整体功能、区域图案功能、区域纹理功能。

区域说明：上衣资源会根据不同的资源存在不同数量的装饰部位，该装饰部位是由美术资源控制，无法进行增减。所以我们只能通过代码part.length获取装饰数量，或者通过提前在角色编辑器中观察该资源的装饰数量。然后再通过代码调整每个装饰的效果，其中part[0]函数中，[0]代表的就是装饰位置，我们根据获取到的装饰数量进行修改。

1. 整体功能包括：上衣样式、区域颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//打印上衣部位
console.log(chara.description.advance.clothing.upperCloth.part.length);
//设置上衣样式
chara.description.advance.clothing.upperCloth.style = "111307";    
//设置上衣区域[0]的颜色
chara.description.advance.clothing.upperCloth.part[0].color.areaColor = new LinearColor(255, 40, 40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/n8ytFp3VMxpZ1694158606114.mp4"></video>

2. 区域图案功能包括：图案样式、图案颜色、图案旋转。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置上衣区域[0]的图案样式
chara.description.advance.clothing.upperCloth.part[0].design.designStyle = "32104";
//设置上衣区域[0]的图案颜色
chara.description.advance.clothing.upperCloth.part[0].design.designColor = new LinearColor(255, 40, 40);
//设置上衣区域[0]的图案旋转
chara.description.advance.clothing.upperCloth.part[0].design.designRotation = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/MSWjGyOvkF8n1694158606114.mp4"></video>

3. 区域纹理功能包括：纹理样式、纹理颜色、纹理左右缩放、纹理上下缩放、纹理旋转、纹理显示程度。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置上衣区域[0]的纹理样式
chara.description.advance.clothing.upperCloth.part[0].pattern.patternStyle = "25481";
//设置上衣区域[0]的纹理颜色
chara.description.advance.clothing.upperCloth.part[0].pattern.patternColor = new LinearColor(255, 40, 40);
//设置上衣区域[0]的纹理左右缩放
chara.description.advance.clothing.upperCloth.part[0].pattern.patternHorizontalScale = 1;
//设置上衣区域[0]的纹理旋转
chara.description.advance.clothing.upperCloth.part[0].pattern.patternRotation = 1;
//设置上衣区域[0]的纹理上下缩放
chara.description.advance.clothing.upperCloth.part[0].pattern.patternVerticalScale = 1;
//设置上衣区域[0]的纹理显示程度
chara.description.advance.clothing.upperCloth.part[0].pattern.patternVisibility = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/9GGeFDbus5gm1694158606114.mp4"></video>

#### 下衣

下衣功能：可以细分为整体功能、区域图案功能、区域纹理功能。

区域说明：下衣资源会根据不同的资源存在不同数量的装饰部位，该装饰部位是由美术资源控制，无法进行增减。所以我们只能通过代码part.length获取装饰数量，或者通过提前在角色编辑器中观察该资源的装饰数量。然后再通过代码调整每个装饰的效果，其中part[0]函数中，[0]代表的就是装饰位置，我们根据获取到的装饰数量进行修改。

1. 整体功能包括：下衣样式、区域颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//打印下衣部位
console.log(chara.description.advance.clothing.lowerCloth.part.length);
//设置下衣样式
chara.description.advance.clothing.lowerCloth.style = "63650";    
//设置下衣区域[0]的颜色
chara.description.advance.clothing.lowerCloth.part[0].color.areaColor = new LinearColor(255, 40, 40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/vDdop0wmdQq21694158606114.mp4"></video>

2. 区域图案功能包括：图案样式、图案颜色、图案旋转。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置下衣区域[0]的图案样式
chara.description.advance.clothing.lowerCloth.part[0].design.designStyle = "32104";
//设置下衣区域[0]的图案颜色
chara.description.advance.clothing.lowerCloth.part[0].design.designColor = new LinearColor(255, 40, 40);
//设置下衣区域[0]的图案旋转
chara.description.advance.clothing.lowerCloth.part[0].design.designRotation = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/yG7Q06XuJkDv1694158606114.mp4"></video>

3. 区域纹理功能包括：纹理样式、纹理颜色、纹理左右缩放、纹理上下缩放、纹理旋转、纹理显示程度。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置下衣区域[0]的纹理样式
chara.description.advance.clothing.lowerCloth.part[0].pattern.patternStyle = "25481";
//设置下衣区域[0]的纹理颜色
chara.description.advance.clothing.lowerCloth.part[0].pattern.patternColor = new LinearColor(255, 40, 40);
//设置下衣区域[0]的纹理左右缩放
chara.description.advance.clothing.lowerCloth.part[0].pattern.patternHorizontalScale = 1;
//设置下衣区域[0]的纹理旋转
chara.description.advance.clothing.lowerCloth.part[0].pattern.patternRotation = 1;
//设置下衣区域[0]的纹理上下缩放
chara.description.advance.clothing.lowerCloth.part[0].pattern.patternVerticalScale = 1;
//设置下衣区域[0]的纹理显示程度
chara.description.advance.clothing.lowerCloth.part[0].pattern.patternVisibility = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/jbro9uEJOgxK1694158606114.mp4"></video>

#### 手套

手套功能：可以细分为整体功能、区域图案功能、区域纹理功能。

区域说明：手套资源会根据不同的资源存在不同数量的装饰部位，该装饰部位是由美术资源控制，无法进行增减。所以我们只能通过代码part.length获取装饰数量，或者通过提前在角色编辑器中观察该资源的装饰数量。然后再通过代码调整每个装饰的效果，其中part[0]函数中，[0]代表的就是装饰位置，我们根据获取到的装饰数量进行修改。

1. 整体功能包括：手套样式、区域颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//打印手套部位
console.log(chara.description.advance.clothing.gloves.part.length);
//设置手套样式
chara.description.advance.clothing.gloves.style = "98595";    
//设置手套区域[0]的颜色
chara.description.advance.clothing.gloves.part[0].color.areaColor = new LinearColor(255, 40, 40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/rOkAaFOjva1S1694158606114.mp4"></video>

2. 区域图案功能包括：图案样式、图案颜色、图案旋转。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置手套区域[0]的图案样式
chara.description.advance.clothing.gloves.part[0].design.designStyle = "32104";
//设置手套区域[0]的图案颜色
chara.description.advance.clothing.gloves.part[0].design.designColor = new LinearColor(255, 40, 40);
//设置手套区域[0]的图案旋转
chara.description.advance.clothing.gloves.part[0].design.designRotation = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/CxB9PEyb3aZZ1694158606114.mp4"></video>

3. 区域纹理功能包括：纹理样式、纹理颜色、纹理左右缩放、纹理上下缩放、纹理旋转、纹理显示程度。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置手套区域[0]的纹理样式
chara.description.advance.clothing.gloves.part[0].pattern.patternStyle = "25481";
//设置手套区域[0]的纹理颜色
chara.description.advance.clothing.gloves.part[0].pattern.patternColor = new LinearColor(255, 40, 40);
//设置手套区域[0]的纹理左右缩放
chara.description.advance.clothing.gloves.part[0].pattern.patternHorizontalScale = 1;
//设置手套区域[0]的纹理旋转
chara.description.advance.clothing.gloves.part[0].pattern.patternRotation = 1;
//设置手套区域[0]的纹理上下缩放
chara.description.advance.clothing.gloves.part[0].pattern.patternVerticalScale = 1;
//设置手套区域[0]的纹理显示程度
chara.description.advance.clothing.gloves.part[0].pattern.patternVisibility = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/uiPMHhgh5ubr1694158606114.mp4"></video>

#### 鞋子

鞋子功能：可以细分为整体功能、区域图案功能、区域纹理功能。

区域说明：鞋子资源会根据不同的资源存在不同数量的装饰部位，该装饰部位是由美术资源控制，无法进行增减。所以我们只能通过代码part.length获取装饰数量，或者通过提前在角色编辑器中观察该资源的装饰数量。然后再通过代码调整每个装饰的效果，其中part[0]函数中，[0]代表的就是装饰位置，我们根据获取到的装饰数量进行修改。

1. 整体功能包括：鞋子样式、区域颜色。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//打印鞋子部位
console.log(chara.description.advance.clothing.shoes.part.length);
//设置鞋子样式
chara.description.advance.clothing.shoes.style = "131788";    
//设置鞋子区域[0]的颜色
chara.description.advance.clothing.shoes.part[0].color.areaColor = new LinearColor(255, 40, 40);
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/4p3vYPFALeum1694158606114.mp4"></video>

2. 区域图案功能包括：图案样式、图案颜色、图案旋转。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置鞋子区域[0]的图案样式
chara.description.advance.clothing.shoes.part[0].design.designStyle = "32104";
//设置鞋子区域[0]的图案颜色
chara.description.advance.clothing.shoes.part[0].design.designColor = new LinearColor(255, 40, 40);
//设置鞋子区域[0]的图案旋转
chara.description.advance.clothing.shoes.part[0].design.designRotation = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/17hiolhoRGtA1694158606114.mp4"></video>

3. 区域纹理功能包括：纹理样式、纹理颜色、纹理左右缩放、纹理上下缩放、纹理旋转、纹理显示程度。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置鞋子区域[0]的纹理样式
chara.description.advance.clothing.shoes.part[0].pattern.patternStyle = "25481";
//设置鞋子区域[0]的纹理颜色
chara.description.advance.clothing.shoes.part[0].pattern.patternColor = new LinearColor(255, 40, 40);
//设置鞋子区域[0]的纹理左右缩放
chara.description.advance.clothing.shoes.part[0].pattern.patternHorizontalScale = 1;
//设置鞋子区域[0]的纹理旋转
chara.description.advance.clothing.shoes.part[0].pattern.patternRotation = 1;
//设置鞋子区域[0]的纹理上下缩放
chara.description.advance.clothing.shoes.part[0].pattern.patternVerticalScale = 1;
//设置鞋子区域[0]的纹理显示程度
chara.description.advance.clothing.shoes.part[0].pattern.patternVisibility = 1;
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/YhhYrR3JbiPC1694158606114.mp4"></video>

### 体型调整

高级人形形象体型是可以通过【角色编辑器】提前调整的，也可以通过脚本进行动态调整。

#### 头部

头部功能包括：整体缩放、左右缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置头部左右缩放
chara.description.advance.headFeatures.head.headHorizontalScale = 1
//设置头部整体缩放
chara.description.advance.headFeatures.head.headOverallScale = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/jGCaXu2U013O1694158606115.mp4"></video>

#### 身体

身体功能包括：整体高度缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置身高
chara.description.advance.bodyFeatures.body.height = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/wqHinnMso2IX1694158606115.mp4"></video>

#### 脖子

脖子功能包括：前后缩放、左右缩放、上下缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置脖子前后缩放
chara.description.advance.bodyFeatures.neck.neckFrontalScale = 1
//设置脖子左右缩放
chara.description.advance.bodyFeatures.neck.neckHorizontalScale = 1
//设置脖子上下缩放
chara.description.advance.bodyFeatures.neck.neckVerticalScale = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/jGADeQe44no01694158606115.mp4"></video>

#### 胸腔

胸腔功能包括：前后缩放、左右缩放、上下缩放

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置胸腔前后缩放
chara.description.advance.bodyFeatures.chest.chestFrontalScale = 1
//设置胸腔左右缩放
chara.description.advance.bodyFeatures.chest.chestHorizontalScale = 1
//设置胸腔上下缩放
chara.description.advance.bodyFeatures.chest.chestVerticalScale = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/AMVeDbMefeuQ1694158606115.mp4"></video>

#### 胸部

胸部功能包括：左右缩放、长度缩放、左右缩放、上下缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置胸部左右缩放
chara.description.advance.bodyFeatures.breast.breastHorizontalShift = 1
//设置胸部长度缩放
chara.description.advance.bodyFeatures.breast.breastLength = 1
//设置胸部左右缩放
chara.description.advance.bodyFeatures.breast.breastOverallScale = 1
//设置胸部上下缩放
chara.description.advance.bodyFeatures.breast.breastVerticalShift = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/c7iZgCUQoTOm1694158606115.mp4"></video>

#### 肋部

肋部功能包括：前后缩放、左右缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置肋部前后缩放
chara.description.advance.bodyFeatures.ribs.ribFrontalScale = 1
//设置肋部左右缩放
chara.description.advance.bodyFeatures.ribs.ribHorizontalScale = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/yX1WwywFW5il1694158606115.mp4"></video>

#### 腰部

腰部功能包括：前后缩放、左右缩放、上下缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置腰部前后缩放
chara.description.advance.bodyFeatures.waist.waistFrontalScale = 1
//设置腰部左右缩放
chara.description.advance.bodyFeatures.waist.waistHorizontalScale = 1
//设置腰部上下缩放
chara.description.advance.bodyFeatures.waist.waistVerticalScale = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/IjK44FS9nf7a1694158606115.mp4"></video>

#### 手臂

手臂可以细分为小臂功能、肩臂功能、大臂功能。

1. 小臂功能包括：前后缩放、左右缩放、上下缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置小臂前后缩放
chara.description.advance.bodyFeatures.arms.forearmFrontalScale = 1
//设置小臂左右缩放
chara.description.advance.bodyFeatures.arms.forearmHorizontalScale = 1
//设置小臂上下缩放
chara.description.advance.bodyFeatures.arms.forearmVerticalScale = 1
```

2. 肩臂功能包括：前后缩放、左右缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置肩臂前后缩放
chara.description.advance.bodyFeatures.arms.shoulderFrontalScale = 1
//设置肩臂左右缩放
chara.description.advance.bodyFeatures.arms.shoulderHorizontalScale = 1
```

3. 大臂功能包括：前后缩放、左右缩放、上下缩放

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置大臂前后缩放
chara.description.advance.bodyFeatures.arms.upperArmFrontalScale = 1
//设置大臂左右缩放
chara.description.advance.bodyFeatures.arms.upperArmHorizontalScale = 1
//设置大臂上下缩放
chara.description.advance.bodyFeatures.arms.upperArmVerticalScale = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/E8Mwe5YbUmKQ1694158606115.mp4"></video>

#### 手

手功能包括：整体缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置手整体缩放
chara.description.advance.bodyFeatures.hands.handOverallScale = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/gRK7qCoeqTit1694158606115.mp4"></video>

#### 胯

胯功能包括：前后缩放、左右缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置胯前后缩放
chara.description.advance.bodyFeatures.hips.hipFrontalScale = 1
//设置胯左右缩放
chara.description.advance.bodyFeatures.hips.hipHorizontalScale = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/ThRYhd3JEhrW1694158606115.mp4"></video>

#### 腿

腿可以细分为小腿功能、大腿功能。

1. 小腿功能包括：前后缩放、左右缩放、上下缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置小腿前后缩放
chara.description.advance.bodyFeatures.legs.calfFrontalScale = 1
//设置小腿左右缩放
chara.description.advance.bodyFeatures.legs.calfHorizontalScale = 1
//设置小腿上下缩放
chara.description.advance.bodyFeatures.legs.calfVerticalScale = 1
```

2. 大腿功能包括：前后缩放、左右缩放、上下缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置大腿前后缩放
chara.description.advance.bodyFeatures.legs.thighFrontalScale = 1
//设置大腿左右缩放
chara.description.advance.bodyFeatures.legs.thighHorizontalScale = 1
//设置大腿上下缩放
chara.description.advance.bodyFeatures.legs.thighVerticalScale = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/AtnDUqx5WlyS1694158606115.mp4"></video>

#### 脚

脚功能包括：整体缩放。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置脚整体缩放
chara.description.advance.bodyFeatures.feet.feetOverallScale = 1
```

 - 效果图：

<video controls src="https://cdn.233xyx.com/online/jNa7HNZBW7ww1694158606115.mp4"></video>

## 高级人形形象换装相关

### 角色数据换装

| 中文示例    | 英文示例                                                         |
| ----------- | ------------------------------------------------------------ |
|![img](https://qn-cdn.233leyuan.com/athena/online/1b66bc05404d41e6aa65bafbe51ca778_365221815.webp)|![img](https://qn-cdn.233leyuan.com/athena/online/32d28d7824884c19a11fbcde32825129_365221819.webp)|

角色数据说明：角色数据是服装信息、捏脸数据、插槽数据等综合一起的一个文件。

数据生成说明：可以通过【角色编辑器】的另存功能，会将角色数据保存到【工程内容】中的【角色】列表中中。当然我们也能在【本地资源库】中找到【角色数据】列表，从中找到所需要的一些预制【角色数据】。

使用说明：

 - 角色数据拖入【角色编辑器】的主视口的角色身上，即可完成换装。
 - 角色数据也可以拖入【角色属性面板】的【套装数据】处，完成角色换装。
 - 角色数据拖入【主编辑器】的主视口，会自动生成NPC。
 - 角色数据也可以通过脚本进行换装。

实际应用：通常情况下，我们在制作游戏的过程中，会提前把所用到的NPC形象保存下来。并在触发条件后，生成相关的形象的怪物或NPC。这样我们会省掉在脚本中编写角色形象的部分代码。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//通过套装数据设置角色形象
chara.setDescription(["136291"])
```

### 获取形象与重置形象

功能说明：我们提供了获取角色形象，以及设置形象的功能。

 - 示例脚本：

```ts
//获取玩家角色
let chara = Player.localPlayer.character
//设置外观数据为空
let defaultStyle = null;
//当角色外观加载完成时
chara.onDescriptionComplete.add(() => {
    //外观数据不等于空时
    if (defaultStyle == null){
        //获取角色形象  
        defaultStyle = chara.getDescription();
    }
})
```
