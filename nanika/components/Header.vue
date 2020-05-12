<template>
<header>
  <div class="container">
    <div class="phrase">
      <p>デザインとテクノロジーでワクワクする未来を描く</p>
    </div>
    <img class="header-logo" src="images/logo_nanika_inline.png" />

    <div class="menubtn" v-on:click="toggle_menu()">
      <div class="bars top" v-bind:class="{active: isActive}"></div>
      <div class="bars middle" v-bind:class="{active: isActive}"></div>
      <div class="bars bottom" v-bind:class="{active: isActive}"></div>
    </div>
    <nav v-bind:class="{active: isActive}">
      <div class="label"><p>contents</p></div>
      <ul class="navItemGroup">
        <li class="navItem" v-on:click="toggle_menu()"><nuxt-link v-scroll-to="'#sct-01'" to>Section 01</nuxt-link></li>
        <li class="navItem" v-on:click="toggle_menu()"><nuxt-link v-scroll-to="'#sct-02'" to>Section 02</nuxt-link></li>
        <li class="navItem" v-on:click="toggle_menu()"><nuxt-link v-scroll-to="'#sct-03'" to>Section 03</nuxt-link></li>
        <li class="navItem" v-on:click="toggle_menu()"><nuxt-link v-scroll-to="'#sct-04'" to>Section 04</nuxt-link></li>
        <li class="navItem" v-on:click="toggle_menu()"><nuxt-link v-scroll-to="'#sct-05'" to>Section 05</nuxt-link></li>
      </ul>
    </nav>
    <div class="backToTop" v-bind:class="{active: flgBack}">
      <nuxt-link v-scroll-to="'body'" to>
        <div>
          <i class="fa fa-angle-up"></i>
          <p>Back to Top</p>
        </div>
      </nuxt-link>
    </div>
  </div>  
</header>
</template> 
<script>
export default {
  data: function(){
    return {
      isActive: false,
      scrollY: 0,
      flgBack: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggle_menu: function() {
      this.isActive = !this.isActive
    },
    handleScroll() {
      this.scrollY = window.scrollY;
      if (scrollY < 100) {
        return this.flgBack = false;
      } else {
        return this.flgBack = true;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~assets/styles/base.scss";
header {
  width: 100%;
  height: 60px;
  background-color: #fff;
}
.phrase {
  margin: 10px 10px 0 10px;
  width: calc(100% - 20px);
  p {
    font-size: 0.5rem;
  }
}
img.header-logo {
  margin: auto 10px;
  height: 30px;
  width: auto;
}
nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  max-width: 100%;
  height: 100%;
  background-color: teal;
  transition: 0.3s;
  z-index: 9;
  &.active {
    right: 0;
  }
  @include mq(md) {
    position: absolute;
    right: 0;
    background-color: transparent;
    width: 50%;
    height: auto;
  }
  .label {
    position: relative;
    top: 10px;
    width: 100%;
    height: 50px;
    text-align: center;
    @include mq(md) {
      display: none;
    }
    p {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
    }
  }
  .navItemGroup {
    position: relative;
    top: 0;
    width: 100%;
    @include mq(md) {
      display: flex;
      justify-content: flex-end;
    }
  }
  .navItem {
    width: 90%;
    margin: 5% 10px;
    border: solid 1px #fff;
    text-align: center;
    line-height: 3rem;
    a {
      display: block;
      color: #fff;
    }
    @include mq(md) {
      width: auto;
      margin: auto;
      border: none;
      line-height: 2md;
      a {
        color: #404040;
      }
    }
  }
}
.menubtn {
  position: fixed;
  top: 5px;
  right: 5px;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(255,255,255,0.3);
  z-index: 10;
  .bars {
    position: absolute;
    left: 10px;
    box-sizing: border-box;
    width: 30px;
    height: 2px;
    z-index: 2;
    transition: .5s;
    &.top {
      top: 10px;
      border-top: solid 2px;
      &.active {
        top: 24.3px;
        left: 9.8px;
        border-top: solid 1.4px;
        transform: skew(-45deg,45deg);
      }
    }
    &.middle {
      top: 24px;
      border-top: solid 2px;
      &.active {
        left: 25px;
        width: 0;
      }
    }
    &.bottom {
      top: 38px;
      border-bottom: solid 2px;
      &.active {
        top: 23.8px;
        left: 9.8px;
        border-bottom: solid 1.4px;
        transform: skew(45deg,-45deg);
      }
    }
  }
  @include mq(md) {
    display: none;
  }
}
.backToTop {
  position: fixed;
  bottom: 5px;
  right: 5px;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(255,255,255,0.3);
  text-align: center;
  visibility: hidden;
  opacity: 0;
  z-index: -1;
  transition: 1s;
  &.active {
    visibility: visible;
    opacity: 1;
    z-index: 10;
  }
  a {
    color: #404040;
  }
  i {
    width:100%;
  }
  p {
    width: 100%;
    font-size: 0.6rem;
    line-height: 0.8rem;
  }
}
</style>