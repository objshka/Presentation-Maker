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
exports.MenuBar = void 0;
const react_1 = __importStar(require("react"));
const MenuBar_module_css_1 = __importDefault(require("./MenuBar.module.css"));
const stateManagerFunctions_1 = require("../../stateManager/stateManagerFunctions");
const exportToPDF_1 = require("../../utils/exportToPDF");
function MenuBar(Props) {
    let name = Props.presentation.name;
    const [namePresentation, setName] = (0, react_1.useState)(name);
    (0, react_1.useEffect)(() => {
        setName(name);
    }, [name]);
    const fileChangeHandle = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            let result = reader.result;
            if (typeof result === "string") {
                (0, stateManagerFunctions_1.openJsonHandler)(result);
            }
        };
    };
    return (react_1.default.createElement("div", { className: MenuBar_module_css_1.default.header },
        react_1.default.createElement("div", { className: MenuBar_module_css_1.default.header__icon }),
        react_1.default.createElement("div", { className: MenuBar_module_css_1.default.header__input },
            react_1.default.createElement("input", { onKeyDown: (e) => {
                    if (e.key === "Enter") {
                        e.currentTarget.blur();
                        (0, stateManagerFunctions_1.renamePresentationHandler)(namePresentation);
                    }
                }, onFocus: (e) => {
                    e.currentTarget.select();
                }, onChange: (e) => setName(e.target.value), className: MenuBar_module_css_1.default.header__input__namePresentation, value: namePresentation })),
        react_1.default.createElement("div", { className: MenuBar_module_css_1.default.header__action },
            react_1.default.createElement("button", { onClick: stateManagerFunctions_1.createPresentationHandler, className: MenuBar_module_css_1.default.header__action__create }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"),
            react_1.default.createElement("label", { htmlFor: "json-file-handler", className: MenuBar_module_css_1.default.header__action__open__label }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C"),
            react_1.default.createElement("input", { onChange: fileChangeHandle, id: "json-file-handler", type: "file", accept: ".json", className: MenuBar_module_css_1.default.header__action__open }),
            react_1.default.createElement("button", { onClick: stateManagerFunctions_1.saveAsJsonHandler, className: MenuBar_module_css_1.default.header__action__save }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
            react_1.default.createElement("button", { onClick: () => (0, exportToPDF_1.savePresentationAsPDF)(Props.presentation), className: MenuBar_module_css_1.default.header__action__export }, "\u042D\u043A\u0441\u043F\u043E\u0440\u0442"))));
}
exports.MenuBar = MenuBar;
exports.default = MenuBar;
