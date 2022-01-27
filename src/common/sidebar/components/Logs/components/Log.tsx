import React from "react";

interface LogProps {
  message: string;
}

export const Log = ({ message }: LogProps) => {
  return <div>{message}</div>;
};
