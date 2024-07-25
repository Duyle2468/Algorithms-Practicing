function twoSum(nums: number[], target: number): number[] {
    const numMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
