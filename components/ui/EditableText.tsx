'use client';
import { useState, useRef, useEffect } from 'react';

type EditableTextProps = {
  value: string;
  onSave: (newValue: string) => void;
  isAdmin: boolean;
  className?: string;
};

export default function EditableText({ value, onSave, isAdmin, className = '' }: EditableTextProps) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const handleBlur = () => {
    setEditing(false);
    if (tempValue.trim() !== value) {
      onSave(tempValue.trim());
    } else {
      setTempValue(value); // reset if unchanged
    }
  };

  if (!isAdmin) return <span className={className}>{value}</span>;

  return editing ? (
    <input
      ref={inputRef}
      type="text"
      value={tempValue}
      onChange={(e) => setTempValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={(e) => e.key === 'Enter' && handleBlur()}
      className={`bg-transparent text-inherit font-inherit outline-none border-none focus:ring-2 focus:ring-primary rounded-md px-1 ${className}`}
    />
  ) : (
    <span
      onClick={() => setEditing(true)}
      className={`cursor-pointer hover:text-primary transition duration-200 ${className}`}
    >
      {value}
    </span>
  );
}
