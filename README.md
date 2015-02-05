# iSwitch
iOS 7 style switches for your checkboxes
TODO 这里放个图片


纯CSS实现的效果, 参考 https://github.com/abpetkov/switchery 来完善文档

## 优势
1. 纯CSS, 无任何依赖, 随意集成到项目中使用
2. 非常小巧(仅2kb - 未压缩)
3. 结构简单, 易于使用
4. 代码清晰, 可随意定制出适合自己的样式

## 支持的浏览器
PC端(通过[Browserling](https://browserling.com)测试)
* Chrome 12+
* Safari 5.0.5+
* Opera 15+

移动端(通过[BrowserStack](http://www.browserstack.com/screenshots/b81dd1a9ed15689ba9dfb8174eaac189938b4977)测试)
* iOS 6(iPhone 4S/5/5S/6)

真机
* PC Chrome 12.0.742.112
* iOS 7.0.6(iPhone 5)
* Android 4.4.2(华为荣耀6 H60-L02)

## 为什么不支持 firefox?
由于 firefox 不支持 :after pseudo-element on an input field, 因此暂不考虑兼容 firefox


PS: 貌似W3C标准(CSS2.1)说input不应该支持after伪元素, 也就是说其他浏览器支持其实是不标准的!?

[Can I use the :after pseudo-element on an input field?](http://stackoverflow.com/questions/2587669/can-i-use-the-after-pseudo-element-on-an-input-field)


The :after and :before may or may not work on e.g. input elements. This depends on the browser, and it is a gray area in the CSS 2.1 spec (and not clarified in CSS3 Selectors spec).

[CSS :after input placeholder not working in mozilla](http://stackoverflow.com/questions/12834939/css-after-input-placeholder-not-working-in-mozilla)

## 参考
* [招商银行 手机银行网页版](https://mobile.cmbchina.com/MobileHtml/Login/LoginA.aspx)
* [Switchery](http://abpetkov.github.io/switchery/)