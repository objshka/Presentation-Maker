"use strict";
// Коллекции пустые
const editor = {
    history: THistory,
    presentation: Presentation[],
};
const history = {
    index: 1,
    states: {
        name: "Presentation 1",
        slideList: Slides[],
        selectedSlides: Slides[]
    }
};
const presentation = {
    name: "Presentation 1",
    slideList: Slide[],
    selectedSlides: Slide[]
};
const slide = {
    blockList: Block[],
    selectedBlockList: Block[],
    background: green,
    slideIndex: 1,
};
const green = {
    type: "color",
    string: "#05fc3f"
};
const picture = {
    type: "picture",
    source: "images/arrow.svg"
};
const block = {
    content: blockContent,
    blockIndex: 1,
    position: {
        x: 1,
        y: 1
    },
    width: 100,
    height: 100,
};
const blockContent = {
    data: primitive,
};
const primitive = {
    type: "primitive",
    content: Rectangle,
    background: "grey",
    border: "none"
};
const Triangle = {
    type: Triangle,
};
const Rectangle = {
    type: "Rectangle",
};
const Circle = {
    type: "Circle",
};
//Полные данные
const slides = [slide, slide, slide, slide];
const presentations = [presentation, presentation, presentation];
const editor = {
    history: THistory,
    presentation: presentation,
};
const History = {
    index: 1,
    states: {
        name: "Presentation 1",
        slideList: slides,
        selectedSlides: slides
    }
};
const presentation = {
    name: "Presentation 1",
    slideList: slides,
    selectedSlides: slides
};
const slide = {
    blockList: slides,
    selectedBlockList: slides,
    background: green,
    slideIndex: 1,
};
const green = {
    type: "color",
    string: "#05fc3f"
};
const picture = {
    type: "picture",
    source: "images/arrow.svg"
};
const Block = {
    content: blockContent,
    blockIndex: 1,
    position: {
        x: 1,
        y: 1
    },
    width: 100,
    height: 100,
};
const blockContent = {
    data: primitive,
};
const primitive = {
    type: "primitive",
    content: Rectangle,
    background: "grey",
    border: "none"
};
const Triangle = {
    type: Triangle,
};
const Rectangle = {
    type: "Rectangle",
};
const Circle = {
    type: "Circle",
};
