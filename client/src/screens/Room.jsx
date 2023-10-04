import React, { useEffect } from "react";
import { useSocket } from "../context/SocketProvider";

const RoomPage = () => {

    const socket = useSocket();

    useEffect(() => { }, []);

    return (
        <div>
            <h1>RoomPage</h1>
        </div>
    );
};

export default RoomPage;
