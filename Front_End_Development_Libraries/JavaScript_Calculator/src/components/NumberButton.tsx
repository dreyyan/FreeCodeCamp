interface NumberButtonProps {
    id: string;
    number: string;
    display: string;
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const NumberButton: React.FC<NumberButtonProps> = ({id, number, display, setDisplay}) => {
    const appendToDisplay = () => {
        setDisplay(prev => prev + number);
    };

    return (
        <div className="flex basis-1/4 justify-center items-center rounded-md bg-[var(--number-button)] mx-2 h-10 my-4 cursor-pointer"
        id={id}
        onClick={appendToDisplay}
        >
            <p className="text-lg volkhov-bold">{number}</p>
        </div>
    );
};

export default NumberButton;