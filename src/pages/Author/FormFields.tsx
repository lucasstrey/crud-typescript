import { Author } from "../../interfaces/RecordEntities";
import { FormFieldsProps } from "../../interfaces/PageProps";

type IProps = FormFieldsProps<Author>;

export const AuthorFormFields: React.FC<IProps> = ({
  formState,
  handleChange,
}) => {
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
