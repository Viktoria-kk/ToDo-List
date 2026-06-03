# Todo List

A responsive React todo app based on the Simple ToDo List Figma design. It includes task creation, editing, deletion, completion states, search, filtering, and light/dark mode.

## Features

- Add, edit, complete, and delete notes
- Search notes by text
- Filter notes by `All`, `Complete`, and `Incomplete`
- Light and dark mode toggle
- Crossed-out gray styling for completed notes
- Custom empty-state illustration
- Custom search, edit, delete, sun, and moon icons
- Responsive layout for desktop and mobile screens

## Tech Stack

- React 19
- Vite
- CSS3
- Google Fonts: Inter, Kanit, and Outfit

## Project Structure

```text
src/
  App.jsx
  main.jsx
  styles.css
  assets/
    detective-empty.png
    edit.svg
    moon.png
    search.svg
    sun.png
    trash.svg
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
- `search.svg` for the search input
- `sun.png` and `moon.png` for light/dark mode
- `edit.svg` and `trash.svg` for note actions

## Available Scripts

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Getting Started

Clone the repository, install dependencies, and run the development server:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.
