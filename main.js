"use strict";
var Te = (b, t) => () => {
  try {
    return t || b((t = { exports: {} }).exports, t), t.exports;
  } catch (n) {
    throw t = 0, n;
  }
};

// ../i18n.js
var re = Te(($e, le) => {
  "use strict";
  var oe = {
    zh: {},
    en: {
      \u786E\u5B9A: "OK",
      \u53D6\u6D88: "Cancel",
      \u786E\u8BA4: "Confirm",
      \u6E05\u9664: "Clear",
      \u6E05\u9664\u6240\u6709: "Clear All",
      \u5168\u9009\u5F53\u524D: "Select All",
      \u663E\u793A\u5BFC\u56FE: "Show Mindmap",
      \u521B\u5EFA: "Create",
      \u91CD\u547D\u540D: "Rename",
      \u5173\u95ED: "Close",
      \u6DFB\u52A0: "Add",
      \u5BFC\u51FA: "Export",
      \u9009\u62E9\u6587\u4EF6: "Choose File",
      \u6062\u590D\u9ED8\u8BA4: "Reset",
      \u8FD4\u56DE: "Back",
      \u5237\u65B0: "Refresh",
      \u9002\u5E94: "Fit",
      \u5168\u5C55: "Expand All",
      \u5168\u6298: "Collapse All",
      \u6A2A\u5411: "Horizontal",
      \u7EB5\u5411: "Vertical",
      \u641C\u7D22: "Search",
      \u591A\u9009: "Multi",
      \u65B0\u589E: "New",
      \u6279\u91CF: "Batch",
      \u5168\u9009: "Select All",
      \u53CD\u9009: "Invert",
      "\u79FB\u52A8\u5230\u2026": "Move to\u2026",
      \u5220\u9664\u9009\u4E2D: "Delete Selected",
      \u6539\u7C7B\u578B: "Change Type",
      \u6807\u8BB0\u5B8C\u6210: "Mark Done",
      \u53D6\u6D88\u5B8C\u6210: "Unmark Done",
      \u5DE5\u4F5C\u53F0: "Dashboard",
      \u4E3B\u7B14\u8BB0: "Main Note",
      \u5173\u952E\u8BCD: "Keyword",
      \u5FEB\u6377\u952E: "Shortcuts",
      \u663E\u793A: "Display",
      \u83DC\u5355: "Menu",
      \u5C42: "levels",
      \u65F6\u95F4: "Time",
      \u7C7B\u578B: "Type",
      \u5B50\u6570: "Children",
      \u6253\u5F00\u56FE\u6807: "Open Icon",
      \u65B0\u589E\u56FE\u6807: "Add Icon",
      \u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0: "Please select at least one note",
      \u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A: "Title cannot be empty",
      \u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A: "Filename cannot be empty",
      \u6CA1\u6709\u53EF\u8FD4\u56DE\u7684\u8282\u70B9: "No node to go back to",
      \u672A\u627E\u5230\u5BFC\u56FE\u5185\u5BB9: "Mindmap content not found",
      "SVG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A": "SVG exported to vault root: ",
      "PNG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A": "PNG exported to vault root: ",
      "PNG \u5BFC\u51FA\u5931\u8D25": "PNG export failed",
      \u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE: "No mindmap to export",
      "Markdown \u5927\u7EB2\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A": "Markdown outline exported to vault root: ",
      "\u5BFC\u51FA\u5931\u8D25\uFF1A": "Export failed: ",
      \u6CA1\u6709\u53EF\u8DF3\u8F6C\u7684\u4E0A\u7EA7\u7B14\u8BB0: "No parent note to jump to",
      \u6CA1\u6709\u4E0A\u7EA7\u7B14\u8BB0: " has no parent note",
      "\u5DF2\u590D\u5236\uFF1A": "Copied: ",
      \u590D\u5236\u5931\u8D25: "Copy failed",
      "\u5DF2\u590D\u5236\u5B50\u6811\uFF08": "Copied subtree (",
      \u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6: "This node has no corresponding file",
      "\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A": "File already exists: ",
      "\u5DF2\u91CD\u547D\u540D\u4E3A ": "Renamed to ",
      "\u91CD\u547D\u540D\u5931\u8D25\uFF1A": "Rename failed: ",
      \u65E0\u6CD5\u786E\u5B9A\u8BE5\u6302\u70B9\u7684\u7236\u8282\u70B9: "Cannot determine parent node for this alias",
      "\u5DF2\u79FB\u9664\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09": "Removed association (file kept)",
      "\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A": "Failed to remove association: ",
      "\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664": "This is a root node, no parent association to remove",
      "\u5DF2\u79FB\u9664\u4ECE\u300C": 'Removed association from "',
      "\u5230\u300C": '" to "',
      "\u300D\u7684\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09": '" (file kept)',
      "\u5DF2\u79FB\u9664\u6240\u6709\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09": "Removed all associations (file kept)",
      "\u5220\u9664\u5931\u8D25\uFF1A": "Delete failed: ",
      "\u542B\u5B50\u8282\u70B9\u5171 ": " files including children)",
      " \u4E2A\u6587\u4EF6\uFF09": "",
      "\uFF08\u53EF\u5728\u56DE\u6536\u7AD9\u6062\u590D\uFF09": " (recoverable from trash)",
      \u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0: "No available target parent note",
      \u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B: "Cannot move to own child node",
      \u76EE\u6807\u7236\u7B14\u8BB0\u4E0D\u5B58\u5728: "Target parent note does not exist",
      "\u5DF2\u79FB\u52A8\u300C": 'Moved "',
      "\u79FB\u52A8\u5931\u8D25\uFF1A": "Move failed: ",
      \u65E0\u6CD5\u79FB\u52A8\u5230\u8BE5\u4F4D\u7F6E: "Cannot move to this position",
      \u4E4B\u540E: " after ",
      \u4E4B\u524D: " before ",
      \u6839\u8282\u70B9\u6CA1\u6709\u540C\u7EA7\u8282\u70B9: "Root node has no siblings",
      \u6CA1\u6709\u540C\u7EA7\u8282\u70B9\u53EF\u63D2\u5165: "No sibling node to insert",
      "\u540C\u7EA7\u79FB\u52A8\u5931\u8D25\uFF1A": "Sibling move failed: ",
      "\u65E0\u6CD5\u6392\u5E8F\uFF1A\u591A\u9009\u6839\u8282\u70B9\u95F4\u4E0D\u80FD\u8C03\u6574\u987A\u5E8F": "Cannot reorder: multi-root nodes cannot be rearranged",
      \u6E90\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6: "Source node has no corresponding file",
      \u76EE\u6807\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6: "Target node has no corresponding file",
      \u4E0D\u80FD\u5173\u8054\u5230\u81EA\u5DF1: "Cannot link to self",
      \u5DF2\u5173\u8054\u5230: " already linked to ",
      \u65E0\u9700\u91CD\u590D: ", no need to repeat",
      "\u4E0D\u80FD\u5EFA\u7ACB\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF\uFF08\u76EE\u6807\u5DF2\u662F\u300C": 'Cannot link: would create a cycle (target is already an ancestor of "',
      "\u7684\u4E0A\u7EA7\uFF09": '")',
      "\u5DF2\u5EFA\u7ACB\u5173\u8054\uFF1A": "Association created: ",
      "\u5EFA\u7ACB\u5173\u8054\u5931\u8D25\uFF1A": "Failed to create association: ",
      \u8BF7\u5148\u9009\u62E9\u8282\u70B9: "Please select nodes first",
      \u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9: "No nodes to process",
      "\u5DF2\u5904\u7406 ": "Processed ",
      " \u4E2A\u8282\u70B9": " nodes",
      "\u6279\u91CF\u79FB\u52A8\u5B8C\u6210\uFF1A": "Batch move done: ",
      "\u5DF2\u4FEE\u6539 ": "Modified ",
      " \u4E2A\u8282\u70B9\u7C7B\u578B\u4E3A\u300C": ' nodes type to "',
      "\u5DF2\u6807\u8BB0\u5B8C\u6210/\u53D6\u6D88\u5B8C\u6210 ": "Toggled completion for ",
      "\u5DF2\u6807\u8BB0\u5B8C\u6210\uFF1A": "Marked done: ",
      "\u5DF2\u53D6\u6D88\u6807\u8BB0\uFF1A": "Unmarked: ",
      "\u6807\u8BB0\u5931\u8D25\uFF1A": "Mark failed: ",
      "\u5DF2\u6807\u8BB0\u4E3B\u7B14\u8BB0\uFF1A": "Marked as main: ",
      "\u5DF2\u53D6\u6D88\u4E3B\u7B14\u8BB0\uFF1A": "Unmarked main: ",
      "\u64CD\u4F5C\u5931\u8D25\uFF1A": "Operation failed: ",
      "\u5DF2\u4FEE\u6539\u7C7B\u578B\uFF1A": "Type changed: ",
      "\u5DF2\u4FEE\u6539\u65E5\u671F\uFF1A": "Date changed: ",
      "\u6CA1\u6709\u4E3B\u7B14\u8BB0\uFF08main: true\uFF09": "No main note (main: true)",
      \u6CA1\u6709\u53EF\u641C\u7D22\u7684\u7B14\u8BB0: "No notes to search",
      \u6CA1\u6709\u53EF\u9009\u7684\u7B14\u8BB0: "No notes to select",
      \u6CA1\u6709\u6709\u6548\u7684\u7B14\u8BB0: "No valid notes",
      "\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u5939\u5931\u8D25\uFF1A": "Failed to create template folder: ",
      "\u6A21\u677F\u5DF2\u5B58\u5728\uFF1A": "Template already exists: ",
      "\u521B\u5EFA\u6A21\u677F\u5931\u8D25\uFF1A": "Failed to create template: ",
      "\u5DF2\u521B\u5EFA\u6A21\u677F\u5E76\u8BBE\u4E3A\u9ED8\u8BA4\uFF1A": "Template created and set as default: ",
      "\u5DF2\u521B\u5EFA\u4E3B\u7B14\u8BB0\u300C": 'Created main note "',
      "\u521B\u5EFA\u5931\u8D25\uFF1A": "Create failed: ",
      \u91CC\u6CA1\u6709\u7D22\u5F15\u6587\u4EF6: " has no index file",
      \u8BE5\u7D22\u5F15\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u7B14\u8BB0\u94FE\u63A5: "No recognizable note links in this index file",
      "\u6A21\u677F\u5B57\u6BB5\u4E0E\u914D\u7F6E\u4E0D\u4E00\u81F4\uFF1A": "Template fields mismatch: ",
      "\u3002\u5DF2\u7528\u914D\u7F6E\u5B57\u6BB5\u540D\u521B\u5EFA\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6A21\u677F\u3002": ". Created with config field names, please update the template.",
      "\u5DF2\u521B\u5EFA\uFF0C\u4F46\u89C6\u56FE\u6682\u672A\u5237\u65B0\uFF0C\u8BF7\u70B9\u5237\u65B0": "Created, but view not refreshed. Click refresh.",
      "\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6\uFF0C\u65E0\u6CD5\u65B0\u589E\u5B50\u8282\u70B9": "This node has no file, cannot add child",
      "\u5DF2\u521B\u5EFA\u300C": 'Created "',
      "\u5E76\u5173\u8054\u5230\u300C": '" and linked to "',
      \u5DF2\u590D\u5236\u7EDF\u8BA1\u6458\u8981: "Stats summary copied",
      \u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0: "Please enter a type name",
      "\u7C7B\u578B\u5DF2\u5B58\u5728\uFF1A": "Type already exists: ",
      "\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A": "Config exported to vault root: ",
      \u914D\u7F6E\u5DF2\u5BFC\u5165: "Config imported",
      "\u5BFC\u5165\u5931\u8D25\uFF1A": "Import failed: ",
      \u5DF2\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E: "Config reset to defaults",
      \u6807\u9898: "Title",
      "\u5199\u5165\u7B14\u8BB0\u7684 type \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009": "Write to note's type field, optional",
      \u6A21\u677F: "Template",
      \u4E0D\u540C\u7C7B\u578B\u53EF\u4F7F\u7528\u4E0D\u540C\u6A21\u677F: "Different types can use different templates",
      "\u6807\u8BB0\u4E3A\u5BFC\u56FE\u4E3B\u5165\u53E3\uFF08": "Mark as mindmap entry point (",
      ": true\uFF09": ": true)",
      \u65B0\u6587\u4EF6\u540D: "New filename",
      \u4E0D\u9009: "None",
      \u7B14\u8BB0\u6587\u4EF6\u5939: "Notes folder",
      \u5B58\u653E\u5361\u7247\u7B14\u8BB0\u7684\u76EE\u5F55: "Directory for card notes",
      \u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u5939: "Keyword index folder",
      \u5B58\u653E\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u7684\u76EE\u5F55: "Directory for keyword index files",
      \u6A21\u677F\u6587\u4EF6\u5939: "Template folder",
      "\u6A21\u677F\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u65B0\u5EFA\u8282\u70B9\u65F6\u6A21\u677F\u4E0B\u62C9\u5217\u8868\u4ECE\u6B64\u6587\u4EF6\u5939\u8BFB\u53D6": "Template files folder, used for new node template dropdown",
      \u9ED8\u8BA4\u6A21\u677F: "Default template",
      "\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u6A21\u677F\uFF08\u53EF\u9009\uFF09": "Default template for new nodes (optional)",
      \u5B50\u8282\u70B9\u94FE\u63A5\u5B57\u6BB5: "Child link field",
      "\u7236\u7B14\u8BB0\u4E2D\u5B58\u653E\u5B50\u7B14\u8BB0\u94FE\u63A5\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 children\uFF09": "Field name in parent note for child links (default: children)",
      \u7236\u8282\u70B9\u53CD\u5411\u94FE\u63A5\u5B57\u6BB5: "Parent backlink field",
      "\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u5199\u5165\u5B50\u7B14\u8BB0\u7684\u7236\u94FE\u63A5\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 parent\uFF09": "Field name in child note for parent backlink (default: parent)",
      \u4E3B\u7B14\u8BB0\u6807\u8BB0\u5B57\u6BB5: "Main note field",
      "\u6807\u8BB0\u5BFC\u56FE\u4E3B\u5165\u53E3\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 main\uFF09": "Field name for main note marker (default: main)",
      \u5B8C\u6210\u72B6\u6001\u5B57\u6BB5: "Status field",
      "\u6807\u8BB0\u7B14\u8BB0\u662F\u5426\u5B8C\u6210\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 status\uFF09": "Field name for completion status (default: status)",
      \u7C7B\u578B\u5B57\u6BB5: "Type field",
      "\u7B14\u8BB0\u7C7B\u578B\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 type\uFF09": "Field name for note type (default: type)",
      \u65E5\u671F\u5B57\u6BB5: "Date field",
      "\u7B14\u8BB0\u521B\u5EFA\u65E5\u671F\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 date\uFF09": "Field name for note date (default: date)",
      \u6807\u9898\u5B57\u6BB5: "Title field",
      "\u7B14\u8BB0\u6807\u9898\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 title\uFF09\u3002frontmatter \u4E2D\u6709\u8BE5\u5B57\u6BB5\u65F6\u8282\u70B9\u663E\u793A\u5176\u503C\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u540D\uFF1B\u91CD\u547D\u540D\u65F6\u540C\u6B65\u66F4\u65B0\u8BE5\u5B57\u6BB5": "Field name for note title (default: title). Shows frontmatter value if present, otherwise filename; synced on rename",
      \u9ED8\u8BA4\u663E\u793A\u5C42\u6570: "Default depth",
      \u6253\u5F00\u65F6\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42: "Default expand depth on open",
      \u540D\u79F0\u6700\u5927\u5B57\u6570: "Max name length",
      "\u8282\u70B9\u6807\u9898\u6700\u591A\u663E\u793A\u7684\u5B57\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7\uFF1B0 = \u663E\u793A\u5168\u90E8\u540D\u79F0": "Max characters for node title; 0 = show full name",
      \u6C34\u5E73\u95F4\u8DDD: "Horizontal gap",
      "\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09": "Horizontal distance between parent and child",
      \u5782\u76F4\u95F4\u8DDD: "Vertical gap",
      \u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB: "Vertical distance between siblings",
      \u8282\u70B9\u9AD8\u5EA6: "Node height",
      \u8282\u70B9\u5361\u7247\u9AD8\u5EA6: "Node card height",
      \u65B0\u5EFA\u65F6\u5199\u5165\u53CD\u5411\u94FE\u63A5: "Write backlink on create",
      "\u521B\u5EFA\u5B50\u8282\u70B9\u65F6\uFF0C\u5728\u5B50\u7B14\u8BB0\u91CC\u5199\u5165\u6307\u5411\u7236\u7B14\u8BB0\u7684 parent \u5B57\u6BB5\uFF08\u7EAF\u6587\u672C\u6587\u4EF6\u540D\uFF0C\u975E wikilink\uFF0C\u5173\u7CFB\u56FE\u8C31\u4E0D\u663E\u793A\u53CC\u5411\u7BAD\u5934\uFF09": "Write parent field in child note on creation (plain text, not wikilink)",
      \u81EA\u52A8\u5B9A\u4F4D\u5F53\u524D\u7B14\u8BB0: "Auto-locate current note",
      "\u6253\u5F00\u7B14\u8BB0\u65F6\uFF0C\u5BFC\u56FE\u81EA\u52A8\u5C55\u5F00\u5176\u6240\u5728\u5206\u652F\u3001\u9009\u4E2D\u5E76\u5C45\u4E2D\u8BE5\u8282\u70B9": "Auto-expand and center current note's branch on open",
      \u663E\u793A\u521B\u5EFA\u65F6\u95F4: "Show creation time",
      "\u4E0E\u7C7B\u578B/\u5B50\u6570\u540C\u884C\u663E\u793A\u521B\u5EFA\u65E5\u671F\uFF08\u4F18\u5148\u53D6 frontmatter \u7684 date \u5B57\u6BB5\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF09": "Show creation date alongside type/child count",
      \u663E\u793A\u7C7B\u578B: "Show type",
      "\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A type \u6587\u672C": "Show type text on node card",
      \u663E\u793A\u5B50\u8282\u70B9\u6570: "Show child count",
      \u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A\u5B50\u8282\u70B9\u6570\u91CF: "Show child count on node card",
      \u663E\u793A\u6253\u5F00\u56FE\u6807: "Show open icon",
      "\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \u270E \u6253\u5F00\u7B14\u8BB0\u6309\u94AE": "Show \u270E open button on node",
      \u663E\u793A\u65B0\u589E\u56FE\u6807: "Show add icon",
      "\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \uFF0B \u65B0\u589E\u5B50\u8282\u70B9\u6309\u94AE": "Show \uFF0B add child button on node",
      \u66F2\u7EBF\u8FDE\u63A5: "Curve connections",
      \u8282\u70B9\u4E4B\u95F4\u7528\u66F2\u7EBF\u8FD8\u662F\u76F4\u7EBF: "Use curves or straight lines between nodes",
      \u5E03\u5C40\u65B9\u5411: "Layout direction",
      "\u6A2A\u5411\uFF1A\u4ECE\u5DE6\u5230\u53F3\u5C55\u5F00\u5B50\u8282\u70B9\uFF1B\u7EB5\u5411\uFF1A\u4ECE\u4E0A\u5230\u4E0B\u5C55\u5F00\u5B50\u8282\u70B9": "Horizontal: left to right; Vertical: top to bottom",
      "\u6A2A\u5411\uFF08\u5DE6\u2192\u53F3\uFF09": "Horizontal (L\u2192R)",
      "\u7EB5\u5411\uFF08\u4E0A\u2192\u4E0B\uFF09": "Vertical (T\u2192B)",
      \u4E3B\u8272: "Primary color",
      "\u56FE\u6807\u6309\u94AE\u3001\u8FDE\u63A5\u7EBF\u7B49\u754C\u9762\u5143\u7D20\u989C\u8272": "Icon buttons, connection lines and other UI element color",
      \u4E3B\u7B14\u8BB0\u989C\u8272: "Main note color",
      "main: true \u8282\u70B9\u989C\u8272": "Color for main: true nodes",
      \u91CD\u590D\u8282\u70B9\u989C\u8272: "Duplicate color",
      "\u540C\u4E00\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\u65F6\uFF0C\u5176\u72B6\u6001\u5706\u70B9\u989C\u8272": "Color for duplicate node indicator",
      \u9009\u4E2D\u989C\u8272: "Selected color",
      \u5355\u51FB\u9009\u4E2D\u7684\u8282\u70B9\u9AD8\u4EAE\u989C\u8272: "Highlight color for selected node",
      \u5B8C\u6210\u8272: "Done color",
      "status \u52FE\u9009\u540E\u8282\u70B9\u7684\u6807\u8BB0\u8272\uFF08\u9ED8\u8BA4\u7EFF\u8272\uFF09": "Color for completed nodes (default: green)",
      \u9ED8\u8BA4\u7C7B\u578B: "Default type",
      "\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u7C7B\u578B\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09": "Default type for new child nodes",
      \u6DFB\u52A0\u7C7B\u578B: "Add type",
      "\u8F93\u5165\u540D\u79F0\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272": "Enter name and press Enter or click Add",
      "type \u4E3A\u300C": 'Color for type "',
      "\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272": '" border',
      \u5BFC\u51FA\u914D\u7F6E: "Export config",
      "\u5C06\u5F53\u524D\u6240\u6709\u8BBE\u7F6E\u5BFC\u51FA\u4E3A JSON \u6587\u4EF6": "Export all settings as JSON",
      \u5BFC\u5165\u914D\u7F6E: "Import config",
      "\u4ECE JSON \u6587\u4EF6\u5BFC\u5165\u8BBE\u7F6E\uFF08\u4F1A\u8986\u76D6\u5F53\u524D\u914D\u7F6E\uFF09": "Import settings from JSON (overwrites current)",
      \u6062\u590D\u9ED8\u8BA4\u914D\u7F6E: "Reset to defaults",
      "\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\uFF08\u4E0D\u4F1A\u5220\u9664\u7B14\u8BB0\uFF09": "Reset all settings to defaults (does not delete notes)",
      "\u7C7B\u578B\u540D\u79F0\uFF0C\u5982\uFF1A\u5F85\u529E": "Type name, e.g.: Todo",
      \u4E0A\u79FB: "Move up",
      \u4E0B\u79FB: "Move down",
      "\u5220\u9664\u7C7B\u578B\uFF1A": "Delete type: ",
      \u8BED\u8A00: "Language",
      "\u754C\u9762\u8BED\u8A00\uFF08\u81EA\u52A8\u8DDF\u968F Obsidian \u8BBE\u7F6E\uFF09": "Interface language (auto follows Obsidian setting)",
      \u81EA\u52A8: "Auto",
      \u6253\u5F00\u7B14\u8BB0: "Open note",
      \u65B0\u589E\u5B50\u8282\u70B9: "Add child",
      \u805A\u7126\u5230\u6B64\u8282\u70B9: "Focus here",
      \u8DF3\u5230\u4E0A\u7EA7: "Go to parent",
      \u4FEE\u6539\u7C7B\u578B: "Change type",
      \u4FEE\u6539\u65E5\u671F: "Change date",
      \u6298\u53E0\u5B50\u8282\u70B9: "Collapse children",
      \u5C55\u5F00\u5B50\u8282\u70B9: "Expand children",
      \u590D\u5236\u94FE\u63A5: "Copy link",
      \u590D\u5236\u5B50\u6811\u5927\u7EB2: "Copy subtree outline",
      \u79FB\u52A8\u5230\u7236\u5361: "Move to parent",
      \u540C\u7EA7\u4E4B\u524D: "Before sibling",
      \u540C\u7EA7\u4E4B\u540E: "After sibling",
      "\u79FB\u9664\u5173\u8054\uFF08\u4FDD\u7559\u6587\u4EF6\uFF09": "Remove association (keep file)",
      \u5220\u9664\u8282\u70B9: "Delete node",
      "\u5BFC\u51FA SVG": "Export SVG",
      "\u5BFC\u51FA PNG": "Export PNG",
      "\u5BFC\u51FA Markdown \u5927\u7EB2": "Export Markdown outline",
      \u591A\u9009\u7B14\u8BB0\u663E\u793A\u5BFC\u56FE: "Multi-select notes for mindmap",
      "\u641C\u7D22\u5E76\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\uFF0C\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A\uFF08\u65E0\u9700\u5173\u8054\uFF09": "Search and select multiple notes to show on one mindmap",
      "\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026": "Search note titles\u2026",
      \u65E0\u7C7B\u578B: "No type",
      \u5168\u90E8: "All",
      \u975E\u4E3B\u7B14\u8BB0: "Non-main",
      \u5173\u8054: "Linked",
      \u672A\u5173\u8054: "Unlinked",
      \u5DF2\u5173\u8054: "Linked",
      "\u5DF2\u9009 ": "Selected ",
      " \u7BC7\u7B14\u8BB0": " notes",
      \u65E0\u5339\u914D\u7ED3\u679C: "No matches",
      "\u4EC5\u663E\u793A\u524D ": "Showing first ",
      " \u6761\uFF0C\u8BF7\u641C\u7D22\u7F29\u5C0F\u8303\u56F4": " results, refine search",
      \u65B0\u5EFA\u8282\u70B9: "New node",
      \u65B0\u5EFA\u5B50\u8282\u70B9: "New child node",
      "\u7236\u8282\u70B9\uFF1A": "Parent: ",
      \u91CD\u547D\u540D\u6587\u4EF6: "Rename file",
      "\u5F53\u524D\uFF1A": "Current: ",
      "\u5C55\u5F00/\u6298\u53E0\u5DE5\u5177\u680F": "Expand/collapse toolbar",
      \u67E5\u770B\u7EDF\u8BA1\u5DE5\u4F5C\u53F0: "View statistics dashboard",
      "\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u7B14\u8BB0\uFF08main: true\uFF09": "Select mindmap root note (main: true)",
      \u6309\u5173\u952E\u8BCD\u7D22\u5F15\u8FC7\u6EE4: "Filter by keyword index",
      \u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9: "Search any note as mindmap root",
      \u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A: "Select multiple notes to show together",
      \u521B\u5EFA\u72EC\u7ACB\u7B14\u8BB0: "Create standalone note",
      "\u51CF\u5C11\u663E\u793A\u5C42\u6570\uFF08\u5C421=\u53EA\u770B\u6839\u7B14\u8BB0\uFF09": "Decrease depth (level 1 = root only)",
      \u589E\u52A0\u663E\u793A\u5C42\u6570: "Increase depth",
      \u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE\u4F4D\u7F6E: "Return to previous view",
      \u91CD\u65B0\u8BFB\u53D6\u76EE\u5F55\u4E0E\u7B14\u8BB0\u6570\u636E: "Reload directory and note data",
      \u7F29\u653E\u81F3\u5B8C\u6574\u663E\u793A\u6240\u6709\u8282\u70B9: "Zoom to fit all nodes",
      \u5C55\u5F00\u6240\u6709\u8282\u70B9: "Expand all nodes",
      \u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9: "Collapse all children",
      "\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u6A2A\u5411/\u7EB5\u5411\uFF09": "Toggle layout direction",
      \u67E5\u770B\u952E\u76D8\u5FEB\u6377\u952E\u8BF4\u660E: "View keyboard shortcuts",
      "\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2": "Export mindmap as SVG / PNG / Markdown",
      \u5207\u6362\u663E\u793A\u9009\u9879: "Toggle display options",
      "\u8FDB\u5165\u6279\u91CF\u6A21\u5F0F\uFF1A\u5355\u51FB\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u540E\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664": "Batch mode: click to select nodes, then move/delete",
      \u9009\u4E2D\u5BFC\u56FE\u4E2D\u6240\u6709\u8282\u70B9: "Select all nodes in mindmap",
      \u53CD\u9009\u5F53\u524D\u9009\u4E2D\u72B6\u6001: "Invert selection",
      \u628A\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u6307\u5B9A\u7236\u7B14\u8BB0\u4E0B: "Move selected nodes to a parent",
      "\u5220\u9664\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u53CA\u5176\u7B14\u8BB0\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF09": "Delete selected nodes and their notes (trash)",
      \u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u7C7B\u578B: "Change type of selected nodes",
      \u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u5DF2\u5B8C\u6210: "Mark selected nodes as done",
      \u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u5B8C\u6210\u6807\u8BB0: "Unmark selected nodes",
      "\u663E\u793A\u8282\u70B9\u64CD\u4F5C\u83DC\u5355\uFF08\u7B49\u540C\u53F3\u952E/\u957F\u6309\uFF09\uFF1A\u6253\u5F00/\u65B0\u589E/\u805A\u7126/\u4E0A\u7EA7/\u5B8C\u6210/\u4E3B\u7B14\u8BB0/\u91CD\u547D\u540D/\u590D\u5236/\u79FB\u52A8/\u6392\u5E8F/\u5220\u9664": "Show node menu (same as right-click/long-press)",
      "\u5DF2\u9009\uFF1A": "Selected: ",
      " \uFF5C ": " | ",
      "\u5173\u952E\u8BCD\uFF1A": "Keyword: ",
      "\u591A\u9009\u5BFC\u56FE\uFF08": "Multi-mindmap (",
      " \u7BC7\uFF09": " notes)",
      "\u8DEF\u5F84\uFF1A": "Path: ",
      \u672A\u627E\u5230\u7B14\u8BB0: "Note not found",
      "\u6CA1\u6709\u627E\u5230\u4E3B\u7B14\u8BB0\uFF08": "No main note found (",
      ": true\uFF09\u3002\u53EF\u5728\u5BFC\u56FE\u4E2D\u53F3\u952E/\u957F\u6309\u4EFB\u610F\u8282\u70B9\u6807\u8BB0\u4E3A\u4E3B\u7B14\u8BB0\u3002": ": true). Right-click/long-press any node to mark as main.",
      \u952E\u76D8\u5FEB\u6377\u952E: "Keyboard Shortcuts",
      "\u4E0A/\u4E0B\u5BFC\u822A\u8282\u70B9": "Up/Down: navigate nodes",
      "\u5DE6\uFF1A\u6298\u53E0/\u5230\u7236\u8282\u70B9 \xB7 \u53F3\uFF1A\u5C55\u5F00/\u5230\u5B50\u8282\u70B9": "Left: collapse/go to parent \xB7 Right: expand/go to child",
      "\u5C55\u5F00/\u6298\u53E0\u5F53\u524D\u8282\u70B9": "Space: expand/collapse current",
      \u6253\u5F00\u5F53\u524D\u8282\u70B9\u7B14\u8BB0: "Enter: open current note",
      \u5220\u9664\u5F53\u524D\u8282\u70B9: "Delete: delete current node",
      \u4E3A\u5F53\u524D\u8282\u70B9\u65B0\u589E\u5B50\u8282\u70B9: "N: add child to current",
      \u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE: "B: go back",
      \u6253\u5F00\u641C\u7D22: "/: search",
      "\u53D6\u6D88\u9009\u4E2D / \u9000\u51FA\u6279\u91CF\u6A21\u5F0F": "Esc: cancel / exit batch mode",
      \u79FB\u9664\u5F53\u524D\u5173\u8054: "Remove current association",
      "\u53EA\u79FB\u9664\u5F53\u524D\u7236\u8282\u70B9\u5230\u5B83\u7684\u94FE\u63A5\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559": "Remove link from current parent only, keep file",
      \u79FB\u9664\u6240\u6709\u5173\u8054: "Remove all associations",
      "\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559": "Remove from all parents, keep file",
      \u5220\u9664\u6587\u4EF6: "Delete file",
      \u79FB\u5165\u56DE\u6536\u7AD9\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664: "Move to trash and remove from all parents",
      \u5220\u9664\u5B50\u8282\u70B9: "Delete child nodes",
      "\u542B ": "Contains ",
      " \u4E2A\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u4E00\u5E76\u5220\u9664\uFF1F": " child nodes, delete all?",
      \u4EC5\u5220\u6B64\u8282\u70B9: "Delete this only",
      \u5168\u90E8\u5220\u9664: "Delete all",
      "\u5F53\u524D\u65E5\u671F\uFF1A": "Current date: ",
      \u65E0: "None",
      \u6B22\u8FCE\u4F7F\u7528\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE: "Welcome to Link Mindmap",
      "\u7ED3\u5408\u5362\u66FC\u7B14\u8BB0\u7684\u5C42\u7EA7\u601D\u60F3\uFF0C\u5229\u7528 Obsidian \u5F3A\u5927\u7684\u53CC\u94FE\u529F\u80FD\u5EFA\u7ACB\u7B14\u8BB0\u95F4\u7684\u7236\u5B50\u5173\u7CFB\uFF0C\u53D6\u6D88\u4E86\u7F16\u53F7\u2014\u2014\u6BCF\u4E2A\u8282\u70B9\u5C31\u662F\u4E00\u7BC7\u7B14\u8BB0\uFF0C\u901A\u8FC7 frontmatter \u7684 children/parent \u94FE\u63A5\u81EA\u7136\u5173\u8054\uFF0C\u65E0\u9700\u7EF4\u62A4\u4EFB\u4F55\u7F16\u53F7\u3002": "Inspired by Luhmann's Zettelkasten, builds parent-child relationships via frontmatter links (children/parent). Each node is a note file \u2014 no numbering, no extra data.",
      \u5FEB\u901F\u4E0A\u624B: "Quick Start",
      \u521B\u5EFA\u7B14\u8BB0: "Create note",
      "\u70B9\u51FB\u4E0B\u65B9\u300C\u521B\u5EFA\u7B14\u8BB0\u300D\uFF0C\u8F93\u5165\u6807\u9898\u5373\u53EF\u3002\u521B\u5EFA\u65F6\u53EF\u52FE\u9009\u300C\u4E3B\u7B14\u8BB0\u300D\u4F5C\u4E3A\u5BFC\u56FE\u5165\u53E3\u3002": 'Click "Create note" below, enter a title. Check "Main note" to set as mindmap entry point.',
      \u6DFB\u52A0\u5B50\u8282\u70B9: "Add child",
      "\u521B\u5EFA\u540E\uFF0C\u53F3\u952E/\u957F\u6309\u8282\u70B9 \u2192\u300C\u65B0\u589E\u5B50\u8282\u70B9\u300D\uFF0C\u81EA\u52A8\u5728\u7236\u7B14\u8BB0\u5199\u5165 children \u94FE\u63A5\u3002": 'After creation, right-click/long-press \u2192 "Add child", auto-writes children link.',
      \u67E5\u770B\u5BFC\u56FE: "View mindmap",
      "\u4E3B\u7B14\u8BB0\u81EA\u52A8\u5C55\u5F00\u4E3A\u5BFC\u56FE\u6811\u3002\u62D6\u52A8\u8282\u70B9\u53EF\u79FB\u52A8\uFF0C\u62D6\u52A8\u53F3\u4FA7\u7AEF\u53E3\u53EF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\u3002": "Main note auto-expands as mindmap tree. Drag to move, drag right port to create associations.",
      \u521B\u5EFA\u9ED8\u8BA4\u6A21\u677F: "Create default template",
      \u5DE5\u5177\u680F\u529F\u80FD: "Toolbar",
      "\u7EDF\u8BA1\u6982\u89C8\uFF1A\u7B14\u8BB0\u603B\u6570\u3001\u7C7B\u578B\u5206\u5E03\u3001\u5B8C\u6210\u72B6\u6001\u3001\u521B\u5EFA\u70ED\u529B\u56FE\u3001\u5206\u652F\u5206\u5E03\uFF0C\u70B9\u51FB\u6570\u5B57\u53EF\u7B5B\u9009\u67E5\u770B": "Stats: total notes, type distribution, completion, heatmap, branch distribution",
      "\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u6839\u8282\u70B9\uFF08frontmatter \u4E2D main: true \u7684\u7B14\u8BB0\uFF09": "Select mindmap root (main: true)",
      \u6309\u5173\u952E\u8BCD\u7D22\u5F15\u7B14\u8BB0\u8FC7\u6EE4\u663E\u793A\u5BFC\u56FE: "Filter by keyword index",
      \u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A: "Select multiple notes on one mindmap",
      \u63A7\u5236\u5BFC\u56FE\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42: "Control default expand depth",
      \u4E00\u952E\u5C55\u5F00\u6216\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9: "Expand/collapse all children",
      "\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u5DE6\u2192\u53F3 \u6216 \u4E0A\u2192\u4E0B\uFF09": "Toggle layout (L\u2192R or T\u2192B)",
      "\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2\u6587\u4EF6": "Export as SVG / PNG / Markdown",
      "\u6279\u91CF\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664/\u6539\u7C7B\u578B/\u6807\u8BB0\u5B8C\u6210": "Batch select nodes for move/delete/type/status",
      "\u5207\u6362\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A\u65F6\u95F4\u3001\u7C7B\u578B\u3001\u5B50\u6570\u3001\u56FE\u6807\u7B49": "Toggle display of time/type/count/icons",
      \u8282\u70B9\u64CD\u4F5C: "Node operations",
      "\u83DC\u5355\uFF1A\u6253\u5F00\u3001\u65B0\u589E\u5B50\u8282\u70B9\u3001\u805A\u7126\u3001\u4E0A\u7EA7\u3001\u5B8C\u6210\u3001\u4E3B\u7B14\u8BB0\u3001\u91CD\u547D\u540D\u3001\u590D\u5236\u3001\u79FB\u52A8\u3001\u5220\u9664": "Menu: open, add child, focus, parent, done, main, rename, copy, move, delete",
      \u6253\u5F00\u7B14\u8BB0\u6587\u4EF6: "Open note file",
      \u79FB\u52A8\u8282\u70B9\u5230\u5176\u4ED6\u7236\u7B14\u8BB0\u4E0B: "Move node to another parent",
      "\u8FDE\u7EBF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u591A\u7236/\u7F51\u72B6\uFF09": "Drag to create association (multi-parent/network)",
      "\u2191\u2193\u2190\u2192 \u5728\u8282\u70B9\u95F4\u5BFC\u822A": "\u2191\u2193\u2190\u2192 Navigate between nodes",
      "\u5220\u9664\u9009\u4E2D\u8282\u70B9\uFF08\u5F39\u7A97\u9009\u62E9\uFF1A\u79FB\u9664\u5173\u8054/\u5220\u9664\u6587\u4EF6\uFF09": "Delete node (dialog: remove association/delete file)",
      "\u2191 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u524D": "\u2191 Insert before sibling",
      "\u2193 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u540E": "\u2193 Insert after sibling",
      "\u2192 \u4F5C\u4E3A\u5B50\u8282\u70B9": "\u2192 As child",
      "\u4E3B\u7B14\u8BB0\uFF1A\u8BE5\u7B14\u8BB0 main: true\uFF0C\u662F\u5BFC\u56FE\u7684\u4E3B\u5165\u53E3": "Main note: main: true, mindmap entry point",
      "\u5DF2\u5B8C\u6210\uFF1A\u8BE5\u7B14\u8BB0 status: true": "Completed: status: true",
      "\u91CD\u590D\u8282\u70B9\uFF1A\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\u7684\u6302\u70B9\uFF09": "Duplicate: appears multiple times (via extra association)",
      "\u62D6\u52A8\u8FDE\u7EBF\uFF1A\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u76EE\u6807\u6210\u4E3A\u672C\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u539F\u5173\u7CFB\u4FDD\u7559\uFF09": "Drag to link: creates association (target becomes child, original kept)",
      "\u65B0\u589E\u5B50\u8282\u70B9\uFF08\u81EA\u52A8\u5199\u5165\u94FE\u63A5\uFF09": "Add child (auto-writes link)",
      \u8FD4\u56DE\u601D\u7EF4\u5BFC\u56FE: "Back to mindmap",
      \u590D\u5236\u7EDF\u8BA1: "Copy stats",
      "\u628A\u7EDF\u8BA1\u6458\u8981\u590D\u5236\u4E3A Markdown": "Copy stats summary as Markdown",
      "\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u7B14\u8BB0\u3002": " directory has no notes yet.",
      \u7B14\u8BB0\u603B\u6570: "Total notes",
      \u5173\u952E\u8BCD\u7D22\u5F15: "Keyword index",
      \u5DF2\u5B8C\u6210: "Completed",
      \u5F85\u529E\u672A\u5B8C\u6210: "Todo incomplete",
      \u94FE\u63A5\u603B\u6570: "Total links",
      \u5931\u6548\u94FE\u63A5: "Broken links",
      "\u70B9\u51FB\u67E5\u770B\u300C": 'Click to view "',
      "\u300D\u5217\u8868": '" list',
      \u7C7B\u578B\u5206\u5E03: "Type distribution",
      \u672A\u6807\u6CE8: "Untyped",
      \u5B8C\u6210\u72B6\u6001: "Completion status",
      \u672A\u5B8C\u6210: "Incomplete",
      \u672A\u6807\u65E5\u671F: "No date",
      "\u6708\u5EA6\u521B\u5EFA \xB7 \u8FD112\u4E2A\u6708\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u5F53\u6708\u65B0\u589E\uFF09": "Monthly creation \xB7 last 12 months",
      \u6708: "",
      "\u6811\u6DF1\u5EA6\u5206\u5E03\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u8BE5\u5C42\u8282\u70B9\uFF09": "Tree depth distribution",
      \u7B2C: "Level ",
      \u8FD8\u6CA1\u6709\u53EF\u7EDF\u8BA1\u7684\u5C42\u7EA7\u6570\u636E: "No depth data yet",
      "\u521B\u5EFA\u70ED\u529B\u56FE \xB7 ": "Creation heatmap \xB7 ",
      " \u5E74": "",
      \u8FD1\u4E00\u5E74: "Past year",
      "\uFF08\u6309 date \u5B57\u6BB5\uFF09": " (by date field)",
      " \u5929\u6709\u521B\u5EFA \xB7 \u5171 ": " days with creation \xB7 ",
      " \u7BC7": " notes",
      \u8BE5\u65F6\u95F4\u6BB5\u6682\u65E0\u521B\u5EFA\u8BB0\u5F55: "No creation records in this period",
      " \xB7 \u6700\u591A\u4E00\u5929 ": " \xB7 max per day ",
      "\uFF08\u4ECA\u5929\uFF09": " (today)",
      "\u8FC7\u6EE4\u2026": "Filter\u2026",
      "\u6392\u5E8F\uFF1A": "Sort: ",
      \u65E5\u671F: "Date",
      \u540D\u79F0: "Name",
      \u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7B14\u8BB0: "No matching notes",
      "\u5206\u652F\u5206\u5E03 \xB7 \u5B8C\u6210\u8FDB\u5EA6": "Branch distribution \xB7 progress",
      "\u8FD8\u6CA1\u6709 main: true \u7684\u4E3B\u7B14\u8BB0": "No main: true note yet",
      "\uFF0C\u70B9\u51FB\u5728\u5BFC\u56FE\u4E2D\u6253\u5F00": ", click to open in mindmap",
      \u6536\u8D77: "Collapse",
      "\u5C55\u5F00\u5168\u90E8 ": "Expand all ",
      " \u4E2A\u5206\u652F": " branches",
      \u6700\u8FD1\u521B\u5EFA: "Recent created",
      \u6700\u8FD1\u4FEE\u6539: "Recent modified",
      "\uFF0C\u70B9\u51FB\u6253\u5F00\u5173\u952E\u8BCD\u89C6\u56FE": ", click to open keyword view",
      "\uFF0C\u70B9\u51FB\u6253\u5F00\u7B14\u8BB0": ", click to open note",
      \u5728\u5BFC\u56FE\u4E2D\u5B9A\u4F4D: "Locate in mindmap",
      \u603B\u7B14\u8BB0: "Total",
      "Link Mindmap \u8BBE\u7F6E": "Link Mindmap Settings",
      "\u914D\u7F6E\u5BFC\u5165/\u5BFC\u51FA": "Config Import/Export",
      \u79FB\u9664\u5173\u8054: "Remove association",
      \u6279\u91CF\u5220\u9664: "Batch delete",
      "\u5C06\u628A ": "Will move ",
      " \u7BC7\u7B14\u8BB0\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u7684\u94FE\u63A5\u91CC\u79FB\u9664\u3002": " notes to trash and remove from all parents.",
      "\u53E6\u5C06\u79FB\u9664 ": "Also remove ",
      " \u4E2A\u989D\u5916\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09\u3002": " extra associations (files kept).",
      "\u786E\u5B9A\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u5417\uFF1F": "Reset all settings to defaults?",
      \u672A\u547D\u540D: "Untitled",
      "\u9009\u62E9\u65B0\u7684\u7236\u8282\u70B9\u2026": "Select new parent\u2026",
      \u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE: "Link Mindmap",
      "\u8BE5\u8282\u70B9\u6709\u591A\u4E2A\u4E0A\u7EA7\uFF0C\u9009\u62E9\u8981\u524D\u5F80\u7684\u4E0A\u7EA7\u2026": "Multiple parents, choose one\u2026",
      "\u9009\u62E9\u5173\u952E\u8BCD\u7D22\u5F15\u2026": "Select keyword index\u2026",
      "\uFF08\u65E0\u6A21\u677F\uFF09": "(No template)",
      "\u7B5B\u9009\u8282\u70B9\u2026": "Filter nodes\u2026",
      \u9ED8\u8BA4: "Default",
      \u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE: "Open Link Mindmap",
      "\u68C0\u67E5\u94FE\u63A5\uFF08\u5931\u6548/\u672A\u5173\u8054\uFF09": "Check links (broken/unlinked)",
      "\u4FEE\u590D frontmatter \u5F15\u53F7\u95EE\u9898": "Fix frontmatter quote issues",
      "\u5DF2\u4FEE\u590D ": "Fixed ",
      " \u4E2A\u6587\u4EF6\u7684 frontmatter \u5F15\u53F7\u95EE\u9898": " file(s) with frontmatter quote issues",
      "\u672A\u53D1\u73B0\u9700\u8981\u4FEE\u590D\u7684\u5F15\u53F7\u95EE\u9898 \u2713": "No quote issues found \u2713",
      "\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09": "Normalize all note properties (by template)",
      "\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09": "Normalize current note properties (by template)",
      \u8BF7\u5148\u6253\u5F00\u4E00\u7BC7\u7B14\u8BB0: "Please open a note first",
      "\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7": "No matching template found, skipped",
      "\u5DF2\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027 \u2713": "Current note properties normalized \u2713",
      "\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713": "Current note properties already match template \u2713",
      \u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027: "Normalize all note properties",
      "\u6B64\u64CD\u4F5C\u5C06\u6309\u6A21\u677F\u91CD\u6392\u6240\u6709\u7B14\u8BB0\u7684 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\u3002\u5DF2\u6709\u503C\u4E0D\u4F1A\u88AB\u4FEE\u6539\uFF0C\u4F46\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F": "This will reorder frontmatter fields and fill missing fields for all notes based on templates. Existing values will not be modified, but backing up first is recommended. Continue?",
      "\u5DF2\u6574\u7406 ": "Normalized ",
      " \u4E2A\u7B14\u8BB0\u7684\u5C5E\u6027": " note(s) properties",
      "\uFF08\u7B49\uFF09": " (etc.)",
      "\u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7": " note(s) have no matching template, skipped",
      "\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713": "All note properties match templates \u2713",
      "\u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7": " note(s) have no template, skipped",
      \u672A\u627E\u5230\u7B14\u8BB0\u6587\u4EF6: "No note files found",
      "\uFF1B": "; ",
      "\uFF08": " (",
      "\u5171 ": "Total ",
      "\uFF0C\u5931\u6548\u94FE\u63A5 ": ", broken links ",
      "\uFF1A": ": ",
      "\uFF0C\u94FE\u63A5\u5168\u90E8\u6709\u6548 \u2713": ", all links valid \u2713",
      "\uFF1B\u672A\u5173\u8054\u7B14\u8BB0\uFF08\u65E0\u7236\u5F15\u7528\u4E14\u975E\u4E3B\u7B14\u8BB0\uFF09": "; unlinked notes (no parent, not main) ",
      "\uFF1B\u65E0\u672A\u5173\u8054\u7B14\u8BB0 \u2713": "; no unlinked notes \u2713",
      \u5168\u90E8\u7B14\u8BB0: "All notes",
      \u672A\u6807\u6CE8\u7C7B\u578B: "Untyped",
      "\u521B\u5EFA\u4E8E ": "Created ",
      \u7B5B\u9009: "Filter",
      "## \u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE\u5DE5\u4F5C\u53F0\u7EDF\u8BA1 ": "## Link Mindmap Stats ",
      "| \u6307\u6807 | \u6570\u91CF |": "| Metric | Count |",
      "| \u7B14\u8BB0\u603B\u6570 | ": "| Total notes | ",
      "| \u4E3B\u7B14\u8BB0 | ": "| Main notes | ",
      "| \u5173\u952E\u8BCD\u7D22\u5F15 | ": "| Keyword index | ",
      "| \u5DF2\u5B8C\u6210 | ": "| Completed | ",
      "| \u672A\u5173\u8054 | ": "| Unlinked | ",
      "| \u5F85\u529E\u672A\u5B8C\u6210 | ": "| Todo incomplete | ",
      "| \u672A\u6807\u6CE8\u7C7B\u578B | ": "| Untyped | ",
      "| \u672A\u6807\u65E5\u671F | ": "| No date | ",
      "### \u7C7B\u578B\u5206\u5E03": "### Type distribution",
      "| \u7C7B\u578B | \u6570\u91CF | \u5360\u6BD4 |": "| Type | Count | Ratio |",
      "### \u6811\u6DF1\u5EA6\u5206\u5E03": "### Tree depth",
      "| \u5C42\u7EA7 | \u6570\u91CF |": "| Level | Count |",
      "### \u8FD112\u4E2A\u6708\u521B\u5EFA": "### Last 12 months",
      "| \u6708\u4EFD | \u65B0\u589E |": "| Month | New |",
      "### \u5206\u652F\u5206\u5E03\uFF08\u5B8C\u6210/\u603B\u6570\uFF09": "### Branch distribution (done/total)",
      "\u5B50 ": "C",
      "\u3001": ", ",
      \u65F6\u95F4\u7EBF: "Timeline",
      \u6253\u5F00\u65F6\u95F4\u7EBF: "Open Timeline",
      \u5168\u90E8\u7C7B\u578B: "All Types",
      "\u65B0\u2192\u65E7": "New\u2192Old",
      "\u65E7\u2192\u65B0": "Old\u2192New",
      \u5E74: "",
      \u65E0\u65E5\u671F: "No Date",
      \u6682\u65E0\u7B14\u8BB0: "No notes",
      \u6253\u5F00: "Open",
      \u5728\u65B0\u6807\u7B7E\u6253\u5F00: "Open in new tab",
      \u6253\u5F00\u65F6\u95F4\u7EBF\u89C6\u56FE: "Open Timeline View",
      \u5207\u6362\u5230\u65F6\u95F4\u7EBF\u89C6\u56FE: "Switch to Timeline",
      \u8BBE\u7F6E: "Settings",
      \u6253\u5F00\u63D2\u4EF6\u8BBE\u7F6E: "Open plugin settings",
      \u4ECA\u65E5: "Today",
      \u672C\u5468: "This Week",
      \u672C\u6708: "This Month",
      \u672C\u5E74: "This Year",
      \u666E\u901A: "Normal",
      \u5468: "Wk",
      \u6027\u8D28: "Kind",
      \u72B6\u6001: "Status",
      \u6E05\u7A7A: "Clear",
      \u6E05\u7A7A\u6240\u6709\u7B5B\u9009\u6761\u4EF6: "Clear all filters",
      \u5728\u5BFC\u56FE\u4E2D\u663E\u793A: "Show in Mindmap",
      \u6309\u6307\u5B9A\u65E5\u671F\u7B5B\u9009: "Filter by specific date",
      \u8FD1\u4E00\u5468: "Past week",
      \u8FD1\u4E00\u6708: "Past month",
      \u9884\u8BBE: "Preset",
      "\u4FDD\u5B58/\u6062\u590D\u5BFC\u56FE\u72B6\u6001\u9884\u8BBE": "Save/restore mindmap state presets",
      \u6682\u65E0\u9884\u8BBE: "No presets",
      "\u5220\u9664\u9884\u8BBE\u2026": "Delete preset\u2026",
      "\u4FDD\u5B58\u5F53\u524D\u72B6\u6001\u2026": "Save current state\u2026",
      "\u5DF2\u6062\u590D\u9884\u8BBE\uFF1A": "Restored preset: ",
      "\u5DF2\u5220\u9664\u9884\u8BBE\uFF1A": "Deleted preset: ",
      \u4FDD\u5B58\u5BFC\u56FE\u9884\u8BBE: "Save Mindmap Preset",
      \u9884\u8BBE\u540D\u79F0: "Preset name",
      \u8F93\u5165\u9884\u8BBE\u540D\u79F0: "Enter preset name",
      \u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A: "Name cannot be empty",
      \u8986\u76D6\u9884\u8BBE: "Overwrite preset",
      "\u5DF2\u5B58\u5728\u540C\u540D\u9884\u8BBE\u300C": "Preset '",
      "\u300D\uFF0C\u662F\u5426\u8986\u76D6\uFF1F": "' already exists, overwrite?",
      "\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A": "Saved preset: ",
      \u4FDD\u5B58: "Save",
      \u5BFC\u56FE\u9884\u8BBE: "Mindmap Presets",
      \u9884\u8BBE\u4FDD\u5B58\u4F4D\u7F6E: "Preset save location",
      "\u5BFC\u56FE\u9884\u8BBE\u7684\u4FDD\u5B58\u8DEF\u5F84\u3002\u7559\u7A7A\u5219\u4FDD\u5B58\u5728\u63D2\u4EF6\u6570\u636E\u4E2D\uFF08\u968F data.json \u540C\u6B65\uFF09\uFF1B\u586B\u5199 vault \u5185\u6587\u4EF6\u8DEF\u5F84\uFF08\u5982 link-mindmap-presets.json\uFF09\u5219\u4FDD\u5B58\u5230\u8BE5\u6587\u4EF6\uFF0C\u53EF\u968F vault \u540C\u6B65\u5230\u5176\u4ED6\u8BBE\u5907": "Path to save mindmap presets. Empty = save in plugin data (synced via data.json); specify a vault file path (e.g. link-mindmap-presets.json) to save to that file, synced via vault to other devices",
      "\u7559\u7A7A = \u4FDD\u5B58\u5728\u63D2\u4EF6\u6570\u636E\u4E2D": "Empty = save in plugin data",
      \u68C0\u67E5\u94FE\u63A5\u5B8C\u6574\u6027: "Check link integrity",
      \u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5: "Link Integrity Check",
      "\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5\u901A\u8FC7 \u2713": "Link integrity check passed \u2713",
      "\u53D1\u73B0 ": "Found ",
      " \u4E2A\u5931\u6548\u94FE\u63A5\uFF1A": " broken links:",
      "\u5931\u6548\u5B50\u94FE\u63A5\uFF08children \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09": "Broken child links (children \u2192 non-existent notes)",
      "\u5931\u6548\u7236\u94FE\u63A5\uFF08parent \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09": "Broken parent links (parent \u2192 non-existent notes)",
      \u4FEE\u590D\u5168\u90E8: "Fix All",
      " \u4E2A\u6587\u4EF6": " file(s)",
      \u5B57\u6570: "Words",
      "\u2713 \u5B57\u6570": "\u2713 Words",
      "\u5B57 ": "W ",
      "\u5BFC\u51FA Canvas": "Export Canvas",
      "Canvas \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A": "Canvas exported to vault root: ",
      \u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u8282\u70B9: "No nodes to export",
      \u4FEE\u590D\u5931\u6548\u94FE\u63A5: "Fix Broken Links",
      "\u6B64\u64CD\u4F5C\u5C06\u4ECE\u7B14\u8BB0\u7684 children/parent \u5B57\u6BB5\u4E2D\u5220\u9664\u5931\u6548\u94FE\u63A5\uFF0C\u4E0D\u53EF\u64A4\u9500\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F": "This will remove broken links from children/parent fields. Cannot be undone. Please backup first. Continue?",
      \u6807\u8BB0\u4E3B\u7B14\u8BB0: "Mark as Main",
      \u53D6\u6D88\u4E3B\u7B14\u8BB0: "Unmark Main",
      \u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u4E3B\u7B14\u8BB0: "Batch mark selected nodes as main",
      \u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u4E3B\u7B14\u8BB0\u6807\u8BB0: "Batch unmark main from selected nodes",
      \u5F85\u529E: "Todo",
      \u8FDB\u884C\u4E2D: "In Progress",
      \u5DF2\u5F52\u6863: "Archived",
      \u5DF2\u6401\u7F6E: "Snoozed",
      \u65E0\u72B6\u6001: "No Status",
      \u72B6\u6001\u5206\u5E03: "Status Distribution",
      \u72B6\u6001\u914D\u7F6E: "Status Configuration",
      \u6DFB\u52A0\u72B6\u6001: "Add Status",
      "\u72B6\u6001\u6807\u8BC6\uFF0C\u5982\uFF1Atodo": "Status key, e.g.: todo",
      \u8BF7\u8F93\u5165\u72B6\u6001\u6807\u8BC6: "Please enter a status key",
      "\u72B6\u6001\u5DF2\u5B58\u5728\uFF1A": "Status already exists: ",
      "\u5220\u9664\u72B6\u6001\uFF1A": "Delete status: ",
      "\u8F93\u5165\u72B6\u6001\u6807\u8BC6\uFF08\u5982 todo/doing/done\uFF09\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272": "Enter status key (e.g. todo/doing/done) and press Enter or click Add",
      "status \u4E3A\u300C": 'Color for status "',
      \u4FEE\u6539\u72B6\u6001: "Change Status",
      "\u9009\u62E9\u72B6\u6001\u2026": "Select status\u2026",
      "\u6279\u91CF\u9009\u62E9\u72B6\u6001\u2026": "Batch select status\u2026",
      \u6539\u72B6\u6001: "Change Status",
      \u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u72B6\u6001: "Change status of selected nodes",
      "\u5DF2\u4FEE\u6539\u72B6\u6001\uFF1A": "Status changed: ",
      "\u65E0\u72B6\u6001\uFF08\u6E05\u9664\uFF09": "No status (clear)",
      \u72B6\u6001\u5B57\u6BB5: "Status field",
      "\u6807\u8BB0\u7B14\u8BB0\u5DE5\u4F5C\u72B6\u6001\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 status\uFF09": "Field name for work status (default: status)",
      \u9ED8\u8BA4\u72B6\u6001: "Default Status",
      "\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u72B6\u6001\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09": "Default status for new child nodes (can still change or leave empty in the dialog)",
      "\u5199\u5165\u7B14\u8BB0\u7684 status \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009": "Status field for the note, optional",
      "\u72B6\u6001\uFF1A": "Status: ",
      "\uFF1Astatus: ": ": status: ",
      \u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u7C7B\u578B: "Clear invalid types from all notes",
      \u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u72B6\u6001: "Clear invalid statuses from all notes",
      \u6CA1\u6709\u5931\u6548\u7C7B\u578B\u9700\u8981\u6E05\u9664: "No invalid types to clear",
      \u6CA1\u6709\u5931\u6548\u72B6\u6001\u9700\u8981\u6E05\u9664: "No invalid statuses to clear",
      \u6E05\u9664\u5931\u6548\u7C7B\u578B: "Clear Invalid Types",
      \u6E05\u9664\u5931\u6548\u72B6\u6001: "Clear Invalid Statuses",
      " \u4E2A\u7B14\u8BB0\u7684 type \u4E0D\u5728\u914D\u7F6E\u5217\u8868\u4E2D\uFF0C\u5C06\u88AB\u6E05\u9664\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u7B14\u8BB0\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F": " notes have type not in config, will be cleared. Please backup first. Continue?",
      " \u4E2A\u7B14\u8BB0\u7684 status \u4E0D\u5728\u914D\u7F6E\u5217\u8868\u4E2D\uFF0C\u5C06\u88AB\u6E05\u9664\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u7B14\u8BB0\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F": " notes have status not in config, will be cleared. Please backup first. Continue?",
      "\u5DF2\u6E05\u9664 ": "Cleared ",
      " \u4E2A\u7B14\u8BB0\u7684\u5931\u6548\u7C7B\u578B": " notes of invalid types",
      " \u4E2A\u7B14\u8BB0\u7684\u5931\u6548\u72B6\u6001": " notes of invalid statuses",
      " \u4E2A\u8282\u70B9\u72B6\u6001\u4E3A\u300C": ' nodes status to "',
      "\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09": "No type (clear)",
      "\u6279\u91CF\u9009\u62E9\u7C7B\u578B\u2026": "Batch select type\u2026",
      "\u9009\u62E9\u7C7B\u578B\u2026": "Select type\u2026",
      \u6536\u96C6: "Collection",
      \u7075\u611F: "Inspiration",
      \u95EA\u5FF5: "Fleeting",
      \u6587\u732E: "Literature",
      \u6C38\u4E45: "Permanent",
      \u8D44\u6E90: "Resource",
      "\u663E\u793A\u8282\u70B9\u64CD\u4F5C\u83DC\u5355\uFF08\u7B49\u540C\u53F3\u952E/\u957F\u6309\uFF09\uFF1A\u6253\u5F00/\u65B0\u589E/\u805A\u7126/\u4E0A\u7EA7/\u72B6\u6001/\u4E3B\u7B14\u8BB0/\u91CD\u547D\u540D/\u590D\u5236/\u79FB\u52A8/\u6392\u5E8F/\u5220\u9664": "Show node menu (same as right-click/long-press)",
      "\u6279\u91CF\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664/\u6539\u7C7B\u578B/\u6539\u72B6\u6001": "Batch select nodes for move/delete/type/status",
      "\u7EDF\u8BA1\u6982\u89C8\uFF1A\u7B14\u8BB0\u603B\u6570\u3001\u7C7B\u578B\u5206\u5E03\u3001\u72B6\u6001\u5206\u5E03\u3001\u521B\u5EFA\u70ED\u529B\u56FE\u3001\u5206\u652F\u5206\u5E03\uFF0C\u70B9\u51FB\u6570\u5B57\u53EF\u7B5B\u9009\u67E5\u770B": "Stats: total notes, type distribution, status distribution, heatmap, branch distribution",
      "### \u5206\u652F\u5206\u5E03\uFF08\u5DF2\u5B8C\u6210/\u603B\u6570\uFF09": "### Branch distribution (done/total)",
      "\u83DC\u5355\uFF1A\u6253\u5F00\u3001\u65B0\u589E\u5B50\u8282\u70B9\u3001\u805A\u7126\u3001\u4E0A\u7EA7\u3001\u72B6\u6001\u3001\u4E3B\u7B14\u8BB0\u3001\u91CD\u547D\u540D\u3001\u590D\u5236\u3001\u79FB\u52A8\u3001\u5220\u9664": "Menu: open, add child, focus, parent, status, main, rename, copy, move, delete",
      \u57FA\u672C\u8BBE\u7F6E: "Basic Settings",
      \u5B57\u6BB5\u540D\u914D\u7F6E: "Field Names",
      \u5E03\u5C40\u914D\u7F6E: "Layout",
      \u884C\u4E3A\u914D\u7F6E: "Behavior",
      \u663E\u793A\u914D\u7F6E: "Display",
      \u989C\u8272\u914D\u7F6E: "Colors",
      \u7C7B\u578B\u914D\u7F6E: "Type Configuration",
      "\u4FDD\u5B58/\u6062\u590D/\u5220\u9664\u5F53\u524D\u5BFC\u56FE\u7684\u5C55\u5F00\u72B6\u6001\u4E0E\u4F4D\u7F6E\u9884\u8BBE": "Save/restore/delete current mindmap expansion state and position presets",
      "\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2 / Obsidian Canvas \u6587\u4EF6": "Export mindmap as SVG / PNG / Markdown outline / Obsidian Canvas file",
      \u94FE\u63A5\u68C0\u67E5: "Link Check",
      "\u626B\u63CF\u5931\u6548\u94FE\u63A5\u5E76\u4FEE\u590D\uFF0C\u68C0\u67E5\u672A\u5173\u8054\u7684\u5B64\u7ACB\u7B14\u8BB0": "Scan and fix broken links, check unassociated orphan notes",
      \u89C6\u89C9\u8BF4\u660E: "Visual Guide",
      \u8FB9\u6846\u989C\u8272: "Border color",
      "\u8868\u793A\u7B14\u8BB0\u7C7B\u578B\uFF08\u6536\u96C6/\u7075\u611F/\u95EA\u5FF5/\u6587\u732E/\u6C38\u4E45/\u8D44\u6E90\uFF09\uFF0C\u5728\u8BBE\u7F6E\u4E2D\u81EA\u5B9A\u4E49\u989C\u8272": "Indicates note type (Collection/Inspiration/Fleeting/Literature/Permanent/Resource), customizable in settings",
      \u5DE6\u4FA7\u5706\u70B9: "Left dot",
      "\u8868\u793A\u5DE5\u4F5C\u72B6\u6001\uFF08\u5F85\u529E/\u8FDB\u884C\u4E2D/\u5DF2\u5B8C\u6210/\u5DF2\u5F52\u6863/\u5DF2\u6401\u7F6E\uFF09\uFF0C\u4E0D\u540C\u72B6\u6001\u4E0D\u540C\u989C\u8272": "Indicates work status (Todo/In Progress/Completed/Archived/Snoozed), different color per status",
      \u6A59\u8272\u5706\u70B9: "Orange dot",
      "\u4E3B\u7B14\u8BB0\u6807\u8BB0\uFF08main: true\uFF09\uFF0C\u662F\u5BFC\u56FE\u7684\u5165\u53E3\u8282\u70B9": "Main note marker (main: true), the entry point of the mindmap",
      \u7D2B\u8272\u5706\u70B9: "Purple dot",
      "\u91CD\u590D\u8282\u70B9\uFF0C\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u88AB\u591A\u5904\u5173\u8054\u5F15\u5165": "Duplicate node, this note is referenced multiple times in the mindmap",
      \u865A\u7EBF\u534A\u900F\u660E: "Dashed semi-transparent",
      "\u5DF2\u5F52\u6863\u8282\u70B9\uFF0C\u4FDD\u7559\u94FE\u63A5\u4F46\u964D\u4F4E\u89C6\u89C9\u6743\u91CD": "Archived node, links preserved but visually de-emphasized",
      \u5E2E\u52A9: "Help",
      \u67E5\u770B\u4F7F\u7528\u5E2E\u52A9: "Show usage help",
      \u8DF3\u8F6C\u5230: "Jump to",
      "\u8DF3\u8F6C\u5230\u2026": "Jump to\u2026"
    }
  }, Kt = "zh";
  function Ee(b) {
    Kt = b || "zh";
  }
  function De() {
    return Kt;
  }
  function Me(b, t) {
    let n = oe[Kt] && oe[Kt][b] || b;
    if (t) for (let i in t) n = n.split("{" + i + "}").join(t[i]);
    return n;
  }
  le.exports = { t: Me, setLang: Ee, getLang: De };
});

// ../src.js
var _ = (b, t) => b, Le = require("obsidian"), {
  Plugin: Pe,
  ItemView: Ie,
  Notice: v,
  Modal: gt,
  Setting: R,
  PluginSettingTab: Ne,
  TFile: Mt,
  TFolder: Ye,
  normalizePath: et,
  FuzzySuggestModal: pe,
  setIcon: ce,
  Menu: Bt,
  MarkdownRenderer: Re,
  Component: Be
} = Le, { t: e, setLang: he } = re(), mt = "link-mindmap-view", Ve = "http://www.w3.org/2000/svg", ue = {
  language: "auto",
  mainFolder: "01-\u7B14\u8BB0",
  indexFolder: "02-\u7D22\u5F15",
  templatePath: "",
  templateFolder: "99-\u6A21\u677F",
  linkField: "children",
  backField: "parent",
  zkField: "main",
  statusField: "status",
  typeField: "type",
  dateField: "date",
  titleField: "title",
  defaultDepth: 3,
  nodeHeight: 46,
  gapX: 60,
  gapY: 8,
  accent: "#6c8cff",
  mainColor: "#f2a65a",
  multiColor: "#b07cff",
  showCreated: !0,
  showType: !0,
  showChildCount: !0,
  showWordCount: !1,
  showOpenIcon: !0,
  showAddIcon: !0,
  autoLocate: !0,
  autoAddBackLink: !0,
  selectedColor: "#e5534b",
  maxTitleLen: 0,
  curve: !0,
  layoutDir: "h",
  defaultType: "",
  defaultStatus: "",
  typeTemplates: {},
  typeColors: {
    \u6536\u96C6: "#e5534b",
    \u7075\u611F: "#f59e0b",
    \u95EA\u5FF5: "#3b82f6",
    \u6587\u732E: "#14b8a6",
    \u6C38\u4E45: "#8b5cf6",
    \u8D44\u6E90: "#64748b"
  },
  statusColors: {
    \u5F85\u529E: "#ef4444",
    \u8FDB\u884C\u4E2D: "#f97316",
    \u5DF2\u5B8C\u6210: "#22c55e",
    \u5DF2\u5F52\u6863: "#94a3b8",
    \u5DF2\u6401\u7F6E: "#d946ef"
  },
  savedViews: [],
  savedViewLocation: "",
  settingSections: ["basic", "fields", "layout", "behavior", "display", "colors", "types", "statuses", "presets", "io"]
};
function ot(b) {
  return b ? e(b) : "";
}
_(ot, "statusLabel");
function ct(b) {
  return b ? e(b) : "";
}
_(ct, "typeLabel");
function te(b, t) {
  return t && (b.statusColors || {})[t] || null;
}
_(te, "statusColorOf");
function Ut(b) {
  if (b == null) return "";
  if (b === !0 || String(b) === "true") return "\u5DF2\u5B8C\u6210";
  if (b === !1 || String(b) === "false" || String(b).trim() === "") return "";
  let t = String(b).trim();
  return { todo: "\u5F85\u529E", doing: "\u8FDB\u884C\u4E2D", done: "\u5DF2\u5B8C\u6210", archived: "\u5DF2\u5F52\u6863", snoozed: "\u5DF2\u6401\u7F6E" }[t] || t;
}
_(Ut, "normalizeStatus");
function Vt(b) {
  return b == null ? [] : Array.isArray(b) ? b.slice() : [b];
}
_(Vt, "toArr");
function _t(b) {
  return String(b ?? "").replace(/^\[\[/, "").replace(/\]\]$/, "").split("|")[0].split("#")[0].split("^")[0].trim();
}
_(_t, "cleanLink");
function ee(b) {
  let t = [], n = /* @__PURE__ */ _((i) => {
    if (i == null) return;
    let a = String(i), s = /\[\[([^\[\]]+?)\]\]/g, o, c = !1;
    for (; (o = s.exec(a)) !== null; )
      c = !0, t.push(_t(o[1]));
    if (!c) {
      let d = _t(a.replace(/^["']+/, "").replace(/["']+$/, ""));
      d && t.push(d);
    }
  }, "push");
  return Array.isArray(b) ? b.forEach(n) : n(b), t;
}
_(ee, "extractLinks");
function Z(b, t) {
  return b = String(b ?? ""), t > 0 && b.length > t ? b.slice(0, t - 1) + "\u2026" : b;
}
_(Z, "truncate");
function fe(b, t) {
  let n = 0;
  for (let i of String(b ?? ""))
    n += /[一-鿿　-〿＀-￯]/.test(i) ? t : t * 0.55;
  return n;
}
_(fe, "estWidth");
var Gt = null, Wt = /* @__PURE__ */ new Map();
function se(b, t, n) {
  let i = b + "|" + t + "|" + (n ? 1 : 0), a = Wt.get(i);
  if (a !== void 0) return a;
  let s;
  try {
    Gt || (Gt = document.createElement("canvas").getContext("2d")), Gt.font = (n ? "600 " : "") + t + 'px Inter, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif', s = Gt.measureText(String(b ?? "")).width;
  } catch {
    s = fe(b, t);
  }
  return Wt.size > 2e3 && Wt.clear(), Wt.set(i, s), s;
}
_(se, "measureTextWidth");
function yt(b) {
  return String(b).replace(/[\\/:*?"<>|#^\[\]]/g, "-").trim() || e("\u672A\u547D\u540D");
}
_(yt, "safeFileName");
function ne(b) {
  let t = String(b ?? "").replace(/^﻿/, "").replace(/\r\n/g, `
`).replace(/^\n+/, ""), n = t.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!n) return { fields: [], body: t };
  let i = [];
  for (let a of n[1].split(`
`)) {
    let s = a.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    s && i.push([s[1], s[2].trim()]);
  }
  return { fields: i, body: t.slice(n[0].length) };
}
_(ne, "splitFrontmatter");
function $t(b) {
  return b = String(b ?? "").trim(), b.length >= 2 && (b.charAt(0) === '"' && b.charAt(b.length - 1) === '"' || b.charAt(0) === "'" && b.charAt(b.length - 1) === "'") ? b.slice(1, -1) : b;
}
_($t, "stripYamlQuotes");
function j(b, t) {
  let n = document.createElementNS(Ve, b);
  if (t) for (let i in t) n.setAttribute(i, t[i]);
  return n;
}
_(j, "svgEl");
function me(b, t, n) {
  let i = b && (b[n || "date"] != null ? b[n || "date"] : "");
  if (i) {
    let a = String(i).match(/(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/);
    if (a) return a[1] + "-" + String(a[2]).padStart(2, "0") + "-" + String(a[3]).padStart(2, "0");
  }
  try {
    let a = t.stat;
    if (a && a.ctime) {
      let s = new Date(a.ctime);
      return s.getFullYear() + "-" + String(s.getMonth() + 1).padStart(2, "0") + "-" + String(s.getDate()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
_(me, "createdOf");
function ge(b) {
  try {
    let t = b.stat;
    if (t && t.ctime) {
      let n = new Date(t.ctime);
      return n.getFullYear() + "-" + String(n.getMonth() + 1).padStart(2, "0") + "-" + String(n.getDate()).padStart(2, "0") + " " + String(n.getHours()).padStart(2, "0") + ":" + String(n.getMinutes()).padStart(2, "0") + ":" + String(n.getSeconds()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
_(ge, "fileCtime");
function At(b, t) {
  let n = et(t || ""), i = [];
  for (let a of b.vault.getMarkdownFiles())
    n && a.path !== n && !a.path.startsWith(n + "/") || i.push(a);
  return i;
}
_(At, "notesInFolder");
function ke(b, t) {
  let n = At(b, t.mainFolder);
  if (!n.length) return !0;
  for (let i of n)
    if ((b.metadataCache.getFileCache(i) || {}).frontmatter) return !0;
  return !1;
}
_(ke, "metadataReady");
function qt(b, t) {
  let n = t.linkField || "children", i = t.backField || "parent", a = t.zkField || "main", s = t.statusField || "status", o = t.typeField || "type", c = t.dateField || "date", d = t.titleField || "title", h = /* @__PURE__ */ new Map();
  for (let r of At(b, t.mainFolder)) {
    let p = (b.metadataCache.getFileCache(r) || {}).frontmatter || {};
    h.set(r.path, {
      file: r,
      title: p[d] ? String(p[d]) : r.basename,
      zk: p[a] === !0 || String(p[a]) === "true",
      status: Ut(p[s]),
      type: p[o] != null ? String(p[o]).trim() : "",
      date: me(p, r, c),
      ctime: ge(r),
      childLinks: ee(p[n]),
      parentLinks: ee(p[i])
    });
  }
  let l = /* @__PURE__ */ new Set();
  for (let r of h.values())
    for (let p of r.childLinks) {
      let m = b.metadataCache.getFirstLinkpathDest(p, r.file.path);
      m && h.has(m.path) && l.add(m.path);
    }
  return { map: h, referenced: l };
}
_(qt, "collectNotes");
function ie(b, t, n, i) {
  let a = i === "child" ? n.childLinks : n.parentLinks, s = [];
  for (let o of a) {
    let c = b.metadataCache.getFirstLinkpathDest(o, n.file.path);
    c && t.has(c.path) && s.push(t.get(c.path));
  }
  return s;
}
_(ie, "resolveLinks");
function zt(b, t, n) {
  let i = /* @__PURE__ */ new Set([n.file.path]), a = /* @__PURE__ */ _((c, d) => {
    let h = {
      note: c,
      parent: d || null,
      children: [],
      expanded: !1,
      isAlias: !1,
      key: (d ? d.key + ">" : ">") + c.file.path
    };
    for (let l of c.childLinks) {
      let r = b.metadataCache.getFirstLinkpathDest(l, c.file.path);
      if (!r) continue;
      let p = t.get(r.path);
      !p || i.has(r.path) || (i.add(r.path), h.children.push(a(p, h)), i.delete(r.path));
    }
    return h;
  }, "mk"), s = a(n, null), o = /* @__PURE__ */ new Map();
  (/* @__PURE__ */ _((function c(d) {
    if (d.note.file) {
      let h = d.note.file.path;
      o.has(h) || o.set(h, []), o.get(h).push(d);
    }
    d.children.forEach(c);
  }), "collect"))(s);
  for (let [c, d] of o) {
    if (d.length < 2) continue;
    let h = t.get(c), l = new Set(h ? ie(b, t, h, "parent").map((p) => p.file.path) : []), r = -1;
    for (let p = 0; p < d.length; p++) {
      let m = d[p].parent && d[p].parent.note.file ? d[p].parent.note.file.path : null;
      if (m && l.has(m)) {
        r = p;
        break;
      }
    }
    r < 0 && (r = 0), d.forEach((p, m) => {
      p.isAlias = m !== r;
    });
  }
  return s;
}
_(zt, "buildTree");
function Xt(b, t) {
  let n = [[b, 1]];
  for (; n.length; ) {
    let [i, a] = n.pop();
    i.expanded = a < t && i.children.length > 0;
    for (let s of i.children) n.push([s, a + 1]);
  }
}
_(Xt, "applyDepth");
function jt(b, t) {
  let n = [], i = [], a = t.layoutDir === "v";
  return (/* @__PURE__ */ _((function s(o) {
    if (!o._w) {
      let d = (1 + (t.showOpenIcon !== !1 ? 1 : 0) + (t.showAddIcon !== !1 ? 1 : 0)) * 24 + 12, h = o.note.title, l = t.maxTitleLen > 0 ? Z(h, t.maxTitleLen) : h, r = se(l, 13, !0), p = !o.note.file, m = t.showCreated && !p && o.note.date ? o.note.date : "", f = t.showType && !p && o.note.type ? ct(o.note.type) : "", u = t.showChildCount && !p && o.children.length ? e("\u5B50 ") + o.children.length : "", C = [f, u, m].filter(Boolean).join(" \xB7 "), x = se(C, 11, !1);
      o._w = Math.max(110, 16 + Math.max(r, x) + d), o._shown = l;
    }
    let c = o.expanded ? o.children : [];
    if (!c.length) {
      o._h = t.nodeHeight, a && (o._subW = o._w);
      return;
    }
    if (a) {
      let d = 0;
      c.forEach((h, l) => {
        s(h), d += (h._subW || h._w) + (l ? t.gapY : 0);
      }), o._h = t.nodeHeight, o._subW = Math.max(o._w, d);
    } else {
      let d = 0;
      c.forEach((h, l) => {
        s(h), d += h._h + (l ? t.gapY : 0);
      }), o._h = Math.max(t.nodeHeight, d);
    }
  }), "measure"))(b), (/* @__PURE__ */ _((function s(o, c, d) {
    o._x = c, o._y = d + o._h / 2, n.push(o);
    let h = o.expanded ? o.children : [];
    if (a) {
      let l = 0;
      h.forEach((m, f) => {
        l += (m._subW || m._w) + (f ? t.gapY : 0);
      });
      let r = c + o._w / 2 - l / 2, p = d + t.nodeHeight + t.gapX;
      for (let m of h) {
        let f = m._subW || m._w;
        s(m, r + (f - m._w) / 2, p), i.push([o, m]), r += f + t.gapY;
      }
    } else {
      let l = d;
      for (let r of h)
        s(r, c + o._w + t.gapX, l), i.push([o, r]), l += r._h + t.gapY;
    }
  }), "place"))(b, 0, 0), { nodes: n, edges: i };
}
_(jt, "layoutTree");
async function Ht(b, t, n, i) {
  await b.fileManager.processFrontMatter(t, (a) => {
    let s = Vt(a[n]);
    s.some((c) => _t(c) === i) || s.push("[[" + i + "]]"), a[n] = s;
  });
}
_(Ht, "addLink");
async function vt(b, t, n, i) {
  let a = !1;
  return await b.fileManager.processFrontMatter(t, (s) => {
    let o = Vt(s[n]), c = o.filter((d) => {
      let h = b.metadataCache.getFirstLinkpathDest(_t(d), t.path);
      return !(h && h.path === i);
    });
    c.length !== o.length && (a = !0), c.length ? s[n] = c : delete s[n];
  }), a;
}
_(vt, "removeLinkByPath");
var we = class extends pe {
  constructor(t, n, i, a) {
    super(t), this.items = n, this.onChoose = i, this.setPlaceholder(a || e("\u641C\u7D22\u2026"));
  }
  getItems() {
    return this.items;
  }
  getItemText(t) {
    return t.label;
  }
  onChooseItem(t) {
    this.onChoose(t);
  }
};
_(we, "PickModal");
var Et = we, ye = class extends gt {
  constructor(t, n, i, a, s, o) {
    if (super(t), this.items = n, this.onChoose = i, this.selected = /* @__PURE__ */ new Map(), this.searchVal = "", this.typeFilter = "", this.mainFilter = "", this.linkFilter = "", this.statusFilter = "", this.availableTypes = s || [], this.availableStatusColors = o || {}, a && a.length) {
      let c = new Map(n.map((d) => [d.path, d.label]));
      for (let d of a)
        c.has(d) && this.selected.set(d, c.get(d));
    }
  }
  onOpen() {
    let { contentEl: t } = this;
    t.addClass("lkm-multipick");
    let n = /* @__PURE__ */ _((x) => {
      x.target.tagName === "SELECT" && x.stopPropagation();
    }, "guardSelect");
    t.addEventListener("pointerdown", n, !0), t.addEventListener("mousedown", n, !0), t.createEl("h3", { text: e("\u591A\u9009\u7B14\u8BB0\u663E\u793A\u5BFC\u56FE") }), t.createEl("p", { text: e("\u641C\u7D22\u5E76\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\uFF0C\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A\uFF08\u65E0\u9700\u5173\u8054\uFF09"), cls: "lkm-modal-sub" });
    let i = new Set(this.availableTypes);
    for (let x of this.items) x.type && i.add(x.type);
    let a = [...i], s = t.createDiv("lkm-multipick-filter"), o = s.createEl("input", { type: "text", placeholder: e("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    o.addClass("lkm-multipick-input");
    let c = /* @__PURE__ */ _((x) => {
      let F = /* @__PURE__ */ _((L) => L.stopPropagation(), "stop");
      x.addEventListener("mousedown", F), x.addEventListener("pointerdown", F), x.addEventListener("touchstart", F, { passive: !0 }), x.addEventListener("touchend", F, { passive: !0 }), x.addEventListener("click", F);
    }, "stopModalSwallow");
    if (a.length) {
      let x = s.createEl("select", { cls: "lkm-multipick-select" });
      x.createEl("option", { value: "", text: e("\u7C7B\u578B") }), x.createEl("option", { value: "__none__", text: e("\u65E0\u7C7B\u578B") });
      for (let F of a) x.createEl("option", { value: F, text: ct(F) });
      c(x), x.addEventListener("change", () => {
        this.typeFilter = x.value, u();
      });
    }
    let d = s.createEl("select", { cls: "lkm-multipick-select" });
    d.createEl("option", { value: "", text: e("\u5168\u90E8") }), d.createEl("option", { value: "1", text: e("\u4E3B\u7B14\u8BB0") }), d.createEl("option", { value: "0", text: e("\u975E\u4E3B\u7B14\u8BB0") }), c(d), d.addEventListener("change", () => {
      this.mainFilter = d.value, u();
    });
    let h = s.createEl("select", { cls: "lkm-multipick-select" });
    h.createEl("option", { value: "", text: e("\u5173\u8054") }), h.createEl("option", { value: "orphan", text: e("\u672A\u5173\u8054") }), h.createEl("option", { value: "linked", text: e("\u5DF2\u5173\u8054") }), c(h), h.addEventListener("change", () => {
      this.linkFilter = h.value, u();
    });
    let l = s.createEl("select", { cls: "lkm-multipick-select" });
    l.createEl("option", { value: "", text: e("\u72B6\u6001") }), l.createEl("option", { value: "__none__", text: e("\u65E0\u72B6\u6001") });
    for (let x of Object.keys(this.availableStatusColors || {}))
      l.createEl("option", { value: x, text: ot(x) });
    c(l), l.addEventListener("change", () => {
      this.statusFilter = l.value, u();
    });
    let r = t.createDiv("lkm-multipick-list"), p = t.createDiv("lkm-multipick-sel"), m = null, f = /* @__PURE__ */ _(() => {
      let x = this.searchVal.toLowerCase(), F = this.typeFilter, L = [];
      for (let w of this.items)
        x && !w.label.toLowerCase().includes(x) || F && F === "__none__" && w.type || F && F !== "__none__" && w.type !== F || this.mainFilter === "1" && !w.isMain || this.mainFilter === "0" && w.isMain || this.linkFilter === "orphan" && !w.orphan || this.linkFilter === "linked" && w.orphan || this.statusFilter === "__none__" && w.status || this.statusFilter && this.statusFilter !== "__none__" && w.status !== this.statusFilter || L.push(w);
      return L;
    }, "getFiltered"), u = /* @__PURE__ */ _(() => {
      r.empty();
      let x = f(), F = 0, L = 100;
      for (let w = 0; w < x.length && F < L; w++) {
        let S = x[w], y = r.createDiv("lkm-multipick-row");
        this.selected.has(S.path) && y.classList.add("is-selected"), y.createSpan({ text: S.label });
        let T = [];
        S.isMain && T.push(e("\u4E3B\u7B14\u8BB0")), S.type && T.push(ct(S.type)), T.length && y.createSpan({ text: " \xB7 " + T.join(" \xB7 "), cls: "lkm-multipick-type" }), y.addEventListener("click", () => {
          this.selected.has(S.path) ? this.selected.delete(S.path) : this.selected.set(S.path, S.label), y.classList.toggle("is-selected"), p.setText(e("\u5DF2\u9009 ") + this.selected.size + e(" \u7BC7\u7B14\u8BB0"));
        }), F++;
      }
      F === 0 ? r.createEl("p", { text: e("\u65E0\u5339\u914D\u7ED3\u679C"), cls: "lkm-modal-sub" }) : F === L && r.createEl("p", { text: e("\u4EC5\u663E\u793A\u524D ") + L + e(" \u6761\uFF0C\u8BF7\u641C\u7D22\u7F29\u5C0F\u8303\u56F4"), cls: "lkm-modal-sub" });
    }, "renderList");
    o.addEventListener("input", () => {
      this.searchVal = o.value, m && clearTimeout(m), m = setTimeout(u, 150);
    });
    let C = t.createDiv("lkm-multipick-btns");
    new R(C).addButton((x) => x.setButtonText(e("\u5168\u9009\u5F53\u524D")).onClick(() => {
      for (let F of f()) this.selected.set(F.path, F.label);
      u(), p.setText(e("\u5DF2\u9009 ") + this.selected.size + e(" \u7BC7\u7B14\u8BB0"));
    })).addButton((x) => x.setButtonText(e("\u663E\u793A\u5BFC\u56FE")).setCta().onClick(() => {
      if (!this.selected.size) {
        new v(e("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      this.close(), this.onChoose([...this.selected.keys()]);
    })).addButton((x) => x.setButtonText(e("\u6E05\u9664\u6240\u6709")).onClick(() => {
      this.selected.clear(), u(), p.setText(e("\u5DF2\u9009 0 \u7BC7\u7B14\u8BB0"));
    })).addButton((x) => x.setButtonText(e("\u53D6\u6D88")).onClick(() => this.close())), p.setText(e("\u5DF2\u9009 ") + this.selected.size + e(" \u7BC7\u7B14\u8BB0")), u(), o.focus();
  }
  onClose() {
    this.contentEl.empty();
  }
};
_(ye, "MultiPickModal");
var Ae = ye, ve = class extends gt {
  constructor(t, n, i) {
    super(t), this.parentLabel = n, this.opts = i || {}, this.onSubmit = this.opts.onSubmit || (() => {
    });
  }
  onOpen() {
    let { contentEl: t } = this, n = this.opts;
    t.createEl("h3", { text: n.standalone ? e("\u65B0\u5EFA\u8282\u70B9") : e("\u65B0\u5EFA\u5B50\u8282\u70B9") }), n.standalone || t.createEl("p", { text: e("\u7236\u8282\u70B9\uFF1A") + this.parentLabel, cls: "lkm-modal-sub" });
    let i = "", a = n.defaultType || "", s = n.defaultStatus || "", o = n.defaultTemplate || "", c = !1;
    new R(t).setName(e("\u6807\u9898")).addText((l) => {
      l.onChange((r) => i = r), l.inputEl.focus(), l.inputEl.addEventListener("keydown", (r) => {
        r.key === "Enter" && (r.preventDefault(), h());
      });
    }), new R(t).setName(e("\u7C7B\u578B")).setDesc(e("\u5199\u5165\u7B14\u8BB0\u7684 type \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((l) => {
      l.addOption("", e("\u4E0D\u9009")), (n.types || []).forEach((r) => l.addOption(r, ct(r))), l.setValue(a), l.onChange((r) => {
        a = r;
        let p = n.typeTemplates && n.typeTemplates[r];
        if (p && d) {
          let m = (n.templates || []).find((f) => f.path === et(p));
          m && (o = m.path, d.setValue(o));
        }
      });
    }), n.statuses && n.statuses.length && new R(t).setName(e("\u72B6\u6001")).setDesc(e("\u5199\u5165\u7B14\u8BB0\u7684 status \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((l) => {
      l.addOption("", e("\u4E0D\u9009")), n.statuses.forEach((r) => l.addOption(r, ot(r))), l.setValue(s), l.onChange((r) => {
        s = r;
      });
    });
    let d = null;
    new R(t).setName(e("\u6A21\u677F")).setDesc(e("\u4E0D\u540C\u7C7B\u578B\u53EF\u4F7F\u7528\u4E0D\u540C\u6A21\u677F")).addDropdown((l) => {
      d = l, (n.templates || []).forEach((r) => l.addOption(r.path, r.name)), l.setValue(o), l.onChange((r) => o = r);
    }), new R(t).setName(e("\u4E3B\u7B14\u8BB0")).setDesc(e("\u6807\u8BB0\u4E3A\u5BFC\u56FE\u4E3B\u5165\u53E3\uFF08") + (n.zkField || "main") + ": true\uFF09").addToggle((l) => {
      l.onChange((r) => c = r);
    });
    let h = /* @__PURE__ */ _(() => {
      let l = i.trim();
      if (!l) {
        new v(e("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(l, a, o, c, s);
    }, "done");
    new R(t).addButton((l) => l.setButtonText(e("\u521B\u5EFA")).setCta().onClick(h));
  }
  onClose() {
    this.contentEl.empty();
  }
};
_(ve, "NewChildModal");
var de = ve, _e = class extends gt {
  constructor(t, n, i) {
    super(t), this.currentName = n, this.onSubmit = i;
  }
  onOpen() {
    let { contentEl: t } = this;
    t.createEl("h3", { text: e("\u91CD\u547D\u540D\u6587\u4EF6") }), t.createEl("p", { text: e("\u5F53\u524D\uFF1A") + this.currentName + ".md", cls: "lkm-modal-sub" });
    let n = this.currentName;
    new R(t).setName(e("\u65B0\u6587\u4EF6\u540D")).addText((a) => {
      a.setValue(this.currentName), a.onChange((s) => n = s), a.inputEl.focus(), a.inputEl.select(), a.inputEl.addEventListener("keydown", (s) => {
        s.key === "Enter" && (s.preventDefault(), i());
      });
    });
    let i = /* @__PURE__ */ _(() => {
      let a = n.trim();
      if (!a) {
        new v(e("\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(a);
    }, "done");
    new R(t).addButton((a) => a.setButtonText(e("\u91CD\u547D\u540D")).setCta().onClick(i));
  }
  onClose() {
    this.contentEl.empty();
  }
};
_(_e, "RenameModal");
var Oe = _e, be = class extends gt {
  constructor(t, n, i, a, s) {
    super(t), this.titleText = n, this.message = i, this.onConfirm = a, this.danger = s !== !1;
  }
  onOpen() {
    let { contentEl: t } = this;
    this.danger && t.addClass("lkm-modal-danger"), t.createEl("h3", { text: this.titleText }), t.createEl("p", { text: this.message, cls: "lkm-modal-sub" });
    let n = t.createDiv("lkm-confirm-row");
    n.createEl("button", { cls: "lkm2-btn-ghost", text: e("\u53D6\u6D88") }).addEventListener("click", () => this.close()), n.createEl("button", { cls: "lkm2-btn-danger", text: e("\u786E\u8BA4") }).addEventListener("click", () => {
      this.close(), this.onConfirm();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
_(be, "ConfirmModal");
var Lt = be, xe = class extends pe {
  constructor(t, n, i) {
    super(t), this.items = n, this.onChoose = i, this.setPlaceholder(e("\u9009\u62E9\u65B0\u7684\u7236\u8282\u70B9\u2026"));
  }
  getItems() {
    return this.items;
  }
  getItemText(t) {
    return t.label;
  }
  onChooseItem(t) {
    this.onChoose(t);
  }
};
_(xe, "MoveModal");
var Qt = xe, Se = class extends Ie {
  constructor(t, n) {
    super(t), this.plugin = n, this.rootPath = null, this.depth = n.settings.defaultDepth, this.notes = /* @__PURE__ */ new Map(), this.referenced = /* @__PURE__ */ new Set(), this.currentRoot = null, this._cleanup = [], this._view = null, this._expandedMem = /* @__PURE__ */ new Map(), this._history = [], this._selected = /* @__PURE__ */ new Set(), this._batchMode = !1, this._selKey = null, this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._toolbarCollapsed = !1, this._dashFilters = [], this._dashSort = "date", this._dashSearch = "", this._dashHeatIdx = 0, this._dashBranchAll = !1, this._dashTab = "stats", this._tlSort = "desc", this._tlTypeFilter = "", this._tlSearch = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this._nodeIndex = /* @__PURE__ */ new Map();
  }
  get s() {
    return this.plugin.settings;
  }
  getViewType() {
    return mt;
  }
  getDisplayText() {
    return e("\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE");
  }
  getIcon() {
    return "git-fork";
  }
  async onOpen() {
    await this._waitMetadataReady();
    let t = this.plugin.settings.viewState;
    if (t) {
      if (this.rootPath = t.rootPath || null, this.depth = t.depth || this.plugin.settings.defaultDepth, this._mode = t.mode || "map", this._multiRoot = !!t.multiRoot, this._multiRootPaths = t.multiRootPaths || [], this._toolbarCollapsed = !!t.toolbarCollapsed, t.kwFilePath) {
        let n = this.app.vault.getAbstractFileByPath(t.kwFilePath);
        n && (this._kwFile = n);
      }
      t.view && (this._view = t.view), t.expandedMemory && (this._expandedMem = /* @__PURE__ */ new Map(Object.entries(t.expandedMemory)));
    }
    await this.rebuild(!0), t || this.locateFile(this.app.workspace.getActiveFile());
  }
  async onClose() {
    this._runCleanup();
    let t = {
      rootPath: this.rootPath,
      depth: this.depth,
      mode: this._mode,
      multiRoot: this._multiRoot,
      multiRootPaths: this._multiRootPaths || [],
      toolbarCollapsed: this._toolbarCollapsed,
      kwFilePath: this._kwFile ? this._kwFile.path : null,
      view: this._view || null,
      expandedMemory: Object.fromEntries(this._expandedMem)
    };
    this.plugin.settings.viewState = t, await this.plugin.saveSettings();
  }
  _captureViewState() {
    return {
      rootPath: this.rootPath,
      depth: this.depth,
      mode: this._mode,
      multiRoot: this._multiRoot,
      multiRootPaths: this._multiRootPaths || [],
      toolbarCollapsed: this._toolbarCollapsed,
      kwFilePath: this._kwFile ? this._kwFile.path : null,
      view: this._view || null,
      expandedMemory: Object.fromEntries(this._expandedMem)
    };
  }
  async _restoreViewState(t) {
    if (this.rootPath = t.rootPath || null, this.depth = t.depth || this.plugin.settings.defaultDepth, this._mode = t.mode || "map", this._multiRoot = !!t.multiRoot, this._multiRootPaths = t.multiRootPaths || [], this._toolbarCollapsed = !!t.toolbarCollapsed, t.kwFilePath) {
      let a = this.app.vault.getAbstractFileByPath(t.kwFilePath);
      a ? this._kwFile = a : this._kwFile = null;
    } else
      this._kwFile = null;
    let n = t.expandedMemory ? new Map(Object.entries(t.expandedMemory)) : /* @__PURE__ */ new Map(), i = t.view || null;
    await this.rebuild(!0), this._expandedMem = n, this._view = i, this.render({ fit: !0 });
  }
  _showPresetMenu(t) {
    let n = new Bt(), i = this.plugin._getSavedViews();
    if (i.length === 0)
      n.addItem((s) => s.setTitle(e("\u6682\u65E0\u9884\u8BBE")).setIcon("bookmark").onClick(() => {
      }));
    else {
      for (let s of i) {
        let o = s.time ? new Date(s.time).toLocaleString() : "";
        n.addItem((c) => {
          c.setTitle(s.name + (o ? "  (" + o + ")" : "")).setIcon("bookmark").onClick(async () => {
            await this._restoreViewState(s.state), new v(e("\u5DF2\u6062\u590D\u9884\u8BBE\uFF1A") + s.name);
          });
        });
      }
      n.addSeparator(), n.addItem((s) => s.setTitle(e("\u5220\u9664\u9884\u8BBE\u2026")).setIcon("trash").onClick(() => this._showDeletePresetMenu(t)));
    }
    n.addSeparator(), n.addItem((s) => s.setTitle(e("\u4FDD\u5B58\u5F53\u524D\u72B6\u6001\u2026")).setIcon("plus").onClick(() => this._promptSaveView()));
    let a = t.getBoundingClientRect();
    n.showAtPosition({ x: a.left, y: a.bottom });
  }
  _showDeletePresetMenu(t) {
    let n = new Bt(), i = this.plugin._getSavedViews();
    for (let s of i)
      n.addItem((o) => {
        o.setTitle(s.name).setIcon("trash").onClick(async () => {
          await this.plugin._deleteSavedView(s.name), new v(e("\u5DF2\u5220\u9664\u9884\u8BBE\uFF1A") + s.name);
        });
      });
    let a = t.getBoundingClientRect();
    n.showAtPosition({ x: a.left, y: a.bottom });
  }
  _promptSaveView() {
    let t = new gt(this.app);
    t.titleEl.setText(e("\u4FDD\u5B58\u5BFC\u56FE\u9884\u8BBE"));
    let n = "", i = new R(t.contentEl).setName(e("\u9884\u8BBE\u540D\u79F0")).addText((s) => {
      s.setPlaceholder(e("\u8F93\u5165\u9884\u8BBE\u540D\u79F0")), s.inputEl.focus(), s.onChange((o) => n = o), s.inputEl.addEventListener("keydown", (o) => {
        o.key === "Enter" && (o.preventDefault(), a());
      });
    }), a = /* @__PURE__ */ _(async () => {
      let s = n.trim();
      if (!s) {
        new v(e("\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.plugin._getSavedViews().some((c) => c.name === s) ? new Lt(this.app, e("\u8986\u76D6\u9884\u8BBE"), e("\u5DF2\u5B58\u5728\u540C\u540D\u9884\u8BBE\u300C") + s + e("\u300D\uFF0C\u662F\u5426\u8986\u76D6\uFF1F"), async () => {
        await this.plugin._saveViewPreset(s, this._captureViewState()), t.close(), new v(e("\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A") + s);
      }).open() : (await this.plugin._saveViewPreset(s, this._captureViewState()), t.close(), new v(e("\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A") + s));
    }, "done");
    new R(t.contentEl).addButton((s) => s.setButtonText(e("\u4FDD\u5B58")).setCta().onClick(a)).addButton((s) => s.setButtonText(e("\u53D6\u6D88")).onClick(() => t.close())), t.open();
  }
  async _waitMetadataReady() {
    let t = this.app.metadataCache;
    ke(this.app, this.s) || await new Promise((n) => {
      let i = !1, a = /* @__PURE__ */ _(() => {
        if (!i) {
          i = !0;
          try {
            t.offref(s), t.offref(o);
          } catch {
          }
          clearTimeout(c), n();
        }
      }, "finish"), s = t.on("resolved", a), o = t.on("changed", a), c = setTimeout(a, 6e3);
      this._cleanup.push(a);
    });
  }
  _runCleanup() {
    this._hidePreview();
    for (let t of this._cleanup)
      try {
        t();
      } catch {
      }
    this._cleanup = [];
  }
  _setupMobileViewport(t) {
    if (!window.visualViewport) return;
    let n = window.visualViewport, i = null, a = /* @__PURE__ */ _(() => {
      i && clearTimeout(i), i = setTimeout(() => {
        if (i = null, !window.matchMedia("(hover: none)").matches) return;
        let d = t.querySelector(".lkm-dash");
        if (!d) return;
        let h = t.querySelector(".lkm-toolbar"), l = h ? h.getBoundingClientRect().height : 0;
        d.style.maxHeight = n.height - l + "px";
        let r = document.activeElement;
        r && r.tagName === "INPUT" && t.contains(r) && setTimeout(() => {
          let p = r.getBoundingClientRect(), m = d.getBoundingClientRect();
          (p.top < m.top || p.bottom > m.bottom) && r.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 50);
      }, 150);
    }, "adjust"), s = /* @__PURE__ */ _(() => a(), "onResize"), o = /* @__PURE__ */ _(() => a(), "onScroll");
    n.addEventListener("resize", s), n.addEventListener("scroll", o), window.addEventListener("resize", s), this._cleanup.push(() => {
      n.removeEventListener("resize", s), n.removeEventListener("scroll", o), window.removeEventListener("resize", s);
      let c = t.querySelector(".lkm-dash");
      c && (c.style.maxHeight = "");
    }), this._adjustMobileViewport = a;
  }
  async rebuild(t) {
    let n = qt(this.app, this.s);
    this.notes = n.map, this.referenced = n.referenced;
    for (let i of this._expandedMem.keys()) this.notes.has(i) || this._expandedMem.delete(i);
    if (this._selKey && !this._nodeIndex.has(this._selKey) && (this._selKey = null), this._multiRoot && t && this._multiRootPaths && this._multiRootPaths.length) {
      let i = this._multiRootPaths.filter((a) => this.notes.has(a));
      if (i.length) {
        this._showMultiRoot(i);
        return;
      }
    }
    (!t || !this.rootPath || !this.notes.has(this.rootPath)) && (this.rootPath = this._pickDefaultRoot(), this._multiRoot = !1), this.render();
  }
  _pickDefaultRoot() {
    let t = [...this.notes.values()], n = t.filter((a) => a.zk).sort((a, s) => a.title.localeCompare(s.title, "zh"));
    if (n.length) return n[0].file.path;
    let i = t.filter((a) => !this.referenced.has(a.file.path)).sort((a, s) => a.title.localeCompare(s.title, "zh"));
    return i.length ? i[0].file.path : t.length ? t[0].file.path : null;
  }
  _indexTree(t) {
    this._nodeIndex = /* @__PURE__ */ new Map(), this._treePaths = /* @__PURE__ */ new Set(), this._pathNodes = /* @__PURE__ */ new Map();
    let n = /* @__PURE__ */ _((i) => {
      this._nodeIndex.set(i.key, i), i.note.file && (this._treePaths.add(i.note.file.path), this._pathNodes.has(i.note.file.path) || this._pathNodes.set(i.note.file.path, []), this._pathNodes.get(i.note.file.path).push(i)), i.children.forEach(n);
    }, "walk");
    n(t);
  }
  render(t) {
    let n = this.contentEl;
    if (this._runCleanup(), n.empty(), n.addClass("lkm-view"), n.style.overflow = "hidden", this._mode === "dash") {
      this._renderDash(n);
      return;
    }
    let i = this.s;
    n.tabIndex = -1;
    let a = /* @__PURE__ */ _((w) => {
      let S = w.target.tagName;
      if (!(S === "INPUT" || S === "TEXTAREA"))
        if (w.key === "Delete" || w.key === "Backspace") {
          if (this._selKey) {
            w.preventDefault();
            let y = this._nodeIndex.get(this._selKey);
            y && this._deleteNode(y);
          }
        } else if (w.key === "Enter") {
          if (this._selKey) {
            w.preventDefault();
            let y = this._nodeIndex.get(this._selKey);
            y && y.note.file && this.app.workspace.getLeaf(!0).openFile(y.note.file);
          }
        } else if (w.key === "Escape")
          this._batchMode ? (this._batchMode = !1, this._selected.clear(), this.render()) : this._selKey && this._select(null);
        else if (w.key === "ArrowUp" || w.key === "ArrowDown" || w.key === "ArrowLeft" || w.key === "ArrowRight") {
          if (!this._selKey) return;
          let y = this._nodeIndex.get(this._selKey);
          if (!y) return;
          if (w.preventDefault(), w.key === "ArrowLeft")
            y.expanded && y.children.length ? (y.expanded = !1, this._expandedMem.set(y.note.file ? y.note.file.path : y.key, !1), this.render()) : y.parent && this._select(y.parent.key);
          else if (w.key === "ArrowRight")
            !y.expanded && y.children.length ? (y.expanded = !0, this._expandedMem.set(y.note.file ? y.note.file.path : y.key, !0), this.render()) : y.children.length && this._select(y.children[0].key);
          else if (w.key === "ArrowUp") {
            if (y.parent) {
              let I = y.parent.children, T = I.indexOf(y);
              T > 0 ? this._select(I[T - 1].key) : this._select(y.parent.key);
            }
          } else if (w.key === "ArrowDown") {
            if (y.expanded && y.children.length) {
              this._select(y.children[0].key);
              return;
            }
            let I = y;
            for (; I.parent; ) {
              let T = I.parent.children, E = T.indexOf(I);
              if (E < T.length - 1) {
                this._select(T[E + 1].key);
                return;
              }
              I = I.parent;
            }
          }
        } else if (w.key === " ") {
          if (this._selKey) {
            w.preventDefault();
            let y = this._nodeIndex.get(this._selKey);
            y && y.children.length && (y.expanded = !y.expanded, this._expandedMem.set(y.note.file ? y.note.file.path : y.key, y.expanded), this.render());
          }
        } else if (w.key === "n" || w.key === "N") {
          if (this._selKey) {
            w.preventDefault();
            let y = this._nodeIndex.get(this._selKey);
            y && this._addChildDialog(y);
          }
        } else w.key === "b" || w.key === "B" ? (w.preventDefault(), this._back()) : w.key === "/" && (w.preventDefault(), this.openNoteSearch());
    }, "onKeydown");
    n.addEventListener("keydown", a), this._cleanup.push(() => n.removeEventListener("keydown", a)), this._titleLenApplied !== i.maxTitleLen && (this._titleLenApplied = i.maxTitleLen);
    let s = n.createDiv("lkm-toolbar"), o = s.createEl("button", { cls: "lkm-btn lkm-toolbar-toggle", text: "\u2630" });
    o.title = e("\u5C55\u5F00/\u6298\u53E0\u5DE5\u5177\u680F"), o.onclick = () => {
      this._toolbarCollapsed = !this._toolbarCollapsed, s.classList.toggle("lkm-collapsed", this._toolbarCollapsed);
    }, this._toolbarCollapsed && s.classList.add("lkm-collapsed");
    let c = /* @__PURE__ */ _((w, S, y, I, T, E) => {
      let B = s.createEl("button", { cls: "lkm-btn" + (I ? " " + I : "") });
      return E ? (B.createEl("span", { cls: "lkm-btn-icon", text: E }), B.createEl("span", { text: w })) : B.textContent = w, B.title = S, T && (B.disabled = !0), B.onclick = (G) => {
        B.disabled || y(B, G);
      }, B;
    }, "mkBtn"), d = this._selKey ? this._nodeIndex.get(this._selKey) : null, h = !d;
    c(e("\u5DE5\u4F5C\u53F0"), e("\u67E5\u770B\u7EDF\u8BA1\u5DE5\u4F5C\u53F0"), () => {
      this._mode = "dash", this.render();
    }, "", !1, "\u{1F4CA}"), c(e("\u4E3B\u7B14\u8BB0"), e("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u7B14\u8BB0\uFF08main: true\uFF09"), () => this.openRootPicker(), "", !1, "\u{1F4CC}"), c(e("\u5173\u952E\u8BCD"), e("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u8FC7\u6EE4"), () => this.openKeywordPicker(), "", !1, "\u{1F511}"), c(e("\u641C\u7D22"), e("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9"), () => this.openNoteSearch(), "", !1, "\u{1F50D}"), c(e("\u591A\u9009"), e("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A"), () => this.openMultiPick(), "", !1, "\u{1F4CB}"), c(e("\u65B0\u589E"), e("\u521B\u5EFA\u72EC\u7ACB\u7B14\u8BB0"), () => this.createStandaloneNote(), "", !1, "\u271A");
    let l = s.createDiv("lkm-depth");
    l.createSpan({ text: e("\u5C42") });
    let r = l.createEl("button", { cls: "lkm-step", text: "\u2212", title: e("\u51CF\u5C11\u663E\u793A\u5C42\u6570\uFF08\u5C421=\u53EA\u770B\u6839\u7B14\u8BB0\uFF09") }), p = l.createSpan({ cls: "lkm-depth-val", text: String(this.depth) }), m = l.createEl("button", { cls: "lkm-step", text: "+", title: e("\u589E\u52A0\u663E\u793A\u5C42\u6570") });
    r.onclick = () => {
      this.depth > 1 && (this.depth--, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, m.onclick = () => {
      this.depth < 12 && (this.depth++, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, c(e("\u5237\u65B0"), e("\u91CD\u65B0\u8BFB\u53D6\u76EE\u5F55\u4E0E\u7B14\u8BB0\u6570\u636E"), () => this.rebuild(!0), "", !1, "\u21BB"), c(e("\u9002\u5E94"), e("\u7F29\u653E\u81F3\u5B8C\u6574\u663E\u793A\u6240\u6709\u8282\u70B9"), () => this._fit && this._fit(), "", !1, "\u2922"), c(e("\u5168\u5C55"), e("\u5C55\u5F00\u6240\u6709\u8282\u70B9"), () => this._expandAll(!0), "", !1, "\u2295"), c(e("\u5168\u6298"), e("\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9"), () => this._expandAll(!1), "", !1, "\u2296"), c(this.s.layoutDir === "v" ? e("\u7EB5\u5411") : e("\u6A2A\u5411"), e("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u6A2A\u5411/\u7EB5\u5411\uFF09"), (w) => {
      this.s.layoutDir = this.s.layoutDir === "v" ? "h" : "v", this.plugin.saveSettings(), this._view = null, this.render({ fit: !0 });
    }, this.s.layoutDir === "v" ? "is-active" : "", !1, "\u21C4"), c(e("\u5FEB\u6377\u952E"), e("\u67E5\u770B\u952E\u76D8\u5FEB\u6377\u952E\u8BF4\u660E"), () => this._showShortcutHelp(), "", !1, "\u2328"), c(e("\u5E2E\u52A9"), e("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), () => this._showHelp(), "", !1, "?"), c(e("\u5BFC\u51FA"), e("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2"), (w) => this._exportMenu(w), "", !1, "\u2B07"), c(e("\u9884\u8BBE"), e("\u4FDD\u5B58/\u6062\u590D\u5BFC\u56FE\u72B6\u6001\u9884\u8BBE"), (w) => this._showPresetMenu(w), "", !1, "\u{1F516}");
    let f = c(e("\u663E\u793A"), e("\u5207\u6362\u663E\u793A\u9009\u9879"), () => {
      let w = new Bt();
      w.addItem((y) => y.setTitle(this.s.showCreated ? e("\u2713 \u65F6\u95F4") : e("\u65F6\u95F4")).setIcon("calendar").onClick(() => {
        this.s.showCreated = !this.s.showCreated, this.plugin.saveSettings(), this.render();
      })), w.addItem((y) => y.setTitle(this.s.showType ? e("\u2713 \u7C7B\u578B") : e("\u7C7B\u578B")).setIcon("tag").onClick(() => {
        this.s.showType = !this.s.showType, this.plugin.saveSettings(), this.render();
      })), w.addItem((y) => y.setTitle(this.s.showChildCount ? e("\u2713 \u5B50\u6570") : e("\u5B50\u6570")).setIcon("list").onClick(() => {
        this.s.showChildCount = !this.s.showChildCount, this.plugin.saveSettings(), this.render();
      })), w.addItem((y) => y.setTitle(this.s.showWordCount ? e("\u2713 \u5B57\u6570") : e("\u5B57\u6570")).setIcon("type").onClick(() => {
        this.s.showWordCount = !this.s.showWordCount, this.plugin.saveSettings(), this.render();
      })), w.addSeparator(), w.addItem((y) => y.setTitle(this.s.showOpenIcon !== !1 ? e("\u2713 \u6253\u5F00\u56FE\u6807") : e("\u6253\u5F00\u56FE\u6807")).setIcon("edit").onClick(() => {
        this.s.showOpenIcon = this.s.showOpenIcon === !1, this.plugin.saveSettings(), this.render();
      })), w.addItem((y) => y.setTitle(this.s.showAddIcon !== !1 ? e("\u2713 \u65B0\u589E\u56FE\u6807") : e("\u65B0\u589E\u56FE\u6807")).setIcon("plus-circle").onClick(() => {
        this.s.showAddIcon = this.s.showAddIcon === !1, this.plugin.saveSettings(), this.render();
      }));
      let S = f.getBoundingClientRect();
      w.showAtPosition({ x: S.left, y: S.bottom });
    });
    c(e("\u6279\u91CF"), e("\u8FDB\u5165\u6279\u91CF\u6A21\u5F0F\uFF1A\u5355\u51FB\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u540E\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664"), () => this._toggleBatch(), this._batchMode ? "is-active" : ""), this._batchMode && (s.createDiv("lkm-sel-count").setText(e("\u5DF2\u9009 ") + this._selected.size), c(e("\u5168\u9009"), e("\u9009\u4E2D\u5BFC\u56FE\u4E2D\u6240\u6709\u8282\u70B9"), () => {
      this._selected = new Set(this._nodeIndex.keys()), this.render();
    }, "lkm-btn-action"), c(e("\u53CD\u9009"), e("\u53CD\u9009\u5F53\u524D\u9009\u4E2D\u72B6\u6001"), () => {
      let S = new Set(this._nodeIndex.keys());
      for (let y of this._selected) S.delete(y);
      this._selected = S, this.render();
    }, "lkm-btn-action"), c(e("\u79FB\u52A8\u5230\u2026"), e("\u628A\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u6307\u5B9A\u7236\u7B14\u8BB0\u4E0B"), () => this._batchMoveDialog(), "lkm-btn-action"), c(e("\u5220\u9664\u9009\u4E2D"), e("\u5220\u9664\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u53CA\u5176\u7B14\u8BB0\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF09"), () => this._batchDelete(), "lkm-btn-action"), c(e("\u6539\u7C7B\u578B"), e("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u7C7B\u578B"), () => this._batchSetType(), "lkm-btn-action"), c(e("\u6539\u72B6\u6001"), e("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u72B6\u6001"), () => this._batchSetStatus(), "lkm-btn-action"), c(e("\u6807\u8BB0\u4E3B\u7B14\u8BB0"), e("\u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u4E3B\u7B14\u8BB0"), () => this._batchSetMain(!0), "lkm-btn-action"), c(e("\u53D6\u6D88\u4E3B\u7B14\u8BB0"), e("\u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u4E3B\u7B14\u8BB0\u6807\u8BB0"), () => this._batchSetMain(!1), "lkm-btn-action")), c(e("\u8BBE\u7F6E"), e("\u6253\u5F00\u63D2\u4EF6\u8BBE\u7F6E"), () => {
      this.app.setting.open(), this.app.setting.openTabById(this.plugin.manifest.id);
    }, "", !1, "\u2699"), c(e("\u83DC\u5355"), e("\u663E\u793A\u8282\u70B9\u64CD\u4F5C\u83DC\u5355\uFF08\u7B49\u540C\u53F3\u952E/\u957F\u6309\uFF09\uFF1A\u6253\u5F00/\u65B0\u589E/\u805A\u7126/\u4E0A\u7EA7/\u72B6\u6001/\u4E3B\u7B14\u8BB0/\u91CD\u547D\u540D/\u590D\u5236/\u79FB\u52A8/\u6392\u5E8F/\u5220\u9664"), (w, S) => {
      let y = this._nodeIndex.get(this._selKey);
      y && this._showNodeMenu(y, { clientX: S.clientX, clientY: S.clientY });
    }, "lkm-node-btn", !d), c(e("\u8FD4\u56DE"), e("\u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE\u4F4D\u7F6E"), () => this._back(), "", this._history.length === 0, "\u2190"), c(e("\u7B5B\u9009"), e("\u7B5B\u9009\u8282\u70B9"), () => {
      s.classList.toggle("lkm-filter-open");
    }, "lkm-filter-toggle");
    let u = s.createEl("input", { type: "text", cls: "lkm-filter-input", placeholder: e("\u7B5B\u9009\u8282\u70B9\u2026") });
    u.value = this._filterText || "", u.addEventListener("input", () => {
      this._filterText = u.value.trim().toLowerCase(), this._applyFilter();
    });
    let C = s.createDiv("lkm-info");
    d && C.createSpan({ text: e("\u5DF2\u9009\uFF1A") + Z(d.note.title, 12) + " \uFF5C " });
    let x = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (this._kwFile)
      C.createSpan({ text: e("\u5173\u952E\u8BCD\uFF1A") + this._kwFile.basename });
    else if (this._multiRoot)
      C.createSpan({ text: e("\u591A\u9009\u5BFC\u56FE\uFF08") + (this.currentRoot ? this.currentRoot.children.length : 0) + e(" \u7BC7\uFF09") });
    else if (x) {
      C.createSpan({ text: e("\u8DEF\u5F84\uFF1A") });
      let w = this._buildCrumbChain();
      w.forEach((S, y) => {
        if (w.length > 8 && y === 1) {
          C.createEl("span", { cls: "lkm-crumb-sep", text: "\u2026>" });
          return;
        }
        if (w.length > 8 && y > 1 && y < w.length - 1) return;
        y && C.createSpan({ cls: "lkm-crumb-sep", text: ">" });
        let I = y === w.length - 1, T = Z(S.note.title, 10), E = C.createEl(I ? "span" : "a", { cls: "lkm-crumb-item" + (I ? " lkm-crumb-cur" : ""), text: T });
        E.title = S.note.title, !I && S.note.file && E.addEventListener("click", () => this._focusPath(S.note.file.path));
      });
    } else
      C.createSpan({ text: e("\u672A\u627E\u5230\u7B14\u8BB0") });
    let F = n.createDiv("lkm-canvas");
    if (this._kwFile && !this.app.vault.getAbstractFileByPath(this._kwFile.path) && (this._kwFile = null), !this._kwFile && !this._multiRoot && (this._selectedRootPaths = null), this._kwFile) {
      this.showKeyword(this._kwFile, t);
      return;
    }
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length) {
      this._indexTree(this.currentRoot), Xt(this.currentRoot, this.depth), this._ensureSelectedVisible(this.currentRoot), this._restoreExpanded(), this._draw(F, jt(this.currentRoot, this.s), t);
      return;
    }
    if (!this.rootPath || !x) {
      if (this.notes.size === 0) {
        this._renderEmptyGuide(F);
        return;
      }
      F.createDiv("lkm-empty").setText(e("\u6CA1\u6709\u627E\u5230\u4E3B\u7B14\u8BB0\uFF08") + (this.s.zkField || "main") + e(": true\uFF09\u3002\u53EF\u5728\u5BFC\u56FE\u4E2D\u53F3\u952E/\u957F\u6309\u4EFB\u610F\u8282\u70B9\u6807\u8BB0\u4E3A\u4E3B\u7B14\u8BB0\u3002"));
      return;
    }
    let L = zt(this.app, this.notes, x);
    this.currentRoot = L, this._indexTree(L), Xt(L, this.depth), this._restoreExpanded(), this._draw(F, jt(L, this.s), t);
  }
  _restoreExpanded() {
    for (let [t, n] of this._expandedMem) {
      let i = this._pathNodes ? this._pathNodes.get(t) : null;
      if (i) for (let a of i) a.expanded = n;
    }
  }
  _ensureSelectedVisible(t) {
    !this._selectedRootPaths || !this._selectedRootPaths.size || (/* @__PURE__ */ _(function n(i) {
      if (!i.children || !i.children.length) return !1;
      let a = !1;
      for (let s of i.children)
        s.note.file && this.has(s.note.file.path) && (a = !0), n.call(this, s) && (a = !0);
      return a && (i.expanded = !0), a;
    }, "expand")).call(this._selectedRootPaths, t);
  }
  _applyFilter() {
    let t = this._filterText || "";
    for (let n of this._nodeIndex.values())
      if (n._el)
        if (!t)
          n._el.classList.remove("lkm-dim"), n._el.classList.remove("lkm-highlight");
        else {
          let i = n.note.title.toLowerCase().includes(t);
          n._el.classList.toggle("lkm-dim", !i), n._el.classList.toggle("lkm-highlight", i);
        }
  }
  async _showPreview(t, n) {
    if (!t.note.file) return;
    this._previewCache || (this._previewCache = /* @__PURE__ */ new Map());
    let i = t.note.file.path, a = this._previewCache.get(i);
    if (a === void 0)
      try {
        let d = await this.app.vault.read(t.note.file), h = d.match(/^---\n[\s\S]*?\n---\n?/);
        a = h ? d.slice(h[0].length).trim() : d.trim(), a = a.split(`
`).slice(0, 20).join(`
`).trim(), a.length > 600 && (a = a.slice(0, 600) + "\u2026"), this._previewCache.set(i, a);
      } catch {
        return;
      }
    if (!a) return;
    this._hidePreview();
    let s = document.createElement("div");
    s.className = "lkm-preview";
    let o = document.createElement("div");
    o.className = "lkm-preview-title", o.textContent = t.note.title, s.appendChild(o);
    let c = document.createElement("div");
    s.appendChild(c), s.addEventListener("mouseenter", () => {
      this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null);
    }), s.addEventListener("mouseleave", () => {
      this._hidePreview();
    }), document.body.appendChild(s), this._previewEl = s, this._previewComp = new Be(), this._previewComp.load(), await Re.render(this.app, a, c, i, this._previewComp), this._positionPreview(n);
  }
  _positionPreview(t) {
    if (!this._previewEl) return;
    let n = this._previewEl, i = t.clientX + 14, a = t.clientY + 14, s = n.getBoundingClientRect(), o = window.innerWidth - s.width - 8, c = window.innerHeight - s.height - 8;
    n.style.left = Math.min(i, o) + "px", n.style.top = Math.min(a, c) + "px";
  }
  _hidePreview() {
    this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null), this._previewComp && (this._previewComp.unload(), this._previewComp = null), this._previewEl && (this._previewEl.remove(), this._previewEl = null);
  }
  _focus(t) {
    let n = this._nodeIndex.get(t);
    !n || !n.note.file || this._focusPath(n.note.file.path);
  }
  _focusPath(t) {
    t && ((t !== this.rootPath || this._multiRoot) && (this._history.push({ rootPath: this.rootPath, kwFile: this._kwFile, multiRoot: this._multiRoot, currentRoot: this._multiRoot ? this.currentRoot : null }), this._kwFile = null, this._multiRoot = !1, this.rootPath = t, this._expandedMem.clear(), this._view = null, this._selKey = null), this.render());
  }
  _back() {
    if (this._history.length) {
      let t = this._history.pop();
      this._kwFile = t.kwFile || null, this._multiRoot = t.multiRoot || !1, t.multiRoot && t.currentRoot ? (this.currentRoot = t.currentRoot, this.rootPath = null) : this.rootPath = t.rootPath, this._view = null, this._selKey = null, this.render();
    } else new v(e("\u6CA1\u6709\u53EF\u8FD4\u56DE\u7684\u8282\u70B9"));
  }
  _expandAll(t) {
    for (let n of this._nodeIndex.values())
      n.children.length && (n.expanded = t, this._expandedMem.set(n.note.file ? n.note.file.path : n.key, t));
    this.render();
  }
  _showShortcutHelp() {
    let t = new gt(this.app);
    t.onOpen = () => {
      let { contentEl: n } = t;
      n.addClass("lkm-multipick"), n.createEl("h3", { text: e("\u952E\u76D8\u5FEB\u6377\u952E") });
      let i = [
        ["\u2191 / \u2193", e("\u4E0A/\u4E0B\u5BFC\u822A\u8282\u70B9")],
        ["\u2190 / \u2192", e("\u5DE6\uFF1A\u6298\u53E0/\u5230\u7236\u8282\u70B9 \xB7 \u53F3\uFF1A\u5C55\u5F00/\u5230\u5B50\u8282\u70B9")],
        ["Space", e("\u5C55\u5F00/\u6298\u53E0\u5F53\u524D\u8282\u70B9")],
        ["Enter", e("\u6253\u5F00\u5F53\u524D\u8282\u70B9\u7B14\u8BB0")],
        ["Delete / Backspace", e("\u5220\u9664\u5F53\u524D\u8282\u70B9")],
        ["N", e("\u4E3A\u5F53\u524D\u8282\u70B9\u65B0\u589E\u5B50\u8282\u70B9")],
        ["B", e("\u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE")],
        ["/", e("\u6253\u5F00\u641C\u7D22")],
        ["Esc", e("\u53D6\u6D88\u9009\u4E2D / \u9000\u51FA\u6279\u91CF\u6A21\u5F0F")]
      ];
      for (let [s, o] of i) {
        let c = n.createDiv("lkm-shortcut-row");
        c.createEl("span", { cls: "lkm-shortcut-key", text: s }), c.createEl("span", { cls: "lkm-shortcut-desc", text: o });
      }
      let a = n.createDiv("lkm-multipick-btns");
      new R(a).addButton((s) => s.setButtonText(e("\u5173\u95ED")).onClick(() => t.close()));
    }, t.open();
  }
  _exportMenu(t) {
    let n = new Bt();
    n.addItem((a) => a.setTitle(e("\u5BFC\u51FA SVG")).setIcon("download").onClick(() => this._exportSVG())), n.addItem((a) => a.setTitle(e("\u5BFC\u51FA PNG")).setIcon("image").onClick(() => this._exportPNG())), n.addItem((a) => a.setTitle(e("\u5BFC\u51FA Markdown \u5927\u7EB2")).setIcon("document").onClick(() => this._exportMarkdown())), n.addItem((a) => a.setTitle(e("\u5BFC\u51FA Canvas")).setIcon("layout-grid").onClick(() => this._exportCanvas()));
    let i = t.getBoundingClientRect();
    n.showAtPosition({ x: i.left, y: i.bottom + 4 });
  }
  _getSVGString() {
    let t = this.contentEl.querySelector(".lkm-svg");
    if (!t)
      return new v(e("\u672A\u627E\u5230\u5BFC\u56FE\u5185\u5BB9")), null;
    let n = t.cloneNode(!0), i = t.getBBox(), a = 30, s = i.width + a * 2, o = i.height + a * 2;
    n.setAttribute("xmlns", "http://www.w3.org/2000/svg"), n.setAttribute("width", s), n.setAttribute("height", o), n.setAttribute("viewBox", i.x - a + " " + (i.y - a) + " " + s + " " + o);
    let c = this.contentEl.querySelector(".lkm-view") || this.contentEl, d = getComputedStyle(c), h = [
      "--background-primary",
      "--background-modifier-border",
      "--background-modifier-hover",
      "--text-normal",
      "--text-muted",
      "--text-faint",
      "--text-accent",
      "--lkm-accent",
      "--lkm-main",
      "--lkm-done",
      "--lkm-multi",
      "--lkm-selected",
      "--lkm-card-stroke"
    ], l = {};
    for (let y of h) {
      let I = d.getPropertyValue(y).trim();
      I && (l[y] = I);
    }
    l["--lkm-accent"] || (l["--lkm-accent"] = "#6c8cff"), l["--lkm-main"] || (l["--lkm-main"] = "#f2a65a"), l["--lkm-done"] || (l["--lkm-done"] = "#3fa66a");
    let r = "";
    try {
      for (let y of document.styleSheets) {
        let I;
        try {
          I = y.cssRules;
        } catch {
          continue;
        }
        if (I)
          for (let T of I) {
            let E = T.selectorText || "";
            E.includes("lkm-") && !E.includes("lkm-toolbar") && !E.includes("lkm-btn") && !E.includes("lkm-dash") && !E.includes("lkm-cards") && !E.includes("lkm-modal") && !E.includes("lkm-multipick") && !E.includes("lkm-empty") && !E.includes("lkm-guide") && !E.includes("lkm-heat") && !E.includes("lkm-branch") && !E.includes("lkm-legend") && !E.includes("lkm-donut") && !E.includes("lkm-bars") && !E.includes("lkm-stackbar") && !E.includes("lkm-chips") && !E.includes("lkm-shortcut") && !E.includes("lkm-step") && !E.includes("lkm-depth") && !E.includes("lkm-info") && !E.includes("lkm-crumb") && !E.includes("lkm-sel-count") && (r += T.cssText + `
`);
          }
      }
    } catch (y) {
      console.error("[link-mindmap] collect CSS:", y);
    }
    let p = r;
    for (let [y, I] of Object.entries(l))
      p = p.replace(new RegExp("var\\(" + y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\)", "g"), I), p = p.replace(new RegExp("var\\(" + y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ",\\s*[^)]+\\)", "g"), I);
    p = p.replace(/var\(--[^)]+\)/g, "#888");
    let m = document.createElement("style");
    m.textContent = p, n.insertBefore(m, n.firstChild);
    let f = t.querySelectorAll(".lkm-card"), u = n.querySelectorAll(".lkm-card");
    for (let y = 0; y < f.length && y < u.length; y++) {
      let I = f[y], T = u[y], E = getComputedStyle(I), B = E.stroke, G = E.fill, D = E.strokeWidth;
      B && B !== "none" && T.setAttribute("stroke", B), G && G !== "none" && T.setAttribute("fill", G), D && T.setAttribute("stroke-width", D);
    }
    let C = t.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign"), x = n.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign");
    for (let y = 0; y < C.length && y < x.length; y++) {
      let I = getComputedStyle(C[y]), T = I.fill, E = I.fontSize;
      T && T !== "none" && x[y].setAttribute("fill", T), E && x[y].setAttribute("font-size", E);
    }
    let F = t.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill"), L = n.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill");
    for (let y = 0; y < F.length && y < L.length; y++) {
      let T = getComputedStyle(F[y]).fill;
      T && T !== "none" && L[y].setAttribute("fill", T);
    }
    let w = t.querySelectorAll(".lkm-edge"), S = n.querySelectorAll(".lkm-edge");
    for (let y = 0; y < w.length && y < S.length; y++) {
      let T = getComputedStyle(w[y]).stroke;
      T && T !== "none" && S[y].setAttribute("stroke", T);
    }
    return new XMLSerializer().serializeToString(n);
  }
  _exportSVG() {
    let t = this._getSVGString();
    if (!t) return;
    let i = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".svg";
    this.app.vault.create(i, t).then(
      () => new v(e("SVG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + i),
      (a) => new v(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a))
    );
  }
  _exportPNG() {
    let t = this._getSVGString();
    if (!t) return;
    let i = this.contentEl.querySelector(".lkm-svg").getBBox(), a = 30, s = i.width + a * 2, o = i.height + a * 2, c = new Image(), d = btoa(unescape(encodeURIComponent(t)));
    c.onload = () => {
      let h = document.createElement("canvas");
      h.width = s * 2, h.height = o * 2;
      let l = h.getContext("2d"), r = getComputedStyle(this.contentEl).getPropertyValue("--background-primary").trim() || "#ffffff";
      l.fillStyle = r, l.fillRect(0, 0, h.width, h.height), l.drawImage(c, 0, 0, h.width, h.height), h.toBlob((p) => {
        let f = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".png";
        p.arrayBuffer().then((u) => this.app.vault.createBinary(f, u).then(
          () => new v(e("PNG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + f),
          (C) => new v(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (C && C.message ? C.message : C))
        ));
      });
    }, c.onerror = () => new v(e("PNG \u5BFC\u51FA\u5931\u8D25")), c.src = "data:image/svg+xml;base64," + d;
  }
  _exportMarkdown() {
    let t = this.currentRoot;
    if (!t) {
      new v(e("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let n = [], i = /* @__PURE__ */ _((c, d) => {
      let h = d === 0 ? "# " : "  ".repeat(d) + "- ", l = c.note.status ? " [" + ot(c.note.status) + "]" : "", r = c.note.type ? " `" + ct(c.note.type) + "`" : "";
      n.push(h + (c.note.title || c.note.file?.name || "?") + r + l);
      for (let p of c.children || []) i(p, d + 1);
    }, "walk");
    i(t, 0);
    let a = n.join(`
`), o = "link-mindmap-outline-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".md";
    this.app.vault.create(o, a).then(
      () => new v(e("Markdown \u5927\u7EB2\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + o),
      (c) => new v(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (c && c.message ? c.message : c))
    );
  }
  _exportCanvas() {
    let t = this.currentRoot;
    if (!t) {
      new v(e("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let n = 300, i = 60, a = 180, s = 20, o = this.s.layoutDir === "v", c = [], d = [], h = /* @__PURE__ */ new Map(), l = 0, r = 0, p = /* @__PURE__ */ _((L) => {
      let w = (L.children || []).filter((S) => S.note.file);
      return w.length ? w.reduce((S, y) => S + p(y), 0) : 1;
    }, "subtreeSize"), m = /* @__PURE__ */ _((L, w, S) => {
      let y = (L.children || []).filter((G) => G.note.file), I = S, T = [];
      for (let G of y) {
        let D = p(G), O = m(G, w + 1, I);
        T.push(O), I += D;
      }
      let E, B;
      if (o ? (E = S * (n + a), B = w * (i + s)) : (E = w * (n + a), T.length ? B = (T[0].y + T[T.length - 1].y) / 2 : B = S * (i + s)), L.note.file) {
        let G = "n" + l++;
        h.set(L.key, G), c.push({
          id: G,
          type: "file",
          file: L.note.file.path,
          x: Math.round(E),
          y: Math.round(B),
          width: n,
          height: i
        });
      }
      return { x: E, y: B };
    }, "layout");
    m(t, 0, 0);
    let f = /* @__PURE__ */ _((L) => {
      for (let w of L.children || []) {
        let S = h.get(L.key), y = h.get(w.key);
        S && y && d.push({
          id: "e" + r++,
          fromNode: S,
          toNode: y,
          fromSide: o ? "bottom" : "right",
          toSide: o ? "top" : "left"
        }), f(w);
      }
    }, "collectEdges");
    if (f(t), !c.length) {
      new v(e("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u8282\u70B9"));
      return;
    }
    let C = JSON.stringify({ nodes: c, edges: d }, null, 2), F = "link-mindmap-canvas-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".canvas";
    this.app.vault.create(F, C).then(
      () => new v(e("Canvas \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + F),
      (L) => new v(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (L && L.message ? L.message : L))
    );
  }
  _parentPathsOf(t) {
    let n = [];
    for (let i of this.notes.values())
      if (i.file.path !== t)
        for (let a of i.childLinks) {
          let s = this.app.metadataCache.getFirstLinkpathDest(a, i.file.path);
          if (s && s.path === t) {
            n.push(i.file.path);
            break;
          }
        }
    return n;
  }
  _buildCrumbChain() {
    if (!this.rootPath) return [];
    let t = [], n = /* @__PURE__ */ new Set(), i = this.rootPath;
    for (; i && !n.has(i); ) {
      n.add(i);
      let a = this.notes.get(i);
      if (!a) break;
      t.unshift({ note: a });
      let s = this._parentPathsOf(i);
      i = s.length ? s[0] : null;
    }
    return t;
  }
  _up() {
    let t = this._selKey ? this._nodeIndex.get(this._selKey) : null, n = t && t.note.file ? t.note : this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!n || !n.file) {
      new v(e("\u6CA1\u6709\u53EF\u8DF3\u8F6C\u7684\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let i = this._parentPathsOf(n.file.path);
    if (!i.length) {
      new v("\u300C" + Z(n.title, 12) + e("\u300D\u6CA1\u6709\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let a = n.file.path, s = /* @__PURE__ */ _((c) => {
      this._focusPath(c);
      let d = [...this._nodeIndex.values()].find((h) => h.note.file && h.note.file.path === a);
      d && (this._selKey = d.key, this.render());
    }, "go");
    if (i.length === 1) {
      s(i[0]);
      return;
    }
    let o = i.map((c) => ({ label: (this.notes.get(c) || {}).title || c, path: c }));
    new Et(this.app, o, (c) => s(c.path), e("\u8BE5\u8282\u70B9\u6709\u591A\u4E2A\u4E0A\u7EA7\uFF0C\u9009\u62E9\u8981\u524D\u5F80\u7684\u4E0A\u7EA7\u2026")).open();
  }
  locateFile(t, n) {
    if (!n && !this.s.autoLocate || !t || t.extension !== "md" || this._batchMode || this._mode === "dash") return;
    try {
      if (typeof this.containerEl.isShown == "function" && !this.containerEl.isShown()) return;
    } catch {
    }
    let i = null;
    for (let c of this._nodeIndex.values())
      c.note.file && c.note.file.path === t.path && (!i || !c.isAlias) && (i = c);
    if (!i) return;
    if (this._kwFile && this.currentRoot) {
      let c = this._findClone(this.currentRoot, t.path);
      if (c && this._cloneShown(c)) {
        this._selKey = c.key, this.render();
        return;
      }
    }
    this._kwFile = null, this._multiRoot = !1;
    let a = [];
    for (let c = i; c; c = c.parent) a.unshift(c);
    let s = a[0], o = !1;
    this.rootPath !== s.note.file.path && (this._history.push({ rootPath: this.rootPath, kwFile: this._kwFile, multiRoot: this._multiRoot, currentRoot: this._multiRoot ? this.currentRoot : null }), this.rootPath = s.note.file.path, o = !0);
    for (let c = 0; c < a.length; c++)
      c < a.length - 1 && !a[c].expanded && (o = !0), a[c].expanded = !0, this._expandedMem.set(a[c].note.file ? a[c].note.file.path : a[c].key, !0);
    !o && this._selKey === i.key || (this._selKey = i.key, this.render({ centerPath: t.path }));
  }
  _findClone(t, n) {
    if (!t) return null;
    if (t.note.file && t.note.file.path === n) return t;
    for (let i of t.children || []) {
      let a = this._findClone(i, n);
      if (a) return a;
    }
    return null;
  }
  _cloneShown(t) {
    let n = t;
    for (; n && n.parent; ) {
      if (!n.parent.expanded) return !1;
      n = n.parent;
    }
    return !0;
  }
  _select(t) {
    this._selKey = t, this.render();
  }
  _copyLink(t) {
    if (!t || !t.note.file) return;
    let n = "[[" + t.note.file.basename + "]]";
    navigator.clipboard.writeText(n).then(
      () => new v(e("\u5DF2\u590D\u5236\uFF1A") + n),
      () => new v(e("\u590D\u5236\u5931\u8D25"))
    );
  }
  _copySubtree(t) {
    if (!t) return;
    let n = [], i = /* @__PURE__ */ _((a, s) => {
      let o = s === 0 ? "" : "  ".repeat(s) + "- ";
      n.push(o + "[[" + (a.note.file ? a.note.file.basename : a.note.title) + "]]");
      for (let c of a.children || []) i(c, s + 1);
    }, "walk");
    i(t, 0), navigator.clipboard.writeText(n.join(`
`)).then(
      () => new v(e("\u5DF2\u590D\u5236\u5B50\u6811\uFF08") + n.length + e(" \u4E2A\u8282\u70B9\uFF09")),
      () => new v(e("\u590D\u5236\u5931\u8D25"))
    );
  }
  _renameNode(t) {
    if (!t || !t.note.file) {
      new v(e("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    new Oe(this.app, t.note.file.basename, async (n) => {
      try {
        let i = t.note.file.basename, a = t.note.file.parent ? t.note.file.parent.path : "", s = et((a ? a + "/" : "") + yt(n) + ".md");
        if (s === t.note.file.path) return;
        if (this.app.vault.getAbstractFileByPath(s)) {
          new v(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + yt(n));
          return;
        }
        await this.app.vault.rename(t.note.file, s);
        let o = yt(n), c = this.s.linkField || "children", d = this.s.backField || "parent";
        for (let l of this.notes.values())
          l.file.path !== s && await this.app.fileManager.processFrontMatter(l.file, (r) => {
            let p = Vt(r[c]), m = !1, f = p.map((u) => _t(u) === i ? (m = !0, "[[" + o + "]]") : u);
            m && (r[c] = f), r[d] != null && _t(r[d]) === i && (r[d] = o);
          });
        let h = this.s.titleField || "title";
        await this.app.fileManager.processFrontMatter(t.note.file, (l) => {
          l[h] != null && (l[h] = o);
        }), new v(e("\u5DF2\u91CD\u547D\u540D\u4E3A ") + o), await this.rebuild(!0);
      } catch (i) {
        new v(e("\u91CD\u547D\u540D\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _renameNode:", i);
      }
    }).open();
  }
  _subtreePaths(t) {
    let n = /* @__PURE__ */ new Set();
    return (/* @__PURE__ */ _((function i(a) {
      a.note.file && n.add(a.note.file.path), a.children.forEach(i);
    }), "walk"))(t), n;
  }
  _deleteNode(t) {
    if (!t || !t.note.file) {
      new v(e("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (t.isAlias) {
      if (!t.parent || !t.parent.note.file) {
        new v(e("\u65E0\u6CD5\u786E\u5B9A\u8BE5\u6302\u70B9\u7684\u7236\u8282\u70B9"));
        return;
      }
      new Lt(
        this.app,
        e("\u79FB\u9664\u5173\u8054"),
        "\u300C" + Z(t.note.title, 16) + e(`\u300D\u662F\u91CD\u590D\u8282\u70B9\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\uFF09\u3002
\u672C\u6B21\u53EA\u79FB\u9664\u4ECE\u300C`) + Z(t.parent.note.title, 16) + e("\u300D\u5230\u5B83\u7684\u5173\u8054\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\u3002"),
        async () => {
          try {
            await vt(this.app, t.parent.note.file, this.s.linkField, t.note.file.path), this._selKey = null, new v(e("\u5DF2\u79FB\u9664\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (a) {
            new v(e("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a)), console.error("[link-mindmap] removeLink:", a);
          }
        }
      ).open();
      return;
    }
    let n = t.children.length, i = new gt(this.app);
    i.onOpen = () => {
      let { contentEl: a } = i;
      a.createEl("h3", { text: e("\u5220\u9664\u8282\u70B9") }), a.createEl("p", { text: "\u300C" + Z(t.note.title, 20) + "\u300D" + (n ? e("\uFF08\u542B ") + n + e(" \u4E2A\u5B50\u8282\u70B9\uFF09") : ""), cls: "lkm-modal-sub" });
      let s = a.createDiv("lkm-confirm-row");
      s.createEl("button", { cls: "lkm2-btn-ghost", text: e("\u53D6\u6D88") }).addEventListener("click", () => i.close());
      let c = s.createEl("button", { cls: "lkm-btn", text: e("\u79FB\u9664\u5F53\u524D\u5173\u8054") });
      c.title = t.parent && t.parent.note.file ? e("\u53EA\u79FB\u9664\u5F53\u524D\u7236\u8282\u70B9\u5230\u5B83\u7684\u94FE\u63A5\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559") : e("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"), (!t.parent || !t.parent.note.file) && (c.disabled = !0), c.addEventListener("click", () => {
        if (!t.parent || !t.parent.note.file) {
          new v(e("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"));
          return;
        }
        i.close(), (async () => {
          try {
            await vt(this.app, t.parent.note.file, this.s.linkField, t.note.file.path), this._selKey = null, new v(e("\u5DF2\u79FB\u9664\u4ECE\u300C") + Z(t.parent.note.title, 14) + e("\u300D\u5230\u300C") + Z(t.note.title, 14) + e("\u300D\u7684\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (l) {
            new v(e("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l)), console.error("[link-mindmap] removeLink:", l);
          }
        })();
      });
      let d = s.createEl("button", { cls: "lkm-btn", text: e("\u79FB\u9664\u6240\u6709\u5173\u8054") });
      d.title = e("\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559"), d.addEventListener("click", () => {
        i.close(), (async () => {
          try {
            let l = t.note.file.path;
            for (let r of this.notes.values())
              r.file.path !== l && r.childLinks.length && await vt(this.app, r.file, this.s.linkField, l);
            this._selKey = null, new v(e("\u5DF2\u79FB\u9664\u6240\u6709\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (l) {
            new v(e("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l)), console.error("[link-mindmap] removeLink:", l);
          }
        })();
      });
      let h = s.createEl("button", { cls: "lkm2-btn-danger", text: e("\u5220\u9664\u6587\u4EF6") });
      h.title = e("\u79FB\u5165\u56DE\u6536\u7AD9\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664"), h.addEventListener("click", () => {
        if (!n) {
          i.close(), this._doDelete(t);
          return;
        }
        let l = new gt(this.app);
        l.onOpen = () => {
          let { contentEl: r } = l;
          r.createEl("h3", { text: e("\u5220\u9664\u5B50\u8282\u70B9") }), r.createEl("p", { text: "\u300C" + Z(t.note.title, 20) + e("\u300D\u542B ") + n + e(" \u4E2A\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u4E00\u5E76\u5220\u9664\uFF1F"), cls: "lkm-modal-sub" });
          let p = r.createDiv("lkm-confirm-row");
          p.createEl("button", { cls: "lkm2-btn-ghost", text: e("\u53D6\u6D88") }).addEventListener("click", () => l.close()), p.createEl("button", { cls: "lkm-btn", text: e("\u4EC5\u5220\u6B64\u8282\u70B9") }).addEventListener("click", () => {
            l.close(), i.close(), this._doDelete(t);
          }), p.createEl("button", { cls: "lkm2-btn-danger", text: e("\u5168\u90E8\u5220\u9664") }).addEventListener("click", () => {
            l.close(), i.close(), this._doDelete(t, !0);
          });
        }, l.onClose = () => l.contentEl.empty(), l.open();
      });
    }, i.onClose = () => i.contentEl.empty(), i.open();
  }
  async _doDelete(t, n) {
    try {
      let i = n ? this._subtreePaths(t) : /* @__PURE__ */ new Set([t.note.file.path]);
      for (let s of this.notes.values())
        if (!i.has(s.file.path))
          for (let o of i)
            s.childLinks.length && await vt(this.app, s.file, this.s.linkField, o);
      for (let s of i) {
        let o = this.app.vault.getAbstractFileByPath(s);
        o && o.path && await this.app.vault.trash(o, !0);
      }
      this._selKey = null;
      let a = i.size;
      new v(e("\u5DF2\u5220\u9664\u300C") + Z(t.note.title, 16) + "\u300D" + (a > 1 ? e("\uFF08\u542B\u5B50\u8282\u70B9\u5171 ") + a + e(" \u4E2A\u6587\u4EF6\uFF09") : "") + e("\uFF08\u53EF\u5728\u56DE\u6536\u7AD9\u6062\u590D\uFF09")), await this.rebuild(!0);
    } catch (i) {
      new v(e("\u5220\u9664\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _deleteNode:", i);
    }
  }
  _showNodeMenu(t, n) {
    if (!t || !t.note.file) return;
    let i = new Bt();
    i.addItem((s) => s.setTitle(e("\u6253\u5F00\u7B14\u8BB0")).setIcon("file-text").onClick(() => {
      this.app.workspace.getLeaf(!0).openFile(t.note.file);
    })), i.addItem((s) => s.setTitle(e("\u65B0\u589E\u5B50\u8282\u70B9")).setIcon("plus").onClick(() => this.createChild(t))), i.addItem((s) => s.setTitle(e("\u805A\u7126\u5230\u6B64\u8282\u70B9")).setIcon("focus").onClick(() => this._focus(t.key)));
    let a = this._parentPathsOf(t.note.file.path);
    if (i.addItem((s) => s.setTitle(e("\u8DF3\u5230\u4E0A\u7EA7")).setIcon("arrow-up").onClick(() => this._up())), a.length > 1)
      for (let s of a) {
        let o = this.notes.get(s);
        i.addItem((c) => c.setTitle("  \u21B3 " + Z(o ? o.title : s, 20)).setIcon("arrow-up").onClick(() => {
          this._focusPath(s);
          let d = [...this._nodeIndex.values()].find((h) => h.note.file && h.note.file.path === t.note.file.path);
          d && (this._selKey = d.key, this.render());
        }));
      }
    i.addSeparator(), i.addItem((s) => s.setTitle(e("\u4FEE\u6539\u72B6\u6001")).setIcon("circle-dot").onClick(() => this._setStatusDialog(t))), i.addItem((s) => s.setTitle(t.note.zk ? e("\u53D6\u6D88\u4E3B\u7B14\u8BB0") : e("\u6807\u8BB0\u4E3B\u7B14\u8BB0")).setIcon("star").onClick(() => this._toggleZk(t))), i.addItem((s) => s.setTitle(e("\u4FEE\u6539\u7C7B\u578B")).setIcon("tag").onClick(() => this._setTypeDialog(t))), i.addItem((s) => s.setTitle(e("\u4FEE\u6539\u65E5\u671F")).setIcon("calendar").onClick(() => this._setDateDialog(t))), t.children.length && i.addItem((s) => s.setTitle(t.expanded ? e("\u6298\u53E0\u5B50\u8282\u70B9") : e("\u5C55\u5F00\u5B50\u8282\u70B9")).setIcon(t.expanded ? "chevron-down" : "chevron-right").onClick(() => {
      t.expanded = !t.expanded, this._expandedMem.set(t.note.file ? t.note.file.path : t.key, t.expanded), this.render();
    })), i.addSeparator(), i.addItem((s) => s.setTitle(e("\u91CD\u547D\u540D")).setIcon("pencil").onClick(() => this._renameNode(t))), i.addItem((s) => s.setTitle(e("\u590D\u5236\u94FE\u63A5")).setIcon("copy").onClick(() => this._copyLink(t))), i.addItem((s) => s.setTitle(e("\u590D\u5236\u5B50\u6811\u5927\u7EB2")).setIcon("list").onClick(() => this._copySubtree(t))), i.addItem((s) => s.setTitle(e("\u79FB\u52A8\u5230\u7236\u5361")).setIcon("corner-up-right").onClick(() => this._moveNodeDialog(t))), i.addItem((s) => s.setTitle(e("\u540C\u7EA7\u4E4B\u524D")).setIcon("arrow-up").onClick(() => this._moveSiblingDialog(t, !1))), i.addItem((s) => s.setTitle(e("\u540C\u7EA7\u4E4B\u540E")).setIcon("arrow-down").onClick(() => this._moveSiblingDialog(t, !0))), i.addSeparator(), i.addItem((s) => s.setTitle(t.isAlias ? e("\u79FB\u9664\u5173\u8054\uFF08\u4FDD\u7559\u6587\u4EF6\uFF09") : e("\u5220\u9664\u8282\u70B9")).setIcon("trash").onClick(() => this._deleteNode(t))), n && typeof n.preventDefault == "function" ? i.showAtMouseEvent(n) : n && n.clientX !== void 0 && i.showAtPosition({ x: n.clientX, y: n.clientY });
  }
  _isDescendant(t, n) {
    return this._subtreePaths(t).has(n);
  }
  _moveNodeDialog(t) {
    if (!t || !t.note.file) return;
    let n = this._subtreePaths(t), i = [...this.notes.values()].filter((a) => a.file.path !== t.note.file.path && !n.has(a.file.path)).sort((a, s) => a.title.localeCompare(s.title, "zh")).map((a) => ({ label: a.title, path: a.file.path }));
    if (!i.length) {
      new v(e("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new Qt(this.app, i, (a) => this._moveNode(t, a.path)).open();
  }
  async _moveNode(t, n) {
    let i = t.note;
    if (!i.file) return;
    if (this._subtreePaths(t).has(n)) {
      new v(e("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let a = this.notes.get(n);
    if (!a) {
      new v(e("\u76EE\u6807\u7236\u7B14\u8BB0\u4E0D\u5B58\u5728"));
      return;
    }
    try {
      t.parent && t.parent.note.file && await vt(this.app, t.parent.note.file, this.s.linkField, i.file.path), await Ht(this.app, a.file, this.s.linkField, i.file.basename), new v(e("\u5DF2\u79FB\u52A8\u300C") + Z(i.title, 14) + e("\u300D\u5230\u300C") + Z(a.title, 14) + "\u300D"), await new Promise((s) => setTimeout(s, 300)), await this.rebuild(!0);
    } catch (s) {
      new v(e("\u79FB\u52A8\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
    }
  }
  _moveSiblingDialog(t, n) {
    if (!t || !t.parent || !t.parent.note.file) {
      new v(e("\u6839\u8282\u70B9\u6CA1\u6709\u540C\u7EA7\u8282\u70B9"));
      return;
    }
    let i = t.parent.children.filter((s) => s !== t);
    if (!i.length) {
      new v(e("\u6CA1\u6709\u540C\u7EA7\u8282\u70B9\u53EF\u63D2\u5165"));
      return;
    }
    let a = i.map((s) => ({ label: s.note.title, path: s.note.file.path }));
    new Qt(this.app, a, (s) => this._reorderSiblings(t, s.path, n)).open();
  }
  async _reorderSiblings(t, n, i) {
    if (!t.parent || !t.parent.note.file) {
      new v(e("\u65E0\u6CD5\u6392\u5E8F\uFF1A\u591A\u9009\u6839\u8282\u70B9\u95F4\u4E0D\u80FD\u8C03\u6574\u987A\u5E8F"));
      return;
    }
    let a = t.parent.note.file;
    try {
      await this.app.fileManager.processFrontMatter(a, (s) => {
        let o = this.s.linkField, c = Vt(s[o]), d = /* @__PURE__ */ _((p) => c.findIndex((m) => {
          let f = this.app.metadataCache.getFirstLinkpathDest(_t(m), a.path);
          return f && f.path === p;
        }), "idxOf"), h = d(t.note.file.path);
        if (h < 0) return;
        let l = c.splice(h, 1)[0], r = d(n);
        if (r < 0) {
          c.splice(h, 0, l);
          return;
        }
        c.splice(i ? r + 1 : r, 0, l), s[o] = c;
      }), await new Promise((s) => setTimeout(s, 300)), await this.rebuild(!0);
    } catch (s) {
      new v(e("\u540C\u7EA7\u79FB\u52A8\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
    }
  }
  async _moveAndReorder(t, n, i) {
    if (!n.parent || !n.parent.note.file) {
      new v(e("\u65E0\u6CD5\u79FB\u52A8\u5230\u8BE5\u4F4D\u7F6E"));
      return;
    }
    if (this._subtreePaths(t).has(n.parent.note.file.path)) {
      new v(e("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let a = n.parent.note.file;
    try {
      if (t.parent && t.parent.note.file && await vt(this.app, t.parent.note.file, this.s.linkField, t.note.file.path), await this.app.fileManager.processFrontMatter(a, (s) => {
        let o = this.s.linkField, c = Vt(s[o]);
        c.some((m) => _t(m) === t.note.file.basename) || c.push("[[" + t.note.file.basename + "]]");
        let h = /* @__PURE__ */ _((m) => c.findIndex((f) => {
          let u = this.app.metadataCache.getFirstLinkpathDest(_t(f), a.path);
          return u && u.path === m;
        }), "idxOf"), l = h(t.note.file.path);
        if (l < 0) return;
        let r = c.splice(l, 1)[0], p = h(n.note.file.path);
        if (p < 0) {
          c.splice(l, 0, r);
          return;
        }
        c.splice(i ? p + 1 : p, 0, r), s[o] = c;
      }), this.s.autoAddBackLink) {
        let s = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(t.note.file, (o) => {
          o[s] = a.basename;
        });
      }
      new v(e("\u5DF2\u79FB\u52A8\u300C") + Z(t.note.title, 14) + e("\u300D\u5230\u300C") + Z(n.parent.note.title, 14) + "\u300D" + e(i ? "\u4E4B\u540E" : "\u4E4B\u524D")), await new Promise((s) => setTimeout(s, 300)), await this.rebuild(!0);
    } catch (s) {
      new v(e("\u79FB\u52A8\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
    }
  }
  _wouldCycle(t, n) {
    if (t === n) return !0;
    let i = [n], a = /* @__PURE__ */ new Set(), s = 0;
    for (; i.length && s++ < 5e3; ) {
      let o = i.pop();
      if (o === t) return !0;
      if (a.has(o)) continue;
      a.add(o);
      let c = this.notes.get(o);
      if (c)
        for (let d of c.childLinks) {
          let h = this.app.metadataCache.getFirstLinkpathDest(d, c.file.path);
          h && this.notes.has(h.path) && i.push(h.path);
        }
    }
    return !1;
  }
  async _addRelation(t, n) {
    let i = t && t.note;
    if (!i || !i.file) {
      new v(e("\u6E90\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (!n || !n.file) {
      new v(e("\u76EE\u6807\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (i.file.path === n.file.path) {
      new v(e("\u4E0D\u80FD\u5173\u8054\u5230\u81EA\u5DF1"));
      return;
    }
    if (ie(this.app, this.notes, i, "child").some((a) => a.file.path === n.file.path)) {
      new v("\u300C" + Z(i.title, 12) + e("\u300D\u5DF2\u5173\u8054\u5230\u300C") + Z(n.title, 12) + e("\u300D\uFF0C\u65E0\u9700\u91CD\u590D"));
      return;
    }
    if (this._wouldCycle(i.file.path, n.file.path)) {
      new v(e("\u4E0D\u80FD\u5EFA\u7ACB\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF\uFF08\u76EE\u6807\u5DF2\u662F\u300C") + Z(i.title, 12) + e("\u300D\u7684\u4E0A\u7EA7\uFF09"));
      return;
    }
    try {
      if (await Ht(this.app, i.file, this.s.linkField, n.file.basename), this.s.autoAddBackLink) {
        let a = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(n.file, (s) => {
          s[a] = i.file.basename;
        });
      }
      new v(e("\u5DF2\u5EFA\u7ACB\u5173\u8054\uFF1A") + Z(i.title, 12) + " \u2192 " + Z(n.title, 12)), await new Promise((a) => setTimeout(a, 300)), await this.rebuild(!0);
    } catch (a) {
      new v(e("\u5EFA\u7ACB\u5173\u8054\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
    }
  }
  _toggleBatch() {
    this._batchMode = !this._batchMode, this._batchMode || this._selected.clear(), this.render();
  }
  _toggleSelect(t) {
    this._selected.has(t) ? this._selected.delete(t) : this._selected.add(t), this.render();
  }
  _batchMoveDialog() {
    let t = [...this._selected];
    if (!t.length) {
      new v(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = t.map((s) => this._nodeIndex.get(s)).filter(Boolean), i = /* @__PURE__ */ new Set();
    n.forEach((s) => this._subtreePaths(s).forEach((o) => i.add(o)));
    let a = [...this.notes.values()].filter((s) => !i.has(s.file.path)).sort((s, o) => s.title.localeCompare(o.title, "zh")).map((s) => ({ label: s.title, path: s.file.path }));
    if (!a.length) {
      new v(e("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new Qt(this.app, a, async (s) => {
      let o = this.notes.get(s.path), c = 0;
      for (let d of n)
        if (d.note.file)
          try {
            d.parent && d.parent.note.file && await vt(this.app, d.parent.note.file, this.s.linkField, d.note.file.path), await Ht(this.app, o.file, this.s.linkField, d.note.file.basename), c++;
          } catch {
          }
      new v(e("\u6279\u91CF\u79FB\u52A8\u5B8C\u6210\uFF1A") + c + e(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchDelete() {
    let t = [...this._selected];
    if (!t.length) {
      new v(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = t.map((c) => this._nodeIndex.get(c)).filter((c) => c && c.note.file), i = n.filter((c) => !c.isAlias), a = new Set(i.map((c) => c.note.file.path)), s = n.filter((c) => c.isAlias && !a.has(c.note.file.path)), o = "";
    if (i.length && (o += e("\u5C06\u628A ") + i.length + e(" \u7BC7\u7B14\u8BB0\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u7684\u94FE\u63A5\u91CC\u79FB\u9664\u3002")), s.length && (o += (o ? " " : "") + e("\u53E6\u5C06\u79FB\u9664 ") + s.length + e(" \u4E2A\u989D\u5916\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09\u3002")), !o) {
      new v(e("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    new Lt(this.app, e("\u6279\u91CF\u5220\u9664"), o, async () => {
      let c = 0;
      for (let d of s)
        try {
          d.parent && d.parent.note.file && (await vt(this.app, d.parent.note.file, this.s.linkField, d.note.file.path), c++);
        } catch {
        }
      for (let d of i)
        try {
          let h = d.note.file;
          for (let l of this.notes.values())
            l.file.path !== h.path && l.childLinks.length && await vt(this.app, l.file, this.s.linkField, h.path);
          await this.app.vault.trash(h, !0), c++;
        } catch {
        }
      new v(e("\u5DF2\u5904\u7406 ") + c + e(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchSetType() {
    if (![...this._selected].length) {
      new v(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = this.s.typeColors || {}, i = Object.keys(n), a = [{ label: e("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: s, path: s });
    new Et(this.app, a, (s) => this._batchSetTypeDo(s.path), e("\u6279\u91CF\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _batchSetTypeDo(t) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new v(e("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let a = this.s.typeField || "type", s = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (c) => {
          t ? c[a] = t : delete c[a];
        }), s++;
      } catch (c) {
        console.error("[link-mindmap] _batchSetTypeDo:", c);
      }
    new v(e("\u5DF2\u4FEE\u6539 ") + s + e(" \u4E2A\u8282\u70B9\u7C7B\u578B\u4E3A\u300C") + (t || e("\u65E0\u7C7B\u578B")) + "\u300D"), await this.rebuild(!0);
  }
  _batchSetStatus() {
    if (![...this._selected].length) {
      new v(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = this.s.statusColors || {}, i = Object.keys(n), a = [{ label: e("\u65E0\u72B6\u6001\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: ot(s), path: s });
    new Et(this.app, a, (s) => this._batchSetStatusDo(s.path), e("\u6279\u91CF\u9009\u62E9\u72B6\u6001\u2026")).open();
  }
  async _batchSetStatusDo(t) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new v(e("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let a = this.s.statusField || "status", s = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (c) => {
          t ? c[a] = t : delete c[a];
        }), s++;
      } catch (c) {
        console.error("[link-mindmap] _batchSetStatusDo:", c);
      }
    new v(e("\u5DF2\u4FEE\u6539 ") + s + e(" \u4E2A\u8282\u70B9\u72B6\u6001\u4E3A\u300C") + (t ? ot(t) : e("\u65E0\u72B6\u6001")) + "\u300D"), await this.rebuild(!0);
  }
  async _batchSetMain(t) {
    let n = [...this._selected];
    if (!n.length) {
      new v(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let i = n.map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new v(e("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let a = this.s.zkField || "main", s = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (c) => {
          c[a] = t;
        }), s++;
      } catch (c) {
        console.error("[link-mindmap] _batchSetMain:", c);
      }
    new v(e("\u5DF2") + e(t ? "\u6807\u8BB0\u4E3B\u7B14\u8BB0" : "\u53D6\u6D88\u4E3B\u7B14\u8BB0") + " " + s + e(" \u4E2A\u8282\u70B9")), await this.rebuild(!0);
  }
  _setStatusDialog(t) {
    if (!t || !t.note.file) return;
    let n = this.s.statusColors || {}, i = Object.keys(n), a = [{ label: e("\u65E0\u72B6\u6001\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: ot(s) + (t.note.status === s ? " \u2713" : ""), path: s });
    new Et(this.app, a, (s) => this._setStatus(t, s.path), e("\u9009\u62E9\u72B6\u6001\u2026")).open();
  }
  async _setStatus(t, n) {
    if (t.note.file)
      try {
        let i = this.s.statusField || "status";
        await this.app.fileManager.processFrontMatter(t.note.file, (a) => {
          n ? a[i] = n : delete a[i];
        }), new v(e("\u5DF2\u4FEE\u6539\u72B6\u6001\uFF1A") + (n ? ot(n) : e("\u65E0\u72B6\u6001")) + " \xB7 " + t.note.title), await this.rebuild(!0);
      } catch (i) {
        new v(e("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
      }
  }
  async _toggleZk(t) {
    if (t.note.file)
      try {
        let n = !1;
        await this.app.fileManager.processFrontMatter(t.note.file, (i) => {
          let a = this.s.zkField || "main";
          n = !(i[a] === !0 || String(i[a]) === "true"), i[a] = n;
        }), new v(e(n ? "\u5DF2\u6807\u8BB0\u4E3B\u7B14\u8BB0\uFF1A" : "\u5DF2\u53D6\u6D88\u4E3B\u7B14\u8BB0\uFF1A") + t.note.title), await this.rebuild(!0);
      } catch (n) {
        new v(e("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
      }
  }
  _setTypeDialog(t) {
    if (!t || !t.note.file) return;
    let n = this.s.typeColors || {}, i = Object.keys(n), a = [{ label: e("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: ct(s) + (t.note.type === s ? " \u2713" : ""), path: s });
    new Et(this.app, a, (s) => this._setType(t, s.path), e("\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _setType(t, n) {
    if (t.note.file)
      try {
        let i = this.s.typeField || "type";
        await this.app.fileManager.processFrontMatter(t.note.file, (a) => {
          n ? a[i] = n : delete a[i];
        }), new v(e("\u5DF2\u4FEE\u6539\u7C7B\u578B\uFF1A") + (n || e("\u65E0\u7C7B\u578B")) + " \xB7 " + t.note.title), await this.rebuild(!0);
      } catch (i) {
        new v(e("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setType:", i);
      }
  }
  _setDateDialog(t) {
    if (!t || !t.note.file) return;
    let n = new gt(this.app);
    n.onOpen = () => {
      let { contentEl: i } = n;
      i.addClass("lkm-multipick"), i.createEl("h3", { text: e("\u4FEE\u6539\u65E5\u671F") }), i.createEl("p", { text: "\u300C" + Z(t.note.title, 20) + e("\u300D\u5F53\u524D\u65E5\u671F\uFF1A") + (t.note.date || e("\u65E0")), cls: "lkm-modal-sub" });
      let a = i.createEl("input", { type: "date", cls: "lkm-multipick-input" });
      a.value = t.note.date || "";
      let s = i.createDiv("lkm-multipick-btns");
      new R(s).addButton((o) => o.setButtonText(e("\u786E\u5B9A")).setCta().onClick(() => {
        let c = a.value || "";
        n.close(), this._setDate(t, c);
      })).addButton((o) => o.setButtonText(e("\u6E05\u9664")).onClick(() => {
        n.close(), this._setDate(t, "");
      })).addButton((o) => o.setButtonText(e("\u53D6\u6D88")).onClick(() => n.close())), a.focus();
    }, n.onClose = () => n.contentEl.empty(), n.open();
  }
  async _setDate(t, n) {
    if (t.note.file)
      try {
        let i = this.s.dateField || "date";
        await this.app.fileManager.processFrontMatter(t.note.file, (a) => {
          n ? a[i] = n : delete a[i];
        }), new v(e("\u5DF2\u4FEE\u6539\u65E5\u671F\uFF1A") + (n || e("\u65E0")) + " \xB7 " + t.note.title), await this.rebuild(!0);
      } catch (i) {
        new v(e("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setDate:", i);
      }
  }
  openRootPicker() {
    let t = [...this.notes.values()].filter((i) => i.zk).sort((i, a) => i.title.localeCompare(a.title, "zh")), n = t.length ? t : [...this.notes.values()].filter((i) => !this.referenced.has(i.file.path));
    if (!n.length) {
      new v(e("\u6CA1\u6709\u4E3B\u7B14\u8BB0\uFF08main: true\uFF09"));
      return;
    }
    new Et(
      this.app,
      n.map((i) => ({ label: i.title, path: i.file.path })),
      (i) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = i.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      e("\u9009\u62E9\u4E3B\u7B14\u8BB0\u2026")
    ).open();
  }
  openNoteSearch() {
    let t = [...this.notes.values()].sort((n, i) => n.title.localeCompare(i.title, "zh"));
    if (!t.length) {
      new v(e("\u6CA1\u6709\u53EF\u641C\u7D22\u7684\u7B14\u8BB0"));
      return;
    }
    new Et(
      this.app,
      t.map((n) => ({ label: n.title, path: n.file.path })),
      (n) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = n.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      e("\u641C\u7D22\u7B14\u8BB0\u2026")
    ).open();
  }
  openMultiPick() {
    let t = [...this.notes.values()].sort((o, c) => (c.file.stat.ctime || 0) - (o.file.stat.ctime || 0));
    if (!t.length) {
      new v(e("\u6CA1\u6709\u53EF\u9009\u7684\u7B14\u8BB0"));
      return;
    }
    let n = [];
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length)
      n = this.currentRoot.children.map((o) => o.note.file ? o.note.file.path : null).filter(Boolean);
    else if (this._selKey) {
      let o = this._nodeIndex.get(this._selKey);
      o && o.note.file && n.push(o.note.file.path);
    }
    let i = Object.keys(this.s.typeColors || {}), a = this.s.statusColors || {}, s = t.map((o) => ({
      label: o.title,
      path: o.file.path,
      isMain: o.zk,
      type: o.type || "",
      status: o.status || "",
      orphan: !o.childLinks.length && !this.referenced.has(o.file.path)
    }));
    new Ae(
      this.app,
      s,
      (o) => this._showMultiRoot(o),
      n,
      i,
      a
    ).open();
  }
  _buildMultiRootTree(t, n) {
    let i = /* @__PURE__ */ new Set(), a = t.filter((r) => i.has(r.file.path) ? !1 : (i.add(r.file.path), !0)), s = a.map((r) => zt(this.app, this.notes, r)), o = s.map((r) => {
      let p = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ _(function m(f) {
        f.note.file && p.add(f.note.file.path), f.children.forEach(m);
      }, "collect"))(r), p;
    }), c = a.map((r) => r.file.path), d = [], h = [];
    for (let r = 0; r < s.length; r++) {
      let p = !1;
      for (let m = 0; m < s.length; m++)
        if (r !== m && o[m].has(c[r])) {
          p = !0;
          break;
        }
      p || (d.push(s[r]), h.push(c[r]));
    }
    let l = {
      note: { file: null, title: n, zk: !1, status: "", type: "", date: "", childLinks: [], parentLinks: [] },
      parent: null,
      children: d,
      expanded: !0,
      isAlias: !1,
      key: "#root"
    };
    for (let r of d) r.parent = l;
    return { virtualRoot: l, rootPaths: h, allSelectedPaths: c };
  }
  _showMultiRoot(t) {
    let n = t.map((o) => this.notes.get(o)).filter(Boolean);
    if (!n.length) {
      new v(e("\u6CA1\u6709\u6709\u6548\u7684\u7B14\u8BB0"));
      return;
    }
    let { virtualRoot: i, rootPaths: a, allSelectedPaths: s } = this._buildMultiRootTree(n, e("\u591A\u9009\u5BFC\u56FE\uFF08") + n.length + e(" \u7BC7\uFF09"));
    this._multiRootPaths = s, this._selectedRootPaths = /* @__PURE__ */ new Set(s), this._kwFile = null, this._multiRoot = !0, this.rootPath = null, this.currentRoot = i, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render({ fit: !0 });
  }
  _renderHelpContent(t) {
    t.createEl("h3", { text: e("\u6B22\u8FCE\u4F7F\u7528\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE") }), t.createEl("p", { text: e("\u7ED3\u5408\u5362\u66FC\u7B14\u8BB0\u7684\u5C42\u7EA7\u601D\u60F3\uFF0C\u5229\u7528 Obsidian \u5F3A\u5927\u7684\u53CC\u94FE\u529F\u80FD\u5EFA\u7ACB\u7B14\u8BB0\u95F4\u7684\u7236\u5B50\u5173\u7CFB\uFF0C\u53D6\u6D88\u4E86\u7F16\u53F7\u2014\u2014\u6BCF\u4E2A\u8282\u70B9\u5C31\u662F\u4E00\u7BC7\u7B14\u8BB0\uFF0C\u901A\u8FC7 frontmatter \u7684 children/parent \u94FE\u63A5\u81EA\u7136\u5173\u8054\uFF0C\u65E0\u9700\u7EF4\u62A4\u4EFB\u4F55\u7F16\u53F7\u3002"), cls: "lkm-guide-intro" });
    let n = t.createDiv("lkm-guide-steps");
    n.createEl("h4", { text: e("\u5FEB\u901F\u4E0A\u624B") });
    let i = [
      ["\u2460", e("\u521B\u5EFA\u7B14\u8BB0"), e("\u70B9\u51FB\u4E0B\u65B9\u300C\u521B\u5EFA\u7B14\u8BB0\u300D\uFF0C\u8F93\u5165\u6807\u9898\u5373\u53EF\u3002\u521B\u5EFA\u65F6\u53EF\u52FE\u9009\u300C\u4E3B\u7B14\u8BB0\u300D\u4F5C\u4E3A\u5BFC\u56FE\u5165\u53E3\u3002")],
      ["\u2461", e("\u6DFB\u52A0\u5B50\u8282\u70B9"), e("\u521B\u5EFA\u540E\uFF0C\u53F3\u952E/\u957F\u6309\u8282\u70B9 \u2192\u300C\u65B0\u589E\u5B50\u8282\u70B9\u300D\uFF0C\u81EA\u52A8\u5728\u7236\u7B14\u8BB0\u5199\u5165 children \u94FE\u63A5\u3002")],
      ["\u2462", e("\u67E5\u770B\u5BFC\u56FE"), e("\u4E3B\u7B14\u8BB0\u81EA\u52A8\u5C55\u5F00\u4E3A\u5BFC\u56FE\u6811\u3002\u62D6\u52A8\u8282\u70B9\u53EF\u79FB\u52A8\uFF0C\u62D6\u52A8\u53F3\u4FA7\u7AEF\u53E3\u53EF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\u3002")]
    ];
    for (let [m, f, u] of i) {
      let C = n.createDiv("lkm-guide-step");
      C.createEl("span", { cls: "lkm-step-num", text: m });
      let x = C.createDiv("lkm-step-body");
      x.createEl("span", { cls: "lkm-step-title", text: f }), x.createEl("span", { cls: "lkm-step-desc", text: u });
    }
    let a = t.createDiv("lkm-guide-btns"), s = a.createEl("button", { cls: "lkm-btn lkm-btn-action", text: e("\u521B\u5EFA\u7B14\u8BB0") });
    s.onclick = () => this.createStandaloneNote();
    let o = a.createEl("button", { cls: "lkm-btn", text: e("\u521B\u5EFA\u9ED8\u8BA4\u6A21\u677F") });
    o.onclick = () => this._createDefaultTemplate();
    let c = t.createDiv("lkm-guide-help");
    c.createEl("h4", { text: e("\u5DE5\u5177\u680F\u529F\u80FD") });
    let d = [
      [e("\u5DE5\u4F5C\u53F0"), e("\u7EDF\u8BA1\u6982\u89C8\uFF1A\u7B14\u8BB0\u603B\u6570\u3001\u7C7B\u578B\u5206\u5E03\u3001\u72B6\u6001\u5206\u5E03\u3001\u521B\u5EFA\u70ED\u529B\u56FE\u3001\u5206\u652F\u5206\u5E03\uFF0C\u70B9\u51FB\u6570\u5B57\u53EF\u7B5B\u9009\u67E5\u770B")],
      [e("\u4E3B\u7B14\u8BB0"), e("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u6839\u8282\u70B9\uFF08frontmatter \u4E2D main: true \u7684\u7B14\u8BB0\uFF09")],
      [e("\u5173\u952E\u8BCD"), e("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u7B14\u8BB0\u8FC7\u6EE4\u663E\u793A\u5BFC\u56FE")],
      [e("\u641C\u7D22"), e("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9")],
      [e("\u591A\u9009"), e("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A")],
      [e("\u9884\u8BBE"), e("\u4FDD\u5B58/\u6062\u590D/\u5220\u9664\u5F53\u524D\u5BFC\u56FE\u7684\u5C55\u5F00\u72B6\u6001\u4E0E\u4F4D\u7F6E\u9884\u8BBE")],
      [e("\u5C42\u6570 \xB1"), e("\u63A7\u5236\u5BFC\u56FE\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")],
      [e("\u5168\u5C55/\u5168\u6298"), e("\u4E00\u952E\u5C55\u5F00\u6216\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9")],
      [e("\u6A2A/\u7EB5"), e("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u5DE6\u2192\u53F3 \u6216 \u4E0A\u2192\u4E0B\uFF09")],
      [e("\u5BFC\u51FA"), e("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2 / Obsidian Canvas \u6587\u4EF6")],
      [e("\u6279\u91CF"), e("\u6279\u91CF\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664/\u6539\u7C7B\u578B/\u6539\u72B6\u6001")],
      [e("\u663E\u793A"), e("\u5207\u6362\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A\u65F6\u95F4\u3001\u7C7B\u578B\u3001\u5B50\u6570\u3001\u56FE\u6807\u7B49")],
      [e("\u94FE\u63A5\u68C0\u67E5"), e("\u626B\u63CF\u5931\u6548\u94FE\u63A5\u5E76\u4FEE\u590D\uFF0C\u68C0\u67E5\u672A\u5173\u8054\u7684\u5B64\u7ACB\u7B14\u8BB0")]
    ];
    for (let [m, f] of d) {
      let u = c.createDiv("lkm-guide-row");
      u.createEl("span", { cls: "lkm-guide-key", text: m }), u.createEl("span", { cls: "lkm-guide-val", text: f });
    }
    let h = t.createDiv("lkm-guide-help");
    h.createEl("h4", { text: e("\u8282\u70B9\u64CD\u4F5C") });
    let l = [
      [e("\u53F3\u952E / \u957F\u6309"), e("\u83DC\u5355\uFF1A\u6253\u5F00\u3001\u65B0\u589E\u5B50\u8282\u70B9\u3001\u805A\u7126\u3001\u4E0A\u7EA7\u3001\u72B6\u6001\u3001\u4E3B\u7B14\u8BB0\u3001\u91CD\u547D\u540D\u3001\u590D\u5236\u3001\u79FB\u52A8\u3001\u5220\u9664")],
      [e("\u53CC\u51FB"), e("\u6253\u5F00\u7B14\u8BB0\u6587\u4EF6")],
      [e("\u62D6\u52A8\u5361\u7247"), e("\u79FB\u52A8\u8282\u70B9\u5230\u5176\u4ED6\u7236\u7B14\u8BB0\u4E0B")],
      [e("\u62D6\u52A8\u7AEF\u53E3"), e("\u8FDE\u7EBF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u591A\u7236/\u7F51\u72B6\uFF09")],
      [e("\u65B9\u5411\u952E"), e("\u2191\u2193\u2190\u2192 \u5728\u8282\u70B9\u95F4\u5BFC\u822A")],
      ["Delete", e("\u5220\u9664\u9009\u4E2D\u8282\u70B9\uFF08\u5F39\u7A97\u9009\u62E9\uFF1A\u79FB\u9664\u5173\u8054/\u5220\u9664\u6587\u4EF6\uFF09")]
    ];
    for (let [m, f] of l) {
      let u = h.createDiv("lkm-guide-row");
      u.createEl("span", { cls: "lkm-guide-key", text: m }), u.createEl("span", { cls: "lkm-guide-val", text: f });
    }
    let r = t.createDiv("lkm-guide-help");
    r.createEl("h4", { text: e("\u89C6\u89C9\u8BF4\u660E") });
    let p = [
      [e("\u8FB9\u6846\u989C\u8272"), e("\u8868\u793A\u7B14\u8BB0\u7C7B\u578B\uFF08\u6536\u96C6/\u7075\u611F/\u95EA\u5FF5/\u6587\u732E/\u6C38\u4E45/\u8D44\u6E90\uFF09\uFF0C\u5728\u8BBE\u7F6E\u4E2D\u81EA\u5B9A\u4E49\u989C\u8272")],
      [e("\u5DE6\u4FA7\u5706\u70B9"), e("\u8868\u793A\u5DE5\u4F5C\u72B6\u6001\uFF08\u5F85\u529E/\u8FDB\u884C\u4E2D/\u5DF2\u5B8C\u6210/\u5DF2\u5F52\u6863/\u5DF2\u6401\u7F6E\uFF09\uFF0C\u4E0D\u540C\u72B6\u6001\u4E0D\u540C\u989C\u8272")],
      [e("\u6A59\u8272\u5706\u70B9"), e("\u4E3B\u7B14\u8BB0\u6807\u8BB0\uFF08main: true\uFF09\uFF0C\u662F\u5BFC\u56FE\u7684\u5165\u53E3\u8282\u70B9")],
      [e("\u7D2B\u8272\u5706\u70B9"), e("\u91CD\u590D\u8282\u70B9\uFF0C\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u88AB\u591A\u5904\u5173\u8054\u5F15\u5165")],
      [e("\u865A\u7EBF\u534A\u900F\u660E"), e("\u5DF2\u5F52\u6863\u8282\u70B9\uFF0C\u4FDD\u7559\u94FE\u63A5\u4F46\u964D\u4F4E\u89C6\u89C9\u6743\u91CD")]
    ];
    for (let [m, f] of p) {
      let u = r.createDiv("lkm-guide-row");
      u.createEl("span", { cls: "lkm-guide-key", text: m }), u.createEl("span", { cls: "lkm-guide-val", text: f });
    }
  }
  _renderEmptyGuide(t) {
    let n = t.createDiv("lkm-empty-guide");
    this._renderHelpContent(n);
  }
  _showHelp() {
    let t = new gt(this.app);
    t.onOpen = () => {
      let { contentEl: n } = t;
      n.addClass("lkm-help-modal"), this._renderHelpContent(n);
      let i = n.createDiv("lkm-multipick-btns");
      new R(i).addButton((a) => a.setButtonText(e("\u5173\u95ED")).onClick(() => t.close()));
    }, t.open();
  }
  async _createDefaultTemplate() {
    let t = this.s, n = (t.templateFolder || "").trim();
    if (n || (n = e("99-\u6A21\u677F"), t.templateFolder = n), !this.app.vault.getAbstractFileByPath(et(n)))
      try {
        await this.app.vault.createFolder(et(n));
      } catch (s) {
        new v(e("\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u5939\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
        return;
      }
    let a = et(n + e("/\u65B0\u8282\u70B9\u6A21\u677F.md"));
    if (this.app.vault.getAbstractFileByPath(a))
      new v(e("\u6A21\u677F\u5DF2\u5B58\u5728\uFF1A") + a);
    else {
      let s = t.linkField || "children", o = t.backField || "parent", c = t.zkField || "main", d = t.statusField || "status", h = t.typeField || "type", l = t.dateField || "date", r = t.titleField || "title", p = t.defaultStatus && (t.statusColors || {})[t.defaultStatus] !== void 0 ? '"' + t.defaultStatus + '"' : '""', m = `---
${s}: []
${o}: ""
${c}: false
${d}: ${p}
${l}: ""
${h}: ""
${r}: ""
---

`;
      try {
        await this.app.vault.create(a, m);
      } catch (f) {
        new v(e("\u521B\u5EFA\u6A21\u677F\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
        return;
      }
    }
    t.templatePath = a, await this.plugin.saveSettings(), new v(e("\u5DF2\u521B\u5EFA\u6A21\u677F\u5E76\u8BBE\u4E3A\u9ED8\u8BA4\uFF1A") + a), this.render();
  }
  async _createFirstNote(t) {
    let n = this.s, i = yt(t) + ".md", a = et(n.mainFolder), s = et(a + "/" + i);
    if (this.app.vault.getAbstractFileByPath(s)) {
      new v(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + i);
      return;
    }
    let o = n.linkField || "children", c = n.zkField || "main", d = n.statusField || "status", h = n.dateField || "date", l = /* @__PURE__ */ new Date(), r = l.getFullYear() + "-" + String(l.getMonth() + 1).padStart(2, "0") + "-" + String(l.getDate()).padStart(2, "0"), p = n.defaultStatus && (n.statusColors || {})[n.defaultStatus] !== void 0 ? '"' + n.defaultStatus + '"' : '""', m = `---
${o}: []
${c}: true
${d}: ${p}
${h}: "${r}"
---

`;
    try {
      await this.app.vault.create(s, m), new v(e("\u5DF2\u521B\u5EFA\u4E3B\u7B14\u8BB0\u300C") + t + "\u300D"), await this.rebuild(!0);
    } catch (f) {
      new v(e("\u521B\u5EFA\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
    }
  }
  async openKeywordPicker() {
    let t = this.app.vault.getAbstractFileByPath(et(this.s.indexFolder)), n = (t && t.children ? t.children : []).filter((i) => i instanceof Mt && i.extension === "md");
    if (!n.length) {
      new v("\u300C" + this.s.indexFolder + e("\u300D\u91CC\u6CA1\u6709\u7D22\u5F15\u6587\u4EF6"));
      return;
    }
    new Et(
      this.app,
      n.map((i) => ({ label: i.basename, file: i })),
      (i) => this.showKeyword(i.file),
      e("\u9009\u62E9\u5173\u952E\u8BCD\u7D22\u5F15\u2026")
    ).open();
  }
  async showKeyword(t, n) {
    this._kwFile = t, this._multiRoot = !1;
    let i = this.contentEl.querySelector(".lkm-info");
    i && (i.empty(), i.setText(e("\u5173\u952E\u8BCD\uFF1A") + t.basename));
    let s = [...(await this.app.vault.read(t)).matchAll(/\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g)].map((r) => r[1].trim()), o = [], c = /* @__PURE__ */ new Set();
    for (let r of s) {
      let p = this.app.metadataCache.getFirstLinkpathDest(r, t.path);
      if (!p) continue;
      let m = this.notes.get(p.path);
      !m || c.has(m.file.path) || (c.add(m.file.path), o.push(m));
    }
    if (!o.length) {
      new v(e("\u8BE5\u7D22\u5F15\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u7B14\u8BB0\u94FE\u63A5")), this._kwFile = null, this.render();
      return;
    }
    let { virtualRoot: d, allSelectedPaths: h } = this._buildMultiRootTree(o, t.basename);
    this._selectedRootPaths = /* @__PURE__ */ new Set(h), this._multiRootPaths = h, this.currentRoot = d, this._indexTree(d), Xt(d, this.depth), this._ensureSelectedVisible(d), this._restoreExpanded(), this._view = null;
    let l = this.contentEl.querySelector(".lkm-canvas");
    l && this._draw(l, jt(d, this.s), Object.assign({ fit: !0 }, n || {}));
  }
  _draw(t, n, i) {
    i = i || {}, t.empty();
    let a = this.s, { nodes: s, edges: o } = n;
    if (!s.length) return;
    let c = 1 / 0, d = 1 / 0, h = -1 / 0, l = -1 / 0, r = a.layoutDir === "v";
    for (let g of s)
      c = Math.min(c, g._x), d = Math.min(d, g._y - a.nodeHeight / 2), h = Math.max(h, g._x + g._w), l = Math.max(l, g._y + a.nodeHeight / 2 + (r ? 28 : 0));
    let p = 40, m = h - c + p * 2, f = l - d + p * 2, u = j("svg", { class: "lkm-svg" }), C = j("defs"), x = j("marker", { id: "lkm-arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" });
    x.appendChild(j("path", { d: "M0,0 L10,5 L0,10 z", class: "lkm-arrow-fill" })), C.appendChild(x), u.appendChild(C);
    let F = j("g", { class: "lkm-viewport" });
    u.appendChild(F), t.appendChild(u);
    for (let [g, z] of o) {
      let M, N, J, W, ut, H;
      if (a.layoutDir === "v") {
        M = g._x + g._w / 2, N = g._y + a.nodeHeight / 2, J = z._x + z._w / 2, W = z._y - a.nodeHeight / 2, H = (N + W) / 2;
        let ht = a.curve ? `M${M},${N} C${M},${H} ${J},${H} ${J},${W}` : `M${M},${N} L${J},${W}`;
        F.appendChild(j("path", { d: ht, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      } else {
        M = g._x + g._w, N = g._y, J = z._x, W = z._y, ut = (M + J) / 2;
        let ht = a.curve ? `M${M},${N} C${ut},${N} ${ut},${W} ${J},${W}` : `M${M},${N} L${J},${W}`;
        F.appendChild(j("path", { d: ht, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      }
    }
    let L = /* @__PURE__ */ _((g) => this._draw(t, jt(this.currentRoot, a), { anchorKey: g }), "redraw"), w = null, S = { before: e("\u2191 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u524D"), after: e("\u2193 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u540E"), child: e("\u2192 \u4F5C\u4E3A\u5B50\u8282\u70B9") }, y = /* @__PURE__ */ _((g, z) => {
      if (!z.note.file) return;
      this._hidePreview(), w = { node: z, sx: g.clientX, sy: g.clientY, moved: !1, target: null, zone: "child" };
      let M = document.createElement("div");
      M.className = "lkm-drag-hint", M.style.display = "none", document.body.appendChild(M);
      let N = /* @__PURE__ */ _((H) => {
        if (!w) return;
        let ht = H.clientX - w.sx, xt = H.clientY - w.sy;
        if (!w.moved && Math.hypot(ht, xt) < 6) return;
        w.moved = !0, u.classList.add("lkm-dragging");
        let Pt = t.getBoundingClientRect(), Ct = (H.clientX - Pt.left - E) / T, rt = (H.clientY - Pt.top - B) / T, it = a.nodeHeight, nt = null, ft = "child";
        for (let st of s)
          if (!(st.key === z.key || !st.note.file) && Ct >= st._x && Ct <= st._x + st._w && rt >= st._y - it / 2 && rt <= st._y + it / 2) {
            if (nt = st, a.layoutDir === "v") {
              let dt = (Ct - st._x) / st._w;
              ft = dt < 0.3 ? "before" : dt > 0.7 ? "after" : "child";
            } else {
              let dt = (rt - (st._y - it / 2)) / it;
              ft = dt < 0.3 ? "before" : dt > 0.7 ? "after" : "child";
            }
            break;
          }
        (nt !== w.target || ft !== w.zone) && (w.target && w.target._el && w.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), w.target = nt, w.zone = ft, nt && nt._el && (nt._el.classList.add("lkm-drop-target"), ft === "before" && nt._el.classList.add("lkm-drop-before"), ft === "after" && nt._el.classList.add("lkm-drop-after"))), M.style.display = nt ? "block" : "none", nt && (M.textContent = S[ft], M.style.left = H.clientX + 16 + "px", M.style.top = H.clientY + 16 + "px");
      }, "onMove"), J = /* @__PURE__ */ _(() => {
        window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", J), window.removeEventListener("touchmove", W), window.removeEventListener("touchend", ut), u.classList.remove("lkm-dragging"), M.remove();
        let H = w;
        w = null, H && (H.target && H.target._el && H.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), H.moved && H.target && (H.zone === "child" ? this._moveNode(H.node, H.target.note.file.path) : H.node.parent && H.target.parent && H.node.parent.note.file && H.target.parent.note.file && H.node.parent.note.file.path === H.target.parent.note.file.path ? this._reorderSiblings(H.node, H.target.note.file.path, H.zone === "after") : this._moveAndReorder(H.node, H.target, H.zone === "after")));
      }, "onUp"), W = /* @__PURE__ */ _((H) => {
        H.touches.length && N({ clientX: H.touches[0].clientX, clientY: H.touches[0].clientY });
      }, "onTouchMove2"), ut = /* @__PURE__ */ _(() => J(), "onTouchEnd2");
      window.addEventListener("mousemove", N), window.addEventListener("mouseup", J), window.addEventListener("touchmove", W, { passive: !1 }), window.addEventListener("touchend", ut);
    }, "startNodeDrag"), I = /* @__PURE__ */ _((g, z) => {
      if (!z.note.file) return;
      g.preventDefault(), g.stopPropagation(), D = !0;
      let M = j("path", { class: "lkm-wire" });
      F.appendChild(M);
      let N = a.layoutDir === "v" ? z._x + z._w / 2 : z._x + z._w, J = a.layoutDir === "v" ? z._y + a.nodeHeight / 2 : z._y, W = null, ut = /* @__PURE__ */ _((rt, it) => {
        let nt = t.getBoundingClientRect();
        return { x: (rt - nt.left - E) / T, y: (it - nt.top - B) / T };
      }, "local"), H = /* @__PURE__ */ _((rt, it) => {
        let nt = (N + rt) / 2;
        M.setAttribute("d", `M${N},${J} C${nt},${J} ${nt},${it} ${rt},${it}`);
      }, "setWire");
      H(N, J);
      let ht = /* @__PURE__ */ _((rt) => {
        let it = ut(rt.clientX, rt.clientY);
        H(it.x, it.y);
        let nt = a.nodeHeight, ft = null;
        for (let st of s)
          if (!(!st.note.file || st.key === z.key) && it.x >= st._x && it.x <= st._x + st._w && it.y >= st._y - nt / 2 && it.y <= st._y + nt / 2) {
            ft = st;
            break;
          }
        ft !== W && (W && W._el && W._el.classList.remove("lkm-wire-target"), W = ft, W && W._el && W._el.classList.add("lkm-wire-target"));
      }, "onMove"), xt = /* @__PURE__ */ _(async () => {
        D = !1, window.removeEventListener("mousemove", ht), window.removeEventListener("mouseup", xt), window.removeEventListener("touchmove", Pt), window.removeEventListener("touchend", Ct), M.remove(), W && W._el && W._el.classList.remove("lkm-wire-target"), W && await this._addRelation(z, W.note);
      }, "onUp"), Pt = /* @__PURE__ */ _((rt) => {
        rt.preventDefault();
        let it = rt.touches[0];
        ht({ clientX: it.clientX, clientY: it.clientY });
      }, "onTouchMove"), Ct = /* @__PURE__ */ _(() => xt(), "onTouchEnd");
      window.addEventListener("mousemove", ht), window.addEventListener("mouseup", xt), window.addEventListener("touchmove", Pt, { passive: !1 }), window.addEventListener("touchend", Ct);
    }, "startWire");
    for (let g of s) {
      let z = !g.note.file, M = null, N = j("g", {
        class: "lkm-node" + (g.note.zk ? " lkm-main" : "") + (g.isAlias ? " lkm-multi" : "") + (g.note.status ? " lkm-has-status" : "") + (g.note.status === "\u5DF2\u5F52\u6863" ? " lkm-archived" : ""),
        transform: `translate(${g._x},${g._y - a.nodeHeight / 2})`
      }), J = j("rect", { width: g._w, height: a.nodeHeight, rx: 12, ry: 12, class: "lkm-card" }), W = g.note.type ? (a.typeColors || {})[g.note.type] : null, ut = te(a, g.note.status);
      W && J.style.setProperty("--lkm-card-stroke", W), N.appendChild(J);
      let H = j("g", { class: "lkm-status-dots" }), ht = 6, xt = /* @__PURE__ */ _((Y, tt) => {
        let lt = j("circle", { cx: 10, cy: ht, r: 4, class: Y });
        H.appendChild(lt);
        let St = j("circle", { cx: 10, cy: ht, r: 7, class: "lkm-dot-hit" }), wt = j("title");
        return wt.textContent = tt, St.appendChild(wt), H.appendChild(St), ht += 10, lt;
      }, "mkDot");
      if (g.note.zk && xt("lkm-dot-zk", e("\u4E3B\u7B14\u8BB0\uFF1A\u8BE5\u7B14\u8BB0 main: true\uFF0C\u662F\u5BFC\u56FE\u7684\u4E3B\u5165\u53E3")), g.note.status) {
        let Y = xt("lkm-dot-status", ot(g.note.status) + e("\uFF1Astatus: ") + g.note.status);
        ut && (Y.style.fill = ut);
      }
      g.isAlias && xt("lkm-dot-multi", e("\u91CD\u590D\u8282\u70B9\uFF1A\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\u7684\u6302\u70B9\uFF09")), ht > 9 && N.appendChild(H);
      let Pt = a.showCreated && !z && g.note.date ? g.note.date : "", Ct = a.showType && !z && g.note.type ? ct(g.note.type) : "", rt = a.showChildCount && !z && g.children.length ? e("\u5B50 ") + g.children.length : "", it = a.showWordCount && !z && g.note.file ? e("\u5B57 ") + Math.max(1, Math.round((g.note.file.stat.size || 0) / 3)) : "", nt = [Ct, rt, it, Pt].filter(Boolean).join(" \xB7 "), ft = !!nt, st = j("text", { x: 16, y: ft ? a.nodeHeight / 2 - 4 : a.nodeHeight / 2 + 5, class: "lkm-title" });
      if (st.textContent = g._shown || g.note.title, N.appendChild(st), ft) {
        let Y = j("text", { x: 16, y: a.nodeHeight - 8, class: "lkm-sub" });
        Y.textContent = Z(nt, 50), N.appendChild(Y);
      }
      let dt = a.nodeHeight / 2, Zt = window.innerWidth < 600, Ft = Zt ? 12 : 10, Yt = /* @__PURE__ */ _((Y, tt) => {
        let lt = j("title");
        lt.textContent = tt, Y.appendChild(lt);
      }, "addTip"), ae = a.layoutDir === "v";
      if (g.children.length) {
        let Y = j("g", { class: "lkm-expand" });
        Yt(Y, g.expanded ? e("\u6298\u53E0\u5B50\u8282\u70B9") : e("\u5C55\u5F00\u5B50\u8282\u70B9"));
        let tt = ae ? g._w / 2 : g._w + 14, lt = ae ? a.nodeHeight + 14 : dt;
        Y.appendChild(j("circle", { cx: tt, cy: lt, r: Ft, class: "lkm-dot" }));
        let St = j("text", { x: tt, y: lt + 5, class: "lkm-sign", "text-anchor": "middle" });
        St.textContent = g.expanded ? "\u2212" : "+", Y.appendChild(St);
        let wt = j("circle", { cx: tt, cy: lt, r: Ft + 5, class: "lkm-hit" });
        wt.addEventListener("click", (Rt) => {
          Rt.stopPropagation(), g.expanded = !g.expanded, this._expandedMem.set(g.note.file ? g.note.file.path : g.key, g.expanded), L(g.key);
        }), wt.addEventListener("mouseenter", () => {
          M && (clearTimeout(M), M = null);
        }), Y.appendChild(wt), N.appendChild(Y);
      }
      if (g.note.file) {
        let Y = Zt ? 26 : 24, tt = g._w - (Zt ? 20 : 18), lt = j("g", { class: "lkm-connect" });
        Yt(lt, e("\u62D6\u52A8\u8FDE\u7EBF\uFF1A\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u76EE\u6807\u6210\u4E3A\u672C\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u539F\u5173\u7CFB\u4FDD\u7559\uFF09"));
        let St = tt, wt = dt;
        lt.appendChild(j("circle", { cx: St, cy: wt, r: Ft, class: "lkm-connect-bg" })), lt.appendChild(j("circle", { cx: St, cy: wt, r: 2.6, class: "lkm-connect-dot" }));
        let Rt = j("circle", { cx: St, cy: wt, r: Ft + 5, class: "lkm-hit" });
        if (Rt.addEventListener("mousedown", (pt) => {
          this._batchMode || I(pt, g);
        }), Rt.addEventListener("mouseenter", () => {
          M && (clearTimeout(M), M = null);
        }), Rt.addEventListener("touchstart", (pt) => {
          this._batchMode || I(pt, g);
        }, { passive: !1 }), lt.appendChild(Rt), N.appendChild(lt), a.showOpenIcon !== !1) {
          tt -= Y;
          let pt = j("g", { class: "lkm-open" });
          Yt(pt, e("\u6253\u5F00\u7B14\u8BB0")), pt.appendChild(j("circle", { cx: tt, cy: dt, r: Ft, class: "lkm-open-bg" }));
          let Ot = j("text", { x: tt, y: dt + 4, class: "lkm-open-sign", "text-anchor": "middle", transform: "rotate(90 " + tt + " " + dt + ")" });
          Ot.textContent = "\u270E", pt.appendChild(Ot);
          let It = j("circle", { cx: tt, cy: dt, r: Ft + 3, class: "lkm-hit" });
          It.addEventListener("click", (Jt) => {
            Jt.stopPropagation(), this.app.workspace.getLeaf(!0).openFile(g.note.file);
          }), It.addEventListener("mouseenter", () => {
            M && (clearTimeout(M), M = null);
          }), pt.appendChild(It), N.appendChild(pt);
        }
        if (a.showAddIcon !== !1) {
          tt -= Y;
          let pt = j("g", { class: "lkm-add" });
          Yt(pt, e("\u65B0\u589E\u5B50\u8282\u70B9\uFF08\u81EA\u52A8\u5199\u5165\u94FE\u63A5\uFF09")), pt.appendChild(j("circle", { cx: tt, cy: dt, r: Ft, class: "lkm-add-bg" }));
          let Ot = j("text", { x: tt, y: dt + 4, class: "lkm-add-sign", "text-anchor": "middle" });
          Ot.textContent = "\uFF0B", pt.appendChild(Ot);
          let It = j("circle", { cx: tt, cy: dt, r: Ft + 3, class: "lkm-hit" });
          It.addEventListener("click", (Jt) => {
            Jt.stopPropagation(), this.createChild(g);
          }), It.addEventListener("mouseenter", () => {
            M && (clearTimeout(M), M = null);
          }), pt.appendChild(It), N.appendChild(pt);
        }
      }
      g._el = N, this._batchMode && this._selected.has(g.key) && N.classList.add("lkm-selected"), this._selKey === g.key && N.classList.add("lkm-sel"), this._selectedRootPaths && g.note.file && this._selectedRootPaths.has(g.note.file.path) && N.classList.add("lkm-selected-root"), N.addEventListener("click", (Y) => {
        if (this._batchMode) {
          Y.stopPropagation(), this._toggleSelect(g.key);
          return;
        }
        this._select(g.key);
      }), N.addEventListener("contextmenu", (Y) => {
        Y.preventDefault(), Y.stopPropagation(), !this._batchMode && (this._select(g.key), this._showNodeMenu(g, Y));
      }), N.addEventListener("dblclick", (Y) => {
        Y.stopPropagation(), M && (clearTimeout(M), M = null), this._hidePreview(), !this._batchMode && (g.note.file ? this.app.workspace.getLeaf(!0).openFile(g.note.file) : g.children.length && (g.expanded = !g.expanded, this._expandedMem.set(g.note.file ? g.note.file.path : g.key, g.expanded), L(g.key)));
      }), N.addEventListener("mousedown", (Y) => {
        Y.button !== 0 || this._batchMode || (Y.stopPropagation(), y(Y, g));
      }), N.addEventListener("touchstart", (Y) => {
        if (this._batchMode || !g.note.file || Y.touches.length !== 1) return;
        let tt = Y.touches[0], lt = { clientX: tt.clientX, clientY: tt.clientY, preventDefault: /* @__PURE__ */ _(() => Y.preventDefault(), "preventDefault"), stopPropagation: /* @__PURE__ */ _(() => Y.stopPropagation(), "stopPropagation") };
        y(lt, g);
      }, { passive: !1 });
      let Tt = null;
      N.addEventListener("touchstart", (Y) => {
        if (this._batchMode || !g.note.file) return;
        let tt = Y.touches[0];
        Tt = setTimeout(() => {
          Tt = null, this._select(g.key), this._showNodeMenu(g, { clientX: tt.clientX, clientY: tt.clientY });
        }, 500);
      }, { passive: !0 }), N.addEventListener("touchmove", () => {
        Tt && (clearTimeout(Tt), Tt = null);
      }, { passive: !0 }), N.addEventListener("touchend", () => {
        Tt && (clearTimeout(Tt), Tt = null);
      }, { passive: !0 }), g.note.file && !z && (N.addEventListener("mouseenter", (Y) => {
        w || (M && clearTimeout(M), M = setTimeout(() => {
          w || (M = null, this._showPreview(g, Y));
        }, 1e3));
      }), N.addEventListener("mousemove", (Y) => {
        this._previewEl && this._positionPreview(Y);
      }), N.addEventListener("mouseleave", () => {
        M && (clearTimeout(M), M = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
          this._hidePreview(), this._hideTimer = null;
        }, 200);
      })), F.appendChild(N);
    }
    this._applyFilter();
    let T = 1, E = 0, B = 0;
    this._view && (T = this._view.k, E = this._view.tx, B = this._view.ty);
    let G = /* @__PURE__ */ _(() => F.setAttribute("transform", `translate(${E},${B}) scale(${T})`), "apply"), D = !1, O = /* @__PURE__ */ _(() => {
      let g = t.getBoundingClientRect(), z = g.width || t.clientWidth || 800, M = g.height || t.clientHeight || 600;
      if (T = Math.min(z / m, M / f, 1.4) || 1, r && s.length) {
        let N = s[0];
        E = z / 2 - (N._x + N._w / 2) * T, B = p * T - d * T;
      } else
        E = (z - m * T) / 2 - (c - p) * T, B = (M - f * T) / 2 - (d - p) * T;
      this._view = { k: T, tx: E, ty: B }, G();
    }, "fit");
    this._fit = O;
    let k = /* @__PURE__ */ _((g) => {
      let z = s.find((N) => N.note.file && N.note.file.path === g);
      if (!z) return;
      let M = t.getBoundingClientRect();
      !M.width || !M.height || (E = M.width / 2 - (z._x + z._w / 2) * T, B = M.height / 2 - z._y * T, this._view = { k: T, tx: E, ty: B }, G());
    }, "centerOnPath");
    if (!this._view || i.fit) {
      if (requestAnimationFrame(() => {
        O(), i.centerPath && k(i.centerPath);
      }), !i.centerPath) {
        let g = 3, z = /* @__PURE__ */ _(() => {
          g-- > 0 && O();
        }, "onResize");
        window.addEventListener("resize", z);
        let M = setTimeout(() => window.removeEventListener("resize", z), 1500);
        this._cleanup.push(() => {
          window.removeEventListener("resize", z), clearTimeout(M);
        });
      }
    } else
      G(), i.centerPath && k(i.centerPath);
    let P = /* @__PURE__ */ _((g) => {
      g.preventDefault();
      let z = u.getBoundingClientRect(), M = g.clientX - z.left, N = g.clientY - z.top, J = Math.max(0.2, Math.min(3, T * (g.deltaY < 0 ? 1.1 : 0.9)));
      E = M - (M - E) * (J / T), B = N - (N - B) * (J / T), T = J, this._view = { k: T, tx: E, ty: B }, G();
    }, "onWheel");
    u.addEventListener("wheel", P, { passive: !1 }), this._cleanup.push(() => u.removeEventListener("wheel", P));
    let V = !1, X = !1, Q = 0, U = 0, q = /* @__PURE__ */ _((g) => {
      V = !0, X = !1, Q = g.clientX - E, U = g.clientY - B, u.classList.add("lkm-grabbing");
    }, "onDown"), $ = /* @__PURE__ */ _((g) => {
      V && (!X && Math.hypot(g.clientX - (Q + E), g.clientY - (U + B)) > 3 && (X = !0), E = g.clientX - Q, B = g.clientY - U, this._view = { k: T, tx: E, ty: B }, G());
    }, "onMove"), A = /* @__PURE__ */ _(() => {
      let g = V;
      V = !1, u.classList.remove("lkm-grabbing"), g && !X && !this._batchMode && this._select(null);
    }, "onUp");
    u.addEventListener("mousedown", q), window.addEventListener("mousemove", $), window.addEventListener("mouseup", A), this._cleanup.push(() => {
      u.removeEventListener("mousedown", q), window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", A);
    });
    let K = null, at = null, kt = /* @__PURE__ */ _((g) => {
      if (!D)
        if (g.stopPropagation(), g.touches.length === 2) {
          g.preventDefault();
          let z = g.touches[0].clientX - g.touches[1].clientX, M = g.touches[0].clientY - g.touches[1].clientY;
          at = { dist: Math.hypot(z, M), k: T }, K = null;
        } else g.touches.length === 1 && (K = { x: g.touches[0].clientX - E, y: g.touches[0].clientY - B }, at = null, u.classList.add("lkm-grabbing"));
    }, "onTouchStart"), bt = /* @__PURE__ */ _((g) => {
      if (!D)
        if (g.stopPropagation(), g.touches.length === 2 && at) {
          g.preventDefault();
          let z = g.touches[0].clientX - g.touches[1].clientX, M = g.touches[0].clientY - g.touches[1].clientY, N = Math.max(0.2, Math.min(3, at.k * (Math.hypot(z, M) / at.dist))), J = u.getBoundingClientRect(), W = (g.touches[0].clientX + g.touches[1].clientX) / 2 - J.left, ut = (g.touches[0].clientY + g.touches[1].clientY) / 2 - J.top;
          E = W - (W - E) * (N / T), B = ut - (ut - B) * (N / T), T = N, this._view = { k: T, tx: E, ty: B }, G();
        } else g.touches.length === 1 && K ? (g.preventDefault(), E = g.touches[0].clientX - K.x, B = g.touches[0].clientY - K.y, this._view = { k: T, tx: E, ty: B }, G()) : g.touches.length && g.preventDefault();
    }, "onTouchMove"), Nt = /* @__PURE__ */ _((g) => {
      D || (g.stopPropagation(), g.touches.length === 0 && (K = null, at = null, u.classList.remove("lkm-grabbing")));
    }, "onTouchEnd");
    u.addEventListener("touchstart", kt, { passive: !1 }), u.addEventListener("touchmove", bt, { passive: !1 }), u.addEventListener("touchend", Nt), u.addEventListener("touchcancel", Nt), this._cleanup.push(() => {
      u.removeEventListener("touchstart", kt), u.removeEventListener("touchmove", bt), u.removeEventListener("touchend", Nt), u.removeEventListener("touchcancel", Nt);
    });
  }
  _templateFiles() {
    let t = this.s, n = (t.templateFolder || "").trim();
    if (!n) {
      let a = (t.templatePath || "").trim();
      if (a) {
        let s = a.lastIndexOf("/");
        n = s > 0 ? a.slice(0, s) : "";
      }
    }
    if (!n) return [];
    let i = this.app.vault.getAbstractFileByPath(et(n));
    return !i || !i.children ? [] : i.children.filter((a) => a instanceof Mt && a.extension === "md");
  }
  async _buildNewNoteBody(t, n, i, a, s, o) {
    let c = this.s, d = c.linkField || "children", h = c.backField || "parent", l = c.zkField || "main", r = c.statusField || "status", p = c.typeField || "type", m = c.dateField || "date", f = c.titleField || "title", u = /* @__PURE__ */ new Set([d, h, l, r, m, p, f]), C = "", x = [];
    if (a) {
      let L = this.app.vault.getAbstractFileByPath(et(a));
      if (L instanceof Mt) {
        let w = ne(await this.app.vault.read(L));
        C = w.body;
        let S = new Map(w.fields);
        i || (S.get(p) != null ? i = $t(S.get(p)) : S.get("type") != null && (i = $t(S.get("type"))));
        let y = [];
        for (let [I, T] of [["zk", l], ["status", r], ["date", m], ["type", p], ["title", f]])
          I !== T && S.has(I) && !S.has(T) && y.push(I + "\u2192" + T);
        y.length && new v(e("\u6A21\u677F\u5B57\u6BB5\u4E0E\u914D\u7F6E\u4E0D\u4E00\u81F4\uFF1A") + y.join("\uFF0C") + e("\u3002\u5DF2\u7528\u914D\u7F6E\u5B57\u6BB5\u540D\u521B\u5EFA\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6A21\u677F\u3002"), 1e4);
        for (let [I, T] of w.fields)
          u.has(I) || x.push([I, T]);
      }
    }
    let F = ["---"];
    F.push(d + ": []"), t && c.autoAddBackLink && F.push(h + ': "' + t + '"'), F.push(l + ": " + (s ? "true" : "false")), F.push(r + ": " + (o ? '"' + o + '"' : '""')), F.push(m + ": " + n), i && F.push(p + ': "' + i + '"');
    for (let [L, w] of x) F.push(L + ": " + (w ?? ""));
    return F.push("---", ""), F.join(`
`) + (C || "");
  }
  async _rebuildUntilReady(t, n, i) {
    n = n || 30, i = i !== !1;
    for (let a = 0; a < n; a++) {
      if (await this.rebuild(!0), this.notes.has(t) && (!i || this._treePaths && this._treePaths.has(t)))
        return;
      await new Promise((s) => setTimeout(s, 150));
    }
    new v(e("\u5DF2\u521B\u5EFA\uFF0C\u4F46\u89C6\u56FE\u6682\u672A\u5237\u65B0\uFF0C\u8BF7\u70B9\u5237\u65B0"));
  }
  createChild(t) {
    if (!t || !t.note.file) {
      new v(e("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6\uFF0C\u65E0\u6CD5\u65B0\u589E\u5B50\u8282\u70B9"));
      return;
    }
    let n = this.s, i = Object.keys(n.typeColors || {}), a = i.includes(n.defaultType) ? n.defaultType : "", s = Object.keys(n.statusColors || {}), o = s.includes(n.defaultStatus) ? n.defaultStatus : "", c = [{ path: "", name: e("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let l of this._templateFiles()) c.push({ path: l.path, name: l.basename });
    let d = "", h = (n.templatePath || "").trim();
    if (h) {
      let l = c.find((r) => r.path === et(h));
      l && (d = l.path);
    }
    new de(this.app, t.note.title, {
      types: i,
      defaultType: a,
      statuses: s,
      defaultStatus: o,
      templates: c,
      defaultTemplate: d,
      typeTemplates: n.typeTemplates || {},
      zkField: n.zkField || "main",
      onSubmit: /* @__PURE__ */ _(async (l, r, p, m, f) => {
        try {
          let u = yt(l) + ".md", C = et(n.mainFolder), x = et(C + "/" + u);
          if (this.app.vault.getAbstractFileByPath(x)) {
            new v(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + u);
            return;
          }
          let F = /* @__PURE__ */ new Date(), L = F.getFullYear() + "-" + String(F.getMonth() + 1).padStart(2, "0") + "-" + String(F.getDate()).padStart(2, "0"), w = await this._buildNewNoteBody(t.note.file.basename, L, r, p, m, f);
          await Ht(this.app, t.note.file, n.linkField, yt(l)), await this.app.vault.create(x, w), new v(e("\u5DF2\u521B\u5EFA\u300C") + yt(l) + e("\u300D\u5E76\u5173\u8054\u5230\u300C") + Z(t.note.title, 14) + "\u300D");
          let S = t;
          for (; S; )
            this._expandedMem.set(S.note.file ? S.note.file.path : S.key, !0), S = S.parent;
          await this._rebuildUntilReady(x);
        } catch (u) {
          new v(e("\u521B\u5EFA\u5931\u8D25\uFF1A") + (u && u.message ? u.message : u));
        }
      }, "onSubmit")
    }).open();
  }
  createStandaloneNote() {
    let t = this.s, n = Object.keys(t.typeColors || {}), i = n.includes(t.defaultType) ? t.defaultType : "", a = Object.keys(t.statusColors || {}), s = a.includes(t.defaultStatus) ? t.defaultStatus : "", o = [{ path: "", name: e("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let h of this._templateFiles()) o.push({ path: h.path, name: h.basename });
    let c = "", d = (t.templatePath || "").trim();
    if (d) {
      let h = o.find((l) => l.path === et(d));
      h && (c = h.path);
    }
    new de(this.app, "", {
      types: n,
      defaultType: i,
      statuses: a,
      defaultStatus: s,
      templates: o,
      defaultTemplate: c,
      typeTemplates: t.typeTemplates || {},
      standalone: !0,
      zkField: t.zkField || "main",
      onSubmit: /* @__PURE__ */ _(async (h, l, r, p, m) => {
        try {
          let f = yt(h) + ".md", u = et(t.mainFolder), C = et(u + "/" + f);
          if (this.app.vault.getAbstractFileByPath(C)) {
            new v(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + f);
            return;
          }
          let x = /* @__PURE__ */ new Date(), F = x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0"), L = await this._buildNewNoteBody(null, F, l, r, p, m);
          await this.app.vault.create(C, L), new v(e("\u5DF2\u521B\u5EFA\u300C") + yt(h) + "\u300D"), await this._rebuildUntilReady(C, 30, !1), this._focusPath(C);
        } catch (f) {
          new v(e("\u521B\u5EFA\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
        }
      }, "onSubmit")
    }).open();
  }
  _renderDash(t) {
    let n = this.s, i = t.createDiv("lkm-toolbar"), a = i.createEl("button", { cls: "lkm-btn", text: e("\u8FD4\u56DE") });
    a.title = e("\u8FD4\u56DE\u601D\u7EF4\u5BFC\u56FE"), a.onclick = () => {
      this._mode = "map", this.render();
    }, i.createSpan({ cls: "lkm-dash-title", text: e("\u5DE5\u4F5C\u53F0") });
    let s = i.createEl("button", { cls: "lkm-btn" + (this._dashTab === "timeline" ? " is-active" : ""), text: e("\u65F6\u95F4\u7EBF") });
    if (s.title = e("\u5207\u6362\u5230\u65F6\u95F4\u7EBF\u89C6\u56FE"), s.style.marginLeft = "auto", s.onclick = () => {
      this._dashTab = this._dashTab === "timeline" ? "stats" : "timeline", this.render();
    }, this._dashTab === "stats") {
      let o = this._dashStats(), c = i.createEl("button", { cls: "lkm-btn", text: e("\u590D\u5236\u7EDF\u8BA1") });
      c.title = e("\u628A\u7EDF\u8BA1\u6458\u8981\u590D\u5236\u4E3A Markdown"), c.onclick = () => {
        navigator.clipboard.writeText(this._dashSummaryMd(o)).then(
          () => new v(e("\u5DF2\u590D\u5236\u7EDF\u8BA1\u6458\u8981")),
          () => new v(e("\u590D\u5236\u5931\u8D25"))
        );
      };
      let d = t.createDiv("lkm-dash");
      if (!o.total) {
        d.createDiv("lkm-dash-h").setText("\u300C" + n.mainFolder + e("\u300D\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u7B14\u8BB0\u3002"));
        return;
      }
      let h = d.createDiv("lkm-cards"), l = [
        { num: o.total, label: e("\u7B14\u8BB0\u603B\u6570"), icon: "files", color: "#6c8cff", filter: { kind: "all" } },
        { num: o.zk, label: e("\u4E3B\u7B14\u8BB0"), icon: "star", color: "#f2a65a", filter: { kind: "zk" } },
        { num: o.kw, label: e("\u5173\u952E\u8BCD\u7D22\u5F15"), icon: "tags", color: "#b07cff", filter: { kind: "kw" } },
        { num: o.done, label: e("\u5DF2\u5B8C\u6210"), icon: "check", color: "#3fa66a", filter: { kind: "status", value: "done" } },
        { num: o.orphan, label: e("\u672A\u5173\u8054"), icon: "unlink", color: "#4ba3e5", filter: { kind: "orphan" } },
        { num: o.todo, label: e("\u5F85\u529E"), icon: "list-checks", color: "#e5534b", filter: { kind: "status", value: "todo" } },
        { num: o.linkCount, label: e("\u94FE\u63A5\u603B\u6570"), icon: "link", color: "#6c8cff" },
        { num: o.deadLinks, label: e("\u5931\u6548\u94FE\u63A5"), icon: "alert-triangle", color: "#e5534b" }
      ];
      for (let D of l) {
        let O = D.filter && this._isFilterActive(D.filter), k = h.createDiv("lkm-card-stat lkm-card-click" + (O ? " is-active" : "")), P = k.createDiv("lkm-card-ico");
        P.style.background = "color-mix(in srgb, " + D.color + " 16%, transparent)", P.style.color = D.color;
        try {
          ce(P, D.icon);
        } catch {
        }
        k.createDiv("lkm-stat-num").setText(String(D.num)), k.createDiv("lkm-stat-label").setText(D.label + (D.filter && o.total ? " \xB7 " + Math.round(D.num / o.total * 100) + "%" : "")), D.filter && (k.title = e("\u70B9\u51FB\u67E5\u770B\u300C") + D.label + e("\u300D\u5217\u8868"), k.addEventListener("click", () => this._toggleDashFilter(D.filter)));
      }
      {
        let D = d.createDiv("lkm-dash-two"), O = D.createDiv("lkm-dash-sec");
        O.createDiv("lkm-dash-h").setText(e("\u7C7B\u578B\u5206\u5E03"));
        let k = o.byTypeOrder.map((A) => ({ label: ct(A.name), value: A.count, color: A.color, filter: { kind: "type", value: A.name } }));
        o.noType && k.push({ label: e("\u672A\u6807\u6CE8"), value: o.noType, color: "var(--text-faint)", filter: { kind: "notype" } });
        let P = O.createDiv("lkm-donut-wrap");
        this._renderDonut(P, k, o.total);
        let V = P.createDiv("lkm-legend");
        for (let A of k) {
          let K = V.createDiv("lkm-legend-row lkm-type-click" + (this._isFilterActive(A.filter) ? " is-active" : ""));
          K.createSpan({ cls: "lkm-legend-dot" }).style.background = A.color, K.createSpan({ cls: "lkm-legend-name", text: A.label }), K.createSpan({ cls: "lkm-legend-num", text: String(A.value) }), K.addEventListener("click", () => this._toggleDashFilter(A.filter));
        }
        let X = D.createDiv("lkm-dash-sec");
        X.createDiv("lkm-dash-h").setText(e("\u72B6\u6001\u5206\u5E03"));
        let Q = X.createDiv("lkm-stackbar"), U = o.byStatusOrder.map((A) => ({ label: ot(A.name), value: A.count, color: A.color, filter: { kind: "status", value: A.name } }));
        o.noStatus && U.push({ label: e("\u65E0\u72B6\u6001"), value: o.noStatus, color: "var(--text-faint)", filter: { kind: "nostatus" } });
        for (let A of U) {
          if (!A.value) continue;
          let K = Q.createDiv("lkm-stackbar-seg");
          K.style.width = Math.max(6, A.value / o.total * 100) + "%", K.style.background = A.color, this._isFilterActive(A.filter) && K.addClass("is-active"), K.title = A.label + "\uFF1A" + A.value + e(" \u7BC7\uFF0C\u70B9\u51FB\u7B5B\u9009"), K.addEventListener("click", () => this._toggleDashFilter(A.filter));
        }
        let q = X.createDiv("lkm-chips"), $ = /* @__PURE__ */ _((A, K, at, kt) => {
          let bt = q.createDiv("lkm-chip lkm-type-click" + (this._isFilterActive(kt) ? " is-active" : ""));
          bt.createSpan({ cls: "lkm-legend-dot" }).style.background = at, bt.createSpan({ text: A + " " + K }), bt.addEventListener("click", () => this._toggleDashFilter(kt));
        }, "chip");
        for (let A of o.byStatusOrder) $(ot(A.name), A.count, A.color, { kind: "status", value: A.name });
        o.noStatus && $(e("\u65E0\u72B6\u6001"), o.noStatus, "var(--text-faint)", { kind: "nostatus" }), $(e("\u672A\u6807\u65E5\u671F"), o.noDate, "var(--text-faint)", { kind: "nodate" });
      }
      {
        let D = d.createDiv("lkm-dash-sec");
        D.createDiv("lkm-dash-h").setText(e("\u6708\u5EA6\u521B\u5EFA \xB7 \u8FD112\u4E2A\u6708\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u5F53\u6708\u65B0\u589E\uFF09"));
        let O = D.createDiv("lkm-chart-body");
        this._renderBarChart(
          O,
          o.monthly.map((k) => ({ label: parseInt(k.key.slice(5, 7), 10) + e("\u6708"), value: k.count, filter: { kind: "month", value: k.key } })),
          { height: window.innerWidth < 600 ? 100 : 120, thinLabels: window.innerWidth < 600 }
        );
      }
      {
        let D = d.createDiv("lkm-dash-sec");
        if (D.createDiv("lkm-dash-h").setText(e("\u6811\u6DF1\u5EA6\u5206\u5E03\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u8BE5\u5C42\u8282\u70B9\uFF09")), o.depthMax) {
          let O = D.createDiv("lkm-chart-body"), k = [];
          for (let P = 1; P <= o.depthMax; P++) k.push({ label: e("\u7B2C") + P + e("\u5C42"), value: o.depthCount.get(P) || 0, filter: { kind: "depth", value: String(P) } });
          this._renderBarChart(O, k, { height: window.innerWidth < 600 ? 100 : 120 });
        } else D.createDiv("lkm-heat-sum").setText(e("\u8FD8\u6CA1\u6709\u53EF\u7EDF\u8BA1\u7684\u5C42\u7EA7\u6570\u636E"));
      }
      let r = d.createDiv("lkm-dash-sec"), p = new Set([...o.heat.keys()].map((D) => D.slice(0, 4)));
      p.add(String((/* @__PURE__ */ new Date()).getFullYear()));
      let m = [...p].sort().reverse();
      this._dashHeatIdx = Math.min(this._dashHeatIdx || 0, m.length);
      let f = r.createDiv("lkm-heat-head");
      if (f.createDiv("lkm-dash-h").setText(e("\u521B\u5EFA\u70ED\u529B\u56FE \xB7 ") + (this._dashHeatIdx ? m[this._dashHeatIdx - 1] + e(" \u5E74") : e("\u8FD1\u4E00\u5E74")) + e("\uFF08\u6309 date \u5B57\u6BB5\uFF09")), this._dashHeatIdx || m.length > 1) {
        let D = f.createDiv("lkm-heat-nav"), O = /* @__PURE__ */ _(() => {
          let V = this.contentEl.querySelector(".lkm-dash"), X = V ? V.scrollTop : 0;
          this.render();
          let Q = this.contentEl.querySelector(".lkm-dash");
          Q && (Q.scrollTop = X);
        }, "rerender"), k = D.createEl("button", { cls: "lkm-step", text: "\u2039" });
        k.disabled = this._dashHeatIdx >= m.length;
        let P = D.createEl("button", { cls: "lkm-step", text: "\u203A" });
        P.disabled = this._dashHeatIdx <= 0, k.onclick = () => {
          this._dashHeatIdx++, O();
        }, P.onclick = () => {
          this._dashHeatIdx--, O();
        };
      }
      let u = 864e5, C = /* @__PURE__ */ new Date();
      C.setHours(0, 0, 0, 0);
      let x = (C.getDay() + 6) % 7, F = window.innerWidth < 600, L = F ? 10 : 12, w, S, y, I;
      if (this._dashHeatIdx) {
        let D = parseInt(m[this._dashHeatIdx - 1], 10), O = new Date(D, 0, 1), k = new Date(D, 11, 31);
        w = new Date(O.getTime() - (O.getDay() + 6) % 7 * u), S = O, y = k, I = Math.round((k.getTime() + (6 - (k.getDay() + 6) % 7) * u - w.getTime()) / u / 7);
      } else {
        let D = new Date(C.getTime() + (6 - x) * u);
        I = F ? 26 : 53, w = new Date(D.getTime() - (I * 7 - 1) * u), S = w, y = C;
      }
      if (r.createDiv("lkm-heat-sum").setText(o.heat.size ? (() => {
        let D = this._ds(S), O = this._ds(y), k = 0, P = 0, V = { date: "", count: 0 };
        for (let [X, Q] of o.heat) X >= D && X <= O && (k += Q, P++, Q > V.count && (V = { date: X, count: Q }));
        return (P ? P + e(" \u5929\u6709\u521B\u5EFA \xB7 \u5171 ") + k + e(" \u7BC7") : e("\u8BE5\u65F6\u95F4\u6BB5\u6682\u65E0\u521B\u5EFA\u8BB0\u5F55")) + (V.count ? e(" \xB7 \u6700\u591A\u4E00\u5929 ") + V.count + e(" \u7BC7\uFF08") + V.date + "\uFF09" : "");
      })() : e("\u8FD8\u6CA1\u6709\u5E26 date \u5B57\u6BB5\u7684\u7B14\u8BB0")), o.heat.size) {
        let D = r.createDiv("lkm-heat-scroll"), O = D.createDiv("lkm-heat-grid");
        O.style.gridTemplateColumns = "26px repeat(" + I + ", " + L + "px)", O.style.gridAutoRows = L + "px";
        let k = -1;
        for (let U = 0; U < I; U++) {
          let q = new Date(w.getTime() + U * 7 * u);
          if (q.getMonth() !== k) {
            k = q.getMonth();
            let $ = O.createDiv("lkm-heat-mon");
            $.style.gridColumn = String(U + 2), $.style.gridRow = "1", $.setText(q.getMonth() + 1 + e("\u6708"));
          }
        }
        [e("\u4E00"), e("\u4E09"), e("\u4E94")].forEach((U, q) => {
          let $ = O.createDiv("lkm-heat-wd");
          $.style.gridColumn = "1", $.style.gridRow = String(q * 2 + 2), $.setText(U);
        });
        let P = this._ds(S), V = this._ds(y), X = this._ds(C), Q = null;
        for (let U = 0; U < I; U++)
          for (let q = 0; q < 7; q++) {
            let $ = new Date(w.getTime() + (U * 7 + q) * u), A = O.createDiv("lkm-heat-cell");
            A.style.gridColumn = String(U + 2), A.style.gridRow = String(q + 2);
            let K = this._ds($);
            if ($ > C || K < P || K > V) {
              A.addClass("lkm-heat-off");
              continue;
            }
            let at = o.heat.get(K) || 0, kt = at === 0 ? 0 : at === 1 ? 1 : at <= 2 ? 2 : at <= 4 ? 3 : 4;
            kt && A.addClass("lkm-heat-l" + kt), this._isFilterActive({ kind: "date", value: K }) && A.addClass("is-active"), at && A.addClass("lkm-heat-hit"), K === X && (A.addClass("lkm-heat-today"), Q = A), A.title = K + "\uFF1A" + at + e(" \u7BC7") + (K === X ? e("\uFF08\u4ECA\u5929\uFF09") : ""), A.addEventListener("click", () => this._toggleDashFilter({ kind: "date", value: K }));
          }
        Q && !this._dashHeatIdx && requestAnimationFrame(() => {
          let U = Q.getBoundingClientRect(), q = D.getBoundingClientRect();
          U.right > q.right - 20 && (D.scrollLeft += U.right - q.right + 30);
        });
      }
      let T = d.createDiv("lkm-dash-two"), E = T.createDiv("lkm-dash-sec"), B = this._dashFilters || [];
      if (B.length) {
        E.addClass("lkm-filter-sec");
        let D = this._sortDashItems(this._dashFilterItems(B)), O = E.createDiv("lkm-filter-head");
        O.createSpan({ cls: "lkm-dash-h lkm-filter-title", text: this._dashFilterGroupLabel(B) });
        let k = O.createSpan({ cls: "lkm-filter-count", text: "\uFF08" + D.length + "\uFF09" }), P = O.createEl("input", { cls: "lkm-filter-search", type: "text", attr: { placeholder: e("\u8FC7\u6EE4\u2026") } });
        P.value = this._dashSearch || "", P.addEventListener("focus", () => {
          if (!window.matchMedia("(hover: none)").matches) return;
          let $ = this.contentEl.querySelector(".lkm-dash"), A = this.contentEl.querySelector(".lkm-toolbar");
          if (!$ || !A) return;
          let K = $.scrollTop, at = $.style.flex, kt = $.style.height, bt = /* @__PURE__ */ _(() => {
            let Nt = A.getBoundingClientRect().bottom, g = window.visualViewport, M = (g ? g.height + g.offsetTop : window.innerHeight) - Nt;
            M > 60 && ($.style.flex = "none", $.style.height = M + "px"), $.scrollTop = Math.max(0, O.offsetTop - 50);
          }, "doAdjust");
          setTimeout(bt, 300), setTimeout(bt, 500), P.addEventListener("blur", () => {
            $.style.flex = at, $.style.height = kt, $.scrollTop = K;
          }, { once: !0 });
        });
        let V = O.createEl("button", { cls: "lkm-btn", text: e("\u6392\u5E8F\uFF1A") + { date: e("\u65E5\u671F"), name: e("\u540D\u79F0") }[this._dashSort || "date"] });
        V.onclick = () => {
          this._dashSort = this._dashSort === "date" ? "name" : "date", this.render();
        };
        let X = O.createEl("button", { cls: "lkm-btn", text: e("\u6E05\u9664") });
        X.onclick = () => {
          this._dashFilters = [], this._dashSearch = "", this.render();
        }, D.length || E.createDiv("lkm-heat-sum").setText(e("\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7B14\u8BB0"));
        let Q = E.createDiv("lkm-filter-list"), U = [];
        for (let $ of D) {
          let A = this._dashRow(Q, $);
          U.push({ el: A, text: ($.title + " " + ($.type || "")).toLowerCase() }), A.addEventListener("click", () => {
            $.isIndex ? (this._kwFile = $.file, this._multiRoot = !1, this._mode = "map", this.render()) : this.app.workspace.getLeaf(!0).openFile($.file);
          });
        }
        let q = /* @__PURE__ */ _(() => {
          let $ = (this._dashSearch || "").trim().toLowerCase(), A = 0;
          for (let K of U) {
            let at = !$ || K.text.includes($);
            K.el.style.display = at ? "" : "none", at && A++;
          }
          k.setText("\uFF08" + ($ ? A + "/" : "") + D.length + "\uFF09");
        }, "applySearch");
        P.addEventListener("input", () => {
          this._dashSearch = P.value, q();
        }), q();
      } else {
        E.createDiv("lkm-dash-h").setText(e("\u5206\u652F\u5206\u5E03 \xB7 \u5B8C\u6210\u8FDB\u5EA6")), o.branches.length || E.createDiv("lkm-heat-sum").setText(e("\u8FD8\u6CA1\u6709 main: true \u7684\u4E3B\u7B14\u8BB0"));
        let D = this._dashBranchAll && o.branches.length > 6, O = D ? o.branches : o.branches.slice(0, 6), k = E.createDiv("lkm-filter-list lkm-branch-list"), P = o.branches[0] && o.branches[0].total || 1;
        for (let V of O) {
          let X = k.createDiv("lkm-branch-row");
          X.title = V.title + e("\uFF0C\u70B9\u51FB\u5728\u5BFC\u56FE\u4E2D\u6253\u5F00"), X.createSpan({ cls: "lkm-branch-name", text: Z(V.title, 10) });
          let Q = X.createDiv("lkm-type-bar").createDiv("lkm-branch-scaler");
          Q.style.width = Math.max(3, Math.round(V.total / P * 100)) + "%";
          let U = Q.createDiv("lkm-branch-done");
          U.style.width = (V.total ? Math.round(V.done / V.total * 100) : 0) + "%", X.createSpan({ cls: "lkm-type-num", text: V.done + "/" + V.total + " \xB7 " + Math.round(V.done / V.total * 100) + "%" }), X.addEventListener("click", () => {
            this.rootPath = V.path, this._view = null, this._kwFile = null, this._multiRoot = !1, this._mode = "map", this._expandedMem.clear(), this.render();
          });
        }
        if (o.branches.length > 6) {
          let V = E.createEl("button", { cls: "lkm-btn", text: D ? e("\u6536\u8D77") : e("\u5C55\u5F00\u5168\u90E8 ") + o.branches.length + e(" \u4E2A\u5206\u652F") });
          V.onclick = () => {
            this._dashBranchAll = !this._dashBranchAll, this.render();
          };
        }
      }
      let G = T.createDiv("lkm-dash-sec");
      G.createDiv("lkm-dash-h").setText(e("\u6700\u8FD1\u521B\u5EFA"));
      for (let D of o.recent)
        this._dashRow(G, D).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(D.file));
      if (o.modified.length) {
        G.createDiv("lkm-dash-h lkm-sec-gap").setText(e("\u6700\u8FD1\u4FEE\u6539"));
        for (let D of o.modified)
          this._dashRow(G, D).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(D.file));
      }
    } else
      this._renderTimelineDash(t);
  }
  _renderTimelineDash(t) {
    let i = [...qt(this.app, this.s).map.values()], a = t.createDiv({ cls: "lkm-tl-toolbar" }), s = a.createEl("input", { type: "text", cls: "lkm-tl-search", placeholder: e("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    s.value = this._tlSearch, s.addEventListener("input", () => {
      this._tlSearch = s.value.toLowerCase().trim(), this._renderTimelineBody(f, i);
    }), a.createEl("span", { cls: "lkm-tl-label", text: e("\u7C7B\u578B") });
    let o = a.createEl("select", { cls: "lkm-tl-typesel" });
    o.createEl("option", { value: "", text: e("\u5168\u90E8") });
    let c = [...new Set(i.map((u) => u.type).filter(Boolean))].sort();
    for (let u of c)
      o.createEl("option", { value: u, text: ct(u) });
    o.value = this._tlTypeFilter, o.addEventListener("change", () => {
      this._tlTypeFilter = o.value, this._renderTimelineBody(f, i);
    }), a.createEl("span", { cls: "lkm-tl-label", text: e("\u65F6\u95F4") });
    let d = a.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [u, C] of [["all", e("\u5168\u90E8")], ["day", e("\u4ECA\u65E5")], ["week", e("\u672C\u5468")], ["month", e("\u672C\u6708")], ["year", e("\u672C\u5E74")], ["pweek", e("\u8FD1\u4E00\u5468")], ["pmonth", e("\u8FD1\u4E00\u6708")], ["pyear", e("\u8FD1\u4E00\u5E74")]])
      d.createEl("option", { value: u, text: C });
    d.value = this._tlRange, d.addEventListener("change", () => {
      this._tlRange = d.value, this._renderTimelineBody(f, i);
    });
    let h = a.createEl("input", { type: "date", cls: "lkm-tl-datesel" });
    h.value = this._tlDateFilter, h.title = e("\u6309\u6307\u5B9A\u65E5\u671F\u7B5B\u9009"), h.addEventListener("change", () => {
      this._tlDateFilter = h.value, this._renderTimelineBody(f, i);
    }), a.createEl("span", { cls: "lkm-tl-label", text: e("\u6027\u8D28") });
    let l = a.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [u, C] of [["all", e("\u5168\u90E8")], ["zk", e("\u4E3B\u7B14\u8BB0")], ["normal", e("\u666E\u901A")]])
      l.createEl("option", { value: u, text: C });
    l.value = this._tlZkFilter, l.addEventListener("change", () => {
      this._tlZkFilter = l.value, this._renderTimelineBody(f, i);
    }), a.createEl("span", { cls: "lkm-tl-label", text: e("\u72B6\u6001") });
    let r = a.createEl("select", { cls: "lkm-tl-typesel" });
    r.createEl("option", { value: "all", text: e("\u5168\u90E8") }), r.createEl("option", { value: "nostatus", text: e("\u65E0\u72B6\u6001") });
    for (let u of Object.keys(this.s.statusColors || {}))
      r.createEl("option", { value: u, text: ot(u) });
    r.value = this._tlStatusFilter, r.addEventListener("change", () => {
      this._tlStatusFilter = r.value, this._renderTimelineBody(f, i);
    });
    let p = a.createEl("button", { cls: "lkm-btn lkm-tl-sortbtn", text: this._tlSort === "desc" ? e("\u65B0\u2192\u65E7") : e("\u65E7\u2192\u65B0") });
    p.addEventListener("click", () => {
      this._tlSort = this._tlSort === "desc" ? "asc" : "desc", p.textContent = this._tlSort === "desc" ? e("\u65B0\u2192\u65E7") : e("\u65E7\u2192\u65B0"), this._renderTimelineBody(f, i);
    });
    let m = a.createEl("button", { cls: "lkm-btn", text: e("\u6E05\u7A7A") });
    m.title = e("\u6E05\u7A7A\u6240\u6709\u7B5B\u9009\u6761\u4EF6"), m.addEventListener("click", () => {
      this._tlSearch = "", this._tlTypeFilter = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this.render();
    });
    let f = t.createDiv({ cls: "lkm-tl-body" });
    this._renderTimelineBody(f, i);
  }
  _renderTimelineBody(t, n) {
    t.empty();
    let i = n;
    if (this._tlTypeFilter && (i = i.filter((h) => h.type === this._tlTypeFilter)), this._tlSearch && (i = i.filter((h) => h.title.toLowerCase().includes(this._tlSearch))), this._tlZkFilter === "zk" ? i = i.filter((h) => h.zk) : this._tlZkFilter === "normal" && (i = i.filter((h) => !h.zk)), this._tlStatusFilter === "nostatus" ? i = i.filter((h) => !h.status) : this._tlStatusFilter && this._tlStatusFilter !== "all" && (i = i.filter((h) => h.status === this._tlStatusFilter)), this._tlDateFilter)
      i = i.filter((h) => h.ctime && h.ctime.slice(0, 10) === this._tlDateFilter);
    else if (this._tlRange !== "all") {
      let h = /* @__PURE__ */ new Date(), l = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0"), r = /* @__PURE__ */ new Date(l), p = null;
      if (this._tlRange === "day" ? p = r : this._tlRange === "week" || this._tlRange === "pweek" ? p = new Date(r.getTime() - 6 * 864e5) : this._tlRange === "month" || this._tlRange === "pmonth" ? p = new Date(r.getTime() - 29 * 864e5) : (this._tlRange === "year" || this._tlRange === "pyear") && (p = new Date(r.getTime() - 364 * 864e5)), p) {
        let m = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0");
        i = i.filter((f) => {
          if (!f.ctime) return !1;
          let u = f.ctime.slice(0, 10);
          return u >= m && u <= l;
        });
      }
    }
    let a = i.filter((h) => h.ctime), s = i.filter((h) => !h.ctime);
    a.sort((h, l) => this._tlSort === "desc" ? String(l.ctime).localeCompare(String(h.ctime)) : String(h.ctime).localeCompare(String(l.ctime)));
    let o = [], c = null, d = null;
    for (let h of a) {
      let l = h.ctime.slice(0, 10);
      l !== c && (c = l, d = { key: l, items: [] }, o.push(d)), d.items.push(h);
    }
    for (let h of o) {
      let l = t.createDiv({ cls: "lkm-tl-day" }), [r, p, m] = h.key.split("-"), f = new Date(parseInt(r), parseInt(p) - 1, parseInt(m)), u = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][f.getDay()];
      l.createDiv({ cls: "lkm-tl-day-label", text: h.key + " " + e("\u5468") + u + " (" + h.items.length + ")" });
      let C = l.createDiv({ cls: "lkm-tl-items" });
      for (let x of h.items)
        this._renderTimelineItem(C, x);
    }
    if (s.length) {
      let h = t.createDiv({ cls: "lkm-tl-day lkm-tl-nodate" });
      h.createDiv({ cls: "lkm-tl-day-label", text: e("\u65E0\u65E5\u671F") + " (" + s.length + ")" });
      let l = h.createDiv({ cls: "lkm-tl-items" });
      for (let r of s)
        this._renderTimelineItem(l, r);
    }
    i.length || t.createDiv({ cls: "lkm-tl-empty", text: e("\u6682\u65E0\u7B14\u8BB0") });
  }
  _renderTimelineItem(t, n) {
    let i = t.createDiv({ cls: "lkm-tl-item" }), a = i.createDiv({ cls: "lkm-tl-item-content" });
    if (n.type) {
      let c = this.s.typeColors && this.s.typeColors[n.type], d = a.createEl("span", { cls: "lkm-tl-badge", text: ct(n.type) });
      c && (d.style.background = c);
    }
    if (n.zk && a.createEl("span", { cls: "lkm-tl-main-badge", text: e("\u4E3B\u7B14\u8BB0") }), a.createEl("span", { cls: "lkm-tl-title", text: n.title }), n.status) {
      let c = a.createEl("span", { cls: "lkm-tl-status", text: ot(n.status) }), d = te(this.s, n.status);
      d && (c.style.background = d);
    }
    i.addEventListener("click", (c) => {
      c.target.closest("a") || (this.app.workspace.openLinkText(n.file.basename, n.file.path, c.ctrlKey || c.metaKey), this.locateFile(n.file, !0));
    });
    let s = /* @__PURE__ */ _((c, d) => {
      let h = new Bt();
      h.addItem((l) => {
        l.setTitle(e("\u5728\u65B0\u6807\u7B7E\u6253\u5F00")).setIcon("file-plus").onClick(() => {
          this.app.workspace.openLinkText(n.file.basename, n.file.path, !0);
        });
      }), h.addItem((l) => {
        l.setTitle(e("\u5728\u5BFC\u56FE\u4E2D\u663E\u793A")).setIcon("git-fork").onClick(() => {
          this._mode = "map", this.locateFile(n.file, !0);
          let r = this._selKey ? this._nodeIndex.get(this._selKey) : null;
          if (!r || !r.note.file || r.note.file.path !== n.file.path) {
            this.rootPath = n.file.path, this._kwFile = null, this._multiRoot = !1, this._multiRootPaths = [], this.render();
            for (let p of this._nodeIndex.values())
              if (p.note.file && p.note.file.path === n.file.path && !p.isAlias) {
                this._selKey = p.key;
                break;
              }
            this.render();
          }
        });
      }), h.showAtPosition({ x: c, y: d });
    }, "showMenu");
    i.addEventListener("contextmenu", (c) => {
      c.preventDefault(), s(c.clientX, c.clientY);
    });
    let o = null;
    i.addEventListener("touchstart", (c) => {
      let d = c.touches[0];
      o = setTimeout(() => {
        o = null, s(d.clientX, d.clientY);
      }, 500);
    }, { passive: !0 }), i.addEventListener("touchmove", () => {
      o && (clearTimeout(o), o = null);
    }, { passive: !0 }), i.addEventListener("touchend", () => {
      o && (clearTimeout(o), o = null);
    }, { passive: !0 });
  }
  _dashRow(t, n) {
    let i = this.s, a = t.createDiv("lkm-recent-row");
    a.title = n.isIndex ? n.title + e("\uFF0C\u70B9\u51FB\u6253\u5F00\u5173\u952E\u8BCD\u89C6\u56FE") : n.title + e("\uFF0C\u70B9\u51FB\u6253\u5F00\u7B14\u8BB0");
    let s = (i.typeColors || {})[n.type];
    if (s && (a.createSpan({ cls: "lkm-recent-dot" }).style.background = s), a.createSpan({ cls: "lkm-recent-name", text: Z(n.title, 14) }), n.created && !n.mtime && a.createSpan({ cls: "lkm-recent-date", text: n.created }), n.mtime && a.createSpan({ cls: "lkm-recent-date", text: n.mtime }), !n.isIndex) {
      let o = a.createSpan({ cls: "lkm-row-jump", title: e("\u5728\u5BFC\u56FE\u4E2D\u5B9A\u4F4D") });
      try {
        ce(o, "crosshair");
      } catch {
      }
      o.addEventListener("click", (c) => {
        c.stopPropagation(), this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._dashFilters = [], this.locateFile(n.file);
      });
    }
    return a;
  }
  _renderDonut(t, n, i) {
    let d = 2 * Math.PI * 49, h = j("svg", { class: "lkm-donut-svg", viewBox: "0 0 116 116", width: 116, height: 116 });
    h.appendChild(j("circle", { cx: 58, cy: 58, r: 49, fill: "none", stroke: "var(--background-secondary)", "stroke-width": 13 }));
    let l = n.reduce((f, u) => f + u.value, 0), r = 0;
    for (let f of n) {
      let u = l ? f.value / l : 0;
      if (!u) continue;
      let C = Math.max(0, u * d - 2.5), x = j("circle", {
        cx: 58,
        cy: 58,
        r: 49,
        fill: "none",
        stroke: f.color,
        "stroke-width": 13,
        "stroke-linecap": "butt",
        "stroke-dasharray": C + " " + (d - C),
        "stroke-dashoffset": -(r * d),
        transform: "rotate(-90 58 58)",
        class: "lkm-donut-seg" + (this._isFilterActive(f.filter) ? " is-active" : "")
      });
      x.addEventListener("click", () => this._toggleDashFilter(f.filter)), h.appendChild(x), r += u;
    }
    let p = j("text", { x: 58, y: 57, class: "lkm-donut-num", "text-anchor": "middle" });
    p.textContent = String(i), h.appendChild(p);
    let m = j("text", { x: 58, y: 71, class: "lkm-donut-cap", "text-anchor": "middle" });
    m.textContent = e("\u603B\u7B14\u8BB0"), h.appendChild(m), t.appendChild(h);
  }
  _renderBarChart(t, n, i) {
    i = i || {};
    let a = i.height || 120, s = 16, o = 18, c = Math.max(t.clientWidth || 300, 120), d = Math.max(1, ...n.map((p) => p.value)), h = c / Math.max(n.length, 1), l = a - s - o, r = j("svg", { class: "lkm-bars-svg", viewBox: "0 0 " + c + " " + a, preserveAspectRatio: "none", width: "100%", height: a });
    for (let p = 1; p <= 3; p++) {
      let m = s + l * (1 - p / 3);
      r.appendChild(j("line", { x1: 0, y1: m, x2: c, y2: m, class: "lkm-bars-grid" }));
    }
    n.forEach((p, m) => {
      let f = p.value > 0 ? Math.max(3, l * p.value / d) : 0, u = m * h + h * 0.22, C = h * 0.56, x = a - o - f, F = j("rect", { x: u, y: x, width: C, height: f, rx: Math.min(4, C / 2), class: "lkm-bar" + (this._isFilterActive(p.filter) ? " is-active" : "") });
      if (p.color && (F.style.fill = p.color), p.filter && F.addEventListener("click", () => this._toggleDashFilter(p.filter)), r.appendChild(F), p.value > 0) {
        let L = j("text", { x: u + C / 2, y: x - 4, class: "lkm-bars-val", "text-anchor": "middle" });
        L.textContent = String(p.value), r.appendChild(L);
      }
      if (!i.thinLabels || m % 2 === 0) {
        let L = j("text", { x: u + C / 2, y: a - 5, class: "lkm-bars-lab", "text-anchor": "middle" });
        L.textContent = p.label, r.appendChild(L);
      }
    }), t.appendChild(r);
  }
  _isFilterActive(t) {
    return (this._dashFilters || []).some((n) => n.kind === t.kind && (n.value || "") === (t.value || ""));
  }
  _toggleDashFilter(t) {
    this._dashFilters = this._dashFilters || [];
    let n = { notype: "type", type: "notype" };
    if (t.kind === "all" || t.kind === "kw")
      this._dashFilters = this._isFilterActive(t) ? [] : [Object.assign({}, t)];
    else {
      let i = this._dashFilters.findIndex((a) => a.kind === t.kind && (a.value || "") === (t.value || ""));
      if (i >= 0) this._dashFilters.splice(i, 1);
      else {
        let a = n[t.kind];
        a && this._dashFilters.some((s) => s.kind === a) && (this._dashFilters = this._dashFilters.filter((s) => s.kind !== a)), this._dashFilters = this._dashFilters.filter((s) => s.kind !== "all" && s.kind !== "kw"), this._dashFilters.push(t);
      }
    }
    this.render(), this._dashFilters.length && requestAnimationFrame(() => {
      let i = this.contentEl.querySelector(".lkm-filter-sec");
      i && i.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _dashFilterLabel(t) {
    return t.kind === "all" ? e("\u5168\u90E8\u7B14\u8BB0") : t.kind === "zk" ? e("\u4E3B\u7B14\u8BB0") : t.kind === "kw" ? e("\u5173\u952E\u8BCD\u7D22\u5F15") : t.kind === "status" ? ot(t.value) : t.kind === "nostatus" ? e("\u65E0\u72B6\u6001") : t.kind === "orphan" ? e("\u672A\u5173\u8054") : t.kind === "type" ? e("\u7C7B\u578B\uFF1A") + ct(t.value) : t.kind === "notype" ? e("\u672A\u6807\u6CE8\u7C7B\u578B") : t.kind === "date" || t.kind === "month" ? e("\u521B\u5EFA\u4E8E ") + t.value : t.kind === "depth" ? e("\u7B2C") + t.value + e("\u5C42") : t.kind === "nodate" ? e("\u672A\u6807\u65E5\u671F") : e("\u7B5B\u9009");
  }
  _dashFilterGroupLabel(t) {
    let n = /* @__PURE__ */ new Set(["date", "month", "type", "depth", "status"]), i = /* @__PURE__ */ new Map(), a = [];
    for (let o of t)
      n.has(o.kind) ? (i.has(o.kind) || i.set(o.kind, []), i.get(o.kind).push(o)) : a.push(o);
    let s = [];
    for (let [o, c] of i) {
      if (c.length === 1) {
        s.push(this._dashFilterLabel(c[0]));
        continue;
      }
      let d = e(o === "date" || o === "month" ? "\u521B\u5EFA\u4E8E " : o === "type" ? "\u7C7B\u578B\uFF1A" : o === "status" ? "\u72B6\u6001\uFF1A" : "\u7B2C"), h = o === "depth" ? e(" \u5C42") : "", l = o === "status" ? (r) => ot(r.value) : o === "type" ? (r) => ct(r.value) : (r) => r.value;
      s.push(d + c.map(l).join("\u3001") + h);
    }
    for (let o of a) s.push(this._dashFilterLabel(o));
    return s.join(" + ");
  }
  _dashFilterItems(t) {
    let n = [...this.notes.values()], i = this._depthMap();
    if (t.find((h) => h.kind === "kw")) {
      let h = this.app.vault.getAbstractFileByPath(et(this.s.indexFolder)), l = new Set((h && h.children ? h.children : []).filter((r) => r instanceof Mt && r.extension === "md").map((r) => r.path));
      n = n.filter((r) => l.has(r.file.path));
    }
    let s = t.filter((h) => h.kind !== "kw"), o = /* @__PURE__ */ new Set(["date", "month", "type", "depth", "status"]), c = /* @__PURE__ */ new Map(), d = [];
    for (let h of s)
      o.has(h.kind) ? (c.has(h.kind) || c.set(h.kind, []), c.get(h.kind).push(h)) : d.push(h);
    for (let [h, l] of c)
      h === "date" ? n = n.filter((r) => l.some((p) => r.date === p.value)) : h === "month" ? n = n.filter((r) => l.some((p) => (r.date || "").slice(0, 7) === p.value)) : h === "type" ? n = n.filter((r) => l.some((p) => r.type === p.value)) : h === "depth" ? n = n.filter((r) => l.some((p) => String(i.get(r.file.path) || 0) === p.value)) : h === "status" && (n = n.filter((r) => l.some((p) => r.status === p.value)));
    for (let h of d)
      h.kind === "zk" ? n = n.filter((l) => l.zk) : h.kind === "nostatus" ? n = n.filter((l) => !l.status) : h.kind === "orphan" ? n = n.filter((l) => !this.referenced.has(l.file.path)) : h.kind === "notype" ? n = n.filter((l) => !l.type) : h.kind === "nodate" && (n = n.filter((l) => !l.date));
    return n.map((h) => ({ title: h.title, created: h.date || "", type: h.type || "", file: h.file }));
  }
  _sortDashItems(t) {
    let n = this._dashSort || "date", i = t.slice();
    return n === "name" ? i.sort((a, s) => String(a.title).localeCompare(String(s.title), "zh")) : i.sort((a, s) => String(s.created || "").localeCompare(String(a.created || ""))), i;
  }
  _ds(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  _depthMap() {
    let t = /* @__PURE__ */ new Map(), n = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!n) return t;
    let i = zt(this.app, this.notes, n);
    return (/* @__PURE__ */ _((function a(s, o) {
      s.note.file && !t.has(s.note.file.path) && t.set(s.note.file.path, o), s.children.forEach((c) => a(c, o + 1));
    }), "walk"))(i, 1), t;
  }
  _dashSummaryMd(t) {
    let n = [];
    n.push(e("## \u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE\u5DE5\u4F5C\u53F0\u7EDF\u8BA1 ") + this._ds(/* @__PURE__ */ new Date())), n.push(""), n.push(e("| \u6307\u6807 | \u6570\u91CF |")), n.push("| --- | --- |"), n.push(e("| \u7B14\u8BB0\u603B\u6570 | ") + t.total + " |"), n.push(e("| \u4E3B\u7B14\u8BB0 | ") + t.zk + " |"), n.push(e("| \u5173\u952E\u8BCD\u7D22\u5F15 | ") + t.kw + " |"), n.push(e("| \u672A\u5173\u8054 | ") + t.orphan + " |");
    for (let i of t.byStatusOrder) n.push("| " + ot(i.name) + " | " + i.count + " |");
    if (t.noStatus && n.push(e("| \u65E0\u72B6\u6001 | ") + t.noStatus + " |"), n.push(e("| \u672A\u6807\u6CE8\u7C7B\u578B | ") + t.noType + " |"), n.push(e("| \u672A\u6807\u65E5\u671F | ") + t.noDate + " |"), n.push(""), t.byTypeOrder.length) {
      n.push(e("### \u7C7B\u578B\u5206\u5E03")), n.push(e("| \u7C7B\u578B | \u6570\u91CF | \u5360\u6BD4 |")), n.push("| --- | --- | --- |");
      for (let i of t.byTypeOrder) n.push("| " + ct(i.name) + " | " + i.count + " | " + (t.total ? Math.round(i.count / t.total * 100) : 0) + "% |");
      n.push("");
    }
    if (t.depthMax) {
      n.push(e("### \u6811\u6DF1\u5EA6\u5206\u5E03")), n.push(e("| \u5C42\u7EA7 | \u6570\u91CF |")), n.push("| --- | --- |");
      for (let i = 1; i <= t.depthMax; i++) t.depthCount.has(i) && n.push(e("| \u7B2C") + i + e("\u5C42 | ") + t.depthCount.get(i) + " |");
      n.push("");
    }
    if (t.monthly.length) {
      n.push(e("### \u8FD112\u4E2A\u6708\u521B\u5EFA")), n.push(e("| \u6708\u4EFD | \u65B0\u589E |")), n.push("| --- | --- |");
      for (let i of t.monthly) n.push("| " + i.key + " | " + i.count + " |");
      n.push("");
    }
    if (t.branches.length) {
      n.push(e("### \u5206\u652F\u5206\u5E03\uFF08\u5DF2\u5B8C\u6210/\u603B\u6570\uFF09"));
      for (let i of t.branches) n.push("- " + i.title + "\uFF1A" + i.done + "/" + i.total);
      n.push("");
    }
    return n.join(`
`);
  }
  _dashStats() {
    let t = [...this.notes.values()], n = t.length, i = t.filter((k) => k.zk).length, a = this.s.statusColors || {}, s = /* @__PURE__ */ new Map(), o = 0;
    for (let k of t)
      k.status ? s.set(k.status, (s.get(k.status) || 0) + 1) : o++;
    let c = Object.keys(a).filter((k) => s.has(k)).map((k) => ({ name: k, color: a[k], count: s.get(k) }));
    for (let [k, P] of s) a[k] || c.push({ name: k, color: "var(--text-faint)", count: P });
    let d = s.get("\u5DF2\u5B8C\u6210") || 0, h = s.get("\u5F85\u529E") || 0, l = t.filter((k) => !k.date).length, r = t.filter((k) => !this.referenced.has(k.file.path)).length, p = this.s.typeColors || {}, m = /* @__PURE__ */ new Map(), f = 0;
    for (let k of t)
      k.type ? m.set(k.type, (m.get(k.type) || 0) + 1) : f++;
    let u = Object.keys(p).filter((k) => m.has(k)).map((k) => ({ name: k, color: p[k], count: m.get(k) }));
    for (let [k, P] of m) p[k] || u.push({ name: k, color: "var(--text-faint)", count: P });
    let C = this._depthMap(), x = /* @__PURE__ */ new Map();
    for (let k of C.values()) k && x.set(k, (x.get(k) || 0) + 1);
    let F = x.size ? Math.max(...x.keys()) : 0, L = /* @__PURE__ */ new Date();
    L.setHours(0, 0, 0, 0);
    let w = [];
    for (let k = 11; k >= 0; k--) {
      let P = new Date(L.getFullYear(), L.getMonth() - k, 1);
      w.push({ key: P.getFullYear() + "-" + String(P.getMonth() + 1).padStart(2, "0"), count: 0 });
    }
    for (let k of t) {
      if (!k.date) continue;
      let P = w.find((V) => V.key === k.date.slice(0, 7));
      P && P.count++;
    }
    let S = 0, y = this.app.vault.getAbstractFileByPath(et(this.s.indexFolder));
    y && y.children && (S = y.children.filter((k) => k instanceof Mt && k.extension === "md").length);
    let I = /* @__PURE__ */ new Map();
    for (let k of t) k.date && I.set(k.date, (I.get(k.date) || 0) + 1);
    let T = t.filter((k) => k.zk).map((k) => {
      let P = zt(this.app, this.notes, k), V = 0, X = 0, Q = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ _((function U(q) {
        if (q.note.file) {
          if (Q.has(q.note.file.path)) return;
          Q.add(q.note.file.path);
        }
        V++, q.note.status === "\u5DF2\u5B8C\u6210" && X++;
        for (let $ of q.children) U($);
      }), "walk"))(P), { path: k.file.path, title: k.title, total: V, done: X };
    }).sort((k, P) => P.total - k.total), E = /* @__PURE__ */ _((k) => ({ title: k.title, created: k.date || "", type: k.type || "", file: k.file }), "toItem"), B = t.filter((k) => k.date).sort((k, P) => String(P.date).localeCompare(String(k.date))).slice(0, 8).map(E), G = t.slice().sort((k, P) => (P.file.stat && P.file.stat.mtime || 0) - (k.file.stat && k.file.stat.mtime || 0)).slice(0, 6).map((k) => {
      let P = E(k);
      try {
        let V = new Date(k.file.stat.mtime);
        P.mtime = String(V.getFullYear()).slice(2) + "-" + String(V.getMonth() + 1).padStart(2, "0") + "-" + String(V.getDate()).padStart(2, "0") + " " + String(V.getHours()).padStart(2, "0") + ":" + String(V.getMinutes()).padStart(2, "0");
      } catch {
      }
      return P;
    }), D = 0, O = 0;
    for (let k of t)
      for (let P of k.childLinks) {
        D++;
        let V = this.app.metadataCache.getFirstLinkpathDest(P, k.file.path);
        (!V || !this.notes.has(V.path)) && O++;
      }
    return { total: n, zk: i, done: d, todo: h, noDate: l, orphan: r, noType: f, byTypeOrder: u, byStatusOrder: c, noStatus: o, depthCount: x, depthMax: F, monthly: w, kw: S, heat: I, branches: T, recent: B, modified: G, linkCount: D, deadLinks: O };
  }
};
_(Se, "LinkMindmapView");
var Dt = Se, Ce = class extends Ne {
  constructor(t, n) {
    super(t, n), this.plugin = n;
  }
  display() {
    let { containerEl: t } = this;
    t.empty();
    let n = t.createDiv("lkm-settings-title");
    n.createEl("h2", { text: e("Link Mindmap \u8BBE\u7F6E") });
    let i = this.plugin.settings.settingSections || ["basic", "fields", "layout", "behavior", "display", "colors", "types", "statuses", "presets", "io"], a = {
      basic: e("\u57FA\u672C\u8BBE\u7F6E"),
      fields: e("\u5B57\u6BB5\u540D\u914D\u7F6E"),
      layout: e("\u5E03\u5C40\u914D\u7F6E"),
      behavior: e("\u884C\u4E3A\u914D\u7F6E"),
      display: e("\u663E\u793A\u914D\u7F6E"),
      colors: e("\u989C\u8272\u914D\u7F6E"),
      types: e("\u7C7B\u578B\u914D\u7F6E"),
      statuses: e("\u72B6\u6001\u914D\u7F6E"),
      presets: e("\u5BFC\u56FE\u9884\u8BBE"),
      io: e("\u914D\u7F6E\u5BFC\u5165/\u5BFC\u51FA")
    }, s = this, o = {}, c = n.createEl("select", { cls: "lkm-jump-sel" });
    c.createEl("option", { value: "", text: e("\u8DF3\u8F6C\u5230\u2026") });
    for (let l of i) c.createEl("option", { value: l, text: a[l] || l });
    c.addEventListener("change", () => {
      let l = c.value;
      if (!l) return;
      let r = o[l];
      r && r.scrollIntoView({ behavior: "smooth", block: "start" }), c.value = "";
    });
    let d = (l) => {
      let r = t.createEl("h3", { cls: "lkm-sec-h" });
      r.createEl("span", { text: a[l] || l }), o[l] = r;
    }, h = {
      basic() {
        new R(t).setName(e("\u8BED\u8A00")).setDesc(e("\u754C\u9762\u8BED\u8A00\uFF08\u81EA\u52A8\u8DDF\u968F Obsidian \u8BBE\u7F6E\uFF09")).addDropdown((r) => {
          r.addOption("auto", e("\u81EA\u52A8") + " (Auto)"), r.addOption("zh", e("\u4E2D\u6587")), r.addOption("en", "English"), r.setValue(s.plugin.settings.language || "auto"), r.onChange(async (p) => {
            s.plugin.settings.language = p, await s.plugin.saveSettings(), s.plugin._initLang(), s.display();
          });
        }), new R(t).setName(e("\u7B14\u8BB0\u6587\u4EF6\u5939")).setDesc(e("\u5B58\u653E\u5361\u7247\u7B14\u8BB0\u7684\u76EE\u5F55")).addText((r) => r.setValue(s.plugin.settings.mainFolder).onChange(async (p) => {
          s.plugin.settings.mainFolder = p.trim(), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u5939")).setDesc(e("\u5B58\u653E\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u7684\u76EE\u5F55")).addText((r) => r.setValue(s.plugin.settings.indexFolder).onChange(async (p) => {
          s.plugin.settings.indexFolder = p.trim(), await s.plugin.saveSettings();
        })), new R(t).setName(e("\u6A21\u677F\u6587\u4EF6\u5939")).setDesc(e("\u6A21\u677F\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u65B0\u5EFA\u8282\u70B9\u65F6\u6A21\u677F\u4E0B\u62C9\u5217\u8868\u4ECE\u6B64\u6587\u4EF6\u5939\u8BFB\u53D6")).addText((r) => r.setValue(s.plugin.settings.templateFolder).onChange(async (p) => {
          s.plugin.settings.templateFolder = p.trim(), await s.plugin.saveSettings(), s.display();
        }));
        let l = (() => {
          let r = (s.plugin.settings.templateFolder || "").trim();
          if (!r) return [];
          let p = s.plugin.app.vault.getAbstractFileByPath(et(r));
          return !p || !p.children ? [] : p.children.filter((m) => m instanceof Mt && m.extension === "md");
        })();
        new R(t).setName(e("\u9ED8\u8BA4\u6A21\u677F")).setDesc(e("\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u6A21\u677F\uFF08\u53EF\u9009\uFF09")).addDropdown((r) => {
          r.addOption("", e("\u4E0D\u9009"));
          for (let p of l) r.addOption(p.path, p.basename);
          r.setValue(s.plugin.settings.templatePath || ""), r.onChange(async (p) => {
            s.plugin.settings.templatePath = p, await s.plugin.saveSettings();
          });
        });
      },
      fields() {
        new R(t).setName(e("\u5B50\u8282\u70B9\u94FE\u63A5\u5B57\u6BB5")).setDesc(e("\u7236\u7B14\u8BB0\u4E2D\u5B58\u653E\u5B50\u7B14\u8BB0\u94FE\u63A5\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 children\uFF09")).addText((l) => l.setValue(s.plugin.settings.linkField).onChange(async (r) => {
          s.plugin.settings.linkField = r.trim() || "children", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u7236\u8282\u70B9\u53CD\u5411\u94FE\u63A5\u5B57\u6BB5")).setDesc(e("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u5199\u5165\u5B50\u7B14\u8BB0\u7684\u7236\u94FE\u63A5\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 parent\uFF09")).addText((l) => l.setValue(s.plugin.settings.backField).onChange(async (r) => {
          s.plugin.settings.backField = r.trim() || "parent", await s.plugin.saveSettings();
        })), new R(t).setName(e("\u4E3B\u7B14\u8BB0\u6807\u8BB0\u5B57\u6BB5")).setDesc(e("\u6807\u8BB0\u5BFC\u56FE\u4E3B\u5165\u53E3\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 main\uFF09")).addText((l) => l.setValue(s.plugin.settings.zkField).onChange(async (r) => {
          s.plugin.settings.zkField = r.trim() || "main", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u72B6\u6001\u5B57\u6BB5")).setDesc(e("\u6807\u8BB0\u7B14\u8BB0\u5DE5\u4F5C\u72B6\u6001\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 status\uFF09")).addText((l) => l.setValue(s.plugin.settings.statusField).onChange(async (r) => {
          s.plugin.settings.statusField = r.trim() || "status", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u7C7B\u578B\u5B57\u6BB5")).setDesc(e("\u7B14\u8BB0\u7C7B\u578B\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 type\uFF09")).addText((l) => l.setValue(s.plugin.settings.typeField).onChange(async (r) => {
          s.plugin.settings.typeField = r.trim() || "type", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u65E5\u671F\u5B57\u6BB5")).setDesc(e("\u7B14\u8BB0\u521B\u5EFA\u65E5\u671F\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 date\uFF09")).addText((l) => l.setValue(s.plugin.settings.dateField).onChange(async (r) => {
          s.plugin.settings.dateField = r.trim() || "date", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u6807\u9898\u5B57\u6BB5")).setDesc(e("\u7B14\u8BB0\u6807\u9898\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 title\uFF09\u3002frontmatter \u4E2D\u6709\u8BE5\u5B57\u6BB5\u65F6\u8282\u70B9\u663E\u793A\u5176\u503C\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u540D\uFF1B\u91CD\u547D\u540D\u65F6\u540C\u6B65\u66F4\u65B0\u8BE5\u5B57\u6BB5")).addText((l) => l.setValue(s.plugin.settings.titleField).onChange(async (r) => {
          s.plugin.settings.titleField = r.trim() || "title", await s.plugin.saveSettings(), s.plugin.refreshViews();
        }));
      },
      layout() {
        new R(t).setName(e("\u9ED8\u8BA4\u663E\u793A\u5C42\u6570")).setDesc(e("\u6253\u5F00\u65F6\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")).addText((l) => l.setValue(String(s.plugin.settings.defaultDepth)).onChange(async (r) => {
          s.plugin.settings.defaultDepth = Math.max(1, parseInt(r, 10) || 3), await s.plugin.saveSettings();
          for (let p of s.plugin.app.workspace.getLeavesOfType(mt))
            p.view instanceof Dt && (p.view.depth = s.plugin.settings.defaultDepth, p.view._expandedMem.clear());
          s.plugin.refreshViews();
        })), new R(t).setName(e("\u540D\u79F0\u6700\u5927\u5B57\u6570")).setDesc(e("\u8282\u70B9\u6807\u9898\u6700\u591A\u663E\u793A\u7684\u5B57\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7\uFF1B0 = \u663E\u793A\u5168\u90E8\u540D\u79F0")).addText((l) => l.setValue(String(s.plugin.settings.maxTitleLen)).onChange(async (r) => {
          s.plugin.settings.maxTitleLen = Math.max(0, parseInt(r, 10) || 0), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u6C34\u5E73\u95F4\u8DDD")).setDesc(e("\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09")).addText((l) => l.setValue(String(s.plugin.settings.gapX)).onChange(async (r) => {
          s.plugin.settings.gapX = Math.max(10, parseInt(r, 10) || 60), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u5782\u76F4\u95F4\u8DDD")).setDesc(e("\u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB")).addText((l) => l.setValue(String(s.plugin.settings.gapY)).onChange(async (r) => {
          s.plugin.settings.gapY = Math.max(0, parseInt(r, 10) || 8), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u8282\u70B9\u9AD8\u5EA6")).setDesc(e("\u8282\u70B9\u5361\u7247\u9AD8\u5EA6")).addText((l) => l.setValue(String(s.plugin.settings.nodeHeight)).onChange(async (r) => {
          s.plugin.settings.nodeHeight = Math.max(30, parseInt(r, 10) || 46), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u5E03\u5C40\u65B9\u5411")).setDesc(e("\u6A2A\u5411\uFF1A\u4ECE\u5DE6\u5230\u53F3\u5C55\u5F00\u5B50\u8282\u70B9\uFF1B\u7EB5\u5411\uFF1A\u4ECE\u4E0A\u5230\u4E0B\u5C55\u5F00\u5B50\u8282\u70B9")).addDropdown((l) => {
          l.addOption("h", e("\u6A2A\u5411\uFF08\u5DE6\u2192\u53F3\uFF09")), l.addOption("v", e("\u7EB5\u5411\uFF08\u4E0A\u2192\u4E0B\uFF09")), l.setValue(s.plugin.settings.layoutDir || "h"), l.onChange(async (r) => {
            s.plugin.settings.layoutDir = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
          });
        });
      },
      behavior() {
        new R(t).setName(e("\u65B0\u5EFA\u65F6\u5199\u5165\u53CD\u5411\u94FE\u63A5")).setDesc(e("\u521B\u5EFA\u5B50\u8282\u70B9\u65F6\uFF0C\u5728\u5B50\u7B14\u8BB0\u91CC\u5199\u5165\u6307\u5411\u7236\u7B14\u8BB0\u7684 parent \u5B57\u6BB5\uFF08\u7EAF\u6587\u672C\u6587\u4EF6\u540D\uFF0C\u975E wikilink\uFF0C\u5173\u7CFB\u56FE\u8C31\u4E0D\u663E\u793A\u53CC\u5411\u7BAD\u5934\uFF09")).addToggle((l) => l.setValue(s.plugin.settings.autoAddBackLink).onChange(async (r) => {
          s.plugin.settings.autoAddBackLink = r, await s.plugin.saveSettings();
        })), new R(t).setName(e("\u81EA\u52A8\u5B9A\u4F4D\u5F53\u524D\u7B14\u8BB0")).setDesc(e("\u6253\u5F00\u7B14\u8BB0\u65F6\uFF0C\u5BFC\u56FE\u81EA\u52A8\u5C55\u5F00\u5176\u6240\u5728\u5206\u652F\u3001\u9009\u4E2D\u5E76\u5C45\u4E2D\u8BE5\u8282\u70B9")).addToggle((l) => l.setValue(s.plugin.settings.autoLocate).onChange(async (r) => {
          s.plugin.settings.autoLocate = r, await s.plugin.saveSettings();
        }));
      },
      display() {
        new R(t).setName(e("\u663E\u793A\u521B\u5EFA\u65F6\u95F4")).setDesc(e("\u4E0E\u7C7B\u578B/\u5B50\u6570\u540C\u884C\u663E\u793A\u521B\u5EFA\u65E5\u671F\uFF08\u4F18\u5148\u53D6 frontmatter \u7684 date \u5B57\u6BB5\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF09")).addToggle((l) => l.setValue(s.plugin.settings.showCreated).onChange(async (r) => {
          s.plugin.settings.showCreated = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u663E\u793A\u7C7B\u578B")).setDesc(e("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A type \u6587\u672C")).addToggle((l) => l.setValue(s.plugin.settings.showType).onChange(async (r) => {
          s.plugin.settings.showType = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u663E\u793A\u5B50\u8282\u70B9\u6570")).setDesc(e("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A\u5B50\u8282\u70B9\u6570\u91CF")).addToggle((l) => l.setValue(s.plugin.settings.showChildCount).onChange(async (r) => {
          s.plugin.settings.showChildCount = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u663E\u793A\u6253\u5F00\u56FE\u6807")).setDesc(e("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \u270E \u6253\u5F00\u7B14\u8BB0\u6309\u94AE")).addToggle((l) => l.setValue(s.plugin.settings.showOpenIcon).onChange(async (r) => {
          s.plugin.settings.showOpenIcon = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u663E\u793A\u65B0\u589E\u56FE\u6807")).setDesc(e("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \uFF0B \u65B0\u589E\u5B50\u8282\u70B9\u6309\u94AE")).addToggle((l) => l.setValue(s.plugin.settings.showAddIcon).onChange(async (r) => {
          s.plugin.settings.showAddIcon = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u66F2\u7EBF\u8FDE\u63A5")).setDesc(e("\u8282\u70B9\u4E4B\u95F4\u7528\u66F2\u7EBF\u8FD8\u662F\u76F4\u7EBF")).addToggle((l) => l.setValue(s.plugin.settings.curve).onChange(async (r) => {
          s.plugin.settings.curve = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        }));
      },
      colors() {
        new R(t).setName(e("\u4E3B\u8272")).setDesc(e("\u56FE\u6807\u6309\u94AE\u3001\u8FDE\u63A5\u7EBF\u7B49\u754C\u9762\u5143\u7D20\u989C\u8272")).addColorPicker((l) => l.setValue(s.plugin.settings.accent).onChange(async (r) => {
          s.plugin.settings.accent = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u4E3B\u7B14\u8BB0\u989C\u8272")).setDesc(e("main: true \u8282\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(s.plugin.settings.mainColor).onChange(async (r) => {
          s.plugin.settings.mainColor = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u91CD\u590D\u8282\u70B9\u989C\u8272")).setDesc(e("\u540C\u4E00\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\u65F6\uFF0C\u5176\u72B6\u6001\u5706\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(s.plugin.settings.multiColor).onChange(async (r) => {
          s.plugin.settings.multiColor = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new R(t).setName(e("\u9009\u4E2D\u989C\u8272")).setDesc(e("\u5355\u51FB\u9009\u4E2D\u7684\u8282\u70B9\u9AD8\u4EAE\u989C\u8272")).addColorPicker((l) => l.setValue(s.plugin.settings.selectedColor).onChange(async (r) => {
          s.plugin.settings.selectedColor = r, await s.plugin.saveSettings(), s.plugin.applyThemeVars();
        }));
      },
      types() {
        let l = s.plugin.settings.typeColors || (s.plugin.settings.typeColors = {});
        new R(t).setName(e("\u9ED8\u8BA4\u7C7B\u578B")).setDesc(e("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u7C7B\u578B\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((f) => {
          f.addOption("", e("\u4E0D\u9009"));
          for (let u of Object.keys(l)) f.addOption(u, ct(u));
          f.setValue(l[s.plugin.settings.defaultType] !== void 0 ? s.plugin.settings.defaultType : ""), f.onChange(async (u) => {
            s.plugin.settings.defaultType = u, await s.plugin.saveSettings();
          });
        });
        let r = "", p = /* @__PURE__ */ _(async () => {
          let f = r.trim();
          if (!f) {
            new v(e("\u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0"));
            return;
          }
          if (l[f] !== void 0) {
            new v(e("\u7C7B\u578B\u5DF2\u5B58\u5728\uFF1A") + f);
            return;
          }
          let u = ["#4ba3e5", "#e5534b", "#3fa66a", "#e5a44b", "#b07cff", "#8a6ae5", "#d978a8", "#5aa9a2"];
          l[f] = u[Object.keys(l).length % u.length], r = "", await s.plugin.saveSettings(), s.display();
        }, "addType");
        new R(t).setName(e("\u6DFB\u52A0\u7C7B\u578B")).setDesc(e("\u8F93\u5165\u540D\u79F0\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((f) => {
          f.setPlaceholder(e("\u7C7B\u578B\u540D\u79F0\uFF0C\u5982\uFF1A\u5F85\u529E")), f.onChange((u) => r = u), f.inputEl.addEventListener("keydown", (u) => {
            u.key === "Enter" && (u.preventDefault(), p());
          });
        }).addButton((f) => f.setButtonText(e("\u6DFB\u52A0")).setCta().onClick(p));
        let m = Object.keys(l);
        for (let f = 0; f < m.length; f++) {
          let u = m[f], C = f, x = s.plugin.settings.typeTemplates || (s.plugin.settings.typeTemplates = {}), F = s.plugin.app.vault.getAbstractFileByPath(et(s.plugin.settings.templateFolder || "99-\u6A21\u677F")), L = [{ path: "", name: e("\u9ED8\u8BA4") }];
          if (F && F.children) for (let w of F.children) w instanceof Mt && w.extension === "md" && L.push({ path: w.path, name: w.basename });
          new R(t).setName(ct(u)).setDesc(e("type \u4E3A\u300C") + u + e("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((w) => {
            w.setValue(String(l[u])), w.onChange(async (S) => {
              S && S !== l[u] && (l[u] = S, await s.plugin.saveSettings(), s.plugin.refreshViews());
            });
          }).addDropdown((w) => {
            for (let S of L) w.addOption(S.path, S.name);
            w.setValue(x[u] || ""), w.onChange(async (S) => {
              S ? x[u] = S : delete x[u], await s.plugin.saveSettings();
            });
          }).addButton((w) => w.setIcon("chevron-up").setTooltip(e("\u4E0A\u79FB")).setDisabled(C === 0).onClick(async () => {
            let S = Object.entries(l);
            [S[C - 1], S[C]] = [S[C], S[C - 1]], s.plugin.settings.typeColors = Object.fromEntries(S), await s.plugin.saveSettings(), s.display();
          })).addButton((w) => w.setIcon("chevron-down").setTooltip(e("\u4E0B\u79FB")).setDisabled(C === m.length - 1).onClick(async () => {
            let S = Object.entries(l);
            [S[C + 1], S[C]] = [S[C], S[C + 1]], s.plugin.settings.typeColors = Object.fromEntries(S), await s.plugin.saveSettings(), s.display();
          })).addButton((w) => w.setIcon("trash").setTooltip(e("\u5220\u9664\u7C7B\u578B\uFF1A") + u).onClick(async () => {
            delete l[u], s.plugin.settings.defaultType === u && (s.plugin.settings.defaultType = ""), await s.plugin.saveSettings(), s.display();
          }));
        }
      },
      statuses() {
        let l = s.plugin.settings.statusColors || (s.plugin.settings.statusColors = {});
        new R(t).setName(e("\u9ED8\u8BA4\u72B6\u6001")).setDesc(e("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u72B6\u6001\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((f) => {
          f.addOption("", e("\u4E0D\u9009"));
          for (let u of Object.keys(l)) f.addOption(u, ot(u));
          f.setValue(l[s.plugin.settings.defaultStatus] !== void 0 ? s.plugin.settings.defaultStatus : ""), f.onChange(async (u) => {
            s.plugin.settings.defaultStatus = u, await s.plugin.saveSettings();
          });
        });
        let r = "", p = /* @__PURE__ */ _(async () => {
          let f = r.trim();
          if (!f) {
            new v(e("\u8BF7\u8F93\u5165\u72B6\u6001\u6807\u8BC6"));
            return;
          }
          if (l[f] !== void 0) {
            new v(e("\u72B6\u6001\u5DF2\u5B58\u5728\uFF1A") + f);
            return;
          }
          let u = ["#e5534b", "#e5a44b", "#3fa66a", "#7f8fa6", "#b07cff", "#4ba3e5", "#d978a8", "#5aa9a2"];
          l[f] = u[Object.keys(l).length % u.length], r = "", await s.plugin.saveSettings(), s.display();
        }, "addStatus");
        new R(t).setName(e("\u6DFB\u52A0\u72B6\u6001")).setDesc(e("\u8F93\u5165\u72B6\u6001\u6807\u8BC6\uFF08\u5982 todo/doing/done\uFF09\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((f) => {
          f.setPlaceholder(e("\u72B6\u6001\u6807\u8BC6\uFF0C\u5982\uFF1Atodo")), f.onChange((u) => r = u), f.inputEl.addEventListener("keydown", (u) => {
            u.key === "Enter" && (u.preventDefault(), p());
          });
        }).addButton((f) => f.setButtonText(e("\u6DFB\u52A0")).setCta().onClick(p));
        let m = Object.keys(l);
        for (let f = 0; f < m.length; f++) {
          let u = m[f], C = f;
          new R(t).setName(ot(u)).setDesc(e("status \u4E3A\u300C") + u + e("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((x) => {
            x.setValue(String(l[u])), x.onChange(async (F) => {
              F && F !== l[u] && (l[u] = F, await s.plugin.saveSettings(), s.plugin.refreshViews());
            });
          }).addButton((x) => x.setIcon("chevron-up").setTooltip(e("\u4E0A\u79FB")).setDisabled(C === 0).onClick(async () => {
            let F = Object.entries(l);
            [F[C - 1], F[C]] = [F[C], F[C - 1]], s.plugin.settings.statusColors = Object.fromEntries(F), await s.plugin.saveSettings(), s.display();
          })).addButton((x) => x.setIcon("chevron-down").setTooltip(e("\u4E0B\u79FB")).setDisabled(C === m.length - 1).onClick(async () => {
            let F = Object.entries(l);
            [F[C + 1], F[C]] = [F[C], F[C + 1]], s.plugin.settings.statusColors = Object.fromEntries(F), await s.plugin.saveSettings(), s.display();
          })).addButton((x) => x.setIcon("trash").setTooltip(e("\u5220\u9664\u72B6\u6001\uFF1A") + u).onClick(async () => {
            delete l[u], s.plugin.settings.defaultStatus === u && (s.plugin.settings.defaultStatus = ""), await s.plugin.saveSettings(), s.display();
          }));
        }
      },
      presets() {
        new R(t).setName(e("\u9884\u8BBE\u4FDD\u5B58\u4F4D\u7F6E")).setDesc(e("\u5BFC\u56FE\u9884\u8BBE\u7684\u4FDD\u5B58\u8DEF\u5F84\u3002\u7559\u7A7A\u5219\u4FDD\u5B58\u5728\u63D2\u4EF6\u6570\u636E\u4E2D\uFF08\u968F data.json \u540C\u6B65\uFF09\uFF1B\u586B\u5199 vault \u5185\u6587\u4EF6\u8DEF\u5F84\uFF08\u5982 link-mindmap-presets.json\uFF09\u5219\u4FDD\u5B58\u5230\u8BE5\u6587\u4EF6\uFF0C\u53EF\u968F vault \u540C\u6B65\u5230\u5176\u4ED6\u8BBE\u5907")).addText((l) => {
          l.setPlaceholder(e("\u7559\u7A7A = \u4FDD\u5B58\u5728\u63D2\u4EF6\u6570\u636E\u4E2D")), l.setValue(s.plugin.settings.savedViewLocation || ""), l.onChange(async (r) => {
            s.plugin.settings.savedViewLocation = r.trim(), await s.plugin.saveSettings(), r.trim() && await s.plugin._loadViewsFromFile();
          });
        });
      },
      io() {
        new R(t).setName(e("\u5BFC\u51FA\u914D\u7F6E")).setDesc(e("\u5C06\u5F53\u524D\u6240\u6709\u8BBE\u7F6E\u5BFC\u51FA\u4E3A JSON \u6587\u4EF6")).addButton((l) => l.setButtonText(e("\u5BFC\u51FA")).setCta().onClick(async () => {
          let r = JSON.stringify(s.plugin.settings, null, 2), m = "link-mindmap-config-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".json";
          try {
            await s.plugin.app.vault.create(m, r), new v(e("\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + m);
          } catch (f) {
            new v(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
          }
        })), new R(t).setName(e("\u5BFC\u5165\u914D\u7F6E")).setDesc(e("\u4ECE JSON \u6587\u4EF6\u5BFC\u5165\u8BBE\u7F6E\uFF08\u4F1A\u8986\u76D6\u5F53\u524D\u914D\u7F6E\uFF09")).addButton((l) => l.setButtonText(e("\u9009\u62E9\u6587\u4EF6")).onClick(() => {
          let r = document.createElement("input");
          r.type = "file", r.accept = ".json", r.onchange = async () => {
            let p = r.files[0];
            if (p)
              try {
                let m = await p.text(), f = JSON.parse(m);
                s.plugin.settings = Object.assign(s.plugin.settings, f), await s.plugin.saveSettings(), s.plugin.applyThemeVars(), s.plugin.refreshViews(), s.display(), new v(e("\u914D\u7F6E\u5DF2\u5BFC\u5165"));
              } catch (m) {
                new v(e("\u5BFC\u5165\u5931\u8D25\uFF1A") + (m && m.message ? m.message : m)), console.error("[link-mindmap] import config:", m);
              }
          }, r.click();
        })), new R(t).setName(e("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E")).setDesc(e("\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\uFF08\u4E0D\u4F1A\u5220\u9664\u7B14\u8BB0\uFF09")).addButton((l) => l.setButtonText(e("\u6062\u590D\u9ED8\u8BA4")).onClick(() => {
          new Lt(s.app, e("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"), e("\u786E\u5B9A\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u5417\uFF1F"), async () => {
            s.plugin.settings = JSON.parse(JSON.stringify(ue)), await s.plugin.saveSettings(), s.plugin.applyThemeVars(), s.plugin.refreshViews(), s.display(), new v(e("\u5DF2\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"));
          }).open();
        }));
      }
    };
    for (let l = 0; l < i.length; l++) {
      d(i[l]);
      let r = h[i[l]];
      r && r();
    }
  }
};
_(Ce, "LinkMindmapSettingTab");
var ze = Ce, Fe = class extends Pe {
  async onload() {
    await this.loadSettings(), this._initLang(), await this._loadViewsFromFile(), this.registerView(mt, (t) => new Dt(t, this)), this.addRibbonIcon("git-merge", e("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), () => this.activateView()), this.addCommand({ id: "open-link-mindmap", name: e("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), callback: /* @__PURE__ */ _(() => this.activateView(), "callback") }), this.addCommand({ id: "open-timeline", name: e("\u6253\u5F00\u65F6\u95F4\u7EBF"), callback: /* @__PURE__ */ _(() => this.activateTimeline(), "callback") }), this.addCommand({ id: "normalize-frontmatter", name: e("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), callback: /* @__PURE__ */ _(() => this._normalizeFrontmatter(), "callback") }), this.addCommand({ id: "normalize-frontmatter-current", name: e("\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), callback: /* @__PURE__ */ _(() => this._normalizeFrontmatter(!0), "callback") }), this.addCommand({ id: "check-links", name: e("\u68C0\u67E5\u94FE\u63A5\u5B8C\u6574\u6027"), callback: /* @__PURE__ */ _(() => this._checkLinks(), "callback") }), this.addCommand({ id: "clean-invalid-types", name: e("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u7C7B\u578B"), callback: /* @__PURE__ */ _(() => this._cleanInvalidTypes(), "callback") }), this.addCommand({ id: "clean-invalid-status", name: e("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u72B6\u6001"), callback: /* @__PURE__ */ _(() => this._cleanInvalidStatus(), "callback") }), this.addCommand({ id: "show-help", name: e("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), callback: /* @__PURE__ */ _(() => {
      for (let t of this.app.workspace.getLeavesOfType(mt))
        if (t.view instanceof Dt) {
          t.view._showHelp();
          return;
        }
      this.activateView(), setTimeout(() => {
        for (let t of this.app.workspace.getLeavesOfType(mt))
          t.view instanceof Dt && t.view._showHelp();
      }, 300);
    }, "callback") }), this.addSettingTab(new ze(this.app, this)), this.applyThemeVars(), this.registerEvent(this.app.vault.on("create", (t) => this._onVaultChange(t))), this.registerEvent(this.app.vault.on("modify", (t) => this._onVaultChange(t))), this.registerEvent(this.app.vault.on("delete", (t) => this._onVaultChange(t))), this.registerEvent(this.app.vault.on("rename", (t, n) => this._onVaultChange(t, n))), this.registerEvent(this.app.metadataCache.on("changed", (t) => this._onVaultChange(t))), this.registerEvent(this.app.metadataCache.on("resolved", () => this._rebuildAllViews())), this.registerEvent(this.app.workspace.on("file-open", (t) => {
      for (let n of this.app.workspace.getLeavesOfType(mt))
        n.view instanceof Dt && n.view.locateFile(t);
    }));
  }
  onunload() {
    clearTimeout(this._refreshTimer), this.app.workspace.detachLeavesOfType(mt);
  }
  _onVaultChange(t, n) {
    let i = et(this.settings.mainFolder || ""), a = /* @__PURE__ */ _((o) => !!o && (o === i || o.startsWith(i + "/")), "inFolder"), s = t && t.path;
    t && t.extension && t.extension !== "md" && !a(n) || !a(s) && !a(n) || (clearTimeout(this._refreshTimer), this._refreshTimer = setTimeout(() => this._rebuildAllViews(), 400));
  }
  _rebuildAllViews() {
    for (let t of this.app.workspace.getLeavesOfType(mt))
      t.view instanceof Dt && t.view.rebuild(!0);
  }
  async _checkLinks() {
    let t = this.settings, n = qt(this.app, t), i = t.linkField || "children", a = t.backField || "parent", s = [], o = [];
    for (let r of n.map.values()) {
      for (let p of r.childLinks) {
        let m = this.app.metadataCache.getFirstLinkpathDest(p, r.file.path);
        (!m || !n.map.has(m.path)) && s.push({ file: r.file, link: p, field: i });
      }
      for (let p of r.parentLinks) {
        let m = this.app.metadataCache.getFirstLinkpathDest(p, r.file.path);
        (!m || !n.map.has(m.path)) && o.push({ file: r.file, link: p, field: a });
      }
    }
    let c = s.length + o.length;
    if (c === 0) {
      new v(e("\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5\u901A\u8FC7 \u2713"));
      return;
    }
    let d = new gt(this.app);
    d.titleEl.setText(e("\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5"));
    let h = d.contentEl.createDiv();
    if (h.createEl("p", { text: e("\u53D1\u73B0 ") + c + e(" \u4E2A\u5931\u6548\u94FE\u63A5\uFF1A"), cls: "lkm-modal-sub" }), s.length) {
      h.createEl("h4", { text: e("\u5931\u6548\u5B50\u94FE\u63A5\uFF08children \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09") });
      let r = h.createEl("ul", { cls: "lkm-check-list" });
      for (let p of s) {
        let m = r.createEl("li");
        m.createEl("span", { text: p.file.basename + " \u2192 ", cls: "lkm-check-from" }), m.createEl("span", { text: p.link, cls: "lkm-check-broken" });
      }
    }
    if (o.length) {
      h.createEl("h4", { text: e("\u5931\u6548\u7236\u94FE\u63A5\uFF08parent \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09") });
      let r = h.createEl("ul", { cls: "lkm-check-list" });
      for (let p of o) {
        let m = r.createEl("li");
        m.createEl("span", { text: p.file.basename + " \u2192 ", cls: "lkm-check-from" }), m.createEl("span", { text: p.link, cls: "lkm-check-broken" });
      }
    }
    let l = h.createDiv("lkm-modal-btns");
    l.createEl("button", { cls: "lkm-btn lkm-btn-action", text: e("\u4FEE\u590D\u5168\u90E8") }).onclick = async () => {
      d.close(), new Lt(this.app, e("\u4FEE\u590D\u5931\u6548\u94FE\u63A5"), e("\u6B64\u64CD\u4F5C\u5C06\u4ECE\u7B14\u8BB0\u7684 children/parent \u5B57\u6BB5\u4E2D\u5220\u9664\u5931\u6548\u94FE\u63A5\uFF0C\u4E0D\u53EF\u64A4\u9500\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), () => this._doFixBrokenLinks(allBroken)).open();
    }, l.createEl("button", { cls: "lkm-btn", text: e("\u5173\u95ED") }).onclick = () => d.close(), d.open();
  }
  async _doFixBrokenLinks(t) {
    let n = 0, i = /* @__PURE__ */ new Map();
    for (let a of t)
      i.has(a.file.path) || i.set(a.file.path, { file: a.file, links: [] }), i.get(a.file.path).links.push(a.link);
    for (let { file: a, links: s } of i.values())
      try {
        let o = await this.app.vault.read(a), c = o.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
        if (!c) continue;
        let d = c[1], h = o.slice(c[0].length), l = !1;
        for (let r of s) {
          let p = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), m = new RegExp(`^[ \\t]*- ["']?\\[\\[` + p + `(\\|[^\\]]*)?\\]\\]["']?[ \\t]*$`, "gm"), f = d.replace(m, "");
          if (f !== d) {
            d = f, l = !0;
            continue;
          }
          let u = new RegExp(`^[A-Za-z_][\\w-]*\\s*:\\s*["']?\\[\\[` + p + `(\\|[^\\]]*)?\\]\\]["']?[ \\t]*$`, "gm"), C = d.replace(u, "");
          C !== d && (d = C, l = !0);
        }
        l && (d = d.replace(/\n{3,}/g, `

`), await this.app.vault.modify(a, `---
` + d + `
---` + h), n++);
      } catch (o) {
        console.error("[link-mindmap] fix link:", o);
      }
    new v(e("\u5DF2\u4FEE\u590D ") + n + e(" \u4E2A\u6587\u4EF6")), this._rebuildAllViews();
  }
  async _normalizeFrontmatter(t) {
    let n = this.settings, i = n.typeField || "type", a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ _(async (h) => {
      if (!h) return null;
      if (a.has(h)) return a.get(h);
      let l = this.app.vault.getAbstractFileByPath(et(h));
      if (!(l instanceof Mt)) return null;
      let r = ne(await this.app.vault.read(l));
      return a.set(h, r.fields), r.fields;
    }, "getTemplateFields"), o = /* @__PURE__ */ _(async (h) => {
      let l = await this.app.vault.read(h), r = l.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
      if (!r) return { changed: !1, skipped: !1 };
      let p = r[1], m = l.slice(r[0].length), f = [], u = null;
      for (let k of p.split(`
`)) {
        let P = k.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
        P ? (u && f.push(u), u = { key: P[1], lines: [k] }) : u && u.lines.push(k);
      }
      if (u && f.push(u), !f.length) return { changed: !1, skipped: !1 };
      let C = n.statusField || "status", x = f.find((k) => k.key === C);
      if (x && x.lines.length === 1) {
        let k = (x.lines[0].match(/^.*:\s*(.*)$/) || [])[1] || "", P = $t(k), V = Ut(P);
        V !== P && (x.lines[0] = C + ": " + (V ? '"' + V + '"' : '""'));
      }
      let F = f.find((k) => k.key === i), L = F ? $t((F.lines[0].match(/^.*:\s*(.*)$/) || [])[1] || "") : "", w = n.typeTemplates || {}, S = L && w[L] ? w[L] : (n.templatePath || "").trim(), y = await s(S);
      if (!y) return { changed: !1, skipped: !0 };
      let I = y.map(([k]) => k), T = /* @__PURE__ */ new Map(y), E = /* @__PURE__ */ new Map(f.map((k) => [k.key, k])), B = [];
      for (let k of I)
        E.has(k) ? (B.push(E.get(k)), E.delete(k)) : B.push({ key: k, lines: [k + ": " + (T.get(k) || "")] });
      for (let [, k] of E) B.push(k);
      let G = [];
      for (let k of B) G.push(...k.lines);
      let D = G.join(`
`), O = p !== D;
      if (O) {
        let k = `---
` + D + `
---
` + m;
        await this.app.vault.modify(h, k);
      }
      return { changed: O, skipped: !1 };
    }, "normalizeOne");
    if (t) {
      let h = this.app.workspace.getActiveFile();
      if (!h || h.extension !== "md") {
        new v(e("\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      let l = await o(h);
      l.skipped ? new v(e("\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7")) : l.changed ? new v(e("\u5DF2\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027 \u2713")) : new v(e("\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"));
      return;
    }
    let c = et(n.mainFolder || ""), d = At(this.app, c);
    if (!d.length) {
      new v(e("\u672A\u627E\u5230\u7B14\u8BB0\u6587\u4EF6"));
      return;
    }
    new Lt(this.app, e("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027"), e("\u6B64\u64CD\u4F5C\u5C06\u6309\u6A21\u677F\u91CD\u6392\u6240\u6709\u7B14\u8BB0\u7684 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\u3002\u5DF2\u6709\u503C\u4E0D\u4F1A\u88AB\u4FEE\u6539\uFF0C\u4F46\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let h = 0, l = 0, r = [];
      for (let m of d) {
        let f = await o(m);
        f.skipped && l++, f.changed && (h++, r.length < 10 && r.push(m.basename));
      }
      let p;
      h ? (p = e("\u5DF2\u6574\u7406 ") + h + e(" \u4E2A\u7B14\u8BB0\u7684\u5C5E\u6027"), r.length < h ? p += e("\uFF08\u7B49\uFF09") : p += "\uFF1A" + r.join("\u3001"), l && (p += e("\uFF1B") + l + e(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7"))) : (p = e("\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"), l && (p += e("\uFF08") + l + e(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7\uFF09"))), new v(p, 15e3);
    }).open();
  }
  _cleanInvalidTypes() {
    let t = this.settings, n = t.typeField || "type", i = new Set(Object.keys(t.typeColors || {})), a = At(this.app, t.mainFolder), s = [];
    for (let o of a) {
      let d = ((this.app.metadataCache.getFileCache(o) || {}).frontmatter || {})[n];
      d != null && String(d).trim() && !i.has(String(d).trim()) && s.push({ file: o, oldVal: String(d).trim() });
    }
    if (!s.length) {
      new v(e("\u6CA1\u6709\u5931\u6548\u7C7B\u578B\u9700\u8981\u6E05\u9664"));
      return;
    }
    new Lt(this.app, e("\u6E05\u9664\u5931\u6548\u7C7B\u578B"), e("\u53D1\u73B0 ") + s.length + e(" \u4E2A\u7B14\u8BB0\u7684 type \u4E0D\u5728\u914D\u7F6E\u5217\u8868\u4E2D\uFF0C\u5C06\u88AB\u6E05\u9664\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u7B14\u8BB0\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let o = 0;
      for (let c of s)
        try {
          await this.app.fileManager.processFrontMatter(c.file, (d) => {
            delete d[n];
          }), o++;
        } catch (d) {
          console.error("[link-mindmap] clean type:", d);
        }
      new v(e("\u5DF2\u6E05\u9664 ") + o + e(" \u4E2A\u7B14\u8BB0\u7684\u5931\u6548\u7C7B\u578B")), this._rebuildAllViews();
    }).open();
  }
  _cleanInvalidStatus() {
    let t = this.settings, n = t.statusField || "status", i = new Set(Object.keys(t.statusColors || {})), a = At(this.app, t.mainFolder), s = [];
    for (let o of a) {
      let c = (this.app.metadataCache.getFileCache(o) || {}).frontmatter || {}, d = Ut(c[n]);
      d && !i.has(d) && s.push({ file: o, oldVal: d });
    }
    if (!s.length) {
      new v(e("\u6CA1\u6709\u5931\u6548\u72B6\u6001\u9700\u8981\u6E05\u9664"));
      return;
    }
    new Lt(this.app, e("\u6E05\u9664\u5931\u6548\u72B6\u6001"), e("\u53D1\u73B0 ") + s.length + e(" \u4E2A\u7B14\u8BB0\u7684 status \u4E0D\u5728\u914D\u7F6E\u5217\u8868\u4E2D\uFF0C\u5C06\u88AB\u6E05\u9664\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u7B14\u8BB0\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let o = 0;
      for (let c of s)
        try {
          await this.app.fileManager.processFrontMatter(c.file, (d) => {
            delete d[n];
          }), o++;
        } catch (d) {
          console.error("[link-mindmap] clean status:", d);
        }
      new v(e("\u5DF2\u6E05\u9664 ") + o + e(" \u4E2A\u7B14\u8BB0\u7684\u5931\u6548\u72B6\u6001")), this._rebuildAllViews();
    }).open();
  }
  applyThemeVars() {
    let t = document.body;
    t.style.setProperty("--lkm-accent", this.settings.accent), t.style.setProperty("--lkm-main", this.settings.mainColor), t.style.setProperty("--lkm-multi", this.settings.multiColor), t.style.setProperty("--lkm-selected", this.settings.selectedColor);
    let n = this.settings.statusColors || {};
    for (let [i, a] of Object.entries(n)) t.style.setProperty("--lkm-status-" + i, a);
  }
  async activateView() {
    let { workspace: t } = this.app, n = t.getLeavesOfType(mt)[0];
    n || (n = t.getLeaf(!0), await n.setViewState({ type: mt, active: !0 })), t.revealLeaf(n);
  }
  async activateTimeline() {
    await this.activateView();
    for (let t of this.app.workspace.getLeavesOfType(mt))
      t.view instanceof Dt && (t.view._mode = "dash", t.view._dashTab = "timeline", t.view.render());
  }
  refreshViews() {
    this.applyThemeVars();
    for (let t of this.app.workspace.getLeavesOfType(mt))
      t.view instanceof Dt && t.view.render();
  }
  async loadSettings() {
    this.settings = Object.assign({}, ue, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  _getSavedViews() {
    return this.settings.savedViews || [];
  }
  async _saveSavedViews(t) {
    let n = this.settings.savedViewLocation;
    if (n)
      try {
        let i = JSON.stringify(t, null, 2), a = this.app.vault.getAbstractFileByPath(n);
        a ? await this.app.vault.modify(a, i) : await this.app.vault.create(n, i);
      } catch (i) {
        console.error("[link-mindmap] save views to file:", i);
      }
    this.settings.savedViews = t, await this.saveSettings();
  }
  async _saveViewPreset(t, n) {
    let i = this._getSavedViews(), a = i.findIndex((o) => o.name === t), s = { name: t, state: n, time: Date.now() };
    a >= 0 ? i[a] = s : i.push(s), await this._saveSavedViews(i);
  }
  async _deleteSavedView(t) {
    let n = this._getSavedViews().filter((i) => i.name !== t);
    await this._saveSavedViews(n);
  }
  async _loadViewsFromFile() {
    let t = this.settings.savedViewLocation;
    if (t)
      try {
        let n = this.app.vault.getAbstractFileByPath(t);
        if (!n) return;
        let i = await this.app.vault.read(n), a = JSON.parse(i);
        Array.isArray(a) && (this.settings.savedViews = a, await this.saveSettings());
      } catch (n) {
        console.error("[link-mindmap] load views from file:", n);
      }
  }
  _initLang() {
    let t = this.settings.language || "auto";
    if (t === "auto") {
      let n = window.moment && window.moment.locale() || "en";
      he(n && n.startsWith("zh") ? "zh" : "en");
    } else
      he(t);
  }
};
_(Fe, "LinkMindmapPlugin");
var je = Fe;
module.exports = je;
