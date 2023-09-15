type ObjectType = {
    id: number,
    width: number,
    height: number,
    startX: number,
    startY: number,
    borderStyle: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset',
    borderWidth: string,
    borderColor: string
}

type Shape = ObjectType & {
    type: 'rect' | 'triangle' | 'circle' | 'arrow' | 'line',
    endX: number,
    endY: number,
    shapeBgColor: string
}

type TextType = ObjectType & {
    ontSize: number,
    fontColor: string,
    fontFamily: string,
    bold: boolean,
    italic: boolean,
    underlined: boolean,
    fillColor: string,
    underlineColor: string
}

type Image = ObjectType & {
    alt: string,
    imageSrcType: 'imageLink' | 'imageBase64',
    imageSrc: string
}

type BGImageType = BGFillColorType

type BGFillColorType = {
    value: string,
}

type SlideType = {
    id: number,
    background: BGFillColorType | BGImageType,
    objects: Array<Image | TextType | Shape>,
}

type Presentation = {
    slides: Array<SlideType>,
    title: string
}