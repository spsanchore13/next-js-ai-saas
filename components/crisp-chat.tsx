"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6bbfd1d1-10ed-4e7f-ad4e-b257bf8173b8");
  }, []);

  return null;
};
