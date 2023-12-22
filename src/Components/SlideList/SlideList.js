"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideList = void 0;
const react_1 = __importDefault(require("react"));
const SlideList_module_css_1 = __importDefault(require("./SlideList.module.css"));
const MiniSlide_1 = __importDefault(require("../Slide/MiniSlide"));
function SlideList(Props) {
    const slides = Props.slideList.map((slide, index) => (react_1.default.createElement(MiniSlide_1.default, { key: index, slideIndex: slide.slideIndex, selected: Props.selectedSlides.some((Slide) => Slide.slideIndex === slide.slideIndex), background: slide.background.code, blockList: slide.blockList, backgroundType: slide.background.type })));
    return (react_1.default.createElement("div", { className: SlideList_module_css_1.default.slideList },
        react_1.default.createElement("div", { className: SlideList_module_css_1.default.slideList__container }, slides)));
}
exports.SlideList = SlideList;
exports.default = SlideList;
