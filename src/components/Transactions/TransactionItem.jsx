
export const TransactionItem = ({ id, type, amount, currency }) => {
    return (
        <tr className="t-item" key={id}>
            <td className="data">{type}</td>
            <td className="data">{amount}</td>
            <td className="data">{currency}</td>
        </tr>            
    )    
}
