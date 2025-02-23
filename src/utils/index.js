import localFont from "next/font/local";

const aeonik_bold = localFont({
  src: "/font/AeonikBold.otf",
});
const aeonik_bold_italic = localFont({
  src: "/font/AeonikBolditalic.otf",
});
const aeonik_light = localFont({ src: "/font/AeonikLight.otf" });
const aeonik_light_italic = localFont({
  src: "/font/AeonikLightitalic.otf",
});
const aeonik_regular = localFont({ src: "/font/AeonikRegular.otf" });
const aeonik_regular_italic = localFont({
  src: "/font/AeonikRegularitalic.otf",
});

export default {
  aeonik_bold,
  aeonik_bold_italic,
  aeonik_light,
  aeonik_light_italic,
  aeonik_regular,
  aeonik_regular_italic,
};
