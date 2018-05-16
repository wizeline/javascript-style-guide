# Wizeline Javascript Style Guide
Wizeline's ESLint rules for js environments

## Installation
First, install ESLint as a dev dependency

``` npm install --save-dev eslint ```

Then, install Wizeline's lintern configs

``` npm install --save-dev wizeline/eslint-config-wizeline ```

Finally, add the required peer dependencies. You will be warned after running the above command.

## Usage
These configs are divided by environments. Use the one you need for your project.

For example, if you're working with a browser-related stack, you will need to add the following to your project's `.eslintrc`

```json
{
  "extends": "eslint-config-wizeline/browser"
}

```

If you're working with a server-related stack, you will need to add the following to your project's `.eslintrc`

```json
{
  "extends": "eslint-config-wizeline/server"
}
```
