'use strict';
var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chalk = require('chalk'),
    yosay = require('yosay');

module.exports = generators.NamedBase.extend({
    end: function(){
      this.log(chalk.green.bold('Installation successful!'));
      this.log(chalk.yellow.bold('Remember add dependencies to parent or current module, directive!'));
      //
    },
    prompting: function(){
            var done = this.async();
            this.prompt([
            {
                type: 'checkbox',
                name: 'jslibs',
                message: 'Which templates would you want to include for your component?',
                choices: [
                    {
                        name: 'module.js',
                        value: 'module.js',
                        checked: true
                    },
                    {
                        name: 'controller.js',
                        value: 'controller.js',
                        checked: true
                    },
                    {
                        name: 'service.js',
                        value: 'service.js',
                        checked: true
                    },
                    {
                        name: 'directive.js',
                        value: 'directive.js',
                        checked: true
                    },
                    {
                        name: 'test.js',
                        value: 'test.js',
                        checked: true
                    },
                    {
                        name: 'directive.html',
                        value: 'directive.html',
                        checked: true
                    }
                ]
            }], function(answers){
              //  this.log(answers);
               //this.ngappname = answers.ngappname;
               this.includeModule = _.includes(answers.jslibs, 'module.js');
               this.includeController = _.includes(answers.jslibs, 'controller.js');
               this.includeService = _.includes(answers.jslibs, 'service.js');
               this.includeDirective = _.includes(answers.jslibs, 'directive.js');
               this.includeTest = _.includes(answers.jslibs, 'test.js');
               this.includeView = _.includes(answers.jslibs, 'directive.html');
               done();
            }.bind(this));


    },

    constructor: function () {
        generators.NamedBase.apply(this, arguments);
        // console.log(arguments);
    },

    writing: function(){
        // console.log(this. _args[1]);// get the second parameter as the path
        if (this._args.length>1){
          var parent = '';
          var strArray = this.args[1].split('/');
          for (var i=0 ; i<strArray.length ; i++){
            parent += getFileNameFragment(strArray[i]) + '/'
          }
        } else {
          var parent = '';
        }

        var fileNameFragment = getFileNameFragment(this.name);

        if (this.includeModule){
          this.fs.copyTpl(
              this.templatePath('_module.js'),
              this.destinationPath('src/components/'+ parent + fileNameFragment + '/' + fileNameFragment + '-module.js'),
              {
                  componentName: this.name,
              }
          );
        };


        if (this.includeController){
          this.fs.copyTpl(
              this.templatePath('_controller.js'),
              this.destinationPath('src/components/' + parent + fileNameFragment + '/' + fileNameFragment + '-controller.js'),
              {
                  componentName: this.name,
              }
          );
        };

        if (this.includeService){
          this.fs.copyTpl(
              this.templatePath('_service.js'),
              this.destinationPath('src/components/' + parent + fileNameFragment + '/' + fileNameFragment + '-service.js'),
              {
                  componentName: this.name,
              }
          );
        };


        if (this.includeDirective){
          this.fs.copyTpl(
              this.templatePath('_directive.js'),
              this.destinationPath('src/components/' + parent + fileNameFragment + '/' + fileNameFragment + '-directive.js'),
              {
                  componentName: this.name,
                  directiveUrl: 'src/components/' + parent + fileNameFragment + '/' + fileNameFragment + this.name + 'Template.html'
              }
          );
        };


        if (this.includeTest){
          this.fs.copyTpl(
              this.templatePath('_test.js'),
              this.destinationPath('src/components/' + parent + fileNameFragment + '/' + fileNameFragment + '-test.js'),
              {
                  componentName: this.name,
                  componentDashName: fileNameFragment
              }
          );
        };


        if (this.includeView) {
            this.fs.copyTpl(
                this.templatePath('_directive.html'),
                this.destinationPath('src/components/' + parent + fileNameFragment + '/' + fileNameFragment + '.html'),
                {
                    componentName: this.name
                });
        }

        function getFileNameFragment(componentName) {
            return _.kebabCase(componentName);
        }


    }


});
