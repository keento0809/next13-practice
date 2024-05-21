import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SearchInput } from "./SearchInput";
import userEvent from "@testing-library/user-event";

describe("SearchInput", () => {
  const renderSearchInput = () => {
    const mockText = "test";
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<SearchInput onChange={onChange} />);

    const input = screen.getByPlaceholderText(/search/i);

    return {
      mockText,
      onChange,
      user,
      input,
    };
  };

  it("should call onChange when users input text", async () => {
    const { mockText, onChange, user, input } = renderSearchInput();

    await user.type(input, mockText);

    expect(onChange).toBeCalledWith(mockText);
  });
});