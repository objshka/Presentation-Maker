"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageComponent = void 0;
const react_1 = __importDefault(require("react"));
const stateManagerFunctions_1 = require("../../../../stateManager/stateManagerFunctions");
const useDragAndDrop_1 = __importDefault(require("../../../../hooks/useDragAndDrop"));
const ImageComponent_module_css_1 = __importDefault(require("./ImageComponent.module.css"));
function ImageComponent(Props) {
    let style = {
        top: Props.position.y,
        left: Props.position.x,
        width: Props.width,
        height: Props.height,
        "background-image": "url(" + Props.url + ")",
    };
    let idBlocks = Math.random();
    (0, useDragAndDrop_1.default)(Props.slideIndex, Props.blockIndex, String(idBlocks), Props.position.x, Props.position.y, "picture");
    return (react_1.default.createElement("div", { style: { position: "absolute" } },
        react_1.default.createElement("div", { style: style, className: ImageComponent_module_css_1.default.image_block, onClick: (e) => {
                (0, stateManagerFunctions_1.selectBlockHandler)(Props.slideIndex, Props.blockIndex);
            }, id: String(idBlocks), tabIndex: Math.random(), onKeyDown: (e) => {
                if (e.key === "Alt") {
                    (0, stateManagerFunctions_1.unselectedBlockHandler)(Props.slideIndex);
                    e.currentTarget.blur();
                }
                if (e.key === "Delete") {
                    (0, stateManagerFunctions_1.removeBlockHandler)(Props.slideIndex, Props.blockIndex);
                }
            } })));
}
exports.ImageComponent = ImageComponent;
