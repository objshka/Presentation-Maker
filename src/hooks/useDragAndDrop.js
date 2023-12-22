"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDragAndDrop = void 0;
const react_1 = require("react");
const stateManagerFunctions_1 = require("../stateManager/stateManagerFunctions");
function useDragAndDrop(slideIndex, blockIndex, id, coordX, coordY, type) {
    const isClicked = (0, react_1.useRef)(false);
    const coords = (0, react_1.useRef)({
        startX: coordX,
        startY: coordY,
        lastX: coordX,
        lastY: coordY
    });
    (0, react_1.useEffect)(() => {
        const target = document.getElementById(id);
        if (!target)
            throw new Error("Элемента с заданным ID не существует!");
        const container = target.parentElement;
        if (!container)
            throw new Error("У элемента отсутствует родительский элемент!");
        const onMouseDown = (e) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
            let height;
            let width;
            if (type === 'text') {
                height = target.offsetHeight - 4;
                width = target.offsetWidth - 4;
            }
            else {
                height = target.offsetHeight - 12;
                width = target.offsetWidth - 12;
            }
            (0, stateManagerFunctions_1.editBlockSizeHandler)(slideIndex, blockIndex, width, height);
        };
        const onMouseUp = (e) => {
            isClicked.current = false;
            coords.current.lastX = target.offsetLeft;
            coords.current.lastY = target.offsetTop;
            (0, stateManagerFunctions_1.editBlockPositionHandler)(slideIndex, blockIndex, coords.current.lastX, coords.current.lastY);
        };
        const onMouseMove = (e) => {
            if (!isClicked.current)
                return;
            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;
            target.style.top = `${nextY}px`;
            target.style.left = `${nextX}px`;
        };
        target.addEventListener('mousedown', onMouseDown);
        target.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseUp);
        return () => {
            target.removeEventListener('mousedown', onMouseDown);
            target.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseUp);
        };
    }, [id, slideIndex, blockIndex, type]);
}
exports.useDragAndDrop = useDragAndDrop;
exports.default = useDragAndDrop;
