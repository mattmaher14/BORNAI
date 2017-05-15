        var Alexa = require('alexa-sdk');

        exports.handler = function(event, context, callback) {
            var alexa = Alexa.handler(event, context);
            
             alexa.dynamoDBTableName = 'YourTableName'; // creates new table for userid:session.attributes

            alexa.registerHandlers(handlers);
            alexa.execute();
             
        };
      
        var handlers = {
            'LaunchRequest': function () {
                this.emit('MyIntent');
            },

            'MyIntent': function () {
                this.emit(':ask', 'Hello, and welcome to Born. We are an artificial intelligence company, here to teach you about AI. But like most AI agents, I dont know everything. So I brought a few friends. <break time="0.1s"/> <audio src = "https://s3.amazonaws.com/soundeffecttesting/sfx/Lakshmi_mixdown1.mp3" /> <audio src = "https://s3.amazonaws.com/soundeffecttesting/sfx/Henry_mixdown1.mp3" /> <audio src="https://s3.amazonaws.com/soundeffecttesting/sfx/Peter_mixdown.mp3" /> <break time="0.2s"/> <say-as interpret-as="interjection">Booya!</say-as>  Okay, so ask us anything!'  );
                
            },
            
            
             'WhatsUpIntent': function () {
                this.emit(':ask', 'What is Up?');
             
             },

               
            
             'MaxIntent': function () {
                this.emit(':ask', 'Max is the Chief Creative and XD of Born. <break time="0.2s"/> More importantly, he is a musician, and used to be in a killer rock band. dont believe me? Here is a clip of Max flexing his golden pipes <audio src = "https://s3.amazonaws.com/soundeffecttesting/sfx/Max_mixdown.mp3" /> <say-as interpret-as="interjection"> Encore! </say-as> Okay, what else do you want to know?');
             
             },
             
                'WhatIsBornIntent': function () {
                this.emit(':ask', 'Born is a creative agency specializing in A.I. <break time="0.5s"/> Basically, we help brands talk to people, using intelligent agents. <break time="0.1s"/> Kind of like we are doing right now. <break time="0.3s"/> BORN is concerned with bringing together talent that excels at the art and science of crafting conversational characters and interfaces, capable of understanding and responding to natural language. <break time="0.2s"/> Then we train them to engage people and build meaningful 1:1 relationships. <break time="0.2s"/> We do a ton more, but I do not want to bore you. I will leave more info on the Alexa response card when we finish up here. For now, lets get you well versed on AI. What do you want to know?');
             
             },
             
                 'WhoWorksIntent': function () {
                this.emit(':ask', 'Born has an ecclectic range of creative talent, but I know you are referring to the top brass. Born was co-founded by Michael Nicholas, Max Fresen, and Stella Voutsina. Say any of their names to find out who they are, and what they do.');
             
             },
             
                'ClientsIntent': function () {
                this.emit(':ask', 'We are new, and according to our lawyer, we cannot legally tell you all the clients we are currently working with. <break time="0.7s"/>  Actually, screw it, what is the worst that can happen. We are working with <say-as interpret-as="expletive">Amazon, </say-as> <say-as interpret-as="expletive">Unilever, </say-as> <say-as interpret-as="expletive">Kia, </say-as> <say-as interpret-as="expletive"> Under Armour, </say-as> and the biggest of them all, mother <say-as interpret-as="expletive"> Fucking Google </say-as> <break time="0.7s"/>   What else do you want to know?');
             
             },
             
               'NicholasIntent': function () {
                this.emit(':ask', 'Michael Nicholas is the Chief Strategist of Born. <break time="0.2s"/> He has a passionate understanding of brands and technology. He also delivers killer zingers on stage, like this gem. <audio src = "https://s3.amazonaws.com/soundeffecttesting/sfx/Nicholas_mixdown.mp3" /> <say-as interpret-as="interjection"> Bada Bing Bada Boom! </say-as> Okay, what else do you want to know?');
             
             },

            'ArtificialIntelligenceIntent': function () {
                this.emit(':ask', 'Thats a great question. Peter, considering you have three PHDs from Cambridge, <say-as interpret-as="interjection">Giddy Up!</say-as> <break time="0.1s"/> <audio src = "https://s3.amazonaws.com/soundeffecttesting/sfx/Peter_AI_mixdown.mp3" /> <break time="0.3s"/> <say-as interpret-as="interjection">No way!</say-as> but it was not meant for me, it was meant for the user. Did you get it?' );
             
             },
             
            'MachineLearningIntent': function () {
                this.emit(':ask', 'Good question. Henry, this is your specialty. <break time="0.1s"/> Bestow us with your knowledge! <audio src = "https://s3.amazonaws.com/soundeffecttesting/sfx/Russel_ML_mixdown.mp3" />  <say-as interpret-as="interjection"> righto! </say-as> Great answer! <break time="0.4s"/>  So, what else is on your mind?' );
             
             },

                 'NaturalLanguageIntent': function () {
                this.emit(':ask', '<say-as interpret-as="interjection">  Oh boy! </say-as> <break time="0.1s"/> I definitely dont know that one. Lakshmi, I defer to you. <audio src = "https://s3.amazonaws.com/soundeffecttesting/sfx/Lakshmi_NLP_mixdown.mp3" /> <break time="0.05s"/> <say-as interpret-as="interjection"> Well Done! </say-as> You also have a lovely voice <break time="0.05s"/> Lakshmi. <break time="0.5s"/>  Okay, what else in the AI world is of interest to you?' );
             
             },
             
            'ApplesIntent': function () {
                this.emit(':ask', ' <prosody rate="slow"> How do you like those apples.</prosody> <break time="0.1s"/> <say-as interpret-as="interjection">  Kaboom! </say-as> <break time="0.2s"/> <audio src="https://s3.amazonaws.com/soundeffecttesting/sfx/ApplesBanter_mixdown.mp3" /> <break time="0.2s"/> <say-as interpret-as="interjection">Now now </say-as> <break time="0.2s"/> we are way off track. You are making our nice friend sit and listen to us fight. <break time="0.7s"/> Sorry about that. What other questions might you have?');
                
            },
            
             'MyNameIsIntent': function () {
                 var myName = this.event.request.intent.slots.firstname.value;
                 this.attributes['name'] = myName;
                this.emit(':ask', 'hello, ' + myName, 'try again'); 
            
             },   
               'SoundIntent': function () {
               var say = " news flash <audio src='https://s3.amazonaws.com/soundeffecttesting/sfx/RecordScratchReal_01.mp3' /> , i can create Alexa skills!";
this.emit(':ask',say, 'try again');
            
             
            },
            
             'AMAZON.HelpIntent': function () {
                this.emit(':ask', 'You can ask me questions about artificial intelligence, machine and deep learning, natural language processing, or any other crazy AI term you have come across.');
                
             },

                 
            
             'AMAZON.YesIntent': function () {
                this.emit(':ask', 'Great! Is there anything else you would like to know?');
                
             },
             
            'AMAZON.NoIntent': function () {
                this.emit(':ask', 'Learning AI is hard. Take baby steps. What else do you want to know?' );
                
             },
            
             'AMAZON.CancelIntent': function () {
                this.emit(':tell', 'Thanks for hanging around with the born team. We will chat soon');
                
             },

            'AMAZON.StopIntent': function () {
                this.emit(':tell', 'Thanks for hanging around with the born team. We will chat soon');
                
             },
           

         'Unhandled': function () {
        this.emit(':ask', 'Sorry, I am an AI, but I dont have ESP. What the heck did you just say?');
           
              
            },

              'AMAZON.StartOverIntent': function () {
         this.emit(':ask', 'Sorry, missed that. Lets get this AI party started. What do you want to know?');
    },
            
            
        };
        
          
        