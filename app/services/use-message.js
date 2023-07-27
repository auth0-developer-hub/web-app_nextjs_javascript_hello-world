"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useMessage = (config) => {
  const [message, setMessage] = useState("");

  const fetcher = async (config) => await axios(config).then((res) => res.data);

  const {
    data,
    error,
    isLoading: isApiResponseLoading,
  } = useSWR(config, fetcher);

  useEffect(() => {
    if (isApiResponseLoading) {
      return;
    }

    if (error) {
      setMessage(
        error.response && error.response.data
          ? JSON.stringify(error.response.data, null, 2)
          : "Something went wrong"
      );
    }

    if (data) {
      setMessage(JSON.stringify(data, null, 2));
    }
  }, [data, error, isApiResponseLoading]);

  return { message };
};
