<template>
  <div class="m-auto">
    <div class="homeView">
      <main>

      <!-- 상단 소개바 -->
      <div class="firstSection">
        <p class="new">NEW!</p>
        <p class="startFirst">5,500원이면 지금 </p>
        <p class="startSecond">지금 시작할 수 있습니다.</p>
        <p class="detail">자세히 알아보기 ></p>
      </div>

      <!-- 메인 화면 -->
      <div class="main">
        <div class="mainBackImage">

          <img src="@/assets/image/logo/pngwing.com.png" alt="logo" class="leftLogo">

          <select name="" id="" class="selectBox">
            <option selected class="option">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                한국어
              </svg>
            </option>
            <option value="" class="option">English</option>
          </select>

          <button class="loginButton">
            <router-link to="/profile" >
              로그인
            </router-link>
          </button>

          <H1>
            영화와 시리즈를 
            <br>
            무제한으로.
          </H1>
          
          <p class="firstP">
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </p>
          <p class="secondP">
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
          </p>

          <form class="membershipLogin">
            <input type="e-mail" placeholder="이메일 주소" >
            <button type="submit">시작하기 ></button>
          </form>

        </div>
      </div>

      <!-- 두번째 메인 화면 -->
      <div class="=secondMain">

        <div class="line">
        </div>

        <div class="secondMainSection">
          <div class="secondMainScreen">
            <p class="secondMainOne">TV로 즐기세요.</p>
            <p class="secondMainTwo">스마트 TV, PlayStation, Xbox, Chromecast,</p>
            <p class="secondMainTwo">Apple TV, 블루레이 플레이어 등 다양한</p>
            <p class="secondMainTwo">디바이스에서 시청하세요.</p>
          </div>
          <div class="secondMainImage">
            <img src="@/assets/image/backImage/secondmain.png" alt="" class="secondImage">
          </div>
        </div>

        <div class="line">
        </div>

        <div class="secondTwoMainSection">
          <div class="secondTwoMainImage">
            <img src="@/assets/image/backImage/secondmain2.png" alt="" class="secondTwoImage">
          </div>
          <div class="secondTwoMainScreen">
            <p class="secondMainOne">다양한 디바이스에서</p>
            <p class="secondMainOne">시청하세요.</p>
            <p class="secondMainTwo">각종 영화와 시리즈를 스마트폰, 태블릿, 노트북,</p>
            <p class="secondMainTwo">TV에서 무제한으로 스트리밍하세요. 추가</p>
            <p class="secondMainTwo">요금이 전혀 없습니다.</p>
          </div>
        </div>

        <div class="line">
        </div>

        <!-- 아코디언 화면 -->
        <div class="lastSection" style="">
          <p class="last" style="color:white; font-size:50px; padding:40px">자주 묻는 질문</p>

        <!-- 아코디언 -->
            <div class="accordion" id="accordionExample" style=" margin:auto; width:800px; font-size: 24px; border: #333333;" >
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="color:white; background-color: #333333; font-size: 24px;">
                    넷플릭스란 무엇인가요?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="color:white; background-color: #333333;">
                  <div class="accordion-body">
                    넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.<br><br>
                    저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.
                  </div>
                </div>
              </div>

              <div style="padding:7px;">
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="color:white; background-color: #333333; font-size: 24px;">
                    넷플릭스 요금은 얼마인가요?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body" style="color:white; background-color: #333333;">
                    스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.                  </div>
                </div>
              </div>

              <div style="padding:7px;">
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="color:white; background-color: #333333; font-size: 24px;">
                    광고형 베이식은 뭐가 다른가요?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style="color:white; background-color: #333333;">
                  <div class="accordion-body">
                    광고형 베이식은 저렴한 요금으로 영화와 시리즈를 즐길 수 있는 방법입니다. 제한된 수의 중간 광고와 함께 다양한 디바이스에서 좋아하는 콘텐츠를 스트리밍할 수 있습니다. 저장 기능은 지원되지 않으며, 라이선스 제한으로 인해 일부 영화와 시리즈를 이용할 수 없습니다. 또한 일부 위치 및 디바이스 제한도 적용됩니다. 자세히 알아보기.                  </div>
                </div>
              </div>

              <div style="padding:7px;">
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style="color:white; background-color: #333333; font-size: 24px;">
                    어디에서 시청할 수 있나요?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample" style="color:white; background-color: #333333;">
                  <div class="accordion-body">
                    언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.<br><br>
                    iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.
                    </div>
                </div>
              </div>

              <div style="padding:7px;">
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style="color:white; background-color: #333333; font-size: 24px;">
                    멤버십을 해지하려면 어떻게 하나요?
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample" style="color:white; background-color: #333333;">
                  <div class="accordion-body">
                    넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.
                    </div>
                </div>
              </div>

              <div style="padding:7px;">
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style="color:white; background-color: #333333; font-size: 24px;">
                    넷플릭스에서 어떤 컨텐츠를 시청할 수 있나요?
                  </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample" style="color:white; background-color: #333333;">
                  <div class="accordion-body">
                    넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하세요.                    </div>
                </div>
              </div>

              <div style="padding:7px;">
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" style="color:white; background-color: #333333; font-size: 24px;">
                    아이들이 넷플릭스를 봐도 좋을까요?
                  </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample" style="color:white; background-color: #333333;">
                  <div class="accordion-body">
                    멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.<br><br>
                    키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.                   
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-top:50px; margin-bottom:100px;">
              <p class="secondP">
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
              </p>

              <form class="membershipLogin">
                <input type="e-mail" placeholder="이메일 주소" >
                <button type="submit">시작하기 ></button>
              </form>
            </div>

        </div>

        <div class="line">
        </div>

      </div>

      <!-- 푸터 -->
      <div class="mainFooter">
        <div class="footerSection">
          <p style="margin-top: 50px; margin-bottom:25px; margin-left:550px;">질문이 있으신가요? 문의 전화:  080-001-9587</p>

              <ul style="margin-left:520px; ">
                <li>자주 묻는 질문</li>
                <li>고객 센터</li>
                <li>계정</li>
                <li>미디어 센터</li>
              </ul>
              <ul style="margin-left:50px;">
                <li>투자 정보(IR)</li>
                <li>입사 정보</li>
                <li>넷플릭스 지원 디바이스</li>
                <li>이용 약관</li>
              </ul>
              <ul style="margin-left:50px;">
                <li>개인정보 처리방침</li>
                <li>쿠키 설정</li>
                <li>회사 정보</li>
                <li>문의 하기</li>
              </ul>
              <ul style="margin-left:50px;">
                <li>속도 테스트</li>
                <li>법적 고지</li>
                <li>오직 넷플릭스에서</li>
              </ul>

            <select name="" id="" class="selectFooter" >
                <option selected class="option">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                    한국어
                  </svg>
                </option>
                <option value="" class="option">English</option>
              </select>


          
        </div>
      </div>

      </main>
    </div>
  </div>
</template>


<script>
/* eslint-disable */
// import initHome from "../assets/js/home";

export default {
  mounted() {
    //  initHome();
  }
}
</script>


<style>

@import url("../assets/css/homeView.css");

</style>

