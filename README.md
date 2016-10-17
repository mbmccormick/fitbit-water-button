# fitbit-water-button

This project is an [AWS Lambda](https://aws.amazon.com/lambda/) function which handles [AWS IoT Button](https://aws.amazon.com/iot/button/) events which logs water consumption to Fitbit. A single press of the button will log an 8 oz. drink, a double press logs a 16 oz. drink, and a long press logs a 24 oz. drink.

## Setup

1. Following the steps in the [Configuration Wizard](https://console.aws.amazon.com/lambda/home#/create/configure-triggers) to configur your AWS IoT Button, add it to your AWS account, and connect it to the internet.
2. Download the pre-packaged [fitbit-water-button.zip](https://github.com/mbmccormick/fitbit-water-button/raw/master/fitbit-water-button.zip) Lambda function and upload it to AWS.
3. Create a new [Fitbit application](https://dev.fitbit.com/apps/new) and select Client as the application type. Add `http://localhost/` as a Callback URL.
4. Obtain your personal access token by visiting `https://www.fitbit.com/oauth2/authorize?client_id=YOUR_FITBIT_CLIENT_ID&redirect_uri=http%3A//localhost/&scope=nutrition%20profile&response_type=token&expires_in=31536000` in your web browser. Be sure to replace `YOUR_FITBIT_CLIENT_ID` with your application's Client ID.
5. After authorizing your Fitbit application, you will be redirected to `http://localhost/#access_token=YOUR_FITBIT_ACCESS_TOKEN&user_id=YOUR_FITBIT_USER_ID&scope=nutrition+profile&token_type=Bearer&expires_in=31536000`. Copy the value for `YOUR_FITBIT_ACCESS_TOKEN`.
6. Replace `YOUR_FITBIT_ACCESS_TOKEN` in the Lambda function editor on the AWS Management Console with the value you copied in the last step.

## License

This software, and its dependencies, are distributed free of charge and licensed under the GNU General Public License v2. For more information about this license and the terms of use of this software, please review the LICENSE.txt file.
