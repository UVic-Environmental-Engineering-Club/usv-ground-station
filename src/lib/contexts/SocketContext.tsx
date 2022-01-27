import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { io } from "socket.io-client";

export interface SocketContext {
  logs: string[];
}

export const Context = createContext<SocketContext>({ logs: [] });

export function SocketProvider({ children }: PropsWithChildren<any>) {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const socket = io("ws://localhost:8080/groundstation");

    socket.on("connect", () => {
      console.log("connected to groundstation");
    });
    socket.on("log", (log) => {
      setLogs((prev) => [...prev, log]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <Context.Provider value={{ logs: logs }}>{children}</Context.Provider>;
}
