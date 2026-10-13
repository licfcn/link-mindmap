"use strict";
var ye = (w, t) => () => {
  try {
    return t || w((t = { exports: {} }).exports, t), t.exports;
  } catch (s) {
    throw t = 0, s;
  }
};

// ../i18n.js
var te = ye((Ne, Qt) => {
  "use strict";
  var Zt = {
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
      "\u3001": ", "
    }
  }, Bt = "zh";
  function ve(w) {
    Bt = w || "zh";
  }
  function _e() {
    return Bt;
  }
  function xe(w, t) {
    let s = Zt[Bt] && Zt[Bt][w] || w;
    if (t) for (let n in t) s = s.split("{" + n + "}").join(t[n]);
    return s;
  }
  Qt.exports = { t: xe, setLang: ve, getLang: _e };
});

// ../src.js
var g = (w, t) => w, be = require("obsidian"), {
  Plugin: Ce,
  ItemView: Se,
  Notice: f,
  Modal: xt,
  Setting: P,
  PluginSettingTab: Fe,
  TFile: Dt,
  TFolder: Ie,
  normalizePath: nt,
  FuzzySuggestModal: ie,
  setIcon: ee,
  Menu: Kt
} = be, { t: e, setLang: se } = te(), yt = "link-mindmap-view", De = "http://www.w3.org/2000/svg", oe = {
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
  typeColors: {
    \u5F85\u529E: "#e5534b",
    \u7075\u611F: "#e5a44b",
    \u95EA\u5FF5: "#4ba3e5",
    \u6587\u732E: "#3fa66a",
    \u6C38\u4E45: "#b07cff",
    \u8D44\u6E90: "#7f8fa6"
  }
};
function Rt(w) {
  return w == null ? [] : Array.isArray(w) ? w.slice() : [w];
}
g(Rt, "toArr");
function bt(w) {
  return String(w ?? "").replace(/^\[\[/, "").replace(/\]\]$/, "").split("|")[0].split("#")[0].split("^")[0].trim();
}
g(bt, "cleanLink");
function Wt(w) {
  let t = [], s = /* @__PURE__ */ g((n) => {
    if (n == null) return;
    let o = String(n), i = /\[\[([^\[\]]+?)\]\]/g, r, a = !1;
    for (; (r = i.exec(o)) !== null; )
      a = !0, t.push(bt(r[1]));
    if (!a) {
      let l = bt(o.replace(/^["']+/, "").replace(/["']+$/, ""));
      l && t.push(l);
    }
  }, "push");
  return Array.isArray(w) ? w.forEach(s) : s(w), t;
}
g(Wt, "extractLinks");
function Z(w, t) {
  return w = String(w ?? ""), t > 0 && w.length > t ? w.slice(0, t - 1) + "\u2026" : w;
}
g(Z, "truncate");
function ae(w, t) {
  let s = 0;
  for (let n of String(w ?? ""))
    s += /[一-鿿　-〿＀-￯]/.test(n) ? t : t * 0.55;
  return s;
}
g(ae, "estWidth");
var Vt = null, zt = /* @__PURE__ */ new Map();
function Gt(w, t, s) {
  let n = w + "|" + t + "|" + (s ? 1 : 0), o = zt.get(n);
  if (o !== void 0) return o;
  let i;
  try {
    Vt || (Vt = document.createElement("canvas").getContext("2d")), Vt.font = (s ? "600 " : "") + t + 'px Inter, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif', i = Vt.measureText(String(w ?? "")).width;
  } catch {
    i = ae(w, t);
  }
  return zt.size > 2e3 && zt.clear(), zt.set(n, i), i;
}
g(Gt, "measureTextWidth");
function ut(w) {
  return String(w).replace(/[\\/:*?"<>|#^\[\]]/g, "-").trim() || e("\u672A\u547D\u540D");
}
g(ut, "safeFileName");
function le(w) {
  let t = String(w ?? "").replace(/^﻿/, "").replace(/\r\n/g, `
`).replace(/^\n+/, ""), s = t.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!s) return { fields: [], body: t };
  let n = [];
  for (let o of s[1].split(`
`)) {
    let i = o.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    i && n.push([i[1], i[2].trim()]);
  }
  return { fields: n, body: t.slice(s[0].length) };
}
g(le, "splitFrontmatter");
function Ht(w) {
  return w = String(w ?? "").trim(), w.length >= 2 && (w.charAt(0) === '"' && w.charAt(w.length - 1) === '"' || w.charAt(0) === "'" && w.charAt(w.length - 1) === "'") ? w.slice(1, -1) : w;
}
g(Ht, "stripYamlQuotes");
function A(w, t) {
  let s = document.createElementNS(De, w);
  if (t) for (let n in t) s.setAttribute(n, t[n]);
  return s;
}
g(A, "svgEl");
function re(w, t, s) {
  let n = w && (w[s || "date"] != null ? w[s || "date"] : "");
  if (n) {
    let o = String(n).match(/(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/);
    if (o) return o[1] + "-" + String(o[2]).padStart(2, "0") + "-" + String(o[3]).padStart(2, "0");
  }
  try {
    let o = t.stat;
    if (o && o.ctime) {
      let i = new Date(o.ctime);
      return i.getFullYear() + "-" + String(i.getMonth() + 1).padStart(2, "0") + "-" + String(i.getDate()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
g(re, "createdOf");
function Yt(w, t) {
  let s = nt(t || ""), n = [];
  for (let o of w.vault.getMarkdownFiles())
    s && o.path !== s && !o.path.startsWith(s + "/") || n.push(o);
  return n;
}
g(Yt, "notesInFolder");
function ce(w, t) {
  let s = Yt(w, t.mainFolder);
  if (!s.length) return !0;
  for (let n of s)
    if ((w.metadataCache.getFileCache(n) || {}).frontmatter) return !0;
  return !1;
}
g(ce, "metadataReady");
function qt(w, t) {
  let s = t.linkField || "children", n = t.backField || "parent", o = t.zkField || "main", i = t.statusField || "status", r = t.typeField || "type", a = t.dateField || "date", l = t.titleField || "title", c = /* @__PURE__ */ new Map();
  for (let d of Yt(w, t.mainFolder)) {
    let p = (w.metadataCache.getFileCache(d) || {}).frontmatter || {};
    c.set(d.path, {
      file: d,
      title: p[l] ? String(p[l]) : d.basename,
      zk: p[o] === !0 || String(p[o]) === "true",
      status: p[i] === !0 || String(p[i]) === "true",
      type: p[r] != null ? String(p[r]).trim() : "",
      date: re(p, d, a),
      childLinks: Wt(p[s]),
      parentLinks: Wt(p[n])
    });
  }
  let h = /* @__PURE__ */ new Set();
  for (let d of c.values())
    for (let p of d.childLinks) {
      let _ = w.metadataCache.getFirstLinkpathDest(p, d.file.path);
      _ && c.has(_.path) && h.add(_.path);
    }
  return { map: c, referenced: h };
}
g(qt, "collectNotes");
function Ut(w, t, s, n) {
  let o = n === "child" ? s.childLinks : s.parentLinks, i = [];
  for (let r of o) {
    let a = w.metadataCache.getFirstLinkpathDest(r, s.file.path);
    a && t.has(a.path) && i.push(t.get(a.path));
  }
  return i;
}
g(Ut, "resolveLinks");
function Tt(w, t, s) {
  let n = /* @__PURE__ */ new Set([s.file.path]), o = /* @__PURE__ */ g((a, l) => {
    let c = {
      note: a,
      parent: l || null,
      children: [],
      expanded: !1,
      isAlias: !1,
      key: (l ? l.key + ">" : ">") + a.file.path
    };
    for (let h of a.childLinks) {
      let d = w.metadataCache.getFirstLinkpathDest(h, a.file.path);
      if (!d) continue;
      let p = t.get(d.path);
      !p || n.has(d.path) || (n.add(d.path), c.children.push(o(p, c)), n.delete(d.path));
    }
    return c;
  }, "mk"), i = o(s, null), r = /* @__PURE__ */ new Map();
  (/* @__PURE__ */ g((function a(l) {
    if (l.note.file) {
      let c = l.note.file.path;
      r.has(c) || r.set(c, []), r.get(c).push(l);
    }
    l.children.forEach(a);
  }), "collect"))(i);
  for (let [a, l] of r) {
    if (l.length < 2) continue;
    let c = t.get(a), h = new Set(c ? Ut(w, t, c, "parent").map((p) => p.file.path) : []), d = -1;
    for (let p = 0; p < l.length; p++) {
      let _ = l[p].parent && l[p].parent.note.file ? l[p].parent.note.file.path : null;
      if (_ && h.has(_)) {
        d = p;
        break;
      }
    }
    d < 0 && (d = 0), l.forEach((p, _) => {
      p.isAlias = _ !== d;
    });
  }
  return i;
}
g(Tt, "buildTree");
function Ot(w, t) {
  let s = [[w, 1]];
  for (; s.length; ) {
    let [n, o] = s.pop();
    n.expanded = o < t && n.children.length > 0;
    for (let i of n.children) s.push([i, o + 1]);
  }
}
g(Ot, "applyDepth");
function Pt(w, t) {
  let s = [], n = [], o = t.layoutDir === "v";
  return (/* @__PURE__ */ g((function i(r) {
    if (!r._w) {
      let l = (1 + (t.showOpenIcon !== !1 ? 1 : 0) + (t.showAddIcon !== !1 ? 1 : 0)) * 24 + 12, c = r.note.title, h = t.maxTitleLen > 0 ? Z(c, t.maxTitleLen) : c, d = Gt(h, 13, !0), p = !r.note.file, _ = t.showCreated && !p && r.note.date ? r.note.date : "", S = t.showType && !p && r.note.type ? r.note.type : "", x = t.showChildCount && !p && r.children.length ? e("\u5B50 ") + r.children.length : "", C = [S, x, _].filter(Boolean).join(" \xB7 "), b = Gt(C, 11, !1);
      r._w = Math.max(110, 16 + Math.max(d, b) + l), r._shown = h;
    }
    let a = r.expanded ? r.children : [];
    if (!a.length) {
      r._h = t.nodeHeight, o && (r._subW = r._w);
      return;
    }
    if (o) {
      let l = 0;
      a.forEach((c, h) => {
        i(c), l += (c._subW || c._w) + (h ? t.gapY : 0);
      }), r._h = t.nodeHeight, r._subW = Math.max(r._w, l);
    } else {
      let l = 0;
      a.forEach((c, h) => {
        i(c), l += c._h + (h ? t.gapY : 0);
      }), r._h = Math.max(t.nodeHeight, l);
    }
  }), "measure"))(w), (/* @__PURE__ */ g((function i(r, a, l) {
    r._x = a, r._y = l + r._h / 2, s.push(r);
    let c = r.expanded ? r.children : [];
    if (o) {
      let h = 0;
      c.forEach((_, S) => {
        h += (_._subW || _._w) + (S ? t.gapY : 0);
      });
      let d = a + r._w / 2 - h / 2, p = l + t.nodeHeight + t.gapX;
      for (let _ of c) {
        let S = _._subW || _._w;
        i(_, d + (S - _._w) / 2, p), n.push([r, _]), d += S + t.gapY;
      }
    } else {
      let h = l;
      for (let d of c)
        i(d, a + r._w + t.gapX, h), n.push([r, d]), h += d._h + t.gapY;
    }
  }), "place"))(w, 0, 0), { nodes: s, edges: n };
}
g(Pt, "layoutTree");
async function Nt(w, t, s, n) {
  await w.fileManager.processFrontMatter(t, (o) => {
    let i = Rt(o[s]);
    i.some((a) => bt(a) === n) || i.push("[[" + n + "]]"), o[s] = i;
  });
}
g(Nt, "addLink");
async function wt(w, t, s, n) {
  let o = !1;
  return await w.fileManager.processFrontMatter(t, (i) => {
    let r = Rt(i[s]), a = r.filter((l) => {
      let c = w.metadataCache.getFirstLinkpathDest(bt(l), t.path);
      return !(c && c.path === n);
    });
    a.length !== r.length && (o = !0), a.length ? i[s] = a : delete i[s];
  }), o;
}
g(wt, "removeLinkByPath");
var he = class extends ie {
  constructor(t, s, n, o) {
    super(t), this.items = s, this.onChoose = n, this.setPlaceholder(o || e("\u641C\u7D22\u2026"));
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
g(he, "PickModal");
var Ft = he, de = class extends xt {
  constructor(t, s, n, o, i) {
    if (super(t), this.items = s, this.onChoose = n, this.selected = /* @__PURE__ */ new Map(), this.searchVal = "", this.typeFilter = "", this.mainFilter = "", this.linkFilter = "", this.availableTypes = i || [], o && o.length) {
      let r = new Map(s.map((a) => [a.path, a.label]));
      for (let a of o)
        r.has(a) && this.selected.set(a, r.get(a));
    }
  }
  onOpen() {
    let { contentEl: t } = this;
    t.addClass("lkm-multipick");
    let s = /* @__PURE__ */ g((C) => {
      C.target.tagName === "SELECT" && C.stopPropagation();
    }, "guardSelect");
    t.addEventListener("pointerdown", s, !0), t.addEventListener("mousedown", s, !0), t.createEl("h3", { text: e("\u591A\u9009\u7B14\u8BB0\u663E\u793A\u5BFC\u56FE") }), t.createEl("p", { text: e("\u641C\u7D22\u5E76\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\uFF0C\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A\uFF08\u65E0\u9700\u5173\u8054\uFF09"), cls: "lkm-modal-sub" });
    let n = new Set(this.availableTypes);
    for (let C of this.items) C.type && n.add(C.type);
    let o = [...n], i = t.createDiv("lkm-multipick-filter"), r = i.createEl("input", { type: "text", placeholder: e("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    r.addClass("lkm-multipick-input");
    let a = /* @__PURE__ */ g((C) => {
      let b = /* @__PURE__ */ g((R) => R.stopPropagation(), "stop");
      C.addEventListener("mousedown", b), C.addEventListener("pointerdown", b), C.addEventListener("touchstart", b, { passive: !0 }), C.addEventListener("touchend", b, { passive: !0 }), C.addEventListener("click", b);
    }, "stopModalSwallow");
    if (o.length) {
      let C = i.createEl("select", { cls: "lkm-multipick-select" });
      C.createEl("option", { value: "", text: e("\u7C7B\u578B") }), C.createEl("option", { value: "__none__", text: e("\u65E0\u7C7B\u578B") });
      for (let b of o) C.createEl("option", { value: b, text: b });
      a(C), C.addEventListener("change", () => {
        this.typeFilter = C.value, S();
      });
    }
    let l = i.createEl("select", { cls: "lkm-multipick-select" });
    l.createEl("option", { value: "", text: e("\u5168\u90E8") }), l.createEl("option", { value: "1", text: e("\u4E3B\u7B14\u8BB0") }), l.createEl("option", { value: "0", text: e("\u975E\u4E3B\u7B14\u8BB0") }), a(l), l.addEventListener("change", () => {
      this.mainFilter = l.value, S();
    });
    let c = i.createEl("select", { cls: "lkm-multipick-select" });
    c.createEl("option", { value: "", text: e("\u5173\u8054") }), c.createEl("option", { value: "orphan", text: e("\u672A\u5173\u8054") }), c.createEl("option", { value: "linked", text: e("\u5DF2\u5173\u8054") }), a(c), c.addEventListener("change", () => {
      this.linkFilter = c.value, S();
    });
    let h = t.createDiv("lkm-multipick-list"), d = t.createDiv("lkm-multipick-sel"), p = null, _ = /* @__PURE__ */ g(() => {
      let C = this.searchVal.toLowerCase(), b = this.typeFilter, R = [];
      for (let k of this.items)
        C && !k.label.toLowerCase().includes(C) || b && b === "__none__" && k.type || b && b !== "__none__" && k.type !== b || this.mainFilter === "1" && !k.isMain || this.mainFilter === "0" && k.isMain || this.linkFilter === "orphan" && !k.orphan || this.linkFilter === "linked" && k.orphan || R.push(k);
      return R;
    }, "getFiltered"), S = /* @__PURE__ */ g(() => {
      h.empty();
      let C = _(), b = 0, R = 100;
      for (let k = 0; k < C.length && b < R; k++) {
        let E = C[k], v = h.createDiv("lkm-multipick-row");
        this.selected.has(E.path) && v.classList.add("is-selected"), v.createSpan({ text: E.label });
        let N = [];
        E.isMain && N.push(e("\u4E3B\u7B14\u8BB0")), E.type && N.push(E.type), N.length && v.createSpan({ text: " \xB7 " + N.join(" \xB7 "), cls: "lkm-multipick-type" }), v.addEventListener("click", () => {
          this.selected.has(E.path) ? this.selected.delete(E.path) : this.selected.set(E.path, E.label), v.classList.toggle("is-selected"), d.setText(e("\u5DF2\u9009 ") + this.selected.size + e(" \u7BC7\u7B14\u8BB0"));
        }), b++;
      }
      b === 0 ? h.createEl("p", { text: e("\u65E0\u5339\u914D\u7ED3\u679C"), cls: "lkm-modal-sub" }) : b === R && h.createEl("p", { text: e("\u4EC5\u663E\u793A\u524D ") + R + e(" \u6761\uFF0C\u8BF7\u641C\u7D22\u7F29\u5C0F\u8303\u56F4"), cls: "lkm-modal-sub" });
    }, "renderList");
    r.addEventListener("input", () => {
      this.searchVal = r.value, p && clearTimeout(p), p = setTimeout(S, 150);
    });
    let x = t.createDiv("lkm-multipick-btns");
    new P(x).addButton((C) => C.setButtonText(e("\u5168\u9009\u5F53\u524D")).onClick(() => {
      for (let b of _()) this.selected.set(b.path, b.label);
      S(), d.setText(e("\u5DF2\u9009 ") + this.selected.size + e(" \u7BC7\u7B14\u8BB0"));
    })).addButton((C) => C.setButtonText(e("\u663E\u793A\u5BFC\u56FE")).setCta().onClick(() => {
      if (!this.selected.size) {
        new f(e("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      this.close(), this.onChoose([...this.selected.keys()]);
    })).addButton((C) => C.setButtonText(e("\u6E05\u9664\u6240\u6709")).onClick(() => {
      this.selected.clear(), S(), d.setText(e("\u5DF2\u9009 0 \u7BC7\u7B14\u8BB0"));
    })).addButton((C) => C.setButtonText(e("\u53D6\u6D88")).onClick(() => this.close())), d.setText(e("\u5DF2\u9009 ") + this.selected.size + e(" \u7BC7\u7B14\u8BB0")), S(), r.focus();
  }
  onClose() {
    this.contentEl.empty();
  }
};
g(de, "MultiPickModal");
var Te = de, pe = class extends xt {
  constructor(t, s, n) {
    super(t), this.parentLabel = s, this.opts = n || {}, this.onSubmit = this.opts.onSubmit || (() => {
    });
  }
  onOpen() {
    let { contentEl: t } = this, s = this.opts;
    t.createEl("h3", { text: s.standalone ? e("\u65B0\u5EFA\u8282\u70B9") : e("\u65B0\u5EFA\u5B50\u8282\u70B9") }), s.standalone || t.createEl("p", { text: e("\u7236\u8282\u70B9\uFF1A") + this.parentLabel, cls: "lkm-modal-sub" });
    let n = "", o = s.defaultType || "", i = s.defaultTemplate || "", r = !1;
    new P(t).setName(e("\u6807\u9898")).addText((l) => {
      l.onChange((c) => n = c), l.inputEl.focus(), l.inputEl.addEventListener("keydown", (c) => {
        c.key === "Enter" && (c.preventDefault(), a());
      });
    }), new P(t).setName(e("\u7C7B\u578B")).setDesc(e("\u5199\u5165\u7B14\u8BB0\u7684 type \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((l) => {
      l.addOption("", e("\u4E0D\u9009")), (s.types || []).forEach((c) => l.addOption(c, c)), l.setValue(o), l.onChange((c) => o = c);
    }), new P(t).setName(e("\u6A21\u677F")).setDesc(e("\u4E0D\u540C\u7C7B\u578B\u53EF\u4F7F\u7528\u4E0D\u540C\u6A21\u677F")).addDropdown((l) => {
      (s.templates || []).forEach((c) => l.addOption(c.path, c.name)), l.setValue(i), l.onChange((c) => i = c);
    }), new P(t).setName(e("\u4E3B\u7B14\u8BB0")).setDesc(e("\u6807\u8BB0\u4E3A\u5BFC\u56FE\u4E3B\u5165\u53E3\uFF08") + (s.zkField || "main") + ": true\uFF09").addToggle((l) => {
      l.onChange((c) => r = c);
    });
    let a = /* @__PURE__ */ g(() => {
      let l = n.trim();
      if (!l) {
        new f(e("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(l, o, i, r);
    }, "done");
    new P(t).addButton((l) => l.setButtonText(e("\u521B\u5EFA")).setCta().onClick(a));
  }
  onClose() {
    this.contentEl.empty();
  }
};
g(pe, "NewChildModal");
var ne = pe, ue = class extends xt {
  constructor(t, s, n) {
    super(t), this.currentName = s, this.onSubmit = n;
  }
  onOpen() {
    let { contentEl: t } = this;
    t.createEl("h3", { text: e("\u91CD\u547D\u540D\u6587\u4EF6") }), t.createEl("p", { text: e("\u5F53\u524D\uFF1A") + this.currentName + ".md", cls: "lkm-modal-sub" });
    let s = this.currentName;
    new P(t).setName(e("\u65B0\u6587\u4EF6\u540D")).addText((o) => {
      o.setValue(this.currentName), o.onChange((i) => s = i), o.inputEl.focus(), o.inputEl.select(), o.inputEl.addEventListener("keydown", (i) => {
        i.key === "Enter" && (i.preventDefault(), n());
      });
    });
    let n = /* @__PURE__ */ g(() => {
      let o = s.trim();
      if (!o) {
        new f(e("\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(o);
    }, "done");
    new P(t).addButton((o) => o.setButtonText(e("\u91CD\u547D\u540D")).setCta().onClick(n));
  }
  onClose() {
    this.contentEl.empty();
  }
};
g(ue, "RenameModal");
var Ee = ue, fe = class extends xt {
  constructor(t, s, n, o, i) {
    super(t), this.titleText = s, this.message = n, this.onConfirm = o, this.danger = i !== !1;
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
g(fe, "ConfirmModal");
var Xt = fe, me = class extends ie {
  constructor(t, s, n) {
    super(t), this.items = s, this.onChoose = n, this.setPlaceholder(e("\u9009\u62E9\u65B0\u7684\u7236\u8282\u70B9\u2026"));
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
g(me, "MoveModal");
var jt = me, ge = class extends Se {
  constructor(t, s) {
    super(t), this.plugin = s, this.rootPath = null, this.depth = s.settings.defaultDepth, this.notes = /* @__PURE__ */ new Map(), this.referenced = /* @__PURE__ */ new Set(), this.currentRoot = null, this._cleanup = [], this._view = null, this._expandedMem = /* @__PURE__ */ new Map(), this._history = [], this._selected = /* @__PURE__ */ new Set(), this._batchMode = !1, this._selKey = null, this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._toolbarCollapsed = !1, this._dashFilters = [], this._dashSort = "date", this._dashSearch = "", this._dashHeatIdx = 0, this._dashBranchAll = !1, this._nodeIndex = /* @__PURE__ */ new Map();
  }
  get s() {
    return this.plugin.settings;
  }
  getViewType() {
    return yt;
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
      t.view && (this._view = t.view);
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
      view: this._view || null
    }, await this.plugin.saveSettings();
  }
  async _waitMetadataReady() {
    let t = this.app.metadataCache;
    ce(this.app, this.s) || await new Promise((s) => {
      let n = !1, o = /* @__PURE__ */ g(() => {
        if (!n) {
          n = !0;
          try {
            t.offref(i), t.offref(r);
          } catch {
          }
          clearTimeout(a), s();
        }
      }, "finish"), i = t.on("resolved", o), r = t.on("changed", o), a = setTimeout(o, 6e3);
      this._cleanup.push(o);
    });
  }
  _runCleanup() {
    for (let t of this._cleanup)
      try {
        t();
      } catch {
      }
    this._cleanup = [];
  }
  _setupMobileViewport(t) {
    if (!window.visualViewport) return;
    let s = window.visualViewport, n = null, o = /* @__PURE__ */ g(() => {
      n && clearTimeout(n), n = setTimeout(() => {
        if (n = null, !window.matchMedia("(hover: none)").matches) return;
        let l = t.querySelector(".lkm-dash");
        if (!l) return;
        let c = t.querySelector(".lkm-toolbar"), h = c ? c.getBoundingClientRect().height : 0;
        l.style.maxHeight = s.height - h + "px";
        let d = document.activeElement;
        d && d.tagName === "INPUT" && t.contains(d) && setTimeout(() => {
          let p = d.getBoundingClientRect(), _ = l.getBoundingClientRect();
          (p.top < _.top || p.bottom > _.bottom) && d.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 50);
      }, 150);
    }, "adjust"), i = /* @__PURE__ */ g(() => o(), "onResize"), r = /* @__PURE__ */ g(() => o(), "onScroll");
    s.addEventListener("resize", i), s.addEventListener("scroll", r), window.addEventListener("resize", i), this._cleanup.push(() => {
      s.removeEventListener("resize", i), s.removeEventListener("scroll", r), window.removeEventListener("resize", i);
      let a = t.querySelector(".lkm-dash");
      a && (a.style.maxHeight = "");
    }), this._adjustMobileViewport = o;
  }
  async rebuild(t) {
    let s = qt(this.app, this.s);
    if (this.notes = s.map, this.referenced = s.referenced, this._selKey && !this._nodeIndex.has(this._selKey) && (this._selKey = null), this._multiRoot && t && this._multiRootPaths && this._multiRootPaths.length) {
      let n = this._multiRootPaths.filter((o) => this.notes.has(o));
      if (n.length) {
        this._showMultiRoot(n);
        return;
      }
    }
    (!t || !this.rootPath || !this.notes.has(this.rootPath)) && (this.rootPath = this._pickDefaultRoot(), this._multiRoot = !1), this.render();
  }
  _pickDefaultRoot() {
    let t = [...this.notes.values()], s = t.filter((o) => o.zk).sort((o, i) => o.title.localeCompare(i.title, "zh"));
    if (s.length) return s[0].file.path;
    let n = t.filter((o) => !this.referenced.has(o.file.path)).sort((o, i) => o.title.localeCompare(i.title, "zh"));
    return n.length ? n[0].file.path : t.length ? t[0].file.path : null;
  }
  _indexTree(t) {
    this._nodeIndex = /* @__PURE__ */ new Map(), this._treePaths = /* @__PURE__ */ new Set();
    let s = /* @__PURE__ */ g((n) => {
      this._nodeIndex.set(n.key, n), n.note.file && this._treePaths.add(n.note.file.path), n.children.forEach(s);
    }, "walk");
    s(t);
  }
  render(t) {
    let s = this.contentEl;
    if (this._runCleanup(), s.empty(), s.addClass("lkm-view"), s.style.overflow = "hidden", this._mode === "dash") {
      this._renderDash(s);
      return;
    }
    let n = this.s;
    s.tabIndex = -1;
    let o = /* @__PURE__ */ g((k) => {
      let E = k.target.tagName;
      if (!(E === "INPUT" || E === "TEXTAREA"))
        if (k.key === "Delete" || k.key === "Backspace") {
          if (this._selKey) {
            k.preventDefault();
            let v = this._nodeIndex.get(this._selKey);
            v && this._deleteNode(v);
          }
        } else if (k.key === "Enter") {
          if (this._selKey) {
            k.preventDefault();
            let v = this._nodeIndex.get(this._selKey);
            v && v.note.file && this.app.workspace.getLeaf(!0).openFile(v.note.file);
          }
        } else if (k.key === "Escape")
          this._batchMode ? (this._batchMode = !1, this._selected.clear(), this.render()) : this._selKey && this._select(null);
        else if (k.key === "ArrowUp" || k.key === "ArrowDown" || k.key === "ArrowLeft" || k.key === "ArrowRight") {
          if (!this._selKey) return;
          let v = this._nodeIndex.get(this._selKey);
          if (!v) return;
          if (k.preventDefault(), k.key === "ArrowLeft")
            v.expanded && v.children.length ? (v.expanded = !1, this._expandedMem.set(v.key, !1), this.render()) : v.parent && this._select(v.parent.key);
          else if (k.key === "ArrowRight")
            !v.expanded && v.children.length ? (v.expanded = !0, this._expandedMem.set(v.key, !0), this.render()) : v.children.length && this._select(v.children[0].key);
          else if (k.key === "ArrowUp") {
            if (v.parent) {
              let D = v.parent.children, N = D.indexOf(v);
              N > 0 ? this._select(D[N - 1].key) : this._select(v.parent.key);
            }
          } else if (k.key === "ArrowDown") {
            if (v.expanded && v.children.length) {
              this._select(v.children[0].key);
              return;
            }
            let D = v;
            for (; D.parent; ) {
              let N = D.parent.children, F = N.indexOf(D);
              if (F < N.length - 1) {
                this._select(N[F + 1].key);
                return;
              }
              D = D.parent;
            }
          }
        } else if (k.key === " ") {
          if (this._selKey) {
            k.preventDefault();
            let v = this._nodeIndex.get(this._selKey);
            v && v.children.length && (v.expanded = !v.expanded, this._expandedMem.set(v.key, v.expanded), this.render());
          }
        } else if (k.key === "n" || k.key === "N") {
          if (this._selKey) {
            k.preventDefault();
            let v = this._nodeIndex.get(this._selKey);
            v && this._addChildDialog(v);
          }
        } else k.key === "b" || k.key === "B" ? (k.preventDefault(), this._back()) : k.key === "/" && (k.preventDefault(), this.openNoteSearch());
    }, "onKeydown");
    s.addEventListener("keydown", o), this._cleanup.push(() => s.removeEventListener("keydown", o)), this._titleLenApplied !== n.maxTitleLen && (this._titleLenApplied = n.maxTitleLen);
    let i = s.createDiv("lkm-toolbar"), r = i.createEl("button", { cls: "lkm-btn lkm-toolbar-toggle", text: "\u2630" });
    r.title = e("\u5C55\u5F00/\u6298\u53E0\u5DE5\u5177\u680F"), r.onclick = () => {
      this._toolbarCollapsed = !this._toolbarCollapsed, i.classList.toggle("lkm-collapsed", this._toolbarCollapsed);
    }, this._toolbarCollapsed && i.classList.add("lkm-collapsed");
    let a = /* @__PURE__ */ g((k, E, v, D, N, F) => {
      let T = i.createEl("button", { cls: "lkm-btn" + (D ? " " + D : "") });
      return F ? (T.createEl("span", { cls: "lkm-btn-icon", text: F }), T.createEl("span", { text: k })) : T.textContent = k, T.title = E, N && (T.disabled = !0), T.onclick = () => {
        T.disabled || v(T);
      }, T;
    }, "mkBtn"), l = this._selKey ? this._nodeIndex.get(this._selKey) : null, c = !l;
    a(e("\u5DE5\u4F5C\u53F0"), e("\u67E5\u770B\u7EDF\u8BA1\u5DE5\u4F5C\u53F0"), () => {
      this._mode = "dash", this.render();
    }, "", !1, "\u{1F4CA}"), a(e("\u4E3B\u7B14\u8BB0"), e("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u7B14\u8BB0\uFF08main: true\uFF09"), () => this.openRootPicker(), "", !1, "\u{1F4CC}"), a(e("\u5173\u952E\u8BCD"), e("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u8FC7\u6EE4"), () => this.openKeywordPicker(), "", !1, "\u{1F511}"), a(e("\u641C\u7D22"), e("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9"), () => this.openNoteSearch(), "", !1, "\u{1F50D}"), a(e("\u591A\u9009"), e("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A"), () => this.openMultiPick(), "", !1, "\u{1F4CB}"), a(e("\u65B0\u589E"), e("\u521B\u5EFA\u72EC\u7ACB\u7B14\u8BB0"), () => this.createStandaloneNote(), "", !1, "\u271A");
    let h = i.createDiv("lkm-depth");
    h.createSpan({ text: e("\u5C42") });
    let d = h.createEl("button", { cls: "lkm-step", text: "\u2212", title: e("\u51CF\u5C11\u663E\u793A\u5C42\u6570\uFF08\u5C421=\u53EA\u770B\u6839\u7B14\u8BB0\uFF09") }), p = h.createSpan({ cls: "lkm-depth-val", text: String(this.depth) }), _ = h.createEl("button", { cls: "lkm-step", text: "+", title: e("\u589E\u52A0\u663E\u793A\u5C42\u6570") });
    d.onclick = () => {
      this.depth > 1 && (this.depth--, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, _.onclick = () => {
      this.depth < 12 && (this.depth++, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, a(e("\u8FD4\u56DE"), e("\u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE\u4F4D\u7F6E"), () => this._back(), "", !1, "\u2190"), a(e("\u5237\u65B0"), e("\u91CD\u65B0\u8BFB\u53D6\u76EE\u5F55\u4E0E\u7B14\u8BB0\u6570\u636E"), () => this.rebuild(!0), "", !1, "\u21BB"), a(e("\u9002\u5E94"), e("\u7F29\u653E\u81F3\u5B8C\u6574\u663E\u793A\u6240\u6709\u8282\u70B9"), () => this._fit && this._fit(), "", !1, "\u2922"), a(e("\u5168\u5C55"), e("\u5C55\u5F00\u6240\u6709\u8282\u70B9"), () => this._expandAll(!0), "", !1, "\u2295"), a(e("\u5168\u6298"), e("\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9"), () => this._expandAll(!1), "", !1, "\u2296"), a(this.s.layoutDir === "v" ? e("\u7EB5\u5411") : e("\u6A2A\u5411"), e("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u6A2A\u5411/\u7EB5\u5411\uFF09"), (k) => {
      this.s.layoutDir = this.s.layoutDir === "v" ? "h" : "v", this.plugin.saveSettings(), this._view = null, this.render({ fit: !0 });
    }, this.s.layoutDir === "v" ? "is-active" : "", !1, "\u21C4"), a(e("\u5FEB\u6377\u952E"), e("\u67E5\u770B\u952E\u76D8\u5FEB\u6377\u952E\u8BF4\u660E"), () => this._showShortcutHelp(), "", !1, "\u2328"), a(e("\u5BFC\u51FA"), e("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2"), (k) => this._exportMenu(k), "", !1, "\u2B07");
    let S = a(e("\u663E\u793A"), e("\u5207\u6362\u663E\u793A\u9009\u9879"), () => {
      let k = new Kt();
      k.addItem((v) => v.setTitle(this.s.showCreated ? e("\u2713 \u65F6\u95F4") : e("\u65F6\u95F4")).setIcon("calendar").onClick(() => {
        this.s.showCreated = !this.s.showCreated, this.plugin.saveSettings(), this.render();
      })), k.addItem((v) => v.setTitle(this.s.showType ? e("\u2713 \u7C7B\u578B") : e("\u7C7B\u578B")).setIcon("tag").onClick(() => {
        this.s.showType = !this.s.showType, this.plugin.saveSettings(), this.render();
      })), k.addItem((v) => v.setTitle(this.s.showChildCount ? e("\u2713 \u5B50\u6570") : e("\u5B50\u6570")).setIcon("list").onClick(() => {
        this.s.showChildCount = !this.s.showChildCount, this.plugin.saveSettings(), this.render();
      })), k.addSeparator(), k.addItem((v) => v.setTitle(this.s.showOpenIcon !== !1 ? e("\u2713 \u6253\u5F00\u56FE\u6807") : e("\u6253\u5F00\u56FE\u6807")).setIcon("edit").onClick(() => {
        this.s.showOpenIcon = this.s.showOpenIcon === !1, this.plugin.saveSettings(), this.render();
      })), k.addItem((v) => v.setTitle(this.s.showAddIcon !== !1 ? e("\u2713 \u65B0\u589E\u56FE\u6807") : e("\u65B0\u589E\u56FE\u6807")).setIcon("plus-circle").onClick(() => {
        this.s.showAddIcon = this.s.showAddIcon === !1, this.plugin.saveSettings(), this.render();
      }));
      let E = S.getBoundingClientRect();
      k.showAtPosition({ x: E.left, y: E.bottom });
    });
    if (a(e("\u6279\u91CF"), e("\u8FDB\u5165\u6279\u91CF\u6A21\u5F0F\uFF1A\u5355\u51FB\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u540E\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664"), () => this._toggleBatch(), this._batchMode ? "is-active" : ""), this._batchMode && (i.createDiv("lkm-sel-count").setText(e("\u5DF2\u9009 ") + this._selected.size), a(e("\u5168\u9009"), e("\u9009\u4E2D\u5BFC\u56FE\u4E2D\u6240\u6709\u8282\u70B9"), () => {
      this._selected = new Set(this._nodeIndex.keys()), this.render();
    }, "lkm-btn-action"), a(e("\u53CD\u9009"), e("\u53CD\u9009\u5F53\u524D\u9009\u4E2D\u72B6\u6001"), () => {
      let E = new Set(this._nodeIndex.keys());
      for (let v of this._selected) E.delete(v);
      this._selected = E, this.render();
    }, "lkm-btn-action"), a(e("\u79FB\u52A8\u5230\u2026"), e("\u628A\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u6307\u5B9A\u7236\u7B14\u8BB0\u4E0B"), () => this._batchMoveDialog(), "lkm-btn-action"), a(e("\u5220\u9664\u9009\u4E2D"), e("\u5220\u9664\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u53CA\u5176\u7B14\u8BB0\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF09"), () => this._batchDelete(), "lkm-btn-action"), a(e("\u6539\u7C7B\u578B"), e("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u7C7B\u578B"), () => this._batchSetType(), "lkm-btn-action"), a(e("\u6807\u8BB0\u5B8C\u6210"), e("\u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u5DF2\u5B8C\u6210"), () => this._batchSetStatus(!0), "lkm-btn-action"), a(e("\u53D6\u6D88\u5B8C\u6210"), e("\u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u5B8C\u6210\u6807\u8BB0"), () => this._batchSetStatus(!1), "lkm-btn-action")), l) {
      i.createDiv("lkm-toolbar-sep");
      let k = i.createEl("button", { cls: "lkm-btn lkm-node-btn", text: e("\u83DC\u5355") });
      k.title = e("\u663E\u793A\u8282\u70B9\u64CD\u4F5C\u83DC\u5355\uFF08\u7B49\u540C\u53F3\u952E/\u957F\u6309\uFF09\uFF1A\u6253\u5F00/\u65B0\u589E/\u805A\u7126/\u4E0A\u7EA7/\u5B8C\u6210/\u4E3B\u7B14\u8BB0/\u91CD\u547D\u540D/\u590D\u5236/\u79FB\u52A8/\u6392\u5E8F/\u5220\u9664"), k.onclick = (E) => {
        let v = this._nodeIndex.get(this._selKey);
        v && this._showNodeMenu(v, { clientX: E.clientX, clientY: E.clientY });
      };
    }
    let x = i.createDiv("lkm-info");
    l && x.createSpan({ text: e("\u5DF2\u9009\uFF1A") + Z(l.note.title, 12) + " \uFF5C " });
    let C = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (this._kwFile)
      x.createSpan({ text: e("\u5173\u952E\u8BCD\uFF1A") + this._kwFile.basename });
    else if (this._multiRoot)
      x.createSpan({ text: e("\u591A\u9009\u5BFC\u56FE\uFF08") + (this.currentRoot ? this.currentRoot.children.length : 0) + e(" \u7BC7\uFF09") });
    else if (C) {
      x.createSpan({ text: e("\u8DEF\u5F84\uFF1A") });
      let k = this._buildCrumbChain();
      k.forEach((E, v) => {
        if (k.length > 8 && v === 1) {
          x.createEl("span", { cls: "lkm-crumb-sep", text: "\u2026>" });
          return;
        }
        if (k.length > 8 && v > 1 && v < k.length - 1) return;
        v && x.createSpan({ cls: "lkm-crumb-sep", text: ">" });
        let D = v === k.length - 1, N = Z(E.note.title, 10), F = x.createEl(D ? "span" : "a", { cls: "lkm-crumb-item" + (D ? " lkm-crumb-cur" : ""), text: N });
        F.title = E.note.title, !D && E.note.file && F.addEventListener("click", () => this._focusPath(E.note.file.path));
      });
    } else
      x.createSpan({ text: e("\u672A\u627E\u5230\u7B14\u8BB0") });
    let b = s.createDiv("lkm-canvas");
    if (this._kwFile && !this.app.vault.getAbstractFileByPath(this._kwFile.path) && (this._kwFile = null), this._kwFile) {
      this.showKeyword(this._kwFile, t);
      return;
    }
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length) {
      this._indexTree(this.currentRoot), Ot(this.currentRoot, this.depth), this._restoreExpanded(), this._draw(b, Pt(this.currentRoot, this.s), t);
      return;
    }
    if (!this.rootPath || !C) {
      if (this.notes.size === 0) {
        this._renderEmptyGuide(b);
        return;
      }
      b.createDiv("lkm-empty").setText(e("\u6CA1\u6709\u627E\u5230\u4E3B\u7B14\u8BB0\uFF08") + (this.s.zkField || "main") + e(": true\uFF09\u3002\u53EF\u5728\u5BFC\u56FE\u4E2D\u53F3\u952E/\u957F\u6309\u4EFB\u610F\u8282\u70B9\u6807\u8BB0\u4E3A\u4E3B\u7B14\u8BB0\u3002"));
      return;
    }
    let R = Tt(this.app, this.notes, C);
    this.currentRoot = R, this._indexTree(R), Ot(R, this.depth), this._restoreExpanded(), this._draw(b, Pt(R, this.s), t);
  }
  _restoreExpanded() {
    for (let [t, s] of this._expandedMem) {
      let n = this._nodeIndex.get(t);
      n && (n.expanded = s);
    }
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
    } else new f(e("\u6CA1\u6709\u53EF\u8FD4\u56DE\u7684\u8282\u70B9"));
  }
  _expandAll(t) {
    for (let s of this._nodeIndex.values())
      s.children.length && (s.expanded = t, this._expandedMem.set(s.key, t));
    this.render();
  }
  _showShortcutHelp() {
    let t = new xt(this.app);
    t.onOpen = () => {
      let { contentEl: s } = t;
      s.addClass("lkm-multipick"), s.createEl("h3", { text: e("\u952E\u76D8\u5FEB\u6377\u952E") });
      let n = [
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
      for (let [i, r] of n) {
        let a = s.createDiv("lkm-shortcut-row");
        a.createEl("span", { cls: "lkm-shortcut-key", text: i }), a.createEl("span", { cls: "lkm-shortcut-desc", text: r });
      }
      let o = s.createDiv("lkm-multipick-btns");
      new P(o).addButton((i) => i.setButtonText(e("\u5173\u95ED")).onClick(() => t.close()));
    }, t.open();
  }
  _exportMenu(t) {
    let s = new Kt();
    s.addItem((o) => o.setTitle(e("\u5BFC\u51FA SVG")).setIcon("download").onClick(() => this._exportSVG())), s.addItem((o) => o.setTitle(e("\u5BFC\u51FA PNG")).setIcon("image").onClick(() => this._exportPNG())), s.addItem((o) => o.setTitle(e("\u5BFC\u51FA Markdown \u5927\u7EB2")).setIcon("document").onClick(() => this._exportMarkdown()));
    let n = t.getBoundingClientRect();
    s.showAtPosition({ x: n.left, y: n.bottom + 4 });
  }
  _getSVGString() {
    let t = this.contentEl.querySelector(".lkm-svg");
    if (!t)
      return new f(e("\u672A\u627E\u5230\u5BFC\u56FE\u5185\u5BB9")), null;
    let s = t.cloneNode(!0), n = t.getBBox(), o = 30, i = n.width + o * 2, r = n.height + o * 2;
    s.setAttribute("xmlns", "http://www.w3.org/2000/svg"), s.setAttribute("width", i), s.setAttribute("height", r), s.setAttribute("viewBox", n.x - o + " " + (n.y - o) + " " + i + " " + r);
    let a = this.contentEl.querySelector(".lkm-view") || this.contentEl, l = getComputedStyle(a), c = [
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
    for (let D of c) {
      let N = l.getPropertyValue(D).trim();
      N && (h[D] = N);
    }
    h["--lkm-accent"] || (h["--lkm-accent"] = "#6c8cff"), h["--lkm-main"] || (h["--lkm-main"] = "#f2a65a"), h["--lkm-done"] || (h["--lkm-done"] = "#3fa66a");
    let d = "";
    try {
      for (let D of document.styleSheets) {
        let N;
        try {
          N = D.cssRules;
        } catch {
          continue;
        }
        if (N)
          for (let F of N) {
            let T = F.selectorText || "";
            T.includes("lkm-") && !T.includes("lkm-toolbar") && !T.includes("lkm-btn") && !T.includes("lkm-dash") && !T.includes("lkm-cards") && !T.includes("lkm-modal") && !T.includes("lkm-multipick") && !T.includes("lkm-empty") && !T.includes("lkm-guide") && !T.includes("lkm-heat") && !T.includes("lkm-branch") && !T.includes("lkm-legend") && !T.includes("lkm-donut") && !T.includes("lkm-bars") && !T.includes("lkm-stackbar") && !T.includes("lkm-chips") && !T.includes("lkm-shortcut") && !T.includes("lkm-step") && !T.includes("lkm-depth") && !T.includes("lkm-info") && !T.includes("lkm-crumb") && !T.includes("lkm-sel-count") && (d += F.cssText + `
`);
          }
      }
    } catch (D) {
      console.error("[link-mindmap] collect CSS:", D);
    }
    let p = d;
    for (let [D, N] of Object.entries(h))
      p = p.replace(new RegExp("var\\(" + D.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\)", "g"), N), p = p.replace(new RegExp("var\\(" + D.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ",\\s*[^)]+\\)", "g"), N);
    p = p.replace(/var\(--[^)]+\)/g, "#888");
    let _ = document.createElement("style");
    _.textContent = p, s.insertBefore(_, s.firstChild);
    let S = t.querySelectorAll(".lkm-card"), x = s.querySelectorAll(".lkm-card");
    for (let D = 0; D < S.length && D < x.length; D++) {
      let N = S[D], F = x[D], T = getComputedStyle(N), m = T.stroke, y = T.fill, L = T.strokeWidth;
      m && m !== "none" && F.setAttribute("stroke", m), y && y !== "none" && F.setAttribute("fill", y), L && F.setAttribute("stroke-width", L);
    }
    let C = t.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign"), b = s.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign");
    for (let D = 0; D < C.length && D < b.length; D++) {
      let N = getComputedStyle(C[D]), F = N.fill, T = N.fontSize;
      F && F !== "none" && b[D].setAttribute("fill", F), T && b[D].setAttribute("font-size", T);
    }
    let R = t.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill"), k = s.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill");
    for (let D = 0; D < R.length && D < k.length; D++) {
      let F = getComputedStyle(R[D]).fill;
      F && F !== "none" && k[D].setAttribute("fill", F);
    }
    let E = t.querySelectorAll(".lkm-edge"), v = s.querySelectorAll(".lkm-edge");
    for (let D = 0; D < E.length && D < v.length; D++) {
      let F = getComputedStyle(E[D]).stroke;
      F && F !== "none" && v[D].setAttribute("stroke", F);
    }
    return new XMLSerializer().serializeToString(s);
  }
  _exportSVG() {
    let t = this._getSVGString();
    if (!t) return;
    let n = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".svg";
    this.app.vault.create(n, t).then(
      () => new f(e("SVG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + n),
      (o) => new f(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (o && o.message ? o.message : o))
    );
  }
  _exportPNG() {
    let t = this._getSVGString();
    if (!t) return;
    let n = this.contentEl.querySelector(".lkm-svg").getBBox(), o = 30, i = n.width + o * 2, r = n.height + o * 2, a = new Image(), l = btoa(unescape(encodeURIComponent(t)));
    a.onload = () => {
      let c = document.createElement("canvas");
      c.width = i * 2, c.height = r * 2;
      let h = c.getContext("2d"), d = getComputedStyle(this.contentEl).getPropertyValue("--background-primary").trim() || "#ffffff";
      h.fillStyle = d, h.fillRect(0, 0, c.width, c.height), h.drawImage(a, 0, 0, c.width, c.height), c.toBlob((p) => {
        let S = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".png";
        p.arrayBuffer().then((x) => this.app.vault.createBinary(S, x).then(
          () => new f(e("PNG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + S),
          (C) => new f(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (C && C.message ? C.message : C))
        ));
      });
    }, a.onerror = () => new f(e("PNG \u5BFC\u51FA\u5931\u8D25")), a.src = "data:image/svg+xml;base64," + l;
  }
  _exportMarkdown() {
    let t = this.currentRoot;
    if (!t) {
      new f(e("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let s = [], n = /* @__PURE__ */ g((a, l) => {
      let c = l === 0 ? "# " : "  ".repeat(l) + "- ", h = a.note.status ? " [x]" : "", d = a.note.type ? " `" + a.note.type + "`" : "";
      s.push(c + (a.note.title || a.note.file?.name || "?") + d + h);
      for (let p of a.children || []) n(p, l + 1);
    }, "walk");
    n(t, 0);
    let o = s.join(`
`), r = "link-mindmap-outline-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".md";
    this.app.vault.create(r, o).then(
      () => new f(e("Markdown \u5927\u7EB2\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + r),
      (a) => new f(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a))
    );
  }
  _parentPathsOf(t) {
    let s = [];
    for (let n of this.notes.values())
      if (n.file.path !== t)
        for (let o of n.childLinks) {
          let i = this.app.metadataCache.getFirstLinkpathDest(o, n.file.path);
          if (i && i.path === t) {
            s.push(n.file.path);
            break;
          }
        }
    return s;
  }
  _buildCrumbChain() {
    if (!this.rootPath) return [];
    let t = [], s = /* @__PURE__ */ new Set(), n = this.rootPath;
    for (; n && !s.has(n); ) {
      s.add(n);
      let o = this.notes.get(n);
      if (!o) break;
      t.unshift({ note: o });
      let i = this._parentPathsOf(n);
      n = i.length ? i[0] : null;
    }
    return t;
  }
  _up() {
    let t = this._selKey ? this._nodeIndex.get(this._selKey) : null, s = t && t.note.file ? t.note : this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!s || !s.file) {
      new f(e("\u6CA1\u6709\u53EF\u8DF3\u8F6C\u7684\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let n = this._parentPathsOf(s.file.path);
    if (!n.length) {
      new f("\u300C" + Z(s.title, 12) + e("\u300D\u6CA1\u6709\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let o = s.file.path, i = /* @__PURE__ */ g((a) => {
      this._focusPath(a);
      let l = [...this._nodeIndex.values()].find((c) => c.note.file && c.note.file.path === o);
      l && (this._selKey = l.key, this.render());
    }, "go");
    if (n.length === 1) {
      i(n[0]);
      return;
    }
    let r = n.map((a) => ({ label: (this.notes.get(a) || {}).title || a, path: a }));
    new Ft(this.app, r, (a) => i(a.path), e("\u8BE5\u8282\u70B9\u6709\u591A\u4E2A\u4E0A\u7EA7\uFF0C\u9009\u62E9\u8981\u524D\u5F80\u7684\u4E0A\u7EA7\u2026")).open();
  }
  locateFile(t) {
    if (!this.s.autoLocate || !t || t.extension !== "md" || this._batchMode || this._mode === "dash") return;
    try {
      if (typeof this.containerEl.isShown == "function" && !this.containerEl.isShown()) return;
    } catch {
    }
    let s = null;
    for (let r of this._nodeIndex.values())
      r.note.file && r.note.file.path === t.path && (!s || !r.isAlias) && (s = r);
    if (!s) return;
    if (this._kwFile && this.currentRoot) {
      let r = this._findClone(this.currentRoot, t.path);
      if (r && this._cloneShown(r)) {
        this._selKey = r.key, this.render();
        return;
      }
    }
    this._kwFile = null, this._multiRoot = !1;
    let n = [];
    for (let r = s; r; r = r.parent) n.unshift(r);
    let o = n[0], i = !1;
    this.rootPath !== o.note.file.path && (this._history.push({ rootPath: this.rootPath, kwFile: this._kwFile, multiRoot: this._multiRoot, currentRoot: this._multiRoot ? this.currentRoot : null }), this.rootPath = o.note.file.path, i = !0);
    for (let r = 0; r < n.length; r++)
      r < n.length - 1 && !n[r].expanded && (i = !0), n[r].expanded = !0, this._expandedMem.set(n[r].key, !0);
    !i && this._selKey === s.key || (this._selKey = s.key, this.render({ centerPath: t.path }));
  }
  _findClone(t, s) {
    if (!t) return null;
    if (t.note.file && t.note.file.path === s) return t;
    for (let n of t.children || []) {
      let o = this._findClone(n, s);
      if (o) return o;
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
      () => new f(e("\u5DF2\u590D\u5236\uFF1A") + s),
      () => new f(e("\u590D\u5236\u5931\u8D25"))
    );
  }
  _copySubtree(t) {
    if (!t) return;
    let s = [], n = /* @__PURE__ */ g((o, i) => {
      let r = i === 0 ? "" : "  ".repeat(i) + "- ";
      s.push(r + "[[" + (o.note.file ? o.note.file.basename : o.note.title) + "]]");
      for (let a of o.children || []) n(a, i + 1);
    }, "walk");
    n(t, 0), navigator.clipboard.writeText(s.join(`
`)).then(
      () => new f(e("\u5DF2\u590D\u5236\u5B50\u6811\uFF08") + s.length + e(" \u4E2A\u8282\u70B9\uFF09")),
      () => new f(e("\u590D\u5236\u5931\u8D25"))
    );
  }
  _renameNode(t) {
    if (!t || !t.note.file) {
      new f(e("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    new Ee(this.app, t.note.file.basename, async (s) => {
      try {
        let n = t.note.file.basename, o = t.note.file.parent ? t.note.file.parent.path : "", i = nt((o ? o + "/" : "") + ut(s) + ".md");
        if (i === t.note.file.path) return;
        if (this.app.vault.getAbstractFileByPath(i)) {
          new f(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + ut(s));
          return;
        }
        await this.app.vault.rename(t.note.file, i);
        let r = ut(s), a = this.s.linkField || "children", l = this.s.backField || "parent";
        for (let h of this.notes.values())
          h.file.path !== i && await this.app.fileManager.processFrontMatter(h.file, (d) => {
            let p = Rt(d[a]), _ = !1, S = p.map((x) => bt(x) === n ? (_ = !0, "[[" + r + "]]") : x);
            _ && (d[a] = S), d[l] != null && bt(d[l]) === n && (d[l] = r);
          });
        let c = this.s.titleField || "title";
        await this.app.fileManager.processFrontMatter(t.note.file, (h) => {
          h[c] != null && (h[c] = r);
        }), new f(e("\u5DF2\u91CD\u547D\u540D\u4E3A ") + r), await this.rebuild(!0);
      } catch (n) {
        new f(e("\u91CD\u547D\u540D\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n)), console.error("[link-mindmap] _renameNode:", n);
      }
    }).open();
  }
  _subtreePaths(t) {
    let s = /* @__PURE__ */ new Set();
    return (/* @__PURE__ */ g((function n(o) {
      o.note.file && s.add(o.note.file.path), o.children.forEach(n);
    }), "walk"))(t), s;
  }
  _deleteNode(t) {
    if (!t || !t.note.file) {
      new f(e("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (t.isAlias) {
      if (!t.parent || !t.parent.note.file) {
        new f(e("\u65E0\u6CD5\u786E\u5B9A\u8BE5\u6302\u70B9\u7684\u7236\u8282\u70B9"));
        return;
      }
      new Xt(
        this.app,
        e("\u79FB\u9664\u5173\u8054"),
        "\u300C" + Z(t.note.title, 16) + e(`\u300D\u662F\u91CD\u590D\u8282\u70B9\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\uFF09\u3002
\u672C\u6B21\u53EA\u79FB\u9664\u4ECE\u300C`) + Z(t.parent.note.title, 16) + e("\u300D\u5230\u5B83\u7684\u5173\u8054\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\u3002"),
        async () => {
          try {
            await wt(this.app, t.parent.note.file, this.s.linkField, t.note.file.path), this._selKey = null, new f(e("\u5DF2\u79FB\u9664\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (o) {
            new f(e("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (o && o.message ? o.message : o)), console.error("[link-mindmap] removeLink:", o);
          }
        }
      ).open();
      return;
    }
    let s = t.children.length, n = new xt(this.app);
    n.onOpen = () => {
      let { contentEl: o } = n;
      o.createEl("h3", { text: e("\u5220\u9664\u8282\u70B9") }), o.createEl("p", { text: "\u300C" + Z(t.note.title, 20) + "\u300D" + (s ? e("\uFF08\u542B ") + s + e(" \u4E2A\u5B50\u8282\u70B9\uFF09") : ""), cls: "lkm-modal-sub" });
      let i = o.createDiv("lkm-confirm-row");
      i.createEl("button", { cls: "lkm2-btn-ghost", text: e("\u53D6\u6D88") }).addEventListener("click", () => n.close());
      let a = i.createEl("button", { cls: "lkm-btn", text: e("\u79FB\u9664\u5F53\u524D\u5173\u8054") });
      a.title = t.parent && t.parent.note.file ? e("\u53EA\u79FB\u9664\u5F53\u524D\u7236\u8282\u70B9\u5230\u5B83\u7684\u94FE\u63A5\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559") : e("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"), (!t.parent || !t.parent.note.file) && (a.disabled = !0), a.addEventListener("click", () => {
        if (!t.parent || !t.parent.note.file) {
          new f(e("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"));
          return;
        }
        n.close(), (async () => {
          try {
            await wt(this.app, t.parent.note.file, this.s.linkField, t.note.file.path), this._selKey = null, new f(e("\u5DF2\u79FB\u9664\u4ECE\u300C") + Z(t.parent.note.title, 14) + e("\u300D\u5230\u300C") + Z(t.note.title, 14) + e("\u300D\u7684\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (h) {
            new f(e("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] removeLink:", h);
          }
        })();
      });
      let l = i.createEl("button", { cls: "lkm-btn", text: e("\u79FB\u9664\u6240\u6709\u5173\u8054") });
      l.title = e("\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559"), l.addEventListener("click", () => {
        n.close(), (async () => {
          try {
            let h = t.note.file.path;
            for (let d of this.notes.values())
              d.file.path !== h && d.childLinks.length && await wt(this.app, d.file, this.s.linkField, h);
            this._selKey = null, new f(e("\u5DF2\u79FB\u9664\u6240\u6709\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (h) {
            new f(e("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] removeLink:", h);
          }
        })();
      });
      let c = i.createEl("button", { cls: "lkm2-btn-danger", text: e("\u5220\u9664\u6587\u4EF6") });
      c.title = e("\u79FB\u5165\u56DE\u6536\u7AD9\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664"), c.addEventListener("click", () => {
        if (!s) {
          n.close(), this._doDelete(t);
          return;
        }
        let h = new xt(this.app);
        h.onOpen = () => {
          let { contentEl: d } = h;
          d.createEl("h3", { text: e("\u5220\u9664\u5B50\u8282\u70B9") }), d.createEl("p", { text: "\u300C" + Z(t.note.title, 20) + e("\u300D\u542B ") + s + e(" \u4E2A\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u4E00\u5E76\u5220\u9664\uFF1F"), cls: "lkm-modal-sub" });
          let p = d.createDiv("lkm-confirm-row");
          p.createEl("button", { cls: "lkm2-btn-ghost", text: e("\u53D6\u6D88") }).addEventListener("click", () => h.close()), p.createEl("button", { cls: "lkm-btn", text: e("\u4EC5\u5220\u6B64\u8282\u70B9") }).addEventListener("click", () => {
            h.close(), n.close(), this._doDelete(t);
          }), p.createEl("button", { cls: "lkm2-btn-danger", text: e("\u5168\u90E8\u5220\u9664") }).addEventListener("click", () => {
            h.close(), n.close(), this._doDelete(t, !0);
          });
        }, h.onClose = () => h.contentEl.empty(), h.open();
      });
    }, n.onClose = () => n.contentEl.empty(), n.open();
  }
  async _doDelete(t, s) {
    try {
      let n = s ? this._subtreePaths(t) : /* @__PURE__ */ new Set([t.note.file.path]);
      for (let i of this.notes.values())
        if (!n.has(i.file.path))
          for (let r of n)
            i.childLinks.length && await wt(this.app, i.file, this.s.linkField, r);
      for (let i of n) {
        let r = this.app.vault.getAbstractFileByPath(i);
        r && r.path && await this.app.vault.trash(r, !0);
      }
      this._selKey = null;
      let o = n.size;
      new f(e("\u5DF2\u5220\u9664\u300C") + Z(t.note.title, 16) + "\u300D" + (o > 1 ? e("\uFF08\u542B\u5B50\u8282\u70B9\u5171 ") + o + e(" \u4E2A\u6587\u4EF6\uFF09") : "") + e("\uFF08\u53EF\u5728\u56DE\u6536\u7AD9\u6062\u590D\uFF09")), await this.rebuild(!0);
    } catch (n) {
      new f(e("\u5220\u9664\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n)), console.error("[link-mindmap] _deleteNode:", n);
    }
  }
  _showNodeMenu(t, s) {
    if (!t || !t.note.file) return;
    let n = new Kt();
    n.addItem((i) => i.setTitle(e("\u6253\u5F00\u7B14\u8BB0")).setIcon("file-text").onClick(() => {
      this.app.workspace.getLeaf(!0).openFile(t.note.file);
    })), n.addItem((i) => i.setTitle(e("\u65B0\u589E\u5B50\u8282\u70B9")).setIcon("plus").onClick(() => this.createChild(t))), n.addItem((i) => i.setTitle(e("\u805A\u7126\u5230\u6B64\u8282\u70B9")).setIcon("focus").onClick(() => this._focus(t.key)));
    let o = this._parentPathsOf(t.note.file.path);
    if (n.addItem((i) => i.setTitle(e("\u8DF3\u5230\u4E0A\u7EA7")).setIcon("arrow-up").onClick(() => this._up())), o.length > 1)
      for (let i of o) {
        let r = this.notes.get(i);
        n.addItem((a) => a.setTitle("  \u21B3 " + Z(r ? r.title : i, 20)).setIcon("arrow-up").onClick(() => {
          this._focusPath(i);
          let l = [...this._nodeIndex.values()].find((c) => c.note.file && c.note.file.path === t.note.file.path);
          l && (this._selKey = l.key, this.render());
        }));
      }
    n.addSeparator(), n.addItem((i) => i.setTitle(t.note.status ? e("\u53D6\u6D88\u5B8C\u6210") : e("\u6807\u8BB0\u5B8C\u6210")).setIcon(t.note.status ? "circle" : "check-circle").onClick(() => this._setStatus(t, !t.note.status))), n.addItem((i) => i.setTitle(t.note.zk ? e("\u53D6\u6D88\u4E3B\u7B14\u8BB0") : e("\u6807\u8BB0\u4E3B\u7B14\u8BB0")).setIcon("star").onClick(() => this._toggleZk(t))), n.addItem((i) => i.setTitle(e("\u4FEE\u6539\u7C7B\u578B")).setIcon("tag").onClick(() => this._setTypeDialog(t))), n.addItem((i) => i.setTitle(e("\u4FEE\u6539\u65E5\u671F")).setIcon("calendar").onClick(() => this._setDateDialog(t))), t.children.length && n.addItem((i) => i.setTitle(t.expanded ? e("\u6298\u53E0\u5B50\u8282\u70B9") : e("\u5C55\u5F00\u5B50\u8282\u70B9")).setIcon(t.expanded ? "chevron-down" : "chevron-right").onClick(() => {
      t.expanded = !t.expanded, this._expandedMem.set(t.key, t.expanded), this.render();
    })), n.addSeparator(), n.addItem((i) => i.setTitle(e("\u91CD\u547D\u540D")).setIcon("pencil").onClick(() => this._renameNode(t))), n.addItem((i) => i.setTitle(e("\u590D\u5236\u94FE\u63A5")).setIcon("copy").onClick(() => this._copyLink(t))), n.addItem((i) => i.setTitle(e("\u590D\u5236\u5B50\u6811\u5927\u7EB2")).setIcon("list").onClick(() => this._copySubtree(t))), n.addItem((i) => i.setTitle(e("\u79FB\u52A8\u5230\u7236\u5361")).setIcon("corner-up-right").onClick(() => this._moveNodeDialog(t))), n.addItem((i) => i.setTitle(e("\u540C\u7EA7\u4E4B\u524D")).setIcon("arrow-up").onClick(() => this._moveSiblingDialog(t, !1))), n.addItem((i) => i.setTitle(e("\u540C\u7EA7\u4E4B\u540E")).setIcon("arrow-down").onClick(() => this._moveSiblingDialog(t, !0))), n.addSeparator(), n.addItem((i) => i.setTitle(t.isAlias ? e("\u79FB\u9664\u5173\u8054\uFF08\u4FDD\u7559\u6587\u4EF6\uFF09") : e("\u5220\u9664\u8282\u70B9")).setIcon("trash").onClick(() => this._deleteNode(t))), s && typeof s.preventDefault == "function" ? n.showAtMouseEvent(s) : s && s.clientX !== void 0 && n.showAtPosition({ x: s.clientX, y: s.clientY });
  }
  _isDescendant(t, s) {
    return this._subtreePaths(t).has(s);
  }
  _moveNodeDialog(t) {
    if (!t || !t.note.file) return;
    let s = this._subtreePaths(t), n = [...this.notes.values()].filter((o) => o.file.path !== t.note.file.path && !s.has(o.file.path)).sort((o, i) => o.title.localeCompare(i.title, "zh")).map((o) => ({ label: o.title, path: o.file.path }));
    if (!n.length) {
      new f(e("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new jt(this.app, n, (o) => this._moveNode(t, o.path)).open();
  }
  async _moveNode(t, s) {
    let n = t.note;
    if (!n.file) return;
    if (this._subtreePaths(t).has(s)) {
      new f(e("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let o = this.notes.get(s);
    if (!o) {
      new f(e("\u76EE\u6807\u7236\u7B14\u8BB0\u4E0D\u5B58\u5728"));
      return;
    }
    try {
      t.parent && t.parent.note.file && await wt(this.app, t.parent.note.file, this.s.linkField, n.file.path), await Nt(this.app, o.file, this.s.linkField, n.file.basename), new f(e("\u5DF2\u79FB\u52A8\u300C") + Z(n.title, 14) + e("\u300D\u5230\u300C") + Z(o.title, 14) + "\u300D"), await this.rebuild(!0);
    } catch (i) {
      new f(e("\u79FB\u52A8\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
    }
  }
  _moveSiblingDialog(t, s) {
    if (!t || !t.parent || !t.parent.note.file) {
      new f(e("\u6839\u8282\u70B9\u6CA1\u6709\u540C\u7EA7\u8282\u70B9"));
      return;
    }
    let n = t.parent.children.filter((i) => i !== t);
    if (!n.length) {
      new f(e("\u6CA1\u6709\u540C\u7EA7\u8282\u70B9\u53EF\u63D2\u5165"));
      return;
    }
    let o = n.map((i) => ({ label: i.note.title, path: i.note.file.path }));
    new jt(this.app, o, (i) => this._reorderSiblings(t, i.path, s)).open();
  }
  async _reorderSiblings(t, s, n) {
    let o = t.parent.note.file;
    try {
      await this.app.fileManager.processFrontMatter(o, (i) => {
        let r = this.s.linkField, a = Rt(i[r]), l = /* @__PURE__ */ g((p) => a.findIndex((_) => {
          let S = this.app.metadataCache.getFirstLinkpathDest(bt(_), o.path);
          return S && S.path === p;
        }), "idxOf"), c = l(t.note.file.path);
        if (c < 0) return;
        let h = a.splice(c, 1)[0], d = l(s);
        if (d < 0) {
          a.splice(c, 0, h);
          return;
        }
        a.splice(n ? d + 1 : d, 0, h), i[r] = a;
      }), await this.rebuild(!0);
    } catch (i) {
      new f(e("\u540C\u7EA7\u79FB\u52A8\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
    }
  }
  _wouldCycle(t, s) {
    if (t === s) return !0;
    let n = [s], o = /* @__PURE__ */ new Set(), i = 0;
    for (; n.length && i++ < 5e3; ) {
      let r = n.pop();
      if (r === t) return !0;
      if (o.has(r)) continue;
      o.add(r);
      let a = this.notes.get(r);
      if (a)
        for (let l of a.childLinks) {
          let c = this.app.metadataCache.getFirstLinkpathDest(l, a.file.path);
          c && this.notes.has(c.path) && n.push(c.path);
        }
    }
    return !1;
  }
  async _addRelation(t, s) {
    let n = t && t.note;
    if (!n || !n.file) {
      new f(e("\u6E90\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (!s || !s.file) {
      new f(e("\u76EE\u6807\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (n.file.path === s.file.path) {
      new f(e("\u4E0D\u80FD\u5173\u8054\u5230\u81EA\u5DF1"));
      return;
    }
    if (Ut(this.app, this.notes, n, "child").some((o) => o.file.path === s.file.path)) {
      new f("\u300C" + Z(n.title, 12) + e("\u300D\u5DF2\u5173\u8054\u5230\u300C") + Z(s.title, 12) + e("\u300D\uFF0C\u65E0\u9700\u91CD\u590D"));
      return;
    }
    if (this._wouldCycle(n.file.path, s.file.path)) {
      new f(e("\u4E0D\u80FD\u5EFA\u7ACB\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF\uFF08\u76EE\u6807\u5DF2\u662F\u300C") + Z(n.title, 12) + e("\u300D\u7684\u4E0A\u7EA7\uFF09"));
      return;
    }
    try {
      if (await Nt(this.app, n.file, this.s.linkField, s.file.basename), this.s.autoAddBackLink) {
        let o = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(s.file, (i) => {
          i[o] = n.file.basename;
        });
      }
      new f(e("\u5DF2\u5EFA\u7ACB\u5173\u8054\uFF1A") + Z(n.title, 12) + " \u2192 " + Z(s.title, 12)), await this.rebuild(!0);
    } catch (o) {
      new f(e("\u5EFA\u7ACB\u5173\u8054\u5931\u8D25\uFF1A") + (o && o.message ? o.message : o));
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
      new f(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = t.map((i) => this._nodeIndex.get(i)).filter(Boolean), n = /* @__PURE__ */ new Set();
    s.forEach((i) => this._subtreePaths(i).forEach((r) => n.add(r)));
    let o = [...this.notes.values()].filter((i) => !n.has(i.file.path)).sort((i, r) => i.title.localeCompare(r.title, "zh")).map((i) => ({ label: i.title, path: i.file.path }));
    if (!o.length) {
      new f(e("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new jt(this.app, o, async (i) => {
      let r = this.notes.get(i.path), a = 0;
      for (let l of s)
        if (l.note.file)
          try {
            l.parent && l.parent.note.file && await wt(this.app, l.parent.note.file, this.s.linkField, l.note.file.path), await Nt(this.app, r.file, this.s.linkField, l.note.file.basename), a++;
          } catch {
          }
      new f(e("\u6279\u91CF\u79FB\u52A8\u5B8C\u6210\uFF1A") + a + e(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchDelete() {
    let t = [...this._selected];
    if (!t.length) {
      new f(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = t.map((a) => this._nodeIndex.get(a)).filter((a) => a && a.note.file), n = s.filter((a) => !a.isAlias), o = new Set(n.map((a) => a.note.file.path)), i = s.filter((a) => a.isAlias && !o.has(a.note.file.path)), r = "";
    if (n.length && (r += e("\u5C06\u628A ") + n.length + e(" \u7BC7\u7B14\u8BB0\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u7684\u94FE\u63A5\u91CC\u79FB\u9664\u3002")), i.length && (r += (r ? " " : "") + e("\u53E6\u5C06\u79FB\u9664 ") + i.length + e(" \u4E2A\u989D\u5916\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09\u3002")), !r) {
      new f(e("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    new Xt(this.app, e("\u6279\u91CF\u5220\u9664"), r, async () => {
      let a = 0;
      for (let l of i)
        try {
          l.parent && l.parent.note.file && (await wt(this.app, l.parent.note.file, this.s.linkField, l.note.file.path), a++);
        } catch {
        }
      for (let l of n)
        try {
          let c = l.note.file;
          for (let h of this.notes.values())
            h.file.path !== c.path && h.childLinks.length && await wt(this.app, h.file, this.s.linkField, c.path);
          await this.app.vault.trash(c, !0), a++;
        } catch {
        }
      new f(e("\u5DF2\u5904\u7406 ") + a + e(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchSetType() {
    if (![...this._selected].length) {
      new f(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = this.s.typeColors || {}, n = Object.keys(s), o = [{ label: e("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let i of n) o.push({ label: i, path: i });
    new Ft(this.app, o, (i) => this._batchSetTypeDo(i.path), e("\u6279\u91CF\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _batchSetTypeDo(t) {
    let n = [...this._selected].map((r) => this._nodeIndex.get(r)).filter((r) => r && r.note.file && !r.isAlias);
    if (!n.length) {
      new f(e("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let o = this.s.typeField || "type", i = 0;
    for (let r of n)
      try {
        await this.app.fileManager.processFrontMatter(r.note.file, (a) => {
          t ? a[o] = t : delete a[o];
        }), i++;
      } catch (a) {
        console.error("[link-mindmap] _batchSetTypeDo:", a);
      }
    new f(e("\u5DF2\u4FEE\u6539 ") + i + e(" \u4E2A\u8282\u70B9\u7C7B\u578B\u4E3A\u300C") + (t || e("\u65E0\u7C7B\u578B")) + "\u300D"), await this.rebuild(!0);
  }
  async _batchSetStatus(t) {
    let s = [...this._selected];
    if (!s.length) {
      new f(e("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = s.map((r) => this._nodeIndex.get(r)).filter((r) => r && r.note.file && !r.isAlias);
    if (!n.length) {
      new f(e("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let o = this.s.statusField || "status", i = 0;
    for (let r of n)
      try {
        await this.app.fileManager.processFrontMatter(r.note.file, (a) => {
          a[o] = t;
        }), i++;
      } catch (a) {
        console.error("[link-mindmap] _batchSetStatus:", a);
      }
    new f(e("\u5DF2") + e(t ? "\u6807\u8BB0\u5B8C\u6210" : "\u53D6\u6D88\u5B8C\u6210") + " " + i + e(" \u4E2A\u8282\u70B9")), await this.rebuild(!0);
  }
  async _setStatus(t, s) {
    if (t.note.file)
      try {
        await this.app.fileManager.processFrontMatter(t.note.file, (n) => {
          n[this.s.statusField || "status"] = s;
        }), new f(e(s ? "\u5DF2\u6807\u8BB0\u5B8C\u6210\uFF1A" : "\u5DF2\u53D6\u6D88\u6807\u8BB0\uFF1A") + t.note.title), await this.rebuild(!0);
      } catch (n) {
        new f(e("\u6807\u8BB0\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
      }
  }
  async _toggleZk(t) {
    if (t.note.file)
      try {
        let s = !1;
        await this.app.fileManager.processFrontMatter(t.note.file, (n) => {
          let o = this.s.zkField || "main";
          s = !(n[o] === !0 || String(n[o]) === "true"), n[o] = s;
        }), new f(e(s ? "\u5DF2\u6807\u8BB0\u4E3B\u7B14\u8BB0\uFF1A" : "\u5DF2\u53D6\u6D88\u4E3B\u7B14\u8BB0\uFF1A") + t.note.title), await this.rebuild(!0);
      } catch (s) {
        new f(e("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
      }
  }
  _setTypeDialog(t) {
    if (!t || !t.note.file) return;
    let s = this.s.typeColors || {}, n = Object.keys(s), o = [{ label: e("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let i of n) o.push({ label: i + (t.note.type === i ? " \u2713" : ""), path: i });
    new Ft(this.app, o, (i) => this._setType(t, i.path), e("\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _setType(t, s) {
    if (t.note.file)
      try {
        let n = this.s.typeField || "type";
        await this.app.fileManager.processFrontMatter(t.note.file, (o) => {
          s ? o[n] = s : delete o[n];
        }), new f(e("\u5DF2\u4FEE\u6539\u7C7B\u578B\uFF1A") + (s || e("\u65E0\u7C7B\u578B")) + " \xB7 " + t.note.title), await this.rebuild(!0);
      } catch (n) {
        new f(e("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n)), console.error("[link-mindmap] _setType:", n);
      }
  }
  _setDateDialog(t) {
    if (!t || !t.note.file) return;
    let s = new xt(this.app);
    s.onOpen = () => {
      let { contentEl: n } = s;
      n.addClass("lkm-multipick"), n.createEl("h3", { text: e("\u4FEE\u6539\u65E5\u671F") }), n.createEl("p", { text: "\u300C" + Z(t.note.title, 20) + e("\u300D\u5F53\u524D\u65E5\u671F\uFF1A") + (t.note.date || e("\u65E0")), cls: "lkm-modal-sub" });
      let o = n.createEl("input", { type: "date", cls: "lkm-multipick-input" });
      o.value = t.note.date || "";
      let i = n.createDiv("lkm-multipick-btns");
      new P(i).addButton((r) => r.setButtonText(e("\u786E\u5B9A")).setCta().onClick(() => {
        let a = o.value || "";
        s.close(), this._setDate(t, a);
      })).addButton((r) => r.setButtonText(e("\u6E05\u9664")).onClick(() => {
        s.close(), this._setDate(t, "");
      })).addButton((r) => r.setButtonText(e("\u53D6\u6D88")).onClick(() => s.close())), o.focus();
    }, s.onClose = () => s.contentEl.empty(), s.open();
  }
  async _setDate(t, s) {
    if (t.note.file)
      try {
        let n = this.s.dateField || "date";
        await this.app.fileManager.processFrontMatter(t.note.file, (o) => {
          s ? o[n] = s : delete o[n];
        }), new f(e("\u5DF2\u4FEE\u6539\u65E5\u671F\uFF1A") + (s || e("\u65E0")) + " \xB7 " + t.note.title), await this.rebuild(!0);
      } catch (n) {
        new f(e("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n)), console.error("[link-mindmap] _setDate:", n);
      }
  }
  openRootPicker() {
    let t = [...this.notes.values()].filter((n) => n.zk).sort((n, o) => n.title.localeCompare(o.title, "zh")), s = t.length ? t : [...this.notes.values()].filter((n) => !this.referenced.has(n.file.path));
    if (!s.length) {
      new f(e("\u6CA1\u6709\u4E3B\u7B14\u8BB0\uFF08main: true\uFF09"));
      return;
    }
    new Ft(
      this.app,
      s.map((n) => ({ label: n.title, path: n.file.path })),
      (n) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = n.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      e("\u9009\u62E9\u4E3B\u7B14\u8BB0\u2026")
    ).open();
  }
  openNoteSearch() {
    let t = [...this.notes.values()].sort((s, n) => s.title.localeCompare(n.title, "zh"));
    if (!t.length) {
      new f(e("\u6CA1\u6709\u53EF\u641C\u7D22\u7684\u7B14\u8BB0"));
      return;
    }
    new Ft(
      this.app,
      t.map((s) => ({ label: s.title, path: s.file.path })),
      (s) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = s.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      e("\u641C\u7D22\u7B14\u8BB0\u2026")
    ).open();
  }
  openMultiPick() {
    let t = [...this.notes.values()].sort((i, r) => (r.file.stat.ctime || 0) - (i.file.stat.ctime || 0));
    if (!t.length) {
      new f(e("\u6CA1\u6709\u53EF\u9009\u7684\u7B14\u8BB0"));
      return;
    }
    let s = [];
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length)
      s = this.currentRoot.children.map((i) => i.note.file ? i.note.file.path : null).filter(Boolean);
    else if (this._selKey) {
      let i = this._nodeIndex.get(this._selKey);
      i && i.note.file && s.push(i.note.file.path);
    }
    let n = Object.keys(this.s.typeColors || {}), o = t.map((i) => ({
      label: i.title,
      path: i.file.path,
      isMain: i.zk,
      type: i.type || "",
      orphan: !i.childLinks.length && !this.referenced.has(i.file.path)
    }));
    new Te(
      this.app,
      o,
      (i) => this._showMultiRoot(i),
      s,
      n
    ).open();
  }
  _showMultiRoot(t) {
    let s = t.map((r) => this.notes.get(r)).filter(Boolean);
    if (!s.length) {
      new f(e("\u6CA1\u6709\u6709\u6548\u7684\u7B14\u8BB0"));
      return;
    }
    let n = /* @__PURE__ */ new Set(), o = s.filter((r) => n.has(r.file.path) ? !1 : (n.add(r.file.path), !0));
    this._multiRootPaths = o.map((r) => r.file.path);
    let i = {
      note: { file: null, title: e("\u591A\u9009\u5BFC\u56FE\uFF08") + o.length + e(" \u7BC7\uFF09"), zk: !1, status: !1, type: "", date: "", childLinks: [], parentLinks: [] },
      parent: null,
      children: [],
      expanded: !0,
      isAlias: !1,
      key: "#root"
    };
    for (let r of o) i.children.push(Tt(this.app, this.notes, r));
    this._kwFile = null, this._multiRoot = !0, this.rootPath = null, this.currentRoot = i, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render({ fit: !0 });
  }
  _renderEmptyGuide(t) {
    let s = t.createDiv("lkm-empty-guide");
    s.createEl("h3", { text: e("\u6B22\u8FCE\u4F7F\u7528\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE") }), s.createEl("p", { text: e("\u7ED3\u5408\u5362\u66FC\u7B14\u8BB0\u7684\u5C42\u7EA7\u601D\u60F3\uFF0C\u5229\u7528 Obsidian \u5F3A\u5927\u7684\u53CC\u94FE\u529F\u80FD\u5EFA\u7ACB\u7B14\u8BB0\u95F4\u7684\u7236\u5B50\u5173\u7CFB\uFF0C\u53D6\u6D88\u4E86\u7F16\u53F7\u2014\u2014\u6BCF\u4E2A\u8282\u70B9\u5C31\u662F\u4E00\u7BC7\u7B14\u8BB0\uFF0C\u901A\u8FC7 frontmatter \u7684 children/parent \u94FE\u63A5\u81EA\u7136\u5173\u8054\uFF0C\u65E0\u9700\u7EF4\u62A4\u4EFB\u4F55\u7F16\u53F7\u3002"), cls: "lkm-guide-intro" });
    let n = s.createDiv("lkm-guide-steps");
    n.createEl("h4", { text: e("\u5FEB\u901F\u4E0A\u624B") });
    let o = [
      ["\u2460", e("\u521B\u5EFA\u7B14\u8BB0"), e("\u70B9\u51FB\u4E0B\u65B9\u300C\u521B\u5EFA\u7B14\u8BB0\u300D\uFF0C\u8F93\u5165\u6807\u9898\u5373\u53EF\u3002\u521B\u5EFA\u65F6\u53EF\u52FE\u9009\u300C\u4E3B\u7B14\u8BB0\u300D\u4F5C\u4E3A\u5BFC\u56FE\u5165\u53E3\u3002")],
      ["\u2461", e("\u6DFB\u52A0\u5B50\u8282\u70B9"), e("\u521B\u5EFA\u540E\uFF0C\u53F3\u952E/\u957F\u6309\u8282\u70B9 \u2192\u300C\u65B0\u589E\u5B50\u8282\u70B9\u300D\uFF0C\u81EA\u52A8\u5728\u7236\u7B14\u8BB0\u5199\u5165 children \u94FE\u63A5\u3002")],
      ["\u2462", e("\u67E5\u770B\u5BFC\u56FE"), e("\u4E3B\u7B14\u8BB0\u81EA\u52A8\u5C55\u5F00\u4E3A\u5BFC\u56FE\u6811\u3002\u62D6\u52A8\u8282\u70B9\u53EF\u79FB\u52A8\uFF0C\u62D6\u52A8\u53F3\u4FA7\u7AEF\u53E3\u53EF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\u3002")]
    ];
    for (let [p, _, S] of o) {
      let x = n.createDiv("lkm-guide-step");
      x.createEl("span", { cls: "lkm-step-num", text: p });
      let C = x.createDiv("lkm-step-body");
      C.createEl("span", { cls: "lkm-step-title", text: _ }), C.createEl("span", { cls: "lkm-step-desc", text: S });
    }
    let i = s.createDiv("lkm-guide-btns"), r = i.createEl("button", { cls: "lkm-btn lkm-btn-action", text: e("\u521B\u5EFA\u7B14\u8BB0") });
    r.onclick = () => this.createStandaloneNote();
    let a = i.createEl("button", { cls: "lkm-btn", text: e("\u521B\u5EFA\u9ED8\u8BA4\u6A21\u677F") });
    a.onclick = () => this._createDefaultTemplate();
    let l = s.createDiv("lkm-guide-help");
    l.createEl("h4", { text: e("\u5DE5\u5177\u680F\u529F\u80FD") });
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
    for (let [p, _] of c) {
      let S = l.createDiv("lkm-guide-row");
      S.createEl("span", { cls: "lkm-guide-key", text: p }), S.createEl("span", { cls: "lkm-guide-val", text: _ });
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
    for (let [p, _] of d) {
      let S = h.createDiv("lkm-guide-row");
      S.createEl("span", { cls: "lkm-guide-key", text: p }), S.createEl("span", { cls: "lkm-guide-val", text: _ });
    }
  }
  async _createDefaultTemplate() {
    let t = this.s, s = (t.templateFolder || "").trim();
    if (s || (s = e("99-\u6A21\u677F"), t.templateFolder = s), !this.app.vault.getAbstractFileByPath(nt(s)))
      try {
        await this.app.vault.createFolder(nt(s));
      } catch (i) {
        new f(e("\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u5939\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
        return;
      }
    let o = nt(s + e("/\u65B0\u8282\u70B9\u6A21\u677F.md"));
    if (this.app.vault.getAbstractFileByPath(o))
      new f(e("\u6A21\u677F\u5DF2\u5B58\u5728\uFF1A") + o);
    else {
      let i = t.linkField || "children", r = t.zkField || "main", a = t.statusField || "status", l = t.typeField || "type", c = t.dateField || "date", h = `---
${i}: []
${r}: false
${a}: false
${c}: ""
${l}: ""
---

`;
      try {
        await this.app.vault.create(o, h);
      } catch (d) {
        new f(e("\u521B\u5EFA\u6A21\u677F\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
        return;
      }
    }
    t.templatePath = o, await this.plugin.saveSettings(), new f(e("\u5DF2\u521B\u5EFA\u6A21\u677F\u5E76\u8BBE\u4E3A\u9ED8\u8BA4\uFF1A") + o), this.render();
  }
  async _createFirstNote(t) {
    let s = this.s, n = ut(t) + ".md", o = nt(s.mainFolder), i = nt(o + "/" + n);
    if (this.app.vault.getAbstractFileByPath(i)) {
      new f(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + n);
      return;
    }
    let r = s.linkField || "children", a = s.zkField || "main", l = s.statusField || "status", c = s.dateField || "date", h = /* @__PURE__ */ new Date(), d = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0"), p = `---
${r}: []
${a}: true
${l}: false
${c}: "${d}"
---

`;
    try {
      await this.app.vault.create(i, p), new f(e("\u5DF2\u521B\u5EFA\u4E3B\u7B14\u8BB0\u300C") + t + "\u300D"), await this.rebuild(!0);
    } catch (_) {
      new f(e("\u521B\u5EFA\u5931\u8D25\uFF1A") + (_ && _.message ? _.message : _));
    }
  }
  async openKeywordPicker() {
    let t = this.app.vault.getAbstractFileByPath(nt(this.s.indexFolder)), s = (t && t.children ? t.children : []).filter((n) => n instanceof Dt && n.extension === "md");
    if (!s.length) {
      new f("\u300C" + this.s.indexFolder + e("\u300D\u91CC\u6CA1\u6709\u7D22\u5F15\u6587\u4EF6"));
      return;
    }
    new Ft(
      this.app,
      s.map((n) => ({ label: n.basename, file: n })),
      (n) => this.showKeyword(n.file),
      e("\u9009\u62E9\u5173\u952E\u8BCD\u7D22\u5F15\u2026")
    ).open();
  }
  async showKeyword(t, s) {
    this._kwFile = t, this._multiRoot = !1;
    let n = this.contentEl.querySelector(".lkm-info");
    n && (n.empty(), n.setText(e("\u5173\u952E\u8BCD\uFF1A") + t.basename));
    let i = [...(await this.app.vault.read(t)).matchAll(/\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g)].map((h) => h[1].trim()), r = [], a = /* @__PURE__ */ new Set();
    for (let h of i) {
      let d = this.app.metadataCache.getFirstLinkpathDest(h, t.path);
      if (!d) continue;
      let p = this.notes.get(d.path);
      !p || a.has(p.file.path) || (a.add(p.file.path), r.push(p));
    }
    if (!r.length) {
      new f(e("\u8BE5\u7D22\u5F15\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u7B14\u8BB0\u94FE\u63A5")), this._kwFile = null, this.render();
      return;
    }
    let l = {
      note: { file: null, title: t.basename, zk: !1, status: !1, type: "", date: "", childLinks: [], parentLinks: [] },
      parent: null,
      children: [],
      expanded: !0,
      isAlias: !1,
      key: "#root"
    };
    for (let h of r) l.children.push(Tt(this.app, this.notes, h));
    this.currentRoot = l, this._indexTree(l), Ot(l, this.depth), this._restoreExpanded(), this._view = null;
    let c = this.contentEl.querySelector(".lkm-canvas");
    c && this._draw(c, Pt(l, this.s), Object.assign({ fit: !0 }, s || {}));
  }
  _draw(t, s, n) {
    n = n || {}, t.empty();
    let o = this.s, { nodes: i, edges: r } = s;
    if (!i.length) return;
    let a = 1 / 0, l = 1 / 0, c = -1 / 0, h = -1 / 0, d = o.layoutDir === "v";
    for (let u of i)
      a = Math.min(a, u._x), l = Math.min(l, u._y - o.nodeHeight / 2), c = Math.max(c, u._x + u._w), h = Math.max(h, u._y + o.nodeHeight / 2 + (d ? 28 : 0));
    let p = 40, _ = c - a + p * 2, S = h - l + p * 2, x = A("svg", { class: "lkm-svg" }), C = A("defs"), b = A("marker", { id: "lkm-arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" });
    b.appendChild(A("path", { d: "M0,0 L10,5 L0,10 z", class: "lkm-arrow-fill" })), C.appendChild(b), x.appendChild(C);
    let R = A("g", { class: "lkm-viewport" });
    x.appendChild(R), t.appendChild(x);
    for (let [u, I] of r) {
      let M, K, U, j, at, Y;
      if (o.layoutDir === "v") {
        M = u._x + u._w / 2, K = u._y + o.nodeHeight / 2, U = I._x + I._w / 2, j = I._y - o.nodeHeight / 2, Y = (K + j) / 2;
        let dt = o.curve ? `M${M},${K} C${M},${Y} ${U},${Y} ${U},${j}` : `M${M},${K} L${U},${j}`;
        R.appendChild(A("path", { d: dt, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      } else {
        M = u._x + u._w, K = u._y, U = I._x, j = I._y, at = (M + U) / 2;
        let dt = o.curve ? `M${M},${K} C${at},${K} ${at},${j} ${U},${j}` : `M${M},${K} L${U},${j}`;
        R.appendChild(A("path", { d: dt, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      }
    }
    let k = /* @__PURE__ */ g((u) => this._draw(t, Pt(this.currentRoot, o), { anchorKey: u }), "redraw"), E = null, v = { before: e("\u2191 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u524D"), after: e("\u2193 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u540E"), child: e("\u2192 \u4F5C\u4E3A\u5B50\u8282\u70B9") }, D = /* @__PURE__ */ g((u, I) => {
      if (!I.note.file) return;
      E = { node: I, sx: u.clientX, sy: u.clientY, moved: !1, target: null, zone: "child" };
      let M = document.createElement("div");
      M.className = "lkm-drag-hint", M.style.display = "none", document.body.appendChild(M);
      let K = /* @__PURE__ */ g((Y) => {
        if (!E) return;
        let dt = Y.clientX - E.sx, Ct = Y.clientY - E.sy;
        if (!E.moved && Math.hypot(dt, Ct) < 6) return;
        E.moved = !0, x.classList.add("lkm-dragging");
        let St = t.getBoundingClientRect(), mt = (Y.clientX - St.left - T) / F, ot = (Y.clientY - St.top - m) / F, st = o.nodeHeight, X = null, rt = "child";
        for (let q of i)
          if (!(q.key === I.key || !q.note.file) && mt >= q._x && mt <= q._x + q._w && ot >= q._y - st / 2 && ot <= q._y + st / 2) {
            if (X = q, o.layoutDir === "v") {
              let pt = (mt - q._x) / q._w;
              rt = pt < 0.3 ? "before" : pt > 0.7 ? "after" : "child";
            } else {
              let pt = (ot - (q._y - st / 2)) / st;
              rt = pt < 0.3 ? "before" : pt > 0.7 ? "after" : "child";
            }
            break;
          }
        (X !== E.target || rt !== E.zone) && (E.target && E.target._el && E.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), E.target = X, E.zone = rt, X && X._el && (X._el.classList.add("lkm-drop-target"), rt === "before" && X._el.classList.add("lkm-drop-before"), rt === "after" && X._el.classList.add("lkm-drop-after"))), M.style.display = X ? "block" : "none", X && (M.textContent = v[rt], M.style.left = Y.clientX + 16 + "px", M.style.top = Y.clientY + 16 + "px");
      }, "onMove"), U = /* @__PURE__ */ g(() => {
        window.removeEventListener("mousemove", K), window.removeEventListener("mouseup", U), window.removeEventListener("touchmove", j), window.removeEventListener("touchend", at), x.classList.remove("lkm-dragging"), M.remove();
        let Y = E;
        E = null, Y && (Y.target && Y.target._el && Y.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), Y.moved && Y.target && (Y.zone === "child" ? this._moveNode(Y.node, Y.target.note.file.path) : this._reorderSiblings(Y.node, Y.target.note.file.path, Y.zone === "after")));
      }, "onUp"), j = /* @__PURE__ */ g((Y) => {
        Y.touches.length && K({ clientX: Y.touches[0].clientX, clientY: Y.touches[0].clientY });
      }, "onTouchMove2"), at = /* @__PURE__ */ g(() => U(), "onTouchEnd2");
      window.addEventListener("mousemove", K), window.addEventListener("mouseup", U), window.addEventListener("touchmove", j, { passive: !1 }), window.addEventListener("touchend", at);
    }, "startNodeDrag"), N = /* @__PURE__ */ g((u, I) => {
      if (!I.note.file) return;
      u.preventDefault(), u.stopPropagation(), L = !0;
      let M = A("path", { class: "lkm-wire" });
      R.appendChild(M);
      let K = o.layoutDir === "v" ? I._x + I._w / 2 : I._x + I._w, U = o.layoutDir === "v" ? I._y + o.nodeHeight / 2 : I._y, j = null, at = /* @__PURE__ */ g((ot, st) => {
        let X = t.getBoundingClientRect();
        return { x: (ot - X.left - T) / F, y: (st - X.top - m) / F };
      }, "local"), Y = /* @__PURE__ */ g((ot, st) => {
        let X = (K + ot) / 2;
        M.setAttribute("d", `M${K},${U} C${X},${U} ${X},${st} ${ot},${st}`);
      }, "setWire");
      Y(K, U);
      let dt = /* @__PURE__ */ g((ot) => {
        let st = at(ot.clientX, ot.clientY);
        Y(st.x, st.y);
        let X = o.nodeHeight, rt = null;
        for (let q of i)
          if (!(!q.note.file || q.key === I.key) && st.x >= q._x && st.x <= q._x + q._w && st.y >= q._y - X / 2 && st.y <= q._y + X / 2) {
            rt = q;
            break;
          }
        rt !== j && (j && j._el && j._el.classList.remove("lkm-wire-target"), j = rt, j && j._el && j._el.classList.add("lkm-wire-target"));
      }, "onMove"), Ct = /* @__PURE__ */ g(async () => {
        L = !1, window.removeEventListener("mousemove", dt), window.removeEventListener("mouseup", Ct), window.removeEventListener("touchmove", St), window.removeEventListener("touchend", mt), M.remove(), j && j._el && j._el.classList.remove("lkm-wire-target"), j && await this._addRelation(I, j.note);
      }, "onUp"), St = /* @__PURE__ */ g((ot) => {
        ot.preventDefault();
        let st = ot.touches[0];
        dt({ clientX: st.clientX, clientY: st.clientY });
      }, "onTouchMove"), mt = /* @__PURE__ */ g(() => Ct(), "onTouchEnd");
      window.addEventListener("mousemove", dt), window.addEventListener("mouseup", Ct), window.addEventListener("touchmove", St, { passive: !1 }), window.addEventListener("touchend", mt);
    }, "startWire");
    for (let u of i) {
      let I = !u.note.file, M = A("g", {
        class: "lkm-node" + (u.note.zk ? " lkm-main" : "") + (u.isAlias ? " lkm-multi" : "") + (u.note.status ? " lkm-done" : ""),
        transform: `translate(${u._x},${u._y - o.nodeHeight / 2})`
      }), K = A("rect", { width: u._w, height: o.nodeHeight, rx: 12, ry: 12, class: "lkm-card" }), U = u.note.type ? (o.typeColors || {})[u.note.type] : null;
      U && K.style.setProperty("--lkm-card-stroke", U), M.appendChild(K);
      let j = A("g", { class: "lkm-status-dots" }), at = 6, Y = /* @__PURE__ */ g(($, tt) => {
        let lt = A("circle", { cx: 10, cy: at, r: 4, class: $ });
        j.appendChild(lt);
        let gt = A("circle", { cx: 10, cy: at, r: 7, class: "lkm-dot-hit" }), kt = A("title");
        kt.textContent = tt, gt.appendChild(kt), j.appendChild(gt), at += 10;
      }, "mkDot");
      u.note.zk && Y("lkm-dot-zk", e("\u4E3B\u7B14\u8BB0\uFF1A\u8BE5\u7B14\u8BB0 main: true\uFF0C\u662F\u5BFC\u56FE\u7684\u4E3B\u5165\u53E3")), u.note.status && Y("lkm-dot-done", e("\u5DF2\u5B8C\u6210\uFF1A\u8BE5\u7B14\u8BB0 status: true")), u.isAlias && Y("lkm-dot-multi", e("\u91CD\u590D\u8282\u70B9\uFF1A\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\u7684\u6302\u70B9\uFF09")), at > 9 && M.appendChild(j);
      let dt = o.showCreated && !I && u.note.date ? u.note.date : "", Ct = o.showType && !I && u.note.type ? u.note.type : "", St = o.showChildCount && !I && u.children.length ? e("\u5B50 ") + u.children.length : "", mt = [Ct, St, dt].filter(Boolean).join(" \xB7 "), ot = !!mt, st = A("text", { x: 16, y: ot ? o.nodeHeight / 2 - 4 : o.nodeHeight / 2 + 5, class: "lkm-title" });
      if (st.textContent = u._shown || u.note.title, M.appendChild(st), ot) {
        let $ = A("text", { x: 16, y: o.nodeHeight - 8, class: "lkm-sub" });
        $.textContent = Z(mt, 50), M.appendChild($);
      }
      let X = o.nodeHeight / 2, rt = window.innerWidth < 600, q = rt ? 12 : 10, pt = /* @__PURE__ */ g(($, tt) => {
        let lt = A("title");
        lt.textContent = tt, $.appendChild(lt);
      }, "addTip"), Jt = o.layoutDir === "v";
      if (u.children.length) {
        let $ = A("g", { class: "lkm-expand" });
        pt($, u.expanded ? e("\u6298\u53E0\u5B50\u8282\u70B9") : e("\u5C55\u5F00\u5B50\u8282\u70B9"));
        let tt = Jt ? u._w / 2 : u._w + 14, lt = Jt ? o.nodeHeight + 14 : X;
        $.appendChild(A("circle", { cx: tt, cy: lt, r: q, class: "lkm-dot" }));
        let gt = A("text", { x: tt, y: lt + 5, class: "lkm-sign", "text-anchor": "middle" });
        gt.textContent = u.expanded ? "\u2212" : "+", $.appendChild(gt);
        let kt = A("circle", { cx: tt, cy: lt, r: q + 5, class: "lkm-hit" });
        kt.addEventListener("click", (Et) => {
          Et.stopPropagation(), u.expanded = !u.expanded, this._expandedMem.set(u.key, u.expanded), k(u.key);
        }), $.appendChild(kt), M.appendChild($);
      }
      if (u.note.file) {
        let $ = rt ? 26 : 24, tt = u._w - (rt ? 20 : 18), lt = A("g", { class: "lkm-connect" });
        pt(lt, e("\u62D6\u52A8\u8FDE\u7EBF\uFF1A\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u76EE\u6807\u6210\u4E3A\u672C\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u539F\u5173\u7CFB\u4FDD\u7559\uFF09"));
        let gt = tt, kt = X;
        lt.appendChild(A("circle", { cx: gt, cy: kt, r: q, class: "lkm-connect-bg" })), lt.appendChild(A("circle", { cx: gt, cy: kt, r: 2.6, class: "lkm-connect-dot" }));
        let Et = A("circle", { cx: gt, cy: kt, r: q + 5, class: "lkm-hit" });
        if (Et.addEventListener("mousedown", (ct) => {
          this._batchMode || N(ct, u);
        }), Et.addEventListener("touchstart", (ct) => {
          this._batchMode || N(ct, u);
        }, { passive: !1 }), lt.appendChild(Et), M.appendChild(lt), o.showOpenIcon !== !1) {
          tt -= $;
          let ct = A("g", { class: "lkm-open" });
          pt(ct, e("\u6253\u5F00\u7B14\u8BB0")), ct.appendChild(A("circle", { cx: tt, cy: X, r: q, class: "lkm-open-bg" }));
          let Mt = A("text", { x: tt, y: X + 4, class: "lkm-open-sign", "text-anchor": "middle", transform: "rotate(90 " + tt + " " + X + ")" });
          Mt.textContent = "\u270E", ct.appendChild(Mt);
          let Lt = A("circle", { cx: tt, cy: X, r: q + 3, class: "lkm-hit" });
          Lt.addEventListener("click", ($t) => {
            $t.stopPropagation(), this.app.workspace.getLeaf(!0).openFile(u.note.file);
          }), ct.appendChild(Lt), M.appendChild(ct);
        }
        if (o.showAddIcon !== !1) {
          tt -= $;
          let ct = A("g", { class: "lkm-add" });
          pt(ct, e("\u65B0\u589E\u5B50\u8282\u70B9\uFF08\u81EA\u52A8\u5199\u5165\u94FE\u63A5\uFF09")), ct.appendChild(A("circle", { cx: tt, cy: X, r: q, class: "lkm-add-bg" }));
          let Mt = A("text", { x: tt, y: X + 4, class: "lkm-add-sign", "text-anchor": "middle" });
          Mt.textContent = "\uFF0B", ct.appendChild(Mt);
          let Lt = A("circle", { cx: tt, cy: X, r: q + 3, class: "lkm-hit" });
          Lt.addEventListener("click", ($t) => {
            $t.stopPropagation(), this.createChild(u);
          }), ct.appendChild(Lt), M.appendChild(ct);
        }
      }
      u._el = M, this._batchMode && this._selected.has(u.key) && M.classList.add("lkm-selected"), this._selKey === u.key && M.classList.add("lkm-sel"), M.addEventListener("click", ($) => {
        if (this._batchMode) {
          $.stopPropagation(), this._toggleSelect(u.key);
          return;
        }
        this._select(u.key);
      }), M.addEventListener("contextmenu", ($) => {
        $.preventDefault(), $.stopPropagation(), !this._batchMode && (this._select(u.key), this._showNodeMenu(u, $));
      }), M.addEventListener("dblclick", ($) => {
        $.stopPropagation(), !this._batchMode && (u.note.file ? this.app.workspace.getLeaf(!0).openFile(u.note.file) : u.children.length && (u.expanded = !u.expanded, this._expandedMem.set(u.key, u.expanded), k(u.key)));
      }), M.addEventListener("mousedown", ($) => {
        $.button !== 0 || this._batchMode || ($.stopPropagation(), D($, u));
      }), M.addEventListener("touchstart", ($) => {
        if (this._batchMode || !u.note.file || $.touches.length !== 1) return;
        let tt = $.touches[0], lt = { clientX: tt.clientX, clientY: tt.clientY, preventDefault: /* @__PURE__ */ g(() => $.preventDefault(), "preventDefault"), stopPropagation: /* @__PURE__ */ g(() => $.stopPropagation(), "stopPropagation") };
        D(lt, u);
      }, { passive: !1 });
      let _t = null;
      M.addEventListener("touchstart", ($) => {
        if (this._batchMode || !u.note.file) return;
        let tt = $.touches[0];
        _t = setTimeout(() => {
          _t = null, this._select(u.key), this._showNodeMenu(u, { clientX: tt.clientX, clientY: tt.clientY });
        }, 500);
      }, { passive: !0 }), M.addEventListener("touchmove", () => {
        _t && (clearTimeout(_t), _t = null);
      }, { passive: !0 }), M.addEventListener("touchend", () => {
        _t && (clearTimeout(_t), _t = null);
      }, { passive: !0 }), R.appendChild(M);
    }
    let F = 1, T = 0, m = 0;
    this._view && (F = this._view.k, T = this._view.tx, m = this._view.ty);
    let y = /* @__PURE__ */ g(() => R.setAttribute("transform", `translate(${T},${m}) scale(${F})`), "apply"), L = !1, V = /* @__PURE__ */ g(() => {
      let u = t.getBoundingClientRect(), I = u.width || t.clientWidth || 800, M = u.height || t.clientHeight || 600;
      if (F = Math.min(I / _, M / S, 1.4) || 1, d && i.length) {
        let K = i[0];
        T = I / 2 - (K._x + K._w / 2) * F, m = p * F - l * F;
      } else
        T = (I - _ * F) / 2 - (a - p) * F, m = (M - S * F) / 2 - (l - p) * F;
      this._view = { k: F, tx: T, ty: m }, y();
    }, "fit");
    this._fit = V;
    let O = /* @__PURE__ */ g((u) => {
      let I = i.find((K) => K.note.file && K.note.file.path === u);
      if (!I) return;
      let M = t.getBoundingClientRect();
      !M.width || !M.height || (T = M.width / 2 - (I._x + I._w / 2) * F, m = M.height / 2 - I._y * F, this._view = { k: F, tx: T, ty: m }, y());
    }, "centerOnPath");
    if (!this._view || n.fit) {
      if (requestAnimationFrame(() => {
        V(), n.centerPath && O(n.centerPath);
      }), !n.centerPath) {
        let u = 3, I = /* @__PURE__ */ g(() => {
          u-- > 0 && V();
        }, "onResize");
        window.addEventListener("resize", I);
        let M = setTimeout(() => window.removeEventListener("resize", I), 1500);
        this._cleanup.push(() => {
          window.removeEventListener("resize", I), clearTimeout(M);
        });
      }
    } else
      y(), n.centerPath && O(n.centerPath);
    let H = /* @__PURE__ */ g((u) => {
      u.preventDefault();
      let I = x.getBoundingClientRect(), M = u.clientX - I.left, K = u.clientY - I.top, U = Math.max(0.2, Math.min(3, F * (u.deltaY < 0 ? 1.1 : 0.9)));
      T = M - (M - T) * (U / F), m = K - (K - m) * (U / F), F = U, this._view = { k: F, tx: T, ty: m }, y();
    }, "onWheel");
    x.addEventListener("wheel", H, { passive: !1 }), this._cleanup.push(() => x.removeEventListener("wheel", H));
    let W = !1, Q = !1, J = 0, et = 0, z = /* @__PURE__ */ g((u) => {
      W = !0, Q = !1, J = u.clientX - T, et = u.clientY - m, x.classList.add("lkm-grabbing");
    }, "onDown"), B = /* @__PURE__ */ g((u) => {
      W && (!Q && Math.hypot(u.clientX - (J + T), u.clientY - (et + m)) > 3 && (Q = !0), T = u.clientX - J, m = u.clientY - et, this._view = { k: F, tx: T, ty: m }, y());
    }, "onMove"), G = /* @__PURE__ */ g(() => {
      let u = W;
      W = !1, x.classList.remove("lkm-grabbing"), u && !Q && !this._batchMode && this._select(null);
    }, "onUp");
    x.addEventListener("mousedown", z), window.addEventListener("mousemove", B), window.addEventListener("mouseup", G), this._cleanup.push(() => {
      x.removeEventListener("mousedown", z), window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", G);
    });
    let it = null, ht = null, ft = /* @__PURE__ */ g((u) => {
      if (!L)
        if (u.stopPropagation(), u.touches.length === 2) {
          u.preventDefault();
          let I = u.touches[0].clientX - u.touches[1].clientX, M = u.touches[0].clientY - u.touches[1].clientY;
          ht = { dist: Math.hypot(I, M), k: F }, it = null;
        } else u.touches.length === 1 && (it = { x: u.touches[0].clientX - T, y: u.touches[0].clientY - m }, ht = null, x.classList.add("lkm-grabbing"));
    }, "onTouchStart"), At = /* @__PURE__ */ g((u) => {
      if (!L)
        if (u.stopPropagation(), u.touches.length === 2 && ht) {
          u.preventDefault();
          let I = u.touches[0].clientX - u.touches[1].clientX, M = u.touches[0].clientY - u.touches[1].clientY, K = Math.max(0.2, Math.min(3, ht.k * (Math.hypot(I, M) / ht.dist))), U = x.getBoundingClientRect(), j = (u.touches[0].clientX + u.touches[1].clientX) / 2 - U.left, at = (u.touches[0].clientY + u.touches[1].clientY) / 2 - U.top;
          T = j - (j - T) * (K / F), m = at - (at - m) * (K / F), F = K, this._view = { k: F, tx: T, ty: m }, y();
        } else u.touches.length === 1 && it ? (u.preventDefault(), T = u.touches[0].clientX - it.x, m = u.touches[0].clientY - it.y, this._view = { k: F, tx: T, ty: m }, y()) : u.touches.length && u.preventDefault();
    }, "onTouchMove"), vt = /* @__PURE__ */ g((u) => {
      L || (u.stopPropagation(), u.touches.length === 0 && (it = null, ht = null, x.classList.remove("lkm-grabbing")));
    }, "onTouchEnd");
    x.addEventListener("touchstart", ft, { passive: !1 }), x.addEventListener("touchmove", At, { passive: !1 }), x.addEventListener("touchend", vt), x.addEventListener("touchcancel", vt), this._cleanup.push(() => {
      x.removeEventListener("touchstart", ft), x.removeEventListener("touchmove", At), x.removeEventListener("touchend", vt), x.removeEventListener("touchcancel", vt);
    });
  }
  _templateFiles() {
    let t = this.s, s = (t.templateFolder || "").trim();
    if (!s) {
      let o = (t.templatePath || "").trim();
      if (o) {
        let i = o.lastIndexOf("/");
        s = i > 0 ? o.slice(0, i) : "";
      }
    }
    if (!s) return [];
    let n = this.app.vault.getAbstractFileByPath(nt(s));
    return !n || !n.children ? [] : n.children.filter((o) => o instanceof Dt && o.extension === "md");
  }
  async _buildNewNoteBody(t, s, n, o, i) {
    let r = this.s, a = r.linkField || "children", l = r.backField || "parent", c = r.zkField || "main", h = r.statusField || "status", d = r.typeField || "type", p = r.dateField || "date", _ = r.titleField || "title", S = /* @__PURE__ */ new Set([a, l, c, h, p, d, _]), x = "", C = [];
    if (o) {
      let R = this.app.vault.getAbstractFileByPath(nt(o));
      if (R instanceof Dt) {
        let k = le(await this.app.vault.read(R));
        x = k.body;
        let E = new Map(k.fields);
        n || (E.get(d) != null ? n = Ht(E.get(d)) : E.get("type") != null && (n = Ht(E.get("type"))));
        let v = [];
        for (let [D, N] of [["zk", c], ["status", h], ["date", p], ["type", d], ["title", _]])
          D !== N && E.has(D) && !E.has(N) && v.push(D + "\u2192" + N);
        v.length && new f(e("\u6A21\u677F\u5B57\u6BB5\u4E0E\u914D\u7F6E\u4E0D\u4E00\u81F4\uFF1A") + v.join("\uFF0C") + e("\u3002\u5DF2\u7528\u914D\u7F6E\u5B57\u6BB5\u540D\u521B\u5EFA\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6A21\u677F\u3002"), 1e4);
        for (let [D, N] of k.fields)
          S.has(D) || C.push([D, N]);
      }
    }
    let b = ["---"];
    b.push(a + ": []"), t && r.autoAddBackLink && b.push(l + ': "' + t + '"'), b.push(c + ": " + (i ? "true" : "false")), b.push(h + ": false"), b.push(p + ": " + s), n && b.push(d + ': "' + n + '"');
    for (let [R, k] of C) b.push(R + ": " + (k ?? ""));
    return b.push("---", ""), b.join(`
`) + (x || "");
  }
  async _rebuildUntilReady(t, s, n) {
    s = s || 30, n = n !== !1;
    for (let o = 0; o < s; o++) {
      if (await this.rebuild(!0), this.notes.has(t) && (!n || this._treePaths && this._treePaths.has(t)))
        return;
      await new Promise((i) => setTimeout(i, 150));
    }
    new f(e("\u5DF2\u521B\u5EFA\uFF0C\u4F46\u89C6\u56FE\u6682\u672A\u5237\u65B0\uFF0C\u8BF7\u70B9\u5237\u65B0"));
  }
  createChild(t) {
    if (!t || !t.note.file) {
      new f(e("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6\uFF0C\u65E0\u6CD5\u65B0\u589E\u5B50\u8282\u70B9"));
      return;
    }
    let s = this.s, n = Object.keys(s.typeColors || {}), o = n.includes(s.defaultType) ? s.defaultType : "", i = [{ path: "", name: e("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let l of this._templateFiles()) i.push({ path: l.path, name: l.basename });
    let r = "", a = (s.templatePath || "").trim();
    if (a) {
      let l = i.find((c) => c.path === nt(a));
      l && (r = l.path);
    }
    new ne(this.app, t.note.title, {
      types: n,
      defaultType: o,
      templates: i,
      defaultTemplate: r,
      zkField: s.zkField || "main",
      onSubmit: /* @__PURE__ */ g(async (l, c, h, d) => {
        try {
          let p = ut(l) + ".md", _ = nt(s.mainFolder), S = nt(_ + "/" + p);
          if (this.app.vault.getAbstractFileByPath(S)) {
            new f(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + p);
            return;
          }
          let x = /* @__PURE__ */ new Date(), C = x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0"), b = await this._buildNewNoteBody(t.note.file.basename, C, c, h, d);
          await Nt(this.app, t.note.file, s.linkField, ut(l)), await this.app.vault.create(S, b), new f(e("\u5DF2\u521B\u5EFA\u300C") + ut(l) + e("\u300D\u5E76\u5173\u8054\u5230\u300C") + Z(t.note.title, 14) + "\u300D");
          let R = t;
          for (; R; )
            this._expandedMem.set(R.key, !0), R = R.parent;
          await this._rebuildUntilReady(S);
        } catch (p) {
          new f(e("\u521B\u5EFA\u5931\u8D25\uFF1A") + (p && p.message ? p.message : p));
        }
      }, "onSubmit")
    }).open();
  }
  createStandaloneNote() {
    let t = this.s, s = Object.keys(t.typeColors || {}), n = s.includes(t.defaultType) ? t.defaultType : "", o = [{ path: "", name: e("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let a of this._templateFiles()) o.push({ path: a.path, name: a.basename });
    let i = "", r = (t.templatePath || "").trim();
    if (r) {
      let a = o.find((l) => l.path === nt(r));
      a && (i = a.path);
    }
    new ne(this.app, "", {
      types: s,
      defaultType: n,
      templates: o,
      defaultTemplate: i,
      standalone: !0,
      zkField: t.zkField || "main",
      onSubmit: /* @__PURE__ */ g(async (a, l, c, h) => {
        try {
          let d = ut(a) + ".md", p = nt(t.mainFolder), _ = nt(p + "/" + d);
          if (this.app.vault.getAbstractFileByPath(_)) {
            new f(e("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + d);
            return;
          }
          let S = /* @__PURE__ */ new Date(), x = S.getFullYear() + "-" + String(S.getMonth() + 1).padStart(2, "0") + "-" + String(S.getDate()).padStart(2, "0"), C = await this._buildNewNoteBody(null, x, l, c, h);
          await this.app.vault.create(_, C), new f(e("\u5DF2\u521B\u5EFA\u300C") + ut(a) + "\u300D"), await this._rebuildUntilReady(_, 30, !1), this._focusPath(_);
        } catch (d) {
          new f(e("\u521B\u5EFA\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
        }
      }, "onSubmit")
    }).open();
  }
  _renderDash(t) {
    let s = this.s, n = t.createDiv("lkm-toolbar"), o = n.createEl("button", { cls: "lkm-btn", text: e("\u8FD4\u56DE") });
    o.title = e("\u8FD4\u56DE\u601D\u7EF4\u5BFC\u56FE"), o.onclick = () => {
      this._mode = "map", this.render();
    }, n.createSpan({ cls: "lkm-dash-title", text: e("\u5DE5\u4F5C\u53F0") });
    let i = this._dashStats(), r = n.createEl("button", { cls: "lkm-btn", text: e("\u590D\u5236\u7EDF\u8BA1") });
    r.title = e("\u628A\u7EDF\u8BA1\u6458\u8981\u590D\u5236\u4E3A Markdown"), r.style.marginLeft = "auto", r.onclick = () => {
      navigator.clipboard.writeText(this._dashSummaryMd(i)).then(
        () => new f(e("\u5DF2\u590D\u5236\u7EDF\u8BA1\u6458\u8981")),
        () => new f(e("\u590D\u5236\u5931\u8D25"))
      );
    };
    let a = t.createDiv("lkm-dash");
    if (!i.total) {
      a.createDiv("lkm-dash-h").setText("\u300C" + s.mainFolder + e("\u300D\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u7B14\u8BB0\u3002"));
      return;
    }
    let l = a.createDiv("lkm-cards"), c = [
      { num: i.total, label: e("\u7B14\u8BB0\u603B\u6570"), icon: "files", color: "#6c8cff", filter: { kind: "all" } },
      { num: i.zk, label: e("\u4E3B\u7B14\u8BB0"), icon: "star", color: "#f2a65a", filter: { kind: "zk" } },
      { num: i.kw, label: e("\u5173\u952E\u8BCD\u7D22\u5F15"), icon: "tags", color: "#b07cff", filter: { kind: "kw" } },
      { num: i.done, label: e("\u5DF2\u5B8C\u6210"), icon: "check", color: "#3fa66a", filter: { kind: "done" } },
      { num: i.orphan, label: e("\u672A\u5173\u8054"), icon: "unlink", color: "#4ba3e5", filter: { kind: "orphan" } },
      { num: i.todo, label: e("\u5F85\u529E\u672A\u5B8C\u6210"), icon: "list-checks", color: "#e5534b", filter: { kind: "todo" } },
      { num: i.linkCount, label: e("\u94FE\u63A5\u603B\u6570"), icon: "link", color: "#6c8cff" },
      { num: i.deadLinks, label: e("\u5931\u6548\u94FE\u63A5"), icon: "alert-triangle", color: "#e5534b" }
    ];
    for (let y of c) {
      let L = y.filter && this._isFilterActive(y.filter), V = l.createDiv("lkm-card-stat lkm-card-click" + (L ? " is-active" : "")), O = V.createDiv("lkm-card-ico");
      O.style.background = "color-mix(in srgb, " + y.color + " 16%, transparent)", O.style.color = y.color;
      try {
        ee(O, y.icon);
      } catch {
      }
      V.createDiv("lkm-stat-num").setText(String(y.num)), V.createDiv("lkm-stat-label").setText(y.label + (y.filter && i.total ? " \xB7 " + Math.round(y.num / i.total * 100) + "%" : "")), y.filter && (V.title = e("\u70B9\u51FB\u67E5\u770B\u300C") + y.label + e("\u300D\u5217\u8868"), V.addEventListener("click", () => this._toggleDashFilter(y.filter)));
    }
    {
      let y = a.createDiv("lkm-dash-two"), L = y.createDiv("lkm-dash-sec");
      L.createDiv("lkm-dash-h").setText(e("\u7C7B\u578B\u5206\u5E03"));
      let V = i.byTypeOrder.map((B) => ({ label: B.name, value: B.count, color: B.color, filter: { kind: "type", value: B.name } }));
      i.noType && V.push({ label: e("\u672A\u6807\u6CE8"), value: i.noType, color: "var(--text-faint)", filter: { kind: "notype" } });
      let O = L.createDiv("lkm-donut-wrap");
      this._renderDonut(O, V, i.total);
      let H = O.createDiv("lkm-legend");
      for (let B of V) {
        let G = H.createDiv("lkm-legend-row lkm-type-click" + (this._isFilterActive(B.filter) ? " is-active" : ""));
        G.createSpan({ cls: "lkm-legend-dot" }).style.background = B.color, G.createSpan({ cls: "lkm-legend-name", text: B.label }), G.createSpan({ cls: "lkm-legend-num", text: String(B.value) }), G.addEventListener("click", () => this._toggleDashFilter(B.filter));
      }
      let W = y.createDiv("lkm-dash-sec");
      W.createDiv("lkm-dash-h").setText(e("\u5B8C\u6210\u72B6\u6001"));
      let Q = W.createDiv("lkm-stackbar"), J = [
        { label: e("\u5DF2\u5B8C\u6210"), value: i.done, color: "var(--lkm-done)", filter: { kind: "done" } },
        { label: e("\u672A\u5B8C\u6210"), value: i.total - i.done, color: "var(--lkm-accent)", filter: { kind: "undone" } }
      ];
      for (let B of J) {
        if (!B.value) continue;
        let G = Q.createDiv("lkm-stackbar-seg");
        G.style.width = Math.max(6, B.value / i.total * 100) + "%", G.style.background = B.color, this._isFilterActive(B.filter) && G.addClass("is-active"), G.title = B.label + "\uFF1A" + B.value + e(" \u7BC7\uFF0C\u70B9\u51FB\u7B5B\u9009"), G.addEventListener("click", () => this._toggleDashFilter(B.filter));
      }
      let et = W.createDiv("lkm-chips"), z = /* @__PURE__ */ g((B, G, it, ht) => {
        let ft = et.createDiv("lkm-chip lkm-type-click" + (this._isFilterActive(ht) ? " is-active" : ""));
        ft.createSpan({ cls: "lkm-legend-dot" }).style.background = it, ft.createSpan({ text: B + " " + G }), ft.addEventListener("click", () => this._toggleDashFilter(ht));
      }, "chip");
      z(e("\u5DF2\u5B8C\u6210"), i.done, "var(--lkm-done)", { kind: "done" }), z(e("\u672A\u5B8C\u6210"), i.total - i.done, "var(--lkm-accent)", { kind: "undone" }), z(e("\u672A\u6807\u65E5\u671F"), i.noDate, "var(--text-faint)", { kind: "nodate" });
    }
    {
      let y = a.createDiv("lkm-dash-sec");
      y.createDiv("lkm-dash-h").setText(e("\u6708\u5EA6\u521B\u5EFA \xB7 \u8FD112\u4E2A\u6708\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u5F53\u6708\u65B0\u589E\uFF09"));
      let L = y.createDiv("lkm-chart-body");
      this._renderBarChart(
        L,
        i.monthly.map((V) => ({ label: parseInt(V.key.slice(5, 7), 10) + e("\u6708"), value: V.count, filter: { kind: "month", value: V.key } })),
        { height: window.innerWidth < 600 ? 100 : 120, thinLabels: window.innerWidth < 600 }
      );
    }
    {
      let y = a.createDiv("lkm-dash-sec");
      if (y.createDiv("lkm-dash-h").setText(e("\u6811\u6DF1\u5EA6\u5206\u5E03\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u8BE5\u5C42\u8282\u70B9\uFF09")), i.depthMax) {
        let L = y.createDiv("lkm-chart-body"), V = [];
        for (let O = 1; O <= i.depthMax; O++) V.push({ label: e("\u7B2C") + O + e("\u5C42"), value: i.depthCount.get(O) || 0, filter: { kind: "depth", value: String(O) } });
        this._renderBarChart(L, V, { height: window.innerWidth < 600 ? 100 : 120 });
      } else y.createDiv("lkm-heat-sum").setText(e("\u8FD8\u6CA1\u6709\u53EF\u7EDF\u8BA1\u7684\u5C42\u7EA7\u6570\u636E"));
    }
    let h = a.createDiv("lkm-dash-sec"), d = new Set([...i.heat.keys()].map((y) => y.slice(0, 4)));
    d.add(String((/* @__PURE__ */ new Date()).getFullYear()));
    let p = [...d].sort().reverse();
    this._dashHeatIdx = Math.min(this._dashHeatIdx || 0, p.length);
    let _ = h.createDiv("lkm-heat-head");
    if (_.createDiv("lkm-dash-h").setText(e("\u521B\u5EFA\u70ED\u529B\u56FE \xB7 ") + (this._dashHeatIdx ? p[this._dashHeatIdx - 1] + e(" \u5E74") : e("\u8FD1\u4E00\u5E74")) + e("\uFF08\u6309 date \u5B57\u6BB5\uFF09")), this._dashHeatIdx || p.length > 1) {
      let y = _.createDiv("lkm-heat-nav"), L = /* @__PURE__ */ g(() => {
        let H = this.contentEl.querySelector(".lkm-dash"), W = H ? H.scrollTop : 0;
        this.render();
        let Q = this.contentEl.querySelector(".lkm-dash");
        Q && (Q.scrollTop = W);
      }, "rerender"), V = y.createEl("button", { cls: "lkm-step", text: "\u2039" });
      V.disabled = this._dashHeatIdx >= p.length;
      let O = y.createEl("button", { cls: "lkm-step", text: "\u203A" });
      O.disabled = this._dashHeatIdx <= 0, V.onclick = () => {
        this._dashHeatIdx++, L();
      }, O.onclick = () => {
        this._dashHeatIdx--, L();
      };
    }
    let S = 864e5, x = /* @__PURE__ */ new Date();
    x.setHours(0, 0, 0, 0);
    let C = (x.getDay() + 6) % 7, b = window.innerWidth < 600, R = b ? 10 : 12, k, E, v, D;
    if (this._dashHeatIdx) {
      let y = parseInt(p[this._dashHeatIdx - 1], 10), L = new Date(y, 0, 1), V = new Date(y, 11, 31);
      k = new Date(L.getTime() - (L.getDay() + 6) % 7 * S), E = L, v = V, D = Math.round((V.getTime() + (6 - (V.getDay() + 6) % 7) * S - k.getTime()) / S / 7);
    } else {
      let y = new Date(x.getTime() + (6 - C) * S);
      D = b ? 26 : 53, k = new Date(y.getTime() - (D * 7 - 1) * S), E = k, v = x;
    }
    if (h.createDiv("lkm-heat-sum").setText(i.heat.size ? (() => {
      let y = this._ds(E), L = this._ds(v), V = 0, O = 0, H = { date: "", count: 0 };
      for (let [W, Q] of i.heat) W >= y && W <= L && (V += Q, O++, Q > H.count && (H = { date: W, count: Q }));
      return (O ? O + e(" \u5929\u6709\u521B\u5EFA \xB7 \u5171 ") + V + e(" \u7BC7") : e("\u8BE5\u65F6\u95F4\u6BB5\u6682\u65E0\u521B\u5EFA\u8BB0\u5F55")) + (H.count ? e(" \xB7 \u6700\u591A\u4E00\u5929 ") + H.count + e(" \u7BC7\uFF08") + H.date + "\uFF09" : "");
    })() : e("\u8FD8\u6CA1\u6709\u5E26 date \u5B57\u6BB5\u7684\u7B14\u8BB0")), i.heat.size) {
      let y = h.createDiv("lkm-heat-scroll"), L = y.createDiv("lkm-heat-grid");
      L.style.gridTemplateColumns = "26px repeat(" + D + ", " + R + "px)", L.style.gridAutoRows = R + "px";
      let V = -1;
      for (let J = 0; J < D; J++) {
        let et = new Date(k.getTime() + J * 7 * S);
        if (et.getMonth() !== V) {
          V = et.getMonth();
          let z = L.createDiv("lkm-heat-mon");
          z.style.gridColumn = String(J + 2), z.style.gridRow = "1", z.setText(et.getMonth() + 1 + e("\u6708"));
        }
      }
      [e("\u4E00"), e("\u4E09"), e("\u4E94")].forEach((J, et) => {
        let z = L.createDiv("lkm-heat-wd");
        z.style.gridColumn = "1", z.style.gridRow = String(et * 2 + 2), z.setText(J);
      });
      let O = this._ds(E), H = this._ds(v), W = this._ds(x), Q = null;
      for (let J = 0; J < D; J++)
        for (let et = 0; et < 7; et++) {
          let z = new Date(k.getTime() + (J * 7 + et) * S), B = L.createDiv("lkm-heat-cell");
          B.style.gridColumn = String(J + 2), B.style.gridRow = String(et + 2);
          let G = this._ds(z);
          if (z > x || G < O || G > H) {
            B.addClass("lkm-heat-off");
            continue;
          }
          let it = i.heat.get(G) || 0, ht = it === 0 ? 0 : it === 1 ? 1 : it <= 2 ? 2 : it <= 4 ? 3 : 4;
          ht && B.addClass("lkm-heat-l" + ht), this._isFilterActive({ kind: "date", value: G }) && B.addClass("is-active"), it && B.addClass("lkm-heat-hit"), G === W && (B.addClass("lkm-heat-today"), Q = B), B.title = G + "\uFF1A" + it + e(" \u7BC7") + (G === W ? e("\uFF08\u4ECA\u5929\uFF09") : ""), B.addEventListener("click", () => this._toggleDashFilter({ kind: "date", value: G }));
        }
      Q && !this._dashHeatIdx && requestAnimationFrame(() => {
        let J = Q.getBoundingClientRect(), et = y.getBoundingClientRect();
        J.right > et.right - 20 && (y.scrollLeft += J.right - et.right + 30);
      });
    }
    let N = a.createDiv("lkm-dash-two"), F = N.createDiv("lkm-dash-sec"), T = this._dashFilters || [];
    if (T.length) {
      F.addClass("lkm-filter-sec");
      let y = this._sortDashItems(this._dashFilterItems(T)), L = F.createDiv("lkm-filter-head");
      L.createSpan({ cls: "lkm-dash-h lkm-filter-title", text: this._dashFilterGroupLabel(T) });
      let V = L.createSpan({ cls: "lkm-filter-count", text: "\uFF08" + y.length + "\uFF09" }), O = L.createEl("input", { cls: "lkm-filter-search", type: "text", attr: { placeholder: e("\u8FC7\u6EE4\u2026") } });
      O.value = this._dashSearch || "", O.addEventListener("focus", () => {
        if (!window.matchMedia("(hover: none)").matches) return;
        let z = this.contentEl.querySelector(".lkm-dash"), B = this.contentEl.querySelector(".lkm-toolbar");
        if (!z || !B) return;
        let G = z.scrollTop, it = z.style.flex, ht = z.style.height, ft = /* @__PURE__ */ g(() => {
          let At = B.getBoundingClientRect().bottom, vt = window.visualViewport, I = (vt ? vt.height + vt.offsetTop : window.innerHeight) - At;
          I > 60 && (z.style.flex = "none", z.style.height = I + "px"), z.scrollTop = Math.max(0, L.offsetTop - 50);
        }, "doAdjust");
        setTimeout(ft, 300), setTimeout(ft, 500), O.addEventListener("blur", () => {
          z.style.flex = it, z.style.height = ht, z.scrollTop = G;
        }, { once: !0 });
      });
      let H = L.createEl("button", { cls: "lkm-btn", text: e("\u6392\u5E8F\uFF1A") + { date: e("\u65E5\u671F"), name: e("\u540D\u79F0") }[this._dashSort || "date"] });
      H.onclick = () => {
        this._dashSort = this._dashSort === "date" ? "name" : "date", this.render();
      };
      let W = L.createEl("button", { cls: "lkm-btn", text: e("\u6E05\u9664") });
      W.onclick = () => {
        this._dashFilters = [], this._dashSearch = "", this.render();
      }, y.length || F.createDiv("lkm-heat-sum").setText(e("\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7B14\u8BB0"));
      let Q = F.createDiv("lkm-filter-list"), J = [];
      for (let z of y) {
        let B = this._dashRow(Q, z);
        J.push({ el: B, text: (z.title + " " + (z.type || "")).toLowerCase() }), B.addEventListener("click", () => {
          z.isIndex ? (this._kwFile = z.file, this._multiRoot = !1, this._mode = "map", this.render()) : this.app.workspace.getLeaf(!0).openFile(z.file);
        });
      }
      let et = /* @__PURE__ */ g(() => {
        let z = (this._dashSearch || "").trim().toLowerCase(), B = 0;
        for (let G of J) {
          let it = !z || G.text.includes(z);
          G.el.style.display = it ? "" : "none", it && B++;
        }
        V.setText("\uFF08" + (z ? B + "/" : "") + y.length + "\uFF09");
      }, "applySearch");
      O.addEventListener("input", () => {
        this._dashSearch = O.value, et();
      }), et();
    } else {
      F.createDiv("lkm-dash-h").setText(e("\u5206\u652F\u5206\u5E03 \xB7 \u5B8C\u6210\u8FDB\u5EA6")), i.branches.length || F.createDiv("lkm-heat-sum").setText(e("\u8FD8\u6CA1\u6709 main: true \u7684\u4E3B\u7B14\u8BB0"));
      let y = this._dashBranchAll && i.branches.length > 6, L = y ? i.branches : i.branches.slice(0, 6), V = F.createDiv("lkm-filter-list lkm-branch-list"), O = i.branches[0] && i.branches[0].total || 1;
      for (let H of L) {
        let W = V.createDiv("lkm-branch-row");
        W.title = H.title + e("\uFF0C\u70B9\u51FB\u5728\u5BFC\u56FE\u4E2D\u6253\u5F00"), W.createSpan({ cls: "lkm-branch-name", text: Z(H.title, 10) });
        let Q = W.createDiv("lkm-type-bar").createDiv("lkm-branch-scaler");
        Q.style.width = Math.max(3, Math.round(H.total / O * 100)) + "%";
        let J = Q.createDiv("lkm-branch-done");
        J.style.width = (H.total ? Math.round(H.done / H.total * 100) : 0) + "%", W.createSpan({ cls: "lkm-type-num", text: H.done + "/" + H.total + " \xB7 " + Math.round(H.done / H.total * 100) + "%" }), W.addEventListener("click", () => {
          this.rootPath = H.path, this._view = null, this._kwFile = null, this._multiRoot = !1, this._mode = "map", this._expandedMem.clear(), this.render();
        });
      }
      if (i.branches.length > 6) {
        let H = F.createEl("button", { cls: "lkm-btn", text: y ? e("\u6536\u8D77") : e("\u5C55\u5F00\u5168\u90E8 ") + i.branches.length + e(" \u4E2A\u5206\u652F") });
        H.onclick = () => {
          this._dashBranchAll = !this._dashBranchAll, this.render();
        };
      }
    }
    let m = N.createDiv("lkm-dash-sec");
    m.createDiv("lkm-dash-h").setText(e("\u6700\u8FD1\u521B\u5EFA"));
    for (let y of i.recent)
      this._dashRow(m, y).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(y.file));
    if (i.modified.length) {
      m.createDiv("lkm-dash-h lkm-sec-gap").setText(e("\u6700\u8FD1\u4FEE\u6539"));
      for (let y of i.modified)
        this._dashRow(m, y).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(y.file));
    }
  }
  _dashRow(t, s) {
    let n = this.s, o = t.createDiv("lkm-recent-row");
    o.title = s.isIndex ? s.title + e("\uFF0C\u70B9\u51FB\u6253\u5F00\u5173\u952E\u8BCD\u89C6\u56FE") : s.title + e("\uFF0C\u70B9\u51FB\u6253\u5F00\u7B14\u8BB0");
    let i = (n.typeColors || {})[s.type];
    if (i && (o.createSpan({ cls: "lkm-recent-dot" }).style.background = i), o.createSpan({ cls: "lkm-recent-name", text: Z(s.title, 14) }), s.created && !s.mtime && o.createSpan({ cls: "lkm-recent-date", text: s.created }), s.mtime && o.createSpan({ cls: "lkm-recent-date", text: s.mtime }), !s.isIndex) {
      let r = o.createSpan({ cls: "lkm-row-jump", title: e("\u5728\u5BFC\u56FE\u4E2D\u5B9A\u4F4D") });
      try {
        ee(r, "crosshair");
      } catch {
      }
      r.addEventListener("click", (a) => {
        a.stopPropagation(), this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._dashFilters = [], this.locateFile(s.file);
      });
    }
    return o;
  }
  _renderDonut(t, s, n) {
    let l = 2 * Math.PI * 49, c = A("svg", { class: "lkm-donut-svg", viewBox: "0 0 116 116", width: 116, height: 116 });
    c.appendChild(A("circle", { cx: 58, cy: 58, r: 49, fill: "none", stroke: "var(--background-secondary)", "stroke-width": 13 }));
    let h = s.reduce((S, x) => S + x.value, 0), d = 0;
    for (let S of s) {
      let x = h ? S.value / h : 0;
      if (!x) continue;
      let C = Math.max(0, x * l - 2.5), b = A("circle", {
        cx: 58,
        cy: 58,
        r: 49,
        fill: "none",
        stroke: S.color,
        "stroke-width": 13,
        "stroke-linecap": "butt",
        "stroke-dasharray": C + " " + (l - C),
        "stroke-dashoffset": -(d * l),
        transform: "rotate(-90 58 58)",
        class: "lkm-donut-seg" + (this._isFilterActive(S.filter) ? " is-active" : "")
      });
      b.addEventListener("click", () => this._toggleDashFilter(S.filter)), c.appendChild(b), d += x;
    }
    let p = A("text", { x: 58, y: 57, class: "lkm-donut-num", "text-anchor": "middle" });
    p.textContent = String(n), c.appendChild(p);
    let _ = A("text", { x: 58, y: 71, class: "lkm-donut-cap", "text-anchor": "middle" });
    _.textContent = e("\u603B\u7B14\u8BB0"), c.appendChild(_), t.appendChild(c);
  }
  _renderBarChart(t, s, n) {
    n = n || {};
    let o = n.height || 120, i = 16, r = 18, a = Math.max(t.clientWidth || 300, 120), l = Math.max(1, ...s.map((p) => p.value)), c = a / Math.max(s.length, 1), h = o - i - r, d = A("svg", { class: "lkm-bars-svg", viewBox: "0 0 " + a + " " + o, preserveAspectRatio: "none", width: "100%", height: o });
    for (let p = 1; p <= 3; p++) {
      let _ = i + h * (1 - p / 3);
      d.appendChild(A("line", { x1: 0, y1: _, x2: a, y2: _, class: "lkm-bars-grid" }));
    }
    s.forEach((p, _) => {
      let S = p.value > 0 ? Math.max(3, h * p.value / l) : 0, x = _ * c + c * 0.22, C = c * 0.56, b = o - r - S, R = A("rect", { x, y: b, width: C, height: S, rx: Math.min(4, C / 2), class: "lkm-bar" + (this._isFilterActive(p.filter) ? " is-active" : "") });
      if (p.color && (R.style.fill = p.color), p.filter && R.addEventListener("click", () => this._toggleDashFilter(p.filter)), d.appendChild(R), p.value > 0) {
        let k = A("text", { x: x + C / 2, y: b - 4, class: "lkm-bars-val", "text-anchor": "middle" });
        k.textContent = String(p.value), d.appendChild(k);
      }
      if (!n.thinLabels || _ % 2 === 0) {
        let k = A("text", { x: x + C / 2, y: o - 5, class: "lkm-bars-lab", "text-anchor": "middle" });
        k.textContent = p.label, d.appendChild(k);
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
      let n = this._dashFilters.findIndex((o) => o.kind === t.kind && (o.value || "") === (t.value || ""));
      if (n >= 0) this._dashFilters.splice(n, 1);
      else {
        let o = s[t.kind];
        o && this._dashFilters.some((i) => i.kind === o) && (this._dashFilters = this._dashFilters.filter((i) => i.kind !== o)), this._dashFilters = this._dashFilters.filter((i) => i.kind !== "all" && i.kind !== "kw"), this._dashFilters.push(t);
      }
    }
    this.render(), this._dashFilters.length && requestAnimationFrame(() => {
      let n = this.contentEl.querySelector(".lkm-filter-sec");
      n && n.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _dashFilterLabel(t) {
    return t.kind === "all" ? e("\u5168\u90E8\u7B14\u8BB0") : t.kind === "zk" ? e("\u4E3B\u7B14\u8BB0") : t.kind === "kw" ? e("\u5173\u952E\u8BCD\u7D22\u5F15") : t.kind === "done" ? e("\u5DF2\u5B8C\u6210") : t.kind === "undone" ? e("\u672A\u5B8C\u6210") : t.kind === "orphan" ? e("\u672A\u5173\u8054") : t.kind === "type" ? e("\u7C7B\u578B\uFF1A") + t.value : t.kind === "notype" ? e("\u672A\u6807\u6CE8\u7C7B\u578B") : t.kind === "date" || t.kind === "month" ? e("\u521B\u5EFA\u4E8E ") + t.value : t.kind === "depth" ? e("\u7B2C") + t.value + e("\u5C42") : t.kind === "nodate" ? e("\u672A\u6807\u65E5\u671F") : t.kind === "todo" ? e("\u5F85\u529E\u672A\u5B8C\u6210") : e("\u7B5B\u9009");
  }
  _dashFilterGroupLabel(t) {
    let s = /* @__PURE__ */ new Set(["date", "month", "type", "depth"]), n = /* @__PURE__ */ new Map(), o = [];
    for (let r of t)
      s.has(r.kind) ? (n.has(r.kind) || n.set(r.kind, []), n.get(r.kind).push(r)) : o.push(r);
    let i = [];
    for (let [r, a] of n) {
      if (a.length === 1) {
        i.push(this._dashFilterLabel(a[0]));
        continue;
      }
      let l = e(r === "date" || r === "month" ? "\u521B\u5EFA\u4E8E " : r === "type" ? "\u7C7B\u578B\uFF1A" : "\u7B2C"), c = r === "depth" ? e(" \u5C42") : "";
      i.push(l + a.map((h) => h.value).join("\u3001") + c);
    }
    for (let r of o) i.push(this._dashFilterLabel(r));
    return i.join(" + ");
  }
  _dashFilterItems(t) {
    let s = [...this.notes.values()], n = this._depthMap();
    if (t.find((c) => c.kind === "kw")) {
      let c = this.app.vault.getAbstractFileByPath(nt(this.s.indexFolder)), h = new Set((c && c.children ? c.children : []).filter((d) => d instanceof Dt && d.extension === "md").map((d) => d.path));
      s = s.filter((d) => h.has(d.file.path));
    }
    let i = t.filter((c) => c.kind !== "kw"), r = /* @__PURE__ */ new Set(["date", "month", "type", "depth"]), a = /* @__PURE__ */ new Map(), l = [];
    for (let c of i)
      r.has(c.kind) ? (a.has(c.kind) || a.set(c.kind, []), a.get(c.kind).push(c)) : l.push(c);
    for (let [c, h] of a)
      c === "date" ? s = s.filter((d) => h.some((p) => d.date === p.value)) : c === "month" ? s = s.filter((d) => h.some((p) => (d.date || "").slice(0, 7) === p.value)) : c === "type" ? s = s.filter((d) => h.some((p) => d.type === p.value)) : c === "depth" && (s = s.filter((d) => h.some((p) => String(n.get(d.file.path) || 0) === p.value)));
    for (let c of l)
      c.kind === "zk" ? s = s.filter((h) => h.zk) : c.kind === "done" ? s = s.filter((h) => h.status) : c.kind === "undone" ? s = s.filter((h) => !h.status) : c.kind === "orphan" ? s = s.filter((h) => !this.referenced.has(h.file.path)) : c.kind === "notype" ? s = s.filter((h) => !h.type) : c.kind === "nodate" ? s = s.filter((h) => !h.date) : c.kind === "todo" && (s = s.filter((h) => h.type === e("\u5F85\u529E") && !h.status));
    return s.map((c) => ({ title: c.title, created: c.date || "", type: c.type || "", file: c.file }));
  }
  _sortDashItems(t) {
    let s = this._dashSort || "date", n = t.slice();
    return s === "name" ? n.sort((o, i) => String(o.title).localeCompare(String(i.title), "zh")) : n.sort((o, i) => String(i.created || "").localeCompare(String(o.created || ""))), n;
  }
  _ds(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  _depthMap() {
    let t = /* @__PURE__ */ new Map(), s = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!s) return t;
    let n = Tt(this.app, this.notes, s);
    return (/* @__PURE__ */ g((function o(i, r) {
      i.note.file && !t.has(i.note.file.path) && t.set(i.note.file.path, r), i.children.forEach((a) => o(a, r + 1));
    }), "walk"))(n, 1), t;
  }
  _dashSummaryMd(t) {
    let s = [];
    if (s.push(e("## \u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE\u5DE5\u4F5C\u53F0\u7EDF\u8BA1 ") + this._ds(/* @__PURE__ */ new Date())), s.push(""), s.push(e("| \u6307\u6807 | \u6570\u91CF |")), s.push("| --- | --- |"), s.push(e("| \u7B14\u8BB0\u603B\u6570 | ") + t.total + " |"), s.push(e("| \u4E3B\u7B14\u8BB0 | ") + t.zk + " |"), s.push(e("| \u5173\u952E\u8BCD\u7D22\u5F15 | ") + t.kw + " |"), s.push(e("| \u5DF2\u5B8C\u6210 | ") + t.done + " |"), s.push(e("| \u672A\u5173\u8054 | ") + t.orphan + " |"), s.push(e("| \u5F85\u529E\u672A\u5B8C\u6210 | ") + t.todo + " |"), s.push(e("| \u672A\u6807\u6CE8\u7C7B\u578B | ") + t.noType + " |"), s.push(e("| \u672A\u6807\u65E5\u671F | ") + t.noDate + " |"), s.push(""), t.byTypeOrder.length) {
      s.push(e("### \u7C7B\u578B\u5206\u5E03")), s.push(e("| \u7C7B\u578B | \u6570\u91CF | \u5360\u6BD4 |")), s.push("| --- | --- | --- |");
      for (let n of t.byTypeOrder) s.push("| " + n.name + " | " + n.count + " | " + (t.total ? Math.round(n.count / t.total * 100) : 0) + "% |");
      s.push("");
    }
    if (t.depthMax) {
      s.push(e("### \u6811\u6DF1\u5EA6\u5206\u5E03")), s.push(e("| \u5C42\u7EA7 | \u6570\u91CF |")), s.push("| --- | --- |");
      for (let n = 1; n <= t.depthMax; n++) t.depthCount.has(n) && s.push(e("| \u7B2C") + n + e("\u5C42 | ") + t.depthCount.get(n) + " |");
      s.push("");
    }
    if (t.monthly.length) {
      s.push(e("### \u8FD112\u4E2A\u6708\u521B\u5EFA")), s.push(e("| \u6708\u4EFD | \u65B0\u589E |")), s.push("| --- | --- |");
      for (let n of t.monthly) s.push("| " + n.key + " | " + n.count + " |");
      s.push("");
    }
    if (t.branches.length) {
      s.push(e("### \u5206\u652F\u5206\u5E03\uFF08\u5B8C\u6210/\u603B\u6570\uFF09"));
      for (let n of t.branches) s.push("- " + n.title + "\uFF1A" + n.done + "/" + n.total);
      s.push("");
    }
    return s.join(`
`);
  }
  _dashStats() {
    let t = [...this.notes.values()], s = t.length, n = t.filter((m) => m.zk).length, o = t.filter((m) => m.status).length, i = t.filter((m) => m.type === e("\u5F85\u529E") && !m.status).length, r = t.filter((m) => !m.date).length, a = t.filter((m) => !this.referenced.has(m.file.path)).length, l = this.s.typeColors || {}, c = /* @__PURE__ */ new Map(), h = 0;
    for (let m of t)
      m.type ? c.set(m.type, (c.get(m.type) || 0) + 1) : h++;
    let d = Object.keys(l).filter((m) => c.has(m)).map((m) => ({ name: m, color: l[m], count: c.get(m) }));
    for (let [m, y] of c) l[m] || d.push({ name: m, color: "var(--text-faint)", count: y });
    let p = this._depthMap(), _ = /* @__PURE__ */ new Map();
    for (let m of p.values()) m && _.set(m, (_.get(m) || 0) + 1);
    let S = _.size ? Math.max(..._.keys()) : 0, x = /* @__PURE__ */ new Date();
    x.setHours(0, 0, 0, 0);
    let C = [];
    for (let m = 11; m >= 0; m--) {
      let y = new Date(x.getFullYear(), x.getMonth() - m, 1);
      C.push({ key: y.getFullYear() + "-" + String(y.getMonth() + 1).padStart(2, "0"), count: 0 });
    }
    for (let m of t) {
      if (!m.date) continue;
      let y = C.find((L) => L.key === m.date.slice(0, 7));
      y && y.count++;
    }
    let b = 0, R = this.app.vault.getAbstractFileByPath(nt(this.s.indexFolder));
    R && R.children && (b = R.children.filter((m) => m instanceof Dt && m.extension === "md").length);
    let k = /* @__PURE__ */ new Map();
    for (let m of t) m.date && k.set(m.date, (k.get(m.date) || 0) + 1);
    let E = t.filter((m) => m.zk).map((m) => {
      let y = Tt(this.app, this.notes, m), L = 0, V = 0, O = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ g((function H(W) {
        if (W.note.file) {
          if (O.has(W.note.file.path)) return;
          O.add(W.note.file.path);
        }
        L++, W.note.status && V++;
        for (let Q of W.children) H(Q);
      }), "walk"))(y), { path: m.file.path, title: m.title, total: L, done: V };
    }).sort((m, y) => y.total - m.total), v = /* @__PURE__ */ g((m) => ({ title: m.title, created: m.date || "", type: m.type || "", file: m.file }), "toItem"), D = t.filter((m) => m.date).sort((m, y) => String(y.date).localeCompare(String(m.date))).slice(0, 8).map(v), N = t.slice().sort((m, y) => (y.file.stat && y.file.stat.mtime || 0) - (m.file.stat && m.file.stat.mtime || 0)).slice(0, 6).map((m) => {
      let y = v(m);
      try {
        let L = new Date(m.file.stat.mtime);
        y.mtime = String(L.getFullYear()).slice(2) + "-" + String(L.getMonth() + 1).padStart(2, "0") + "-" + String(L.getDate()).padStart(2, "0") + " " + String(L.getHours()).padStart(2, "0") + ":" + String(L.getMinutes()).padStart(2, "0");
      } catch {
      }
      return y;
    }), F = 0, T = 0;
    for (let m of t)
      for (let y of m.childLinks) {
        F++;
        let L = this.app.metadataCache.getFirstLinkpathDest(y, m.file.path);
        (!L || !this.notes.has(L.path)) && T++;
      }
    return { total: s, zk: n, done: o, todo: i, noDate: r, orphan: a, noType: h, byTypeOrder: d, depthCount: _, depthMax: S, monthly: C, kw: b, heat: k, branches: E, recent: D, modified: N, linkCount: F, deadLinks: T };
  }
};
g(ge, "LinkMindmapView");
var It = ge, ke = class extends Fe {
  constructor(t, s) {
    super(t, s), this.plugin = s;
  }
  display() {
    let { containerEl: t } = this;
    t.empty(), t.createEl("h2", { text: e("Link Mindmap \u8BBE\u7F6E") }), new P(t).setName(e("\u8BED\u8A00")).setDesc(e("\u754C\u9762\u8BED\u8A00\uFF08\u81EA\u52A8\u8DDF\u968F Obsidian \u8BBE\u7F6E\uFF09")).addDropdown((a) => {
      a.addOption("auto", e("\u81EA\u52A8") + " (Auto)"), a.addOption("zh", e("\u4E2D\u6587")), a.addOption("en", "English"), a.setValue(this.plugin.settings.language || "auto"), a.onChange(async (l) => {
        this.plugin.settings.language = l, await this.plugin.saveSettings(), this.plugin._initLang(), this.display();
      });
    }), new P(t).setName(e("\u7B14\u8BB0\u6587\u4EF6\u5939")).setDesc(e("\u5B58\u653E\u5361\u7247\u7B14\u8BB0\u7684\u76EE\u5F55")).addText((a) => a.setValue(this.plugin.settings.mainFolder).onChange(async (l) => {
      this.plugin.settings.mainFolder = l.trim(), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u5939")).setDesc(e("\u5B58\u653E\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u7684\u76EE\u5F55")).addText((a) => a.setValue(this.plugin.settings.indexFolder).onChange(async (l) => {
      this.plugin.settings.indexFolder = l.trim(), await this.plugin.saveSettings();
    })), new P(t).setName(e("\u6A21\u677F\u6587\u4EF6\u5939")).setDesc(e("\u6A21\u677F\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u65B0\u5EFA\u8282\u70B9\u65F6\u6A21\u677F\u4E0B\u62C9\u5217\u8868\u4ECE\u6B64\u6587\u4EF6\u5939\u8BFB\u53D6")).addText((a) => a.setValue(this.plugin.settings.templateFolder).onChange(async (l) => {
      this.plugin.settings.templateFolder = l.trim(), await this.plugin.saveSettings(), this.display();
    }));
    let s = (() => {
      let a = (this.plugin.settings.templateFolder || "").trim();
      if (!a) return [];
      let l = this.plugin.app.vault.getAbstractFileByPath(nt(a));
      return !l || !l.children ? [] : l.children.filter((c) => c instanceof Dt && c.extension === "md");
    })();
    new P(t).setName(e("\u9ED8\u8BA4\u6A21\u677F")).setDesc(e("\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u6A21\u677F\uFF08\u53EF\u9009\uFF09")).addDropdown((a) => {
      a.addOption("", e("\u4E0D\u9009"));
      for (let l of s) a.addOption(l.path, l.basename);
      a.setValue(this.plugin.settings.templatePath || ""), a.onChange(async (l) => {
        this.plugin.settings.templatePath = l, await this.plugin.saveSettings();
      });
    }), new P(t).setName(e("\u5B50\u8282\u70B9\u94FE\u63A5\u5B57\u6BB5")).setDesc(e("\u7236\u7B14\u8BB0\u4E2D\u5B58\u653E\u5B50\u7B14\u8BB0\u94FE\u63A5\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 children\uFF09")).addText((a) => a.setValue(this.plugin.settings.linkField).onChange(async (l) => {
      this.plugin.settings.linkField = l.trim() || "children", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u7236\u8282\u70B9\u53CD\u5411\u94FE\u63A5\u5B57\u6BB5")).setDesc(e("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u5199\u5165\u5B50\u7B14\u8BB0\u7684\u7236\u94FE\u63A5\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 parent\uFF09")).addText((a) => a.setValue(this.plugin.settings.backField).onChange(async (l) => {
      this.plugin.settings.backField = l.trim() || "parent", await this.plugin.saveSettings();
    })), new P(t).setName(e("\u4E3B\u7B14\u8BB0\u6807\u8BB0\u5B57\u6BB5")).setDesc(e("\u6807\u8BB0\u5BFC\u56FE\u4E3B\u5165\u53E3\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 main\uFF09")).addText((a) => a.setValue(this.plugin.settings.zkField).onChange(async (l) => {
      this.plugin.settings.zkField = l.trim() || "main", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u5B8C\u6210\u72B6\u6001\u5B57\u6BB5")).setDesc(e("\u6807\u8BB0\u7B14\u8BB0\u662F\u5426\u5B8C\u6210\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 status\uFF09")).addText((a) => a.setValue(this.plugin.settings.statusField).onChange(async (l) => {
      this.plugin.settings.statusField = l.trim() || "status", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u7C7B\u578B\u5B57\u6BB5")).setDesc(e("\u7B14\u8BB0\u7C7B\u578B\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 type\uFF09")).addText((a) => a.setValue(this.plugin.settings.typeField).onChange(async (l) => {
      this.plugin.settings.typeField = l.trim() || "type", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u65E5\u671F\u5B57\u6BB5")).setDesc(e("\u7B14\u8BB0\u521B\u5EFA\u65E5\u671F\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 date\uFF09")).addText((a) => a.setValue(this.plugin.settings.dateField).onChange(async (l) => {
      this.plugin.settings.dateField = l.trim() || "date", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u6807\u9898\u5B57\u6BB5")).setDesc(e("\u7B14\u8BB0\u6807\u9898\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 title\uFF09\u3002frontmatter \u4E2D\u6709\u8BE5\u5B57\u6BB5\u65F6\u8282\u70B9\u663E\u793A\u5176\u503C\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u540D\uFF1B\u91CD\u547D\u540D\u65F6\u540C\u6B65\u66F4\u65B0\u8BE5\u5B57\u6BB5")).addText((a) => a.setValue(this.plugin.settings.titleField).onChange(async (l) => {
      this.plugin.settings.titleField = l.trim() || "title", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u9ED8\u8BA4\u663E\u793A\u5C42\u6570")).setDesc(e("\u6253\u5F00\u65F6\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")).addText((a) => a.setValue(String(this.plugin.settings.defaultDepth)).onChange(async (l) => {
      this.plugin.settings.defaultDepth = Math.max(1, parseInt(l, 10) || 3), await this.plugin.saveSettings();
      for (let c of this.plugin.app.workspace.getLeavesOfType(yt))
        c.view instanceof It && (c.view.depth = this.plugin.settings.defaultDepth, c.view._expandedMem.clear());
      this.plugin.refreshViews();
    })), new P(t).setName(e("\u540D\u79F0\u6700\u5927\u5B57\u6570")).setDesc(e("\u8282\u70B9\u6807\u9898\u6700\u591A\u663E\u793A\u7684\u5B57\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7\uFF1B0 = \u663E\u793A\u5168\u90E8\u540D\u79F0")).addText((a) => a.setValue(String(this.plugin.settings.maxTitleLen)).onChange(async (l) => {
      this.plugin.settings.maxTitleLen = Math.max(0, parseInt(l, 10) || 0), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u6C34\u5E73\u95F4\u8DDD")).setDesc(e("\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09")).addText((a) => a.setValue(String(this.plugin.settings.gapX)).onChange(async (l) => {
      this.plugin.settings.gapX = Math.max(10, parseInt(l, 10) || 60), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u5782\u76F4\u95F4\u8DDD")).setDesc(e("\u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB")).addText((a) => a.setValue(String(this.plugin.settings.gapY)).onChange(async (l) => {
      this.plugin.settings.gapY = Math.max(0, parseInt(l, 10) || 8), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u8282\u70B9\u9AD8\u5EA6")).setDesc(e("\u8282\u70B9\u5361\u7247\u9AD8\u5EA6")).addText((a) => a.setValue(String(this.plugin.settings.nodeHeight)).onChange(async (l) => {
      this.plugin.settings.nodeHeight = Math.max(30, parseInt(l, 10) || 46), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u65B0\u5EFA\u65F6\u5199\u5165\u53CD\u5411\u94FE\u63A5")).setDesc(e("\u521B\u5EFA\u5B50\u8282\u70B9\u65F6\uFF0C\u5728\u5B50\u7B14\u8BB0\u91CC\u5199\u5165\u6307\u5411\u7236\u7B14\u8BB0\u7684 parent \u5B57\u6BB5\uFF08\u7EAF\u6587\u672C\u6587\u4EF6\u540D\uFF0C\u975E wikilink\uFF0C\u5173\u7CFB\u56FE\u8C31\u4E0D\u663E\u793A\u53CC\u5411\u7BAD\u5934\uFF09")).addToggle((a) => a.setValue(this.plugin.settings.autoAddBackLink).onChange(async (l) => {
      this.plugin.settings.autoAddBackLink = l, await this.plugin.saveSettings();
    })), new P(t).setName(e("\u81EA\u52A8\u5B9A\u4F4D\u5F53\u524D\u7B14\u8BB0")).setDesc(e("\u6253\u5F00\u7B14\u8BB0\u65F6\uFF0C\u5BFC\u56FE\u81EA\u52A8\u5C55\u5F00\u5176\u6240\u5728\u5206\u652F\u3001\u9009\u4E2D\u5E76\u5C45\u4E2D\u8BE5\u8282\u70B9")).addToggle((a) => a.setValue(this.plugin.settings.autoLocate).onChange(async (l) => {
      this.plugin.settings.autoLocate = l, await this.plugin.saveSettings();
    })), new P(t).setName(e("\u663E\u793A\u521B\u5EFA\u65F6\u95F4")).setDesc(e("\u4E0E\u7C7B\u578B/\u5B50\u6570\u540C\u884C\u663E\u793A\u521B\u5EFA\u65E5\u671F\uFF08\u4F18\u5148\u53D6 frontmatter \u7684 date \u5B57\u6BB5\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF09")).addToggle((a) => a.setValue(this.plugin.settings.showCreated).onChange(async (l) => {
      this.plugin.settings.showCreated = l, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u663E\u793A\u7C7B\u578B")).setDesc(e("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A type \u6587\u672C")).addToggle((a) => a.setValue(this.plugin.settings.showType).onChange(async (l) => {
      this.plugin.settings.showType = l, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u663E\u793A\u5B50\u8282\u70B9\u6570")).setDesc(e("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A\u5B50\u8282\u70B9\u6570\u91CF")).addToggle((a) => a.setValue(this.plugin.settings.showChildCount).onChange(async (l) => {
      this.plugin.settings.showChildCount = l, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u663E\u793A\u6253\u5F00\u56FE\u6807")).setDesc(e("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \u270E \u6253\u5F00\u7B14\u8BB0\u6309\u94AE")).addToggle((a) => a.setValue(this.plugin.settings.showOpenIcon).onChange(async (l) => {
      this.plugin.settings.showOpenIcon = l, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u663E\u793A\u65B0\u589E\u56FE\u6807")).setDesc(e("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \uFF0B \u65B0\u589E\u5B50\u8282\u70B9\u6309\u94AE")).addToggle((a) => a.setValue(this.plugin.settings.showAddIcon).onChange(async (l) => {
      this.plugin.settings.showAddIcon = l, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u66F2\u7EBF\u8FDE\u63A5")).setDesc(e("\u8282\u70B9\u4E4B\u95F4\u7528\u66F2\u7EBF\u8FD8\u662F\u76F4\u7EBF")).addToggle((a) => a.setValue(this.plugin.settings.curve).onChange(async (l) => {
      this.plugin.settings.curve = l, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u5E03\u5C40\u65B9\u5411")).setDesc(e("\u6A2A\u5411\uFF1A\u4ECE\u5DE6\u5230\u53F3\u5C55\u5F00\u5B50\u8282\u70B9\uFF1B\u7EB5\u5411\uFF1A\u4ECE\u4E0A\u5230\u4E0B\u5C55\u5F00\u5B50\u8282\u70B9")).addDropdown((a) => {
      a.addOption("h", e("\u6A2A\u5411\uFF08\u5DE6\u2192\u53F3\uFF09")), a.addOption("v", e("\u7EB5\u5411\uFF08\u4E0A\u2192\u4E0B\uFF09")), a.setValue(this.plugin.settings.layoutDir || "h"), a.onChange(async (l) => {
        this.plugin.settings.layoutDir = l, await this.plugin.saveSettings(), this.plugin.refreshViews();
      });
    }), new P(t).setName(e("\u4E3B\u8272")).setDesc(e("\u666E\u901A\u8282\u70B9\u989C\u8272")).addColorPicker((a) => a.setValue(this.plugin.settings.accent).onChange(async (l) => {
      this.plugin.settings.accent = l, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u4E3B\u7B14\u8BB0\u989C\u8272")).setDesc(e("main: true \u8282\u70B9\u989C\u8272")).addColorPicker((a) => a.setValue(this.plugin.settings.mainColor).onChange(async (l) => {
      this.plugin.settings.mainColor = l, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u91CD\u590D\u8282\u70B9\u989C\u8272")).setDesc(e("\u540C\u4E00\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\u65F6\uFF0C\u5176\u72B6\u6001\u5706\u70B9\u989C\u8272")).addColorPicker((a) => a.setValue(this.plugin.settings.multiColor).onChange(async (l) => {
      this.plugin.settings.multiColor = l, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(t).setName(e("\u9009\u4E2D\u989C\u8272")).setDesc(e("\u5355\u51FB\u9009\u4E2D\u7684\u8282\u70B9\u9AD8\u4EAE\u989C\u8272")).addColorPicker((a) => a.setValue(this.plugin.settings.selectedColor).onChange(async (l) => {
      this.plugin.settings.selectedColor = l, await this.plugin.saveSettings(), this.plugin.applyThemeVars();
    })), new P(t).setName(e("\u5B8C\u6210\u8272")).setDesc(e("status \u52FE\u9009\u540E\u8282\u70B9\u7684\u6807\u8BB0\u8272\uFF08\u9ED8\u8BA4\u7EFF\u8272\uFF09")).addColorPicker((a) => a.setValue(this.plugin.settings.doneColor).onChange(async (l) => {
      this.plugin.settings.doneColor = l, await this.plugin.saveSettings(), this.plugin.applyThemeVars();
    }));
    let n = this.plugin.settings.typeColors || (this.plugin.settings.typeColors = {});
    new P(t).setName(e("\u9ED8\u8BA4\u7C7B\u578B")).setDesc(e("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u7C7B\u578B\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((a) => {
      a.addOption("", e("\u4E0D\u9009"));
      for (let l of Object.keys(n)) a.addOption(l, l);
      a.setValue(n[this.plugin.settings.defaultType] !== void 0 ? this.plugin.settings.defaultType : ""), a.onChange(async (l) => {
        this.plugin.settings.defaultType = l, await this.plugin.saveSettings();
      });
    });
    let o = "", i = /* @__PURE__ */ g(async () => {
      let a = o.trim();
      if (!a) {
        new f(e("\u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0"));
        return;
      }
      if (n[a] !== void 0) {
        new f(e("\u7C7B\u578B\u5DF2\u5B58\u5728\uFF1A") + a);
        return;
      }
      let l = ["#4ba3e5", "#e5534b", "#3fa66a", "#e5a44b", "#b07cff", "#8a6ae5", "#d978a8", "#5aa9a2"];
      n[a] = l[Object.keys(n).length % l.length], o = "", await this.plugin.saveSettings(), this.display();
    }, "addType");
    new P(t).setName(e("\u6DFB\u52A0\u7C7B\u578B")).setDesc(e("\u8F93\u5165\u540D\u79F0\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((a) => {
      a.setPlaceholder(e("\u7C7B\u578B\u540D\u79F0\uFF0C\u5982\uFF1A\u5F85\u529E")), a.onChange((l) => o = l), a.inputEl.addEventListener("keydown", (l) => {
        l.key === "Enter" && (l.preventDefault(), i());
      });
    }).addButton((a) => a.setButtonText(e("\u6DFB\u52A0")).setCta().onClick(i));
    let r = Object.keys(n);
    for (let a = 0; a < r.length; a++) {
      let l = r[a], c = a;
      new P(t).setName(l).setDesc(e("type \u4E3A\u300C") + l + e("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((h) => {
        h.setValue(String(n[l])), h.onChange(async (d) => {
          d && d !== n[l] && (n[l] = d, await this.plugin.saveSettings(), this.plugin.refreshViews());
        });
      }).addButton((h) => h.setIcon("chevron-up").setTooltip(e("\u4E0A\u79FB")).setDisabled(c === 0).onClick(async () => {
        let d = Object.entries(n);
        [d[c - 1], d[c]] = [d[c], d[c - 1]], this.plugin.settings.typeColors = Object.fromEntries(d), await this.plugin.saveSettings(), this.display();
      })).addButton((h) => h.setIcon("chevron-down").setTooltip(e("\u4E0B\u79FB")).setDisabled(c === r.length - 1).onClick(async () => {
        let d = Object.entries(n);
        [d[c + 1], d[c]] = [d[c], d[c + 1]], this.plugin.settings.typeColors = Object.fromEntries(d), await this.plugin.saveSettings(), this.display();
      })).addButton((h) => h.setIcon("trash").setTooltip(e("\u5220\u9664\u7C7B\u578B\uFF1A") + l).onClick(async () => {
        delete n[l], this.plugin.settings.defaultType === l && (this.plugin.settings.defaultType = ""), await this.plugin.saveSettings(), this.display();
      }));
    }
    t.createEl("h3", { text: e("\u914D\u7F6E\u5BFC\u5165/\u5BFC\u51FA") }), new P(t).setName(e("\u5BFC\u51FA\u914D\u7F6E")).setDesc(e("\u5C06\u5F53\u524D\u6240\u6709\u8BBE\u7F6E\u5BFC\u51FA\u4E3A JSON \u6587\u4EF6")).addButton((a) => a.setButtonText(e("\u5BFC\u51FA")).setCta().onClick(async () => {
      let l = JSON.stringify(this.plugin.settings, null, 2), h = "link-mindmap-config-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".json";
      try {
        await this.plugin.app.vault.create(h, l), new f(e("\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + h);
      } catch (d) {
        new f(e("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
      }
    })), new P(t).setName(e("\u5BFC\u5165\u914D\u7F6E")).setDesc(e("\u4ECE JSON \u6587\u4EF6\u5BFC\u5165\u8BBE\u7F6E\uFF08\u4F1A\u8986\u76D6\u5F53\u524D\u914D\u7F6E\uFF09")).addButton((a) => a.setButtonText(e("\u9009\u62E9\u6587\u4EF6")).onClick(() => {
      let l = document.createElement("input");
      l.type = "file", l.accept = ".json", l.onchange = async () => {
        let c = l.files[0];
        if (c)
          try {
            let h = await c.text(), d = JSON.parse(h);
            this.plugin.settings = Object.assign(this.plugin.settings, d), await this.plugin.saveSettings(), this.plugin.applyThemeVars(), this.plugin.refreshViews(), this.display(), new f(e("\u914D\u7F6E\u5DF2\u5BFC\u5165"));
          } catch (h) {
            new f(e("\u5BFC\u5165\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] import config:", h);
          }
      }, l.click();
    })), new P(t).setName(e("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E")).setDesc(e("\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\uFF08\u4E0D\u4F1A\u5220\u9664\u7B14\u8BB0\uFF09")).addButton((a) => a.setButtonText(e("\u6062\u590D\u9ED8\u8BA4")).onClick(() => {
      new Xt(this.app, e("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"), e("\u786E\u5B9A\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u5417\uFF1F"), async () => {
        this.plugin.settings = JSON.parse(JSON.stringify(oe)), await this.plugin.saveSettings(), this.plugin.applyThemeVars(), this.plugin.refreshViews(), this.display(), new f(e("\u5DF2\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"));
      }).open();
    }));
  }
};
g(ke, "LinkMindmapSettingTab");
var Me = ke, we = class extends Ce {
  async onload() {
    await this.loadSettings(), this._initLang(), this.registerView(yt, (t) => new It(t, this)), this.addRibbonIcon("git-merge", e("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), () => this.activateView()), this.addCommand({ id: "open-link-mindmap", name: e("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), callback: /* @__PURE__ */ g(() => this.activateView(), "callback") }), this.addCommand({ id: "check-links", name: e("\u68C0\u67E5\u94FE\u63A5\uFF08\u5931\u6548/\u672A\u5173\u8054\uFF09"), callback: /* @__PURE__ */ g(() => this._checkLinks(), "callback") }), this.addCommand({ id: "fix-yaml-quotes", name: e("\u4FEE\u590D frontmatter \u5F15\u53F7\u95EE\u9898"), callback: /* @__PURE__ */ g(() => this._fixYamlQuotes(), "callback") }), this.addSettingTab(new Me(this.app, this)), this.applyThemeVars(), this.registerEvent(this.app.vault.on("create", (t) => this._onVaultChange(t))), this.registerEvent(this.app.vault.on("modify", (t) => this._onVaultChange(t))), this.registerEvent(this.app.vault.on("delete", (t) => this._onVaultChange(t))), this.registerEvent(this.app.vault.on("rename", (t, s) => this._onVaultChange(t, s))), this.registerEvent(this.app.metadataCache.on("changed", (t) => this._onVaultChange(t))), this.registerEvent(this.app.metadataCache.on("resolved", () => this._rebuildAllViews())), this.registerEvent(this.app.workspace.on("file-open", (t) => {
      for (let s of this.app.workspace.getLeavesOfType(yt))
        s.view instanceof It && s.view.locateFile(t);
    }));
  }
  onunload() {
    clearTimeout(this._refreshTimer), this.app.workspace.detachLeavesOfType(yt);
  }
  _onVaultChange(t, s) {
    let n = nt(this.settings.mainFolder || ""), o = /* @__PURE__ */ g((r) => !!r && (r === n || r.startsWith(n + "/")), "inFolder"), i = t && t.path;
    t && t.extension && t.extension !== "md" && !o(s) || !o(i) && !o(s) || (clearTimeout(this._refreshTimer), this._refreshTimer = setTimeout(() => this._rebuildAllViews(), 400));
  }
  _rebuildAllViews() {
    for (let t of this.app.workspace.getLeavesOfType(yt))
      t.view instanceof It && t.view.rebuild(!0);
  }
  _checkLinks() {
    let { map: t, referenced: s } = qt(this.app, this.settings), n = [...t.values()], o = 0, i = [];
    for (let l of n)
      for (let c of l.childLinks) {
        let h = this.app.metadataCache.getFirstLinkpathDest(c, l.file.path);
        (!h || !t.has(h.path)) && (o++, i.length < 6 && i.push(c + "\uFF08" + l.title + "\uFF09"));
      }
    let r = n.filter((l) => !s.has(l.file.path) && !l.zk), a = e("\u5171 ") + n.length + e(" \u7BC7\u7B14\u8BB0");
    a += o ? e("\uFF0C\u5931\u6548\u94FE\u63A5 ") + o + "\uFF1A" + i.join("\uFF1B") + (o > 6 ? "\u2026" : "") : e("\uFF0C\u94FE\u63A5\u5168\u90E8\u6709\u6548 \u2713"), a += r.length ? e("\uFF1B\u672A\u5173\u8054\u7B14\u8BB0\uFF08\u65E0\u7236\u5F15\u7528\u4E14\u975E\u4E3B\u7B14\u8BB0\uFF09") + r.length + "\uFF1A" + r.slice(0, 6).map((l) => l.title).join("\u3001") + (r.length > 6 ? "\u2026" : "") : e("\uFF1B\u65E0\u672A\u5173\u8054\u7B14\u8BB0 \u2713"), new f(a, 15e3);
  }
  async _fixYamlQuotes() {
    let t = this.settings, s = t.typeField || "type", n = nt(t.mainFolder || ""), o = Yt(this.app, n), i = 0, r = [];
    for (let l of o) {
      let c = await this.app.vault.read(l), h = c.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
      if (!h) continue;
      let d = h[1], p = !1, _ = [];
      for (let S of d.split(`
`)) {
        let x = S.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
        if (x) {
          let C = x[1], b = x[2].trim();
          if (b.startsWith('""') && b.endsWith('""') && b.length >= 4 || b.startsWith("''") && b.endsWith("''") && b.length >= 4) {
            b = b.slice(1, -1), _.push(C + ": " + b), p = !0;
            continue;
          }
          if (C === s && (b.startsWith('"') && b.endsWith('"') && b.length >= 2 && b.slice(1, -1).includes('"') || b.startsWith("'") && b.endsWith("'") && b.length >= 2 && b.slice(1, -1).includes("'"))) {
            b = Ht(b), _.push(C + ': "' + b + '"'), p = !0;
            continue;
          }
        }
        _.push(S);
      }
      if (p) {
        let x = `---
` + _.join(`
`) + `
---` + c.slice(h[0].length);
        await this.app.vault.modify(l, x), i++, r.length < 10 && r.push(l.basename);
      }
    }
    let a = i ? e("\u5DF2\u4FEE\u590D ") + i + e(" \u4E2A\u6587\u4EF6\u7684 frontmatter \u5F15\u53F7\u95EE\u9898") + (r.length < i ? "" : "\uFF1A" + r.join("\u3001")) : e("\u672A\u53D1\u73B0\u9700\u8981\u4FEE\u590D\u7684\u5F15\u53F7\u95EE\u9898 \u2713");
    new f(a, 15e3);
  }
  applyThemeVars() {
    let t = document.body;
    t.style.setProperty("--lkm-accent", this.settings.accent), t.style.setProperty("--lkm-main", this.settings.mainColor), t.style.setProperty("--lkm-multi", this.settings.multiColor), t.style.setProperty("--lkm-done", this.settings.doneColor), t.style.setProperty("--lkm-selected", this.settings.selectedColor);
  }
  async activateView() {
    let { workspace: t } = this.app, s = t.getLeavesOfType(yt)[0];
    s || (s = t.getLeaf(!0), await s.setViewState({ type: yt, active: !0 })), t.revealLeaf(s);
  }
  refreshViews() {
    this.applyThemeVars();
    for (let t of this.app.workspace.getLeavesOfType(yt))
      t.view instanceof It && t.view.render();
  }
  async loadSettings() {
    this.settings = Object.assign({}, oe, await this.loadData());
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
g(we, "LinkMindmapPlugin");
var Le = we;
module.exports = Le;
