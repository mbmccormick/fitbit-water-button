# fitbit-water-button

This project is an [AWS Lambda](https://aws.amazon.com/lambda/) function which handles [AWS IoT Button](https://aws.amazon.com/iot/button/) events which logs water consumption to Fitbit. A single press of the button will log an 8 oz. drink, a double press logs a 16 oz. drink, and a long press logs a 24 oz. drink.

## Setup

1. Configure your AWS IoT Button by following the steps in the [Configuration Wizard](https://console.aws.amazon.com/lambda/home#/create/configure-triggers).
2. Enter the details for your Button on the AWS Management Console and connect your Button to the internet.
3. Download the pre-packaged [fitbit-water-button.zip](https://github.com/mbmccormick/fitbit-water-button/raw/master/fitbit-water-button.zip) Lambda function and upload it to AWS.
4. Create a new [Fitbit application](https://dev.fitbit.com/apps/new) and select Personal as the application type.
5. Obtain your personal access token and replace `YOUR_FITBIT_ACCESS_TOKEN` in the `index.js` code with that value using the editor on the AWS website.

## License

This software, and its dependencies, are distributed free of charge and licensed under the GNU General Public License v2. For more information about this license and the terms of use of this software, please review the LICENSE.txt file.
