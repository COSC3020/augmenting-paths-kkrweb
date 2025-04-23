# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.



//


Name: Kane Kriz

Start Date: 21 April 2025

Last Edited: 22 April 2025

Feedback Request 1 Date: X


//


Response: WIP

First, we can examine the step by step functionality of the implementation and its work in parts.

The implementation begins with an early check for the case where start and end nodes are identical. 

This check requires constant time $Θ(1)$ to execute.

The primary work occurs in the breath first traversal section where nodes are processed using the queue. 

The implementation initializes three tracking structures: visitedNodes, parentMap, and nodeQueue, all requiring constant time to set up.

The breath first search functionality processes each vertex once.

This occurs when the vertex is when it is dequeued and the processed. 

Using `visitedNodes` along with queue management makes it so that no vertex is processed more than one time. 

This vertex processing contributes $Θ(V)$ work where V represents the number of vertices in the graph.

For each vertex processed above, the implementation examines outgoing edges through iterating over the adjacency list contents. 

The nested loop `for(var neighborNode in neighborNodes)` examines each edge exactly once when its source vertex is processed. 

This edge examination contributes $Θ(E)$ work where E represents the number of edges in the graph.

The check `neighborNodes[neighborNode] > 0` and the neighbor visit check both execute in constant time per edge, and thus do not affect the asymptotic complexity.

When finding / creating a path, the worst case occurs when the path contains all vertices.

The while loop processes at most V nodes.

Each unshift operation costs a constant $Θ(1)$ work.

This results in in $Θ(V)$ work for path construction.

The worst case occurs when every vertex and every edge must be processed from the graph, before either finding the target node or determining no path is possible. 

This results in an overall worst case theta complexity of $Θ(V + E)$ for the implementation.



//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations:

