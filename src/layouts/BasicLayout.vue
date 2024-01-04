<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a
          href="https://github.com/Detail-analy/eggOj-frontend"
          target="_blank"
        >
          鸡蛋OJ判题系统 by 程序员小刘</a
        >
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
}

#basicLayout .header {
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#basicLayout .footer {
  /*background: #efefef;*/
  /*padding: 16px;*/
  /*position: absolute;*/
  /*bottom: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*text-align: center;*/
  margin: 48px 0 24px;
  margin-top: 48px;
  margin-right: 0px;
  margin-bottom: 24px;
  margin-left: 0px;
  padding: 0 16px;
  padding-top: 0px;
  padding-right: 16px;
  padding-bottom: 0px;
  padding-left: 16px;
  text-align: center;
}
</style>
<script>
import GlobalHeader from "@/components/GlobalHeader";

export default {
  components: { GlobalHeader },
};
</script>
