'use strict';

var ImagesList = ["beach", "christmas_present", "cny", "earth_day", "easter", "halloween", "rain", "sakura", "snow", "valentine", "valentine_present", "children_day", "sunset"];

var RandomImage = function RandomImage() {
  var imageOrigin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "https://cdn.jsdelivr.net/gh/Jiale0709/jiale-mascot-randomiser@master";
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "avif";
  var custom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var customImages = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  if (custom) {
    if (customImages.length === 0) {
      throw new Error("No custom images provided in array.");
    }
    return customImages[Math.floor(Math.random() * customImages.length)];
  } else {
    var availableTypes = ["avif", "png"];
    var safeType = availableTypes.includes(type) ? type : "avif";
    var safeImageOrigin = imageOrigin.replace(/\/$/, "");
    var imgDirectory = safeType === "avif" ? "images/avif" : "images/default";
    return "".concat(safeImageOrigin, "/").concat(imgDirectory, "/").concat(ImagesList[Math.floor(Math.random() * ImagesList.length)], ".").concat(safeType);
  }
};

exports.RandomImage = RandomImage;
//# sourceMappingURL=bundle.cjs.map
