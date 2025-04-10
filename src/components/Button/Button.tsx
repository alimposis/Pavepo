import ButtonStyle from './Button.module.scss';

interface IProps {
    text: string;
    functionProps?: () => null | undefined;
    color?: string;
}

export const Button = ({ text, functionProps, color }: IProps) => {
    return (
        <>
            <button
                style={{ background: `${color}` }}
                onClick={() => (functionProps ? functionProps() : null)}
                className={ButtonStyle.button}
            >
                {text && text}
            </button>
        </>
    );
};
