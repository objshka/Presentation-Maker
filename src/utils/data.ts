// Коллекции пустые

const editor: Editor = {
  history: THistory,
  presentation: Presentation[],
}

const history: History = {
  index: 1,
  states: {
    name: "Presentation 1",
    slideList: Slides[],
    selectedSlides: Slides[]
  }
}

const presentation: Presentation = {
  name: "Presentation 1",
  slideList: Slide[],
  selectedSlides: Slide[]
}

const slide: Slide = {
  blockList: Block[],
  selectedBlockList: Block[],
  background: green,
  slideIndex: 1,
}

const green: color = {
  type: "color",
  string: "#05fc3f"
}

const picture: pictureBackground = {
  type: "picture",
  source: "images/arrow.svg"
}

const block: Block = {
  content: blockContent,
  blockIndex: 1,
  position: {
    x: 1,
    y: 1
  },
  width: 100,
  height: 100,
}

const blockContent: blockContent = {
  data: primitive,
}

const primitive: primitive = {
  type: "primitive",
  content: Rectangle,
  background: "grey",
  border: "none"
}

const Triangle: Triangle = {
  type: Triangle,
}

const Rectangle: Rectangle = {
  type: "Rectangle",
}

const Circle: Circle = {
  type: "Circle",
}


//Полные данные
const slides = [slide, slide, slide, slide]
const presentations = [presentation, presentation, presentation]

const editor: Editor = {
  history: THistory,
  presentation: presentation,
}

const History: THistory = {
  index: 1,
  states: {
    name: "Presentation 1",
    slideList: slides,
    selectedSlides: slides
  }
}

const presentation: Presentation = {
  name: "Presentation 1",
  slideList: slides,
  selectedSlides: slides
}

const slide: Slide = {
  blockList: slides,
  selectedBlockList: slides,
  background: green,
  slideIndex: 1,
}

const green: color = {
  type: "color",
  string: "#05fc3f"
}

const picture: pictureBackground = {
  type: "picture",
  source: "images/arrow.svg"
}

const Block: Block = {
  content: blockContent,
  blockIndex: 1,
  position: {
    x: 1,
    y: 1
  },
  width: 100,
  height: 100,
}

const blockContent: blockContent = {
  data: primitive,
}

const primitive: primitive = {
  type: "primitive",
  content: Rectangle,
  background: "grey",
  border: "none"
}

const Triangle: Triangle = {
  type: Triangle,
}

const Rectangle: Rectangle = {
  type: "Rectangle",
}

const Circle: Circle = {
  type: "Circle",
}
