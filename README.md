# Styleguide

## Setup

You need to have yarn installed which you can do by `npm -g install yarn`. After that, run this command:

```
npm run start
```

This will download latest dependencies and will start gulp.

## Deployments

The deployment process for the styleguide has been super streamlined. Just run one of these commands to handle compilation, version bumping, tagging and pushing to github.

```
npm run release:patch  // 0.0.1
npm run release:minor  // 0.1.0
npm run release:major  // 1.0.0
```
