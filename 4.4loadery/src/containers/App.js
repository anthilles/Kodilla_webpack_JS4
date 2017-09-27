import React from 'react';
import uuid from 'uuid';
import style from './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // początkowy stan aplikacji
            data: []
        };
    }

    addTodo(val) {
        const todo = { // metoda dodawania nowych elementów
            text: val,
            id: uuid.v4(), // odróżnianie elementów, tworzenie unikatowych wartości. npm install --save uuid, import uuid from 'uuid';
        };
        const data = [...this.state.data, todo]; // stworzenie nowej tablicy z dodatkowym elementem na końcu todo - taki "push"
        this.setState({data}); // skrócony zapis obiektu { data : data }
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id); // nowa tablica z odfiltrowanymi elementami.
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                Tutaj pojawią się komponenty naszej aplikacji.
            </div>
        );
    }
}

export default App;
