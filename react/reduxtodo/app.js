
/////////////////////// REDUX REDUCERS
const todo = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };

        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {completed: !state.completed});

        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];

        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }

};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;

        default:
            return state;
    }
};

const {combineReducers} = Redux;
const todoApp = combineReducers({
    todos,
    visibilityFilter
});

/////////////////// REACT COMPONENTS

const {connect} = ReactRedux;

////// ADD TODO
let nextTodoId = 0;
let AddTodo = ({dispatch}) => {
    let input;
    const onClick = () => {
        dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value
        });
        input.value = '';
    };

    return (
        <div>
            <input ref={node => { input = node; }} />
            <button onClick={onClick}>Add Todo</button>
        </div>
    );
};
AddTodo = connect()(AddTodo);


////// TODOS
const Todo = ({completed, text, onClick}) => {
    const style={textDecoration: completed ?  'line-through' : 'none'};
    return (
        <li onClick={onClick} style={style}>
            {text}
        </li>
    );
};

const TodoList = ({todos, onTodoClick}) => {
    const todoItems = todos.map(todo => {
        return (
            <Todo key={todo.id} 
                {...todo} 
                onClick={() => onTodoClick(todo.id)} 
            />
        );
    });

    return (
        <ul>
            {todoItems}
        </ul>
    );
};
const mapStateToProps = (state) => {
    const getVisibleTodos= (todos, filter) => {
        switch(filter) {
            case 'SHOW_ALL':
                return todos;

            case 'SHOW_COMPLETED':
                return todos.filter(todo => todo.completed);

            case 'SHOW_ACTIVE':
                return todos.filter(todo => !todo.completed);
        }
    };

    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)    
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: id => {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            });
        }
    }
};
const VisibleTodoList = connect(
    mapStateToProps, 
    mapDispatchToProps
)(TodoList);

////// FOOTER
const Link = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <a href="#"
            onClick={e => {
                e.preventDefault();
                onClick();
           }}
       >
           {children}
       </a>
    );
};

const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter
            });
        }
    };
};

const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);

const Footer = () => {
    return (
        <p>
            Show:
            {' '}
            <FilterLink filter='SHOW_ALL'>All</FilterLink>
            {' '}
            <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
            {' '}
            <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
        </p>
    );
};

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

const {createStore} = Redux;
const {Provider} = ReactRedux;
ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);
