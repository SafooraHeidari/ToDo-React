
export default function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case "initialState":
            return [...state, ...payload];
        case "deleteTask":
            return state.map(user => (user.id !== payload.userId) ? user : {...user, todo: user.todo.filter(item => item.id !== payload.todoId)});
        case "AddTodo":
            return state.map(user => (user.id !== payload.userId) ? user : {...user, todo: [...user.todo, payload.todo]});
        case "EditTodo":
            return state.map(user => (user.id !== payload.userId) ? user : {...user, todo: []})
        case "handleAddSubTask":
            return state.map(user => (user.id === payload.userId) ?
                {
                    ...user, todo: user.todo.map(todo => (todo.id === payload.todoId) ?
                        {...todo, subTasks: [...todo.subTasks, payload.title]}
                        : todo)
                }
             :user);
        case "handleDeleteSubTask":
            return state.map(user => (user.id === payload.userId) ?
                {
                    ...user, todo: user.todo.map(todo => (todo.id === payload.todoId) ?
                        {...todo, subTasks: todo.subTasks.filter(item => item !== payload.taskName)}
                        : todo)
                }
                :user);
        case "handleEditSubTask":
            return state.map(user => (user.id === payload.userId) ?
                {
                    ...user, todo: user.todo.map(todo => (todo.id === payload.todoId) ?
                        {...todo, subTasks: todo.subTasks.map(item => (item !== payload.oldTaskName ? item: payload.newTaskName))}
                        : todo)
                }
                :user);
        default:
            return state;
    }
}
