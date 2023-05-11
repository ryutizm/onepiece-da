<script setup lang="ts">
  import { ref, onMounted, watch, computed, nextTick } from 'vue';

  defineProps([]);

  const startFlg = ref(false);
  const currentQuestion = ref("");
  const questions = [
    "りんご",
    "さつまいも",
    "いかのはこぶね",
    "かぼちゃのてんぷら",
    "あしたはきっといいひになる",
  ];
  const typeBox = ref("");
  const currentQuestionCounts = ref(0);
  const questionCounts = ref();
  const typeForm = ref();

  const gameStart = () => {
    startFlg.value = !startFlg.value;
      nextTick(() => {
        typeForm.value.focus()
        console.log("hello world")
      })
  }

  onMounted(() => {
    currentQuestion.value = questions[0]
    questionCounts.value = questions.length;
    console.log("hello vue")
  });

  watch(typeBox, (text) => {
    if(text == currentQuestion.value) {
      questions.splice(0, 1)
      currentQuestion.value = questions[0];
      typeBox.value = ""
      currentQuestionCounts.value = currentQuestionCounts.value +1;
      console.log(styleObject)
    }
  });

  const styleObject = computed(() => {
    // const gaugeWidth = `${20 * currentQuestionCounts.value}%`;
    const gaugeWidth = 20 * currentQuestionCounts.value + "%";
    const gaugeColor = currentQuestionCounts.value === questionCounts.value ? 'skyblue' : 'orange';
    return {
      "width": gaugeWidth,
      "backgroundColor": gaugeColor
    }
  });
</script>


<template>
  <div class="container">
    <button v-if="startFlg!=true" class="startButton" @click="gameStart">START</button>
    <div v-if="startFlg" class="contentsItems">
      <div class="question">{{ currentQuestion }}</div>
      <div v-if="currentQuestionCounts == questionCounts" class="clear">CLEAR!! <br> congratulations!</div>

      <div class="typeFormWrapper">
        <input ref="typeForm" v-model="typeBox" type="text" class="typeForm">
      </div>

      <div class="gaugeWrapper">
        <div :style="{ 'width': styleObject.width, 'backgroundColor': styleObject.backgroundColor }" class="gauge"></div>
      </div>
  
        <div>{{ currentQuestionCounts }}/{{ questionCounts }}</div>
    </div>
  </div>
</template>