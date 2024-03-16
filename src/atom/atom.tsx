import { atom, selector } from "recoil";

interface SocialType {
  userName: string;
  email: string;
  gender: string;
  birth: string;
  phoneNumber: string;
  socialType: string;
}

export const tagFetchState = atom({
  key: "tagFetchState",
  default: false,
});

export const saveState = atom({
  key: "saveState",
  default: "",
});

export const loginCheck = atom({
  key: "loginCheck",
  default: false,
});

export const kakaoData = atom<SocialType | null>({
  key: "kakaoData",
  default: null,
});
