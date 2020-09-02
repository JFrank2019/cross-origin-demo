# 使用方法

0. 安装 node-dev
    `yarn global add node-dev`
1. 下载代码
    `https://github.com/JFrank2019/cross-origin-demo.git`
2. 进入 target 运行 server.js
    `cd cross-origin-demo/target; node-dev server.js 8888`
3. 进入 origin 运行 server.js
    `cd ../origin; node-dev server.js 9999`
4. 打开两个页面 localhost:8888/index.html 和 localhost:9999/index.html
