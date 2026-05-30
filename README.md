# Todo List React App

A responsive React todo app based on the provided Simple ToDo List Figma mockup.

## Features

- Add, edit, complete, and delete notes
- Search notes by text
- Filter notes by `All`, `Completed`, and `Incompleted`
- Light and dark mode toggle
- Crossed-out gray styling for completed notes
- Empty-state area with a placeholder for your image
- Placeholder slots for your SVG icons
- Responsive layout for desktop and mobile screens

## Tech Stack

- React
- Vite
- CSS

## Project Structure

```text
src/
  App.jsx
  main.jsx
  styles.css
  assets/
  components/
    AddButton.jsx
    EmptyState.jsx
    FilterDropdown.jsx
    SearchBar.jsx
    ThemeToggle.jsx
    TodoItem.jsx
    TodoList.jsx
    TodoModal.jsx
    Toolbar.jsx
  constants/
    filterOptions.js
```

## Assets

The app uses local assets from [src/assets](./src/assets):

- `detective-empty.png` for the empty state
- `sun.png` and `moon.png` for light/dark mode
- `edit.svg` and `trash.svg` for note actions

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```
