# Zero-Trust Score Widget

This Vue.js component visualizes a company's Zero-Trust Score based on provided metrics. It's built using Vue.js 3.x and Vuetify, making it easy to integrate into your Vue applications.

## runs on Vuetify
- Copying the Vuetify files:  App.vue , ZeroTrustScoreWidget.vue ,date.json and style.css .
- In the ZeroTrustScoreWidget file from the <script> tag delete the link to style.css .
  https://play.vuetifyjs.com/#eNqFFstu20bwVwbswVZj6lknKeMYaJMckoNdxGkLJMphRQ6ltfnK7lKyYvgjeugh6KHpV+l3OrvLx5JSHECQVvN+z3y486QIR78UxXBdohd4ZwrTImEKz+cZwFnE1+ZBz/co8neilOoqzAX+yaMlKggiptjzuXct8+wlPecejCznyLKejRyB9FeGghfKkPC0yIWCg3JjkadwNBwdQmpLjxwBte6GSds01NAjGI3gLZL6EGHD1Qq2eSngzdXlBWgiKJhaabMA8NbIijBmZaLgzjod5qQiw0zJoAbBQYNPLPK++tXCjwcti0BViqz9D43RFQOxuhLoz9moCZV34ikZ5lnMl8YtSpORNPe0fTxBcVkonmdy7jVmzj2WJPnmjYEpUWKliHhWGN4cgF/LWw2be78JlCjWOPcanGKCnLToV1cXeEvvBpnmUZkQ9QPItyjzpNQ2WrJfyywisx06Y+1rk1CeLd/JV7cKM1k7pQ01cTH0c48q4MUDrrfmzoazKp70oTjqYv9WTe1X/9oPmYggTJiUVOSfidEnU6TyKR0C/Y3hnXt1i1h6X3GVYMOlc8Sy7QVLKUbnd3emqCoA3N+fjVyuviQKZgWyzdhItQZQUSjGMx3Jhsxwy3KxQhahOL9co6Dgmqr1jdtg/A6oRV26DnvEJYVh68+0vdrtNl7a5IWgLtfsLV1jZNX3jaiEk0a1yemRtUFJUQkeSoPt265hPqdMwNqPc9FQA8+g4qMxE9zgtkENMxvdVk5XkgkUtXGHoEdi40/+OiLJWROmPtUDYiiihqZLAuBIjtC2NtUtKejJ6mirhXUd65Ac8qxjEIuiPNu3uBD5khpdpyBDJvrmrn0eU3gvynSBYsjla9KyRHFcuWDKbzD3+mwB9Tsm/polJbbZMdSHiNktEU3G431ct1Aaa/uEpgp7rvR9/cOXNPvDFfmEiUT6MUbumUeyalKzq3oBkwVtEWEUVs8eCUGzvt21aGizb0C2sDTHA6ntZ66DdTrOQt2ma4ZHY8+iVEpP3zqxgsubFzTolrnYukE9f0sIqDE0U+/AJe0MLD3pK8Z6brm46g6wkIdPgcPbl/JauItXb1XnL4DaFjTHLhfXGNYb2G7bTyUXGHUWXLuc6189h0ulyRqRzmh213ezwNWKy6E5L9yp3pMPvYn5HUnddbQvrBp5B6VY14fU/4KjPG6FVkyDYcqK4+MPepadgOnKjwN4fg7HjiwAjQ7MNzyCI4AjJ5gApmADy91BOHMsgKOXzlSjsU1yHhmRJ3tHGAtVyRKXXbZi7weD/Ri4JfidcHYK+2Dm944rfRQ0N2P3uGoWt75aMPtEg6M6WuZeL3FE8uS0QjVryjlKCmrETS6iKyUwW9LdScin0+YAWilVyFcZWyQYaVTMaFY12JjqeUNr3CHoHG8yj9WGCfy9IEfQKP751L2Yuv2uvdn9t/uy+2f39+5f2P1Fz6/0/Lr70rineIpSsbSw5NPxdOZPJv50+m4yDmanwfTJez042rtKqm2Cw1BKCuHwG7eSDcc1gXm8rXdXACF9o3imcQsKEQpfsIiX1PxPi1sDjonUl/wzFeJkOBWYEpRUu31oZTuEM0tWwTbIlyvStciTiKAarqeUzxK+pPp1TEjpfOSZv8hpZKYBTMfGBtJG+np3l9X5DTmjH2HBwpulyOncJZ4kFwH8gI/jJ3H8DH4caZqChjwdvOTV48rTgwGwyt2ryWrumToZr1dGSCXWV3kRwGkPWFPXcLKzkpNgTBGana43tX3VhRfAUnAdNjAPmu92kmuvyjQjOwUWyNTx5AQmsRhYSkbKW7/2QrHg8lOJVSLdhdnxzdo0sUk4nEsbHbviDvD+NCZ/bKXen2Rlkpivj/8DAS/Ybw==
 
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
         "companyName": "enqode",
         "ZeroTrustScore": 75,
         "metrics": {
            "passwordStrength": 85,
            "httpsEnabled": true,
            "firewallEnabled": true,
            "softwareUpdates": 95
          },
         "riskCategory": "סיכון בינוני",
         "timestamp": "2023-11-22T10:35:27Z"
       }
    }
  }
}
</script>
```

## Notes

- Ensure that you provide descriptions for each metric in your actual implementation. The current example uses placeholder descriptions.
- The component uses Vuetify's v-progress-linear for numeric scores and v-switch for boolean values. Adjust as needed for your specific metrics.


