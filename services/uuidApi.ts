import { useUuidStore } from "~/stores/uuidStore";

const axios = require('axios');

const uuid = useUuidStore()

export const generateUuid = () => {
    const newUuid = axios.get("https://www.uuidtools.com/api/generate/v4")
    uuid.setUserUuid(newUuid)
    console.log(newUuid)
}
