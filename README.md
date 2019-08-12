# 自定义组件-悬浮按钮
参考作者：https://github.com/WMSmile/floatmenu

我一直认为模仿才是学习的最快方法，当你模仿成功并掌握技巧之后就可以自己造轮子了，感谢这位小伙伴。


1. 将ssjMenu文件夹拉到miniprogram/components下，没有components文件夹就新建它：

2. 在app.json文件配置如下：

```
{
"usingComponents": {
"ssjMenu": "/components/ssjMenu/ssjMenu"
},
}
```
```
如果没有usingComponents这个节点，就新建这个节点，有的话就加入    "ssjMenu": "/components/ssjMenu/ssjMenu”，记住：节点{}内每一行之间用逗号隔开，最后一行不需要逗号，否则报错
```
3. 在需要调用的xml文件加上：

>menuItemPageClick为按钮点击的时候的回调方法  mainmodel是显示的按钮，menulist为折叠的菜单的数组数据

```
<ssjMenu bind:menuItemClick='menuItemPageClick' menueList='{{menulist}}' mainmodel='{{mainmodel}}'></ssjMenu>

```
4. 在.js里面实现方法

```
menuItemPageClick: function (res) {
console.log('111:' + JSON.stringify(res));
//获取点击事件的信息，根据res的内容处理逻辑
}
```
>data中根据自己的情况添加数据

```
data: {   menulist: [
{
"menuId": "1",
"url": "../../images/default_headImage.png",
"title": "顶部",
},
{
"menuId": "2",
"url": "../../default_headImage.png",
"title": "添加",
},
{
"menuId": "3",
"url": "../../default_headImage.png",
"title": "购物车",
},
],
mainmodel: {
menuId:'6',
"url": "../../default_headImage.png",
"title": "菜单",
},
}
```

这里解释一下方法的传递，
```
ssjMenu.wxml 里面给每一个菜单按钮绑定了childViewClick点击事件，在此事件方法里需要使用到triggerEvent方法映射另一个方法名‘menuItemClick’(这个映射方法名你自己看着取) ，然后在调用page的wxml文件里需要实现 bind: menuItemClick='你需要实现的方法名'；
其中triggerEvent包含了三个参数（'myevent', myEventDetail, myEventOption）:
'myevent'代表你的映射方法名；
myEventDetail代表你需要传递给调用page.js的json内容；
myEventOption这个参数因为暂时没用到，感兴趣的小伙伴可以去文档里查看

```
完毕！O(∩_∩)O~~
