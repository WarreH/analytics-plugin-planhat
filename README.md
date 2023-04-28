# Analytics plugin Planhat

This adds [Analytics](https://github.com/DavidWells/analytics) support for [Planhat](https://www.planhat.com/)

# Installation

```
npm install analytics analytics-plugin-planhat --save
```

# Usage

```
import Analytics from "analytics"
import planhatPlugin from "analytics-plugin-planhat"

const analytics = Analytics({
  app: "[your app name]",
  plugins: [
    planhatPlugin({
      tenantUUID: "[your tenantUUID]",
    }),
  ],
})

// Identify a user
analytics.identify(null as any, {
  firstName: "[firstName]"",
  lastName: "[lastName]"",
  email: "[email]",
  euExtId:"[userId]",
  companyExternalId:"[companyId]"
})

// Track an activity
analytics.track([activity name], {
  [extraAtribute]: [value],
  ...
})
```
# Development

Gulp is used to compile typescript to javascript. The compiled code will be minified and uglified.

````
nmp run build
````

# Powered By

<img style="margin-right:10px;" src="./zapfloor_logo.png" align="left" width="200px">
