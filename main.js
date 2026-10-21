"use strict";
var Tt = (b, e) => () => {
  try {
    return e || b((e = { exports: {} }).exports, e), e.exports;
  } catch (s) {
    throw e = 0, s;
  }
};

// ../i18n.js
var rt = Tt(($t, lt) => {
  "use strict";
  var ot = {
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
      "\u66F4\u65B0\u9884\u8BBE\u2026": "Update preset\u2026",
      "\u5DF2\u66F4\u65B0\u9884\u8BBE\uFF1A": "Updated preset: ",
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
      "\u5BFC\u56FE\u9884\u8BBE\u548C\u81EA\u52A8\u72B6\u6001\u7684\u4FDD\u5B58\u8DEF\u5F84\u3002\u586B\u5199 vault \u5185\u6587\u4EF6\u8DEF\u5F84\uFF08\u5982 link-mindmap-presets.json\uFF09\u5219\u4FDD\u5B58\u5230\u8BE5\u6587\u4EF6\uFF0C\u53EF\u968F vault \u540C\u6B65\u5230\u5176\u4ED6\u8BBE\u5907\u5B9E\u73B0\u591A\u7AEF\u8FD8\u539F": "Path to save mindmap presets and auto state. Specify a vault file path (e.g. link-mindmap-presets.json) to save to that file, synced via vault for cross-device restore",
      "link-mindmap-presets.json": "link-mindmap-presets.json",
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
      \u7C89\u8272\u5706\u70B9: "Pink dot",
      "\u91CD\u590D\u8282\u70B9\uFF0C\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u88AB\u591A\u5904\u5173\u8054\u5F15\u5165": "Duplicate node, this note is referenced multiple times in the mindmap",
      \u865A\u7EBF\u534A\u900F\u660E: "Dashed semi-transparent",
      "\u5DF2\u5F52\u6863\u8282\u70B9\uFF0C\u4FDD\u7559\u94FE\u63A5\u4F46\u964D\u4F4E\u89C6\u89C9\u6743\u91CD": "Archived node, links preserved but visually de-emphasized",
      "\u4FDD\u5B58/\u6062\u590D/\u5220\u9664\u5F53\u524D\u5BFC\u56FE\u72B6\u6001\u9884\u8BBE\uFF1B\u5173\u95ED\u5BFC\u56FE\u65F6\u81EA\u52A8\u4FDD\u5B58\u72B6\u6001\u5230 vault \u6587\u4EF6\uFF0C\u591A\u7AEF\u540C\u6B65\u540E\u81EA\u52A8\u8FD8\u539F": "Save/restore/delete mindmap state presets; auto-saves state to vault file on close, auto-restores after cross-device sync",
      \u547D\u4EE4\u9762\u677F: "Command Palette",
      "\u6253\u5F00\u5BFC\u56FE\u89C6\u56FE\uFF08\u540C\u529F\u80FD\u533A\u6309\u94AE\uFF09": "Open mindmap view (same as ribbon button)",
      "\u6253\u5F00\u7B14\u8BB0\u65F6\u95F4\u7EBF\u89C6\u56FE\uFF0C\u6309\u521B\u5EFA\u65F6\u95F4\u6D4F\u89C8\u7B14\u8BB0": "Open note timeline view, browse notes by creation time",
      "\u6279\u91CF\u6309\u6A21\u677F\u6574\u7406 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\uFF0C\u7EDD\u4E0D\u4FEE\u6539\u5DF2\u6709\u503C": "Batch normalize frontmatter field order and fill missing fields per template, never modifies existing values",
      "\u4EC5\u6574\u7406\u5F53\u524D\u6253\u5F00\u7B14\u8BB0\u7684 frontmatter": "Normalize frontmatter of current note only",
      "\u626B\u63CF\u6240\u6709\u7B14\u8BB0\u7684 children \u94FE\u63A5\uFF0C\u5217\u51FA\u5931\u6548\u94FE\u63A5\u548C\u5B64\u7ACB\u7B14\u8BB0\uFF0C\u53EF\u4E00\u952E\u4FEE\u590D": "Scan all notes for broken children links, list broken links and orphan notes, one-click fix",
      "\u79FB\u9664\u4E0D\u5728\u7C7B\u578B\u914D\u7F6E\u5217\u8868\u5185\u7684 type \u503C": "Remove type values not in the configured type list",
      "\u79FB\u9664\u4E0D\u5728\u72B6\u6001\u914D\u7F6E\u5217\u8868\u5185\u7684 status \u503C": "Remove status values not in the configured status list",
      \u6253\u5F00\u672C\u5E2E\u52A9\u624B\u518C: "Open this help manual",
      \u5E2E\u52A9: "Help",
      \u67E5\u770B\u4F7F\u7528\u5E2E\u52A9: "Show usage help",
      \u8DF3\u8F6C\u5230: "Jump to",
      "\u8DF3\u8F6C\u5230\u2026": "Jump to\u2026",
      "\u5C42\u6570 \xB1": "Depth \xB1",
      "\u6A2A/\u7EB5": "H/V",
      "\u5168\u5C55/\u5168\u6298": "Expand/Collapse all",
      "\u641C\u7D22\u2026": "Search\u2026",
      "\u641C\u7D22\u7B14\u8BB0\u2026": "Search notes\u2026",
      "\u9009\u62E9\u4E3B\u7B14\u8BB0\u2026": "Select main note\u2026",
      \u7B5B\u9009\u8282\u70B9: "Filter nodes",
      "\u7C7B\u578B\uFF1A": "Type:",
      "\u5DF2\u9009 0 \u7BC7\u7B14\u8BB0": "0 notes selected",
      "\u5DF2\u5220\u9664\u300C": 'Deleted "',
      \u53CC\u51FB: "Double click",
      "\u53F3\u952E / \u957F\u6309": "Right click / Long press",
      \u62D6\u52A8\u5361\u7247: "Drag card",
      \u62D6\u52A8\u7AEF\u53E3: "Drag port",
      \u65B9\u5411\u952E: "Arrow keys",
      "\u2713 \u6253\u5F00\u56FE\u6807": "\u2713 Open icon",
      "\u2713 \u7C7B\u578B": "\u2713 Type",
      "\u2713 \u65F6\u95F4": "\u2713 Time",
      "\u2713 \u65B0\u589E\u56FE\u6807": "\u2713 Add icon",
      "\u2713 \u5B50\u6570": "\u2713 Child count",
      "\u8FD8\u6CA1\u6709\u5E26 date \u5B57\u6BB5\u7684\u7B14\u8BB0": "No notes with date field",
      \u4E2D\u6587: "Chinese",
      "/\u65B0\u8282\u70B9\u6A21\u677F.md": "/new-node-template.md",
      "99-\u6A21\u677F": "99-templates",
      " \u5C42": " layer",
      " \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7": " notes not finding template, skipped",
      " \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7\uFF09": " notes not finding template, skipped)",
      " \u4E2A\u8282\u70B9\uFF09": " nodes)",
      " \u4E2A\u5B50\u8282\u70B9\uFF09": " child nodes)",
      " \u7BC7\uFF0C\u70B9\u51FB\u7B5B\u9009": " notes, click to filter",
      " \u7BC7\uFF08": " notes (",
      "\uFF08\u542B ": "(incl. ",
      "\uFF08\u542B\u5B50\u8282\u70B9\u5171 ": "(incl. child nodes total ",
      "\u300D\uFF0C\u65E0\u9700\u91CD\u590D": '", no need to repeat',
      "\u300D\u5E76\u5173\u8054\u5230\u300C": '" and linked to "',
      "\u300D\u5F53\u524D\u65E5\u671F\uFF1A": '" current date: ',
      "\u300D\u5230\u300C": '" to "',
      "\u300D\u5230\u5B83\u7684\u5173\u8054\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\u3002": '" to its link, note file kept.',
      "\u300D\u7684\u4E0A\u7EA7\uFF09": '" parent)',
      "\u300D\u542B ": '" contains ',
      "\u300D\u91CC\u6CA1\u6709\u7D22\u5F15\u6587\u4EF6": '" has no index file',
      "\u300D\u6CA1\u6709\u4E0A\u7EA7\u7B14\u8BB0": '" has no parent note',
      "\u300D\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u7B14\u8BB0\u3002": '" folder has no notes yet.',
      "\u300D\u662F\u91CD\u590D\u8282\u70B9\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\uFF09\u3002\n\u672C\u6B21\u53EA\u79FB\u9664\u4ECE\u300C": `" is a duplicate node (referenced extra).
Only removing link from "`,
      "\u300D\u5DF2\u5173\u8054\u5230\u300C": '" already linked to "',
      "| \u7B2C": "| No. ",
      "| \u65E0\u72B6\u6001 | ": "| No status | ",
      "\u5C42 | ": " layer | "
    }
  }, Ke = "zh";
  function Et(b) {
    Ke = b || "zh";
  }
  function Dt() {
    return Ke;
  }
  function Mt(b, e) {
    let s = ot[Ke] && ot[Ke][b] || b;
    if (e) for (let i in e) s = s.split("{" + i + "}").join(e[i]);
    return s;
  }
  lt.exports = { t: Mt, setLang: Et, getLang: Dt };
});

// ../src.js
var _ = (b, e) => b, Lt = require("obsidian"), {
  Plugin: Pt,
  ItemView: It,
  Notice: v,
  Modal: ge,
  Setting: R,
  PluginSettingTab: Nt,
  TFile: Me,
  TFolder: Yt,
  normalizePath: te,
  FuzzySuggestModal: pt,
  setIcon: ct,
  Menu: Ne,
  MarkdownRenderer: Rt,
  Component: Bt
} = Lt, { t, setLang: dt } = rt(), me = "link-mindmap-view", Vt = "http://www.w3.org/2000/svg", ut = {
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
  multiColor: "#ec4899",
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
    \u8FDB\u884C\u4E2D: "#0ea5e9",
    \u5DF2\u5B8C\u6210: "#22c55e",
    \u5DF2\u5F52\u6863: "#94a3b8",
    \u5DF2\u6401\u7F6E: "#d946ef"
  },
  savedViews: [],
  savedViewLocation: "link-mindmap-presets.json",
  settingSections: ["basic", "fields", "layout", "behavior", "display", "colors", "types", "statuses", "presets", "io"]
};
function oe(b) {
  return b ? t(b) : "";
}
_(oe, "statusLabel");
function ce(b) {
  return b ? t(b) : "";
}
_(ce, "typeLabel");
function et(b, e) {
  return e && (b.statusColors || {})[e] || null;
}
_(et, "statusColorOf");
function Ue(b) {
  if (b == null) return "";
  if (b === !0 || String(b) === "true") return "\u5DF2\u5B8C\u6210";
  if (b === !1 || String(b) === "false" || String(b).trim() === "") return "";
  let e = String(b).trim();
  return { todo: "\u5F85\u529E", doing: "\u8FDB\u884C\u4E2D", done: "\u5DF2\u5B8C\u6210", archived: "\u5DF2\u5F52\u6863", snoozed: "\u5DF2\u6401\u7F6E" }[e] || e;
}
_(Ue, "normalizeStatus");
function Re(b) {
  return b == null ? [] : Array.isArray(b) ? b.slice() : [b];
}
_(Re, "toArr");
function ke(b) {
  return String(b ?? "").replace(/^\[\[/, "").replace(/\]\]$/, "").split("|")[0].split("#")[0].split("^")[0].trim();
}
_(ke, "cleanLink");
function tt(b) {
  let e = [], s = /* @__PURE__ */ _((i) => {
    if (i == null) return;
    let a = String(i), n = /\[\[([^\[\]]+?)\]\]/g, o, c = !1;
    for (; (o = n.exec(a)) !== null; )
      c = !0, e.push(ke(o[1]));
    if (!c) {
      let h = ke(a.replace(/^["']+/, "").replace(/["']+$/, ""));
      h && e.push(h);
    }
  }, "push");
  return Array.isArray(b) ? b.forEach(s) : s(b), e;
}
_(tt, "extractLinks");
function Z(b, e) {
  return b = String(b ?? ""), e > 0 && b.length > e ? b.slice(0, e - 1) + "\u2026" : b;
}
_(Z, "truncate");
function ft(b, e) {
  let s = 0;
  for (let i of String(b ?? ""))
    s += /[一-鿿　-〿＀-￯]/.test(i) ? e : e * 0.55;
  return s;
}
_(ft, "estWidth");
var Ge = null, We = /* @__PURE__ */ new Map();
function st(b, e, s) {
  let i = b + "|" + e + "|" + (s ? 1 : 0), a = We.get(i);
  if (a !== void 0) return a;
  let n;
  try {
    Ge || (Ge = document.createElement("canvas").getContext("2d")), Ge.font = (s ? "600 " : "") + e + 'px Inter, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif', n = Ge.measureText(String(b ?? "")).width;
  } catch {
    n = ft(b, e);
  }
  return We.size > 2e3 && We.clear(), We.set(i, n), n;
}
_(st, "measureTextWidth");
function ve(b) {
  return String(b).replace(/[\\/:*?"<>|#^\[\]]/g, "-").trim() || t("\u672A\u547D\u540D");
}
_(ve, "safeFileName");
function nt(b) {
  let e = String(b ?? "").replace(/^﻿/, "").replace(/\r\n/g, `
`).replace(/^\n+/, ""), s = e.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!s) return { fields: [], body: e };
  let i = [];
  for (let a of s[1].split(`
`)) {
    let n = a.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    n && i.push([n[1], n[2].trim()]);
  }
  return { fields: i, body: e.slice(s[0].length) };
}
_(nt, "splitFrontmatter");
function $e(b) {
  return b = String(b ?? "").trim(), b.length >= 2 && (b.charAt(0) === '"' && b.charAt(b.length - 1) === '"' || b.charAt(0) === "'" && b.charAt(b.length - 1) === "'") ? b.slice(1, -1) : b;
}
_($e, "stripYamlQuotes");
function j(b, e) {
  let s = document.createElementNS(Vt, b);
  if (e) for (let i in e) s.setAttribute(i, e[i]);
  return s;
}
_(j, "svgEl");
function mt(b, e, s) {
  let i = b && (b[s || "date"] != null ? b[s || "date"] : "");
  if (i) {
    let a = String(i).match(/(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/);
    if (a) return a[1] + "-" + String(a[2]).padStart(2, "0") + "-" + String(a[3]).padStart(2, "0");
  }
  try {
    let a = e.stat;
    if (a && a.ctime) {
      let n = new Date(a.ctime);
      return n.getFullYear() + "-" + String(n.getMonth() + 1).padStart(2, "0") + "-" + String(n.getDate()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
_(mt, "createdOf");
function gt(b) {
  try {
    let e = b.stat;
    if (e && e.ctime) {
      let s = new Date(e.ctime);
      return s.getFullYear() + "-" + String(s.getMonth() + 1).padStart(2, "0") + "-" + String(s.getDate()).padStart(2, "0") + " " + String(s.getHours()).padStart(2, "0") + ":" + String(s.getMinutes()).padStart(2, "0") + ":" + String(s.getSeconds()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
_(gt, "fileCtime");
function Ae(b, e) {
  let s = te(e || ""), i = [];
  for (let a of b.vault.getMarkdownFiles())
    s && a.path !== s && !a.path.startsWith(s + "/") || i.push(a);
  return i;
}
_(Ae, "notesInFolder");
function kt(b, e) {
  let s = Ae(b, e.mainFolder);
  if (!s.length) return !0;
  for (let i of s)
    if ((b.metadataCache.getFileCache(i) || {}).frontmatter) return !0;
  return !1;
}
_(kt, "metadataReady");
function qe(b, e) {
  let s = e.linkField || "children", i = e.backField || "parent", a = e.zkField || "main", n = e.statusField || "status", o = e.typeField || "type", c = e.dateField || "date", h = e.titleField || "title", d = /* @__PURE__ */ new Map();
  for (let r of Ae(b, e.mainFolder)) {
    let p = (b.metadataCache.getFileCache(r) || {}).frontmatter || {};
    d.set(r.path, {
      file: r,
      title: p[h] ? String(p[h]) : r.basename,
      zk: p[a] === !0 || String(p[a]) === "true",
      status: Ue(p[n]),
      type: p[o] != null ? String(p[o]).trim() : "",
      date: mt(p, r, c),
      ctime: gt(r),
      childLinks: tt(p[s]),
      parentLinks: tt(p[i])
    });
  }
  let l = /* @__PURE__ */ new Set();
  for (let r of d.values())
    for (let p of r.childLinks) {
      let g = b.metadataCache.getFirstLinkpathDest(p, r.file.path);
      g && d.has(g.path) && l.add(g.path);
    }
  return { map: d, referenced: l };
}
_(qe, "collectNotes");
function it(b, e, s, i) {
  let a = i === "child" ? s.childLinks : s.parentLinks, n = [];
  for (let o of a) {
    let c = b.metadataCache.getFirstLinkpathDest(o, s.file.path);
    c && e.has(c.path) && n.push(e.get(c.path));
  }
  return n;
}
_(it, "resolveLinks");
function ze(b, e, s) {
  let i = /* @__PURE__ */ new Set([s.file.path]), a = /* @__PURE__ */ _((c, h) => {
    let d = {
      note: c,
      parent: h || null,
      children: [],
      expanded: !1,
      isAlias: !1,
      key: (h ? h.key + ">" : ">") + c.file.path
    };
    for (let l of c.childLinks) {
      let r = b.metadataCache.getFirstLinkpathDest(l, c.file.path);
      if (!r) continue;
      let p = e.get(r.path);
      !p || i.has(r.path) || (i.add(r.path), d.children.push(a(p, d)), i.delete(r.path));
    }
    return d;
  }, "mk"), n = a(s, null), o = /* @__PURE__ */ new Map();
  (/* @__PURE__ */ _((function c(h) {
    if (h.note.file) {
      let d = h.note.file.path;
      o.has(d) || o.set(d, []), o.get(d).push(h);
    }
    h.children.forEach(c);
  }), "collect"))(n);
  for (let [c, h] of o) {
    if (h.length < 2) continue;
    let d = e.get(c), l = new Set(d ? it(b, e, d, "parent").map((p) => p.file.path) : []), r = -1;
    for (let p = 0; p < h.length; p++) {
      let g = h[p].parent && h[p].parent.note.file ? h[p].parent.note.file.path : null;
      if (g && l.has(g)) {
        r = p;
        break;
      }
    }
    r < 0 && (r = 0), h.forEach((p, g) => {
      p.isAlias = g !== r;
    });
  }
  return n;
}
_(ze, "buildTree");
function Xe(b, e) {
  let s = [[b, 1]];
  for (; s.length; ) {
    let [i, a] = s.pop();
    i.expanded = a < e && i.children.length > 0;
    for (let n of i.children) s.push([n, a + 1]);
  }
}
_(Xe, "applyDepth");
function je(b, e) {
  let s = [], i = [], a = e.layoutDir === "v";
  return (/* @__PURE__ */ _((function n(o) {
    if (!o._w) {
      let h = (1 + (e.showOpenIcon !== !1 ? 1 : 0) + (e.showAddIcon !== !1 ? 1 : 0)) * 24 + 12, d = o.note.title, l = e.maxTitleLen > 0 ? Z(d, e.maxTitleLen) : d, r = st(l, 13, !0), p = !o.note.file, g = e.showCreated && !p && o.note.date ? o.note.date : "", f = e.showType && !p && o.note.type ? ce(o.note.type) : "", u = e.showChildCount && !p && o.children.length ? t("\u5B50 ") + o.children.length : "", S = [f, u, g].filter(Boolean).join(" \xB7 "), x = st(S, 11, !1);
      o._w = Math.max(110, 16 + Math.max(r, x) + h), o._shown = l;
    }
    let c = o.expanded ? o.children : [];
    if (!c.length) {
      o._h = e.nodeHeight, a && (o._subW = o._w);
      return;
    }
    if (a) {
      let h = 0;
      c.forEach((d, l) => {
        n(d), h += (d._subW || d._w) + (l ? e.gapY : 0);
      }), o._h = e.nodeHeight, o._subW = Math.max(o._w, h);
    } else {
      let h = 0;
      c.forEach((d, l) => {
        n(d), h += d._h + (l ? e.gapY : 0);
      }), o._h = Math.max(e.nodeHeight, h);
    }
  }), "measure"))(b), (/* @__PURE__ */ _((function n(o, c, h) {
    o._x = c, o._y = h + o._h / 2, s.push(o);
    let d = o.expanded ? o.children : [];
    if (a) {
      let l = 0;
      d.forEach((g, f) => {
        l += (g._subW || g._w) + (f ? e.gapY : 0);
      });
      let r = c + o._w / 2 - l / 2, p = h + e.nodeHeight + e.gapX;
      for (let g of d) {
        let f = g._subW || g._w;
        n(g, r + (f - g._w) / 2, p), i.push([o, g]), r += f + e.gapY;
      }
    } else {
      let l = h;
      for (let r of d)
        n(r, c + o._w + e.gapX, l), i.push([o, r]), l += r._h + e.gapY;
    }
  }), "place"))(b, 0, 0), { nodes: s, edges: i };
}
_(je, "layoutTree");
async function He(b, e, s, i) {
  await b.fileManager.processFrontMatter(e, (a) => {
    let n = Re(a[s]);
    n.some((c) => ke(c) === i) || n.push("[[" + i + "]]"), a[s] = n;
  });
}
_(He, "addLink");
async function _e(b, e, s, i) {
  let a = !1;
  return await b.fileManager.processFrontMatter(e, (n) => {
    let o = Re(n[s]), c = o.filter((h) => {
      let d = b.metadataCache.getFirstLinkpathDest(ke(h), e.path);
      return !(d && d.path === i);
    });
    c.length !== o.length && (a = !0), c.length ? n[s] = c : delete n[s];
  }), a;
}
_(_e, "removeLinkByPath");
var wt = class extends pt {
  constructor(e, s, i, a) {
    super(e), this.items = s, this.onChoose = i, this.setPlaceholder(a || t("\u641C\u7D22\u2026"));
  }
  getItems() {
    return this.items;
  }
  getItemText(e) {
    return e.label;
  }
  onChooseItem(e) {
    this.onChoose(e);
  }
};
_(wt, "PickModal");
var Ee = wt, yt = class extends ge {
  constructor(e, s, i, a, n, o) {
    if (super(e), this.items = s, this.onChoose = i, this.selected = /* @__PURE__ */ new Map(), this.searchVal = "", this.typeFilter = "", this.mainFilter = "", this.linkFilter = "", this.statusFilter = "", this.availableTypes = n || [], this.availableStatusColors = o || {}, a && a.length) {
      let c = new Map(s.map((h) => [h.path, h.label]));
      for (let h of a)
        c.has(h) && this.selected.set(h, c.get(h));
    }
  }
  onOpen() {
    let { contentEl: e } = this;
    e.addClass("lkm-multipick");
    let s = /* @__PURE__ */ _((x) => {
      x.target.tagName === "SELECT" && x.stopPropagation();
    }, "guardSelect");
    e.addEventListener("pointerdown", s, !0), e.addEventListener("mousedown", s, !0), e.createEl("h3", { text: t("\u591A\u9009\u7B14\u8BB0\u663E\u793A\u5BFC\u56FE") }), e.createEl("p", { text: t("\u641C\u7D22\u5E76\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\uFF0C\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A\uFF08\u65E0\u9700\u5173\u8054\uFF09"), cls: "lkm-modal-sub" });
    let i = new Set(this.availableTypes);
    for (let x of this.items) x.type && i.add(x.type);
    let a = [...i], n = e.createDiv("lkm-multipick-filter"), o = n.createEl("input", { type: "text", placeholder: t("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    o.addClass("lkm-multipick-input");
    let c = /* @__PURE__ */ _((x) => {
      let C = /* @__PURE__ */ _((M) => M.stopPropagation(), "stop");
      x.addEventListener("mousedown", C), x.addEventListener("pointerdown", C), x.addEventListener("touchstart", C, { passive: !0 }), x.addEventListener("touchend", C, { passive: !0 }), x.addEventListener("click", C);
    }, "stopModalSwallow");
    if (a.length) {
      let x = n.createEl("select", { cls: "lkm-multipick-select" });
      x.createEl("option", { value: "", text: t("\u7C7B\u578B") }), x.createEl("option", { value: "__none__", text: t("\u65E0\u7C7B\u578B") });
      for (let C of a) x.createEl("option", { value: C, text: ce(C) });
      c(x), x.addEventListener("change", () => {
        this.typeFilter = x.value, u();
      });
    }
    let h = n.createEl("select", { cls: "lkm-multipick-select" });
    h.createEl("option", { value: "", text: t("\u6027\u8D28") }), h.createEl("option", { value: "1", text: t("\u4E3B\u7B14\u8BB0") }), h.createEl("option", { value: "0", text: t("\u975E\u4E3B\u7B14\u8BB0") }), c(h), h.addEventListener("change", () => {
      this.mainFilter = h.value, u();
    });
    let d = n.createEl("select", { cls: "lkm-multipick-select" });
    d.createEl("option", { value: "", text: t("\u5173\u8054") }), d.createEl("option", { value: "orphan", text: t("\u672A\u5173\u8054") }), d.createEl("option", { value: "linked", text: t("\u5DF2\u5173\u8054") }), c(d), d.addEventListener("change", () => {
      this.linkFilter = d.value, u();
    });
    let l = n.createEl("select", { cls: "lkm-multipick-select" });
    l.createEl("option", { value: "", text: t("\u72B6\u6001") }), l.createEl("option", { value: "__none__", text: t("\u65E0\u72B6\u6001") });
    for (let x of Object.keys(this.availableStatusColors || {}))
      l.createEl("option", { value: x, text: oe(x) });
    c(l), l.addEventListener("change", () => {
      this.statusFilter = l.value, u();
    });
    let r = e.createDiv("lkm-multipick-list"), p = e.createDiv("lkm-multipick-sel"), g = null, f = /* @__PURE__ */ _(() => {
      let x = this.searchVal.toLowerCase(), C = this.typeFilter, M = [];
      for (let w of this.items)
        x && !w.label.toLowerCase().includes(x) || C && C === "__none__" && w.type || C && C !== "__none__" && w.type !== C || this.mainFilter === "1" && !w.isMain || this.mainFilter === "0" && w.isMain || this.linkFilter === "orphan" && !w.orphan || this.linkFilter === "linked" && w.orphan || this.statusFilter === "__none__" && w.status || this.statusFilter && this.statusFilter !== "__none__" && w.status !== this.statusFilter || M.push(w);
      return M;
    }, "getFiltered"), u = /* @__PURE__ */ _(() => {
      r.empty();
      let x = f(), C = 0, M = 100;
      for (let w = 0; w < x.length && C < M; w++) {
        let F = x[w], y = r.createDiv("lkm-multipick-row");
        this.selected.has(F.path) && y.classList.add("is-selected"), y.createSpan({ text: F.label });
        let T = [];
        F.isMain && T.push(t("\u4E3B\u7B14\u8BB0")), F.type && T.push(ce(F.type)), T.length && y.createSpan({ text: " \xB7 " + T.join(" \xB7 "), cls: "lkm-multipick-type" }), y.addEventListener("click", () => {
          this.selected.has(F.path) ? this.selected.delete(F.path) : this.selected.set(F.path, F.label), y.classList.toggle("is-selected"), p.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0"));
        }), C++;
      }
      C === 0 ? r.createEl("p", { text: t("\u65E0\u5339\u914D\u7ED3\u679C"), cls: "lkm-modal-sub" }) : C === M && r.createEl("p", { text: t("\u4EC5\u663E\u793A\u524D ") + M + t(" \u6761\uFF0C\u8BF7\u641C\u7D22\u7F29\u5C0F\u8303\u56F4"), cls: "lkm-modal-sub" });
    }, "renderList");
    o.addEventListener("input", () => {
      this.searchVal = o.value, g && clearTimeout(g), g = setTimeout(u, 150);
    });
    let S = e.createDiv("lkm-multipick-btns");
    new R(S).addButton((x) => x.setButtonText(t("\u5168\u9009\u5F53\u524D")).onClick(() => {
      for (let C of f()) this.selected.set(C.path, C.label);
      u(), p.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0"));
    })).addButton((x) => x.setButtonText(t("\u663E\u793A\u5BFC\u56FE")).setCta().onClick(() => {
      if (!this.selected.size) {
        new v(t("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      this.close(), this.onChoose([...this.selected.keys()]);
    })).addButton((x) => x.setButtonText(t("\u6E05\u9664\u6240\u6709")).onClick(() => {
      this.selected.clear(), u(), p.setText(t("\u5DF2\u9009 0 \u7BC7\u7B14\u8BB0"));
    })).addButton((x) => x.setButtonText(t("\u53D6\u6D88")).onClick(() => this.close())), p.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0")), u(), o.focus();
  }
  onClose() {
    this.contentEl.empty();
  }
};
_(yt, "MultiPickModal");
var At = yt, vt = class extends ge {
  constructor(e, s, i) {
    super(e), this.parentLabel = s, this.opts = i || {}, this.onSubmit = this.opts.onSubmit || (() => {
    });
  }
  onOpen() {
    let { contentEl: e } = this, s = this.opts;
    e.createEl("h3", { text: s.standalone ? t("\u65B0\u5EFA\u8282\u70B9") : t("\u65B0\u5EFA\u5B50\u8282\u70B9") }), s.standalone || e.createEl("p", { text: t("\u7236\u8282\u70B9\uFF1A") + this.parentLabel, cls: "lkm-modal-sub" });
    let i = "", a = s.defaultType || "", n = s.defaultStatus || "", o = s.defaultTemplate || "", c = !1;
    new R(e).setName(t("\u6807\u9898")).addText((l) => {
      l.onChange((r) => i = r), l.inputEl.focus(), l.inputEl.addEventListener("keydown", (r) => {
        r.key === "Enter" && (r.preventDefault(), d());
      });
    }), new R(e).setName(t("\u7C7B\u578B")).setDesc(t("\u5199\u5165\u7B14\u8BB0\u7684 type \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((l) => {
      l.addOption("", t("\u4E0D\u9009")), (s.types || []).forEach((r) => l.addOption(r, ce(r))), l.setValue(a), l.onChange((r) => {
        a = r;
        let p = s.typeTemplates && s.typeTemplates[r];
        if (p && h) {
          let g = (s.templates || []).find((f) => f.path === te(p));
          g && (o = g.path, h.setValue(o));
        }
      });
    }), s.statuses && s.statuses.length && new R(e).setName(t("\u72B6\u6001")).setDesc(t("\u5199\u5165\u7B14\u8BB0\u7684 status \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((l) => {
      l.addOption("", t("\u4E0D\u9009")), s.statuses.forEach((r) => l.addOption(r, oe(r))), l.setValue(n), l.onChange((r) => {
        n = r;
      });
    });
    let h = null;
    new R(e).setName(t("\u6A21\u677F")).setDesc(t("\u4E0D\u540C\u7C7B\u578B\u53EF\u4F7F\u7528\u4E0D\u540C\u6A21\u677F")).addDropdown((l) => {
      h = l, (s.templates || []).forEach((r) => l.addOption(r.path, r.name)), l.setValue(o), l.onChange((r) => o = r);
    }), new R(e).setName(t("\u4E3B\u7B14\u8BB0")).setDesc(t("\u6807\u8BB0\u4E3A\u5BFC\u56FE\u4E3B\u5165\u53E3\uFF08") + (s.zkField || "main") + ": true\uFF09").addToggle((l) => {
      l.onChange((r) => c = r);
    });
    let d = /* @__PURE__ */ _(() => {
      let l = i.trim();
      if (!l) {
        new v(t("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(l, a, o, c, n);
    }, "done");
    new R(e).addButton((l) => l.setButtonText(t("\u521B\u5EFA")).setCta().onClick(d));
  }
  onClose() {
    this.contentEl.empty();
  }
};
_(vt, "NewChildModal");
var ht = vt, _t = class extends ge {
  constructor(e, s, i) {
    super(e), this.currentName = s, this.onSubmit = i;
  }
  onOpen() {
    let { contentEl: e } = this;
    e.createEl("h3", { text: t("\u91CD\u547D\u540D\u6587\u4EF6") }), e.createEl("p", { text: t("\u5F53\u524D\uFF1A") + this.currentName + ".md", cls: "lkm-modal-sub" });
    let s = this.currentName;
    new R(e).setName(t("\u65B0\u6587\u4EF6\u540D")).addText((a) => {
      a.setValue(this.currentName), a.onChange((n) => s = n), a.inputEl.focus(), a.inputEl.select(), a.inputEl.addEventListener("keydown", (n) => {
        n.key === "Enter" && (n.preventDefault(), i());
      });
    });
    let i = /* @__PURE__ */ _(() => {
      let a = s.trim();
      if (!a) {
        new v(t("\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(a);
    }, "done");
    new R(e).addButton((a) => a.setButtonText(t("\u91CD\u547D\u540D")).setCta().onClick(i));
  }
  onClose() {
    this.contentEl.empty();
  }
};
_(_t, "RenameModal");
var Ot = _t, bt = class extends ge {
  constructor(e, s, i, a, n) {
    super(e), this.titleText = s, this.message = i, this.onConfirm = a, this.danger = n !== !1;
  }
  onOpen() {
    let { contentEl: e } = this;
    this.danger && e.addClass("lkm-modal-danger"), e.createEl("h3", { text: this.titleText }), e.createEl("p", { text: this.message, cls: "lkm-modal-sub" });
    let s = e.createDiv("lkm-confirm-row");
    s.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => this.close()), s.createEl("button", { cls: "lkm2-btn-danger", text: t("\u786E\u8BA4") }).addEventListener("click", () => {
      this.close(), this.onConfirm();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
_(bt, "ConfirmModal");
var Le = bt, xt = class extends pt {
  constructor(e, s, i) {
    super(e), this.items = s, this.onChoose = i, this.setPlaceholder(t("\u9009\u62E9\u65B0\u7684\u7236\u8282\u70B9\u2026"));
  }
  getItems() {
    return this.items;
  }
  getItemText(e) {
    return e.label;
  }
  onChooseItem(e) {
    this.onChoose(e);
  }
};
_(xt, "MoveModal");
var Qe = xt, St = class extends It {
  constructor(e, s) {
    super(e), this.plugin = s, this.rootPath = null, this.depth = s.settings.defaultDepth, this.notes = /* @__PURE__ */ new Map(), this.referenced = /* @__PURE__ */ new Set(), this.currentRoot = null, this._cleanup = [], this._view = null, this._expandedMem = /* @__PURE__ */ new Map(), this._history = [], this._selected = /* @__PURE__ */ new Set(), this._batchMode = !1, this._selKey = null, this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._toolbarCollapsed = !1, this._dashFilters = [], this._dashSort = "date", this._dashSearch = "", this._dashHeatIdx = 0, this._dashBranchAll = !1, this._dashTab = "stats", this._tlSort = "desc", this._tlTypeFilter = "", this._tlSearch = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this._nodeIndex = /* @__PURE__ */ new Map();
  }
  get s() {
    return this.plugin.settings;
  }
  getViewType() {
    return me;
  }
  getDisplayText() {
    return t("\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE");
  }
  getIcon() {
    return "git-fork";
  }
  async onOpen() {
    await this._waitMetadataReady(), this.plugin._autoState || await this.plugin._loadViewsFromFile();
    let e = this.plugin._autoState;
    if (e) {
      if (this.rootPath = e.rootPath || null, this.depth = e.depth || this.plugin.settings.defaultDepth, this._mode = e.mode || "map", this._multiRoot = !!e.multiRoot, this._multiRootPaths = e.multiRootPaths || [], this._toolbarCollapsed = !!e.toolbarCollapsed, e.kwFilePath) {
        let s = this.app.vault.getAbstractFileByPath(e.kwFilePath);
        s && (this._kwFile = s);
      }
      e.view && (this._view = e.view), e.expandedMemory && (this._expandedMem = /* @__PURE__ */ new Map(Object.entries(e.expandedMemory)));
    }
    await this.rebuild(!0), e || this.locateFile(this.app.workspace.getActiveFile());
  }
  async onClose() {
    this._runCleanup(), this._autoSaveTimer && (clearTimeout(this._autoSaveTimer), this._autoSaveTimer = null);
    let e = this._captureViewState();
    await this.plugin._saveAutoState(e);
  }
  _scheduleAutoSave() {
    this._autoSaveTimer && clearTimeout(this._autoSaveTimer), this._autoSaveTimer = setTimeout(() => {
      this._autoSaveTimer = null, this.plugin._saveAutoState(this._captureViewState());
    }, 2e3);
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
  async _restoreViewState(e) {
    if (this.rootPath = e.rootPath || null, this.depth = e.depth || this.plugin.settings.defaultDepth, this._mode = e.mode || "map", this._multiRoot = !!e.multiRoot, this._multiRootPaths = e.multiRootPaths || [], this._toolbarCollapsed = !!e.toolbarCollapsed, e.kwFilePath) {
      let a = this.app.vault.getAbstractFileByPath(e.kwFilePath);
      a ? this._kwFile = a : this._kwFile = null;
    } else
      this._kwFile = null;
    let s = e.expandedMemory ? new Map(Object.entries(e.expandedMemory)) : /* @__PURE__ */ new Map(), i = e.view || null;
    await this.rebuild(!0), this._expandedMem = s, this._view = i, this.render({ fit: !0 });
  }
  async _showPresetMenu(e) {
    (!this.plugin._loadedPresets || this.plugin._loadedPresets.length === 0) && await this.plugin._loadViewsFromFile();
    let s = new Ne(), i = this.plugin._getSavedViews();
    if (i.length === 0)
      s.addItem((n) => n.setTitle(t("\u6682\u65E0\u9884\u8BBE")).setIcon("bookmark").onClick(() => {
      }));
    else {
      for (let n of i) {
        let o = n.time ? new Date(n.time).toLocaleString() : "";
        s.addItem((c) => {
          c.setTitle(n.name + (o ? "  (" + o + ")" : "")).setIcon("bookmark").onClick(async () => {
            await this._restoreViewState(n.state), new v(t("\u5DF2\u6062\u590D\u9884\u8BBE\uFF1A") + n.name);
          });
        });
      }
      s.addSeparator(), s.addItem((n) => n.setTitle(t("\u66F4\u65B0\u9884\u8BBE\u2026")).setIcon("refresh-cw").onClick(() => this._showUpdatePresetMenu(e))), s.addItem((n) => n.setTitle(t("\u5220\u9664\u9884\u8BBE\u2026")).setIcon("trash").onClick(() => this._showDeletePresetMenu(e)));
    }
    s.addSeparator(), s.addItem((n) => n.setTitle(t("\u4FDD\u5B58\u5F53\u524D\u72B6\u6001\u2026")).setIcon("plus").onClick(() => this._promptSaveView()));
    let a = e.getBoundingClientRect();
    s.showAtPosition({ x: a.left, y: a.bottom });
  }
  _showDeletePresetMenu(e) {
    let s = new Ne(), i = this.plugin._getSavedViews();
    for (let n of i)
      s.addItem((o) => {
        o.setTitle(n.name).setIcon("trash").onClick(async () => {
          await this.plugin._deleteSavedView(n.name), new v(t("\u5DF2\u5220\u9664\u9884\u8BBE\uFF1A") + n.name);
        });
      });
    let a = e.getBoundingClientRect();
    s.showAtPosition({ x: a.left, y: a.bottom });
  }
  _showUpdatePresetMenu(e) {
    let s = new Ne(), i = this.plugin._getSavedViews();
    for (let n of i)
      s.addItem((o) => {
        o.setTitle(n.name).setIcon("refresh-cw").onClick(async () => {
          await this.plugin._saveViewPreset(n.name, this._captureViewState()), new v(t("\u5DF2\u66F4\u65B0\u9884\u8BBE\uFF1A") + n.name);
        });
      });
    let a = e.getBoundingClientRect();
    s.showAtPosition({ x: a.left, y: a.bottom });
  }
  _promptSaveView() {
    let e = new ge(this.app);
    e.titleEl.setText(t("\u4FDD\u5B58\u5BFC\u56FE\u9884\u8BBE"));
    let s = "", i = new R(e.contentEl).setName(t("\u9884\u8BBE\u540D\u79F0")).addText((n) => {
      n.setPlaceholder(t("\u8F93\u5165\u9884\u8BBE\u540D\u79F0")), n.inputEl.focus(), n.onChange((o) => s = o), n.inputEl.addEventListener("keydown", (o) => {
        o.key === "Enter" && (o.preventDefault(), a());
      });
    }), a = /* @__PURE__ */ _(async () => {
      let n = s.trim();
      if (!n) {
        new v(t("\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.plugin._getSavedViews().some((c) => c.name === n) ? new Le(this.app, t("\u8986\u76D6\u9884\u8BBE"), t("\u5DF2\u5B58\u5728\u540C\u540D\u9884\u8BBE\u300C") + n + t("\u300D\uFF0C\u662F\u5426\u8986\u76D6\uFF1F"), async () => {
        await this.plugin._saveViewPreset(n, this._captureViewState()), e.close(), new v(t("\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A") + n);
      }).open() : (await this.plugin._saveViewPreset(n, this._captureViewState()), e.close(), new v(t("\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A") + n));
    }, "done");
    new R(e.contentEl).addButton((n) => n.setButtonText(t("\u4FDD\u5B58")).setCta().onClick(a)).addButton((n) => n.setButtonText(t("\u53D6\u6D88")).onClick(() => e.close())), e.open();
  }
  async _waitMetadataReady() {
    let e = this.app.metadataCache;
    kt(this.app, this.s) || await new Promise((s) => {
      let i = !1, a = /* @__PURE__ */ _(() => {
        if (!i) {
          i = !0;
          try {
            e.offref(n), e.offref(o);
          } catch {
          }
          clearTimeout(c), s();
        }
      }, "finish"), n = e.on("resolved", a), o = e.on("changed", a), c = setTimeout(a, 6e3);
      this._cleanup.push(a);
    });
  }
  _runCleanup() {
    this._hidePreview();
    for (let e of this._cleanup)
      try {
        e();
      } catch {
      }
    this._cleanup = [];
  }
  _setupMobileViewport(e) {
    if (!window.visualViewport) return;
    let s = window.visualViewport, i = null, a = /* @__PURE__ */ _(() => {
      i && clearTimeout(i), i = setTimeout(() => {
        if (i = null, !window.matchMedia("(hover: none)").matches) return;
        let h = e.querySelector(".lkm-dash");
        if (!h) return;
        let d = e.querySelector(".lkm-toolbar"), l = d ? d.getBoundingClientRect().height : 0;
        h.style.maxHeight = s.height - l + "px";
        let r = document.activeElement;
        r && r.tagName === "INPUT" && e.contains(r) && setTimeout(() => {
          let p = r.getBoundingClientRect(), g = h.getBoundingClientRect();
          (p.top < g.top || p.bottom > g.bottom) && r.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 50);
      }, 150);
    }, "adjust"), n = /* @__PURE__ */ _(() => a(), "onResize"), o = /* @__PURE__ */ _(() => a(), "onScroll");
    s.addEventListener("resize", n), s.addEventListener("scroll", o), window.addEventListener("resize", n), this._cleanup.push(() => {
      s.removeEventListener("resize", n), s.removeEventListener("scroll", o), window.removeEventListener("resize", n);
      let c = e.querySelector(".lkm-dash");
      c && (c.style.maxHeight = "");
    }), this._adjustMobileViewport = a;
  }
  async rebuild(e) {
    let s = qe(this.app, this.s);
    this.notes = s.map, this.referenced = s.referenced;
    for (let i of this._expandedMem.keys()) this.notes.has(i) || this._expandedMem.delete(i);
    if (this._selKey && !this._nodeIndex.has(this._selKey) && (this._selKey = null), this._multiRoot && e && this._multiRootPaths && this._multiRootPaths.length) {
      let i = this._multiRootPaths.filter((a) => this.notes.has(a));
      if (i.length) {
        this._showMultiRoot(i);
        return;
      }
    }
    (!e || !this.rootPath || !this.notes.has(this.rootPath)) && (this.rootPath = this._pickDefaultRoot(), this._multiRoot = !1), this.render();
  }
  _pickDefaultRoot() {
    let e = [...this.notes.values()], s = e.filter((a) => a.zk).sort((a, n) => a.title.localeCompare(n.title, "zh"));
    if (s.length) return s[0].file.path;
    let i = e.filter((a) => !this.referenced.has(a.file.path)).sort((a, n) => a.title.localeCompare(n.title, "zh"));
    return i.length ? i[0].file.path : e.length ? e[0].file.path : null;
  }
  _indexTree(e) {
    this._nodeIndex = /* @__PURE__ */ new Map(), this._treePaths = /* @__PURE__ */ new Set(), this._pathNodes = /* @__PURE__ */ new Map();
    let s = /* @__PURE__ */ _((i) => {
      this._nodeIndex.set(i.key, i), i.note.file && (this._treePaths.add(i.note.file.path), this._pathNodes.has(i.note.file.path) || this._pathNodes.set(i.note.file.path, []), this._pathNodes.get(i.note.file.path).push(i)), i.children.forEach(s);
    }, "walk");
    s(e);
  }
  render(e) {
    let s = this.contentEl;
    if (this._runCleanup(), s.empty(), s.addClass("lkm-view"), s.style.overflow = "hidden", this._mode === "dash") {
      this._renderDash(s);
      return;
    }
    let i = this.s;
    s.tabIndex = -1;
    let a = /* @__PURE__ */ _((w) => {
      let F = w.target.tagName;
      if (!(F === "INPUT" || F === "TEXTAREA"))
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
    s.addEventListener("keydown", a), this._cleanup.push(() => s.removeEventListener("keydown", a)), this._titleLenApplied !== i.maxTitleLen && (this._titleLenApplied = i.maxTitleLen);
    let n = s.createDiv("lkm-toolbar"), o = n.createEl("button", { cls: "lkm-btn lkm-toolbar-toggle", text: "\u2630" });
    o.title = t("\u5C55\u5F00/\u6298\u53E0\u5DE5\u5177\u680F"), o.onclick = () => {
      this._toolbarCollapsed = !this._toolbarCollapsed, n.classList.toggle("lkm-collapsed", this._toolbarCollapsed), this._scheduleAutoSave();
    }, this._toolbarCollapsed && n.classList.add("lkm-collapsed");
    let c = /* @__PURE__ */ _((w, F, y, I, T, E) => {
      let B = n.createEl("button", { cls: "lkm-btn" + (I ? " " + I : "") });
      return E ? (B.createEl("span", { cls: "lkm-btn-icon", text: E }), B.createEl("span", { text: w })) : B.textContent = w, B.title = F, T && (B.disabled = !0), B.onclick = (G) => {
        B.disabled || y(B, G);
      }, B;
    }, "mkBtn"), h = this._selKey ? this._nodeIndex.get(this._selKey) : null, d = !h;
    c(t("\u5DE5\u4F5C\u53F0"), t("\u67E5\u770B\u7EDF\u8BA1\u5DE5\u4F5C\u53F0"), () => {
      this._mode = "dash", this.render();
    }, "", !1, "\u{1F4CA}"), c(t("\u4E3B\u7B14\u8BB0"), t("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u7B14\u8BB0\uFF08main: true\uFF09"), () => this.openRootPicker(), "", !1, "\u{1F4CC}"), c(t("\u5173\u952E\u8BCD"), t("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u8FC7\u6EE4"), () => this.openKeywordPicker(), "", !1, "\u{1F511}"), c(t("\u641C\u7D22"), t("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9"), () => this.openNoteSearch(), "", !1, "\u{1F50D}"), c(t("\u591A\u9009"), t("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A"), () => this.openMultiPick(), "", !1, "\u{1F4CB}"), c(t("\u65B0\u589E"), t("\u521B\u5EFA\u72EC\u7ACB\u7B14\u8BB0"), () => this.createStandaloneNote(), "", !1, "\u271A");
    let l = n.createDiv("lkm-depth");
    l.createSpan({ text: t("\u5C42") });
    let r = l.createEl("button", { cls: "lkm-step", text: "\u2212", title: t("\u51CF\u5C11\u663E\u793A\u5C42\u6570\uFF08\u5C421=\u53EA\u770B\u6839\u7B14\u8BB0\uFF09") }), p = l.createSpan({ cls: "lkm-depth-val", text: String(this.depth) }), g = l.createEl("button", { cls: "lkm-step", text: "+", title: t("\u589E\u52A0\u663E\u793A\u5C42\u6570") });
    r.onclick = () => {
      this.depth > 1 && (this.depth--, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, g.onclick = () => {
      this.depth < 12 && (this.depth++, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, c(t("\u5237\u65B0"), t("\u91CD\u65B0\u8BFB\u53D6\u76EE\u5F55\u4E0E\u7B14\u8BB0\u6570\u636E"), () => this.rebuild(!0), "", !1, "\u21BB"), c(t("\u9002\u5E94"), t("\u7F29\u653E\u81F3\u5B8C\u6574\u663E\u793A\u6240\u6709\u8282\u70B9"), () => this._fit && this._fit(), "", !1, "\u2922"), c(t("\u5168\u5C55"), t("\u5C55\u5F00\u6240\u6709\u8282\u70B9"), () => this._expandAll(!0), "", !1, "\u2295"), c(t("\u5168\u6298"), t("\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9"), () => this._expandAll(!1), "", !1, "\u2296"), c(this.s.layoutDir === "v" ? t("\u7EB5\u5411") : t("\u6A2A\u5411"), t("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u6A2A\u5411/\u7EB5\u5411\uFF09"), (w) => {
      this.s.layoutDir = this.s.layoutDir === "v" ? "h" : "v", this.plugin.saveSettings(), this._view = null, this.render({ fit: !0 });
    }, this.s.layoutDir === "v" ? "is-active" : "", !1, "\u21C4"), c(t("\u5FEB\u6377\u952E"), t("\u67E5\u770B\u952E\u76D8\u5FEB\u6377\u952E\u8BF4\u660E"), () => this._showShortcutHelp(), "", !1, "\u2328"), c(t("\u5E2E\u52A9"), t("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), () => this._showHelp(), "", !1, "?"), c(t("\u5BFC\u51FA"), t("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2"), (w) => this._exportMenu(w), "", !1, "\u2B07"), c(t("\u9884\u8BBE"), t("\u4FDD\u5B58/\u6062\u590D\u5BFC\u56FE\u72B6\u6001\u9884\u8BBE"), (w) => this._showPresetMenu(w), "", !1, "\u{1F516}");
    let f = c(t("\u663E\u793A"), t("\u5207\u6362\u663E\u793A\u9009\u9879"), () => {
      let w = new Ne();
      w.addItem((y) => y.setTitle(this.s.showCreated ? t("\u2713 \u65F6\u95F4") : t("\u65F6\u95F4")).setIcon("calendar").onClick(() => {
        this.s.showCreated = !this.s.showCreated, this.plugin.saveSettings(), this.render();
      })), w.addItem((y) => y.setTitle(this.s.showType ? t("\u2713 \u7C7B\u578B") : t("\u7C7B\u578B")).setIcon("tag").onClick(() => {
        this.s.showType = !this.s.showType, this.plugin.saveSettings(), this.render();
      })), w.addItem((y) => y.setTitle(this.s.showChildCount ? t("\u2713 \u5B50\u6570") : t("\u5B50\u6570")).setIcon("list").onClick(() => {
        this.s.showChildCount = !this.s.showChildCount, this.plugin.saveSettings(), this.render();
      })), w.addItem((y) => y.setTitle(this.s.showWordCount ? t("\u2713 \u5B57\u6570") : t("\u5B57\u6570")).setIcon("type").onClick(() => {
        this.s.showWordCount = !this.s.showWordCount, this.plugin.saveSettings(), this.render();
      })), w.addSeparator(), w.addItem((y) => y.setTitle(this.s.showOpenIcon !== !1 ? t("\u2713 \u6253\u5F00\u56FE\u6807") : t("\u6253\u5F00\u56FE\u6807")).setIcon("edit").onClick(() => {
        this.s.showOpenIcon = this.s.showOpenIcon === !1, this.plugin.saveSettings(), this.render();
      })), w.addItem((y) => y.setTitle(this.s.showAddIcon !== !1 ? t("\u2713 \u65B0\u589E\u56FE\u6807") : t("\u65B0\u589E\u56FE\u6807")).setIcon("plus-circle").onClick(() => {
        this.s.showAddIcon = this.s.showAddIcon === !1, this.plugin.saveSettings(), this.render();
      }));
      let F = f.getBoundingClientRect();
      w.showAtPosition({ x: F.left, y: F.bottom });
    });
    c(t("\u6279\u91CF"), t("\u8FDB\u5165\u6279\u91CF\u6A21\u5F0F\uFF1A\u5355\u51FB\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u540E\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664"), () => this._toggleBatch(), this._batchMode ? "is-active" : ""), this._batchMode && (n.createDiv("lkm-sel-count").setText(t("\u5DF2\u9009 ") + this._selected.size), c(t("\u5168\u9009"), t("\u9009\u4E2D\u5BFC\u56FE\u4E2D\u6240\u6709\u8282\u70B9"), () => {
      this._selected = new Set(this._nodeIndex.keys()), this.render();
    }, "lkm-btn-action"), c(t("\u53CD\u9009"), t("\u53CD\u9009\u5F53\u524D\u9009\u4E2D\u72B6\u6001"), () => {
      let F = new Set(this._nodeIndex.keys());
      for (let y of this._selected) F.delete(y);
      this._selected = F, this.render();
    }, "lkm-btn-action"), c(t("\u79FB\u52A8\u5230\u2026"), t("\u628A\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u6307\u5B9A\u7236\u7B14\u8BB0\u4E0B"), () => this._batchMoveDialog(), "lkm-btn-action"), c(t("\u5220\u9664\u9009\u4E2D"), t("\u5220\u9664\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u53CA\u5176\u7B14\u8BB0\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF09"), () => this._batchDelete(), "lkm-btn-action"), c(t("\u6539\u7C7B\u578B"), t("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u7C7B\u578B"), () => this._batchSetType(), "lkm-btn-action"), c(t("\u6539\u72B6\u6001"), t("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u72B6\u6001"), () => this._batchSetStatus(), "lkm-btn-action"), c(t("\u6807\u8BB0\u4E3B\u7B14\u8BB0"), t("\u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u4E3B\u7B14\u8BB0"), () => this._batchSetMain(!0), "lkm-btn-action"), c(t("\u53D6\u6D88\u4E3B\u7B14\u8BB0"), t("\u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u4E3B\u7B14\u8BB0\u6807\u8BB0"), () => this._batchSetMain(!1), "lkm-btn-action")), c(t("\u8BBE\u7F6E"), t("\u6253\u5F00\u63D2\u4EF6\u8BBE\u7F6E"), () => {
      this.app.setting.open(), this.app.setting.openTabById(this.plugin.manifest.id);
    }, "", !1, "\u2699"), c(t("\u83DC\u5355"), t("\u663E\u793A\u8282\u70B9\u64CD\u4F5C\u83DC\u5355\uFF08\u7B49\u540C\u53F3\u952E/\u957F\u6309\uFF09\uFF1A\u6253\u5F00/\u65B0\u589E/\u805A\u7126/\u4E0A\u7EA7/\u72B6\u6001/\u4E3B\u7B14\u8BB0/\u91CD\u547D\u540D/\u590D\u5236/\u79FB\u52A8/\u6392\u5E8F/\u5220\u9664"), (w, F) => {
      let y = this._nodeIndex.get(this._selKey);
      y && this._showNodeMenu(y, { clientX: F.clientX, clientY: F.clientY });
    }, "lkm-node-btn", !h), c(t("\u8FD4\u56DE"), t("\u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE\u4F4D\u7F6E"), () => this._back(), "", this._history.length === 0, "\u2190"), c(t("\u7B5B\u9009"), t("\u7B5B\u9009\u8282\u70B9"), () => {
      n.classList.toggle("lkm-filter-open");
    }, "lkm-filter-toggle");
    let u = n.createEl("input", { type: "text", cls: "lkm-filter-input", placeholder: t("\u7B5B\u9009\u8282\u70B9\u2026") });
    u.value = this._filterText || "", u.addEventListener("input", () => {
      this._filterText = u.value.trim().toLowerCase(), this._applyFilter();
    });
    let S = n.createDiv("lkm-info");
    h && S.createSpan({ text: t("\u5DF2\u9009\uFF1A") + Z(h.note.title, 12) + " \uFF5C " });
    let x = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (this._kwFile)
      S.createSpan({ text: t("\u5173\u952E\u8BCD\uFF1A") + this._kwFile.basename });
    else if (this._multiRoot)
      S.createSpan({ text: t("\u591A\u9009\u5BFC\u56FE\uFF08") + (this.currentRoot ? this.currentRoot.children.length : 0) + t(" \u7BC7\uFF09") });
    else if (x) {
      S.createSpan({ text: t("\u8DEF\u5F84\uFF1A") });
      let w = this._buildCrumbChain();
      w.forEach((F, y) => {
        if (w.length > 8 && y === 1) {
          S.createEl("span", { cls: "lkm-crumb-sep", text: "\u2026>" });
          return;
        }
        if (w.length > 8 && y > 1 && y < w.length - 1) return;
        y && S.createSpan({ cls: "lkm-crumb-sep", text: ">" });
        let I = y === w.length - 1, T = Z(F.note.title, 10), E = S.createEl(I ? "span" : "a", { cls: "lkm-crumb-item" + (I ? " lkm-crumb-cur" : ""), text: T });
        E.title = F.note.title, !I && F.note.file && E.addEventListener("click", () => this._focusPath(F.note.file.path));
      });
    } else
      S.createSpan({ text: t("\u672A\u627E\u5230\u7B14\u8BB0") });
    let C = s.createDiv("lkm-canvas");
    if (this._kwFile && !this.app.vault.getAbstractFileByPath(this._kwFile.path) && (this._kwFile = null), !this._kwFile && !this._multiRoot && (this._selectedRootPaths = null), this._kwFile) {
      this.showKeyword(this._kwFile, e);
      return;
    }
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length) {
      this._indexTree(this.currentRoot), Xe(this.currentRoot, this.depth), this._ensureSelectedVisible(this.currentRoot), this._restoreExpanded(), this._draw(C, je(this.currentRoot, this.s), e);
      return;
    }
    if (!this.rootPath || !x) {
      if (this.notes.size === 0) {
        this._renderEmptyGuide(C);
        return;
      }
      C.createDiv("lkm-empty").setText(t("\u6CA1\u6709\u627E\u5230\u4E3B\u7B14\u8BB0\uFF08") + (this.s.zkField || "main") + t(": true\uFF09\u3002\u53EF\u5728\u5BFC\u56FE\u4E2D\u53F3\u952E/\u957F\u6309\u4EFB\u610F\u8282\u70B9\u6807\u8BB0\u4E3A\u4E3B\u7B14\u8BB0\u3002"));
      return;
    }
    let M = ze(this.app, this.notes, x);
    this.currentRoot = M, this._indexTree(M), Xe(M, this.depth), this._restoreExpanded(), this._draw(C, je(M, this.s), e);
  }
  _restoreExpanded() {
    for (let [e, s] of this._expandedMem) {
      let i = this._pathNodes ? this._pathNodes.get(e) : null;
      if (i) for (let a of i) a.expanded = s;
    }
  }
  _ensureSelectedVisible(e) {
    !this._selectedRootPaths || !this._selectedRootPaths.size || (/* @__PURE__ */ _(function s(i) {
      if (!i.children || !i.children.length) return !1;
      let a = !1;
      for (let n of i.children)
        n.note.file && this.has(n.note.file.path) && (a = !0), s.call(this, n) && (a = !0);
      return a && (i.expanded = !0), a;
    }, "expand")).call(this._selectedRootPaths, e);
  }
  _applyFilter() {
    let e = this._filterText || "";
    for (let s of this._nodeIndex.values())
      if (s._el)
        if (!e)
          s._el.classList.remove("lkm-dim"), s._el.classList.remove("lkm-highlight");
        else {
          let i = s.note.title.toLowerCase().includes(e);
          s._el.classList.toggle("lkm-dim", !i), s._el.classList.toggle("lkm-highlight", i);
        }
  }
  async _showPreview(e, s) {
    if (!e.note.file) return;
    this._previewCache || (this._previewCache = /* @__PURE__ */ new Map());
    let i = e.note.file.path, a = this._previewCache.get(i);
    if (a === void 0)
      try {
        let h = await this.app.vault.read(e.note.file), d = h.match(/^---\n[\s\S]*?\n---\n?/);
        a = d ? h.slice(d[0].length).trim() : h.trim(), a = a.split(`
`).slice(0, 20).join(`
`).trim(), a.length > 600 && (a = a.slice(0, 600) + "\u2026"), this._previewCache.set(i, a);
      } catch {
        return;
      }
    if (!a) return;
    this._hidePreview();
    let n = document.createElement("div");
    n.className = "lkm-preview";
    let o = document.createElement("div");
    o.className = "lkm-preview-title", o.textContent = e.note.title, n.appendChild(o);
    let c = document.createElement("div");
    n.appendChild(c), n.addEventListener("mouseenter", () => {
      this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null);
    }), n.addEventListener("mouseleave", () => {
      this._hidePreview();
    }), document.body.appendChild(n), this._previewEl = n, this._previewComp = new Bt(), this._previewComp.load(), await Rt.render(this.app, a, c, i, this._previewComp), this._positionPreview(s);
  }
  _positionPreview(e) {
    if (!this._previewEl) return;
    let s = this._previewEl, i = e.clientX + 14, a = e.clientY + 14, n = s.getBoundingClientRect(), o = window.innerWidth - n.width - 8, c = window.innerHeight - n.height - 8;
    s.style.left = Math.min(i, o) + "px", s.style.top = Math.min(a, c) + "px";
  }
  _hidePreview() {
    this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null), this._previewComp && (this._previewComp.unload(), this._previewComp = null), this._previewEl && (this._previewEl.remove(), this._previewEl = null);
  }
  _focus(e) {
    let s = this._nodeIndex.get(e);
    !s || !s.note.file || this._focusPath(s.note.file.path);
  }
  _focusPath(e) {
    e && ((e !== this.rootPath || this._multiRoot) && (this._history.push({ rootPath: this.rootPath, kwFile: this._kwFile, multiRoot: this._multiRoot, currentRoot: this._multiRoot ? this.currentRoot : null }), this._kwFile = null, this._multiRoot = !1, this.rootPath = e, this._expandedMem.clear(), this._view = null, this._selKey = null), this.render());
  }
  _back() {
    if (this._history.length) {
      let e = this._history.pop();
      this._kwFile = e.kwFile || null, this._multiRoot = e.multiRoot || !1, e.multiRoot && e.currentRoot ? (this.currentRoot = e.currentRoot, this.rootPath = null) : this.rootPath = e.rootPath, this._view = null, this._selKey = null, this.render();
    } else new v(t("\u6CA1\u6709\u53EF\u8FD4\u56DE\u7684\u8282\u70B9"));
  }
  _expandAll(e) {
    for (let s of this._nodeIndex.values())
      s.children.length && (s.expanded = e, this._expandedMem.set(s.note.file ? s.note.file.path : s.key, e));
    this.render();
  }
  _showShortcutHelp() {
    let e = new ge(this.app);
    e.onOpen = () => {
      let { contentEl: s } = e;
      s.addClass("lkm-multipick"), s.createEl("h3", { text: t("\u952E\u76D8\u5FEB\u6377\u952E") });
      let i = [
        ["\u2191 / \u2193", t("\u4E0A/\u4E0B\u5BFC\u822A\u8282\u70B9")],
        ["\u2190 / \u2192", t("\u5DE6\uFF1A\u6298\u53E0/\u5230\u7236\u8282\u70B9 \xB7 \u53F3\uFF1A\u5C55\u5F00/\u5230\u5B50\u8282\u70B9")],
        ["Space", t("\u5C55\u5F00/\u6298\u53E0\u5F53\u524D\u8282\u70B9")],
        ["Enter", t("\u6253\u5F00\u5F53\u524D\u8282\u70B9\u7B14\u8BB0")],
        ["Delete / Backspace", t("\u5220\u9664\u5F53\u524D\u8282\u70B9")],
        ["N", t("\u4E3A\u5F53\u524D\u8282\u70B9\u65B0\u589E\u5B50\u8282\u70B9")],
        ["B", t("\u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE")],
        ["/", t("\u6253\u5F00\u641C\u7D22")],
        ["Esc", t("\u53D6\u6D88\u9009\u4E2D / \u9000\u51FA\u6279\u91CF\u6A21\u5F0F")]
      ];
      for (let [n, o] of i) {
        let c = s.createDiv("lkm-shortcut-row");
        c.createEl("span", { cls: "lkm-shortcut-key", text: n }), c.createEl("span", { cls: "lkm-shortcut-desc", text: o });
      }
      let a = s.createDiv("lkm-multipick-btns");
      new R(a).addButton((n) => n.setButtonText(t("\u5173\u95ED")).onClick(() => e.close()));
    }, e.open();
  }
  _exportMenu(e) {
    let s = new Ne();
    s.addItem((a) => a.setTitle(t("\u5BFC\u51FA SVG")).setIcon("download").onClick(() => this._exportSVG())), s.addItem((a) => a.setTitle(t("\u5BFC\u51FA PNG")).setIcon("image").onClick(() => this._exportPNG())), s.addItem((a) => a.setTitle(t("\u5BFC\u51FA Markdown \u5927\u7EB2")).setIcon("document").onClick(() => this._exportMarkdown())), s.addItem((a) => a.setTitle(t("\u5BFC\u51FA Canvas")).setIcon("layout-grid").onClick(() => this._exportCanvas()));
    let i = e.getBoundingClientRect();
    s.showAtPosition({ x: i.left, y: i.bottom + 4 });
  }
  _getSVGString() {
    let e = this.contentEl.querySelector(".lkm-svg");
    if (!e)
      return new v(t("\u672A\u627E\u5230\u5BFC\u56FE\u5185\u5BB9")), null;
    let s = e.cloneNode(!0), i = e.getBBox(), a = 30, n = i.width + a * 2, o = i.height + a * 2;
    s.setAttribute("xmlns", "http://www.w3.org/2000/svg"), s.setAttribute("width", n), s.setAttribute("height", o), s.setAttribute("viewBox", i.x - a + " " + (i.y - a) + " " + n + " " + o);
    let c = this.contentEl.querySelector(".lkm-view") || this.contentEl, h = getComputedStyle(c), d = [
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
    for (let y of d) {
      let I = h.getPropertyValue(y).trim();
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
    let g = document.createElement("style");
    g.textContent = p, s.insertBefore(g, s.firstChild);
    let f = e.querySelectorAll(".lkm-card"), u = s.querySelectorAll(".lkm-card");
    for (let y = 0; y < f.length && y < u.length; y++) {
      let I = f[y], T = u[y], E = getComputedStyle(I), B = E.stroke, G = E.fill, D = E.strokeWidth;
      B && B !== "none" && T.setAttribute("stroke", B), G && G !== "none" && T.setAttribute("fill", G), D && T.setAttribute("stroke-width", D);
    }
    let S = e.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign"), x = s.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign");
    for (let y = 0; y < S.length && y < x.length; y++) {
      let I = getComputedStyle(S[y]), T = I.fill, E = I.fontSize;
      T && T !== "none" && x[y].setAttribute("fill", T), E && x[y].setAttribute("font-size", E);
    }
    let C = e.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill"), M = s.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill");
    for (let y = 0; y < C.length && y < M.length; y++) {
      let T = getComputedStyle(C[y]).fill;
      T && T !== "none" && M[y].setAttribute("fill", T);
    }
    let w = e.querySelectorAll(".lkm-edge"), F = s.querySelectorAll(".lkm-edge");
    for (let y = 0; y < w.length && y < F.length; y++) {
      let T = getComputedStyle(w[y]).stroke;
      T && T !== "none" && F[y].setAttribute("stroke", T);
    }
    return new XMLSerializer().serializeToString(s);
  }
  _exportSVG() {
    let e = this._getSVGString();
    if (!e) return;
    let i = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".svg";
    this.app.vault.create(i, e).then(
      () => new v(t("SVG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + i),
      (a) => new v(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a))
    );
  }
  _exportPNG() {
    let e = this._getSVGString();
    if (!e) return;
    let i = this.contentEl.querySelector(".lkm-svg").getBBox(), a = 30, n = i.width + a * 2, o = i.height + a * 2, c = new Image(), h = btoa(unescape(encodeURIComponent(e)));
    c.onload = () => {
      let d = document.createElement("canvas");
      d.width = n * 2, d.height = o * 2;
      let l = d.getContext("2d"), r = getComputedStyle(this.contentEl).getPropertyValue("--background-primary").trim() || "#ffffff";
      l.fillStyle = r, l.fillRect(0, 0, d.width, d.height), l.drawImage(c, 0, 0, d.width, d.height), d.toBlob((p) => {
        let f = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".png";
        p.arrayBuffer().then((u) => this.app.vault.createBinary(f, u).then(
          () => new v(t("PNG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + f),
          (S) => new v(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (S && S.message ? S.message : S))
        ));
      });
    }, c.onerror = () => new v(t("PNG \u5BFC\u51FA\u5931\u8D25")), c.src = "data:image/svg+xml;base64," + h;
  }
  _exportMarkdown() {
    let e = this.currentRoot;
    if (!e) {
      new v(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let s = [], i = /* @__PURE__ */ _((c, h) => {
      let d = h === 0 ? "# " : "  ".repeat(h) + "- ", l = c.note.status ? " [" + oe(c.note.status) + "]" : "", r = c.note.type ? " `" + ce(c.note.type) + "`" : "";
      s.push(d + (c.note.title || c.note.file?.name || "?") + r + l);
      for (let p of c.children || []) i(p, h + 1);
    }, "walk");
    i(e, 0);
    let a = s.join(`
`), o = "link-mindmap-outline-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".md";
    this.app.vault.create(o, a).then(
      () => new v(t("Markdown \u5927\u7EB2\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + o),
      (c) => new v(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (c && c.message ? c.message : c))
    );
  }
  _exportCanvas() {
    let e = this.currentRoot;
    if (!e) {
      new v(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let s = 300, i = 60, a = 180, n = 20, o = this.s.layoutDir === "v", c = [], h = [], d = /* @__PURE__ */ new Map(), l = 0, r = 0, p = /* @__PURE__ */ _((M) => {
      let w = (M.children || []).filter((F) => F.note.file);
      return w.length ? w.reduce((F, y) => F + p(y), 0) : 1;
    }, "subtreeSize"), g = /* @__PURE__ */ _((M, w, F) => {
      let y = (M.children || []).filter((G) => G.note.file), I = F, T = [];
      for (let G of y) {
        let D = p(G), O = g(G, w + 1, I);
        T.push(O), I += D;
      }
      let E, B;
      if (o ? (E = F * (s + a), B = w * (i + n)) : (E = w * (s + a), T.length ? B = (T[0].y + T[T.length - 1].y) / 2 : B = F * (i + n)), M.note.file) {
        let G = "n" + l++;
        d.set(M.key, G), c.push({
          id: G,
          type: "file",
          file: M.note.file.path,
          x: Math.round(E),
          y: Math.round(B),
          width: s,
          height: i
        });
      }
      return { x: E, y: B };
    }, "layout");
    g(e, 0, 0);
    let f = /* @__PURE__ */ _((M) => {
      for (let w of M.children || []) {
        let F = d.get(M.key), y = d.get(w.key);
        F && y && h.push({
          id: "e" + r++,
          fromNode: F,
          toNode: y,
          fromSide: o ? "bottom" : "right",
          toSide: o ? "top" : "left"
        }), f(w);
      }
    }, "collectEdges");
    if (f(e), !c.length) {
      new v(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u8282\u70B9"));
      return;
    }
    let S = JSON.stringify({ nodes: c, edges: h }, null, 2), C = "link-mindmap-canvas-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".canvas";
    this.app.vault.create(C, S).then(
      () => new v(t("Canvas \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + C),
      (M) => new v(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (M && M.message ? M.message : M))
    );
  }
  _parentPathsOf(e) {
    let s = [];
    for (let i of this.notes.values())
      if (i.file.path !== e)
        for (let a of i.childLinks) {
          let n = this.app.metadataCache.getFirstLinkpathDest(a, i.file.path);
          if (n && n.path === e) {
            s.push(i.file.path);
            break;
          }
        }
    return s;
  }
  _buildCrumbChain() {
    if (!this.rootPath) return [];
    let e = [], s = /* @__PURE__ */ new Set(), i = this.rootPath;
    for (; i && !s.has(i); ) {
      s.add(i);
      let a = this.notes.get(i);
      if (!a) break;
      e.unshift({ note: a });
      let n = this._parentPathsOf(i);
      i = n.length ? n[0] : null;
    }
    return e;
  }
  _up() {
    let e = this._selKey ? this._nodeIndex.get(this._selKey) : null, s = e && e.note.file ? e.note : this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!s || !s.file) {
      new v(t("\u6CA1\u6709\u53EF\u8DF3\u8F6C\u7684\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let i = this._parentPathsOf(s.file.path);
    if (!i.length) {
      new v("\u300C" + Z(s.title, 12) + t("\u300D\u6CA1\u6709\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let a = s.file.path, n = /* @__PURE__ */ _((c) => {
      this._focusPath(c);
      let h = [...this._nodeIndex.values()].find((d) => d.note.file && d.note.file.path === a);
      h && (this._selKey = h.key, this.render());
    }, "go");
    if (i.length === 1) {
      n(i[0]);
      return;
    }
    let o = i.map((c) => ({ label: (this.notes.get(c) || {}).title || c, path: c }));
    new Ee(this.app, o, (c) => n(c.path), t("\u8BE5\u8282\u70B9\u6709\u591A\u4E2A\u4E0A\u7EA7\uFF0C\u9009\u62E9\u8981\u524D\u5F80\u7684\u4E0A\u7EA7\u2026")).open();
  }
  locateFile(e, s) {
    if (!s && !this.s.autoLocate || !e || e.extension !== "md" || this._batchMode || this._mode === "dash") return;
    try {
      if (typeof this.containerEl.isShown == "function" && !this.containerEl.isShown()) return;
    } catch {
    }
    let i = null;
    for (let c of this._nodeIndex.values())
      c.note.file && c.note.file.path === e.path && (!i || !c.isAlias) && (i = c);
    if (!i) return;
    if (this._kwFile && this.currentRoot) {
      let c = this._findClone(this.currentRoot, e.path);
      if (c && this._cloneShown(c)) {
        this._selKey = c.key, this.render();
        return;
      }
    }
    this._kwFile = null, this._multiRoot = !1;
    let a = [];
    for (let c = i; c; c = c.parent) a.unshift(c);
    let n = a[0], o = !1;
    this.rootPath !== n.note.file.path && (this._history.push({ rootPath: this.rootPath, kwFile: this._kwFile, multiRoot: this._multiRoot, currentRoot: this._multiRoot ? this.currentRoot : null }), this.rootPath = n.note.file.path, o = !0);
    for (let c = 0; c < a.length; c++)
      c < a.length - 1 && !a[c].expanded && (o = !0), a[c].expanded = !0, this._expandedMem.set(a[c].note.file ? a[c].note.file.path : a[c].key, !0);
    !o && this._selKey === i.key || (this._selKey = i.key, this.render({ centerPath: e.path }));
  }
  _findClone(e, s) {
    if (!e) return null;
    if (e.note.file && e.note.file.path === s) return e;
    for (let i of e.children || []) {
      let a = this._findClone(i, s);
      if (a) return a;
    }
    return null;
  }
  _cloneShown(e) {
    let s = e;
    for (; s && s.parent; ) {
      if (!s.parent.expanded) return !1;
      s = s.parent;
    }
    return !0;
  }
  _select(e) {
    this._selKey = e, this.render();
  }
  _copyLink(e) {
    if (!e || !e.note.file) return;
    let s = "[[" + e.note.file.basename + "]]";
    navigator.clipboard.writeText(s).then(
      () => new v(t("\u5DF2\u590D\u5236\uFF1A") + s),
      () => new v(t("\u590D\u5236\u5931\u8D25"))
    );
  }
  _copySubtree(e) {
    if (!e) return;
    let s = [], i = /* @__PURE__ */ _((a, n) => {
      let o = n === 0 ? "" : "  ".repeat(n) + "- ";
      s.push(o + "[[" + (a.note.file ? a.note.file.basename : a.note.title) + "]]");
      for (let c of a.children || []) i(c, n + 1);
    }, "walk");
    i(e, 0), navigator.clipboard.writeText(s.join(`
`)).then(
      () => new v(t("\u5DF2\u590D\u5236\u5B50\u6811\uFF08") + s.length + t(" \u4E2A\u8282\u70B9\uFF09")),
      () => new v(t("\u590D\u5236\u5931\u8D25"))
    );
  }
  _renameNode(e) {
    if (!e || !e.note.file) {
      new v(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    new Ot(this.app, e.note.file.basename, async (s) => {
      try {
        let i = e.note.file.basename, a = e.note.file.parent ? e.note.file.parent.path : "", n = te((a ? a + "/" : "") + ve(s) + ".md");
        if (n === e.note.file.path) return;
        if (this.app.vault.getAbstractFileByPath(n)) {
          new v(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + ve(s));
          return;
        }
        await this.app.vault.rename(e.note.file, n);
        let o = ve(s), c = this.s.linkField || "children", h = this.s.backField || "parent";
        for (let l of this.notes.values())
          l.file.path !== n && await this.app.fileManager.processFrontMatter(l.file, (r) => {
            let p = Re(r[c]), g = !1, f = p.map((u) => ke(u) === i ? (g = !0, "[[" + o + "]]") : u);
            g && (r[c] = f), r[h] != null && ke(r[h]) === i && (r[h] = o);
          });
        let d = this.s.titleField || "title";
        await this.app.fileManager.processFrontMatter(e.note.file, (l) => {
          l[d] != null && (l[d] = o);
        }), new v(t("\u5DF2\u91CD\u547D\u540D\u4E3A ") + o), await this.rebuild(!0);
      } catch (i) {
        new v(t("\u91CD\u547D\u540D\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _renameNode:", i);
      }
    }).open();
  }
  _subtreePaths(e) {
    let s = /* @__PURE__ */ new Set();
    return (/* @__PURE__ */ _((function i(a) {
      a.note.file && s.add(a.note.file.path), a.children.forEach(i);
    }), "walk"))(e), s;
  }
  _deleteNode(e) {
    if (!e || !e.note.file) {
      new v(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (e.isAlias) {
      if (!e.parent || !e.parent.note.file) {
        new v(t("\u65E0\u6CD5\u786E\u5B9A\u8BE5\u6302\u70B9\u7684\u7236\u8282\u70B9"));
        return;
      }
      new Le(
        this.app,
        t("\u79FB\u9664\u5173\u8054"),
        "\u300C" + Z(e.note.title, 16) + t(`\u300D\u662F\u91CD\u590D\u8282\u70B9\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\uFF09\u3002
\u672C\u6B21\u53EA\u79FB\u9664\u4ECE\u300C`) + Z(e.parent.note.title, 16) + t("\u300D\u5230\u5B83\u7684\u5173\u8054\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\u3002"),
        async () => {
          try {
            await _e(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), this._selKey = null, new v(t("\u5DF2\u79FB\u9664\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (a) {
            new v(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a)), console.error("[link-mindmap] removeLink:", a);
          }
        }
      ).open();
      return;
    }
    let s = e.children.length, i = new ge(this.app);
    i.onOpen = () => {
      let { contentEl: a } = i;
      a.createEl("h3", { text: t("\u5220\u9664\u8282\u70B9") }), a.createEl("p", { text: "\u300C" + Z(e.note.title, 20) + "\u300D" + (s ? t("\uFF08\u542B ") + s + t(" \u4E2A\u5B50\u8282\u70B9\uFF09") : ""), cls: "lkm-modal-sub" });
      let n = a.createDiv("lkm-confirm-row");
      n.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => i.close());
      let c = n.createEl("button", { cls: "lkm-btn", text: t("\u79FB\u9664\u5F53\u524D\u5173\u8054") });
      c.title = e.parent && e.parent.note.file ? t("\u53EA\u79FB\u9664\u5F53\u524D\u7236\u8282\u70B9\u5230\u5B83\u7684\u94FE\u63A5\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559") : t("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"), (!e.parent || !e.parent.note.file) && (c.disabled = !0), c.addEventListener("click", () => {
        if (!e.parent || !e.parent.note.file) {
          new v(t("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"));
          return;
        }
        i.close(), (async () => {
          try {
            await _e(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), this._selKey = null, new v(t("\u5DF2\u79FB\u9664\u4ECE\u300C") + Z(e.parent.note.title, 14) + t("\u300D\u5230\u300C") + Z(e.note.title, 14) + t("\u300D\u7684\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (l) {
            new v(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l)), console.error("[link-mindmap] removeLink:", l);
          }
        })();
      });
      let h = n.createEl("button", { cls: "lkm-btn", text: t("\u79FB\u9664\u6240\u6709\u5173\u8054") });
      h.title = t("\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559"), h.addEventListener("click", () => {
        i.close(), (async () => {
          try {
            let l = e.note.file.path;
            for (let r of this.notes.values())
              r.file.path !== l && r.childLinks.length && await _e(this.app, r.file, this.s.linkField, l);
            this._selKey = null, new v(t("\u5DF2\u79FB\u9664\u6240\u6709\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (l) {
            new v(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l)), console.error("[link-mindmap] removeLink:", l);
          }
        })();
      });
      let d = n.createEl("button", { cls: "lkm2-btn-danger", text: t("\u5220\u9664\u6587\u4EF6") });
      d.title = t("\u79FB\u5165\u56DE\u6536\u7AD9\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664"), d.addEventListener("click", () => {
        if (!s) {
          i.close(), this._doDelete(e);
          return;
        }
        let l = new ge(this.app);
        l.onOpen = () => {
          let { contentEl: r } = l;
          r.createEl("h3", { text: t("\u5220\u9664\u5B50\u8282\u70B9") }), r.createEl("p", { text: "\u300C" + Z(e.note.title, 20) + t("\u300D\u542B ") + s + t(" \u4E2A\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u4E00\u5E76\u5220\u9664\uFF1F"), cls: "lkm-modal-sub" });
          let p = r.createDiv("lkm-confirm-row");
          p.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => l.close()), p.createEl("button", { cls: "lkm-btn", text: t("\u4EC5\u5220\u6B64\u8282\u70B9") }).addEventListener("click", () => {
            l.close(), i.close(), this._doDelete(e);
          }), p.createEl("button", { cls: "lkm2-btn-danger", text: t("\u5168\u90E8\u5220\u9664") }).addEventListener("click", () => {
            l.close(), i.close(), this._doDelete(e, !0);
          });
        }, l.onClose = () => l.contentEl.empty(), l.open();
      });
    }, i.onClose = () => i.contentEl.empty(), i.open();
  }
  async _doDelete(e, s) {
    try {
      let i = s ? this._subtreePaths(e) : /* @__PURE__ */ new Set([e.note.file.path]);
      for (let n of this.notes.values())
        if (!i.has(n.file.path))
          for (let o of i)
            n.childLinks.length && await _e(this.app, n.file, this.s.linkField, o);
      for (let n of i) {
        let o = this.app.vault.getAbstractFileByPath(n);
        o && o.path && await this.app.vault.trash(o, !0);
      }
      this._selKey = null;
      let a = i.size;
      new v(t("\u5DF2\u5220\u9664\u300C") + Z(e.note.title, 16) + "\u300D" + (a > 1 ? t("\uFF08\u542B\u5B50\u8282\u70B9\u5171 ") + a + t(" \u4E2A\u6587\u4EF6\uFF09") : "") + t("\uFF08\u53EF\u5728\u56DE\u6536\u7AD9\u6062\u590D\uFF09")), await this.rebuild(!0);
    } catch (i) {
      new v(t("\u5220\u9664\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _deleteNode:", i);
    }
  }
  _showNodeMenu(e, s) {
    if (!e || !e.note.file) return;
    let i = new Ne();
    i.addItem((n) => n.setTitle(t("\u6253\u5F00\u7B14\u8BB0")).setIcon("file-text").onClick(() => {
      this.app.workspace.getLeaf(!0).openFile(e.note.file);
    })), i.addItem((n) => n.setTitle(t("\u65B0\u589E\u5B50\u8282\u70B9")).setIcon("plus").onClick(() => this.createChild(e))), i.addItem((n) => n.setTitle(t("\u805A\u7126\u5230\u6B64\u8282\u70B9")).setIcon("focus").onClick(() => this._focus(e.key)));
    let a = this._parentPathsOf(e.note.file.path);
    if (i.addItem((n) => n.setTitle(t("\u8DF3\u5230\u4E0A\u7EA7")).setIcon("arrow-up").onClick(() => this._up())), a.length > 1)
      for (let n of a) {
        let o = this.notes.get(n);
        i.addItem((c) => c.setTitle("  \u21B3 " + Z(o ? o.title : n, 20)).setIcon("arrow-up").onClick(() => {
          this._focusPath(n);
          let h = [...this._nodeIndex.values()].find((d) => d.note.file && d.note.file.path === e.note.file.path);
          h && (this._selKey = h.key, this.render());
        }));
      }
    i.addSeparator(), i.addItem((n) => n.setTitle(t("\u4FEE\u6539\u72B6\u6001")).setIcon("circle-dot").onClick(() => this._setStatusDialog(e))), i.addItem((n) => n.setTitle(e.note.zk ? t("\u53D6\u6D88\u4E3B\u7B14\u8BB0") : t("\u6807\u8BB0\u4E3B\u7B14\u8BB0")).setIcon("star").onClick(() => this._toggleZk(e))), i.addItem((n) => n.setTitle(t("\u4FEE\u6539\u7C7B\u578B")).setIcon("tag").onClick(() => this._setTypeDialog(e))), i.addItem((n) => n.setTitle(t("\u4FEE\u6539\u65E5\u671F")).setIcon("calendar").onClick(() => this._setDateDialog(e))), e.children.length && i.addItem((n) => n.setTitle(e.expanded ? t("\u6298\u53E0\u5B50\u8282\u70B9") : t("\u5C55\u5F00\u5B50\u8282\u70B9")).setIcon(e.expanded ? "chevron-down" : "chevron-right").onClick(() => {
      e.expanded = !e.expanded, this._expandedMem.set(e.note.file ? e.note.file.path : e.key, e.expanded), this.render();
    })), i.addSeparator(), i.addItem((n) => n.setTitle(t("\u91CD\u547D\u540D")).setIcon("pencil").onClick(() => this._renameNode(e))), i.addItem((n) => n.setTitle(t("\u590D\u5236\u94FE\u63A5")).setIcon("copy").onClick(() => this._copyLink(e))), i.addItem((n) => n.setTitle(t("\u590D\u5236\u5B50\u6811\u5927\u7EB2")).setIcon("list").onClick(() => this._copySubtree(e))), i.addItem((n) => n.setTitle(t("\u79FB\u52A8\u5230\u7236\u5361")).setIcon("corner-up-right").onClick(() => this._moveNodeDialog(e))), i.addItem((n) => n.setTitle(t("\u540C\u7EA7\u4E4B\u524D")).setIcon("arrow-up").onClick(() => this._moveSiblingDialog(e, !1))), i.addItem((n) => n.setTitle(t("\u540C\u7EA7\u4E4B\u540E")).setIcon("arrow-down").onClick(() => this._moveSiblingDialog(e, !0))), i.addSeparator(), i.addItem((n) => n.setTitle(e.isAlias ? t("\u79FB\u9664\u5173\u8054\uFF08\u4FDD\u7559\u6587\u4EF6\uFF09") : t("\u5220\u9664\u8282\u70B9")).setIcon("trash").onClick(() => this._deleteNode(e))), s && typeof s.preventDefault == "function" ? i.showAtMouseEvent(s) : s && s.clientX !== void 0 && i.showAtPosition({ x: s.clientX, y: s.clientY });
  }
  _isDescendant(e, s) {
    return this._subtreePaths(e).has(s);
  }
  _moveNodeDialog(e) {
    if (!e || !e.note.file) return;
    let s = this._subtreePaths(e), i = [...this.notes.values()].filter((a) => a.file.path !== e.note.file.path && !s.has(a.file.path)).sort((a, n) => a.title.localeCompare(n.title, "zh")).map((a) => ({ label: a.title, path: a.file.path }));
    if (!i.length) {
      new v(t("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new Qe(this.app, i, (a) => this._moveNode(e, a.path)).open();
  }
  async _moveNode(e, s) {
    let i = e.note;
    if (!i.file) return;
    if (this._subtreePaths(e).has(s)) {
      new v(t("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let a = this.notes.get(s);
    if (!a) {
      new v(t("\u76EE\u6807\u7236\u7B14\u8BB0\u4E0D\u5B58\u5728"));
      return;
    }
    try {
      e.parent && e.parent.note.file && await _e(this.app, e.parent.note.file, this.s.linkField, i.file.path), await He(this.app, a.file, this.s.linkField, i.file.basename), new v(t("\u5DF2\u79FB\u52A8\u300C") + Z(i.title, 14) + t("\u300D\u5230\u300C") + Z(a.title, 14) + "\u300D"), await new Promise((n) => setTimeout(n, 300)), await this.rebuild(!0);
    } catch (n) {
      new v(t("\u79FB\u52A8\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
    }
  }
  _moveSiblingDialog(e, s) {
    if (!e || !e.parent || !e.parent.note.file) {
      new v(t("\u6839\u8282\u70B9\u6CA1\u6709\u540C\u7EA7\u8282\u70B9"));
      return;
    }
    let i = e.parent.children.filter((n) => n !== e);
    if (!i.length) {
      new v(t("\u6CA1\u6709\u540C\u7EA7\u8282\u70B9\u53EF\u63D2\u5165"));
      return;
    }
    let a = i.map((n) => ({ label: n.note.title, path: n.note.file.path }));
    new Qe(this.app, a, (n) => this._reorderSiblings(e, n.path, s)).open();
  }
  async _reorderSiblings(e, s, i) {
    if (!e.parent || !e.parent.note.file) {
      new v(t("\u65E0\u6CD5\u6392\u5E8F\uFF1A\u591A\u9009\u6839\u8282\u70B9\u95F4\u4E0D\u80FD\u8C03\u6574\u987A\u5E8F"));
      return;
    }
    let a = e.parent.note.file;
    try {
      await this.app.fileManager.processFrontMatter(a, (n) => {
        let o = this.s.linkField, c = Re(n[o]), h = /* @__PURE__ */ _((p) => c.findIndex((g) => {
          let f = this.app.metadataCache.getFirstLinkpathDest(ke(g), a.path);
          return f && f.path === p;
        }), "idxOf"), d = h(e.note.file.path);
        if (d < 0) return;
        let l = c.splice(d, 1)[0], r = h(s);
        if (r < 0) {
          c.splice(d, 0, l);
          return;
        }
        c.splice(i ? r + 1 : r, 0, l), n[o] = c;
      }), await new Promise((n) => setTimeout(n, 300)), await this.rebuild(!0);
    } catch (n) {
      new v(t("\u540C\u7EA7\u79FB\u52A8\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
    }
  }
  async _moveAndReorder(e, s, i) {
    if (!s.parent || !s.parent.note.file) {
      new v(t("\u65E0\u6CD5\u79FB\u52A8\u5230\u8BE5\u4F4D\u7F6E"));
      return;
    }
    if (this._subtreePaths(e).has(s.parent.note.file.path)) {
      new v(t("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let a = s.parent.note.file;
    try {
      if (e.parent && e.parent.note.file && await _e(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), await this.app.fileManager.processFrontMatter(a, (n) => {
        let o = this.s.linkField, c = Re(n[o]);
        c.some((g) => ke(g) === e.note.file.basename) || c.push("[[" + e.note.file.basename + "]]");
        let d = /* @__PURE__ */ _((g) => c.findIndex((f) => {
          let u = this.app.metadataCache.getFirstLinkpathDest(ke(f), a.path);
          return u && u.path === g;
        }), "idxOf"), l = d(e.note.file.path);
        if (l < 0) return;
        let r = c.splice(l, 1)[0], p = d(s.note.file.path);
        if (p < 0) {
          c.splice(l, 0, r);
          return;
        }
        c.splice(i ? p + 1 : p, 0, r), n[o] = c;
      }), this.s.autoAddBackLink) {
        let n = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(e.note.file, (o) => {
          o[n] = a.basename;
        });
      }
      new v(t("\u5DF2\u79FB\u52A8\u300C") + Z(e.note.title, 14) + t("\u300D\u5230\u300C") + Z(s.parent.note.title, 14) + "\u300D" + t(i ? "\u4E4B\u540E" : "\u4E4B\u524D")), await new Promise((n) => setTimeout(n, 300)), await this.rebuild(!0);
    } catch (n) {
      new v(t("\u79FB\u52A8\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
    }
  }
  _wouldCycle(e, s) {
    if (e === s) return !0;
    let i = [s], a = /* @__PURE__ */ new Set(), n = 0;
    for (; i.length && n++ < 5e3; ) {
      let o = i.pop();
      if (o === e) return !0;
      if (a.has(o)) continue;
      a.add(o);
      let c = this.notes.get(o);
      if (c)
        for (let h of c.childLinks) {
          let d = this.app.metadataCache.getFirstLinkpathDest(h, c.file.path);
          d && this.notes.has(d.path) && i.push(d.path);
        }
    }
    return !1;
  }
  async _addRelation(e, s) {
    let i = e && e.note;
    if (!i || !i.file) {
      new v(t("\u6E90\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (!s || !s.file) {
      new v(t("\u76EE\u6807\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (i.file.path === s.file.path) {
      new v(t("\u4E0D\u80FD\u5173\u8054\u5230\u81EA\u5DF1"));
      return;
    }
    if (it(this.app, this.notes, i, "child").some((a) => a.file.path === s.file.path)) {
      new v("\u300C" + Z(i.title, 12) + t("\u300D\u5DF2\u5173\u8054\u5230\u300C") + Z(s.title, 12) + t("\u300D\uFF0C\u65E0\u9700\u91CD\u590D"));
      return;
    }
    if (this._wouldCycle(i.file.path, s.file.path)) {
      new v(t("\u4E0D\u80FD\u5EFA\u7ACB\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF\uFF08\u76EE\u6807\u5DF2\u662F\u300C") + Z(i.title, 12) + t("\u300D\u7684\u4E0A\u7EA7\uFF09"));
      return;
    }
    try {
      if (await He(this.app, i.file, this.s.linkField, s.file.basename), this.s.autoAddBackLink) {
        let a = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(s.file, (n) => {
          let o = Re(n[a]);
          o.some((h) => ke(h) === i.file.basename) || o.push(i.file.basename), o.length && (n[a] = o);
        });
      }
      new v(t("\u5DF2\u5EFA\u7ACB\u5173\u8054\uFF1A") + Z(i.title, 12) + " \u2192 " + Z(s.title, 12)), await new Promise((a) => setTimeout(a, 300)), await this.rebuild(!0);
    } catch (a) {
      new v(t("\u5EFA\u7ACB\u5173\u8054\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
    }
  }
  _toggleBatch() {
    this._batchMode = !this._batchMode, this._batchMode || this._selected.clear(), this.render();
  }
  _toggleSelect(e) {
    this._selected.has(e) ? this._selected.delete(e) : this._selected.add(e), this.render();
  }
  _batchMoveDialog() {
    let e = [...this._selected];
    if (!e.length) {
      new v(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = e.map((n) => this._nodeIndex.get(n)).filter(Boolean), i = /* @__PURE__ */ new Set();
    s.forEach((n) => this._subtreePaths(n).forEach((o) => i.add(o)));
    let a = [...this.notes.values()].filter((n) => !i.has(n.file.path)).sort((n, o) => n.title.localeCompare(o.title, "zh")).map((n) => ({ label: n.title, path: n.file.path }));
    if (!a.length) {
      new v(t("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new Qe(this.app, a, async (n) => {
      let o = this.notes.get(n.path), c = 0;
      for (let h of s)
        if (h.note.file)
          try {
            h.parent && h.parent.note.file && await _e(this.app, h.parent.note.file, this.s.linkField, h.note.file.path), await He(this.app, o.file, this.s.linkField, h.note.file.basename), c++;
          } catch {
          }
      new v(t("\u6279\u91CF\u79FB\u52A8\u5B8C\u6210\uFF1A") + c + t(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchDelete() {
    let e = [...this._selected];
    if (!e.length) {
      new v(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = e.map((c) => this._nodeIndex.get(c)).filter((c) => c && c.note.file), i = s.filter((c) => !c.isAlias), a = new Set(i.map((c) => c.note.file.path)), n = s.filter((c) => c.isAlias && !a.has(c.note.file.path)), o = "";
    if (i.length && (o += t("\u5C06\u628A ") + i.length + t(" \u7BC7\u7B14\u8BB0\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u7684\u94FE\u63A5\u91CC\u79FB\u9664\u3002")), n.length && (o += (o ? " " : "") + t("\u53E6\u5C06\u79FB\u9664 ") + n.length + t(" \u4E2A\u989D\u5916\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09\u3002")), !o) {
      new v(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    new Le(this.app, t("\u6279\u91CF\u5220\u9664"), o, async () => {
      let c = 0;
      for (let h of n)
        try {
          h.parent && h.parent.note.file && (await _e(this.app, h.parent.note.file, this.s.linkField, h.note.file.path), c++);
        } catch {
        }
      for (let h of i)
        try {
          let d = h.note.file;
          for (let l of this.notes.values())
            l.file.path !== d.path && l.childLinks.length && await _e(this.app, l.file, this.s.linkField, d.path);
          await this.app.vault.trash(d, !0), c++;
        } catch {
        }
      new v(t("\u5DF2\u5904\u7406 ") + c + t(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchSetType() {
    if (![...this._selected].length) {
      new v(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = this.s.typeColors || {}, i = Object.keys(s), a = [{ label: t("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let n of i) a.push({ label: n, path: n });
    new Ee(this.app, a, (n) => this._batchSetTypeDo(n.path), t("\u6279\u91CF\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _batchSetTypeDo(e) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new v(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let a = this.s.typeField || "type", n = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (c) => {
          e ? c[a] = e : delete c[a];
        }), n++;
      } catch (c) {
        console.error("[link-mindmap] _batchSetTypeDo:", c);
      }
    new v(t("\u5DF2\u4FEE\u6539 ") + n + t(" \u4E2A\u8282\u70B9\u7C7B\u578B\u4E3A\u300C") + (e || t("\u65E0\u7C7B\u578B")) + "\u300D"), await this.rebuild(!0);
  }
  _batchSetStatus() {
    if (![...this._selected].length) {
      new v(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = this.s.statusColors || {}, i = Object.keys(s), a = [{ label: t("\u65E0\u72B6\u6001\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let n of i) a.push({ label: oe(n), path: n });
    new Ee(this.app, a, (n) => this._batchSetStatusDo(n.path), t("\u6279\u91CF\u9009\u62E9\u72B6\u6001\u2026")).open();
  }
  async _batchSetStatusDo(e) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new v(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let a = this.s.statusField || "status", n = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (c) => {
          e ? c[a] = e : delete c[a];
        }), n++;
      } catch (c) {
        console.error("[link-mindmap] _batchSetStatusDo:", c);
      }
    new v(t("\u5DF2\u4FEE\u6539 ") + n + t(" \u4E2A\u8282\u70B9\u72B6\u6001\u4E3A\u300C") + (e ? oe(e) : t("\u65E0\u72B6\u6001")) + "\u300D"), await this.rebuild(!0);
  }
  async _batchSetMain(e) {
    let s = [...this._selected];
    if (!s.length) {
      new v(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let i = s.map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new v(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let a = this.s.zkField || "main", n = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (c) => {
          c[a] = e;
        }), n++;
      } catch (c) {
        console.error("[link-mindmap] _batchSetMain:", c);
      }
    new v(t("\u5DF2") + t(e ? "\u6807\u8BB0\u4E3B\u7B14\u8BB0" : "\u53D6\u6D88\u4E3B\u7B14\u8BB0") + " " + n + t(" \u4E2A\u8282\u70B9")), await this.rebuild(!0);
  }
  _setStatusDialog(e) {
    if (!e || !e.note.file) return;
    let s = this.s.statusColors || {}, i = Object.keys(s), a = [{ label: t("\u65E0\u72B6\u6001\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let n of i) a.push({ label: oe(n) + (e.note.status === n ? " \u2713" : ""), path: n });
    new Ee(this.app, a, (n) => this._setStatus(e, n.path), t("\u9009\u62E9\u72B6\u6001\u2026")).open();
  }
  async _setStatus(e, s) {
    if (e.note.file)
      try {
        let i = this.s.statusField || "status";
        await this.app.fileManager.processFrontMatter(e.note.file, (a) => {
          s ? a[i] = s : delete a[i];
        }), new v(t("\u5DF2\u4FEE\u6539\u72B6\u6001\uFF1A") + (s ? oe(s) : t("\u65E0\u72B6\u6001")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new v(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
      }
  }
  async _toggleZk(e) {
    if (e.note.file)
      try {
        let s = !1;
        await this.app.fileManager.processFrontMatter(e.note.file, (i) => {
          let a = this.s.zkField || "main";
          s = !(i[a] === !0 || String(i[a]) === "true"), i[a] = s;
        }), new v(t(s ? "\u5DF2\u6807\u8BB0\u4E3B\u7B14\u8BB0\uFF1A" : "\u5DF2\u53D6\u6D88\u4E3B\u7B14\u8BB0\uFF1A") + e.note.title), await this.rebuild(!0);
      } catch (s) {
        new v(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
      }
  }
  _setTypeDialog(e) {
    if (!e || !e.note.file) return;
    let s = this.s.typeColors || {}, i = Object.keys(s), a = [{ label: t("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let n of i) a.push({ label: ce(n) + (e.note.type === n ? " \u2713" : ""), path: n });
    new Ee(this.app, a, (n) => this._setType(e, n.path), t("\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _setType(e, s) {
    if (e.note.file)
      try {
        let i = this.s.typeField || "type";
        await this.app.fileManager.processFrontMatter(e.note.file, (a) => {
          s ? a[i] = s : delete a[i];
        }), new v(t("\u5DF2\u4FEE\u6539\u7C7B\u578B\uFF1A") + (s || t("\u65E0\u7C7B\u578B")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new v(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setType:", i);
      }
  }
  _setDateDialog(e) {
    if (!e || !e.note.file) return;
    let s = new ge(this.app);
    s.onOpen = () => {
      let { contentEl: i } = s;
      i.addClass("lkm-multipick"), i.createEl("h3", { text: t("\u4FEE\u6539\u65E5\u671F") }), i.createEl("p", { text: "\u300C" + Z(e.note.title, 20) + t("\u300D\u5F53\u524D\u65E5\u671F\uFF1A") + (e.note.date || t("\u65E0")), cls: "lkm-modal-sub" });
      let a = i.createEl("input", { type: "date", cls: "lkm-multipick-input" });
      a.value = e.note.date || "";
      let n = i.createDiv("lkm-multipick-btns");
      new R(n).addButton((o) => o.setButtonText(t("\u786E\u5B9A")).setCta().onClick(() => {
        let c = a.value || "";
        s.close(), this._setDate(e, c);
      })).addButton((o) => o.setButtonText(t("\u6E05\u9664")).onClick(() => {
        s.close(), this._setDate(e, "");
      })).addButton((o) => o.setButtonText(t("\u53D6\u6D88")).onClick(() => s.close())), a.focus();
    }, s.onClose = () => s.contentEl.empty(), s.open();
  }
  async _setDate(e, s) {
    if (e.note.file)
      try {
        let i = this.s.dateField || "date";
        await this.app.fileManager.processFrontMatter(e.note.file, (a) => {
          s ? a[i] = s : delete a[i];
        }), new v(t("\u5DF2\u4FEE\u6539\u65E5\u671F\uFF1A") + (s || t("\u65E0")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new v(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setDate:", i);
      }
  }
  openRootPicker() {
    let e = [...this.notes.values()].filter((i) => i.zk).sort((i, a) => i.title.localeCompare(a.title, "zh")), s = e.length ? e : [...this.notes.values()].filter((i) => !this.referenced.has(i.file.path));
    if (!s.length) {
      new v(t("\u6CA1\u6709\u4E3B\u7B14\u8BB0\uFF08main: true\uFF09"));
      return;
    }
    new Ee(
      this.app,
      s.map((i) => ({ label: i.title, path: i.file.path })),
      (i) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = i.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      t("\u9009\u62E9\u4E3B\u7B14\u8BB0\u2026")
    ).open();
  }
  openNoteSearch() {
    let e = [...this.notes.values()].sort((s, i) => s.title.localeCompare(i.title, "zh"));
    if (!e.length) {
      new v(t("\u6CA1\u6709\u53EF\u641C\u7D22\u7684\u7B14\u8BB0"));
      return;
    }
    new Ee(
      this.app,
      e.map((s) => ({ label: s.title, path: s.file.path })),
      (s) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = s.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      t("\u641C\u7D22\u7B14\u8BB0\u2026")
    ).open();
  }
  openMultiPick() {
    let e = [...this.notes.values()].sort((o, c) => (c.file.stat.ctime || 0) - (o.file.stat.ctime || 0));
    if (!e.length) {
      new v(t("\u6CA1\u6709\u53EF\u9009\u7684\u7B14\u8BB0"));
      return;
    }
    let s = [];
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length)
      s = this.currentRoot.children.map((o) => o.note.file ? o.note.file.path : null).filter(Boolean);
    else if (this._selKey) {
      let o = this._nodeIndex.get(this._selKey);
      o && o.note.file && s.push(o.note.file.path);
    }
    let i = Object.keys(this.s.typeColors || {}), a = this.s.statusColors || {}, n = e.map((o) => ({
      label: o.title,
      path: o.file.path,
      isMain: o.zk,
      type: o.type || "",
      status: o.status || "",
      orphan: !o.childLinks.length && !this.referenced.has(o.file.path)
    }));
    new At(
      this.app,
      n,
      (o) => this._showMultiRoot(o),
      s,
      i,
      a
    ).open();
  }
  _buildMultiRootTree(e, s) {
    let i = /* @__PURE__ */ new Set(), a = e.filter((r) => i.has(r.file.path) ? !1 : (i.add(r.file.path), !0)), n = a.map((r) => ze(this.app, this.notes, r)), o = n.map((r) => {
      let p = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ _(function g(f) {
        f.note.file && p.add(f.note.file.path), f.children.forEach(g);
      }, "collect"))(r), p;
    }), c = a.map((r) => r.file.path), h = [], d = [];
    for (let r = 0; r < n.length; r++) {
      let p = !1;
      for (let g = 0; g < n.length; g++)
        if (r !== g && o[g].has(c[r])) {
          p = !0;
          break;
        }
      p || (h.push(n[r]), d.push(c[r]));
    }
    let l = {
      note: { file: null, title: s, zk: !1, status: "", type: "", date: "", childLinks: [], parentLinks: [] },
      parent: null,
      children: h,
      expanded: !0,
      isAlias: !1,
      key: "#root"
    };
    for (let r of h) r.parent = l;
    return { virtualRoot: l, rootPaths: d, allSelectedPaths: c };
  }
  _showMultiRoot(e) {
    let s = e.map((o) => this.notes.get(o)).filter(Boolean);
    if (!s.length) {
      new v(t("\u6CA1\u6709\u6709\u6548\u7684\u7B14\u8BB0"));
      return;
    }
    let { virtualRoot: i, rootPaths: a, allSelectedPaths: n } = this._buildMultiRootTree(s, t("\u591A\u9009\u5BFC\u56FE\uFF08") + s.length + t(" \u7BC7\uFF09"));
    this._multiRootPaths = n, this._selectedRootPaths = /* @__PURE__ */ new Set(n), this._kwFile = null, this._multiRoot = !0, this.rootPath = null, this.currentRoot = i, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render({ fit: !0 });
  }
  _renderHelpContent(e) {
    e.createEl("h3", { text: t("\u6B22\u8FCE\u4F7F\u7528\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE") }), e.createEl("p", { text: t("\u7ED3\u5408\u5362\u66FC\u7B14\u8BB0\u7684\u5C42\u7EA7\u601D\u60F3\uFF0C\u5229\u7528 Obsidian \u5F3A\u5927\u7684\u53CC\u94FE\u529F\u80FD\u5EFA\u7ACB\u7B14\u8BB0\u95F4\u7684\u7236\u5B50\u5173\u7CFB\uFF0C\u53D6\u6D88\u4E86\u7F16\u53F7\u2014\u2014\u6BCF\u4E2A\u8282\u70B9\u5C31\u662F\u4E00\u7BC7\u7B14\u8BB0\uFF0C\u901A\u8FC7 frontmatter \u7684 children/parent \u94FE\u63A5\u81EA\u7136\u5173\u8054\uFF0C\u65E0\u9700\u7EF4\u62A4\u4EFB\u4F55\u7F16\u53F7\u3002"), cls: "lkm-guide-intro" });
    let s = e.createDiv("lkm-guide-steps");
    s.createEl("h4", { text: t("\u5FEB\u901F\u4E0A\u624B") });
    let i = [
      ["\u2460", t("\u521B\u5EFA\u7B14\u8BB0"), t("\u70B9\u51FB\u4E0B\u65B9\u300C\u521B\u5EFA\u7B14\u8BB0\u300D\uFF0C\u8F93\u5165\u6807\u9898\u5373\u53EF\u3002\u521B\u5EFA\u65F6\u53EF\u52FE\u9009\u300C\u4E3B\u7B14\u8BB0\u300D\u4F5C\u4E3A\u5BFC\u56FE\u5165\u53E3\u3002")],
      ["\u2461", t("\u6DFB\u52A0\u5B50\u8282\u70B9"), t("\u521B\u5EFA\u540E\uFF0C\u53F3\u952E/\u957F\u6309\u8282\u70B9 \u2192\u300C\u65B0\u589E\u5B50\u8282\u70B9\u300D\uFF0C\u81EA\u52A8\u5728\u7236\u7B14\u8BB0\u5199\u5165 children \u94FE\u63A5\u3002")],
      ["\u2462", t("\u67E5\u770B\u5BFC\u56FE"), t("\u4E3B\u7B14\u8BB0\u81EA\u52A8\u5C55\u5F00\u4E3A\u5BFC\u56FE\u6811\u3002\u62D6\u52A8\u8282\u70B9\u53EF\u79FB\u52A8\uFF0C\u62D6\u52A8\u53F3\u4FA7\u7AEF\u53E3\u53EF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\u3002")]
    ];
    for (let [u, S, x] of i) {
      let C = s.createDiv("lkm-guide-step");
      C.createEl("span", { cls: "lkm-step-num", text: u });
      let M = C.createDiv("lkm-step-body");
      M.createEl("span", { cls: "lkm-step-title", text: S }), M.createEl("span", { cls: "lkm-step-desc", text: x });
    }
    let a = e.createDiv("lkm-guide-btns"), n = a.createEl("button", { cls: "lkm-btn lkm-btn-action", text: t("\u521B\u5EFA\u7B14\u8BB0") });
    n.onclick = () => this.createStandaloneNote();
    let o = a.createEl("button", { cls: "lkm-btn", text: t("\u521B\u5EFA\u9ED8\u8BA4\u6A21\u677F") });
    o.onclick = () => this._createDefaultTemplate();
    let c = e.createDiv("lkm-guide-help");
    c.createEl("h4", { text: t("\u5DE5\u5177\u680F\u529F\u80FD") });
    let h = [
      [t("\u5DE5\u4F5C\u53F0"), t("\u7EDF\u8BA1\u6982\u89C8\uFF1A\u7B14\u8BB0\u603B\u6570\u3001\u7C7B\u578B\u5206\u5E03\u3001\u72B6\u6001\u5206\u5E03\u3001\u521B\u5EFA\u70ED\u529B\u56FE\u3001\u5206\u652F\u5206\u5E03\uFF0C\u70B9\u51FB\u6570\u5B57\u53EF\u7B5B\u9009\u67E5\u770B")],
      [t("\u4E3B\u7B14\u8BB0"), t("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u6839\u8282\u70B9\uFF08frontmatter \u4E2D main: true \u7684\u7B14\u8BB0\uFF09")],
      [t("\u5173\u952E\u8BCD"), t("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u7B14\u8BB0\u8FC7\u6EE4\u663E\u793A\u5BFC\u56FE")],
      [t("\u641C\u7D22"), t("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9")],
      [t("\u591A\u9009"), t("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A")],
      [t("\u9884\u8BBE"), t("\u4FDD\u5B58/\u6062\u590D/\u5220\u9664\u5F53\u524D\u5BFC\u56FE\u72B6\u6001\u9884\u8BBE\uFF1B\u5173\u95ED\u5BFC\u56FE\u65F6\u81EA\u52A8\u4FDD\u5B58\u72B6\u6001\u5230 vault \u6587\u4EF6\uFF0C\u591A\u7AEF\u540C\u6B65\u540E\u81EA\u52A8\u8FD8\u539F")],
      [t("\u5C42\u6570 \xB1"), t("\u63A7\u5236\u5BFC\u56FE\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")],
      [t("\u5168\u5C55/\u5168\u6298"), t("\u4E00\u952E\u5C55\u5F00\u6216\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9")],
      [t("\u6A2A/\u7EB5"), t("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u5DE6\u2192\u53F3 \u6216 \u4E0A\u2192\u4E0B\uFF09")],
      [t("\u5BFC\u51FA"), t("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2 / Obsidian Canvas \u6587\u4EF6")],
      [t("\u6279\u91CF"), t("\u6279\u91CF\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664/\u6539\u7C7B\u578B/\u6539\u72B6\u6001")],
      [t("\u663E\u793A"), t("\u5207\u6362\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A\u65F6\u95F4\u3001\u7C7B\u578B\u3001\u5B50\u6570\u3001\u56FE\u6807\u7B49")],
      [t("\u94FE\u63A5\u68C0\u67E5"), t("\u626B\u63CF\u5931\u6548\u94FE\u63A5\u5E76\u4FEE\u590D\uFF0C\u68C0\u67E5\u672A\u5173\u8054\u7684\u5B64\u7ACB\u7B14\u8BB0")]
    ];
    for (let [u, S] of h) {
      let x = c.createDiv("lkm-guide-row");
      x.createEl("span", { cls: "lkm-guide-key", text: u }), x.createEl("span", { cls: "lkm-guide-val", text: S });
    }
    let d = e.createDiv("lkm-guide-help");
    d.createEl("h4", { text: t("\u8282\u70B9\u64CD\u4F5C") });
    let l = [
      [t("\u53F3\u952E / \u957F\u6309"), t("\u83DC\u5355\uFF1A\u6253\u5F00\u3001\u65B0\u589E\u5B50\u8282\u70B9\u3001\u805A\u7126\u3001\u4E0A\u7EA7\u3001\u72B6\u6001\u3001\u4E3B\u7B14\u8BB0\u3001\u91CD\u547D\u540D\u3001\u590D\u5236\u3001\u79FB\u52A8\u3001\u5220\u9664")],
      [t("\u53CC\u51FB"), t("\u6253\u5F00\u7B14\u8BB0\u6587\u4EF6")],
      [t("\u62D6\u52A8\u5361\u7247"), t("\u79FB\u52A8\u8282\u70B9\u5230\u5176\u4ED6\u7236\u7B14\u8BB0\u4E0B")],
      [t("\u62D6\u52A8\u7AEF\u53E3"), t("\u8FDE\u7EBF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u591A\u7236/\u7F51\u72B6\uFF09")],
      [t("\u65B9\u5411\u952E"), t("\u2191\u2193\u2190\u2192 \u5728\u8282\u70B9\u95F4\u5BFC\u822A")],
      ["Delete", t("\u5220\u9664\u9009\u4E2D\u8282\u70B9\uFF08\u5F39\u7A97\u9009\u62E9\uFF1A\u79FB\u9664\u5173\u8054/\u5220\u9664\u6587\u4EF6\uFF09")]
    ];
    for (let [u, S] of l) {
      let x = d.createDiv("lkm-guide-row");
      x.createEl("span", { cls: "lkm-guide-key", text: u }), x.createEl("span", { cls: "lkm-guide-val", text: S });
    }
    let r = e.createDiv("lkm-guide-help");
    r.createEl("h4", { text: t("\u89C6\u89C9\u8BF4\u660E") });
    let p = [
      [t("\u8FB9\u6846\u989C\u8272"), t("\u8868\u793A\u7B14\u8BB0\u7C7B\u578B\uFF08\u6536\u96C6/\u7075\u611F/\u95EA\u5FF5/\u6587\u732E/\u6C38\u4E45/\u8D44\u6E90\uFF09\uFF0C\u5728\u8BBE\u7F6E\u4E2D\u81EA\u5B9A\u4E49\u989C\u8272")],
      [t("\u5DE6\u4FA7\u5706\u70B9"), t("\u8868\u793A\u5DE5\u4F5C\u72B6\u6001\uFF08\u5F85\u529E/\u8FDB\u884C\u4E2D/\u5DF2\u5B8C\u6210/\u5DF2\u5F52\u6863/\u5DF2\u6401\u7F6E\uFF09\uFF0C\u4E0D\u540C\u72B6\u6001\u4E0D\u540C\u989C\u8272")],
      [t("\u6A59\u8272\u5706\u70B9"), t("\u4E3B\u7B14\u8BB0\u6807\u8BB0\uFF08main: true\uFF09\uFF0C\u662F\u5BFC\u56FE\u7684\u5165\u53E3\u8282\u70B9")],
      [t("\u7C89\u8272\u5706\u70B9"), t("\u91CD\u590D\u8282\u70B9\uFF0C\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u88AB\u591A\u5904\u5173\u8054\u5F15\u5165")],
      [t("\u865A\u7EBF\u534A\u900F\u660E"), t("\u5DF2\u5F52\u6863\u8282\u70B9\uFF0C\u4FDD\u7559\u94FE\u63A5\u4F46\u964D\u4F4E\u89C6\u89C9\u6743\u91CD")]
    ];
    for (let [u, S] of p) {
      let x = r.createDiv("lkm-guide-row");
      x.createEl("span", { cls: "lkm-guide-key", text: u }), x.createEl("span", { cls: "lkm-guide-val", text: S });
    }
    let g = e.createDiv("lkm-guide-help");
    g.createEl("h4", { text: t("\u547D\u4EE4\u9762\u677F") });
    let f = [
      [t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), t("\u6253\u5F00\u5BFC\u56FE\u89C6\u56FE\uFF08\u540C\u529F\u80FD\u533A\u6309\u94AE\uFF09")],
      [t("\u6253\u5F00\u65F6\u95F4\u7EBF"), t("\u6253\u5F00\u7B14\u8BB0\u65F6\u95F4\u7EBF\u89C6\u56FE\uFF0C\u6309\u521B\u5EFA\u65F6\u95F4\u6D4F\u89C8\u7B14\u8BB0")],
      [t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), t("\u6279\u91CF\u6309\u6A21\u677F\u6574\u7406 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\uFF0C\u7EDD\u4E0D\u4FEE\u6539\u5DF2\u6709\u503C")],
      [t("\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), t("\u4EC5\u6574\u7406\u5F53\u524D\u6253\u5F00\u7B14\u8BB0\u7684 frontmatter")],
      [t("\u68C0\u67E5\u94FE\u63A5\u5B8C\u6574\u6027"), t("\u626B\u63CF\u6240\u6709\u7B14\u8BB0\u7684 children \u94FE\u63A5\uFF0C\u5217\u51FA\u5931\u6548\u94FE\u63A5\u548C\u5B64\u7ACB\u7B14\u8BB0\uFF0C\u53EF\u4E00\u952E\u4FEE\u590D")],
      [t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u7C7B\u578B"), t("\u79FB\u9664\u4E0D\u5728\u7C7B\u578B\u914D\u7F6E\u5217\u8868\u5185\u7684 type \u503C")],
      [t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u72B6\u6001"), t("\u79FB\u9664\u4E0D\u5728\u72B6\u6001\u914D\u7F6E\u5217\u8868\u5185\u7684 status \u503C")],
      [t("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), t("\u6253\u5F00\u672C\u5E2E\u52A9\u624B\u518C")]
    ];
    for (let [u, S] of f) {
      let x = g.createDiv("lkm-guide-row");
      x.createEl("span", { cls: "lkm-guide-key", text: u }), x.createEl("span", { cls: "lkm-guide-val", text: S });
    }
  }
  _renderEmptyGuide(e) {
    let s = e.createDiv("lkm-empty-guide");
    this._renderHelpContent(s);
  }
  _showHelp() {
    let e = new ge(this.app);
    e.onOpen = () => {
      let { contentEl: s } = e;
      s.addClass("lkm-help-modal"), this._renderHelpContent(s);
      let i = s.createDiv("lkm-multipick-btns");
      new R(i).addButton((a) => a.setButtonText(t("\u5173\u95ED")).onClick(() => e.close()));
    }, e.open();
  }
  async _createDefaultTemplate() {
    let e = this.s, s = (e.templateFolder || "").trim();
    if (s || (s = t("99-\u6A21\u677F"), e.templateFolder = s), !this.app.vault.getAbstractFileByPath(te(s)))
      try {
        await this.app.vault.createFolder(te(s));
      } catch (n) {
        new v(t("\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u5939\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
        return;
      }
    let a = te(s + t("/\u65B0\u8282\u70B9\u6A21\u677F.md"));
    if (this.app.vault.getAbstractFileByPath(a))
      new v(t("\u6A21\u677F\u5DF2\u5B58\u5728\uFF1A") + a);
    else {
      let n = e.linkField || "children", o = e.backField || "parent", c = e.zkField || "main", h = e.statusField || "status", d = e.typeField || "type", l = e.dateField || "date", r = e.titleField || "title", p = e.defaultStatus && (e.statusColors || {})[e.defaultStatus] !== void 0 ? '"' + e.defaultStatus + '"' : '""', g = `---
${n}: []
${o}: ""
${c}: false
${h}: ${p}
${l}: ""
${d}: ""
${r}: ""
---

`;
      try {
        await this.app.vault.create(a, g);
      } catch (f) {
        new v(t("\u521B\u5EFA\u6A21\u677F\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
        return;
      }
    }
    e.templatePath = a, await this.plugin.saveSettings(), new v(t("\u5DF2\u521B\u5EFA\u6A21\u677F\u5E76\u8BBE\u4E3A\u9ED8\u8BA4\uFF1A") + a), this.render();
  }
  async _createFirstNote(e) {
    let s = this.s, i = ve(e) + ".md", a = te(s.mainFolder), n = te(a + "/" + i);
    if (this.app.vault.getAbstractFileByPath(n)) {
      new v(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + i);
      return;
    }
    let o = s.linkField || "children", c = s.zkField || "main", h = s.statusField || "status", d = s.dateField || "date", l = /* @__PURE__ */ new Date(), r = l.getFullYear() + "-" + String(l.getMonth() + 1).padStart(2, "0") + "-" + String(l.getDate()).padStart(2, "0"), p = s.defaultStatus && (s.statusColors || {})[s.defaultStatus] !== void 0 ? '"' + s.defaultStatus + '"' : '""', g = `---
${o}: []
${c}: true
${h}: ${p}
${d}: "${r}"
---

`;
    try {
      await this.app.vault.create(n, g), new v(t("\u5DF2\u521B\u5EFA\u4E3B\u7B14\u8BB0\u300C") + e + "\u300D"), await this.rebuild(!0);
    } catch (f) {
      new v(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
    }
  }
  async openKeywordPicker() {
    let e = this.app.vault.getAbstractFileByPath(te(this.s.indexFolder)), s = (e && e.children ? e.children : []).filter((i) => i instanceof Me && i.extension === "md");
    if (!s.length) {
      new v("\u300C" + this.s.indexFolder + t("\u300D\u91CC\u6CA1\u6709\u7D22\u5F15\u6587\u4EF6"));
      return;
    }
    new Ee(
      this.app,
      s.map((i) => ({ label: i.basename, file: i })),
      (i) => this.showKeyword(i.file),
      t("\u9009\u62E9\u5173\u952E\u8BCD\u7D22\u5F15\u2026")
    ).open();
  }
  async showKeyword(e, s) {
    this._kwFile = e, this._multiRoot = !1;
    let i = this.contentEl.querySelector(".lkm-info");
    i && (i.empty(), i.setText(t("\u5173\u952E\u8BCD\uFF1A") + e.basename));
    let n = [...(await this.app.vault.read(e)).matchAll(/\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g)].map((r) => r[1].trim()), o = [], c = /* @__PURE__ */ new Set();
    for (let r of n) {
      let p = this.app.metadataCache.getFirstLinkpathDest(r, e.path);
      if (!p) continue;
      let g = this.notes.get(p.path);
      !g || c.has(g.file.path) || (c.add(g.file.path), o.push(g));
    }
    if (!o.length) {
      new v(t("\u8BE5\u7D22\u5F15\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u7B14\u8BB0\u94FE\u63A5")), this._kwFile = null, this.render();
      return;
    }
    let { virtualRoot: h, allSelectedPaths: d } = this._buildMultiRootTree(o, e.basename);
    this._selectedRootPaths = /* @__PURE__ */ new Set(d), this._multiRootPaths = d, this.currentRoot = h, this._indexTree(h), Xe(h, this.depth), this._ensureSelectedVisible(h), this._restoreExpanded(), this._view = null;
    let l = this.contentEl.querySelector(".lkm-canvas");
    l && this._draw(l, je(h, this.s), Object.assign({ fit: !0 }, s || {}));
  }
  _draw(e, s, i) {
    i = i || {}, e.empty();
    let a = this.s, { nodes: n, edges: o } = s;
    if (!n.length) return;
    let c = 1 / 0, h = 1 / 0, d = -1 / 0, l = -1 / 0, r = a.layoutDir === "v";
    for (let m of n)
      c = Math.min(c, m._x), h = Math.min(h, m._y - a.nodeHeight / 2), d = Math.max(d, m._x + m._w), l = Math.max(l, m._y + a.nodeHeight / 2 + (r ? 28 : 0));
    let p = 40, g = d - c + p * 2, f = l - h + p * 2, u = j("svg", { class: "lkm-svg" }), S = j("defs"), x = j("marker", { id: "lkm-arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" });
    x.appendChild(j("path", { d: "M0,0 L10,5 L0,10 z", class: "lkm-arrow-fill" })), S.appendChild(x), u.appendChild(S);
    let C = j("g", { class: "lkm-viewport" });
    u.appendChild(C), e.appendChild(u);
    for (let [m, z] of o) {
      let L, N, J, W, ue, H;
      if (a.layoutDir === "v") {
        L = m._x + m._w / 2, N = m._y + a.nodeHeight / 2, J = z._x + z._w / 2, W = z._y - a.nodeHeight / 2, H = (N + W) / 2;
        let de = a.curve ? `M${L},${N} C${L},${H} ${J},${H} ${J},${W}` : `M${L},${N} L${J},${W}`;
        C.appendChild(j("path", { d: de, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      } else {
        L = m._x + m._w, N = m._y, J = z._x, W = z._y, ue = (L + J) / 2;
        let de = a.curve ? `M${L},${N} C${ue},${N} ${ue},${W} ${J},${W}` : `M${L},${N} L${J},${W}`;
        C.appendChild(j("path", { d: de, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      }
    }
    let M = /* @__PURE__ */ _((m) => this._draw(e, je(this.currentRoot, a), { anchorKey: m }), "redraw"), w = null, F = { before: t("\u2191 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u524D"), after: t("\u2193 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u540E"), child: t("\u2192 \u4F5C\u4E3A\u5B50\u8282\u70B9") }, y = /* @__PURE__ */ _((m, z) => {
      if (!z.note.file) return;
      this._hidePreview(), w = { node: z, sx: m.clientX, sy: m.clientY, moved: !1, target: null, zone: "child" };
      let L = document.createElement("div");
      L.className = "lkm-drag-hint", L.style.display = "none", document.body.appendChild(L);
      let N = /* @__PURE__ */ _((H) => {
        if (!w) return;
        let de = H.clientX - w.sx, xe = H.clientY - w.sy;
        if (!w.moved && Math.hypot(de, xe) < 6) return;
        w.moved = !0, u.classList.add("lkm-dragging");
        let Pe = e.getBoundingClientRect(), Ce = (H.clientX - Pe.left - E) / T, re = (H.clientY - Pe.top - B) / T, ie = a.nodeHeight, ne = null, fe = "child";
        for (let se of n)
          if (!(se.key === z.key || !se.note.file) && Ce >= se._x && Ce <= se._x + se._w && re >= se._y - ie / 2 && re <= se._y + ie / 2) {
            if (ne = se, a.layoutDir === "v") {
              let he = (Ce - se._x) / se._w;
              fe = he < 0.3 ? "before" : he > 0.7 ? "after" : "child";
            } else {
              let he = (re - (se._y - ie / 2)) / ie;
              fe = he < 0.3 ? "before" : he > 0.7 ? "after" : "child";
            }
            break;
          }
        (ne !== w.target || fe !== w.zone) && (w.target && w.target._el && w.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), w.target = ne, w.zone = fe, ne && ne._el && (ne._el.classList.add("lkm-drop-target"), fe === "before" && ne._el.classList.add("lkm-drop-before"), fe === "after" && ne._el.classList.add("lkm-drop-after"))), L.style.display = ne ? "block" : "none", ne && (L.textContent = F[fe], L.style.left = H.clientX + 16 + "px", L.style.top = H.clientY + 16 + "px");
      }, "onMove"), J = /* @__PURE__ */ _(() => {
        window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", J), window.removeEventListener("touchmove", W), window.removeEventListener("touchend", ue), u.classList.remove("lkm-dragging"), L.remove();
        let H = w;
        w = null, H && (H.target && H.target._el && H.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), H.moved && H.target && (H.zone === "child" ? this._moveNode(H.node, H.target.note.file.path) : H.node.parent && H.target.parent && H.node.parent.note.file && H.target.parent.note.file && H.node.parent.note.file.path === H.target.parent.note.file.path ? this._reorderSiblings(H.node, H.target.note.file.path, H.zone === "after") : this._moveAndReorder(H.node, H.target, H.zone === "after")));
      }, "onUp"), W = /* @__PURE__ */ _((H) => {
        H.touches.length && N({ clientX: H.touches[0].clientX, clientY: H.touches[0].clientY });
      }, "onTouchMove2"), ue = /* @__PURE__ */ _(() => J(), "onTouchEnd2");
      window.addEventListener("mousemove", N), window.addEventListener("mouseup", J), window.addEventListener("touchmove", W, { passive: !1 }), window.addEventListener("touchend", ue);
    }, "startNodeDrag"), I = /* @__PURE__ */ _((m, z) => {
      if (!z.note.file) return;
      m.preventDefault(), m.stopPropagation(), D = !0;
      let L = j("path", { class: "lkm-wire" });
      C.appendChild(L);
      let N = a.layoutDir === "v" ? z._x + z._w / 2 : z._x + z._w, J = a.layoutDir === "v" ? z._y + a.nodeHeight / 2 : z._y, W = null, ue = /* @__PURE__ */ _((re, ie) => {
        let ne = e.getBoundingClientRect();
        return { x: (re - ne.left - E) / T, y: (ie - ne.top - B) / T };
      }, "local"), H = /* @__PURE__ */ _((re, ie) => {
        let ne = (N + re) / 2;
        L.setAttribute("d", `M${N},${J} C${ne},${J} ${ne},${ie} ${re},${ie}`);
      }, "setWire");
      H(N, J);
      let de = /* @__PURE__ */ _((re) => {
        let ie = ue(re.clientX, re.clientY);
        H(ie.x, ie.y);
        let ne = a.nodeHeight, fe = null;
        for (let se of n)
          if (!(!se.note.file || se.key === z.key) && ie.x >= se._x && ie.x <= se._x + se._w && ie.y >= se._y - ne / 2 && ie.y <= se._y + ne / 2) {
            fe = se;
            break;
          }
        fe !== W && (W && W._el && W._el.classList.remove("lkm-wire-target"), W = fe, W && W._el && W._el.classList.add("lkm-wire-target"));
      }, "onMove"), xe = /* @__PURE__ */ _(async () => {
        D = !1, window.removeEventListener("mousemove", de), window.removeEventListener("mouseup", xe), window.removeEventListener("touchmove", Pe), window.removeEventListener("touchend", Ce), L.remove(), W && W._el && W._el.classList.remove("lkm-wire-target"), W && await this._addRelation(z, W.note);
      }, "onUp"), Pe = /* @__PURE__ */ _((re) => {
        re.preventDefault();
        let ie = re.touches[0];
        de({ clientX: ie.clientX, clientY: ie.clientY });
      }, "onTouchMove"), Ce = /* @__PURE__ */ _(() => xe(), "onTouchEnd");
      window.addEventListener("mousemove", de), window.addEventListener("mouseup", xe), window.addEventListener("touchmove", Pe, { passive: !1 }), window.addEventListener("touchend", Ce);
    }, "startWire");
    for (let m of n) {
      let z = !m.note.file, L = null, N = j("g", {
        class: "lkm-node" + (m.note.zk ? " lkm-main" : "") + (m.isAlias ? " lkm-multi" : "") + (m.note.status ? " lkm-has-status" : "") + (m.note.status === "\u5DF2\u5F52\u6863" ? " lkm-archived" : ""),
        transform: `translate(${m._x},${m._y - a.nodeHeight / 2})`
      }), J = j("rect", { width: m._w, height: a.nodeHeight, rx: 12, ry: 12, class: "lkm-card" }), W = m.note.type ? (a.typeColors || {})[m.note.type] : null, ue = et(a, m.note.status);
      W && J.style.setProperty("--lkm-card-stroke", W), N.appendChild(J);
      let H = j("g", { class: "lkm-status-dots" }), de = 6, xe = /* @__PURE__ */ _((Y, ee) => {
        let le = j("circle", { cx: 10, cy: de, r: 4, class: Y });
        H.appendChild(le);
        let Se = j("circle", { cx: 10, cy: de, r: 7, class: "lkm-dot-hit" }), ye = j("title");
        return ye.textContent = ee, Se.appendChild(ye), H.appendChild(Se), de += 10, le;
      }, "mkDot");
      if (m.note.zk && xe("lkm-dot-zk", t("\u4E3B\u7B14\u8BB0\uFF1A\u8BE5\u7B14\u8BB0 main: true\uFF0C\u662F\u5BFC\u56FE\u7684\u4E3B\u5165\u53E3")), m.note.status) {
        let Y = xe("lkm-dot-status", oe(m.note.status) + t("\uFF1Astatus: ") + m.note.status);
        ue && (Y.style.fill = ue);
      }
      m.isAlias && xe("lkm-dot-multi", t("\u91CD\u590D\u8282\u70B9\uFF1A\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\u7684\u6302\u70B9\uFF09")), de > 9 && N.appendChild(H);
      let Pe = a.showCreated && !z && m.note.date ? m.note.date : "", Ce = a.showType && !z && m.note.type ? ce(m.note.type) : "", re = a.showChildCount && !z && m.children.length ? t("\u5B50 ") + m.children.length : "", ie = a.showWordCount && !z && m.note.file ? t("\u5B57 ") + Math.max(1, Math.round((m.note.file.stat.size || 0) / 3)) : "", ne = [Ce, re, ie, Pe].filter(Boolean).join(" \xB7 "), fe = !!ne, se = j("text", { x: 16, y: fe ? a.nodeHeight / 2 - 4 : a.nodeHeight / 2 + 5, class: "lkm-title" });
      if (se.textContent = m._shown || m.note.title, N.appendChild(se), fe) {
        let Y = j("text", { x: 16, y: a.nodeHeight - 8, class: "lkm-sub" });
        Y.textContent = Z(ne, 50), N.appendChild(Y);
      }
      let he = a.nodeHeight / 2, Ze = window.innerWidth < 600, Fe = Ze ? 12 : 10, Ye = /* @__PURE__ */ _((Y, ee) => {
        let le = j("title");
        le.textContent = ee, Y.appendChild(le);
      }, "addTip"), at = a.layoutDir === "v";
      if (m.children.length) {
        let Y = j("g", { class: "lkm-expand" });
        Ye(Y, m.expanded ? t("\u6298\u53E0\u5B50\u8282\u70B9") : t("\u5C55\u5F00\u5B50\u8282\u70B9"));
        let ee = at ? m._w / 2 : m._w + 14, le = at ? a.nodeHeight + 14 : he;
        Y.appendChild(j("circle", { cx: ee, cy: le, r: Fe, class: "lkm-dot" }));
        let Se = j("text", { x: ee, y: le + 5, class: "lkm-sign", "text-anchor": "middle" });
        Se.textContent = m.expanded ? "\u2212" : "+", Y.appendChild(Se);
        let ye = j("circle", { cx: ee, cy: le, r: Fe + 5, class: "lkm-hit" });
        ye.addEventListener("click", (Ve) => {
          Ve.stopPropagation(), m.expanded = !m.expanded, this._expandedMem.set(m.note.file ? m.note.file.path : m.key, m.expanded), M(m.key);
        }), ye.addEventListener("mouseenter", () => {
          L && (clearTimeout(L), L = null);
        }), Y.appendChild(ye), N.appendChild(Y);
      }
      if (m.note.file) {
        let Y = Ze ? 26 : 24, ee = m._w - (Ze ? 20 : 18), le = j("g", { class: "lkm-connect" });
        Ye(le, t("\u62D6\u52A8\u8FDE\u7EBF\uFF1A\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u76EE\u6807\u6210\u4E3A\u672C\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u539F\u5173\u7CFB\u4FDD\u7559\uFF09"));
        let Se = ee, ye = he;
        le.appendChild(j("circle", { cx: Se, cy: ye, r: Fe, class: "lkm-connect-bg" })), le.appendChild(j("circle", { cx: Se, cy: ye, r: 2.6, class: "lkm-connect-dot" }));
        let Ve = j("circle", { cx: Se, cy: ye, r: Fe + 5, class: "lkm-hit" });
        if (Ve.addEventListener("mousedown", (pe) => {
          this._batchMode || I(pe, m);
        }), Ve.addEventListener("mouseenter", () => {
          L && (clearTimeout(L), L = null);
        }), Ve.addEventListener("touchstart", (pe) => {
          this._batchMode || I(pe, m);
        }, { passive: !1 }), le.appendChild(Ve), N.appendChild(le), a.showOpenIcon !== !1) {
          ee -= Y;
          let pe = j("g", { class: "lkm-open" });
          Ye(pe, t("\u6253\u5F00\u7B14\u8BB0")), pe.appendChild(j("circle", { cx: ee, cy: he, r: Fe, class: "lkm-open-bg" }));
          let Oe = j("text", { x: ee, y: he + 4, class: "lkm-open-sign", "text-anchor": "middle", transform: "rotate(90 " + ee + " " + he + ")" });
          Oe.textContent = "\u270E", pe.appendChild(Oe);
          let Ie = j("circle", { cx: ee, cy: he, r: Fe + 3, class: "lkm-hit" });
          Ie.addEventListener("click", (Je) => {
            Je.stopPropagation(), this.app.workspace.getLeaf(!0).openFile(m.note.file);
          }), Ie.addEventListener("mouseenter", () => {
            L && (clearTimeout(L), L = null);
          }), pe.appendChild(Ie), N.appendChild(pe);
        }
        if (a.showAddIcon !== !1) {
          ee -= Y;
          let pe = j("g", { class: "lkm-add" });
          Ye(pe, t("\u65B0\u589E\u5B50\u8282\u70B9\uFF08\u81EA\u52A8\u5199\u5165\u94FE\u63A5\uFF09")), pe.appendChild(j("circle", { cx: ee, cy: he, r: Fe, class: "lkm-add-bg" }));
          let Oe = j("text", { x: ee, y: he + 4, class: "lkm-add-sign", "text-anchor": "middle" });
          Oe.textContent = "\uFF0B", pe.appendChild(Oe);
          let Ie = j("circle", { cx: ee, cy: he, r: Fe + 3, class: "lkm-hit" });
          Ie.addEventListener("click", (Je) => {
            Je.stopPropagation(), this.createChild(m);
          }), Ie.addEventListener("mouseenter", () => {
            L && (clearTimeout(L), L = null);
          }), pe.appendChild(Ie), N.appendChild(pe);
        }
      }
      m._el = N, this._batchMode && this._selected.has(m.key) && N.classList.add("lkm-selected"), this._selKey === m.key && N.classList.add("lkm-sel"), this._selectedRootPaths && m.note.file && this._selectedRootPaths.has(m.note.file.path) && N.classList.add("lkm-selected-root"), N.addEventListener("click", (Y) => {
        if (this._batchMode) {
          Y.stopPropagation(), this._toggleSelect(m.key);
          return;
        }
        this._select(m.key);
      }), N.addEventListener("contextmenu", (Y) => {
        Y.preventDefault(), Y.stopPropagation(), !this._batchMode && (this._select(m.key), this._showNodeMenu(m, Y));
      }), N.addEventListener("dblclick", (Y) => {
        Y.stopPropagation(), L && (clearTimeout(L), L = null), this._hidePreview(), !this._batchMode && (m.note.file ? this.app.workspace.getLeaf(!0).openFile(m.note.file) : m.children.length && (m.expanded = !m.expanded, this._expandedMem.set(m.note.file ? m.note.file.path : m.key, m.expanded), M(m.key)));
      }), N.addEventListener("mousedown", (Y) => {
        Y.button !== 0 || this._batchMode || (Y.stopPropagation(), y(Y, m));
      }), N.addEventListener("touchstart", (Y) => {
        if (this._batchMode || !m.note.file || Y.touches.length !== 1) return;
        let ee = Y.touches[0], le = { clientX: ee.clientX, clientY: ee.clientY, preventDefault: /* @__PURE__ */ _(() => Y.preventDefault(), "preventDefault"), stopPropagation: /* @__PURE__ */ _(() => Y.stopPropagation(), "stopPropagation") };
        y(le, m);
      }, { passive: !1 });
      let Te = null;
      N.addEventListener("touchstart", (Y) => {
        if (this._batchMode || !m.note.file) return;
        let ee = Y.touches[0];
        Te = setTimeout(() => {
          Te = null, this._select(m.key), this._showNodeMenu(m, { clientX: ee.clientX, clientY: ee.clientY });
        }, 500);
      }, { passive: !0 }), N.addEventListener("touchmove", () => {
        Te && (clearTimeout(Te), Te = null);
      }, { passive: !0 }), N.addEventListener("touchend", () => {
        Te && (clearTimeout(Te), Te = null);
      }, { passive: !0 }), m.note.file && !z && (N.addEventListener("mouseenter", (Y) => {
        w || (L && clearTimeout(L), L = setTimeout(() => {
          w || (L = null, this._showPreview(m, Y));
        }, 1e3));
      }), N.addEventListener("mousemove", (Y) => {
        this._previewEl && this._positionPreview(Y);
      }), N.addEventListener("mouseleave", () => {
        L && (clearTimeout(L), L = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
          this._hidePreview(), this._hideTimer = null;
        }, 200);
      })), C.appendChild(N);
    }
    this._applyFilter();
    let T = 1, E = 0, B = 0;
    this._view && (T = this._view.k, E = this._view.tx, B = this._view.ty);
    let G = /* @__PURE__ */ _(() => C.setAttribute("transform", `translate(${E},${B}) scale(${T})`), "apply"), D = !1, O = /* @__PURE__ */ _(() => {
      let m = e.getBoundingClientRect(), z = m.width || e.clientWidth || 800, L = m.height || e.clientHeight || 600;
      if (T = Math.min(z / g, L / f, 1.4) || 1, r && n.length) {
        let N = n[0];
        E = z / 2 - (N._x + N._w / 2) * T, B = p * T - h * T;
      } else
        E = (z - g * T) / 2 - (c - p) * T, B = (L - f * T) / 2 - (h - p) * T;
      this._view = { k: T, tx: E, ty: B }, G();
    }, "fit");
    this._fit = O;
    let k = /* @__PURE__ */ _((m) => {
      let z = n.find((N) => N.note.file && N.note.file.path === m);
      if (!z) return;
      let L = e.getBoundingClientRect();
      !L.width || !L.height || (E = L.width / 2 - (z._x + z._w / 2) * T, B = L.height / 2 - z._y * T, this._view = { k: T, tx: E, ty: B }, G());
    }, "centerOnPath");
    if (!this._view || i.fit) {
      if (requestAnimationFrame(() => {
        O(), i.centerPath && k(i.centerPath);
      }), !i.centerPath) {
        let m = 3, z = /* @__PURE__ */ _(() => {
          m-- > 0 && O();
        }, "onResize");
        window.addEventListener("resize", z);
        let L = setTimeout(() => window.removeEventListener("resize", z), 1500);
        this._cleanup.push(() => {
          window.removeEventListener("resize", z), clearTimeout(L);
        });
      }
    } else
      G(), i.centerPath && k(i.centerPath);
    let P = /* @__PURE__ */ _((m) => {
      m.preventDefault();
      let z = u.getBoundingClientRect(), L = m.clientX - z.left, N = m.clientY - z.top, J = Math.max(0.2, Math.min(3, T * (m.deltaY < 0 ? 1.1 : 0.9)));
      E = L - (L - E) * (J / T), B = N - (N - B) * (J / T), T = J, this._view = { k: T, tx: E, ty: B }, G();
    }, "onWheel");
    u.addEventListener("wheel", P, { passive: !1 }), this._cleanup.push(() => u.removeEventListener("wheel", P));
    let V = !1, X = !1, Q = 0, U = 0, q = /* @__PURE__ */ _((m) => {
      V = !0, X = !1, Q = m.clientX - E, U = m.clientY - B, u.classList.add("lkm-grabbing");
    }, "onDown"), $ = /* @__PURE__ */ _((m) => {
      V && (!X && Math.hypot(m.clientX - (Q + E), m.clientY - (U + B)) > 3 && (X = !0), E = m.clientX - Q, B = m.clientY - U, this._view = { k: T, tx: E, ty: B }, G());
    }, "onMove"), A = /* @__PURE__ */ _(() => {
      let m = V;
      V = !1, u.classList.remove("lkm-grabbing"), m && !X && !this._batchMode && this._select(null), X && this._scheduleAutoSave();
    }, "onUp");
    u.addEventListener("mousedown", q), window.addEventListener("mousemove", $), window.addEventListener("mouseup", A), this._cleanup.push(() => {
      u.removeEventListener("mousedown", q), window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", A);
    });
    let K = null, ae = null, we = /* @__PURE__ */ _((m) => {
      if (!D)
        if (m.stopPropagation(), m.touches.length === 2) {
          m.preventDefault();
          let z = m.touches[0].clientX - m.touches[1].clientX, L = m.touches[0].clientY - m.touches[1].clientY;
          ae = { dist: Math.hypot(z, L), k: T }, K = null;
        } else m.touches.length === 1 && (K = { x: m.touches[0].clientX - E, y: m.touches[0].clientY - B }, ae = null, u.classList.add("lkm-grabbing"));
    }, "onTouchStart"), be = /* @__PURE__ */ _((m) => {
      if (!D)
        if (m.stopPropagation(), m.touches.length === 2 && ae) {
          m.preventDefault();
          let z = m.touches[0].clientX - m.touches[1].clientX, L = m.touches[0].clientY - m.touches[1].clientY, N = Math.max(0.2, Math.min(3, ae.k * (Math.hypot(z, L) / ae.dist))), J = u.getBoundingClientRect(), W = (m.touches[0].clientX + m.touches[1].clientX) / 2 - J.left, ue = (m.touches[0].clientY + m.touches[1].clientY) / 2 - J.top;
          E = W - (W - E) * (N / T), B = ue - (ue - B) * (N / T), T = N, this._view = { k: T, tx: E, ty: B }, G();
        } else m.touches.length === 1 && K ? (m.preventDefault(), E = m.touches[0].clientX - K.x, B = m.touches[0].clientY - K.y, this._view = { k: T, tx: E, ty: B }, G()) : m.touches.length && m.preventDefault();
    }, "onTouchMove"), Be = /* @__PURE__ */ _((m) => {
      D || (m.stopPropagation(), m.touches.length === 0 && (K = null, ae = null, u.classList.remove("lkm-grabbing"), this._scheduleAutoSave()));
    }, "onTouchEnd");
    u.addEventListener("touchstart", we, { passive: !1 }), u.addEventListener("touchmove", be, { passive: !1 }), u.addEventListener("touchend", Be), u.addEventListener("touchcancel", Be), this._cleanup.push(() => {
      u.removeEventListener("touchstart", we), u.removeEventListener("touchmove", be), u.removeEventListener("touchend", Be), u.removeEventListener("touchcancel", Be);
    });
  }
  _templateFiles() {
    let e = this.s, s = (e.templateFolder || "").trim();
    if (!s) {
      let a = (e.templatePath || "").trim();
      if (a) {
        let n = a.lastIndexOf("/");
        s = n > 0 ? a.slice(0, n) : "";
      }
    }
    if (!s) return [];
    let i = this.app.vault.getAbstractFileByPath(te(s));
    return !i || !i.children ? [] : i.children.filter((a) => a instanceof Me && a.extension === "md");
  }
  async _buildNewNoteBody(e, s, i, a, n, o) {
    let c = this.s, h = c.linkField || "children", d = c.backField || "parent", l = c.zkField || "main", r = c.statusField || "status", p = c.typeField || "type", g = c.dateField || "date", f = c.titleField || "title", u = /* @__PURE__ */ new Set([h, d, l, r, g, p, f]), S = "", x = [];
    if (a) {
      let M = this.app.vault.getAbstractFileByPath(te(a));
      if (M instanceof Me) {
        let w = nt(await this.app.vault.read(M));
        S = w.body;
        let F = new Map(w.fields);
        i || (F.get(p) != null ? i = $e(F.get(p)) : F.get("type") != null && (i = $e(F.get("type"))));
        let y = [];
        for (let [I, T] of [["zk", l], ["status", r], ["date", g], ["type", p], ["title", f]])
          I !== T && F.has(I) && !F.has(T) && y.push(I + "\u2192" + T);
        y.length && new v(t("\u6A21\u677F\u5B57\u6BB5\u4E0E\u914D\u7F6E\u4E0D\u4E00\u81F4\uFF1A") + y.join("\uFF0C") + t("\u3002\u5DF2\u7528\u914D\u7F6E\u5B57\u6BB5\u540D\u521B\u5EFA\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6A21\u677F\u3002"), 1e4);
        for (let [I, T] of w.fields)
          u.has(I) || x.push([I, T]);
      }
    }
    let C = ["---"];
    C.push(h + ": []"), e && c.autoAddBackLink && C.push(d + ': "' + e + '"'), C.push(l + ": " + (n ? "true" : "false")), C.push(r + ": " + (o ? '"' + o + '"' : '""')), C.push(g + ": " + s), i && C.push(p + ': "' + i + '"');
    for (let [M, w] of x) C.push(M + ": " + (w ?? ""));
    return C.push("---", ""), C.join(`
`) + (S || "");
  }
  async _rebuildUntilReady(e, s, i) {
    s = s || 30, i = i !== !1;
    for (let a = 0; a < s; a++) {
      if (await this.rebuild(!0), this.notes.has(e) && (!i || this._treePaths && this._treePaths.has(e)))
        return;
      await new Promise((n) => setTimeout(n, 150));
    }
    new v(t("\u5DF2\u521B\u5EFA\uFF0C\u4F46\u89C6\u56FE\u6682\u672A\u5237\u65B0\uFF0C\u8BF7\u70B9\u5237\u65B0"));
  }
  createChild(e) {
    if (!e || !e.note.file) {
      new v(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6\uFF0C\u65E0\u6CD5\u65B0\u589E\u5B50\u8282\u70B9"));
      return;
    }
    let s = this.s, i = Object.keys(s.typeColors || {}), a = i.includes(s.defaultType) ? s.defaultType : "", n = Object.keys(s.statusColors || {}), o = n.includes(s.defaultStatus) ? s.defaultStatus : "", c = [{ path: "", name: t("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let l of this._templateFiles()) c.push({ path: l.path, name: l.basename });
    let h = "", d = (s.templatePath || "").trim();
    if (d) {
      let l = c.find((r) => r.path === te(d));
      l && (h = l.path);
    }
    new ht(this.app, e.note.title, {
      types: i,
      defaultType: a,
      statuses: n,
      defaultStatus: o,
      templates: c,
      defaultTemplate: h,
      typeTemplates: s.typeTemplates || {},
      zkField: s.zkField || "main",
      onSubmit: /* @__PURE__ */ _(async (l, r, p, g, f) => {
        try {
          let u = ve(l) + ".md", S = te(s.mainFolder), x = te(S + "/" + u);
          if (this.app.vault.getAbstractFileByPath(x)) {
            new v(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + u);
            return;
          }
          let C = /* @__PURE__ */ new Date(), M = C.getFullYear() + "-" + String(C.getMonth() + 1).padStart(2, "0") + "-" + String(C.getDate()).padStart(2, "0"), w = await this._buildNewNoteBody(e.note.file.basename, M, r, p, g, f);
          await He(this.app, e.note.file, s.linkField, ve(l)), await this.app.vault.create(x, w), new v(t("\u5DF2\u521B\u5EFA\u300C") + ve(l) + t("\u300D\u5E76\u5173\u8054\u5230\u300C") + Z(e.note.title, 14) + "\u300D");
          let F = e;
          for (; F; )
            this._expandedMem.set(F.note.file ? F.note.file.path : F.key, !0), F = F.parent;
          await this._rebuildUntilReady(x);
        } catch (u) {
          new v(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (u && u.message ? u.message : u));
        }
      }, "onSubmit")
    }).open();
  }
  createStandaloneNote() {
    let e = this.s, s = Object.keys(e.typeColors || {}), i = s.includes(e.defaultType) ? e.defaultType : "", a = Object.keys(e.statusColors || {}), n = a.includes(e.defaultStatus) ? e.defaultStatus : "", o = [{ path: "", name: t("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let d of this._templateFiles()) o.push({ path: d.path, name: d.basename });
    let c = "", h = (e.templatePath || "").trim();
    if (h) {
      let d = o.find((l) => l.path === te(h));
      d && (c = d.path);
    }
    new ht(this.app, "", {
      types: s,
      defaultType: i,
      statuses: a,
      defaultStatus: n,
      templates: o,
      defaultTemplate: c,
      typeTemplates: e.typeTemplates || {},
      standalone: !0,
      zkField: e.zkField || "main",
      onSubmit: /* @__PURE__ */ _(async (d, l, r, p, g) => {
        try {
          let f = ve(d) + ".md", u = te(e.mainFolder), S = te(u + "/" + f);
          if (this.app.vault.getAbstractFileByPath(S)) {
            new v(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + f);
            return;
          }
          let x = /* @__PURE__ */ new Date(), C = x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0"), M = await this._buildNewNoteBody(null, C, l, r, p, g);
          await this.app.vault.create(S, M), new v(t("\u5DF2\u521B\u5EFA\u300C") + ve(d) + "\u300D"), await this._rebuildUntilReady(S, 30, !1), this._focusPath(S);
        } catch (f) {
          new v(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
        }
      }, "onSubmit")
    }).open(), this._scheduleAutoSave();
  }
  _renderDash(e) {
    let s = this.s, i = e.createDiv("lkm-toolbar"), a = i.createEl("button", { cls: "lkm-btn", text: t("\u8FD4\u56DE") });
    a.title = t("\u8FD4\u56DE\u601D\u7EF4\u5BFC\u56FE"), a.onclick = () => {
      this._mode = "map", this.render();
    }, i.createSpan({ cls: "lkm-dash-title", text: t("\u5DE5\u4F5C\u53F0") });
    let n = i.createEl("button", { cls: "lkm-btn" + (this._dashTab === "timeline" ? " is-active" : ""), text: t("\u65F6\u95F4\u7EBF") });
    if (n.title = t("\u5207\u6362\u5230\u65F6\u95F4\u7EBF\u89C6\u56FE"), n.style.marginLeft = "auto", n.onclick = () => {
      this._dashTab = this._dashTab === "timeline" ? "stats" : "timeline", this.render();
    }, this._dashTab === "stats") {
      let o = this._dashStats(), c = i.createEl("button", { cls: "lkm-btn", text: t("\u590D\u5236\u7EDF\u8BA1") });
      c.title = t("\u628A\u7EDF\u8BA1\u6458\u8981\u590D\u5236\u4E3A Markdown"), c.onclick = () => {
        navigator.clipboard.writeText(this._dashSummaryMd(o)).then(
          () => new v(t("\u5DF2\u590D\u5236\u7EDF\u8BA1\u6458\u8981")),
          () => new v(t("\u590D\u5236\u5931\u8D25"))
        );
      };
      let h = e.createDiv("lkm-dash");
      if (!o.total) {
        h.createDiv("lkm-dash-h").setText("\u300C" + s.mainFolder + t("\u300D\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u7B14\u8BB0\u3002"));
        return;
      }
      let d = h.createDiv("lkm-cards"), l = [
        { num: o.total, label: t("\u7B14\u8BB0\u603B\u6570"), icon: "files", color: "#6c8cff", filter: { kind: "all" } },
        { num: o.zk, label: t("\u4E3B\u7B14\u8BB0"), icon: "star", color: "#f2a65a", filter: { kind: "zk" } },
        { num: o.kw, label: t("\u5173\u952E\u8BCD\u7D22\u5F15"), icon: "tags", color: "#b07cff", filter: { kind: "kw" } },
        { num: o.done, label: t("\u5DF2\u5B8C\u6210"), icon: "check", color: "#3fa66a", filter: { kind: "status", value: "done" } },
        { num: o.orphan, label: t("\u672A\u5173\u8054"), icon: "unlink", color: "#4ba3e5", filter: { kind: "orphan" } },
        { num: o.todo, label: t("\u5F85\u529E"), icon: "list-checks", color: "#e5534b", filter: { kind: "status", value: "todo" } },
        { num: o.linkCount, label: t("\u94FE\u63A5\u603B\u6570"), icon: "link", color: "#6c8cff" },
        { num: o.deadLinks, label: t("\u5931\u6548\u94FE\u63A5"), icon: "alert-triangle", color: "#e5534b" }
      ];
      for (let D of l) {
        let O = D.filter && this._isFilterActive(D.filter), k = d.createDiv("lkm-card-stat lkm-card-click" + (O ? " is-active" : "")), P = k.createDiv("lkm-card-ico");
        P.style.background = "color-mix(in srgb, " + D.color + " 16%, transparent)", P.style.color = D.color;
        try {
          ct(P, D.icon);
        } catch {
        }
        k.createDiv("lkm-stat-num").setText(String(D.num)), k.createDiv("lkm-stat-label").setText(D.label + (D.filter && o.total ? " \xB7 " + Math.round(D.num / o.total * 100) + "%" : "")), D.filter && (k.title = t("\u70B9\u51FB\u67E5\u770B\u300C") + D.label + t("\u300D\u5217\u8868"), k.addEventListener("click", () => this._toggleDashFilter(D.filter)));
      }
      {
        let D = h.createDiv("lkm-dash-two"), O = D.createDiv("lkm-dash-sec");
        O.createDiv("lkm-dash-h").setText(t("\u7C7B\u578B\u5206\u5E03"));
        let k = o.byTypeOrder.map((A) => ({ label: ce(A.name), value: A.count, color: A.color, filter: { kind: "type", value: A.name } }));
        o.noType && k.push({ label: t("\u672A\u6807\u6CE8"), value: o.noType, color: "var(--text-faint)", filter: { kind: "notype" } });
        let P = O.createDiv("lkm-donut-wrap");
        this._renderDonut(P, k, o.total);
        let V = P.createDiv("lkm-legend");
        for (let A of k) {
          let K = V.createDiv("lkm-legend-row lkm-type-click" + (this._isFilterActive(A.filter) ? " is-active" : ""));
          K.createSpan({ cls: "lkm-legend-dot" }).style.background = A.color, K.createSpan({ cls: "lkm-legend-name", text: A.label }), K.createSpan({ cls: "lkm-legend-num", text: String(A.value) }), K.addEventListener("click", () => this._toggleDashFilter(A.filter));
        }
        let X = D.createDiv("lkm-dash-sec");
        X.createDiv("lkm-dash-h").setText(t("\u72B6\u6001\u5206\u5E03"));
        let Q = X.createDiv("lkm-stackbar"), U = o.byStatusOrder.map((A) => ({ label: oe(A.name), value: A.count, color: A.color, filter: { kind: "status", value: A.name } }));
        o.noStatus && U.push({ label: t("\u65E0\u72B6\u6001"), value: o.noStatus, color: "var(--text-faint)", filter: { kind: "nostatus" } });
        for (let A of U) {
          if (!A.value) continue;
          let K = Q.createDiv("lkm-stackbar-seg");
          K.style.width = Math.max(6, A.value / o.total * 100) + "%", K.style.background = A.color, this._isFilterActive(A.filter) && K.addClass("is-active"), K.title = A.label + "\uFF1A" + A.value + t(" \u7BC7\uFF0C\u70B9\u51FB\u7B5B\u9009"), K.addEventListener("click", () => this._toggleDashFilter(A.filter));
        }
        let q = X.createDiv("lkm-chips"), $ = /* @__PURE__ */ _((A, K, ae, we) => {
          let be = q.createDiv("lkm-chip lkm-type-click" + (this._isFilterActive(we) ? " is-active" : ""));
          be.createSpan({ cls: "lkm-legend-dot" }).style.background = ae, be.createSpan({ text: A + " " + K }), be.addEventListener("click", () => this._toggleDashFilter(we));
        }, "chip");
        for (let A of o.byStatusOrder) $(oe(A.name), A.count, A.color, { kind: "status", value: A.name });
        o.noStatus && $(t("\u65E0\u72B6\u6001"), o.noStatus, "var(--text-faint)", { kind: "nostatus" }), $(t("\u672A\u6807\u65E5\u671F"), o.noDate, "var(--text-faint)", { kind: "nodate" });
      }
      {
        let D = h.createDiv("lkm-dash-sec");
        D.createDiv("lkm-dash-h").setText(t("\u6708\u5EA6\u521B\u5EFA \xB7 \u8FD112\u4E2A\u6708\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u5F53\u6708\u65B0\u589E\uFF09"));
        let O = D.createDiv("lkm-chart-body");
        this._renderBarChart(
          O,
          o.monthly.map((k) => ({ label: parseInt(k.key.slice(5, 7), 10) + t("\u6708"), value: k.count, filter: { kind: "month", value: k.key } })),
          { height: window.innerWidth < 600 ? 100 : 120, thinLabels: window.innerWidth < 600 }
        );
      }
      {
        let D = h.createDiv("lkm-dash-sec");
        if (D.createDiv("lkm-dash-h").setText(t("\u6811\u6DF1\u5EA6\u5206\u5E03\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u8BE5\u5C42\u8282\u70B9\uFF09")), o.depthMax) {
          let O = D.createDiv("lkm-chart-body"), k = [];
          for (let P = 1; P <= o.depthMax; P++) k.push({ label: t("\u7B2C") + P + t("\u5C42"), value: o.depthCount.get(P) || 0, filter: { kind: "depth", value: String(P) } });
          this._renderBarChart(O, k, { height: window.innerWidth < 600 ? 100 : 120 });
        } else D.createDiv("lkm-heat-sum").setText(t("\u8FD8\u6CA1\u6709\u53EF\u7EDF\u8BA1\u7684\u5C42\u7EA7\u6570\u636E"));
      }
      let r = h.createDiv("lkm-dash-sec"), p = new Set([...o.heat.keys()].map((D) => D.slice(0, 4)));
      p.add(String((/* @__PURE__ */ new Date()).getFullYear()));
      let g = [...p].sort().reverse();
      this._dashHeatIdx = Math.min(this._dashHeatIdx || 0, g.length);
      let f = r.createDiv("lkm-heat-head");
      if (f.createDiv("lkm-dash-h").setText(t("\u521B\u5EFA\u70ED\u529B\u56FE \xB7 ") + (this._dashHeatIdx ? g[this._dashHeatIdx - 1] + t(" \u5E74") : t("\u8FD1\u4E00\u5E74")) + t("\uFF08\u6309 date \u5B57\u6BB5\uFF09")), this._dashHeatIdx || g.length > 1) {
        let D = f.createDiv("lkm-heat-nav"), O = /* @__PURE__ */ _(() => {
          let V = this.contentEl.querySelector(".lkm-dash"), X = V ? V.scrollTop : 0;
          this.render();
          let Q = this.contentEl.querySelector(".lkm-dash");
          Q && (Q.scrollTop = X);
        }, "rerender"), k = D.createEl("button", { cls: "lkm-step", text: "\u2039" });
        k.disabled = this._dashHeatIdx >= g.length;
        let P = D.createEl("button", { cls: "lkm-step", text: "\u203A" });
        P.disabled = this._dashHeatIdx <= 0, k.onclick = () => {
          this._dashHeatIdx++, O();
        }, P.onclick = () => {
          this._dashHeatIdx--, O();
        };
      }
      let u = 864e5, S = /* @__PURE__ */ new Date();
      S.setHours(0, 0, 0, 0);
      let x = (S.getDay() + 6) % 7, C = window.innerWidth < 600, M = C ? 10 : 12, w, F, y, I;
      if (this._dashHeatIdx) {
        let D = parseInt(g[this._dashHeatIdx - 1], 10), O = new Date(D, 0, 1), k = new Date(D, 11, 31);
        w = new Date(O.getTime() - (O.getDay() + 6) % 7 * u), F = O, y = k, I = Math.round((k.getTime() + (6 - (k.getDay() + 6) % 7) * u - w.getTime()) / u / 7);
      } else {
        let D = new Date(S.getTime() + (6 - x) * u);
        I = C ? 26 : 53, w = new Date(D.getTime() - (I * 7 - 1) * u), F = w, y = S;
      }
      if (r.createDiv("lkm-heat-sum").setText(o.heat.size ? (() => {
        let D = this._ds(F), O = this._ds(y), k = 0, P = 0, V = { date: "", count: 0 };
        for (let [X, Q] of o.heat) X >= D && X <= O && (k += Q, P++, Q > V.count && (V = { date: X, count: Q }));
        return (P ? P + t(" \u5929\u6709\u521B\u5EFA \xB7 \u5171 ") + k + t(" \u7BC7") : t("\u8BE5\u65F6\u95F4\u6BB5\u6682\u65E0\u521B\u5EFA\u8BB0\u5F55")) + (V.count ? t(" \xB7 \u6700\u591A\u4E00\u5929 ") + V.count + t(" \u7BC7\uFF08") + V.date + "\uFF09" : "");
      })() : t("\u8FD8\u6CA1\u6709\u5E26 date \u5B57\u6BB5\u7684\u7B14\u8BB0")), o.heat.size) {
        let D = r.createDiv("lkm-heat-scroll"), O = D.createDiv("lkm-heat-grid");
        O.style.gridTemplateColumns = "26px repeat(" + I + ", " + M + "px)", O.style.gridAutoRows = M + "px";
        let k = -1;
        for (let U = 0; U < I; U++) {
          let q = new Date(w.getTime() + U * 7 * u);
          if (q.getMonth() !== k) {
            k = q.getMonth();
            let $ = O.createDiv("lkm-heat-mon");
            $.style.gridColumn = String(U + 2), $.style.gridRow = "1", $.setText(q.getMonth() + 1 + t("\u6708"));
          }
        }
        [t("\u4E00"), t("\u4E09"), t("\u4E94")].forEach((U, q) => {
          let $ = O.createDiv("lkm-heat-wd");
          $.style.gridColumn = "1", $.style.gridRow = String(q * 2 + 2), $.setText(U);
        });
        let P = this._ds(F), V = this._ds(y), X = this._ds(S), Q = null;
        for (let U = 0; U < I; U++)
          for (let q = 0; q < 7; q++) {
            let $ = new Date(w.getTime() + (U * 7 + q) * u), A = O.createDiv("lkm-heat-cell");
            A.style.gridColumn = String(U + 2), A.style.gridRow = String(q + 2);
            let K = this._ds($);
            if ($ > S || K < P || K > V) {
              A.addClass("lkm-heat-off");
              continue;
            }
            let ae = o.heat.get(K) || 0, we = ae === 0 ? 0 : ae === 1 ? 1 : ae <= 2 ? 2 : ae <= 4 ? 3 : 4;
            we && A.addClass("lkm-heat-l" + we), this._isFilterActive({ kind: "date", value: K }) && A.addClass("is-active"), ae && A.addClass("lkm-heat-hit"), K === X && (A.addClass("lkm-heat-today"), Q = A), A.title = K + "\uFF1A" + ae + t(" \u7BC7") + (K === X ? t("\uFF08\u4ECA\u5929\uFF09") : ""), A.addEventListener("click", () => this._toggleDashFilter({ kind: "date", value: K }));
          }
        Q && !this._dashHeatIdx && requestAnimationFrame(() => {
          let U = Q.getBoundingClientRect(), q = D.getBoundingClientRect();
          U.right > q.right - 20 && (D.scrollLeft += U.right - q.right + 30);
        });
      }
      let T = h.createDiv("lkm-dash-two"), E = T.createDiv("lkm-dash-sec"), B = this._dashFilters || [];
      if (B.length) {
        E.addClass("lkm-filter-sec");
        let D = this._sortDashItems(this._dashFilterItems(B)), O = E.createDiv("lkm-filter-head");
        O.createSpan({ cls: "lkm-dash-h lkm-filter-title", text: this._dashFilterGroupLabel(B) });
        let k = O.createSpan({ cls: "lkm-filter-count", text: "\uFF08" + D.length + "\uFF09" }), P = O.createEl("input", { cls: "lkm-filter-search", type: "text", attr: { placeholder: t("\u8FC7\u6EE4\u2026") } });
        P.value = this._dashSearch || "", P.addEventListener("focus", () => {
          if (!window.matchMedia("(hover: none)").matches) return;
          let $ = this.contentEl.querySelector(".lkm-dash"), A = this.contentEl.querySelector(".lkm-toolbar");
          if (!$ || !A) return;
          let K = $.scrollTop, ae = $.style.flex, we = $.style.height, be = /* @__PURE__ */ _(() => {
            let Be = A.getBoundingClientRect().bottom, m = window.visualViewport, L = (m ? m.height + m.offsetTop : window.innerHeight) - Be;
            L > 60 && ($.style.flex = "none", $.style.height = L + "px"), $.scrollTop = Math.max(0, O.offsetTop - 50);
          }, "doAdjust");
          setTimeout(be, 300), setTimeout(be, 500), P.addEventListener("blur", () => {
            $.style.flex = ae, $.style.height = we, $.scrollTop = K;
          }, { once: !0 });
        });
        let V = O.createEl("button", { cls: "lkm-btn", text: t("\u6392\u5E8F\uFF1A") + { date: t("\u65E5\u671F"), name: t("\u540D\u79F0") }[this._dashSort || "date"] });
        V.onclick = () => {
          this._dashSort = this._dashSort === "date" ? "name" : "date", this.render();
        };
        let X = O.createEl("button", { cls: "lkm-btn", text: t("\u6E05\u9664") });
        X.onclick = () => {
          this._dashFilters = [], this._dashSearch = "", this.render();
        }, D.length || E.createDiv("lkm-heat-sum").setText(t("\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7B14\u8BB0"));
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
            let ae = !$ || K.text.includes($);
            K.el.style.display = ae ? "" : "none", ae && A++;
          }
          k.setText("\uFF08" + ($ ? A + "/" : "") + D.length + "\uFF09");
        }, "applySearch");
        P.addEventListener("input", () => {
          this._dashSearch = P.value, q();
        }), q();
      } else {
        E.createDiv("lkm-dash-h").setText(t("\u5206\u652F\u5206\u5E03 \xB7 \u5B8C\u6210\u8FDB\u5EA6")), o.branches.length || E.createDiv("lkm-heat-sum").setText(t("\u8FD8\u6CA1\u6709 main: true \u7684\u4E3B\u7B14\u8BB0"));
        let D = this._dashBranchAll && o.branches.length > 6, O = D ? o.branches : o.branches.slice(0, 6), k = E.createDiv("lkm-filter-list lkm-branch-list"), P = o.branches[0] && o.branches[0].total || 1;
        for (let V of O) {
          let X = k.createDiv("lkm-branch-row");
          X.title = V.title + t("\uFF0C\u70B9\u51FB\u5728\u5BFC\u56FE\u4E2D\u6253\u5F00"), X.createSpan({ cls: "lkm-branch-name", text: Z(V.title, 10) });
          let Q = X.createDiv("lkm-type-bar").createDiv("lkm-branch-scaler");
          Q.style.width = Math.max(3, Math.round(V.total / P * 100)) + "%";
          let U = Q.createDiv("lkm-branch-done");
          U.style.width = (V.total ? Math.round(V.done / V.total * 100) : 0) + "%", X.createSpan({ cls: "lkm-type-num", text: V.done + "/" + V.total + " \xB7 " + Math.round(V.done / V.total * 100) + "%" }), X.addEventListener("click", () => {
            this.rootPath = V.path, this._view = null, this._kwFile = null, this._multiRoot = !1, this._mode = "map", this._expandedMem.clear(), this.render();
          });
        }
        if (o.branches.length > 6) {
          let V = E.createEl("button", { cls: "lkm-btn", text: D ? t("\u6536\u8D77") : t("\u5C55\u5F00\u5168\u90E8 ") + o.branches.length + t(" \u4E2A\u5206\u652F") });
          V.onclick = () => {
            this._dashBranchAll = !this._dashBranchAll, this.render();
          };
        }
      }
      let G = T.createDiv("lkm-dash-sec");
      G.createDiv("lkm-dash-h").setText(t("\u6700\u8FD1\u521B\u5EFA"));
      for (let D of o.recent)
        this._dashRow(G, D).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(D.file));
      if (o.modified.length) {
        G.createDiv("lkm-dash-h lkm-sec-gap").setText(t("\u6700\u8FD1\u4FEE\u6539"));
        for (let D of o.modified)
          this._dashRow(G, D).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(D.file));
      }
    } else
      this._renderTimelineDash(e);
  }
  _renderTimelineDash(e) {
    let i = [...qe(this.app, this.s).map.values()], a = e.createDiv({ cls: "lkm-tl-toolbar" }), n = a.createEl("input", { type: "text", cls: "lkm-tl-search", placeholder: t("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    n.value = this._tlSearch, n.addEventListener("input", () => {
      this._tlSearch = n.value.toLowerCase().trim(), this._renderTimelineBody(f, i);
    });
    let o = a.createEl("select", { cls: "lkm-tl-typesel" });
    o.createEl("option", { value: "", text: t("\u7C7B\u578B") });
    let c = [...new Set(i.map((u) => u.type).filter(Boolean))].sort();
    for (let u of c)
      o.createEl("option", { value: u, text: ce(u) });
    o.value = this._tlTypeFilter, o.addEventListener("change", () => {
      this._tlTypeFilter = o.value, this._renderTimelineBody(f, i);
    });
    let h = a.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [u, S] of [["all", t("\u65F6\u95F4")], ["day", t("\u4ECA\u65E5")], ["week", t("\u672C\u5468")], ["month", t("\u672C\u6708")], ["year", t("\u672C\u5E74")], ["pweek", t("\u8FD1\u4E00\u5468")], ["pmonth", t("\u8FD1\u4E00\u6708")], ["pyear", t("\u8FD1\u4E00\u5E74")]])
      h.createEl("option", { value: u, text: S });
    h.value = this._tlRange, h.addEventListener("change", () => {
      this._tlRange = h.value, this._renderTimelineBody(f, i);
    });
    let d = a.createEl("input", { type: "date", cls: "lkm-tl-datesel" });
    d.value = this._tlDateFilter, d.title = t("\u6309\u6307\u5B9A\u65E5\u671F\u7B5B\u9009"), d.addEventListener("change", () => {
      this._tlDateFilter = d.value, this._renderTimelineBody(f, i);
    });
    let l = a.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [u, S] of [["all", t("\u6027\u8D28")], ["zk", t("\u4E3B\u7B14\u8BB0")], ["normal", t("\u666E\u901A")]])
      l.createEl("option", { value: u, text: S });
    l.value = this._tlZkFilter, l.addEventListener("change", () => {
      this._tlZkFilter = l.value, this._renderTimelineBody(f, i);
    });
    let r = a.createEl("select", { cls: "lkm-tl-typesel" });
    r.createEl("option", { value: "all", text: t("\u72B6\u6001") }), r.createEl("option", { value: "nostatus", text: t("\u65E0\u72B6\u6001") });
    for (let u of Object.keys(this.s.statusColors || {}))
      r.createEl("option", { value: u, text: oe(u) });
    r.value = this._tlStatusFilter, r.addEventListener("change", () => {
      this._tlStatusFilter = r.value, this._renderTimelineBody(f, i);
    });
    let p = a.createEl("button", { cls: "lkm-btn lkm-tl-sortbtn", text: this._tlSort === "desc" ? t("\u65B0\u2192\u65E7") : t("\u65E7\u2192\u65B0") });
    p.addEventListener("click", () => {
      this._tlSort = this._tlSort === "desc" ? "asc" : "desc", p.textContent = this._tlSort === "desc" ? t("\u65B0\u2192\u65E7") : t("\u65E7\u2192\u65B0"), this._renderTimelineBody(f, i);
    });
    let g = a.createEl("button", { cls: "lkm-btn", text: t("\u6E05\u7A7A") });
    g.title = t("\u6E05\u7A7A\u6240\u6709\u7B5B\u9009\u6761\u4EF6"), g.addEventListener("click", () => {
      this._tlSearch = "", this._tlTypeFilter = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this.render();
    });
    let f = e.createDiv({ cls: "lkm-tl-body" });
    this._renderTimelineBody(f, i);
  }
  _renderTimelineBody(e, s) {
    e.empty();
    let i = s;
    if (this._tlTypeFilter && (i = i.filter((d) => d.type === this._tlTypeFilter)), this._tlSearch && (i = i.filter((d) => d.title.toLowerCase().includes(this._tlSearch))), this._tlZkFilter === "zk" ? i = i.filter((d) => d.zk) : this._tlZkFilter === "normal" && (i = i.filter((d) => !d.zk)), this._tlStatusFilter === "nostatus" ? i = i.filter((d) => !d.status) : this._tlStatusFilter && this._tlStatusFilter !== "all" && (i = i.filter((d) => d.status === this._tlStatusFilter)), this._tlDateFilter)
      i = i.filter((d) => d.ctime && d.ctime.slice(0, 10) === this._tlDateFilter);
    else if (this._tlRange !== "all") {
      let d = /* @__PURE__ */ new Date(), l = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"), r = /* @__PURE__ */ new Date(l), p = null;
      if (this._tlRange === "day" ? p = r : this._tlRange === "week" || this._tlRange === "pweek" ? p = new Date(r.getTime() - 6 * 864e5) : this._tlRange === "month" || this._tlRange === "pmonth" ? p = new Date(r.getTime() - 29 * 864e5) : (this._tlRange === "year" || this._tlRange === "pyear") && (p = new Date(r.getTime() - 364 * 864e5)), p) {
        let g = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0");
        i = i.filter((f) => {
          if (!f.ctime) return !1;
          let u = f.ctime.slice(0, 10);
          return u >= g && u <= l;
        });
      }
    }
    let a = i.filter((d) => d.ctime), n = i.filter((d) => !d.ctime);
    a.sort((d, l) => this._tlSort === "desc" ? String(l.ctime).localeCompare(String(d.ctime)) : String(d.ctime).localeCompare(String(l.ctime)));
    let o = [], c = null, h = null;
    for (let d of a) {
      let l = d.ctime.slice(0, 10);
      l !== c && (c = l, h = { key: l, items: [] }, o.push(h)), h.items.push(d);
    }
    for (let d of o) {
      let l = e.createDiv({ cls: "lkm-tl-day" }), [r, p, g] = d.key.split("-"), f = new Date(parseInt(r), parseInt(p) - 1, parseInt(g)), u = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][f.getDay()];
      l.createDiv({ cls: "lkm-tl-day-label", text: d.key + " " + t("\u5468") + u + " (" + d.items.length + ")" });
      let S = l.createDiv({ cls: "lkm-tl-items" });
      for (let x of d.items)
        this._renderTimelineItem(S, x);
    }
    if (n.length) {
      let d = e.createDiv({ cls: "lkm-tl-day lkm-tl-nodate" });
      d.createDiv({ cls: "lkm-tl-day-label", text: t("\u65E0\u65E5\u671F") + " (" + n.length + ")" });
      let l = d.createDiv({ cls: "lkm-tl-items" });
      for (let r of n)
        this._renderTimelineItem(l, r);
    }
    i.length || e.createDiv({ cls: "lkm-tl-empty", text: t("\u6682\u65E0\u7B14\u8BB0") });
  }
  _renderTimelineItem(e, s) {
    let i = e.createDiv({ cls: "lkm-tl-item" }), a = i.createDiv({ cls: "lkm-tl-item-content" });
    if (s.type) {
      let c = this.s.typeColors && this.s.typeColors[s.type], h = a.createEl("span", { cls: "lkm-tl-badge", text: ce(s.type) });
      c && (h.style.background = c);
    }
    if (s.zk && a.createEl("span", { cls: "lkm-tl-main-badge", text: t("\u4E3B\u7B14\u8BB0") }), a.createEl("span", { cls: "lkm-tl-title", text: s.title }), s.status) {
      let c = a.createEl("span", { cls: "lkm-tl-status", text: oe(s.status) }), h = et(this.s, s.status);
      h && (c.style.background = h);
    }
    i.addEventListener("click", (c) => {
      c.target.closest("a") || (this.app.workspace.openLinkText(s.file.basename, s.file.path, c.ctrlKey || c.metaKey), this.locateFile(s.file, !0));
    });
    let n = /* @__PURE__ */ _((c, h) => {
      let d = new Ne();
      d.addItem((l) => {
        l.setTitle(t("\u5728\u65B0\u6807\u7B7E\u6253\u5F00")).setIcon("file-plus").onClick(() => {
          this.app.workspace.openLinkText(s.file.basename, s.file.path, !0);
        });
      }), d.addItem((l) => {
        l.setTitle(t("\u5728\u5BFC\u56FE\u4E2D\u663E\u793A")).setIcon("git-fork").onClick(() => {
          this._mode = "map", this.locateFile(s.file, !0);
          let r = this._selKey ? this._nodeIndex.get(this._selKey) : null;
          if (!r || !r.note.file || r.note.file.path !== s.file.path) {
            this.rootPath = s.file.path, this._kwFile = null, this._multiRoot = !1, this._multiRootPaths = [], this.render();
            for (let p of this._nodeIndex.values())
              if (p.note.file && p.note.file.path === s.file.path && !p.isAlias) {
                this._selKey = p.key;
                break;
              }
            this.render();
          }
        });
      }), d.showAtPosition({ x: c, y: h });
    }, "showMenu");
    i.addEventListener("contextmenu", (c) => {
      c.preventDefault(), n(c.clientX, c.clientY);
    });
    let o = null;
    i.addEventListener("touchstart", (c) => {
      let h = c.touches[0];
      o = setTimeout(() => {
        o = null, n(h.clientX, h.clientY);
      }, 500);
    }, { passive: !0 }), i.addEventListener("touchmove", () => {
      o && (clearTimeout(o), o = null);
    }, { passive: !0 }), i.addEventListener("touchend", () => {
      o && (clearTimeout(o), o = null);
    }, { passive: !0 });
  }
  _dashRow(e, s) {
    let i = this.s, a = e.createDiv("lkm-recent-row");
    a.title = s.isIndex ? s.title + t("\uFF0C\u70B9\u51FB\u6253\u5F00\u5173\u952E\u8BCD\u89C6\u56FE") : s.title + t("\uFF0C\u70B9\u51FB\u6253\u5F00\u7B14\u8BB0");
    let n = (i.typeColors || {})[s.type];
    if (n && (a.createSpan({ cls: "lkm-recent-dot" }).style.background = n), a.createSpan({ cls: "lkm-recent-name", text: Z(s.title, 14) }), s.created && !s.mtime && a.createSpan({ cls: "lkm-recent-date", text: s.created }), s.mtime && a.createSpan({ cls: "lkm-recent-date", text: s.mtime }), !s.isIndex) {
      let o = a.createSpan({ cls: "lkm-row-jump", title: t("\u5728\u5BFC\u56FE\u4E2D\u5B9A\u4F4D") });
      try {
        ct(o, "crosshair");
      } catch {
      }
      o.addEventListener("click", (c) => {
        c.stopPropagation(), this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._dashFilters = [], this.locateFile(s.file);
      });
    }
    return a;
  }
  _renderDonut(e, s, i) {
    let h = 2 * Math.PI * 49, d = j("svg", { class: "lkm-donut-svg", viewBox: "0 0 116 116", width: 116, height: 116 });
    d.appendChild(j("circle", { cx: 58, cy: 58, r: 49, fill: "none", stroke: "var(--background-secondary)", "stroke-width": 13 }));
    let l = s.reduce((f, u) => f + u.value, 0), r = 0;
    for (let f of s) {
      let u = l ? f.value / l : 0;
      if (!u) continue;
      let S = Math.max(0, u * h - 2.5), x = j("circle", {
        cx: 58,
        cy: 58,
        r: 49,
        fill: "none",
        stroke: f.color,
        "stroke-width": 13,
        "stroke-linecap": "butt",
        "stroke-dasharray": S + " " + (h - S),
        "stroke-dashoffset": -(r * h),
        transform: "rotate(-90 58 58)",
        class: "lkm-donut-seg" + (this._isFilterActive(f.filter) ? " is-active" : "")
      });
      x.addEventListener("click", () => this._toggleDashFilter(f.filter)), d.appendChild(x), r += u;
    }
    let p = j("text", { x: 58, y: 57, class: "lkm-donut-num", "text-anchor": "middle" });
    p.textContent = String(i), d.appendChild(p);
    let g = j("text", { x: 58, y: 71, class: "lkm-donut-cap", "text-anchor": "middle" });
    g.textContent = t("\u603B\u7B14\u8BB0"), d.appendChild(g), e.appendChild(d);
  }
  _renderBarChart(e, s, i) {
    i = i || {};
    let a = i.height || 120, n = 16, o = 18, c = Math.max(e.clientWidth || 300, 120), h = Math.max(1, ...s.map((p) => p.value)), d = c / Math.max(s.length, 1), l = a - n - o, r = j("svg", { class: "lkm-bars-svg", viewBox: "0 0 " + c + " " + a, preserveAspectRatio: "none", width: "100%", height: a });
    for (let p = 1; p <= 3; p++) {
      let g = n + l * (1 - p / 3);
      r.appendChild(j("line", { x1: 0, y1: g, x2: c, y2: g, class: "lkm-bars-grid" }));
    }
    s.forEach((p, g) => {
      let f = p.value > 0 ? Math.max(3, l * p.value / h) : 0, u = g * d + d * 0.22, S = d * 0.56, x = a - o - f, C = j("rect", { x: u, y: x, width: S, height: f, rx: Math.min(4, S / 2), class: "lkm-bar" + (this._isFilterActive(p.filter) ? " is-active" : "") });
      if (p.color && (C.style.fill = p.color), p.filter && C.addEventListener("click", () => this._toggleDashFilter(p.filter)), r.appendChild(C), p.value > 0) {
        let M = j("text", { x: u + S / 2, y: x - 4, class: "lkm-bars-val", "text-anchor": "middle" });
        M.textContent = String(p.value), r.appendChild(M);
      }
      if (!i.thinLabels || g % 2 === 0) {
        let M = j("text", { x: u + S / 2, y: a - 5, class: "lkm-bars-lab", "text-anchor": "middle" });
        M.textContent = p.label, r.appendChild(M);
      }
    }), e.appendChild(r);
  }
  _isFilterActive(e) {
    return (this._dashFilters || []).some((s) => s.kind === e.kind && (s.value || "") === (e.value || ""));
  }
  _toggleDashFilter(e) {
    this._dashFilters = this._dashFilters || [];
    let s = { notype: "type", type: "notype" };
    if (e.kind === "all" || e.kind === "kw")
      this._dashFilters = this._isFilterActive(e) ? [] : [Object.assign({}, e)];
    else {
      let i = this._dashFilters.findIndex((a) => a.kind === e.kind && (a.value || "") === (e.value || ""));
      if (i >= 0) this._dashFilters.splice(i, 1);
      else {
        let a = s[e.kind];
        a && this._dashFilters.some((n) => n.kind === a) && (this._dashFilters = this._dashFilters.filter((n) => n.kind !== a)), this._dashFilters = this._dashFilters.filter((n) => n.kind !== "all" && n.kind !== "kw"), this._dashFilters.push(e);
      }
    }
    this.render(), this._dashFilters.length && requestAnimationFrame(() => {
      let i = this.contentEl.querySelector(".lkm-filter-sec");
      i && i.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _dashFilterLabel(e) {
    return e.kind === "all" ? t("\u5168\u90E8\u7B14\u8BB0") : e.kind === "zk" ? t("\u4E3B\u7B14\u8BB0") : e.kind === "kw" ? t("\u5173\u952E\u8BCD\u7D22\u5F15") : e.kind === "status" ? oe(e.value) : e.kind === "nostatus" ? t("\u65E0\u72B6\u6001") : e.kind === "orphan" ? t("\u672A\u5173\u8054") : e.kind === "type" ? t("\u7C7B\u578B\uFF1A") + ce(e.value) : e.kind === "notype" ? t("\u672A\u6807\u6CE8\u7C7B\u578B") : e.kind === "date" || e.kind === "month" ? t("\u521B\u5EFA\u4E8E ") + e.value : e.kind === "depth" ? t("\u7B2C") + e.value + t("\u5C42") : e.kind === "nodate" ? t("\u672A\u6807\u65E5\u671F") : t("\u7B5B\u9009");
  }
  _dashFilterGroupLabel(e) {
    let s = /* @__PURE__ */ new Set(["date", "month", "type", "depth", "status"]), i = /* @__PURE__ */ new Map(), a = [];
    for (let o of e)
      s.has(o.kind) ? (i.has(o.kind) || i.set(o.kind, []), i.get(o.kind).push(o)) : a.push(o);
    let n = [];
    for (let [o, c] of i) {
      if (c.length === 1) {
        n.push(this._dashFilterLabel(c[0]));
        continue;
      }
      let h = t(o === "date" || o === "month" ? "\u521B\u5EFA\u4E8E " : o === "type" ? "\u7C7B\u578B\uFF1A" : o === "status" ? "\u72B6\u6001\uFF1A" : "\u7B2C"), d = o === "depth" ? t(" \u5C42") : "", l = o === "status" ? (r) => oe(r.value) : o === "type" ? (r) => ce(r.value) : (r) => r.value;
      n.push(h + c.map(l).join("\u3001") + d);
    }
    for (let o of a) n.push(this._dashFilterLabel(o));
    return n.join(" + ");
  }
  _dashFilterItems(e) {
    let s = [...this.notes.values()], i = this._depthMap();
    if (e.find((d) => d.kind === "kw")) {
      let d = this.app.vault.getAbstractFileByPath(te(this.s.indexFolder)), l = new Set((d && d.children ? d.children : []).filter((r) => r instanceof Me && r.extension === "md").map((r) => r.path));
      s = s.filter((r) => l.has(r.file.path));
    }
    let n = e.filter((d) => d.kind !== "kw"), o = /* @__PURE__ */ new Set(["date", "month", "type", "depth", "status"]), c = /* @__PURE__ */ new Map(), h = [];
    for (let d of n)
      o.has(d.kind) ? (c.has(d.kind) || c.set(d.kind, []), c.get(d.kind).push(d)) : h.push(d);
    for (let [d, l] of c)
      d === "date" ? s = s.filter((r) => l.some((p) => r.date === p.value)) : d === "month" ? s = s.filter((r) => l.some((p) => (r.date || "").slice(0, 7) === p.value)) : d === "type" ? s = s.filter((r) => l.some((p) => r.type === p.value)) : d === "depth" ? s = s.filter((r) => l.some((p) => String(i.get(r.file.path) || 0) === p.value)) : d === "status" && (s = s.filter((r) => l.some((p) => r.status === p.value)));
    for (let d of h)
      d.kind === "zk" ? s = s.filter((l) => l.zk) : d.kind === "nostatus" ? s = s.filter((l) => !l.status) : d.kind === "orphan" ? s = s.filter((l) => !this.referenced.has(l.file.path)) : d.kind === "notype" ? s = s.filter((l) => !l.type) : d.kind === "nodate" && (s = s.filter((l) => !l.date));
    return s.map((d) => ({ title: d.title, created: d.date || "", type: d.type || "", file: d.file }));
  }
  _sortDashItems(e) {
    let s = this._dashSort || "date", i = e.slice();
    return s === "name" ? i.sort((a, n) => String(a.title).localeCompare(String(n.title), "zh")) : i.sort((a, n) => String(n.created || "").localeCompare(String(a.created || ""))), i;
  }
  _ds(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  _depthMap() {
    let e = /* @__PURE__ */ new Map(), s = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!s) return e;
    let i = ze(this.app, this.notes, s);
    return (/* @__PURE__ */ _((function a(n, o) {
      n.note.file && !e.has(n.note.file.path) && e.set(n.note.file.path, o), n.children.forEach((c) => a(c, o + 1));
    }), "walk"))(i, 1), e;
  }
  _dashSummaryMd(e) {
    let s = [];
    s.push(t("## \u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE\u5DE5\u4F5C\u53F0\u7EDF\u8BA1 ") + this._ds(/* @__PURE__ */ new Date())), s.push(""), s.push(t("| \u6307\u6807 | \u6570\u91CF |")), s.push("| --- | --- |"), s.push(t("| \u7B14\u8BB0\u603B\u6570 | ") + e.total + " |"), s.push(t("| \u4E3B\u7B14\u8BB0 | ") + e.zk + " |"), s.push(t("| \u5173\u952E\u8BCD\u7D22\u5F15 | ") + e.kw + " |"), s.push(t("| \u672A\u5173\u8054 | ") + e.orphan + " |");
    for (let i of e.byStatusOrder) s.push("| " + oe(i.name) + " | " + i.count + " |");
    if (e.noStatus && s.push(t("| \u65E0\u72B6\u6001 | ") + e.noStatus + " |"), s.push(t("| \u672A\u6807\u6CE8\u7C7B\u578B | ") + e.noType + " |"), s.push(t("| \u672A\u6807\u65E5\u671F | ") + e.noDate + " |"), s.push(""), e.byTypeOrder.length) {
      s.push(t("### \u7C7B\u578B\u5206\u5E03")), s.push(t("| \u7C7B\u578B | \u6570\u91CF | \u5360\u6BD4 |")), s.push("| --- | --- | --- |");
      for (let i of e.byTypeOrder) s.push("| " + ce(i.name) + " | " + i.count + " | " + (e.total ? Math.round(i.count / e.total * 100) : 0) + "% |");
      s.push("");
    }
    if (e.depthMax) {
      s.push(t("### \u6811\u6DF1\u5EA6\u5206\u5E03")), s.push(t("| \u5C42\u7EA7 | \u6570\u91CF |")), s.push("| --- | --- |");
      for (let i = 1; i <= e.depthMax; i++) e.depthCount.has(i) && s.push(t("| \u7B2C") + i + t("\u5C42 | ") + e.depthCount.get(i) + " |");
      s.push("");
    }
    if (e.monthly.length) {
      s.push(t("### \u8FD112\u4E2A\u6708\u521B\u5EFA")), s.push(t("| \u6708\u4EFD | \u65B0\u589E |")), s.push("| --- | --- |");
      for (let i of e.monthly) s.push("| " + i.key + " | " + i.count + " |");
      s.push("");
    }
    if (e.branches.length) {
      s.push(t("### \u5206\u652F\u5206\u5E03\uFF08\u5DF2\u5B8C\u6210/\u603B\u6570\uFF09"));
      for (let i of e.branches) s.push("- " + i.title + "\uFF1A" + i.done + "/" + i.total);
      s.push("");
    }
    return s.join(`
`);
  }
  _dashStats() {
    let e = [...this.notes.values()], s = e.length, i = e.filter((k) => k.zk).length, a = this.s.statusColors || {}, n = /* @__PURE__ */ new Map(), o = 0;
    for (let k of e)
      k.status ? n.set(k.status, (n.get(k.status) || 0) + 1) : o++;
    let c = Object.keys(a).filter((k) => n.has(k)).map((k) => ({ name: k, color: a[k], count: n.get(k) }));
    for (let [k, P] of n) a[k] || c.push({ name: k, color: "var(--text-faint)", count: P });
    let h = n.get("\u5DF2\u5B8C\u6210") || 0, d = n.get("\u5F85\u529E") || 0, l = e.filter((k) => !k.date).length, r = e.filter((k) => !this.referenced.has(k.file.path)).length, p = this.s.typeColors || {}, g = /* @__PURE__ */ new Map(), f = 0;
    for (let k of e)
      k.type ? g.set(k.type, (g.get(k.type) || 0) + 1) : f++;
    let u = Object.keys(p).filter((k) => g.has(k)).map((k) => ({ name: k, color: p[k], count: g.get(k) }));
    for (let [k, P] of g) p[k] || u.push({ name: k, color: "var(--text-faint)", count: P });
    let S = this._depthMap(), x = /* @__PURE__ */ new Map();
    for (let k of S.values()) k && x.set(k, (x.get(k) || 0) + 1);
    let C = x.size ? Math.max(...x.keys()) : 0, M = /* @__PURE__ */ new Date();
    M.setHours(0, 0, 0, 0);
    let w = [];
    for (let k = 11; k >= 0; k--) {
      let P = new Date(M.getFullYear(), M.getMonth() - k, 1);
      w.push({ key: P.getFullYear() + "-" + String(P.getMonth() + 1).padStart(2, "0"), count: 0 });
    }
    for (let k of e) {
      if (!k.date) continue;
      let P = w.find((V) => V.key === k.date.slice(0, 7));
      P && P.count++;
    }
    let F = 0, y = this.app.vault.getAbstractFileByPath(te(this.s.indexFolder));
    y && y.children && (F = y.children.filter((k) => k instanceof Me && k.extension === "md").length);
    let I = /* @__PURE__ */ new Map();
    for (let k of e) k.date && I.set(k.date, (I.get(k.date) || 0) + 1);
    let T = e.filter((k) => k.zk).map((k) => {
      let P = ze(this.app, this.notes, k), V = 0, X = 0, Q = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ _((function U(q) {
        if (q.note.file) {
          if (Q.has(q.note.file.path)) return;
          Q.add(q.note.file.path);
        }
        V++, q.note.status === "\u5DF2\u5B8C\u6210" && X++;
        for (let $ of q.children) U($);
      }), "walk"))(P), { path: k.file.path, title: k.title, total: V, done: X };
    }).sort((k, P) => P.total - k.total), E = /* @__PURE__ */ _((k) => ({ title: k.title, created: k.date || "", type: k.type || "", file: k.file }), "toItem"), B = e.filter((k) => k.date).sort((k, P) => String(P.date).localeCompare(String(k.date))).slice(0, 8).map(E), G = e.slice().sort((k, P) => (P.file.stat && P.file.stat.mtime || 0) - (k.file.stat && k.file.stat.mtime || 0)).slice(0, 6).map((k) => {
      let P = E(k);
      try {
        let V = new Date(k.file.stat.mtime);
        P.mtime = String(V.getFullYear()).slice(2) + "-" + String(V.getMonth() + 1).padStart(2, "0") + "-" + String(V.getDate()).padStart(2, "0") + " " + String(V.getHours()).padStart(2, "0") + ":" + String(V.getMinutes()).padStart(2, "0");
      } catch {
      }
      return P;
    }), D = 0, O = 0;
    for (let k of e)
      for (let P of k.childLinks) {
        D++;
        let V = this.app.metadataCache.getFirstLinkpathDest(P, k.file.path);
        (!V || !this.notes.has(V.path)) && O++;
      }
    return { total: s, zk: i, done: h, todo: d, noDate: l, orphan: r, noType: f, byTypeOrder: u, byStatusOrder: c, noStatus: o, depthCount: x, depthMax: C, monthly: w, kw: F, heat: I, branches: T, recent: B, modified: G, linkCount: D, deadLinks: O };
  }
};
_(St, "LinkMindmapView");
var De = St, Ct = class extends Nt {
  constructor(e, s) {
    super(e, s), this.plugin = s;
  }
  display() {
    let { containerEl: e } = this;
    e.empty();
    let s = e.createDiv("lkm-settings-title");
    s.createEl("h2", { text: t("Link Mindmap \u8BBE\u7F6E") });
    let i = this.plugin.settings.settingSections || ["basic", "fields", "layout", "behavior", "display", "colors", "types", "statuses", "presets", "io"], a = {
      basic: t("\u57FA\u672C\u8BBE\u7F6E"),
      fields: t("\u5B57\u6BB5\u540D\u914D\u7F6E"),
      layout: t("\u5E03\u5C40\u914D\u7F6E"),
      behavior: t("\u884C\u4E3A\u914D\u7F6E"),
      display: t("\u663E\u793A\u914D\u7F6E"),
      colors: t("\u989C\u8272\u914D\u7F6E"),
      types: t("\u7C7B\u578B\u914D\u7F6E"),
      statuses: t("\u72B6\u6001\u914D\u7F6E"),
      presets: t("\u5BFC\u56FE\u9884\u8BBE"),
      io: t("\u914D\u7F6E\u5BFC\u5165/\u5BFC\u51FA")
    }, n = this, o = {}, c = s.createEl("select", { cls: "lkm-jump-sel" });
    c.createEl("option", { value: "", text: t("\u8DF3\u8F6C\u5230\u2026") });
    for (let l of i) c.createEl("option", { value: l, text: a[l] || l });
    c.addEventListener("change", () => {
      let l = c.value;
      if (!l) return;
      let r = o[l];
      r && r.scrollIntoView({ behavior: "smooth", block: "start" }), c.value = "";
    });
    let h = (l) => {
      let r = e.createEl("h3", { cls: "lkm-sec-h" });
      r.createEl("span", { text: a[l] || l }), o[l] = r;
    }, d = {
      basic() {
        new R(e).setName(t("\u8BED\u8A00")).setDesc(t("\u754C\u9762\u8BED\u8A00\uFF08\u81EA\u52A8\u8DDF\u968F Obsidian \u8BBE\u7F6E\uFF09")).addDropdown((r) => {
          r.addOption("auto", t("\u81EA\u52A8") + " (Auto)"), r.addOption("zh", t("\u4E2D\u6587")), r.addOption("en", "English"), r.setValue(n.plugin.settings.language || "auto"), r.onChange(async (p) => {
            n.plugin.settings.language = p, await n.plugin.saveSettings(), n.plugin._initLang(), n.display();
          });
        }), new R(e).setName(t("\u7B14\u8BB0\u6587\u4EF6\u5939")).setDesc(t("\u5B58\u653E\u5361\u7247\u7B14\u8BB0\u7684\u76EE\u5F55")).addText((r) => r.setValue(n.plugin.settings.mainFolder).onChange(async (p) => {
          n.plugin.settings.mainFolder = p.trim(), await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u5939")).setDesc(t("\u5B58\u653E\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u7684\u76EE\u5F55")).addText((r) => r.setValue(n.plugin.settings.indexFolder).onChange(async (p) => {
          n.plugin.settings.indexFolder = p.trim(), await n.plugin.saveSettings();
        })), new R(e).setName(t("\u6A21\u677F\u6587\u4EF6\u5939")).setDesc(t("\u6A21\u677F\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u65B0\u5EFA\u8282\u70B9\u65F6\u6A21\u677F\u4E0B\u62C9\u5217\u8868\u4ECE\u6B64\u6587\u4EF6\u5939\u8BFB\u53D6")).addText((r) => r.setValue(n.plugin.settings.templateFolder).onChange(async (p) => {
          n.plugin.settings.templateFolder = p.trim(), await n.plugin.saveSettings(), n.display();
        }));
        let l = (() => {
          let r = (n.plugin.settings.templateFolder || "").trim();
          if (!r) return [];
          let p = n.plugin.app.vault.getAbstractFileByPath(te(r));
          return !p || !p.children ? [] : p.children.filter((g) => g instanceof Me && g.extension === "md");
        })();
        new R(e).setName(t("\u9ED8\u8BA4\u6A21\u677F")).setDesc(t("\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u6A21\u677F\uFF08\u53EF\u9009\uFF09")).addDropdown((r) => {
          r.addOption("", t("\u4E0D\u9009"));
          for (let p of l) r.addOption(p.path, p.basename);
          r.setValue(n.plugin.settings.templatePath || ""), r.onChange(async (p) => {
            n.plugin.settings.templatePath = p, await n.plugin.saveSettings();
          });
        });
      },
      fields() {
        new R(e).setName(t("\u5B50\u8282\u70B9\u94FE\u63A5\u5B57\u6BB5")).setDesc(t("\u7236\u7B14\u8BB0\u4E2D\u5B58\u653E\u5B50\u7B14\u8BB0\u94FE\u63A5\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 children\uFF09")).addText((l) => l.setValue(n.plugin.settings.linkField).onChange(async (r) => {
          n.plugin.settings.linkField = r.trim() || "children", await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u7236\u8282\u70B9\u53CD\u5411\u94FE\u63A5\u5B57\u6BB5")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u5199\u5165\u5B50\u7B14\u8BB0\u7684\u7236\u94FE\u63A5\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 parent\uFF09")).addText((l) => l.setValue(n.plugin.settings.backField).onChange(async (r) => {
          n.plugin.settings.backField = r.trim() || "parent", await n.plugin.saveSettings();
        })), new R(e).setName(t("\u4E3B\u7B14\u8BB0\u6807\u8BB0\u5B57\u6BB5")).setDesc(t("\u6807\u8BB0\u5BFC\u56FE\u4E3B\u5165\u53E3\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 main\uFF09")).addText((l) => l.setValue(n.plugin.settings.zkField).onChange(async (r) => {
          n.plugin.settings.zkField = r.trim() || "main", await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u72B6\u6001\u5B57\u6BB5")).setDesc(t("\u6807\u8BB0\u7B14\u8BB0\u5DE5\u4F5C\u72B6\u6001\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 status\uFF09")).addText((l) => l.setValue(n.plugin.settings.statusField).onChange(async (r) => {
          n.plugin.settings.statusField = r.trim() || "status", await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u7C7B\u578B\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u7C7B\u578B\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 type\uFF09")).addText((l) => l.setValue(n.plugin.settings.typeField).onChange(async (r) => {
          n.plugin.settings.typeField = r.trim() || "type", await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u65E5\u671F\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u521B\u5EFA\u65E5\u671F\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 date\uFF09")).addText((l) => l.setValue(n.plugin.settings.dateField).onChange(async (r) => {
          n.plugin.settings.dateField = r.trim() || "date", await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u6807\u9898\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u6807\u9898\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 title\uFF09\u3002frontmatter \u4E2D\u6709\u8BE5\u5B57\u6BB5\u65F6\u8282\u70B9\u663E\u793A\u5176\u503C\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u540D\uFF1B\u91CD\u547D\u540D\u65F6\u540C\u6B65\u66F4\u65B0\u8BE5\u5B57\u6BB5")).addText((l) => l.setValue(n.plugin.settings.titleField).onChange(async (r) => {
          n.plugin.settings.titleField = r.trim() || "title", await n.plugin.saveSettings(), n.plugin.refreshViews();
        }));
      },
      layout() {
        new R(e).setName(t("\u9ED8\u8BA4\u663E\u793A\u5C42\u6570")).setDesc(t("\u6253\u5F00\u65F6\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")).addText((l) => l.setValue(String(n.plugin.settings.defaultDepth)).onChange(async (r) => {
          n.plugin.settings.defaultDepth = Math.max(1, parseInt(r, 10) || 3), await n.plugin.saveSettings();
          for (let p of n.plugin.app.workspace.getLeavesOfType(me))
            p.view instanceof De && (p.view.depth = n.plugin.settings.defaultDepth, p.view._expandedMem.clear());
          n.plugin.refreshViews();
        })), new R(e).setName(t("\u540D\u79F0\u6700\u5927\u5B57\u6570")).setDesc(t("\u8282\u70B9\u6807\u9898\u6700\u591A\u663E\u793A\u7684\u5B57\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7\uFF1B0 = \u663E\u793A\u5168\u90E8\u540D\u79F0")).addText((l) => l.setValue(String(n.plugin.settings.maxTitleLen)).onChange(async (r) => {
          n.plugin.settings.maxTitleLen = Math.max(0, parseInt(r, 10) || 0), await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u6C34\u5E73\u95F4\u8DDD")).setDesc(t("\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09")).addText((l) => l.setValue(String(n.plugin.settings.gapX)).onChange(async (r) => {
          n.plugin.settings.gapX = Math.max(10, parseInt(r, 10) || 60), await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u5782\u76F4\u95F4\u8DDD")).setDesc(t("\u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB")).addText((l) => l.setValue(String(n.plugin.settings.gapY)).onChange(async (r) => {
          n.plugin.settings.gapY = Math.max(0, parseInt(r, 10) || 8), await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u8282\u70B9\u9AD8\u5EA6")).setDesc(t("\u8282\u70B9\u5361\u7247\u9AD8\u5EA6")).addText((l) => l.setValue(String(n.plugin.settings.nodeHeight)).onChange(async (r) => {
          n.plugin.settings.nodeHeight = Math.max(30, parseInt(r, 10) || 46), await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u5E03\u5C40\u65B9\u5411")).setDesc(t("\u6A2A\u5411\uFF1A\u4ECE\u5DE6\u5230\u53F3\u5C55\u5F00\u5B50\u8282\u70B9\uFF1B\u7EB5\u5411\uFF1A\u4ECE\u4E0A\u5230\u4E0B\u5C55\u5F00\u5B50\u8282\u70B9")).addDropdown((l) => {
          l.addOption("h", t("\u6A2A\u5411\uFF08\u5DE6\u2192\u53F3\uFF09")), l.addOption("v", t("\u7EB5\u5411\uFF08\u4E0A\u2192\u4E0B\uFF09")), l.setValue(n.plugin.settings.layoutDir || "h"), l.onChange(async (r) => {
            n.plugin.settings.layoutDir = r, await n.plugin.saveSettings(), n.plugin.refreshViews();
          });
        });
      },
      behavior() {
        new R(e).setName(t("\u65B0\u5EFA\u65F6\u5199\u5165\u53CD\u5411\u94FE\u63A5")).setDesc(t("\u521B\u5EFA\u5B50\u8282\u70B9\u65F6\uFF0C\u5728\u5B50\u7B14\u8BB0\u91CC\u5199\u5165\u6307\u5411\u7236\u7B14\u8BB0\u7684 parent \u5B57\u6BB5\uFF08\u7EAF\u6587\u672C\u6587\u4EF6\u540D\uFF0C\u975E wikilink\uFF0C\u5173\u7CFB\u56FE\u8C31\u4E0D\u663E\u793A\u53CC\u5411\u7BAD\u5934\uFF09")).addToggle((l) => l.setValue(n.plugin.settings.autoAddBackLink).onChange(async (r) => {
          n.plugin.settings.autoAddBackLink = r, await n.plugin.saveSettings();
        })), new R(e).setName(t("\u81EA\u52A8\u5B9A\u4F4D\u5F53\u524D\u7B14\u8BB0")).setDesc(t("\u6253\u5F00\u7B14\u8BB0\u65F6\uFF0C\u5BFC\u56FE\u81EA\u52A8\u5C55\u5F00\u5176\u6240\u5728\u5206\u652F\u3001\u9009\u4E2D\u5E76\u5C45\u4E2D\u8BE5\u8282\u70B9")).addToggle((l) => l.setValue(n.plugin.settings.autoLocate).onChange(async (r) => {
          n.plugin.settings.autoLocate = r, await n.plugin.saveSettings();
        }));
      },
      display() {
        new R(e).setName(t("\u663E\u793A\u521B\u5EFA\u65F6\u95F4")).setDesc(t("\u4E0E\u7C7B\u578B/\u5B50\u6570\u540C\u884C\u663E\u793A\u521B\u5EFA\u65E5\u671F\uFF08\u4F18\u5148\u53D6 frontmatter \u7684 date \u5B57\u6BB5\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF09")).addToggle((l) => l.setValue(n.plugin.settings.showCreated).onChange(async (r) => {
          n.plugin.settings.showCreated = r, await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u663E\u793A\u7C7B\u578B")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A type \u6587\u672C")).addToggle((l) => l.setValue(n.plugin.settings.showType).onChange(async (r) => {
          n.plugin.settings.showType = r, await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u663E\u793A\u5B50\u8282\u70B9\u6570")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A\u5B50\u8282\u70B9\u6570\u91CF")).addToggle((l) => l.setValue(n.plugin.settings.showChildCount).onChange(async (r) => {
          n.plugin.settings.showChildCount = r, await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u663E\u793A\u6253\u5F00\u56FE\u6807")).setDesc(t("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \u270E \u6253\u5F00\u7B14\u8BB0\u6309\u94AE")).addToggle((l) => l.setValue(n.plugin.settings.showOpenIcon).onChange(async (r) => {
          n.plugin.settings.showOpenIcon = r, await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u663E\u793A\u65B0\u589E\u56FE\u6807")).setDesc(t("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \uFF0B \u65B0\u589E\u5B50\u8282\u70B9\u6309\u94AE")).addToggle((l) => l.setValue(n.plugin.settings.showAddIcon).onChange(async (r) => {
          n.plugin.settings.showAddIcon = r, await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u66F2\u7EBF\u8FDE\u63A5")).setDesc(t("\u8282\u70B9\u4E4B\u95F4\u7528\u66F2\u7EBF\u8FD8\u662F\u76F4\u7EBF")).addToggle((l) => l.setValue(n.plugin.settings.curve).onChange(async (r) => {
          n.plugin.settings.curve = r, await n.plugin.saveSettings(), n.plugin.refreshViews();
        }));
      },
      colors() {
        new R(e).setName(t("\u4E3B\u8272")).setDesc(t("\u56FE\u6807\u6309\u94AE\u3001\u8FDE\u63A5\u7EBF\u7B49\u754C\u9762\u5143\u7D20\u989C\u8272")).addColorPicker((l) => l.setValue(n.plugin.settings.accent).onChange(async (r) => {
          n.plugin.settings.accent = r, await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u4E3B\u7B14\u8BB0\u989C\u8272")).setDesc(t("main: true \u8282\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(n.plugin.settings.mainColor).onChange(async (r) => {
          n.plugin.settings.mainColor = r, await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u91CD\u590D\u8282\u70B9\u989C\u8272")).setDesc(t("\u540C\u4E00\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\u65F6\uFF0C\u5176\u72B6\u6001\u5706\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(n.plugin.settings.multiColor).onChange(async (r) => {
          n.plugin.settings.multiColor = r, await n.plugin.saveSettings(), n.plugin.refreshViews();
        })), new R(e).setName(t("\u9009\u4E2D\u989C\u8272")).setDesc(t("\u5355\u51FB\u9009\u4E2D\u7684\u8282\u70B9\u9AD8\u4EAE\u989C\u8272")).addColorPicker((l) => l.setValue(n.plugin.settings.selectedColor).onChange(async (r) => {
          n.plugin.settings.selectedColor = r, await n.plugin.saveSettings(), n.plugin.applyThemeVars();
        }));
      },
      types() {
        let l = n.plugin.settings.typeColors || (n.plugin.settings.typeColors = {});
        new R(e).setName(t("\u9ED8\u8BA4\u7C7B\u578B")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u7C7B\u578B\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((f) => {
          f.addOption("", t("\u4E0D\u9009"));
          for (let u of Object.keys(l)) f.addOption(u, ce(u));
          f.setValue(l[n.plugin.settings.defaultType] !== void 0 ? n.plugin.settings.defaultType : ""), f.onChange(async (u) => {
            n.plugin.settings.defaultType = u, await n.plugin.saveSettings();
          });
        });
        let r = "", p = /* @__PURE__ */ _(async () => {
          let f = r.trim();
          if (!f) {
            new v(t("\u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0"));
            return;
          }
          if (l[f] !== void 0) {
            new v(t("\u7C7B\u578B\u5DF2\u5B58\u5728\uFF1A") + f);
            return;
          }
          let u = ["#4ba3e5", "#e5534b", "#3fa66a", "#e5a44b", "#b07cff", "#8a6ae5", "#d978a8", "#5aa9a2"];
          l[f] = u[Object.keys(l).length % u.length], r = "", await n.plugin.saveSettings(), n.display();
        }, "addType");
        new R(e).setName(t("\u6DFB\u52A0\u7C7B\u578B")).setDesc(t("\u8F93\u5165\u540D\u79F0\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((f) => {
          f.setPlaceholder(t("\u7C7B\u578B\u540D\u79F0\uFF0C\u5982\uFF1A\u5F85\u529E")), f.onChange((u) => r = u), f.inputEl.addEventListener("keydown", (u) => {
            u.key === "Enter" && (u.preventDefault(), p());
          });
        }).addButton((f) => f.setButtonText(t("\u6DFB\u52A0")).setCta().onClick(p));
        let g = Object.keys(l);
        for (let f = 0; f < g.length; f++) {
          let u = g[f], S = f, x = n.plugin.settings.typeTemplates || (n.plugin.settings.typeTemplates = {}), C = n.plugin.app.vault.getAbstractFileByPath(te(n.plugin.settings.templateFolder || "99-\u6A21\u677F")), M = [{ path: "", name: t("\u9ED8\u8BA4") }];
          if (C && C.children) for (let w of C.children) w instanceof Me && w.extension === "md" && M.push({ path: w.path, name: w.basename });
          new R(e).setName(ce(u)).setDesc(t("type \u4E3A\u300C") + u + t("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((w) => {
            w.setValue(String(l[u])), w.onChange(async (F) => {
              F && F !== l[u] && (l[u] = F, await n.plugin.saveSettings(), n.plugin.refreshViews());
            });
          }).addDropdown((w) => {
            for (let F of M) w.addOption(F.path, F.name);
            w.setValue(x[u] || ""), w.onChange(async (F) => {
              F ? x[u] = F : delete x[u], await n.plugin.saveSettings();
            });
          }).addButton((w) => w.setIcon("chevron-up").setTooltip(t("\u4E0A\u79FB")).setDisabled(S === 0).onClick(async () => {
            let F = Object.entries(l);
            [F[S - 1], F[S]] = [F[S], F[S - 1]], n.plugin.settings.typeColors = Object.fromEntries(F), await n.plugin.saveSettings(), n.display();
          })).addButton((w) => w.setIcon("chevron-down").setTooltip(t("\u4E0B\u79FB")).setDisabled(S === g.length - 1).onClick(async () => {
            let F = Object.entries(l);
            [F[S + 1], F[S]] = [F[S], F[S + 1]], n.plugin.settings.typeColors = Object.fromEntries(F), await n.plugin.saveSettings(), n.display();
          })).addButton((w) => w.setIcon("trash").setTooltip(t("\u5220\u9664\u7C7B\u578B\uFF1A") + u).onClick(async () => {
            delete l[u], n.plugin.settings.defaultType === u && (n.plugin.settings.defaultType = ""), await n.plugin.saveSettings(), n.display();
          }));
        }
      },
      statuses() {
        let l = n.plugin.settings.statusColors || (n.plugin.settings.statusColors = {});
        new R(e).setName(t("\u9ED8\u8BA4\u72B6\u6001")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u72B6\u6001\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((f) => {
          f.addOption("", t("\u4E0D\u9009"));
          for (let u of Object.keys(l)) f.addOption(u, oe(u));
          f.setValue(l[n.plugin.settings.defaultStatus] !== void 0 ? n.plugin.settings.defaultStatus : ""), f.onChange(async (u) => {
            n.plugin.settings.defaultStatus = u, await n.plugin.saveSettings();
          });
        });
        let r = "", p = /* @__PURE__ */ _(async () => {
          let f = r.trim();
          if (!f) {
            new v(t("\u8BF7\u8F93\u5165\u72B6\u6001\u6807\u8BC6"));
            return;
          }
          if (l[f] !== void 0) {
            new v(t("\u72B6\u6001\u5DF2\u5B58\u5728\uFF1A") + f);
            return;
          }
          let u = ["#e5534b", "#e5a44b", "#3fa66a", "#7f8fa6", "#b07cff", "#4ba3e5", "#d978a8", "#5aa9a2"];
          l[f] = u[Object.keys(l).length % u.length], r = "", await n.plugin.saveSettings(), n.display();
        }, "addStatus");
        new R(e).setName(t("\u6DFB\u52A0\u72B6\u6001")).setDesc(t("\u8F93\u5165\u72B6\u6001\u6807\u8BC6\uFF08\u5982 todo/doing/done\uFF09\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((f) => {
          f.setPlaceholder(t("\u72B6\u6001\u6807\u8BC6\uFF0C\u5982\uFF1Atodo")), f.onChange((u) => r = u), f.inputEl.addEventListener("keydown", (u) => {
            u.key === "Enter" && (u.preventDefault(), p());
          });
        }).addButton((f) => f.setButtonText(t("\u6DFB\u52A0")).setCta().onClick(p));
        let g = Object.keys(l);
        for (let f = 0; f < g.length; f++) {
          let u = g[f], S = f;
          new R(e).setName(oe(u)).setDesc(t("status \u4E3A\u300C") + u + t("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((x) => {
            x.setValue(String(l[u])), x.onChange(async (C) => {
              C && C !== l[u] && (l[u] = C, await n.plugin.saveSettings(), n.plugin.refreshViews());
            });
          }).addButton((x) => x.setIcon("chevron-up").setTooltip(t("\u4E0A\u79FB")).setDisabled(S === 0).onClick(async () => {
            let C = Object.entries(l);
            [C[S - 1], C[S]] = [C[S], C[S - 1]], n.plugin.settings.statusColors = Object.fromEntries(C), await n.plugin.saveSettings(), n.display();
          })).addButton((x) => x.setIcon("chevron-down").setTooltip(t("\u4E0B\u79FB")).setDisabled(S === g.length - 1).onClick(async () => {
            let C = Object.entries(l);
            [C[S + 1], C[S]] = [C[S], C[S + 1]], n.plugin.settings.statusColors = Object.fromEntries(C), await n.plugin.saveSettings(), n.display();
          })).addButton((x) => x.setIcon("trash").setTooltip(t("\u5220\u9664\u72B6\u6001\uFF1A") + u).onClick(async () => {
            delete l[u], n.plugin.settings.defaultStatus === u && (n.plugin.settings.defaultStatus = ""), await n.plugin.saveSettings(), n.display();
          }));
        }
      },
      presets() {
        new R(e).setName(t("\u9884\u8BBE\u4FDD\u5B58\u4F4D\u7F6E")).setDesc(t("\u5BFC\u56FE\u9884\u8BBE\u548C\u81EA\u52A8\u72B6\u6001\u7684\u4FDD\u5B58\u8DEF\u5F84\u3002\u586B\u5199 vault \u5185\u6587\u4EF6\u8DEF\u5F84\uFF08\u5982 link-mindmap-presets.json\uFF09\u5219\u4FDD\u5B58\u5230\u8BE5\u6587\u4EF6\uFF0C\u53EF\u968F vault \u540C\u6B65\u5230\u5176\u4ED6\u8BBE\u5907\u5B9E\u73B0\u591A\u7AEF\u8FD8\u539F")).addText((l) => {
          l.setPlaceholder(t("link-mindmap-presets.json")), l.setValue(n.plugin.settings.savedViewLocation || ""), l.onChange(async (r) => {
            n.plugin.settings.savedViewLocation = r.trim(), await n.plugin.saveSettings(), r.trim() && await n.plugin._loadViewsFromFile();
          });
        });
      },
      io() {
        new R(e).setName(t("\u5BFC\u51FA\u914D\u7F6E")).setDesc(t("\u5C06\u5F53\u524D\u6240\u6709\u8BBE\u7F6E\u5BFC\u51FA\u4E3A JSON \u6587\u4EF6")).addButton((l) => l.setButtonText(t("\u5BFC\u51FA")).setCta().onClick(async () => {
          let r = JSON.stringify(n.plugin.settings, null, 2), g = "link-mindmap-config-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".json";
          try {
            await n.plugin.app.vault.create(g, r), new v(t("\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + g);
          } catch (f) {
            new v(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
          }
        })), new R(e).setName(t("\u5BFC\u5165\u914D\u7F6E")).setDesc(t("\u4ECE JSON \u6587\u4EF6\u5BFC\u5165\u8BBE\u7F6E\uFF08\u4F1A\u8986\u76D6\u5F53\u524D\u914D\u7F6E\uFF09")).addButton((l) => l.setButtonText(t("\u9009\u62E9\u6587\u4EF6")).onClick(() => {
          let r = document.createElement("input");
          r.type = "file", r.accept = ".json", r.onchange = async () => {
            let p = r.files[0];
            if (p)
              try {
                let g = await p.text(), f = JSON.parse(g);
                n.plugin.settings = Object.assign(n.plugin.settings, f), await n.plugin.saveSettings(), n.plugin.applyThemeVars(), n.plugin.refreshViews(), n.display(), new v(t("\u914D\u7F6E\u5DF2\u5BFC\u5165"));
              } catch (g) {
                new v(t("\u5BFC\u5165\u5931\u8D25\uFF1A") + (g && g.message ? g.message : g)), console.error("[link-mindmap] import config:", g);
              }
          }, r.click();
        })), new R(e).setName(t("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E")).setDesc(t("\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\uFF08\u4E0D\u4F1A\u5220\u9664\u7B14\u8BB0\uFF09")).addButton((l) => l.setButtonText(t("\u6062\u590D\u9ED8\u8BA4")).onClick(() => {
          new Le(n.app, t("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"), t("\u786E\u5B9A\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u5417\uFF1F"), async () => {
            n.plugin.settings = JSON.parse(JSON.stringify(ut)), await n.plugin.saveSettings(), n.plugin.applyThemeVars(), n.plugin.refreshViews(), n.display(), new v(t("\u5DF2\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"));
          }).open();
        }));
      }
    };
    for (let l = 0; l < i.length; l++) {
      h(i[l]);
      let r = d[i[l]];
      r && r();
    }
  }
};
_(Ct, "LinkMindmapSettingTab");
var zt = Ct, Ft = class extends Pt {
  async onload() {
    this._autoState = null, this._loadedPresets = [], await this.loadSettings(), this._initLang(), await this._loadViewsFromFile(), this.registerView(me, (s) => new De(s, this)), this.addRibbonIcon("git-merge", t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), () => this.activateView()), this.addCommand({ id: "open-link-mindmap", name: t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), callback: /* @__PURE__ */ _(() => this.activateView(), "callback") }), this.addCommand({ id: "open-timeline", name: t("\u6253\u5F00\u65F6\u95F4\u7EBF"), callback: /* @__PURE__ */ _(() => this.activateTimeline(), "callback") }), this.addCommand({ id: "normalize-frontmatter", name: t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), callback: /* @__PURE__ */ _(() => this._normalizeFrontmatter(), "callback") }), this.addCommand({ id: "normalize-frontmatter-current", name: t("\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), callback: /* @__PURE__ */ _(() => this._normalizeFrontmatter(!0), "callback") }), this.addCommand({ id: "check-links", name: t("\u68C0\u67E5\u94FE\u63A5\u5B8C\u6574\u6027"), callback: /* @__PURE__ */ _(() => this._checkLinks(), "callback") }), this.addCommand({ id: "clean-invalid-types", name: t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u7C7B\u578B"), callback: /* @__PURE__ */ _(() => this._cleanInvalidTypes(), "callback") }), this.addCommand({ id: "clean-invalid-status", name: t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u72B6\u6001"), callback: /* @__PURE__ */ _(() => this._cleanInvalidStatus(), "callback") }), this.addCommand({ id: "show-help", name: t("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), callback: /* @__PURE__ */ _(async () => {
      for (let s of this.app.workspace.getLeavesOfType(me))
        if (s.view instanceof De) {
          s.view._showHelp();
          return;
        }
      await this.activateView();
      for (let s of this.app.workspace.getLeavesOfType(me))
        s.view instanceof De && s.view._showHelp();
    }, "callback") }), this.addSettingTab(new zt(this.app, this)), this.applyThemeVars();
    let e = () => this.settings.savedViewLocation || "link-mindmap-presets.json";
    this.registerEvent(this.app.vault.on("create", (s) => {
      s.path === e() && (!this._autoState || !this._loadedPresets) && this._loadViewsFromFile().then(() => this._rebuildAllViews()).catch((i) => console.error("[link-mindmap] reload presets:", i)), this._onVaultChange(s);
    })), this.registerEvent(this.app.vault.on("modify", (s) => {
      s.path === e() && (!this._autoState || !this._loadedPresets) && this._loadViewsFromFile().then(() => this._rebuildAllViews()).catch((i) => console.error("[link-mindmap] reload presets:", i)), this._onVaultChange(s);
    })), this.registerEvent(this.app.vault.on("delete", (s) => this._onVaultChange(s))), this.registerEvent(this.app.vault.on("rename", (s, i) => this._onVaultChange(s, i))), this.registerEvent(this.app.metadataCache.on("changed", (s) => this._onVaultChange(s))), this.registerEvent(this.app.metadataCache.on("resolved", () => this._rebuildAllViews())), this.registerEvent(this.app.workspace.on("file-open", (s) => {
      for (let i of this.app.workspace.getLeavesOfType(me))
        i.view instanceof De && i.view.locateFile(s);
    }));
  }
  onunload() {
    clearTimeout(this._refreshTimer), this.app.workspace.detachLeavesOfType(me);
  }
  _onVaultChange(e, s) {
    let i = te(this.settings.mainFolder || ""), a = /* @__PURE__ */ _((o) => !!o && (o === i || o.startsWith(i + "/")), "inFolder"), n = e && e.path;
    e && e.extension && e.extension !== "md" && !a(s) || !a(n) && !a(s) || (clearTimeout(this._refreshTimer), this._refreshTimer = setTimeout(() => this._rebuildAllViews(), 400));
  }
  _rebuildAllViews() {
    for (let e of this.app.workspace.getLeavesOfType(me))
      e.view instanceof De && e.view.rebuild(!0);
  }
  async _checkLinks() {
    let e = this.settings, s = qe(this.app, e), i = e.linkField || "children", a = e.backField || "parent", n = [], o = [];
    for (let r of s.map.values()) {
      for (let p of r.childLinks) {
        let g = this.app.metadataCache.getFirstLinkpathDest(p, r.file.path);
        (!g || !s.map.has(g.path)) && n.push({ file: r.file, link: p, field: i });
      }
      for (let p of r.parentLinks) {
        let g = this.app.metadataCache.getFirstLinkpathDest(p, r.file.path);
        (!g || !s.map.has(g.path)) && o.push({ file: r.file, link: p, field: a });
      }
    }
    let c = n.length + o.length;
    if (c === 0) {
      new v(t("\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5\u901A\u8FC7 \u2713"));
      return;
    }
    let h = new ge(this.app);
    h.titleEl.setText(t("\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5"));
    let d = h.contentEl.createDiv();
    if (d.createEl("p", { text: t("\u53D1\u73B0 ") + c + t(" \u4E2A\u5931\u6548\u94FE\u63A5\uFF1A"), cls: "lkm-modal-sub" }), n.length) {
      d.createEl("h4", { text: t("\u5931\u6548\u5B50\u94FE\u63A5\uFF08children \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09") });
      let r = d.createEl("ul", { cls: "lkm-check-list" });
      for (let p of n) {
        let g = r.createEl("li");
        g.createEl("span", { text: p.file.basename + " \u2192 ", cls: "lkm-check-from" }), g.createEl("span", { text: p.link, cls: "lkm-check-broken" });
      }
    }
    if (o.length) {
      d.createEl("h4", { text: t("\u5931\u6548\u7236\u94FE\u63A5\uFF08parent \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09") });
      let r = d.createEl("ul", { cls: "lkm-check-list" });
      for (let p of o) {
        let g = r.createEl("li");
        g.createEl("span", { text: p.file.basename + " \u2192 ", cls: "lkm-check-from" }), g.createEl("span", { text: p.link, cls: "lkm-check-broken" });
      }
    }
    let l = d.createDiv("lkm-modal-btns");
    l.createEl("button", { cls: "lkm-btn lkm-btn-action", text: t("\u4FEE\u590D\u5168\u90E8") }).onclick = async () => {
      h.close(), new Le(this.app, t("\u4FEE\u590D\u5931\u6548\u94FE\u63A5"), t("\u6B64\u64CD\u4F5C\u5C06\u4ECE\u7B14\u8BB0\u7684 children/parent \u5B57\u6BB5\u4E2D\u5220\u9664\u5931\u6548\u94FE\u63A5\uFF0C\u4E0D\u53EF\u64A4\u9500\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), () => this._doFixBrokenLinks(allBroken)).open();
    }, l.createEl("button", { cls: "lkm-btn", text: t("\u5173\u95ED") }).onclick = () => h.close(), h.open();
  }
  async _doFixBrokenLinks(e) {
    let s = 0, i = /* @__PURE__ */ new Map();
    for (let a of e)
      i.has(a.file.path) || i.set(a.file.path, { file: a.file, links: [] }), i.get(a.file.path).links.push(a.link);
    for (let { file: a, links: n } of i.values())
      try {
        let o = await this.app.vault.read(a), c = o.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
        if (!c) continue;
        let h = c[1], d = o.slice(c[0].length), l = !1;
        for (let r of n) {
          let p = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), g = new RegExp(`^[ \\t]*- ["']?\\[\\[` + p + `(\\|[^\\]]*)?\\]\\]["']?[ \\t]*$`, "gm"), f = h.replace(g, "");
          if (f !== h) {
            h = f, l = !0;
            continue;
          }
          let u = new RegExp(`^[A-Za-z_][\\w-]*\\s*:\\s*["']?\\[\\[` + p + `(\\|[^\\]]*)?\\]\\]["']?[ \\t]*$`, "gm"), S = h.replace(u, "");
          S !== h && (h = S, l = !0);
        }
        l && (h = h.replace(/\n{3,}/g, `

`), await this.app.vault.modify(a, `---
` + h + `
---` + d), s++);
      } catch (o) {
        console.error("[link-mindmap] fix link:", o);
      }
    new v(t("\u5DF2\u4FEE\u590D ") + s + t(" \u4E2A\u6587\u4EF6")), this._rebuildAllViews();
  }
  async _normalizeFrontmatter(e) {
    let s = this.settings, i = s.typeField || "type", a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ _(async (d) => {
      if (!d) return null;
      if (a.has(d)) return a.get(d);
      let l = this.app.vault.getAbstractFileByPath(te(d));
      if (!(l instanceof Me)) return null;
      let r = nt(await this.app.vault.read(l));
      return a.set(d, r.fields), r.fields;
    }, "getTemplateFields"), o = /* @__PURE__ */ _(async (d) => {
      let l = await this.app.vault.read(d), r = l.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
      if (!r) return { changed: !1, skipped: !1 };
      let p = r[1], g = l.slice(r[0].length), f = [], u = null;
      for (let k of p.split(`
`)) {
        let P = k.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
        P ? (u && f.push(u), u = { key: P[1], lines: [k] }) : u && u.lines.push(k);
      }
      if (u && f.push(u), !f.length) return { changed: !1, skipped: !1 };
      let S = s.statusField || "status", x = f.find((k) => k.key === S);
      if (x && x.lines.length === 1) {
        let k = (x.lines[0].match(/^.*:\s*(.*)$/) || [])[1] || "", P = $e(k), V = Ue(P);
        V !== P && (x.lines[0] = S + ": " + (V ? '"' + V + '"' : '""'));
      }
      let C = f.find((k) => k.key === i), M = C ? $e((C.lines[0].match(/^.*:\s*(.*)$/) || [])[1] || "") : "", w = s.typeTemplates || {}, F = M && w[M] ? w[M] : (s.templatePath || "").trim(), y = await n(F);
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
` + g;
        await this.app.vault.modify(d, k);
      }
      return { changed: O, skipped: !1 };
    }, "normalizeOne");
    if (e) {
      let d = this.app.workspace.getActiveFile();
      if (!d || d.extension !== "md") {
        new v(t("\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      let l = await o(d);
      l.skipped ? new v(t("\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7")) : l.changed ? new v(t("\u5DF2\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027 \u2713")) : new v(t("\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"));
      return;
    }
    let c = te(s.mainFolder || ""), h = Ae(this.app, c);
    if (!h.length) {
      new v(t("\u672A\u627E\u5230\u7B14\u8BB0\u6587\u4EF6"));
      return;
    }
    new Le(this.app, t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027"), t("\u6B64\u64CD\u4F5C\u5C06\u6309\u6A21\u677F\u91CD\u6392\u6240\u6709\u7B14\u8BB0\u7684 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\u3002\u5DF2\u6709\u503C\u4E0D\u4F1A\u88AB\u4FEE\u6539\uFF0C\u4F46\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let d = 0, l = 0, r = [];
      for (let g of h) {
        let f = await o(g);
        f.skipped && l++, f.changed && (d++, r.length < 10 && r.push(g.basename));
      }
      let p;
      d ? (p = t("\u5DF2\u6574\u7406 ") + d + t(" \u4E2A\u7B14\u8BB0\u7684\u5C5E\u6027"), r.length < d ? p += t("\uFF08\u7B49\uFF09") : p += "\uFF1A" + r.join("\u3001"), l && (p += t("\uFF1B") + l + t(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7"))) : (p = t("\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"), l && (p += t("\uFF08") + l + t(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7\uFF09"))), new v(p, 15e3);
    }).open();
  }
  _cleanInvalidTypes() {
    let e = this.settings, s = e.typeField || "type", i = new Set(Object.keys(e.typeColors || {})), a = Ae(this.app, e.mainFolder), n = [];
    for (let o of a) {
      let h = ((this.app.metadataCache.getFileCache(o) || {}).frontmatter || {})[s];
      h != null && String(h).trim() && !i.has(String(h).trim()) && n.push({ file: o, oldVal: String(h).trim() });
    }
    if (!n.length) {
      new v(t("\u6CA1\u6709\u5931\u6548\u7C7B\u578B\u9700\u8981\u6E05\u9664"));
      return;
    }
    new Le(this.app, t("\u6E05\u9664\u5931\u6548\u7C7B\u578B"), t("\u53D1\u73B0 ") + n.length + t(" \u4E2A\u7B14\u8BB0\u7684 type \u4E0D\u5728\u914D\u7F6E\u5217\u8868\u4E2D\uFF0C\u5C06\u88AB\u6E05\u9664\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u7B14\u8BB0\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let o = 0;
      for (let c of n)
        try {
          await this.app.fileManager.processFrontMatter(c.file, (h) => {
            delete h[s];
          }), o++;
        } catch (h) {
          console.error("[link-mindmap] clean type:", h);
        }
      new v(t("\u5DF2\u6E05\u9664 ") + o + t(" \u4E2A\u7B14\u8BB0\u7684\u5931\u6548\u7C7B\u578B")), this._rebuildAllViews();
    }).open();
  }
  _cleanInvalidStatus() {
    let e = this.settings, s = e.statusField || "status", i = new Set(Object.keys(e.statusColors || {})), a = Ae(this.app, e.mainFolder), n = [];
    for (let o of a) {
      let c = (this.app.metadataCache.getFileCache(o) || {}).frontmatter || {}, h = Ue(c[s]);
      h && !i.has(h) && n.push({ file: o, oldVal: h });
    }
    if (!n.length) {
      new v(t("\u6CA1\u6709\u5931\u6548\u72B6\u6001\u9700\u8981\u6E05\u9664"));
      return;
    }
    new Le(this.app, t("\u6E05\u9664\u5931\u6548\u72B6\u6001"), t("\u53D1\u73B0 ") + n.length + t(" \u4E2A\u7B14\u8BB0\u7684 status \u4E0D\u5728\u914D\u7F6E\u5217\u8868\u4E2D\uFF0C\u5C06\u88AB\u6E05\u9664\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u7B14\u8BB0\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let o = 0;
      for (let c of n)
        try {
          await this.app.fileManager.processFrontMatter(c.file, (h) => {
            delete h[s];
          }), o++;
        } catch (h) {
          console.error("[link-mindmap] clean status:", h);
        }
      new v(t("\u5DF2\u6E05\u9664 ") + o + t(" \u4E2A\u7B14\u8BB0\u7684\u5931\u6548\u72B6\u6001")), this._rebuildAllViews();
    }).open();
  }
  applyThemeVars() {
    let e = document.body;
    e.style.setProperty("--lkm-accent", this.settings.accent), e.style.setProperty("--lkm-main", this.settings.mainColor), e.style.setProperty("--lkm-multi", this.settings.multiColor), e.style.setProperty("--lkm-selected", this.settings.selectedColor);
    let s = this.settings.statusColors || {};
    for (let [i, a] of Object.entries(s)) e.style.setProperty("--lkm-status-" + i, a);
  }
  async activateView() {
    let { workspace: e } = this.app, s = e.getLeavesOfType(me)[0];
    s || (s = e.getLeaf(!0), await s.setViewState({ type: me, active: !0 })), e.revealLeaf(s);
  }
  async activateTimeline() {
    await this.activateView();
    for (let e of this.app.workspace.getLeavesOfType(me))
      e.view instanceof De && (e.view._mode = "dash", e.view._dashTab = "timeline", e.view.render());
  }
  refreshViews() {
    this.applyThemeVars();
    for (let e of this.app.workspace.getLeavesOfType(me))
      e.view instanceof De && e.view.render();
  }
  async loadSettings() {
    this.settings = Object.assign({}, ut, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  _getSavedViews() {
    return this._loadedPresets || [];
  }
  async _writePresetFile(e) {
    let s = this.settings.savedViewLocation || "link-mindmap-presets.json", i = JSON.stringify(e, null, 2), a = this.app.vault.getAbstractFileByPath(s);
    a ? await this.app.vault.modify(a, i) : await this.app.vault.create(s, i);
  }
  async _saveSavedViews(e) {
    this._loadedPresets = e;
    try {
      await this._writePresetFile({ auto: this._autoState || null, presets: e });
    } catch (s) {
      console.error("[link-mindmap] save views to file:", s);
    }
  }
  async _saveAutoState(e) {
    this._autoState = e;
    try {
      await this._writePresetFile({ auto: e, presets: this._loadedPresets || [] });
    } catch (s) {
      console.error("[link-mindmap] save auto state:", s);
    }
  }
  async _saveViewPreset(e, s) {
    let i = this._getSavedViews(), a = i.findIndex((o) => o.name === e), n = { name: e, state: s, time: Date.now() };
    a >= 0 ? i[a] = n : i.push(n), await this._saveSavedViews(i);
  }
  async _deleteSavedView(e) {
    let s = this._getSavedViews().filter((i) => i.name !== e);
    await this._saveSavedViews(s);
  }
  async _loadViewsFromFile() {
    let e = this.settings.savedViewLocation || "link-mindmap-presets.json";
    try {
      let s = this.app.vault.getAbstractFileByPath(e);
      if (!s) return;
      let i = await this.app.vault.read(s), a = JSON.parse(i);
      Array.isArray(a) ? (this._loadedPresets = a, this._autoState = null) : a && typeof a == "object" && (this._autoState = a.auto || null, this._loadedPresets = Array.isArray(a.presets) ? a.presets : []);
    } catch (s) {
      console.error("[link-mindmap] load views from file:", s);
    }
  }
  _initLang() {
    let e = this.settings.language || "auto";
    if (e === "auto") {
      let s = window.moment && window.moment.locale() || "en";
      dt(s && s.startsWith("zh") ? "zh" : "en");
    } else
      dt(e);
  }
};
_(Ft, "LinkMindmapPlugin");
var jt = Ft;
module.exports = jt;
