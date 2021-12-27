import { FORM_MASK } from "../../components/InputArr";
import './formmask.scss'
const FormMask = () => {
    return (
        <div className="form_mask">
            <div className="form_mask_top">
                <h2 className="form_mask_title">FORM MASK</h2>
                <p className="form_mask_direction">{`Forms > Form Mask`}</p>
            </div>
            <div className="form_mask_wrapper">
                <p className="form_mask_description">Example</p>
                <div className="form_mask_bottom">
                    {FORM_MASK.map((item, index) => (
                        <label id={item.id} htmlFor={item.labelId} className="form_mask_label">
                            {item.label}
                            <input
                                className="form_mask_input"
                                placeholder={item.plachold}
                                id={item.labelId}
                                key={index}
                                type={item.type}
                            />
                            <p className="form_mask_text">{item.text}</p>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FormMask;