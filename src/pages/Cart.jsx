import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);

  console.log("Printing Cart");
  console.log(cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div  >
  {
    cart.length > 0  ? 

    (<div className="flex h-full  gap-12  w-full mt-5"> 


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div>
          <div className=" text-green-600 font-semibold text-lg text-left truncate w-40 mt-1">Your Cart</div>
          <div className="text-green-600 font-semibold text-3xl">Summary</div>
          <p 
          >
            <span >  Total Items: {cart.length}</span>
          </p>
        </div>
        
        <div className="mt-60">
          <p className="font-bold ">Total Amount: ${totalAmount}</p>
          <button className="text-white-700   bg-green-600 rounded-sm font-semibold 
          text-[12px] p-2 px-9 
           uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in" >
            CheckOut Now
          </button>
        </div>

      </div>


    </div>
    ) : 

    (
    <div className="flex flex-col justify-center items-center mt-10 gap-10">
      <h1 className=" font-semibold text-3xl">Cart Empty</h1>
      <Link to={"/"}>
        <button className="text-white-700   bg-green-600 rounded-sm font-semibold 
          text-[12px] p-2 px-9 
           uppercase 

          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>
    )

  }

    </div>
  );
};

export default Cart;
