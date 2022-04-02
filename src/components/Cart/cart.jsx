import { useEffect, useState } from "react";
import { Wrapper } from "./cartCss";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("IkeaCart")) || []
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    totalprice();
    handleQuantity();
  }, [cart]);

  const handleQuantity = () => {
    let temp = cart;
    for (let i = 0; i < temp.length; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        if (temp[i]._id === temp[j]._id) {
          temp[i].quantity = Number(temp[i].quantity) + 1;
          temp.splice(j, 1);
          j--;
        }
      }
    }

    localStorage.setItem("IkeaCart", JSON.stringify(temp));
    setCart(temp);
  };

  const totalprice = () => {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity * cart[i].price;
    }

    setTotal(sum);
  };

  const handleChange = (i, v) => {
    let temp = [...cart];
    if (temp[i].quantity === 1 && v === -1) {
      handelDelete(i);
      return;
    }
    temp[i].quantity = temp[i].quantity + v;

    setCart(temp);
  };

  const handelDelete = (i) => {
    console.log(i);
    let temp = [...cart];

    temp.splice(i, 1);

    setCart(temp);
  };

  return (
    <Wrapper>
      <div>
        <h2>Shopping cart</h2>
      </div>
      {cart.length === 0 ? (
        <>
          <img
            src="https://order.ikea.com/in/en/checkout/static/media/ill-alien.cb42647f.svg"
            alt=""
            width={"20%"}
          />
          <p className="ptag">Your cart is empty!</p>
          <div className="empty">
            <div className="class502">Browse our products</div>
            <div className="class502">Login in</div>
          </div>
        </>
      ) : (
        <>
          <div className="allCart">
            {cart.map((el, i) => {
              return (
                <div key={i} className="cartItem">
                  <div className="imgDiv">
                    <img src={el.img1} alt="" width={"100%"} heigth="80%" />
                  </div>
                  <div className="cartTitle">
                    <h3>{el.title}</h3>
                    <p>{el.package}</p>
                  </div>
                  <div className="cartPrice">
                    <h3>Rs.{el.price}</h3>
                    <div className="quantity">
                      <div className="delete">
                        <DeleteIcon
                          onClick={() => {
                            handelDelete(i);
                          }}
                        />
                      </div>
                      <div className="inquantity">
                        <div>
                          <RemoveIcon
                            onClick={() => {
                              handleChange(i, -1);
                            }}
                          />
                        </div>
                        <p>{el.quantity}</p>
                        <div>
                          <AddIcon
                            onClick={() => {
                              handleChange(i, 1);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="subTotal">
            <h4>Subtotal</h4>
            <h4>Rs.{total}</h4>
          </div>
          <div>
            <h3>How would you like to receive your order?</h3>
          </div>
          <div className="type">
            <div>
              <LocalShippingIcon />
              <p>Home delivery</p>
            </div>
            <div>
              <StoreIcon />
              <p>Click & collect</p>
            </div>
          </div>
        </>
      )}
      <div id="policy">
        <div className="policyterms">
          <div className="policyIcons">
            <LocalShippingIcon />
          </div>
          <div className="terms">
            <h4>Our Delivery Service</h4>
            <p>
              Safe & contact-less delivery according to government permission.
            </p>
            <div>
              <a href="/cart">More info</a>
            </div>
          </div>
        </div>
        <div className="policyterms">
          <div className="policyIcons">
            <SettingsBackupRestoreIcon />
          </div>
          <div className="terms">
            <h4>Our Return Policy</h4>
            <p>
              We have made some updates to our return policy due to the COVID 19
              situation.
            </p>
            <div>
              <a href="/cart">More info</a>
            </div>
          </div>
        </div>
        <div className="policyterms">
          <div className="policyIcons">
            <PrecisionManufacturingIcon />
          </div>
          <div className="terms">
            <h4>Our Assembly Service</h4>
            <p>
              Sometimes it is nice to have someone else assemble it for you.
            </p>
            <div>
              <a href="/cart">More info</a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
