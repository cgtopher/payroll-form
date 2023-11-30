import {PayrollForm} from "./PayrollForm";
import {FormElement, JsonForm, RadioElement} from "./JsonDefinition";
import {InputType} from "zlib";

const availableForms = [
    PayrollForm
] as Array<any>

function mapForm(form: any, isDefault: boolean = false) {
    return {
        slug: isDefault ? "/" : form.slug,
        name: form.name,
        logo: form.logo ?? undefined,
        elements: form.elements.map((elem: FormElement) => ({
            slug: elem.slug,
            name: elem.name,
            type: elem.type as InputType,
            required: elem.required,
            ...(mapElementSpecificProps(elem))
        })),
        email: {
            subject: form.email.subject,
            body: form.email.body
        }
    }
}

function mapElementSpecificProps(elem: FormElement) {
    if(elem.type === "Radio") {
        return {options: (elem as RadioElement).options}
    }

    return {}
}

export const Forms: Array<JsonForm> = availableForms.map((form) => mapForm(form))
export const DEFAULT_FORM = mapForm(PayrollForm)