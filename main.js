"use strict";
var vt = (C, e) => () => {
  try {
    return e || C((e = { exports: {} }).exports, e), e.exports;
  } catch (s) {
    throw e = 0, s;
  }
};

// ../i18n.js
var st = vt((At, tt) => {
  "use strict";
  var et = {
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
      \u8FD1\u4E00\u6708: "Past month"
    }
  }, Oe = "zh";
  function bt(C) {
    Oe = C || "zh";
  }
  function xt() {
    return Oe;
  }
  function Ct(C, e) {
    let s = et[Oe] && et[Oe][C] || C;
    if (e) for (let i in e) s = s.split("{" + i + "}").join(e[i]);
    return s;
  }
  tt.exports = { t: Ct, setLang: bt, getLang: xt };
});

// ../src.js
var v = (C, e) => C, St = require("obsidian"), {
  Plugin: Tt,
  ItemView: Ft,
  Notice: k,
  Modal: Ce,
  Setting: P,
  PluginSettingTab: Et,
  TFile: xe,
  TFolder: Vt,
  normalizePath: J,
  FuzzySuggestModal: lt,
  setIcon: it,
  Menu: Ye,
  MarkdownRenderer: Dt,
  Component: Mt
} = St, { t, setLang: nt } = st(), ke = "link-mindmap-view", Lt = "http://www.w3.org/2000/svg", ot = {
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
function Pe(C) {
  return C == null ? [] : Array.isArray(C) ? C.slice() : [C];
}
v(Pe, "toArr");
function we(C) {
  return String(C ?? "").replace(/^\[\[/, "").replace(/\]\]$/, "").split("|")[0].split("#")[0].split("^")[0].trim();
}
v(we, "cleanLink");
function qe(C) {
  let e = [], s = /* @__PURE__ */ v((i) => {
    if (i == null) return;
    let n = String(i), l = /\[\[([^\[\]]+?)\]\]/g, o, a = !1;
    for (; (o = l.exec(n)) !== null; )
      a = !0, e.push(we(o[1]));
    if (!a) {
      let r = we(n.replace(/^["']+/, "").replace(/["']+$/, ""));
      r && e.push(r);
    }
  }, "push");
  return Array.isArray(C) ? C.forEach(s) : s(C), e;
}
v(qe, "extractLinks");
function q(C, e) {
  return C = String(C ?? ""), e > 0 && C.length > e ? C.slice(0, e - 1) + "\u2026" : C;
}
v(q, "truncate");
function rt(C, e) {
  let s = 0;
  for (let i of String(C ?? ""))
    s += /[一-鿿　-〿＀-￯]/.test(i) ? e : e * 0.55;
  return s;
}
v(rt, "estWidth");
var Ke = null, He = /* @__PURE__ */ new Map();
function Ue(C, e, s) {
  let i = C + "|" + e + "|" + (s ? 1 : 0), n = He.get(i);
  if (n !== void 0) return n;
  let l;
  try {
    Ke || (Ke = document.createElement("canvas").getContext("2d")), Ke.font = (s ? "600 " : "") + e + 'px Inter, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif', l = Ke.measureText(String(C ?? "")).width;
  } catch {
    l = rt(C, e);
  }
  return He.size > 2e3 && He.clear(), He.set(i, l), l;
}
v(Ue, "measureTextWidth");
function me(C) {
  return String(C).replace(/[\\/:*?"<>|#^\[\]]/g, "-").trim() || t("\u672A\u547D\u540D");
}
v(me, "safeFileName");
function Ze(C) {
  let e = String(C ?? "").replace(/^﻿/, "").replace(/\r\n/g, `
`).replace(/^\n+/, ""), s = e.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!s) return { fields: [], body: e };
  let i = [];
  for (let n of s[1].split(`
`)) {
    let l = n.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    l && i.push([l[1], l[2].trim()]);
  }
  return { fields: i, body: e.slice(s[0].length) };
}
v(Ze, "splitFrontmatter");
function Ae(C) {
  return C = String(C ?? "").trim(), C.length >= 2 && (C.charAt(0) === '"' && C.charAt(C.length - 1) === '"' || C.charAt(0) === "'" && C.charAt(C.length - 1) === "'") ? C.slice(1, -1) : C;
}
v(Ae, "stripYamlQuotes");
function V(C, e) {
  let s = document.createElementNS(Lt, C);
  if (e) for (let i in e) s.setAttribute(i, e[i]);
  return s;
}
v(V, "svgEl");
function ct(C, e, s) {
  let i = C && (C[s || "date"] != null ? C[s || "date"] : "");
  if (i) {
    let n = String(i).match(/(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/);
    if (n) return n[1] + "-" + String(n[2]).padStart(2, "0") + "-" + String(n[3]).padStart(2, "0");
  }
  try {
    let n = e.stat;
    if (n && n.ctime) {
      let l = new Date(n.ctime);
      return l.getFullYear() + "-" + String(l.getMonth() + 1).padStart(2, "0") + "-" + String(l.getDate()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
v(ct, "createdOf");
function ht(C) {
  try {
    let e = C.stat;
    if (e && e.ctime) {
      let s = new Date(e.ctime);
      return s.getFullYear() + "-" + String(s.getMonth() + 1).padStart(2, "0") + "-" + String(s.getDate()).padStart(2, "0") + " " + String(s.getHours()).padStart(2, "0") + ":" + String(s.getMinutes()).padStart(2, "0") + ":" + String(s.getSeconds()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
v(ht, "fileCtime");
function Ve(C, e) {
  let s = J(e || ""), i = [];
  for (let n of C.vault.getMarkdownFiles())
    s && n.path !== s && !n.path.startsWith(s + "/") || i.push(n);
  return i;
}
v(Ve, "notesInFolder");
function dt(C, e) {
  let s = Ve(C, e.mainFolder);
  if (!s.length) return !0;
  for (let i of s)
    if ((C.metadataCache.getFileCache(i) || {}).frontmatter) return !0;
  return !1;
}
v(dt, "metadataReady");
function je(C, e) {
  let s = e.linkField || "children", i = e.backField || "parent", n = e.zkField || "main", l = e.statusField || "status", o = e.typeField || "type", a = e.dateField || "date", r = e.titleField || "title", c = /* @__PURE__ */ new Map();
  for (let d of Ve(C, e.mainFolder)) {
    let p = (C.metadataCache.getFileCache(d) || {}).frontmatter || {};
    c.set(d.path, {
      file: d,
      title: p[r] ? String(p[r]) : d.basename,
      zk: p[n] === !0 || String(p[n]) === "true",
      status: p[l] === !0 || String(p[l]) === "true",
      type: p[o] != null ? String(p[o]).trim() : "",
      date: ct(p, d, a),
      ctime: ht(d),
      childLinks: qe(p[s]),
      parentLinks: qe(p[i])
    });
  }
  let h = /* @__PURE__ */ new Set();
  for (let d of c.values())
    for (let p of d.childLinks) {
      let f = C.metadataCache.getFirstLinkpathDest(p, d.file.path);
      f && c.has(f.path) && h.add(f.path);
    }
  return { map: c, referenced: h };
}
v(je, "collectNotes");
function Je(C, e, s, i) {
  let n = i === "child" ? s.childLinks : s.parentLinks, l = [];
  for (let o of n) {
    let a = C.metadataCache.getFirstLinkpathDest(o, s.file.path);
    a && e.has(a.path) && l.push(e.get(a.path));
  }
  return l;
}
v(Je, "resolveLinks");
function Ie(C, e, s) {
  let i = /* @__PURE__ */ new Set([s.file.path]), n = /* @__PURE__ */ v((a, r) => {
    let c = {
      note: a,
      parent: r || null,
      children: [],
      expanded: !1,
      isAlias: !1,
      key: (r ? r.key + ">" : ">") + a.file.path
    };
    for (let h of a.childLinks) {
      let d = C.metadataCache.getFirstLinkpathDest(h, a.file.path);
      if (!d) continue;
      let p = e.get(d.path);
      !p || i.has(d.path) || (i.add(d.path), c.children.push(n(p, c)), i.delete(d.path));
    }
    return c;
  }, "mk"), l = n(s, null), o = /* @__PURE__ */ new Map();
  (/* @__PURE__ */ v((function a(r) {
    if (r.note.file) {
      let c = r.note.file.path;
      o.has(c) || o.set(c, []), o.get(c).push(r);
    }
    r.children.forEach(a);
  }), "collect"))(l);
  for (let [a, r] of o) {
    if (r.length < 2) continue;
    let c = e.get(a), h = new Set(c ? Je(C, e, c, "parent").map((p) => p.file.path) : []), d = -1;
    for (let p = 0; p < r.length; p++) {
      let f = r[p].parent && r[p].parent.note.file ? r[p].parent.note.file.path : null;
      if (f && h.has(f)) {
        d = p;
        break;
      }
    }
    d < 0 && (d = 0), r.forEach((p, f) => {
      p.isAlias = f !== d;
    });
  }
  return l;
}
v(Ie, "buildTree");
function $e(C, e) {
  let s = [[C, 1]];
  for (; s.length; ) {
    let [i, n] = s.pop();
    i.expanded = n < e && i.children.length > 0;
    for (let l of i.children) s.push([l, n + 1]);
  }
}
v($e, "applyDepth");
function Re(C, e) {
  let s = [], i = [], n = e.layoutDir === "v";
  return (/* @__PURE__ */ v((function l(o) {
    if (!o._w) {
      let r = (1 + (e.showOpenIcon !== !1 ? 1 : 0) + (e.showAddIcon !== !1 ? 1 : 0)) * 24 + 12, c = o.note.title, h = e.maxTitleLen > 0 ? q(c, e.maxTitleLen) : c, d = Ue(h, 13, !0), p = !o.note.file, f = e.showCreated && !p && o.note.date ? o.note.date : "", g = e.showType && !p && o.note.type ? o.note.type : "", _ = e.showChildCount && !p && o.children.length ? t("\u5B50 ") + o.children.length : "", x = [g, _, f].filter(Boolean).join(" \xB7 "), S = Ue(x, 11, !1);
      o._w = Math.max(110, 16 + Math.max(d, S) + r), o._shown = h;
    }
    let a = o.expanded ? o.children : [];
    if (!a.length) {
      o._h = e.nodeHeight, n && (o._subW = o._w);
      return;
    }
    if (n) {
      let r = 0;
      a.forEach((c, h) => {
        l(c), r += (c._subW || c._w) + (h ? e.gapY : 0);
      }), o._h = e.nodeHeight, o._subW = Math.max(o._w, r);
    } else {
      let r = 0;
      a.forEach((c, h) => {
        l(c), r += c._h + (h ? e.gapY : 0);
      }), o._h = Math.max(e.nodeHeight, r);
    }
  }), "measure"))(C), (/* @__PURE__ */ v((function l(o, a, r) {
    o._x = a, o._y = r + o._h / 2, s.push(o);
    let c = o.expanded ? o.children : [];
    if (n) {
      let h = 0;
      c.forEach((f, g) => {
        h += (f._subW || f._w) + (g ? e.gapY : 0);
      });
      let d = a + o._w / 2 - h / 2, p = r + e.nodeHeight + e.gapX;
      for (let f of c) {
        let g = f._subW || f._w;
        l(f, d + (g - f._w) / 2, p), i.push([o, f]), d += g + e.gapY;
      }
    } else {
      let h = r;
      for (let d of c)
        l(d, a + o._w + e.gapX, h), i.push([o, d]), h += d._h + e.gapY;
    }
  }), "place"))(C, 0, 0), { nodes: s, edges: i };
}
v(Re, "layoutTree");
async function Be(C, e, s, i) {
  await C.fileManager.processFrontMatter(e, (n) => {
    let l = Pe(n[s]);
    l.some((a) => we(a) === i) || l.push("[[" + i + "]]"), n[s] = l;
  });
}
v(Be, "addLink");
async function ge(C, e, s, i) {
  let n = !1;
  return await C.fileManager.processFrontMatter(e, (l) => {
    let o = Pe(l[s]), a = o.filter((r) => {
      let c = C.metadataCache.getFirstLinkpathDest(we(r), e.path);
      return !(c && c.path === i);
    });
    a.length !== o.length && (n = !0), a.length ? l[s] = a : delete l[s];
  }), n;
}
v(ge, "removeLinkByPath");
var pt = class extends lt {
  constructor(e, s, i, n) {
    super(e), this.items = s, this.onChoose = i, this.setPlaceholder(n || t("\u641C\u7D22\u2026"));
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
v(pt, "PickModal");
var Me = pt, ut = class extends Ce {
  constructor(e, s, i, n, l) {
    if (super(e), this.items = s, this.onChoose = i, this.selected = /* @__PURE__ */ new Map(), this.searchVal = "", this.typeFilter = "", this.mainFilter = "", this.linkFilter = "", this.availableTypes = l || [], n && n.length) {
      let o = new Map(s.map((a) => [a.path, a.label]));
      for (let a of n)
        o.has(a) && this.selected.set(a, o.get(a));
    }
  }
  onOpen() {
    let { contentEl: e } = this;
    e.addClass("lkm-multipick");
    let s = /* @__PURE__ */ v((x) => {
      x.target.tagName === "SELECT" && x.stopPropagation();
    }, "guardSelect");
    e.addEventListener("pointerdown", s, !0), e.addEventListener("mousedown", s, !0), e.createEl("h3", { text: t("\u591A\u9009\u7B14\u8BB0\u663E\u793A\u5BFC\u56FE") }), e.createEl("p", { text: t("\u641C\u7D22\u5E76\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\uFF0C\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A\uFF08\u65E0\u9700\u5173\u8054\uFF09"), cls: "lkm-modal-sub" });
    let i = new Set(this.availableTypes);
    for (let x of this.items) x.type && i.add(x.type);
    let n = [...i], l = e.createDiv("lkm-multipick-filter"), o = l.createEl("input", { type: "text", placeholder: t("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    o.addClass("lkm-multipick-input");
    let a = /* @__PURE__ */ v((x) => {
      let S = /* @__PURE__ */ v((L) => L.stopPropagation(), "stop");
      x.addEventListener("mousedown", S), x.addEventListener("pointerdown", S), x.addEventListener("touchstart", S, { passive: !0 }), x.addEventListener("touchend", S, { passive: !0 }), x.addEventListener("click", S);
    }, "stopModalSwallow");
    if (n.length) {
      let x = l.createEl("select", { cls: "lkm-multipick-select" });
      x.createEl("option", { value: "", text: t("\u7C7B\u578B") }), x.createEl("option", { value: "__none__", text: t("\u65E0\u7C7B\u578B") });
      for (let S of n) x.createEl("option", { value: S, text: S });
      a(x), x.addEventListener("change", () => {
        this.typeFilter = x.value, g();
      });
    }
    let r = l.createEl("select", { cls: "lkm-multipick-select" });
    r.createEl("option", { value: "", text: t("\u5168\u90E8") }), r.createEl("option", { value: "1", text: t("\u4E3B\u7B14\u8BB0") }), r.createEl("option", { value: "0", text: t("\u975E\u4E3B\u7B14\u8BB0") }), a(r), r.addEventListener("change", () => {
      this.mainFilter = r.value, g();
    });
    let c = l.createEl("select", { cls: "lkm-multipick-select" });
    c.createEl("option", { value: "", text: t("\u5173\u8054") }), c.createEl("option", { value: "orphan", text: t("\u672A\u5173\u8054") }), c.createEl("option", { value: "linked", text: t("\u5DF2\u5173\u8054") }), a(c), c.addEventListener("change", () => {
      this.linkFilter = c.value, g();
    });
    let h = e.createDiv("lkm-multipick-list"), d = e.createDiv("lkm-multipick-sel"), p = null, f = /* @__PURE__ */ v(() => {
      let x = this.searchVal.toLowerCase(), S = this.typeFilter, L = [];
      for (let I of this.items)
        x && !I.label.toLowerCase().includes(x) || S && S === "__none__" && I.type || S && S !== "__none__" && I.type !== S || this.mainFilter === "1" && !I.isMain || this.mainFilter === "0" && I.isMain || this.linkFilter === "orphan" && !I.orphan || this.linkFilter === "linked" && I.orphan || L.push(I);
      return L;
    }, "getFiltered"), g = /* @__PURE__ */ v(() => {
      h.empty();
      let x = f(), S = 0, L = 100;
      for (let I = 0; I < x.length && S < L; I++) {
        let b = x[I], z = h.createDiv("lkm-multipick-row");
        this.selected.has(b.path) && z.classList.add("is-selected"), z.createSpan({ text: b.label });
        let D = [];
        b.isMain && D.push(t("\u4E3B\u7B14\u8BB0")), b.type && D.push(b.type), D.length && z.createSpan({ text: " \xB7 " + D.join(" \xB7 "), cls: "lkm-multipick-type" }), z.addEventListener("click", () => {
          this.selected.has(b.path) ? this.selected.delete(b.path) : this.selected.set(b.path, b.label), z.classList.toggle("is-selected"), d.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0"));
        }), S++;
      }
      S === 0 ? h.createEl("p", { text: t("\u65E0\u5339\u914D\u7ED3\u679C"), cls: "lkm-modal-sub" }) : S === L && h.createEl("p", { text: t("\u4EC5\u663E\u793A\u524D ") + L + t(" \u6761\uFF0C\u8BF7\u641C\u7D22\u7F29\u5C0F\u8303\u56F4"), cls: "lkm-modal-sub" });
    }, "renderList");
    o.addEventListener("input", () => {
      this.searchVal = o.value, p && clearTimeout(p), p = setTimeout(g, 150);
    });
    let _ = e.createDiv("lkm-multipick-btns");
    new P(_).addButton((x) => x.setButtonText(t("\u5168\u9009\u5F53\u524D")).onClick(() => {
      for (let S of f()) this.selected.set(S.path, S.label);
      g(), d.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0"));
    })).addButton((x) => x.setButtonText(t("\u663E\u793A\u5BFC\u56FE")).setCta().onClick(() => {
      if (!this.selected.size) {
        new k(t("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      this.close(), this.onChoose([...this.selected.keys()]);
    })).addButton((x) => x.setButtonText(t("\u6E05\u9664\u6240\u6709")).onClick(() => {
      this.selected.clear(), g(), d.setText(t("\u5DF2\u9009 0 \u7BC7\u7B14\u8BB0"));
    })).addButton((x) => x.setButtonText(t("\u53D6\u6D88")).onClick(() => this.close())), d.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0")), g(), o.focus();
  }
  onClose() {
    this.contentEl.empty();
  }
};
v(ut, "MultiPickModal");
var Pt = ut, ft = class extends Ce {
  constructor(e, s, i) {
    super(e), this.parentLabel = s, this.opts = i || {}, this.onSubmit = this.opts.onSubmit || (() => {
    });
  }
  onOpen() {
    let { contentEl: e } = this, s = this.opts;
    e.createEl("h3", { text: s.standalone ? t("\u65B0\u5EFA\u8282\u70B9") : t("\u65B0\u5EFA\u5B50\u8282\u70B9") }), s.standalone || e.createEl("p", { text: t("\u7236\u8282\u70B9\uFF1A") + this.parentLabel, cls: "lkm-modal-sub" });
    let i = "", n = s.defaultType || "", l = s.defaultTemplate || "", o = !1;
    new P(e).setName(t("\u6807\u9898")).addText((c) => {
      c.onChange((h) => i = h), c.inputEl.focus(), c.inputEl.addEventListener("keydown", (h) => {
        h.key === "Enter" && (h.preventDefault(), r());
      });
    }), new P(e).setName(t("\u7C7B\u578B")).setDesc(t("\u5199\u5165\u7B14\u8BB0\u7684 type \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((c) => {
      c.addOption("", t("\u4E0D\u9009")), (s.types || []).forEach((h) => c.addOption(h, h)), c.setValue(n), c.onChange((h) => {
        n = h;
        let d = s.typeTemplates && s.typeTemplates[h];
        if (d && a) {
          let p = (s.templates || []).find((f) => f.path === J(d));
          p && (l = p.path, a.setValue(l));
        }
      });
    });
    let a = null;
    new P(e).setName(t("\u6A21\u677F")).setDesc(t("\u4E0D\u540C\u7C7B\u578B\u53EF\u4F7F\u7528\u4E0D\u540C\u6A21\u677F")).addDropdown((c) => {
      a = c, (s.templates || []).forEach((h) => c.addOption(h.path, h.name)), c.setValue(l), c.onChange((h) => l = h);
    }), new P(e).setName(t("\u4E3B\u7B14\u8BB0")).setDesc(t("\u6807\u8BB0\u4E3A\u5BFC\u56FE\u4E3B\u5165\u53E3\uFF08") + (s.zkField || "main") + ": true\uFF09").addToggle((c) => {
      c.onChange((h) => o = h);
    });
    let r = /* @__PURE__ */ v(() => {
      let c = i.trim();
      if (!c) {
        new k(t("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(c, n, l, o);
    }, "done");
    new P(e).addButton((c) => c.setButtonText(t("\u521B\u5EFA")).setCta().onClick(r));
  }
  onClose() {
    this.contentEl.empty();
  }
};
v(ft, "NewChildModal");
var at = ft, mt = class extends Ce {
  constructor(e, s, i) {
    super(e), this.currentName = s, this.onSubmit = i;
  }
  onOpen() {
    let { contentEl: e } = this;
    e.createEl("h3", { text: t("\u91CD\u547D\u540D\u6587\u4EF6") }), e.createEl("p", { text: t("\u5F53\u524D\uFF1A") + this.currentName + ".md", cls: "lkm-modal-sub" });
    let s = this.currentName;
    new P(e).setName(t("\u65B0\u6587\u4EF6\u540D")).addText((n) => {
      n.setValue(this.currentName), n.onChange((l) => s = l), n.inputEl.focus(), n.inputEl.select(), n.inputEl.addEventListener("keydown", (l) => {
        l.key === "Enter" && (l.preventDefault(), i());
      });
    });
    let i = /* @__PURE__ */ v(() => {
      let n = s.trim();
      if (!n) {
        new k(t("\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(n);
    }, "done");
    new P(e).addButton((n) => n.setButtonText(t("\u91CD\u547D\u540D")).setCta().onClick(i));
  }
  onClose() {
    this.contentEl.empty();
  }
};
v(mt, "RenameModal");
var Nt = mt, gt = class extends Ce {
  constructor(e, s, i, n, l) {
    super(e), this.titleText = s, this.message = i, this.onConfirm = n, this.danger = l !== !1;
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
v(gt, "ConfirmModal");
var We = gt, kt = class extends lt {
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
v(kt, "MoveModal");
var Ge = kt, wt = class extends Ft {
  constructor(e, s) {
    super(e), this.plugin = s, this.rootPath = null, this.depth = s.settings.defaultDepth, this.notes = /* @__PURE__ */ new Map(), this.referenced = /* @__PURE__ */ new Set(), this.currentRoot = null, this._cleanup = [], this._view = null, this._expandedMem = /* @__PURE__ */ new Map(), this._history = [], this._selected = /* @__PURE__ */ new Set(), this._batchMode = !1, this._selKey = null, this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._toolbarCollapsed = !1, this._dashFilters = [], this._dashSort = "date", this._dashSearch = "", this._dashHeatIdx = 0, this._dashBranchAll = !1, this._dashTab = "stats", this._tlSort = "desc", this._tlTypeFilter = "", this._tlSearch = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this._nodeIndex = /* @__PURE__ */ new Map();
  }
  get s() {
    return this.plugin.settings;
  }
  getViewType() {
    return ke;
  }
  getDisplayText() {
    return t("\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE");
  }
  getIcon() {
    return "git-fork";
  }
  async onOpen() {
    await this._waitMetadataReady();
    let e = this.plugin.settings.viewState;
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
    this._runCleanup();
    let e = {
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
    this.plugin.settings.viewState = e, await this.plugin.saveSettings();
  }
  async _waitMetadataReady() {
    let e = this.app.metadataCache;
    dt(this.app, this.s) || await new Promise((s) => {
      let i = !1, n = /* @__PURE__ */ v(() => {
        if (!i) {
          i = !0;
          try {
            e.offref(l), e.offref(o);
          } catch {
          }
          clearTimeout(a), s();
        }
      }, "finish"), l = e.on("resolved", n), o = e.on("changed", n), a = setTimeout(n, 6e3);
      this._cleanup.push(n);
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
    let s = window.visualViewport, i = null, n = /* @__PURE__ */ v(() => {
      i && clearTimeout(i), i = setTimeout(() => {
        if (i = null, !window.matchMedia("(hover: none)").matches) return;
        let r = e.querySelector(".lkm-dash");
        if (!r) return;
        let c = e.querySelector(".lkm-toolbar"), h = c ? c.getBoundingClientRect().height : 0;
        r.style.maxHeight = s.height - h + "px";
        let d = document.activeElement;
        d && d.tagName === "INPUT" && e.contains(d) && setTimeout(() => {
          let p = d.getBoundingClientRect(), f = r.getBoundingClientRect();
          (p.top < f.top || p.bottom > f.bottom) && d.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 50);
      }, 150);
    }, "adjust"), l = /* @__PURE__ */ v(() => n(), "onResize"), o = /* @__PURE__ */ v(() => n(), "onScroll");
    s.addEventListener("resize", l), s.addEventListener("scroll", o), window.addEventListener("resize", l), this._cleanup.push(() => {
      s.removeEventListener("resize", l), s.removeEventListener("scroll", o), window.removeEventListener("resize", l);
      let a = e.querySelector(".lkm-dash");
      a && (a.style.maxHeight = "");
    }), this._adjustMobileViewport = n;
  }
  async rebuild(e) {
    let s = je(this.app, this.s);
    this.notes = s.map, this.referenced = s.referenced;
    for (let i of this._expandedMem.keys()) this.notes.has(i) || this._expandedMem.delete(i);
    if (this._selKey && !this._nodeIndex.has(this._selKey) && (this._selKey = null), this._multiRoot && e && this._multiRootPaths && this._multiRootPaths.length) {
      let i = this._multiRootPaths.filter((n) => this.notes.has(n));
      if (i.length) {
        this._showMultiRoot(i);
        return;
      }
    }
    (!e || !this.rootPath || !this.notes.has(this.rootPath)) && (this.rootPath = this._pickDefaultRoot(), this._multiRoot = !1), this.render();
  }
  _pickDefaultRoot() {
    let e = [...this.notes.values()], s = e.filter((n) => n.zk).sort((n, l) => n.title.localeCompare(l.title, "zh"));
    if (s.length) return s[0].file.path;
    let i = e.filter((n) => !this.referenced.has(n.file.path)).sort((n, l) => n.title.localeCompare(l.title, "zh"));
    return i.length ? i[0].file.path : e.length ? e[0].file.path : null;
  }
  _indexTree(e) {
    this._nodeIndex = /* @__PURE__ */ new Map(), this._treePaths = /* @__PURE__ */ new Set(), this._pathNodes = /* @__PURE__ */ new Map();
    let s = /* @__PURE__ */ v((i) => {
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
    let n = /* @__PURE__ */ v((b) => {
      let z = b.target.tagName;
      if (!(z === "INPUT" || z === "TEXTAREA"))
        if (b.key === "Delete" || b.key === "Backspace") {
          if (this._selKey) {
            b.preventDefault();
            let m = this._nodeIndex.get(this._selKey);
            m && this._deleteNode(m);
          }
        } else if (b.key === "Enter") {
          if (this._selKey) {
            b.preventDefault();
            let m = this._nodeIndex.get(this._selKey);
            m && m.note.file && this.app.workspace.getLeaf(!0).openFile(m.note.file);
          }
        } else if (b.key === "Escape")
          this._batchMode ? (this._batchMode = !1, this._selected.clear(), this.render()) : this._selKey && this._select(null);
        else if (b.key === "ArrowUp" || b.key === "ArrowDown" || b.key === "ArrowLeft" || b.key === "ArrowRight") {
          if (!this._selKey) return;
          let m = this._nodeIndex.get(this._selKey);
          if (!m) return;
          if (b.preventDefault(), b.key === "ArrowLeft")
            m.expanded && m.children.length ? (m.expanded = !1, this._expandedMem.set(m.note.file ? m.note.file.path : m.key, !1), this.render()) : m.parent && this._select(m.parent.key);
          else if (b.key === "ArrowRight")
            !m.expanded && m.children.length ? (m.expanded = !0, this._expandedMem.set(m.note.file ? m.note.file.path : m.key, !0), this.render()) : m.children.length && this._select(m.children[0].key);
          else if (b.key === "ArrowUp") {
            if (m.parent) {
              let D = m.parent.children, F = D.indexOf(m);
              F > 0 ? this._select(D[F - 1].key) : this._select(m.parent.key);
            }
          } else if (b.key === "ArrowDown") {
            if (m.expanded && m.children.length) {
              this._select(m.children[0].key);
              return;
            }
            let D = m;
            for (; D.parent; ) {
              let F = D.parent.children, T = F.indexOf(D);
              if (T < F.length - 1) {
                this._select(F[T + 1].key);
                return;
              }
              D = D.parent;
            }
          }
        } else if (b.key === " ") {
          if (this._selKey) {
            b.preventDefault();
            let m = this._nodeIndex.get(this._selKey);
            m && m.children.length && (m.expanded = !m.expanded, this._expandedMem.set(m.note.file ? m.note.file.path : m.key, m.expanded), this.render());
          }
        } else if (b.key === "n" || b.key === "N") {
          if (this._selKey) {
            b.preventDefault();
            let m = this._nodeIndex.get(this._selKey);
            m && this._addChildDialog(m);
          }
        } else b.key === "b" || b.key === "B" ? (b.preventDefault(), this._back()) : b.key === "/" && (b.preventDefault(), this.openNoteSearch());
    }, "onKeydown");
    s.addEventListener("keydown", n), this._cleanup.push(() => s.removeEventListener("keydown", n)), this._titleLenApplied !== i.maxTitleLen && (this._titleLenApplied = i.maxTitleLen);
    let l = s.createDiv("lkm-toolbar"), o = l.createEl("button", { cls: "lkm-btn lkm-toolbar-toggle", text: "\u2630" });
    o.title = t("\u5C55\u5F00/\u6298\u53E0\u5DE5\u5177\u680F"), o.onclick = () => {
      this._toolbarCollapsed = !this._toolbarCollapsed, l.classList.toggle("lkm-collapsed", this._toolbarCollapsed);
    }, this._toolbarCollapsed && l.classList.add("lkm-collapsed");
    let a = /* @__PURE__ */ v((b, z, m, D, F, T) => {
      let w = l.createEl("button", { cls: "lkm-btn" + (D ? " " + D : "") });
      return T ? (w.createEl("span", { cls: "lkm-btn-icon", text: T }), w.createEl("span", { text: b })) : w.textContent = b, w.title = z, F && (w.disabled = !0), w.onclick = (R) => {
        w.disabled || m(w, R);
      }, w;
    }, "mkBtn"), r = this._selKey ? this._nodeIndex.get(this._selKey) : null, c = !r;
    a(t("\u5DE5\u4F5C\u53F0"), t("\u67E5\u770B\u7EDF\u8BA1\u5DE5\u4F5C\u53F0"), () => {
      this._mode = "dash", this.render();
    }, "", !1, "\u{1F4CA}"), a(t("\u4E3B\u7B14\u8BB0"), t("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u7B14\u8BB0\uFF08main: true\uFF09"), () => this.openRootPicker(), "", !1, "\u{1F4CC}"), a(t("\u5173\u952E\u8BCD"), t("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u8FC7\u6EE4"), () => this.openKeywordPicker(), "", !1, "\u{1F511}"), a(t("\u641C\u7D22"), t("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9"), () => this.openNoteSearch(), "", !1, "\u{1F50D}"), a(t("\u591A\u9009"), t("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A"), () => this.openMultiPick(), "", !1, "\u{1F4CB}"), a(t("\u65B0\u589E"), t("\u521B\u5EFA\u72EC\u7ACB\u7B14\u8BB0"), () => this.createStandaloneNote(), "", !1, "\u271A");
    let h = l.createDiv("lkm-depth");
    h.createSpan({ text: t("\u5C42") });
    let d = h.createEl("button", { cls: "lkm-step", text: "\u2212", title: t("\u51CF\u5C11\u663E\u793A\u5C42\u6570\uFF08\u5C421=\u53EA\u770B\u6839\u7B14\u8BB0\uFF09") }), p = h.createSpan({ cls: "lkm-depth-val", text: String(this.depth) }), f = h.createEl("button", { cls: "lkm-step", text: "+", title: t("\u589E\u52A0\u663E\u793A\u5C42\u6570") });
    d.onclick = () => {
      this.depth > 1 && (this.depth--, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, f.onclick = () => {
      this.depth < 12 && (this.depth++, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, a(t("\u5237\u65B0"), t("\u91CD\u65B0\u8BFB\u53D6\u76EE\u5F55\u4E0E\u7B14\u8BB0\u6570\u636E"), () => this.rebuild(!0), "", !1, "\u21BB"), a(t("\u9002\u5E94"), t("\u7F29\u653E\u81F3\u5B8C\u6574\u663E\u793A\u6240\u6709\u8282\u70B9"), () => this._fit && this._fit(), "", !1, "\u2922"), a(t("\u5168\u5C55"), t("\u5C55\u5F00\u6240\u6709\u8282\u70B9"), () => this._expandAll(!0), "", !1, "\u2295"), a(t("\u5168\u6298"), t("\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9"), () => this._expandAll(!1), "", !1, "\u2296"), a(this.s.layoutDir === "v" ? t("\u7EB5\u5411") : t("\u6A2A\u5411"), t("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u6A2A\u5411/\u7EB5\u5411\uFF09"), (b) => {
      this.s.layoutDir = this.s.layoutDir === "v" ? "h" : "v", this.plugin.saveSettings(), this._view = null, this.render({ fit: !0 });
    }, this.s.layoutDir === "v" ? "is-active" : "", !1, "\u21C4"), a(t("\u5FEB\u6377\u952E"), t("\u67E5\u770B\u952E\u76D8\u5FEB\u6377\u952E\u8BF4\u660E"), () => this._showShortcutHelp(), "", !1, "\u2328"), a(t("\u5BFC\u51FA"), t("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2"), (b) => this._exportMenu(b), "", !1, "\u2B07");
    let g = a(t("\u663E\u793A"), t("\u5207\u6362\u663E\u793A\u9009\u9879"), () => {
      let b = new Ye();
      b.addItem((m) => m.setTitle(this.s.showCreated ? t("\u2713 \u65F6\u95F4") : t("\u65F6\u95F4")).setIcon("calendar").onClick(() => {
        this.s.showCreated = !this.s.showCreated, this.plugin.saveSettings(), this.render();
      })), b.addItem((m) => m.setTitle(this.s.showType ? t("\u2713 \u7C7B\u578B") : t("\u7C7B\u578B")).setIcon("tag").onClick(() => {
        this.s.showType = !this.s.showType, this.plugin.saveSettings(), this.render();
      })), b.addItem((m) => m.setTitle(this.s.showChildCount ? t("\u2713 \u5B50\u6570") : t("\u5B50\u6570")).setIcon("list").onClick(() => {
        this.s.showChildCount = !this.s.showChildCount, this.plugin.saveSettings(), this.render();
      })), b.addSeparator(), b.addItem((m) => m.setTitle(this.s.showOpenIcon !== !1 ? t("\u2713 \u6253\u5F00\u56FE\u6807") : t("\u6253\u5F00\u56FE\u6807")).setIcon("edit").onClick(() => {
        this.s.showOpenIcon = this.s.showOpenIcon === !1, this.plugin.saveSettings(), this.render();
      })), b.addItem((m) => m.setTitle(this.s.showAddIcon !== !1 ? t("\u2713 \u65B0\u589E\u56FE\u6807") : t("\u65B0\u589E\u56FE\u6807")).setIcon("plus-circle").onClick(() => {
        this.s.showAddIcon = this.s.showAddIcon === !1, this.plugin.saveSettings(), this.render();
      }));
      let z = g.getBoundingClientRect();
      b.showAtPosition({ x: z.left, y: z.bottom });
    });
    a(t("\u6279\u91CF"), t("\u8FDB\u5165\u6279\u91CF\u6A21\u5F0F\uFF1A\u5355\u51FB\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u540E\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664"), () => this._toggleBatch(), this._batchMode ? "is-active" : ""), this._batchMode && (l.createDiv("lkm-sel-count").setText(t("\u5DF2\u9009 ") + this._selected.size), a(t("\u5168\u9009"), t("\u9009\u4E2D\u5BFC\u56FE\u4E2D\u6240\u6709\u8282\u70B9"), () => {
      this._selected = new Set(this._nodeIndex.keys()), this.render();
    }, "lkm-btn-action"), a(t("\u53CD\u9009"), t("\u53CD\u9009\u5F53\u524D\u9009\u4E2D\u72B6\u6001"), () => {
      let z = new Set(this._nodeIndex.keys());
      for (let m of this._selected) z.delete(m);
      this._selected = z, this.render();
    }, "lkm-btn-action"), a(t("\u79FB\u52A8\u5230\u2026"), t("\u628A\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u6307\u5B9A\u7236\u7B14\u8BB0\u4E0B"), () => this._batchMoveDialog(), "lkm-btn-action"), a(t("\u5220\u9664\u9009\u4E2D"), t("\u5220\u9664\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u53CA\u5176\u7B14\u8BB0\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF09"), () => this._batchDelete(), "lkm-btn-action"), a(t("\u6539\u7C7B\u578B"), t("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u7C7B\u578B"), () => this._batchSetType(), "lkm-btn-action"), a(t("\u6807\u8BB0\u5B8C\u6210"), t("\u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u5DF2\u5B8C\u6210"), () => this._batchSetStatus(!0), "lkm-btn-action"), a(t("\u53D6\u6D88\u5B8C\u6210"), t("\u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u5B8C\u6210\u6807\u8BB0"), () => this._batchSetStatus(!1), "lkm-btn-action")), a(t("\u8BBE\u7F6E"), t("\u6253\u5F00\u63D2\u4EF6\u8BBE\u7F6E"), () => {
      this.app.setting.open(), this.app.setting.openTabById(this.plugin.manifest.id);
    }, "", !1, "\u2699"), a(t("\u83DC\u5355"), t("\u663E\u793A\u8282\u70B9\u64CD\u4F5C\u83DC\u5355\uFF08\u7B49\u540C\u53F3\u952E/\u957F\u6309\uFF09\uFF1A\u6253\u5F00/\u65B0\u589E/\u805A\u7126/\u4E0A\u7EA7/\u5B8C\u6210/\u4E3B\u7B14\u8BB0/\u91CD\u547D\u540D/\u590D\u5236/\u79FB\u52A8/\u6392\u5E8F/\u5220\u9664"), (b, z) => {
      let m = this._nodeIndex.get(this._selKey);
      m && this._showNodeMenu(m, { clientX: z.clientX, clientY: z.clientY });
    }, "lkm-node-btn", !r), a(t("\u8FD4\u56DE"), t("\u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE\u4F4D\u7F6E"), () => this._back(), "", this._history.length === 0, "\u2190"), a(t("\u7B5B\u9009"), t("\u7B5B\u9009\u8282\u70B9"), () => {
      l.classList.toggle("lkm-filter-open");
    }, "lkm-filter-toggle");
    let _ = l.createEl("input", { type: "text", cls: "lkm-filter-input", placeholder: t("\u7B5B\u9009\u8282\u70B9\u2026") });
    _.value = this._filterText || "", _.addEventListener("input", () => {
      this._filterText = _.value.trim().toLowerCase(), this._applyFilter();
    });
    let x = l.createDiv("lkm-info");
    r && x.createSpan({ text: t("\u5DF2\u9009\uFF1A") + q(r.note.title, 12) + " \uFF5C " });
    let S = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (this._kwFile)
      x.createSpan({ text: t("\u5173\u952E\u8BCD\uFF1A") + this._kwFile.basename });
    else if (this._multiRoot)
      x.createSpan({ text: t("\u591A\u9009\u5BFC\u56FE\uFF08") + (this.currentRoot ? this.currentRoot.children.length : 0) + t(" \u7BC7\uFF09") });
    else if (S) {
      x.createSpan({ text: t("\u8DEF\u5F84\uFF1A") });
      let b = this._buildCrumbChain();
      b.forEach((z, m) => {
        if (b.length > 8 && m === 1) {
          x.createEl("span", { cls: "lkm-crumb-sep", text: "\u2026>" });
          return;
        }
        if (b.length > 8 && m > 1 && m < b.length - 1) return;
        m && x.createSpan({ cls: "lkm-crumb-sep", text: ">" });
        let D = m === b.length - 1, F = q(z.note.title, 10), T = x.createEl(D ? "span" : "a", { cls: "lkm-crumb-item" + (D ? " lkm-crumb-cur" : ""), text: F });
        T.title = z.note.title, !D && z.note.file && T.addEventListener("click", () => this._focusPath(z.note.file.path));
      });
    } else
      x.createSpan({ text: t("\u672A\u627E\u5230\u7B14\u8BB0") });
    let L = s.createDiv("lkm-canvas");
    if (this._kwFile && !this.app.vault.getAbstractFileByPath(this._kwFile.path) && (this._kwFile = null), !this._kwFile && !this._multiRoot && (this._selectedRootPaths = null), this._kwFile) {
      this.showKeyword(this._kwFile, e);
      return;
    }
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length) {
      this._indexTree(this.currentRoot), $e(this.currentRoot, this.depth), this._ensureSelectedVisible(this.currentRoot), this._restoreExpanded(), this._draw(L, Re(this.currentRoot, this.s), e);
      return;
    }
    if (!this.rootPath || !S) {
      if (this.notes.size === 0) {
        this._renderEmptyGuide(L);
        return;
      }
      L.createDiv("lkm-empty").setText(t("\u6CA1\u6709\u627E\u5230\u4E3B\u7B14\u8BB0\uFF08") + (this.s.zkField || "main") + t(": true\uFF09\u3002\u53EF\u5728\u5BFC\u56FE\u4E2D\u53F3\u952E/\u957F\u6309\u4EFB\u610F\u8282\u70B9\u6807\u8BB0\u4E3A\u4E3B\u7B14\u8BB0\u3002"));
      return;
    }
    let I = Ie(this.app, this.notes, S);
    this.currentRoot = I, this._indexTree(I), $e(I, this.depth), this._restoreExpanded(), this._draw(L, Re(I, this.s), e);
  }
  _restoreExpanded() {
    for (let [e, s] of this._expandedMem) {
      let i = this._pathNodes ? this._pathNodes.get(e) : null;
      if (i) for (let n of i) n.expanded = s;
    }
  }
  _ensureSelectedVisible(e) {
    !this._selectedRootPaths || !this._selectedRootPaths.size || (/* @__PURE__ */ v(function s(i) {
      if (!i.children || !i.children.length) return !1;
      let n = !1;
      for (let l of i.children)
        l.note.file && this.has(l.note.file.path) && (n = !0), s.call(this, l) && (n = !0);
      return n && (i.expanded = !0), n;
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
    let i = e.note.file.path, n = this._previewCache.get(i);
    if (n === void 0)
      try {
        let r = await this.app.vault.read(e.note.file), c = r.match(/^---\n[\s\S]*?\n---\n?/);
        n = c ? r.slice(c[0].length).trim() : r.trim(), n = n.split(`
`).slice(0, 20).join(`
`).trim(), n.length > 600 && (n = n.slice(0, 600) + "\u2026"), this._previewCache.set(i, n);
      } catch {
        return;
      }
    if (!n) return;
    this._hidePreview();
    let l = document.createElement("div");
    l.className = "lkm-preview";
    let o = document.createElement("div");
    o.className = "lkm-preview-title", o.textContent = e.note.title, l.appendChild(o);
    let a = document.createElement("div");
    l.appendChild(a), l.addEventListener("mouseenter", () => {
      this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null);
    }), l.addEventListener("mouseleave", () => {
      this._hidePreview();
    }), document.body.appendChild(l), this._previewEl = l, this._previewComp = new Mt(), this._previewComp.load(), await Dt.render(this.app, n, a, i, this._previewComp), this._positionPreview(s);
  }
  _positionPreview(e) {
    if (!this._previewEl) return;
    let s = this._previewEl, i = e.clientX + 14, n = e.clientY + 14, l = s.getBoundingClientRect(), o = window.innerWidth - l.width - 8, a = window.innerHeight - l.height - 8;
    s.style.left = Math.min(i, o) + "px", s.style.top = Math.min(n, a) + "px";
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
    } else new k(t("\u6CA1\u6709\u53EF\u8FD4\u56DE\u7684\u8282\u70B9"));
  }
  _expandAll(e) {
    for (let s of this._nodeIndex.values())
      s.children.length && (s.expanded = e, this._expandedMem.set(s.note.file ? s.note.file.path : s.key, e));
    this.render();
  }
  _showShortcutHelp() {
    let e = new Ce(this.app);
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
      for (let [l, o] of i) {
        let a = s.createDiv("lkm-shortcut-row");
        a.createEl("span", { cls: "lkm-shortcut-key", text: l }), a.createEl("span", { cls: "lkm-shortcut-desc", text: o });
      }
      let n = s.createDiv("lkm-multipick-btns");
      new P(n).addButton((l) => l.setButtonText(t("\u5173\u95ED")).onClick(() => e.close()));
    }, e.open();
  }
  _exportMenu(e) {
    let s = new Ye();
    s.addItem((n) => n.setTitle(t("\u5BFC\u51FA SVG")).setIcon("download").onClick(() => this._exportSVG())), s.addItem((n) => n.setTitle(t("\u5BFC\u51FA PNG")).setIcon("image").onClick(() => this._exportPNG())), s.addItem((n) => n.setTitle(t("\u5BFC\u51FA Markdown \u5927\u7EB2")).setIcon("document").onClick(() => this._exportMarkdown()));
    let i = e.getBoundingClientRect();
    s.showAtPosition({ x: i.left, y: i.bottom + 4 });
  }
  _getSVGString() {
    let e = this.contentEl.querySelector(".lkm-svg");
    if (!e)
      return new k(t("\u672A\u627E\u5230\u5BFC\u56FE\u5185\u5BB9")), null;
    let s = e.cloneNode(!0), i = e.getBBox(), n = 30, l = i.width + n * 2, o = i.height + n * 2;
    s.setAttribute("xmlns", "http://www.w3.org/2000/svg"), s.setAttribute("width", l), s.setAttribute("height", o), s.setAttribute("viewBox", i.x - n + " " + (i.y - n) + " " + l + " " + o);
    let a = this.contentEl.querySelector(".lkm-view") || this.contentEl, r = getComputedStyle(a), c = [
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
    for (let m of c) {
      let D = r.getPropertyValue(m).trim();
      D && (h[m] = D);
    }
    h["--lkm-accent"] || (h["--lkm-accent"] = "#6c8cff"), h["--lkm-main"] || (h["--lkm-main"] = "#f2a65a"), h["--lkm-done"] || (h["--lkm-done"] = "#3fa66a");
    let d = "";
    try {
      for (let m of document.styleSheets) {
        let D;
        try {
          D = m.cssRules;
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
    } catch (m) {
      console.error("[link-mindmap] collect CSS:", m);
    }
    let p = d;
    for (let [m, D] of Object.entries(h))
      p = p.replace(new RegExp("var\\(" + m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\)", "g"), D), p = p.replace(new RegExp("var\\(" + m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ",\\s*[^)]+\\)", "g"), D);
    p = p.replace(/var\(--[^)]+\)/g, "#888");
    let f = document.createElement("style");
    f.textContent = p, s.insertBefore(f, s.firstChild);
    let g = e.querySelectorAll(".lkm-card"), _ = s.querySelectorAll(".lkm-card");
    for (let m = 0; m < g.length && m < _.length; m++) {
      let D = g[m], F = _[m], T = getComputedStyle(D), w = T.stroke, R = T.fill, y = T.strokeWidth;
      w && w !== "none" && F.setAttribute("stroke", w), R && R !== "none" && F.setAttribute("fill", R), y && F.setAttribute("stroke-width", y);
    }
    let x = e.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign"), S = s.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign");
    for (let m = 0; m < x.length && m < S.length; m++) {
      let D = getComputedStyle(x[m]), F = D.fill, T = D.fontSize;
      F && F !== "none" && S[m].setAttribute("fill", F), T && S[m].setAttribute("font-size", T);
    }
    let L = e.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill"), I = s.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill");
    for (let m = 0; m < L.length && m < I.length; m++) {
      let F = getComputedStyle(L[m]).fill;
      F && F !== "none" && I[m].setAttribute("fill", F);
    }
    let b = e.querySelectorAll(".lkm-edge"), z = s.querySelectorAll(".lkm-edge");
    for (let m = 0; m < b.length && m < z.length; m++) {
      let F = getComputedStyle(b[m]).stroke;
      F && F !== "none" && z[m].setAttribute("stroke", F);
    }
    return new XMLSerializer().serializeToString(s);
  }
  _exportSVG() {
    let e = this._getSVGString();
    if (!e) return;
    let i = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".svg";
    this.app.vault.create(i, e).then(
      () => new k(t("SVG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + i),
      (n) => new k(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n))
    );
  }
  _exportPNG() {
    let e = this._getSVGString();
    if (!e) return;
    let i = this.contentEl.querySelector(".lkm-svg").getBBox(), n = 30, l = i.width + n * 2, o = i.height + n * 2, a = new Image(), r = btoa(unescape(encodeURIComponent(e)));
    a.onload = () => {
      let c = document.createElement("canvas");
      c.width = l * 2, c.height = o * 2;
      let h = c.getContext("2d"), d = getComputedStyle(this.contentEl).getPropertyValue("--background-primary").trim() || "#ffffff";
      h.fillStyle = d, h.fillRect(0, 0, c.width, c.height), h.drawImage(a, 0, 0, c.width, c.height), c.toBlob((p) => {
        let g = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".png";
        p.arrayBuffer().then((_) => this.app.vault.createBinary(g, _).then(
          () => new k(t("PNG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + g),
          (x) => new k(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (x && x.message ? x.message : x))
        ));
      });
    }, a.onerror = () => new k(t("PNG \u5BFC\u51FA\u5931\u8D25")), a.src = "data:image/svg+xml;base64," + r;
  }
  _exportMarkdown() {
    let e = this.currentRoot;
    if (!e) {
      new k(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let s = [], i = /* @__PURE__ */ v((a, r) => {
      let c = r === 0 ? "# " : "  ".repeat(r) + "- ", h = a.note.status ? " [x]" : "", d = a.note.type ? " `" + a.note.type + "`" : "";
      s.push(c + (a.note.title || a.note.file?.name || "?") + d + h);
      for (let p of a.children || []) i(p, r + 1);
    }, "walk");
    i(e, 0);
    let n = s.join(`
`), o = "link-mindmap-outline-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".md";
    this.app.vault.create(o, n).then(
      () => new k(t("Markdown \u5927\u7EB2\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + o),
      (a) => new k(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a))
    );
  }
  _parentPathsOf(e) {
    let s = [];
    for (let i of this.notes.values())
      if (i.file.path !== e)
        for (let n of i.childLinks) {
          let l = this.app.metadataCache.getFirstLinkpathDest(n, i.file.path);
          if (l && l.path === e) {
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
      let n = this.notes.get(i);
      if (!n) break;
      e.unshift({ note: n });
      let l = this._parentPathsOf(i);
      i = l.length ? l[0] : null;
    }
    return e;
  }
  _up() {
    let e = this._selKey ? this._nodeIndex.get(this._selKey) : null, s = e && e.note.file ? e.note : this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!s || !s.file) {
      new k(t("\u6CA1\u6709\u53EF\u8DF3\u8F6C\u7684\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let i = this._parentPathsOf(s.file.path);
    if (!i.length) {
      new k("\u300C" + q(s.title, 12) + t("\u300D\u6CA1\u6709\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let n = s.file.path, l = /* @__PURE__ */ v((a) => {
      this._focusPath(a);
      let r = [...this._nodeIndex.values()].find((c) => c.note.file && c.note.file.path === n);
      r && (this._selKey = r.key, this.render());
    }, "go");
    if (i.length === 1) {
      l(i[0]);
      return;
    }
    let o = i.map((a) => ({ label: (this.notes.get(a) || {}).title || a, path: a }));
    new Me(this.app, o, (a) => l(a.path), t("\u8BE5\u8282\u70B9\u6709\u591A\u4E2A\u4E0A\u7EA7\uFF0C\u9009\u62E9\u8981\u524D\u5F80\u7684\u4E0A\u7EA7\u2026")).open();
  }
  locateFile(e, s) {
    if (!s && !this.s.autoLocate || !e || e.extension !== "md" || this._batchMode || this._mode === "dash") return;
    try {
      if (typeof this.containerEl.isShown == "function" && !this.containerEl.isShown()) return;
    } catch {
    }
    let i = null;
    for (let a of this._nodeIndex.values())
      a.note.file && a.note.file.path === e.path && (!i || !a.isAlias) && (i = a);
    if (!i) return;
    if (this._kwFile && this.currentRoot) {
      let a = this._findClone(this.currentRoot, e.path);
      if (a && this._cloneShown(a)) {
        this._selKey = a.key, this.render();
        return;
      }
    }
    this._kwFile = null, this._multiRoot = !1;
    let n = [];
    for (let a = i; a; a = a.parent) n.unshift(a);
    let l = n[0], o = !1;
    this.rootPath !== l.note.file.path && (this._history.push({ rootPath: this.rootPath, kwFile: this._kwFile, multiRoot: this._multiRoot, currentRoot: this._multiRoot ? this.currentRoot : null }), this.rootPath = l.note.file.path, o = !0);
    for (let a = 0; a < n.length; a++)
      a < n.length - 1 && !n[a].expanded && (o = !0), n[a].expanded = !0, this._expandedMem.set(n[a].note.file ? n[a].note.file.path : n[a].key, !0);
    !o && this._selKey === i.key || (this._selKey = i.key, this.render({ centerPath: e.path }));
  }
  _findClone(e, s) {
    if (!e) return null;
    if (e.note.file && e.note.file.path === s) return e;
    for (let i of e.children || []) {
      let n = this._findClone(i, s);
      if (n) return n;
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
      () => new k(t("\u5DF2\u590D\u5236\uFF1A") + s),
      () => new k(t("\u590D\u5236\u5931\u8D25"))
    );
  }
  _copySubtree(e) {
    if (!e) return;
    let s = [], i = /* @__PURE__ */ v((n, l) => {
      let o = l === 0 ? "" : "  ".repeat(l) + "- ";
      s.push(o + "[[" + (n.note.file ? n.note.file.basename : n.note.title) + "]]");
      for (let a of n.children || []) i(a, l + 1);
    }, "walk");
    i(e, 0), navigator.clipboard.writeText(s.join(`
`)).then(
      () => new k(t("\u5DF2\u590D\u5236\u5B50\u6811\uFF08") + s.length + t(" \u4E2A\u8282\u70B9\uFF09")),
      () => new k(t("\u590D\u5236\u5931\u8D25"))
    );
  }
  _renameNode(e) {
    if (!e || !e.note.file) {
      new k(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    new Nt(this.app, e.note.file.basename, async (s) => {
      try {
        let i = e.note.file.basename, n = e.note.file.parent ? e.note.file.parent.path : "", l = J((n ? n + "/" : "") + me(s) + ".md");
        if (l === e.note.file.path) return;
        if (this.app.vault.getAbstractFileByPath(l)) {
          new k(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + me(s));
          return;
        }
        await this.app.vault.rename(e.note.file, l);
        let o = me(s), a = this.s.linkField || "children", r = this.s.backField || "parent";
        for (let h of this.notes.values())
          h.file.path !== l && await this.app.fileManager.processFrontMatter(h.file, (d) => {
            let p = Pe(d[a]), f = !1, g = p.map((_) => we(_) === i ? (f = !0, "[[" + o + "]]") : _);
            f && (d[a] = g), d[r] != null && we(d[r]) === i && (d[r] = o);
          });
        let c = this.s.titleField || "title";
        await this.app.fileManager.processFrontMatter(e.note.file, (h) => {
          h[c] != null && (h[c] = o);
        }), new k(t("\u5DF2\u91CD\u547D\u540D\u4E3A ") + o), await this.rebuild(!0);
      } catch (i) {
        new k(t("\u91CD\u547D\u540D\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _renameNode:", i);
      }
    }).open();
  }
  _subtreePaths(e) {
    let s = /* @__PURE__ */ new Set();
    return (/* @__PURE__ */ v((function i(n) {
      n.note.file && s.add(n.note.file.path), n.children.forEach(i);
    }), "walk"))(e), s;
  }
  _deleteNode(e) {
    if (!e || !e.note.file) {
      new k(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (e.isAlias) {
      if (!e.parent || !e.parent.note.file) {
        new k(t("\u65E0\u6CD5\u786E\u5B9A\u8BE5\u6302\u70B9\u7684\u7236\u8282\u70B9"));
        return;
      }
      new We(
        this.app,
        t("\u79FB\u9664\u5173\u8054"),
        "\u300C" + q(e.note.title, 16) + t(`\u300D\u662F\u91CD\u590D\u8282\u70B9\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\uFF09\u3002
\u672C\u6B21\u53EA\u79FB\u9664\u4ECE\u300C`) + q(e.parent.note.title, 16) + t("\u300D\u5230\u5B83\u7684\u5173\u8054\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\u3002"),
        async () => {
          try {
            await ge(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), this._selKey = null, new k(t("\u5DF2\u79FB\u9664\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (n) {
            new k(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n)), console.error("[link-mindmap] removeLink:", n);
          }
        }
      ).open();
      return;
    }
    let s = e.children.length, i = new Ce(this.app);
    i.onOpen = () => {
      let { contentEl: n } = i;
      n.createEl("h3", { text: t("\u5220\u9664\u8282\u70B9") }), n.createEl("p", { text: "\u300C" + q(e.note.title, 20) + "\u300D" + (s ? t("\uFF08\u542B ") + s + t(" \u4E2A\u5B50\u8282\u70B9\uFF09") : ""), cls: "lkm-modal-sub" });
      let l = n.createDiv("lkm-confirm-row");
      l.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => i.close());
      let a = l.createEl("button", { cls: "lkm-btn", text: t("\u79FB\u9664\u5F53\u524D\u5173\u8054") });
      a.title = e.parent && e.parent.note.file ? t("\u53EA\u79FB\u9664\u5F53\u524D\u7236\u8282\u70B9\u5230\u5B83\u7684\u94FE\u63A5\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559") : t("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"), (!e.parent || !e.parent.note.file) && (a.disabled = !0), a.addEventListener("click", () => {
        if (!e.parent || !e.parent.note.file) {
          new k(t("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"));
          return;
        }
        i.close(), (async () => {
          try {
            await ge(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), this._selKey = null, new k(t("\u5DF2\u79FB\u9664\u4ECE\u300C") + q(e.parent.note.title, 14) + t("\u300D\u5230\u300C") + q(e.note.title, 14) + t("\u300D\u7684\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (h) {
            new k(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] removeLink:", h);
          }
        })();
      });
      let r = l.createEl("button", { cls: "lkm-btn", text: t("\u79FB\u9664\u6240\u6709\u5173\u8054") });
      r.title = t("\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559"), r.addEventListener("click", () => {
        i.close(), (async () => {
          try {
            let h = e.note.file.path;
            for (let d of this.notes.values())
              d.file.path !== h && d.childLinks.length && await ge(this.app, d.file, this.s.linkField, h);
            this._selKey = null, new k(t("\u5DF2\u79FB\u9664\u6240\u6709\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (h) {
            new k(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] removeLink:", h);
          }
        })();
      });
      let c = l.createEl("button", { cls: "lkm2-btn-danger", text: t("\u5220\u9664\u6587\u4EF6") });
      c.title = t("\u79FB\u5165\u56DE\u6536\u7AD9\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664"), c.addEventListener("click", () => {
        if (!s) {
          i.close(), this._doDelete(e);
          return;
        }
        let h = new Ce(this.app);
        h.onOpen = () => {
          let { contentEl: d } = h;
          d.createEl("h3", { text: t("\u5220\u9664\u5B50\u8282\u70B9") }), d.createEl("p", { text: "\u300C" + q(e.note.title, 20) + t("\u300D\u542B ") + s + t(" \u4E2A\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u4E00\u5E76\u5220\u9664\uFF1F"), cls: "lkm-modal-sub" });
          let p = d.createDiv("lkm-confirm-row");
          p.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => h.close()), p.createEl("button", { cls: "lkm-btn", text: t("\u4EC5\u5220\u6B64\u8282\u70B9") }).addEventListener("click", () => {
            h.close(), i.close(), this._doDelete(e);
          }), p.createEl("button", { cls: "lkm2-btn-danger", text: t("\u5168\u90E8\u5220\u9664") }).addEventListener("click", () => {
            h.close(), i.close(), this._doDelete(e, !0);
          });
        }, h.onClose = () => h.contentEl.empty(), h.open();
      });
    }, i.onClose = () => i.contentEl.empty(), i.open();
  }
  async _doDelete(e, s) {
    try {
      let i = s ? this._subtreePaths(e) : /* @__PURE__ */ new Set([e.note.file.path]);
      for (let l of this.notes.values())
        if (!i.has(l.file.path))
          for (let o of i)
            l.childLinks.length && await ge(this.app, l.file, this.s.linkField, o);
      for (let l of i) {
        let o = this.app.vault.getAbstractFileByPath(l);
        o && o.path && await this.app.vault.trash(o, !0);
      }
      this._selKey = null;
      let n = i.size;
      new k(t("\u5DF2\u5220\u9664\u300C") + q(e.note.title, 16) + "\u300D" + (n > 1 ? t("\uFF08\u542B\u5B50\u8282\u70B9\u5171 ") + n + t(" \u4E2A\u6587\u4EF6\uFF09") : "") + t("\uFF08\u53EF\u5728\u56DE\u6536\u7AD9\u6062\u590D\uFF09")), await this.rebuild(!0);
    } catch (i) {
      new k(t("\u5220\u9664\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _deleteNode:", i);
    }
  }
  _showNodeMenu(e, s) {
    if (!e || !e.note.file) return;
    let i = new Ye();
    i.addItem((l) => l.setTitle(t("\u6253\u5F00\u7B14\u8BB0")).setIcon("file-text").onClick(() => {
      this.app.workspace.getLeaf(!0).openFile(e.note.file);
    })), i.addItem((l) => l.setTitle(t("\u65B0\u589E\u5B50\u8282\u70B9")).setIcon("plus").onClick(() => this.createChild(e))), i.addItem((l) => l.setTitle(t("\u805A\u7126\u5230\u6B64\u8282\u70B9")).setIcon("focus").onClick(() => this._focus(e.key)));
    let n = this._parentPathsOf(e.note.file.path);
    if (i.addItem((l) => l.setTitle(t("\u8DF3\u5230\u4E0A\u7EA7")).setIcon("arrow-up").onClick(() => this._up())), n.length > 1)
      for (let l of n) {
        let o = this.notes.get(l);
        i.addItem((a) => a.setTitle("  \u21B3 " + q(o ? o.title : l, 20)).setIcon("arrow-up").onClick(() => {
          this._focusPath(l);
          let r = [...this._nodeIndex.values()].find((c) => c.note.file && c.note.file.path === e.note.file.path);
          r && (this._selKey = r.key, this.render());
        }));
      }
    i.addSeparator(), i.addItem((l) => l.setTitle(e.note.status ? t("\u53D6\u6D88\u5B8C\u6210") : t("\u6807\u8BB0\u5B8C\u6210")).setIcon(e.note.status ? "circle" : "check-circle").onClick(() => this._setStatus(e, !e.note.status))), i.addItem((l) => l.setTitle(e.note.zk ? t("\u53D6\u6D88\u4E3B\u7B14\u8BB0") : t("\u6807\u8BB0\u4E3B\u7B14\u8BB0")).setIcon("star").onClick(() => this._toggleZk(e))), i.addItem((l) => l.setTitle(t("\u4FEE\u6539\u7C7B\u578B")).setIcon("tag").onClick(() => this._setTypeDialog(e))), i.addItem((l) => l.setTitle(t("\u4FEE\u6539\u65E5\u671F")).setIcon("calendar").onClick(() => this._setDateDialog(e))), e.children.length && i.addItem((l) => l.setTitle(e.expanded ? t("\u6298\u53E0\u5B50\u8282\u70B9") : t("\u5C55\u5F00\u5B50\u8282\u70B9")).setIcon(e.expanded ? "chevron-down" : "chevron-right").onClick(() => {
      e.expanded = !e.expanded, this._expandedMem.set(e.note.file ? e.note.file.path : e.key, e.expanded), this.render();
    })), i.addSeparator(), i.addItem((l) => l.setTitle(t("\u91CD\u547D\u540D")).setIcon("pencil").onClick(() => this._renameNode(e))), i.addItem((l) => l.setTitle(t("\u590D\u5236\u94FE\u63A5")).setIcon("copy").onClick(() => this._copyLink(e))), i.addItem((l) => l.setTitle(t("\u590D\u5236\u5B50\u6811\u5927\u7EB2")).setIcon("list").onClick(() => this._copySubtree(e))), i.addItem((l) => l.setTitle(t("\u79FB\u52A8\u5230\u7236\u5361")).setIcon("corner-up-right").onClick(() => this._moveNodeDialog(e))), i.addItem((l) => l.setTitle(t("\u540C\u7EA7\u4E4B\u524D")).setIcon("arrow-up").onClick(() => this._moveSiblingDialog(e, !1))), i.addItem((l) => l.setTitle(t("\u540C\u7EA7\u4E4B\u540E")).setIcon("arrow-down").onClick(() => this._moveSiblingDialog(e, !0))), i.addSeparator(), i.addItem((l) => l.setTitle(e.isAlias ? t("\u79FB\u9664\u5173\u8054\uFF08\u4FDD\u7559\u6587\u4EF6\uFF09") : t("\u5220\u9664\u8282\u70B9")).setIcon("trash").onClick(() => this._deleteNode(e))), s && typeof s.preventDefault == "function" ? i.showAtMouseEvent(s) : s && s.clientX !== void 0 && i.showAtPosition({ x: s.clientX, y: s.clientY });
  }
  _isDescendant(e, s) {
    return this._subtreePaths(e).has(s);
  }
  _moveNodeDialog(e) {
    if (!e || !e.note.file) return;
    let s = this._subtreePaths(e), i = [...this.notes.values()].filter((n) => n.file.path !== e.note.file.path && !s.has(n.file.path)).sort((n, l) => n.title.localeCompare(l.title, "zh")).map((n) => ({ label: n.title, path: n.file.path }));
    if (!i.length) {
      new k(t("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new Ge(this.app, i, (n) => this._moveNode(e, n.path)).open();
  }
  async _moveNode(e, s) {
    let i = e.note;
    if (!i.file) return;
    if (this._subtreePaths(e).has(s)) {
      new k(t("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let n = this.notes.get(s);
    if (!n) {
      new k(t("\u76EE\u6807\u7236\u7B14\u8BB0\u4E0D\u5B58\u5728"));
      return;
    }
    try {
      e.parent && e.parent.note.file && await ge(this.app, e.parent.note.file, this.s.linkField, i.file.path), await Be(this.app, n.file, this.s.linkField, i.file.basename), new k(t("\u5DF2\u79FB\u52A8\u300C") + q(i.title, 14) + t("\u300D\u5230\u300C") + q(n.title, 14) + "\u300D"), await new Promise((l) => setTimeout(l, 300)), await this.rebuild(!0);
    } catch (l) {
      new k(t("\u79FB\u52A8\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l));
    }
  }
  _moveSiblingDialog(e, s) {
    if (!e || !e.parent || !e.parent.note.file) {
      new k(t("\u6839\u8282\u70B9\u6CA1\u6709\u540C\u7EA7\u8282\u70B9"));
      return;
    }
    let i = e.parent.children.filter((l) => l !== e);
    if (!i.length) {
      new k(t("\u6CA1\u6709\u540C\u7EA7\u8282\u70B9\u53EF\u63D2\u5165"));
      return;
    }
    let n = i.map((l) => ({ label: l.note.title, path: l.note.file.path }));
    new Ge(this.app, n, (l) => this._reorderSiblings(e, l.path, s)).open();
  }
  async _reorderSiblings(e, s, i) {
    if (!e.parent || !e.parent.note.file) {
      new k(t("\u65E0\u6CD5\u6392\u5E8F\uFF1A\u591A\u9009\u6839\u8282\u70B9\u95F4\u4E0D\u80FD\u8C03\u6574\u987A\u5E8F"));
      return;
    }
    let n = e.parent.note.file;
    try {
      await this.app.fileManager.processFrontMatter(n, (l) => {
        let o = this.s.linkField, a = Pe(l[o]), r = /* @__PURE__ */ v((p) => a.findIndex((f) => {
          let g = this.app.metadataCache.getFirstLinkpathDest(we(f), n.path);
          return g && g.path === p;
        }), "idxOf"), c = r(e.note.file.path);
        if (c < 0) return;
        let h = a.splice(c, 1)[0], d = r(s);
        if (d < 0) {
          a.splice(c, 0, h);
          return;
        }
        a.splice(i ? d + 1 : d, 0, h), l[o] = a;
      }), await new Promise((l) => setTimeout(l, 300)), await this.rebuild(!0);
    } catch (l) {
      new k(t("\u540C\u7EA7\u79FB\u52A8\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l));
    }
  }
  async _moveAndReorder(e, s, i) {
    if (!s.parent || !s.parent.note.file) {
      new k(t("\u65E0\u6CD5\u79FB\u52A8\u5230\u8BE5\u4F4D\u7F6E"));
      return;
    }
    if (this._subtreePaths(e).has(s.parent.note.file.path)) {
      new k(t("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let n = s.parent.note.file;
    try {
      if (e.parent && e.parent.note.file && await ge(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), await this.app.fileManager.processFrontMatter(n, (l) => {
        let o = this.s.linkField, a = Pe(l[o]);
        a.some((f) => we(f) === e.note.file.basename) || a.push("[[" + e.note.file.basename + "]]");
        let c = /* @__PURE__ */ v((f) => a.findIndex((g) => {
          let _ = this.app.metadataCache.getFirstLinkpathDest(we(g), n.path);
          return _ && _.path === f;
        }), "idxOf"), h = c(e.note.file.path);
        if (h < 0) return;
        let d = a.splice(h, 1)[0], p = c(s.note.file.path);
        if (p < 0) {
          a.splice(h, 0, d);
          return;
        }
        a.splice(i ? p + 1 : p, 0, d), l[o] = a;
      }), this.s.autoAddBackLink) {
        let l = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(e.note.file, (o) => {
          o[l] = n.basename;
        });
      }
      new k(t("\u5DF2\u79FB\u52A8\u300C") + q(e.note.title, 14) + t("\u300D\u5230\u300C") + q(s.parent.note.title, 14) + "\u300D" + t(i ? "\u4E4B\u540E" : "\u4E4B\u524D")), await new Promise((l) => setTimeout(l, 300)), await this.rebuild(!0);
    } catch (l) {
      new k(t("\u79FB\u52A8\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l));
    }
  }
  _wouldCycle(e, s) {
    if (e === s) return !0;
    let i = [s], n = /* @__PURE__ */ new Set(), l = 0;
    for (; i.length && l++ < 5e3; ) {
      let o = i.pop();
      if (o === e) return !0;
      if (n.has(o)) continue;
      n.add(o);
      let a = this.notes.get(o);
      if (a)
        for (let r of a.childLinks) {
          let c = this.app.metadataCache.getFirstLinkpathDest(r, a.file.path);
          c && this.notes.has(c.path) && i.push(c.path);
        }
    }
    return !1;
  }
  async _addRelation(e, s) {
    let i = e && e.note;
    if (!i || !i.file) {
      new k(t("\u6E90\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (!s || !s.file) {
      new k(t("\u76EE\u6807\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (i.file.path === s.file.path) {
      new k(t("\u4E0D\u80FD\u5173\u8054\u5230\u81EA\u5DF1"));
      return;
    }
    if (Je(this.app, this.notes, i, "child").some((n) => n.file.path === s.file.path)) {
      new k("\u300C" + q(i.title, 12) + t("\u300D\u5DF2\u5173\u8054\u5230\u300C") + q(s.title, 12) + t("\u300D\uFF0C\u65E0\u9700\u91CD\u590D"));
      return;
    }
    if (this._wouldCycle(i.file.path, s.file.path)) {
      new k(t("\u4E0D\u80FD\u5EFA\u7ACB\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF\uFF08\u76EE\u6807\u5DF2\u662F\u300C") + q(i.title, 12) + t("\u300D\u7684\u4E0A\u7EA7\uFF09"));
      return;
    }
    try {
      if (await Be(this.app, i.file, this.s.linkField, s.file.basename), this.s.autoAddBackLink) {
        let n = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(s.file, (l) => {
          l[n] = i.file.basename;
        });
      }
      new k(t("\u5DF2\u5EFA\u7ACB\u5173\u8054\uFF1A") + q(i.title, 12) + " \u2192 " + q(s.title, 12)), await new Promise((n) => setTimeout(n, 300)), await this.rebuild(!0);
    } catch (n) {
      new k(t("\u5EFA\u7ACB\u5173\u8054\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
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
      new k(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = e.map((l) => this._nodeIndex.get(l)).filter(Boolean), i = /* @__PURE__ */ new Set();
    s.forEach((l) => this._subtreePaths(l).forEach((o) => i.add(o)));
    let n = [...this.notes.values()].filter((l) => !i.has(l.file.path)).sort((l, o) => l.title.localeCompare(o.title, "zh")).map((l) => ({ label: l.title, path: l.file.path }));
    if (!n.length) {
      new k(t("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new Ge(this.app, n, async (l) => {
      let o = this.notes.get(l.path), a = 0;
      for (let r of s)
        if (r.note.file)
          try {
            r.parent && r.parent.note.file && await ge(this.app, r.parent.note.file, this.s.linkField, r.note.file.path), await Be(this.app, o.file, this.s.linkField, r.note.file.basename), a++;
          } catch {
          }
      new k(t("\u6279\u91CF\u79FB\u52A8\u5B8C\u6210\uFF1A") + a + t(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchDelete() {
    let e = [...this._selected];
    if (!e.length) {
      new k(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = e.map((a) => this._nodeIndex.get(a)).filter((a) => a && a.note.file), i = s.filter((a) => !a.isAlias), n = new Set(i.map((a) => a.note.file.path)), l = s.filter((a) => a.isAlias && !n.has(a.note.file.path)), o = "";
    if (i.length && (o += t("\u5C06\u628A ") + i.length + t(" \u7BC7\u7B14\u8BB0\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u7684\u94FE\u63A5\u91CC\u79FB\u9664\u3002")), l.length && (o += (o ? " " : "") + t("\u53E6\u5C06\u79FB\u9664 ") + l.length + t(" \u4E2A\u989D\u5916\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09\u3002")), !o) {
      new k(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    new We(this.app, t("\u6279\u91CF\u5220\u9664"), o, async () => {
      let a = 0;
      for (let r of l)
        try {
          r.parent && r.parent.note.file && (await ge(this.app, r.parent.note.file, this.s.linkField, r.note.file.path), a++);
        } catch {
        }
      for (let r of i)
        try {
          let c = r.note.file;
          for (let h of this.notes.values())
            h.file.path !== c.path && h.childLinks.length && await ge(this.app, h.file, this.s.linkField, c.path);
          await this.app.vault.trash(c, !0), a++;
        } catch {
        }
      new k(t("\u5DF2\u5904\u7406 ") + a + t(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchSetType() {
    if (![...this._selected].length) {
      new k(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = this.s.typeColors || {}, i = Object.keys(s), n = [{ label: t("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let l of i) n.push({ label: l, path: l });
    new Me(this.app, n, (l) => this._batchSetTypeDo(l.path), t("\u6279\u91CF\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _batchSetTypeDo(e) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new k(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let n = this.s.typeField || "type", l = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (a) => {
          e ? a[n] = e : delete a[n];
        }), l++;
      } catch (a) {
        console.error("[link-mindmap] _batchSetTypeDo:", a);
      }
    new k(t("\u5DF2\u4FEE\u6539 ") + l + t(" \u4E2A\u8282\u70B9\u7C7B\u578B\u4E3A\u300C") + (e || t("\u65E0\u7C7B\u578B")) + "\u300D"), await this.rebuild(!0);
  }
  async _batchSetStatus(e) {
    let s = [...this._selected];
    if (!s.length) {
      new k(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let i = s.map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new k(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let n = this.s.statusField || "status", l = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (a) => {
          a[n] = e;
        }), l++;
      } catch (a) {
        console.error("[link-mindmap] _batchSetStatus:", a);
      }
    new k(t("\u5DF2") + t(e ? "\u6807\u8BB0\u5B8C\u6210" : "\u53D6\u6D88\u5B8C\u6210") + " " + l + t(" \u4E2A\u8282\u70B9")), await this.rebuild(!0);
  }
  async _setStatus(e, s) {
    if (e.note.file)
      try {
        await this.app.fileManager.processFrontMatter(e.note.file, (i) => {
          i[this.s.statusField || "status"] = s;
        }), new k(t(s ? "\u5DF2\u6807\u8BB0\u5B8C\u6210\uFF1A" : "\u5DF2\u53D6\u6D88\u6807\u8BB0\uFF1A") + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new k(t("\u6807\u8BB0\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
      }
  }
  async _toggleZk(e) {
    if (e.note.file)
      try {
        let s = !1;
        await this.app.fileManager.processFrontMatter(e.note.file, (i) => {
          let n = this.s.zkField || "main";
          s = !(i[n] === !0 || String(i[n]) === "true"), i[n] = s;
        }), new k(t(s ? "\u5DF2\u6807\u8BB0\u4E3B\u7B14\u8BB0\uFF1A" : "\u5DF2\u53D6\u6D88\u4E3B\u7B14\u8BB0\uFF1A") + e.note.title), await this.rebuild(!0);
      } catch (s) {
        new k(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
      }
  }
  _setTypeDialog(e) {
    if (!e || !e.note.file) return;
    let s = this.s.typeColors || {}, i = Object.keys(s), n = [{ label: t("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let l of i) n.push({ label: l + (e.note.type === l ? " \u2713" : ""), path: l });
    new Me(this.app, n, (l) => this._setType(e, l.path), t("\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _setType(e, s) {
    if (e.note.file)
      try {
        let i = this.s.typeField || "type";
        await this.app.fileManager.processFrontMatter(e.note.file, (n) => {
          s ? n[i] = s : delete n[i];
        }), new k(t("\u5DF2\u4FEE\u6539\u7C7B\u578B\uFF1A") + (s || t("\u65E0\u7C7B\u578B")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new k(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setType:", i);
      }
  }
  _setDateDialog(e) {
    if (!e || !e.note.file) return;
    let s = new Ce(this.app);
    s.onOpen = () => {
      let { contentEl: i } = s;
      i.addClass("lkm-multipick"), i.createEl("h3", { text: t("\u4FEE\u6539\u65E5\u671F") }), i.createEl("p", { text: "\u300C" + q(e.note.title, 20) + t("\u300D\u5F53\u524D\u65E5\u671F\uFF1A") + (e.note.date || t("\u65E0")), cls: "lkm-modal-sub" });
      let n = i.createEl("input", { type: "date", cls: "lkm-multipick-input" });
      n.value = e.note.date || "";
      let l = i.createDiv("lkm-multipick-btns");
      new P(l).addButton((o) => o.setButtonText(t("\u786E\u5B9A")).setCta().onClick(() => {
        let a = n.value || "";
        s.close(), this._setDate(e, a);
      })).addButton((o) => o.setButtonText(t("\u6E05\u9664")).onClick(() => {
        s.close(), this._setDate(e, "");
      })).addButton((o) => o.setButtonText(t("\u53D6\u6D88")).onClick(() => s.close())), n.focus();
    }, s.onClose = () => s.contentEl.empty(), s.open();
  }
  async _setDate(e, s) {
    if (e.note.file)
      try {
        let i = this.s.dateField || "date";
        await this.app.fileManager.processFrontMatter(e.note.file, (n) => {
          s ? n[i] = s : delete n[i];
        }), new k(t("\u5DF2\u4FEE\u6539\u65E5\u671F\uFF1A") + (s || t("\u65E0")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new k(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setDate:", i);
      }
  }
  openRootPicker() {
    let e = [...this.notes.values()].filter((i) => i.zk).sort((i, n) => i.title.localeCompare(n.title, "zh")), s = e.length ? e : [...this.notes.values()].filter((i) => !this.referenced.has(i.file.path));
    if (!s.length) {
      new k(t("\u6CA1\u6709\u4E3B\u7B14\u8BB0\uFF08main: true\uFF09"));
      return;
    }
    new Me(
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
      new k(t("\u6CA1\u6709\u53EF\u641C\u7D22\u7684\u7B14\u8BB0"));
      return;
    }
    new Me(
      this.app,
      e.map((s) => ({ label: s.title, path: s.file.path })),
      (s) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = s.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      t("\u641C\u7D22\u7B14\u8BB0\u2026")
    ).open();
  }
  openMultiPick() {
    let e = [...this.notes.values()].sort((l, o) => (o.file.stat.ctime || 0) - (l.file.stat.ctime || 0));
    if (!e.length) {
      new k(t("\u6CA1\u6709\u53EF\u9009\u7684\u7B14\u8BB0"));
      return;
    }
    let s = [];
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length)
      s = this.currentRoot.children.map((l) => l.note.file ? l.note.file.path : null).filter(Boolean);
    else if (this._selKey) {
      let l = this._nodeIndex.get(this._selKey);
      l && l.note.file && s.push(l.note.file.path);
    }
    let i = Object.keys(this.s.typeColors || {}), n = e.map((l) => ({
      label: l.title,
      path: l.file.path,
      isMain: l.zk,
      type: l.type || "",
      orphan: !l.childLinks.length && !this.referenced.has(l.file.path)
    }));
    new Pt(
      this.app,
      n,
      (l) => this._showMultiRoot(l),
      s,
      i
    ).open();
  }
  _buildMultiRootTree(e, s) {
    let i = /* @__PURE__ */ new Set(), n = e.filter((d) => i.has(d.file.path) ? !1 : (i.add(d.file.path), !0)), l = n.map((d) => Ie(this.app, this.notes, d)), o = l.map((d) => {
      let p = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ v(function f(g) {
        g.note.file && p.add(g.note.file.path), g.children.forEach(f);
      }, "collect"))(d), p;
    }), a = n.map((d) => d.file.path), r = [], c = [];
    for (let d = 0; d < l.length; d++) {
      let p = !1;
      for (let f = 0; f < l.length; f++)
        if (d !== f && o[f].has(a[d])) {
          p = !0;
          break;
        }
      p || (r.push(l[d]), c.push(a[d]));
    }
    let h = {
      note: { file: null, title: s, zk: !1, status: !1, type: "", date: "", childLinks: [], parentLinks: [] },
      parent: null,
      children: r,
      expanded: !0,
      isAlias: !1,
      key: "#root"
    };
    for (let d of r) d.parent = h;
    return { virtualRoot: h, rootPaths: c, allSelectedPaths: a };
  }
  _showMultiRoot(e) {
    let s = e.map((o) => this.notes.get(o)).filter(Boolean);
    if (!s.length) {
      new k(t("\u6CA1\u6709\u6709\u6548\u7684\u7B14\u8BB0"));
      return;
    }
    let { virtualRoot: i, rootPaths: n, allSelectedPaths: l } = this._buildMultiRootTree(s, t("\u591A\u9009\u5BFC\u56FE\uFF08") + s.length + t(" \u7BC7\uFF09"));
    this._multiRootPaths = l, this._selectedRootPaths = /* @__PURE__ */ new Set(l), this._kwFile = null, this._multiRoot = !0, this.rootPath = null, this.currentRoot = i, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render({ fit: !0 });
  }
  _renderEmptyGuide(e) {
    let s = e.createDiv("lkm-empty-guide");
    s.createEl("h3", { text: t("\u6B22\u8FCE\u4F7F\u7528\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE") }), s.createEl("p", { text: t("\u7ED3\u5408\u5362\u66FC\u7B14\u8BB0\u7684\u5C42\u7EA7\u601D\u60F3\uFF0C\u5229\u7528 Obsidian \u5F3A\u5927\u7684\u53CC\u94FE\u529F\u80FD\u5EFA\u7ACB\u7B14\u8BB0\u95F4\u7684\u7236\u5B50\u5173\u7CFB\uFF0C\u53D6\u6D88\u4E86\u7F16\u53F7\u2014\u2014\u6BCF\u4E2A\u8282\u70B9\u5C31\u662F\u4E00\u7BC7\u7B14\u8BB0\uFF0C\u901A\u8FC7 frontmatter \u7684 children/parent \u94FE\u63A5\u81EA\u7136\u5173\u8054\uFF0C\u65E0\u9700\u7EF4\u62A4\u4EFB\u4F55\u7F16\u53F7\u3002"), cls: "lkm-guide-intro" });
    let i = s.createDiv("lkm-guide-steps");
    i.createEl("h4", { text: t("\u5FEB\u901F\u4E0A\u624B") });
    let n = [
      ["\u2460", t("\u521B\u5EFA\u7B14\u8BB0"), t("\u70B9\u51FB\u4E0B\u65B9\u300C\u521B\u5EFA\u7B14\u8BB0\u300D\uFF0C\u8F93\u5165\u6807\u9898\u5373\u53EF\u3002\u521B\u5EFA\u65F6\u53EF\u52FE\u9009\u300C\u4E3B\u7B14\u8BB0\u300D\u4F5C\u4E3A\u5BFC\u56FE\u5165\u53E3\u3002")],
      ["\u2461", t("\u6DFB\u52A0\u5B50\u8282\u70B9"), t("\u521B\u5EFA\u540E\uFF0C\u53F3\u952E/\u957F\u6309\u8282\u70B9 \u2192\u300C\u65B0\u589E\u5B50\u8282\u70B9\u300D\uFF0C\u81EA\u52A8\u5728\u7236\u7B14\u8BB0\u5199\u5165 children \u94FE\u63A5\u3002")],
      ["\u2462", t("\u67E5\u770B\u5BFC\u56FE"), t("\u4E3B\u7B14\u8BB0\u81EA\u52A8\u5C55\u5F00\u4E3A\u5BFC\u56FE\u6811\u3002\u62D6\u52A8\u8282\u70B9\u53EF\u79FB\u52A8\uFF0C\u62D6\u52A8\u53F3\u4FA7\u7AEF\u53E3\u53EF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\u3002")]
    ];
    for (let [p, f, g] of n) {
      let _ = i.createDiv("lkm-guide-step");
      _.createEl("span", { cls: "lkm-step-num", text: p });
      let x = _.createDiv("lkm-step-body");
      x.createEl("span", { cls: "lkm-step-title", text: f }), x.createEl("span", { cls: "lkm-step-desc", text: g });
    }
    let l = s.createDiv("lkm-guide-btns"), o = l.createEl("button", { cls: "lkm-btn lkm-btn-action", text: t("\u521B\u5EFA\u7B14\u8BB0") });
    o.onclick = () => this.createStandaloneNote();
    let a = l.createEl("button", { cls: "lkm-btn", text: t("\u521B\u5EFA\u9ED8\u8BA4\u6A21\u677F") });
    a.onclick = () => this._createDefaultTemplate();
    let r = s.createDiv("lkm-guide-help");
    r.createEl("h4", { text: t("\u5DE5\u5177\u680F\u529F\u80FD") });
    let c = [
      [t("\u5DE5\u4F5C\u53F0"), t("\u7EDF\u8BA1\u6982\u89C8\uFF1A\u7B14\u8BB0\u603B\u6570\u3001\u7C7B\u578B\u5206\u5E03\u3001\u5B8C\u6210\u72B6\u6001\u3001\u521B\u5EFA\u70ED\u529B\u56FE\u3001\u5206\u652F\u5206\u5E03\uFF0C\u70B9\u51FB\u6570\u5B57\u53EF\u7B5B\u9009\u67E5\u770B")],
      [t("\u4E3B\u7B14\u8BB0"), t("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u6839\u8282\u70B9\uFF08frontmatter \u4E2D main: true \u7684\u7B14\u8BB0\uFF09")],
      [t("\u5173\u952E\u8BCD"), t("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u7B14\u8BB0\u8FC7\u6EE4\u663E\u793A\u5BFC\u56FE")],
      [t("\u641C\u7D22"), t("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9")],
      [t("\u591A\u9009"), t("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A")],
      [t("\u5C42\u6570 \xB1"), t("\u63A7\u5236\u5BFC\u56FE\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")],
      [t("\u5168\u5C55/\u5168\u6298"), t("\u4E00\u952E\u5C55\u5F00\u6216\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9")],
      [t("\u6A2A/\u7EB5"), t("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u5DE6\u2192\u53F3 \u6216 \u4E0A\u2192\u4E0B\uFF09")],
      [t("\u5BFC\u51FA"), t("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2\u6587\u4EF6")],
      [t("\u6279\u91CF"), t("\u6279\u91CF\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664/\u6539\u7C7B\u578B/\u6807\u8BB0\u5B8C\u6210")],
      [t("\u663E\u793A"), t("\u5207\u6362\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A\u65F6\u95F4\u3001\u7C7B\u578B\u3001\u5B50\u6570\u3001\u56FE\u6807\u7B49")]
    ];
    for (let [p, f] of c) {
      let g = r.createDiv("lkm-guide-row");
      g.createEl("span", { cls: "lkm-guide-key", text: p }), g.createEl("span", { cls: "lkm-guide-val", text: f });
    }
    let h = s.createDiv("lkm-guide-help");
    h.createEl("h4", { text: t("\u8282\u70B9\u64CD\u4F5C") });
    let d = [
      [t("\u53F3\u952E / \u957F\u6309"), t("\u83DC\u5355\uFF1A\u6253\u5F00\u3001\u65B0\u589E\u5B50\u8282\u70B9\u3001\u805A\u7126\u3001\u4E0A\u7EA7\u3001\u5B8C\u6210\u3001\u4E3B\u7B14\u8BB0\u3001\u91CD\u547D\u540D\u3001\u590D\u5236\u3001\u79FB\u52A8\u3001\u5220\u9664")],
      [t("\u53CC\u51FB"), t("\u6253\u5F00\u7B14\u8BB0\u6587\u4EF6")],
      [t("\u62D6\u52A8\u5361\u7247"), t("\u79FB\u52A8\u8282\u70B9\u5230\u5176\u4ED6\u7236\u7B14\u8BB0\u4E0B")],
      [t("\u62D6\u52A8\u7AEF\u53E3"), t("\u8FDE\u7EBF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u591A\u7236/\u7F51\u72B6\uFF09")],
      [t("\u65B9\u5411\u952E"), t("\u2191\u2193\u2190\u2192 \u5728\u8282\u70B9\u95F4\u5BFC\u822A")],
      ["Delete", t("\u5220\u9664\u9009\u4E2D\u8282\u70B9\uFF08\u5F39\u7A97\u9009\u62E9\uFF1A\u79FB\u9664\u5173\u8054/\u5220\u9664\u6587\u4EF6\uFF09")]
    ];
    for (let [p, f] of d) {
      let g = h.createDiv("lkm-guide-row");
      g.createEl("span", { cls: "lkm-guide-key", text: p }), g.createEl("span", { cls: "lkm-guide-val", text: f });
    }
  }
  async _createDefaultTemplate() {
    let e = this.s, s = (e.templateFolder || "").trim();
    if (s || (s = t("99-\u6A21\u677F"), e.templateFolder = s), !this.app.vault.getAbstractFileByPath(J(s)))
      try {
        await this.app.vault.createFolder(J(s));
      } catch (l) {
        new k(t("\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u5939\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l));
        return;
      }
    let n = J(s + t("/\u65B0\u8282\u70B9\u6A21\u677F.md"));
    if (this.app.vault.getAbstractFileByPath(n))
      new k(t("\u6A21\u677F\u5DF2\u5B58\u5728\uFF1A") + n);
    else {
      let l = e.linkField || "children", o = e.zkField || "main", a = e.statusField || "status", r = e.typeField || "type", c = e.dateField || "date", h = `---
${l}: []
${o}: false
${a}: false
${c}: ""
${r}: ""
---

`;
      try {
        await this.app.vault.create(n, h);
      } catch (d) {
        new k(t("\u521B\u5EFA\u6A21\u677F\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
        return;
      }
    }
    e.templatePath = n, await this.plugin.saveSettings(), new k(t("\u5DF2\u521B\u5EFA\u6A21\u677F\u5E76\u8BBE\u4E3A\u9ED8\u8BA4\uFF1A") + n), this.render();
  }
  async _createFirstNote(e) {
    let s = this.s, i = me(e) + ".md", n = J(s.mainFolder), l = J(n + "/" + i);
    if (this.app.vault.getAbstractFileByPath(l)) {
      new k(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + i);
      return;
    }
    let o = s.linkField || "children", a = s.zkField || "main", r = s.statusField || "status", c = s.dateField || "date", h = /* @__PURE__ */ new Date(), d = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0"), p = `---
${o}: []
${a}: true
${r}: false
${c}: "${d}"
---

`;
    try {
      await this.app.vault.create(l, p), new k(t("\u5DF2\u521B\u5EFA\u4E3B\u7B14\u8BB0\u300C") + e + "\u300D"), await this.rebuild(!0);
    } catch (f) {
      new k(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
    }
  }
  async openKeywordPicker() {
    let e = this.app.vault.getAbstractFileByPath(J(this.s.indexFolder)), s = (e && e.children ? e.children : []).filter((i) => i instanceof xe && i.extension === "md");
    if (!s.length) {
      new k("\u300C" + this.s.indexFolder + t("\u300D\u91CC\u6CA1\u6709\u7D22\u5F15\u6587\u4EF6"));
      return;
    }
    new Me(
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
    let l = [...(await this.app.vault.read(e)).matchAll(/\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g)].map((d) => d[1].trim()), o = [], a = /* @__PURE__ */ new Set();
    for (let d of l) {
      let p = this.app.metadataCache.getFirstLinkpathDest(d, e.path);
      if (!p) continue;
      let f = this.notes.get(p.path);
      !f || a.has(f.file.path) || (a.add(f.file.path), o.push(f));
    }
    if (!o.length) {
      new k(t("\u8BE5\u7D22\u5F15\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u7B14\u8BB0\u94FE\u63A5")), this._kwFile = null, this.render();
      return;
    }
    let { virtualRoot: r, allSelectedPaths: c } = this._buildMultiRootTree(o, e.basename);
    this._selectedRootPaths = /* @__PURE__ */ new Set(c), this._multiRootPaths = c, this.currentRoot = r, this._indexTree(r), $e(r, this.depth), this._ensureSelectedVisible(r), this._restoreExpanded(), this._view = null;
    let h = this.contentEl.querySelector(".lkm-canvas");
    h && this._draw(h, Re(r, this.s), Object.assign({ fit: !0 }, s || {}));
  }
  _draw(e, s, i) {
    i = i || {}, e.empty();
    let n = this.s, { nodes: l, edges: o } = s;
    if (!l.length) return;
    let a = 1 / 0, r = 1 / 0, c = -1 / 0, h = -1 / 0, d = n.layoutDir === "v";
    for (let u of l)
      a = Math.min(a, u._x), r = Math.min(r, u._y - n.nodeHeight / 2), c = Math.max(c, u._x + u._w), h = Math.max(h, u._y + n.nodeHeight / 2 + (d ? 28 : 0));
    let p = 40, f = c - a + p * 2, g = h - r + p * 2, _ = V("svg", { class: "lkm-svg" }), x = V("defs"), S = V("marker", { id: "lkm-arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" });
    S.appendChild(V("path", { d: "M0,0 L10,5 L0,10 z", class: "lkm-arrow-fill" })), x.appendChild(S), _.appendChild(x);
    let L = V("g", { class: "lkm-viewport" });
    _.appendChild(L), e.appendChild(_);
    for (let [u, B] of o) {
      let E, M, U, X, ce, A;
      if (n.layoutDir === "v") {
        E = u._x + u._w / 2, M = u._y + n.nodeHeight / 2, U = B._x + B._w / 2, X = B._y - n.nodeHeight / 2, A = (M + X) / 2;
        let de = n.curve ? `M${E},${M} C${E},${A} ${U},${A} ${U},${X}` : `M${E},${M} L${U},${X}`;
        L.appendChild(V("path", { d: de, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      } else {
        E = u._x + u._w, M = u._y, U = B._x, X = B._y, ce = (E + U) / 2;
        let de = n.curve ? `M${E},${M} C${ce},${M} ${ce},${X} ${U},${X}` : `M${E},${M} L${U},${X}`;
        L.appendChild(V("path", { d: de, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      }
    }
    let I = /* @__PURE__ */ v((u) => this._draw(e, Re(this.currentRoot, n), { anchorKey: u }), "redraw"), b = null, z = { before: t("\u2191 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u524D"), after: t("\u2193 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u540E"), child: t("\u2192 \u4F5C\u4E3A\u5B50\u8282\u70B9") }, m = /* @__PURE__ */ v((u, B) => {
      if (!B.note.file) return;
      this._hidePreview(), b = { node: B, sx: u.clientX, sy: u.clientY, moved: !1, target: null, zone: "child" };
      let E = document.createElement("div");
      E.className = "lkm-drag-hint", E.style.display = "none", document.body.appendChild(E);
      let M = /* @__PURE__ */ v((A) => {
        if (!b) return;
        let de = A.clientX - b.sx, Se = A.clientY - b.sy;
        if (!b.moved && Math.hypot(de, Se) < 6) return;
        b.moved = !0, _.classList.add("lkm-dragging");
        let Te = e.getBoundingClientRect(), ve = (A.clientX - Te.left - T) / F, oe = (A.clientY - Te.top - w) / F, te = n.nodeHeight, se = null, ae = "child";
        for (let Q of l)
          if (!(Q.key === B.key || !Q.note.file) && ve >= Q._x && ve <= Q._x + Q._w && oe >= Q._y - te / 2 && oe <= Q._y + te / 2) {
            if (se = Q, n.layoutDir === "v") {
              let pe = (ve - Q._x) / Q._w;
              ae = pe < 0.3 ? "before" : pe > 0.7 ? "after" : "child";
            } else {
              let pe = (oe - (Q._y - te / 2)) / te;
              ae = pe < 0.3 ? "before" : pe > 0.7 ? "after" : "child";
            }
            break;
          }
        (se !== b.target || ae !== b.zone) && (b.target && b.target._el && b.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), b.target = se, b.zone = ae, se && se._el && (se._el.classList.add("lkm-drop-target"), ae === "before" && se._el.classList.add("lkm-drop-before"), ae === "after" && se._el.classList.add("lkm-drop-after"))), E.style.display = se ? "block" : "none", se && (E.textContent = z[ae], E.style.left = A.clientX + 16 + "px", E.style.top = A.clientY + 16 + "px");
      }, "onMove"), U = /* @__PURE__ */ v(() => {
        window.removeEventListener("mousemove", M), window.removeEventListener("mouseup", U), window.removeEventListener("touchmove", X), window.removeEventListener("touchend", ce), _.classList.remove("lkm-dragging"), E.remove();
        let A = b;
        b = null, A && (A.target && A.target._el && A.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), A.moved && A.target && (A.zone === "child" ? this._moveNode(A.node, A.target.note.file.path) : A.node.parent && A.target.parent && A.node.parent.note.file && A.target.parent.note.file && A.node.parent.note.file.path === A.target.parent.note.file.path ? this._reorderSiblings(A.node, A.target.note.file.path, A.zone === "after") : this._moveAndReorder(A.node, A.target, A.zone === "after")));
      }, "onUp"), X = /* @__PURE__ */ v((A) => {
        A.touches.length && M({ clientX: A.touches[0].clientX, clientY: A.touches[0].clientY });
      }, "onTouchMove2"), ce = /* @__PURE__ */ v(() => U(), "onTouchEnd2");
      window.addEventListener("mousemove", M), window.addEventListener("mouseup", U), window.addEventListener("touchmove", X, { passive: !1 }), window.addEventListener("touchend", ce);
    }, "startNodeDrag"), D = /* @__PURE__ */ v((u, B) => {
      if (!B.note.file) return;
      u.preventDefault(), u.stopPropagation(), y = !0;
      let E = V("path", { class: "lkm-wire" });
      L.appendChild(E);
      let M = n.layoutDir === "v" ? B._x + B._w / 2 : B._x + B._w, U = n.layoutDir === "v" ? B._y + n.nodeHeight / 2 : B._y, X = null, ce = /* @__PURE__ */ v((oe, te) => {
        let se = e.getBoundingClientRect();
        return { x: (oe - se.left - T) / F, y: (te - se.top - w) / F };
      }, "local"), A = /* @__PURE__ */ v((oe, te) => {
        let se = (M + oe) / 2;
        E.setAttribute("d", `M${M},${U} C${se},${U} ${se},${te} ${oe},${te}`);
      }, "setWire");
      A(M, U);
      let de = /* @__PURE__ */ v((oe) => {
        let te = ce(oe.clientX, oe.clientY);
        A(te.x, te.y);
        let se = n.nodeHeight, ae = null;
        for (let Q of l)
          if (!(!Q.note.file || Q.key === B.key) && te.x >= Q._x && te.x <= Q._x + Q._w && te.y >= Q._y - se / 2 && te.y <= Q._y + se / 2) {
            ae = Q;
            break;
          }
        ae !== X && (X && X._el && X._el.classList.remove("lkm-wire-target"), X = ae, X && X._el && X._el.classList.add("lkm-wire-target"));
      }, "onMove"), Se = /* @__PURE__ */ v(async () => {
        y = !1, window.removeEventListener("mousemove", de), window.removeEventListener("mouseup", Se), window.removeEventListener("touchmove", Te), window.removeEventListener("touchend", ve), E.remove(), X && X._el && X._el.classList.remove("lkm-wire-target"), X && await this._addRelation(B, X.note);
      }, "onUp"), Te = /* @__PURE__ */ v((oe) => {
        oe.preventDefault();
        let te = oe.touches[0];
        de({ clientX: te.clientX, clientY: te.clientY });
      }, "onTouchMove"), ve = /* @__PURE__ */ v(() => Se(), "onTouchEnd");
      window.addEventListener("mousemove", de), window.addEventListener("mouseup", Se), window.addEventListener("touchmove", Te, { passive: !1 }), window.addEventListener("touchend", ve);
    }, "startWire");
    for (let u of l) {
      let B = !u.note.file, E = null, M = V("g", {
        class: "lkm-node" + (u.note.zk ? " lkm-main" : "") + (u.isAlias ? " lkm-multi" : "") + (u.note.status ? " lkm-done" : ""),
        transform: `translate(${u._x},${u._y - n.nodeHeight / 2})`
      }), U = V("rect", { width: u._w, height: n.nodeHeight, rx: 12, ry: 12, class: "lkm-card" }), X = u.note.type ? (n.typeColors || {})[u.note.type] : null;
      X && U.style.setProperty("--lkm-card-stroke", X), M.appendChild(U);
      let ce = V("g", { class: "lkm-status-dots" }), A = 6, de = /* @__PURE__ */ v(($, ee) => {
        let re = V("circle", { cx: 10, cy: A, r: 4, class: $ });
        ce.appendChild(re);
        let _e = V("circle", { cx: 10, cy: A, r: 7, class: "lkm-dot-hit" }), fe = V("title");
        fe.textContent = ee, _e.appendChild(fe), ce.appendChild(_e), A += 10;
      }, "mkDot");
      u.note.zk && de("lkm-dot-zk", t("\u4E3B\u7B14\u8BB0\uFF1A\u8BE5\u7B14\u8BB0 main: true\uFF0C\u662F\u5BFC\u56FE\u7684\u4E3B\u5165\u53E3")), u.note.status && de("lkm-dot-done", t("\u5DF2\u5B8C\u6210\uFF1A\u8BE5\u7B14\u8BB0 status: true")), u.isAlias && de("lkm-dot-multi", t("\u91CD\u590D\u8282\u70B9\uFF1A\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\u7684\u6302\u70B9\uFF09")), A > 9 && M.appendChild(ce);
      let Se = n.showCreated && !B && u.note.date ? u.note.date : "", Te = n.showType && !B && u.note.type ? u.note.type : "", ve = n.showChildCount && !B && u.children.length ? t("\u5B50 ") + u.children.length : "", oe = [Te, ve, Se].filter(Boolean).join(" \xB7 "), te = !!oe, se = V("text", { x: 16, y: te ? n.nodeHeight / 2 - 4 : n.nodeHeight / 2 + 5, class: "lkm-title" });
      if (se.textContent = u._shown || u.note.title, M.appendChild(se), te) {
        let $ = V("text", { x: 16, y: n.nodeHeight - 8, class: "lkm-sub" });
        $.textContent = q(oe, 50), M.appendChild($);
      }
      let ae = n.nodeHeight / 2, Q = window.innerWidth < 600, pe = Q ? 12 : 10, ze = /* @__PURE__ */ v(($, ee) => {
        let re = V("title");
        re.textContent = ee, $.appendChild(re);
      }, "addTip"), Qe = n.layoutDir === "v";
      if (u.children.length) {
        let $ = V("g", { class: "lkm-expand" });
        ze($, u.expanded ? t("\u6298\u53E0\u5B50\u8282\u70B9") : t("\u5C55\u5F00\u5B50\u8282\u70B9"));
        let ee = Qe ? u._w / 2 : u._w + 14, re = Qe ? n.nodeHeight + 14 : ae;
        $.appendChild(V("circle", { cx: ee, cy: re, r: pe, class: "lkm-dot" }));
        let _e = V("text", { x: ee, y: re + 5, class: "lkm-sign", "text-anchor": "middle" });
        _e.textContent = u.expanded ? "\u2212" : "+", $.appendChild(_e);
        let fe = V("circle", { cx: ee, cy: re, r: pe + 5, class: "lkm-hit" });
        fe.addEventListener("click", (De) => {
          De.stopPropagation(), u.expanded = !u.expanded, this._expandedMem.set(u.note.file ? u.note.file.path : u.key, u.expanded), I(u.key);
        }), fe.addEventListener("mouseenter", () => {
          E && (clearTimeout(E), E = null);
        }), $.appendChild(fe), M.appendChild($);
      }
      if (u.note.file) {
        let $ = Q ? 26 : 24, ee = u._w - (Q ? 20 : 18), re = V("g", { class: "lkm-connect" });
        ze(re, t("\u62D6\u52A8\u8FDE\u7EBF\uFF1A\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u76EE\u6807\u6210\u4E3A\u672C\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u539F\u5173\u7CFB\u4FDD\u7559\uFF09"));
        let _e = ee, fe = ae;
        re.appendChild(V("circle", { cx: _e, cy: fe, r: pe, class: "lkm-connect-bg" })), re.appendChild(V("circle", { cx: _e, cy: fe, r: 2.6, class: "lkm-connect-dot" }));
        let De = V("circle", { cx: _e, cy: fe, r: pe + 5, class: "lkm-hit" });
        if (De.addEventListener("mousedown", (he) => {
          this._batchMode || D(he, u);
        }), De.addEventListener("mouseenter", () => {
          E && (clearTimeout(E), E = null);
        }), De.addEventListener("touchstart", (he) => {
          this._batchMode || D(he, u);
        }, { passive: !1 }), re.appendChild(De), M.appendChild(re), n.showOpenIcon !== !1) {
          ee -= $;
          let he = V("g", { class: "lkm-open" });
          ze(he, t("\u6253\u5F00\u7B14\u8BB0")), he.appendChild(V("circle", { cx: ee, cy: ae, r: pe, class: "lkm-open-bg" }));
          let Ne = V("text", { x: ee, y: ae + 4, class: "lkm-open-sign", "text-anchor": "middle", transform: "rotate(90 " + ee + " " + ae + ")" });
          Ne.textContent = "\u270E", he.appendChild(Ne);
          let Fe = V("circle", { cx: ee, cy: ae, r: pe + 3, class: "lkm-hit" });
          Fe.addEventListener("click", (Xe) => {
            Xe.stopPropagation(), this.app.workspace.getLeaf(!0).openFile(u.note.file);
          }), Fe.addEventListener("mouseenter", () => {
            E && (clearTimeout(E), E = null);
          }), he.appendChild(Fe), M.appendChild(he);
        }
        if (n.showAddIcon !== !1) {
          ee -= $;
          let he = V("g", { class: "lkm-add" });
          ze(he, t("\u65B0\u589E\u5B50\u8282\u70B9\uFF08\u81EA\u52A8\u5199\u5165\u94FE\u63A5\uFF09")), he.appendChild(V("circle", { cx: ee, cy: ae, r: pe, class: "lkm-add-bg" }));
          let Ne = V("text", { x: ee, y: ae + 4, class: "lkm-add-sign", "text-anchor": "middle" });
          Ne.textContent = "\uFF0B", he.appendChild(Ne);
          let Fe = V("circle", { cx: ee, cy: ae, r: pe + 3, class: "lkm-hit" });
          Fe.addEventListener("click", (Xe) => {
            Xe.stopPropagation(), this.createChild(u);
          }), Fe.addEventListener("mouseenter", () => {
            E && (clearTimeout(E), E = null);
          }), he.appendChild(Fe), M.appendChild(he);
        }
      }
      u._el = M, this._batchMode && this._selected.has(u.key) && M.classList.add("lkm-selected"), this._selKey === u.key && M.classList.add("lkm-sel"), this._selectedRootPaths && u.note.file && this._selectedRootPaths.has(u.note.file.path) && M.classList.add("lkm-selected-root"), M.addEventListener("click", ($) => {
        if (this._batchMode) {
          $.stopPropagation(), this._toggleSelect(u.key);
          return;
        }
        this._select(u.key);
      }), M.addEventListener("contextmenu", ($) => {
        $.preventDefault(), $.stopPropagation(), !this._batchMode && (this._select(u.key), this._showNodeMenu(u, $));
      }), M.addEventListener("dblclick", ($) => {
        $.stopPropagation(), E && (clearTimeout(E), E = null), this._hidePreview(), !this._batchMode && (u.note.file ? this.app.workspace.getLeaf(!0).openFile(u.note.file) : u.children.length && (u.expanded = !u.expanded, this._expandedMem.set(u.note.file ? u.note.file.path : u.key, u.expanded), I(u.key)));
      }), M.addEventListener("mousedown", ($) => {
        $.button !== 0 || this._batchMode || ($.stopPropagation(), m($, u));
      }), M.addEventListener("touchstart", ($) => {
        if (this._batchMode || !u.note.file || $.touches.length !== 1) return;
        let ee = $.touches[0], re = { clientX: ee.clientX, clientY: ee.clientY, preventDefault: /* @__PURE__ */ v(() => $.preventDefault(), "preventDefault"), stopPropagation: /* @__PURE__ */ v(() => $.stopPropagation(), "stopPropagation") };
        m(re, u);
      }, { passive: !1 });
      let be = null;
      M.addEventListener("touchstart", ($) => {
        if (this._batchMode || !u.note.file) return;
        let ee = $.touches[0];
        be = setTimeout(() => {
          be = null, this._select(u.key), this._showNodeMenu(u, { clientX: ee.clientX, clientY: ee.clientY });
        }, 500);
      }, { passive: !0 }), M.addEventListener("touchmove", () => {
        be && (clearTimeout(be), be = null);
      }, { passive: !0 }), M.addEventListener("touchend", () => {
        be && (clearTimeout(be), be = null);
      }, { passive: !0 }), u.note.file && !B && (M.addEventListener("mouseenter", ($) => {
        b || (E && clearTimeout(E), E = setTimeout(() => {
          b || (E = null, this._showPreview(u, $));
        }, 1e3));
      }), M.addEventListener("mousemove", ($) => {
        this._previewEl && this._positionPreview($);
      }), M.addEventListener("mouseleave", () => {
        E && (clearTimeout(E), E = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
          this._hidePreview(), this._hideTimer = null;
        }, 200);
      })), L.appendChild(M);
    }
    this._applyFilter();
    let F = 1, T = 0, w = 0;
    this._view && (F = this._view.k, T = this._view.tx, w = this._view.ty);
    let R = /* @__PURE__ */ v(() => L.setAttribute("transform", `translate(${T},${w}) scale(${F})`), "apply"), y = !1, N = /* @__PURE__ */ v(() => {
      let u = e.getBoundingClientRect(), B = u.width || e.clientWidth || 800, E = u.height || e.clientHeight || 600;
      if (F = Math.min(B / f, E / g, 1.4) || 1, d && l.length) {
        let M = l[0];
        T = B / 2 - (M._x + M._w / 2) * F, w = p * F - r * F;
      } else
        T = (B - f * F) / 2 - (a - p) * F, w = (E - g * F) / 2 - (r - p) * F;
      this._view = { k: F, tx: T, ty: w }, R();
    }, "fit");
    this._fit = N;
    let Y = /* @__PURE__ */ v((u) => {
      let B = l.find((M) => M.note.file && M.note.file.path === u);
      if (!B) return;
      let E = e.getBoundingClientRect();
      !E.width || !E.height || (T = E.width / 2 - (B._x + B._w / 2) * F, w = E.height / 2 - B._y * F, this._view = { k: F, tx: T, ty: w }, R());
    }, "centerOnPath");
    if (!this._view || i.fit) {
      if (requestAnimationFrame(() => {
        N(), i.centerPath && Y(i.centerPath);
      }), !i.centerPath) {
        let u = 3, B = /* @__PURE__ */ v(() => {
          u-- > 0 && N();
        }, "onResize");
        window.addEventListener("resize", B);
        let E = setTimeout(() => window.removeEventListener("resize", B), 1500);
        this._cleanup.push(() => {
          window.removeEventListener("resize", B), clearTimeout(E);
        });
      }
    } else
      R(), i.centerPath && Y(i.centerPath);
    let j = /* @__PURE__ */ v((u) => {
      u.preventDefault();
      let B = _.getBoundingClientRect(), E = u.clientX - B.left, M = u.clientY - B.top, U = Math.max(0.2, Math.min(3, F * (u.deltaY < 0 ? 1.1 : 0.9)));
      T = E - (E - T) * (U / F), w = M - (M - w) * (U / F), F = U, this._view = { k: F, tx: T, ty: w }, R();
    }, "onWheel");
    _.addEventListener("wheel", j, { passive: !1 }), this._cleanup.push(() => _.removeEventListener("wheel", j));
    let K = !1, G = !1, ie = 0, Z = 0, ne = /* @__PURE__ */ v((u) => {
      K = !0, G = !1, ie = u.clientX - T, Z = u.clientY - w, _.classList.add("lkm-grabbing");
    }, "onDown"), H = /* @__PURE__ */ v((u) => {
      K && (!G && Math.hypot(u.clientX - (ie + T), u.clientY - (Z + w)) > 3 && (G = !0), T = u.clientX - ie, w = u.clientY - Z, this._view = { k: F, tx: T, ty: w }, R());
    }, "onMove"), O = /* @__PURE__ */ v(() => {
      let u = K;
      K = !1, _.classList.remove("lkm-grabbing"), u && !G && !this._batchMode && this._select(null);
    }, "onUp");
    _.addEventListener("mousedown", ne), window.addEventListener("mousemove", H), window.addEventListener("mouseup", O), this._cleanup.push(() => {
      _.removeEventListener("mousedown", ne), window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", O);
    });
    let W = null, le = null, ue = /* @__PURE__ */ v((u) => {
      if (!y)
        if (u.stopPropagation(), u.touches.length === 2) {
          u.preventDefault();
          let B = u.touches[0].clientX - u.touches[1].clientX, E = u.touches[0].clientY - u.touches[1].clientY;
          le = { dist: Math.hypot(B, E), k: F }, W = null;
        } else u.touches.length === 1 && (W = { x: u.touches[0].clientX - T, y: u.touches[0].clientY - w }, le = null, _.classList.add("lkm-grabbing"));
    }, "onTouchStart"), ye = /* @__PURE__ */ v((u) => {
      if (!y)
        if (u.stopPropagation(), u.touches.length === 2 && le) {
          u.preventDefault();
          let B = u.touches[0].clientX - u.touches[1].clientX, E = u.touches[0].clientY - u.touches[1].clientY, M = Math.max(0.2, Math.min(3, le.k * (Math.hypot(B, E) / le.dist))), U = _.getBoundingClientRect(), X = (u.touches[0].clientX + u.touches[1].clientX) / 2 - U.left, ce = (u.touches[0].clientY + u.touches[1].clientY) / 2 - U.top;
          T = X - (X - T) * (M / F), w = ce - (ce - w) * (M / F), F = M, this._view = { k: F, tx: T, ty: w }, R();
        } else u.touches.length === 1 && W ? (u.preventDefault(), T = u.touches[0].clientX - W.x, w = u.touches[0].clientY - W.y, this._view = { k: F, tx: T, ty: w }, R()) : u.touches.length && u.preventDefault();
    }, "onTouchMove"), Ee = /* @__PURE__ */ v((u) => {
      y || (u.stopPropagation(), u.touches.length === 0 && (W = null, le = null, _.classList.remove("lkm-grabbing")));
    }, "onTouchEnd");
    _.addEventListener("touchstart", ue, { passive: !1 }), _.addEventListener("touchmove", ye, { passive: !1 }), _.addEventListener("touchend", Ee), _.addEventListener("touchcancel", Ee), this._cleanup.push(() => {
      _.removeEventListener("touchstart", ue), _.removeEventListener("touchmove", ye), _.removeEventListener("touchend", Ee), _.removeEventListener("touchcancel", Ee);
    });
  }
  _templateFiles() {
    let e = this.s, s = (e.templateFolder || "").trim();
    if (!s) {
      let n = (e.templatePath || "").trim();
      if (n) {
        let l = n.lastIndexOf("/");
        s = l > 0 ? n.slice(0, l) : "";
      }
    }
    if (!s) return [];
    let i = this.app.vault.getAbstractFileByPath(J(s));
    return !i || !i.children ? [] : i.children.filter((n) => n instanceof xe && n.extension === "md");
  }
  async _buildNewNoteBody(e, s, i, n, l) {
    let o = this.s, a = o.linkField || "children", r = o.backField || "parent", c = o.zkField || "main", h = o.statusField || "status", d = o.typeField || "type", p = o.dateField || "date", f = o.titleField || "title", g = /* @__PURE__ */ new Set([a, r, c, h, p, d, f]), _ = "", x = [];
    if (n) {
      let L = this.app.vault.getAbstractFileByPath(J(n));
      if (L instanceof xe) {
        let I = Ze(await this.app.vault.read(L));
        _ = I.body;
        let b = new Map(I.fields);
        i || (b.get(d) != null ? i = Ae(b.get(d)) : b.get("type") != null && (i = Ae(b.get("type"))));
        let z = [];
        for (let [m, D] of [["zk", c], ["status", h], ["date", p], ["type", d], ["title", f]])
          m !== D && b.has(m) && !b.has(D) && z.push(m + "\u2192" + D);
        z.length && new k(t("\u6A21\u677F\u5B57\u6BB5\u4E0E\u914D\u7F6E\u4E0D\u4E00\u81F4\uFF1A") + z.join("\uFF0C") + t("\u3002\u5DF2\u7528\u914D\u7F6E\u5B57\u6BB5\u540D\u521B\u5EFA\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6A21\u677F\u3002"), 1e4);
        for (let [m, D] of I.fields)
          g.has(m) || x.push([m, D]);
      }
    }
    let S = ["---"];
    S.push(a + ": []"), e && o.autoAddBackLink && S.push(r + ': "' + e + '"'), S.push(c + ": " + (l ? "true" : "false")), S.push(h + ": false"), S.push(p + ": " + s), i && S.push(d + ': "' + i + '"');
    for (let [L, I] of x) S.push(L + ": " + (I ?? ""));
    return S.push("---", ""), S.join(`
`) + (_ || "");
  }
  async _rebuildUntilReady(e, s, i) {
    s = s || 30, i = i !== !1;
    for (let n = 0; n < s; n++) {
      if (await this.rebuild(!0), this.notes.has(e) && (!i || this._treePaths && this._treePaths.has(e)))
        return;
      await new Promise((l) => setTimeout(l, 150));
    }
    new k(t("\u5DF2\u521B\u5EFA\uFF0C\u4F46\u89C6\u56FE\u6682\u672A\u5237\u65B0\uFF0C\u8BF7\u70B9\u5237\u65B0"));
  }
  createChild(e) {
    if (!e || !e.note.file) {
      new k(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6\uFF0C\u65E0\u6CD5\u65B0\u589E\u5B50\u8282\u70B9"));
      return;
    }
    let s = this.s, i = Object.keys(s.typeColors || {}), n = i.includes(s.defaultType) ? s.defaultType : "", l = [{ path: "", name: t("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let r of this._templateFiles()) l.push({ path: r.path, name: r.basename });
    let o = "", a = (s.templatePath || "").trim();
    if (a) {
      let r = l.find((c) => c.path === J(a));
      r && (o = r.path);
    }
    new at(this.app, e.note.title, {
      types: i,
      defaultType: n,
      templates: l,
      defaultTemplate: o,
      typeTemplates: s.typeTemplates || {},
      zkField: s.zkField || "main",
      onSubmit: /* @__PURE__ */ v(async (r, c, h, d) => {
        try {
          let p = me(r) + ".md", f = J(s.mainFolder), g = J(f + "/" + p);
          if (this.app.vault.getAbstractFileByPath(g)) {
            new k(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + p);
            return;
          }
          let _ = /* @__PURE__ */ new Date(), x = _.getFullYear() + "-" + String(_.getMonth() + 1).padStart(2, "0") + "-" + String(_.getDate()).padStart(2, "0"), S = await this._buildNewNoteBody(e.note.file.basename, x, c, h, d);
          await Be(this.app, e.note.file, s.linkField, me(r)), await this.app.vault.create(g, S), new k(t("\u5DF2\u521B\u5EFA\u300C") + me(r) + t("\u300D\u5E76\u5173\u8054\u5230\u300C") + q(e.note.title, 14) + "\u300D");
          let L = e;
          for (; L; )
            this._expandedMem.set(L.note.file ? L.note.file.path : L.key, !0), L = L.parent;
          await this._rebuildUntilReady(g);
        } catch (p) {
          new k(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (p && p.message ? p.message : p));
        }
      }, "onSubmit")
    }).open();
  }
  createStandaloneNote() {
    let e = this.s, s = Object.keys(e.typeColors || {}), i = s.includes(e.defaultType) ? e.defaultType : "", n = [{ path: "", name: t("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let a of this._templateFiles()) n.push({ path: a.path, name: a.basename });
    let l = "", o = (e.templatePath || "").trim();
    if (o) {
      let a = n.find((r) => r.path === J(o));
      a && (l = a.path);
    }
    new at(this.app, "", {
      types: s,
      defaultType: i,
      templates: n,
      defaultTemplate: l,
      typeTemplates: e.typeTemplates || {},
      standalone: !0,
      zkField: e.zkField || "main",
      onSubmit: /* @__PURE__ */ v(async (a, r, c, h) => {
        try {
          let d = me(a) + ".md", p = J(e.mainFolder), f = J(p + "/" + d);
          if (this.app.vault.getAbstractFileByPath(f)) {
            new k(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + d);
            return;
          }
          let g = /* @__PURE__ */ new Date(), _ = g.getFullYear() + "-" + String(g.getMonth() + 1).padStart(2, "0") + "-" + String(g.getDate()).padStart(2, "0"), x = await this._buildNewNoteBody(null, _, r, c, h);
          await this.app.vault.create(f, x), new k(t("\u5DF2\u521B\u5EFA\u300C") + me(a) + "\u300D"), await this._rebuildUntilReady(f, 30, !1), this._focusPath(f);
        } catch (d) {
          new k(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
        }
      }, "onSubmit")
    }).open();
  }
  _renderDash(e) {
    let s = this.s, i = e.createDiv("lkm-toolbar"), n = i.createEl("button", { cls: "lkm-btn", text: t("\u8FD4\u56DE") });
    n.title = t("\u8FD4\u56DE\u601D\u7EF4\u5BFC\u56FE"), n.onclick = () => {
      this._mode = "map", this.render();
    }, i.createSpan({ cls: "lkm-dash-title", text: t("\u5DE5\u4F5C\u53F0") });
    let l = i.createEl("button", { cls: "lkm-btn" + (this._dashTab === "timeline" ? " is-active" : ""), text: t("\u65F6\u95F4\u7EBF") });
    if (l.title = t("\u5207\u6362\u5230\u65F6\u95F4\u7EBF\u89C6\u56FE"), l.style.marginLeft = "auto", l.onclick = () => {
      this._dashTab = this._dashTab === "timeline" ? "stats" : "timeline", this.render();
    }, this._dashTab === "stats") {
      let o = this._dashStats(), a = i.createEl("button", { cls: "lkm-btn", text: t("\u590D\u5236\u7EDF\u8BA1") });
      a.title = t("\u628A\u7EDF\u8BA1\u6458\u8981\u590D\u5236\u4E3A Markdown"), a.onclick = () => {
        navigator.clipboard.writeText(this._dashSummaryMd(o)).then(
          () => new k(t("\u5DF2\u590D\u5236\u7EDF\u8BA1\u6458\u8981")),
          () => new k(t("\u590D\u5236\u5931\u8D25"))
        );
      };
      let r = e.createDiv("lkm-dash");
      if (!o.total) {
        r.createDiv("lkm-dash-h").setText("\u300C" + s.mainFolder + t("\u300D\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u7B14\u8BB0\u3002"));
        return;
      }
      let c = r.createDiv("lkm-cards"), h = [
        { num: o.total, label: t("\u7B14\u8BB0\u603B\u6570"), icon: "files", color: "#6c8cff", filter: { kind: "all" } },
        { num: o.zk, label: t("\u4E3B\u7B14\u8BB0"), icon: "star", color: "#f2a65a", filter: { kind: "zk" } },
        { num: o.kw, label: t("\u5173\u952E\u8BCD\u7D22\u5F15"), icon: "tags", color: "#b07cff", filter: { kind: "kw" } },
        { num: o.done, label: t("\u5DF2\u5B8C\u6210"), icon: "check", color: "#3fa66a", filter: { kind: "done" } },
        { num: o.orphan, label: t("\u672A\u5173\u8054"), icon: "unlink", color: "#4ba3e5", filter: { kind: "orphan" } },
        { num: o.todo, label: t("\u5F85\u529E\u672A\u5B8C\u6210"), icon: "list-checks", color: "#e5534b", filter: { kind: "todo" } },
        { num: o.linkCount, label: t("\u94FE\u63A5\u603B\u6570"), icon: "link", color: "#6c8cff" },
        { num: o.deadLinks, label: t("\u5931\u6548\u94FE\u63A5"), icon: "alert-triangle", color: "#e5534b" }
      ];
      for (let y of h) {
        let N = y.filter && this._isFilterActive(y.filter), Y = c.createDiv("lkm-card-stat lkm-card-click" + (N ? " is-active" : "")), j = Y.createDiv("lkm-card-ico");
        j.style.background = "color-mix(in srgb, " + y.color + " 16%, transparent)", j.style.color = y.color;
        try {
          it(j, y.icon);
        } catch {
        }
        Y.createDiv("lkm-stat-num").setText(String(y.num)), Y.createDiv("lkm-stat-label").setText(y.label + (y.filter && o.total ? " \xB7 " + Math.round(y.num / o.total * 100) + "%" : "")), y.filter && (Y.title = t("\u70B9\u51FB\u67E5\u770B\u300C") + y.label + t("\u300D\u5217\u8868"), Y.addEventListener("click", () => this._toggleDashFilter(y.filter)));
      }
      {
        let y = r.createDiv("lkm-dash-two"), N = y.createDiv("lkm-dash-sec");
        N.createDiv("lkm-dash-h").setText(t("\u7C7B\u578B\u5206\u5E03"));
        let Y = o.byTypeOrder.map((O) => ({ label: O.name, value: O.count, color: O.color, filter: { kind: "type", value: O.name } }));
        o.noType && Y.push({ label: t("\u672A\u6807\u6CE8"), value: o.noType, color: "var(--text-faint)", filter: { kind: "notype" } });
        let j = N.createDiv("lkm-donut-wrap");
        this._renderDonut(j, Y, o.total);
        let K = j.createDiv("lkm-legend");
        for (let O of Y) {
          let W = K.createDiv("lkm-legend-row lkm-type-click" + (this._isFilterActive(O.filter) ? " is-active" : ""));
          W.createSpan({ cls: "lkm-legend-dot" }).style.background = O.color, W.createSpan({ cls: "lkm-legend-name", text: O.label }), W.createSpan({ cls: "lkm-legend-num", text: String(O.value) }), W.addEventListener("click", () => this._toggleDashFilter(O.filter));
        }
        let G = y.createDiv("lkm-dash-sec");
        G.createDiv("lkm-dash-h").setText(t("\u5B8C\u6210\u72B6\u6001"));
        let ie = G.createDiv("lkm-stackbar"), Z = [
          { label: t("\u5DF2\u5B8C\u6210"), value: o.done, color: "var(--lkm-done)", filter: { kind: "done" } },
          { label: t("\u672A\u5B8C\u6210"), value: o.total - o.done, color: "var(--lkm-accent)", filter: { kind: "undone" } }
        ];
        for (let O of Z) {
          if (!O.value) continue;
          let W = ie.createDiv("lkm-stackbar-seg");
          W.style.width = Math.max(6, O.value / o.total * 100) + "%", W.style.background = O.color, this._isFilterActive(O.filter) && W.addClass("is-active"), W.title = O.label + "\uFF1A" + O.value + t(" \u7BC7\uFF0C\u70B9\u51FB\u7B5B\u9009"), W.addEventListener("click", () => this._toggleDashFilter(O.filter));
        }
        let ne = G.createDiv("lkm-chips"), H = /* @__PURE__ */ v((O, W, le, ue) => {
          let ye = ne.createDiv("lkm-chip lkm-type-click" + (this._isFilterActive(ue) ? " is-active" : ""));
          ye.createSpan({ cls: "lkm-legend-dot" }).style.background = le, ye.createSpan({ text: O + " " + W }), ye.addEventListener("click", () => this._toggleDashFilter(ue));
        }, "chip");
        H(t("\u5DF2\u5B8C\u6210"), o.done, "var(--lkm-done)", { kind: "done" }), H(t("\u672A\u5B8C\u6210"), o.total - o.done, "var(--lkm-accent)", { kind: "undone" }), H(t("\u672A\u6807\u65E5\u671F"), o.noDate, "var(--text-faint)", { kind: "nodate" });
      }
      {
        let y = r.createDiv("lkm-dash-sec");
        y.createDiv("lkm-dash-h").setText(t("\u6708\u5EA6\u521B\u5EFA \xB7 \u8FD112\u4E2A\u6708\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u5F53\u6708\u65B0\u589E\uFF09"));
        let N = y.createDiv("lkm-chart-body");
        this._renderBarChart(
          N,
          o.monthly.map((Y) => ({ label: parseInt(Y.key.slice(5, 7), 10) + t("\u6708"), value: Y.count, filter: { kind: "month", value: Y.key } })),
          { height: window.innerWidth < 600 ? 100 : 120, thinLabels: window.innerWidth < 600 }
        );
      }
      {
        let y = r.createDiv("lkm-dash-sec");
        if (y.createDiv("lkm-dash-h").setText(t("\u6811\u6DF1\u5EA6\u5206\u5E03\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u8BE5\u5C42\u8282\u70B9\uFF09")), o.depthMax) {
          let N = y.createDiv("lkm-chart-body"), Y = [];
          for (let j = 1; j <= o.depthMax; j++) Y.push({ label: t("\u7B2C") + j + t("\u5C42"), value: o.depthCount.get(j) || 0, filter: { kind: "depth", value: String(j) } });
          this._renderBarChart(N, Y, { height: window.innerWidth < 600 ? 100 : 120 });
        } else y.createDiv("lkm-heat-sum").setText(t("\u8FD8\u6CA1\u6709\u53EF\u7EDF\u8BA1\u7684\u5C42\u7EA7\u6570\u636E"));
      }
      let d = r.createDiv("lkm-dash-sec"), p = new Set([...o.heat.keys()].map((y) => y.slice(0, 4)));
      p.add(String((/* @__PURE__ */ new Date()).getFullYear()));
      let f = [...p].sort().reverse();
      this._dashHeatIdx = Math.min(this._dashHeatIdx || 0, f.length);
      let g = d.createDiv("lkm-heat-head");
      if (g.createDiv("lkm-dash-h").setText(t("\u521B\u5EFA\u70ED\u529B\u56FE \xB7 ") + (this._dashHeatIdx ? f[this._dashHeatIdx - 1] + t(" \u5E74") : t("\u8FD1\u4E00\u5E74")) + t("\uFF08\u6309 date \u5B57\u6BB5\uFF09")), this._dashHeatIdx || f.length > 1) {
        let y = g.createDiv("lkm-heat-nav"), N = /* @__PURE__ */ v(() => {
          let K = this.contentEl.querySelector(".lkm-dash"), G = K ? K.scrollTop : 0;
          this.render();
          let ie = this.contentEl.querySelector(".lkm-dash");
          ie && (ie.scrollTop = G);
        }, "rerender"), Y = y.createEl("button", { cls: "lkm-step", text: "\u2039" });
        Y.disabled = this._dashHeatIdx >= f.length;
        let j = y.createEl("button", { cls: "lkm-step", text: "\u203A" });
        j.disabled = this._dashHeatIdx <= 0, Y.onclick = () => {
          this._dashHeatIdx++, N();
        }, j.onclick = () => {
          this._dashHeatIdx--, N();
        };
      }
      let _ = 864e5, x = /* @__PURE__ */ new Date();
      x.setHours(0, 0, 0, 0);
      let S = (x.getDay() + 6) % 7, L = window.innerWidth < 600, I = L ? 10 : 12, b, z, m, D;
      if (this._dashHeatIdx) {
        let y = parseInt(f[this._dashHeatIdx - 1], 10), N = new Date(y, 0, 1), Y = new Date(y, 11, 31);
        b = new Date(N.getTime() - (N.getDay() + 6) % 7 * _), z = N, m = Y, D = Math.round((Y.getTime() + (6 - (Y.getDay() + 6) % 7) * _ - b.getTime()) / _ / 7);
      } else {
        let y = new Date(x.getTime() + (6 - S) * _);
        D = L ? 26 : 53, b = new Date(y.getTime() - (D * 7 - 1) * _), z = b, m = x;
      }
      if (d.createDiv("lkm-heat-sum").setText(o.heat.size ? (() => {
        let y = this._ds(z), N = this._ds(m), Y = 0, j = 0, K = { date: "", count: 0 };
        for (let [G, ie] of o.heat) G >= y && G <= N && (Y += ie, j++, ie > K.count && (K = { date: G, count: ie }));
        return (j ? j + t(" \u5929\u6709\u521B\u5EFA \xB7 \u5171 ") + Y + t(" \u7BC7") : t("\u8BE5\u65F6\u95F4\u6BB5\u6682\u65E0\u521B\u5EFA\u8BB0\u5F55")) + (K.count ? t(" \xB7 \u6700\u591A\u4E00\u5929 ") + K.count + t(" \u7BC7\uFF08") + K.date + "\uFF09" : "");
      })() : t("\u8FD8\u6CA1\u6709\u5E26 date \u5B57\u6BB5\u7684\u7B14\u8BB0")), o.heat.size) {
        let y = d.createDiv("lkm-heat-scroll"), N = y.createDiv("lkm-heat-grid");
        N.style.gridTemplateColumns = "26px repeat(" + D + ", " + I + "px)", N.style.gridAutoRows = I + "px";
        let Y = -1;
        for (let Z = 0; Z < D; Z++) {
          let ne = new Date(b.getTime() + Z * 7 * _);
          if (ne.getMonth() !== Y) {
            Y = ne.getMonth();
            let H = N.createDiv("lkm-heat-mon");
            H.style.gridColumn = String(Z + 2), H.style.gridRow = "1", H.setText(ne.getMonth() + 1 + t("\u6708"));
          }
        }
        [t("\u4E00"), t("\u4E09"), t("\u4E94")].forEach((Z, ne) => {
          let H = N.createDiv("lkm-heat-wd");
          H.style.gridColumn = "1", H.style.gridRow = String(ne * 2 + 2), H.setText(Z);
        });
        let j = this._ds(z), K = this._ds(m), G = this._ds(x), ie = null;
        for (let Z = 0; Z < D; Z++)
          for (let ne = 0; ne < 7; ne++) {
            let H = new Date(b.getTime() + (Z * 7 + ne) * _), O = N.createDiv("lkm-heat-cell");
            O.style.gridColumn = String(Z + 2), O.style.gridRow = String(ne + 2);
            let W = this._ds(H);
            if (H > x || W < j || W > K) {
              O.addClass("lkm-heat-off");
              continue;
            }
            let le = o.heat.get(W) || 0, ue = le === 0 ? 0 : le === 1 ? 1 : le <= 2 ? 2 : le <= 4 ? 3 : 4;
            ue && O.addClass("lkm-heat-l" + ue), this._isFilterActive({ kind: "date", value: W }) && O.addClass("is-active"), le && O.addClass("lkm-heat-hit"), W === G && (O.addClass("lkm-heat-today"), ie = O), O.title = W + "\uFF1A" + le + t(" \u7BC7") + (W === G ? t("\uFF08\u4ECA\u5929\uFF09") : ""), O.addEventListener("click", () => this._toggleDashFilter({ kind: "date", value: W }));
          }
        ie && !this._dashHeatIdx && requestAnimationFrame(() => {
          let Z = ie.getBoundingClientRect(), ne = y.getBoundingClientRect();
          Z.right > ne.right - 20 && (y.scrollLeft += Z.right - ne.right + 30);
        });
      }
      let F = r.createDiv("lkm-dash-two"), T = F.createDiv("lkm-dash-sec"), w = this._dashFilters || [];
      if (w.length) {
        T.addClass("lkm-filter-sec");
        let y = this._sortDashItems(this._dashFilterItems(w)), N = T.createDiv("lkm-filter-head");
        N.createSpan({ cls: "lkm-dash-h lkm-filter-title", text: this._dashFilterGroupLabel(w) });
        let Y = N.createSpan({ cls: "lkm-filter-count", text: "\uFF08" + y.length + "\uFF09" }), j = N.createEl("input", { cls: "lkm-filter-search", type: "text", attr: { placeholder: t("\u8FC7\u6EE4\u2026") } });
        j.value = this._dashSearch || "", j.addEventListener("focus", () => {
          if (!window.matchMedia("(hover: none)").matches) return;
          let H = this.contentEl.querySelector(".lkm-dash"), O = this.contentEl.querySelector(".lkm-toolbar");
          if (!H || !O) return;
          let W = H.scrollTop, le = H.style.flex, ue = H.style.height, ye = /* @__PURE__ */ v(() => {
            let Ee = O.getBoundingClientRect().bottom, u = window.visualViewport, E = (u ? u.height + u.offsetTop : window.innerHeight) - Ee;
            E > 60 && (H.style.flex = "none", H.style.height = E + "px"), H.scrollTop = Math.max(0, N.offsetTop - 50);
          }, "doAdjust");
          setTimeout(ye, 300), setTimeout(ye, 500), j.addEventListener("blur", () => {
            H.style.flex = le, H.style.height = ue, H.scrollTop = W;
          }, { once: !0 });
        });
        let K = N.createEl("button", { cls: "lkm-btn", text: t("\u6392\u5E8F\uFF1A") + { date: t("\u65E5\u671F"), name: t("\u540D\u79F0") }[this._dashSort || "date"] });
        K.onclick = () => {
          this._dashSort = this._dashSort === "date" ? "name" : "date", this.render();
        };
        let G = N.createEl("button", { cls: "lkm-btn", text: t("\u6E05\u9664") });
        G.onclick = () => {
          this._dashFilters = [], this._dashSearch = "", this.render();
        }, y.length || T.createDiv("lkm-heat-sum").setText(t("\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7B14\u8BB0"));
        let ie = T.createDiv("lkm-filter-list"), Z = [];
        for (let H of y) {
          let O = this._dashRow(ie, H);
          Z.push({ el: O, text: (H.title + " " + (H.type || "")).toLowerCase() }), O.addEventListener("click", () => {
            H.isIndex ? (this._kwFile = H.file, this._multiRoot = !1, this._mode = "map", this.render()) : this.app.workspace.getLeaf(!0).openFile(H.file);
          });
        }
        let ne = /* @__PURE__ */ v(() => {
          let H = (this._dashSearch || "").trim().toLowerCase(), O = 0;
          for (let W of Z) {
            let le = !H || W.text.includes(H);
            W.el.style.display = le ? "" : "none", le && O++;
          }
          Y.setText("\uFF08" + (H ? O + "/" : "") + y.length + "\uFF09");
        }, "applySearch");
        j.addEventListener("input", () => {
          this._dashSearch = j.value, ne();
        }), ne();
      } else {
        T.createDiv("lkm-dash-h").setText(t("\u5206\u652F\u5206\u5E03 \xB7 \u5B8C\u6210\u8FDB\u5EA6")), o.branches.length || T.createDiv("lkm-heat-sum").setText(t("\u8FD8\u6CA1\u6709 main: true \u7684\u4E3B\u7B14\u8BB0"));
        let y = this._dashBranchAll && o.branches.length > 6, N = y ? o.branches : o.branches.slice(0, 6), Y = T.createDiv("lkm-filter-list lkm-branch-list"), j = o.branches[0] && o.branches[0].total || 1;
        for (let K of N) {
          let G = Y.createDiv("lkm-branch-row");
          G.title = K.title + t("\uFF0C\u70B9\u51FB\u5728\u5BFC\u56FE\u4E2D\u6253\u5F00"), G.createSpan({ cls: "lkm-branch-name", text: q(K.title, 10) });
          let ie = G.createDiv("lkm-type-bar").createDiv("lkm-branch-scaler");
          ie.style.width = Math.max(3, Math.round(K.total / j * 100)) + "%";
          let Z = ie.createDiv("lkm-branch-done");
          Z.style.width = (K.total ? Math.round(K.done / K.total * 100) : 0) + "%", G.createSpan({ cls: "lkm-type-num", text: K.done + "/" + K.total + " \xB7 " + Math.round(K.done / K.total * 100) + "%" }), G.addEventListener("click", () => {
            this.rootPath = K.path, this._view = null, this._kwFile = null, this._multiRoot = !1, this._mode = "map", this._expandedMem.clear(), this.render();
          });
        }
        if (o.branches.length > 6) {
          let K = T.createEl("button", { cls: "lkm-btn", text: y ? t("\u6536\u8D77") : t("\u5C55\u5F00\u5168\u90E8 ") + o.branches.length + t(" \u4E2A\u5206\u652F") });
          K.onclick = () => {
            this._dashBranchAll = !this._dashBranchAll, this.render();
          };
        }
      }
      let R = F.createDiv("lkm-dash-sec");
      R.createDiv("lkm-dash-h").setText(t("\u6700\u8FD1\u521B\u5EFA"));
      for (let y of o.recent)
        this._dashRow(R, y).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(y.file));
      if (o.modified.length) {
        R.createDiv("lkm-dash-h lkm-sec-gap").setText(t("\u6700\u8FD1\u4FEE\u6539"));
        for (let y of o.modified)
          this._dashRow(R, y).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(y.file));
      }
    } else
      this._renderTimelineDash(e);
  }
  _renderTimelineDash(e) {
    let i = [...je(this.app, this.s).map.values()], n = e.createDiv({ cls: "lkm-tl-toolbar" }), l = n.createEl("input", { type: "text", cls: "lkm-tl-search", placeholder: t("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    l.value = this._tlSearch, l.addEventListener("input", () => {
      this._tlSearch = l.value.toLowerCase().trim(), this._renderTimelineBody(g, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: t("\u7C7B\u578B") });
    let o = n.createEl("select", { cls: "lkm-tl-typesel" });
    o.createEl("option", { value: "", text: t("\u5168\u90E8") });
    let a = [...new Set(i.map((_) => _.type).filter(Boolean))].sort();
    for (let _ of a)
      o.createEl("option", { value: _, text: _ });
    o.value = this._tlTypeFilter, o.addEventListener("change", () => {
      this._tlTypeFilter = o.value, this._renderTimelineBody(g, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: t("\u65F6\u95F4") });
    let r = n.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [_, x] of [["all", t("\u5168\u90E8")], ["day", t("\u4ECA\u65E5")], ["week", t("\u672C\u5468")], ["month", t("\u672C\u6708")], ["year", t("\u672C\u5E74")], ["pweek", t("\u8FD1\u4E00\u5468")], ["pmonth", t("\u8FD1\u4E00\u6708")], ["pyear", t("\u8FD1\u4E00\u5E74")]])
      r.createEl("option", { value: _, text: x });
    r.value = this._tlRange, r.addEventListener("change", () => {
      this._tlRange = r.value, this._renderTimelineBody(g, i);
    });
    let c = n.createEl("input", { type: "date", cls: "lkm-tl-datesel" });
    c.value = this._tlDateFilter, c.title = t("\u6309\u6307\u5B9A\u65E5\u671F\u7B5B\u9009"), c.addEventListener("change", () => {
      this._tlDateFilter = c.value, this._renderTimelineBody(g, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: t("\u6027\u8D28") });
    let h = n.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [_, x] of [["all", t("\u5168\u90E8")], ["zk", t("\u4E3B\u7B14\u8BB0")], ["normal", t("\u666E\u901A")]])
      h.createEl("option", { value: _, text: x });
    h.value = this._tlZkFilter, h.addEventListener("change", () => {
      this._tlZkFilter = h.value, this._renderTimelineBody(g, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: t("\u72B6\u6001") });
    let d = n.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [_, x] of [["all", t("\u5168\u90E8")], ["done", t("\u5DF2\u5B8C\u6210")], ["undone", t("\u672A\u5B8C\u6210")]])
      d.createEl("option", { value: _, text: x });
    d.value = this._tlStatusFilter, d.addEventListener("change", () => {
      this._tlStatusFilter = d.value, this._renderTimelineBody(g, i);
    });
    let p = n.createEl("button", { cls: "lkm-btn lkm-tl-sortbtn", text: this._tlSort === "desc" ? t("\u65B0\u2192\u65E7") : t("\u65E7\u2192\u65B0") });
    p.addEventListener("click", () => {
      this._tlSort = this._tlSort === "desc" ? "asc" : "desc", p.textContent = this._tlSort === "desc" ? t("\u65B0\u2192\u65E7") : t("\u65E7\u2192\u65B0"), this._renderTimelineBody(g, i);
    });
    let f = n.createEl("button", { cls: "lkm-btn", text: t("\u6E05\u7A7A") });
    f.title = t("\u6E05\u7A7A\u6240\u6709\u7B5B\u9009\u6761\u4EF6"), f.addEventListener("click", () => {
      this._tlSearch = "", this._tlTypeFilter = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this.render();
    });
    let g = e.createDiv({ cls: "lkm-tl-body" });
    this._renderTimelineBody(g, i);
  }
  _renderTimelineBody(e, s) {
    e.empty();
    let i = s;
    if (this._tlTypeFilter && (i = i.filter((c) => c.type === this._tlTypeFilter)), this._tlSearch && (i = i.filter((c) => c.title.toLowerCase().includes(this._tlSearch))), this._tlZkFilter === "zk" ? i = i.filter((c) => c.zk) : this._tlZkFilter === "normal" && (i = i.filter((c) => !c.zk)), this._tlStatusFilter === "done" ? i = i.filter((c) => c.status) : this._tlStatusFilter === "undone" && (i = i.filter((c) => !c.status)), this._tlDateFilter)
      i = i.filter((c) => c.ctime && c.ctime.slice(0, 10) === this._tlDateFilter);
    else if (this._tlRange !== "all") {
      let c = /* @__PURE__ */ new Date(), h = c.getFullYear() + "-" + String(c.getMonth() + 1).padStart(2, "0") + "-" + String(c.getDate()).padStart(2, "0"), d = /* @__PURE__ */ new Date(h), p = null;
      if (this._tlRange === "day" ? p = d : this._tlRange === "week" || this._tlRange === "pweek" ? p = new Date(d.getTime() - 6 * 864e5) : this._tlRange === "month" || this._tlRange === "pmonth" ? p = new Date(d.getTime() - 29 * 864e5) : (this._tlRange === "year" || this._tlRange === "pyear") && (p = new Date(d.getTime() - 364 * 864e5)), p) {
        let f = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0");
        i = i.filter((g) => {
          if (!g.ctime) return !1;
          let _ = g.ctime.slice(0, 10);
          return _ >= f && _ <= h;
        });
      }
    }
    let n = i.filter((c) => c.ctime), l = i.filter((c) => !c.ctime);
    n.sort((c, h) => this._tlSort === "desc" ? String(h.ctime).localeCompare(String(c.ctime)) : String(c.ctime).localeCompare(String(h.ctime)));
    let o = [], a = null, r = null;
    for (let c of n) {
      let h = c.ctime.slice(0, 10);
      h !== a && (a = h, r = { key: h, items: [] }, o.push(r)), r.items.push(c);
    }
    for (let c of o) {
      let h = e.createDiv({ cls: "lkm-tl-day" }), [d, p, f] = c.key.split("-"), g = new Date(parseInt(d), parseInt(p) - 1, parseInt(f)), _ = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][g.getDay()];
      h.createDiv({ cls: "lkm-tl-day-label", text: c.key + " " + t("\u5468") + _ + " (" + c.items.length + ")" });
      let x = h.createDiv({ cls: "lkm-tl-items" });
      for (let S of c.items)
        this._renderTimelineItem(x, S);
    }
    if (l.length) {
      let c = e.createDiv({ cls: "lkm-tl-day lkm-tl-nodate" });
      c.createDiv({ cls: "lkm-tl-day-label", text: t("\u65E0\u65E5\u671F") + " (" + l.length + ")" });
      let h = c.createDiv({ cls: "lkm-tl-items" });
      for (let d of l)
        this._renderTimelineItem(h, d);
    }
    i.length || e.createDiv({ cls: "lkm-tl-empty", text: t("\u6682\u65E0\u7B14\u8BB0") });
  }
  _renderTimelineItem(e, s) {
    let i = e.createDiv({ cls: "lkm-tl-item" }), n = i.createDiv({ cls: "lkm-tl-item-content" });
    if (s.type) {
      let a = this.s.typeColors && this.s.typeColors[s.type], r = n.createEl("span", { cls: "lkm-tl-badge", text: s.type });
      a && (r.style.background = a);
    }
    s.zk && n.createEl("span", { cls: "lkm-tl-main-badge", text: t("\u4E3B\u7B14\u8BB0") }), n.createEl("span", { cls: "lkm-tl-title", text: s.title }), s.status && n.createEl("span", { cls: "lkm-tl-status", text: "\u2713" }), i.addEventListener("click", (a) => {
      a.target.closest("a") || (this.app.workspace.openLinkText(s.file.basename, s.file.path, a.ctrlKey || a.metaKey), this.locateFile(s.file, !0));
    });
    let l = /* @__PURE__ */ v((a, r) => {
      let c = new Ye();
      c.addItem((h) => {
        h.setTitle(t("\u5728\u65B0\u6807\u7B7E\u6253\u5F00")).setIcon("file-plus").onClick(() => {
          this.app.workspace.openLinkText(s.file.basename, s.file.path, !0);
        });
      }), c.addItem((h) => {
        h.setTitle(t("\u5728\u5BFC\u56FE\u4E2D\u663E\u793A")).setIcon("git-fork").onClick(() => {
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
      }), c.showAtPosition({ x: a, y: r });
    }, "showMenu");
    i.addEventListener("contextmenu", (a) => {
      a.preventDefault(), l(a.clientX, a.clientY);
    });
    let o = null;
    i.addEventListener("touchstart", (a) => {
      let r = a.touches[0];
      o = setTimeout(() => {
        o = null, l(r.clientX, r.clientY);
      }, 500);
    }, { passive: !0 }), i.addEventListener("touchmove", () => {
      o && (clearTimeout(o), o = null);
    }, { passive: !0 }), i.addEventListener("touchend", () => {
      o && (clearTimeout(o), o = null);
    }, { passive: !0 });
  }
  _dashRow(e, s) {
    let i = this.s, n = e.createDiv("lkm-recent-row");
    n.title = s.isIndex ? s.title + t("\uFF0C\u70B9\u51FB\u6253\u5F00\u5173\u952E\u8BCD\u89C6\u56FE") : s.title + t("\uFF0C\u70B9\u51FB\u6253\u5F00\u7B14\u8BB0");
    let l = (i.typeColors || {})[s.type];
    if (l && (n.createSpan({ cls: "lkm-recent-dot" }).style.background = l), n.createSpan({ cls: "lkm-recent-name", text: q(s.title, 14) }), s.created && !s.mtime && n.createSpan({ cls: "lkm-recent-date", text: s.created }), s.mtime && n.createSpan({ cls: "lkm-recent-date", text: s.mtime }), !s.isIndex) {
      let o = n.createSpan({ cls: "lkm-row-jump", title: t("\u5728\u5BFC\u56FE\u4E2D\u5B9A\u4F4D") });
      try {
        it(o, "crosshair");
      } catch {
      }
      o.addEventListener("click", (a) => {
        a.stopPropagation(), this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._dashFilters = [], this.locateFile(s.file);
      });
    }
    return n;
  }
  _renderDonut(e, s, i) {
    let r = 2 * Math.PI * 49, c = V("svg", { class: "lkm-donut-svg", viewBox: "0 0 116 116", width: 116, height: 116 });
    c.appendChild(V("circle", { cx: 58, cy: 58, r: 49, fill: "none", stroke: "var(--background-secondary)", "stroke-width": 13 }));
    let h = s.reduce((g, _) => g + _.value, 0), d = 0;
    for (let g of s) {
      let _ = h ? g.value / h : 0;
      if (!_) continue;
      let x = Math.max(0, _ * r - 2.5), S = V("circle", {
        cx: 58,
        cy: 58,
        r: 49,
        fill: "none",
        stroke: g.color,
        "stroke-width": 13,
        "stroke-linecap": "butt",
        "stroke-dasharray": x + " " + (r - x),
        "stroke-dashoffset": -(d * r),
        transform: "rotate(-90 58 58)",
        class: "lkm-donut-seg" + (this._isFilterActive(g.filter) ? " is-active" : "")
      });
      S.addEventListener("click", () => this._toggleDashFilter(g.filter)), c.appendChild(S), d += _;
    }
    let p = V("text", { x: 58, y: 57, class: "lkm-donut-num", "text-anchor": "middle" });
    p.textContent = String(i), c.appendChild(p);
    let f = V("text", { x: 58, y: 71, class: "lkm-donut-cap", "text-anchor": "middle" });
    f.textContent = t("\u603B\u7B14\u8BB0"), c.appendChild(f), e.appendChild(c);
  }
  _renderBarChart(e, s, i) {
    i = i || {};
    let n = i.height || 120, l = 16, o = 18, a = Math.max(e.clientWidth || 300, 120), r = Math.max(1, ...s.map((p) => p.value)), c = a / Math.max(s.length, 1), h = n - l - o, d = V("svg", { class: "lkm-bars-svg", viewBox: "0 0 " + a + " " + n, preserveAspectRatio: "none", width: "100%", height: n });
    for (let p = 1; p <= 3; p++) {
      let f = l + h * (1 - p / 3);
      d.appendChild(V("line", { x1: 0, y1: f, x2: a, y2: f, class: "lkm-bars-grid" }));
    }
    s.forEach((p, f) => {
      let g = p.value > 0 ? Math.max(3, h * p.value / r) : 0, _ = f * c + c * 0.22, x = c * 0.56, S = n - o - g, L = V("rect", { x: _, y: S, width: x, height: g, rx: Math.min(4, x / 2), class: "lkm-bar" + (this._isFilterActive(p.filter) ? " is-active" : "") });
      if (p.color && (L.style.fill = p.color), p.filter && L.addEventListener("click", () => this._toggleDashFilter(p.filter)), d.appendChild(L), p.value > 0) {
        let I = V("text", { x: _ + x / 2, y: S - 4, class: "lkm-bars-val", "text-anchor": "middle" });
        I.textContent = String(p.value), d.appendChild(I);
      }
      if (!i.thinLabels || f % 2 === 0) {
        let I = V("text", { x: _ + x / 2, y: n - 5, class: "lkm-bars-lab", "text-anchor": "middle" });
        I.textContent = p.label, d.appendChild(I);
      }
    }), e.appendChild(d);
  }
  _isFilterActive(e) {
    return (this._dashFilters || []).some((s) => s.kind === e.kind && (s.value || "") === (e.value || ""));
  }
  _toggleDashFilter(e) {
    this._dashFilters = this._dashFilters || [];
    let s = { done: "undone", undone: "done", notype: "type", type: "notype" };
    if (e.kind === "all" || e.kind === "kw")
      this._dashFilters = this._isFilterActive(e) ? [] : [Object.assign({}, e)];
    else {
      let i = this._dashFilters.findIndex((n) => n.kind === e.kind && (n.value || "") === (e.value || ""));
      if (i >= 0) this._dashFilters.splice(i, 1);
      else {
        let n = s[e.kind];
        n && this._dashFilters.some((l) => l.kind === n) && (this._dashFilters = this._dashFilters.filter((l) => l.kind !== n)), this._dashFilters = this._dashFilters.filter((l) => l.kind !== "all" && l.kind !== "kw"), this._dashFilters.push(e);
      }
    }
    this.render(), this._dashFilters.length && requestAnimationFrame(() => {
      let i = this.contentEl.querySelector(".lkm-filter-sec");
      i && i.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _dashFilterLabel(e) {
    return e.kind === "all" ? t("\u5168\u90E8\u7B14\u8BB0") : e.kind === "zk" ? t("\u4E3B\u7B14\u8BB0") : e.kind === "kw" ? t("\u5173\u952E\u8BCD\u7D22\u5F15") : e.kind === "done" ? t("\u5DF2\u5B8C\u6210") : e.kind === "undone" ? t("\u672A\u5B8C\u6210") : e.kind === "orphan" ? t("\u672A\u5173\u8054") : e.kind === "type" ? t("\u7C7B\u578B\uFF1A") + e.value : e.kind === "notype" ? t("\u672A\u6807\u6CE8\u7C7B\u578B") : e.kind === "date" || e.kind === "month" ? t("\u521B\u5EFA\u4E8E ") + e.value : e.kind === "depth" ? t("\u7B2C") + e.value + t("\u5C42") : e.kind === "nodate" ? t("\u672A\u6807\u65E5\u671F") : e.kind === "todo" ? t("\u5F85\u529E\u672A\u5B8C\u6210") : t("\u7B5B\u9009");
  }
  _dashFilterGroupLabel(e) {
    let s = /* @__PURE__ */ new Set(["date", "month", "type", "depth"]), i = /* @__PURE__ */ new Map(), n = [];
    for (let o of e)
      s.has(o.kind) ? (i.has(o.kind) || i.set(o.kind, []), i.get(o.kind).push(o)) : n.push(o);
    let l = [];
    for (let [o, a] of i) {
      if (a.length === 1) {
        l.push(this._dashFilterLabel(a[0]));
        continue;
      }
      let r = t(o === "date" || o === "month" ? "\u521B\u5EFA\u4E8E " : o === "type" ? "\u7C7B\u578B\uFF1A" : "\u7B2C"), c = o === "depth" ? t(" \u5C42") : "";
      l.push(r + a.map((h) => h.value).join("\u3001") + c);
    }
    for (let o of n) l.push(this._dashFilterLabel(o));
    return l.join(" + ");
  }
  _dashFilterItems(e) {
    let s = [...this.notes.values()], i = this._depthMap();
    if (e.find((c) => c.kind === "kw")) {
      let c = this.app.vault.getAbstractFileByPath(J(this.s.indexFolder)), h = new Set((c && c.children ? c.children : []).filter((d) => d instanceof xe && d.extension === "md").map((d) => d.path));
      s = s.filter((d) => h.has(d.file.path));
    }
    let l = e.filter((c) => c.kind !== "kw"), o = /* @__PURE__ */ new Set(["date", "month", "type", "depth"]), a = /* @__PURE__ */ new Map(), r = [];
    for (let c of l)
      o.has(c.kind) ? (a.has(c.kind) || a.set(c.kind, []), a.get(c.kind).push(c)) : r.push(c);
    for (let [c, h] of a)
      c === "date" ? s = s.filter((d) => h.some((p) => d.date === p.value)) : c === "month" ? s = s.filter((d) => h.some((p) => (d.date || "").slice(0, 7) === p.value)) : c === "type" ? s = s.filter((d) => h.some((p) => d.type === p.value)) : c === "depth" && (s = s.filter((d) => h.some((p) => String(i.get(d.file.path) || 0) === p.value)));
    for (let c of r)
      c.kind === "zk" ? s = s.filter((h) => h.zk) : c.kind === "done" ? s = s.filter((h) => h.status) : c.kind === "undone" ? s = s.filter((h) => !h.status) : c.kind === "orphan" ? s = s.filter((h) => !this.referenced.has(h.file.path)) : c.kind === "notype" ? s = s.filter((h) => !h.type) : c.kind === "nodate" ? s = s.filter((h) => !h.date) : c.kind === "todo" && (s = s.filter((h) => h.type === t("\u5F85\u529E") && !h.status));
    return s.map((c) => ({ title: c.title, created: c.date || "", type: c.type || "", file: c.file }));
  }
  _sortDashItems(e) {
    let s = this._dashSort || "date", i = e.slice();
    return s === "name" ? i.sort((n, l) => String(n.title).localeCompare(String(l.title), "zh")) : i.sort((n, l) => String(l.created || "").localeCompare(String(n.created || ""))), i;
  }
  _ds(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  _depthMap() {
    let e = /* @__PURE__ */ new Map(), s = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!s) return e;
    let i = Ie(this.app, this.notes, s);
    return (/* @__PURE__ */ v((function n(l, o) {
      l.note.file && !e.has(l.note.file.path) && e.set(l.note.file.path, o), l.children.forEach((a) => n(a, o + 1));
    }), "walk"))(i, 1), e;
  }
  _dashSummaryMd(e) {
    let s = [];
    if (s.push(t("## \u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE\u5DE5\u4F5C\u53F0\u7EDF\u8BA1 ") + this._ds(/* @__PURE__ */ new Date())), s.push(""), s.push(t("| \u6307\u6807 | \u6570\u91CF |")), s.push("| --- | --- |"), s.push(t("| \u7B14\u8BB0\u603B\u6570 | ") + e.total + " |"), s.push(t("| \u4E3B\u7B14\u8BB0 | ") + e.zk + " |"), s.push(t("| \u5173\u952E\u8BCD\u7D22\u5F15 | ") + e.kw + " |"), s.push(t("| \u5DF2\u5B8C\u6210 | ") + e.done + " |"), s.push(t("| \u672A\u5173\u8054 | ") + e.orphan + " |"), s.push(t("| \u5F85\u529E\u672A\u5B8C\u6210 | ") + e.todo + " |"), s.push(t("| \u672A\u6807\u6CE8\u7C7B\u578B | ") + e.noType + " |"), s.push(t("| \u672A\u6807\u65E5\u671F | ") + e.noDate + " |"), s.push(""), e.byTypeOrder.length) {
      s.push(t("### \u7C7B\u578B\u5206\u5E03")), s.push(t("| \u7C7B\u578B | \u6570\u91CF | \u5360\u6BD4 |")), s.push("| --- | --- | --- |");
      for (let i of e.byTypeOrder) s.push("| " + i.name + " | " + i.count + " | " + (e.total ? Math.round(i.count / e.total * 100) : 0) + "% |");
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
      s.push(t("### \u5206\u652F\u5206\u5E03\uFF08\u5B8C\u6210/\u603B\u6570\uFF09"));
      for (let i of e.branches) s.push("- " + i.title + "\uFF1A" + i.done + "/" + i.total);
      s.push("");
    }
    return s.join(`
`);
  }
  _dashStats() {
    let e = [...this.notes.values()], s = e.length, i = e.filter((w) => w.zk).length, n = e.filter((w) => w.status).length, l = e.filter((w) => w.type === t("\u5F85\u529E") && !w.status).length, o = e.filter((w) => !w.date).length, a = e.filter((w) => !this.referenced.has(w.file.path)).length, r = this.s.typeColors || {}, c = /* @__PURE__ */ new Map(), h = 0;
    for (let w of e)
      w.type ? c.set(w.type, (c.get(w.type) || 0) + 1) : h++;
    let d = Object.keys(r).filter((w) => c.has(w)).map((w) => ({ name: w, color: r[w], count: c.get(w) }));
    for (let [w, R] of c) r[w] || d.push({ name: w, color: "var(--text-faint)", count: R });
    let p = this._depthMap(), f = /* @__PURE__ */ new Map();
    for (let w of p.values()) w && f.set(w, (f.get(w) || 0) + 1);
    let g = f.size ? Math.max(...f.keys()) : 0, _ = /* @__PURE__ */ new Date();
    _.setHours(0, 0, 0, 0);
    let x = [];
    for (let w = 11; w >= 0; w--) {
      let R = new Date(_.getFullYear(), _.getMonth() - w, 1);
      x.push({ key: R.getFullYear() + "-" + String(R.getMonth() + 1).padStart(2, "0"), count: 0 });
    }
    for (let w of e) {
      if (!w.date) continue;
      let R = x.find((y) => y.key === w.date.slice(0, 7));
      R && R.count++;
    }
    let S = 0, L = this.app.vault.getAbstractFileByPath(J(this.s.indexFolder));
    L && L.children && (S = L.children.filter((w) => w instanceof xe && w.extension === "md").length);
    let I = /* @__PURE__ */ new Map();
    for (let w of e) w.date && I.set(w.date, (I.get(w.date) || 0) + 1);
    let b = e.filter((w) => w.zk).map((w) => {
      let R = Ie(this.app, this.notes, w), y = 0, N = 0, Y = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ v((function j(K) {
        if (K.note.file) {
          if (Y.has(K.note.file.path)) return;
          Y.add(K.note.file.path);
        }
        y++, K.note.status && N++;
        for (let G of K.children) j(G);
      }), "walk"))(R), { path: w.file.path, title: w.title, total: y, done: N };
    }).sort((w, R) => R.total - w.total), z = /* @__PURE__ */ v((w) => ({ title: w.title, created: w.date || "", type: w.type || "", file: w.file }), "toItem"), m = e.filter((w) => w.date).sort((w, R) => String(R.date).localeCompare(String(w.date))).slice(0, 8).map(z), D = e.slice().sort((w, R) => (R.file.stat && R.file.stat.mtime || 0) - (w.file.stat && w.file.stat.mtime || 0)).slice(0, 6).map((w) => {
      let R = z(w);
      try {
        let y = new Date(w.file.stat.mtime);
        R.mtime = String(y.getFullYear()).slice(2) + "-" + String(y.getMonth() + 1).padStart(2, "0") + "-" + String(y.getDate()).padStart(2, "0") + " " + String(y.getHours()).padStart(2, "0") + ":" + String(y.getMinutes()).padStart(2, "0");
      } catch {
      }
      return R;
    }), F = 0, T = 0;
    for (let w of e)
      for (let R of w.childLinks) {
        F++;
        let y = this.app.metadataCache.getFirstLinkpathDest(R, w.file.path);
        (!y || !this.notes.has(y.path)) && T++;
      }
    return { total: s, zk: i, done: n, todo: l, noDate: o, orphan: a, noType: h, byTypeOrder: d, depthCount: f, depthMax: g, monthly: x, kw: S, heat: I, branches: b, recent: m, modified: D, linkCount: F, deadLinks: T };
  }
};
v(wt, "LinkMindmapView");
var Le = wt, yt = class extends Et {
  constructor(e, s) {
    super(e, s), this.plugin = s;
  }
  display() {
    let { containerEl: e } = this;
    e.empty(), e.createEl("h2", { text: t("Link Mindmap \u8BBE\u7F6E") }), new P(e).setName(t("\u8BED\u8A00")).setDesc(t("\u754C\u9762\u8BED\u8A00\uFF08\u81EA\u52A8\u8DDF\u968F Obsidian \u8BBE\u7F6E\uFF09")).addDropdown((a) => {
      a.addOption("auto", t("\u81EA\u52A8") + " (Auto)"), a.addOption("zh", t("\u4E2D\u6587")), a.addOption("en", "English"), a.setValue(this.plugin.settings.language || "auto"), a.onChange(async (r) => {
        this.plugin.settings.language = r, await this.plugin.saveSettings(), this.plugin._initLang(), this.display();
      });
    }), new P(e).setName(t("\u7B14\u8BB0\u6587\u4EF6\u5939")).setDesc(t("\u5B58\u653E\u5361\u7247\u7B14\u8BB0\u7684\u76EE\u5F55")).addText((a) => a.setValue(this.plugin.settings.mainFolder).onChange(async (r) => {
      this.plugin.settings.mainFolder = r.trim(), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u5939")).setDesc(t("\u5B58\u653E\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u7684\u76EE\u5F55")).addText((a) => a.setValue(this.plugin.settings.indexFolder).onChange(async (r) => {
      this.plugin.settings.indexFolder = r.trim(), await this.plugin.saveSettings();
    })), new P(e).setName(t("\u6A21\u677F\u6587\u4EF6\u5939")).setDesc(t("\u6A21\u677F\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u65B0\u5EFA\u8282\u70B9\u65F6\u6A21\u677F\u4E0B\u62C9\u5217\u8868\u4ECE\u6B64\u6587\u4EF6\u5939\u8BFB\u53D6")).addText((a) => a.setValue(this.plugin.settings.templateFolder).onChange(async (r) => {
      this.plugin.settings.templateFolder = r.trim(), await this.plugin.saveSettings(), this.display();
    }));
    let s = (() => {
      let a = (this.plugin.settings.templateFolder || "").trim();
      if (!a) return [];
      let r = this.plugin.app.vault.getAbstractFileByPath(J(a));
      return !r || !r.children ? [] : r.children.filter((c) => c instanceof xe && c.extension === "md");
    })();
    new P(e).setName(t("\u9ED8\u8BA4\u6A21\u677F")).setDesc(t("\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u6A21\u677F\uFF08\u53EF\u9009\uFF09")).addDropdown((a) => {
      a.addOption("", t("\u4E0D\u9009"));
      for (let r of s) a.addOption(r.path, r.basename);
      a.setValue(this.plugin.settings.templatePath || ""), a.onChange(async (r) => {
        this.plugin.settings.templatePath = r, await this.plugin.saveSettings();
      });
    }), new P(e).setName(t("\u5B50\u8282\u70B9\u94FE\u63A5\u5B57\u6BB5")).setDesc(t("\u7236\u7B14\u8BB0\u4E2D\u5B58\u653E\u5B50\u7B14\u8BB0\u94FE\u63A5\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 children\uFF09")).addText((a) => a.setValue(this.plugin.settings.linkField).onChange(async (r) => {
      this.plugin.settings.linkField = r.trim() || "children", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u7236\u8282\u70B9\u53CD\u5411\u94FE\u63A5\u5B57\u6BB5")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u5199\u5165\u5B50\u7B14\u8BB0\u7684\u7236\u94FE\u63A5\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 parent\uFF09")).addText((a) => a.setValue(this.plugin.settings.backField).onChange(async (r) => {
      this.plugin.settings.backField = r.trim() || "parent", await this.plugin.saveSettings();
    })), new P(e).setName(t("\u4E3B\u7B14\u8BB0\u6807\u8BB0\u5B57\u6BB5")).setDesc(t("\u6807\u8BB0\u5BFC\u56FE\u4E3B\u5165\u53E3\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 main\uFF09")).addText((a) => a.setValue(this.plugin.settings.zkField).onChange(async (r) => {
      this.plugin.settings.zkField = r.trim() || "main", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u5B8C\u6210\u72B6\u6001\u5B57\u6BB5")).setDesc(t("\u6807\u8BB0\u7B14\u8BB0\u662F\u5426\u5B8C\u6210\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 status\uFF09")).addText((a) => a.setValue(this.plugin.settings.statusField).onChange(async (r) => {
      this.plugin.settings.statusField = r.trim() || "status", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u7C7B\u578B\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u7C7B\u578B\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 type\uFF09")).addText((a) => a.setValue(this.plugin.settings.typeField).onChange(async (r) => {
      this.plugin.settings.typeField = r.trim() || "type", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u65E5\u671F\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u521B\u5EFA\u65E5\u671F\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 date\uFF09")).addText((a) => a.setValue(this.plugin.settings.dateField).onChange(async (r) => {
      this.plugin.settings.dateField = r.trim() || "date", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u6807\u9898\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u6807\u9898\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 title\uFF09\u3002frontmatter \u4E2D\u6709\u8BE5\u5B57\u6BB5\u65F6\u8282\u70B9\u663E\u793A\u5176\u503C\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u540D\uFF1B\u91CD\u547D\u540D\u65F6\u540C\u6B65\u66F4\u65B0\u8BE5\u5B57\u6BB5")).addText((a) => a.setValue(this.plugin.settings.titleField).onChange(async (r) => {
      this.plugin.settings.titleField = r.trim() || "title", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u9ED8\u8BA4\u663E\u793A\u5C42\u6570")).setDesc(t("\u6253\u5F00\u65F6\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")).addText((a) => a.setValue(String(this.plugin.settings.defaultDepth)).onChange(async (r) => {
      this.plugin.settings.defaultDepth = Math.max(1, parseInt(r, 10) || 3), await this.plugin.saveSettings();
      for (let c of this.plugin.app.workspace.getLeavesOfType(ke))
        c.view instanceof Le && (c.view.depth = this.plugin.settings.defaultDepth, c.view._expandedMem.clear());
      this.plugin.refreshViews();
    })), new P(e).setName(t("\u540D\u79F0\u6700\u5927\u5B57\u6570")).setDesc(t("\u8282\u70B9\u6807\u9898\u6700\u591A\u663E\u793A\u7684\u5B57\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7\uFF1B0 = \u663E\u793A\u5168\u90E8\u540D\u79F0")).addText((a) => a.setValue(String(this.plugin.settings.maxTitleLen)).onChange(async (r) => {
      this.plugin.settings.maxTitleLen = Math.max(0, parseInt(r, 10) || 0), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u6C34\u5E73\u95F4\u8DDD")).setDesc(t("\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09")).addText((a) => a.setValue(String(this.plugin.settings.gapX)).onChange(async (r) => {
      this.plugin.settings.gapX = Math.max(10, parseInt(r, 10) || 60), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u5782\u76F4\u95F4\u8DDD")).setDesc(t("\u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB")).addText((a) => a.setValue(String(this.plugin.settings.gapY)).onChange(async (r) => {
      this.plugin.settings.gapY = Math.max(0, parseInt(r, 10) || 8), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u8282\u70B9\u9AD8\u5EA6")).setDesc(t("\u8282\u70B9\u5361\u7247\u9AD8\u5EA6")).addText((a) => a.setValue(String(this.plugin.settings.nodeHeight)).onChange(async (r) => {
      this.plugin.settings.nodeHeight = Math.max(30, parseInt(r, 10) || 46), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u65B0\u5EFA\u65F6\u5199\u5165\u53CD\u5411\u94FE\u63A5")).setDesc(t("\u521B\u5EFA\u5B50\u8282\u70B9\u65F6\uFF0C\u5728\u5B50\u7B14\u8BB0\u91CC\u5199\u5165\u6307\u5411\u7236\u7B14\u8BB0\u7684 parent \u5B57\u6BB5\uFF08\u7EAF\u6587\u672C\u6587\u4EF6\u540D\uFF0C\u975E wikilink\uFF0C\u5173\u7CFB\u56FE\u8C31\u4E0D\u663E\u793A\u53CC\u5411\u7BAD\u5934\uFF09")).addToggle((a) => a.setValue(this.plugin.settings.autoAddBackLink).onChange(async (r) => {
      this.plugin.settings.autoAddBackLink = r, await this.plugin.saveSettings();
    })), new P(e).setName(t("\u81EA\u52A8\u5B9A\u4F4D\u5F53\u524D\u7B14\u8BB0")).setDesc(t("\u6253\u5F00\u7B14\u8BB0\u65F6\uFF0C\u5BFC\u56FE\u81EA\u52A8\u5C55\u5F00\u5176\u6240\u5728\u5206\u652F\u3001\u9009\u4E2D\u5E76\u5C45\u4E2D\u8BE5\u8282\u70B9")).addToggle((a) => a.setValue(this.plugin.settings.autoLocate).onChange(async (r) => {
      this.plugin.settings.autoLocate = r, await this.plugin.saveSettings();
    })), new P(e).setName(t("\u663E\u793A\u521B\u5EFA\u65F6\u95F4")).setDesc(t("\u4E0E\u7C7B\u578B/\u5B50\u6570\u540C\u884C\u663E\u793A\u521B\u5EFA\u65E5\u671F\uFF08\u4F18\u5148\u53D6 frontmatter \u7684 date \u5B57\u6BB5\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF09")).addToggle((a) => a.setValue(this.plugin.settings.showCreated).onChange(async (r) => {
      this.plugin.settings.showCreated = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u663E\u793A\u7C7B\u578B")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A type \u6587\u672C")).addToggle((a) => a.setValue(this.plugin.settings.showType).onChange(async (r) => {
      this.plugin.settings.showType = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u663E\u793A\u5B50\u8282\u70B9\u6570")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A\u5B50\u8282\u70B9\u6570\u91CF")).addToggle((a) => a.setValue(this.plugin.settings.showChildCount).onChange(async (r) => {
      this.plugin.settings.showChildCount = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u663E\u793A\u6253\u5F00\u56FE\u6807")).setDesc(t("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \u270E \u6253\u5F00\u7B14\u8BB0\u6309\u94AE")).addToggle((a) => a.setValue(this.plugin.settings.showOpenIcon).onChange(async (r) => {
      this.plugin.settings.showOpenIcon = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u663E\u793A\u65B0\u589E\u56FE\u6807")).setDesc(t("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \uFF0B \u65B0\u589E\u5B50\u8282\u70B9\u6309\u94AE")).addToggle((a) => a.setValue(this.plugin.settings.showAddIcon).onChange(async (r) => {
      this.plugin.settings.showAddIcon = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u66F2\u7EBF\u8FDE\u63A5")).setDesc(t("\u8282\u70B9\u4E4B\u95F4\u7528\u66F2\u7EBF\u8FD8\u662F\u76F4\u7EBF")).addToggle((a) => a.setValue(this.plugin.settings.curve).onChange(async (r) => {
      this.plugin.settings.curve = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u5E03\u5C40\u65B9\u5411")).setDesc(t("\u6A2A\u5411\uFF1A\u4ECE\u5DE6\u5230\u53F3\u5C55\u5F00\u5B50\u8282\u70B9\uFF1B\u7EB5\u5411\uFF1A\u4ECE\u4E0A\u5230\u4E0B\u5C55\u5F00\u5B50\u8282\u70B9")).addDropdown((a) => {
      a.addOption("h", t("\u6A2A\u5411\uFF08\u5DE6\u2192\u53F3\uFF09")), a.addOption("v", t("\u7EB5\u5411\uFF08\u4E0A\u2192\u4E0B\uFF09")), a.setValue(this.plugin.settings.layoutDir || "h"), a.onChange(async (r) => {
        this.plugin.settings.layoutDir = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
      });
    }), new P(e).setName(t("\u4E3B\u8272")).setDesc(t("\u666E\u901A\u8282\u70B9\u989C\u8272")).addColorPicker((a) => a.setValue(this.plugin.settings.accent).onChange(async (r) => {
      this.plugin.settings.accent = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u4E3B\u7B14\u8BB0\u989C\u8272")).setDesc(t("main: true \u8282\u70B9\u989C\u8272")).addColorPicker((a) => a.setValue(this.plugin.settings.mainColor).onChange(async (r) => {
      this.plugin.settings.mainColor = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u91CD\u590D\u8282\u70B9\u989C\u8272")).setDesc(t("\u540C\u4E00\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\u65F6\uFF0C\u5176\u72B6\u6001\u5706\u70B9\u989C\u8272")).addColorPicker((a) => a.setValue(this.plugin.settings.multiColor).onChange(async (r) => {
      this.plugin.settings.multiColor = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new P(e).setName(t("\u9009\u4E2D\u989C\u8272")).setDesc(t("\u5355\u51FB\u9009\u4E2D\u7684\u8282\u70B9\u9AD8\u4EAE\u989C\u8272")).addColorPicker((a) => a.setValue(this.plugin.settings.selectedColor).onChange(async (r) => {
      this.plugin.settings.selectedColor = r, await this.plugin.saveSettings(), this.plugin.applyThemeVars();
    })), new P(e).setName(t("\u5B8C\u6210\u8272")).setDesc(t("status \u52FE\u9009\u540E\u8282\u70B9\u7684\u6807\u8BB0\u8272\uFF08\u9ED8\u8BA4\u7EFF\u8272\uFF09")).addColorPicker((a) => a.setValue(this.plugin.settings.doneColor).onChange(async (r) => {
      this.plugin.settings.doneColor = r, await this.plugin.saveSettings(), this.plugin.applyThemeVars();
    }));
    let i = this.plugin.settings.typeColors || (this.plugin.settings.typeColors = {});
    new P(e).setName(t("\u9ED8\u8BA4\u7C7B\u578B")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u7C7B\u578B\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((a) => {
      a.addOption("", t("\u4E0D\u9009"));
      for (let r of Object.keys(i)) a.addOption(r, r);
      a.setValue(i[this.plugin.settings.defaultType] !== void 0 ? this.plugin.settings.defaultType : ""), a.onChange(async (r) => {
        this.plugin.settings.defaultType = r, await this.plugin.saveSettings();
      });
    });
    let n = "", l = /* @__PURE__ */ v(async () => {
      let a = n.trim();
      if (!a) {
        new k(t("\u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0"));
        return;
      }
      if (i[a] !== void 0) {
        new k(t("\u7C7B\u578B\u5DF2\u5B58\u5728\uFF1A") + a);
        return;
      }
      let r = ["#4ba3e5", "#e5534b", "#3fa66a", "#e5a44b", "#b07cff", "#8a6ae5", "#d978a8", "#5aa9a2"];
      i[a] = r[Object.keys(i).length % r.length], n = "", await this.plugin.saveSettings(), this.display();
    }, "addType");
    new P(e).setName(t("\u6DFB\u52A0\u7C7B\u578B")).setDesc(t("\u8F93\u5165\u540D\u79F0\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((a) => {
      a.setPlaceholder(t("\u7C7B\u578B\u540D\u79F0\uFF0C\u5982\uFF1A\u5F85\u529E")), a.onChange((r) => n = r), a.inputEl.addEventListener("keydown", (r) => {
        r.key === "Enter" && (r.preventDefault(), l());
      });
    }).addButton((a) => a.setButtonText(t("\u6DFB\u52A0")).setCta().onClick(l));
    let o = Object.keys(i);
    for (let a = 0; a < o.length; a++) {
      let r = o[a], c = a, h = this.plugin.settings.typeTemplates || (this.plugin.settings.typeTemplates = {}), d = this.plugin.app.vault.getAbstractFileByPath(J(this.plugin.settings.templateFolder || "99-\u6A21\u677F")), p = [{ path: "", name: t("\u9ED8\u8BA4") }];
      if (d && d.children) for (let f of d.children) f instanceof xe && f.extension === "md" && p.push({ path: f.path, name: f.basename });
      new P(e).setName(r).setDesc(t("type \u4E3A\u300C") + r + t("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((f) => {
        f.setValue(String(i[r])), f.onChange(async (g) => {
          g && g !== i[r] && (i[r] = g, await this.plugin.saveSettings(), this.plugin.refreshViews());
        });
      }).addDropdown((f) => {
        for (let g of p) f.addOption(g.path, g.name);
        f.setValue(h[r] || ""), f.onChange(async (g) => {
          g ? h[r] = g : delete h[r], await this.plugin.saveSettings();
        });
      }).addButton((f) => f.setIcon("chevron-up").setTooltip(t("\u4E0A\u79FB")).setDisabled(c === 0).onClick(async () => {
        let g = Object.entries(i);
        [g[c - 1], g[c]] = [g[c], g[c - 1]], this.plugin.settings.typeColors = Object.fromEntries(g), await this.plugin.saveSettings(), this.display();
      })).addButton((f) => f.setIcon("chevron-down").setTooltip(t("\u4E0B\u79FB")).setDisabled(c === o.length - 1).onClick(async () => {
        let g = Object.entries(i);
        [g[c + 1], g[c]] = [g[c], g[c + 1]], this.plugin.settings.typeColors = Object.fromEntries(g), await this.plugin.saveSettings(), this.display();
      })).addButton((f) => f.setIcon("trash").setTooltip(t("\u5220\u9664\u7C7B\u578B\uFF1A") + r).onClick(async () => {
        delete i[r], this.plugin.settings.defaultType === r && (this.plugin.settings.defaultType = ""), await this.plugin.saveSettings(), this.display();
      }));
    }
    e.createEl("h3", { text: t("\u914D\u7F6E\u5BFC\u5165/\u5BFC\u51FA") }), new P(e).setName(t("\u5BFC\u51FA\u914D\u7F6E")).setDesc(t("\u5C06\u5F53\u524D\u6240\u6709\u8BBE\u7F6E\u5BFC\u51FA\u4E3A JSON \u6587\u4EF6")).addButton((a) => a.setButtonText(t("\u5BFC\u51FA")).setCta().onClick(async () => {
      let r = JSON.stringify(this.plugin.settings, null, 2), h = "link-mindmap-config-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".json";
      try {
        await this.plugin.app.vault.create(h, r), new k(t("\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + h);
      } catch (d) {
        new k(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
      }
    })), new P(e).setName(t("\u5BFC\u5165\u914D\u7F6E")).setDesc(t("\u4ECE JSON \u6587\u4EF6\u5BFC\u5165\u8BBE\u7F6E\uFF08\u4F1A\u8986\u76D6\u5F53\u524D\u914D\u7F6E\uFF09")).addButton((a) => a.setButtonText(t("\u9009\u62E9\u6587\u4EF6")).onClick(() => {
      let r = document.createElement("input");
      r.type = "file", r.accept = ".json", r.onchange = async () => {
        let c = r.files[0];
        if (c)
          try {
            let h = await c.text(), d = JSON.parse(h);
            this.plugin.settings = Object.assign(this.plugin.settings, d), await this.plugin.saveSettings(), this.plugin.applyThemeVars(), this.plugin.refreshViews(), this.display(), new k(t("\u914D\u7F6E\u5DF2\u5BFC\u5165"));
          } catch (h) {
            new k(t("\u5BFC\u5165\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] import config:", h);
          }
      }, r.click();
    })), new P(e).setName(t("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E")).setDesc(t("\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\uFF08\u4E0D\u4F1A\u5220\u9664\u7B14\u8BB0\uFF09")).addButton((a) => a.setButtonText(t("\u6062\u590D\u9ED8\u8BA4")).onClick(() => {
      new We(this.app, t("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"), t("\u786E\u5B9A\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u5417\uFF1F"), async () => {
        this.plugin.settings = JSON.parse(JSON.stringify(ot)), await this.plugin.saveSettings(), this.plugin.applyThemeVars(), this.plugin.refreshViews(), this.display(), new k(t("\u5DF2\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"));
      }).open();
    }));
  }
};
v(yt, "LinkMindmapSettingTab");
var It = yt, _t = class extends Tt {
  async onload() {
    await this.loadSettings(), this._initLang(), this.registerView(ke, (e) => new Le(e, this)), this.addRibbonIcon("git-merge", t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), () => this.activateView()), this.addCommand({ id: "open-link-mindmap", name: t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), callback: /* @__PURE__ */ v(() => this.activateView(), "callback") }), this.addCommand({ id: "open-timeline", name: t("\u6253\u5F00\u65F6\u95F4\u7EBF"), callback: /* @__PURE__ */ v(() => this.activateTimeline(), "callback") }), this.addCommand({ id: "normalize-frontmatter", name: t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), callback: /* @__PURE__ */ v(() => this._normalizeFrontmatter(), "callback") }), this.addCommand({ id: "normalize-frontmatter-current", name: t("\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), editorCallback: /* @__PURE__ */ v((e) => this._normalizeFrontmatter(e), "editorCallback") }), this.addSettingTab(new It(this.app, this)), this.applyThemeVars(), this.registerEvent(this.app.vault.on("create", (e) => this._onVaultChange(e))), this.registerEvent(this.app.vault.on("modify", (e) => this._onVaultChange(e))), this.registerEvent(this.app.vault.on("delete", (e) => this._onVaultChange(e))), this.registerEvent(this.app.vault.on("rename", (e, s) => this._onVaultChange(e, s))), this.registerEvent(this.app.metadataCache.on("changed", (e) => this._onVaultChange(e))), this.registerEvent(this.app.metadataCache.on("resolved", () => this._rebuildAllViews())), this.registerEvent(this.app.workspace.on("file-open", (e) => {
      for (let s of this.app.workspace.getLeavesOfType(ke))
        s.view instanceof Le && s.view.locateFile(e);
    }));
  }
  onunload() {
    clearTimeout(this._refreshTimer), this.app.workspace.detachLeavesOfType(ke);
  }
  _onVaultChange(e, s) {
    let i = J(this.settings.mainFolder || ""), n = /* @__PURE__ */ v((o) => !!o && (o === i || o.startsWith(i + "/")), "inFolder"), l = e && e.path;
    e && e.extension && e.extension !== "md" && !n(s) || !n(l) && !n(s) || (clearTimeout(this._refreshTimer), this._refreshTimer = setTimeout(() => this._rebuildAllViews(), 400));
  }
  _rebuildAllViews() {
    for (let e of this.app.workspace.getLeavesOfType(ke))
      e.view instanceof Le && e.view.rebuild(!0);
  }
  _checkLinks() {
    let { map: e, referenced: s } = je(this.app, this.settings), i = [...e.values()], n = 0, l = [];
    for (let r of i)
      for (let c of r.childLinks) {
        let h = this.app.metadataCache.getFirstLinkpathDest(c, r.file.path);
        (!h || !e.has(h.path)) && (n++, l.length < 6 && l.push(c + "\uFF08" + r.title + "\uFF09"));
      }
    let o = i.filter((r) => !s.has(r.file.path) && !r.zk), a = t("\u5171 ") + i.length + t(" \u7BC7\u7B14\u8BB0");
    a += n ? t("\uFF0C\u5931\u6548\u94FE\u63A5 ") + n + "\uFF1A" + l.join("\uFF1B") + (n > 6 ? "\u2026" : "") : t("\uFF0C\u94FE\u63A5\u5168\u90E8\u6709\u6548 \u2713"), a += o.length ? t("\uFF1B\u672A\u5173\u8054\u7B14\u8BB0\uFF08\u65E0\u7236\u5F15\u7528\u4E14\u975E\u4E3B\u7B14\u8BB0\uFF09") + o.length + "\uFF1A" + o.slice(0, 6).map((r) => r.title).join("\u3001") + (o.length > 6 ? "\u2026" : "") : t("\uFF1B\u65E0\u672A\u5173\u8054\u7B14\u8BB0 \u2713"), new k(a, 15e3);
  }
  async _fixYamlQuotes() {
    let e = this.settings, s = e.typeField || "type", i = J(e.mainFolder || ""), n = Ve(this.app, i), l = 0, o = [];
    for (let r of n) {
      let c = await this.app.vault.read(r), h = c.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
      if (!h) continue;
      let d = h[1], p = !1, f = [];
      for (let g of d.split(`
`)) {
        let _ = g.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
        if (_) {
          let x = _[1], S = _[2].trim();
          if (S.startsWith('""') && S.endsWith('""') && S.length >= 4 || S.startsWith("''") && S.endsWith("''") && S.length >= 4) {
            S = S.slice(1, -1), f.push(x + ": " + S), p = !0;
            continue;
          }
          if (x === s && (S.startsWith('"') && S.endsWith('"') && S.length >= 2 && S.slice(1, -1).includes('"') || S.startsWith("'") && S.endsWith("'") && S.length >= 2 && S.slice(1, -1).includes("'"))) {
            S = Ae(S), f.push(x + ': "' + S + '"'), p = !0;
            continue;
          }
        }
        f.push(g);
      }
      if (p) {
        let _ = `---
` + f.join(`
`) + `
---` + c.slice(h[0].length);
        await this.app.vault.modify(r, _), l++, o.length < 10 && o.push(r.basename);
      }
    }
    let a = l ? t("\u5DF2\u4FEE\u590D ") + l + t(" \u4E2A\u6587\u4EF6\u7684 frontmatter \u5F15\u53F7\u95EE\u9898") + (o.length < l ? "" : "\uFF1A" + o.join("\u3001")) : t("\u672A\u53D1\u73B0\u9700\u8981\u4FEE\u590D\u7684\u5F15\u53F7\u95EE\u9898 \u2713");
    new k(a, 15e3);
  }
  async _normalizeFrontmatter(e) {
    let s = this.settings, i = s.typeField || "type", n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ v(async (c) => {
      if (!c) return null;
      if (n.has(c)) return n.get(c);
      let h = this.app.vault.getAbstractFileByPath(J(c));
      if (!(h instanceof xe)) return null;
      let d = Ze(await this.app.vault.read(h));
      return n.set(c, d.fields), d.fields;
    }, "getTemplateFields"), o = /* @__PURE__ */ v(async (c) => {
      let h = await this.app.vault.read(c), d = h.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
      if (!d) return { changed: !1, skipped: !1 };
      let p = d[1], f = h.slice(d[0].length), g = [], _ = null;
      for (let y of p.split(`
`)) {
        let N = y.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
        N ? (_ && g.push(_), _ = { key: N[1], lines: [y] }) : _ && _.lines.push(y);
      }
      if (_ && g.push(_), !g.length) return { changed: !1, skipped: !1 };
      let x = g.find((y) => y.key === i), S = x ? Ae((x.lines[0].match(/^.*:\s*(.*)$/) || [])[1] || "") : "", L = s.typeTemplates || {}, I = S && L[S] ? L[S] : (s.templatePath || "").trim(), b = await l(I);
      if (!b) return { changed: !1, skipped: !0 };
      let z = b.map(([y]) => y), m = /* @__PURE__ */ new Map(b), D = /* @__PURE__ */ new Map(g.map((y) => [y.key, y])), F = [];
      for (let y of z)
        D.has(y) ? (F.push(D.get(y)), D.delete(y)) : F.push({ key: y, lines: [y + ": " + (m.get(y) || "")] });
      for (let [, y] of D) F.push(y);
      let T = g.map((y) => y.key), w = F.map((y) => y.key), R = T.length !== w.length;
      if (!R) {
        for (let y = 0; y < T.length; y++)
          if (T[y] !== w[y]) {
            R = !0;
            break;
          }
      }
      if (R) {
        let y = [];
        for (let Y of F) y.push(...Y.lines);
        let N = `---
` + y.join(`
`) + `
---
` + f;
        await this.app.vault.modify(c, N);
      }
      return { changed: R, skipped: !1 };
    }, "normalizeOne");
    if (e) {
      let c = this.app.workspace.getActiveFile();
      if (!c || c.extension !== "md") {
        new k(t("\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      let h = await o(c);
      h.skipped ? new k(t("\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7")) : h.changed ? new k(t("\u5DF2\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027 \u2713")) : new k(t("\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"));
      return;
    }
    let a = J(s.mainFolder || ""), r = Ve(this.app, a);
    if (!r.length) {
      new k(t("\u672A\u627E\u5230\u7B14\u8BB0\u6587\u4EF6"));
      return;
    }
    new We(this.app, t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027"), t("\u6B64\u64CD\u4F5C\u5C06\u6309\u6A21\u677F\u91CD\u6392\u6240\u6709\u7B14\u8BB0\u7684 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\u3002\u5DF2\u6709\u503C\u4E0D\u4F1A\u88AB\u4FEE\u6539\uFF0C\u4F46\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let c = 0, h = 0, d = [];
      for (let f of r) {
        let g = await o(f);
        g.skipped && h++, g.changed && (c++, d.length < 10 && d.push(f.basename));
      }
      let p;
      c ? (p = t("\u5DF2\u6574\u7406 ") + c + t(" \u4E2A\u7B14\u8BB0\u7684\u5C5E\u6027"), d.length < c ? p += t("\uFF08\u7B49\uFF09") : p += "\uFF1A" + d.join("\u3001"), h && (p += t("\uFF1B") + h + t(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7"))) : (p = t("\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"), h && (p += t("\uFF08") + h + t(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7\uFF09"))), new k(p, 15e3);
    }).open();
  }
  applyThemeVars() {
    let e = document.body;
    e.style.setProperty("--lkm-accent", this.settings.accent), e.style.setProperty("--lkm-main", this.settings.mainColor), e.style.setProperty("--lkm-multi", this.settings.multiColor), e.style.setProperty("--lkm-done", this.settings.doneColor), e.style.setProperty("--lkm-selected", this.settings.selectedColor);
  }
  async activateView() {
    let { workspace: e } = this.app, s = e.getLeavesOfType(ke)[0];
    s || (s = e.getLeaf(!0), await s.setViewState({ type: ke, active: !0 })), e.revealLeaf(s);
  }
  async activateTimeline() {
    await this.activateView();
    for (let e of this.app.workspace.getLeavesOfType(ke))
      e.view instanceof Le && (e.view._mode = "dash", e.view._dashTab = "timeline", e.view.render());
  }
  refreshViews() {
    this.applyThemeVars();
    for (let e of this.app.workspace.getLeavesOfType(ke))
      e.view instanceof Le && e.view.render();
  }
  async loadSettings() {
    this.settings = Object.assign({}, ot, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  _initLang() {
    let e = this.settings.language || "auto";
    if (e === "auto") {
      let s = window.moment && window.moment.locale() || "en";
      nt(s && s.startsWith("zh") ? "zh" : "en");
    } else
      nt(e);
  }
};
v(_t, "LinkMindmapPlugin");
var Rt = _t;
module.exports = Rt;
