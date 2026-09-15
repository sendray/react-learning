# React Learning

This is a sample React learning application for exploring React concepts from basic to advanced topics. The project grows through small, practical examples covering components, state, effects, routing, API calls, loading states, and styling.

## Features

- Functional components and props
- Class components and local state
- React state with `useState`
- Data fetching with `useEffect`
- Client-side routing with React Router
- Dynamic routes for user details
- Search and client-side filtering
- Loading UI with a shimmer placeholder
- Route-level error handling
- Tailwind CSS v4 utility classes
- Parcel development and production builds

## Tech Stack

- React `19.2.8`
- React DOM `19.2.8`
- React Router DOM `7.18.3`
- Parcel `2.16.4`
- Tailwind CSS `4`
- PostCSS with `@tailwindcss/postcss`

## Getting Started

### Prerequisites

- Node.js and npm installed
- Internet access for the external user API and image assets

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

Parcel serves the application locally and watches the source files for changes. Open the local URL printed in the terminal, usually `http://localhost:1234`.

### Create a production build

```bash
npm run build
```

Parcel bundles the application into the `dist/` directory. The generated `dist/` directory and Parcel's `.parcel-cache/` directory are ignored by Git.

### Run tests

```bash
npm test
```

Jest is declared as the test script entry point, but this project does not currently contain test files.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start Parcel in development mode using `index.html` as the entry point |
| `npm run build` | Create an optimized production bundle with Parcel |
| `npm test` | Run the configured Jest command |

## Bundler and Build Configuration

Parcel is the build tool and bundler for this project. The entry point is defined by the `start` and `build` scripts in `package.json`:

```json
{
	"start": "parcel index.html",
	"build": "parcel build index.html"
}
```

Parcel handles module resolution, JSX transformation, asset processing, development serving, hot reload, and production bundling without a separate JavaScript configuration file.

The `browserslist` setting in `package.json` targets the last two browser versions:

```json
"browserslist": ["last 2 versions"]
```

## Tailwind and PostCSS Configuration

Tailwind CSS is loaded from `index.css`:

```css
@import "tailwindcss";
```

PostCSS is configured in `.postcssrc`:

```json
{
	"plugins": {
		"@tailwindcss/postcss": {}
	}
}
```

The global stylesheet also provides the base `html` and `body` sizing rules. Most current component styling uses Tailwind utility classes, while several older class selectors remain commented out in `index.css` for learning reference.

## Application Structure

```text
.
├── index.html                 # HTML entry point and React mount element
├── index.css                  # Tailwind import and global styles
├── package.json               # Scripts, dependencies, and browser targets
├── .postcssrc                 # Tailwind PostCSS plugin configuration
└── src/
		├── App.js                 # React root, router, and route layout
		├── components/
		│   ├── About.js           # About page and component examples
		│   ├── Card.js            # User summary card
		│   ├── CardContainer.js   # Fetching, searching, and card listing
		│   ├── CardDetails.js     # Dynamic user details page
		│   ├── Error.js            # Router error boundary view
		│   ├── Header.js          # Navigation and login/logout state
		│   ├── Shimmer.js          # Loading placeholder cards
		│   ├── User.js             # Functional component example
		│   └── UserClass.js        # Class component and state example
		└── utils/
				└── constants.js       # API endpoints and image asset URLs
```

## Routes

Routes are created in `src/App.js` with `createBrowserRouter`:

| Route | Component | Purpose |
| --- | --- | --- |
| `/` | `CardContainer` | Fetch and search the user list |
| `/about` | `About` | Display component and class component examples |
| `/details/:id` | `CardDetails` | Fetch and display one user's details |
| Router errors | `Error` | Display route errors through `useRouteError` |

`Header` and the shared `Outlet` layout are rendered by `App`, so the navigation remains visible while child routes change.

## Component Responsibilities

### `App`

Creates the browser router, defines the application layout, and renders child routes through `Outlet`. It also registers `Error` as the route error element.

### `Header`

Renders the logo and links to the home and about pages. Its login button demonstrates local state by toggling between `Login` and `Logout`.

### `CardContainer`

Loads users from `MOCK_SERVER_USERS_LIST_API` when the component mounts. It keeps the original list and the currently filtered list in state, displays `Shimmer` while data is loading, and links each result to `/details/:id`.

### `Card` and `CardDetails`

`Card` presents summary information including name, email, phone, city, and company. `CardDetails` reads the dynamic `id` route parameter with `useParams` and fetches the selected user.

### `About`, `User`, and `UserClass`

The about page is a small learning area for comparing component styles. `User` demonstrates a functional component receiving props. `UserClass` demonstrates a class component with props, state, and a button that updates two counters.

### `Shimmer` and `Error`

`Shimmer` provides placeholder cards while the list request is pending. `Error` reads router error information with `useRouteError` and presents the status and status text.

## External Data and Assets

URLs are centralized in `src/utils/constants.js`:

- `MOCK_SERVER_USERS_LIST_API`: user list and individual user details
- `APP_LOGO`: header logo image
- `CARD_IMAGE`: sample card image URL
- `SWIGGY_API`: sample restaurant API endpoint
- `SWIGGY_CARD_MEDIA_ASSETS_URL`: sample restaurant media base URL

The current card views use the mock user API. Some restaurant-related constants are retained as learning examples for future data-driven UI exercises.

Because the application requests data from an external service, the list and details pages depend on that service being available and accepting browser requests. A failed request currently falls through to the router error behavior rather than showing a dedicated API error state.

## Learning Topics

This repository is intended to be extended as a learning project. The current examples cover:

1. JSX and component composition
2. Props and reusable components
3. Functional and class components
4. Local state with `useState` and class `setState`
5. Side effects and API requests with `useEffect`
6. Controlled inputs and search filtering
7. Loading placeholders
8. Nested layouts and dynamic routes
9. Navigation with `Link`
10. Tailwind CSS and PostCSS integration
11. Parcel development and production bundling

## License

This project is licensed under the ISC license.
