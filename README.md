# Yeoman-angular-generator

## Purpose
For consistancy of code style and best practice
according to https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md


##Installation
if you do not have node.js install yet, follow instruction:
https://nodejs.org/en/

If you do not have yeoman install yet  run commond:
```
npm install
```
then
```
npm install -g yo
```

##Usgae

To Create Controller, Service, Directive, ...(**use CamelCase for the component name the generator will create dash-directory for you**)


Run the commond:
```
yo pressg <newComponentName>
```
To Create a child component inside a parent component, Run the commond:

```
yo pressg <newComponentName> <parentComponentName>
```
or
inside another parent component, Run the commond:
```
yo pressg <newComponentName> <super-parentComponentName>/<parentComponentName>
```

##Contact
improvement and bug fix
peterxie125@gmail.com

##License
MIT
