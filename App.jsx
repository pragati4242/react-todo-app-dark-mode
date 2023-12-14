import React, { useState } from 'react';

const TodoApp = () => {
  const initialItems = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 1, text: 'Task 3', completed: false },
    { id: 2, text: 'Task 4', completed: true },
    { id: 2, text: 'Task 5', completed: true },
    { id: 2, text: 'Task 6', completed: true },
    { id: 1, text: 'Task 7', completed: false },
    { id: 1, text: 'Task 8', completed: false },
    { id: 2, text: 'Task 9', completed: true },
    { id: 2, text: 'Task 11', completed: true },
    { id: 1, text: 'Task 12', completed: false },
    { id: 1, text: 'Task 13', completed: false },{ id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 24', completed: true },
    { id: 2, text: 'Task 2', completed: true },
    { id: 2, text: 'Task 2', completed: true },
    { id: 1, text: 'Task 1', completed: false },{ id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 1, text: 'Task 1', completed: false },
    { id: 1, text: 'Task 1', completed: false },
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 2, text: 'Task 2', completed: true },
    // Add more items as needed
  ];

  const [currentView, setCurrentView] = useState('all');
  const [allItems, setAllItems] = useState(initialItems);

  const completedItems = allItems.filter(item => item.completed);
  const notCompletedItems = allItems.filter(item => !item.completed);

  const handleViewChange = view => {
    setCurrentView(view);

    switch (view) {
      case 'all':
        setAllItems(initialItems);
        break;
      case 'completed':
        setAllItems(completedItems);
        break;
      case 'notCompleted':
        setAllItems(notCompletedItems);
        break;
      default:
        setAllItems(initialItems);
    }
  };

  return (
    <div style={{ background: '#333', color: '#fff', padding: '20px' }}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th
              style={{ borderBottom: '1px solid #fff', cursor: 'pointer' }}
              onClick={() => handleViewChange('all')}
            >
              All
            </th>
            <th
              style={{ borderBottom: '1px solid #fff', cursor: 'pointer' }}
              onClick={() => handleViewChange('completed')}
            >
              Completed
            </th>
            <th
              style={{ borderBottom: '1px solid #fff', cursor: 'pointer' }}
              onClick={() => handleViewChange('notCompleted')}
            >
              Not Completed
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul>
                {allItems.map(item => (
                  <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                    {item.text}
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {completedItems.map(item => (
                  <li key={item.id} style={{ textDecoration: 'line-through' }}>
                    {item.text}
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {notCompletedItems.map(item => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoApp;