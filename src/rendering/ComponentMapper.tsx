import {BasicElement, FormElement, InputType, RadioElement} from "../forms/JsonDefinition";
import React from "react";
import {DatePicker, Input, Radio} from "antd";

export const componentMapper: Record<InputType, (element: FormElement) => JSX.Element> = {
    "Text": (element: BasicElement) => <Input.TextArea key={element.slug}/>,
    "TextArea": (element: BasicElement) => <Input.TextArea rows={6} placeholder={element.name} key={element.slug}/>,
    "Radio": (element: RadioElement)  => (<Radio.Group options={element.options}/> ),
    "Date": (element: BasicElement) => (<DatePicker/>),
}
