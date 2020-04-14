# Vue Typescript Mini Template

本项目基于Vue + Typescript + Element UI实现。内置了i18n国际化解决方案、动态路由（选择性使用）。

同时，项目基于vue-cli3脚手架搭建，对打包进行了优化，例如分包打包、图片压缩、Gzip压缩等。

## 目录结构

```
├── public               # 静态资源
│   ├── favicon.ico      # favicon图标
│   ├── index.html       # html模板
├── src                  # 源代码
│   ├── api              # 所有api请求
│   ├── assets           # 字体、图片静态资源
│   ├── components       # 全局公用组件
│   ├── filters          # 全局过滤器
│   ├── icons            # 项目中所有svg icons
│   ├── lang             # 国际化配置
│   ├── layout           # 全局layout
│   ├── plugins          # 全局配置文件
│   ├── store            # 全局store管理
│   ├── styles           # 全局样式
│   ├── utils            # 全局公共方法
│   ├── views            # 所有页面
├── App.vue              # 入口页面
├── main.ts              # 入口文件
├── router.ts            # 路由配置 
├── .env.xxx              # 环境变量配置
├── shims-vue.d.ts       # TS声明文件
├── .editorconfig        # 文本编辑器配置
├── .eslintrc.js         # ESLint配置
├── .gitignore           # Git代码提交配置
├── .browserslistrc      # 浏览器支持标准
├── postcss.congfig.js   # postcss配置
├── package.json         # package.json
├── vue.config.js        # 项目构建配置
├── tsconfig.js          # TS配置
```

## 安装

```
# 项目安装

git clone http://git.jimuitech.com/egg/repair-web.git

# 进入目录

cd repair-web

# 安装依赖

# 下载node-scss过慢则需使用淘宝镜像，尽量不要使用cnpm安装依赖，以免出现无法解决的bug。

npm install

# 本地开发，启动项目

npm run dev

# 打开浏览器

http://localhost:8001
```

---

## 相关说明

### 关于SVG文件的使用

#### 1. 如何使用SVG图标

在iconfont中找到需要引入的图标（单色），下载SVG图标并保存在/src/icons/svg目录下

在控制台执行下面的命令

```
npm run svg
```

执行成功后会在/src/icons/components下自动生成相应的组件

#### 2. 如何使用生成的SVG组件

```
# fileName 对应/src/icons/components下面的文件名

<svg-icon name="fileName"/>

Eg.

<svg-icon name="dashboard"/>
```

#### 3. 多色的SVG图标如何使用

由于框架中使用的第三方库vue-svgicon，并且对于所有的单色的图标进行了统一样式处理，使图标的颜色默认与父元素的颜色保持一致。

对于多色的SVG图标，如果仍按照1、2的操作会造成图标没办法展示。

原因在于第三方类库会将path标签中的fill属性转成_fill，导致颜色没有办法在SVG图标中生效。为了解决这个问题我们可以按照下面的方法进行操作。

```
# 按照1、2步将SVG图标保存到本地，然后执行npm run svg生成对应的图标组件

# 在命令行执行 

# filename对应的是/src/icons/components对应的多色SVG图标组件

npm run build:multi-svg --  --filename=${filename}.ts

# 按照3正常引入即可
```

#### 4. 如何修改图标的大小和颜色

**注意：** 这里只允许对单色SVG图标进行颜色的修改，图标大小对单色、多色SVG图标不影响

```
# 修改颜色

<svg-icon style="fill: #色号"/>

# 修改大小 

<svg-icon style="font-size: #字体大小"/>
```

