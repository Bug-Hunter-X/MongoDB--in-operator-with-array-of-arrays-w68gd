```javascript
// Correct usage of $in operator
db.collection.find({ field: { $in: [1, 2, 3, 4] } });

//Alternative approach using $or operator for more complex scenarios
db.collection.find( { $or: [ { field: { $all: [1, 2] } }, { field: { $all: [3, 4] } } ] } );
```