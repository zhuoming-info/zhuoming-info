const ScreenSize = (width) => {
  let size = "small";
  if (width < 576) {
    size = "small";
  }
  if (width >= 576 && width < 768) {
    size = "small";
  }
  if (width >= 768 && width < 992) {
    size = "large";
  }
  if (width >= 992) {
    size = "large";
  }
  return size;
};

export default ScreenSize;
