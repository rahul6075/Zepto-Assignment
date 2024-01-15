import type { Meta, StoryObj } from "@storybook/react";
import { SelectedTag } from "./SelectedTag";
import imageFile from "../../.storybook/assets/img_avatar1.png";

const meta = {
  title: "Components/SelectedTag",
  component: SelectedTag,
} satisfies Meta<typeof SelectedTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    avatar: imageFile,
    option: {
      label: "Rahul Chaudhary",
      value: "1",
      description: "198rahulchaudhary@gmail.com",
    },
    removeTag: () => {
      console.log("Tag Removed");
    },
  },
};
