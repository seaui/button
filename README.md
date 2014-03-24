# button

---

[![Build Status](https://travis-ci.org/seaui/button.svg?branch=develop)](https://travis-ci.org/seaui/button)

按钮可以完成很多工作。控制按钮状态或创建按钮组可以产生类似工具条之类的复杂组件。

---

## 案例

### 状态

通过添加`data-loading-text="正在加载..."`可以使按钮呈现加载状态。

````html
<button type="button" data-loading-text="正在加载..." class="btn btn-primary">
  Loading state
</button>
````

### 状态切换

通过添加`data-toggle="button"`可以让按钮能够切换状态。

````html
<button type="button" class="btn btn-primary" data-toggle="button">Single toggle</button>
````

### 复选框

通过向按钮组添加`data-toggle="buttons"`可以使按钮组具有类似选择框的选择/取消功能。

````html
<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-primary">
    <input type="checkbox"> Option 1
  </label>
  <label class="btn btn-primary">
    <input type="checkbox"> Option 2
  </label>
  <label class="btn btn-primary">
    <input type="checkbox"> Option 3
  </label>
</div>
````

### 单选

通过向按钮组添加`data-toggle="buttons"`可以让按钮组具有单选框的功能。

````html
<div class="btn-group" data-toggle="buttons">
  <label class="btn btn-primary">
    <input type="radio" name="options" id="option1"> Option 1
  </label>
  <label class="btn btn-primary">
    <input type="radio" name="options" id="option2"> Option 2
  </label>
  <label class="btn btn-primary">
    <input type="radio" name="options" id="option3"> Option 3
  </label>
</div>
````

## 用法

通过JavaScript构建按钮：

```javascript
seajs.use(['$','button'], function($,button) {
    $('.btn').button()
});
```

### 标记

按钮插件完整支持data属性。通过下面的案例可以看到各种使用方式。

### 方法

#### $().button('toggle')

切换按钮状态。赋予按钮被激活时的状态和外观。

> ### 自动切换
> 可以使用`data-toggle`属性让按钮具有自动切换状态的能力。

```html
<button type="button" class="btn" data-toggle="button">...</button>
```

#### $().button('loading')

设置按钮状态为loading - 即将按钮置为禁用状态并将文字内容切换为loading。通过使用`data-loading-text`可以在按钮元素上定义loading文本。

```html
<button type="button" class="btn" data-loading-text="loading stuff...">...</button>
```

> ### 跨浏览器兼容性
> Firefox会在多个页面加载之间保持按钮的禁用状态。可以通过添加`autocomplete="off"`来解决提到的问题。

#### $().button('reset')

重置按钮状态 - 并将按钮上的文本还原为原始值。

#### $().button(string)

重置按钮状态 - 并将按钮上的文本重置为传入的值。

````html
<button type="button" class="btn" data-complete-text="finished!" >...</button>
<script>
seajs.use(['$','button'], function($,button) {
  $('.btn').button('complete')
});
</script>
````