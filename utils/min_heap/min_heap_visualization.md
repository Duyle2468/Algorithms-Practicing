# MinHeap Visualization

## Initial State

The heap is initially empty:

\`\`\`
[]
\`\`\`

## Inserting Elements

1. Insert element \`(1, 3)\` with priority \`3\`:

\`\`\`
[(1, 3)]
\`\`\`

2. Insert element \`(2, 5)\` with priority \`5\`:

\`\`\`
(1, 3)
|
(2, 5)
\`\`\`

3. Insert element \`(3, 1)\` with priority \`1\`:

\`\`\`
(1, 3)
/ \
 (2, 5) (3, 1)
\`\`\`

-   **Bubble up**: \`(3, 1)\` has a lower priority than its parent \`(1, 3)\`, so they are swapped.

\`\`\`
(3, 1)
/ \
 (2, 5) (1, 3)
\`\`\`

4. Insert element \`(4, 2)\` with priority \`2\`:

\`\`\`
(3, 1)
/ \
 (2, 5) (1, 3)
/
(4, 2)
\`\`\`

-   **Bubble up**: \`(4, 2)\` has a lower priority than its parent \`(2, 5)\`, so they are swapped.

\`\`\`
(3, 1)
/ \
 (4, 2) (1, 3)
/
(2, 5)
\`\`\`

## Extracting the Minimum Element

Now let's extract the minimum element (the root of the heap).

1. Extract min element \`(3, 1)\`:

    - Replace root with the last element \`(2, 5)\`:

\`\`\`
(2, 5)
/ \
 (4, 2) (1, 3)
\`\`\`

-   **Sink down**: \`(2, 5)\` has a higher priority than its children \`(4, 2)\` and \`(1, 3)\`. The smaller child \`(4, 2)\` is chosen, and they are swapped.

\`\`\`
(4, 2)
/ \
 (2, 5) (1, 3)
\`\`\`

Continue sinking down: \`(2, 5)\` has a higher priority than its child \`(1, 3)\`, so they are swapped.

\`\`\`
(4, 2)
/ \
 (1, 3) (2, 5)
\`\`\`

## Final State of the Heap

The heap now looks like this:

\`\`\`
(4, 2)
/ \
 (1, 3) (2, 5)
\`\`\`
