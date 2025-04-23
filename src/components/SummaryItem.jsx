function SummaryItem({ title, score, denominator, icon, backgroundColor, titleColor }) {
    return (
        <div className="summary-item" style={{ backgroundColor }}>
            <div className="summary-item-icon">
                {icon} {/* Render the image */}
            </div>
            
            <h3 style={{ color: titleColor }}>{title}</h3> {/* Apply title color */}

            <p className="score">
                <span className="score-number">{score}</span>
                <span className="score-denominator">{denominator}</span> {/* Style this part differently */}
            </p>
        </div>
    );
}

export default SummaryItem;