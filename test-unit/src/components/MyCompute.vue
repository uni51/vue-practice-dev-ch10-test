<template>
  <div id="email">{{ localEmail }}</div>
</template>

<script>
export default {
  props: {
    // 文字列型のemail属性
    email: String
  },
  // メールアドレスの「@」以前を取得
  computed: {
    localEmail: function() {
      return this.email.split('@')[0].toLowerCase()
    }
  }
}
</script>