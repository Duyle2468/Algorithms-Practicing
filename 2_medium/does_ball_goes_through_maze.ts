// Problem Description
// There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by rolling up, down, left, or right,
// but it won't stop until it hits a wall. When the ball stops, it could choose the next direction. Given the ball's start position, the destination,
// and the maze, determine whether the ball could stop at the destination.
// The maze is represented by a binary 2D array. 1 means a wall and 0 means an empty space. You may assume that the borders
// of the maze are all walls. The start and destination coordinates are represented by row and column indexes.

function hasPath(
    maze: number[][],
    start: number[],
    destination: number[]
): boolean {
    const rows = maze.length; // Number of rows in the maze
    const cols = maze[0].length; // Number of columns in the maze
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ]; // Possible directions to move

    function dfs(x: number, y: number): boolean {
        if (x === destination[0] && y === destination[1]) return true; // Check if the current position is the destination
        maze[x][y] = -1; // Mark the current cell as visited

        for (const [dx, dy] of directions) {
            let nx = x;
            let ny = y;
            // Roll the ball until it hits a wall
            while (
                nx >= 0 &&
                nx < rows &&
                ny >= 0 &&
                ny < cols &&
                maze[nx][ny] !== 1
            ) {
                nx += dx;
                ny += dy;
            }
            // Step back to the last valid position
            nx -= dx;
            ny -= dy;
            // If the new position is not visited yet, perform DFS from there
            if (maze[nx][ny] !== -1 && dfs(nx, ny)) return true;
        }
        return false; // Return false if no path leads to the destination
    }

    return dfs(start[0], start[1]); // Start the DFS from the initial position
}

// Test Case 1: Ball can reach the destination
const maze1 = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
];
const start1 = [0, 4];
const destination1 = [4, 4];
console.log(hasPath(maze1, start1, destination1)); // Output: true

// Test Case 2: Ball cannot reach the destination
const maze2 = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
];
const start2 = [0, 4];
const destination2 = [3, 2];
console.log(hasPath(maze2, start2, destination2)); // Output: false
