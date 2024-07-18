import { useEffect, useRef, forwardRef, TextareaHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

const TextArea = forwardRef(
  ({ value, onChange, placeholder = '', style }: Props, _) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      if (textareaRef && textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + 'px';
      }
    }, [value]);

    return (
      <textarea
        className={styles.textarea}
        ref={textareaRef}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={1}
        style={style}
      />
    );
  }
);

export default TextArea;
