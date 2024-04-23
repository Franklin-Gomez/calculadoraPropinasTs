import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./Hooks/useOrder"
import OrderContents from "./components/OrderContents";
import OrderTotales from "./components/OrderTotales";
import TipPercentageForm from "./components/TipPercentageForm";


function App() {

  const { order , addItem , removeItem , tip , setTip , placeOrder } = useOrder();

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black" > Calculadora de Propinas y Consumos </h1>
      </header>

      <main className= " max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        <div className="p-5">

          <h2 className=" font-black">Menu</h2>

          <div className=" space-y-3 mt-10">
            { menuItems.map( items => ( 
              <MenuItem 
                key={items.id}
                items={items}
                addItem={addItem}
              /> 
            ))}

          </div>
        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

          { order.length == 0 ? 
            ( 
              <p className="text-center"> La orden esta vacia</p>
            ) 

            : 
          
            (           
              <>
                <OrderContents 
                  order={order}
                  removeItem={removeItem}
                />

                <TipPercentageForm 
                  setTip={setTip}
                  tip={tip}
                /> 

                <OrderTotales
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            )  

          }


        </div>
        
      </main>
      
    </>
  )
}

export default App
