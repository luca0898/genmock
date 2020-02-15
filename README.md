genmock
=======

Simple application made in nodejs for mass generation of data.

## Goal

His intention is to facilitate when creating a large batch of random data following a defined model, ensuring that each of the results is different from the others.

## Usage

- First you must create a model in json (example in `model.json`). The entity of the items must follow the key pattern and parameters. Currently, only the types **GUID**, **name**, **longtext** and **currency**. However, many other types of data will be introduced to further improve the experience, such as _dates_, _numbers_, _location_, _number of phones_, _list of other children_, etc..

- Then, run the following command:

```
    yarn gen {MODEL_PATH} {NUMBER_OF_ITEMS_TO_BE_GENERATED}
```
- After that you will have the requested amount of data based on the template provided. Since none of the items will be the same.

## Follow the Project and Contribute
If you have any cool ideas for the project, I did not fail to open an issue to discuss.

