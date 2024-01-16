export declare namespace FormProps {
  interface LabelProps
    extends React.DetailedHTMLProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    > {
    text: string;
    isErrors: boolean;
  }
  interface InputProps
    extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > {
    isErrors: boolean;
  }
  interface TextAreaProps
    extends React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    > {
    isErrors: boolean;
  }
  interface ButtonProps
    extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
    isLoading: boolean;
  }
}
