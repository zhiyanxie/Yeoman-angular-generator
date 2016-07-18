'use strict';
var generators = require('yeoman-generator'),
    _ = require('lodash');

module.exports = generators.NamedBase.extend({
    constructor: function () {
        generators.NamedBase.apply(this, arguments);

        this.option('view', {
            desc: 'Determines if view is created along with controller',
            type: Boolean,
            default: false
        });
    },

    writing: function(){
        var fileNameFragment = getFileNameFragment(this.name);

        this.fs.copyTpl(
            this.templatePath('_module.js'),
            this.destinationPath('src/components/' + fileNameFragment + '/' + fileNameFragment + '-module.js'),
            {
                componentName: this.name,
            }
        );

        this.fs.copyTpl(
            this.templatePath('_controller.js'),
            this.destinationPath('src/components/' + fileNameFragment + '/' + fileNameFragment + '-controller.js'),
            {
                componentName: this.name,
            }
        );

        this.fs.copyTpl(
            this.templatePath('_service.js'),
            this.destinationPath('src/components/' + fileNameFragment + '/' + fileNameFragment + '-service.js'),
            {
                componentName: this.name,
            }
        );

        this.fs.copyTpl(
            this.templatePath('_directive.js'),
            this.destinationPath('src/components/' + fileNameFragment + '/' + fileNameFragment + '-directive.js'),
            {
                componentName: this.name,
            }
        );
        if (this.options.view) {
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('src/components/' + fileNameFragment + '/' + fileNameFragment + '.html'),
                {
                    componentName: this.name
                });
        }

        function getFileNameFragment(componentName) {
            return _.kebabCase(componentName);
        }
    }
});
