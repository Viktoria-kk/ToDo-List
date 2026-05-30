import React, { useMemo, useState } from 'react';
import AddButton from './components/AddButton.jsx';
import TodoModal from './components/TodoModal.jsx';
import TodoList from './components/TodoList.jsx';
import Toolbar from './components/Toolbar.jsx';

const initialTodos = [];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const visibleTodos = useMemo(() => {
    const query = search.toLowerCase().trim();

    return todos.filter((todo) => {
      const matchesSearch = todo.text.toLowerCase().includes(query);
      const matchesFilter =
        filter === 'all' ||
        (filter === 'completed' && todo.completed) ||
        (filter === 'incompleted' && !todo.completed);

      return matchesSearch && matchesFilter;
    });
  }, [todos, search, filter]);

  const openCreateModal = () => {
    setEditingTodo(null);
    setIsModalOpen(true);
  };

  const openEditModal = (todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTodo(null);
    setIsModalOpen(false);
  };

  const saveTodo = (text) => {
    if (editingTodo) {
      setTodos((currentTodos) =>
        currentTodos.map((todo) => (todo.id === editingTodo.id ? { ...todo, text } : todo)),
      );
    } else {
      setTodos((currentTodos) => [
        ...currentTodos,
        { id: crypto.randomUUID(), text, completed: false },
      ]);
    }

    closeModal();
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <main className={isDark ? 'app app--dark' : 'app'}>
      <section className="todo-shell" aria-label="Todo list application">
        <h1>TODO LIST</h1>

        <Toolbar
          filter={filter}
          isDark={isDark}
          search={search}
          onFilterChange={setFilter}
          onSearchChange={setSearch}
          onThemeToggle={() => setIsDark((currentMode) => !currentMode)}
        />

        <TodoList
          todos={visibleTodos}
          onDelete={deleteTodo}
          onEdit={openEditModal}
          onToggle={toggleTodo}
        />
      </section>

      <AddButton onClick={openCreateModal} />

      {isModalOpen && (
        <TodoModal editingTodo={editingTodo} onCancel={closeModal} onSubmit={saveTodo} />
      )}
    </main>
  );
}

export default App;
