interface UtilityButtonProps {
    id: string;
    utility: string;
}

const UtilityButton: React.FC<UtilityButtonProps> = ({id, utility}) => {
    return (
        <div className="flex basis-1/4 justify-center items-center rounded-md bg-[var(--number-button)] h-10 border" id={id}>
            <p className="text-lg volkhov-bold">{utility}</p>
        </div>
    );
};

export default UtilityButton;