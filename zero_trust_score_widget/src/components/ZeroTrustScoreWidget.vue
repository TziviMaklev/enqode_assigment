<template>
    <v-card class="zero-trust-score-widget">
      <v-card-title class="companyName">{{ companyName }}</v-card-title>
      <v-card-text>
        <div class="score-container">
          <v-subheader>Overall Zero-Trust Score: </v-subheader>
          <v-display-3>{{ zeroTrustScore }}<br /></v-display-3>
        </div>
        <v-list two-line class="metrics-list">
          <v-list-item v-for="metric in metrics" :key="metric.name">
            <v-list-item-content>
              <v-list-item-title>{{ metric.name }} </v-list-item-title>
              <v-list-item-subtitle
                >{{ metric.description }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-addon>
                <v-progress-linear
              v-if="Number.isInteger(metric.score)"
              :model-value="metric.score"
              :max="100"
              class="metric-progress"
            ></v-progress-linear>
            <V-switch v-else v-model="metric.score"></V-switch>
              <span class="metric-score"> {{ metric.score }} </span>
            </v-list-item-addon>
          </v-list-item>
        </v-list>
        <v-card-text class="button" v-if="riskCategory"
          >Risk Category: {{ riskCategory }}</v-card-text
        >
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import '../style.css'

    export default {
      props: {
        data: {
          type: Object,
          required: true,
        },
      },
      computed: {
        companyName() {
          return this.data.companyName
        },
        zeroTrustScore() {
          return this.data.ZeroTrustScore
        },
        metrics() {
          return Object.entries(this.data.metrics).map(([name, value]) => ({
            name: name + '  ',
            score: value,
            description: 'Description for ' + name, // Replace with actual descriptions
          }))
        },
        riskCategory() {
          return this.data.riskCategory
        },
      },
    }
  </script>
  