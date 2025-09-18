interface OperationButtonProps {
    id: string;
    operation: string;
}

const OperationButton: React.FC<OperationButtonProps> = ({id, operation}) => {
    return (
        <div className="flex justify-center items-center rounded-md bg-[var(--number-button)] w-10 h-10 border my-2" id={id}>
            <p className="text-lg volkhov-bold">{operation}</p>
        </div>
    );
};

export default OperationButton;