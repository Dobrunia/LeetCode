/* 94. Binary Tree Inorder Traversal
Definition for a binary tree node.*/
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }
// function inorderTraversal(root: TreeNode | null) {
//   let result: number[] = [];
//   pupu(root);
//   function pupu(root: TreeNode | null) {
//     if (root == null) {
//       return;
//     }
//     pupu(root.left);
//     result.push(root.val);
//     pupu(root.right);
//     return result;
//   }
//   return result;
// }

//2619. Array Prototype Last
// declare global {
//   interface Array<T> {
//     last(): T | -1;
//   }
// }
// Array.prototype.last = function () {
//   if (this.length === 0) {
//     return -1;
//   }
//   return this[this.length - 1];
// };
// const nums = [];
// console.log(nums.last());

//2620. Counter
// function createCounter(n: number): () => number {
//   let a = -1;
//   return function () {
//     a += 1;
//     return n + a;
//   };
// }
// const counter = createCounter(10);
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12
