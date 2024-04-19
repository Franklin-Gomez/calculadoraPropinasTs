type MenuItemProps = { 
  items : Items
}

export default function MenuItem( { items } : MenuItemProps) {
  return (
    <>

      <button className=" flex justify-between border-2 border-teal-400 w-full p-3 hover:bg-teal-200">
        <p> {items.name} </p>
        <p className=" font-black"> $ { items.price } </p>

      </button>

    </>

  )
}
