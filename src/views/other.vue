<template>
  <div class="other">
    <h1>问题页面</h1>
    <p>因为业务需求 项目会使用全局的css变量设置 修改皮肤，框架似乎与该操作冲突。如确有问题期待您的回复，如框架没有该问题，
        望回复下代码中使用的错误，感谢您的斧正
    </p>
  </div>

</template>

<script>
export default {
  created() {
    document.documentElement.style.setProperty(
      "--game-tab-bg",
      "linear-gradient(180deg, #FF8A21 0%, #FF2A2A 100%)"
    );
  },
};
</script>

<style>
*{
    margin:0;
    padding:0;
}
h1{
    font-size:48px
}
p{
    font-size:12px;
}
</style>