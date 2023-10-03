

export interface Product {
    name: string,
    description: string,
    price: number,
    availability: number,
}

export interface ProductWithId extends Product {
    id: number,
}
