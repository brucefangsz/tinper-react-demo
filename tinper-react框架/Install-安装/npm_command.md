# 如何进行命令操作

### 一、npm命令基本操作

>  [npm命令](http://www.runoob.com/nodejs/nodejs-npm.html)npm命令

1、安装node包  npm install <Module Name> 例如：npm install express 回车 安装 express模块

```
npm install express          # 本地安装
npm install express -g   # 全局安装
```

2、查看安装包详情 npm list -g

```
$ npm list -g

├─┬ cnpm@4.3.2
│ ├── auto-correct@1.0.0
│ ├── bagpipe@0.3.5
│ ├── colors@1.1.2
│ ├─┬ commander@2.9.0
│ │ └── graceful-readlink@1.0.1
│ ├─┬ cross-spawn@0.2.9
│ │ └── lru-cache@2.7.3
……
```

3、查看某个 包详情 $ npm list webpack

```
$ npm list grunt

projectName@projectVersion /path/to/project/folder
└── grunt@0.4.1
```

4、更新模块

```
$ npm update express
```

### 二、NPM常用命令

除了本章介绍的部分外，NPM还提供了很多功能，package.json里也有很多其它有用的字段。

除了可以在[npmjs.org/doc/](https://npmjs.org/doc/)查看官方文档外，这里再介绍一些NPM常用命令。

NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

- NPM提供了很多命令，例如`install`和`publish`，使用`npm help`可查看所有命令。
- 使用`npm help <command>`可查看某条命令的详细帮助，例如`npm help install`。
- 在`package.json`所在目录下使用`npm install . -g`可先在本地安装当前命令行程序，可用于发布前的本地测试。
- 使用`npm update <package>`可以把当前目录下`node_modules`子目录里边的对应模块更新至最新版本。
- 使用`npm update <package> -g`可以把全局安装的对应命令行程序更新至最新版。
- 使用`npm cache clear`可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
- 使用`npm unpublish <package>@<version>`可以撤销发布自己发布过的某个版本代码。

### 三、使用淘宝镜像

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

使用淘宝镜像   cnpm install [name]，跟npm 命令一致。



### 四、git常用命令

> [git常用命令](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/)阮一峰git讲解

1、查看git状态

```
git status

```

2、快照的内容写入缓存区

```
git add 文件路径或者 git add . 提交全部文件

```

3、将缓存区内容添加到仓库中

```
git commit -m '备注'

```

4、取消已缓存区的内容

```
git reset HEAD

```

5、查看版本号

```
git onreset --hard

```

6、删除文件

```
git rm readme.md

```

7、配置别名方便使用

```
$ git config --global alias.st status
$ git config --global alias.ci commit
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

```

8、分支管理

创建分支

```
git branch mybranch

```

9、切换分支

```
git checkout mybranch

```

10、创建分支并且切换

```
git checkout -b mybranch

```

11、删除分支

```
git branch -d mybranch

```

12、把分支push到远端仓库

```
git push origin mybranch

```

13、更新本地仓库至最新改动

```
git pull origin master

```

14、使用fetch 和rebase 来进行分支更新

```
git fetch origin 或者git rebase origin/master

```

15、撤销和修改 版本回退

```
git checkout --filename

```

16、git log 拿到版本号

```
git reset --hard 版本号回退到制定版本
```

### 五、shall命令

1、去往目录

```
cd 子目录路径
cd ../ 上一个文件夹
cd ../../ 上上文件夹
```

2、创建文件夹

```
mkdir 文件夹名字 如：touch myapp
```

3、创建文件

```
touch 文件名称以及类型 如：touch handle.js
```

4、显示详细列表

```
ls -l
```

5、显示所有

```
ls -a
```

6、显示所有文件文件夹

```
ls -R
```

7、显示文件夹 * 和目录

```
ls -F
```

8、显示当前路径

```
pwd
```

9、显示文件内容

```
cat handle.js
```

### 六、vim 编辑器

```
命令状态：

j,k,h,l:上下左右
0： 行首
$: 行尾
i,I :插入命令，i 在当前光标处插入 I 行首插入
a,A:追加命令，a 在当前光标后追加，A 在行末追加
o,O:打开命令，o 在当前行下打开一行，O在当前行上插入一行
r,R :替换命令，r 替换当前光标处字符，R从光标处开始替换
数字s: 替换指定数量字符
x: 删除光标处字符
dd: 删除当前行
d0: 删除光标前半行
d$: 删除光标后半行
ctrl+f :后翻页
ctrl+b:前翻页
G : 文件尾
数字G: 数字所指定行
/string 查找字符串
n 继续查找
N 反向继续查找
% 查找对应括号
u 取消上次操作
ex命令状态
：0 文件首
：1,5 copy 7 块拷贝
：1，5 del 块删除
：1，5 move 7 块移动
：1，$s/string1/string2/g 全文件查找string1并替换为string2
：wq! 存盘退出

```

### 七、前端编码推荐工具

> [`VSCODE`](https://code.visualstudio.com/) 强烈推荐使用的编码工具
>
> [`ATOM`](https://atom.io/)轻量级编码工具
>
> [`Sublime `](http://rj.baidu.com/soft/detail/25836.html?ald)元老级编辑器
>
> [`webstorm`](http://www.jetbrains.com/webstorm/)功能完善的编辑器

