<template>
  <div class="main-container col2-right-layout">
    <div class="main container">
      <div class="row">
        <section>
          <div class="col-main">
            <div class="dashboard">
              <div class="welcome-msg" id="helloName"></div>
              <div class="recent-orders">
                <div class="title-buttons">
                  <strong>最近訂單</strong><a id="oldOder">&nbsp;</a>
                </div>
                <div class="table-responsive">
                  <table class="data-table" id="my-orders-table">
                    <thead>
                      <tr class="first last">
                        <th>訂單編號 #</th>
                        <th>訂單建立日期</th>
                        <th>付款方式</th>
                        <th>到貨超商</th>
                        <th>宅配地址</th>
                        <th><span class="nobr">訂單總額</span></th>
                        <th>狀態</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody id="naka"></tbody>
                  </table>
                </div>
              </div>
              <div class="box-account">
                <div class="page-title">
                  <h1><strong>帳號 資訊</strong></h1>
                </div>
                <div class="col2-set">
                  <div class="col-1">
                    <h5>會員 資訊</h5>
                    <a href="#">編輯</a>
                    <div id="memberinformation">
                      <!-- <p>John Doe<br> jone-doe@example.com<br><a href="#">Change Password</a></p> -->
                    </div>
                  </div>
                  <div class="col-2"></div>
                </div>
                <div class="col2-set">
                  <h2><strong>通訊錄</strong></h2>
                  <div class="col-1">
                    <h5>帳單 地址</h5>
                    <div id="memberAdress">
                      <!-- <address>John Doe<br> USA<br> Anytown, Alabama, 46532<br> United States<br> T: 454541<br><a
                          href="#">Edit Address</a></address> -->
                    </div>
                  </div>
                  <div class="col-2"></div>
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
import $ from "jquery";
// import store from "@/store/index";

export default {
  name: "MyDashboard",
  mounted() {
    let Names;
    let Orders;
    var settings = {
      url: "http://localhost:8081/api/test/session/mid",
      method: "GET",
    };

    $.ajax(settings).done(function (response) {
      console.log(response);

      var settings = {
        url: `http://localhost:8081/api/member/${response}`,
        method: "GET",
        timeout: 0,
      };
      $.ajax(settings).done(function (e) {
        console.log(e);

        Names = JSON.parse(e);
        console.log("MID=" + Names.memberId);

        $("#helloName").append(
          `<strong>你好,<h2> ${Names.memberFirstname} ${Names.memberLastname}</h2> </strong>`
        );
        $(
          "#memberinformation"
        ).append(` <p> 姓名: ${Names.memberFirstname} ${Names.memberLastname}<br> 信箱: ${Names.memberEmail}<br></p>
`);
        $("#memberAdress").append(
          ` <address>姓名: ${Names.memberFirstname} ${Names.memberLastname}<br> 地址: ${Names.memberAddr}<br> 電話: ${Names.memberTel} <br></address>`
        );

        //以下開始填入訂單資訊
        var settings = {
          url: `http://localhost:8081/api/orders/${Names.memberId}`,
          method: "GET",
        };
        $.ajax(settings).done(function (e) {
          Orders = e;
          Orders.sort(function (a, b) {
            return b.orderId - a.orderId;
          });
          $.each(Orders, (index, products) => {
            //   if(products.會員編號==n){
            $("#naka").append(` <tr >
                <td>${products.orderId}</td>
                <td>${products.createDate}</td>
                <td>${products.payMethod}</td>
                <td>${
                  products.deliverCvs != null ? products.deliverCvs : ""
                }</td>
                <td>${
                  products.deliverAddr != null ? products.deliverAddr : ""
                }</td>
                <td><span class="price">$${
                  products.orderTotalAmount
                }</span></td>
                <td><em>${products.status}</em></td>
                <td class="a-center last"><span class="nobr"></td>
              </tr>`);
          });
        });
        //填入訂單資訊完畢
      });
    });
  },
};
</script>

<style scoped>
</style>