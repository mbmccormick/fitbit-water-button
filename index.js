var FITBIT_ACCESS_TOKEN = 'YOUR_FITBIT_ACCESS_TOKEN';

var request = require('request');
var moment = require('moment-timezone');

exports.handler = function(event, context) {

    // fetch the user's profile
    request.get({
        url: 'https://api.fitbit.com/1/user/-/profile.json',
        headers: {
            Authorization: 'Bearer ' + FITBIT_ACCESS_TOKEN
        },
        json: true
    }, function(error, response, body) {

        if (error || response.statusCode != 200) {
            context.fail('Failed to retrieve Fitbit profile.');
            return;
        } 

        var amount = 0.0;

        // extract click type for water amount
        switch (event.clickType) {
            case 'SINGLE':
                amount = 8.0;
                break;
            case 'DOUBLE':
                amount = 16.0;
                break;
            case 'LONG':
                amount = 24.0;
                break;
        }
        
        // get today's date in the user's timezone
        var date = moment.tz(body.user.timezone).format('YYYY-MM-DD');

        // prepare payload data
        var payload = {
            amount: amount,
            date: date,
            unit: 'fl oz'
        };

        // log water using payload data
        request.post({
            url: 'https://api.fitbit.com/1/user/-/foods/log/water.json',
            headers: {
                Authorization: 'Bearer ' + FITBIT_ACCESS_TOKEN
            },
            json: true,
            form: payload
        }, function(error, response, body) {
        
            if (error || response.statusCode != 201) {
                context.fail('Failed to log water to Fitbit.');
                return;
            }

            context.succeed('Created water log ' + body.waterLog.logId + ' successfully.');
            
        });

    });

};
