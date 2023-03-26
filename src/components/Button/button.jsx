

import {InvertedButton, NewsletterButton, SignInButton, GoogleSignInButton} from './button.styles';
  
  export const BUTTON_TYPE_CLASSES = {
    signIn: 'sign-in',
    newsletter: 'newsletter',
    google: 'google-sign-in',
    inverted: 'inverted',
  };
  
  const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
      [BUTTON_TYPE_CLASSES.signIn]: SignInButton,
      [BUTTON_TYPE_CLASSES.newsletter]: NewsletterButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);
  
  const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
  };
  
  export default Button;
  