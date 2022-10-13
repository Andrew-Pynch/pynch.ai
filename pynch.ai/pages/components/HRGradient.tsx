type HRGradientProps = {};

const HRGradient = (props: HRGradientProps) => {
    return (
        <hr
            style={{
                border: 0,
                borderRadius: '8px',
                clear: 'both',
                display: 'block',
                width: '95%',
                background:
                    'linear-gradient(-90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                backgroundSize: '400% 400%',
                animation: 'gradient 15s ease infinite',
                height: '8px',
            }}
        />
    );
};

export default HRGradient;
