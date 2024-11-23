# React Challenge - Calculator

That's a dinamyc calculator developed in React that allow user to add or remove rows with numeric values. Each row che be enabled/disabled and includes a sign (+ or -) to change the result. The application updates the result live

I used Vite to build a simple environment to use react.

## Features

- **Add and remove rows**: Users can add or remove existing rows.
- **Row signs**: each row ha a sign (minus or plus)
  - users can change the sign for each row
  - users can disable and enable a row
  - disabled row are excluded from the addition
- **Live updating**: Final result change automatically with the user's changes

## Project Structure

```bash
src/
├── components/
│   ├── Button.jsx      # Component for buttons
│   ├── Row.jsx         # Component for row
│   └── Result.jsx      # Component to display the result
├── App.jsx             # Main application component
├── main.jsx            # React root
└── index.css           # styling
```

## How to run the project

### Pre

- Node.js (v16+)
- npm o yarn

### Steps

1. Clone the repo:
   ```bash
   git clone <URL_REPO>
   cd <NAME_REPO>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project:
    ```bash
    npm run dev
    ```

## Development

### Components
 
1. **`Button.jsx`** : Component created for the buttons with customizable text and onClick function
 
2. **`Row.jsx`** : Row component that includes sign, disable/enable/delete control and number value
 
3. **`Result.jsx`** : Simple component to show the computed result value
 
4. **`App.jsx`** : Main app component that controls the state and logic of the application

### Logic
 
- **Rows** : The rows array is managed in the `App.jsx` state via `useState`.
 
- **Live result update** : Managed with `useEffect`.

## Author 
 
- **Nome** : Daniele Margiacchi
 
- **Email** : danielemargiacchi@gmail.com
 
- **GitHub** : https://github.com/danielemargiacchi

