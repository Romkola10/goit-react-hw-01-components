import propTypes from 'prop-types'

export const Statistics = ({ title, stats }) => {
    return (<section class="statistics">
        <h2 class="title">{title}</h2>
        <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => {
                return(<li className='item' key={id}>
                    <span className='label2'>{label}</span>
                    <span className='percentage'>{percentage}%</span>
                </li>)
            })}
        </ul>
    </section>);
};
 
Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            label2: propTypes.string,
            percentage:propTypes.number,
        }),
    ),
}