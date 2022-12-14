// Regular expression for email validation
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Regular expression for 11 digit phone number validation
const phoneRegEx =
  /^\d{3}(-|\s)\d{3}(-|\s)\d{4}$|^\d{11}$|^1\s\d{3}(-|\s)\d{3}(-|\s)\d{4}$|^(1\s?)?\(\d{3}\)(\s|\-)?\d{3}\-\d{4}$/;

export { emailRegEx, phoneRegEx };
