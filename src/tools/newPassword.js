export default function newPassword(
  length,
  allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/\\"
) {
  let result = "";
  const characters = allowedChars;
  const charactersLength = allowedChars.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
