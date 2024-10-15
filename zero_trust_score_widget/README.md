# Zero-Trust Score Widget

This Vue.js component visualizes a company's Zero-Trust Score based on provided metrics. It's built using Vue.js 3.x and Vuetify, making it easy to integrate into your Vue applications.

## Features

- Displays overall Zero-Trust Score
- Shows individual scores for each metric with descriptions
- Visual representation of each metric using progress bars
- Indicates risk category

## Prerequisites

- Vue.js 3.x
- Vuetify 3.x

## Installation

1. Copy the `ZeroTrustScoreWidget.vue` file into your project's components directory.

2. Ensure you have Vuetify installed in your project. If not, you can install it using:

   ```
   npm install vuetify
   ```

## Usage

1. Import the component in your Vue file:

   ```javascript
   import ZeroTrustScoreWidget from './path/to/ZeroTrustScoreWidget.vue'
   ```

2. Register the component in your Vue instance:

   ```javascript
   export default {
     components: {
       ZeroTrustScoreWidget,
     },
     // ...
   }
   ```

3. Use the component in your template, passing the required data:

   ```html
   <template>
     <div>
       <ZeroTrustScoreWidget :data="jsonData" />
     </div>
   </template>

   <script>
   import ZeroTrustScoreWidget from './ZeroTrustScoreWidget.vue'
   import jsonData from './path/to/your/data.json'

   export default {
     components: {
       ZeroTrustScoreWidget,
     },
     data() {
       return {
         jsonData,
       }
     },
   }
   </script>
   ```

## Props

The component accepts a single prop:

- `data` (Object, required): The JSON data structure containing the Zero-Trust Score information.

## JSON Data Structure

The component expects the following JSON structure:

```json
{
  "companyName": "FinTechSecure Ltd.",
  "ZeroTrustScore": 58.5,
  "metrics": {
    "metric1": 75,
    "metric2": 60,
    // ... other metrics
  },
  "riskCategory": "Moderate Risk"
}
```

## Customization

You can customize the appearance of the widget by modifying the Vuetify components and styles within the `ZeroTrustScoreWidget.vue` file.

## Example

Here's a basic example of how to use the Zero-Trust Score Widget in a Vue application:

```vue
<template>
  <v-app>
    <v-main>
      <ZeroTrustScoreWidget :data="zeroTrustData" />
    </v-main>
  </v-app>
</template>

<script>
import ZeroTrustScoreWidget from './components/ZeroTrustScoreWidget.vue'

export default {
  name: 'App',
  components: {
    ZeroTrustScoreWidget,
  },
  data() {
    return {
      zeroTrustData: {
        companyName: "FinTechSecure Ltd.",
        ZeroTrustScore: 58.5,
        metrics: {
          networkSecurity: 75,
          dataEncryption: 80,
          accessControl: 60,
          // ... other metrics
        },
        riskCategory: "Moderate Risk"
      }
    }
  }
}
</script>
```

## Notes

- Ensure that you provide descriptions for each metric in your actual implementation. The current example uses placeholder descriptions.
- The component uses Vuetify's v-progress-linear for numeric scores and v-switch for boolean values. Adjust as needed for your specific metrics.


