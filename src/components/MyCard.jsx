import React, { useContext, useState } from "react";
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

export default function MyCard(props) {
  let [Count, setCount] = useState(0);
  //for model
  const [visible, setVisible] = useState(false);
  const [visibleSm, setVisibleSm] = useState(false);

  let { productInfo } = props;

  let { increase, pushProduct } = useContext(MainContext);

  let addToCard = () => {
    increase();
    setVisibleSm(!visibleSm);

    pushProduct(
      productInfo?._id,
      productInfo?.title,
      productInfo?.price,
      productInfo?.imgSrc
    );

    setTimeout(() => {
      setVisibleSm(false);
      setVisible(false);
    }, 1100);
  };
  return (
    <div className="col-sm-6 col-md-3">
      <Card className="mcard container">
        <Card.Body>
          <Card.Img
            onClick={() => setVisible(!visible)}
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
                onClick={addToCard}
                className="w-100 fw-bold"
                variant="warning"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* Our Model to Show the Item Details */}
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle className="text-capitalize text-warning fs-4">
            Your Product
          </CModalTitle>
        </CModalHeader>
        <CModalBody className="text-center">
          {/* {productInfo?.title} */}
          <p className="text-capitalize fs-4 color-primary fw-bold">
            {productInfo?.title}
          </p>
          <img variant="top" className="cardimg" src={productInfo?.imgSrc} />
          <p className="text-capitalize fs-4 text-warning fw-bold">
            Buy With {productInfo?.price}$
          </p>

          <div className="row">
            <div className="col-6">
              <CButton
                className="text-dark fw-bold w-100"
                color="secondary"
                onClick={() => setVisible(false)}
              >
                Close
              </CButton>
            </div>
            <div className="col-6">
              <Button
                onClick={addToCard}
                className="w-100 fw-bold"
                variant="warning"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </CModalBody>
      </CModal>

      {/* Our Model for Item Bought */}
      <CModal size="lg" visible={visibleSm} onClose={() => setVisibleSm(false)}>
        <CModalBody>
          <div className="text-center text-success fw-bold">
            <span className="me-2">
              <i className="fa-solid fa-circle-check fs-3"></i>
            </span>
            <span className="fs-3 fw-bolder">
              The{" "}
              <span className="text-capitalize color-primary">
                {productInfo?.title}
              </span>{" "}
              Successfully Added To Cart
            </span>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
}