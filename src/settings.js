import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "3bfb40a8705447b49de4bea47415b492";
const token =
  "007eJxTYCiOWtW5+uP1KZOPrn67UeLSZb4X9xZk3pn2pqti5Z1ZH/dfUmAwTkpLMjFItDA3MDUxMU8ysUxJNUlKTTQxNzE0BfKMOlTMUhoCGRnsv55gYmSAQBCfhcE3MTOPgQEAAHYkiA==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Main";
