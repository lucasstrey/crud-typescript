import { Author } from "../../interfaces/RecordEntities";
import { ListItemProps } from "../../interfaces/PageProps";

type IProps = ListItemProps<Author>;

export const AuthorListItem: React.FC<IProps> = ({ record }) => {
  return <div className="title">{record.name}</div>;
};
