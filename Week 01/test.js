Function.prototype.method= function() {
  if(!this.prototype[name]) {
    this.prototype[name] = func;
  }
  return this;
}


var walkDom = function walk(node, func) {
  func(node)
  node = node.firstChild;
  while(node) {
    walk(node, func);
    node = node.nextSibling;
  }
}

var getElementsByAttribute = function(att, value) {
  var results = [];
  walkDom(document.body, function(node) {
    if(node.nodeType === 1  && node.getAttribute(att) === value) {
      results.push(node);
    }
  });
  return results;
}