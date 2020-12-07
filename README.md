# The Meme of The Day

It is a simple React app that shows a different meme every day of the month and a random meme when the correspondent button is clicked.

## General info

The Meme of The Day makes a request to the [Meme Generator API](https://api.imgflip.com/), processes an array of memes and takes to show the one wich index is equal to the date. When the "Get random meme" button is clicked, a random meme is showed.

The app was originaly created without any library as a part of the [Undefined School](https://github.com/undefinedschool/project-3-meme-of-the-day) course to practice API requests and DOM manipulation, as well as HTML and CSS.

## Technologies

- React
- CSS
- Snowpack (✨ Bootstrapped with Create Snowpack App)

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

## Launch

You can see the app in [Now](https://memeoftheday.now.sh/) or install it in any webserver:

1. Clone the repository:

```
git clone
```

2. Install the dependecies:

```
cd memeOfTheDayReact
npm install
```

3. Use the scripts to run the app in development mode or build for deployment.

## Sources

The button styles were taken from [Kocsten](https://codepen.io/kocsten).

## TODO

- [x] Accessibility improvements
- [ ] Add transitions between random memes
- [ ] Manage errors from API
- [ ] Show a loading component while getting memes
