"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniImageComponent = void 0;
const react_1 = __importDefault(require("react"));
const MiniImageComponent_module_css_1 = __importDefault(require("./MiniImageComponent.module.css"));
function MiniImageComponent(Props) {
    const style = {
        top: (Props.position.y / 6),
        left: (Props.position.x / 5.76),
        width: (Props.width / 5.76),
        height: (Props.height / 6),
        "background-image": "url(" + Props.url + ")",
        "background-repeat": "no-repeat"
    };
    return (react_1.default.createElement("div", { onKeyDown: (e) => {
            if (e.key === "Enter") {
                e.currentTarget.blur();
            }
        }, className: MiniImageComponent_module_css_1.default.image, style: style }));
}
exports.MiniImageComponent = MiniImageComponent;
