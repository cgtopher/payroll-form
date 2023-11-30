import {JsonForm} from "../forms/JsonDefinition";
import {Button, Form, Typography} from "antd";
import {componentMapper} from "./ComponentMapper";
import "./Render.css"
import {useState} from "react";
import {generateEmail} from "../email/GenerateEmail";

const {Title} = Typography;


export const Render = ({ name, elements, email }: Omit<JsonForm, 'slug'>) => {
    const [form] = Form.useForm()
    const [canSubmit, setCanSubmit] = useState(false);
    const required = elements.filter((elem) => elem.required).map((elem) => elem.slug);

    const onChange = (_: any, allFields: any) => {
        if(!allFields
            .filter((field: any) => required.includes(field.name[0])) //  Required fields
            .some((field: any) => !field.value) // With null values
        ){
            setCanSubmit(true)
        }
    }

    return (
        <div className={"render"}>
            <Form form={form} layout={"vertical"} onFieldsChange={onChange}>
                <Title id={"title"}>{name}</Title>
                {elements.map((elem) => {
                    if(componentMapper[elem.type] === undefined) {
                        throw new Error("Unrecognized form field type")
                    }
                    return (
                        <Form.Item key={elem.slug} rules={[{required: elem.required, message: "This field is required"}]} name={elem.slug}>
                            {componentMapper[elem.type](elem)}
                        </Form.Item>
                    )
                })}
            </Form>
            <Button type={"primary"} onClick={() => generateEmail(email, form.getFieldsValue)} disabled={!canSubmit}>Submit</Button>
        </div>
    )
}