import styles from '../styles.module.scss';

type Props = {
  onClick: (isShow: boolean) => void;
};

const PopapHeader = ({ onClick }: Props) => {
  return (
    <div className={styles.popap__header}>
      <button
        className={styles['popap-header-close']}
        type='button'
        onClick={() => onClick(false)}
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 12L7 7M12 12L17 17M12 12L17 7M12 12L7 17'
            stroke='#878A8E'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
};

export default PopapHeader;
