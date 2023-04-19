import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "3bfb40a8705447b49de4bea47415b492";
const token =
  "007eJxTYIhWiDj7IbuKaZJCjL/lsdPT7znd9i0MuC/uL2qp5fN72XIFBuOktCQTg0QLcwNTExPzJBPLlFSTpNREE3MTQ1Mgz8ghxD6lIZCRoX1HAjMjAwSC+CwMvomZeQwMANbWHWk=";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Main";
