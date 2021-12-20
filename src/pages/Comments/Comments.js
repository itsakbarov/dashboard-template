import FormValidation from "../../components/form_validation";
import './main.scss'
import {InputArr} from "../../components/InputArr";
const Comments = () => {
  const reactValidation = {
    label:['First name','Last name','city','state'],
    title:'React Validation - Normal',
    description: `Provide valuable, actionable feedback to your users with HTML5 form
        validation–available in all our supported browsers.`,
        formName:'',
  }

  const bootstrapValidation = {
    label:['First name','Last name','Username','state'],
    title:'Bootstrap Validation (Tooltips)',
    description: `If your form layout allows it, you can swap the .-feedback classes for .-tooltip classes to display validation feedback in a styled tooltip.`,
    formName:'',
  }

  const validationType = {
      label:['Required',`Equal To`,'E-Mail','Digits','Number','Alphanumeric']
  }


  
  return (
    <div className="form_validation">
             <div className="form_validation_top">
                <h4 className="form_validation_top_left">FORM VALIDATION</h4>
                <div className="form_validation_top_right">
                    <p className="form_validation_top_right-title">Forms</p>
                    <p className="form_validation_top_right-title">Validation</p>
                </div>
            </div>
      <div className="form-block">
          {
              InputArr.map((item, index) => (
                  <FormValidation
                                  item={item}
                  />
              ))
          }

      </div>
    </div>
  );
  }

export default Comments;

