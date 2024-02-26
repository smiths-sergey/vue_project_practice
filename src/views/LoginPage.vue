<template>
  <div class="reg_block">
    <div class="container">
      <p class="action" @click="isAuthMode = !isAuthMode">
        {{ isAuthMode ? 'Зарегистрироваться' : 'Авторизоваться' }}
      </p>
      <p class="title">{{ isAuthMode ? 'ВХОД' : 'РЕГИСТРАЦИЯ' }}</p>
      <input
        class="input_text"
        type="text"
        placeholder="Логин"
        v-model="login"
      />
      <p class="error">{{ isShowLoginPswError ? loginErrorTxt : '' }}&nbsp;</p>

      <input
        class="input_text"
        type="password"
        placeholder="Пароль"
        v-model="password"
      />
      <p class="error">
        {{ isShowLoginPswError ? passwordErrorTxt : '' }}&nbsp;
      </p>
      <label class="agree">
        <input type="checkbox" v-model="isAgree" />
        Я согласен получать уведомления на почту
      </label>
      <p class="error error_center">
        {{
          isAuthMode && loginOrPswIncorrect ? 'Логин или пароль не верен' : ''
        }}&nbsp;
      </p>
      <Button
        class="button"
        type="orange_wo_hover"
        :text="isAuthMode ? 'Войти' : 'Зарегистрироваться'"
        @click="onButtonClick"
      ></Button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { notification } from 'ant-design-vue';
import sha256 from 'crypto-js/sha256';

import Button from '@/components/ui/Button.vue';

export default {
  name: 'DescriptionPage',

  components: {
    Button,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const isAuthMode = ref(true);
    const login = ref('');
    const password = ref('');
    const isAgree = ref(false);

    const isShowLoginPswError = ref(false);
    const loginOrPswIncorrect = ref(false);

    const loginErrorTxt = computed(() => {
      if (!login.value) {
        return 'Поле не должно быть пустым';
      }
      if (login.value.length < 4) {
        return 'Логин должен содержать не менее 4-х симваолов';
      }
      return '';
    });
    const passwordErrorTxt = computed(() => {
      if (!password.value) {
        return 'Поле не должно быть пустым';
      }
      if (password.value.length < 4) {
        return 'Пароль должен содержать не менее 4-х симваолов';
      }
      return '';
    });

    const onButtonClick = () => {
      isShowLoginPswError.value = true;
      if (loginErrorTxt.value || passwordErrorTxt.value) {
        return;
      }
      if (isAuthMode.value) {
        const users = store.getters.getUsers;
        const userIndex = users.findIndex((x) => x.login == login.value);

        if (userIndex >= 0) {
          if (
            users[userIndex].pswHash ==
            sha256(login.value + password.value).toString()
          ) {
            const param = {
              login: login.value,
              isAgree: isAgree.value,
            };
            store.commit('loginUser', param);
            router.push('/');
          }
        }

        loginOrPswIncorrect.value = true;
      } else {
        const userData = {
          login: login.value,
          pswHash: sha256(login.value + password.value).toString(),
          isAgree: isAgree,
          basket: [],
        };
        store.commit('registerUser', userData);
        isAuthMode.value = true;
        notification.open({
          description: 'Вы успешно зарегистрированы и может выполнить вход.',
        });
      }
    };

    return {
      onButtonClick,
      isAgree,
      isAuthMode,
      login,
      password,
      loginErrorTxt,
      passwordErrorTxt,
      isShowLoginPswError,
      loginOrPswIncorrect,
    };
  },
};
</script>

<style lang="scss" scoped>
.reg_block {
  height: 100vh;
  background-image: url('../assets/reg_auth_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.container {
  width: 460px;
  height: 340px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 9px;
}
p {
  color: black;
}
.input_text {
  width: 100%;
  height: 40px;
  border: 1px solid #d58c51;
  border-radius: 61px;
  color: black;
  font-size: 16px;
  font-weight: 400;
  padding-left: 18px;
  padding-right: 18px;
  &:focus {
    outline: none;
  }
}
.input_text::placeholder {
  color: black;
  font-size: 16px;
  font-weight: 400;
}
.title {
  font-size: 31px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 36px;
}
.action {
  font-size: 11px;
  font-weight: 300;
  text-align: right;
  text-decoration-line: underline;
  color: #d58c51;
  margin-bottom: 13px;

  &:hover {
    cursor: pointer;
  }
}
.error {
  font-size: 8px;
  font-weight: 300;
  color: rgb(255, 11, 11);
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 18px;
  padding-right: 18px;
}
.error_center {
  margin-left: 150px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.agree {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 11px;
  font-weight: 300;
  color: black;
}
p {
  display: block;
}

input[type='checkbox'] {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #d58c51;
  &:hover {
    cursor: pointer;
  }
}
input[type='checkbox']:checked {
  background-color: #d58c51;
}
.button {
  margin-left: 120px;
}
</style>
