"use client";
import React, { useEffect, useState } from "react";
import { account } from "../appwrite";
import { useRouter } from "next/navigation";

const VerifyPage = () => {
  const [verifiedEmail, setVerifiedEmail] = useState(false);

  const router = useRouter();
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");

  account
    .updateVerification(userId, secret)
    .then((response) => {
      console.log("Verification success");
      console.log(response);
      router.push("/auth/login");
    })
    .catch((error) => {
      console.log(error);
    });

  const verifyEmail = async () => {
    try {
      const response = await account.verifyEmail(userId, secret);
      console.log(response);
      setVerifiedEmail(true);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyEmail();
  }, []);

  return (
    <div>
      {verifiedEmail ? (
        <p>Your email has been verified!</p>
      ) : (
        <p>Verifying your email...</p>
      )}
    </div>
  );
};

export default VerifyPage;
