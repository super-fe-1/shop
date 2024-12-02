const cleanPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace('-', '');
  return cleaned;
};

export default cleanPhoneNumber;
