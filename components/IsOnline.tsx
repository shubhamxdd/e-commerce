"use client";

import React, { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TbWifiOff, TbWifi } from "react-icons/tb";

const IsOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [wasOffline, setWasOffline] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const goOnline = () => {
      if (!isOnline) setWasOffline(true);
      setIsOnline(true);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000); // Hide after 5 seconds
    };
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, [isOnline]);

  return !isOnline ? (
    <Alert className="z-10">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription className="flex items-center gap-10">
        <p className="text-red-500">
          You are currently offline. Some features may not be available.
        </p>
        <TbWifiOff className="animate-pulse text-red-300" size={30} />
      </AlertDescription>
    </Alert>
  ) : showAlert ? (
    <Alert className="z-10">
      <AlertTitle>Welcome back!</AlertTitle>
      <AlertDescription className="flex items-center gap-10">
        <p className="text-green-500">
          You are now reconnected to the internet.
        </p>
        <TbWifi className="text-green-400" size={30} />
      </AlertDescription>
    </Alert>
  ) : null;
};

export default IsOnline;
