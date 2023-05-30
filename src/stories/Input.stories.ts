import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/Input";
import { LockIcon, PhoneIcon } from "./assets/Icons";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Input",
    placeholder: "Placeholder",
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const HelperText: Story = {
  args: {
    ...Default.args,
    helperText: "Some interesting text",
  },
};

export const StartIcon: Story = {
  args: {
    ...Default.args,
    startIcon: PhoneIcon,
  },
};

export const EndIcon: Story = {
  args: {
    ...Default.args,
    endIcon: LockIcon,
  },
};

export const Value: Story = {
  args: {
    ...Default.args,
    value: "Text",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: "md",
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
};

export const Multiline: Story = {
  args: {
    ...Default.args,
    multiline: true,
    row: 4,
  },
};
