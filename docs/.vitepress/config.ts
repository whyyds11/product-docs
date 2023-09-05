import type { DefaultTheme } from 'metaapp-prodigytech-doc-theme'
import { defineConfigWithTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Index',
    items: [{ text: '介绍', link: '/index.md' }]
  }
]

export default defineConfigWithTheme<DefaultTheme.Config>({
  ignoreDeadLinks: true,
  title: '产品手册',
  appearance: false,
  description: '口袋方舟编辑器的产品文档',
  outDir: '../dist',
  head: [
    [
      'meta',
      {
        name: 'docsearch:tags',
        content: 'product-docs'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: 'https://wstatic-01-ali.233leyuan.com/xyc/metaverse-docs/tab-logo.png'
      }
    ]
  ],
  themeConfig: {
    logo: 'https://wstatic-01-ali.233leyuan.com/xyc/metaverse-docs/kd-logo-black.svg',
    sidebar: [
      {
        text: 'index',
        link: '/index.md',
        collapsible: false,
        collapsed: false,
        items: [
          { text: '手册介绍', link: '/index.md' },
          { text: '安装需求', link: '/Editor/InstallationRequirements.md' },
          { text: '更新日志', link: '/ReleaseNote/ReleaseNote.md' }
        ]
      },
      {
        text: '编辑器',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '编辑器窗口操作', link: '/Editor/EditorWindowsOperation.md' },
          {
            text: '画质级别模拟与设置',
            link: '/Editor/GraphicsQualitySettings.md'
          },
          { text: '预制体功能说明', link: '/Editor/Prefabs.md' },
          { text: '游戏断线重连', link: '/Editor/GameReconnection.md' },
          { text: '绘制模式', link: '/Editor/DrawMode.md' },
          {
            text: '横竖屏&分辨率模拟',
            link: '/Editor/ScreenOrientation&ResolutionSimulation.md'
          },
          { text: '接入社交功能', link: '/Editor/UseMGS.md' },
          { text: '角色编辑工具', link: '/Editor/CharacterEditor.md' },
          {
            text: '自动裁剪规则与自定义裁剪距离',
            link: '/Editor/AutomaticAndCustomizedCullDistance.md'
          }
        ]
      },
      {
        text: 'UI',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '创建游戏界面(UI)',
            link: '/UI/CreatingUserInterface(UI).md'
          },
          { text: 'UI控件的基础属性', link: '/UI/UIWidget-BaseProperties.md' },
          { text: 'UI控件-容器', link: '/UI/UIComponent-Canvas.md' },
          { text: 'UI控件-图片', link: '/UI/UIComponent-Image.md' },
          { text: 'UI控件-文本', link: '/UI/UIComponent-Text.md' },
          { text: 'UI控件-输入框', link: '/UI/UIComponent-InputBox.md' },
          { text: 'UI控件-按钮', link: '/UI/UIComponent-Button.md' },
          { text: 'UI控件-遮罩按钮', link: '/UI/UIComponent-MaskedButton.md' },
          { text: 'UI控件-进度条', link: '/UI/UIComponent-ProgressBar.md' },
          { text: 'UI控件-滚动框', link: '/UI/UIComponents-ScrollBar.md' },
          { text: 'UI控件-摇杆', link: '/UI/UIWidget-Joystick.md' },
          { text: 'UI控件-摄像机滑动区', link: '/UI/UIWidget-Touchpad.md' },
          { text: 'UI控件-加载图', link: '/UI/UIComponent-LoadingIcon.md' },
          { text: 'UI控件-调色板', link: '/UI/UIComponent-ColorPicker.md' },
          { text: '富文本', link: '/UI/Rich-text.md' },
          { text: 'UI编辑器设计功能', link: '/UI/UIDesigner.md' },
          {
            text: '按键绑定（针对PC端）及预设UI',
            link: '/UI/KeybindsandPremadeUI.md'
          },
          { text: 'UI性能与优化', link: '/UI/UIPerformanceandOptimization.md' },
          {
            text: 'UI脚本的生命周期及事件说明',
            link: '/UI/LifeCycleandEventDescriptionofUIScripts.md'
          },
          {
            text: 'UI拖拽事件',
            link: '/UI/DragDropEvent.md'
          }
        ]
      },
      {
        text: '物理',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '物理对象', link: '/Physics/PhysicalObject.md' },
          { text: '推进器', link: '/Physics/Propeller.md' }
        ]
      },
      {
        text: '游戏功能对象',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '四轮载具',
            link: '/GameplayObjects/Four-wheeledVehicles.md'
          },
          { text: '高级轮式载具', link: '/GameplayObjects/AdvancedVehicle.md' },
          { text: '寻路系统', link: '/GameplayObjects/NavigationArea.md' },
          { text: '交互物', link: '/GameplayObjects/Interactors.md' },
          { text: '世界UI', link: '/GameplayObjects/WorldUI.md' },
          { text: '触发器', link: '/GameplayObjects/Trigger.md' },
          { text: '空锚点', link: '/GameplayObjects/Anchor.md' },
          { text: '热武器', link: '/GameplayObjects/HotWeapon.md' },
          { text: '游泳区域', link: '/GameplayObjects/SwimmingArea.md' },
          { text: '初生点', link: '/GameplayObjects/SpawnPoint.md' },
          { text: '投掷物', link: '/GameplayObjects/Projectiles.md' },
          { text: '禁行区', link: '/GameplayObjects/BlockingArea.md' },
          { text: '点光源', link: '/GameplayObjects/PointLight.md' },
          { text: '非玩家对象', link: '/GameplayObjects/NPCs.md' },
          { text: '音效', link: '/GameplayObjects/SoundEffect.md' },
          { text: '特效', link: '/GameplayObjects/Effects.md' }
        ]
      },
      {
        text: '运动功能对象',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '冲量对象', link: '/MotionControlObjects/ImpulseObject.md' },
          { text: '运动器', link: '/MotionControlObjects/IntegratedMover.md' }
        ]
      },
      {
        text: '世界对象',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '环境光', link: '/WorldObjects/AmbientLight.md' },
          { text: '太阳光', link: '/WorldObjects/Sunlight.md' },
          { text: '摄像机', link: '/WorldObjects/Camera.md' },
          { text: '角色', link: '/WorldObjects/Characters.md' },
          { text: '后处理', link: '/WorldObjects/Post-Processing.md' },
          { text: '天空球', link: '/WorldObjects/Skybox.md' },
          { text: '环境雾', link: '/WorldObjects/Fog.md' }
        ]
      },
      {
        text: '角色',
        collapsible: true,
        collapsed: true,
        items: []
      },
      {
        text: '脚本',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '脚本的生命周期', link: '/Scripting/ScriptLifeCycle.md' },
          {
            text: '单机游戏开发注意事项',
            link: '/Scripting/DevelopingStandaloneGames.md'
          },
          {
            text: '使用与动态加载资源',
            link: '/Scripting/UsingandDynamicallyLoadingResources.md'
          },
          { text: '事件系统', link: '/Scripting/TheEventSystem.md' },
          { text: '数据存储', link: '/Scripting/DataStorage.md' },
          {
            text: '网络同步原理和结构',
            link: '/Scripting/NetworkSynchronizationStructureandMechanics.md'
          },
          { text: '共享数据', link: '/Scripting/DataSharing.md' }
        ]
      },
      {
        text: '资源',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '美术资源', link: '/Resource/ArtResources.md' },
          {
            text: '资源加载与资源下载',
            link: '/Resource/assetdownloadandload.md'
          },
          { text: '资源上传工具', link: '/Resource/AssetUpload.md' }
        ]
      },
      {
        text: '本地化',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '游戏语言本地化',
            link: '/Localization/GameLanguageLocalization.md'
          }
        ]
      },
      {
        text: '创作者中心',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: '游戏发布及管理',
            link: '/CreatorPortal/Publishing&Managing.md'
          },
          { text: '分析游戏数据', link: '/CreatorPortal/Analytics.md' },
          { text: '商业化指南', link: '/CreatorPortal/Advertising.md' },
          {
            text: '游戏性能及排查',
            link: '/CreatorPortal/PerformanceOverview.md'
          },
          { text: '管理游戏版本', link: '/CreatorPortal/VersionManagement.md' },
          {
            text: '游戏曝光运营',
            link: '/CreatorPortal/Promotion&Operation.md'
          },
          { text: '管理游戏社区', link: '/CreatorPortal/Community.md' },
          {
            text: '协作与转移游戏',
            link: '/CreatorPortal/Collaboration&Transfer.md'
          },
          { text: '创作者收益结算', link: '/CreatorPortal/Monetization.md' }
        ]
      },
      {
        text: '更新日志',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'v0.26.0.2', link: '/ReleaseNote/v0.26.0.2.md' },
          { text: 'v0.26.0.1', link: '/ReleaseNote/v0.26.0.1.md' },
          { text: 'v0.26.0.0', link: '/ReleaseNote/v0.26.0.0.md' },
          { text: 'v0.25.0.4', link: '/ReleaseNote/v0.25.0.4.md' },
          { text: 'v0.25.0.3', link: '/ReleaseNote/v0.25.0.3.md' },
          { text: 'v0.25.0.2', link: '/ReleaseNote/v0.25.0.2.md' },
          { text: 'v0.25.0.1', link: '/ReleaseNote/v0.25.0.1.md' },
          { text: 'v0.25.0.0', link: '/ReleaseNote/v0.25.0.0.md' },
          { text: 'v0.24.0.2', link: '/ReleaseNote/v0.24.0.2.md' },
          { text: 'v0.24.0.1', link: '/ReleaseNote/v0.24.0.1.md' },
          { text: 'v0.24.0.0', link: '/ReleaseNote/v0.24.0.0.md' },
          { text: 'v0.23.0.0', link: '/ReleaseNote/v0.23.0.0.md' },
          { text: 'v0.22.0.0', link: '/ReleaseNote/v0.22.0.0.md' }
        ]
      }
    ],
    algolia: {
      appId: 'I2PHYUBLCN',
      apiKey: '62ee775311415d26549e0e30fef5aa38',
      indexName: 'api-docs_prodigytech',
      project: {
        active: 'product-docs',
        arr: [
          {
            key: 'product-docs',
            facetFilters: ['tags:product-docs'],
            name: '产品手册'
          },
          {
            key: 'learning-docs',
            facetFilters: ['tags:learning-docs'],
            name: '教程文档'
          },
          {
            key: 'api-docs',
            facetFilters: ['tags:api-docs'],
            name: 'API文档'
          },
          {
            name: '论坛',
            url: 'https://forum.ark.online/search.php?searchsubmit=yes&mod=forum&srchtxt='
          }
        ]
      },
      searchPage: 'https://search.ark.online/#/search'
    },
    siteTitle: '产品手册',
    nav: [
      {
        text: '官网',
        link: 'https://creator.ark.online/'
      },
      {
        text: '论坛',
        link: 'https://forum.ark.online/'
      },
      {
        text: '教程',
        link: 'https://learning.ark.online/'
      },
      {
        text: 'API',
        link: 'https://api-docs.ark.online/'
      },
      {
        text: '创作者',
        link: 'https://portal.ark.online/'
      },
      {
        text: '025 版本',
        items: [
          {
            text: '主版本',
            link: 'https://docs.ark.online/',
            path: true
          }          
        ]
      }
    ],
    socialLinks: [
      // { link: 'https://github.com/prodigytech-doc/api-docs', icon: 'github' },
      {
        link: 'https://github.com/prodigytech-doc/product-docs/issues',
        icon: {
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#676D77"/>
          <path d="M14.5 15C15.3284 15 16 14.3284 16 13.5V6.5C16 5.67163 15.3284 5 14.5 5H5.49999C4.67163 5 4 5.67163 4 6.5V13.5C4 14.3284 4.67163 15 5.49999 15H7.74998L10.75 18V15H14.5Z" fill="white"/>
          <path d="M10.0003 13.2857C10.3553 13.2857 10.6431 12.9979 10.6431 12.6429C10.6431 12.2878 10.3553 12 10.0003 12C9.64524 12 9.35742 12.2878 9.35742 12.6429C9.35742 12.9979 9.64524 13.2857 10.0003 13.2857Z" fill="#676D77"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19627 6.55985C9.57999 6.4009 10.0022 6.35932 10.4096 6.44035C10.817 6.52137 11.1911 6.72138 11.4848 7.01507C11.7785 7.30876 11.9785 7.68295 12.0596 8.09031C12.1406 8.49767 12.099 8.91991 11.94 9.30363C11.7811 9.68735 11.5119 10.0153 11.1666 10.2461C10.9911 10.3633 10.8 10.4528 10.5999 10.5125V11C10.5999 11.3314 10.3313 11.6 9.9999 11.6C9.66853 11.6 9.3999 11.3314 9.3999 11V10.4C9.3999 9.82145 9.85795 9.47175 10.2371 9.36818C10.3301 9.34278 10.4189 9.30246 10.4999 9.24832C10.6479 9.14942 10.7633 9.00886 10.8314 8.84441C10.8995 8.67996 10.9173 8.499 10.8826 8.32441C10.8479 8.14983 10.7622 7.98947 10.6363 7.8636C10.5104 7.73773 10.3501 7.65201 10.1755 7.61729C10.0009 7.58256 9.81994 7.60038 9.65549 7.6685C9.49103 7.73662 9.35047 7.85198 9.25158 7.99998C9.15269 8.14799 9.0999 8.32199 9.0999 8.49999C9.0999 8.83137 8.83127 9.1 8.4999 9.1C8.16853 9.1 7.8999 8.83137 7.8999 8.49999C7.8999 8.08465 8.02307 7.67864 8.25382 7.3333C8.48457 6.98795 8.81254 6.71879 9.19627 6.55985ZM10.5496 10.5273C10.5496 10.5273 10.5499 10.527 10.5505 10.5268Z" fill="#676D77"/>
          </svg>
          `
        }
      }
    ],
    outline: [2, 3],
    editLink: {
      pattern:
        'https://github.com/prodigytech-doc/product-docs/tree/main/docs/:path',
      text: '编辑'
    },
    feedback: 'https://github.com/prodigytech-doc/product-docs/',
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    },
    pandora: {
      type: 'product'
    }
  }
})
