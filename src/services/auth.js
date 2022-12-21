async function sendEmail(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      email: auth.receipt_email,
      url: auth.charges.data[0].receipt_url,
    }),
  };
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/payments/sendEmail`, options);
  return response.json();
}

export default sendEmail;
