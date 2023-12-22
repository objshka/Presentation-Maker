"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextComponent = void 0;
const react_1 = __importStar(require("react"));
const useDragAndDrop_1 = __importDefault(require("../../../../hooks/useDragAndDrop"));
const stateManagerFunctions_1 = require("../../../../stateManager/stateManagerFunctions");
const TextComponent_module_css_1 = __importDefault(require("./TextComponent.module.css"));
function TextComponent(Props) {
    let style = {
        fontFamily: Props.fontFamily,
        color: Props.fontColor,
        fontSize: Props.fontSize,
        top: Props.position.y,
        left: Props.position.x,
        width: Props.width,
        height: Props.height
    };
    const [symbols, setSymbols] = (0, react_1.useState)("Новый текст");
    let symbolsHandler = (event) => {
        let symbolInput = event.target.value;
        setSymbols(symbolInput);
        (0, stateManagerFunctions_1.editTextSymbolsHandler)(Props.slideIndex, Props.blockIndex, symbolInput);
    };
    let idBlocks = Math.random();
    (0, useDragAndDrop_1.default)(Props.slideIndex, Props.blockIndex, String(idBlocks), Props.position.x, Props.position.y, "text");
    return (react_1.default.createElement("div", { className: TextComponent_module_css_1.default.textBlock },
        react_1.default.createElement("textarea", { onClick: (e) => {
                (0, stateManagerFunctions_1.selectBlockHandler)(Props.slideIndex, Props.blockIndex);
            }, onKeyDown: (e) => {
                if (e.key === "Alt") {
                    (0, stateManagerFunctions_1.unselectedBlockHandler)(Props.slideIndex);
                    e.currentTarget.blur();
                }
                if (e.key === "Delete") {
                    (0, stateManagerFunctions_1.removeBlockHandler)(Props.slideIndex, Props.blockIndex);
                }
            }, id: String(idBlocks), className: TextComponent_module_css_1.default.text, autoComplete: "off", value: Props.symbols, onChange: (e) => symbolsHandler(e), style: style })));
}
exports.TextComponent = TextComponent;
