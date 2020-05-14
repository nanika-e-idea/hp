<template>
<div>
  <Header />
  <main>
    <div class="eyecatch">
    </div>
    <section id="sct-01" class="">
      <div class="container">
        <h1>Section 01</h1>
        <ul>
          <li v-for="(article, index) in articles" :key="index">
            <h1>{{article.fields.title}}</h1>
            <v-row>
              <v-col>
                <div v-html="toHtmlString(article.fields.body)"></div>
              </v-col>
            </v-row>
          </li>
        </ul>
      </div>
    </section>
    <section id="sct-02" class="">
      <div class="container">
        <h1>Section 02</h1>
        <p>A boy came dock. <br>
        Each friends give hem icecreame &amp; juice. <br>
        Kangaloo live Mexico.</p>
      </div>
    </section>
    <section id="sct-03" class="">
      <div class="container">
        <h1>Section 03</h1>
        <p>A boy came dock. <br>
        Each friends give hem icecreame &amp; juice. <br>
        Kangaloo live Mexico.</p>
      </div>
    </section>
    <section id="sct-04" class="">
      <div class="container">
        <h1>Section 04</h1>
        <p>A boy came dock. <br>
        Each friends give hem icecreame &amp; juice. <br>
        Kangaloo live Mexico.</p>
      </div>
    </section>
    <section id="sct-05" class="">
      <div class="container">
        <h1>Section 05</h1>
        <p>A boy came dock. <br>
        Each friends give hem icecreame &amp; juice. <br>
        Kangaloo live Mexico.</p>
      </div>
    </section>
  </main>
  <Footer />
</div>
</template>

<script>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import articles from '~/static/json/article.json'

export default {
  components: {
    Header,
    Footer
  },
  asyncData () {
    return {
      articles: articles.items,
    }
  },
  methods: {
    toHtmlString(obj) {
      return documentToHtmlString(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/base.scss";
main{
    height: auto;
    section{
      height:auto;
      &:nth-child(odd) {
        background-color: #efefef;
      }
    }
}

.eyecatch{
    width: 100%;
    height:300px;
    background-color: #404040;
}
</style>