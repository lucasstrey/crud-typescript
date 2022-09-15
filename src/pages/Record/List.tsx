import { Record } from "../../interfaces/RecordEntities";
import { RecordListProps } from "../../interfaces/PageProps";
import { usePage } from "../../contexts/Page";
import { Status } from "../../components/Status";

export const RecordList = <T extends Record>({
  ListItem,
  records,
  emptyRecord,
  activeRecord,
  setActiveRecord,
  loading,
  error,
}: RecordListProps<T>) => {
  const { page } = usePage();

  return (
    <div className="list">
      <div>
        <h2>{page}</h2>
        <button className="bt-new" onClick={() => setActiveRecord(emptyRecord)}>
          New
        </button>
        <ul>
          {records.map((record) => (
            <li
              key={record.id}
              className={record.id === activeRecord?.id ? "active" : ""}
              onClick={() => setActiveRecord(record)}
            >
              <ListItem record={record} />
            </li>
          ))}
        </ul>
      </div>
      {loading && <Status text="Loading..." />}
    </div>
  );
};
