"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savePresentationAsPDF = void 0;
const jspdf_1 = __importDefault(require("jspdf"));
const exportWidth = 1458;
const exportHeight = 889;
function setElementToPagePDF(block, doc) {
    if (block.content.data.type === "picture") {
        let imgData2 = block.content.data.url;
        doc.addImage(imgData2, "jpg", +block.position.x, +block.position.y, +block.width, +block.height);
    }
    else if (block.content.data.type === "text") {
        let CanEl = document.createElement("canvas");
        CanEl.id = "picID";
        let ctx = CanEl.getContext("2d");
        let startPosition = 0;
        let sLine = "";
        let lineNumber = 0;
        CanEl.height = parseInt(String(block.content.data.fontSize)) * 0.9;
        while (startPosition <= block.content.data.symbols.length) {
            if (block.content.data.symbols[startPosition] === '\n' ||
                startPosition === block.content.data.symbols.length) {
                CanEl.width = sLine.length * parseInt(String(block.content.data.fontSize)) * 0.6;
                if (ctx != null) {
                    ctx.fillStyle = block.content.data.fontColor;
                    let styleT = '';
                    ctx.font = styleT + String(block.content.data.fontSize) + "px " + block.content.data.fontFamily;
                    ctx.fillText(sLine, 0, parseInt(String(block.content.data.fontSize)) * 0.75);
                }
                let imgData2 = CanEl.toDataURL("image/png");
                doc.addImage(imgData2, "PNG", +block.position.x + parseInt(String(block.content.data.fontSize)) * 0.05, +block.position.y
                    + parseInt(String(block.content.data.fontSize)) * lineNumber + parseInt(String(block.content.data.fontSize))
                    * 0.15 * (lineNumber + 1), +CanEl.width, +CanEl.height);
                lineNumber += 1;
                sLine = "";
            }
            else
                sLine += block.content.data.symbols[startPosition];
            startPosition += 1;
        }
    }
    return doc;
}
function setPagePDF(slide, doc) {
    if (slide.background.type === "picture") {
        let imgData2 = slide.background.code;
        doc.addImage(imgData2, "PNG", +0, +0, +exportWidth, +exportHeight);
    }
    if (slide.background.type === "color") {
        doc.setFillColor(slide.background.code);
        doc.rect(0, 0, exportWidth, exportHeight, "F");
    }
    for (let i = 0; i < slide.blockList.length; i++) {
        doc = setElementToPagePDF(slide.blockList[i], doc);
    }
    return doc;
}
function setPDF(presentation, doc) {
    for (let i = 0; i < presentation.slideList.length; i++) {
        doc = setPagePDF(presentation.slideList[i], doc);
        if (i + 1 < presentation.slideList.length) {
            doc.addPage([exportWidth, exportHeight], "landscape");
        }
    }
}
function saveDocPDF(presentation, Path, doc) {
    return __awaiter(this, void 0, void 0, function* () {
        yield setPDF(presentation, doc);
        doc.save(presentation.name + ".pdf");
    });
}
function savePresentationAsPDF(prog) {
    const Path = "";
    let doc = new jspdf_1.default({
        orientation: "landscape",
        unit: "px",
        format: [exportWidth, exportHeight]
    });
    saveDocPDF(prog, Path, doc);
}
exports.savePresentationAsPDF = savePresentationAsPDF;
