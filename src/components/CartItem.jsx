
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className=" flex justify-center items-center gap-x-5 max-w-sm rounded overflow-hidden shadow-lg mt-2 py-10">

        <div className="h-[180px]">
          <img src={item.image}  className=" h-full w-full" alt="Product" />
        </div>

        <div>

          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1><p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p></h1>
          <div className="flex justify-between gap-12 items-center w-full mt-5 " >
          <p className="text-green-600 font-semibold">${item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase className="text-4xl rounded-md" />
            </div>
          </div>
          

        </div>
        <hr />

      </div>

    </div>
  );
};

export default CartItem;
