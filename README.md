## SPFx-react-redux-example

### Running Locally

```bash
git clone the repo
npm i
npm i -g gulp
gulp serve
```

### Deploying to an app catalog

First update the gulpfile to include your tenant information.

```bash
gulp bundle --ship
gulp package-solution --ship
gulp upload-app-pkg --password "<password>"
gulp deploy-sppkg --password "<password>"
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

