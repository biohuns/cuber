import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  name?: string;
  items?: Array<{
    label: string;
    value: string;
    preview?: ReactNode;
  }>;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export default function RadioInput({
  name,
  items,
  defaultValue,
  onChange,
}: Props) {
  return (
    <>
      {items.map((item) => (
        <label key={item.value} className="root">
          <input
            type="radio"
            name={name}
            value={item.value}
            defaultChecked={item.value === defaultValue}
            onChange={() => onChange(item.value)}
          />
          <span className="radio" />
          <span className="label">{item.label}</span>
          {item.preview ? (
            <div
              className={clsx(
                "preview",
                item.value === defaultValue && "glass"
              )}
            >
              {item.preview}
            </div>
          ) : null}
        </label>
      ))}
      <style jsx>{`
        /* @see https://codepen.io/triss90/pen/XNEdRe */
        .root {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          column-gap: 16px;
          cursor: pointer;

          --gray-color: #f4f4f4;
          --dark-gray-color: #b4b4b4;
        }
        .root:not(:last-child) {
          margin-bottom: 8px;
        }
        input {
          position: absolute;
          opacity: 0;
        }
        .radio {
          flex: 0 0 21px;
          width: 21px;
          height: 21px;

          background: var(--gray-color);
          border: 1px solid var(--dark-gray-color);
          border-radius: 100%;
          transition: all 250ms ease;
        }
        input:checked + .radio {
          background-color: var(--accent-color);
          box-shadow: inset 0 0 0 4px var(--gray-color);
        }
        input:focus + .radio {
          outline: none;
          border-color: var(--accent-color);
        }
        input:disabled + .radio {
          box-shadow: inset 0 0 0 4px var(--gray-color);
          border-color: var(--dark-gray-color);
          background: var(--dark-gray-color);
        }
        .label {
          flex: 1 1;
          padding-top: 1px;
        }
        .preview {
          flex: 0 0;
          border: 1px solid transparent;
        }
      `}</style>
    </>
  );
}
