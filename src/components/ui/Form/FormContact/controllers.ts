type SubmitProps = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};
export const submit = async (data: SubmitProps) => {
  const dataToSendEmail = {
    spreadsheetId: process.env.NEXT_SPREADSHEET_ID,
    client_email: process.env.NEXT_CLIENT_EMAIL,
    private_key: process.env.NEXT_PRIVATE_KEY,
    range: 'recibidos',
    data: [[data.name, data.email, data.subject, data.message]],
  };
  try {
    const res = await fetch(`${process.env.NEXT_URL_PAGE}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSendEmail),
    });
    const result = await res.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
