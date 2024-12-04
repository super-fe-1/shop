const cleanPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  return cleaned;
};

export default cleanPhoneNumber;
