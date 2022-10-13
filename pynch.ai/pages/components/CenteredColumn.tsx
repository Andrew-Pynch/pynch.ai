type CenteredColumnProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
};

const CenteredColumn = (props: CenteredColumnProps) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                ...props.style,
            }}
        >
            {props.children}
        </div>
    );
};

export default CenteredColumn;
