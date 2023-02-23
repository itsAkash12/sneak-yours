import { Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { createOrderHistory } from "../redux/order/order.actions";
import "../styles/payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((store) => store.shipping);
  useEffect(() => {
    if (!isSuccess) {
      navigate("/checkout");
    }
  }, [isSuccess]);

  const handleClickSuccess=(e) => {
    e.preventDefault()
    dispatch(createOrderHistory());
  } 

  return (
    <div>
      <Navbar></Navbar>
      <div className="mainscreen">
        <div className="card">
          <div className="leftside">
            <Image
              src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png"
              className="product"
              alt="Shoes"
            />
          </div>
          <div className="rightside">
            <form action="">
              <Heading>Checkout</Heading>
              <Heading size={"lg"}>Payment Information</Heading>
              <Text textAlign={"left"}>Cardholder Name</Text>
              <input type="text" className="inputbox" name="name" required />
              <Text textAlign={"left"}>Card Number</Text>
              <input
                type="number"
                className="inputbox"
                name="card_number"
                id="card_number"
                required
              />

              <Text textAlign={"left"}>Card Type</Text>
              <select
                className="inputbox"
                name="card_type"
                id="card_type"
                required
              >
                <option value="">--Select a Card Type--</option>
                <option value="Visa">Visa</option>
                <option value="RuPay">RuPay</option>
                <option value="MasterCard">MasterCard</option>
              </select>
              <div className="expcvv">
                <Text textAlign={"left"} className="expcvv_text">
                  Expiry
                </Text>
                <input
                  type="date"
                  className="inputbox"
                  name="exp_date"
                  id="exp_date"
                  required
                />

                <Text textAlign={"left"} className="expcvv_text2">
                  CVV
                </Text>
                <input
                  type="password"
                  className="inputbox"
                  name="cvv"
                  id="cvv"
                  required
                />
              </div>
              <button type="submit" className="button" onClick={(e)=> handleClickSuccess(e)}>
                CheckOut
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
