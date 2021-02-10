type Place = 'home' | 'work' | { custom: string };

type Todo = Readonly<{
	id: number;
	title: string;
	done: boolean;
	place?: Place;
}>;

type CompletedTodo = Todo & { readonly done: true };

const todos: Todo[] = [];

function addTodo(title: string) {
	const todo: Todo = {
		id: Date.now(),
		title,
		done: false,
	};
	todos.push(todo);
}

function toggledTodo(todo: Todo): Todo {
	return { ...todo, done: !todo.done };
}

function completeAll(todos: readonly Todo[]): CompletedTodo[] {
	return todos.map((todo) => ({ ...todo, done: true }));
}

function placeToString(place: Place): string {
	if (place === 'home') {
		return `🏠 Home`;
	} else if (place === 'work') {
		return `💼 Work`;
	} else {
		return `📍 ${place.custom}`;
	}
}
