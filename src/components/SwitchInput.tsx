type Props = {
  name?: string;
  label?: string;
  defaultChecked?: boolean;
  onChange?: (value: boolean) => void;
};

export default function SwitchInput({
  name,
  label,
  defaultChecked,
  onChange,
}: Props) {
  return (
    <label className="root">
      <input
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className="label">{label}</span>
      <span className="switch"></span>
      <style jsx>{`
        .root {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          column-gap: 16px;
          cursor: pointer;
          margin-bottom: 8px;
        }
        input {
          position: absolute;
          opacity: 0;
        }
        .label {
          flex: 1 1;
          padding-top: 1px;
        }
        .switch {
          flex: 0 0 40px;
          width: 40px;
          height: 20px;
          background: #b4b4b4;
          position: relative;
          display: inline-block;
          border-radius: 10px;
          transition: all 250ms ease;
        }
        .switch:after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          left: 0;
          top: 0;
          background: #ffffff;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          transition: all 250ms ease;
        }
        input:checked + * + .switch {
          background-color: var(--accent-color);
        }
        input:checked + * + .switch:after {
          left: 20px;
        }
      `}</style>
    </label>
  );
}
