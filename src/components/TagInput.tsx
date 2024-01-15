import React, { useState, useRef, useEffect } from "react";
import { Option } from "./types";
import { DropdownOption } from "./DropdownOption";
import { SelectedTag } from "./SelectedTag";
import "./style.css";
import imageFile from "../../.storybook/assets/img_avatar1.png";

export type TagInputProps = {
  options: Option[];
};

export function TagInput({ options }: TagInputProps): JSX.Element {
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDropdownVisible(true);
    const value = event.target.value;
    setInputValue(value);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedTags((prevTags) => [...prevTags, option]);
    setInputValue("");
    setDropdownVisible(false);
    inputRef.current?.focus();
  };

  const handleRemoveTag = (tagToRemove: Option) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleOutsideClick = (event: MouseEvent) => {
    // Close dropdown when clicking outside the component
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  };

  const handleInputFocus = () => {
    // Show dropdown when input is focused
    if (inputRef.current?.selectionStart === inputRef.current?.selectionEnd) {
      setDropdownVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div id="tag-input">
      <div className="tag-input-container">
        {selectedTags.map((tag) => (
          <SelectedTag
            key={tag.value}
            avatar={imageFile}
            option={tag}
            removeTag={() => handleRemoveTag(tag)}
          />
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Type to add tags"
        />
      </div>

      {dropdownVisible && (
        <div className="dropdown-options">
          {options?.length === 0 && (
            <span className="not-available">
              <p>No Option Available</p>
            </span>
          )}
          {options
            .filter((option) => !selectedTags.includes(option))
            .map((option) => (
              <DropdownOption
                option={option}
                avatar={imageFile}
                onClick={() => handleOptionSelect(option)}
              />
            ))}
        </div>
      )}
    </div>
  );
}
