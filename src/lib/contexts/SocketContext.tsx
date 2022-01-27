import { createContext, PropsWithChildren, useState } from "react";
import { socket } from "../SocketManager";

export interface SocketContext {
  logs: string[];
}

export const Context = createContext<SocketContext>({ logs: [] });

export function SocketProvider({ children }: PropsWithChildren<any>) {
  const [logs, setLogs] = useState<string[]>([]);

  socket.on("log", (log) => {
    setLogs((prev) => [...prev, log]);
  });

  return <Context.Provider value={{ logs: logs }}>{children}</Context.Provider>;
}
