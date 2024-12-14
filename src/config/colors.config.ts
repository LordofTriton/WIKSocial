export type IColor =
  | "L"
  | "LXXV"
  | "C"
  | "CC"
  | "CCC"
  | "CD"
  | "D"
  | "DC"
  | "DCC"
  | "DCCC"
  | "CM"

export const LightColor: Record<IColor, string> = {
  L: "#FFECE5",
  LXXV: "#FCD2C2",
  C: "#FCB59A",
  CC: "#FA9874",
  CCC: "#F77A4A",
  CD: "#0006B2",
  D: "#EB5017",
  DC: "#CC400C",
  DCC: "#AD3307",
  DCCC: "#D2B48C",
  CM: "#711E00"
};

export const DarkColor: Record<IColor, string> = {
  L: "#E3EFFC",
  LXXV: "#C6DDF7",
  C: "#B6D8FF",
  CC: "#80BBFF",
  CCC: "#3D89DF",
  CD: "#1671D9",
  D: "#0D5EBA",
  DC: "#034592",
  DCC: "#04326B",
  DCCC: "#012657",
  CM: "#001633"
};

export const ShadeColor: Record<string, string> = {
  white: "#FFFFFF",
  black: "#000000",
  ash: "#E1E1E1",
  silver: "#E5E5E5",
  platinum: "#E8E7EE",
  glass: "#f7f7f750"
};