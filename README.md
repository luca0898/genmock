genmock
=======

Simple application made in nodejs for mass generation of data.

## Goal

His intention is to facilitate when creating a large batch of random data following a defined model, ensuring that each of the results is different from the others.

## Usage

 ### Usage as API
 
 Just import the module and execute it as a function.
 
 The parameters **must** contain a ``model`` entry with the model to generate the data.
 
 Different from the CLI usage, the type can be specified directly by importing the ``dataType`` file, or by providing a String with the data type name
 
 ```javascript
const genmock = require('genmock');
const { CURRENCY } = require('genmock/dataType');

const model = {
  id: {
    type: "GUID"
  },
  price: {
    type: CURRENCY,
    prefix: "",
    min: 750,
    max: 1500
  }
};

console.log(genmock({ model, number: 3 }));
```

 #### Additional Parameters
 
 | Name       | Type       | Description                                 |
 |------------|------------|---------------------------------------------|
 | ``number`` | ``number`` | Specify the amount of data to be generated. |


 
 ### Usage in CLI
 
 #### Input
 The CLI environment needs a JSON input to be used as model to the generated dataset. This input can be done both via file or stdin.
 The entity of the items must follow the key pattern and parameters.

 Supported Data Types:
 | DataType | Paramters                               |
 |----------|-----------------------------------------|
 | bool     | probability (be true in percent)        |
 | currency | prefix, min, max                        |
 | date     | min, max, format, options               |
 | enum     | items: *[], count: number (default = 1) |
 | guid     | N/A                                     |
 | longtext | count                                   |
 | mail     | count, separator and sulfix             |
 | name     | count                                   |
 | phone    | pattern                                 |

 E.g.
```json
{
  "active": {
    "type": "bool",
    "probability": 70
  },
  "wallet": {
    "type": "currency",
    "prefix": "$",
    "min": 7500,
    "max": 15000
  },
  "createdAt": {
    "type": "date",
    "min": "2000-01-01T00:00:00.000Z",
    "max": "2019-12-31T23:59:59.000Z",
    "format": "dd/MM/yyyy HH:mm"
  },
  "status": {
    "type": "enum",
    "count": 1,
    "items": ["online", "offline"]
  },
  "id": {
    "type": "GUID"
  },
  "bio": {
    "type": "longtext",
    "count": 5
  },
  "mail": {
    "type": "mail",
    "count": 2,
    "separator": ["_", ".", ""],
    "sulfix": ".org.com"
  },
  "name": {
    "type": "name",
    "count": 2
  },
  "phone": {
    "type": "phone",
    "pattern": "+99 (99) 9 9999-9999"
  }
}
```

 The input file is specified via ``-m`` parameter. E.g. ``npx genmock -m model.json``.
 If no file is specified, then GenMock will expect the file contents to be inputted via stdin.

 #### Output
 The output data will be written into stdout if no file is specified. To specify a file its used the ``-o`` param. E.g. ``npx genmock -o output.json``.
 
 #### Additional CLI parameters
 ``-n, -number``: Specify the amount of data to be generated. E.g.: ``npx genmock -n 10``

## Follow the Project and Contribute
If you have any cool ideas for the project, I did not fail to open an issue to discuss.

