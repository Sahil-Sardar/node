const path = require('path')

console.log(path.dirname("C:/Users/sahil/OneDrive/Documents/Codes/NODE/New folder/Path Module/index.js"))
console.log(path.extname("C:/Users/sahil/OneDrive/Documents/Codes/NODE/New folder/Path Module/index.js"))
console.log(path.basename("C:/Users/sahil/OneDrive/Documents/Codes/NODE/New folder/Path Module/index.js"))

console.log(path.parse("C:/Users/sahil/OneDrive/Documents/Codes/NODE/New folder/Path Module/index.js"))
console.log(path.parse("C:/Users/sahil/OneDrive/Documents/Codes/NODE/New folder/Path Module/index.js").name)
console.log(path.parse("C:/Users/sahil/OneDrive/Documents/Codes/NODE/New folder/Path Module/index.js").root)