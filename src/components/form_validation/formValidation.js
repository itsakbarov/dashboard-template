import "./main.scss";

const FormValidation = ({item}) => {
  return (
    <div className='form_validation_bottom-flex'>
      <h6 className="form_validation_bottom_wrapper_title">
          {item.title}
      </h6>
      <p className="form_validation_bottom_wrapper_description">
          {item.description}
      </p>
      <form action="" className="form_validation_forms">
        <div className=''>
            <div className={item.classNames}>
                {
                    item.data.map((el,index) => (
                        <div className={el.inputClass} key={index} id={el.id}>
                            <label htmlFor={el.labelsid} className="form_validation_label">
                                {el.labels}
                            </label>
                            <input
                                type={el.type}
                                className="form_validation_input"
                                id={el.labelsid}
                                placeholder={el.placehold}
                            />
                            <p className="error_form">{el.errorText}</p>
                        </div>
                    ))
                }
            </div>
            {
                item.checkbox ? <div className="form_validation_input_checkbox_block">
                    <input
                        type="checkbox"
                        id="checkbox_input"
                        className="form_validation_input_checkbox"
                    />
                    <label
                        htmlFor="checkbox_input"
                        className="form_validation_input_checkbox_label"
                    >
                        Agree to terms and conditions
                    </label>
                </div> : <></>
            }
        <button className="form_validation_btn">{item.btnName}</button>
            {
                item.btnCanelType ?<button className="form_validation_cancel_btn">{item.btnCanel}</button> : <></>
            }
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
