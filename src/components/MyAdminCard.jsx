import React, { useContext, useRef, useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style/style.css";
//model
import {
  CModalHeader,
  CModalTitle,
  CButton,
  CModal,
  CModalBody,
} from "@coreui/bootstrap-react";
import { MainContext } from "../Context/MainContext";
import { productAPI } from "../API/productAPI";

export default function MyAdminCard(props) {
  let { productInfo } = props;
  let {setPros} = useContext(MainContext);
  const [products, setProducts] = useState([]);
  const cardRef = useRef(null);
  

  
  const deleteproduct = async () => {
    try {
      const result = await productAPI.deleteProduct(productInfo._id);
      setPros([]);
      cardRef.current.remove();
      setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== productInfo._id)
    );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="col-sm-6 col-md-3">
      <Card ref={cardRef} className="mcard container">
        <Card.Body>
          <Card.Img   
            variant="top"
            className="cardimg"
            src={productInfo?.imgSrc}
          />
          <div className="color-primary">
            <div className="row align-items-center justify-content-center text-center mt-2  mb-2">
              <div className="col-8">
                <Card.Title className="text-left text-capitalize">
                  {productInfo?.title}
                </Card.Title>
              </div>
              <div className="col-4">
                <Card.Title className="text-right">
                  {productInfo?.price}$
                </Card.Title>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={deleteproduct}
                className="w-100 fw-bold"
                variant="warning"
              >
                Delete
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
