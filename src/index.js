'use strict';

const Alexa = require('alexa-sdk');
const APP_ID = 'amzn1.ask.skill.50d0857c-7154-4a23-a932-5fd24632bf25';
const info = require('./info');
const messages = require('./messages');

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
  'LaunchRequest': function () {
    const speechOutput = messages.WELCOME_MESSAGE;
    const repromptSpeech = messages.WELCOME_REPROMPT;
    this.emit(':ask', speechOutput, repromptSpeech);
  },
  'TypeInfoIntent': function () {
    const typeSlot = this.event.request.intent.slots.type;
    const output = {
      strong: true,
      weak: true,
      resistant: true,
      vulnerable: true
    };
    const result = processForTypeAndOutput(typeSlot, output);

    if (result.typeFound) {
      this.emit(':tellWithCard', result.speechOutput, result.cardTitle, result.cardOutput);
    } else {
      this.emit(':ask', result.speechOutput, result.repromptSpeech);
    }
  },
  'TypeStrengthIntent': function () {
    const typeSlot = this.event.request.intent.slots.type;
    const output = {
      strong: true
    };
    const result = processForTypeAndOutput(typeSlot, output);

    if (result.typeFound) {
      this.emit(':tellWithCard', result.speechOutput, result.cardTitle, result.cardOutput);
    } else {
      this.emit(':ask', result.speechOutput, result.repromptSpeech);
    }
  },
  'TypeWeakIntent': function () {
    const typeSlot = this.event.request.intent.slots.type;
    const output = {
      weak: true
    };
    const result = processForTypeAndOutput(typeSlot, output);

    if (result.typeFound) {
      this.emit(':tellWithCard', result.speechOutput, result.cardTitle, result.cardOutput);
    } else {
      this.emit(':ask', result.speechOutput, result.repromptSpeech);
    }
  },
  'TypeResistantIntent': function () {
    const typeSlot = this.event.request.intent.slots.type;
    const output = {
      resistant: true
    };
    const result = processForTypeAndOutput(typeSlot, output);

    if (result.typeFound) {
      this.emit(':tellWithCard', result.speechOutput, result.cardTitle, result.cardOutput);
    } else {
      this.emit(':ask', result.speechOutput, result.repromptSpeech);
    }
  },
  'TypeVulnerableIntent': function () {
    const typeSlot = this.event.request.intent.slots.type;
    const output = {
      vulnerable: true
    };
    const result = processForTypeAndOutput(typeSlot, output);

    if (result.typeFound) {
      this.emit(':tellWithCard', result.speechOutput, result.cardTitle, result.cardOutput);
    } else {
      this.emit(':ask', result.speechOutput, result.repromptSpeech);
    }
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = messages.HELP_MESSAGE;
    const repromptSpeech = messages.HELP_REPROMPT;
    this.emit(':ask', speechOutput, repromptSpeech);
  },
  'AMAZON.RepeatIntent': function () {
    this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
  },
  'AMAZON.StopIntent': function () {
    this.emit('SessionEndedRequest');
  },
  'AMAZON.CancelIntent': function () {
    this.emit('SessionEndedRequest');
  },
  'SessionEndedRequest':function () {
    this.emit(':tell', messages.STOP_MESSAGE);
  },
  'Unhandled': function () {
    const speechOutput = messages.HELP_MESSAGE;
    const repromptSpeech = messages.HELP_REPROMPT;
    this.emit(':ask', speechOutput, repromptSpeech);
  }
};

function processForTypeAndOutput(typeSlot, output) {
  let typeName;
  let type;
  if (typeSlot && typeSlot.value) {
    typeName = typeSlot.value.toLowerCase();
    type = info.types[typeName];
  }

  if (type) {
    const cardTitle = type.name;
    const speechOutput = buildReportForType(type, output);
    return {
      typeFound: true,
      cardTitle: cardTitle,
      speechOutput: speechOutput,
      cardOutput: speechOutput
    };
  } else {
    return {
      typeFound: false,
      speechOutput: messages.TYPE_NOT_FOUND_MESSAGE,
      repromptSpeech: messages.TYPE_NOT_FOUND_REPROMPT
    };
  }
}

function buildReportForType(type, output) {
  const {name, strong, weak, resistant, vulnerable} = type;
  let strongMessage = '';
  let weakMessage = '';
  let resistantMessage = '';
  let vulnerableMessage = '';

  if(!output || output.strong)
    strongMessage = buildMessageForAttribute(strong, 'strong', name);

  if(!output || output.weak)
    weakMessage = buildMessageForAttribute(weak, 'weak', name);

  if(!output || output.resistant)
    resistantMessage = buildMessageForAttribute(resistant, 'resistant', name);

  if(!output  || output.vulnerable)
    vulnerableMessage = buildMessageForAttribute(vulnerable, 'vulnerable', name);

  return `${strongMessage} ${weakMessage} ${resistantMessage} ${vulnerableMessage}`;
}

function buildMessageForAttribute(itemList, attribute, typeName){
  if(itemList.length ===0){
    return `${typeName} is not ${attribute} against any types.`;
  } else {
    return `${typeName} is ${attribute} against ${itemList.join(", ")}.`;
  }
}