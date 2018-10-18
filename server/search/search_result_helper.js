const HTMLParser = require('node-html-parser');

const RelationHelper = require('./relation_helper');

const clone = require('clone');

(function() {

  let searchResult = {
    'word': {
      'weight' : 0,
      'id' : 0 ,
      'type' : 0,
      'text' : ''
    },
    'formatedWord': '',
    'definitions': [],
    'relationsOut' : [],
    'relationsIn' : [],
  };

  module.exports.extractSearchResult = function(tagCode) {
    let root = HTMLParser.parse(tagCode);

    let wordTag = root.querySelector('mot');

    if(wordTag != null) {
      searchResult.word.weight = wordTag.rawAttributes['poids'];
      searchResult.word.id = wordTag.rawAttributes['id'];
      searchResult.word.type = wordTag.rawAttributes['type'];
      searchResult.text = wordTag.childNodes[0].rawText;
    }

    let formatedWordTag = root.querySelector('mot-formate');

    if(formatedWordTag != null)
      searchResult.formatedWord = formatedWordTag.text;

    let definitionTag = root.querySelector('def');

    if(definitionTag != null)
    {
      let definitions = definitionTag.text.toString().split('\n');

      for (let index = 1; index < definitions.length; index++)
        searchResult.definitions.push(clone(definitions[index]));
    }

    let tagRelationOut = root.querySelector('sortant');

    if(tagRelationOut != null)
    {
      let relationOutEntries = tagRelationOut.toString().split('\n');

      for (let index = 0; index < relationOutEntries.length; index++) {
        searchResult.relationsOut.push(clone(RelationHelper.extractRelation(relationOutEntries[index])));
      }
    }

    let tagRelationIn = root.querySelector('entrant');

    if(tagRelationIn != null) {
      let relationInEntries = tagRelationIn.toString().split('\n');

      for (let index = 0; index < relationInEntries.length; index++)
        searchResult.relationsIn.push(clone(RelationHelper.extractRelation(relationInEntries[index])));
    }

    return searchResult;
  }

}());
