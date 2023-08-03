"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c2464062-54a4-4aa6-8b98-9be1ee8d028a");
  }, []);

  return null;
};