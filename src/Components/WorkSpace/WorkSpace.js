"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkSpace = void 0;
const react_1 = __importDefault(require("react"));
const WorkSpace_module_css_1 = __importDefault(require("./WorkSpace.module.css"));
const TextComponent_1 = require("../Slide/Components/Text/TextComponent");
const ImageComponent_1 = require("../Slide/Components/Image/ImageComponent");
function WorkSpace(Props) {
    const textBlocks = Props.presentation.slideList[Props.slideIndex - 1].blockList.map((block, index) => {
        if ((block.content.data.type === "text")) {
            return react_1.default.createElement(TextComponent_1.TextComponent, { key: index, fontFamily: block.content.data.fontFamily, fontColor: block.content.data.fontColor, fontSize: block.content.data.fontSize, symbols: block.content.data.symbols, position: block.position, width: block.width, height: block.height, slideIndex: Props.slideIndex, blockIndex: block.blockIndex, presentation: Props.presentation });
        }
        return null;
    });
    const imageBlocks = Props.presentation.slideList[Props.slideIndex - 1].blockList.map((block, index) => {
        if (block.content.data.type === "picture") {
            return react_1.default.createElement(ImageComponent_1.ImageComponent, { url: block.content.data.url, key: index, position: block.position, slideIndex: Props.slideIndex, blockIndex: block.blockIndex, width: block.width, height: block.height, presentation: Props.presentation });
        }
        return null;
    });
    const newBackground = Props.presentation.slideList[Props.slideIndex - 1].background;
    let style;
    if (newBackground.type === "color") {
        style = {
            background: newBackground.code
        };
    }
    else {
        style = {
            background: "url(" + newBackground.code + ") no-repeat",
            backgroundSize: "cover"
        };
    }
    return (react_1.default.createElement("div", { className: WorkSpace_module_css_1.default.workspace__background },
        react_1.default.createElement("div", { className: WorkSpace_module_css_1.default.workspace__content, style: style },
            textBlocks,
            imageBlocks)));
}
exports.WorkSpace = WorkSpace;
exports.default = WorkSpace;
