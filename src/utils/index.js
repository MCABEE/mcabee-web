import localFont from "next/font/local";

const aeonik_bold = localFont({
  src: "../../public/assets/font/AeonikBold.otf",
});
const aeonik_bold_italic = localFont({
  src: "../../public/assets/font/AeonikBolditalic.otf",
});
const aeonik_light = localFont({ src: "../../public/assets/font/AeonikLight.otf" });
const aeonik_light_italic = localFont({
  src: "../../public/assets/font/AeonikLightitalic.otf",
});
const aeonik_regular = localFont({ src: "../../public/assets/font/AeonikRegular.otf" });
const aeonik_regular_italic = localFont({
  src: "../../public/assets/font/AeonikRegularitalic.otf",
});

export default {
  aeonik_bold,
  aeonik_bold_italic,
  aeonik_light,
  aeonik_light_italic,
  aeonik_regular,
  aeonik_regular_italic,
};
