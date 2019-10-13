# Electron, TypeScript, and React Template

The goal of this base project is to have a solid base structure without all that hidden crap that
other boilerplates use and hide any _actual_ examples of _how_ it works.

I personally love Semantic UI for the UI base, but you can easily swap it out for something else.

## References/Dependencies

- [Electron](https://electronjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [React](https://reactjs.org)
- [Webpack](https://webpack.js.org)
- [Semantic UI React](https://react.semantic-ui.com)

## Basic Scripts

```bash
# Install deps, build, and watch for changes. If main process changes, electron will reload.
npm run dev

# Builds in development mode
npm run build:dev

# Builds in production mode
npm run build:prod

# Builds the electron application in a directory (for testing)
npm run pack

# Builds the electron application
npm run dist
```
