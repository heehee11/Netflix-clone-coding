<template>
    <div class="home">
      <div class="homeView">
  
        <div class="ment">
          <H1>넷플릭스를 시청할 프로필을 선택하세요.</H1>
        </div>
  
        <div class="profile">
          <div class="profileSelect">
              <li class="profileListTo"><router-link to="/screen" class="profileLink"><img src="../assets/image/profile1.png" class="frofileImage"><p class="profileNickname">키키</p></router-link></li>
              <li class="profileListTo"><router-link to="/screen" class="profileLink"><img src="../assets/image/profile2.png" class="frofileImage"><p class="profileNickname">세이</p></router-link></li>
              <li class="profileListTo"><router-link to="/screen" class="profileLink"><img src="../assets/image/profile3.png" class="frofileImage"><p class="profileNickname">위즈덤유</p></router-link></li>
              <li class="profileListTo"><router-link to="/screen" class="profileLink"><img src="../assets/image/profile4.png" class="frofileImage"><p class="profileNickname">아이엠</p></router-link></li>
              <li class="profileListTo"><router-link to="/screen" class="profileLink"><img src="../assets/image/profile5.png" class="frofileImage"><p class="profileNickname">kids</p></router-link></li>
          </div>
        </div>
  
        
      </div>
    </div>
  </template>
  
  
  <script>
  // @ is an alias to /src
  export default {
  computed(){
    let menuEvent = document.getElementById("profileListTo"); 
  
    menuEvent.addEventListener("mouseover", function (event) {
      event.target.style.color = "white";
    }, false);
  
  
    menuEvent.addEventListener("mouseout", function(event){
      event.target.style.color = "gray";
    }, false)
  }
  }
  </script>
  
  
  <style>
  
    body{
      background-color: black;
    }
  
    H1{
      color: white;
      font-size: 65px;
    }
  
    .ment{
      margin-top: 200px;
      text-align: center;
    }
  
    .home{
      text-align: center;
      margin: auto;
    }
  
    .homeView{
      display: inline;
    }
  
    .frofileImage{
      border-radius: 5px;
      width: 200px;
      width: 200px;
    }
  
    .profile{
      text-align: center;
      margin: auto;
      margin-top:30px
    }
  
    .profileSelect{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .profileListTo{
      display: inline;
      justify-content: center;
      margin: 0px 10px;
    }
  
    .profielList{
      margin-top: 50px;
    }
  
  .profileLink{
      text-decoration-line : none;
      text-decoration : none;
      color: gray;
      font-size: 25px;
      vertical-align: bottom;
  }
  
  .profileNickname{
    text-align: center;
    margin: auto;
    margin-top: 10px;
  }
  
  </style>
  
  