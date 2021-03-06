const productList = require("./product-list");

const data = {
    "title": "My Email HTML Products",
    "products": [
        {
            "name": "Responsive Email Template",
            "price": 500
        },
        {
            "name": "Email Template Builder",
            "price": 2000
        },
        {
            "name": "HTML Generator",
            "price": 5000
        },
        {
            "name": "Drop Calc Generator",
            "price": 10000
        }
    ]
};

function renderTemplate(data) {
    return `
    <html>
    <head>
        <style>
            .even {
                background-color: #abcdef;
            }
    
            .odd {
                background-color: #fedcba;
            }
    
            .price {
                float: right;
            }
        </style>
    </head>
    <body>
        <h1>${data.title}</h1>
    
        <div>
            ${productList(data.products)}
        </div>
    </body>
    </html>
    `;
}

console.log(renderTemplate(data));
