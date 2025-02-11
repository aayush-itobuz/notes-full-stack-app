import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const EmailVerify = () => {
  const params = useParams();
  const token = params.token;
  console.log(token);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/verify", {
          headers: { 
            'Authorization': `Bearer ${token}`
       } });
      
        console.log("Email verified successfully!", response.data);
      } catch (error) {
        console.error("Failed to verify email:", error);
      }
    };

    if (token) {
      console.log('entered');
      verifyEmail();
    } else {
      console.error("Email verification token not found!");
    }
  });

  return (
    <>
    <h2 className='text-center mt-10 text-xl font-bold'>Verification Page</h2>
    </>
  )
};


