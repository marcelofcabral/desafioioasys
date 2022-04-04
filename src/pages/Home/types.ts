export interface UserData {
  id: string;
  name: string;
  birthdate: string;
  gender: "M" | "H";
  authorization: string;
  "refresh-token": string;
}
