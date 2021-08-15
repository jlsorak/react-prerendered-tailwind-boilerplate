# React Prerendered Tailwind Bootstrap

A React boilerplate preconfigured to prerender pages and style with Tailwind CSS.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerendering

Builds are configured with [React Snap](https://github.com/stereobooster/react-snap) to pre-render pages into static HTML. This has the benefit that you can deliver a fully populated HTML file to the user resulting in a faster experience when compared to client side rendering.

The static files are built with help from a headless browser which crawls the different routes, meaning the process is entirely automated.

## Deploying with AWS Amplify

Deploying to AWS Amplify is easy:

- Head to Amplify in AWS
- Select "New App" --> "Host Web App"
- Connect your Git repository
- Save and deploy app
