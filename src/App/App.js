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
require("./App.module.css");
const App_module_css_1 = __importDefault(require("./App.module.css"));
const react_1 = __importStar(require("react"));
const MenuBar_1 = __importDefault(require("../Components/MenuBar/MenuBar"));
const ToolBar_1 = __importDefault(require("../Components/ToolBar/ToolBar"));
const SlideList_1 = __importDefault(require("../Components/SlideList/SlideList"));
const WorkSpace_1 = __importDefault(require("../Components/WorkSpace/WorkSpace"));
const stateManager_1 = require("../stateManager/stateManager");
function App() {
    const editor = (0, stateManager_1.getState)();
    const presentation = editor.presentation;
    const presentationSlideList = presentation.slideList;
    const presentationSelectedSlideList = presentation.selectedSlides;
    (0, react_1.useEffect)(() => {
        document.title = presentation.name;
    }, [presentation]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(MenuBar_1.default, { presentation: presentation }),
        react_1.default.createElement(ToolBar_1.default, { presentation: presentation }),
        react_1.default.createElement("div", { className: App_module_css_1.default.content },
            react_1.default.createElement(SlideList_1.default, { slideList: presentationSlideList, selectedSlides: presentationSelectedSlideList }),
            react_1.default.createElement(WorkSpace_1.default, { presentation: presentation, slideIndex: presentation.selectedSlides[0].slideIndex }))));
}
exports.default = App;
