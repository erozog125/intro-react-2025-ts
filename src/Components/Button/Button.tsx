interface ButtonProps {
  // parentMethod will be the event that triggers when clicking the button
  parentMethod: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, parentMethod }) => {
  return (
    <button onClick={parentMethod} className="btn-try">{text}</button>
  );
};
