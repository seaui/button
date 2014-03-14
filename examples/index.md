# Demo

---

## 使用方法

```javascript
seajs.use(['$','button', function($, button) {

});
```

## 案例

### 状态

通过添加`data-loading-text="正在加载..."`可以使按钮呈现加载状态。

````html
<button type="button" data-loading-text="正在加载..." class="btn btn-primary" id="btn_loading">
  Loading state
</button>
<script>
seajs.use(['$','button'], function($,button) {
    $('#btn_loading').bind("click",function(){
        $(this).button("loading")
    })
});
</script>
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
<script>
    seajs.use('button');
</script>
````