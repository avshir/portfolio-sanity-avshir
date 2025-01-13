# React + TypeScript + Vite
## About project

## Used
- React + Vite + TS
- react-router v.6 или v.7
- Tailwind CSS
- sanity.io

- scss- for CubespinnerAnimation

### Utilities
- vite-plugin-svgr (for to transform SVGs into React components )
- tailwind-merge
- @headlessui/react - tailwind CSS plugin, for burger-menu

- [react-toastify](https://www.npmjs.com/package/react-toastify) - for notifications in app
- [react-icons](https://www.npmjs.com/package/react-icons), demo [React Icons](https://react-icons.github.io/react-icons/)

## Forms
- @tailwindcss/forms
- react-hook-form - for ContactForm
- web3forms.com (for email av.shirinskaya@gmail.com) - to send message for Contact Form - free 250 emails/month

### Animation
- motion - plugin Framer motion for animations
- CubespinnerAnimation (HomePage) - custom animation, use react-icons, scss
- AnimatedLettersMotion (Home Page) - custom animation, use Framer motion, tailwind css
- AnimatedLettersComponent (Temp Page) - custom animation, use SCSS,tailwind css

### Map
- leaflet
- [react-leaflet](https://react-leaflet.js.org/docs/start-setup/) - an open-source JavaScript library for mobile-friendly interactive maps (React), with customIcon
  - Make sure Leaflet's CSS is loaded (add CSS link in index.html or import "leaflet/dist/leaflet.css";  )
  - Make sure your map container has a defined height

## Sanity.io
- [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) - for correct work with sanity.io, the official Tailwind CSS Typography plugin provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don’t control, like HTML rendered from Markdown, or pulled from a CMS.
- [@sanity/client](https://www.sanity.io/)
- [@sanity/image-url](https://www.npmjs.com/package/@sanity/image-url) - quickly generate image urls from Sanity image records.
- [@sanity/block-content-to-react](https://www.npmjs.com/package/@sanity/block-content-to-react)- Render an array of block text from Sanity with React


====================

## TODO
- удалить Snackbar component (ранее использовался в ContactForm)
- удалтиь facts, FactsSection
- ContactForm - после отарпавки сообщения появляется "цифра" после кнопки