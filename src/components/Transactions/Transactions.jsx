import { TransactionItem } from '../Transactions/TransactionItem';

export const TransactionHistory = ({items}) => {
    return (
    <table className="transaction-history">
        <thead className ='table-head'>
            <tr className='head'>
            <th className='head-item'>Type</th>
            <th className='head-item'>Amount</th>
            <th className='head-item'>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => {
                        return (
                            <TransactionItem
                                key={item.id}
                                type={item.type}
                                amount={item.amount}
                                currency={item.currency}
                            />
                        )
                    })}
        </tbody>
    </table>)
}   