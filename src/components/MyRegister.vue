<template>
  <div class="main-container col2-right-layout">
    <div class="main container">
      <div class="row">
        <section class="col-sm-12">
          <div class="col-main">
            <div class="page-title">
              <h2>註冊</h2>
            </div>
            <div class="static-contain">
              <!-- 這邊要更改url!!! -->
              <form action="#" method="get">
                <fieldset class="group-select">
                  <ul>
                    <li id="billing-new-address-form">
                      <fieldset>
                        <ul>
                          <li class="require">
                            <em class="required">* </em>必填
                            <hr />
                          </li>

                          <li>
                            <div class="input-box member-account">
                              <label for="memberAccouuntTemp"
                                >帳 號 <span class="required">*</span></label
                              >
                              <br />
                              <input
                                type="text"
                                id="memberAccouuntTemp"
                                name="memberAccouuntTemp"
                                title="Account"
                                class="input-text"
                                v-model="member.memberAccouunt"
                              />
                              <br />
                            </div>
                          </li>

                          <li>
                            <div class="input-box member-password">
                              <label for="memberPasswordTemp"
                                >密 碼 <span class="required">*</span></label
                              >
                              <br />
                              <input
                                type="password"
                                id="memberPasswordTemp"
                                name="memberPasswordTemp"
                                title="Password"
                                class="input-text"
                                v-model="member.memberPassword"
                              />
                              <br />
                            </div>
                          </li>
                          <hr />
                          <li>
                            <div class="customer-name">
                              <div class="input-box name-lastname">
                                <label for="memberLastnameTemp"
                                  >姓 氏 <span class="required">*</span></label
                                >
                                <br />
                                <input
                                  type="text"
                                  id="memberLastnameTemp"
                                  name="memberLastnameTemp"
                                  title="Last Name"
                                  class="input-text"
                                  v-model="member.memberLastname"
                                />
                                <br />
                              </div>
                              <div class="input-box name-firstname">
                                <label for="memberFirstnameTemp"
                                  >名 字 <span class="required">*</span></label
                                >
                                <br />
                                <input
                                  type="text"
                                  id="memberFirstnameTemp"
                                  name="memberFirstnameTemp"
                                  title="First Name"
                                  class="input-text"
                                  v-model="member.memberFirstname"
                                />
                                <br />
                              </div>
                            </div>
                          </li>

                          <li>
                            <div class="input-box">
                              <label for="memberBirthTemp"
                                >生 日 <span class="required">*</span></label
                              >
                              <br />
                              <input
                                type="date"
                                id="memberBirthTemp"
                                name="memberBirthTemp"
                                title="Birthday"
                                class="input-text"
                                v-model="member.memberBirth"
                                :max="getDate"
                              />
                              <br />
                            </div>

                            <div class="input-box">
                              <label>
                                性 別 <span class="required">*</span>
                              </label>
                              <br />
                              <label for="man">
                                <input
                                  type="radio"
                                  id="man"
                                  name="memberGenderTemp"
                                  value="male"
                                  v-model="member.memberGender"
                                />
                                男生
                              </label>
                              <label for="woman">
                                <input
                                  type="radio"
                                  id="woman"
                                  name="memberGenderTemp"
                                  value="female"
                                  v-model="member.memberGender"
                                />
                                女生
                              </label>
                              <br />
                              <br />
                            </div>
                          </li>
                          <li>
                            <div class="input-box">
                              <label for="memberNicknameTemp"
                                >暱 稱 <span class="required">*</span></label
                              >
                              <br />
                              <input
                                type="text"
                                id="memberNicknameTemp"
                                name="memberNicknameTemp"
                                title="NickName"
                                class="input-text"
                                v-model="member.memberNickname"
                              />
                              <br />
                            </div>
                          </li>
                          <li>
                            <div class="input-box">
                              <label for="memberEmailTemp"
                                >電子信箱 <span class="required">*</span></label
                              >
                              <br />
                              <input
                                type="email"
                                name="memberEmailTemp"
                                id="memberEmailTemp"
                                title="Email Address"
                                class="input-text validate-email"
                                v-model="member.memberEmail"
                              />
                              <br />
                            </div>
                          </li>

                          <li>
                            <div class="input-box">
                              <label for="memberTelTemp"
                                >手 機 <span class="required">*</span></label
                              >
                              <br />
                              <input
                                type="tel"
                                name="memberTelTemp"
                                id="memberTelTemp"
                                title="Cellphone"
                                class="input-text required-entry"
                                v-model="member.memberTel"
                              />
                              <br />
                            </div>
                          </li>

                          <li>
                            <label>地 址 <span class="required">*</span></label>
                            <br />
                            <input
                              type="text"
                              title="Street Address"
                              id="memberAddrTemp"
                              name="memberAddrTemp"
                              class="input-text required-entry"
                              v-model="member.memberAddr"
                            />
                            <br />
                          </li>
                        </ul>
                      </fieldset>
                    </li>

                    <li class="buttons-set">
                      <button
                        type="button"
                        class="button"
                        name="prodaction"
                        value="註冊"
                        style="width: 100px"
                        @click="createMember()"
                      >
                        註冊
                      </button>
                    </li>
                  </ul>
                </fieldset>
              </form>
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

export default {
  name: "MyRegister",
  data() {
    return {
      member: {
        memberAccouunt: "",
        memberPassword: "",
        memberLastname: "",
        memberFirstname: "",
        memberGender: "",
        memberNickname: "",
        memberEmail: "",
        memberTel: "",
        memberAddr: "",
        memberBirth: "",
      },
    };
  },
  mounted() {
    axios.get("http://localhost:8081/api/test/session/email").then((res) => {
      if (res.status != 404) {
        this.member.memberEmail = res.data;
        console.log(this.member.memberEmail);

        $("#memberEmailTemp").prop("disabled", true);
      }
    });
  },
  computed: {
    getDate() {
      let date = new Date();
      return date.toISOString().split("T")[0];
    },
  },
  methods: {
    createMember() {
      if (
        this.member.memberAccouunt != "" &&
        this.member.memberPassword != "" &&
        this.member.memberLastname != "" &&
        this.member.memberFirstname != "" &&
        this.member.memberGender != "" &&
        this.member.memberNickname != "" &&
        this.member.memberEmail != "" &&
        this.member.memberTel != "" &&
        this.member.memberAddr != "" &&
        this.member.memberBirth != ""
      ) {
        axios
          .post("http://localhost:8081/api/member/new", this.member)
          .then((res) => {
            if (res.data.returnCode == "0000") {
              this.$swal("CMA", "註冊成功", "success");
              this.$router.push({ path: "/login" });
            } else {
              this.$swal("CMA", res.data, "success");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        this.$swal("CMA", "＊為必填！！", "error");
      }
    },
  },
};
</script>

<style scoped>
#man {
  margin: 0 3px;
}
#woman {
  margin: 0 3px;
}
</style>