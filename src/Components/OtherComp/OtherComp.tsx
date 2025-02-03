interface OtherCompProps {
  text: string;
  style?: string;
}

export const OtherComp: React.FC<OtherCompProps> = ({text,style}) => {
  return (
    <div className={style}>{text}</div>
  )
}
