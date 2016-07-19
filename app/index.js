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

    constructor: function () {
        generators.NamedBase.apply(this, arguments);
        // console.log(arguments);

        this.option('view', {
            desc: 'Determines if view is created along with controller',
            type: Boolean,
            default: false
        });
    },

    writing: function(){
        // console.log(this. _args[1]);// get the second parameter as the path
        if (this._args.length>1){
          var parent = '';
          var strArray = this.args[1].split('/');
          for (var i=0 ; i<this._args.length ; i++){
            parent += getFileNameFragment(strArray[i]) + '/'
          }
        } else {
          var parent = '';
        }

        var fileNameFragment = getFileNameFragment(this.name);

        this.fs.copyTpl(
            this.templatePath('_module.js'),
            this.destinationPath('src/components/'+ parent + fileNameFragment + '/' + fileNameFragment + '-module.js'),
            {
                componentName: this.name,
            }
        );

        this.fs.copyTpl(
            this.templatePath('_controller.js'),
            this.destinationPath('src/components/' + parent + fileNameFragment + '/' + fileNameFragment + '-controller.js'),
            {
                componentName: this.name,
            }
        );

        this.fs.copyTpl(
            this.templatePath('_service.js'),
            this.destinationPath('src/components/' + parent + fileNameFragment + '/' + fileNameFragment + '-service.js'),
            {
                componentName: this.name,
            }
        );

        this.fs.copyTpl(
            this.templatePath('_directive.js'),
            this.destinationPath('src/components/' + parent + fileNameFragment + '/' + fileNameFragment + '-directive.js'),
            {
                componentName: this.name,
            }
        );

        this.fs.copyTpl(
            this.templatePath('_test.js'),
            this.destinationPath('src/components/' + parent + fileNameFragment + '/' + fileNameFragment + '-test.js'),
            {
                componentName: this.name,
                componentDashName: fileNameFragment
            }
        );

        if (this.options.view) {
            this.fs.copyTpl(
                this.templatePath('_index.html'),
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
