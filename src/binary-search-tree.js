const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.node;
  }

  add( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.node){
      this.node = new Node(data);
    }
    else{
        function recurs(node,data){
          if(node.data > data){
              if(!node.left){
                  node.left = new Node(data);
              }
              else{
                recurs(node.left, data);
              }
          }
          else if(node.data < data){
              if(!node.right){
                  node.right = new Node(data);
              }
              else{
                recurs(node.right, data);
              }
          }
        }
        recurs(this.node, data);
    }
  }

  has( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function recurs(node, data){
      if(!node){
        return false;
      }
      if(!node.data){
        return recurs(node.left, data) || recurs(node.right, data);
      }
      if(node.data == data){
        return true;
      }
      else if(node.data > data){
        return recurs(node.left, data);
      }
      else if(node.data < data){
        return recurs(node.right, data);
      }
    }
    return recurs(this.node, data);
  }

  find( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function recurs(node, data){
      if(!node){
        return null;
      }
      if(node.data == data){
        return node;
      }
      else if(node.data > data){
        return recurs(node.left, data);
      }
      else if(node.data < data){
        return recurs(node.right, data);
      }
    }
    return recurs(this.node, data);
  }

  remove( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    function recurs(node, data){
      if(node){
        if(!node.data){
          recurs(node.left, data) && recurs(node.right, data);
        }
        if(node.data == data){
          node.data = null;
        }
        else if(node.data > data){
          recurs(node.left, data);
        }
        else if(node.data < data){
          recurs(node.right, data);
        }
      }
    }
    recurs(this.node, data);
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.node){
      return null;
    }
    function recurs(node){
      if(node){
        if(node.left == null){
          return node.data;
        }
        else{
          return recurs(node.left);
        }
      }
    }
    return recurs(this.node);
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.node){
      return null;
    }
    function recurs(node){
      if(node){
        if(node.right == null){
          return node.data;
        }
        else{
          return recurs(node.right);
        }
      }
    }
    return recurs(this.node);
  }

}