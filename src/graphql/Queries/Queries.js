import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
    query{
        categories {
        name
        products {
            id 
            name 
            brand 
            gallery 
            prices { 
                amount 
                currency{ 
                    label 
                    symbol 
                } 
            } 
            description 
            inStock 
            category 
            attributes{ 
                id 
                name 
                type 
                items{ 
                    id 
                    displayValue 
                    value 
                } 
            }
        }
        }
    }
`