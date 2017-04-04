# Wizeline Javascript Style Guide
Wizeline's ESLint rules for js environments

## Installation
Install Wizeline's lintern configs (ESLint is already included by default)

``` npm install --save-dev wizeline/eslint-config-wizeline ```

## Usage
These configs are divided by environments. Use the one you need for your project.

For example, if you're working with a browser-related stack, you will need to add the following to your project's `.eslintrc`

```json
{
  "extends": "eslint-config-wizeline/browser"
}
```
