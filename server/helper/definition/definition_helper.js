const clone = require('clone');

(function() {

  module.exports.extractDefinition = function(definitionTag) {
    let result = [];

    if (!definitionTag) return result;

    let splitedDefinitions = definitionTag.toString().split(/(\d+\.)/);

    for(let definitionIndex = 2; definitionIndex < splitedDefinitions.length; definitionIndex += 2)
    {
      let definition = {
        'text': '',
        'examples' : []
      };

      let splitedDefinitionExamples = splitedDefinitions[definitionIndex].toString().split('\n');

      definition.text = splitedDefinitionExamples[0].trim();

      for(let exampleIndex = 1; exampleIndex < splitedDefinitionExamples.length; exampleIndex++) {
        let example = splitedDefinitionExamples[exampleIndex].trim();

        if(example.length > 0)
          definition.examples.push(example);
      }

      result.push(clone(definition));
    }

    return clone(result);
  }

}());
