import { createServer } from "miragejs"
import {useEffect, useState} from "react";

let server = createServer()
server.get("/api/users", { users: [{ id: 1, name: "Bob" }] })

export default server