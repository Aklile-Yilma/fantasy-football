export const customTheme = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      //after select dropdown option
      primary50: "#1D1D1D",
      //Border and Background dropdown color
      primary: "gray",
      //Background hover dropdown color
      primary25: "#2F2F2F",
      //Background color
      neutral0: "#1D1D1D",
      //Border before select
      neutral20: "white",
      //Hover border
      neutral30: "#2F2F2F",
      //No options color
      neutral40: "white",
      //Select color
      neutral50: "white",
      //arrow icon when click select
      neutral60: "white",
      //Text color
      neutral80: "white",
    },
  })