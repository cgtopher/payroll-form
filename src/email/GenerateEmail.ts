import {EmailDefinition} from "../forms/JsonDefinition";

export function generateEmail(email: EmailDefinition, formValues: Record<string, any>) {
   const emailHTML = `
       <>
       <h2>${formValues[email.subject]}</h2>
       <br>
       ${Object.keys(email.body).map((item) => `
        <h4>${item}</h4>
        <br>
        <p>${formValues[email.body[item]]}</p>
        <br>
       `)}
       </>
    `

    console.log(emailHTML)
}

