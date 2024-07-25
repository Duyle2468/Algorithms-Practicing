class MinHeap<T> {
    private heap: { element: T; priority: number }[] = [];

    insert(element: T, priority: number): void {
        this.heap.push({ element, priority });
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin(): { element: T; priority: number } | undefined {
        if (this.heap.length === 0) return undefined;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0 && end) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min;
    }

    private bubbleUp(index: number): void {
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (element.priority >= parent.priority) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    private sinkDown(index: number): void {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap: number | null = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild!.priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

type Edge = { node: number; weight: number };

function dijkstra(graph: Edge[][], start: number): number[] {
    const distances = Array(graph.length).fill(Infinity);
    const heap = new MinHeap<number>();

    distances[start] = 0;
    heap.insert(start, 0);

    while (true) {
        const minNode = heap.extractMin();
        if (!minNode) break;
        const u = minNode.element;
        const distU = minNode.priority;

        for (const { node: v, weight } of graph[u]) {
            const distV = distU + weight;
            if (distV < distances[v]) {
                distances[v] = distV;
                heap.insert(v, distV);
            }
        }
    }

    return distances;
}
