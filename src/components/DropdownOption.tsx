import { Option } from "./types";
import "./style.css";

export type DropdownOptionProps = {
  option: Option;
  avatar?: string;
  description?: string;
  onClick: Function;
};

export function DropdownOption({
  option,
  avatar,
  onClick,
}: DropdownOptionProps): JSX.Element {
  return (
    <div id="option" onClick={() => onClick(option)}>
      <div className="dropdown-option">
        <div className="avatar">
          <img
            className="avatar-img"
            src={avatar ? `${avatar}` : `../assets/avatar3.jpg`}
            alt=""
          />
        </div>
        <div className="info">
          <h1>{option.label}</h1>
          {option.description && <p className="small-desc">{option.description}</p>}
        </div>
      </div>
    </div>
  );
}
