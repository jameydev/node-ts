interface LinkedNode<Value> {
    next?: LinkedNode<Value>;
    value: Value;
}

export default function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value; 
}