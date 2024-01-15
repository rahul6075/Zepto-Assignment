import type { Meta, StoryObj } from "@storybook/react";

import { TagInput } from "./TagInput";

const meta = {
  title: "Components/TagInput",
  component: TagInput,
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      {
        label: "Rahul Chaudhary",
        value: "1",
        description: "198rahulchaudhary@gmail.com",
      },
      { label: "Gulshan Gupta", value: "2", description: "pool4T7@gmail.com" },
      { label: "Jhon Doe", value: "3", description: "jhon@123.com" },
      { label: "Rajiv Shahu", value: "4", description: "rajivshahu@gmail.com" },
    ],
  },
};

export const NoOptions: Story = {
  args: {
    options: [],
  },
};
