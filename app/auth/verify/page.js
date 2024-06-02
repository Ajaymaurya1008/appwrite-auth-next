"use client";
import React, { useEffect, useState } from "react";
import { account } from "../appwrite";
import { useRouter, useSearchParams } from "next/navigation";

const VerifyPage = () => {
  const [verifiedEmail, setVerifiedEmail] = useState(false);

  const router = useRouter();
  const params = useSearchParams();
  const userId = params.get("userId");
  const secret = params.get("secret");

  account
    .updateVerification(userId, secret)
    .then((response) => {
      console.log("Verification success");
      router.push("/auth/login");
      setVerifiedEmail(true);
    })
    .catch((error) => {
      console.log(error);
      console.log(error.response);
    });

  return (
    <div className="w-full h-screen flex items-center justify-center font-semibold text-3xl">
      {verifiedEmail ? (
        <p>Your email has been verified! </p>
      ) : (
        <p>Verifying your email.</p>
      )}
    </div>
  );
};

export default VerifyPage;
