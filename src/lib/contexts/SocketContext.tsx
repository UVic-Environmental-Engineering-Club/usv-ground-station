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
  isRouteSelection: boolean;
  addPoint: (point: Point) => void;
  deletePoint: (point: Point) => void;
  clearRoute: () => void;
  setIsRouteSelection: (bool: boolean) => void;
  setPower: (power: number) => void;
  setAngle: (angle: number) => void;
}

export const Context = createContext<SocketContext>({
  logs: [],
  points: [],
  isRouteSelection: false,
  addPoint: (_: Point) => {},
  deletePoint: (_: Point) => {},
  clearRoute: () => {},
  setIsRouteSelection: (bool: boolean) => {},
  setPower: (power: number) => {},
  setAngle: (angle: number) => {},
});

export function SocketProvider({ children }: PropsWithChildren<any>) {
  const [logs, setLogs] = useState<string[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [isRouteSelection, setIsRouteSelection] = useState<boolean>(false);

  const addPoint = (point: Point) => {
    socket.emit("add_point", { point, isRoute: isRouteSelection });
  };
  const deletePoint = (point: Point) => {
    socket.emit("delete_point", { point, isRoute: isRouteSelection });
  };
  const clearRoute = () => {
    socket.emit("clear_route");
  };
  const setPower = (power: number) => {
    socket.emit("set_power", { power });
  };

  const setAngle = (angle: number) => {
    socket.emit("set_angle", { angle });
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
    socket.on("add_point_route_ack", (route: Point[]) => {
      setPoints(route);
    });
    socket.on("add_point_shore_ack", (shore: Point[]) => {
      setPoints(shore);
    });
    socket.on("delete_point_route_ack", (route: Point[]) => {
      setPoints(route);
    });
    socket.on("delete_point_shore_ack", (shore: Point[]) => {
      setPoints(shore);
    });
    socket.on("clear_route_ack", () => {
      setPoints([]);
    });
    socket.on("clear_shore_ack", () => {
      setPoints([]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Context.Provider
      value={{
        logs,
        points,
        isRouteSelection,
        addPoint,
        deletePoint,
        clearRoute,
        setIsRouteSelection: (bool: boolean) => {
          setIsRouteSelection(bool);
        },
        setPower,
        setAngle,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useSocketContext = () => {
  return useContext<SocketContext>(Context);
};
