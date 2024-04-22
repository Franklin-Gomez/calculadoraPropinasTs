
import { useState } from "react"

export default function useOrder() {

    const [ order , setOrder ] = useState<OrderItem[]>([])

    const addItem = ( Items : Items) => { 

        const itemExist = order.find( orderItem => orderItem.id === Items.id)

        if( itemExist ) { 

            const updateOrder = order.map( orderItem => orderItem.id == Items.id ? { ...orderItem , quantity : orderItem.quantity + 1  } : orderItem )

            setOrder(updateOrder)

        } else { 
            const newItem = {...Items , quantity : 1 }
            setOrder( [...order , newItem ]);
        }
        
    }

    const removeItem =  (id : Items['id']) => { 
        // eliminando y seteando el elemento seleccionado
        setOrder( order.filter( item => item.id !==  id ))
    }

    return {
        order,
        addItem,
        removeItem
    }
}
