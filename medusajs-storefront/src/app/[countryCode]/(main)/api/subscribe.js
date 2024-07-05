const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { email, name } = JSON.parse(event.body);

  const apiKey = process.env.EMAIL_TOKEN;
  const groupId = 'e0X23G';

  try {
    const response = await fetch(`https://api.sender.net/v2/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        email: email,
        name: name,
        groups: [groupId]
      })
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Successfully subscribed!' })
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: 'Error subscribing. Please try again.' })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error subscribing. Please try again.' })
    };
  }
};
