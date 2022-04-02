import { Wrapper } from "./productDetailspageCss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneIcon from "@mui/icons-material/Done";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../Products/ProductCard";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 87%;
  margin-left: 9%;
  margin-top: 4%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 35px;
`;

export const ProductDetails = () => {
  const [but, setBut] = useState(true);
  const { id } = useParams();
  //6245bfeb4697b099e1ac9b7f
  const [item, setItem] = useState({
    _id: "",
    title: "",
    price: "",
    mrp: "",
    category: "",
    package: "",
    description: "",
    img1: "",
    img2: "",
  });

  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((er) => {
        window.location.href = "/*";
      });
    axios.get("http://localhost:8000/products").then((res) => {
      setProds(res.data.slice(0, 4));
    });
  }, [id]);

  const handleCart = () => {
    const temp = JSON.parse(localStorage.getItem("IkeaCart")) || [];

    let her = item;
    her.quantity = 1;

    temp.push(her);

    localStorage.setItem("IkeaCart", JSON.stringify(temp));
    setBut(false);
  };

  return (
    <Wrapper>
      <p>
        Products {">"}
        <span>{item.title} </span>
        <span>{item.package}</span>
      </p>
      <div id="main">
        <div id="left">
          <div>
            <div>
              <img src={item.img1} alt="" width="100%" height="100%" />
            </div>

            {item.img2 ? (
              <div>
                {" "}
                <img src={item.img2} alt="" width="100%" height="100%" />
              </div>
            ) : (
              ""
            )}
            {item.img3 ? (
              <div>
                {" "}
                <img src={item.img3} alt="" width="100%" height="100%" />
              </div>
            ) : (
              ""
            )}
            {item.img4 ? (
              <div>
                {" "}
                <img src={item.img4} alt="" width="100%" height="100%" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div>{item.description}</div>
        </div>
        <div id="rigth">
          <div>
            <h2 id="title">
              <span>{item.title}</span>
              <span>
                <span className="class655">Rs.</span>
                {item.price}
              </span>
            </h2>
            <p className="packages">{item.package}</p>
            <p className="packages">Price inclusive of all taxes</p>

            <div>
              <span>Eligible for delivery?</span>
              <span className="eagle">____________</span>
              <span className="class321">Check</span>
            </div>

            {but ? (
              <div
                className="class302"
                onClick={(item) => {
                  handleCart(item);
                }}
              >
                <ShoppingCartIcon className="iconCart" />
                <p>Add to cart</p>
              </div>
            ) : (
              <div
                className="class302"
                onClick={() => {
                  handleCart();
                }}
              >
                <DoneIcon className="iconCart" />
                <p>Added to cart</p>
              </div>
            )}

            <div id="id702">
              <StoreMallDirectoryIcon className="iconStore" />
              <a href="/">Check in-store stock</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>You migth like</h2>
        <div>
          <MainDiv>
            {prods.map((el) => (
              <ProductCard key={el.id} elem={el} />
            ))}
          </MainDiv>
        </div>
      </div>
    </Wrapper>
  );
};
