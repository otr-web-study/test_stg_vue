<template>
  <div class="lds-css">
    <div class="lds-double-ring">
      <div></div>
      <div></div>
    </div>
    <div class='lds-cover'></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
@keyframes lds-double-ring {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes lds-double-ring {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes lds-double-ring_reverse {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@-webkit-keyframes lds-double-ring_reverse {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

.lds-cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: .2;
}

.lds-css {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* align-items: center;
  width: 100%;
  height: 100%; */
}

.lds-double-ring div {
  position: absolute;
  width: 160px;
  height: 160px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  border: 8px solid #000;
  border-color: #3d7ec0 transparent #3d7ec0 transparent;
  -webkit-animation: lds-double-ring 1.5s linear infinite;
  animation: lds-double-ring 1.5s linear infinite;
}
.lds-double-ring div:nth-child(2) {
  width: 140px;
  height: 140px;
  top: 30px;
  left: 30px;
  border-color: transparent #cc4545 transparent #cc4545;
  -webkit-animation: lds-double-ring_reverse 1.5s linear infinite;
  animation: lds-double-ring_reverse 1.5s linear infinite;
}
.lds-double-ring {
  width: 77px !important;
  height: 77px !important;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}
</style>