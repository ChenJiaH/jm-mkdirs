# jm-mkdirs
用于快速创建多级目录的实用node模块。

## 安装

``` bash
    npm install jm-mkdirs
```

## 方法

###     async(dirname, callback)

根据dirname逐级创建目录，支持绝对路径和相对路径。
异步创建目录，无法保证执行回调的顺序。

###     sync(dirname)

根据dirname逐级创建目录，支持绝对路径和相对路径。
同步创建目录，可保证执行顺序。

## 用法

请在node项目中使用，因为它依赖node.js的path模块和fs模块。

``` Javascript
    // import mkdirs from 'jm-mkdirs'; // ES6
    var mkdirs = require('jm-mkdirs');
    mkdirs.asyc("root/parent/child")
```

## License

MIT
