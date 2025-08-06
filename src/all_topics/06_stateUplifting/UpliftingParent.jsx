import { useState } from "react";
import Cart from "./cart";
import Button from "./Button";

const Uplifting = ()=> {
    let [cartCount, setCartCount] = useState(0)
    return(
        <div>
            <h1>
                Learn State Uplifting
            </h1>
            <Cart cartCount={cartCount} />
            <Button setCartCount={setCartCount} />
        </div>
    );
};
export default Uplifting;