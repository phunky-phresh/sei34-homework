// const theLines = [
//   lineN = [timeSquare, 34 th, 28 th, 23 rd, unionSquare, 8 th],
//   lineL = [8 th, 6 th, unionSquare, 3 rd, 1 st],
//   line6 = [grandCentral, 33 rd, 28 th, 23 rd, unionSquare, sdtorePlace]
// ];
// const theLines = {
//   lineN: ['timeSquare', '34th', '28th', '23rd', 'unionSquare', '8th'],
//   lineL: ['8th', '6th', 'unionSquare', '3rd', '1st']
//   //line6 :
// };
const thelines = [
  'timeSquare',
  '34th',
  '28th',
  '23rd',
  'unionSquare',
  '8th'
];
const checkLines = function(lineOn, lineOff) {
  if (lineOn == lineOff) {
    return lines();
  }
}

const lines = function(from, to) {

  for (var i = 0; i < thelines.length; i++) {
    if (thelines[i] == from) {
      var fromIndex = thelines.indexOf(thelines[i]);
    }
    if (thelines[i] == to) {
      var toIndex = thelines.indexOf(thelines[i]);
    }
    console.log(fromIndex);
    console.log(toIndex);
    const journey = thelines.slice(fromIndex, toIndex);


    console.log(journey);

  }
}


/*const lines = {
  start: {
    timeSquare
  },
  timeSquare: {
    34
  },

  34: {
    28
  },
  28: {
    23
  },
  23: {
    unionSquare
  },
  unionSquare: {
    8
  },
  finish: {
    8
  }
};

const dijkstra = (graph) => {
  const parents = {
    finish: null
  };
  for (var child in graph.start) {
    parents[child] = 'start';

  }
};
console.log(dijkstra(lines));*/


// create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }
}
// add vertex to the graph
addVertex(v) {
  // initialize the adjacent list with a
  // null array
  this.AdjList.set(v, []);
}
// add edge to the graph
addEdge(v, w) {
  // get the list for vertex v and put the
  // vertex w denoting edge between v and w
  this.AdjList.get(v).push(w);

  // Since graph is undirected,
  // add an edge from w to v also
  this.AdjList.get(w).push(v);
}
// Prints the vertex and adjacency list
printGraph() {
  // get all the vertices
  var get_keys = this.AdjList.keys();

  // iterate over the vertices
  for (var i of get_keys) {
    // great the corresponding adjacency list
    // for the vertex
    var get_values = this.AdjList.get(i);
    var conc = "";

    // iterate over the adjacency list
    // concatenate the values into a string
    for (var j of get_values)
      conc += j + " ";

    // print the vertex and its adjacency list
    console.log(i + " -> " + conc);
  }
}
// Using the above implemented graph class
var g = new Graph(6);
var vertices = ['timeSquare',
  '34th',
  '28th',
  '23rd',
  'unionSquare',
  '8th'
];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('timeSquare', '34th');
g.addEdge('34th', '28th');
g.addEdge('28th', 'unionSquare');
g.addEdge('unionSquare', '34th');
g.printGraph();