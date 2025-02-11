import React from "react";

const LangList = ({handleLangState}) => {
  return (
    <ul className="space-y-2 text-lg " onMouseLeave={handleLangState}>
      <li className="flex gap-3">
        <input type="radio" name="language" value="English" />
        <label>English - EN</label>
      </li>

      <li className="flex gap-3">
        <input type="radio" id="hindi" name="language" value="Hindi" />
        <label htmlFor="hindi">हिन्दी - HI</label>
      </li>

      <li className="flex gap-3">
        <input type="radio" name="language" value="Spanish" />
        <label>Español - ES</label>
      </li>

      <li className="flex gap-3">
        <input type="radio" name="language" value="German" />
        <label>Deutsch - DE</label>
      </li>

      <li className="flex gap-3">
        <input type="radio" id="french" name="language" value="French" />
        <label>Français - FR</label>
      </li>

      <li className="flex gap-3">
        <input type="radio" name="language" value="Chinese" />
        <label>中文 - ZH</label>
      </li>

      <li className="flex gap-3">
        <input type="radio" name="language" value="Italian" />
        <label>Italiano - IT</label>
      </li>

      <li className="flex gap-3">
        <input type="radio" name="language" value="Portuguese" />
        <label>Português - PT</label>
      </li>
    </ul>
  );
};

export default LangList;
