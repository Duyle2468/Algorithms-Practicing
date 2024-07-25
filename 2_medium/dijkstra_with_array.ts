type Edge = { node: number; weight: number };

function dijkstraArray(graph: Edge[][], start: number): number[] {
    const distances = Array(graph.length).fill(Infinity);
    const visited = Array(graph.length).fill(false);

    distances[start] = 0;

    for (let i = 0; i < graph.length; i++) {
        let minDistance = Infinity;
        let u = -1;

        for (let j = 0; j < graph.length; j++) {
            if (!visited[j] && distances[j] < minDistance) {
                minDistance = distances[j];
                u = j;
            }
        }

        if (u === -1) break;
        visited[u] = true;

        for (const { node: v, weight } of graph[u]) {
            const distV = distances[u] + weight;
            if (distV < distances[v]) {
                distances[v] = distV;
            }
        }
    }

    return distances;
}

const graph: Edge[][] = [
    [
        { node: 1, weight: 4 },
        { node: 2, weight: 1 },
    ],
    [{ node: 3, weight: 2 }],
    [
        { node: 1, weight: 2 },
        { node: 3, weight: 5 },
    ],
    [],
];

const startNode = 0;
const result = dijkstraArray(graph, startNode);
console.log(result);
