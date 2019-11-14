---
category: javascript
tags:
  - webpack
  - js
  - vue
  - analyzer
date: 2019-11-14
title: 在 Vue 项目中添加 webpack-bundle-analyzer
vssue-title: 在 Vue 项目中添加 webpack-bundle-analyzer
---

在开发 web 项目中往往要引入大量的第三方依赖，安装 webpack-bundle-analyzer 可以以可视化图表的方式查看各个依赖所占比例和大小。

<!-- more -->

## 项目初始化

使用 vue-cli 创建一个新项目，然后安装 analyzer 依赖。

```bash
vue create analyzer-test
cd analyzer-test
yarn -D add webpack-bundle-analyzer
```

## 配置 vue.config.js

在项目根目录添加 `vue.config.js` 并添加如下配置：

```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
};
```

接下来运行 `yarn serve` 便会在 http://127.0.0.1:8888/ 查看各个依赖的所占比例大小。

![analyzer](../assets/analyzer-1.png)
