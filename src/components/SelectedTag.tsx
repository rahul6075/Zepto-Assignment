import { Option } from "./types";

export type SelectedTagProps = {
  readonly avatar: string;
  readonly option: Option;
  readonly removeTag: Function;
};

export function SelectedTag({
  avatar,
  option,
  removeTag,
}: SelectedTagProps): JSX.Element {
  return (
    <div id="tag">
      <div className="tag-content">
        <img
          className="avatar-img"
          src={avatar ? `${avatar}` : `../assets/avatar3.jpg`}
          alt=""
        />
        <p className="tag-label">{option.label}</p>
      </div>
      <span className="tag-icon" onClick={() => removeTag()}>
        <img
          className="close-icon"
          src={`../../.storybook/assets/close.jpg`}
          alt=""
        />
      </span>
    </div>
  );
}
