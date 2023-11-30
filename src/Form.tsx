import {JsonForm} from "./forms/JsonDefinition";
import {Render} from "./rendering/Render";
import "./Header.css"

export const Form = ({jsonDefinition} : {jsonDefinition: JsonForm}) => {
    const logo = jsonDefinition.logo ?? {path: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png", alignment: "left"}

    return (
        <div>
            <header className={"header"}>
                <img src={logo.path} alt={"logo"} height={100} width={100}/>
            </header>
            <Render
                name={jsonDefinition.name}
                elements={jsonDefinition.elements}
                email={jsonDefinition.email}
            />
        </div>
    )
}