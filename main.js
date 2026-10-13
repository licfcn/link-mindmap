"use strict";
var _e = (b, t) => () => {
  try {
    return t || b((t = { exports: {} }).exports, t), t.exports;
  } catch (s) {
    throw t = 0, s;
  }
};

// ../i18n.js
var te = _e((Be, Qt) => {
  "use strict";
  var Jt = {
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
      \u6839\u8282\u70B9\u6CA1\u6709\u540C\u7EA7\u8282\u70B9: "Root node has no siblings",
      \u6CA1\u6709\u540C\u7EA7\u8282\u70B9\u53EF\u63D2\u5165: "No sibling node to insert",
      "\u540C\u7EA7\u79FB\u52A8\u5931\u8D25\uFF1A": "Sibling move failed: ",
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
      \u666E\u901A\u8282\u70B9\u989C\u8272: "Normal node color",
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
      \u6309\u6307\u5B9A\u65E5\u671F\u7B5B\u9009: "Filter by specific date"
    }
  }, At = "zh";
  function ve(b) {
    At = b || "zh";
  }
  function xe() {
    return At;
  }
  function be(b, t) {
    let s = Jt[At] && Jt[At][b] || b;
    if (t) for (let i in t) s = s.split("{" + i + "}").join(t[i]);
    return s;
  }
  Qt.exports = { t: be, setLang: ve, getLang: xe };
});

// ../src.js
var y = (b, t) => b, Ce = require("obsidian"), {
  Plugin: Se,
  ItemView: Te,
  Notice: w,
  Modal: xt,
  Setting: M,
  PluginSettingTab: Fe,
  TFile: Tt,
  TFolder: Ae,
  normalizePath: et,
  FuzzySuggestModal: ne,
  setIcon: ee,
  Menu: Vt,
  MarkdownRenderer: Ee,
  Component: De
} = Ce, { t: e, setLang: se } = te(), mt = "link-mindmap-view", Me = "http://www.w3.org/2000/svg", le = {
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
  showOpenIcon: !0,
  showAddIcon: !0,
  autoLocate: !0,
  autoAddBackLink: !0,
  doneColor: "#3fa66a",
  selectedColor: "#e5534b",
  maxTitleLen: 0,
  curve: !0,
  layoutDir: "h",
  defaultType: "",
  typeTemplates: {},
  typeColors: {
    \u5F85\u529E: "#e5534b",
    \u7075\u611F: "#e5a44b",
    \u95EA\u5FF5: "#4ba3e5",
    \u6587\u732E: "#3fa66a",
    \u6C38\u4E45: "#b07cff",
    \u8D44\u6E90: "#7f8fa6"
  }
};
function Bt(b) {
  return b == null ? [] : Array.isArray(b) ? b.slice() : [b];
}
y(Bt, "toArr");
function bt(b) {
  return String(b ?? "").replace(/^\[\[/, "").replace(/\]\]$/, "").split("|")[0].split("#")[0].split("^")[0].trim();
}
y(bt, "cleanLink");
function Xt(b) {
  let t = [], s = /* @__PURE__ */ y((i) => {
    if (i == null) return;
    let n = String(i), a = /\[\[([^\[\]]+?)\]\]/g, o, l = !1;
    for (; (o = a.exec(n)) !== null; )
      l = !0, t.push(bt(o[1]));
    if (!l) {
      let r = bt(n.replace(/^["']+/, "").replace(/["']+$/, ""));
      r && t.push(r);
    }
  }, "push");
  return Array.isArray(b) ? b.forEach(s) : s(b), t;
}
y(Xt, "extractLinks");
function tt(b, t) {
  return b = String(b ?? ""), t > 0 && b.length > t ? b.slice(0, t - 1) + "\u2026" : b;
}
y(tt, "truncate");
function ae(b, t) {
  let s = 0;
  for (let i of String(b ?? ""))
    s += /[一-鿿　-〿＀-￯]/.test(i) ? t : t * 0.55;
  return s;
}
y(ae, "estWidth");
var Ot = null, zt = /* @__PURE__ */ new Map();
function Gt(b, t, s) {
  let i = b + "|" + t + "|" + (s ? 1 : 0), n = zt.get(i);
  if (n !== void 0) return n;
  let a;
  try {
    Ot || (Ot = document.createElement("canvas").getContext("2d")), Ot.font = (s ? "600 " : "") + t + 'px Inter, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif', a = Ot.measureText(String(b ?? "")).width;
  } catch {
    a = ae(b, t);
  }
  return zt.size > 2e3 && zt.clear(), zt.set(i, a), a;
}
y(Gt, "measureTextWidth");
function ft(b) {
  return String(b).replace(/[\\/:*?"<>|#^\[\]]/g, "-").trim() || e("\u672A\u547D\u540D");
}
y(ft, "safeFileName");
function oe(b) {
  let t = String(b ?? "").replace(/^﻿/, "").replace(/\r\n/g, `
`).replace(/^\n+/, ""), s = t.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!s) return { fields: [], body: t };
  let i = [];
  for (let n of s[1].split(`
`)) {
    let a = n.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    a && i.push([a[1], a[2].trim()]);
  }
  return { fields: i, body: t.slice(s[0].length) };
}
y(oe, "splitFrontmatter");
function Kt(b) {
  return b = String(b ?? "").trim(), b.length >= 2 && (b.charAt(0) === '"' && b.charAt(b.length - 1) === '"' || b.charAt(0) === "'" && b.charAt(b.length - 1) === "'") ? b.slice(1, -1) : b;
}
y(Kt, "stripYamlQuotes");
function I(b, t) {
  let s = document.createElementNS(Me, b);
  if (t) for (let i in t) s.setAttribute(i, t[i]);
  return s;
}
y(I, "svgEl");
function re(b, t, s) {
  let i = b && (b[s || "date"] != null ? b[s || "date"] : "");
  if (i) {
    let n = String(i).match(/(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/);
    if (n) return n[1] + "-" + String(n[2]).padStart(2, "0") + "-" + String(n[3]).padStart(2, "0");
  }
  try {
    let n = t.stat;
    if (n && n.ctime) {
      let a = new Date(n.ctime);
      return a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
y(re, "createdOf");
function ce(b) {
  try {
    let t = b.stat;
    if (t && t.ctime) {
      let s = new Date(t.ctime);
      return s.getFullYear() + "-" + String(s.getMonth() + 1).padStart(2, "0") + "-" + String(s.getDate()).padStart(2, "0") + " " + String(s.getHours()).padStart(2, "0") + ":" + String(s.getMinutes()).padStart(2, "0") + ":" + String(s.getSeconds()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
y(ce, "fileCtime");
function $t(b, t) {
  let s = et(t || ""), i = [];
  for (let n of b.vault.getMarkdownFiles())
    s && n.path !== s && !n.path.startsWith(s + "/") || i.push(n);
  return i;
}
y($t, "notesInFolder");
function he(b, t) {
  let s = $t(b, t.mainFolder);
  if (!s.length) return !0;
  for (let i of s)
    if ((b.metadataCache.getFileCache(i) || {}).frontmatter) return !0;
  return !1;
}
y(he, "metadataReady");
function Ht(b, t) {
  let s = t.linkField || "children", i = t.backField || "parent", n = t.zkField || "main", a = t.statusField || "status", o = t.typeField || "type", l = t.dateField || "date", r = t.titleField || "title", c = /* @__PURE__ */ new Map();
  for (let d of $t(b, t.mainFolder)) {
    let p = (b.metadataCache.getFileCache(d) || {}).frontmatter || {};
    c.set(d.path, {
      file: d,
      title: p[r] ? String(p[r]) : d.basename,
      zk: p[n] === !0 || String(p[n]) === "true",
      status: p[a] === !0 || String(p[a]) === "true",
      type: p[o] != null ? String(p[o]).trim() : "",
      date: re(p, d, l),
      ctime: ce(d),
      childLinks: Xt(p[s]),
      parentLinks: Xt(p[i])
    });
  }
  let h = /* @__PURE__ */ new Set();
  for (let d of c.values())
    for (let p of d.childLinks) {
      let m = b.metadataCache.getFirstLinkpathDest(p, d.file.path);
      m && c.has(m.path) && h.add(m.path);
    }
  return { map: c, referenced: h };
}
y(Ht, "collectNotes");
function Ut(b, t, s, i) {
  let n = i === "child" ? s.childLinks : s.parentLinks, a = [];
  for (let o of n) {
    let l = b.metadataCache.getFirstLinkpathDest(o, s.file.path);
    l && t.has(l.path) && a.push(t.get(l.path));
  }
  return a;
}
y(Ut, "resolveLinks");
function Dt(b, t, s) {
  let i = /* @__PURE__ */ new Set([s.file.path]), n = /* @__PURE__ */ y((l, r) => {
    let c = {
      note: l,
      parent: r || null,
      children: [],
      expanded: !1,
      isAlias: !1,
      key: (r ? r.key + ">" : ">") + l.file.path
    };
    for (let h of l.childLinks) {
      let d = b.metadataCache.getFirstLinkpathDest(h, l.file.path);
      if (!d) continue;
      let p = t.get(d.path);
      !p || i.has(d.path) || (i.add(d.path), c.children.push(n(p, c)), i.delete(d.path));
    }
    return c;
  }, "mk"), a = n(s, null), o = /* @__PURE__ */ new Map();
  (/* @__PURE__ */ y((function l(r) {
    if (r.note.file) {
      let c = r.note.file.path;
      o.has(c) || o.set(c, []), o.get(c).push(r);
    }
    r.children.forEach(l);
  }), "collect"))(a);
  for (let [l, r] of o) {
    if (r.length < 2) continue;
    let c = t.get(l), h = new Set(c ? Ut(b, t, c, "parent").map((p) => p.file.path) : []), d = -1;
    for (let p = 0; p < r.length; p++) {
      let m = r[p].parent && r[p].parent.note.file ? r[p].parent.note.file.path : null;
      if (m && h.has(m)) {
        d = p;
        break;
      }
    }
    d < 0 && (d = 0), r.forEach((p, m) => {
      p.isAlias = m !== d;
    });
  }
  return a;
}
y(Dt, "buildTree");
function Yt(b, t) {
  let s = [[b, 1]];
  for (; s.length; ) {
    let [i, n] = s.pop();
    i.expanded = n < t && i.children.length > 0;
    for (let a of i.children) s.push([a, n + 1]);
  }
}
y(Yt, "applyDepth");
function Nt(b, t) {
  let s = [], i = [], n = t.layoutDir === "v";
  return (/* @__PURE__ */ y((function a(o) {
    if (!o._w) {
      let r = (1 + (t.showOpenIcon !== !1 ? 1 : 0) + (t.showAddIcon !== !1 ? 1 : 0)) * 24 + 12, c = o.note.title, h = t.maxTitleLen > 0 ? tt(c, t.maxTitleLen) : c, d = Gt(h, 13, !0), p = !o.note.file, m = t.showCreated && !p && o.note.date ? o.note.date : "", k = t.showType && !p && o.note.type ? o.note.type : "", _ = t.showChildCount && !p && o.children.length ? e("\u5B50 ") + o.children.length : "", v = [k, _, m].filter(Boolean).join(" \xB7 "), C = Gt(v, 11, !1);
      o._w = Math.max(110, 16 + Math.max(d, C) + r), o._shown = h;
    }
    let l = o.expanded ? o.children : [];
    if (!l.length) {
      o._h = t.nodeHeight, n && (o._subW = o._w);
      return;
    }
    if (n) {
      let r = 0;
      l.forEach((c, h) => {
        a(c), r += (c._subW || c._w) + (h ? t.gapY : 0);
      }), o._h = t.nodeHeight, o._subW = Math.max(o._w, r);
    } else {
      let r = 0;
      l.forEach((c, h) => {
        a(c), r += c._h + (h ? t.gapY : 0);
      }), o._h = Math.max(t.nodeHeight, r);
    }
  }), "measure"))(b), (/* @__PURE__ */ y((function a(o, l, r) {
    o._x = l, o._y = r + o._h / 2, s.push(o);
    let c = o.expanded ? o.children : [];
    if (n) {
      let h = 0;
      c.forEach((m, k) => {
        h += (m._subW || m._w) + (k ? t.gapY : 0);
      });
      let d = l + o._w / 2 - h / 2, p = r + t.nodeHeight + t.gapX;
      for (let m of c) {
        let k = m._subW || m._w;
        a(m, d + (k - m._w) / 2, p), i.push([o, m]), d += k + t.gapY;
      }
    } else {
      let h = r;
      for (let d of c)
        a(d, l + o._w + t.gapX, h), i.push([o, d]), h += d._h + t.gapY;
    }
  }), "place"))(b, 0, 0), { nodes: s, edges: i };
}
y(Nt, "layoutTree");
async function Rt(b, t, s, i) {
  await b.fileManager.processFrontMatter(t, (n) => {
    let a = Bt(n[s]);
    a.some((l) => bt(l) === i) || a.push("[[" + i + "]]"), n[s] = a;
  });
}
y(Rt, "addLink");
async function _t(b, t, s, i) {
  let n = !1;
  return await b.fileManager.processFrontMatter(t, (a) => {
    let o = Bt(a[s]), l = o.filter((r) => {
      let c = b.metadataCache.getFirstLinkpathDest(bt(r), t.path);
      return !(c && c.path === i);
    });
    l.length !== o.length && (n = !0), l.length ? a[s] = l : delete a[s];
  }), n;
}
y(_t, "removeLinkByPath");
var de = class extends ne {
  constructor(t, s, i, n) {
    super(t), this.items = s, this.onChoose = i, this.setPlaceholder(n || e("\u641C\u7D22\u2026"));
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
y(de, "PickModal");
var Et = de, pe = class extends xt {
  constructor(t, s, i, n, a) {
    if (super(t), this.items = s, this.onChoose = i, this.selected = /* @__PURE__ */ new Map(), this.searchVal = "", this.typeFilter = "", this.mainFilter = "", this.linkFilter = "", this.availableTypes = a || [], n && n.length) {
      let o = new Map(s.map((l) => [l.path, l.label]));
      for (let l of n)
        o.has(l) && this.selected.set(l, o.get(l));
    }
  }
  onOpen() {
    let { contentEl: t } = this;
    t.addClass("lkm-multipick");
    let s = /* @__PURE__ */ y((v) => {
      v.target.tagName === "SELECT" && v.stopPropagation();
    }, "guardSelect");
    t.addEventListener("pointerdown", s, !0), t.addEventListener("mousedown", s, !0), t.createEl("h3", { text: e("\u591A\u9009\u7B14\u8BB0\u663E\u793A\u5BFC\u56FE") }), t.createEl("p", { text: e("\u641C\u7D22\u5E76\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\uFF0C\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A\uFF08\u65E0\u9700\u5173\u8054\uFF09"), cls: "lkm-modal-sub" });
    let i = new Set(this.availableTypes);
    for (let v of this.items) v.type && i.add(v.type);
    let n = [...i], a = t.createDiv("lkm-multipick-filter"), o = a.createEl("input", { type: "text", placeholder: e("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    o.addClass("lkm-multipick-input");
    let l = /* @__PURE__ */ y((v) => {
      let C = /* @__PURE__ */ y((L) => L.stopPropagation(), "stop");
      v.addEventListener("mousedown", C), v.addEventListener("pointerdown", C), v.addEventListener("touchstart", C, { passive: !0 }), v.addEventListener("touchend", C, { passive: !0 }), v.addEventListener("click", C);
    }, "stopModalSwallow");
    if (n.length) {
      let v = a.createEl("select", { cls: "lkm-multipick-select" });
      v.createEl("option", { value: "", text: e("\u7C7B\u578B") }), v.createEl("option", { value: "__none__", text: e("\u65E0\u7C7B\u578B") });
      for (let C of n) v.createEl("option", { value: C, text: C });
      l(v), v.addEventListener("change", () => {
        this.typeFilter = v.value, k();
      });
    }
    let r = a.createEl("select", { cls: "lkm-multipick-select" });
    r.createEl("option", { value: "", text: e("\u5168\u90E8") }), r.createEl("option", { value: "1", text: e("\u4E3B\u7B14\u8BB0") }), r.createEl("option", { value: "0", text: e("\u975E\u4E3B\u7B14\u8BB0") }), l(r), r.addEventListener("change", () => {
      this.mainFilter = r.value, k();
    });
    let c = a.createEl("select", { cls: "lkm-multipick-select" });
    c.createEl("option", { value: "", text: e("\u5173\u8054") }), c.createEl("option", { value: "orphan", text: e("\u672A\u5173\u8054") }), c.createEl("option", { value: "linked", text: e("\u5DF2\u5173\u8054") }), l(c), c.addEventListener("change", () => {
      this.linkFilter = c.value, k();
    });
    let h = t.createDiv("lkm-multipick-list"), d = t.createDiv("lkm-multipick-sel"), p = null, m = /* @__PURE__ */ y(() => {
      let v = this.searchVal.toLowerCase(), C = this.typeFilter, L = [];
      for (let N of this.items)
        v && !N.label.toLowerCase().includes(v) || C && C === "__none__" && N.type || C && C !== "__none__" && N.type !== C || this.mainFilter === "1" && !N.isMain || this.mainFilter === "0" && N.isMain || this.linkFilter === "orphan" && !N.orphan || this.linkFilter === "linked" && N.orphan || L.push(N);
      return L;
    }, "getFiltered"), k = /* @__PURE__ */ y(() => {
      h.empty();
      let v = m(), C = 0, L = 100;
      for (let N = 0; N < v.length && C < L; N++) {
        let x = v[N], A = h.createDiv("lkm-multipick-row");
        this.selected.has(x.path) && A.classList.add("is-selected"), A.createSpan({ text: x.label });
        let D = [];
        x.isMain && D.push(e("\u4E3B\u7B14\u8BB0")), x.type && D.push(x.type), D.length && A.createSpan({ text: " \xB7 " + D.join(" \xB7 "), cls: "lkm-multipick-type" }), A.addEventListener("click", () => {
          this.selected.has(x.path) ? this.selected.delete(x.path) : this.selected.set(x.path, x.label), A.classList.toggle("is-selected"), d.setText(e("\u5DF2\u9009 ") + this.selected.size + e(" \u7BC7\u7B14\u8BB0"));
        }), C++;
      }
      C === 0 ? h.createEl("p", { text: e("\u65E0\u5339\u914D\u7ED3\u679C"), cls: "lkm-modal-sub" }) : C === L && h.createEl("p", { text: e("\u4EC5\u663E\u793A\u524D ") + L + e(" \u6761\uFF0C\u8BF7\u641C\u7D22\u7F29\u5C0F\u8303\u56F4"), cls: "lkm-modal-sub" });
    }, "renderList");
    o.addEventListener("input", () => {
      this.searchVal = o.value, p && clearTimeout(p), p = setTimeout(k, 150);
    });
    let _ = t.createDiv("lkm-multipick-btns");
    new M(_).addButton((v) => v.setButtonText(e("\u5168\u9009\u5F53\u524D")).onClick(() => {
      for (let C of m()) this.selected.set(C.path, C.label);
      k(), d.setText(e("\u5DF2\u9009 ") + this.selected.size + e(" \u7BC7\u7B14\u8BB0"));
    })).addButton((v) => v.setButtonText(e("\u663E\u793A\u5BFC\u56FE")).setCta().onClick(() => {
      if (!this.selected.size) {
        new w(e("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      this.close(), this.onChoose([...this.selected.keys()]);
    })).addButton((v) => v.setButtonText(e("\u6E05\u9664\u6240\u6709")).onClick(() => {
      this.selected.clear(), k(), d.setText(e("\u5DF2\u9009 0 \u7BC7\u7B14\u8BB0"));
    })).addButton((v) => v.setButtonText(e("\u53D6\u6D88")).onClick(() => this.close())), d.setText(e("\u5DF2\u9009 ") + this.selected.size + e(" \u7BC7\u7B14\u8BB0")), k(), o.focus();
  }
  onClose() {
    this.contentEl.empty();
  }
};
y(pe, "MultiPickModal");
var Le = pe, ue = class extends xt {
  constructor(t, s, i) {
    super(t), this.parentLabel = s, this.opts = i || {}, this.onSubmit = this.opts.onSubmit || (() => {
    });
  }
  onOpen() {
    let { contentEl: t } = this, s = this.opts;
    t.createEl("h3", { text: s.standalone ? e("\u65B0\u5EFA\u8282\u70B9") : e("\u65B0\u5EFA\u5B50\u8282\u70B9") }), s.standalone || t.createEl("p", { text: e("\u7236\u8282\u70B9\uFF1A") + this.parentLabel, cls: "lkm-modal-sub" });
    let i = "", n = s.defaultType || "", a = s.defaultTemplate || "", o = !1;
    new M(t).setName(e("\u6807\u9898")).addText((c) => {
      c.onChange((h) => i = h), c.inputEl.focus(), c.inputEl.addEventListener("keydown", (h) => {
        h.key === "Enter" && (h.preventDefault(), r());
      });
    }), new M(t).setName(e("\u7C7B\u578B")).setDesc(e("\u5199\u5165\u7B14\u8BB0\u7684 type \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((c) => {
      c.addOption("", e("\u4E0D\u9009")), (s.types || []).forEach((h) => c.addOption(h, h)), c.setValue(n), c.onChange((h) => {
        n = h;
        let d = s.typeTemplates && s.typeTemplates[h];
        if (d && l) {
          let p = (s.templates || []).find((m) => m.path === et(d));
          p && (a = p.path, l.setValue(a));
        }
      });
    });
    let l = null;
    new M(t).setName(e("\u6A21\u677F")).setDesc(e("\u4E0D\u540C\u7C7B\u578B\u53EF\u4F7F\u7528\u4E0D\u540C\u6A21\u677F")).addDropdown((c) => {
      l = c, (s.templates || []).forEach((h) => c.addOption(h.path, h.name)), c.setValue(a), c.onChange((h) => a = h);
    }), new M(t).setName(e("\u4E3B\u7B14\u8BB0")).setDesc(e("\u6807\u8BB0\u4E3A\u5BFC\u56FE\u4E3B\u5165\u53E3\uFF08") + (s.zkField || "main") + ": true\uFF09").addToggle((c) => {
      c.onChange((h) => o = h);
    });
    let r = /* @__PURE__ */ y(() => {
      let c = i.trim();
      if (!c) {
        new w(e("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(c, n, a, o);
    }, "done");
    new M(t).addButton((c) => c.setButtonText(e("\u521B\u5EFA")).setCta().onClick(r));
  }
  onClose() {
    this.contentEl.empty();
  }
};
y(ue, "NewChildModal");
var ie = ue, fe = class extends xt {
  constructor(t, s, i) {
    super(t), this.currentName = s, this.onSubmit = i;
  }
  onOpen() {
    let { contentEl: t } = this;
    t.createEl("h3", { text: e("\u91CD\u547D\u540D\u6587\u4EF6") }), t.createEl("p", { text: e("\u5F53\u524D\uFF1A") + this.currentName + ".md", cls: "lkm-modal-sub" });
    let s = this.currentName;
    new M(t).setName(e("\u65B0\u6587\u4EF6\u540D")).addText((n) => {
      n.setValue(this.currentName), n.onChange((a) => s = a), n.inputEl.focus(), n.inputEl.select(), n.inputEl.addEventListener("keydown", (a) => {
        a.key === "Enter" && (a.preventDefault(), i());
      });
    });
    let i = /* @__PURE__ */ y(() => {
      let n = s.trim();
      if (!n) {
        new w(e("\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(n);
    }, "done");
    new M(t).addButton((n) => n.setButtonText(e("\u91CD\u547D\u540D")).setCta().onClick(i));
  }
  onClose() {
    this.contentEl.empty();
  }
};
y(fe, "RenameModal");
var Pe = fe, me = class extends xt {
  constructor(t, s, i, n, a) {
    super(t), this.titleText = s, this.message = i, this.onConfirm = n, this.danger = a !== !1;
  }
  onOpen() {
    let { contentEl: t } = this;
    this.danger && t.addClass("lkm-modal-danger"), t.createEl("h3", { text: this.titleText }), t.createEl("p", { text: this.message, cls: "lkm-modal-sub" });
    let s = t.createDiv("lkm-confirm-row");
    s.createEl("button", { cls: "lkm2-btn-ghost", text: e("\u53D6\u6D88") }).addEventListener("click", () => this.close()), s.createEl("button", { cls: "lkm2-btn-danger", text: e("\u786E\u8BA4") }).addEventListener("click", () => {
      this.close(), this.onConfirm();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
y(me, "ConfirmModal");
var qt = me, ge = class extends ne {
  constructor(t, s, i) {
    super(t), this.items = s, this.onChoose = i, this.setPlaceholder(e("\u9009\u62E9\u65B0\u7684\u7236\u8282\u70B9\u2026"));
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
y(ge, "MoveModal");
var Wt = ge, ke = class extends Te {
  constructor(t, s) {
    super(t), this.plugin = s, this.rootPath = null, this.depth = s.settings.defaultDepth, this.notes = /* @__PURE__ */ new Map(), this.referenced = /* @__PURE__ */ new Set(), this.currentRoot = null, this._cleanup = [], this._view = null, this._expandedMem = /* @__PURE__ */ new Map(), this._history = [], this._selected = /* @__PURE__ */ new Set(), this._batchMode = !1, this._selKey = null, this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._toolbarCollapsed = !1, this._dashFilters = [], this._dashSort = "date", this._dashSearch = "", this._dashHeatIdx = 0, this._dashBranchAll = !1, this._dashTab = "stats", this._tlSort = "desc", this._tlTypeFilter = "", this._tlSearch = "", this._tlRange = "all", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this._nodeIndex = /* @__PURE__ */ new Map();
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
        let s = this.app.vault.getAbstractFileByPath(t.kwFilePath);
        s && (this._kwFile = s);
      }
      t.view && (this._view = t.view), t.expandedMemory && (this._expandedMem = /* @__PURE__ */ new Map(Object.entries(t.expandedMemory)));
    }
    await this.rebuild(!0), t || this.locateFile(this.app.workspace.getActiveFile());
  }
  async onClose() {
    this._runCleanup(), this.plugin.settings.viewState = {
      rootPath: this.rootPath,
      depth: this.depth,
      mode: this._mode,
      multiRoot: this._multiRoot,
      multiRootPaths: this._multiRootPaths || [],
      toolbarCollapsed: this._toolbarCollapsed,
      kwFilePath: this._kwFile ? this._kwFile.path : null,
      view: this._view || null,
      expandedMemory: Object.fromEntries(this._expandedMem)
    }, await this.plugin.saveSettings();
  }
  async _waitMetadataReady() {
    let t = this.app.metadataCache;
    he(this.app, this.s) || await new Promise((s) => {
      let i = !1, n = /* @__PURE__ */ y(() => {
        if (!i) {
          i = !0;
          try {
            t.offref(a), t.offref(o);
          } catch {
          }
          clearTimeout(l), s();
        }
      }, "finish"), a = t.on("resolved", n), o = t.on("changed", n), l = setTimeout(n, 6e3);
      this._cleanup.push(n);
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
    let s = window.visualViewport, i = null, n = /* @__PURE__ */ y(() => {
      i && clearTimeout(i), i = setTimeout(() => {
        if (i = null, !window.matchMedia("(hover: none)").matches) return;
        let r = t.querySelector(".lkm-dash");
        if (!r) return;
        let c = t.querySelector(".lkm-toolbar"), h = c ? c.getBoundingClientRect().height : 0;
        r.style.maxHeight = s.height - h + "px";
        let d = document.activeElement;
        d && d.tagName === "INPUT" && t.contains(d) && setTimeout(() => {
          let p = d.getBoundingClientRect(), m = r.getBoundingClientRect();
          (p.top < m.top || p.bottom > m.bottom) && d.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 50);
      }, 150);
    }, "adjust"), a = /* @__PURE__ */ y(() => n(), "onResize"), o = /* @__PURE__ */ y(() => n(), "onScroll");
    s.addEventListener("resize", a), s.addEventListener("scroll", o), window.addEventListener("resize", a), this._cleanup.push(() => {
      s.removeEventListener("resize", a), s.removeEventListener("scroll", o), window.removeEventListener("resize", a);
      let l = t.querySelector(".lkm-dash");
      l && (l.style.maxHeight = "");
    }), this._adjustMobileViewport = n;
  }
  async rebuild(t) {
    let s = Ht(this.app, this.s);
    this.notes = s.map, this.referenced = s.referenced;
    for (let i of this._expandedMem.keys()) this.notes.has(i) || this._expandedMem.delete(i);
    if (this._selKey && !this._nodeIndex.has(this._selKey) && (this._selKey = null), this._multiRoot && t && this._multiRootPaths && this._multiRootPaths.length) {
      let i = this._multiRootPaths.filter((n) => this.notes.has(n));
      if (i.length) {
        this._showMultiRoot(i);
        return;
      }
    }
    (!t || !this.rootPath || !this.notes.has(this.rootPath)) && (this.rootPath = this._pickDefaultRoot(), this._multiRoot = !1), this.render();
  }
  _pickDefaultRoot() {
    let t = [...this.notes.values()], s = t.filter((n) => n.zk).sort((n, a) => n.title.localeCompare(a.title, "zh"));
    if (s.length) return s[0].file.path;
    let i = t.filter((n) => !this.referenced.has(n.file.path)).sort((n, a) => n.title.localeCompare(a.title, "zh"));
    return i.length ? i[0].file.path : t.length ? t[0].file.path : null;
  }
  _indexTree(t) {
    this._nodeIndex = /* @__PURE__ */ new Map(), this._treePaths = /* @__PURE__ */ new Set(), this._pathNodes = /* @__PURE__ */ new Map();
    let s = /* @__PURE__ */ y((i) => {
      this._nodeIndex.set(i.key, i), i.note.file && (this._treePaths.add(i.note.file.path), this._pathNodes.has(i.note.file.path) || this._pathNodes.set(i.note.file.path, []), this._pathNodes.get(i.note.file.path).push(i)), i.children.forEach(s);
    }, "walk");
    s(t);
  }
  render(t) {
    let s = this.contentEl;
    if (this._runCleanup(), s.empty(), s.addClass("lkm-view"), s.style.overflow = "hidden", this._mode === "dash") {
      this._renderDash(s);
      return;
    }
    let i = this.s;
    s.tabIndex = -1;
    let n = /* @__PURE__ */ y((x) => {
      let A = x.target.tagName;
      if (!(A === "INPUT" || A === "TEXTAREA"))
        if (x.key === "Delete" || x.key === "Backspace") {
          if (this._selKey) {
            x.preventDefault();
            let f = this._nodeIndex.get(this._selKey);
            f && this._deleteNode(f);
          }
        } else if (x.key === "Enter") {
          if (this._selKey) {
            x.preventDefault();
            let f = this._nodeIndex.get(this._selKey);
            f && f.note.file && this.app.workspace.getLeaf(!0).openFile(f.note.file);
          }
        } else if (x.key === "Escape")
          this._batchMode ? (this._batchMode = !1, this._selected.clear(), this.render()) : this._selKey && this._select(null);
        else if (x.key === "ArrowUp" || x.key === "ArrowDown" || x.key === "ArrowLeft" || x.key === "ArrowRight") {
          if (!this._selKey) return;
          let f = this._nodeIndex.get(this._selKey);
          if (!f) return;
          if (x.preventDefault(), x.key === "ArrowLeft")
            f.expanded && f.children.length ? (f.expanded = !1, this._expandedMem.set(f.note.file ? f.note.file.path : f.key, !1), this.render()) : f.parent && this._select(f.parent.key);
          else if (x.key === "ArrowRight")
            !f.expanded && f.children.length ? (f.expanded = !0, this._expandedMem.set(f.note.file ? f.note.file.path : f.key, !0), this.render()) : f.children.length && this._select(f.children[0].key);
          else if (x.key === "ArrowUp") {
            if (f.parent) {
              let D = f.parent.children, F = D.indexOf(f);
              F > 0 ? this._select(D[F - 1].key) : this._select(f.parent.key);
            }
          } else if (x.key === "ArrowDown") {
            if (f.expanded && f.children.length) {
              this._select(f.children[0].key);
              return;
            }
            let D = f;
            for (; D.parent; ) {
              let F = D.parent.children, T = F.indexOf(D);
              if (T < F.length - 1) {
                this._select(F[T + 1].key);
                return;
              }
              D = D.parent;
            }
          }
        } else if (x.key === " ") {
          if (this._selKey) {
            x.preventDefault();
            let f = this._nodeIndex.get(this._selKey);
            f && f.children.length && (f.expanded = !f.expanded, this._expandedMem.set(f.note.file ? f.note.file.path : f.key, f.expanded), this.render());
          }
        } else if (x.key === "n" || x.key === "N") {
          if (this._selKey) {
            x.preventDefault();
            let f = this._nodeIndex.get(this._selKey);
            f && this._addChildDialog(f);
          }
        } else x.key === "b" || x.key === "B" ? (x.preventDefault(), this._back()) : x.key === "/" && (x.preventDefault(), this.openNoteSearch());
    }, "onKeydown");
    s.addEventListener("keydown", n), this._cleanup.push(() => s.removeEventListener("keydown", n)), this._titleLenApplied !== i.maxTitleLen && (this._titleLenApplied = i.maxTitleLen);
    let a = s.createDiv("lkm-toolbar"), o = a.createEl("button", { cls: "lkm-btn lkm-toolbar-toggle", text: "\u2630" });
    o.title = e("\u5C55\u5F00/\u6298\u53E0\u5DE5\u5177\u680F"), o.onclick = () => {
      this._toolbarCollapsed = !this._toolbarCollapsed, a.classList.toggle("lkm-collapsed", this._toolbarCollapsed);
    }, this._toolbarCollapsed && a.classList.add("lkm-collapsed");
    let l = /* @__PURE__ */ y((x, A, f, D, F, T) => {
      let g = a.createEl("button", { cls: "lkm-btn" + (D ? " " + D : "") });
      return T ? (g.createEl("span", { cls: "lkm-btn-icon", text: T }), g.createEl("span", { text: x })) : g.textContent = x, g.title = A, F && (g.disabled = !0), g.onclick = () => {
        g.disabled || f(g);
      }, g;
    }, "mkBtn"), r = this._selKey ? this._nodeIndex.get(this._selKey) : null, c = !r;
    l(e("\u5DE5\u4F5C\u53F0"), e("\u67E5\u770B\u7EDF\u8BA1\u5DE5\u4F5C\u53F0"), () => {
      this._mode = "dash", this.render();
    }, "", !1, "\u{1F4CA}"), l(e("\u4E3B\u7B14\u8BB0"), e("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u7B14\u8BB0\uFF08main: true\uFF09"), () => this.openRootPicker(), "", !1, "\u{1F4CC}"), l(e("\u5173\u952E\u8BCD"), e("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u8FC7\u6EE4"), () => this.openKeywordPicker(), "", !1, "\u{1F511}"), l(e("\u641C\u7D22"), e("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9"), () => this.openNoteSearch(), "", !1, "\u{1F50D}"), l(e("\u591A\u9009"), e("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A"), () => this.openMultiPick(), "", !1, "\u{1F4CB}"), l(e("\u65B0\u589E"), e("\u521B\u5EFA\u72EC\u7ACB\u7B14\u8BB0"), () => this.createStandaloneNote(), "", !1, "\u271A");
    let h = a.createDiv("lkm-depth");
    h.createSpan({ text: e("\u5C42") });
    let d = h.createEl("button", { cls: "lkm-step", text: "\u2212", title: e("\u51CF\u5C11\u663E\u793A\u5C42\u6570\uFF08\u5C421=\u53EA\u770B\u6839\u7B14\u8BB0\uFF09") }), p = h.createSpan({ cls: "lkm-depth-val", text: String(this.depth) }), m = h.createEl("button", { cls: "lkm-step", text: "+", title: e("\u589E\u52A0\u663E\u793A\u5C42\u6570") });
    d.onclick = () => {
      this.depth > 1 && (this.depth--, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, m.onclick = () => {
      this.depth < 12 && (this.depth++, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, l(e("\u8FD4\u56DE"), e("\u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE\u4F4D\u7F6E"), () => this._back(), "", !1, "\u2190"), l(e("\u5237\u65B0"), e("\u91CD\u65B0\u8BFB\u53D6\u76EE\u5F55\u4E0E\u7B14\u8BB0\u6570\u636E"), () => this.rebuild(!0), "", !1, "\u21BB"), l(e("\u9002\u5E94"), e("\u7F29\u653E\u81F3\u5B8C\u6574\u663E\u793A\u6240\u6709\u8282\u70B9"), () => this._fit && this._fit(), "", !1, "\u2922"), l(e("\u5168\u5C55"), e("\u5C55\u5F00\u6240\u6709\u8282\u70B9"), () => this._expandAll(!0), "", !1, "\u2295"), l(e("\u5168\u6298"), e("\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9"), () => this._expandAll(!1), "", !1, "\u2296"), l(this.s.layoutDir === "v" ? e("\u7EB5\u5411") : e("\u6A2A\u5411"), e("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u6A2A\u5411/\u7EB5\u5411\uFF09"), (x) => {
      this.s.layoutDir = this.s.layoutDir === "v" ? "h" : "v", this.plugin.saveSettings(), this._view = null, this.render({ fit: !0 });
    }, this.s.layoutDir === "v" ? "is-active" : "", !1, "\u21C4"), l(e("\u5FEB\u6377\u952E"), e("\u67E5\u770B\u952E\u76D8\u5FEB\u6377\u952E\u8BF4\u660E"), () => this._showShortcutHelp(), "", !1, "\u2328"), l(e("\u5BFC\u51FA"), e("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2"), (x) => this._exportMenu(x), "", !1, "\u2B07");
    let k = l(e("\u663E\u793A"), e("\u5207\u6362\u663E\u793A\u9009\u9879"), () => {
      let x = new Vt();
      x.addItem((f) => f.setTitle(this.s.showCreated ? e("\u2713 \u65F6\u95F4") : e("\u65F6\u95F4")).setIcon("calendar").onClick(() => {
        this.s.showCreated = !this.s.showCreated, this.plugin.saveSettings(), this.render();
      })), x.addItem((f) => f.setTitle(this.s.showType ? e("\u2713 \u7C7B\u578B") : e("\u7C7B\u578B")).setIcon("tag").onClick(() => {
        this.s.showType = !this.s.showType, this.plugin.saveSettings(), this.render();
      })), x.addItem((f) => f.setTitle(this.s.showChildCount ? e("\u2713 \u5B50\u6570") : e("\u5B50\u6570")).setIcon("list").onClick(() => {
        this.s.showChildCount = !this.s.showChildCount, this.plugin.saveSettings(), this.render();
      })), x.addSeparator(), x.addItem((f) => f.setTitle(this.s.showOpenIcon !== !1 ? e("\u2713 \u6253\u5F00\u56FE\u6807") : e("\u6253\u5F00\u56FE\u6807")).setIcon("edit").onClick(() => {
        this.s.showOpenIcon = this.s.showOpenIcon === !1, this.plugin.saveSettings(), this.render();
      })), x.addItem((f) => f.setTitle(this.s.showAddIcon !== !1 ? e("\u2713 \u65B0\u589E\u56FE\u6807") : e("\u65B0\u589E\u56FE\u6807")).setIcon("plus-circle").onClick(() => {
        this.s.showAddIcon = this.s.showAddIcon === !1, this.plugin.saveSettings(), this.render();
      }));
      let A = k.getBoundingClientRect();
      x.showAtPosition({ x: A.left, y: A.bottom });
    });
    l(e("\u6279\u91CF"), e("\u8FDB\u5165\u6279\u91CF\u6A21\u5F0F\uFF1A\u5355\u51FB\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u540E\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664"), () => this._toggleBatch(), this._batchMode ? "is-active" : ""), this._batchMode && (a.createDiv("lkm-sel-count").setText(e("\u5DF2\u9009 ") + this._selected.size), l(e("\u5168\u9009"), e("\u9009\u4E2D\u5BFC\u56FE\u4E2D\u6240\u6709\u8282\u70B9"), () => {
      this._selected = new Set(this._nodeIndex.keys()), this.render();
    }, "lkm-btn-action"), l(e("\u53CD\u9009"), e("\u53CD\u9009\u5F53\u524D\u9009\u4E2D\u72B6\u6001"), () => {
      let A = new Set(this._nodeIndex.keys());
      for (let f of this._selected) A.delete(f);
      this._selected = A, this.render();
    }, "lkm-btn-action"), l(e("\u79FB\u52A8\u5230\u2026"), e("\u628A\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u6307\u5B9A\u7236\u7B14\u8BB0\u4E0B"), () => this._batchMoveDialog(), "lkm-btn-action"), l(e("\u5220\u9664\u9009\u4E2D"), e("\u5220\u9664\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u53CA\u5176\u7B14\u8BB0\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF09"), () => this._batchDelete(), "lkm-btn-action"), l(e("\u6539\u7C7B\u578B"), e("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u7C7B\u578B"), () => this._batchSetType(), "lkm-btn-action"), l(e("\u6807\u8BB0\u5B8C\u6210"), e("\u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u5DF2\u5B8C\u6210"), () => this._batchSetStatus(!0), "lkm-btn-action"), l(e("\u53D6\u6D88\u5B8C\u6210"), e("\u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u5B8C\u6210\u6807\u8BB0"), () => this._batchSetStatus(!1), "lkm-btn-action")), l(e("\u8BBE\u7F6E"), e("\u6253\u5F00\u63D2\u4EF6\u8BBE\u7F6E"), () => {
      this.app.setting.open(), this.app.setting.openTabById(this.plugin.manifest.id);
    }, "", !1, "\u2699");
    let _ = a.createEl("input", { type: "text", cls: "lkm-filter-input", placeholder: e("\u7B5B\u9009\u8282\u70B9\u2026") });
    if (_.value = this._filterText || "", _.addEventListener("input", () => {
      this._filterText = _.value.trim().toLowerCase(), this._applyFilter();
    }), r) {
      a.createDiv("lkm-toolbar-sep");
      let x = a.createEl("button", { cls: "lkm-btn lkm-node-btn", text: e("\u83DC\u5355") });
      x.title = e("\u663E\u793A\u8282\u70B9\u64CD\u4F5C\u83DC\u5355\uFF08\u7B49\u540C\u53F3\u952E/\u957F\u6309\uFF09\uFF1A\u6253\u5F00/\u65B0\u589E/\u805A\u7126/\u4E0A\u7EA7/\u5B8C\u6210/\u4E3B\u7B14\u8BB0/\u91CD\u547D\u540D/\u590D\u5236/\u79FB\u52A8/\u6392\u5E8F/\u5220\u9664"), x.onclick = (A) => {
        let f = this._nodeIndex.get(this._selKey);
        f && this._showNodeMenu(f, { clientX: A.clientX, clientY: A.clientY });
      };
    }
    let v = a.createDiv("lkm-info");
    r && v.createSpan({ text: e("\u5DF2\u9009\uFF1A") + tt(r.note.title, 12) + " \uFF5C " });
    let C = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (this._kwFile)
      v.createSpan({ text: e("\u5173\u952E\u8BCD\uFF1A") + this._kwFile.basename });
    else if (this._multiRoot)
      v.createSpan({ text: e("\u591A\u9009\u5BFC\u56FE\uFF08") + (this.currentRoot ? this.currentRoot.children.length : 0) + e(" \u7BC7\uFF09") });
    else if (C) {
      v.createSpan({ text: e("\u8DEF\u5F84\uFF1A") });
      let x = this._buildCrumbChain();
      x.forEach((A, f) => {
        if (x.length > 8 && f === 1) {
          v.createEl("span", { cls: "lkm-crumb-sep", text: "\u2026>" });
          return;
        }
        if (x.length > 8 && f > 1 && f < x.length - 1) return;
        f && v.createSpan({ cls: "lkm-crumb-sep", text: ">" });
        let D = f === x.length - 1, F = tt(A.note.title, 10), T = v.createEl(D ? "span" : "a", { cls: "lkm-crumb-item" + (D ? " lkm-crumb-cur" : ""), text: F });
        T.title = A.note.title, !D && A.note.file && T.addEventListener("click", () => this._focusPath(A.note.file.path));
      });
    } else
      v.createSpan({ text: e("\u672A\u627E\u5230\u7B14\u8BB0") });
    let L = s.createDiv("lkm-canvas");
    if (this._kwFile && !this.app.vault.getAbstractFileByPath(this._kwFile.path) && (this._kwFile = null), this._kwFile) {
      this.showKeyword(this._kwFile, t);
      return;
    }
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length) {
      this._indexTree(this.currentRoot), Yt(this.currentRoot, this.depth), this._restoreExpanded(), this._draw(L, Nt(this.currentRoot, this.s), t);
      return;
    }
    if (!this.rootPath || !C) {
      if (this.notes.size === 0) {
        this._renderEmptyGuide(L);
        return;
      }
      L.createDiv("lkm-empty").setText(e("\u6CA1\u6709\u627E\u5230\u4E3B\u7B14\u8BB0\uFF08") + (this.s.zkField || "main") + e(": true\uFF09\u3002\u53EF\u5728\u5BFC\u56FE\u4E2D\u53F3\u952E/\u957F\u6309\u4EFB\u610F\u8282\u70B9\u6807\u8BB0\u4E3A\u4E3B\u7B14\u8BB0\u3002"));
      return;
    }
    let N = Dt(this.app, this.notes, C);
    this.currentRoot = N, this._indexTree(N), Yt(N, this.depth), this._restoreExpanded(), this._draw(L, Nt(N, this.s), t);
  }
  _restoreExpanded() {
    for (let [t, s] of this._expandedMem) {
      let i = this._pathNodes ? this._pathNodes.get(t) : null;
      if (i) for (let n of i) n.expanded = s;
    }
  }
  _applyFilter() {
    let t = this._filterText || "";
    for (let s of this._nodeIndex.values())
      if (s._el)
        if (!t)
          s._el.classList.remove("lkm-dim"), s._el.classList.remove("lkm-highlight");
        else {
          let i = s.note.title.toLowerCase().includes(t);
          s._el.classList.toggle("lkm-dim", !i), s._el.classList.toggle("lkm-highlight", i);
        }
  }
  async _showPreview(t, s) {
    if (!t.note.file) return;
    this._previewCache || (this._previewCache = /* @__PURE__ */ new Map());
    let i = t.note.file.path, n = this._previewCache.get(i);
    if (n === void 0)
      try {
        let r = await this.app.vault.read(t.note.file), c = r.match(/^---\n[\s\S]*?\n---\n?/);
        n = c ? r.slice(c[0].length).trim() : r.trim(), n = n.split(`
`).slice(0, 20).join(`
`).trim(), n.length > 600 && (n = n.slice(0, 600) + "\u2026"), this._previewCache.set(i, n);
      } catch {
        return;
      }
    if (!n) return;
    this._hidePreview();
    let a = document.createElement("div");
    a.className = "lkm-preview";
    let o = document.createElement("div");
    o.className = "lkm-preview-title", o.textContent = t.note.title, a.appendChild(o);
    let l = document.createElement("div");
    a.appendChild(l), a.addEventListener("mouseenter", () => {
      this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null);
    }), a.addEventListener("mouseleave", () => {
      this._hidePreview();
    }), document.body.appendChild(a), this._previewEl = a, this._previewComp = new De(), this._previewComp.load(), await Ee.render(this.app, n, l, i, this._previewComp), this._positionPreview(s);
  }
  _positionPreview(t) {
    if (!this._previewEl) return;
    let s = this._previewEl, i = t.clientX + 14, n = t.clientY + 14, a = s.getBoundingClientRect(), o = window.innerWidth - a.width - 8, l = window.innerHeight - a.height - 8;
    s.style.left = Math.min(i, o) + "px", s.style.top = Math.min(n, l) + "px";
  }
  _hidePreview() {
    this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null), this._previewComp && (this._previewComp.unload(), this._previewComp = null), this._previewEl && (this._previewEl.remove(), this._previewEl = null);
  }
  _focus(t) {
    let s = this._nodeIndex.get(t);
    !s || !s.note.file || this._focusPath(s.note.file.path);
  }
  _focusPath(t) {
    t && ((t !== this.rootPath || this._multiRoot) && (this._history.push({ rootPath: this.rootPath, kwFile: this._kwFile, multiRoot: this._multiRoot, currentRoot: this._multiRoot ? this.currentRoot : null }), this._kwFile = null, this._multiRoot = !1, this.rootPath = t, this._expandedMem.clear(), this._view = null, this._selKey = null), this.render());
  }
  _back() {
    if (this._history.length) {
      let t = this._history.pop();
      this._kwFile = t.kwFile || null, this._multiRoot = t.multiRoot || !1, t.multiRoot && t.currentRoot ? (this.currentRoot = t.currentRoot, this.rootPath = null) : this.rootPath = t.rootPath, this._view = null, this._selKey = null, this.render();
    } else new w(e("\u6CA1\u6709\u53EF\u8FD4\u56DE\u7684\u8282\u70B9"));
  }
  _expandAll(t) {
    for (let s of this._nodeIndex.values())
      s.children.length && (s.expanded = t, this._expandedMem.set(s.note.file ? s.note.file.path : s.key, t));
    this.render();
  }
  _showShortcutHelp() {
    let t = new xt(this.app);
    t.onOpen = () => {
      let { contentEl: s } = t;
      s.addClass("lkm-multipick"), s.createEl("h3", { text: e("\u952E\u76D8\u5FEB\u6377\u952E") });
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
      for (let [a, o] of i) {
        let l = s.createDiv("lkm-shortcut-row");
        l.createEl("span", { cls: "lkm-shortcut-key", text: a }), l.createEl("span", { cls: "lkm-shortcut-desc", text: o });
      }
      let n = s.createDiv("lkm-multipick-btns");
      new M(n).addButton((a) => a.setButtonText(e("\u5173\u95ED")).onClick(() => t.close()));
    }, t.open();
  }
  _exportMenu(t) {
    let s = new Vt();
    s.addItem((n) => n.setTitle(e("\u5BFC\u51FA SVG")).setIcon("download").onClick(() => this._exportSVG())), s.addItem((n) => n.setTitle(e("\u5BFC\u51FA PNG")).setIcon("image").onClick(() => this._exportPNG())), s.addItem((n) => n.setTitle(e("\u5BFC\u51FA Markdown \u5927\u7EB2")).setIcon("document").onClick(() => this._exportMarkdown()));
    let i = t.getBoundingClientRect();
    s.showAtPosition({ x: i.left, y: i.bottom + 4 });
  }
  _getSVGString() {
    let t = this.contentEl.querySelector(".lkm-svg");
    if (!t)
      return new w(e("\u672A\u627E\u5230\u5BFC\u56FE\u5185\u5BB9")), null;
    let s = t.cloneNode(!0), i = t.getBBox(), n = 30, a = i.width + n * 2, o = i.height + n * 2;
    s.setAttribute("xmlns", "http://www.w3.org/2000/svg"), s.setAttribute("width", a), s.setAttribute("height", o), s.setAttribute("viewBox", i.x - n + " " + (i.y - n) + " " + a + " " + o);
    let l = this.contentEl.querySelector(".lkm-view") || this.contentEl, r = getComputedStyle(l), c = [
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
    ], h = {};
    for (let f of c) {
      let D = r.getPropertyValue(f).trim();
      D && (h[f] = D);
    }
    h["--lkm-accent"] || (h["--lkm-accent"] = "#6c8cff"), h["--lkm-main"] || (h["--lkm-main"] = "#f2a65a"), h["--lkm-done"] || (h["--lkm-done"] = "#3fa66a");
    let d = "";
    try {
      for (let f of document.styleSheets) {
        let D;
        try {
          D = f.cssRules;
        } catch {
          continue;
        }
        if (D)
          for (let F of D) {
            let T = F.selectorText || "";
            T.includes("lkm-") && !T.includes("lkm-toolbar") && !T.includes("lkm-btn") && !T.includes("lkm-dash") && !T.includes("lkm-cards") && !T.includes("lkm-modal") && !T.includes("lkm-multipick") && !T.includes("lkm-empty") && !T.includes("lkm-guide") && !T.includes("lkm-heat") && !T.includes("lkm-branch") && !T.includes("lkm-legend") && !T.includes("lkm-donut") && !T.includes("lkm-bars") && !T.includes("lkm-stackbar") && !T.includes("lkm-chips") && !T.includes("lkm-shortcut") && !T.includes("lkm-step") && !T.includes("lkm-depth") && !T.includes("lkm-info") && !T.includes("lkm-crumb") && !T.includes("lkm-sel-count") && (d += F.cssText + `
`);
          }
      }
    } catch (f) {
      console.error("[link-mindmap] collect CSS:", f);
    }
    let p = d;
    for (let [f, D] of Object.entries(h))
      p = p.replace(new RegExp("var\\(" + f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\)", "g"), D), p = p.replace(new RegExp("var\\(" + f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ",\\s*[^)]+\\)", "g"), D);
    p = p.replace(/var\(--[^)]+\)/g, "#888");
    let m = document.createElement("style");
    m.textContent = p, s.insertBefore(m, s.firstChild);
    let k = t.querySelectorAll(".lkm-card"), _ = s.querySelectorAll(".lkm-card");
    for (let f = 0; f < k.length && f < _.length; f++) {
      let D = k[f], F = _[f], T = getComputedStyle(D), g = T.stroke, K = T.fill, S = T.strokeWidth;
      g && g !== "none" && F.setAttribute("stroke", g), K && K !== "none" && F.setAttribute("fill", K), S && F.setAttribute("stroke-width", S);
    }
    let v = t.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign"), C = s.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign");
    for (let f = 0; f < v.length && f < C.length; f++) {
      let D = getComputedStyle(v[f]), F = D.fill, T = D.fontSize;
      F && F !== "none" && C[f].setAttribute("fill", F), T && C[f].setAttribute("font-size", T);
    }
    let L = t.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill"), N = s.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill");
    for (let f = 0; f < L.length && f < N.length; f++) {
      let F = getComputedStyle(L[f]).fill;
      F && F !== "none" && N[f].setAttribute("fill", F);
    }
    let x = t.querySelectorAll(".lkm-edge"), A = s.querySelectorAll(".lkm-edge");
    for (let f = 0; f < x.length && f < A.length; f++) {
      let F = getComputedStyle(x[f]).stroke;
      F && F !== "none" && A[f].setAttribute("stroke", F);
    }
    return new XMLSerializer().serializeToString(s);
  }
  _exportSVG() {
    let t = this._getSVGString();
    if (!t) return;
    let i = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".svg";
    this.app.vault.create(i, t).then(
      () => new w(e("SVG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + i),
      (n) => new w(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n))
    );
  }
  _exportPNG() {
    let t = this._getSVGString();
    if (!t) return;
    let i = this.contentEl.querySelector(".lkm-svg").getBBox(), n = 30, a = i.width + n * 2, o = i.height + n * 2, l = new Image(), r = btoa(unescape(encodeURIComponent(t)));
    l.onload = () => {
      let c = document.createElement("canvas");
      c.width = a * 2, c.height = o * 2;
      let h = c.getContext("2d"), d = getComputedStyle(this.contentEl).getPropertyValue("--background-primary").trim() || "#ffffff";
      h.fillStyle = d, h.fillRect(0, 0, c.width, c.height), h.drawImage(l, 0, 0, c.width, c.height), c.toBlob((p) => {
        let k = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".png";
        p.arrayBuffer().then((_) => this.app.vault.createBinary(k, _).then(
          () => new w(e("PNG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + k),
          (v) => new w(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (v && v.message ? v.message : v))
        ));
      });
    }, l.onerror = () => new w(e("PNG \u5BFC\u51FA\u5931\u8D25")), l.src = "data:image/svg+xml;base64," + r;
  }
  _exportMarkdown() {
    let t = this.currentRoot;
    if (!t) {
      new w(e("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let s = [], i = /* @__PURE__ */ y((l, r) => {
      let c = r === 0 ? "# " : "  ".repeat(r) + "- ", h = l.note.status ? " [x]" : "", d = l.note.type ? " `" + l.note.type + "`" : "";
      s.push(c + (l.note.title || l.note.file?.name || "?") + d + h);
      for (let p of l.children || []) i(p, r + 1);
    }, "walk");
    i(t, 0);
    let n = s.join(`
`), o = "link-mindmap-outline-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".md";
    this.app.vault.create(o, n).then(
      () => new w(e("Markdown \u5927\u7EB2\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + o),
      (l) => new w(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l))
    );
  }
  _parentPathsOf(t) {
    let s = [];
    for (let i of this.notes.values())
      if (i.file.path !== t)
        for (let n of i.childLinks) {
          let a = this.app.metadataCache.getFirstLinkpathDest(n, i.file.path);
          if (a && a.path === t) {
            s.push(i.file.path);
            break;
          }
        }
    return s;
  }
  _buildCrumbChain() {
    if (!this.rootPath) return [];
    let t = [], s = /* @__PURE__ */ new Set(), i = this.rootPath;
    for (; i && !s.has(i); ) {
      s.add(i);
      let n = this.notes.get(i);
      if (!n) break;
      t.unshift({ note: n });
      let a = this._parentPathsOf(i);
      i = a.length ? a[0] : null;
    }
    return t;
  }
  _up() {
    let t = this._selKey ? this._nodeIndex.get(this._selKey) : null, s = t && t.note.file ? t.note : this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!s || !s.file) {
      new w(e("\u6CA1\u6709\u53EF\u8DF3\u8F6C\u7684\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let i = this._parentPathsOf(s.file.path);
    if (!i.length) {
      new w("\u300C" + tt(s.title, 12) + e("\u300D\u6CA1\u6709\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let n = s.file.path, a = /* @__PURE__ */ y((l) => {
      this._focusPath(l);
      let r = [...this._nodeIndex.values()].find((c) => c.note.file && c.note.file.path === n);
      r && (this._selKey = r.key, this.render());
    }, "go");
    if (i.length === 1) {
      a(i[0]);
      return;
    }
    let o = i.map((l) => ({ label: (this.notes.get(l) || {}).title || l, path: l }));
    new Et(this.app, o, (l) => a(l.path), e("\u8BE5\u8282\u70B9\u6709\u591A\u4E2A\u4E0A\u7EA7\uFF0C\u9009\u62E9\u8981\u524D\u5F80\u7684\u4E0A\u7EA7\u2026")).open();
  }
  locateFile(t, s) {
    if (!s && !this.s.autoLocate || !t || t.extension !== "md" || this._batchMode || this._mode === "dash") return;
    try {
      if (typeof this.containerEl.isShown == "function" && !this.containerEl.isShown()) return;
    } catch {
    }
    let i = null;
    for (let l of this._nodeIndex.values())
      l.note.file && l.note.file.path === t.path && (!i || !l.isAlias) && (i = l);
    if (!i) return;
    if (this._kwFile && this.currentRoot) {
      let l = this._findClone(this.currentRoot, t.path);
      if (l && this._cloneShown(l)) {
        this._selKey = l.key, this.render();
        return;
      }
    }
    this._kwFile = null, this._multiRoot = !1;
    let n = [];
    for (let l = i; l; l = l.parent) n.unshift(l);
    let a = n[0], o = !1;
    this.rootPath !== a.note.file.path && (this._history.push({ rootPath: this.rootPath, kwFile: this._kwFile, multiRoot: this._multiRoot, currentRoot: this._multiRoot ? this.currentRoot : null }), this.rootPath = a.note.file.path, o = !0);
    for (let l = 0; l < n.length; l++)
      l < n.length - 1 && !n[l].expanded && (o = !0), n[l].expanded = !0, this._expandedMem.set(n[l].note.file ? n[l].note.file.path : n[l].key, !0);
    !o && this._selKey === i.key || (this._selKey = i.key, this.render({ centerPath: t.path }));
  }
  _findClone(t, s) {
    if (!t) return null;
    if (t.note.file && t.note.file.path === s) return t;
    for (let i of t.children || []) {
      let n = this._findClone(i, s);
      if (n) return n;
    }
    return null;
  }
  _cloneShown(t) {
    let s = t;
    for (; s && s.parent; ) {
      if (!s.parent.expanded) return !1;
      s = s.parent;
    }
    return !0;
  }
  _select(t) {
    this._selKey = t, this.render();
  }
  _copyLink(t) {
    if (!t || !t.note.file) return;
    let s = "[[" + t.note.file.basename + "]]";
    navigator.clipboard.writeText(s).then(
      () => new w(e("\u5DF2\u590D\u5236\uFF1A") + s),
      () => new w(e("\u590D\u5236\u5931\u8D25"))
    );
  }
  _copySubtree(t) {
    if (!t) return;
    let s = [], i = /* @__PURE__ */ y((n, a) => {
      let o = a === 0 ? "" : "  ".repeat(a) + "- ";
      s.push(o + "[[" + (n.note.file ? n.note.file.basename : n.note.title) + "]]");
      for (let l of n.children || []) i(l, a + 1);
    }, "walk");
    i(t, 0), navigator.clipboard.writeText(s.join(`
`)).then(
      () => new w(e("\u5DF2\u590D\u5236\u5B50\u6811\uFF08") + s.length + e(" \u4E2A\u8282\u70B9\uFF09")),
      () => new w(e("\u590D\u5236\u5931\u8D25"))
    );
  }
  _renameNode(t) {
    if (!t || !t.note.file) {
      new w(e("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    new Pe(this.app, t.note.file.basename, async (s) => {
      try {
        let i = t.note.file.basename, n = t.note.file.parent ? t.note.file.parent.path : "", a = et((n ? n + "/" : "") + ft(s) + ".md");
        if (a === t.note.file.path) return;
        if (this.app.vault.getAbstractFileByPath(a)) {
          new w(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + ft(s));
          return;
        }
        await this.app.vault.rename(t.note.file, a);
        let o = ft(s), l = this.s.linkField || "children", r = this.s.backField || "parent";
        for (let h of this.notes.values())
          h.file.path !== a && await this.app.fileManager.processFrontMatter(h.file, (d) => {
            let p = Bt(d[l]), m = !1, k = p.map((_) => bt(_) === i ? (m = !0, "[[" + o + "]]") : _);
            m && (d[l] = k), d[r] != null && bt(d[r]) === i && (d[r] = o);
          });
        let c = this.s.titleField || "title";
        await this.app.fileManager.processFrontMatter(t.note.file, (h) => {
          h[c] != null && (h[c] = o);
        }), new w(e("\u5DF2\u91CD\u547D\u540D\u4E3A ") + o), await this.rebuild(!0);
      } catch (i) {
        new w(e("\u91CD\u547D\u540D\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _renameNode:", i);
      }
    }).open();
  }
  _subtreePaths(t) {
    let s = /* @__PURE__ */ new Set();
    return (/* @__PURE__ */ y((function i(n) {
      n.note.file && s.add(n.note.file.path), n.children.forEach(i);
    }), "walk"))(t), s;
  }
  _deleteNode(t) {
    if (!t || !t.note.file) {
      new w(e("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (t.isAlias) {
      if (!t.parent || !t.parent.note.file) {
        new w(e("\u65E0\u6CD5\u786E\u5B9A\u8BE5\u6302\u70B9\u7684\u7236\u8282\u70B9"));
        return;
      }
      new qt(
        this.app,
        e("\u79FB\u9664\u5173\u8054"),
        "\u300C" + tt(t.note.title, 16) + e(`\u300D\u662F\u91CD\u590D\u8282\u70B9\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\uFF09\u3002
\u672C\u6B21\u53EA\u79FB\u9664\u4ECE\u300C`) + tt(t.parent.note.title, 16) + e("\u300D\u5230\u5B83\u7684\u5173\u8054\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\u3002"),
        async () => {
          try {
            await _t(this.app, t.parent.note.file, this.s.linkField, t.note.file.path), this._selKey = null, new w(e("\u5DF2\u79FB\u9664\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (n) {
            new w(e("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n)), console.error("[link-mindmap] removeLink:", n);
          }
        }
      ).open();
      return;
    }
    let s = t.children.length, i = new xt(this.app);
    i.onOpen = () => {
      let { contentEl: n } = i;
      n.createEl("h3", { text: e("\u5220\u9664\u8282\u70B9") }), n.createEl("p", { text: "\u300C" + tt(t.note.title, 20) + "\u300D" + (s ? e("\uFF08\u542B ") + s + e(" \u4E2A\u5B50\u8282\u70B9\uFF09") : ""), cls: "lkm-modal-sub" });
      let a = n.createDiv("lkm-confirm-row");
      a.createEl("button", { cls: "lkm2-btn-ghost", text: e("\u53D6\u6D88") }).addEventListener("click", () => i.close());
      let l = a.createEl("button", { cls: "lkm-btn", text: e("\u79FB\u9664\u5F53\u524D\u5173\u8054") });
      l.title = t.parent && t.parent.note.file ? e("\u53EA\u79FB\u9664\u5F53\u524D\u7236\u8282\u70B9\u5230\u5B83\u7684\u94FE\u63A5\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559") : e("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"), (!t.parent || !t.parent.note.file) && (l.disabled = !0), l.addEventListener("click", () => {
        if (!t.parent || !t.parent.note.file) {
          new w(e("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"));
          return;
        }
        i.close(), (async () => {
          try {
            await _t(this.app, t.parent.note.file, this.s.linkField, t.note.file.path), this._selKey = null, new w(e("\u5DF2\u79FB\u9664\u4ECE\u300C") + tt(t.parent.note.title, 14) + e("\u300D\u5230\u300C") + tt(t.note.title, 14) + e("\u300D\u7684\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (h) {
            new w(e("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] removeLink:", h);
          }
        })();
      });
      let r = a.createEl("button", { cls: "lkm-btn", text: e("\u79FB\u9664\u6240\u6709\u5173\u8054") });
      r.title = e("\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559"), r.addEventListener("click", () => {
        i.close(), (async () => {
          try {
            let h = t.note.file.path;
            for (let d of this.notes.values())
              d.file.path !== h && d.childLinks.length && await _t(this.app, d.file, this.s.linkField, h);
            this._selKey = null, new w(e("\u5DF2\u79FB\u9664\u6240\u6709\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (h) {
            new w(e("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] removeLink:", h);
          }
        })();
      });
      let c = a.createEl("button", { cls: "lkm2-btn-danger", text: e("\u5220\u9664\u6587\u4EF6") });
      c.title = e("\u79FB\u5165\u56DE\u6536\u7AD9\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664"), c.addEventListener("click", () => {
        if (!s) {
          i.close(), this._doDelete(t);
          return;
        }
        let h = new xt(this.app);
        h.onOpen = () => {
          let { contentEl: d } = h;
          d.createEl("h3", { text: e("\u5220\u9664\u5B50\u8282\u70B9") }), d.createEl("p", { text: "\u300C" + tt(t.note.title, 20) + e("\u300D\u542B ") + s + e(" \u4E2A\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u4E00\u5E76\u5220\u9664\uFF1F"), cls: "lkm-modal-sub" });
          let p = d.createDiv("lkm-confirm-row");
          p.createEl("button", { cls: "lkm2-btn-ghost", text: e("\u53D6\u6D88") }).addEventListener("click", () => h.close()), p.createEl("button", { cls: "lkm-btn", text: e("\u4EC5\u5220\u6B64\u8282\u70B9") }).addEventListener("click", () => {
            h.close(), i.close(), this._doDelete(t);
          }), p.createEl("button", { cls: "lkm2-btn-danger", text: e("\u5168\u90E8\u5220\u9664") }).addEventListener("click", () => {
            h.close(), i.close(), this._doDelete(t, !0);
          });
        }, h.onClose = () => h.contentEl.empty(), h.open();
      });
    }, i.onClose = () => i.contentEl.empty(), i.open();
  }
  async _doDelete(t, s) {
    try {
      let i = s ? this._subtreePaths(t) : /* @__PURE__ */ new Set([t.note.file.path]);
      for (let a of this.notes.values())
        if (!i.has(a.file.path))
          for (let o of i)
            a.childLinks.length && await _t(this.app, a.file, this.s.linkField, o);
      for (let a of i) {
        let o = this.app.vault.getAbstractFileByPath(a);
        o && o.path && await this.app.vault.trash(o, !0);
      }
      this._selKey = null;
      let n = i.size;
      new w(e("\u5DF2\u5220\u9664\u300C") + tt(t.note.title, 16) + "\u300D" + (n > 1 ? e("\uFF08\u542B\u5B50\u8282\u70B9\u5171 ") + n + e(" \u4E2A\u6587\u4EF6\uFF09") : "") + e("\uFF08\u53EF\u5728\u56DE\u6536\u7AD9\u6062\u590D\uFF09")), await this.rebuild(!0);
    } catch (i) {
      new w(e("\u5220\u9664\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _deleteNode:", i);
    }
  }
  _showNodeMenu(t, s) {
    if (!t || !t.note.file) return;
    let i = new Vt();
    i.addItem((a) => a.setTitle(e("\u6253\u5F00\u7B14\u8BB0")).setIcon("file-text").onClick(() => {
      this.app.workspace.getLeaf(!0).openFile(t.note.file);
    })), i.addItem((a) => a.setTitle(e("\u65B0\u589E\u5B50\u8282\u70B9")).setIcon("plus").onClick(() => this.createChild(t))), i.addItem((a) => a.setTitle(e("\u805A\u7126\u5230\u6B64\u8282\u70B9")).setIcon("focus").onClick(() => this._focus(t.key)));
    let n = this._parentPathsOf(t.note.file.path);
    if (i.addItem((a) => a.setTitle(e("\u8DF3\u5230\u4E0A\u7EA7")).setIcon("arrow-up").onClick(() => this._up())), n.length > 1)
      for (let a of n) {
        let o = this.notes.get(a);
        i.addItem((l) => l.setTitle("  \u21B3 " + tt(o ? o.title : a, 20)).setIcon("arrow-up").onClick(() => {
          this._focusPath(a);
          let r = [...this._nodeIndex.values()].find((c) => c.note.file && c.note.file.path === t.note.file.path);
          r && (this._selKey = r.key, this.render());
        }));
      }
    i.addSeparator(), i.addItem((a) => a.setTitle(t.note.status ? e("\u53D6\u6D88\u5B8C\u6210") : e("\u6807\u8BB0\u5B8C\u6210")).setIcon(t.note.status ? "circle" : "check-circle").onClick(() => this._setStatus(t, !t.note.status))), i.addItem((a) => a.setTitle(t.note.zk ? e("\u53D6\u6D88\u4E3B\u7B14\u8BB0") : e("\u6807\u8BB0\u4E3B\u7B14\u8BB0")).setIcon("star").onClick(() => this._toggleZk(t))), i.addItem((a) => a.setTitle(e("\u4FEE\u6539\u7C7B\u578B")).setIcon("tag").onClick(() => this._setTypeDialog(t))), i.addItem((a) => a.setTitle(e("\u4FEE\u6539\u65E5\u671F")).setIcon("calendar").onClick(() => this._setDateDialog(t))), t.children.length && i.addItem((a) => a.setTitle(t.expanded ? e("\u6298\u53E0\u5B50\u8282\u70B9") : e("\u5C55\u5F00\u5B50\u8282\u70B9")).setIcon(t.expanded ? "chevron-down" : "chevron-right").onClick(() => {
      t.expanded = !t.expanded, this._expandedMem.set(t.note.file ? t.note.file.path : t.key, t.expanded), this.render();
    })), i.addSeparator(), i.addItem((a) => a.setTitle(e("\u91CD\u547D\u540D")).setIcon("pencil").onClick(() => this._renameNode(t))), i.addItem((a) => a.setTitle(e("\u590D\u5236\u94FE\u63A5")).setIcon("copy").onClick(() => this._copyLink(t))), i.addItem((a) => a.setTitle(e("\u590D\u5236\u5B50\u6811\u5927\u7EB2")).setIcon("list").onClick(() => this._copySubtree(t))), i.addItem((a) => a.setTitle(e("\u79FB\u52A8\u5230\u7236\u5361")).setIcon("corner-up-right").onClick(() => this._moveNodeDialog(t))), i.addItem((a) => a.setTitle(e("\u540C\u7EA7\u4E4B\u524D")).setIcon("arrow-up").onClick(() => this._moveSiblingDialog(t, !1))), i.addItem((a) => a.setTitle(e("\u540C\u7EA7\u4E4B\u540E")).setIcon("arrow-down").onClick(() => this._moveSiblingDialog(t, !0))), i.addSeparator(), i.addItem((a) => a.setTitle(t.isAlias ? e("\u79FB\u9664\u5173\u8054\uFF08\u4FDD\u7559\u6587\u4EF6\uFF09") : e("\u5220\u9664\u8282\u70B9")).setIcon("trash").onClick(() => this._deleteNode(t))), s && typeof s.preventDefault == "function" ? i.showAtMouseEvent(s) : s && s.clientX !== void 0 && i.showAtPosition({ x: s.clientX, y: s.clientY });
  }
  _isDescendant(t, s) {
    return this._subtreePaths(t).has(s);
  }
  _moveNodeDialog(t) {
    if (!t || !t.note.file) return;
    let s = this._subtreePaths(t), i = [...this.notes.values()].filter((n) => n.file.path !== t.note.file.path && !s.has(n.file.path)).sort((n, a) => n.title.localeCompare(a.title, "zh")).map((n) => ({ label: n.title, path: n.file.path }));
    if (!i.length) {
      new w(e("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new Wt(this.app, i, (n) => this._moveNode(t, n.path)).open();
  }
  async _moveNode(t, s) {
    let i = t.note;
    if (!i.file) return;
    if (this._subtreePaths(t).has(s)) {
      new w(e("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let n = this.notes.get(s);
    if (!n) {
      new w(e("\u76EE\u6807\u7236\u7B14\u8BB0\u4E0D\u5B58\u5728"));
      return;
    }
    try {
      t.parent && t.parent.note.file && await _t(this.app, t.parent.note.file, this.s.linkField, i.file.path), await Rt(this.app, n.file, this.s.linkField, i.file.basename), new w(e("\u5DF2\u79FB\u52A8\u300C") + tt(i.title, 14) + e("\u300D\u5230\u300C") + tt(n.title, 14) + "\u300D"), await this.rebuild(!0);
    } catch (a) {
      new w(e("\u79FB\u52A8\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
    }
  }
  _moveSiblingDialog(t, s) {
    if (!t || !t.parent || !t.parent.note.file) {
      new w(e("\u6839\u8282\u70B9\u6CA1\u6709\u540C\u7EA7\u8282\u70B9"));
      return;
    }
    let i = t.parent.children.filter((a) => a !== t);
    if (!i.length) {
      new w(e("\u6CA1\u6709\u540C\u7EA7\u8282\u70B9\u53EF\u63D2\u5165"));
      return;
    }
    let n = i.map((a) => ({ label: a.note.title, path: a.note.file.path }));
    new Wt(this.app, n, (a) => this._reorderSiblings(t, a.path, s)).open();
  }
  async _reorderSiblings(t, s, i) {
    let n = t.parent.note.file;
    try {
      await this.app.fileManager.processFrontMatter(n, (a) => {
        let o = this.s.linkField, l = Bt(a[o]), r = /* @__PURE__ */ y((p) => l.findIndex((m) => {
          let k = this.app.metadataCache.getFirstLinkpathDest(bt(m), n.path);
          return k && k.path === p;
        }), "idxOf"), c = r(t.note.file.path);
        if (c < 0) return;
        let h = l.splice(c, 1)[0], d = r(s);
        if (d < 0) {
          l.splice(c, 0, h);
          return;
        }
        l.splice(i ? d + 1 : d, 0, h), a[o] = l;
      }), await this.rebuild(!0);
    } catch (a) {
      new w(e("\u540C\u7EA7\u79FB\u52A8\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
    }
  }
  _wouldCycle(t, s) {
    if (t === s) return !0;
    let i = [s], n = /* @__PURE__ */ new Set(), a = 0;
    for (; i.length && a++ < 5e3; ) {
      let o = i.pop();
      if (o === t) return !0;
      if (n.has(o)) continue;
      n.add(o);
      let l = this.notes.get(o);
      if (l)
        for (let r of l.childLinks) {
          let c = this.app.metadataCache.getFirstLinkpathDest(r, l.file.path);
          c && this.notes.has(c.path) && i.push(c.path);
        }
    }
    return !1;
  }
  async _addRelation(t, s) {
    let i = t && t.note;
    if (!i || !i.file) {
      new w(e("\u6E90\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (!s || !s.file) {
      new w(e("\u76EE\u6807\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (i.file.path === s.file.path) {
      new w(e("\u4E0D\u80FD\u5173\u8054\u5230\u81EA\u5DF1"));
      return;
    }
    if (Ut(this.app, this.notes, i, "child").some((n) => n.file.path === s.file.path)) {
      new w("\u300C" + tt(i.title, 12) + e("\u300D\u5DF2\u5173\u8054\u5230\u300C") + tt(s.title, 12) + e("\u300D\uFF0C\u65E0\u9700\u91CD\u590D"));
      return;
    }
    if (this._wouldCycle(i.file.path, s.file.path)) {
      new w(e("\u4E0D\u80FD\u5EFA\u7ACB\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF\uFF08\u76EE\u6807\u5DF2\u662F\u300C") + tt(i.title, 12) + e("\u300D\u7684\u4E0A\u7EA7\uFF09"));
      return;
    }
    try {
      if (await Rt(this.app, i.file, this.s.linkField, s.file.basename), this.s.autoAddBackLink) {
        let n = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(s.file, (a) => {
          a[n] = i.file.basename;
        });
      }
      new w(e("\u5DF2\u5EFA\u7ACB\u5173\u8054\uFF1A") + tt(i.title, 12) + " \u2192 " + tt(s.title, 12)), await this.rebuild(!0);
    } catch (n) {
      new w(e("\u5EFA\u7ACB\u5173\u8054\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
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
      new w(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = t.map((a) => this._nodeIndex.get(a)).filter(Boolean), i = /* @__PURE__ */ new Set();
    s.forEach((a) => this._subtreePaths(a).forEach((o) => i.add(o)));
    let n = [...this.notes.values()].filter((a) => !i.has(a.file.path)).sort((a, o) => a.title.localeCompare(o.title, "zh")).map((a) => ({ label: a.title, path: a.file.path }));
    if (!n.length) {
      new w(e("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new Wt(this.app, n, async (a) => {
      let o = this.notes.get(a.path), l = 0;
      for (let r of s)
        if (r.note.file)
          try {
            r.parent && r.parent.note.file && await _t(this.app, r.parent.note.file, this.s.linkField, r.note.file.path), await Rt(this.app, o.file, this.s.linkField, r.note.file.basename), l++;
          } catch {
          }
      new w(e("\u6279\u91CF\u79FB\u52A8\u5B8C\u6210\uFF1A") + l + e(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchDelete() {
    let t = [...this._selected];
    if (!t.length) {
      new w(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = t.map((l) => this._nodeIndex.get(l)).filter((l) => l && l.note.file), i = s.filter((l) => !l.isAlias), n = new Set(i.map((l) => l.note.file.path)), a = s.filter((l) => l.isAlias && !n.has(l.note.file.path)), o = "";
    if (i.length && (o += e("\u5C06\u628A ") + i.length + e(" \u7BC7\u7B14\u8BB0\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u7684\u94FE\u63A5\u91CC\u79FB\u9664\u3002")), a.length && (o += (o ? " " : "") + e("\u53E6\u5C06\u79FB\u9664 ") + a.length + e(" \u4E2A\u989D\u5916\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09\u3002")), !o) {
      new w(e("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    new qt(this.app, e("\u6279\u91CF\u5220\u9664"), o, async () => {
      let l = 0;
      for (let r of a)
        try {
          r.parent && r.parent.note.file && (await _t(this.app, r.parent.note.file, this.s.linkField, r.note.file.path), l++);
        } catch {
        }
      for (let r of i)
        try {
          let c = r.note.file;
          for (let h of this.notes.values())
            h.file.path !== c.path && h.childLinks.length && await _t(this.app, h.file, this.s.linkField, c.path);
          await this.app.vault.trash(c, !0), l++;
        } catch {
        }
      new w(e("\u5DF2\u5904\u7406 ") + l + e(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchSetType() {
    if (![...this._selected].length) {
      new w(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = this.s.typeColors || {}, i = Object.keys(s), n = [{ label: e("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let a of i) n.push({ label: a, path: a });
    new Et(this.app, n, (a) => this._batchSetTypeDo(a.path), e("\u6279\u91CF\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _batchSetTypeDo(t) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new w(e("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let n = this.s.typeField || "type", a = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (l) => {
          t ? l[n] = t : delete l[n];
        }), a++;
      } catch (l) {
        console.error("[link-mindmap] _batchSetTypeDo:", l);
      }
    new w(e("\u5DF2\u4FEE\u6539 ") + a + e(" \u4E2A\u8282\u70B9\u7C7B\u578B\u4E3A\u300C") + (t || e("\u65E0\u7C7B\u578B")) + "\u300D"), await this.rebuild(!0);
  }
  async _batchSetStatus(t) {
    let s = [...this._selected];
    if (!s.length) {
      new w(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let i = s.map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new w(e("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let n = this.s.statusField || "status", a = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (l) => {
          l[n] = t;
        }), a++;
      } catch (l) {
        console.error("[link-mindmap] _batchSetStatus:", l);
      }
    new w(e("\u5DF2") + e(t ? "\u6807\u8BB0\u5B8C\u6210" : "\u53D6\u6D88\u5B8C\u6210") + " " + a + e(" \u4E2A\u8282\u70B9")), await this.rebuild(!0);
  }
  async _setStatus(t, s) {
    if (t.note.file)
      try {
        await this.app.fileManager.processFrontMatter(t.note.file, (i) => {
          i[this.s.statusField || "status"] = s;
        }), new w(e(s ? "\u5DF2\u6807\u8BB0\u5B8C\u6210\uFF1A" : "\u5DF2\u53D6\u6D88\u6807\u8BB0\uFF1A") + t.note.title), await this.rebuild(!0);
      } catch (i) {
        new w(e("\u6807\u8BB0\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
      }
  }
  async _toggleZk(t) {
    if (t.note.file)
      try {
        let s = !1;
        await this.app.fileManager.processFrontMatter(t.note.file, (i) => {
          let n = this.s.zkField || "main";
          s = !(i[n] === !0 || String(i[n]) === "true"), i[n] = s;
        }), new w(e(s ? "\u5DF2\u6807\u8BB0\u4E3B\u7B14\u8BB0\uFF1A" : "\u5DF2\u53D6\u6D88\u4E3B\u7B14\u8BB0\uFF1A") + t.note.title), await this.rebuild(!0);
      } catch (s) {
        new w(e("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
      }
  }
  _setTypeDialog(t) {
    if (!t || !t.note.file) return;
    let s = this.s.typeColors || {}, i = Object.keys(s), n = [{ label: e("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let a of i) n.push({ label: a + (t.note.type === a ? " \u2713" : ""), path: a });
    new Et(this.app, n, (a) => this._setType(t, a.path), e("\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _setType(t, s) {
    if (t.note.file)
      try {
        let i = this.s.typeField || "type";
        await this.app.fileManager.processFrontMatter(t.note.file, (n) => {
          s ? n[i] = s : delete n[i];
        }), new w(e("\u5DF2\u4FEE\u6539\u7C7B\u578B\uFF1A") + (s || e("\u65E0\u7C7B\u578B")) + " \xB7 " + t.note.title), await this.rebuild(!0);
      } catch (i) {
        new w(e("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setType:", i);
      }
  }
  _setDateDialog(t) {
    if (!t || !t.note.file) return;
    let s = new xt(this.app);
    s.onOpen = () => {
      let { contentEl: i } = s;
      i.addClass("lkm-multipick"), i.createEl("h3", { text: e("\u4FEE\u6539\u65E5\u671F") }), i.createEl("p", { text: "\u300C" + tt(t.note.title, 20) + e("\u300D\u5F53\u524D\u65E5\u671F\uFF1A") + (t.note.date || e("\u65E0")), cls: "lkm-modal-sub" });
      let n = i.createEl("input", { type: "date", cls: "lkm-multipick-input" });
      n.value = t.note.date || "";
      let a = i.createDiv("lkm-multipick-btns");
      new M(a).addButton((o) => o.setButtonText(e("\u786E\u5B9A")).setCta().onClick(() => {
        let l = n.value || "";
        s.close(), this._setDate(t, l);
      })).addButton((o) => o.setButtonText(e("\u6E05\u9664")).onClick(() => {
        s.close(), this._setDate(t, "");
      })).addButton((o) => o.setButtonText(e("\u53D6\u6D88")).onClick(() => s.close())), n.focus();
    }, s.onClose = () => s.contentEl.empty(), s.open();
  }
  async _setDate(t, s) {
    if (t.note.file)
      try {
        let i = this.s.dateField || "date";
        await this.app.fileManager.processFrontMatter(t.note.file, (n) => {
          s ? n[i] = s : delete n[i];
        }), new w(e("\u5DF2\u4FEE\u6539\u65E5\u671F\uFF1A") + (s || e("\u65E0")) + " \xB7 " + t.note.title), await this.rebuild(!0);
      } catch (i) {
        new w(e("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setDate:", i);
      }
  }
  openRootPicker() {
    let t = [...this.notes.values()].filter((i) => i.zk).sort((i, n) => i.title.localeCompare(n.title, "zh")), s = t.length ? t : [...this.notes.values()].filter((i) => !this.referenced.has(i.file.path));
    if (!s.length) {
      new w(e("\u6CA1\u6709\u4E3B\u7B14\u8BB0\uFF08main: true\uFF09"));
      return;
    }
    new Et(
      this.app,
      s.map((i) => ({ label: i.title, path: i.file.path })),
      (i) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = i.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      e("\u9009\u62E9\u4E3B\u7B14\u8BB0\u2026")
    ).open();
  }
  openNoteSearch() {
    let t = [...this.notes.values()].sort((s, i) => s.title.localeCompare(i.title, "zh"));
    if (!t.length) {
      new w(e("\u6CA1\u6709\u53EF\u641C\u7D22\u7684\u7B14\u8BB0"));
      return;
    }
    new Et(
      this.app,
      t.map((s) => ({ label: s.title, path: s.file.path })),
      (s) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = s.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      e("\u641C\u7D22\u7B14\u8BB0\u2026")
    ).open();
  }
  openMultiPick() {
    let t = [...this.notes.values()].sort((a, o) => (o.file.stat.ctime || 0) - (a.file.stat.ctime || 0));
    if (!t.length) {
      new w(e("\u6CA1\u6709\u53EF\u9009\u7684\u7B14\u8BB0"));
      return;
    }
    let s = [];
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length)
      s = this.currentRoot.children.map((a) => a.note.file ? a.note.file.path : null).filter(Boolean);
    else if (this._selKey) {
      let a = this._nodeIndex.get(this._selKey);
      a && a.note.file && s.push(a.note.file.path);
    }
    let i = Object.keys(this.s.typeColors || {}), n = t.map((a) => ({
      label: a.title,
      path: a.file.path,
      isMain: a.zk,
      type: a.type || "",
      orphan: !a.childLinks.length && !this.referenced.has(a.file.path)
    }));
    new Le(
      this.app,
      n,
      (a) => this._showMultiRoot(a),
      s,
      i
    ).open();
  }
  _showMultiRoot(t) {
    let s = t.map((o) => this.notes.get(o)).filter(Boolean);
    if (!s.length) {
      new w(e("\u6CA1\u6709\u6709\u6548\u7684\u7B14\u8BB0"));
      return;
    }
    let i = /* @__PURE__ */ new Set(), n = s.filter((o) => i.has(o.file.path) ? !1 : (i.add(o.file.path), !0));
    this._multiRootPaths = n.map((o) => o.file.path);
    let a = {
      note: { file: null, title: e("\u591A\u9009\u5BFC\u56FE\uFF08") + n.length + e(" \u7BC7\uFF09"), zk: !1, status: !1, type: "", date: "", childLinks: [], parentLinks: [] },
      parent: null,
      children: [],
      expanded: !0,
      isAlias: !1,
      key: "#root"
    };
    for (let o of n) a.children.push(Dt(this.app, this.notes, o));
    this._kwFile = null, this._multiRoot = !0, this.rootPath = null, this.currentRoot = a, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render({ fit: !0 });
  }
  _renderEmptyGuide(t) {
    let s = t.createDiv("lkm-empty-guide");
    s.createEl("h3", { text: e("\u6B22\u8FCE\u4F7F\u7528\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE") }), s.createEl("p", { text: e("\u7ED3\u5408\u5362\u66FC\u7B14\u8BB0\u7684\u5C42\u7EA7\u601D\u60F3\uFF0C\u5229\u7528 Obsidian \u5F3A\u5927\u7684\u53CC\u94FE\u529F\u80FD\u5EFA\u7ACB\u7B14\u8BB0\u95F4\u7684\u7236\u5B50\u5173\u7CFB\uFF0C\u53D6\u6D88\u4E86\u7F16\u53F7\u2014\u2014\u6BCF\u4E2A\u8282\u70B9\u5C31\u662F\u4E00\u7BC7\u7B14\u8BB0\uFF0C\u901A\u8FC7 frontmatter \u7684 children/parent \u94FE\u63A5\u81EA\u7136\u5173\u8054\uFF0C\u65E0\u9700\u7EF4\u62A4\u4EFB\u4F55\u7F16\u53F7\u3002"), cls: "lkm-guide-intro" });
    let i = s.createDiv("lkm-guide-steps");
    i.createEl("h4", { text: e("\u5FEB\u901F\u4E0A\u624B") });
    let n = [
      ["\u2460", e("\u521B\u5EFA\u7B14\u8BB0"), e("\u70B9\u51FB\u4E0B\u65B9\u300C\u521B\u5EFA\u7B14\u8BB0\u300D\uFF0C\u8F93\u5165\u6807\u9898\u5373\u53EF\u3002\u521B\u5EFA\u65F6\u53EF\u52FE\u9009\u300C\u4E3B\u7B14\u8BB0\u300D\u4F5C\u4E3A\u5BFC\u56FE\u5165\u53E3\u3002")],
      ["\u2461", e("\u6DFB\u52A0\u5B50\u8282\u70B9"), e("\u521B\u5EFA\u540E\uFF0C\u53F3\u952E/\u957F\u6309\u8282\u70B9 \u2192\u300C\u65B0\u589E\u5B50\u8282\u70B9\u300D\uFF0C\u81EA\u52A8\u5728\u7236\u7B14\u8BB0\u5199\u5165 children \u94FE\u63A5\u3002")],
      ["\u2462", e("\u67E5\u770B\u5BFC\u56FE"), e("\u4E3B\u7B14\u8BB0\u81EA\u52A8\u5C55\u5F00\u4E3A\u5BFC\u56FE\u6811\u3002\u62D6\u52A8\u8282\u70B9\u53EF\u79FB\u52A8\uFF0C\u62D6\u52A8\u53F3\u4FA7\u7AEF\u53E3\u53EF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\u3002")]
    ];
    for (let [p, m, k] of n) {
      let _ = i.createDiv("lkm-guide-step");
      _.createEl("span", { cls: "lkm-step-num", text: p });
      let v = _.createDiv("lkm-step-body");
      v.createEl("span", { cls: "lkm-step-title", text: m }), v.createEl("span", { cls: "lkm-step-desc", text: k });
    }
    let a = s.createDiv("lkm-guide-btns"), o = a.createEl("button", { cls: "lkm-btn lkm-btn-action", text: e("\u521B\u5EFA\u7B14\u8BB0") });
    o.onclick = () => this.createStandaloneNote();
    let l = a.createEl("button", { cls: "lkm-btn", text: e("\u521B\u5EFA\u9ED8\u8BA4\u6A21\u677F") });
    l.onclick = () => this._createDefaultTemplate();
    let r = s.createDiv("lkm-guide-help");
    r.createEl("h4", { text: e("\u5DE5\u5177\u680F\u529F\u80FD") });
    let c = [
      [e("\u5DE5\u4F5C\u53F0"), e("\u7EDF\u8BA1\u6982\u89C8\uFF1A\u7B14\u8BB0\u603B\u6570\u3001\u7C7B\u578B\u5206\u5E03\u3001\u5B8C\u6210\u72B6\u6001\u3001\u521B\u5EFA\u70ED\u529B\u56FE\u3001\u5206\u652F\u5206\u5E03\uFF0C\u70B9\u51FB\u6570\u5B57\u53EF\u7B5B\u9009\u67E5\u770B")],
      [e("\u4E3B\u7B14\u8BB0"), e("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u6839\u8282\u70B9\uFF08frontmatter \u4E2D main: true \u7684\u7B14\u8BB0\uFF09")],
      [e("\u5173\u952E\u8BCD"), e("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u7B14\u8BB0\u8FC7\u6EE4\u663E\u793A\u5BFC\u56FE")],
      [e("\u641C\u7D22"), e("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9")],
      [e("\u591A\u9009"), e("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A")],
      [e("\u5C42\u6570 \xB1"), e("\u63A7\u5236\u5BFC\u56FE\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")],
      [e("\u5168\u5C55/\u5168\u6298"), e("\u4E00\u952E\u5C55\u5F00\u6216\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9")],
      [e("\u6A2A/\u7EB5"), e("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u5DE6\u2192\u53F3 \u6216 \u4E0A\u2192\u4E0B\uFF09")],
      [e("\u5BFC\u51FA"), e("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2\u6587\u4EF6")],
      [e("\u6279\u91CF"), e("\u6279\u91CF\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664/\u6539\u7C7B\u578B/\u6807\u8BB0\u5B8C\u6210")],
      [e("\u663E\u793A"), e("\u5207\u6362\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A\u65F6\u95F4\u3001\u7C7B\u578B\u3001\u5B50\u6570\u3001\u56FE\u6807\u7B49")]
    ];
    for (let [p, m] of c) {
      let k = r.createDiv("lkm-guide-row");
      k.createEl("span", { cls: "lkm-guide-key", text: p }), k.createEl("span", { cls: "lkm-guide-val", text: m });
    }
    let h = s.createDiv("lkm-guide-help");
    h.createEl("h4", { text: e("\u8282\u70B9\u64CD\u4F5C") });
    let d = [
      [e("\u53F3\u952E / \u957F\u6309"), e("\u83DC\u5355\uFF1A\u6253\u5F00\u3001\u65B0\u589E\u5B50\u8282\u70B9\u3001\u805A\u7126\u3001\u4E0A\u7EA7\u3001\u5B8C\u6210\u3001\u4E3B\u7B14\u8BB0\u3001\u91CD\u547D\u540D\u3001\u590D\u5236\u3001\u79FB\u52A8\u3001\u5220\u9664")],
      [e("\u53CC\u51FB"), e("\u6253\u5F00\u7B14\u8BB0\u6587\u4EF6")],
      [e("\u62D6\u52A8\u5361\u7247"), e("\u79FB\u52A8\u8282\u70B9\u5230\u5176\u4ED6\u7236\u7B14\u8BB0\u4E0B")],
      [e("\u62D6\u52A8\u7AEF\u53E3"), e("\u8FDE\u7EBF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u591A\u7236/\u7F51\u72B6\uFF09")],
      [e("\u65B9\u5411\u952E"), e("\u2191\u2193\u2190\u2192 \u5728\u8282\u70B9\u95F4\u5BFC\u822A")],
      ["Delete", e("\u5220\u9664\u9009\u4E2D\u8282\u70B9\uFF08\u5F39\u7A97\u9009\u62E9\uFF1A\u79FB\u9664\u5173\u8054/\u5220\u9664\u6587\u4EF6\uFF09")]
    ];
    for (let [p, m] of d) {
      let k = h.createDiv("lkm-guide-row");
      k.createEl("span", { cls: "lkm-guide-key", text: p }), k.createEl("span", { cls: "lkm-guide-val", text: m });
    }
  }
  async _createDefaultTemplate() {
    let t = this.s, s = (t.templateFolder || "").trim();
    if (s || (s = e("99-\u6A21\u677F"), t.templateFolder = s), !this.app.vault.getAbstractFileByPath(et(s)))
      try {
        await this.app.vault.createFolder(et(s));
      } catch (a) {
        new w(e("\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u5939\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
        return;
      }
    let n = et(s + e("/\u65B0\u8282\u70B9\u6A21\u677F.md"));
    if (this.app.vault.getAbstractFileByPath(n))
      new w(e("\u6A21\u677F\u5DF2\u5B58\u5728\uFF1A") + n);
    else {
      let a = t.linkField || "children", o = t.zkField || "main", l = t.statusField || "status", r = t.typeField || "type", c = t.dateField || "date", h = `---
${a}: []
${o}: false
${l}: false
${c}: ""
${r}: ""
---

`;
      try {
        await this.app.vault.create(n, h);
      } catch (d) {
        new w(e("\u521B\u5EFA\u6A21\u677F\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
        return;
      }
    }
    t.templatePath = n, await this.plugin.saveSettings(), new w(e("\u5DF2\u521B\u5EFA\u6A21\u677F\u5E76\u8BBE\u4E3A\u9ED8\u8BA4\uFF1A") + n), this.render();
  }
  async _createFirstNote(t) {
    let s = this.s, i = ft(t) + ".md", n = et(s.mainFolder), a = et(n + "/" + i);
    if (this.app.vault.getAbstractFileByPath(a)) {
      new w(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + i);
      return;
    }
    let o = s.linkField || "children", l = s.zkField || "main", r = s.statusField || "status", c = s.dateField || "date", h = /* @__PURE__ */ new Date(), d = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0"), p = `---
${o}: []
${l}: true
${r}: false
${c}: "${d}"
---

`;
    try {
      await this.app.vault.create(a, p), new w(e("\u5DF2\u521B\u5EFA\u4E3B\u7B14\u8BB0\u300C") + t + "\u300D"), await this.rebuild(!0);
    } catch (m) {
      new w(e("\u521B\u5EFA\u5931\u8D25\uFF1A") + (m && m.message ? m.message : m));
    }
  }
  async openKeywordPicker() {
    let t = this.app.vault.getAbstractFileByPath(et(this.s.indexFolder)), s = (t && t.children ? t.children : []).filter((i) => i instanceof Tt && i.extension === "md");
    if (!s.length) {
      new w("\u300C" + this.s.indexFolder + e("\u300D\u91CC\u6CA1\u6709\u7D22\u5F15\u6587\u4EF6"));
      return;
    }
    new Et(
      this.app,
      s.map((i) => ({ label: i.basename, file: i })),
      (i) => this.showKeyword(i.file),
      e("\u9009\u62E9\u5173\u952E\u8BCD\u7D22\u5F15\u2026")
    ).open();
  }
  async showKeyword(t, s) {
    this._kwFile = t, this._multiRoot = !1;
    let i = this.contentEl.querySelector(".lkm-info");
    i && (i.empty(), i.setText(e("\u5173\u952E\u8BCD\uFF1A") + t.basename));
    let a = [...(await this.app.vault.read(t)).matchAll(/\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g)].map((h) => h[1].trim()), o = [], l = /* @__PURE__ */ new Set();
    for (let h of a) {
      let d = this.app.metadataCache.getFirstLinkpathDest(h, t.path);
      if (!d) continue;
      let p = this.notes.get(d.path);
      !p || l.has(p.file.path) || (l.add(p.file.path), o.push(p));
    }
    if (!o.length) {
      new w(e("\u8BE5\u7D22\u5F15\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u7B14\u8BB0\u94FE\u63A5")), this._kwFile = null, this.render();
      return;
    }
    let r = {
      note: { file: null, title: t.basename, zk: !1, status: !1, type: "", date: "", childLinks: [], parentLinks: [] },
      parent: null,
      children: [],
      expanded: !0,
      isAlias: !1,
      key: "#root"
    };
    for (let h of o) r.children.push(Dt(this.app, this.notes, h));
    this.currentRoot = r, this._indexTree(r), Yt(r, this.depth), this._restoreExpanded(), this._view = null;
    let c = this.contentEl.querySelector(".lkm-canvas");
    c && this._draw(c, Nt(r, this.s), Object.assign({ fit: !0 }, s || {}));
  }
  _draw(t, s, i) {
    i = i || {}, t.empty();
    let n = this.s, { nodes: a, edges: o } = s;
    if (!a.length) return;
    let l = 1 / 0, r = 1 / 0, c = -1 / 0, h = -1 / 0, d = n.layoutDir === "v";
    for (let u of a)
      l = Math.min(l, u._x), r = Math.min(r, u._y - n.nodeHeight / 2), c = Math.max(c, u._x + u._w), h = Math.max(h, u._y + n.nodeHeight / 2 + (d ? 28 : 0));
    let p = 40, m = c - l + p * 2, k = h - r + p * 2, _ = I("svg", { class: "lkm-svg" }), v = I("defs"), C = I("marker", { id: "lkm-arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" });
    C.appendChild(I("path", { d: "M0,0 L10,5 L0,10 z", class: "lkm-arrow-fill" })), v.appendChild(C), _.appendChild(v);
    let L = I("g", { class: "lkm-viewport" });
    _.appendChild(L), t.appendChild(_);
    for (let [u, P] of o) {
      let E, W, J, X, ot, $;
      if (n.layoutDir === "v") {
        E = u._x + u._w / 2, W = u._y + n.nodeHeight / 2, J = P._x + P._w / 2, X = P._y - n.nodeHeight / 2, $ = (W + X) / 2;
        let dt = n.curve ? `M${E},${W} C${E},${$} ${J},${$} ${J},${X}` : `M${E},${W} L${J},${X}`;
        L.appendChild(I("path", { d: dt, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      } else {
        E = u._x + u._w, W = u._y, J = P._x, X = P._y, ot = (E + J) / 2;
        let dt = n.curve ? `M${E},${W} C${ot},${W} ${ot},${X} ${J},${X}` : `M${E},${W} L${J},${X}`;
        L.appendChild(I("path", { d: dt, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      }
    }
    let N = /* @__PURE__ */ y((u) => this._draw(t, Nt(this.currentRoot, n), { anchorKey: u }), "redraw"), x = null, A = { before: e("\u2191 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u524D"), after: e("\u2193 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u540E"), child: e("\u2192 \u4F5C\u4E3A\u5B50\u8282\u70B9") }, f = /* @__PURE__ */ y((u, P) => {
      if (!P.note.file) return;
      x = { node: P, sx: u.clientX, sy: u.clientY, moved: !1, target: null, zone: "child" };
      let E = document.createElement("div");
      E.className = "lkm-drag-hint", E.style.display = "none", document.body.appendChild(E);
      let W = /* @__PURE__ */ y(($) => {
        if (!x) return;
        let dt = $.clientX - x.sx, Ct = $.clientY - x.sy;
        if (!x.moved && Math.hypot(dt, Ct) < 6) return;
        x.moved = !0, _.classList.add("lkm-dragging");
        let St = t.getBoundingClientRect(), kt = ($.clientX - St.left - T) / F, at = ($.clientY - St.top - g) / F, st = n.nodeHeight, G = null, ct = "child";
        for (let q of a)
          if (!(q.key === P.key || !q.note.file) && kt >= q._x && kt <= q._x + q._w && at >= q._y - st / 2 && at <= q._y + st / 2) {
            if (G = q, n.layoutDir === "v") {
              let ut = (kt - q._x) / q._w;
              ct = ut < 0.3 ? "before" : ut > 0.7 ? "after" : "child";
            } else {
              let ut = (at - (q._y - st / 2)) / st;
              ct = ut < 0.3 ? "before" : ut > 0.7 ? "after" : "child";
            }
            break;
          }
        (G !== x.target || ct !== x.zone) && (x.target && x.target._el && x.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), x.target = G, x.zone = ct, G && G._el && (G._el.classList.add("lkm-drop-target"), ct === "before" && G._el.classList.add("lkm-drop-before"), ct === "after" && G._el.classList.add("lkm-drop-after"))), E.style.display = G ? "block" : "none", G && (E.textContent = A[ct], E.style.left = $.clientX + 16 + "px", E.style.top = $.clientY + 16 + "px");
      }, "onMove"), J = /* @__PURE__ */ y(() => {
        window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", J), window.removeEventListener("touchmove", X), window.removeEventListener("touchend", ot), _.classList.remove("lkm-dragging"), E.remove();
        let $ = x;
        x = null, $ && ($.target && $.target._el && $.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), $.moved && $.target && ($.zone === "child" ? this._moveNode($.node, $.target.note.file.path) : this._reorderSiblings($.node, $.target.note.file.path, $.zone === "after")));
      }, "onUp"), X = /* @__PURE__ */ y(($) => {
        $.touches.length && W({ clientX: $.touches[0].clientX, clientY: $.touches[0].clientY });
      }, "onTouchMove2"), ot = /* @__PURE__ */ y(() => J(), "onTouchEnd2");
      window.addEventListener("mousemove", W), window.addEventListener("mouseup", J), window.addEventListener("touchmove", X, { passive: !1 }), window.addEventListener("touchend", ot);
    }, "startNodeDrag"), D = /* @__PURE__ */ y((u, P) => {
      if (!P.note.file) return;
      u.preventDefault(), u.stopPropagation(), S = !0;
      let E = I("path", { class: "lkm-wire" });
      L.appendChild(E);
      let W = n.layoutDir === "v" ? P._x + P._w / 2 : P._x + P._w, J = n.layoutDir === "v" ? P._y + n.nodeHeight / 2 : P._y, X = null, ot = /* @__PURE__ */ y((at, st) => {
        let G = t.getBoundingClientRect();
        return { x: (at - G.left - T) / F, y: (st - G.top - g) / F };
      }, "local"), $ = /* @__PURE__ */ y((at, st) => {
        let G = (W + at) / 2;
        E.setAttribute("d", `M${W},${J} C${G},${J} ${G},${st} ${at},${st}`);
      }, "setWire");
      $(W, J);
      let dt = /* @__PURE__ */ y((at) => {
        let st = ot(at.clientX, at.clientY);
        $(st.x, st.y);
        let G = n.nodeHeight, ct = null;
        for (let q of a)
          if (!(!q.note.file || q.key === P.key) && st.x >= q._x && st.x <= q._x + q._w && st.y >= q._y - G / 2 && st.y <= q._y + G / 2) {
            ct = q;
            break;
          }
        ct !== X && (X && X._el && X._el.classList.remove("lkm-wire-target"), X = ct, X && X._el && X._el.classList.add("lkm-wire-target"));
      }, "onMove"), Ct = /* @__PURE__ */ y(async () => {
        S = !1, window.removeEventListener("mousemove", dt), window.removeEventListener("mouseup", Ct), window.removeEventListener("touchmove", St), window.removeEventListener("touchend", kt), E.remove(), X && X._el && X._el.classList.remove("lkm-wire-target"), X && await this._addRelation(P, X.note);
      }, "onUp"), St = /* @__PURE__ */ y((at) => {
        at.preventDefault();
        let st = at.touches[0];
        dt({ clientX: st.clientX, clientY: st.clientY });
      }, "onTouchMove"), kt = /* @__PURE__ */ y(() => Ct(), "onTouchEnd");
      window.addEventListener("mousemove", dt), window.addEventListener("mouseup", Ct), window.addEventListener("touchmove", St, { passive: !1 }), window.addEventListener("touchend", kt);
    }, "startWire");
    for (let u of a) {
      let P = !u.note.file, E = I("g", {
        class: "lkm-node" + (u.note.zk ? " lkm-main" : "") + (u.isAlias ? " lkm-multi" : "") + (u.note.status ? " lkm-done" : ""),
        transform: `translate(${u._x},${u._y - n.nodeHeight / 2})`
      }), W = I("rect", { width: u._w, height: n.nodeHeight, rx: 12, ry: 12, class: "lkm-card" }), J = u.note.type ? (n.typeColors || {})[u.note.type] : null;
      J && W.style.setProperty("--lkm-card-stroke", J), E.appendChild(W);
      let X = I("g", { class: "lkm-status-dots" }), ot = 6, $ = /* @__PURE__ */ y((B, U) => {
        let rt = I("circle", { cx: 10, cy: ot, r: 4, class: B });
        X.appendChild(rt);
        let wt = I("circle", { cx: 10, cy: ot, r: 7, class: "lkm-dot-hit" }), yt = I("title");
        yt.textContent = U, wt.appendChild(yt), X.appendChild(wt), ot += 10;
      }, "mkDot");
      u.note.zk && $("lkm-dot-zk", e("\u4E3B\u7B14\u8BB0\uFF1A\u8BE5\u7B14\u8BB0 main: true\uFF0C\u662F\u5BFC\u56FE\u7684\u4E3B\u5165\u53E3")), u.note.status && $("lkm-dot-done", e("\u5DF2\u5B8C\u6210\uFF1A\u8BE5\u7B14\u8BB0 status: true")), u.isAlias && $("lkm-dot-multi", e("\u91CD\u590D\u8282\u70B9\uFF1A\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\u7684\u6302\u70B9\uFF09")), ot > 9 && E.appendChild(X);
      let dt = n.showCreated && !P && u.note.date ? u.note.date : "", Ct = n.showType && !P && u.note.type ? u.note.type : "", St = n.showChildCount && !P && u.children.length ? e("\u5B50 ") + u.children.length : "", kt = [Ct, St, dt].filter(Boolean).join(" \xB7 "), at = !!kt, st = I("text", { x: 16, y: at ? n.nodeHeight / 2 - 4 : n.nodeHeight / 2 + 5, class: "lkm-title" });
      if (st.textContent = u._shown || u.note.title, E.appendChild(st), at) {
        let B = I("text", { x: 16, y: n.nodeHeight - 8, class: "lkm-sub" });
        B.textContent = tt(kt, 50), E.appendChild(B);
      }
      let G = n.nodeHeight / 2, ct = window.innerWidth < 600, q = ct ? 12 : 10, ut = /* @__PURE__ */ y((B, U) => {
        let rt = I("title");
        rt.textContent = U, B.appendChild(rt);
      }, "addTip"), Zt = n.layoutDir === "v";
      if (u.children.length) {
        let B = I("g", { class: "lkm-expand" });
        ut(B, u.expanded ? e("\u6298\u53E0\u5B50\u8282\u70B9") : e("\u5C55\u5F00\u5B50\u8282\u70B9"));
        let U = Zt ? u._w / 2 : u._w + 14, rt = Zt ? n.nodeHeight + 14 : G;
        B.appendChild(I("circle", { cx: U, cy: rt, r: q, class: "lkm-dot" }));
        let wt = I("text", { x: U, y: rt + 5, class: "lkm-sign", "text-anchor": "middle" });
        wt.textContent = u.expanded ? "\u2212" : "+", B.appendChild(wt);
        let yt = I("circle", { cx: U, cy: rt, r: q + 5, class: "lkm-hit" });
        yt.addEventListener("click", (Lt) => {
          Lt.stopPropagation(), u.expanded = !u.expanded, this._expandedMem.set(u.note.file ? u.note.file.path : u.key, u.expanded), N(u.key);
        }), B.appendChild(yt), E.appendChild(B);
      }
      if (u.note.file) {
        let B = ct ? 26 : 24, U = u._w - (ct ? 20 : 18), rt = I("g", { class: "lkm-connect" });
        ut(rt, e("\u62D6\u52A8\u8FDE\u7EBF\uFF1A\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u76EE\u6807\u6210\u4E3A\u672C\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u539F\u5173\u7CFB\u4FDD\u7559\uFF09"));
        let wt = U, yt = G;
        rt.appendChild(I("circle", { cx: wt, cy: yt, r: q, class: "lkm-connect-bg" })), rt.appendChild(I("circle", { cx: wt, cy: yt, r: 2.6, class: "lkm-connect-dot" }));
        let Lt = I("circle", { cx: wt, cy: yt, r: q + 5, class: "lkm-hit" });
        if (Lt.addEventListener("mousedown", (ht) => {
          this._batchMode || D(ht, u);
        }), Lt.addEventListener("touchstart", (ht) => {
          this._batchMode || D(ht, u);
        }, { passive: !1 }), rt.appendChild(Lt), E.appendChild(rt), n.showOpenIcon !== !1) {
          U -= B;
          let ht = I("g", { class: "lkm-open" });
          ut(ht, e("\u6253\u5F00\u7B14\u8BB0")), ht.appendChild(I("circle", { cx: U, cy: G, r: q, class: "lkm-open-bg" }));
          let Pt = I("text", { x: U, y: G + 4, class: "lkm-open-sign", "text-anchor": "middle", transform: "rotate(90 " + U + " " + G + ")" });
          Pt.textContent = "\u270E", ht.appendChild(Pt);
          let It = I("circle", { cx: U, cy: G, r: q + 3, class: "lkm-hit" });
          It.addEventListener("click", (jt) => {
            jt.stopPropagation(), this.app.workspace.getLeaf(!0).openFile(u.note.file);
          }), ht.appendChild(It), E.appendChild(ht);
        }
        if (n.showAddIcon !== !1) {
          U -= B;
          let ht = I("g", { class: "lkm-add" });
          ut(ht, e("\u65B0\u589E\u5B50\u8282\u70B9\uFF08\u81EA\u52A8\u5199\u5165\u94FE\u63A5\uFF09")), ht.appendChild(I("circle", { cx: U, cy: G, r: q, class: "lkm-add-bg" }));
          let Pt = I("text", { x: U, y: G + 4, class: "lkm-add-sign", "text-anchor": "middle" });
          Pt.textContent = "\uFF0B", ht.appendChild(Pt);
          let It = I("circle", { cx: U, cy: G, r: q + 3, class: "lkm-hit" });
          It.addEventListener("click", (jt) => {
            jt.stopPropagation(), this.createChild(u);
          }), ht.appendChild(It), E.appendChild(ht);
        }
      }
      u._el = E, this._batchMode && this._selected.has(u.key) && E.classList.add("lkm-selected"), this._selKey === u.key && E.classList.add("lkm-sel"), E.addEventListener("click", (B) => {
        if (this._batchMode) {
          B.stopPropagation(), this._toggleSelect(u.key);
          return;
        }
        this._select(u.key);
      }), E.addEventListener("contextmenu", (B) => {
        B.preventDefault(), B.stopPropagation(), !this._batchMode && (this._select(u.key), this._showNodeMenu(u, B));
      }), E.addEventListener("dblclick", (B) => {
        B.stopPropagation(), !this._batchMode && (u.note.file ? this.app.workspace.getLeaf(!0).openFile(u.note.file) : u.children.length && (u.expanded = !u.expanded, this._expandedMem.set(u.note.file ? u.note.file.path : u.key, u.expanded), N(u.key)));
      }), E.addEventListener("mousedown", (B) => {
        B.button !== 0 || this._batchMode || (B.stopPropagation(), f(B, u));
      }), E.addEventListener("touchstart", (B) => {
        if (this._batchMode || !u.note.file || B.touches.length !== 1) return;
        let U = B.touches[0], rt = { clientX: U.clientX, clientY: U.clientY, preventDefault: /* @__PURE__ */ y(() => B.preventDefault(), "preventDefault"), stopPropagation: /* @__PURE__ */ y(() => B.stopPropagation(), "stopPropagation") };
        f(rt, u);
      }, { passive: !1 });
      let vt = null;
      if (E.addEventListener("touchstart", (B) => {
        if (this._batchMode || !u.note.file) return;
        let U = B.touches[0];
        vt = setTimeout(() => {
          vt = null, this._select(u.key), this._showNodeMenu(u, { clientX: U.clientX, clientY: U.clientY });
        }, 500);
      }, { passive: !0 }), E.addEventListener("touchmove", () => {
        vt && (clearTimeout(vt), vt = null);
      }, { passive: !0 }), E.addEventListener("touchend", () => {
        vt && (clearTimeout(vt), vt = null);
      }, { passive: !0 }), u.note.file && !P) {
        let B = null;
        E.addEventListener("mouseenter", (U) => {
          B && clearTimeout(B), B = setTimeout(() => {
            B = null, this._showPreview(u, U);
          }, 500);
        }), E.addEventListener("mousemove", (U) => {
          this._previewEl && this._positionPreview(U);
        }), E.addEventListener("mouseleave", () => {
          B && (clearTimeout(B), B = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
            this._hidePreview(), this._hideTimer = null;
          }, 200);
        });
      }
      L.appendChild(E);
    }
    this._applyFilter();
    let F = 1, T = 0, g = 0;
    this._view && (F = this._view.k, T = this._view.tx, g = this._view.ty);
    let K = /* @__PURE__ */ y(() => L.setAttribute("transform", `translate(${T},${g}) scale(${F})`), "apply"), S = !1, V = /* @__PURE__ */ y(() => {
      let u = t.getBoundingClientRect(), P = u.width || t.clientWidth || 800, E = u.height || t.clientHeight || 600;
      if (F = Math.min(P / m, E / k, 1.4) || 1, d && a.length) {
        let W = a[0];
        T = P / 2 - (W._x + W._w / 2) * F, g = p * F - r * F;
      } else
        T = (P - m * F) / 2 - (l - p) * F, g = (E - k * F) / 2 - (r - p) * F;
      this._view = { k: F, tx: T, ty: g }, K();
    }, "fit");
    this._fit = V;
    let z = /* @__PURE__ */ y((u) => {
      let P = a.find((W) => W.note.file && W.note.file.path === u);
      if (!P) return;
      let E = t.getBoundingClientRect();
      !E.width || !E.height || (T = E.width / 2 - (P._x + P._w / 2) * F, g = E.height / 2 - P._y * F, this._view = { k: F, tx: T, ty: g }, K());
    }, "centerOnPath");
    if (!this._view || i.fit) {
      if (requestAnimationFrame(() => {
        V(), i.centerPath && z(i.centerPath);
      }), !i.centerPath) {
        let u = 3, P = /* @__PURE__ */ y(() => {
          u-- > 0 && V();
        }, "onResize");
        window.addEventListener("resize", P);
        let E = setTimeout(() => window.removeEventListener("resize", P), 1500);
        this._cleanup.push(() => {
          window.removeEventListener("resize", P), clearTimeout(E);
        });
      }
    } else
      K(), i.centerPath && z(i.centerPath);
    let H = /* @__PURE__ */ y((u) => {
      u.preventDefault();
      let P = _.getBoundingClientRect(), E = u.clientX - P.left, W = u.clientY - P.top, J = Math.max(0.2, Math.min(3, F * (u.deltaY < 0 ? 1.1 : 0.9)));
      T = E - (E - T) * (J / F), g = W - (W - g) * (J / F), F = J, this._view = { k: F, tx: T, ty: g }, K();
    }, "onWheel");
    _.addEventListener("wheel", H, { passive: !1 }), this._cleanup.push(() => _.removeEventListener("wheel", H));
    let O = !1, Z = !1, it = 0, Q = 0, nt = /* @__PURE__ */ y((u) => {
      O = !0, Z = !1, it = u.clientX - T, Q = u.clientY - g, _.classList.add("lkm-grabbing");
    }, "onDown"), Y = /* @__PURE__ */ y((u) => {
      O && (!Z && Math.hypot(u.clientX - (it + T), u.clientY - (Q + g)) > 3 && (Z = !0), T = u.clientX - it, g = u.clientY - Q, this._view = { k: F, tx: T, ty: g }, K());
    }, "onMove"), R = /* @__PURE__ */ y(() => {
      let u = O;
      O = !1, _.classList.remove("lkm-grabbing"), u && !Z && !this._batchMode && this._select(null);
    }, "onUp");
    _.addEventListener("mousedown", nt), window.addEventListener("mousemove", Y), window.addEventListener("mouseup", R), this._cleanup.push(() => {
      _.removeEventListener("mousedown", nt), window.removeEventListener("mousemove", Y), window.removeEventListener("mouseup", R);
    });
    let j = null, lt = null, pt = /* @__PURE__ */ y((u) => {
      if (!S)
        if (u.stopPropagation(), u.touches.length === 2) {
          u.preventDefault();
          let P = u.touches[0].clientX - u.touches[1].clientX, E = u.touches[0].clientY - u.touches[1].clientY;
          lt = { dist: Math.hypot(P, E), k: F }, j = null;
        } else u.touches.length === 1 && (j = { x: u.touches[0].clientX - T, y: u.touches[0].clientY - g }, lt = null, _.classList.add("lkm-grabbing"));
    }, "onTouchStart"), gt = /* @__PURE__ */ y((u) => {
      if (!S)
        if (u.stopPropagation(), u.touches.length === 2 && lt) {
          u.preventDefault();
          let P = u.touches[0].clientX - u.touches[1].clientX, E = u.touches[0].clientY - u.touches[1].clientY, W = Math.max(0.2, Math.min(3, lt.k * (Math.hypot(P, E) / lt.dist))), J = _.getBoundingClientRect(), X = (u.touches[0].clientX + u.touches[1].clientX) / 2 - J.left, ot = (u.touches[0].clientY + u.touches[1].clientY) / 2 - J.top;
          T = X - (X - T) * (W / F), g = ot - (ot - g) * (W / F), F = W, this._view = { k: F, tx: T, ty: g }, K();
        } else u.touches.length === 1 && j ? (u.preventDefault(), T = u.touches[0].clientX - j.x, g = u.touches[0].clientY - j.y, this._view = { k: F, tx: T, ty: g }, K()) : u.touches.length && u.preventDefault();
    }, "onTouchMove"), Ft = /* @__PURE__ */ y((u) => {
      S || (u.stopPropagation(), u.touches.length === 0 && (j = null, lt = null, _.classList.remove("lkm-grabbing")));
    }, "onTouchEnd");
    _.addEventListener("touchstart", pt, { passive: !1 }), _.addEventListener("touchmove", gt, { passive: !1 }), _.addEventListener("touchend", Ft), _.addEventListener("touchcancel", Ft), this._cleanup.push(() => {
      _.removeEventListener("touchstart", pt), _.removeEventListener("touchmove", gt), _.removeEventListener("touchend", Ft), _.removeEventListener("touchcancel", Ft);
    });
  }
  _templateFiles() {
    let t = this.s, s = (t.templateFolder || "").trim();
    if (!s) {
      let n = (t.templatePath || "").trim();
      if (n) {
        let a = n.lastIndexOf("/");
        s = a > 0 ? n.slice(0, a) : "";
      }
    }
    if (!s) return [];
    let i = this.app.vault.getAbstractFileByPath(et(s));
    return !i || !i.children ? [] : i.children.filter((n) => n instanceof Tt && n.extension === "md");
  }
  async _buildNewNoteBody(t, s, i, n, a) {
    let o = this.s, l = o.linkField || "children", r = o.backField || "parent", c = o.zkField || "main", h = o.statusField || "status", d = o.typeField || "type", p = o.dateField || "date", m = o.titleField || "title", k = /* @__PURE__ */ new Set([l, r, c, h, p, d, m]), _ = "", v = [];
    if (n) {
      let L = this.app.vault.getAbstractFileByPath(et(n));
      if (L instanceof Tt) {
        let N = oe(await this.app.vault.read(L));
        _ = N.body;
        let x = new Map(N.fields);
        i || (x.get(d) != null ? i = Kt(x.get(d)) : x.get("type") != null && (i = Kt(x.get("type"))));
        let A = [];
        for (let [f, D] of [["zk", c], ["status", h], ["date", p], ["type", d], ["title", m]])
          f !== D && x.has(f) && !x.has(D) && A.push(f + "\u2192" + D);
        A.length && new w(e("\u6A21\u677F\u5B57\u6BB5\u4E0E\u914D\u7F6E\u4E0D\u4E00\u81F4\uFF1A") + A.join("\uFF0C") + e("\u3002\u5DF2\u7528\u914D\u7F6E\u5B57\u6BB5\u540D\u521B\u5EFA\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6A21\u677F\u3002"), 1e4);
        for (let [f, D] of N.fields)
          k.has(f) || v.push([f, D]);
      }
    }
    let C = ["---"];
    C.push(l + ": []"), t && o.autoAddBackLink && C.push(r + ': "' + t + '"'), C.push(c + ": " + (a ? "true" : "false")), C.push(h + ": false"), C.push(p + ": " + s), i && C.push(d + ': "' + i + '"');
    for (let [L, N] of v) C.push(L + ": " + (N ?? ""));
    return C.push("---", ""), C.join(`
`) + (_ || "");
  }
  async _rebuildUntilReady(t, s, i) {
    s = s || 30, i = i !== !1;
    for (let n = 0; n < s; n++) {
      if (await this.rebuild(!0), this.notes.has(t) && (!i || this._treePaths && this._treePaths.has(t)))
        return;
      await new Promise((a) => setTimeout(a, 150));
    }
    new w(e("\u5DF2\u521B\u5EFA\uFF0C\u4F46\u89C6\u56FE\u6682\u672A\u5237\u65B0\uFF0C\u8BF7\u70B9\u5237\u65B0"));
  }
  createChild(t) {
    if (!t || !t.note.file) {
      new w(e("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6\uFF0C\u65E0\u6CD5\u65B0\u589E\u5B50\u8282\u70B9"));
      return;
    }
    let s = this.s, i = Object.keys(s.typeColors || {}), n = i.includes(s.defaultType) ? s.defaultType : "", a = [{ path: "", name: e("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let r of this._templateFiles()) a.push({ path: r.path, name: r.basename });
    let o = "", l = (s.templatePath || "").trim();
    if (l) {
      let r = a.find((c) => c.path === et(l));
      r && (o = r.path);
    }
    new ie(this.app, t.note.title, {
      types: i,
      defaultType: n,
      templates: a,
      defaultTemplate: o,
      typeTemplates: s.typeTemplates || {},
      zkField: s.zkField || "main",
      onSubmit: /* @__PURE__ */ y(async (r, c, h, d) => {
        try {
          let p = ft(r) + ".md", m = et(s.mainFolder), k = et(m + "/" + p);
          if (this.app.vault.getAbstractFileByPath(k)) {
            new w(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + p);
            return;
          }
          let _ = /* @__PURE__ */ new Date(), v = _.getFullYear() + "-" + String(_.getMonth() + 1).padStart(2, "0") + "-" + String(_.getDate()).padStart(2, "0"), C = await this._buildNewNoteBody(t.note.file.basename, v, c, h, d);
          await Rt(this.app, t.note.file, s.linkField, ft(r)), await this.app.vault.create(k, C), new w(e("\u5DF2\u521B\u5EFA\u300C") + ft(r) + e("\u300D\u5E76\u5173\u8054\u5230\u300C") + tt(t.note.title, 14) + "\u300D");
          let L = t;
          for (; L; )
            this._expandedMem.set(L.note.file ? L.note.file.path : L.key, !0), L = L.parent;
          await this._rebuildUntilReady(k);
        } catch (p) {
          new w(e("\u521B\u5EFA\u5931\u8D25\uFF1A") + (p && p.message ? p.message : p));
        }
      }, "onSubmit")
    }).open();
  }
  createStandaloneNote() {
    let t = this.s, s = Object.keys(t.typeColors || {}), i = s.includes(t.defaultType) ? t.defaultType : "", n = [{ path: "", name: e("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let l of this._templateFiles()) n.push({ path: l.path, name: l.basename });
    let a = "", o = (t.templatePath || "").trim();
    if (o) {
      let l = n.find((r) => r.path === et(o));
      l && (a = l.path);
    }
    new ie(this.app, "", {
      types: s,
      defaultType: i,
      templates: n,
      defaultTemplate: a,
      typeTemplates: t.typeTemplates || {},
      standalone: !0,
      zkField: t.zkField || "main",
      onSubmit: /* @__PURE__ */ y(async (l, r, c, h) => {
        try {
          let d = ft(l) + ".md", p = et(t.mainFolder), m = et(p + "/" + d);
          if (this.app.vault.getAbstractFileByPath(m)) {
            new w(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + d);
            return;
          }
          let k = /* @__PURE__ */ new Date(), _ = k.getFullYear() + "-" + String(k.getMonth() + 1).padStart(2, "0") + "-" + String(k.getDate()).padStart(2, "0"), v = await this._buildNewNoteBody(null, _, r, c, h);
          await this.app.vault.create(m, v), new w(e("\u5DF2\u521B\u5EFA\u300C") + ft(l) + "\u300D"), await this._rebuildUntilReady(m, 30, !1), this._focusPath(m);
        } catch (d) {
          new w(e("\u521B\u5EFA\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
        }
      }, "onSubmit")
    }).open();
  }
  _renderDash(t) {
    let s = this.s, i = t.createDiv("lkm-toolbar"), n = i.createEl("button", { cls: "lkm-btn", text: e("\u8FD4\u56DE") });
    n.title = e("\u8FD4\u56DE\u601D\u7EF4\u5BFC\u56FE"), n.onclick = () => {
      this._mode = "map", this.render();
    }, i.createSpan({ cls: "lkm-dash-title", text: e("\u5DE5\u4F5C\u53F0") });
    let a = i.createEl("button", { cls: "lkm-btn" + (this._dashTab === "timeline" ? " is-active" : ""), text: e("\u65F6\u95F4\u7EBF") });
    if (a.title = e("\u5207\u6362\u5230\u65F6\u95F4\u7EBF\u89C6\u56FE"), a.style.marginLeft = "auto", a.onclick = () => {
      this._dashTab = this._dashTab === "timeline" ? "stats" : "timeline", this.render();
    }, this._dashTab === "stats") {
      let o = this._dashStats(), l = i.createEl("button", { cls: "lkm-btn", text: e("\u590D\u5236\u7EDF\u8BA1") });
      l.title = e("\u628A\u7EDF\u8BA1\u6458\u8981\u590D\u5236\u4E3A Markdown"), l.onclick = () => {
        navigator.clipboard.writeText(this._dashSummaryMd(o)).then(
          () => new w(e("\u5DF2\u590D\u5236\u7EDF\u8BA1\u6458\u8981")),
          () => new w(e("\u590D\u5236\u5931\u8D25"))
        );
      };
      let r = t.createDiv("lkm-dash");
      if (!o.total) {
        r.createDiv("lkm-dash-h").setText("\u300C" + s.mainFolder + e("\u300D\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u7B14\u8BB0\u3002"));
        return;
      }
      let c = r.createDiv("lkm-cards"), h = [
        { num: o.total, label: e("\u7B14\u8BB0\u603B\u6570"), icon: "files", color: "#6c8cff", filter: { kind: "all" } },
        { num: o.zk, label: e("\u4E3B\u7B14\u8BB0"), icon: "star", color: "#f2a65a", filter: { kind: "zk" } },
        { num: o.kw, label: e("\u5173\u952E\u8BCD\u7D22\u5F15"), icon: "tags", color: "#b07cff", filter: { kind: "kw" } },
        { num: o.done, label: e("\u5DF2\u5B8C\u6210"), icon: "check", color: "#3fa66a", filter: { kind: "done" } },
        { num: o.orphan, label: e("\u672A\u5173\u8054"), icon: "unlink", color: "#4ba3e5", filter: { kind: "orphan" } },
        { num: o.todo, label: e("\u5F85\u529E\u672A\u5B8C\u6210"), icon: "list-checks", color: "#e5534b", filter: { kind: "todo" } },
        { num: o.linkCount, label: e("\u94FE\u63A5\u603B\u6570"), icon: "link", color: "#6c8cff" },
        { num: o.deadLinks, label: e("\u5931\u6548\u94FE\u63A5"), icon: "alert-triangle", color: "#e5534b" }
      ];
      for (let S of h) {
        let V = S.filter && this._isFilterActive(S.filter), z = c.createDiv("lkm-card-stat lkm-card-click" + (V ? " is-active" : "")), H = z.createDiv("lkm-card-ico");
        H.style.background = "color-mix(in srgb, " + S.color + " 16%, transparent)", H.style.color = S.color;
        try {
          ee(H, S.icon);
        } catch {
        }
        z.createDiv("lkm-stat-num").setText(String(S.num)), z.createDiv("lkm-stat-label").setText(S.label + (S.filter && o.total ? " \xB7 " + Math.round(S.num / o.total * 100) + "%" : "")), S.filter && (z.title = e("\u70B9\u51FB\u67E5\u770B\u300C") + S.label + e("\u300D\u5217\u8868"), z.addEventListener("click", () => this._toggleDashFilter(S.filter)));
      }
      {
        let S = r.createDiv("lkm-dash-two"), V = S.createDiv("lkm-dash-sec");
        V.createDiv("lkm-dash-h").setText(e("\u7C7B\u578B\u5206\u5E03"));
        let z = o.byTypeOrder.map((R) => ({ label: R.name, value: R.count, color: R.color, filter: { kind: "type", value: R.name } }));
        o.noType && z.push({ label: e("\u672A\u6807\u6CE8"), value: o.noType, color: "var(--text-faint)", filter: { kind: "notype" } });
        let H = V.createDiv("lkm-donut-wrap");
        this._renderDonut(H, z, o.total);
        let O = H.createDiv("lkm-legend");
        for (let R of z) {
          let j = O.createDiv("lkm-legend-row lkm-type-click" + (this._isFilterActive(R.filter) ? " is-active" : ""));
          j.createSpan({ cls: "lkm-legend-dot" }).style.background = R.color, j.createSpan({ cls: "lkm-legend-name", text: R.label }), j.createSpan({ cls: "lkm-legend-num", text: String(R.value) }), j.addEventListener("click", () => this._toggleDashFilter(R.filter));
        }
        let Z = S.createDiv("lkm-dash-sec");
        Z.createDiv("lkm-dash-h").setText(e("\u5B8C\u6210\u72B6\u6001"));
        let it = Z.createDiv("lkm-stackbar"), Q = [
          { label: e("\u5DF2\u5B8C\u6210"), value: o.done, color: "var(--lkm-done)", filter: { kind: "done" } },
          { label: e("\u672A\u5B8C\u6210"), value: o.total - o.done, color: "var(--lkm-accent)", filter: { kind: "undone" } }
        ];
        for (let R of Q) {
          if (!R.value) continue;
          let j = it.createDiv("lkm-stackbar-seg");
          j.style.width = Math.max(6, R.value / o.total * 100) + "%", j.style.background = R.color, this._isFilterActive(R.filter) && j.addClass("is-active"), j.title = R.label + "\uFF1A" + R.value + e(" \u7BC7\uFF0C\u70B9\u51FB\u7B5B\u9009"), j.addEventListener("click", () => this._toggleDashFilter(R.filter));
        }
        let nt = Z.createDiv("lkm-chips"), Y = /* @__PURE__ */ y((R, j, lt, pt) => {
          let gt = nt.createDiv("lkm-chip lkm-type-click" + (this._isFilterActive(pt) ? " is-active" : ""));
          gt.createSpan({ cls: "lkm-legend-dot" }).style.background = lt, gt.createSpan({ text: R + " " + j }), gt.addEventListener("click", () => this._toggleDashFilter(pt));
        }, "chip");
        Y(e("\u5DF2\u5B8C\u6210"), o.done, "var(--lkm-done)", { kind: "done" }), Y(e("\u672A\u5B8C\u6210"), o.total - o.done, "var(--lkm-accent)", { kind: "undone" }), Y(e("\u672A\u6807\u65E5\u671F"), o.noDate, "var(--text-faint)", { kind: "nodate" });
      }
      {
        let S = r.createDiv("lkm-dash-sec");
        S.createDiv("lkm-dash-h").setText(e("\u6708\u5EA6\u521B\u5EFA \xB7 \u8FD112\u4E2A\u6708\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u5F53\u6708\u65B0\u589E\uFF09"));
        let V = S.createDiv("lkm-chart-body");
        this._renderBarChart(
          V,
          o.monthly.map((z) => ({ label: parseInt(z.key.slice(5, 7), 10) + e("\u6708"), value: z.count, filter: { kind: "month", value: z.key } })),
          { height: window.innerWidth < 600 ? 100 : 120, thinLabels: window.innerWidth < 600 }
        );
      }
      {
        let S = r.createDiv("lkm-dash-sec");
        if (S.createDiv("lkm-dash-h").setText(e("\u6811\u6DF1\u5EA6\u5206\u5E03\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u8BE5\u5C42\u8282\u70B9\uFF09")), o.depthMax) {
          let V = S.createDiv("lkm-chart-body"), z = [];
          for (let H = 1; H <= o.depthMax; H++) z.push({ label: e("\u7B2C") + H + e("\u5C42"), value: o.depthCount.get(H) || 0, filter: { kind: "depth", value: String(H) } });
          this._renderBarChart(V, z, { height: window.innerWidth < 600 ? 100 : 120 });
        } else S.createDiv("lkm-heat-sum").setText(e("\u8FD8\u6CA1\u6709\u53EF\u7EDF\u8BA1\u7684\u5C42\u7EA7\u6570\u636E"));
      }
      let d = r.createDiv("lkm-dash-sec"), p = new Set([...o.heat.keys()].map((S) => S.slice(0, 4)));
      p.add(String((/* @__PURE__ */ new Date()).getFullYear()));
      let m = [...p].sort().reverse();
      this._dashHeatIdx = Math.min(this._dashHeatIdx || 0, m.length);
      let k = d.createDiv("lkm-heat-head");
      if (k.createDiv("lkm-dash-h").setText(e("\u521B\u5EFA\u70ED\u529B\u56FE \xB7 ") + (this._dashHeatIdx ? m[this._dashHeatIdx - 1] + e(" \u5E74") : e("\u8FD1\u4E00\u5E74")) + e("\uFF08\u6309 date \u5B57\u6BB5\uFF09")), this._dashHeatIdx || m.length > 1) {
        let S = k.createDiv("lkm-heat-nav"), V = /* @__PURE__ */ y(() => {
          let O = this.contentEl.querySelector(".lkm-dash"), Z = O ? O.scrollTop : 0;
          this.render();
          let it = this.contentEl.querySelector(".lkm-dash");
          it && (it.scrollTop = Z);
        }, "rerender"), z = S.createEl("button", { cls: "lkm-step", text: "\u2039" });
        z.disabled = this._dashHeatIdx >= m.length;
        let H = S.createEl("button", { cls: "lkm-step", text: "\u203A" });
        H.disabled = this._dashHeatIdx <= 0, z.onclick = () => {
          this._dashHeatIdx++, V();
        }, H.onclick = () => {
          this._dashHeatIdx--, V();
        };
      }
      let _ = 864e5, v = /* @__PURE__ */ new Date();
      v.setHours(0, 0, 0, 0);
      let C = (v.getDay() + 6) % 7, L = window.innerWidth < 600, N = L ? 10 : 12, x, A, f, D;
      if (this._dashHeatIdx) {
        let S = parseInt(m[this._dashHeatIdx - 1], 10), V = new Date(S, 0, 1), z = new Date(S, 11, 31);
        x = new Date(V.getTime() - (V.getDay() + 6) % 7 * _), A = V, f = z, D = Math.round((z.getTime() + (6 - (z.getDay() + 6) % 7) * _ - x.getTime()) / _ / 7);
      } else {
        let S = new Date(v.getTime() + (6 - C) * _);
        D = L ? 26 : 53, x = new Date(S.getTime() - (D * 7 - 1) * _), A = x, f = v;
      }
      if (d.createDiv("lkm-heat-sum").setText(o.heat.size ? (() => {
        let S = this._ds(A), V = this._ds(f), z = 0, H = 0, O = { date: "", count: 0 };
        for (let [Z, it] of o.heat) Z >= S && Z <= V && (z += it, H++, it > O.count && (O = { date: Z, count: it }));
        return (H ? H + e(" \u5929\u6709\u521B\u5EFA \xB7 \u5171 ") + z + e(" \u7BC7") : e("\u8BE5\u65F6\u95F4\u6BB5\u6682\u65E0\u521B\u5EFA\u8BB0\u5F55")) + (O.count ? e(" \xB7 \u6700\u591A\u4E00\u5929 ") + O.count + e(" \u7BC7\uFF08") + O.date + "\uFF09" : "");
      })() : e("\u8FD8\u6CA1\u6709\u5E26 date \u5B57\u6BB5\u7684\u7B14\u8BB0")), o.heat.size) {
        let S = d.createDiv("lkm-heat-scroll"), V = S.createDiv("lkm-heat-grid");
        V.style.gridTemplateColumns = "26px repeat(" + D + ", " + N + "px)", V.style.gridAutoRows = N + "px";
        let z = -1;
        for (let Q = 0; Q < D; Q++) {
          let nt = new Date(x.getTime() + Q * 7 * _);
          if (nt.getMonth() !== z) {
            z = nt.getMonth();
            let Y = V.createDiv("lkm-heat-mon");
            Y.style.gridColumn = String(Q + 2), Y.style.gridRow = "1", Y.setText(nt.getMonth() + 1 + e("\u6708"));
          }
        }
        [e("\u4E00"), e("\u4E09"), e("\u4E94")].forEach((Q, nt) => {
          let Y = V.createDiv("lkm-heat-wd");
          Y.style.gridColumn = "1", Y.style.gridRow = String(nt * 2 + 2), Y.setText(Q);
        });
        let H = this._ds(A), O = this._ds(f), Z = this._ds(v), it = null;
        for (let Q = 0; Q < D; Q++)
          for (let nt = 0; nt < 7; nt++) {
            let Y = new Date(x.getTime() + (Q * 7 + nt) * _), R = V.createDiv("lkm-heat-cell");
            R.style.gridColumn = String(Q + 2), R.style.gridRow = String(nt + 2);
            let j = this._ds(Y);
            if (Y > v || j < H || j > O) {
              R.addClass("lkm-heat-off");
              continue;
            }
            let lt = o.heat.get(j) || 0, pt = lt === 0 ? 0 : lt === 1 ? 1 : lt <= 2 ? 2 : lt <= 4 ? 3 : 4;
            pt && R.addClass("lkm-heat-l" + pt), this._isFilterActive({ kind: "date", value: j }) && R.addClass("is-active"), lt && R.addClass("lkm-heat-hit"), j === Z && (R.addClass("lkm-heat-today"), it = R), R.title = j + "\uFF1A" + lt + e(" \u7BC7") + (j === Z ? e("\uFF08\u4ECA\u5929\uFF09") : ""), R.addEventListener("click", () => this._toggleDashFilter({ kind: "date", value: j }));
          }
        it && !this._dashHeatIdx && requestAnimationFrame(() => {
          let Q = it.getBoundingClientRect(), nt = S.getBoundingClientRect();
          Q.right > nt.right - 20 && (S.scrollLeft += Q.right - nt.right + 30);
        });
      }
      let F = r.createDiv("lkm-dash-two"), T = F.createDiv("lkm-dash-sec"), g = this._dashFilters || [];
      if (g.length) {
        T.addClass("lkm-filter-sec");
        let S = this._sortDashItems(this._dashFilterItems(g)), V = T.createDiv("lkm-filter-head");
        V.createSpan({ cls: "lkm-dash-h lkm-filter-title", text: this._dashFilterGroupLabel(g) });
        let z = V.createSpan({ cls: "lkm-filter-count", text: "\uFF08" + S.length + "\uFF09" }), H = V.createEl("input", { cls: "lkm-filter-search", type: "text", attr: { placeholder: e("\u8FC7\u6EE4\u2026") } });
        H.value = this._dashSearch || "", H.addEventListener("focus", () => {
          if (!window.matchMedia("(hover: none)").matches) return;
          let Y = this.contentEl.querySelector(".lkm-dash"), R = this.contentEl.querySelector(".lkm-toolbar");
          if (!Y || !R) return;
          let j = Y.scrollTop, lt = Y.style.flex, pt = Y.style.height, gt = /* @__PURE__ */ y(() => {
            let Ft = R.getBoundingClientRect().bottom, u = window.visualViewport, E = (u ? u.height + u.offsetTop : window.innerHeight) - Ft;
            E > 60 && (Y.style.flex = "none", Y.style.height = E + "px"), Y.scrollTop = Math.max(0, V.offsetTop - 50);
          }, "doAdjust");
          setTimeout(gt, 300), setTimeout(gt, 500), H.addEventListener("blur", () => {
            Y.style.flex = lt, Y.style.height = pt, Y.scrollTop = j;
          }, { once: !0 });
        });
        let O = V.createEl("button", { cls: "lkm-btn", text: e("\u6392\u5E8F\uFF1A") + { date: e("\u65E5\u671F"), name: e("\u540D\u79F0") }[this._dashSort || "date"] });
        O.onclick = () => {
          this._dashSort = this._dashSort === "date" ? "name" : "date", this.render();
        };
        let Z = V.createEl("button", { cls: "lkm-btn", text: e("\u6E05\u9664") });
        Z.onclick = () => {
          this._dashFilters = [], this._dashSearch = "", this.render();
        }, S.length || T.createDiv("lkm-heat-sum").setText(e("\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7B14\u8BB0"));
        let it = T.createDiv("lkm-filter-list"), Q = [];
        for (let Y of S) {
          let R = this._dashRow(it, Y);
          Q.push({ el: R, text: (Y.title + " " + (Y.type || "")).toLowerCase() }), R.addEventListener("click", () => {
            Y.isIndex ? (this._kwFile = Y.file, this._multiRoot = !1, this._mode = "map", this.render()) : this.app.workspace.getLeaf(!0).openFile(Y.file);
          });
        }
        let nt = /* @__PURE__ */ y(() => {
          let Y = (this._dashSearch || "").trim().toLowerCase(), R = 0;
          for (let j of Q) {
            let lt = !Y || j.text.includes(Y);
            j.el.style.display = lt ? "" : "none", lt && R++;
          }
          z.setText("\uFF08" + (Y ? R + "/" : "") + S.length + "\uFF09");
        }, "applySearch");
        H.addEventListener("input", () => {
          this._dashSearch = H.value, nt();
        }), nt();
      } else {
        T.createDiv("lkm-dash-h").setText(e("\u5206\u652F\u5206\u5E03 \xB7 \u5B8C\u6210\u8FDB\u5EA6")), o.branches.length || T.createDiv("lkm-heat-sum").setText(e("\u8FD8\u6CA1\u6709 main: true \u7684\u4E3B\u7B14\u8BB0"));
        let S = this._dashBranchAll && o.branches.length > 6, V = S ? o.branches : o.branches.slice(0, 6), z = T.createDiv("lkm-filter-list lkm-branch-list"), H = o.branches[0] && o.branches[0].total || 1;
        for (let O of V) {
          let Z = z.createDiv("lkm-branch-row");
          Z.title = O.title + e("\uFF0C\u70B9\u51FB\u5728\u5BFC\u56FE\u4E2D\u6253\u5F00"), Z.createSpan({ cls: "lkm-branch-name", text: tt(O.title, 10) });
          let it = Z.createDiv("lkm-type-bar").createDiv("lkm-branch-scaler");
          it.style.width = Math.max(3, Math.round(O.total / H * 100)) + "%";
          let Q = it.createDiv("lkm-branch-done");
          Q.style.width = (O.total ? Math.round(O.done / O.total * 100) : 0) + "%", Z.createSpan({ cls: "lkm-type-num", text: O.done + "/" + O.total + " \xB7 " + Math.round(O.done / O.total * 100) + "%" }), Z.addEventListener("click", () => {
            this.rootPath = O.path, this._view = null, this._kwFile = null, this._multiRoot = !1, this._mode = "map", this._expandedMem.clear(), this.render();
          });
        }
        if (o.branches.length > 6) {
          let O = T.createEl("button", { cls: "lkm-btn", text: S ? e("\u6536\u8D77") : e("\u5C55\u5F00\u5168\u90E8 ") + o.branches.length + e(" \u4E2A\u5206\u652F") });
          O.onclick = () => {
            this._dashBranchAll = !this._dashBranchAll, this.render();
          };
        }
      }
      let K = F.createDiv("lkm-dash-sec");
      K.createDiv("lkm-dash-h").setText(e("\u6700\u8FD1\u521B\u5EFA"));
      for (let S of o.recent)
        this._dashRow(K, S).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(S.file));
      if (o.modified.length) {
        K.createDiv("lkm-dash-h lkm-sec-gap").setText(e("\u6700\u8FD1\u4FEE\u6539"));
        for (let S of o.modified)
          this._dashRow(K, S).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(S.file));
      }
    } else
      this._renderTimelineDash(t);
  }
  _renderTimelineDash(t) {
    let i = [...Ht(this.app, this.s).map.values()], n = t.createDiv({ cls: "lkm-tl-toolbar" }), a = n.createEl("input", { type: "text", cls: "lkm-tl-search", placeholder: e("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    a.value = this._tlSearch, a.addEventListener("input", () => {
      this._tlSearch = a.value.toLowerCase().trim(), this._renderTimelineBody(k, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: e("\u7C7B\u578B") });
    let o = n.createEl("select", { cls: "lkm-tl-typesel" });
    o.createEl("option", { value: "", text: e("\u5168\u90E8") });
    let l = [...new Set(i.map((_) => _.type).filter(Boolean))].sort();
    for (let _ of l)
      o.createEl("option", { value: _, text: _ });
    o.value = this._tlTypeFilter, o.addEventListener("change", () => {
      this._tlTypeFilter = o.value, this._renderTimelineBody(k, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: e("\u65F6\u95F4") });
    let r = n.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [_, v] of [["all", e("\u5168\u90E8")], ["day", e("\u4ECA\u65E5")], ["week", e("\u672C\u5468")], ["month", e("\u672C\u6708")], ["year", e("\u672C\u5E74")]])
      r.createEl("option", { value: _, text: v });
    r.value = this._tlRange, r.addEventListener("change", () => {
      this._tlRange = r.value, this._renderTimelineBody(k, i);
    });
    let c = n.createEl("input", { type: "date", cls: "lkm-tl-datesel" });
    c.value = this._tlDateFilter, c.title = e("\u6309\u6307\u5B9A\u65E5\u671F\u7B5B\u9009"), c.addEventListener("change", () => {
      this._tlDateFilter = c.value, this._renderTimelineBody(k, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: e("\u6027\u8D28") });
    let h = n.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [_, v] of [["all", e("\u5168\u90E8")], ["zk", e("\u4E3B\u7B14\u8BB0")], ["normal", e("\u666E\u901A")]])
      h.createEl("option", { value: _, text: v });
    h.value = this._tlZkFilter, h.addEventListener("change", () => {
      this._tlZkFilter = h.value, this._renderTimelineBody(k, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: e("\u72B6\u6001") });
    let d = n.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [_, v] of [["all", e("\u5168\u90E8")], ["done", e("\u5DF2\u5B8C\u6210")], ["undone", e("\u672A\u5B8C\u6210")]])
      d.createEl("option", { value: _, text: v });
    d.value = this._tlStatusFilter, d.addEventListener("change", () => {
      this._tlStatusFilter = d.value, this._renderTimelineBody(k, i);
    });
    let p = n.createEl("button", { cls: "lkm-btn lkm-tl-sortbtn", text: this._tlSort === "desc" ? e("\u65B0\u2192\u65E7") : e("\u65E7\u2192\u65B0") });
    p.addEventListener("click", () => {
      this._tlSort = this._tlSort === "desc" ? "asc" : "desc", p.textContent = this._tlSort === "desc" ? e("\u65B0\u2192\u65E7") : e("\u65E7\u2192\u65B0"), this._renderTimelineBody(k, i);
    });
    let m = n.createEl("button", { cls: "lkm-btn", text: e("\u6E05\u7A7A") });
    m.title = e("\u6E05\u7A7A\u6240\u6709\u7B5B\u9009\u6761\u4EF6"), m.addEventListener("click", () => {
      this._tlSearch = "", this._tlTypeFilter = "", this._tlRange = "all", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this.render();
    });
    let k = t.createDiv({ cls: "lkm-tl-body" });
    this._renderTimelineBody(k, i);
  }
  _renderTimelineBody(t, s) {
    t.empty();
    let i = s;
    if (this._tlTypeFilter && (i = i.filter((c) => c.type === this._tlTypeFilter)), this._tlSearch && (i = i.filter((c) => c.title.toLowerCase().includes(this._tlSearch))), this._tlZkFilter === "zk" ? i = i.filter((c) => c.zk) : this._tlZkFilter === "normal" && (i = i.filter((c) => !c.zk)), this._tlStatusFilter === "done" ? i = i.filter((c) => c.status) : this._tlStatusFilter === "undone" && (i = i.filter((c) => !c.status)), this._tlDateFilter)
      i = i.filter((c) => c.ctime && c.ctime.slice(0, 10) === this._tlDateFilter);
    else if (this._tlRange !== "all") {
      let c = /* @__PURE__ */ new Date(), h = c.getFullYear() + "-" + String(c.getMonth() + 1).padStart(2, "0") + "-" + String(c.getDate()).padStart(2, "0"), d = /* @__PURE__ */ new Date(h), p = null;
      if (this._tlRange === "day" ? p = d : this._tlRange === "week" ? p = new Date(d.getTime() - 6 * 864e5) : this._tlRange === "month" ? p = new Date(d.getTime() - 29 * 864e5) : this._tlRange === "year" && (p = new Date(d.getTime() - 364 * 864e5)), p) {
        let m = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0");
        i = i.filter((k) => {
          if (!k.ctime) return !1;
          let _ = k.ctime.slice(0, 10);
          return _ >= m && _ <= h;
        });
      }
    }
    let n = i.filter((c) => c.ctime), a = i.filter((c) => !c.ctime);
    n.sort((c, h) => this._tlSort === "desc" ? String(h.ctime).localeCompare(String(c.ctime)) : String(c.ctime).localeCompare(String(h.ctime)));
    let o = [], l = null, r = null;
    for (let c of n) {
      let h = c.ctime.slice(0, 10);
      h !== l && (l = h, r = { key: h, items: [] }, o.push(r)), r.items.push(c);
    }
    for (let c of o) {
      let h = t.createDiv({ cls: "lkm-tl-day" }), [d, p, m] = c.key.split("-"), k = new Date(parseInt(d), parseInt(p) - 1, parseInt(m)), _ = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][k.getDay()];
      h.createDiv({ cls: "lkm-tl-day-label", text: c.key + " " + e("\u5468") + _ + " (" + c.items.length + ")" });
      let v = h.createDiv({ cls: "lkm-tl-items" });
      for (let C of c.items)
        this._renderTimelineItem(v, C);
    }
    if (a.length) {
      let c = t.createDiv({ cls: "lkm-tl-day lkm-tl-nodate" });
      c.createDiv({ cls: "lkm-tl-day-label", text: e("\u65E0\u65E5\u671F") + " (" + a.length + ")" });
      let h = c.createDiv({ cls: "lkm-tl-items" });
      for (let d of a)
        this._renderTimelineItem(h, d);
    }
    i.length || t.createDiv({ cls: "lkm-tl-empty", text: e("\u6682\u65E0\u7B14\u8BB0") });
  }
  _renderTimelineItem(t, s) {
    let i = t.createDiv({ cls: "lkm-tl-item" }), n = i.createDiv({ cls: "lkm-tl-item-content" });
    if (s.type) {
      let l = this.s.typeColors && this.s.typeColors[s.type], r = n.createEl("span", { cls: "lkm-tl-badge", text: s.type });
      l && (r.style.background = l);
    }
    s.zk && n.createEl("span", { cls: "lkm-tl-main-badge", text: e("\u4E3B\u7B14\u8BB0") }), n.createEl("span", { cls: "lkm-tl-title", text: s.title }), s.status && n.createEl("span", { cls: "lkm-tl-status", text: "\u2713" }), i.addEventListener("click", (l) => {
      l.target.closest("a") || (this.app.workspace.openLinkText(s.file.basename, s.file.path, l.ctrlKey || l.metaKey), this.locateFile(s.file, !0));
    });
    let a = /* @__PURE__ */ y((l, r) => {
      let c = new Vt();
      c.addItem((h) => {
        h.setTitle(e("\u5728\u65B0\u6807\u7B7E\u6253\u5F00")).setIcon("file-plus").onClick(() => {
          this.app.workspace.openLinkText(s.file.basename, s.file.path, !0);
        });
      }), c.addItem((h) => {
        h.setTitle(e("\u5728\u5BFC\u56FE\u4E2D\u663E\u793A")).setIcon("git-fork").onClick(() => {
          this._mode = "map", this.locateFile(s.file, !0);
          let d = this._selKey ? this._nodeIndex.get(this._selKey) : null;
          if (!d || !d.note.file || d.note.file.path !== s.file.path) {
            this.rootPath = s.file.path, this._kwFile = null, this._multiRoot = !1, this._multiRootPaths = [], this.render();
            for (let p of this._nodeIndex.values())
              if (p.note.file && p.note.file.path === s.file.path && !p.isAlias) {
                this._selKey = p.key;
                break;
              }
            this.render();
          }
        });
      }), c.showAtPosition({ x: l, y: r });
    }, "showMenu");
    i.addEventListener("contextmenu", (l) => {
      l.preventDefault(), a(l.clientX, l.clientY);
    });
    let o = null;
    i.addEventListener("touchstart", (l) => {
      let r = l.touches[0];
      o = setTimeout(() => {
        o = null, a(r.clientX, r.clientY);
      }, 500);
    }, { passive: !0 }), i.addEventListener("touchmove", () => {
      o && (clearTimeout(o), o = null);
    }, { passive: !0 }), i.addEventListener("touchend", () => {
      o && (clearTimeout(o), o = null);
    }, { passive: !0 });
  }
  _dashRow(t, s) {
    let i = this.s, n = t.createDiv("lkm-recent-row");
    n.title = s.isIndex ? s.title + e("\uFF0C\u70B9\u51FB\u6253\u5F00\u5173\u952E\u8BCD\u89C6\u56FE") : s.title + e("\uFF0C\u70B9\u51FB\u6253\u5F00\u7B14\u8BB0");
    let a = (i.typeColors || {})[s.type];
    if (a && (n.createSpan({ cls: "lkm-recent-dot" }).style.background = a), n.createSpan({ cls: "lkm-recent-name", text: tt(s.title, 14) }), s.created && !s.mtime && n.createSpan({ cls: "lkm-recent-date", text: s.created }), s.mtime && n.createSpan({ cls: "lkm-recent-date", text: s.mtime }), !s.isIndex) {
      let o = n.createSpan({ cls: "lkm-row-jump", title: e("\u5728\u5BFC\u56FE\u4E2D\u5B9A\u4F4D") });
      try {
        ee(o, "crosshair");
      } catch {
      }
      o.addEventListener("click", (l) => {
        l.stopPropagation(), this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._dashFilters = [], this.locateFile(s.file);
      });
    }
    return n;
  }
  _renderDonut(t, s, i) {
    let r = 2 * Math.PI * 49, c = I("svg", { class: "lkm-donut-svg", viewBox: "0 0 116 116", width: 116, height: 116 });
    c.appendChild(I("circle", { cx: 58, cy: 58, r: 49, fill: "none", stroke: "var(--background-secondary)", "stroke-width": 13 }));
    let h = s.reduce((k, _) => k + _.value, 0), d = 0;
    for (let k of s) {
      let _ = h ? k.value / h : 0;
      if (!_) continue;
      let v = Math.max(0, _ * r - 2.5), C = I("circle", {
        cx: 58,
        cy: 58,
        r: 49,
        fill: "none",
        stroke: k.color,
        "stroke-width": 13,
        "stroke-linecap": "butt",
        "stroke-dasharray": v + " " + (r - v),
        "stroke-dashoffset": -(d * r),
        transform: "rotate(-90 58 58)",
        class: "lkm-donut-seg" + (this._isFilterActive(k.filter) ? " is-active" : "")
      });
      C.addEventListener("click", () => this._toggleDashFilter(k.filter)), c.appendChild(C), d += _;
    }
    let p = I("text", { x: 58, y: 57, class: "lkm-donut-num", "text-anchor": "middle" });
    p.textContent = String(i), c.appendChild(p);
    let m = I("text", { x: 58, y: 71, class: "lkm-donut-cap", "text-anchor": "middle" });
    m.textContent = e("\u603B\u7B14\u8BB0"), c.appendChild(m), t.appendChild(c);
  }
  _renderBarChart(t, s, i) {
    i = i || {};
    let n = i.height || 120, a = 16, o = 18, l = Math.max(t.clientWidth || 300, 120), r = Math.max(1, ...s.map((p) => p.value)), c = l / Math.max(s.length, 1), h = n - a - o, d = I("svg", { class: "lkm-bars-svg", viewBox: "0 0 " + l + " " + n, preserveAspectRatio: "none", width: "100%", height: n });
    for (let p = 1; p <= 3; p++) {
      let m = a + h * (1 - p / 3);
      d.appendChild(I("line", { x1: 0, y1: m, x2: l, y2: m, class: "lkm-bars-grid" }));
    }
    s.forEach((p, m) => {
      let k = p.value > 0 ? Math.max(3, h * p.value / r) : 0, _ = m * c + c * 0.22, v = c * 0.56, C = n - o - k, L = I("rect", { x: _, y: C, width: v, height: k, rx: Math.min(4, v / 2), class: "lkm-bar" + (this._isFilterActive(p.filter) ? " is-active" : "") });
      if (p.color && (L.style.fill = p.color), p.filter && L.addEventListener("click", () => this._toggleDashFilter(p.filter)), d.appendChild(L), p.value > 0) {
        let N = I("text", { x: _ + v / 2, y: C - 4, class: "lkm-bars-val", "text-anchor": "middle" });
        N.textContent = String(p.value), d.appendChild(N);
      }
      if (!i.thinLabels || m % 2 === 0) {
        let N = I("text", { x: _ + v / 2, y: n - 5, class: "lkm-bars-lab", "text-anchor": "middle" });
        N.textContent = p.label, d.appendChild(N);
      }
    }), t.appendChild(d);
  }
  _isFilterActive(t) {
    return (this._dashFilters || []).some((s) => s.kind === t.kind && (s.value || "") === (t.value || ""));
  }
  _toggleDashFilter(t) {
    this._dashFilters = this._dashFilters || [];
    let s = { done: "undone", undone: "done", notype: "type", type: "notype" };
    if (t.kind === "all" || t.kind === "kw")
      this._dashFilters = this._isFilterActive(t) ? [] : [Object.assign({}, t)];
    else {
      let i = this._dashFilters.findIndex((n) => n.kind === t.kind && (n.value || "") === (t.value || ""));
      if (i >= 0) this._dashFilters.splice(i, 1);
      else {
        let n = s[t.kind];
        n && this._dashFilters.some((a) => a.kind === n) && (this._dashFilters = this._dashFilters.filter((a) => a.kind !== n)), this._dashFilters = this._dashFilters.filter((a) => a.kind !== "all" && a.kind !== "kw"), this._dashFilters.push(t);
      }
    }
    this.render(), this._dashFilters.length && requestAnimationFrame(() => {
      let i = this.contentEl.querySelector(".lkm-filter-sec");
      i && i.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _dashFilterLabel(t) {
    return t.kind === "all" ? e("\u5168\u90E8\u7B14\u8BB0") : t.kind === "zk" ? e("\u4E3B\u7B14\u8BB0") : t.kind === "kw" ? e("\u5173\u952E\u8BCD\u7D22\u5F15") : t.kind === "done" ? e("\u5DF2\u5B8C\u6210") : t.kind === "undone" ? e("\u672A\u5B8C\u6210") : t.kind === "orphan" ? e("\u672A\u5173\u8054") : t.kind === "type" ? e("\u7C7B\u578B\uFF1A") + t.value : t.kind === "notype" ? e("\u672A\u6807\u6CE8\u7C7B\u578B") : t.kind === "date" || t.kind === "month" ? e("\u521B\u5EFA\u4E8E ") + t.value : t.kind === "depth" ? e("\u7B2C") + t.value + e("\u5C42") : t.kind === "nodate" ? e("\u672A\u6807\u65E5\u671F") : t.kind === "todo" ? e("\u5F85\u529E\u672A\u5B8C\u6210") : e("\u7B5B\u9009");
  }
  _dashFilterGroupLabel(t) {
    let s = /* @__PURE__ */ new Set(["date", "month", "type", "depth"]), i = /* @__PURE__ */ new Map(), n = [];
    for (let o of t)
      s.has(o.kind) ? (i.has(o.kind) || i.set(o.kind, []), i.get(o.kind).push(o)) : n.push(o);
    let a = [];
    for (let [o, l] of i) {
      if (l.length === 1) {
        a.push(this._dashFilterLabel(l[0]));
        continue;
      }
      let r = e(o === "date" || o === "month" ? "\u521B\u5EFA\u4E8E " : o === "type" ? "\u7C7B\u578B\uFF1A" : "\u7B2C"), c = o === "depth" ? e(" \u5C42") : "";
      a.push(r + l.map((h) => h.value).join("\u3001") + c);
    }
    for (let o of n) a.push(this._dashFilterLabel(o));
    return a.join(" + ");
  }
  _dashFilterItems(t) {
    let s = [...this.notes.values()], i = this._depthMap();
    if (t.find((c) => c.kind === "kw")) {
      let c = this.app.vault.getAbstractFileByPath(et(this.s.indexFolder)), h = new Set((c && c.children ? c.children : []).filter((d) => d instanceof Tt && d.extension === "md").map((d) => d.path));
      s = s.filter((d) => h.has(d.file.path));
    }
    let a = t.filter((c) => c.kind !== "kw"), o = /* @__PURE__ */ new Set(["date", "month", "type", "depth"]), l = /* @__PURE__ */ new Map(), r = [];
    for (let c of a)
      o.has(c.kind) ? (l.has(c.kind) || l.set(c.kind, []), l.get(c.kind).push(c)) : r.push(c);
    for (let [c, h] of l)
      c === "date" ? s = s.filter((d) => h.some((p) => d.date === p.value)) : c === "month" ? s = s.filter((d) => h.some((p) => (d.date || "").slice(0, 7) === p.value)) : c === "type" ? s = s.filter((d) => h.some((p) => d.type === p.value)) : c === "depth" && (s = s.filter((d) => h.some((p) => String(i.get(d.file.path) || 0) === p.value)));
    for (let c of r)
      c.kind === "zk" ? s = s.filter((h) => h.zk) : c.kind === "done" ? s = s.filter((h) => h.status) : c.kind === "undone" ? s = s.filter((h) => !h.status) : c.kind === "orphan" ? s = s.filter((h) => !this.referenced.has(h.file.path)) : c.kind === "notype" ? s = s.filter((h) => !h.type) : c.kind === "nodate" ? s = s.filter((h) => !h.date) : c.kind === "todo" && (s = s.filter((h) => h.type === e("\u5F85\u529E") && !h.status));
    return s.map((c) => ({ title: c.title, created: c.date || "", type: c.type || "", file: c.file }));
  }
  _sortDashItems(t) {
    let s = this._dashSort || "date", i = t.slice();
    return s === "name" ? i.sort((n, a) => String(n.title).localeCompare(String(a.title), "zh")) : i.sort((n, a) => String(a.created || "").localeCompare(String(n.created || ""))), i;
  }
  _ds(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  _depthMap() {
    let t = /* @__PURE__ */ new Map(), s = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!s) return t;
    let i = Dt(this.app, this.notes, s);
    return (/* @__PURE__ */ y((function n(a, o) {
      a.note.file && !t.has(a.note.file.path) && t.set(a.note.file.path, o), a.children.forEach((l) => n(l, o + 1));
    }), "walk"))(i, 1), t;
  }
  _dashSummaryMd(t) {
    let s = [];
    if (s.push(e("## \u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE\u5DE5\u4F5C\u53F0\u7EDF\u8BA1 ") + this._ds(/* @__PURE__ */ new Date())), s.push(""), s.push(e("| \u6307\u6807 | \u6570\u91CF |")), s.push("| --- | --- |"), s.push(e("| \u7B14\u8BB0\u603B\u6570 | ") + t.total + " |"), s.push(e("| \u4E3B\u7B14\u8BB0 | ") + t.zk + " |"), s.push(e("| \u5173\u952E\u8BCD\u7D22\u5F15 | ") + t.kw + " |"), s.push(e("| \u5DF2\u5B8C\u6210 | ") + t.done + " |"), s.push(e("| \u672A\u5173\u8054 | ") + t.orphan + " |"), s.push(e("| \u5F85\u529E\u672A\u5B8C\u6210 | ") + t.todo + " |"), s.push(e("| \u672A\u6807\u6CE8\u7C7B\u578B | ") + t.noType + " |"), s.push(e("| \u672A\u6807\u65E5\u671F | ") + t.noDate + " |"), s.push(""), t.byTypeOrder.length) {
      s.push(e("### \u7C7B\u578B\u5206\u5E03")), s.push(e("| \u7C7B\u578B | \u6570\u91CF | \u5360\u6BD4 |")), s.push("| --- | --- | --- |");
      for (let i of t.byTypeOrder) s.push("| " + i.name + " | " + i.count + " | " + (t.total ? Math.round(i.count / t.total * 100) : 0) + "% |");
      s.push("");
    }
    if (t.depthMax) {
      s.push(e("### \u6811\u6DF1\u5EA6\u5206\u5E03")), s.push(e("| \u5C42\u7EA7 | \u6570\u91CF |")), s.push("| --- | --- |");
      for (let i = 1; i <= t.depthMax; i++) t.depthCount.has(i) && s.push(e("| \u7B2C") + i + e("\u5C42 | ") + t.depthCount.get(i) + " |");
      s.push("");
    }
    if (t.monthly.length) {
      s.push(e("### \u8FD112\u4E2A\u6708\u521B\u5EFA")), s.push(e("| \u6708\u4EFD | \u65B0\u589E |")), s.push("| --- | --- |");
      for (let i of t.monthly) s.push("| " + i.key + " | " + i.count + " |");
      s.push("");
    }
    if (t.branches.length) {
      s.push(e("### \u5206\u652F\u5206\u5E03\uFF08\u5B8C\u6210/\u603B\u6570\uFF09"));
      for (let i of t.branches) s.push("- " + i.title + "\uFF1A" + i.done + "/" + i.total);
      s.push("");
    }
    return s.join(`
`);
  }
  _dashStats() {
    let t = [...this.notes.values()], s = t.length, i = t.filter((g) => g.zk).length, n = t.filter((g) => g.status).length, a = t.filter((g) => g.type === e("\u5F85\u529E") && !g.status).length, o = t.filter((g) => !g.date).length, l = t.filter((g) => !this.referenced.has(g.file.path)).length, r = this.s.typeColors || {}, c = /* @__PURE__ */ new Map(), h = 0;
    for (let g of t)
      g.type ? c.set(g.type, (c.get(g.type) || 0) + 1) : h++;
    let d = Object.keys(r).filter((g) => c.has(g)).map((g) => ({ name: g, color: r[g], count: c.get(g) }));
    for (let [g, K] of c) r[g] || d.push({ name: g, color: "var(--text-faint)", count: K });
    let p = this._depthMap(), m = /* @__PURE__ */ new Map();
    for (let g of p.values()) g && m.set(g, (m.get(g) || 0) + 1);
    let k = m.size ? Math.max(...m.keys()) : 0, _ = /* @__PURE__ */ new Date();
    _.setHours(0, 0, 0, 0);
    let v = [];
    for (let g = 11; g >= 0; g--) {
      let K = new Date(_.getFullYear(), _.getMonth() - g, 1);
      v.push({ key: K.getFullYear() + "-" + String(K.getMonth() + 1).padStart(2, "0"), count: 0 });
    }
    for (let g of t) {
      if (!g.date) continue;
      let K = v.find((S) => S.key === g.date.slice(0, 7));
      K && K.count++;
    }
    let C = 0, L = this.app.vault.getAbstractFileByPath(et(this.s.indexFolder));
    L && L.children && (C = L.children.filter((g) => g instanceof Tt && g.extension === "md").length);
    let N = /* @__PURE__ */ new Map();
    for (let g of t) g.date && N.set(g.date, (N.get(g.date) || 0) + 1);
    let x = t.filter((g) => g.zk).map((g) => {
      let K = Dt(this.app, this.notes, g), S = 0, V = 0, z = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ y((function H(O) {
        if (O.note.file) {
          if (z.has(O.note.file.path)) return;
          z.add(O.note.file.path);
        }
        S++, O.note.status && V++;
        for (let Z of O.children) H(Z);
      }), "walk"))(K), { path: g.file.path, title: g.title, total: S, done: V };
    }).sort((g, K) => K.total - g.total), A = /* @__PURE__ */ y((g) => ({ title: g.title, created: g.date || "", type: g.type || "", file: g.file }), "toItem"), f = t.filter((g) => g.date).sort((g, K) => String(K.date).localeCompare(String(g.date))).slice(0, 8).map(A), D = t.slice().sort((g, K) => (K.file.stat && K.file.stat.mtime || 0) - (g.file.stat && g.file.stat.mtime || 0)).slice(0, 6).map((g) => {
      let K = A(g);
      try {
        let S = new Date(g.file.stat.mtime);
        K.mtime = String(S.getFullYear()).slice(2) + "-" + String(S.getMonth() + 1).padStart(2, "0") + "-" + String(S.getDate()).padStart(2, "0") + " " + String(S.getHours()).padStart(2, "0") + ":" + String(S.getMinutes()).padStart(2, "0");
      } catch {
      }
      return K;
    }), F = 0, T = 0;
    for (let g of t)
      for (let K of g.childLinks) {
        F++;
        let S = this.app.metadataCache.getFirstLinkpathDest(K, g.file.path);
        (!S || !this.notes.has(S.path)) && T++;
      }
    return { total: s, zk: i, done: n, todo: a, noDate: o, orphan: l, noType: h, byTypeOrder: d, depthCount: m, depthMax: k, monthly: v, kw: C, heat: N, branches: x, recent: f, modified: D, linkCount: F, deadLinks: T };
  }
};
y(ke, "LinkMindmapView");
var Mt = ke, we = class extends Fe {
  constructor(t, s) {
    super(t, s), this.plugin = s;
  }
  display() {
    let { containerEl: t } = this;
    t.empty(), t.createEl("h2", { text: e("Link Mindmap \u8BBE\u7F6E") }), new M(t).setName(e("\u8BED\u8A00")).setDesc(e("\u754C\u9762\u8BED\u8A00\uFF08\u81EA\u52A8\u8DDF\u968F Obsidian \u8BBE\u7F6E\uFF09")).addDropdown((l) => {
      l.addOption("auto", e("\u81EA\u52A8") + " (Auto)"), l.addOption("zh", e("\u4E2D\u6587")), l.addOption("en", "English"), l.setValue(this.plugin.settings.language || "auto"), l.onChange(async (r) => {
        this.plugin.settings.language = r, await this.plugin.saveSettings(), this.plugin._initLang(), this.display();
      });
    }), new M(t).setName(e("\u7B14\u8BB0\u6587\u4EF6\u5939")).setDesc(e("\u5B58\u653E\u5361\u7247\u7B14\u8BB0\u7684\u76EE\u5F55")).addText((l) => l.setValue(this.plugin.settings.mainFolder).onChange(async (r) => {
      this.plugin.settings.mainFolder = r.trim(), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u5939")).setDesc(e("\u5B58\u653E\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u7684\u76EE\u5F55")).addText((l) => l.setValue(this.plugin.settings.indexFolder).onChange(async (r) => {
      this.plugin.settings.indexFolder = r.trim(), await this.plugin.saveSettings();
    })), new M(t).setName(e("\u6A21\u677F\u6587\u4EF6\u5939")).setDesc(e("\u6A21\u677F\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u65B0\u5EFA\u8282\u70B9\u65F6\u6A21\u677F\u4E0B\u62C9\u5217\u8868\u4ECE\u6B64\u6587\u4EF6\u5939\u8BFB\u53D6")).addText((l) => l.setValue(this.plugin.settings.templateFolder).onChange(async (r) => {
      this.plugin.settings.templateFolder = r.trim(), await this.plugin.saveSettings(), this.display();
    }));
    let s = (() => {
      let l = (this.plugin.settings.templateFolder || "").trim();
      if (!l) return [];
      let r = this.plugin.app.vault.getAbstractFileByPath(et(l));
      return !r || !r.children ? [] : r.children.filter((c) => c instanceof Tt && c.extension === "md");
    })();
    new M(t).setName(e("\u9ED8\u8BA4\u6A21\u677F")).setDesc(e("\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u6A21\u677F\uFF08\u53EF\u9009\uFF09")).addDropdown((l) => {
      l.addOption("", e("\u4E0D\u9009"));
      for (let r of s) l.addOption(r.path, r.basename);
      l.setValue(this.plugin.settings.templatePath || ""), l.onChange(async (r) => {
        this.plugin.settings.templatePath = r, await this.plugin.saveSettings();
      });
    }), new M(t).setName(e("\u5B50\u8282\u70B9\u94FE\u63A5\u5B57\u6BB5")).setDesc(e("\u7236\u7B14\u8BB0\u4E2D\u5B58\u653E\u5B50\u7B14\u8BB0\u94FE\u63A5\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 children\uFF09")).addText((l) => l.setValue(this.plugin.settings.linkField).onChange(async (r) => {
      this.plugin.settings.linkField = r.trim() || "children", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u7236\u8282\u70B9\u53CD\u5411\u94FE\u63A5\u5B57\u6BB5")).setDesc(e("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u5199\u5165\u5B50\u7B14\u8BB0\u7684\u7236\u94FE\u63A5\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 parent\uFF09")).addText((l) => l.setValue(this.plugin.settings.backField).onChange(async (r) => {
      this.plugin.settings.backField = r.trim() || "parent", await this.plugin.saveSettings();
    })), new M(t).setName(e("\u4E3B\u7B14\u8BB0\u6807\u8BB0\u5B57\u6BB5")).setDesc(e("\u6807\u8BB0\u5BFC\u56FE\u4E3B\u5165\u53E3\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 main\uFF09")).addText((l) => l.setValue(this.plugin.settings.zkField).onChange(async (r) => {
      this.plugin.settings.zkField = r.trim() || "main", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u5B8C\u6210\u72B6\u6001\u5B57\u6BB5")).setDesc(e("\u6807\u8BB0\u7B14\u8BB0\u662F\u5426\u5B8C\u6210\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 status\uFF09")).addText((l) => l.setValue(this.plugin.settings.statusField).onChange(async (r) => {
      this.plugin.settings.statusField = r.trim() || "status", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u7C7B\u578B\u5B57\u6BB5")).setDesc(e("\u7B14\u8BB0\u7C7B\u578B\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 type\uFF09")).addText((l) => l.setValue(this.plugin.settings.typeField).onChange(async (r) => {
      this.plugin.settings.typeField = r.trim() || "type", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u65E5\u671F\u5B57\u6BB5")).setDesc(e("\u7B14\u8BB0\u521B\u5EFA\u65E5\u671F\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 date\uFF09")).addText((l) => l.setValue(this.plugin.settings.dateField).onChange(async (r) => {
      this.plugin.settings.dateField = r.trim() || "date", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u6807\u9898\u5B57\u6BB5")).setDesc(e("\u7B14\u8BB0\u6807\u9898\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 title\uFF09\u3002frontmatter \u4E2D\u6709\u8BE5\u5B57\u6BB5\u65F6\u8282\u70B9\u663E\u793A\u5176\u503C\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u540D\uFF1B\u91CD\u547D\u540D\u65F6\u540C\u6B65\u66F4\u65B0\u8BE5\u5B57\u6BB5")).addText((l) => l.setValue(this.plugin.settings.titleField).onChange(async (r) => {
      this.plugin.settings.titleField = r.trim() || "title", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u9ED8\u8BA4\u663E\u793A\u5C42\u6570")).setDesc(e("\u6253\u5F00\u65F6\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")).addText((l) => l.setValue(String(this.plugin.settings.defaultDepth)).onChange(async (r) => {
      this.plugin.settings.defaultDepth = Math.max(1, parseInt(r, 10) || 3), await this.plugin.saveSettings();
      for (let c of this.plugin.app.workspace.getLeavesOfType(mt))
        c.view instanceof Mt && (c.view.depth = this.plugin.settings.defaultDepth, c.view._expandedMem.clear());
      this.plugin.refreshViews();
    })), new M(t).setName(e("\u540D\u79F0\u6700\u5927\u5B57\u6570")).setDesc(e("\u8282\u70B9\u6807\u9898\u6700\u591A\u663E\u793A\u7684\u5B57\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7\uFF1B0 = \u663E\u793A\u5168\u90E8\u540D\u79F0")).addText((l) => l.setValue(String(this.plugin.settings.maxTitleLen)).onChange(async (r) => {
      this.plugin.settings.maxTitleLen = Math.max(0, parseInt(r, 10) || 0), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u6C34\u5E73\u95F4\u8DDD")).setDesc(e("\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09")).addText((l) => l.setValue(String(this.plugin.settings.gapX)).onChange(async (r) => {
      this.plugin.settings.gapX = Math.max(10, parseInt(r, 10) || 60), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u5782\u76F4\u95F4\u8DDD")).setDesc(e("\u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB")).addText((l) => l.setValue(String(this.plugin.settings.gapY)).onChange(async (r) => {
      this.plugin.settings.gapY = Math.max(0, parseInt(r, 10) || 8), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u8282\u70B9\u9AD8\u5EA6")).setDesc(e("\u8282\u70B9\u5361\u7247\u9AD8\u5EA6")).addText((l) => l.setValue(String(this.plugin.settings.nodeHeight)).onChange(async (r) => {
      this.plugin.settings.nodeHeight = Math.max(30, parseInt(r, 10) || 46), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u65B0\u5EFA\u65F6\u5199\u5165\u53CD\u5411\u94FE\u63A5")).setDesc(e("\u521B\u5EFA\u5B50\u8282\u70B9\u65F6\uFF0C\u5728\u5B50\u7B14\u8BB0\u91CC\u5199\u5165\u6307\u5411\u7236\u7B14\u8BB0\u7684 parent \u5B57\u6BB5\uFF08\u7EAF\u6587\u672C\u6587\u4EF6\u540D\uFF0C\u975E wikilink\uFF0C\u5173\u7CFB\u56FE\u8C31\u4E0D\u663E\u793A\u53CC\u5411\u7BAD\u5934\uFF09")).addToggle((l) => l.setValue(this.plugin.settings.autoAddBackLink).onChange(async (r) => {
      this.plugin.settings.autoAddBackLink = r, await this.plugin.saveSettings();
    })), new M(t).setName(e("\u81EA\u52A8\u5B9A\u4F4D\u5F53\u524D\u7B14\u8BB0")).setDesc(e("\u6253\u5F00\u7B14\u8BB0\u65F6\uFF0C\u5BFC\u56FE\u81EA\u52A8\u5C55\u5F00\u5176\u6240\u5728\u5206\u652F\u3001\u9009\u4E2D\u5E76\u5C45\u4E2D\u8BE5\u8282\u70B9")).addToggle((l) => l.setValue(this.plugin.settings.autoLocate).onChange(async (r) => {
      this.plugin.settings.autoLocate = r, await this.plugin.saveSettings();
    })), new M(t).setName(e("\u663E\u793A\u521B\u5EFA\u65F6\u95F4")).setDesc(e("\u4E0E\u7C7B\u578B/\u5B50\u6570\u540C\u884C\u663E\u793A\u521B\u5EFA\u65E5\u671F\uFF08\u4F18\u5148\u53D6 frontmatter \u7684 date \u5B57\u6BB5\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF09")).addToggle((l) => l.setValue(this.plugin.settings.showCreated).onChange(async (r) => {
      this.plugin.settings.showCreated = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u663E\u793A\u7C7B\u578B")).setDesc(e("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A type \u6587\u672C")).addToggle((l) => l.setValue(this.plugin.settings.showType).onChange(async (r) => {
      this.plugin.settings.showType = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u663E\u793A\u5B50\u8282\u70B9\u6570")).setDesc(e("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A\u5B50\u8282\u70B9\u6570\u91CF")).addToggle((l) => l.setValue(this.plugin.settings.showChildCount).onChange(async (r) => {
      this.plugin.settings.showChildCount = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u663E\u793A\u6253\u5F00\u56FE\u6807")).setDesc(e("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \u270E \u6253\u5F00\u7B14\u8BB0\u6309\u94AE")).addToggle((l) => l.setValue(this.plugin.settings.showOpenIcon).onChange(async (r) => {
      this.plugin.settings.showOpenIcon = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u663E\u793A\u65B0\u589E\u56FE\u6807")).setDesc(e("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \uFF0B \u65B0\u589E\u5B50\u8282\u70B9\u6309\u94AE")).addToggle((l) => l.setValue(this.plugin.settings.showAddIcon).onChange(async (r) => {
      this.plugin.settings.showAddIcon = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u66F2\u7EBF\u8FDE\u63A5")).setDesc(e("\u8282\u70B9\u4E4B\u95F4\u7528\u66F2\u7EBF\u8FD8\u662F\u76F4\u7EBF")).addToggle((l) => l.setValue(this.plugin.settings.curve).onChange(async (r) => {
      this.plugin.settings.curve = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u5E03\u5C40\u65B9\u5411")).setDesc(e("\u6A2A\u5411\uFF1A\u4ECE\u5DE6\u5230\u53F3\u5C55\u5F00\u5B50\u8282\u70B9\uFF1B\u7EB5\u5411\uFF1A\u4ECE\u4E0A\u5230\u4E0B\u5C55\u5F00\u5B50\u8282\u70B9")).addDropdown((l) => {
      l.addOption("h", e("\u6A2A\u5411\uFF08\u5DE6\u2192\u53F3\uFF09")), l.addOption("v", e("\u7EB5\u5411\uFF08\u4E0A\u2192\u4E0B\uFF09")), l.setValue(this.plugin.settings.layoutDir || "h"), l.onChange(async (r) => {
        this.plugin.settings.layoutDir = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
      });
    }), new M(t).setName(e("\u4E3B\u8272")).setDesc(e("\u666E\u901A\u8282\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(this.plugin.settings.accent).onChange(async (r) => {
      this.plugin.settings.accent = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u4E3B\u7B14\u8BB0\u989C\u8272")).setDesc(e("main: true \u8282\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(this.plugin.settings.mainColor).onChange(async (r) => {
      this.plugin.settings.mainColor = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u91CD\u590D\u8282\u70B9\u989C\u8272")).setDesc(e("\u540C\u4E00\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\u65F6\uFF0C\u5176\u72B6\u6001\u5706\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(this.plugin.settings.multiColor).onChange(async (r) => {
      this.plugin.settings.multiColor = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new M(t).setName(e("\u9009\u4E2D\u989C\u8272")).setDesc(e("\u5355\u51FB\u9009\u4E2D\u7684\u8282\u70B9\u9AD8\u4EAE\u989C\u8272")).addColorPicker((l) => l.setValue(this.plugin.settings.selectedColor).onChange(async (r) => {
      this.plugin.settings.selectedColor = r, await this.plugin.saveSettings(), this.plugin.applyThemeVars();
    })), new M(t).setName(e("\u5B8C\u6210\u8272")).setDesc(e("status \u52FE\u9009\u540E\u8282\u70B9\u7684\u6807\u8BB0\u8272\uFF08\u9ED8\u8BA4\u7EFF\u8272\uFF09")).addColorPicker((l) => l.setValue(this.plugin.settings.doneColor).onChange(async (r) => {
      this.plugin.settings.doneColor = r, await this.plugin.saveSettings(), this.plugin.applyThemeVars();
    }));
    let i = this.plugin.settings.typeColors || (this.plugin.settings.typeColors = {});
    new M(t).setName(e("\u9ED8\u8BA4\u7C7B\u578B")).setDesc(e("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u7C7B\u578B\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((l) => {
      l.addOption("", e("\u4E0D\u9009"));
      for (let r of Object.keys(i)) l.addOption(r, r);
      l.setValue(i[this.plugin.settings.defaultType] !== void 0 ? this.plugin.settings.defaultType : ""), l.onChange(async (r) => {
        this.plugin.settings.defaultType = r, await this.plugin.saveSettings();
      });
    });
    let n = "", a = /* @__PURE__ */ y(async () => {
      let l = n.trim();
      if (!l) {
        new w(e("\u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0"));
        return;
      }
      if (i[l] !== void 0) {
        new w(e("\u7C7B\u578B\u5DF2\u5B58\u5728\uFF1A") + l);
        return;
      }
      let r = ["#4ba3e5", "#e5534b", "#3fa66a", "#e5a44b", "#b07cff", "#8a6ae5", "#d978a8", "#5aa9a2"];
      i[l] = r[Object.keys(i).length % r.length], n = "", await this.plugin.saveSettings(), this.display();
    }, "addType");
    new M(t).setName(e("\u6DFB\u52A0\u7C7B\u578B")).setDesc(e("\u8F93\u5165\u540D\u79F0\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((l) => {
      l.setPlaceholder(e("\u7C7B\u578B\u540D\u79F0\uFF0C\u5982\uFF1A\u5F85\u529E")), l.onChange((r) => n = r), l.inputEl.addEventListener("keydown", (r) => {
        r.key === "Enter" && (r.preventDefault(), a());
      });
    }).addButton((l) => l.setButtonText(e("\u6DFB\u52A0")).setCta().onClick(a));
    let o = Object.keys(i);
    for (let l = 0; l < o.length; l++) {
      let r = o[l], c = l, h = this.plugin.settings.typeTemplates || (this.plugin.settings.typeTemplates = {}), d = this.plugin.app.vault.getAbstractFileByPath(et(this.plugin.settings.templateFolder || "99-\u6A21\u677F")), p = [{ path: "", name: e("\u9ED8\u8BA4") }];
      if (d && d.children) for (let m of d.children) m instanceof Tt && m.extension === "md" && p.push({ path: m.path, name: m.basename });
      new M(t).setName(r).setDesc(e("type \u4E3A\u300C") + r + e("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((m) => {
        m.setValue(String(i[r])), m.onChange(async (k) => {
          k && k !== i[r] && (i[r] = k, await this.plugin.saveSettings(), this.plugin.refreshViews());
        });
      }).addDropdown((m) => {
        for (let k of p) m.addOption(k.path, k.name);
        m.setValue(h[r] || ""), m.onChange(async (k) => {
          k ? h[r] = k : delete h[r], await this.plugin.saveSettings();
        });
      }).addButton((m) => m.setIcon("chevron-up").setTooltip(e("\u4E0A\u79FB")).setDisabled(c === 0).onClick(async () => {
        let k = Object.entries(i);
        [k[c - 1], k[c]] = [k[c], k[c - 1]], this.plugin.settings.typeColors = Object.fromEntries(k), await this.plugin.saveSettings(), this.display();
      })).addButton((m) => m.setIcon("chevron-down").setTooltip(e("\u4E0B\u79FB")).setDisabled(c === o.length - 1).onClick(async () => {
        let k = Object.entries(i);
        [k[c + 1], k[c]] = [k[c], k[c + 1]], this.plugin.settings.typeColors = Object.fromEntries(k), await this.plugin.saveSettings(), this.display();
      })).addButton((m) => m.setIcon("trash").setTooltip(e("\u5220\u9664\u7C7B\u578B\uFF1A") + r).onClick(async () => {
        delete i[r], this.plugin.settings.defaultType === r && (this.plugin.settings.defaultType = ""), await this.plugin.saveSettings(), this.display();
      }));
    }
    t.createEl("h3", { text: e("\u914D\u7F6E\u5BFC\u5165/\u5BFC\u51FA") }), new M(t).setName(e("\u5BFC\u51FA\u914D\u7F6E")).setDesc(e("\u5C06\u5F53\u524D\u6240\u6709\u8BBE\u7F6E\u5BFC\u51FA\u4E3A JSON \u6587\u4EF6")).addButton((l) => l.setButtonText(e("\u5BFC\u51FA")).setCta().onClick(async () => {
      let r = JSON.stringify(this.plugin.settings, null, 2), h = "link-mindmap-config-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".json";
      try {
        await this.plugin.app.vault.create(h, r), new w(e("\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + h);
      } catch (d) {
        new w(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
      }
    })), new M(t).setName(e("\u5BFC\u5165\u914D\u7F6E")).setDesc(e("\u4ECE JSON \u6587\u4EF6\u5BFC\u5165\u8BBE\u7F6E\uFF08\u4F1A\u8986\u76D6\u5F53\u524D\u914D\u7F6E\uFF09")).addButton((l) => l.setButtonText(e("\u9009\u62E9\u6587\u4EF6")).onClick(() => {
      let r = document.createElement("input");
      r.type = "file", r.accept = ".json", r.onchange = async () => {
        let c = r.files[0];
        if (c)
          try {
            let h = await c.text(), d = JSON.parse(h);
            this.plugin.settings = Object.assign(this.plugin.settings, d), await this.plugin.saveSettings(), this.plugin.applyThemeVars(), this.plugin.refreshViews(), this.display(), new w(e("\u914D\u7F6E\u5DF2\u5BFC\u5165"));
          } catch (h) {
            new w(e("\u5BFC\u5165\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] import config:", h);
          }
      }, r.click();
    })), new M(t).setName(e("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E")).setDesc(e("\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\uFF08\u4E0D\u4F1A\u5220\u9664\u7B14\u8BB0\uFF09")).addButton((l) => l.setButtonText(e("\u6062\u590D\u9ED8\u8BA4")).onClick(() => {
      new qt(this.app, e("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"), e("\u786E\u5B9A\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u5417\uFF1F"), async () => {
        this.plugin.settings = JSON.parse(JSON.stringify(le)), await this.plugin.saveSettings(), this.plugin.applyThemeVars(), this.plugin.refreshViews(), this.display(), new w(e("\u5DF2\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"));
      }).open();
    }));
  }
};
y(we, "LinkMindmapSettingTab");
var Ie = we, ye = class extends Se {
  async onload() {
    await this.loadSettings(), this._initLang(), this.registerView(mt, (t) => new Mt(t, this)), this.addRibbonIcon("git-merge", e("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), () => this.activateView()), this.addCommand({ id: "open-link-mindmap", name: e("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), callback: /* @__PURE__ */ y(() => this.activateView(), "callback") }), this.addCommand({ id: "open-timeline", name: e("\u6253\u5F00\u65F6\u95F4\u7EBF"), callback: /* @__PURE__ */ y(() => this.activateTimeline(), "callback") }), this.addCommand({ id: "check-links", name: e("\u68C0\u67E5\u94FE\u63A5\uFF08\u5931\u6548/\u672A\u5173\u8054\uFF09"), callback: /* @__PURE__ */ y(() => this._checkLinks(), "callback") }), this.addCommand({ id: "fix-yaml-quotes", name: e("\u4FEE\u590D frontmatter \u5F15\u53F7\u95EE\u9898"), callback: /* @__PURE__ */ y(() => this._fixYamlQuotes(), "callback") }), this.addSettingTab(new Ie(this.app, this)), this.applyThemeVars(), this.registerEvent(this.app.vault.on("create", (t) => this._onVaultChange(t))), this.registerEvent(this.app.vault.on("modify", (t) => this._onVaultChange(t))), this.registerEvent(this.app.vault.on("delete", (t) => this._onVaultChange(t))), this.registerEvent(this.app.vault.on("rename", (t, s) => this._onVaultChange(t, s))), this.registerEvent(this.app.metadataCache.on("changed", (t) => this._onVaultChange(t))), this.registerEvent(this.app.metadataCache.on("resolved", () => this._rebuildAllViews())), this.registerEvent(this.app.workspace.on("file-open", (t) => {
      for (let s of this.app.workspace.getLeavesOfType(mt))
        s.view instanceof Mt && s.view.locateFile(t);
    }));
  }
  onunload() {
    clearTimeout(this._refreshTimer), this.app.workspace.detachLeavesOfType(mt);
  }
  _onVaultChange(t, s) {
    let i = et(this.settings.mainFolder || ""), n = /* @__PURE__ */ y((o) => !!o && (o === i || o.startsWith(i + "/")), "inFolder"), a = t && t.path;
    t && t.extension && t.extension !== "md" && !n(s) || !n(a) && !n(s) || (clearTimeout(this._refreshTimer), this._refreshTimer = setTimeout(() => this._rebuildAllViews(), 400));
  }
  _rebuildAllViews() {
    for (let t of this.app.workspace.getLeavesOfType(mt))
      t.view instanceof Mt && t.view.rebuild(!0);
  }
  _checkLinks() {
    let { map: t, referenced: s } = Ht(this.app, this.settings), i = [...t.values()], n = 0, a = [];
    for (let r of i)
      for (let c of r.childLinks) {
        let h = this.app.metadataCache.getFirstLinkpathDest(c, r.file.path);
        (!h || !t.has(h.path)) && (n++, a.length < 6 && a.push(c + "\uFF08" + r.title + "\uFF09"));
      }
    let o = i.filter((r) => !s.has(r.file.path) && !r.zk), l = e("\u5171 ") + i.length + e(" \u7BC7\u7B14\u8BB0");
    l += n ? e("\uFF0C\u5931\u6548\u94FE\u63A5 ") + n + "\uFF1A" + a.join("\uFF1B") + (n > 6 ? "\u2026" : "") : e("\uFF0C\u94FE\u63A5\u5168\u90E8\u6709\u6548 \u2713"), l += o.length ? e("\uFF1B\u672A\u5173\u8054\u7B14\u8BB0\uFF08\u65E0\u7236\u5F15\u7528\u4E14\u975E\u4E3B\u7B14\u8BB0\uFF09") + o.length + "\uFF1A" + o.slice(0, 6).map((r) => r.title).join("\u3001") + (o.length > 6 ? "\u2026" : "") : e("\uFF1B\u65E0\u672A\u5173\u8054\u7B14\u8BB0 \u2713"), new w(l, 15e3);
  }
  async _fixYamlQuotes() {
    let t = this.settings, s = t.typeField || "type", i = et(t.mainFolder || ""), n = $t(this.app, i), a = 0, o = [];
    for (let r of n) {
      let c = await this.app.vault.read(r), h = c.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
      if (!h) continue;
      let d = h[1], p = !1, m = [];
      for (let k of d.split(`
`)) {
        let _ = k.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
        if (_) {
          let v = _[1], C = _[2].trim();
          if (C.startsWith('""') && C.endsWith('""') && C.length >= 4 || C.startsWith("''") && C.endsWith("''") && C.length >= 4) {
            C = C.slice(1, -1), m.push(v + ": " + C), p = !0;
            continue;
          }
          if (v === s && (C.startsWith('"') && C.endsWith('"') && C.length >= 2 && C.slice(1, -1).includes('"') || C.startsWith("'") && C.endsWith("'") && C.length >= 2 && C.slice(1, -1).includes("'"))) {
            C = Kt(C), m.push(v + ': "' + C + '"'), p = !0;
            continue;
          }
        }
        m.push(k);
      }
      if (p) {
        let _ = `---
` + m.join(`
`) + `
---` + c.slice(h[0].length);
        await this.app.vault.modify(r, _), a++, o.length < 10 && o.push(r.basename);
      }
    }
    let l = a ? e("\u5DF2\u4FEE\u590D ") + a + e(" \u4E2A\u6587\u4EF6\u7684 frontmatter \u5F15\u53F7\u95EE\u9898") + (o.length < a ? "" : "\uFF1A" + o.join("\u3001")) : e("\u672A\u53D1\u73B0\u9700\u8981\u4FEE\u590D\u7684\u5F15\u53F7\u95EE\u9898 \u2713");
    new w(l, 15e3);
  }
  applyThemeVars() {
    let t = document.body;
    t.style.setProperty("--lkm-accent", this.settings.accent), t.style.setProperty("--lkm-main", this.settings.mainColor), t.style.setProperty("--lkm-multi", this.settings.multiColor), t.style.setProperty("--lkm-done", this.settings.doneColor), t.style.setProperty("--lkm-selected", this.settings.selectedColor);
  }
  async activateView() {
    let { workspace: t } = this.app, s = t.getLeavesOfType(mt)[0];
    s || (s = t.getLeaf(!0), await s.setViewState({ type: mt, active: !0 })), t.revealLeaf(s);
  }
  async activateTimeline() {
    await this.activateView();
    for (let t of this.app.workspace.getLeavesOfType(mt))
      t.view instanceof Mt && (t.view._mode = "dash", t.view._dashTab = "timeline", t.view.render());
  }
  refreshViews() {
    this.applyThemeVars();
    for (let t of this.app.workspace.getLeavesOfType(mt))
      t.view instanceof Mt && t.view.render();
  }
  async loadSettings() {
    this.settings = Object.assign({}, le, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  _initLang() {
    let t = this.settings.language || "auto";
    if (t === "auto") {
      let s = window.moment && window.moment.locale() || "en";
      se(s && s.startsWith("zh") ? "zh" : "en");
    } else
      se(t);
  }
};
y(ye, "LinkMindmapPlugin");
var Ne = ye;
module.exports = Ne;
