import type { Meta, StoryObj } from "@storybook/react";
import { DropdownOption } from "./DropdownOption";
import imageFile from "../../.storybook/assets/img_avatar1.png";

const meta = {
  title: "Components/DropdownOption",
  component: DropdownOption,
} satisfies Meta<typeof DropdownOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    avatar: imageFile,
    description: "198rahulchaudhary@gmail.com",
    option: {
      label: "Option 1",
      value: "1",
      description: "198rahulchaudhary@gmail.com",
    },
    onClick: () => {},
  },
};
