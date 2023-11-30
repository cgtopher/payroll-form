export const PayrollForm = {
    name: "Payroll Enquiry",
    slug: "payroll",
    elements: [
        {
            slug: "related",
            name: "What does your enquiry relate to?",
            type: "Radio",
            required: true,
            options: ["Incorrect Pay", "Missing Expense", "Change of Bank Details", "Change of Address", "Other"]
        },
        {
            slug: "date",
            name: "Date of payslip being queried (if applicable)",
            type: "Date",
            required: false
        },
        {
            slug: "query",
            name: "Query",
            type: "TextArea",
            required: true
        }
    ],
    email: {
        subject: "related",
        body: {
            "Date of payslip": "date",
            "Query": "query"
        }
    }
};