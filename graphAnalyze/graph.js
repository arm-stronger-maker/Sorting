/*  

A graph is a non-linear data structure that consists of a finite number of vertices (also called nodes) connected by edges.
Trees are a specific type of graph data structure.

B ==> Vertices 
A and C ==> Edges.

Types of Graphs.
Directed and Undirected graphs. 

Directed Graph => A graph in which the edges have a direction is called a directed graph.
                The direction represents the traversal direction. We can move A=>B=>C
                We cannot traverse C=>B=>A. It is not available in Directed graph. [Directed graph.png]

Undirected graphs => It have no arrow marks. But it can travel on any direction compared to directed graph. 
                Use undirected graph we can traverse A=>B=>C also C=>B=>A also some others. 
                [Undirected graph.png]

Some graph types => [More graph types.png]
    Have only vertices with no edges
    One node have multiple edges or multiple edges from one node.
    Cycles in the graphs
    Self loops on a single node
    may be disconnected a node from the graph
    Edges have represent weights

Graph usages.
Google maps =>  Destination is vertices and roads as edges
Facebook, instagram, LinkedIn uses Graph DS. 


We can represent Graphs in some different ways such as Adjacency matrix and Adjacency List.
*/



/*
ADJACENCY MATRIX is a two dimensional array of size V * V. V is the number of vertices in the graph
Each row and column represent a vertex.
If the value of any element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i and j. [Adjacency matrix.png] */

const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]

console.log(matrix[0][0]);


/* 
Adjacency List => Vertices are stores in a map like data structure, and every vertex stores a list of its adjacent vertices.
Refer image => Adjacency vertex and understand their conncetions using undirected graphs. 

There are some plus and minus are there. Some differences between them. AM => Adjacency Matrix vs AL Adjacency List

1. AL => It only stores values for the edges that exists 
   AM => It stores both like irrespective of whether an edge exists or not. 
   Storage wise => Adjacency list is more efficient.

2. Adjacency List, inserting and finding adjacent nodes is Constant time complexity.
   Adjacency Matrix, it is linear time complexity.

3. Adjacency List => To store some additional values with an edges such as weight of the edge.
   Adjacency Matrix => such informations are stored externally. Refer image  AL & AM differ

We follow Adjacency List.
*/



/*   Sample example for Adjacency List

adjacencyList = {
    'A' : ['B'],
    'B' : ['A', 'C'],
    'C' : ['B']
}

console.log(adjacencyList['B']);  // [ 'A', 'C' ]
*/


class graph{
    constructor(){
        this.adjacencyList = {}
    }

    // add a new vertex to the list.
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdges(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2);  // Here, the reason for this slighly change duplicate line is, 
        this.adjacencyList[vertex2].add(vertex1);  // we follow undirected graph. it need to be point out each other. That is the reason.
    }

    // Check if any edges are existed in between two vertex
    hasEdges(vertex1, vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return;
        }
        for(let adjacencyVertex of this.adjacencyList[vertex]){  // We should delete the edges of the vertex and all its adjecent vertices.
            this.removeEdge(vertex, adjacencyVertex)
        } // Once it removes all edges, we delete the vertex.
        delete this.adjacencyList[vertex];
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " => " + [...this.adjacencyList[vertex]]);
        }
    }


}

const Graph = new graph()

Graph.addVertex('A')
Graph.addVertex('B')
Graph.addVertex('C')


Graph.addEdges('A', 'B') // It follows undirected graph direction. So, it point outs like A <=> B
Graph.addEdges('B', 'C') // It follows undirected graph direction. So, it point outs like B <=> C

Graph.display()

console.log(Graph.hasEdges('A', 'B'))  // true
console.log(Graph.hasEdges('A', 'C'))  // false


// Graph.removeEdge('A', 'B')
// Graph.display()


Graph.removeVertex('B')
Graph.display()


// All methods are follows Constant time complexity except removeVertex. Because, sometimes the vertex has numerious adjacent edges might present. 