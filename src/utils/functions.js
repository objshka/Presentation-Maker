"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unselectedBlock = exports.updateHistory = exports.redo = exports.undo = exports.editBlockPosition = exports.editTextSymbols = exports.editFontColor = exports.editFontSize = exports.editFontFamily = exports.editBlockSize = exports.selectBlock = exports.removeBlock = exports.createBlock = exports.selectSlides = exports.selectSlide = exports.editSlideBackground = exports.removeSlides = exports.createSlide = exports.renamePresentation = exports.convertJsonToPresentation = exports.convertPresentationToJson = exports.createPresentation = void 0;
const consts_1 = require("./consts");
// presentation functions
function createPresentation() {
    return {
        history: {
            index: 0,
            states: []
        },
        presentation: {
            name: "Новая презентация",
            slideList: [consts_1.defaultSlide],
            selectedSlides: [consts_1.defaultSlide]
        }
    };
}
exports.createPresentation = createPresentation;
function convertPresentationToJson(editor) {
    const json = JSON.stringify(editor.presentation);
    const blob = new Blob([json], { type: "text/plain" });
    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", editor.presentation.name + ".json");
    link.click();
    return editor;
}
exports.convertPresentationToJson = convertPresentationToJson;
function convertJsonToPresentation(editor, json) {
    editor.presentation = JSON.parse(json);
    return editor;
}
exports.convertJsonToPresentation = convertJsonToPresentation;
function renamePresentation(editor, inputName) {
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { name: inputName }) });
}
exports.renamePresentation = renamePresentation;
// slide functions
function createSlide(editor) {
    const newSlide = {
        slideIndex: editor.presentation.slideList.length + 1,
        blockList: [],
        selectedBlockList: [],
        background: consts_1.defaultSlideColor
    };
    const newSlideList = [...editor.presentation.slideList, newSlide];
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: newSlideList }) });
}
exports.createSlide = createSlide;
function removeSlides(editor, slideIndexes) {
    if (slideIndexes.length === 1) {
        if (editor.presentation.slideList.length === 1) {
            return editor;
        }
        const slideList = editor.presentation.slideList;
        const newSlideList = [];
        let saveIndex = 0;
        for (let i = 0; i < slideList.length; i++) {
            if (slideList[i].slideIndex !== slideIndexes[0]) {
                if (slideList[i].slideIndex < slideIndexes[0]) {
                    newSlideList.push(slideList[i]);
                }
                else {
                    slideList[i].slideIndex--;
                    newSlideList.push(slideList[i]);
                    saveIndex = slideIndexes[0] - 1;
                }
            }
        }
        const newSelectedSlides = [editor.presentation.slideList[saveIndex]];
        return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: newSlideList, selectedSlides: newSelectedSlides }) });
    }
    else {
        if (editor.presentation.slideList.length === slideIndexes.length) {
            return editor;
        }
        slideIndexes.sort((a, b) => a - b);
        let slideList = editor.presentation.slideList;
        let slideListCounter = 0;
        while (slideIndexes.length !== 0) {
            if (slideIndexes[0] !== slideList[slideListCounter].slideIndex) {
                slideListCounter++;
            }
            else {
                const index = slideList.indexOf(slideList[slideListCounter], 0);
                if (index > -1) {
                    slideList.splice(index, 1);
                }
                slideIndexes.splice(0, 1);
            }
        }
        const newSlideList = slideList.map((slide, index) => {
            slide.slideIndex = index + 1;
            return slide;
        });
        const newSelectedSlides = [newSlideList[0]];
        return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: newSlideList, selectedSlides: newSelectedSlides }) });
    }
}
exports.removeSlides = removeSlides;
function editSlideBackground(editor, payload) {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const newSlide = Object.assign(Object.assign({}, slide), { background: payload.newBackground });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }) }) });
}
exports.editSlideBackground = editSlideBackground;
function selectSlide(editor, slideIndex) {
    const slide = editor.presentation.slideList[slideIndex];
    const newSelectedSlideList = [slide];
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { selectedSlides: newSelectedSlideList }) });
}
exports.selectSlide = selectSlide;
function selectSlides(editor, slideIndex) {
    const slide = editor.presentation.slideList[slideIndex];
    editor.presentation.selectedSlides.push(slide);
    return Object.assign({}, editor);
}
exports.selectSlides = selectSlides;
// block functions
function createBlock(editor, payload) {
    const newBlock = {
        content: payload.inputContent,
        blockIndex: editor.presentation.slideList[payload.slideIndex - 1].blockList.length + 1,
        position: {
            x: 200,
            y: 200
        },
        width: 500,
        height: 100
    };
    const newBlockList = [...editor.presentation.slideList[payload.slideIndex - 1].blockList, newBlock];
    const newSlide = Object.assign(Object.assign({}, editor.presentation.slideList[payload.slideIndex - 1]), { blockList: newBlockList });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }) }) });
}
exports.createBlock = createBlock;
function removeBlock(editor, payload) {
    const slideList = editor.presentation.slideList;
    const slide = slideList[payload.slideIndex - 1];
    const blockList = slide.blockList;
    const newBlockList = [];
    for (let i = 0; i < blockList.length; i++) {
        if (blockList[i].blockIndex !== payload.blockIndex) {
            if (blockList[i].blockIndex < payload.blockIndex) {
                newBlockList.push(blockList[i]);
            }
            else {
                blockList[i].blockIndex--;
                newBlockList.push(blockList[i]);
            }
        }
    }
    const newSlide = Object.assign(Object.assign({}, slide), { blockList: newBlockList, selectedBlockList: [] });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }) }) });
}
exports.removeBlock = removeBlock;
function selectBlock(editor, payload) {
    const newSelectedBlock = editor.presentation.slideList[payload.slideIndex - 1].blockList[payload.blockIndex - 1];
    const newSelectedBlockList = [newSelectedBlock];
    const newSlide = Object.assign(Object.assign({}, editor.presentation.slideList[payload.slideIndex - 1]), { selectedBlockList: newSelectedBlockList });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }), selectedSlides: [newSlide] }) });
}
exports.selectBlock = selectBlock;
function editBlockSize(editor, payload) {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.blockList[payload.blockIndex - 1];
    const newBlock = Object.assign(Object.assign({}, block), { width: payload.newWidth, height: payload.newHeight });
    const newSlide = Object.assign(Object.assign({}, slide), { blockList: slide.blockList.map((currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        }) });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }), selectedSlides: [newSlide] }) });
}
exports.editBlockSize = editBlockSize;
// content of block functions
function editFontFamily(editor, payload) {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.blockList[payload.blockIndex - 1];
    const data = Object.assign({}, block.content.data);
    const newData = Object.assign(Object.assign({}, data), { fontFamily: payload.newFontFamily });
    const newContent = Object.assign(Object.assign({}, block.content), { data: newData });
    const newBlock = Object.assign(Object.assign({}, block), { content: newContent });
    const newSlide = Object.assign(Object.assign({}, slide), { blockList: slide.blockList.map((currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        }) });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }), selectedSlides: [newSlide] }) });
}
exports.editFontFamily = editFontFamily;
function editFontSize(editor, payload) {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.blockList[payload.blockIndex - 1];
    const data = Object.assign({}, block.content.data);
    const newData = Object.assign(Object.assign({}, data), { fontSize: payload.newFontSize });
    const newContent = Object.assign(Object.assign({}, block.content), { data: newData });
    const newBlock = Object.assign(Object.assign({}, block), { content: newContent });
    const newSlide = Object.assign(Object.assign({}, slide), { blockList: slide.blockList.map((currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        }) });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }), selectedSlides: [newSlide] }) });
}
exports.editFontSize = editFontSize;
function editFontColor(editor, payload) {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.blockList[payload.blockIndex - 1];
    const data = Object.assign({}, block.content.data);
    const newData = Object.assign(Object.assign({}, data), { fontColor: payload.newFontColor });
    const newContent = Object.assign(Object.assign({}, block.content), { data: newData });
    const newBlock = Object.assign(Object.assign({}, block), { content: newContent });
    const newSlide = Object.assign(Object.assign({}, slide), { blockList: slide.blockList.map((currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        }) });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }), selectedSlides: [newSlide] }) });
}
exports.editFontColor = editFontColor;
function editTextSymbols(editor, payload) {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.blockList[payload.blockIndex - 1];
    const data = Object.assign({}, block.content.data);
    const newData = Object.assign(Object.assign({}, data), { symbols: payload.newSymbols });
    const newContent = Object.assign(Object.assign({}, block.content), { data: newData });
    const newBlock = Object.assign(Object.assign({}, block), { content: newContent });
    const newSlide = Object.assign(Object.assign({}, slide), { blockList: slide.blockList.map((currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        }) });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }), selectedSlides: [newSlide] }) });
}
exports.editTextSymbols = editTextSymbols;
function editBlockPosition(editor, payload) {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.blockList[payload.blockIndex - 1];
    const newBlock = Object.assign(Object.assign({}, block), { position: { x: payload.coordX, y: payload.coordY } });
    const newSlide = Object.assign(Object.assign({}, slide), { blockList: slide.blockList.map((currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        }) });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }), selectedSlides: [newSlide] }) });
}
exports.editBlockPosition = editBlockPosition;
// отменить
function undo(editor) {
    const newEditor = Object.assign({}, editor);
    if (editor.history.index > 0) {
        newEditor.history.index = editor.history.index - 1;
        newEditor.presentation = editor.history.states[newEditor.history.index];
    }
    return newEditor;
}
exports.undo = undo;
// вернуть
function redo(editor) {
    const newEditor = Object.assign({}, editor);
    if (editor.history.index < editor.history.states.length - 1) {
        newEditor.history.index = editor.history.index + 1;
        newEditor.presentation = editor.history.states[newEditor.history.index];
    }
    return newEditor;
}
exports.redo = redo;
function updateHistory(editor) {
    const newEditor = Object.assign(Object.assign({}, editor), { history: Object.assign(Object.assign({}, editor.history), { index: editor.history.index + 1 }) });
    const newStates = newEditor.history.states.filter((value, id) => id <= newEditor.history.index && value);
    newEditor.history.states = [...newStates, editor.presentation];
    return newEditor;
}
exports.updateHistory = updateHistory;
function unselectedBlock(editor, payload) {
    const newSelectedBlockList = [];
    const newSlide = Object.assign(Object.assign({}, editor.presentation.slideList[payload.slideIndex - 1]), { selectedBlockList: newSelectedBlockList });
    return Object.assign(Object.assign({}, editor), { presentation: Object.assign(Object.assign({}, editor.presentation), { slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            }) }) });
}
exports.unselectedBlock = unselectedBlock;
