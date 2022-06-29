<template>
  <div class="main-container col2-right-layout">
    <div class="main container">
      <div class="row">
        <section class="col-sm-12">
          <div
            class="col-main"
            style="
              background-image: url(https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_17_16_00_59_587.jpg);
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center center;
            "
          >
            <div style="display: block; margin-top: 0em">
              <div class="loginblock">
                <div class="page-title logintitle">
                  <h2 class="LTW">登入</h2>
                </div>
                <div
                  class="static-contain"
                  style="
                    padding: 0 3rem 3rem;
                    overflow: hidden;
                    margin-top: 3rem;
                  "
                >
                  <fieldset class="group-select">
                    <div style="margin-bottom: 1rem">
                      <div class="input-box logininput">
                        <div
                          style="
                            box-sizing: border-box;
                            width: 30rem;
                            height: 4rem;
                            overflow: hidden;
                            border: 1px solid rgba(0, 0, 0, 0.14);
                            border-radius: 2px;
                            margin: 0 50px;
                            align-items: center;
                            display: flex;
                          "
                        >
                          <input
                            type="text"
                            placeholder="帳號／電子郵件／手機號碼"
                            id="billing:account"
                            name="billing[account]"
                            title="Account"
                            class="input-text accountinput"
                            v-model="member.memberAccouunt"
                          />
                        </div>
                      </div>
                      <div class="remind center AIR"></div>
                    </div>
                    <div style="margin-bottom: 1rem">
                      <div class="input-box logininput">
                        <div
                          style="
                            box-sizing: border-box;
                            width: 30rem;
                            height: 4rem;
                            overflow: hidden;
                            border: 1px solid rgba(0, 0, 0, 0.14);
                            border-radius: 2px;
                            margin: 0 50px;
                            align-items: center;
                            display: flex;
                          "
                        >
                          <input
                            type="password"
                            placeholder="密碼 (包含至少1大寫英文、1數字)"
                            id="billing:password"
                            name="billing[password]"
                            title="Password"
                            class="input-text passwordinput"
                            v-model="member.memberPassword"
                          />
                          <label for=""
                            ><img
                              src="https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_10_19_08_840.jpg"
                              alt="eye"
                              style="width: 30px !important"
                              class="eye"
                          /></label>
                        </div>
                      </div>
                      <div class="remind center PIR"></div>
                    </div>

                    <div class="center">
                      <button
                        @click="loginbtn()"
                        type="submit"
                        title="Submit"
                        class="button submit"
                        style="margin-right: 10px"
                      >
                        登 入
                      </button>
                      <a @click="forgotPassword()">忘記密碼?</a>
                    </div>
                    <!-- remind提醒訊息欄位 -->
                    <div
                      class="remind center LBR"
                      style="margin-top: 1rem"
                    ></div>

                    <div class="remind03"></div>

                    <div class="center" style="margin-top: 2rem">
                      <span>還沒有加入會員?</span>
                      <router-link
                        :to="{
                          name: 'register',
                        }"
                        >馬上加入</router-link
                      >
                    </div>

                    <hr />

                    <span class="center">使用以下方式登入</span>
                    <div class="center">
                      <a
                        href="http://localhost:8081/oauth2/authorization/google"
                      >
                        <button class="threelogin">
                          <div>
                            <img
                              src="@/assets/images/Google.png"
                              alt="icon-account"
                              width="20px"
                            />
                          </div>
                          <div>Google</div>
                        </button>
                      </a>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import store from "@/store/index";

export default {
  name: "MyLogin",
  data() {
    return {
      member: {
        memberAccouunt: "",
        memberPassword: "",
      },
    };
  },
  mounted() {
    $(".accountinput").on("focus", function () {
      if ($(".accountinput").val().length <= 0) {
        $(".AIR").text("請填寫此欄位");
      }
      $(".accountinput").on("keyup", function () {
        if ($(".accountinput").val().length > 0) {
          $(".AIR").text("");
        } else {
          $(".AIR").text("請填寫此欄位");
        }
      });
    });

    $(".passwordinput").on("focus", function () {
      if ($(".accountinput").val().length <= 0) {
        $(".PIR").text("請填寫此欄位");
      }
      $(".passwordinput").on("keyup", function () {
        if ($(".passwordinput").val().length > 0) {
          $(".PIR").text("");
        } else {
          $(".PIR").text("請填寫此欄位");
        }
      });
    });

    // 点击事件
    var flag = 0;
    $(".eye").click(function () {
      if (flag == 0) {
        $(".passwordinput").attr("type", "text");
        $(".eye").attr(
          "src",
          "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_10_20_28_608.jpg"
        );
        flag = 1;
      } else {
        $(".passwordinput").attr("type", "password");
        $(".eye").attr(
          "src",
          "https://s3.ap-northeast-1.amazonaws.com/tedawsbucket20220530/javaproject/2022_06_23_10_19_08_840.jpg"
        );
        flag = 0;
      }
    });
  },

  methods: {
    loginbtn() {
      axios
        .post("http://localhost:8081/loginJsonCrypt", this.member)
        .then((res) => {
          console.table(res.data);
          store.state.memberId = res.data.memberId;
          this.$swal("CMA", "登入成功", "success");
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          console.error(error);

          $(".LBR").text("你的帳號或密碼不正確，請再試一次");
        });
    },
    forgotPassword() {
      axios
        .post("http://localhost:8081/resetPassword", this.member)
        .then((res) => {
          console.table(res.data);

          this.$swal("CMA", "已寄送新密碼至您的信箱", "success");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.loginblock {
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 1rem;
  overflow: hidden;
  width: 50rem;
  min-height: 50rem;
}
.logintitle {
  box-sizing: border-box;
  min-height: 5rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.LTW {
  max-width: 8.5rem;
  margin: auto 25px 8px !important;
}

.input-text {
  width: 100% !important;
}
.remind {
  margin: 0;
  padding: 0.3rem 0 0;
  font-size: 0.75rem;
  color: red;
  min-height: 1rem;
}
.logininput {
  align-items: center;
  display: flex;
}
.div {
  display: block;
}
a {
  text-decoration: underline;
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
.center {
  margin: 0 auto;
  float: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.threelogin {
  padding: 10px 30px;
  margin: 1rem;
}
.pwbox {
  position: relative;
  width: 400px;
  border: 1px solid #ccc;
  margin: 100px auto;
}

.pwbox img {
  position: absolute;
  top: -5px;
  right: 2px;
  width: 24px;
}

.pwbox input {
  width: 370px;
  outline: none;
  border: 0;
}
</style>