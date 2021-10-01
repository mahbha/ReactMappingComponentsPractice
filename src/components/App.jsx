import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiEntry) {
  return (
    <Entry
      key={emojiEntry.id}
      name={emojiEntry.name}
      emoji={emojiEntry.emoji}
      meaning={emojiEntry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
