import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import HyperNewsletter from '../components/sections/hypernewsletter';

const meta: Meta<typeof HyperNewsletter> = {
  title: 'Sections/HyperNewsletter',
  component: HyperNewsletter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'The theme of the newsletter component',
      table: {
        defaultValue: { summary: 'light' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the submit button',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    label: {
      control: 'text',
      description: 'The text displayed on the submit button',
    },
  },
} satisfies Meta<typeof HyperNewsletter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: 'light',
    size: 'medium',
    label: 'Sign Up',
  },
};

export const Dark: Story = {
  args: {
    theme: 'dark',
    size: 'medium',
    label: 'Subscribe',
  },
};

export const InteractiveSubmission: Story = {
  args: {
    theme: 'light',
    size: 'medium',
    label: 'Sign Up',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Find the email input and submit button
    const emailInput = canvas.getByPlaceholderText('Email address') as HTMLInputElement;
    const submitButton = canvas.getByRole('button', { name: /sign up/i });

    // Type an email address
    await userEvent.type(emailInput, 'test@example.com');

    // Click the submit button
    await userEvent.click(submitButton);

    // Wait for the thank you message to appear
    const thankYouMessage = await canvas.findByText('Thank You!');
    
    // Check if the thank you message is in the document
    expect(thankYouMessage).toBeInTheDocument();

    // Check if the email is displayed in the thank you message
    const emailConfirmation = await canvas.findByText(/test@example.com/);
    expect(emailConfirmation).toBeInTheDocument();
  },
};