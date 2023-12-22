"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolBar = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const ToolBar_module_css_1 = __importDefault(require("./ToolBar.module.css"));
const stateManagerFunctions_1 = require("../../stateManager/stateManagerFunctions");
const consts_1 = require("../../utils/consts");
function ToolBar(Props) {
    const [inputSize, setInputSize] = (0, react_2.useState)(consts_1.defaultText.fontSize);
    function increment() {
        if (inputSize < 100) {
            setInputSize(inputSize + 1);
            (0, stateManagerFunctions_1.editFontSizeHandler)(Props.presentation.selectedSlides[0].slideIndex, Props.presentation.selectedSlides[0].selectedBlockList[0].blockIndex, inputSize + 1);
        }
    }
    function decrement() {
        if (inputSize > 1) {
            setInputSize(inputSize - 1);
            (0, stateManagerFunctions_1.editFontSizeHandler)(Props.presentation.selectedSlides[0].slideIndex, Props.presentation.selectedSlides[0].selectedBlockList[0].blockIndex, inputSize - 1);
        }
    }
    function inputFontSize() {
        if (inputSize > 1 && inputSize < 100)
            setInputSize(inputSize);
        (0, stateManagerFunctions_1.editFontSizeHandler)(Props.presentation.selectedSlides[0].slideIndex, Props.presentation.selectedSlides[0].selectedBlockList[0].blockIndex, inputSize - 1);
    }
    const [colorBackground, setColorBackground] = (0, react_2.useState)("fff");
    const colorBackgroundHandler = (event) => {
        setColorBackground(event.target.value);
        (0, stateManagerFunctions_1.editSlideBackgroundHandler)(Props.presentation.selectedSlides[0].slideIndex, colorBackground, "color");
    };
    const [colorText, setColorText] = (0, react_2.useState)(consts_1.defaultText.fontColor);
    const fontColorHandler = (event) => {
        setColorText(event.target.value);
        (0, stateManagerFunctions_1.editFontColorHandler)(Props.presentation.selectedSlides[0].slideIndex, Props.presentation.selectedSlides[0].selectedBlockList[0].blockIndex, colorText);
    };
    const [file, setFile] = (0, react_2.useState)('');
    const fileHandler = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            let url = URL.createObjectURL(event.target.files[0]);
            setFile(url.toString());
            (0, stateManagerFunctions_1.editSlideBackgroundHandler)(Props.presentation.selectedSlides[0].slideIndex, url, "picture");
        }
    };
    const [image, setImage] = (0, react_2.useState)('');
    const imageBlockHandler = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            let url = URL.createObjectURL(event.target.files[0]);
            setImage(url.toString());
            const image = {
                type: "picture",
                url: url
            };
            const imageType = {
                data: image
            };
            (0, stateManagerFunctions_1.addBlockHandler)(Props.presentation.selectedSlides[0].slideIndex, imageType);
        }
    };
    return (react_1.default.createElement("div", { className: ToolBar_module_css_1.default.toolbar },
        react_1.default.createElement("div", { className: ToolBar_module_css_1.default.toolbar__slideButtons },
            react_1.default.createElement("button", { onClick: stateManagerFunctions_1.addSlideHandler, className: ToolBar_module_css_1.default.toolbar__slideButtons__addButton },
                react_1.default.createElement("img", { src: require("../../images/add-slide.svg").default, alt: "Добавить слайд" }),
                react_1.default.createElement("span", { className: ToolBar_module_css_1.default.toolbar__slideButtons__addButton__text }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043B\u0430\u0439\u0434")),
            react_1.default.createElement("button", { onClick: () => (0, stateManagerFunctions_1.removeSlideHandler)(Props.presentation.selectedSlides), className: ToolBar_module_css_1.default.toolbar__slideButtons__deleteButton },
                react_1.default.createElement("img", { src: require("../../images/delete-slide.svg").default, alt: "Удалить слайд" }))),
        react_1.default.createElement("div", { className: ToolBar_module_css_1.default.toolbar__blockFunctions },
            react_1.default.createElement("img", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__dividingLine, src: require("../../images/dividing-line.svg").default, alt: "Линия разделения" }),
            react_1.default.createElement("button", { onClick: stateManagerFunctions_1.undoHandler, className: ToolBar_module_css_1.default.toolbar__blockFunctions__button },
                react_1.default.createElement("img", { src: require("../../images/undo.svg").default, alt: "Отмена" })),
            react_1.default.createElement("button", { onClick: stateManagerFunctions_1.redoHandler, className: ToolBar_module_css_1.default.toolbar__blockFunctions__button },
                react_1.default.createElement("img", { src: require("../../images/redo.svg").default, alt: "Вперёд" })),
            react_1.default.createElement("button", { onClick: () => {
                    (0, stateManagerFunctions_1.addBlockHandler)(Props.presentation.slideList[Props.presentation.selectedSlides[0].slideIndex - 1].slideIndex, consts_1.defaultTextType);
                }, className: ToolBar_module_css_1.default.toolbar__blockFunctions__button },
                react_1.default.createElement("img", { src: require("../../images/text.svg").default, alt: "Добавить текст" })),
            react_1.default.createElement("ul", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__primitiveButton__arrow },
                react_1.default.createElement("li", null,
                    react_1.default.createElement("img", { src: require("../../images/primitive.svg").default, alt: "Развернуть" }),
                    react_1.default.createElement("ul", null,
                        react_1.default.createElement("li", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__primitiveButton__arrow__elem },
                            react_1.default.createElement("span", null, "\u0422\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A")),
                        react_1.default.createElement("li", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__primitiveButton__arrow__elem },
                            react_1.default.createElement("span", null, "\u041A\u0432\u0430\u0434\u0440\u0430\u0442")),
                        react_1.default.createElement("li", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__primitiveButton__arrow__elem },
                            react_1.default.createElement("span", null, "\u041A\u0440\u0443\u0433"))))),
            react_1.default.createElement("ul", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__imageButton },
                react_1.default.createElement("li", null,
                    react_1.default.createElement("img", { src: require("../../images/picture.svg").default, alt: "Добавить картинку" }),
                    react_1.default.createElement("ul", null,
                        react_1.default.createElement("li", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__imageButton__elem },
                            react_1.default.createElement("input", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__imageButton__elem__fileChooser, type: "file", id: "image-upload", accept: ".jpg, .jpeg, .png", onChange: imageBlockHandler }),
                            react_1.default.createElement("label", { htmlFor: "image-upload" }, "\u0421 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430")),
                        react_1.default.createElement("li", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__imageButton__elem },
                            react_1.default.createElement("span", null, "\u0421\u0441\u044B\u043B\u043A\u0430"))))),
            react_1.default.createElement("ul", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__backgroundButton__arrow },
                react_1.default.createElement("li", null,
                    react_1.default.createElement("img", { src: require("../../images/background.svg").default, alt: "Развернуть" }),
                    react_1.default.createElement("ul", null,
                        react_1.default.createElement("li", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__backgroundButton__arrow__elem },
                            react_1.default.createElement("input", { onChange: fileHandler, className: ToolBar_module_css_1.default.toolbar__blockFunctions__backgroundButton__arrow__elem__fileChooser, type: "file", id: "file-upload", accept: ".jpg, .jpeg, .png" }),
                            react_1.default.createElement("label", { htmlFor: "file-upload" }, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")),
                        react_1.default.createElement("li", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__backgroundButton__arrow__elem },
                            react_1.default.createElement("input", { onChange: colorBackgroundHandler, className: ToolBar_module_css_1.default.toolbar__blockFunctions__backgroundButton__arrow__elem__colorChooser, type: "color", id: "colorChooser", value: colorBackground }),
                            react_1.default.createElement("label", { htmlFor: "colorChooser" }, "\u0426\u0432\u0435\u0442"))))),
            react_1.default.createElement("img", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__dividingLine, src: require("../../images/dividing-line.svg").default, alt: "Линия разделения" }),
            react_1.default.createElement("select", { placeholder: "Выберите шрифт", className: ToolBar_module_css_1.default.toolbar__blockFunction__editFontFamily, onChange: (event) => {
                    (0, stateManagerFunctions_1.editFontFamilyHandler)(Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].slideIndex, Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].selectedBlockList[0].blockIndex, event.target.value);
                } },
                react_1.default.createElement("option", { value: "Arial", className: ToolBar_module_css_1.default.toolbar__blockFunction__editFontFamily_Arial }, "Arial"),
                react_1.default.createElement("option", { value: "Times New Roman", className: ToolBar_module_css_1.default.toolbar__blockFunction__editFontFamily_TimesNewRoman }, "Times New Roman"),
                react_1.default.createElement("option", { value: "Medium Montserrat", className: ToolBar_module_css_1.default.toolbar__blockFunction__editFontFamily_Montserrat }, "Montserrat"),
                react_1.default.createElement("option", { value: "Roboto", className: ToolBar_module_css_1.default.toolbar__blockFunction__editFontFamily_Roboto }, "Roboto"),
                react_1.default.createElement("option", { value: "Tahoma", className: ToolBar_module_css_1.default.toolbar__blockFunction__editFontFamily_Tahoma }, "Tahoma")),
            react_1.default.createElement("button", { onClick: decrement, className: ToolBar_module_css_1.default.toolbar__blockFunctions__textSize_decrement },
                react_1.default.createElement("img", { src: require("../../images/decrease-text.svg").default, alt: "Уменьшить размер текста" })),
            react_1.default.createElement("input", { type: "number", value: inputSize, onKeyDown: (e) => {
                    if (e.key === "Enter") {
                        e.currentTarget.blur();
                        inputFontSize();
                    }
                }, onChange: e => setInputSize(e.target.valueAsNumber), className: ToolBar_module_css_1.default.toolbar__blockFunction__editFontSize, alt: "Изменить размер текста" }),
            react_1.default.createElement("button", { onClick: increment, className: ToolBar_module_css_1.default.toolbar__blockFunctions__textSize_increment },
                react_1.default.createElement("img", { src: require("../../images/increase-text.svg").default, alt: "Увеличить размер текста" })),
            react_1.default.createElement("input", { type: "color", onChange: fontColorHandler, value: colorText, id: "colorText", className: ToolBar_module_css_1.default.toolbar__blockFunctions__colorTextChooser }),
            react_1.default.createElement("label", { htmlFor: "colorText", className: ToolBar_module_css_1.default.toolbar__blockFunctions__textColor },
                react_1.default.createElement("img", { src: require("../../images/text-color.svg").default, alt: "Изменить цвет текста" })),
            react_1.default.createElement("img", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__dividingLine, src: require("../../images/dividing-line.svg").default, alt: "Линия разделения" }),
            react_1.default.createElement("button", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__primitiveColor },
                react_1.default.createElement("img", { src: require("../../images/primitive-color-background.svg").default, alt: "Изменить цвет фона примитива" })),
            react_1.default.createElement("button", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__primitiveColor },
                react_1.default.createElement("img", { src: require("../../images/primitive-color-border.svg").default, alt: "Изменить цвет границ примитива" })),
            react_1.default.createElement("img", { className: ToolBar_module_css_1.default.toolbar__blockFunctions__dividingLine, src: require("../../images/dividing-line.svg").default, alt: "Линия разделения" })),
        react_1.default.createElement("div", { className: ToolBar_module_css_1.default.toolbar__slideShow },
            react_1.default.createElement("button", { className: ToolBar_module_css_1.default.toolbar__slideShowButton },
                react_1.default.createElement("img", { src: require("../../images/slide-show.svg").default, alt: "Слайд-шоу" }),
                react_1.default.createElement("span", { className: ToolBar_module_css_1.default.toolbar__slideShowButton__text }, "\u0421\u043B\u0430\u0439\u0434-\u0448\u043E\u0443")))));
}
exports.ToolBar = ToolBar;
exports.default = ToolBar;
