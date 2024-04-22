type Items = { 
    id : number,
    name : string,
    price :  number
}

type OrderItem = Items & {
    quantity : number
}