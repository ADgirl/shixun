# 暑期实训内容
#时间：2周
#实训方向：前端
#实训内容：HTML、css


Css基础：
 1. 内联样式：
      <p style="background-color: green; color: red;font-family: '楷体'; font-size: 24px;">一个黄丽鸣翠柳</p>

 2.内部样式：<style> css代码</style>

 3.外部样式：<link src="导入外部文件"/>

 七大选择器：
1. 标签选择器：
   p{
	background-color: green;
     }
2.id选择器：
   #sub{
	background-color: pink;
	}
  <p id="sub">两个黄鹂鸣翠柳</p>
3. 类选择器:
   .sub1{
	color: deeppink;
	}

4.子代选择器：  

  .mydiv>p{
		color: red;
	}
5.后代选择器：
  .mydiv p{
	color: red;
	}
6.并集选择器：
   p,h1,a{
	color: red;
     }
7.*{
  margin: 0;
  padding: 0;
   }

常用的属性：
   list-style: none;去掉务列表的默认点；
   text-decoration: line-through;取点a标签默认的下划线；
     overline（上划线） line-through（贯穿线） underline（下划线）

margin：控制边框与边框之间的距离。
    margin-top距离上边框的间距；
    margin-bottom距离下边框的间距；
    margin-left   margin-right

padding：控制内容与边框之间的间距。

塌陷现象：在设置上下边距时。哪个大，就听哪个的（margin-top: 160px;）

盒子模型：
  div（width，height，border，margin，padding）

四大定位方式：
  1.绝对定位：position: absolute;可以通过left，right，top，bottom来
对元素的位置进行微调。他会脱离正常的文档流。

  2.相对定位：position: relative;可以通过left，right，top，bottom来
对元素的位置进行微调。他不会脱离正常的文档流。

  3.固定定位：position: fixed;可以通过left，right，top，bottom来
对元素的位置进行微调。他会脱离正常的文档流。所有的元素跑到固定定位元素的下方。
 
  4.浮动定位：float: right;不可以通过left，right，top，bottom来
对元素的位置进行微调。他会脱离正常的文档流。所有元素依照规定的方向依次排列。


块级元素与行内元素：
   块级元素：1.独占一行，不能与其他元素水平排列。
             2.可以设置宽高。（div，p，h1-h6，li，dt，dd...）

   行内元素：1.与其他元素可以水平排列
            2.可以设置宽高，默认语内容大小一致（span，a，u，i，b...）

  块级元素与行内元素的转换：
      display：none；隐藏
      display：block；将行内元素，设置为块级元素
      display：inline；将块级元素设置为行内元素



伪类：
 利用鼠标的过程特性来对文字或者图片等进行简单的特效处理。

  link：打开浏览器元素默认的样式；
  visited：鼠标点击链接所呈现的样式；
  hover：鼠标移动到元素上那一瞬间所呈现的样式；
  active：鼠标点击那一瞬间所呈现的样式。


html+css

 1.HTML:超文本标记语言（<p></p> <img src=""/> ）
 
 2.http:超文本传输协议(https 加密的安全协议，安全性较高)

 3.域名：方便记忆  www.baidu.com

 4.服务器：主要用于存放文件信息的

 5.浏览器：
    主流浏览器：拥有自己公司建设的内核。（谷歌，IE,欧朋，苹果，火狐...）
    非主流浏览器：反之。（360,QQ,UC,世界之窗，搜狗...）

 6.开发工具：vs，dw，sublime，hbuilder...

 7.访问机制：浏览器输入地址 -> 访问服务器->下载(传输)服务器里边的网页内容
  ->传输浏览器文件->浏览器展示（渲染）网页

HTML结构：
   <html>
      <head>
        <style> css代码</style>
        <link src="导入外部文件"/>
        <meta/>
        <script> js代码，</script>
      </head>
      
      <body></body> 

   </html>

html5结构
  <!DOCTYPE html>
<html>
	<head>
	  <meta charset="utf-8" />
	  <title></title>
	</head>
	<body>
		
	</body>
</html>

 html5之前版本：
   <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title></title>
	</head>
	<body>

	</body>
</html>

<meta name="keywords" content="关键字"/>
<meta name="Description" content="相关描述"/>

常用的标签：
  标题标签：h1到h6。数字越大，字体越小
   <h1></h1>
  段落标签：<p></p>
  换行标签：<br/>它与p标签的区别是上下间距较小
  图片标签：<img width="200px" height="200px" src="img/Koala1.jpg" alt="你的小熊不见了"/>
                 width：宽   height：高   alt：提示（当图片显示失败时的提示）
 a标签：<a href="#">点击</a>
 锚点：
 title：提示
 target="_self/_blank" 本页跳转或者生成新的页面，默认是本页跳转

<br/>换行标签
删除线标签: 
<s>￥199</s>
 <del></del>
<i></i>倾斜标签
加粗标签：
<b></b>
<strong></strong>

<hr/>水平线
<u></u>

 三大列表：
    无序列表：
    有序列表：
    自定义列表：

特殊字符：
    &nbsp 空格
    &copy 版权
    &lt：大于符号
    &gt：小于符号
    &amp：和（&）
    &yen：人民币
    &plusmn； 正负号
    &times 乘号
    &divide;除号
    &reg：商标符号

table：
  tr代表行；td代表列；border代表边框的粗细；
  bordercolor="red"设置边框颜色
  cellspacing="20px" 单元格与单元格之间的间距
  cellpadding="20px" 单元格与内容间的间距

 行的合并：rowspan 它是纵向的合并

 列的合并：colspan 它是横向合并
  注意：rowspan,colspan写在td里面。

 input标签：

<input type="text" name="" id="" value="" /> 文本
<input type="password" name="" id="" value="" /> 密码
<input type="submit" name="" id="" value="提交" />
<input type="reset" name="" id="" value="重置" /> 一定要写在form标签里面
单选框：
男<input type="radio" name="sex" id="" value="" />
女<input type="radio" name="sex" id="" value="" /> 注意：一定要有统一的name属性值

文本域：<textarea></textarea>

div:默认铺满整行，可以设置宽高；
span：只占自己内容的大小，不可设置宽高。
   






