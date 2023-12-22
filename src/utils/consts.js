"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSlide = exports.defaultTextType = exports.defaultText = exports.defaultSlideColor = exports.defaultColor = void 0;
exports.defaultColor = {
    type: "color",
    code: "#000"
};
exports.defaultSlideColor = {
    type: "color",
    code: "#fff"
};
exports.defaultText = {
    type: "text",
    fontFamily: "Arial",
    fontColor: "#000",
    fontSize: 32,
    symbols: "Новый текст"
};
exports.defaultTextType = {
    data: exports.defaultText
};
exports.defaultSlide = {
    slideIndex: 1,
    blockList: [],
    selectedBlockList: [],
    background: exports.defaultSlideColor
};
