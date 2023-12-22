"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOnChangeHandler = exports.setState = exports.getState = exports.dispatch = void 0;
const functions_1 = require("../utils/functions");
let editor = (0, functions_1.createPresentation)();
let onChangeHandler = () => { };
function dispatch(modifyFn, payload) {
    setState(modifyFn(editor, payload));
}
exports.dispatch = dispatch;
function getState() {
    return editor;
}
exports.getState = getState;
function setState(newEditor) {
    editor = newEditor;
    onChangeHandler();
}
exports.setState = setState;
function addOnChangeHandler(handler) {
    onChangeHandler = handler;
}
exports.addOnChangeHandler = addOnChangeHandler;
