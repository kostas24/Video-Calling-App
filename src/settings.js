import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "3bfb40a8705447b49de4bea47415b492";
const token =
  "007eJxTYNh36sAJhrV7D3xNtBOdd+Nkt1tNxK+lQnkb7yyyrfp62itNgcE4KS3JxCDRwtzA1MTEPMnEMiXVJCk10cTcxNAUyDOqqDFPaQhkZPio5MPKyACBID4Lg29iZh4DAwAZaSEw";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Main";
