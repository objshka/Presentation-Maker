"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editBlockSizeHandler = exports.unselectedBlockHandler = exports.removeBlockHandler = exports.editFontFamilyHandler = exports.editFontColorHandler = exports.editBlockPositionHandler = exports.editTextSymbolsHandler = exports.editFontSizeHandler = exports.selectBlockHandler = exports.openJsonHandler = exports.saveAsJsonHandler = exports.editSlideBackgroundHandler = exports.addBlockHandler = exports.selectSlideHandler = exports.createPresentationHandler = exports.removeSlideHandler = exports.addSlideHandler = exports.renamePresentationHandler = exports.updateHistoryHandler = exports.redoHandler = exports.undoHandler = void 0;
const functions_1 = require("../utils/functions");
const stateManager_1 = require("./stateManager");
const undoHandler = () => {
    (0, stateManager_1.dispatch)(functions_1.undo, {});
};
exports.undoHandler = undoHandler;
const redoHandler = () => {
    (0, stateManager_1.dispatch)(functions_1.redo, {});
};
exports.redoHandler = redoHandler;
const updateHistoryHandler = () => {
    (0, stateManager_1.dispatch)(functions_1.updateHistory, {});
};
exports.updateHistoryHandler = updateHistoryHandler;
const renamePresentationHandler = (name) => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.renamePresentation, name);
};
exports.renamePresentationHandler = renamePresentationHandler;
const addSlideHandler = () => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.createSlide, {});
};
exports.addSlideHandler = addSlideHandler;
const removeSlideHandler = (selectedSlides) => {
    (0, exports.updateHistoryHandler)();
    let slideIndexes = [];
    for (let i = 0; i < selectedSlides.length; i++) {
        slideIndexes.push(selectedSlides[i].slideIndex);
    }
    (0, stateManager_1.dispatch)(functions_1.removeSlides, slideIndexes);
};
exports.removeSlideHandler = removeSlideHandler;
const createPresentationHandler = () => {
    (0, stateManager_1.dispatch)(functions_1.createPresentation, {});
};
exports.createPresentationHandler = createPresentationHandler;
const selectSlideHandler = (slideIndex, e, selectedSlides) => {
    if (e.ctrlKey) {
        (0, stateManager_1.dispatch)(functions_1.selectSlides, slideIndex);
    }
    else {
        (0, stateManager_1.dispatch)(functions_1.selectSlide, slideIndex);
    }
};
exports.selectSlideHandler = selectSlideHandler;
const addBlockHandler = (slideIndex, inputContent) => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.createBlock, { slideIndex, inputContent });
};
exports.addBlockHandler = addBlockHandler;
const editSlideBackgroundHandler = (slideIndex, value, type) => {
    (0, exports.updateHistoryHandler)();
    let newBackground;
    if (type === "color") {
        newBackground = {
            type: "color",
            code: value
        };
    }
    else {
        newBackground = {
            type: "picture",
            code: value
        };
    }
    (0, stateManager_1.dispatch)(functions_1.editSlideBackground, { slideIndex, newBackground });
};
exports.editSlideBackgroundHandler = editSlideBackgroundHandler;
const saveAsJsonHandler = () => {
    (0, stateManager_1.dispatch)(functions_1.convertPresentationToJson, {});
};
exports.saveAsJsonHandler = saveAsJsonHandler;
const openJsonHandler = (json) => {
    (0, stateManager_1.dispatch)(functions_1.convertJsonToPresentation, json);
};
exports.openJsonHandler = openJsonHandler;
const selectBlockHandler = (slideIndex, blockIndex) => {
    (0, stateManager_1.dispatch)(functions_1.selectBlock, { slideIndex, blockIndex });
};
exports.selectBlockHandler = selectBlockHandler;
const editFontSizeHandler = (slideIndex, blockIndex, newFontSize) => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.editFontSize, { slideIndex, blockIndex, newFontSize });
};
exports.editFontSizeHandler = editFontSizeHandler;
const editTextSymbolsHandler = (slideIndex, blockIndex, newSymbols) => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.editTextSymbols, { slideIndex, blockIndex, newSymbols });
};
exports.editTextSymbolsHandler = editTextSymbolsHandler;
const editBlockPositionHandler = (slideIndex, blockIndex, coordX, coordY) => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.editBlockPosition, { slideIndex, blockIndex, coordX, coordY });
};
exports.editBlockPositionHandler = editBlockPositionHandler;
const editFontColorHandler = (slideIndex, blockIndex, newFontColor) => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.editFontColor, { slideIndex, blockIndex, newFontColor });
};
exports.editFontColorHandler = editFontColorHandler;
const editFontFamilyHandler = (slideIndex, blockIndex, newFontFamily) => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.editFontFamily, { slideIndex, blockIndex, newFontFamily });
};
exports.editFontFamilyHandler = editFontFamilyHandler;
const removeBlockHandler = (slideIndex, blockIndex) => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.removeBlock, { slideIndex, blockIndex });
};
exports.removeBlockHandler = removeBlockHandler;
const unselectedBlockHandler = (slideIndex) => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.unselectedBlock, { slideIndex });
};
exports.unselectedBlockHandler = unselectedBlockHandler;
const editBlockSizeHandler = (slideIndex, blockIndex, newWidth, newHeight) => {
    (0, exports.updateHistoryHandler)();
    (0, stateManager_1.dispatch)(functions_1.editBlockSize, { slideIndex, blockIndex, newWidth, newHeight });
};
exports.editBlockSizeHandler = editBlockSizeHandler;
