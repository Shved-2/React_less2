import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requaried } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/FormsControl";



const maxLength30 = maxLengthCreator(30);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
          name="newMessageBody"
          placeholder="введите текст"
          validate={[requaried, maxLength30]}
        />
      </div>
      <div>
        <button >отправить</button>
      </div>
    </form>
  )
}
export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

