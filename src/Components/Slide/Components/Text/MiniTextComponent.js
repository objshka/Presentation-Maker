"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniTextComponent = void 0;
const react_1 = __importDefault(require("react"));
const MiniTextComponent_module_css_1 = __importDefault(require("./MiniTextComponent.module.css"));
function MiniTextComponent(Props) {
    const style = {
        fontFamily: Props.fontFamily,
        color: Props.fontColor,
        fontSize: (Props.fontSize / 5),
        top: (Props.position.y / 8),
        left: (Props.position.x / 8),
        width: (Props.width / 5),
        height: (Props.height / 5)
    };
    return (react_1.default.createElement("div", { onKeyDown: (e) => {
            if (e.key === "Enter") {
                e.currentTarget.blur();
            }
        }, className: MiniTextComponent_module_css_1.default.text, style: style }, Props.symbols));
}
exports.MiniTextComponent = MiniTextComponent;
