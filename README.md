# vue2-demo

> vue-demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

vue.js2.X 微信开发的DEMO


.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── notes/
│   └── ...                       # 制作过程中的一些笔记。
├── src/
│   ├── assets/             # 字体、样式等module 资源 (会被webpack处理)
│   │   └── ...
│   ├── components/     # 局部组件
│   │   └── ...
│   ├── data/                 # 模拟数据
│   │   └── ...
│   ├── pages/               # 主要页面组件
│   │   └── ...
│   ├── main.js                # app 入口文件
│   ├── App.vue              # 主要app组件
├── static/                      # 图片等纯静态资源
├── test/
│   └── unit/                   # unit tests
│      ├── specs/              # test spec files
│      ├── index.js            # test build entry file
│      └── karma.conf.js       # test runner config file
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
├── .editorconfig               # editor config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```



