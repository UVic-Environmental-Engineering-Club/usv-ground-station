import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { io } from "socket.io-client";

interface Point {
  lat: number;
  long: number;
}

export interface SocketContext {
  logs: string[];
  points: Point[];
  addPoint: (point: Point) => void;
}

export const Context = createContext<SocketContext>({
  logs: [],
  points: [],
  addPoint: (_: Point) => {},
});

export function SocketProvider({ children }: PropsWithChildren<any>) {
  const [logs, setLogs] = useState<string[]>([]);
  const [points, setPoints] = useState<Point[]>([]);

  const addPoint = (point: Point) => {
    setPoints((prev) => [...prev, point]);
  };

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

  return (
    <Context.Provider value={{ logs, points, addPoint }}>
      {children}
    </Context.Provider>
  );
}

export const useSocketContext = () => {
  return useContext<SocketContext>(Context);
};
