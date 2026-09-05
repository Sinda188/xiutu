# 修图 · 滤镜工作室

一个纯本地运行的网页修图工具：上传照片 → 选滤镜 → 导出，照片全程在你自己的浏览器里处理，不上传任何服务器。

## 使用
打开 `https://sinda188.github.io/xiutu/` 即可使用，手机、电脑都行。

## 滤镜库
滤镜存在 `filters.js` 里。新增滤镜 = 往 `window.FILTERS` 数组加一个对象，推送后刷新页面即可看到。

## 本地运行
直接双击 `index.html`，或用 `python -m http.server` 起个本地服务。
