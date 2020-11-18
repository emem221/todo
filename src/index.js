import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import SubmitForm from './components/submit_form';
import Header from './components/header';
import TodoList from './components/todo_list';
import Todo from './components/todo';




class App extends React.Component {
  state = { tasks: ['task 1', 'task 2', 'task 3'] 
};

handleSubmit = task => {
  this.setState({tasks: [...this.state.tasks, task]});
}

handleDelete = (index) => {
  const newArr = [...this.state.tasks];
  newArr.splice(index, 1);
  this.setState({tasks: newArr});
}

  render() {
    return(
      <div className="wrapper">
        <div className="card frame">
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
          <Todo /> 
        </div>
      </div>
    );
  }
}










ReactDOM.render(
  <App />,
  document.getElementById('root')
);

