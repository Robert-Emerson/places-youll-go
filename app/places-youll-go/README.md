# places you'll go
A React app for finding interesting sights to visit. Built to play around with React, Redux, and general frontend development.

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Dependencies
- [Redux](https://redux.js.org)
- [Auth0](https://auth0.com/)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/)
- File hosting for static content ([Azure Blob Storage](https://portal.azure.com))

## Project Layout
- __app__ - Composes cross component UI from `feature` and `shared` code.
- __features__ - Standalone React components. Can take dependencies on `shared` code and other components, but no dependencies on `app` code
- __shared__ - UI components found on every page, as well as cross-cutting concerns. Cannot take dependencies on any `feature` or `app` code.

## Inspiration

- `npx degit reduxjs/redux-templates/packages/vite-template-redux my-app`
- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)

