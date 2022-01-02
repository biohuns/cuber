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
        <label key={item.value}>
          <input
            type="radio"
            name={name}
            value={item.value}
            defaultChecked={item.value === defaultValue}
            onChange={() => onChange(item.value)}
          />
          <span>{item.label}</span>
          {item.preview ? <div>{item.preview}</div> : null}
        </label>
      ))}
      <style jsx>{`
        label {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        input {
          display: none;
          position: absolute;
          width: 1px;
          height: 1px;
        }
        span {
          display: inline-block;
          position: relative;
          cursor: pointer;
          padding: 10px 11px 8px 36px;
          border-radius: 4px;
          vertical-align: middle;
        }
        span::before,
        span::after {
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto 10px auto 0;
          border-radius: 50%;
          content: "";
        }
        span::before {
          width: 20px;
          height: 20px;
          background: var(--text-color);
          border: 2px solid #999999;
          left: 9px;
        }
        span::after {
          width: 10px;
          height: 10px;
          background: #999999;
          left: 14px;
          opacity: 0;
        }
        input:checked + span::before {
          border: 2px solid var(--accent-color);
        }
        input:checked + span::after {
          background: var(--accent-color);
          opacity: 1;
        }
        div {
          display: inline-block;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
