// các cách clone object

// cách 1: Spread ShallowClone
const food = { corn: "bắp", bacon: "thịt" };

const cloneFood = { ...food };

console.log(cloneFood);

//cách 2: Object.assign ShallowClone
const food = { corn: "bắp", bacon: "thịt" };

const cloneFood = Object.assign({}, food);

console.log(cloneFood);

//cách 3: JSON deepClone
const food = { corn: "🌽", bacon: "🥓" };

const cloneFood = JSON.parse(JSON.stringify(food));

console.log(cloneFood);

//shallowClone chỉ clone được 1 cấp ngoài cùng còn các cấp sau có tham chiếu thì không được
