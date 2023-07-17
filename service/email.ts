const SUCCESS_MESSAGE = '✅The email has been successfully sent';
const FAILURE_MESSAGE = '🔥The email delivery failed. Please try again!';
const WARNING_MESSAGE =
  '📌Please provide a valid email format or fill in all required fields.';

type Props = {
  email: Email;
  successCallback: (message: string) => void;
  failureCallback: (message: string) => void;
};

type Email = {
  sender: string;
  subject: string;
  message: string;
};
export async function sendEmail({
  email: { sender, message, subject },
  successCallback,
  failureCallback,
}: Props) {
  if (
    !sender.includes('@') ||
    sender.length === 0 ||
    message.length === 0 ||
    subject.length === 0
  ) {
    return failureCallback(WARNING_MESSAGE);
  }

  const emailHeaders = new Headers();
  emailHeaders.append('Content-Type', 'application/json');
  const data = JSON.stringify({
    sender,
    message,
    subject,
  });
  const requestOptions = {
    method: 'POST',
    headers: emailHeaders,
    body: data,
  };

  let res;
  try {
    res = await (
      await fetch('http://localhost:3000/api/contact', requestOptions)
    ).json();
  } catch (e) {
    console.log(e);
    return failureCallback(FAILURE_MESSAGE);
  }

  successCallback(SUCCESS_MESSAGE);
}
