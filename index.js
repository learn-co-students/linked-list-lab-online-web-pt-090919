// let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
//  masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
//  ntrandm: {name: 'Juliet', next: null}
// }

//should return the name of the node passed through
function getName(node) {
  return node.name
}

// e.g. collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
//should return head node of the linked list
function headNode(linkedList, collection) {
  return collection[linkedList]
}
// return following node every time it is called
// returns the correct node when called multiple times
function next(node, collection) {
  return collection[node.next]
}

// return the node at the provided index
// begin at head and call `next` # of times equal to our index argument
function nodeAt(index, linkedList, collection) {
  let currentNode = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection)
  }

  return currentNode;
}

// return the address of the node at the address
function addressAt(index, linkedList, collection) {
  // return nodeAt(index, linkedList, collection).next
  if (index == 0) {
    return linkedList
  } else {
    let previousNode = nodeAt(index - 1, linkedList, collection);
    return previousNode.next;
  }
}

// return the index of the provided node
function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection);
  let currentIdx = 0;
  while (currentNode != node) {
    currentIdx++;
    currentNode = next(currentNode, collection)
  }

  return currentIdx;
}

// set next property of inserted node
function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let subsequentNode = nodeAt(index, linkedList, collection);

  // let previousNodeIdx = indexAt(previousNode, collection, linkedList)
  // let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
  let previousNodeAddress = addressAt(previousNode, linkedList, collection)
  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)

  // set next property of node previous to inserted node
  previousNode['next'] = newNodeAddress;
  // insert node at provided index, while maintaining order of all the other nodes
  let newNode = collection[newNodeAddress]
  newNode['next'] = subsequentNodeAddress
}

// set next property of node previous to the deleted node
// delete node at provided index, while maintaining order of all the other nodes
function deleteNodeAt(index, linkedList, collection) {
  let previousNode;
  let currentNode = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    previousNode = currentNode
    currentNode = next(currentNode, collection)
  }
  previousNode.next = currentNode.next
}