<template>
  <div class="main">
    <div class="main__container">
      <h2 class="main__container__form-title">登录</h2>
      <div class="main__container__form-group">
        <label for="name">用户名</label>
        <input type="text"
               class="main__container__form-control"
               v-model="data.username"
               name="name"
               id="name"
               placeholder="用户名" />
      </div>
      <div class="main__container__form-group">
        <label for="pass">密码</label>
        <input type="password"
               class="main__container__form-control"
               v-model="data.password"
               name="pass"
               id="pass"
               placeholder="密码" />
      </div>
      <div class="main__container__form-btn">
        <button type="button"
                class="btn btn-info"
                @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { post } from '../../service/api'
export default {
  name: 'Login',
  setup () {
    const data = reactive({
      username: '',
      password: '',
      submitted: false
    })
    const router = useRouter()
    const submit = async () => {
      try {
        const result = await post('/login', {
          user_name: data.username,
          password: data.password
        })
        console.log(result)
        debugger
        if (result.code === 1000) {
          router.push('Home')
        } else {
          alert('登录失败')
        }
      } catch (error) {
        alert(error)
      }
    }
    return { data, submit }
  }
}
</script>

<style  lang="scss" scoped>
.main {
  background: #f8f8f8;
  padding: 150px 0;
  &__container {
    width: 600px;
    background: #fff;
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
    &__form-title {
      margin-bottom: 33px;
      text-align: center;
    }
    &__form-group {
      margin: 15px;
      label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
      }
    }
    &__form-control {
      display: block;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    &__form-btn {
      display: flex;
      justify-content: center;
      .btn {
        padding: 6px 20px;
        font-size: 18px;
        line-height: 1.3333333;
        border-radius: 6px;
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        border: 1px solid transparent;
      }
      .btn-info {
        color: #fff;
        background-color: #5bc0de;
        border-color: #46b8da;
      }
    }
  }
}
</style>
