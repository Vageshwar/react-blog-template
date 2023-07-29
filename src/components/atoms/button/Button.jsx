import './button.css';
    /* eslint-disable react-hooks/exhaustive-deps */
    /* eslint-disable react/prop-types */

function Button({
    type,
    size,
    styleClasses,
    onClick,
    label,
    disabled,
}) {

return (
    <button disabled={disabled} onClick={onClick} className={`button ${type} ${size} ${styleClasses}`}>
        <span>{label}</span>
    </button>
)
}

export default Button