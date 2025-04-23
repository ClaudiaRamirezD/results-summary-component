import SummaryItem from './SummaryItem';
import data from '../data.json'

function Summary() {
    function getColors(category) {
        switch (category) {
            case 'Reaction':
                return {
                backgroundColor: 'hsla(0, 100%, 67%, .1)', 
                titleColor: 'hsl(0, 100%, 67%)', 
                };
            case 'Memory':
                return {
                backgroundColor: 'hsla(39, 100%, 56%, .1)', // Light green with alpha
                titleColor: 'hsl(39, 100%, 56%)', // Solid green (no alpha)
                };
            case 'Verbal':
                return {
                backgroundColor: 'hsla(166, 100%, 37%, .1)', // Light blue with alpha
                titleColor: 'hsl(166, 100%, 37%)', // Solid blue (no alpha)
                };
            case 'Visual':
                return {
                backgroundColor: 'hsla(234, 85%, 45%, .1)', // Light yellow with alpha
                titleColor: 'hsl(234, 85%, 45%)', // Solid yellow (no alpha)
                };
            default:
                return {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Default to a transparent white
                titleColor: 'rgba(0, 0, 0, 0.8)', // Default dark text color
                };
        }
    }

    return (
    <section className="summary">
        <h2>Summary</h2>
        <div className="summary-list">
            {data.map((item, index) => {
            const { backgroundColor, titleColor } = getColors(item.category);
            return (
                <SummaryItem
                key={index}
                icon={<img src={item.icon} alt={`${item.category} icon`} />}
                title={item.category}
                score={item.score}
                denominator="/ 100"
                backgroundColor={backgroundColor} 
                titleColor={titleColor} 
                />
            );
            })}
        </div>
        <button className="continue-btn">Continue</button>
    </section>
    );
}

export default Summary;