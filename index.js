fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

//Collection functions
    each: function(collection, callback) {
      if(Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection);
        }
      }else{
        for (let key in collection) {
          callback(collection[key], key, collection);
        }
      return collection;        
      } 
    },

    map: function(collection, callback) {
      let newCollection = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          let newElement = callback(collection[i], i, collection);
          newCollection.push(newElement);
        }
      } else {
        for (let key in collection) {
          let newValue = callback(collection[key], key, collection);
          newCollection.push(newValue);
        }
      }
      return newCollection;
    },

    reduce: function(collection, callback,acc) {
      if(acc===undefined){
        acc = collection[0];
        collection = collection.slice(1);

      }     
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection);
        }
      }
      else {
        for (let key in collection) {
          acc = callback(acc, collection[key], collection);
        }
      }    
      return acc
    },
    
    find: function(collection, predicate) {
      let result = undefined
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          if (predicate(collection[i])){
          result = collection[i]
          break;
          }
        }
        return result
      }else{
        for(let key in collection){
          //do while loop
          do {
            result = collection[key];
            break;
          } while(predicate(collection[key])=== true)
       
        }
        return result
      }
    },

    filter: function(collection,predicate){
      let result = [];
      if(Array.isArray(collection)){
        for(let i=0; i< collection.length; i++){
          if(predicate(collection[i])){
            result.push(collection[i])
          }
        }
      }else {
        for (let key in collection) {
          if (predicate(collection[key])) {
            result.push(collection[key])
          }
        }
      }

      return result;
    },

    size: function(collection){
      if(Array.isArray(collection)){
        return collection.length
      }
      else{
        let counter = 0;
        for(let key in collection){
          counter++;
        }
        return counter;
      }
    },

// Array functions
    first: function (collection, n){
      if (n == undefined){
        return collection[0]
      }
      else{
        return collection.slice(0,n)
      }
    },

    last: function(collection, n){
      if (n === undefined){
        return collection.pop();
      }else{
        return collection.slice(collection.length-n.length, collection.length)
      }
    },




  }
})()

fi.libraryMethod()
