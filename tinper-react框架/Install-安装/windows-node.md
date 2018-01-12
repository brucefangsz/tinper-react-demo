# Windows-Node安装

## 一、什么是node？

简单的说 Node.js 就是运行在服务端的 JavaScript。Node.js 是一个基于 [Chrome V8](https://developers.google.com/v8/) 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 [npm](https://www.npmjs.com/)，是全球最大的开源库生态系统。

## 二、教程电脑配置

1、本机系统：Windows 10 Pro（64位）

2、Node.js：v6.9.2LTS（64位）

## 三、安装Node.js步骤

1、下载对应你系统的[Node.js版本:](https://nodejs.org/en/download/)

2、选安装目录进行安装

3、环境配置

4、测试

## 四、安装说明

1、下载电脑系统对应版本



![node-v](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/node-v.png)

2、下载完成后，双击“node-v6.9.2-x64.msi”，开始安装Node.js

![node-install](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/node-install.png)

3、点击我已同意相关条例 next安装。

![iaccept](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/iaccept.png)

4、修改默认路径

![changefile](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/changefile.png)

5、选择保存项

![saveall](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/saveall.png)

6、完成

![finish](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/finish.png)

7、至此Node.js已经安装完成，可以先进行下简单的测试安装是否成功了，后面还要进行环境配置
在键盘按下【win+R】键，输入cmd，然后回车，打开cmd窗口

![cmd](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/cmd.png)

8、检测是否安装完成

![nodeisfinish](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/nodeisfinish.png)

9、环境配置，说明：这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似：npm install express [-g] （后面的可选参数-g，g代表global全局安装的意思）的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，占C盘空间。
例如：我希望将全模块所在路径和缓存路径放在我node.js安装的文件夹中，则在我安装的文件夹【D:\Develop\nodejs】下创建两个文件夹【node_global】及【node_cache】如下图：

![global](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/global.png)

10、创建完两个空文件夹之后，打开cmd命令窗口，输入

```
npm config set prefix "D:\Develop\nodejs\node_global"
npm config set cache "D:\Develop\nodejs\node_cache
```

11、接下来设置环境变量，关闭cmd窗口，“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”

![globalx](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/globalx.png)

12、进入环境变量对话框，在【系统变量】下新建【NODE_PATH】，输入【D:\Develop\nodejs\node_global\node_modules】，将【用户变量】下的【Path】修改为【D:\Develop\nodejs\node_global】

![changeglobal](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/changeglobal.png)



![editglobal](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/editglobal.png)

![changeglobal1](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/changeglobal1.png)

![changeglobal2](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/changeglobal2.png)

13、测试

配置完后，安装个module测试下，我们就安装最常用的express模块，打开cmd窗口，
输入如下命令进行模块的全局安装：

![test](/Users/brucefang/Downloads/tinper-react框架/Install-安装/img/test.png)

