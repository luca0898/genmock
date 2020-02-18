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
 The entity of the items must follow the key pattern and parameters. Currently, only the types **GUID**, **name**, **longtext** and **currency**. However, many other types of data will be introduced to further improve the experience, such as _numbers_, _location_, _list of other children_, etc..

 Supported Data Types:
 | DataType | Paramters                 |
 |----------|---------------------------|
 | currency | prefix, min, max          |
 | date     | min, max, format, options |
 | guid     | N/A                       |
 | longtext | count                     |
 | name     | count                     |
 | phone    | pattern                   |

 E.g.
```json
{
  "id": {
    "type": "GUID"
  },
  "price": {
    "type": "currency",
    "prefix": "R$",
    "min": 750,
    "max": 1500
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

