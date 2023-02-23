import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import "../styles/PaymentSuccess.css"

const PaymentSuccessAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(false);

//   useEffect(() => {
//     setShowAnimation(true);
//     setTimeout(() => {
//       setShowAnimation(false);
//     }, 3000);
//   }, []);

  return (
    <div>
        <div className="payment-success-animation">
          <svg viewBox="0 0 120 120">
            <circle className="success-circle" cx="60" cy="60" r="40" />
            <path
              className="success-check"
              d="M33,60 l20,20 l40,-40"
              stroke="#ffffff"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <Box>
            <Heading >Payment Success</Heading>
            <Text>You will be Redirected to Homepage in few seconds.</Text>
            <Text> Thankyou for Shopping !!</Text>
        </Box>
    </div>
  );
};

export default PaymentSuccessAnimation;
