
export type InputType = "Text" | "TextArea" | "Radio" | "Date";

export type FormElement = BasicElement | RadioElement

export interface BasicElement {
    slug: string,
    name: string,
    type: InputType
    required: boolean
}

export interface RadioElement extends BasicElement {
    options?: Array<string>
}

export type EmailDefinition = {
    // Slug of element to get subject from
    subject: string,
    // Record of field name to put in email to element slug to load answer from
    body: Record<string, string>
}

type Logo = {
    path: string,
    alignment: "left" | "center" | "right"
}

export interface JsonForm {
    slug: string,
    name: string,
    logo?: Logo
    elements: Array<FormElement>,
    email: EmailDefinition
}
