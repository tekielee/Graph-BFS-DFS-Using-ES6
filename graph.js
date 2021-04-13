let graph = [];
let visited = [];

let vertices = 6;

for(let i = 1; i <= vertices; i++) {
	graph[i] = Array(7).fill(0, 1);
	visited[i] = 0;
}

graph[1][2] = graph[2][1] = 1;
graph[1][5] = graph[5][1] = 1;
graph[5][2] = graph[2][5] = 1;
graph[5][4] = graph[4][5] = 1;
graph[4][3] = graph[3][4] = 1;
graph[3][2] = graph[2][3] = 1;
graph[6][4] = graph[4][6] = 1;

function BFS(graph, start, visited) {
	let queue = new Queue();
	let path = new Queue();
	
	queue.enqueue(start);
	visited[start] = 1;
	
	while(!queue.isEmpty()) {
		let node = queue.dequeue();
		path.enqueue(node);
		for(let i = 1; i < graph[node].length; i++) {
			if(!visited[i] && graph[node][i] == 1) {
				visited[i] = 1;
				queue.enqueue(i);
			}
		}
	}
	return path;
}

let path = BFS(graph, 1, visited);
while(!path.isEmpty()) {
	console.log(path.dequeue());
}

//reset data
for(let i = 1; i <= vertices; i++) {
	visited[i] = 0;
}

function DFS(graph, start, visited) {
	let stack = new Stack();
	let path1 = new Queue();

	stack.push(start);
	visited[start] = 1;
	
	while(!stack.isEmpty()) {
		let node = stack.pop();
		path1.enqueue(node);
		for(let i = 1; i < graph[node].length; i++) {
			if(!visited[i] && graph[node][i] == 1) {
				visited[i] = 1;
				stack.push(i);
			}
		}
	}
	
	return path1;
}

console.log('');

let path1 = DFS(graph, 1, visited);
while(!path1.isEmpty()) {
	console.log(path1.dequeue());
}