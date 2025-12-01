import './CheckBoxComponent.css';

function CheckBoxComponent({size ='medium', checked, onChange, name, ariaLabel}) {
    return (
        <>
            <label className={`checkbox-component ${size}`}>
                <input checked={checked} aria-label={ariaLabel} type="checkbox" onChange={(e) => onChange?.(e.target.checked)} name={name}/>
                <span aria-hidden="true" className="track"></span>
            </label>
        </>
    )
}

export default CheckBoxComponent