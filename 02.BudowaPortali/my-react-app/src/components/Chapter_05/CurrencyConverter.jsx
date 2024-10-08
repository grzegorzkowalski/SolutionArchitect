const CurrencyConverter = ({value, from, rate, to}) => {
    return (
        <div>
            <strong> {value}</strong> 
            {from} {"=>"} 
             <strong> {value * rate}</strong> 
            {to}
        </div>
    );
};

export default CurrencyConverter;