import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "3bfb40a8705447b49de4bea47415b492"
const token = 
"007eJxTYLDfwXFudZfdvV3BleuVWq9rLYr1Zdl8YL1W9fJA8bV3uHgUGIyT0pJMDBItzA1MTUzMk0wsU1JNklITTcxNDE2BPKPCEJOUhkBGhuBnW1kZGSAQxGdh8E3MzGNgAAADeh4R"

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Main";
