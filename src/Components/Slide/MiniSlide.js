"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MiniSlide_module_css_1 = __importDefault(require("./MiniSlide.module.css"));
const stateManagerFunctions_1 = require("../../stateManager/stateManagerFunctions");
const MiniTextComponent_1 = require("./Components/Text/MiniTextComponent");
const MiniImageComponent_1 = require("./Components/Image/MiniImageComponent");
const MiniSlide = (Props) => {
    let styleContainer;
    if (Props.backgroundType === "color") {
        styleContainer = {
            background: Props.background
        };
    }
    else {
        styleContainer = {
            background: "url(" + Props.background + ") no-repeat",
            backgroundSize: "cover"
        };
    }
    const textBlocks = Props.blockList.map((block, index) => {
        if (block.content.data.type === "text") {
            return react_1.default.createElement(MiniTextComponent_1.MiniTextComponent, { key: index, fontFamily: block.content.data.fontFamily, fontColor: block.content.data.fontColor, fontSize: block.content.data.fontSize, symbols: block.content.data.symbols, position: block.position, width: block.width, height: block.height });
        }
        if (block.content.data.type === "picture") {
            return react_1.default.createElement(MiniImageComponent_1.MiniImageComponent, { key: index, position: block.position, height: block.height, width: block.width, url: block.content.data.url });
        }
        return null;
    });
    return (react_1.default.createElement("div", { key: Props.slideIndex, className: MiniSlide_module_css_1.default.miniSlide },
        react_1.default.createElement("span", { className: Props.slideIndex < 10 ? MiniSlide_module_css_1.default.miniSlide__index : Props.selected ? MiniSlide_module_css_1.default.miniSlide__index_doubleDigits : MiniSlide_module_css_1.default.miniSlide__index }, Props.slideIndex),
        react_1.default.createElement("div", { className: Props.selected ? MiniSlide_module_css_1.default.miniSlide__borders : undefined },
            react_1.default.createElement("div", { onClick: (e) => {
                    (0, stateManagerFunctions_1.selectSlideHandler)(Props.slideIndex - 1, e, Props.selected);
                    (0, stateManagerFunctions_1.unselectedBlockHandler)(Props.slideIndex);
                }, style: styleContainer, className: MiniSlide_module_css_1.default.miniSlide__container },
                react_1.default.createElement("div", { className: MiniSlide_module_css_1.default.blockList }, textBlocks)))));
};
exports.default = MiniSlide;
