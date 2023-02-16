# codedazur-assessment

This is my assessment for code d'azur.

## Requirements

The assignment is to follow https://github.com/emilybache/GildedRose-Refactoring-Kata. Please use the TypeScript version of the kata. Carefully read the requirements on how to refactor the application.

Besides refactoring the existing code, we would also like to see that you build an interactive graphical interface around the application.

The following technologies have been used:

- React framework
- Hooks and context
- Styled components / Emotion
- Framer motion

## Implementation

I wrote test for the Gilded Rose requirements in order to not cause regression while refactoring. Then I refactored the updateQuality method by separating use cases. The Conjured item implementation was made after this refactor.

The Gilded Rose package was used as a module in the React project. It is added to a context where the application can access gilded rose data anywhere and use the updateQuality method to pass the time, add a new item or reset the application.

For the UI I implemented a very clean interface with a monochrome pallette where users can access the aforementioned features easily. No external component libraries (e.g. Chakra UI, MUI) have been used, the components have been implemented with custom styled components. A basic design system could easily be implemented with these elements (button, text, etc) but for the sake of simplicity (and YAGNI) the style definitions are mostly in the components where they are used.

# Instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
