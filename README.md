#  online_make_friends
 
## 网页端
### 页面设计（html）
1. 登录页
> 支持第三方账户登录（qq、微信等）。
2. 首页
> 展示4个功能的总览
3. 设置页
> 设置个人信息，注销，退出等
* 功能1：匹配交友
> 使用者回答几个问题然后进入聊天室
* 功能2：自主择友
> 使用者发布帖子（类似于表白墙）
* 功能3：游戏娱乐
> ???
* 功能4：运动健身
> 使用者可以发布和查看运动健身有关的帖子
*  项目页1：聊天室
> 用于功能1
*  项目页2：帖子
> 用于功能2、3、4。
> 具体：
> 发布帖子，传送到后端，后端负责数据存储（直接放到相应的网站目录上?）。
> 读取帖子，从网站目录中读取

### 用户交互（js）
ajax


## 后端（java springboot）
* 对MySQL数据库进行操作
> 维护账户信息：账号、昵称、个人签名、第三方账户信息等
* 登录验证功能
> 接收网页发送的账户信息，与数据库中的账户信息进行验证，返回结果
* 聊天室功能
> 监听来自网页端的请求，建立聊天室，处理和广播聊天信息到各个网页端。
