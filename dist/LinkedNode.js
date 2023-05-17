export default function getLast(node) {
    return node.next ? getLast(node.next) : node.value;
}
//# sourceMappingURL=LinkedNode.js.map