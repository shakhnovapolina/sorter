class Sorter {
  constructor() {
    // your implementation
	 this.items = new Array(); 
  }

  add(element) {
	  
this.items.push(element);
  //console.log('add' + element);

  }

  at(index) {
	return this.items[index];
	
  }

  get length() {
	// console.log('length');
    return this.items.length;
  }

  toArray() {

  var arr = Array.from(this.items);
	//console.log('toArray');
    return arr;
  }

  sort(indices) {
 indices.sort();
	for (var i = 0, len = indices.length; i < len; ++i) {
		var min = this.items[indices[i]];
		
		for ( var j = i+1, len = indices.length; j <= len; ++j) {
			
			if (this.items[indices[j]] < min)
			{
				var mm = this.items[indices[i]];
				this.items[indices[i]]  = this.items[indices[j]];
				this.items[indices[j]] = mm;
			}
		}
	}

  }

  setComparator(compareFunction) {
	  //need to do!!!
	  
 //if (compareFunction>0) {
//	 console.log('-1');
  //  return -1;
 // }
 
 // return 1;
 // 
 }
}

module.exports = Sorter;