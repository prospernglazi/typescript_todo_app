var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todos = [];
function addTodo(title) {
    var todo = {
        id: Date.now(),
        title: title,
        done: false
    };
    todos.push(todo);
}
function toggledTodo(todo) {
    return __assign(__assign({}, todo), { done: !todo.done });
}
function completeAll(todos) {
    return todos.map(function (todo) { return (__assign(__assign({}, todo), { done: true })); });
}
function placeToString(place) {
    if (place === 'home') {
        return ' Home';
    }
    else if (place === 'work') {
        return ' Work';
    }
    else {
        return ' ' + place.custom;
    }
}
