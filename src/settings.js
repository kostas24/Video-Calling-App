import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "3bfb40a8705447b49de4bea47415b492";
const token =
  "007eJxTYMhMMWidZfTr42fh98Hpt04kHQkNiuxn/M33unXDgby+xjcKDMZJaUkmBokW5gamJibmSSaWKakmSamJJuYmhqZAntHB5Q4pDYGMDPeYPzMwQiGIz8Lgm5iZx8AAAOjTIXM=";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Main";
