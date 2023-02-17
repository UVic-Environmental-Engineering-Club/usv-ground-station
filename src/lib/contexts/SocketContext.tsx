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
  usvPoint: Point | null;
  isRouteSelection: boolean;
  addPoint: (point: Point) => void;
  deletePoint: (point: Point) => void;
  clearRoute: () => void;
  clearShore: () => void;
  setIsRouteSelection: (bool: boolean) => void;
  setPower: (power: number) => void;
  setAngle: (angle: number) => void;
}

export const Context = createContext<SocketContext>({
  logs: [],
  points: [],
  usvPoint: null,
  isRouteSelection: false,
  addPoint: (_: Point) => {},
  deletePoint: (_: Point) => {},
  clearRoute: () => {},
  clearShore: () => {},
  setIsRouteSelection: (bool: boolean) => {},
  setPower: (power: number) => {},
  setAngle: (angle: number) => {},
});

export function SocketProvider({ children }: PropsWithChildren<any>) {
  const [logs, setLogs] = useState<string[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [usvPoint, setUsvPoint] = useState<Point | null>(null);
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
  const clearShore = () => {
    socket.emit("clear_shore");
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
    socket.on("init_shore", (shore: Point[]) => {
      setPoints(shore);
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
    socket.on("serial", (data: any) => {
      setLogs((prev) => [...prev, JSON.stringify(data)]);
    });
    socket.on(
      "usv_gps",
      (data: { type: string; data: { long: string; lat: string } }) => {
        setUsvPoint({
          long: parseFloat(data.data.long),
          lat: parseFloat(data.data.lat),
        });
        setLogs((prev) => [...prev, JSON.stringify(data)]);
      }
    );

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Context.Provider
      value={{
        logs,
        points,
        usvPoint,
        isRouteSelection,
        addPoint,
        deletePoint,
        clearRoute,
        clearShore,
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
