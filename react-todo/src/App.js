import React, { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem/TodoItem';
import TitleBar from './components/TitleBar/TitleBar';
import TodoCreator from './components/TodoCreator/TodoCreator';
import SearchBar from './components/SearchBar/SearchBar';
import { pageTitle } from './constants/constants';
import { getSortFunction } from './utils/sorting';
import demoData from './assets/demoData.json';
import './App.css';

const App = () => {
  const [todoItems, setTodoItems] = useState(demoData);
  const [searched, setSearched] = useState('');
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    setCurrentId(Math.max.apply(null, todoItems.map(item => item.id)));
  }, []);

  const handleItemAdded = (item) => {
    setTodoItems([...todoItems, {
      id: currentId + 1,
      ...item
    }]);
    setCurrentId(currentId + 1);
  };

  const deleteItem = (id) => {
    setTodoItems(todoItems.filter(item => item.id !== id));
  };

  const updateTodoItems = (item) => {
    const todos = todoItems.filter(element => element.id !== item.id);
    const updated = [...todos, item]
        .sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        });
    setTodoItems(updated);
  };

  const sortItems = (alg) => {
    const sorted = todoItems.sort(getSortFunction(alg));
    setTodoItems([...sorted]);
  };

  return (
      <div>
        <TitleBar title={pageTitle}/>
        <TodoCreator onItemAdded={handleItemAdded}/>
        <SearchBar
            value={searched}
            onChange={setSearched}
            onSort={sortItems}
        />
        {searched.length !== 0
            ? todoItems.filter(item => item.title.match(searched))
                .map(item => {
                  return (
                      <TodoItem
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          rating={item.rating}
                          description={item.description}
                          image={item.image}
                          onDelete={deleteItem}
                          onItemChanged={updateTodoItems}
                      />
                  );
                })
            : todoItems.map(item => {
              return (
                  <TodoItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      rating={item.rating}
                      description={item.description}
                      image={item.image}
                      onDelete={deleteItem}
                      onItemChanged={updateTodoItems}
                  />
              );
            })
        }
      </div>
  );
};

export default App;