import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { socket } from "../SocketIO";

interface Point {
  lat: number;
  long: number;
}

export interface SocketContext {
  logs: string[];
  points: Point[];
  addPoint: (point: Point) => void;
  deletePoint: (point: Point) => void;
  clearRoute: () => void;
}

export const Context = createContext<SocketContext>({
  logs: [],
  points: [],
  addPoint: (_: Point) => {},
  deletePoint: (_: Point) => {},
  clearRoute: () => {},
});

export function SocketProvider({ children }: PropsWithChildren<any>) {
  const [logs, setLogs] = useState<string[]>([]);
  const [points, setPoints] = useState<Point[]>([]);

  const addPoint = (point: Point) => {
    socket.emit("add_point", point);
  };
  const deletePoint = (point: Point) => {
    socket.emit("delete_point", point);
  };
  const clearRoute = () => {
    socket.emit("clear_route");
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to groundstation");
    });
    socket.on("init_route", (route: Point[]) => {
      setPoints(route);
    });
    socket.on("log", (log) => {
      setLogs((prev) => [...prev, log]);
    });
    socket.on("add_point_ack", (point: Point) => {
      setPoints((prev) => [...prev, point]);
    });
    socket.on("delete_point_ack", (route: Point[]) => {
      setPoints(route);
    });
    socket.on("clear_route_ack", () => {
      setPoints([]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Context.Provider
      value={{ logs, points, addPoint, deletePoint, clearRoute }}
    >
      {children}
    </Context.Provider>
  );
}

export const useSocketContext = () => {
  return useContext<SocketContext>(Context);
};
