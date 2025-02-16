import React from "react";

const languages = [
  { value: "English", label: "English - EN" },
  { value: "Hindi", label: "हिन्दी - HI" },
  { value: "Spanish", label: "Español - ES" },
  { value: "German", label: "Deutsch - DE" },
  { value: "French", label: "Français - FR" },
  { value: "Chinese", label: "中文 - ZH" },
  { value: "Italian", label: "Italiano - IT" },
  { value: "Portuguese", label: "Português - PT" },
];

const LangList = ({ handleConflict }) => {
  return (
    <ul className="space-y-2 text-lg" onMouseLeave={handleConflict}>
      {languages.map((lang) => {
        const inputId = `language-${lang.value}`;
        return (
          <li key={lang.value} className="flex gap-3">
            <input
              type="radio"
              id={inputId}
              name="language"
              value={lang.value}
            />
            <label htmlFor={inputId}>{lang.label}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default LangList;
