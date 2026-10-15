"use strict";
var bt = (x, e) => () => {
  try {
    return e || x((e = { exports: {} }).exports, e), e.exports;
  } catch (s) {
    throw e = 0, s;
  }
};

// ../i18n.js
var it = bt((At, st) => {
  "use strict";
  var tt = {
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
      \u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u4E3B\u7B14\u8BB0\u6807\u8BB0: "Batch unmark main from selected nodes"
    }
  }, Ye = "zh";
  function xt(x) {
    Ye = x || "zh";
  }
  function Ct() {
    return Ye;
  }
  function St(x, e) {
    let s = tt[Ye] && tt[Ye][x] || x;
    if (e) for (let i in e) s = s.split("{" + i + "}").join(e[i]);
    return s;
  }
  st.exports = { t: St, setLang: xt, getLang: Ct };
});

// ../src.js
var b = (x, e) => x, Tt = require("obsidian"), {
  Plugin: Ft,
  ItemView: Et,
  Notice: g,
  Modal: ke,
  Setting: R,
  PluginSettingTab: Dt,
  TFile: Se,
  TFolder: zt,
  normalizePath: ee,
  FuzzySuggestModal: ot,
  setIcon: nt,
  Menu: Le,
  MarkdownRenderer: Mt,
  Component: Lt
} = Tt, { t, setLang: at } = it(), ge = "link-mindmap-view", Pt = "http://www.w3.org/2000/svg", rt = {
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
  },
  savedViews: [],
  savedViewLocation: ""
};
function Ne(x) {
  return x == null ? [] : Array.isArray(x) ? x.slice() : [x];
}
b(Ne, "toArr");
function we(x) {
  return String(x ?? "").replace(/^\[\[/, "").replace(/\]\]$/, "").split("|")[0].split("#")[0].split("^")[0].trim();
}
b(we, "cleanLink");
function qe(x) {
  let e = [], s = /* @__PURE__ */ b((i) => {
    if (i == null) return;
    let n = String(i), a = /\[\[([^\[\]]+?)\]\]/g, o, l = !1;
    for (; (o = a.exec(n)) !== null; )
      l = !0, e.push(we(o[1]));
    if (!l) {
      let r = we(n.replace(/^["']+/, "").replace(/["']+$/, ""));
      r && e.push(r);
    }
  }, "push");
  return Array.isArray(x) ? x.forEach(s) : s(x), e;
}
b(qe, "extractLinks");
function q(x, e) {
  return x = String(x ?? ""), e > 0 && x.length > e ? x.slice(0, e - 1) + "\u2026" : x;
}
b(q, "truncate");
function ct(x, e) {
  let s = 0;
  for (let i of String(x ?? ""))
    s += /[一-鿿　-〿＀-￯]/.test(i) ? e : e * 0.55;
  return s;
}
b(ct, "estWidth");
var Ke = null, $e = /* @__PURE__ */ new Map();
function Ze(x, e, s) {
  let i = x + "|" + e + "|" + (s ? 1 : 0), n = $e.get(i);
  if (n !== void 0) return n;
  let a;
  try {
    Ke || (Ke = document.createElement("canvas").getContext("2d")), Ke.font = (s ? "600 " : "") + e + 'px Inter, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif', a = Ke.measureText(String(x ?? "")).width;
  } catch {
    a = ct(x, e);
  }
  return $e.size > 2e3 && $e.clear(), $e.set(i, a), a;
}
b(Ze, "measureTextWidth");
function fe(x) {
  return String(x).replace(/[\\/:*?"<>|#^\[\]]/g, "-").trim() || t("\u672A\u547D\u540D");
}
b(fe, "safeFileName");
function Je(x) {
  let e = String(x ?? "").replace(/^﻿/, "").replace(/\r\n/g, `
`).replace(/^\n+/, ""), s = e.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!s) return { fields: [], body: e };
  let i = [];
  for (let n of s[1].split(`
`)) {
    let a = n.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    a && i.push([a[1], a[2].trim()]);
  }
  return { fields: i, body: e.slice(s[0].length) };
}
b(Je, "splitFrontmatter");
function je(x) {
  return x = String(x ?? "").trim(), x.length >= 2 && (x.charAt(0) === '"' && x.charAt(x.length - 1) === '"' || x.charAt(0) === "'" && x.charAt(x.length - 1) === "'") ? x.slice(1, -1) : x;
}
b(je, "stripYamlQuotes");
function z(x, e) {
  let s = document.createElementNS(Pt, x);
  if (e) for (let i in e) s.setAttribute(i, e[i]);
  return s;
}
b(z, "svgEl");
function ht(x, e, s) {
  let i = x && (x[s || "date"] != null ? x[s || "date"] : "");
  if (i) {
    let n = String(i).match(/(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/);
    if (n) return n[1] + "-" + String(n[2]).padStart(2, "0") + "-" + String(n[3]).padStart(2, "0");
  }
  try {
    let n = e.stat;
    if (n && n.ctime) {
      let a = new Date(n.ctime);
      return a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
b(ht, "createdOf");
function dt(x) {
  try {
    let e = x.stat;
    if (e && e.ctime) {
      let s = new Date(e.ctime);
      return s.getFullYear() + "-" + String(s.getMonth() + 1).padStart(2, "0") + "-" + String(s.getDate()).padStart(2, "0") + " " + String(s.getHours()).padStart(2, "0") + ":" + String(s.getMinutes()).padStart(2, "0") + ":" + String(s.getSeconds()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
b(dt, "fileCtime");
function Xe(x, e) {
  let s = ee(e || ""), i = [];
  for (let n of x.vault.getMarkdownFiles())
    s && n.path !== s && !n.path.startsWith(s + "/") || i.push(n);
  return i;
}
b(Xe, "notesInFolder");
function pt(x, e) {
  let s = Xe(x, e.mainFolder);
  if (!s.length) return !0;
  for (let i of s)
    if ((x.metadataCache.getFileCache(i) || {}).frontmatter) return !0;
  return !1;
}
b(pt, "metadataReady");
function We(x, e) {
  let s = e.linkField || "children", i = e.backField || "parent", n = e.zkField || "main", a = e.statusField || "status", o = e.typeField || "type", l = e.dateField || "date", r = e.titleField || "title", c = /* @__PURE__ */ new Map();
  for (let d of Xe(x, e.mainFolder)) {
    let p = (x.metadataCache.getFileCache(d) || {}).frontmatter || {};
    c.set(d.path, {
      file: d,
      title: p[r] ? String(p[r]) : d.basename,
      zk: p[n] === !0 || String(p[n]) === "true",
      status: p[a] === !0 || String(p[a]) === "true",
      type: p[o] != null ? String(p[o]).trim() : "",
      date: ht(p, d, l),
      ctime: dt(d),
      childLinks: qe(p[s]),
      parentLinks: qe(p[i])
    });
  }
  let h = /* @__PURE__ */ new Set();
  for (let d of c.values())
    for (let p of d.childLinks) {
      let u = x.metadataCache.getFirstLinkpathDest(p, d.file.path);
      u && c.has(u.path) && h.add(u.path);
    }
  return { map: c, referenced: h };
}
b(We, "collectNotes");
function Qe(x, e, s, i) {
  let n = i === "child" ? s.childLinks : s.parentLinks, a = [];
  for (let o of n) {
    let l = x.metadataCache.getFirstLinkpathDest(o, s.file.path);
    l && e.has(l.path) && a.push(e.get(l.path));
  }
  return a;
}
b(Qe, "resolveLinks");
function Ve(x, e, s) {
  let i = /* @__PURE__ */ new Set([s.file.path]), n = /* @__PURE__ */ b((l, r) => {
    let c = {
      note: l,
      parent: r || null,
      children: [],
      expanded: !1,
      isAlias: !1,
      key: (r ? r.key + ">" : ">") + l.file.path
    };
    for (let h of l.childLinks) {
      let d = x.metadataCache.getFirstLinkpathDest(h, l.file.path);
      if (!d) continue;
      let p = e.get(d.path);
      !p || i.has(d.path) || (i.add(d.path), c.children.push(n(p, c)), i.delete(d.path));
    }
    return c;
  }, "mk"), a = n(s, null), o = /* @__PURE__ */ new Map();
  (/* @__PURE__ */ b((function l(r) {
    if (r.note.file) {
      let c = r.note.file.path;
      o.has(c) || o.set(c, []), o.get(c).push(r);
    }
    r.children.forEach(l);
  }), "collect"))(a);
  for (let [l, r] of o) {
    if (r.length < 2) continue;
    let c = e.get(l), h = new Set(c ? Qe(x, e, c, "parent").map((p) => p.file.path) : []), d = -1;
    for (let p = 0; p < r.length; p++) {
      let u = r[p].parent && r[p].parent.note.file ? r[p].parent.note.file.path : null;
      if (u && h.has(u)) {
        d = p;
        break;
      }
    }
    d < 0 && (d = 0), r.forEach((p, u) => {
      p.isAlias = u !== d;
    });
  }
  return a;
}
b(Ve, "buildTree");
function He(x, e) {
  let s = [[x, 1]];
  for (; s.length; ) {
    let [i, n] = s.pop();
    i.expanded = n < e && i.children.length > 0;
    for (let a of i.children) s.push([a, n + 1]);
  }
}
b(He, "applyDepth");
function Ae(x, e) {
  let s = [], i = [], n = e.layoutDir === "v";
  return (/* @__PURE__ */ b((function a(o) {
    if (!o._w) {
      let r = (1 + (e.showOpenIcon !== !1 ? 1 : 0) + (e.showAddIcon !== !1 ? 1 : 0)) * 24 + 12, c = o.note.title, h = e.maxTitleLen > 0 ? q(c, e.maxTitleLen) : c, d = Ze(h, 13, !0), p = !o.note.file, u = e.showCreated && !p && o.note.date ? o.note.date : "", y = e.showType && !p && o.note.type ? o.note.type : "", v = e.showChildCount && !p && o.children.length ? t("\u5B50 ") + o.children.length : "", F = [y, v, u].filter(Boolean).join(" \xB7 "), T = Ze(F, 11, !1);
      o._w = Math.max(110, 16 + Math.max(d, T) + r), o._shown = h;
    }
    let l = o.expanded ? o.children : [];
    if (!l.length) {
      o._h = e.nodeHeight, n && (o._subW = o._w);
      return;
    }
    if (n) {
      let r = 0;
      l.forEach((c, h) => {
        a(c), r += (c._subW || c._w) + (h ? e.gapY : 0);
      }), o._h = e.nodeHeight, o._subW = Math.max(o._w, r);
    } else {
      let r = 0;
      l.forEach((c, h) => {
        a(c), r += c._h + (h ? e.gapY : 0);
      }), o._h = Math.max(e.nodeHeight, r);
    }
  }), "measure"))(x), (/* @__PURE__ */ b((function a(o, l, r) {
    o._x = l, o._y = r + o._h / 2, s.push(o);
    let c = o.expanded ? o.children : [];
    if (n) {
      let h = 0;
      c.forEach((u, y) => {
        h += (u._subW || u._w) + (y ? e.gapY : 0);
      });
      let d = l + o._w / 2 - h / 2, p = r + e.nodeHeight + e.gapX;
      for (let u of c) {
        let y = u._subW || u._w;
        a(u, d + (y - u._w) / 2, p), i.push([o, u]), d += y + e.gapY;
      }
    } else {
      let h = r;
      for (let d of c)
        a(d, l + o._w + e.gapX, h), i.push([o, d]), h += d._h + e.gapY;
    }
  }), "place"))(x, 0, 0), { nodes: s, edges: i };
}
b(Ae, "layoutTree");
async function ze(x, e, s, i) {
  await x.fileManager.processFrontMatter(e, (n) => {
    let a = Ne(n[s]);
    a.some((l) => we(l) === i) || a.push("[[" + i + "]]"), n[s] = a;
  });
}
b(ze, "addLink");
async function me(x, e, s, i) {
  let n = !1;
  return await x.fileManager.processFrontMatter(e, (a) => {
    let o = Ne(a[s]), l = o.filter((r) => {
      let c = x.metadataCache.getFirstLinkpathDest(we(r), e.path);
      return !(c && c.path === i);
    });
    l.length !== o.length && (n = !0), l.length ? a[s] = l : delete a[s];
  }), n;
}
b(me, "removeLinkByPath");
var ut = class extends ot {
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
b(ut, "PickModal");
var Pe = ut, ft = class extends ke {
  constructor(e, s, i, n, a) {
    if (super(e), this.items = s, this.onChoose = i, this.selected = /* @__PURE__ */ new Map(), this.searchVal = "", this.typeFilter = "", this.mainFilter = "", this.linkFilter = "", this.statusFilter = "", this.availableTypes = a || [], n && n.length) {
      let o = new Map(s.map((l) => [l.path, l.label]));
      for (let l of n)
        o.has(l) && this.selected.set(l, o.get(l));
    }
  }
  onOpen() {
    let { contentEl: e } = this;
    e.addClass("lkm-multipick");
    let s = /* @__PURE__ */ b((T) => {
      T.target.tagName === "SELECT" && T.stopPropagation();
    }, "guardSelect");
    e.addEventListener("pointerdown", s, !0), e.addEventListener("mousedown", s, !0), e.createEl("h3", { text: t("\u591A\u9009\u7B14\u8BB0\u663E\u793A\u5BFC\u56FE") }), e.createEl("p", { text: t("\u641C\u7D22\u5E76\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\uFF0C\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A\uFF08\u65E0\u9700\u5173\u8054\uFF09"), cls: "lkm-modal-sub" });
    let i = new Set(this.availableTypes);
    for (let T of this.items) T.type && i.add(T.type);
    let n = [...i], a = e.createDiv("lkm-multipick-filter"), o = a.createEl("input", { type: "text", placeholder: t("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    o.addClass("lkm-multipick-input");
    let l = /* @__PURE__ */ b((T) => {
      let E = /* @__PURE__ */ b((P) => P.stopPropagation(), "stop");
      T.addEventListener("mousedown", E), T.addEventListener("pointerdown", E), T.addEventListener("touchstart", E, { passive: !0 }), T.addEventListener("touchend", E, { passive: !0 }), T.addEventListener("click", E);
    }, "stopModalSwallow");
    if (n.length) {
      let T = a.createEl("select", { cls: "lkm-multipick-select" });
      T.createEl("option", { value: "", text: t("\u7C7B\u578B") }), T.createEl("option", { value: "__none__", text: t("\u65E0\u7C7B\u578B") });
      for (let E of n) T.createEl("option", { value: E, text: E });
      l(T), T.addEventListener("change", () => {
        this.typeFilter = T.value, v();
      });
    }
    let r = a.createEl("select", { cls: "lkm-multipick-select" });
    r.createEl("option", { value: "", text: t("\u5168\u90E8") }), r.createEl("option", { value: "1", text: t("\u4E3B\u7B14\u8BB0") }), r.createEl("option", { value: "0", text: t("\u975E\u4E3B\u7B14\u8BB0") }), l(r), r.addEventListener("change", () => {
      this.mainFilter = r.value, v();
    });
    let c = a.createEl("select", { cls: "lkm-multipick-select" });
    c.createEl("option", { value: "", text: t("\u5173\u8054") }), c.createEl("option", { value: "orphan", text: t("\u672A\u5173\u8054") }), c.createEl("option", { value: "linked", text: t("\u5DF2\u5173\u8054") }), l(c), c.addEventListener("change", () => {
      this.linkFilter = c.value, v();
    });
    let h = a.createEl("select", { cls: "lkm-multipick-select" });
    h.createEl("option", { value: "", text: t("\u72B6\u6001") }), h.createEl("option", { value: "done", text: t("\u5DF2\u5B8C\u6210") }), h.createEl("option", { value: "todo", text: t("\u672A\u5B8C\u6210") }), l(h), h.addEventListener("change", () => {
      this.statusFilter = h.value, v();
    });
    let d = e.createDiv("lkm-multipick-list"), p = e.createDiv("lkm-multipick-sel"), u = null, y = /* @__PURE__ */ b(() => {
      let T = this.searchVal.toLowerCase(), E = this.typeFilter, P = [];
      for (let k of this.items)
        T && !k.label.toLowerCase().includes(T) || E && E === "__none__" && k.type || E && E !== "__none__" && k.type !== E || this.mainFilter === "1" && !k.isMain || this.mainFilter === "0" && k.isMain || this.linkFilter === "orphan" && !k.orphan || this.linkFilter === "linked" && k.orphan || this.statusFilter === "done" && !k.status || this.statusFilter === "todo" && k.status || P.push(k);
      return P;
    }, "getFiltered"), v = /* @__PURE__ */ b(() => {
      d.empty();
      let T = y(), E = 0, P = 100;
      for (let k = 0; k < T.length && E < P; k++) {
        let L = T[k], m = d.createDiv("lkm-multipick-row");
        this.selected.has(L.path) && m.classList.add("is-selected"), m.createSpan({ text: L.label });
        let C = [];
        L.isMain && C.push(t("\u4E3B\u7B14\u8BB0")), L.type && C.push(L.type), C.length && m.createSpan({ text: " \xB7 " + C.join(" \xB7 "), cls: "lkm-multipick-type" }), m.addEventListener("click", () => {
          this.selected.has(L.path) ? this.selected.delete(L.path) : this.selected.set(L.path, L.label), m.classList.toggle("is-selected"), p.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0"));
        }), E++;
      }
      E === 0 ? d.createEl("p", { text: t("\u65E0\u5339\u914D\u7ED3\u679C"), cls: "lkm-modal-sub" }) : E === P && d.createEl("p", { text: t("\u4EC5\u663E\u793A\u524D ") + P + t(" \u6761\uFF0C\u8BF7\u641C\u7D22\u7F29\u5C0F\u8303\u56F4"), cls: "lkm-modal-sub" });
    }, "renderList");
    o.addEventListener("input", () => {
      this.searchVal = o.value, u && clearTimeout(u), u = setTimeout(v, 150);
    });
    let F = e.createDiv("lkm-multipick-btns");
    new R(F).addButton((T) => T.setButtonText(t("\u5168\u9009\u5F53\u524D")).onClick(() => {
      for (let E of y()) this.selected.set(E.path, E.label);
      v(), p.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0"));
    })).addButton((T) => T.setButtonText(t("\u663E\u793A\u5BFC\u56FE")).setCta().onClick(() => {
      if (!this.selected.size) {
        new g(t("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      this.close(), this.onChoose([...this.selected.keys()]);
    })).addButton((T) => T.setButtonText(t("\u6E05\u9664\u6240\u6709")).onClick(() => {
      this.selected.clear(), v(), p.setText(t("\u5DF2\u9009 0 \u7BC7\u7B14\u8BB0"));
    })).addButton((T) => T.setButtonText(t("\u53D6\u6D88")).onClick(() => this.close())), p.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0")), v(), o.focus();
  }
  onClose() {
    this.contentEl.empty();
  }
};
b(ft, "MultiPickModal");
var It = ft, mt = class extends ke {
  constructor(e, s, i) {
    super(e), this.parentLabel = s, this.opts = i || {}, this.onSubmit = this.opts.onSubmit || (() => {
    });
  }
  onOpen() {
    let { contentEl: e } = this, s = this.opts;
    e.createEl("h3", { text: s.standalone ? t("\u65B0\u5EFA\u8282\u70B9") : t("\u65B0\u5EFA\u5B50\u8282\u70B9") }), s.standalone || e.createEl("p", { text: t("\u7236\u8282\u70B9\uFF1A") + this.parentLabel, cls: "lkm-modal-sub" });
    let i = "", n = s.defaultType || "", a = s.defaultTemplate || "", o = !1;
    new R(e).setName(t("\u6807\u9898")).addText((c) => {
      c.onChange((h) => i = h), c.inputEl.focus(), c.inputEl.addEventListener("keydown", (h) => {
        h.key === "Enter" && (h.preventDefault(), r());
      });
    }), new R(e).setName(t("\u7C7B\u578B")).setDesc(t("\u5199\u5165\u7B14\u8BB0\u7684 type \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((c) => {
      c.addOption("", t("\u4E0D\u9009")), (s.types || []).forEach((h) => c.addOption(h, h)), c.setValue(n), c.onChange((h) => {
        n = h;
        let d = s.typeTemplates && s.typeTemplates[h];
        if (d && l) {
          let p = (s.templates || []).find((u) => u.path === ee(d));
          p && (a = p.path, l.setValue(a));
        }
      });
    });
    let l = null;
    new R(e).setName(t("\u6A21\u677F")).setDesc(t("\u4E0D\u540C\u7C7B\u578B\u53EF\u4F7F\u7528\u4E0D\u540C\u6A21\u677F")).addDropdown((c) => {
      l = c, (s.templates || []).forEach((h) => c.addOption(h.path, h.name)), c.setValue(a), c.onChange((h) => a = h);
    }), new R(e).setName(t("\u4E3B\u7B14\u8BB0")).setDesc(t("\u6807\u8BB0\u4E3A\u5BFC\u56FE\u4E3B\u5165\u53E3\uFF08") + (s.zkField || "main") + ": true\uFF09").addToggle((c) => {
      c.onChange((h) => o = h);
    });
    let r = /* @__PURE__ */ b(() => {
      let c = i.trim();
      if (!c) {
        new g(t("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(c, n, a, o);
    }, "done");
    new R(e).addButton((c) => c.setButtonText(t("\u521B\u5EFA")).setCta().onClick(r));
  }
  onClose() {
    this.contentEl.empty();
  }
};
b(mt, "NewChildModal");
var lt = mt, gt = class extends ke {
  constructor(e, s, i) {
    super(e), this.currentName = s, this.onSubmit = i;
  }
  onOpen() {
    let { contentEl: e } = this;
    e.createEl("h3", { text: t("\u91CD\u547D\u540D\u6587\u4EF6") }), e.createEl("p", { text: t("\u5F53\u524D\uFF1A") + this.currentName + ".md", cls: "lkm-modal-sub" });
    let s = this.currentName;
    new R(e).setName(t("\u65B0\u6587\u4EF6\u540D")).addText((n) => {
      n.setValue(this.currentName), n.onChange((a) => s = a), n.inputEl.focus(), n.inputEl.select(), n.inputEl.addEventListener("keydown", (a) => {
        a.key === "Enter" && (a.preventDefault(), i());
      });
    });
    let i = /* @__PURE__ */ b(() => {
      let n = s.trim();
      if (!n) {
        new g(t("\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(n);
    }, "done");
    new R(e).addButton((n) => n.setButtonText(t("\u91CD\u547D\u540D")).setCta().onClick(i));
  }
  onClose() {
    this.contentEl.empty();
  }
};
b(gt, "RenameModal");
var Nt = gt, kt = class extends ke {
  constructor(e, s, i, n, a) {
    super(e), this.titleText = s, this.message = i, this.onConfirm = n, this.danger = a !== !1;
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
b(kt, "ConfirmModal");
var Re = kt, wt = class extends ot {
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
b(wt, "MoveModal");
var Ue = wt, yt = class extends Et {
  constructor(e, s) {
    super(e), this.plugin = s, this.rootPath = null, this.depth = s.settings.defaultDepth, this.notes = /* @__PURE__ */ new Map(), this.referenced = /* @__PURE__ */ new Set(), this.currentRoot = null, this._cleanup = [], this._view = null, this._expandedMem = /* @__PURE__ */ new Map(), this._history = [], this._selected = /* @__PURE__ */ new Set(), this._batchMode = !1, this._selKey = null, this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._toolbarCollapsed = !1, this._dashFilters = [], this._dashSort = "date", this._dashSearch = "", this._dashHeatIdx = 0, this._dashBranchAll = !1, this._dashTab = "stats", this._tlSort = "desc", this._tlTypeFilter = "", this._tlSearch = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this._nodeIndex = /* @__PURE__ */ new Map();
  }
  get s() {
    return this.plugin.settings;
  }
  getViewType() {
    return ge;
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
      let n = this.app.vault.getAbstractFileByPath(e.kwFilePath);
      n ? this._kwFile = n : this._kwFile = null;
    } else
      this._kwFile = null;
    let s = e.expandedMemory ? new Map(Object.entries(e.expandedMemory)) : /* @__PURE__ */ new Map(), i = e.view || null;
    await this.rebuild(!0), this._expandedMem = s, this._view = i, this.render({ fit: !0 });
  }
  _showPresetMenu(e) {
    let s = new Le(), i = this.plugin._getSavedViews();
    if (i.length === 0)
      s.addItem((a) => a.setTitle(t("\u6682\u65E0\u9884\u8BBE")).setIcon("bookmark").onClick(() => {
      }));
    else {
      for (let a of i) {
        let o = a.time ? new Date(a.time).toLocaleString() : "";
        s.addItem((l) => {
          l.setTitle(a.name + (o ? "  (" + o + ")" : "")).setIcon("bookmark").onClick(async () => {
            await this._restoreViewState(a.state), new g(t("\u5DF2\u6062\u590D\u9884\u8BBE\uFF1A") + a.name);
          });
        });
      }
      s.addSeparator(), s.addItem((a) => a.setTitle(t("\u5220\u9664\u9884\u8BBE\u2026")).setIcon("trash").onClick(() => this._showDeletePresetMenu(e)));
    }
    s.addSeparator(), s.addItem((a) => a.setTitle(t("\u4FDD\u5B58\u5F53\u524D\u72B6\u6001\u2026")).setIcon("plus").onClick(() => this._promptSaveView()));
    let n = e.getBoundingClientRect();
    s.showAtPosition({ x: n.left, y: n.bottom });
  }
  _showDeletePresetMenu(e) {
    let s = new Le(), i = this.plugin._getSavedViews();
    for (let a of i)
      s.addItem((o) => {
        o.setTitle(a.name).setIcon("trash").onClick(async () => {
          await this.plugin._deleteSavedView(a.name), new g(t("\u5DF2\u5220\u9664\u9884\u8BBE\uFF1A") + a.name);
        });
      });
    let n = e.getBoundingClientRect();
    s.showAtPosition({ x: n.left, y: n.bottom });
  }
  _promptSaveView() {
    let e = new ke(this.app);
    e.titleEl.setText(t("\u4FDD\u5B58\u5BFC\u56FE\u9884\u8BBE"));
    let s = "", i = new R(e.contentEl).setName(t("\u9884\u8BBE\u540D\u79F0")).addText((a) => {
      a.setPlaceholder(t("\u8F93\u5165\u9884\u8BBE\u540D\u79F0")), a.inputEl.focus(), a.onChange((o) => s = o), a.inputEl.addEventListener("keydown", (o) => {
        o.key === "Enter" && (o.preventDefault(), n());
      });
    }), n = /* @__PURE__ */ b(async () => {
      let a = s.trim();
      if (!a) {
        new g(t("\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.plugin._getSavedViews().some((l) => l.name === a) ? new Re(this.app, t("\u8986\u76D6\u9884\u8BBE"), t("\u5DF2\u5B58\u5728\u540C\u540D\u9884\u8BBE\u300C") + a + t("\u300D\uFF0C\u662F\u5426\u8986\u76D6\uFF1F"), async () => {
        await this.plugin._saveViewPreset(a, this._captureViewState()), e.close(), new g(t("\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A") + a);
      }).open() : (await this.plugin._saveViewPreset(a, this._captureViewState()), e.close(), new g(t("\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A") + a));
    }, "done");
    new R(e.contentEl).addButton((a) => a.setButtonText(t("\u4FDD\u5B58")).setCta().onClick(n)).addButton((a) => a.setButtonText(t("\u53D6\u6D88")).onClick(() => e.close())), e.open();
  }
  async _waitMetadataReady() {
    let e = this.app.metadataCache;
    pt(this.app, this.s) || await new Promise((s) => {
      let i = !1, n = /* @__PURE__ */ b(() => {
        if (!i) {
          i = !0;
          try {
            e.offref(a), e.offref(o);
          } catch {
          }
          clearTimeout(l), s();
        }
      }, "finish"), a = e.on("resolved", n), o = e.on("changed", n), l = setTimeout(n, 6e3);
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
    let s = window.visualViewport, i = null, n = /* @__PURE__ */ b(() => {
      i && clearTimeout(i), i = setTimeout(() => {
        if (i = null, !window.matchMedia("(hover: none)").matches) return;
        let r = e.querySelector(".lkm-dash");
        if (!r) return;
        let c = e.querySelector(".lkm-toolbar"), h = c ? c.getBoundingClientRect().height : 0;
        r.style.maxHeight = s.height - h + "px";
        let d = document.activeElement;
        d && d.tagName === "INPUT" && e.contains(d) && setTimeout(() => {
          let p = d.getBoundingClientRect(), u = r.getBoundingClientRect();
          (p.top < u.top || p.bottom > u.bottom) && d.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 50);
      }, 150);
    }, "adjust"), a = /* @__PURE__ */ b(() => n(), "onResize"), o = /* @__PURE__ */ b(() => n(), "onScroll");
    s.addEventListener("resize", a), s.addEventListener("scroll", o), window.addEventListener("resize", a), this._cleanup.push(() => {
      s.removeEventListener("resize", a), s.removeEventListener("scroll", o), window.removeEventListener("resize", a);
      let l = e.querySelector(".lkm-dash");
      l && (l.style.maxHeight = "");
    }), this._adjustMobileViewport = n;
  }
  async rebuild(e) {
    let s = We(this.app, this.s);
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
    let e = [...this.notes.values()], s = e.filter((n) => n.zk).sort((n, a) => n.title.localeCompare(a.title, "zh"));
    if (s.length) return s[0].file.path;
    let i = e.filter((n) => !this.referenced.has(n.file.path)).sort((n, a) => n.title.localeCompare(a.title, "zh"));
    return i.length ? i[0].file.path : e.length ? e[0].file.path : null;
  }
  _indexTree(e) {
    this._nodeIndex = /* @__PURE__ */ new Map(), this._treePaths = /* @__PURE__ */ new Set(), this._pathNodes = /* @__PURE__ */ new Map();
    let s = /* @__PURE__ */ b((i) => {
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
    let n = /* @__PURE__ */ b((k) => {
      let L = k.target.tagName;
      if (!(L === "INPUT" || L === "TEXTAREA"))
        if (k.key === "Delete" || k.key === "Backspace") {
          if (this._selKey) {
            k.preventDefault();
            let m = this._nodeIndex.get(this._selKey);
            m && this._deleteNode(m);
          }
        } else if (k.key === "Enter") {
          if (this._selKey) {
            k.preventDefault();
            let m = this._nodeIndex.get(this._selKey);
            m && m.note.file && this.app.workspace.getLeaf(!0).openFile(m.note.file);
          }
        } else if (k.key === "Escape")
          this._batchMode ? (this._batchMode = !1, this._selected.clear(), this.render()) : this._selKey && this._select(null);
        else if (k.key === "ArrowUp" || k.key === "ArrowDown" || k.key === "ArrowLeft" || k.key === "ArrowRight") {
          if (!this._selKey) return;
          let m = this._nodeIndex.get(this._selKey);
          if (!m) return;
          if (k.preventDefault(), k.key === "ArrowLeft")
            m.expanded && m.children.length ? (m.expanded = !1, this._expandedMem.set(m.note.file ? m.note.file.path : m.key, !1), this.render()) : m.parent && this._select(m.parent.key);
          else if (k.key === "ArrowRight")
            !m.expanded && m.children.length ? (m.expanded = !0, this._expandedMem.set(m.note.file ? m.note.file.path : m.key, !0), this.render()) : m.children.length && this._select(m.children[0].key);
          else if (k.key === "ArrowUp") {
            if (m.parent) {
              let M = m.parent.children, C = M.indexOf(m);
              C > 0 ? this._select(M[C - 1].key) : this._select(m.parent.key);
            }
          } else if (k.key === "ArrowDown") {
            if (m.expanded && m.children.length) {
              this._select(m.children[0].key);
              return;
            }
            let M = m;
            for (; M.parent; ) {
              let C = M.parent.children, S = C.indexOf(M);
              if (S < C.length - 1) {
                this._select(C[S + 1].key);
                return;
              }
              M = M.parent;
            }
          }
        } else if (k.key === " ") {
          if (this._selKey) {
            k.preventDefault();
            let m = this._nodeIndex.get(this._selKey);
            m && m.children.length && (m.expanded = !m.expanded, this._expandedMem.set(m.note.file ? m.note.file.path : m.key, m.expanded), this.render());
          }
        } else if (k.key === "n" || k.key === "N") {
          if (this._selKey) {
            k.preventDefault();
            let m = this._nodeIndex.get(this._selKey);
            m && this._addChildDialog(m);
          }
        } else k.key === "b" || k.key === "B" ? (k.preventDefault(), this._back()) : k.key === "/" && (k.preventDefault(), this.openNoteSearch());
    }, "onKeydown");
    s.addEventListener("keydown", n), this._cleanup.push(() => s.removeEventListener("keydown", n)), this._titleLenApplied !== i.maxTitleLen && (this._titleLenApplied = i.maxTitleLen);
    let a = s.createDiv("lkm-toolbar"), o = a.createEl("button", { cls: "lkm-btn lkm-toolbar-toggle", text: "\u2630" });
    o.title = t("\u5C55\u5F00/\u6298\u53E0\u5DE5\u5177\u680F"), o.onclick = () => {
      this._toolbarCollapsed = !this._toolbarCollapsed, a.classList.toggle("lkm-collapsed", this._toolbarCollapsed);
    }, this._toolbarCollapsed && a.classList.add("lkm-collapsed");
    let l = /* @__PURE__ */ b((k, L, m, M, C, S) => {
      let w = a.createEl("button", { cls: "lkm-btn" + (M ? " " + M : "") });
      return S ? (w.createEl("span", { cls: "lkm-btn-icon", text: S }), w.createEl("span", { text: k })) : w.textContent = k, w.title = L, C && (w.disabled = !0), w.onclick = (N) => {
        w.disabled || m(w, N);
      }, w;
    }, "mkBtn"), r = this._selKey ? this._nodeIndex.get(this._selKey) : null, c = !r;
    l(t("\u5DE5\u4F5C\u53F0"), t("\u67E5\u770B\u7EDF\u8BA1\u5DE5\u4F5C\u53F0"), () => {
      this._mode = "dash", this.render();
    }, "", !1, "\u{1F4CA}"), l(t("\u4E3B\u7B14\u8BB0"), t("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u7B14\u8BB0\uFF08main: true\uFF09"), () => this.openRootPicker(), "", !1, "\u{1F4CC}"), l(t("\u5173\u952E\u8BCD"), t("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u8FC7\u6EE4"), () => this.openKeywordPicker(), "", !1, "\u{1F511}"), l(t("\u641C\u7D22"), t("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9"), () => this.openNoteSearch(), "", !1, "\u{1F50D}"), l(t("\u591A\u9009"), t("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A"), () => this.openMultiPick(), "", !1, "\u{1F4CB}"), l(t("\u65B0\u589E"), t("\u521B\u5EFA\u72EC\u7ACB\u7B14\u8BB0"), () => this.createStandaloneNote(), "", !1, "\u271A");
    let h = a.createDiv("lkm-depth");
    h.createSpan({ text: t("\u5C42") });
    let d = h.createEl("button", { cls: "lkm-step", text: "\u2212", title: t("\u51CF\u5C11\u663E\u793A\u5C42\u6570\uFF08\u5C421=\u53EA\u770B\u6839\u7B14\u8BB0\uFF09") }), p = h.createSpan({ cls: "lkm-depth-val", text: String(this.depth) }), u = h.createEl("button", { cls: "lkm-step", text: "+", title: t("\u589E\u52A0\u663E\u793A\u5C42\u6570") });
    d.onclick = () => {
      this.depth > 1 && (this.depth--, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, u.onclick = () => {
      this.depth < 12 && (this.depth++, this._expandedMem.clear(), p.setText(String(this.depth)), this.render());
    }, l(t("\u5237\u65B0"), t("\u91CD\u65B0\u8BFB\u53D6\u76EE\u5F55\u4E0E\u7B14\u8BB0\u6570\u636E"), () => this.rebuild(!0), "", !1, "\u21BB"), l(t("\u9002\u5E94"), t("\u7F29\u653E\u81F3\u5B8C\u6574\u663E\u793A\u6240\u6709\u8282\u70B9"), () => this._fit && this._fit(), "", !1, "\u2922"), l(t("\u5168\u5C55"), t("\u5C55\u5F00\u6240\u6709\u8282\u70B9"), () => this._expandAll(!0), "", !1, "\u2295"), l(t("\u5168\u6298"), t("\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9"), () => this._expandAll(!1), "", !1, "\u2296"), l(this.s.layoutDir === "v" ? t("\u7EB5\u5411") : t("\u6A2A\u5411"), t("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u6A2A\u5411/\u7EB5\u5411\uFF09"), (k) => {
      this.s.layoutDir = this.s.layoutDir === "v" ? "h" : "v", this.plugin.saveSettings(), this._view = null, this.render({ fit: !0 });
    }, this.s.layoutDir === "v" ? "is-active" : "", !1, "\u21C4"), l(t("\u5FEB\u6377\u952E"), t("\u67E5\u770B\u952E\u76D8\u5FEB\u6377\u952E\u8BF4\u660E"), () => this._showShortcutHelp(), "", !1, "\u2328"), l(t("\u5BFC\u51FA"), t("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2"), (k) => this._exportMenu(k), "", !1, "\u2B07"), l(t("\u9884\u8BBE"), t("\u4FDD\u5B58/\u6062\u590D\u5BFC\u56FE\u72B6\u6001\u9884\u8BBE"), (k) => this._showPresetMenu(k), "", !1, "\u{1F516}");
    let y = l(t("\u663E\u793A"), t("\u5207\u6362\u663E\u793A\u9009\u9879"), () => {
      let k = new Le();
      k.addItem((m) => m.setTitle(this.s.showCreated ? t("\u2713 \u65F6\u95F4") : t("\u65F6\u95F4")).setIcon("calendar").onClick(() => {
        this.s.showCreated = !this.s.showCreated, this.plugin.saveSettings(), this.render();
      })), k.addItem((m) => m.setTitle(this.s.showType ? t("\u2713 \u7C7B\u578B") : t("\u7C7B\u578B")).setIcon("tag").onClick(() => {
        this.s.showType = !this.s.showType, this.plugin.saveSettings(), this.render();
      })), k.addItem((m) => m.setTitle(this.s.showChildCount ? t("\u2713 \u5B50\u6570") : t("\u5B50\u6570")).setIcon("list").onClick(() => {
        this.s.showChildCount = !this.s.showChildCount, this.plugin.saveSettings(), this.render();
      })), k.addItem((m) => m.setTitle(this.s.showWordCount ? t("\u2713 \u5B57\u6570") : t("\u5B57\u6570")).setIcon("type").onClick(() => {
        this.s.showWordCount = !this.s.showWordCount, this.plugin.saveSettings(), this.render();
      })), k.addSeparator(), k.addItem((m) => m.setTitle(this.s.showOpenIcon !== !1 ? t("\u2713 \u6253\u5F00\u56FE\u6807") : t("\u6253\u5F00\u56FE\u6807")).setIcon("edit").onClick(() => {
        this.s.showOpenIcon = this.s.showOpenIcon === !1, this.plugin.saveSettings(), this.render();
      })), k.addItem((m) => m.setTitle(this.s.showAddIcon !== !1 ? t("\u2713 \u65B0\u589E\u56FE\u6807") : t("\u65B0\u589E\u56FE\u6807")).setIcon("plus-circle").onClick(() => {
        this.s.showAddIcon = this.s.showAddIcon === !1, this.plugin.saveSettings(), this.render();
      }));
      let L = y.getBoundingClientRect();
      k.showAtPosition({ x: L.left, y: L.bottom });
    });
    l(t("\u6279\u91CF"), t("\u8FDB\u5165\u6279\u91CF\u6A21\u5F0F\uFF1A\u5355\u51FB\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u540E\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664"), () => this._toggleBatch(), this._batchMode ? "is-active" : ""), this._batchMode && (a.createDiv("lkm-sel-count").setText(t("\u5DF2\u9009 ") + this._selected.size), l(t("\u5168\u9009"), t("\u9009\u4E2D\u5BFC\u56FE\u4E2D\u6240\u6709\u8282\u70B9"), () => {
      this._selected = new Set(this._nodeIndex.keys()), this.render();
    }, "lkm-btn-action"), l(t("\u53CD\u9009"), t("\u53CD\u9009\u5F53\u524D\u9009\u4E2D\u72B6\u6001"), () => {
      let L = new Set(this._nodeIndex.keys());
      for (let m of this._selected) L.delete(m);
      this._selected = L, this.render();
    }, "lkm-btn-action"), l(t("\u79FB\u52A8\u5230\u2026"), t("\u628A\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u6307\u5B9A\u7236\u7B14\u8BB0\u4E0B"), () => this._batchMoveDialog(), "lkm-btn-action"), l(t("\u5220\u9664\u9009\u4E2D"), t("\u5220\u9664\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u53CA\u5176\u7B14\u8BB0\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF09"), () => this._batchDelete(), "lkm-btn-action"), l(t("\u6539\u7C7B\u578B"), t("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u7C7B\u578B"), () => this._batchSetType(), "lkm-btn-action"), l(t("\u6807\u8BB0\u5B8C\u6210"), t("\u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u5DF2\u5B8C\u6210"), () => this._batchSetStatus(!0), "lkm-btn-action"), l(t("\u53D6\u6D88\u5B8C\u6210"), t("\u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u5B8C\u6210\u6807\u8BB0"), () => this._batchSetStatus(!1), "lkm-btn-action"), l(t("\u6807\u8BB0\u4E3B\u7B14\u8BB0"), t("\u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u4E3B\u7B14\u8BB0"), () => this._batchSetMain(!0), "lkm-btn-action"), l(t("\u53D6\u6D88\u4E3B\u7B14\u8BB0"), t("\u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u4E3B\u7B14\u8BB0\u6807\u8BB0"), () => this._batchSetMain(!1), "lkm-btn-action")), l(t("\u8BBE\u7F6E"), t("\u6253\u5F00\u63D2\u4EF6\u8BBE\u7F6E"), () => {
      this.app.setting.open(), this.app.setting.openTabById(this.plugin.manifest.id);
    }, "", !1, "\u2699"), l(t("\u83DC\u5355"), t("\u663E\u793A\u8282\u70B9\u64CD\u4F5C\u83DC\u5355\uFF08\u7B49\u540C\u53F3\u952E/\u957F\u6309\uFF09\uFF1A\u6253\u5F00/\u65B0\u589E/\u805A\u7126/\u4E0A\u7EA7/\u5B8C\u6210/\u4E3B\u7B14\u8BB0/\u91CD\u547D\u540D/\u590D\u5236/\u79FB\u52A8/\u6392\u5E8F/\u5220\u9664"), (k, L) => {
      let m = this._nodeIndex.get(this._selKey);
      m && this._showNodeMenu(m, { clientX: L.clientX, clientY: L.clientY });
    }, "lkm-node-btn", !r), l(t("\u8FD4\u56DE"), t("\u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE\u4F4D\u7F6E"), () => this._back(), "", this._history.length === 0, "\u2190"), l(t("\u7B5B\u9009"), t("\u7B5B\u9009\u8282\u70B9"), () => {
      a.classList.toggle("lkm-filter-open");
    }, "lkm-filter-toggle");
    let v = a.createEl("input", { type: "text", cls: "lkm-filter-input", placeholder: t("\u7B5B\u9009\u8282\u70B9\u2026") });
    v.value = this._filterText || "", v.addEventListener("input", () => {
      this._filterText = v.value.trim().toLowerCase(), this._applyFilter();
    });
    let F = a.createDiv("lkm-info");
    r && F.createSpan({ text: t("\u5DF2\u9009\uFF1A") + q(r.note.title, 12) + " \uFF5C " });
    let T = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (this._kwFile)
      F.createSpan({ text: t("\u5173\u952E\u8BCD\uFF1A") + this._kwFile.basename });
    else if (this._multiRoot)
      F.createSpan({ text: t("\u591A\u9009\u5BFC\u56FE\uFF08") + (this.currentRoot ? this.currentRoot.children.length : 0) + t(" \u7BC7\uFF09") });
    else if (T) {
      F.createSpan({ text: t("\u8DEF\u5F84\uFF1A") });
      let k = this._buildCrumbChain();
      k.forEach((L, m) => {
        if (k.length > 8 && m === 1) {
          F.createEl("span", { cls: "lkm-crumb-sep", text: "\u2026>" });
          return;
        }
        if (k.length > 8 && m > 1 && m < k.length - 1) return;
        m && F.createSpan({ cls: "lkm-crumb-sep", text: ">" });
        let M = m === k.length - 1, C = q(L.note.title, 10), S = F.createEl(M ? "span" : "a", { cls: "lkm-crumb-item" + (M ? " lkm-crumb-cur" : ""), text: C });
        S.title = L.note.title, !M && L.note.file && S.addEventListener("click", () => this._focusPath(L.note.file.path));
      });
    } else
      F.createSpan({ text: t("\u672A\u627E\u5230\u7B14\u8BB0") });
    let E = s.createDiv("lkm-canvas");
    if (this._kwFile && !this.app.vault.getAbstractFileByPath(this._kwFile.path) && (this._kwFile = null), !this._kwFile && !this._multiRoot && (this._selectedRootPaths = null), this._kwFile) {
      this.showKeyword(this._kwFile, e);
      return;
    }
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length) {
      this._indexTree(this.currentRoot), He(this.currentRoot, this.depth), this._ensureSelectedVisible(this.currentRoot), this._restoreExpanded(), this._draw(E, Ae(this.currentRoot, this.s), e);
      return;
    }
    if (!this.rootPath || !T) {
      if (this.notes.size === 0) {
        this._renderEmptyGuide(E);
        return;
      }
      E.createDiv("lkm-empty").setText(t("\u6CA1\u6709\u627E\u5230\u4E3B\u7B14\u8BB0\uFF08") + (this.s.zkField || "main") + t(": true\uFF09\u3002\u53EF\u5728\u5BFC\u56FE\u4E2D\u53F3\u952E/\u957F\u6309\u4EFB\u610F\u8282\u70B9\u6807\u8BB0\u4E3A\u4E3B\u7B14\u8BB0\u3002"));
      return;
    }
    let P = Ve(this.app, this.notes, T);
    this.currentRoot = P, this._indexTree(P), He(P, this.depth), this._restoreExpanded(), this._draw(E, Ae(P, this.s), e);
  }
  _restoreExpanded() {
    for (let [e, s] of this._expandedMem) {
      let i = this._pathNodes ? this._pathNodes.get(e) : null;
      if (i) for (let n of i) n.expanded = s;
    }
  }
  _ensureSelectedVisible(e) {
    !this._selectedRootPaths || !this._selectedRootPaths.size || (/* @__PURE__ */ b(function s(i) {
      if (!i.children || !i.children.length) return !1;
      let n = !1;
      for (let a of i.children)
        a.note.file && this.has(a.note.file.path) && (n = !0), s.call(this, a) && (n = !0);
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
    let a = document.createElement("div");
    a.className = "lkm-preview";
    let o = document.createElement("div");
    o.className = "lkm-preview-title", o.textContent = e.note.title, a.appendChild(o);
    let l = document.createElement("div");
    a.appendChild(l), a.addEventListener("mouseenter", () => {
      this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null);
    }), a.addEventListener("mouseleave", () => {
      this._hidePreview();
    }), document.body.appendChild(a), this._previewEl = a, this._previewComp = new Lt(), this._previewComp.load(), await Mt.render(this.app, n, l, i, this._previewComp), this._positionPreview(s);
  }
  _positionPreview(e) {
    if (!this._previewEl) return;
    let s = this._previewEl, i = e.clientX + 14, n = e.clientY + 14, a = s.getBoundingClientRect(), o = window.innerWidth - a.width - 8, l = window.innerHeight - a.height - 8;
    s.style.left = Math.min(i, o) + "px", s.style.top = Math.min(n, l) + "px";
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
    } else new g(t("\u6CA1\u6709\u53EF\u8FD4\u56DE\u7684\u8282\u70B9"));
  }
  _expandAll(e) {
    for (let s of this._nodeIndex.values())
      s.children.length && (s.expanded = e, this._expandedMem.set(s.note.file ? s.note.file.path : s.key, e));
    this.render();
  }
  _showShortcutHelp() {
    let e = new ke(this.app);
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
      for (let [a, o] of i) {
        let l = s.createDiv("lkm-shortcut-row");
        l.createEl("span", { cls: "lkm-shortcut-key", text: a }), l.createEl("span", { cls: "lkm-shortcut-desc", text: o });
      }
      let n = s.createDiv("lkm-multipick-btns");
      new R(n).addButton((a) => a.setButtonText(t("\u5173\u95ED")).onClick(() => e.close()));
    }, e.open();
  }
  _exportMenu(e) {
    let s = new Le();
    s.addItem((n) => n.setTitle(t("\u5BFC\u51FA SVG")).setIcon("download").onClick(() => this._exportSVG())), s.addItem((n) => n.setTitle(t("\u5BFC\u51FA PNG")).setIcon("image").onClick(() => this._exportPNG())), s.addItem((n) => n.setTitle(t("\u5BFC\u51FA Markdown \u5927\u7EB2")).setIcon("document").onClick(() => this._exportMarkdown())), s.addItem((n) => n.setTitle(t("\u5BFC\u51FA Canvas")).setIcon("layout-grid").onClick(() => this._exportCanvas()));
    let i = e.getBoundingClientRect();
    s.showAtPosition({ x: i.left, y: i.bottom + 4 });
  }
  _getSVGString() {
    let e = this.contentEl.querySelector(".lkm-svg");
    if (!e)
      return new g(t("\u672A\u627E\u5230\u5BFC\u56FE\u5185\u5BB9")), null;
    let s = e.cloneNode(!0), i = e.getBBox(), n = 30, a = i.width + n * 2, o = i.height + n * 2;
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
    for (let m of c) {
      let M = r.getPropertyValue(m).trim();
      M && (h[m] = M);
    }
    h["--lkm-accent"] || (h["--lkm-accent"] = "#6c8cff"), h["--lkm-main"] || (h["--lkm-main"] = "#f2a65a"), h["--lkm-done"] || (h["--lkm-done"] = "#3fa66a");
    let d = "";
    try {
      for (let m of document.styleSheets) {
        let M;
        try {
          M = m.cssRules;
        } catch {
          continue;
        }
        if (M)
          for (let C of M) {
            let S = C.selectorText || "";
            S.includes("lkm-") && !S.includes("lkm-toolbar") && !S.includes("lkm-btn") && !S.includes("lkm-dash") && !S.includes("lkm-cards") && !S.includes("lkm-modal") && !S.includes("lkm-multipick") && !S.includes("lkm-empty") && !S.includes("lkm-guide") && !S.includes("lkm-heat") && !S.includes("lkm-branch") && !S.includes("lkm-legend") && !S.includes("lkm-donut") && !S.includes("lkm-bars") && !S.includes("lkm-stackbar") && !S.includes("lkm-chips") && !S.includes("lkm-shortcut") && !S.includes("lkm-step") && !S.includes("lkm-depth") && !S.includes("lkm-info") && !S.includes("lkm-crumb") && !S.includes("lkm-sel-count") && (d += C.cssText + `
`);
          }
      }
    } catch (m) {
      console.error("[link-mindmap] collect CSS:", m);
    }
    let p = d;
    for (let [m, M] of Object.entries(h))
      p = p.replace(new RegExp("var\\(" + m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\)", "g"), M), p = p.replace(new RegExp("var\\(" + m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ",\\s*[^)]+\\)", "g"), M);
    p = p.replace(/var\(--[^)]+\)/g, "#888");
    let u = document.createElement("style");
    u.textContent = p, s.insertBefore(u, s.firstChild);
    let y = e.querySelectorAll(".lkm-card"), v = s.querySelectorAll(".lkm-card");
    for (let m = 0; m < y.length && m < v.length; m++) {
      let M = y[m], C = v[m], S = getComputedStyle(M), w = S.stroke, N = S.fill, _ = S.strokeWidth;
      w && w !== "none" && C.setAttribute("stroke", w), N && N !== "none" && C.setAttribute("fill", N), _ && C.setAttribute("stroke-width", _);
    }
    let F = e.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign"), T = s.querySelectorAll(".lkm-title, .lkm-sub, .lkm-sign, .lkm-open-sign, .lkm-add-sign");
    for (let m = 0; m < F.length && m < T.length; m++) {
      let M = getComputedStyle(F[m]), C = M.fill, S = M.fontSize;
      C && C !== "none" && T[m].setAttribute("fill", C), S && T[m].setAttribute("font-size", S);
    }
    let E = e.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill"), P = s.querySelectorAll(".lkm-dot, .lkm-dot-zk, .lkm-dot-done, .lkm-dot-multi, .lkm-connect-dot, .lkm-arrow-fill");
    for (let m = 0; m < E.length && m < P.length; m++) {
      let C = getComputedStyle(E[m]).fill;
      C && C !== "none" && P[m].setAttribute("fill", C);
    }
    let k = e.querySelectorAll(".lkm-edge"), L = s.querySelectorAll(".lkm-edge");
    for (let m = 0; m < k.length && m < L.length; m++) {
      let C = getComputedStyle(k[m]).stroke;
      C && C !== "none" && L[m].setAttribute("stroke", C);
    }
    return new XMLSerializer().serializeToString(s);
  }
  _exportSVG() {
    let e = this._getSVGString();
    if (!e) return;
    let i = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".svg";
    this.app.vault.create(i, e).then(
      () => new g(t("SVG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + i),
      (n) => new g(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n))
    );
  }
  _exportPNG() {
    let e = this._getSVGString();
    if (!e) return;
    let i = this.contentEl.querySelector(".lkm-svg").getBBox(), n = 30, a = i.width + n * 2, o = i.height + n * 2, l = new Image(), r = btoa(unescape(encodeURIComponent(e)));
    l.onload = () => {
      let c = document.createElement("canvas");
      c.width = a * 2, c.height = o * 2;
      let h = c.getContext("2d"), d = getComputedStyle(this.contentEl).getPropertyValue("--background-primary").trim() || "#ffffff";
      h.fillStyle = d, h.fillRect(0, 0, c.width, c.height), h.drawImage(l, 0, 0, c.width, c.height), c.toBlob((p) => {
        let y = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".png";
        p.arrayBuffer().then((v) => this.app.vault.createBinary(y, v).then(
          () => new g(t("PNG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + y),
          (F) => new g(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (F && F.message ? F.message : F))
        ));
      });
    }, l.onerror = () => new g(t("PNG \u5BFC\u51FA\u5931\u8D25")), l.src = "data:image/svg+xml;base64," + r;
  }
  _exportMarkdown() {
    let e = this.currentRoot;
    if (!e) {
      new g(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let s = [], i = /* @__PURE__ */ b((l, r) => {
      let c = r === 0 ? "# " : "  ".repeat(r) + "- ", h = l.note.status ? " [x]" : "", d = l.note.type ? " `" + l.note.type + "`" : "";
      s.push(c + (l.note.title || l.note.file?.name || "?") + d + h);
      for (let p of l.children || []) i(p, r + 1);
    }, "walk");
    i(e, 0);
    let n = s.join(`
`), o = "link-mindmap-outline-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".md";
    this.app.vault.create(o, n).then(
      () => new g(t("Markdown \u5927\u7EB2\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + o),
      (l) => new g(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l))
    );
  }
  _exportCanvas() {
    let e = this.currentRoot;
    if (!e) {
      new g(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let s = 300, i = 60, n = 180, a = 20, o = this.s.layoutDir === "v", l = [], r = [], c = /* @__PURE__ */ new Map(), h = 0, d = 0, p = /* @__PURE__ */ b((P) => {
      let k = (P.children || []).filter((L) => L.note.file);
      return k.length ? k.reduce((L, m) => L + p(m), 0) : 1;
    }, "subtreeSize"), u = /* @__PURE__ */ b((P, k, L) => {
      let m = (P.children || []).filter((N) => N.note.file), M = L, C = [];
      for (let N of m) {
        let _ = p(N), B = u(N, k + 1, M);
        C.push(B), M += _;
      }
      let S, w;
      if (o ? (S = L * (s + n), w = k * (i + a)) : (S = k * (s + n), C.length ? w = (C[0].y + C[C.length - 1].y) / 2 : w = L * (i + a)), P.note.file) {
        let N = "n" + h++;
        c.set(P.key, N), l.push({
          id: N,
          type: "file",
          file: P.note.file.path,
          x: Math.round(S),
          y: Math.round(w),
          width: s,
          height: i
        });
      }
      return { x: S, y: w };
    }, "layout");
    u(e, 0, 0);
    let y = /* @__PURE__ */ b((P) => {
      for (let k of P.children || []) {
        let L = c.get(P.key), m = c.get(k.key);
        L && m && r.push({
          id: "e" + d++,
          fromNode: L,
          toNode: m,
          fromSide: o ? "bottom" : "right",
          toSide: o ? "top" : "left"
        }), y(k);
      }
    }, "collectEdges");
    if (y(e), !l.length) {
      new g(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u8282\u70B9"));
      return;
    }
    let F = JSON.stringify({ nodes: l, edges: r }, null, 2), E = "link-mindmap-canvas-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".canvas";
    this.app.vault.create(E, F).then(
      () => new g(t("Canvas \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + E),
      (P) => new g(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (P && P.message ? P.message : P))
    );
  }
  _parentPathsOf(e) {
    let s = [];
    for (let i of this.notes.values())
      if (i.file.path !== e)
        for (let n of i.childLinks) {
          let a = this.app.metadataCache.getFirstLinkpathDest(n, i.file.path);
          if (a && a.path === e) {
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
      let a = this._parentPathsOf(i);
      i = a.length ? a[0] : null;
    }
    return e;
  }
  _up() {
    let e = this._selKey ? this._nodeIndex.get(this._selKey) : null, s = e && e.note.file ? e.note : this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!s || !s.file) {
      new g(t("\u6CA1\u6709\u53EF\u8DF3\u8F6C\u7684\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let i = this._parentPathsOf(s.file.path);
    if (!i.length) {
      new g("\u300C" + q(s.title, 12) + t("\u300D\u6CA1\u6709\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let n = s.file.path, a = /* @__PURE__ */ b((l) => {
      this._focusPath(l);
      let r = [...this._nodeIndex.values()].find((c) => c.note.file && c.note.file.path === n);
      r && (this._selKey = r.key, this.render());
    }, "go");
    if (i.length === 1) {
      a(i[0]);
      return;
    }
    let o = i.map((l) => ({ label: (this.notes.get(l) || {}).title || l, path: l }));
    new Pe(this.app, o, (l) => a(l.path), t("\u8BE5\u8282\u70B9\u6709\u591A\u4E2A\u4E0A\u7EA7\uFF0C\u9009\u62E9\u8981\u524D\u5F80\u7684\u4E0A\u7EA7\u2026")).open();
  }
  locateFile(e, s) {
    if (!s && !this.s.autoLocate || !e || e.extension !== "md" || this._batchMode || this._mode === "dash") return;
    try {
      if (typeof this.containerEl.isShown == "function" && !this.containerEl.isShown()) return;
    } catch {
    }
    let i = null;
    for (let l of this._nodeIndex.values())
      l.note.file && l.note.file.path === e.path && (!i || !l.isAlias) && (i = l);
    if (!i) return;
    if (this._kwFile && this.currentRoot) {
      let l = this._findClone(this.currentRoot, e.path);
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
      () => new g(t("\u5DF2\u590D\u5236\uFF1A") + s),
      () => new g(t("\u590D\u5236\u5931\u8D25"))
    );
  }
  _copySubtree(e) {
    if (!e) return;
    let s = [], i = /* @__PURE__ */ b((n, a) => {
      let o = a === 0 ? "" : "  ".repeat(a) + "- ";
      s.push(o + "[[" + (n.note.file ? n.note.file.basename : n.note.title) + "]]");
      for (let l of n.children || []) i(l, a + 1);
    }, "walk");
    i(e, 0), navigator.clipboard.writeText(s.join(`
`)).then(
      () => new g(t("\u5DF2\u590D\u5236\u5B50\u6811\uFF08") + s.length + t(" \u4E2A\u8282\u70B9\uFF09")),
      () => new g(t("\u590D\u5236\u5931\u8D25"))
    );
  }
  _renameNode(e) {
    if (!e || !e.note.file) {
      new g(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    new Nt(this.app, e.note.file.basename, async (s) => {
      try {
        let i = e.note.file.basename, n = e.note.file.parent ? e.note.file.parent.path : "", a = ee((n ? n + "/" : "") + fe(s) + ".md");
        if (a === e.note.file.path) return;
        if (this.app.vault.getAbstractFileByPath(a)) {
          new g(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + fe(s));
          return;
        }
        await this.app.vault.rename(e.note.file, a);
        let o = fe(s), l = this.s.linkField || "children", r = this.s.backField || "parent";
        for (let h of this.notes.values())
          h.file.path !== a && await this.app.fileManager.processFrontMatter(h.file, (d) => {
            let p = Ne(d[l]), u = !1, y = p.map((v) => we(v) === i ? (u = !0, "[[" + o + "]]") : v);
            u && (d[l] = y), d[r] != null && we(d[r]) === i && (d[r] = o);
          });
        let c = this.s.titleField || "title";
        await this.app.fileManager.processFrontMatter(e.note.file, (h) => {
          h[c] != null && (h[c] = o);
        }), new g(t("\u5DF2\u91CD\u547D\u540D\u4E3A ") + o), await this.rebuild(!0);
      } catch (i) {
        new g(t("\u91CD\u547D\u540D\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _renameNode:", i);
      }
    }).open();
  }
  _subtreePaths(e) {
    let s = /* @__PURE__ */ new Set();
    return (/* @__PURE__ */ b((function i(n) {
      n.note.file && s.add(n.note.file.path), n.children.forEach(i);
    }), "walk"))(e), s;
  }
  _deleteNode(e) {
    if (!e || !e.note.file) {
      new g(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (e.isAlias) {
      if (!e.parent || !e.parent.note.file) {
        new g(t("\u65E0\u6CD5\u786E\u5B9A\u8BE5\u6302\u70B9\u7684\u7236\u8282\u70B9"));
        return;
      }
      new Re(
        this.app,
        t("\u79FB\u9664\u5173\u8054"),
        "\u300C" + q(e.note.title, 16) + t(`\u300D\u662F\u91CD\u590D\u8282\u70B9\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\uFF09\u3002
\u672C\u6B21\u53EA\u79FB\u9664\u4ECE\u300C`) + q(e.parent.note.title, 16) + t("\u300D\u5230\u5B83\u7684\u5173\u8054\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\u3002"),
        async () => {
          try {
            await me(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), this._selKey = null, new g(t("\u5DF2\u79FB\u9664\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (n) {
            new g(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n)), console.error("[link-mindmap] removeLink:", n);
          }
        }
      ).open();
      return;
    }
    let s = e.children.length, i = new ke(this.app);
    i.onOpen = () => {
      let { contentEl: n } = i;
      n.createEl("h3", { text: t("\u5220\u9664\u8282\u70B9") }), n.createEl("p", { text: "\u300C" + q(e.note.title, 20) + "\u300D" + (s ? t("\uFF08\u542B ") + s + t(" \u4E2A\u5B50\u8282\u70B9\uFF09") : ""), cls: "lkm-modal-sub" });
      let a = n.createDiv("lkm-confirm-row");
      a.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => i.close());
      let l = a.createEl("button", { cls: "lkm-btn", text: t("\u79FB\u9664\u5F53\u524D\u5173\u8054") });
      l.title = e.parent && e.parent.note.file ? t("\u53EA\u79FB\u9664\u5F53\u524D\u7236\u8282\u70B9\u5230\u5B83\u7684\u94FE\u63A5\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559") : t("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"), (!e.parent || !e.parent.note.file) && (l.disabled = !0), l.addEventListener("click", () => {
        if (!e.parent || !e.parent.note.file) {
          new g(t("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"));
          return;
        }
        i.close(), (async () => {
          try {
            await me(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), this._selKey = null, new g(t("\u5DF2\u79FB\u9664\u4ECE\u300C") + q(e.parent.note.title, 14) + t("\u300D\u5230\u300C") + q(e.note.title, 14) + t("\u300D\u7684\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (h) {
            new g(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] removeLink:", h);
          }
        })();
      });
      let r = a.createEl("button", { cls: "lkm-btn", text: t("\u79FB\u9664\u6240\u6709\u5173\u8054") });
      r.title = t("\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559"), r.addEventListener("click", () => {
        i.close(), (async () => {
          try {
            let h = e.note.file.path;
            for (let d of this.notes.values())
              d.file.path !== h && d.childLinks.length && await me(this.app, d.file, this.s.linkField, h);
            this._selKey = null, new g(t("\u5DF2\u79FB\u9664\u6240\u6709\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (h) {
            new g(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] removeLink:", h);
          }
        })();
      });
      let c = a.createEl("button", { cls: "lkm2-btn-danger", text: t("\u5220\u9664\u6587\u4EF6") });
      c.title = t("\u79FB\u5165\u56DE\u6536\u7AD9\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664"), c.addEventListener("click", () => {
        if (!s) {
          i.close(), this._doDelete(e);
          return;
        }
        let h = new ke(this.app);
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
      for (let a of this.notes.values())
        if (!i.has(a.file.path))
          for (let o of i)
            a.childLinks.length && await me(this.app, a.file, this.s.linkField, o);
      for (let a of i) {
        let o = this.app.vault.getAbstractFileByPath(a);
        o && o.path && await this.app.vault.trash(o, !0);
      }
      this._selKey = null;
      let n = i.size;
      new g(t("\u5DF2\u5220\u9664\u300C") + q(e.note.title, 16) + "\u300D" + (n > 1 ? t("\uFF08\u542B\u5B50\u8282\u70B9\u5171 ") + n + t(" \u4E2A\u6587\u4EF6\uFF09") : "") + t("\uFF08\u53EF\u5728\u56DE\u6536\u7AD9\u6062\u590D\uFF09")), await this.rebuild(!0);
    } catch (i) {
      new g(t("\u5220\u9664\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _deleteNode:", i);
    }
  }
  _showNodeMenu(e, s) {
    if (!e || !e.note.file) return;
    let i = new Le();
    i.addItem((a) => a.setTitle(t("\u6253\u5F00\u7B14\u8BB0")).setIcon("file-text").onClick(() => {
      this.app.workspace.getLeaf(!0).openFile(e.note.file);
    })), i.addItem((a) => a.setTitle(t("\u65B0\u589E\u5B50\u8282\u70B9")).setIcon("plus").onClick(() => this.createChild(e))), i.addItem((a) => a.setTitle(t("\u805A\u7126\u5230\u6B64\u8282\u70B9")).setIcon("focus").onClick(() => this._focus(e.key)));
    let n = this._parentPathsOf(e.note.file.path);
    if (i.addItem((a) => a.setTitle(t("\u8DF3\u5230\u4E0A\u7EA7")).setIcon("arrow-up").onClick(() => this._up())), n.length > 1)
      for (let a of n) {
        let o = this.notes.get(a);
        i.addItem((l) => l.setTitle("  \u21B3 " + q(o ? o.title : a, 20)).setIcon("arrow-up").onClick(() => {
          this._focusPath(a);
          let r = [...this._nodeIndex.values()].find((c) => c.note.file && c.note.file.path === e.note.file.path);
          r && (this._selKey = r.key, this.render());
        }));
      }
    i.addSeparator(), i.addItem((a) => a.setTitle(e.note.status ? t("\u53D6\u6D88\u5B8C\u6210") : t("\u6807\u8BB0\u5B8C\u6210")).setIcon(e.note.status ? "circle" : "check-circle").onClick(() => this._setStatus(e, !e.note.status))), i.addItem((a) => a.setTitle(e.note.zk ? t("\u53D6\u6D88\u4E3B\u7B14\u8BB0") : t("\u6807\u8BB0\u4E3B\u7B14\u8BB0")).setIcon("star").onClick(() => this._toggleZk(e))), i.addItem((a) => a.setTitle(t("\u4FEE\u6539\u7C7B\u578B")).setIcon("tag").onClick(() => this._setTypeDialog(e))), i.addItem((a) => a.setTitle(t("\u4FEE\u6539\u65E5\u671F")).setIcon("calendar").onClick(() => this._setDateDialog(e))), e.children.length && i.addItem((a) => a.setTitle(e.expanded ? t("\u6298\u53E0\u5B50\u8282\u70B9") : t("\u5C55\u5F00\u5B50\u8282\u70B9")).setIcon(e.expanded ? "chevron-down" : "chevron-right").onClick(() => {
      e.expanded = !e.expanded, this._expandedMem.set(e.note.file ? e.note.file.path : e.key, e.expanded), this.render();
    })), i.addSeparator(), i.addItem((a) => a.setTitle(t("\u91CD\u547D\u540D")).setIcon("pencil").onClick(() => this._renameNode(e))), i.addItem((a) => a.setTitle(t("\u590D\u5236\u94FE\u63A5")).setIcon("copy").onClick(() => this._copyLink(e))), i.addItem((a) => a.setTitle(t("\u590D\u5236\u5B50\u6811\u5927\u7EB2")).setIcon("list").onClick(() => this._copySubtree(e))), i.addItem((a) => a.setTitle(t("\u79FB\u52A8\u5230\u7236\u5361")).setIcon("corner-up-right").onClick(() => this._moveNodeDialog(e))), i.addItem((a) => a.setTitle(t("\u540C\u7EA7\u4E4B\u524D")).setIcon("arrow-up").onClick(() => this._moveSiblingDialog(e, !1))), i.addItem((a) => a.setTitle(t("\u540C\u7EA7\u4E4B\u540E")).setIcon("arrow-down").onClick(() => this._moveSiblingDialog(e, !0))), i.addSeparator(), i.addItem((a) => a.setTitle(e.isAlias ? t("\u79FB\u9664\u5173\u8054\uFF08\u4FDD\u7559\u6587\u4EF6\uFF09") : t("\u5220\u9664\u8282\u70B9")).setIcon("trash").onClick(() => this._deleteNode(e))), s && typeof s.preventDefault == "function" ? i.showAtMouseEvent(s) : s && s.clientX !== void 0 && i.showAtPosition({ x: s.clientX, y: s.clientY });
  }
  _isDescendant(e, s) {
    return this._subtreePaths(e).has(s);
  }
  _moveNodeDialog(e) {
    if (!e || !e.note.file) return;
    let s = this._subtreePaths(e), i = [...this.notes.values()].filter((n) => n.file.path !== e.note.file.path && !s.has(n.file.path)).sort((n, a) => n.title.localeCompare(a.title, "zh")).map((n) => ({ label: n.title, path: n.file.path }));
    if (!i.length) {
      new g(t("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new Ue(this.app, i, (n) => this._moveNode(e, n.path)).open();
  }
  async _moveNode(e, s) {
    let i = e.note;
    if (!i.file) return;
    if (this._subtreePaths(e).has(s)) {
      new g(t("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let n = this.notes.get(s);
    if (!n) {
      new g(t("\u76EE\u6807\u7236\u7B14\u8BB0\u4E0D\u5B58\u5728"));
      return;
    }
    try {
      e.parent && e.parent.note.file && await me(this.app, e.parent.note.file, this.s.linkField, i.file.path), await ze(this.app, n.file, this.s.linkField, i.file.basename), new g(t("\u5DF2\u79FB\u52A8\u300C") + q(i.title, 14) + t("\u300D\u5230\u300C") + q(n.title, 14) + "\u300D"), await new Promise((a) => setTimeout(a, 300)), await this.rebuild(!0);
    } catch (a) {
      new g(t("\u79FB\u52A8\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
    }
  }
  _moveSiblingDialog(e, s) {
    if (!e || !e.parent || !e.parent.note.file) {
      new g(t("\u6839\u8282\u70B9\u6CA1\u6709\u540C\u7EA7\u8282\u70B9"));
      return;
    }
    let i = e.parent.children.filter((a) => a !== e);
    if (!i.length) {
      new g(t("\u6CA1\u6709\u540C\u7EA7\u8282\u70B9\u53EF\u63D2\u5165"));
      return;
    }
    let n = i.map((a) => ({ label: a.note.title, path: a.note.file.path }));
    new Ue(this.app, n, (a) => this._reorderSiblings(e, a.path, s)).open();
  }
  async _reorderSiblings(e, s, i) {
    if (!e.parent || !e.parent.note.file) {
      new g(t("\u65E0\u6CD5\u6392\u5E8F\uFF1A\u591A\u9009\u6839\u8282\u70B9\u95F4\u4E0D\u80FD\u8C03\u6574\u987A\u5E8F"));
      return;
    }
    let n = e.parent.note.file;
    try {
      await this.app.fileManager.processFrontMatter(n, (a) => {
        let o = this.s.linkField, l = Ne(a[o]), r = /* @__PURE__ */ b((p) => l.findIndex((u) => {
          let y = this.app.metadataCache.getFirstLinkpathDest(we(u), n.path);
          return y && y.path === p;
        }), "idxOf"), c = r(e.note.file.path);
        if (c < 0) return;
        let h = l.splice(c, 1)[0], d = r(s);
        if (d < 0) {
          l.splice(c, 0, h);
          return;
        }
        l.splice(i ? d + 1 : d, 0, h), a[o] = l;
      }), await new Promise((a) => setTimeout(a, 300)), await this.rebuild(!0);
    } catch (a) {
      new g(t("\u540C\u7EA7\u79FB\u52A8\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
    }
  }
  async _moveAndReorder(e, s, i) {
    if (!s.parent || !s.parent.note.file) {
      new g(t("\u65E0\u6CD5\u79FB\u52A8\u5230\u8BE5\u4F4D\u7F6E"));
      return;
    }
    if (this._subtreePaths(e).has(s.parent.note.file.path)) {
      new g(t("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let n = s.parent.note.file;
    try {
      if (e.parent && e.parent.note.file && await me(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), await this.app.fileManager.processFrontMatter(n, (a) => {
        let o = this.s.linkField, l = Ne(a[o]);
        l.some((u) => we(u) === e.note.file.basename) || l.push("[[" + e.note.file.basename + "]]");
        let c = /* @__PURE__ */ b((u) => l.findIndex((y) => {
          let v = this.app.metadataCache.getFirstLinkpathDest(we(y), n.path);
          return v && v.path === u;
        }), "idxOf"), h = c(e.note.file.path);
        if (h < 0) return;
        let d = l.splice(h, 1)[0], p = c(s.note.file.path);
        if (p < 0) {
          l.splice(h, 0, d);
          return;
        }
        l.splice(i ? p + 1 : p, 0, d), a[o] = l;
      }), this.s.autoAddBackLink) {
        let a = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(e.note.file, (o) => {
          o[a] = n.basename;
        });
      }
      new g(t("\u5DF2\u79FB\u52A8\u300C") + q(e.note.title, 14) + t("\u300D\u5230\u300C") + q(s.parent.note.title, 14) + "\u300D" + t(i ? "\u4E4B\u540E" : "\u4E4B\u524D")), await new Promise((a) => setTimeout(a, 300)), await this.rebuild(!0);
    } catch (a) {
      new g(t("\u79FB\u52A8\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
    }
  }
  _wouldCycle(e, s) {
    if (e === s) return !0;
    let i = [s], n = /* @__PURE__ */ new Set(), a = 0;
    for (; i.length && a++ < 5e3; ) {
      let o = i.pop();
      if (o === e) return !0;
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
  async _addRelation(e, s) {
    let i = e && e.note;
    if (!i || !i.file) {
      new g(t("\u6E90\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (!s || !s.file) {
      new g(t("\u76EE\u6807\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (i.file.path === s.file.path) {
      new g(t("\u4E0D\u80FD\u5173\u8054\u5230\u81EA\u5DF1"));
      return;
    }
    if (Qe(this.app, this.notes, i, "child").some((n) => n.file.path === s.file.path)) {
      new g("\u300C" + q(i.title, 12) + t("\u300D\u5DF2\u5173\u8054\u5230\u300C") + q(s.title, 12) + t("\u300D\uFF0C\u65E0\u9700\u91CD\u590D"));
      return;
    }
    if (this._wouldCycle(i.file.path, s.file.path)) {
      new g(t("\u4E0D\u80FD\u5EFA\u7ACB\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF\uFF08\u76EE\u6807\u5DF2\u662F\u300C") + q(i.title, 12) + t("\u300D\u7684\u4E0A\u7EA7\uFF09"));
      return;
    }
    try {
      if (await ze(this.app, i.file, this.s.linkField, s.file.basename), this.s.autoAddBackLink) {
        let n = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(s.file, (a) => {
          a[n] = i.file.basename;
        });
      }
      new g(t("\u5DF2\u5EFA\u7ACB\u5173\u8054\uFF1A") + q(i.title, 12) + " \u2192 " + q(s.title, 12)), await new Promise((n) => setTimeout(n, 300)), await this.rebuild(!0);
    } catch (n) {
      new g(t("\u5EFA\u7ACB\u5173\u8054\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
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
      new g(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = e.map((a) => this._nodeIndex.get(a)).filter(Boolean), i = /* @__PURE__ */ new Set();
    s.forEach((a) => this._subtreePaths(a).forEach((o) => i.add(o)));
    let n = [...this.notes.values()].filter((a) => !i.has(a.file.path)).sort((a, o) => a.title.localeCompare(o.title, "zh")).map((a) => ({ label: a.title, path: a.file.path }));
    if (!n.length) {
      new g(t("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new Ue(this.app, n, async (a) => {
      let o = this.notes.get(a.path), l = 0;
      for (let r of s)
        if (r.note.file)
          try {
            r.parent && r.parent.note.file && await me(this.app, r.parent.note.file, this.s.linkField, r.note.file.path), await ze(this.app, o.file, this.s.linkField, r.note.file.basename), l++;
          } catch {
          }
      new g(t("\u6279\u91CF\u79FB\u52A8\u5B8C\u6210\uFF1A") + l + t(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchDelete() {
    let e = [...this._selected];
    if (!e.length) {
      new g(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = e.map((l) => this._nodeIndex.get(l)).filter((l) => l && l.note.file), i = s.filter((l) => !l.isAlias), n = new Set(i.map((l) => l.note.file.path)), a = s.filter((l) => l.isAlias && !n.has(l.note.file.path)), o = "";
    if (i.length && (o += t("\u5C06\u628A ") + i.length + t(" \u7BC7\u7B14\u8BB0\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u7684\u94FE\u63A5\u91CC\u79FB\u9664\u3002")), a.length && (o += (o ? " " : "") + t("\u53E6\u5C06\u79FB\u9664 ") + a.length + t(" \u4E2A\u989D\u5916\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09\u3002")), !o) {
      new g(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    new Re(this.app, t("\u6279\u91CF\u5220\u9664"), o, async () => {
      let l = 0;
      for (let r of a)
        try {
          r.parent && r.parent.note.file && (await me(this.app, r.parent.note.file, this.s.linkField, r.note.file.path), l++);
        } catch {
        }
      for (let r of i)
        try {
          let c = r.note.file;
          for (let h of this.notes.values())
            h.file.path !== c.path && h.childLinks.length && await me(this.app, h.file, this.s.linkField, c.path);
          await this.app.vault.trash(c, !0), l++;
        } catch {
        }
      new g(t("\u5DF2\u5904\u7406 ") + l + t(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchSetType() {
    if (![...this._selected].length) {
      new g(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let s = this.s.typeColors || {}, i = Object.keys(s), n = [{ label: t("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let a of i) n.push({ label: a, path: a });
    new Pe(this.app, n, (a) => this._batchSetTypeDo(a.path), t("\u6279\u91CF\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _batchSetTypeDo(e) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new g(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let n = this.s.typeField || "type", a = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (l) => {
          e ? l[n] = e : delete l[n];
        }), a++;
      } catch (l) {
        console.error("[link-mindmap] _batchSetTypeDo:", l);
      }
    new g(t("\u5DF2\u4FEE\u6539 ") + a + t(" \u4E2A\u8282\u70B9\u7C7B\u578B\u4E3A\u300C") + (e || t("\u65E0\u7C7B\u578B")) + "\u300D"), await this.rebuild(!0);
  }
  async _batchSetStatus(e) {
    let s = [...this._selected];
    if (!s.length) {
      new g(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let i = s.map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new g(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let n = this.s.statusField || "status", a = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (l) => {
          l[n] = e;
        }), a++;
      } catch (l) {
        console.error("[link-mindmap] _batchSetStatus:", l);
      }
    new g(t("\u5DF2") + t(e ? "\u6807\u8BB0\u5B8C\u6210" : "\u53D6\u6D88\u5B8C\u6210") + " " + a + t(" \u4E2A\u8282\u70B9")), await this.rebuild(!0);
  }
  async _batchSetMain(e) {
    let s = [...this._selected];
    if (!s.length) {
      new g(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let i = s.map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new g(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let n = this.s.zkField || "main", a = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (l) => {
          l[n] = e;
        }), a++;
      } catch (l) {
        console.error("[link-mindmap] _batchSetMain:", l);
      }
    new g(t("\u5DF2") + t(e ? "\u6807\u8BB0\u4E3B\u7B14\u8BB0" : "\u53D6\u6D88\u4E3B\u7B14\u8BB0") + " " + a + t(" \u4E2A\u8282\u70B9")), await this.rebuild(!0);
  }
  async _setStatus(e, s) {
    if (e.note.file)
      try {
        await this.app.fileManager.processFrontMatter(e.note.file, (i) => {
          i[this.s.statusField || "status"] = s;
        }), new g(t(s ? "\u5DF2\u6807\u8BB0\u5B8C\u6210\uFF1A" : "\u5DF2\u53D6\u6D88\u6807\u8BB0\uFF1A") + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new g(t("\u6807\u8BB0\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
      }
  }
  async _toggleZk(e) {
    if (e.note.file)
      try {
        let s = !1;
        await this.app.fileManager.processFrontMatter(e.note.file, (i) => {
          let n = this.s.zkField || "main";
          s = !(i[n] === !0 || String(i[n]) === "true"), i[n] = s;
        }), new g(t(s ? "\u5DF2\u6807\u8BB0\u4E3B\u7B14\u8BB0\uFF1A" : "\u5DF2\u53D6\u6D88\u4E3B\u7B14\u8BB0\uFF1A") + e.note.title), await this.rebuild(!0);
      } catch (s) {
        new g(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
      }
  }
  _setTypeDialog(e) {
    if (!e || !e.note.file) return;
    let s = this.s.typeColors || {}, i = Object.keys(s), n = [{ label: t("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let a of i) n.push({ label: a + (e.note.type === a ? " \u2713" : ""), path: a });
    new Pe(this.app, n, (a) => this._setType(e, a.path), t("\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _setType(e, s) {
    if (e.note.file)
      try {
        let i = this.s.typeField || "type";
        await this.app.fileManager.processFrontMatter(e.note.file, (n) => {
          s ? n[i] = s : delete n[i];
        }), new g(t("\u5DF2\u4FEE\u6539\u7C7B\u578B\uFF1A") + (s || t("\u65E0\u7C7B\u578B")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new g(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setType:", i);
      }
  }
  _setDateDialog(e) {
    if (!e || !e.note.file) return;
    let s = new ke(this.app);
    s.onOpen = () => {
      let { contentEl: i } = s;
      i.addClass("lkm-multipick"), i.createEl("h3", { text: t("\u4FEE\u6539\u65E5\u671F") }), i.createEl("p", { text: "\u300C" + q(e.note.title, 20) + t("\u300D\u5F53\u524D\u65E5\u671F\uFF1A") + (e.note.date || t("\u65E0")), cls: "lkm-modal-sub" });
      let n = i.createEl("input", { type: "date", cls: "lkm-multipick-input" });
      n.value = e.note.date || "";
      let a = i.createDiv("lkm-multipick-btns");
      new R(a).addButton((o) => o.setButtonText(t("\u786E\u5B9A")).setCta().onClick(() => {
        let l = n.value || "";
        s.close(), this._setDate(e, l);
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
        }), new g(t("\u5DF2\u4FEE\u6539\u65E5\u671F\uFF1A") + (s || t("\u65E0")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new g(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setDate:", i);
      }
  }
  openRootPicker() {
    let e = [...this.notes.values()].filter((i) => i.zk).sort((i, n) => i.title.localeCompare(n.title, "zh")), s = e.length ? e : [...this.notes.values()].filter((i) => !this.referenced.has(i.file.path));
    if (!s.length) {
      new g(t("\u6CA1\u6709\u4E3B\u7B14\u8BB0\uFF08main: true\uFF09"));
      return;
    }
    new Pe(
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
      new g(t("\u6CA1\u6709\u53EF\u641C\u7D22\u7684\u7B14\u8BB0"));
      return;
    }
    new Pe(
      this.app,
      e.map((s) => ({ label: s.title, path: s.file.path })),
      (s) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = s.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      t("\u641C\u7D22\u7B14\u8BB0\u2026")
    ).open();
  }
  openMultiPick() {
    let e = [...this.notes.values()].sort((a, o) => (o.file.stat.ctime || 0) - (a.file.stat.ctime || 0));
    if (!e.length) {
      new g(t("\u6CA1\u6709\u53EF\u9009\u7684\u7B14\u8BB0"));
      return;
    }
    let s = [];
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length)
      s = this.currentRoot.children.map((a) => a.note.file ? a.note.file.path : null).filter(Boolean);
    else if (this._selKey) {
      let a = this._nodeIndex.get(this._selKey);
      a && a.note.file && s.push(a.note.file.path);
    }
    let i = Object.keys(this.s.typeColors || {}), n = e.map((a) => ({
      label: a.title,
      path: a.file.path,
      isMain: a.zk,
      type: a.type || "",
      status: a.status,
      orphan: !a.childLinks.length && !this.referenced.has(a.file.path)
    }));
    new It(
      this.app,
      n,
      (a) => this._showMultiRoot(a),
      s,
      i
    ).open();
  }
  _buildMultiRootTree(e, s) {
    let i = /* @__PURE__ */ new Set(), n = e.filter((d) => i.has(d.file.path) ? !1 : (i.add(d.file.path), !0)), a = n.map((d) => Ve(this.app, this.notes, d)), o = a.map((d) => {
      let p = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ b(function u(y) {
        y.note.file && p.add(y.note.file.path), y.children.forEach(u);
      }, "collect"))(d), p;
    }), l = n.map((d) => d.file.path), r = [], c = [];
    for (let d = 0; d < a.length; d++) {
      let p = !1;
      for (let u = 0; u < a.length; u++)
        if (d !== u && o[u].has(l[d])) {
          p = !0;
          break;
        }
      p || (r.push(a[d]), c.push(l[d]));
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
    return { virtualRoot: h, rootPaths: c, allSelectedPaths: l };
  }
  _showMultiRoot(e) {
    let s = e.map((o) => this.notes.get(o)).filter(Boolean);
    if (!s.length) {
      new g(t("\u6CA1\u6709\u6709\u6548\u7684\u7B14\u8BB0"));
      return;
    }
    let { virtualRoot: i, rootPaths: n, allSelectedPaths: a } = this._buildMultiRootTree(s, t("\u591A\u9009\u5BFC\u56FE\uFF08") + s.length + t(" \u7BC7\uFF09"));
    this._multiRootPaths = a, this._selectedRootPaths = /* @__PURE__ */ new Set(a), this._kwFile = null, this._multiRoot = !0, this.rootPath = null, this.currentRoot = i, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render({ fit: !0 });
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
    for (let [p, u, y] of n) {
      let v = i.createDiv("lkm-guide-step");
      v.createEl("span", { cls: "lkm-step-num", text: p });
      let F = v.createDiv("lkm-step-body");
      F.createEl("span", { cls: "lkm-step-title", text: u }), F.createEl("span", { cls: "lkm-step-desc", text: y });
    }
    let a = s.createDiv("lkm-guide-btns"), o = a.createEl("button", { cls: "lkm-btn lkm-btn-action", text: t("\u521B\u5EFA\u7B14\u8BB0") });
    o.onclick = () => this.createStandaloneNote();
    let l = a.createEl("button", { cls: "lkm-btn", text: t("\u521B\u5EFA\u9ED8\u8BA4\u6A21\u677F") });
    l.onclick = () => this._createDefaultTemplate();
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
    for (let [p, u] of c) {
      let y = r.createDiv("lkm-guide-row");
      y.createEl("span", { cls: "lkm-guide-key", text: p }), y.createEl("span", { cls: "lkm-guide-val", text: u });
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
    for (let [p, u] of d) {
      let y = h.createDiv("lkm-guide-row");
      y.createEl("span", { cls: "lkm-guide-key", text: p }), y.createEl("span", { cls: "lkm-guide-val", text: u });
    }
  }
  async _createDefaultTemplate() {
    let e = this.s, s = (e.templateFolder || "").trim();
    if (s || (s = t("99-\u6A21\u677F"), e.templateFolder = s), !this.app.vault.getAbstractFileByPath(ee(s)))
      try {
        await this.app.vault.createFolder(ee(s));
      } catch (a) {
        new g(t("\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u5939\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
        return;
      }
    let n = ee(s + t("/\u65B0\u8282\u70B9\u6A21\u677F.md"));
    if (this.app.vault.getAbstractFileByPath(n))
      new g(t("\u6A21\u677F\u5DF2\u5B58\u5728\uFF1A") + n);
    else {
      let a = e.linkField || "children", o = e.zkField || "main", l = e.statusField || "status", r = e.typeField || "type", c = e.dateField || "date", h = `---
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
        new g(t("\u521B\u5EFA\u6A21\u677F\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
        return;
      }
    }
    e.templatePath = n, await this.plugin.saveSettings(), new g(t("\u5DF2\u521B\u5EFA\u6A21\u677F\u5E76\u8BBE\u4E3A\u9ED8\u8BA4\uFF1A") + n), this.render();
  }
  async _createFirstNote(e) {
    let s = this.s, i = fe(e) + ".md", n = ee(s.mainFolder), a = ee(n + "/" + i);
    if (this.app.vault.getAbstractFileByPath(a)) {
      new g(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + i);
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
      await this.app.vault.create(a, p), new g(t("\u5DF2\u521B\u5EFA\u4E3B\u7B14\u8BB0\u300C") + e + "\u300D"), await this.rebuild(!0);
    } catch (u) {
      new g(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (u && u.message ? u.message : u));
    }
  }
  async openKeywordPicker() {
    let e = this.app.vault.getAbstractFileByPath(ee(this.s.indexFolder)), s = (e && e.children ? e.children : []).filter((i) => i instanceof Se && i.extension === "md");
    if (!s.length) {
      new g("\u300C" + this.s.indexFolder + t("\u300D\u91CC\u6CA1\u6709\u7D22\u5F15\u6587\u4EF6"));
      return;
    }
    new Pe(
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
    let a = [...(await this.app.vault.read(e)).matchAll(/\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g)].map((d) => d[1].trim()), o = [], l = /* @__PURE__ */ new Set();
    for (let d of a) {
      let p = this.app.metadataCache.getFirstLinkpathDest(d, e.path);
      if (!p) continue;
      let u = this.notes.get(p.path);
      !u || l.has(u.file.path) || (l.add(u.file.path), o.push(u));
    }
    if (!o.length) {
      new g(t("\u8BE5\u7D22\u5F15\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u7B14\u8BB0\u94FE\u63A5")), this._kwFile = null, this.render();
      return;
    }
    let { virtualRoot: r, allSelectedPaths: c } = this._buildMultiRootTree(o, e.basename);
    this._selectedRootPaths = /* @__PURE__ */ new Set(c), this._multiRootPaths = c, this.currentRoot = r, this._indexTree(r), He(r, this.depth), this._ensureSelectedVisible(r), this._restoreExpanded(), this._view = null;
    let h = this.contentEl.querySelector(".lkm-canvas");
    h && this._draw(h, Ae(r, this.s), Object.assign({ fit: !0 }, s || {}));
  }
  _draw(e, s, i) {
    i = i || {}, e.empty();
    let n = this.s, { nodes: a, edges: o } = s;
    if (!a.length) return;
    let l = 1 / 0, r = 1 / 0, c = -1 / 0, h = -1 / 0, d = n.layoutDir === "v";
    for (let f of a)
      l = Math.min(l, f._x), r = Math.min(r, f._y - n.nodeHeight / 2), c = Math.max(c, f._x + f._w), h = Math.max(h, f._y + n.nodeHeight / 2 + (d ? 28 : 0));
    let p = 40, u = c - l + p * 2, y = h - r + p * 2, v = z("svg", { class: "lkm-svg" }), F = z("defs"), T = z("marker", { id: "lkm-arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" });
    T.appendChild(z("path", { d: "M0,0 L10,5 L0,10 z", class: "lkm-arrow-fill" })), F.appendChild(T), v.appendChild(F);
    let E = z("g", { class: "lkm-viewport" });
    v.appendChild(E), e.appendChild(v);
    for (let [f, V] of o) {
      let D, I, Z, X, re, A;
      if (n.layoutDir === "v") {
        D = f._x + f._w / 2, I = f._y + n.nodeHeight / 2, Z = V._x + V._w / 2, X = V._y - n.nodeHeight / 2, A = (I + X) / 2;
        let he = n.curve ? `M${D},${I} C${D},${A} ${Z},${A} ${Z},${X}` : `M${D},${I} L${Z},${X}`;
        E.appendChild(z("path", { d: he, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      } else {
        D = f._x + f._w, I = f._y, Z = V._x, X = V._y, re = (D + Z) / 2;
        let he = n.curve ? `M${D},${I} C${re},${I} ${re},${X} ${Z},${X}` : `M${D},${I} L${Z},${X}`;
        E.appendChild(z("path", { d: he, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
      }
    }
    let P = /* @__PURE__ */ b((f) => this._draw(e, Ae(this.currentRoot, n), { anchorKey: f }), "redraw"), k = null, L = { before: t("\u2191 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u524D"), after: t("\u2193 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u540E"), child: t("\u2192 \u4F5C\u4E3A\u5B50\u8282\u70B9") }, m = /* @__PURE__ */ b((f, V) => {
      if (!V.note.file) return;
      this._hidePreview(), k = { node: V, sx: f.clientX, sy: f.clientY, moved: !1, target: null, zone: "child" };
      let D = document.createElement("div");
      D.className = "lkm-drag-hint", D.style.display = "none", document.body.appendChild(D);
      let I = /* @__PURE__ */ b((A) => {
        if (!k) return;
        let he = A.clientX - k.sx, Te = A.clientY - k.sy;
        if (!k.moved && Math.hypot(he, Te) < 6) return;
        k.moved = !0, v.classList.add("lkm-dragging");
        let Fe = e.getBoundingClientRect(), be = (A.clientX - Fe.left - S) / C, le = (A.clientY - Fe.top - w) / C, te = n.nodeHeight, se = null, de = "child";
        for (let G of a)
          if (!(G.key === V.key || !G.note.file) && be >= G._x && be <= G._x + G._w && le >= G._y - te / 2 && le <= G._y + te / 2) {
            if (se = G, n.layoutDir === "v") {
              let ve = (be - G._x) / G._w;
              de = ve < 0.3 ? "before" : ve > 0.7 ? "after" : "child";
            } else {
              let ve = (le - (G._y - te / 2)) / te;
              de = ve < 0.3 ? "before" : ve > 0.7 ? "after" : "child";
            }
            break;
          }
        (se !== k.target || de !== k.zone) && (k.target && k.target._el && k.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), k.target = se, k.zone = de, se && se._el && (se._el.classList.add("lkm-drop-target"), de === "before" && se._el.classList.add("lkm-drop-before"), de === "after" && se._el.classList.add("lkm-drop-after"))), D.style.display = se ? "block" : "none", se && (D.textContent = L[de], D.style.left = A.clientX + 16 + "px", D.style.top = A.clientY + 16 + "px");
      }, "onMove"), Z = /* @__PURE__ */ b(() => {
        window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", Z), window.removeEventListener("touchmove", X), window.removeEventListener("touchend", re), v.classList.remove("lkm-dragging"), D.remove();
        let A = k;
        k = null, A && (A.target && A.target._el && A.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), A.moved && A.target && (A.zone === "child" ? this._moveNode(A.node, A.target.note.file.path) : A.node.parent && A.target.parent && A.node.parent.note.file && A.target.parent.note.file && A.node.parent.note.file.path === A.target.parent.note.file.path ? this._reorderSiblings(A.node, A.target.note.file.path, A.zone === "after") : this._moveAndReorder(A.node, A.target, A.zone === "after")));
      }, "onUp"), X = /* @__PURE__ */ b((A) => {
        A.touches.length && I({ clientX: A.touches[0].clientX, clientY: A.touches[0].clientY });
      }, "onTouchMove2"), re = /* @__PURE__ */ b(() => Z(), "onTouchEnd2");
      window.addEventListener("mousemove", I), window.addEventListener("mouseup", Z), window.addEventListener("touchmove", X, { passive: !1 }), window.addEventListener("touchend", re);
    }, "startNodeDrag"), M = /* @__PURE__ */ b((f, V) => {
      if (!V.note.file) return;
      f.preventDefault(), f.stopPropagation(), _ = !0;
      let D = z("path", { class: "lkm-wire" });
      E.appendChild(D);
      let I = n.layoutDir === "v" ? V._x + V._w / 2 : V._x + V._w, Z = n.layoutDir === "v" ? V._y + n.nodeHeight / 2 : V._y, X = null, re = /* @__PURE__ */ b((le, te) => {
        let se = e.getBoundingClientRect();
        return { x: (le - se.left - S) / C, y: (te - se.top - w) / C };
      }, "local"), A = /* @__PURE__ */ b((le, te) => {
        let se = (I + le) / 2;
        D.setAttribute("d", `M${I},${Z} C${se},${Z} ${se},${te} ${le},${te}`);
      }, "setWire");
      A(I, Z);
      let he = /* @__PURE__ */ b((le) => {
        let te = re(le.clientX, le.clientY);
        A(te.x, te.y);
        let se = n.nodeHeight, de = null;
        for (let G of a)
          if (!(!G.note.file || G.key === V.key) && te.x >= G._x && te.x <= G._x + G._w && te.y >= G._y - se / 2 && te.y <= G._y + se / 2) {
            de = G;
            break;
          }
        de !== X && (X && X._el && X._el.classList.remove("lkm-wire-target"), X = de, X && X._el && X._el.classList.add("lkm-wire-target"));
      }, "onMove"), Te = /* @__PURE__ */ b(async () => {
        _ = !1, window.removeEventListener("mousemove", he), window.removeEventListener("mouseup", Te), window.removeEventListener("touchmove", Fe), window.removeEventListener("touchend", be), D.remove(), X && X._el && X._el.classList.remove("lkm-wire-target"), X && await this._addRelation(V, X.note);
      }, "onUp"), Fe = /* @__PURE__ */ b((le) => {
        le.preventDefault();
        let te = le.touches[0];
        he({ clientX: te.clientX, clientY: te.clientY });
      }, "onTouchMove"), be = /* @__PURE__ */ b(() => Te(), "onTouchEnd");
      window.addEventListener("mousemove", he), window.addEventListener("mouseup", Te), window.addEventListener("touchmove", Fe, { passive: !1 }), window.addEventListener("touchend", be);
    }, "startWire");
    for (let f of a) {
      let V = !f.note.file, D = null, I = z("g", {
        class: "lkm-node" + (f.note.zk ? " lkm-main" : "") + (f.isAlias ? " lkm-multi" : "") + (f.note.status ? " lkm-done" : ""),
        transform: `translate(${f._x},${f._y - n.nodeHeight / 2})`
      }), Z = z("rect", { width: f._w, height: n.nodeHeight, rx: 12, ry: 12, class: "lkm-card" }), X = f.note.type ? (n.typeColors || {})[f.note.type] : null;
      X && Z.style.setProperty("--lkm-card-stroke", X), I.appendChild(Z);
      let re = z("g", { class: "lkm-status-dots" }), A = 6, he = /* @__PURE__ */ b((H, Q) => {
        let oe = z("circle", { cx: 10, cy: A, r: 4, class: H });
        re.appendChild(oe);
        let _e = z("circle", { cx: 10, cy: A, r: 7, class: "lkm-dot-hit" }), ue = z("title");
        ue.textContent = Q, _e.appendChild(ue), re.appendChild(_e), A += 10;
      }, "mkDot");
      f.note.zk && he("lkm-dot-zk", t("\u4E3B\u7B14\u8BB0\uFF1A\u8BE5\u7B14\u8BB0 main: true\uFF0C\u662F\u5BFC\u56FE\u7684\u4E3B\u5165\u53E3")), f.note.status && he("lkm-dot-done", t("\u5DF2\u5B8C\u6210\uFF1A\u8BE5\u7B14\u8BB0 status: true")), f.isAlias && he("lkm-dot-multi", t("\u91CD\u590D\u8282\u70B9\uFF1A\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\u7684\u6302\u70B9\uFF09")), A > 9 && I.appendChild(re);
      let Te = n.showCreated && !V && f.note.date ? f.note.date : "", Fe = n.showType && !V && f.note.type ? f.note.type : "", be = n.showChildCount && !V && f.children.length ? t("\u5B50 ") + f.children.length : "", le = n.showWordCount && !V && f.note.file ? t("\u5B57 ") + Math.max(1, Math.round((f.note.file.stat.size || 0) / 3)) : "", te = [Fe, be, le, Te].filter(Boolean).join(" \xB7 "), se = !!te, de = z("text", { x: 16, y: se ? n.nodeHeight / 2 - 4 : n.nodeHeight / 2 + 5, class: "lkm-title" });
      if (de.textContent = f._shown || f.note.title, I.appendChild(de), se) {
        let H = z("text", { x: 16, y: n.nodeHeight - 8, class: "lkm-sub" });
        H.textContent = q(te, 50), I.appendChild(H);
      }
      let G = n.nodeHeight / 2, ve = window.innerWidth < 600, xe = ve ? 12 : 10, Oe = /* @__PURE__ */ b((H, Q) => {
        let oe = z("title");
        oe.textContent = Q, H.appendChild(oe);
      }, "addTip"), et = n.layoutDir === "v";
      if (f.children.length) {
        let H = z("g", { class: "lkm-expand" });
        Oe(H, f.expanded ? t("\u6298\u53E0\u5B50\u8282\u70B9") : t("\u5C55\u5F00\u5B50\u8282\u70B9"));
        let Q = et ? f._w / 2 : f._w + 14, oe = et ? n.nodeHeight + 14 : G;
        H.appendChild(z("circle", { cx: Q, cy: oe, r: xe, class: "lkm-dot" }));
        let _e = z("text", { x: Q, y: oe + 5, class: "lkm-sign", "text-anchor": "middle" });
        _e.textContent = f.expanded ? "\u2212" : "+", H.appendChild(_e);
        let ue = z("circle", { cx: Q, cy: oe, r: xe + 5, class: "lkm-hit" });
        ue.addEventListener("click", (Me) => {
          Me.stopPropagation(), f.expanded = !f.expanded, this._expandedMem.set(f.note.file ? f.note.file.path : f.key, f.expanded), P(f.key);
        }), ue.addEventListener("mouseenter", () => {
          D && (clearTimeout(D), D = null);
        }), H.appendChild(ue), I.appendChild(H);
      }
      if (f.note.file) {
        let H = ve ? 26 : 24, Q = f._w - (ve ? 20 : 18), oe = z("g", { class: "lkm-connect" });
        Oe(oe, t("\u62D6\u52A8\u8FDE\u7EBF\uFF1A\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u76EE\u6807\u6210\u4E3A\u672C\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u539F\u5173\u7CFB\u4FDD\u7559\uFF09"));
        let _e = Q, ue = G;
        oe.appendChild(z("circle", { cx: _e, cy: ue, r: xe, class: "lkm-connect-bg" })), oe.appendChild(z("circle", { cx: _e, cy: ue, r: 2.6, class: "lkm-connect-dot" }));
        let Me = z("circle", { cx: _e, cy: ue, r: xe + 5, class: "lkm-hit" });
        if (Me.addEventListener("mousedown", (ce) => {
          this._batchMode || M(ce, f);
        }), Me.addEventListener("mouseenter", () => {
          D && (clearTimeout(D), D = null);
        }), Me.addEventListener("touchstart", (ce) => {
          this._batchMode || M(ce, f);
        }, { passive: !1 }), oe.appendChild(Me), I.appendChild(oe), n.showOpenIcon !== !1) {
          Q -= H;
          let ce = z("g", { class: "lkm-open" });
          Oe(ce, t("\u6253\u5F00\u7B14\u8BB0")), ce.appendChild(z("circle", { cx: Q, cy: G, r: xe, class: "lkm-open-bg" }));
          let Be = z("text", { x: Q, y: G + 4, class: "lkm-open-sign", "text-anchor": "middle", transform: "rotate(90 " + Q + " " + G + ")" });
          Be.textContent = "\u270E", ce.appendChild(Be);
          let Ee = z("circle", { cx: Q, cy: G, r: xe + 3, class: "lkm-hit" });
          Ee.addEventListener("click", (Ge) => {
            Ge.stopPropagation(), this.app.workspace.getLeaf(!0).openFile(f.note.file);
          }), Ee.addEventListener("mouseenter", () => {
            D && (clearTimeout(D), D = null);
          }), ce.appendChild(Ee), I.appendChild(ce);
        }
        if (n.showAddIcon !== !1) {
          Q -= H;
          let ce = z("g", { class: "lkm-add" });
          Oe(ce, t("\u65B0\u589E\u5B50\u8282\u70B9\uFF08\u81EA\u52A8\u5199\u5165\u94FE\u63A5\uFF09")), ce.appendChild(z("circle", { cx: Q, cy: G, r: xe, class: "lkm-add-bg" }));
          let Be = z("text", { x: Q, y: G + 4, class: "lkm-add-sign", "text-anchor": "middle" });
          Be.textContent = "\uFF0B", ce.appendChild(Be);
          let Ee = z("circle", { cx: Q, cy: G, r: xe + 3, class: "lkm-hit" });
          Ee.addEventListener("click", (Ge) => {
            Ge.stopPropagation(), this.createChild(f);
          }), Ee.addEventListener("mouseenter", () => {
            D && (clearTimeout(D), D = null);
          }), ce.appendChild(Ee), I.appendChild(ce);
        }
      }
      f._el = I, this._batchMode && this._selected.has(f.key) && I.classList.add("lkm-selected"), this._selKey === f.key && I.classList.add("lkm-sel"), this._selectedRootPaths && f.note.file && this._selectedRootPaths.has(f.note.file.path) && I.classList.add("lkm-selected-root"), I.addEventListener("click", (H) => {
        if (this._batchMode) {
          H.stopPropagation(), this._toggleSelect(f.key);
          return;
        }
        this._select(f.key);
      }), I.addEventListener("contextmenu", (H) => {
        H.preventDefault(), H.stopPropagation(), !this._batchMode && (this._select(f.key), this._showNodeMenu(f, H));
      }), I.addEventListener("dblclick", (H) => {
        H.stopPropagation(), D && (clearTimeout(D), D = null), this._hidePreview(), !this._batchMode && (f.note.file ? this.app.workspace.getLeaf(!0).openFile(f.note.file) : f.children.length && (f.expanded = !f.expanded, this._expandedMem.set(f.note.file ? f.note.file.path : f.key, f.expanded), P(f.key)));
      }), I.addEventListener("mousedown", (H) => {
        H.button !== 0 || this._batchMode || (H.stopPropagation(), m(H, f));
      }), I.addEventListener("touchstart", (H) => {
        if (this._batchMode || !f.note.file || H.touches.length !== 1) return;
        let Q = H.touches[0], oe = { clientX: Q.clientX, clientY: Q.clientY, preventDefault: /* @__PURE__ */ b(() => H.preventDefault(), "preventDefault"), stopPropagation: /* @__PURE__ */ b(() => H.stopPropagation(), "stopPropagation") };
        m(oe, f);
      }, { passive: !1 });
      let Ce = null;
      I.addEventListener("touchstart", (H) => {
        if (this._batchMode || !f.note.file) return;
        let Q = H.touches[0];
        Ce = setTimeout(() => {
          Ce = null, this._select(f.key), this._showNodeMenu(f, { clientX: Q.clientX, clientY: Q.clientY });
        }, 500);
      }, { passive: !0 }), I.addEventListener("touchmove", () => {
        Ce && (clearTimeout(Ce), Ce = null);
      }, { passive: !0 }), I.addEventListener("touchend", () => {
        Ce && (clearTimeout(Ce), Ce = null);
      }, { passive: !0 }), f.note.file && !V && (I.addEventListener("mouseenter", (H) => {
        k || (D && clearTimeout(D), D = setTimeout(() => {
          k || (D = null, this._showPreview(f, H));
        }, 1e3));
      }), I.addEventListener("mousemove", (H) => {
        this._previewEl && this._positionPreview(H);
      }), I.addEventListener("mouseleave", () => {
        D && (clearTimeout(D), D = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
          this._hidePreview(), this._hideTimer = null;
        }, 200);
      })), E.appendChild(I);
    }
    this._applyFilter();
    let C = 1, S = 0, w = 0;
    this._view && (C = this._view.k, S = this._view.tx, w = this._view.ty);
    let N = /* @__PURE__ */ b(() => E.setAttribute("transform", `translate(${S},${w}) scale(${C})`), "apply"), _ = !1, B = /* @__PURE__ */ b(() => {
      let f = e.getBoundingClientRect(), V = f.width || e.clientWidth || 800, D = f.height || e.clientHeight || 600;
      if (C = Math.min(V / u, D / y, 1.4) || 1, d && a.length) {
        let I = a[0];
        S = V / 2 - (I._x + I._w / 2) * C, w = p * C - r * C;
      } else
        S = (V - u * C) / 2 - (l - p) * C, w = (D - y * C) / 2 - (r - p) * C;
      this._view = { k: C, tx: S, ty: w }, N();
    }, "fit");
    this._fit = B;
    let Y = /* @__PURE__ */ b((f) => {
      let V = a.find((I) => I.note.file && I.note.file.path === f);
      if (!V) return;
      let D = e.getBoundingClientRect();
      !D.width || !D.height || (S = D.width / 2 - (V._x + V._w / 2) * C, w = D.height / 2 - V._y * C, this._view = { k: C, tx: S, ty: w }, N());
    }, "centerOnPath");
    if (!this._view || i.fit) {
      if (requestAnimationFrame(() => {
        B(), i.centerPath && Y(i.centerPath);
      }), !i.centerPath) {
        let f = 3, V = /* @__PURE__ */ b(() => {
          f-- > 0 && B();
        }, "onResize");
        window.addEventListener("resize", V);
        let D = setTimeout(() => window.removeEventListener("resize", V), 1500);
        this._cleanup.push(() => {
          window.removeEventListener("resize", V), clearTimeout(D);
        });
      }
    } else
      N(), i.centerPath && Y(i.centerPath);
    let j = /* @__PURE__ */ b((f) => {
      f.preventDefault();
      let V = v.getBoundingClientRect(), D = f.clientX - V.left, I = f.clientY - V.top, Z = Math.max(0.2, Math.min(3, C * (f.deltaY < 0 ? 1.1 : 0.9)));
      S = D - (D - S) * (Z / C), w = I - (I - w) * (Z / C), C = Z, this._view = { k: C, tx: S, ty: w }, N();
    }, "onWheel");
    v.addEventListener("wheel", j, { passive: !1 }), this._cleanup.push(() => v.removeEventListener("wheel", j));
    let K = !1, U = !1, ie = 0, J = 0, ne = /* @__PURE__ */ b((f) => {
      K = !0, U = !1, ie = f.clientX - S, J = f.clientY - w, v.classList.add("lkm-grabbing");
    }, "onDown"), $ = /* @__PURE__ */ b((f) => {
      K && (!U && Math.hypot(f.clientX - (ie + S), f.clientY - (J + w)) > 3 && (U = !0), S = f.clientX - ie, w = f.clientY - J, this._view = { k: C, tx: S, ty: w }, N());
    }, "onMove"), O = /* @__PURE__ */ b(() => {
      let f = K;
      K = !1, v.classList.remove("lkm-grabbing"), f && !U && !this._batchMode && this._select(null);
    }, "onUp");
    v.addEventListener("mousedown", ne), window.addEventListener("mousemove", $), window.addEventListener("mouseup", O), this._cleanup.push(() => {
      v.removeEventListener("mousedown", ne), window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", O);
    });
    let W = null, ae = null, pe = /* @__PURE__ */ b((f) => {
      if (!_)
        if (f.stopPropagation(), f.touches.length === 2) {
          f.preventDefault();
          let V = f.touches[0].clientX - f.touches[1].clientX, D = f.touches[0].clientY - f.touches[1].clientY;
          ae = { dist: Math.hypot(V, D), k: C }, W = null;
        } else f.touches.length === 1 && (W = { x: f.touches[0].clientX - S, y: f.touches[0].clientY - w }, ae = null, v.classList.add("lkm-grabbing"));
    }, "onTouchStart"), ye = /* @__PURE__ */ b((f) => {
      if (!_)
        if (f.stopPropagation(), f.touches.length === 2 && ae) {
          f.preventDefault();
          let V = f.touches[0].clientX - f.touches[1].clientX, D = f.touches[0].clientY - f.touches[1].clientY, I = Math.max(0.2, Math.min(3, ae.k * (Math.hypot(V, D) / ae.dist))), Z = v.getBoundingClientRect(), X = (f.touches[0].clientX + f.touches[1].clientX) / 2 - Z.left, re = (f.touches[0].clientY + f.touches[1].clientY) / 2 - Z.top;
          S = X - (X - S) * (I / C), w = re - (re - w) * (I / C), C = I, this._view = { k: C, tx: S, ty: w }, N();
        } else f.touches.length === 1 && W ? (f.preventDefault(), S = f.touches[0].clientX - W.x, w = f.touches[0].clientY - W.y, this._view = { k: C, tx: S, ty: w }, N()) : f.touches.length && f.preventDefault();
    }, "onTouchMove"), De = /* @__PURE__ */ b((f) => {
      _ || (f.stopPropagation(), f.touches.length === 0 && (W = null, ae = null, v.classList.remove("lkm-grabbing")));
    }, "onTouchEnd");
    v.addEventListener("touchstart", pe, { passive: !1 }), v.addEventListener("touchmove", ye, { passive: !1 }), v.addEventListener("touchend", De), v.addEventListener("touchcancel", De), this._cleanup.push(() => {
      v.removeEventListener("touchstart", pe), v.removeEventListener("touchmove", ye), v.removeEventListener("touchend", De), v.removeEventListener("touchcancel", De);
    });
  }
  _templateFiles() {
    let e = this.s, s = (e.templateFolder || "").trim();
    if (!s) {
      let n = (e.templatePath || "").trim();
      if (n) {
        let a = n.lastIndexOf("/");
        s = a > 0 ? n.slice(0, a) : "";
      }
    }
    if (!s) return [];
    let i = this.app.vault.getAbstractFileByPath(ee(s));
    return !i || !i.children ? [] : i.children.filter((n) => n instanceof Se && n.extension === "md");
  }
  async _buildNewNoteBody(e, s, i, n, a) {
    let o = this.s, l = o.linkField || "children", r = o.backField || "parent", c = o.zkField || "main", h = o.statusField || "status", d = o.typeField || "type", p = o.dateField || "date", u = o.titleField || "title", y = /* @__PURE__ */ new Set([l, r, c, h, p, d, u]), v = "", F = [];
    if (n) {
      let E = this.app.vault.getAbstractFileByPath(ee(n));
      if (E instanceof Se) {
        let P = Je(await this.app.vault.read(E));
        v = P.body;
        let k = new Map(P.fields);
        i || (k.get(d) != null ? i = je(k.get(d)) : k.get("type") != null && (i = je(k.get("type"))));
        let L = [];
        for (let [m, M] of [["zk", c], ["status", h], ["date", p], ["type", d], ["title", u]])
          m !== M && k.has(m) && !k.has(M) && L.push(m + "\u2192" + M);
        L.length && new g(t("\u6A21\u677F\u5B57\u6BB5\u4E0E\u914D\u7F6E\u4E0D\u4E00\u81F4\uFF1A") + L.join("\uFF0C") + t("\u3002\u5DF2\u7528\u914D\u7F6E\u5B57\u6BB5\u540D\u521B\u5EFA\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6A21\u677F\u3002"), 1e4);
        for (let [m, M] of P.fields)
          y.has(m) || F.push([m, M]);
      }
    }
    let T = ["---"];
    T.push(l + ": []"), e && o.autoAddBackLink && T.push(r + ': "' + e + '"'), T.push(c + ": " + (a ? "true" : "false")), T.push(h + ": false"), T.push(p + ": " + s), i && T.push(d + ': "' + i + '"');
    for (let [E, P] of F) T.push(E + ": " + (P ?? ""));
    return T.push("---", ""), T.join(`
`) + (v || "");
  }
  async _rebuildUntilReady(e, s, i) {
    s = s || 30, i = i !== !1;
    for (let n = 0; n < s; n++) {
      if (await this.rebuild(!0), this.notes.has(e) && (!i || this._treePaths && this._treePaths.has(e)))
        return;
      await new Promise((a) => setTimeout(a, 150));
    }
    new g(t("\u5DF2\u521B\u5EFA\uFF0C\u4F46\u89C6\u56FE\u6682\u672A\u5237\u65B0\uFF0C\u8BF7\u70B9\u5237\u65B0"));
  }
  createChild(e) {
    if (!e || !e.note.file) {
      new g(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6\uFF0C\u65E0\u6CD5\u65B0\u589E\u5B50\u8282\u70B9"));
      return;
    }
    let s = this.s, i = Object.keys(s.typeColors || {}), n = i.includes(s.defaultType) ? s.defaultType : "", a = [{ path: "", name: t("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let r of this._templateFiles()) a.push({ path: r.path, name: r.basename });
    let o = "", l = (s.templatePath || "").trim();
    if (l) {
      let r = a.find((c) => c.path === ee(l));
      r && (o = r.path);
    }
    new lt(this.app, e.note.title, {
      types: i,
      defaultType: n,
      templates: a,
      defaultTemplate: o,
      typeTemplates: s.typeTemplates || {},
      zkField: s.zkField || "main",
      onSubmit: /* @__PURE__ */ b(async (r, c, h, d) => {
        try {
          let p = fe(r) + ".md", u = ee(s.mainFolder), y = ee(u + "/" + p);
          if (this.app.vault.getAbstractFileByPath(y)) {
            new g(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + p);
            return;
          }
          let v = /* @__PURE__ */ new Date(), F = v.getFullYear() + "-" + String(v.getMonth() + 1).padStart(2, "0") + "-" + String(v.getDate()).padStart(2, "0"), T = await this._buildNewNoteBody(e.note.file.basename, F, c, h, d);
          await ze(this.app, e.note.file, s.linkField, fe(r)), await this.app.vault.create(y, T), new g(t("\u5DF2\u521B\u5EFA\u300C") + fe(r) + t("\u300D\u5E76\u5173\u8054\u5230\u300C") + q(e.note.title, 14) + "\u300D");
          let E = e;
          for (; E; )
            this._expandedMem.set(E.note.file ? E.note.file.path : E.key, !0), E = E.parent;
          await this._rebuildUntilReady(y);
        } catch (p) {
          new g(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (p && p.message ? p.message : p));
        }
      }, "onSubmit")
    }).open();
  }
  createStandaloneNote() {
    let e = this.s, s = Object.keys(e.typeColors || {}), i = s.includes(e.defaultType) ? e.defaultType : "", n = [{ path: "", name: t("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let l of this._templateFiles()) n.push({ path: l.path, name: l.basename });
    let a = "", o = (e.templatePath || "").trim();
    if (o) {
      let l = n.find((r) => r.path === ee(o));
      l && (a = l.path);
    }
    new lt(this.app, "", {
      types: s,
      defaultType: i,
      templates: n,
      defaultTemplate: a,
      typeTemplates: e.typeTemplates || {},
      standalone: !0,
      zkField: e.zkField || "main",
      onSubmit: /* @__PURE__ */ b(async (l, r, c, h) => {
        try {
          let d = fe(l) + ".md", p = ee(e.mainFolder), u = ee(p + "/" + d);
          if (this.app.vault.getAbstractFileByPath(u)) {
            new g(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + d);
            return;
          }
          let y = /* @__PURE__ */ new Date(), v = y.getFullYear() + "-" + String(y.getMonth() + 1).padStart(2, "0") + "-" + String(y.getDate()).padStart(2, "0"), F = await this._buildNewNoteBody(null, v, r, c, h);
          await this.app.vault.create(u, F), new g(t("\u5DF2\u521B\u5EFA\u300C") + fe(l) + "\u300D"), await this._rebuildUntilReady(u, 30, !1), this._focusPath(u);
        } catch (d) {
          new g(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
        }
      }, "onSubmit")
    }).open();
  }
  _renderDash(e) {
    let s = this.s, i = e.createDiv("lkm-toolbar"), n = i.createEl("button", { cls: "lkm-btn", text: t("\u8FD4\u56DE") });
    n.title = t("\u8FD4\u56DE\u601D\u7EF4\u5BFC\u56FE"), n.onclick = () => {
      this._mode = "map", this.render();
    }, i.createSpan({ cls: "lkm-dash-title", text: t("\u5DE5\u4F5C\u53F0") });
    let a = i.createEl("button", { cls: "lkm-btn" + (this._dashTab === "timeline" ? " is-active" : ""), text: t("\u65F6\u95F4\u7EBF") });
    if (a.title = t("\u5207\u6362\u5230\u65F6\u95F4\u7EBF\u89C6\u56FE"), a.style.marginLeft = "auto", a.onclick = () => {
      this._dashTab = this._dashTab === "timeline" ? "stats" : "timeline", this.render();
    }, this._dashTab === "stats") {
      let o = this._dashStats(), l = i.createEl("button", { cls: "lkm-btn", text: t("\u590D\u5236\u7EDF\u8BA1") });
      l.title = t("\u628A\u7EDF\u8BA1\u6458\u8981\u590D\u5236\u4E3A Markdown"), l.onclick = () => {
        navigator.clipboard.writeText(this._dashSummaryMd(o)).then(
          () => new g(t("\u5DF2\u590D\u5236\u7EDF\u8BA1\u6458\u8981")),
          () => new g(t("\u590D\u5236\u5931\u8D25"))
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
      for (let _ of h) {
        let B = _.filter && this._isFilterActive(_.filter), Y = c.createDiv("lkm-card-stat lkm-card-click" + (B ? " is-active" : "")), j = Y.createDiv("lkm-card-ico");
        j.style.background = "color-mix(in srgb, " + _.color + " 16%, transparent)", j.style.color = _.color;
        try {
          nt(j, _.icon);
        } catch {
        }
        Y.createDiv("lkm-stat-num").setText(String(_.num)), Y.createDiv("lkm-stat-label").setText(_.label + (_.filter && o.total ? " \xB7 " + Math.round(_.num / o.total * 100) + "%" : "")), _.filter && (Y.title = t("\u70B9\u51FB\u67E5\u770B\u300C") + _.label + t("\u300D\u5217\u8868"), Y.addEventListener("click", () => this._toggleDashFilter(_.filter)));
      }
      {
        let _ = r.createDiv("lkm-dash-two"), B = _.createDiv("lkm-dash-sec");
        B.createDiv("lkm-dash-h").setText(t("\u7C7B\u578B\u5206\u5E03"));
        let Y = o.byTypeOrder.map((O) => ({ label: O.name, value: O.count, color: O.color, filter: { kind: "type", value: O.name } }));
        o.noType && Y.push({ label: t("\u672A\u6807\u6CE8"), value: o.noType, color: "var(--text-faint)", filter: { kind: "notype" } });
        let j = B.createDiv("lkm-donut-wrap");
        this._renderDonut(j, Y, o.total);
        let K = j.createDiv("lkm-legend");
        for (let O of Y) {
          let W = K.createDiv("lkm-legend-row lkm-type-click" + (this._isFilterActive(O.filter) ? " is-active" : ""));
          W.createSpan({ cls: "lkm-legend-dot" }).style.background = O.color, W.createSpan({ cls: "lkm-legend-name", text: O.label }), W.createSpan({ cls: "lkm-legend-num", text: String(O.value) }), W.addEventListener("click", () => this._toggleDashFilter(O.filter));
        }
        let U = _.createDiv("lkm-dash-sec");
        U.createDiv("lkm-dash-h").setText(t("\u5B8C\u6210\u72B6\u6001"));
        let ie = U.createDiv("lkm-stackbar"), J = [
          { label: t("\u5DF2\u5B8C\u6210"), value: o.done, color: "var(--lkm-done)", filter: { kind: "done" } },
          { label: t("\u672A\u5B8C\u6210"), value: o.total - o.done, color: "var(--lkm-accent)", filter: { kind: "undone" } }
        ];
        for (let O of J) {
          if (!O.value) continue;
          let W = ie.createDiv("lkm-stackbar-seg");
          W.style.width = Math.max(6, O.value / o.total * 100) + "%", W.style.background = O.color, this._isFilterActive(O.filter) && W.addClass("is-active"), W.title = O.label + "\uFF1A" + O.value + t(" \u7BC7\uFF0C\u70B9\u51FB\u7B5B\u9009"), W.addEventListener("click", () => this._toggleDashFilter(O.filter));
        }
        let ne = U.createDiv("lkm-chips"), $ = /* @__PURE__ */ b((O, W, ae, pe) => {
          let ye = ne.createDiv("lkm-chip lkm-type-click" + (this._isFilterActive(pe) ? " is-active" : ""));
          ye.createSpan({ cls: "lkm-legend-dot" }).style.background = ae, ye.createSpan({ text: O + " " + W }), ye.addEventListener("click", () => this._toggleDashFilter(pe));
        }, "chip");
        $(t("\u5DF2\u5B8C\u6210"), o.done, "var(--lkm-done)", { kind: "done" }), $(t("\u672A\u5B8C\u6210"), o.total - o.done, "var(--lkm-accent)", { kind: "undone" }), $(t("\u672A\u6807\u65E5\u671F"), o.noDate, "var(--text-faint)", { kind: "nodate" });
      }
      {
        let _ = r.createDiv("lkm-dash-sec");
        _.createDiv("lkm-dash-h").setText(t("\u6708\u5EA6\u521B\u5EFA \xB7 \u8FD112\u4E2A\u6708\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u5F53\u6708\u65B0\u589E\uFF09"));
        let B = _.createDiv("lkm-chart-body");
        this._renderBarChart(
          B,
          o.monthly.map((Y) => ({ label: parseInt(Y.key.slice(5, 7), 10) + t("\u6708"), value: Y.count, filter: { kind: "month", value: Y.key } })),
          { height: window.innerWidth < 600 ? 100 : 120, thinLabels: window.innerWidth < 600 }
        );
      }
      {
        let _ = r.createDiv("lkm-dash-sec");
        if (_.createDiv("lkm-dash-h").setText(t("\u6811\u6DF1\u5EA6\u5206\u5E03\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u8BE5\u5C42\u8282\u70B9\uFF09")), o.depthMax) {
          let B = _.createDiv("lkm-chart-body"), Y = [];
          for (let j = 1; j <= o.depthMax; j++) Y.push({ label: t("\u7B2C") + j + t("\u5C42"), value: o.depthCount.get(j) || 0, filter: { kind: "depth", value: String(j) } });
          this._renderBarChart(B, Y, { height: window.innerWidth < 600 ? 100 : 120 });
        } else _.createDiv("lkm-heat-sum").setText(t("\u8FD8\u6CA1\u6709\u53EF\u7EDF\u8BA1\u7684\u5C42\u7EA7\u6570\u636E"));
      }
      let d = r.createDiv("lkm-dash-sec"), p = new Set([...o.heat.keys()].map((_) => _.slice(0, 4)));
      p.add(String((/* @__PURE__ */ new Date()).getFullYear()));
      let u = [...p].sort().reverse();
      this._dashHeatIdx = Math.min(this._dashHeatIdx || 0, u.length);
      let y = d.createDiv("lkm-heat-head");
      if (y.createDiv("lkm-dash-h").setText(t("\u521B\u5EFA\u70ED\u529B\u56FE \xB7 ") + (this._dashHeatIdx ? u[this._dashHeatIdx - 1] + t(" \u5E74") : t("\u8FD1\u4E00\u5E74")) + t("\uFF08\u6309 date \u5B57\u6BB5\uFF09")), this._dashHeatIdx || u.length > 1) {
        let _ = y.createDiv("lkm-heat-nav"), B = /* @__PURE__ */ b(() => {
          let K = this.contentEl.querySelector(".lkm-dash"), U = K ? K.scrollTop : 0;
          this.render();
          let ie = this.contentEl.querySelector(".lkm-dash");
          ie && (ie.scrollTop = U);
        }, "rerender"), Y = _.createEl("button", { cls: "lkm-step", text: "\u2039" });
        Y.disabled = this._dashHeatIdx >= u.length;
        let j = _.createEl("button", { cls: "lkm-step", text: "\u203A" });
        j.disabled = this._dashHeatIdx <= 0, Y.onclick = () => {
          this._dashHeatIdx++, B();
        }, j.onclick = () => {
          this._dashHeatIdx--, B();
        };
      }
      let v = 864e5, F = /* @__PURE__ */ new Date();
      F.setHours(0, 0, 0, 0);
      let T = (F.getDay() + 6) % 7, E = window.innerWidth < 600, P = E ? 10 : 12, k, L, m, M;
      if (this._dashHeatIdx) {
        let _ = parseInt(u[this._dashHeatIdx - 1], 10), B = new Date(_, 0, 1), Y = new Date(_, 11, 31);
        k = new Date(B.getTime() - (B.getDay() + 6) % 7 * v), L = B, m = Y, M = Math.round((Y.getTime() + (6 - (Y.getDay() + 6) % 7) * v - k.getTime()) / v / 7);
      } else {
        let _ = new Date(F.getTime() + (6 - T) * v);
        M = E ? 26 : 53, k = new Date(_.getTime() - (M * 7 - 1) * v), L = k, m = F;
      }
      if (d.createDiv("lkm-heat-sum").setText(o.heat.size ? (() => {
        let _ = this._ds(L), B = this._ds(m), Y = 0, j = 0, K = { date: "", count: 0 };
        for (let [U, ie] of o.heat) U >= _ && U <= B && (Y += ie, j++, ie > K.count && (K = { date: U, count: ie }));
        return (j ? j + t(" \u5929\u6709\u521B\u5EFA \xB7 \u5171 ") + Y + t(" \u7BC7") : t("\u8BE5\u65F6\u95F4\u6BB5\u6682\u65E0\u521B\u5EFA\u8BB0\u5F55")) + (K.count ? t(" \xB7 \u6700\u591A\u4E00\u5929 ") + K.count + t(" \u7BC7\uFF08") + K.date + "\uFF09" : "");
      })() : t("\u8FD8\u6CA1\u6709\u5E26 date \u5B57\u6BB5\u7684\u7B14\u8BB0")), o.heat.size) {
        let _ = d.createDiv("lkm-heat-scroll"), B = _.createDiv("lkm-heat-grid");
        B.style.gridTemplateColumns = "26px repeat(" + M + ", " + P + "px)", B.style.gridAutoRows = P + "px";
        let Y = -1;
        for (let J = 0; J < M; J++) {
          let ne = new Date(k.getTime() + J * 7 * v);
          if (ne.getMonth() !== Y) {
            Y = ne.getMonth();
            let $ = B.createDiv("lkm-heat-mon");
            $.style.gridColumn = String(J + 2), $.style.gridRow = "1", $.setText(ne.getMonth() + 1 + t("\u6708"));
          }
        }
        [t("\u4E00"), t("\u4E09"), t("\u4E94")].forEach((J, ne) => {
          let $ = B.createDiv("lkm-heat-wd");
          $.style.gridColumn = "1", $.style.gridRow = String(ne * 2 + 2), $.setText(J);
        });
        let j = this._ds(L), K = this._ds(m), U = this._ds(F), ie = null;
        for (let J = 0; J < M; J++)
          for (let ne = 0; ne < 7; ne++) {
            let $ = new Date(k.getTime() + (J * 7 + ne) * v), O = B.createDiv("lkm-heat-cell");
            O.style.gridColumn = String(J + 2), O.style.gridRow = String(ne + 2);
            let W = this._ds($);
            if ($ > F || W < j || W > K) {
              O.addClass("lkm-heat-off");
              continue;
            }
            let ae = o.heat.get(W) || 0, pe = ae === 0 ? 0 : ae === 1 ? 1 : ae <= 2 ? 2 : ae <= 4 ? 3 : 4;
            pe && O.addClass("lkm-heat-l" + pe), this._isFilterActive({ kind: "date", value: W }) && O.addClass("is-active"), ae && O.addClass("lkm-heat-hit"), W === U && (O.addClass("lkm-heat-today"), ie = O), O.title = W + "\uFF1A" + ae + t(" \u7BC7") + (W === U ? t("\uFF08\u4ECA\u5929\uFF09") : ""), O.addEventListener("click", () => this._toggleDashFilter({ kind: "date", value: W }));
          }
        ie && !this._dashHeatIdx && requestAnimationFrame(() => {
          let J = ie.getBoundingClientRect(), ne = _.getBoundingClientRect();
          J.right > ne.right - 20 && (_.scrollLeft += J.right - ne.right + 30);
        });
      }
      let C = r.createDiv("lkm-dash-two"), S = C.createDiv("lkm-dash-sec"), w = this._dashFilters || [];
      if (w.length) {
        S.addClass("lkm-filter-sec");
        let _ = this._sortDashItems(this._dashFilterItems(w)), B = S.createDiv("lkm-filter-head");
        B.createSpan({ cls: "lkm-dash-h lkm-filter-title", text: this._dashFilterGroupLabel(w) });
        let Y = B.createSpan({ cls: "lkm-filter-count", text: "\uFF08" + _.length + "\uFF09" }), j = B.createEl("input", { cls: "lkm-filter-search", type: "text", attr: { placeholder: t("\u8FC7\u6EE4\u2026") } });
        j.value = this._dashSearch || "", j.addEventListener("focus", () => {
          if (!window.matchMedia("(hover: none)").matches) return;
          let $ = this.contentEl.querySelector(".lkm-dash"), O = this.contentEl.querySelector(".lkm-toolbar");
          if (!$ || !O) return;
          let W = $.scrollTop, ae = $.style.flex, pe = $.style.height, ye = /* @__PURE__ */ b(() => {
            let De = O.getBoundingClientRect().bottom, f = window.visualViewport, D = (f ? f.height + f.offsetTop : window.innerHeight) - De;
            D > 60 && ($.style.flex = "none", $.style.height = D + "px"), $.scrollTop = Math.max(0, B.offsetTop - 50);
          }, "doAdjust");
          setTimeout(ye, 300), setTimeout(ye, 500), j.addEventListener("blur", () => {
            $.style.flex = ae, $.style.height = pe, $.scrollTop = W;
          }, { once: !0 });
        });
        let K = B.createEl("button", { cls: "lkm-btn", text: t("\u6392\u5E8F\uFF1A") + { date: t("\u65E5\u671F"), name: t("\u540D\u79F0") }[this._dashSort || "date"] });
        K.onclick = () => {
          this._dashSort = this._dashSort === "date" ? "name" : "date", this.render();
        };
        let U = B.createEl("button", { cls: "lkm-btn", text: t("\u6E05\u9664") });
        U.onclick = () => {
          this._dashFilters = [], this._dashSearch = "", this.render();
        }, _.length || S.createDiv("lkm-heat-sum").setText(t("\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7B14\u8BB0"));
        let ie = S.createDiv("lkm-filter-list"), J = [];
        for (let $ of _) {
          let O = this._dashRow(ie, $);
          J.push({ el: O, text: ($.title + " " + ($.type || "")).toLowerCase() }), O.addEventListener("click", () => {
            $.isIndex ? (this._kwFile = $.file, this._multiRoot = !1, this._mode = "map", this.render()) : this.app.workspace.getLeaf(!0).openFile($.file);
          });
        }
        let ne = /* @__PURE__ */ b(() => {
          let $ = (this._dashSearch || "").trim().toLowerCase(), O = 0;
          for (let W of J) {
            let ae = !$ || W.text.includes($);
            W.el.style.display = ae ? "" : "none", ae && O++;
          }
          Y.setText("\uFF08" + ($ ? O + "/" : "") + _.length + "\uFF09");
        }, "applySearch");
        j.addEventListener("input", () => {
          this._dashSearch = j.value, ne();
        }), ne();
      } else {
        S.createDiv("lkm-dash-h").setText(t("\u5206\u652F\u5206\u5E03 \xB7 \u5B8C\u6210\u8FDB\u5EA6")), o.branches.length || S.createDiv("lkm-heat-sum").setText(t("\u8FD8\u6CA1\u6709 main: true \u7684\u4E3B\u7B14\u8BB0"));
        let _ = this._dashBranchAll && o.branches.length > 6, B = _ ? o.branches : o.branches.slice(0, 6), Y = S.createDiv("lkm-filter-list lkm-branch-list"), j = o.branches[0] && o.branches[0].total || 1;
        for (let K of B) {
          let U = Y.createDiv("lkm-branch-row");
          U.title = K.title + t("\uFF0C\u70B9\u51FB\u5728\u5BFC\u56FE\u4E2D\u6253\u5F00"), U.createSpan({ cls: "lkm-branch-name", text: q(K.title, 10) });
          let ie = U.createDiv("lkm-type-bar").createDiv("lkm-branch-scaler");
          ie.style.width = Math.max(3, Math.round(K.total / j * 100)) + "%";
          let J = ie.createDiv("lkm-branch-done");
          J.style.width = (K.total ? Math.round(K.done / K.total * 100) : 0) + "%", U.createSpan({ cls: "lkm-type-num", text: K.done + "/" + K.total + " \xB7 " + Math.round(K.done / K.total * 100) + "%" }), U.addEventListener("click", () => {
            this.rootPath = K.path, this._view = null, this._kwFile = null, this._multiRoot = !1, this._mode = "map", this._expandedMem.clear(), this.render();
          });
        }
        if (o.branches.length > 6) {
          let K = S.createEl("button", { cls: "lkm-btn", text: _ ? t("\u6536\u8D77") : t("\u5C55\u5F00\u5168\u90E8 ") + o.branches.length + t(" \u4E2A\u5206\u652F") });
          K.onclick = () => {
            this._dashBranchAll = !this._dashBranchAll, this.render();
          };
        }
      }
      let N = C.createDiv("lkm-dash-sec");
      N.createDiv("lkm-dash-h").setText(t("\u6700\u8FD1\u521B\u5EFA"));
      for (let _ of o.recent)
        this._dashRow(N, _).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(_.file));
      if (o.modified.length) {
        N.createDiv("lkm-dash-h lkm-sec-gap").setText(t("\u6700\u8FD1\u4FEE\u6539"));
        for (let _ of o.modified)
          this._dashRow(N, _).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(_.file));
      }
    } else
      this._renderTimelineDash(e);
  }
  _renderTimelineDash(e) {
    let i = [...We(this.app, this.s).map.values()], n = e.createDiv({ cls: "lkm-tl-toolbar" }), a = n.createEl("input", { type: "text", cls: "lkm-tl-search", placeholder: t("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    a.value = this._tlSearch, a.addEventListener("input", () => {
      this._tlSearch = a.value.toLowerCase().trim(), this._renderTimelineBody(y, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: t("\u7C7B\u578B") });
    let o = n.createEl("select", { cls: "lkm-tl-typesel" });
    o.createEl("option", { value: "", text: t("\u5168\u90E8") });
    let l = [...new Set(i.map((v) => v.type).filter(Boolean))].sort();
    for (let v of l)
      o.createEl("option", { value: v, text: v });
    o.value = this._tlTypeFilter, o.addEventListener("change", () => {
      this._tlTypeFilter = o.value, this._renderTimelineBody(y, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: t("\u65F6\u95F4") });
    let r = n.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [v, F] of [["all", t("\u5168\u90E8")], ["day", t("\u4ECA\u65E5")], ["week", t("\u672C\u5468")], ["month", t("\u672C\u6708")], ["year", t("\u672C\u5E74")], ["pweek", t("\u8FD1\u4E00\u5468")], ["pmonth", t("\u8FD1\u4E00\u6708")], ["pyear", t("\u8FD1\u4E00\u5E74")]])
      r.createEl("option", { value: v, text: F });
    r.value = this._tlRange, r.addEventListener("change", () => {
      this._tlRange = r.value, this._renderTimelineBody(y, i);
    });
    let c = n.createEl("input", { type: "date", cls: "lkm-tl-datesel" });
    c.value = this._tlDateFilter, c.title = t("\u6309\u6307\u5B9A\u65E5\u671F\u7B5B\u9009"), c.addEventListener("change", () => {
      this._tlDateFilter = c.value, this._renderTimelineBody(y, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: t("\u6027\u8D28") });
    let h = n.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [v, F] of [["all", t("\u5168\u90E8")], ["zk", t("\u4E3B\u7B14\u8BB0")], ["normal", t("\u666E\u901A")]])
      h.createEl("option", { value: v, text: F });
    h.value = this._tlZkFilter, h.addEventListener("change", () => {
      this._tlZkFilter = h.value, this._renderTimelineBody(y, i);
    }), n.createEl("span", { cls: "lkm-tl-label", text: t("\u72B6\u6001") });
    let d = n.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [v, F] of [["all", t("\u5168\u90E8")], ["done", t("\u5DF2\u5B8C\u6210")], ["undone", t("\u672A\u5B8C\u6210")]])
      d.createEl("option", { value: v, text: F });
    d.value = this._tlStatusFilter, d.addEventListener("change", () => {
      this._tlStatusFilter = d.value, this._renderTimelineBody(y, i);
    });
    let p = n.createEl("button", { cls: "lkm-btn lkm-tl-sortbtn", text: this._tlSort === "desc" ? t("\u65B0\u2192\u65E7") : t("\u65E7\u2192\u65B0") });
    p.addEventListener("click", () => {
      this._tlSort = this._tlSort === "desc" ? "asc" : "desc", p.textContent = this._tlSort === "desc" ? t("\u65B0\u2192\u65E7") : t("\u65E7\u2192\u65B0"), this._renderTimelineBody(y, i);
    });
    let u = n.createEl("button", { cls: "lkm-btn", text: t("\u6E05\u7A7A") });
    u.title = t("\u6E05\u7A7A\u6240\u6709\u7B5B\u9009\u6761\u4EF6"), u.addEventListener("click", () => {
      this._tlSearch = "", this._tlTypeFilter = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this.render();
    });
    let y = e.createDiv({ cls: "lkm-tl-body" });
    this._renderTimelineBody(y, i);
  }
  _renderTimelineBody(e, s) {
    e.empty();
    let i = s;
    if (this._tlTypeFilter && (i = i.filter((c) => c.type === this._tlTypeFilter)), this._tlSearch && (i = i.filter((c) => c.title.toLowerCase().includes(this._tlSearch))), this._tlZkFilter === "zk" ? i = i.filter((c) => c.zk) : this._tlZkFilter === "normal" && (i = i.filter((c) => !c.zk)), this._tlStatusFilter === "done" ? i = i.filter((c) => c.status) : this._tlStatusFilter === "undone" && (i = i.filter((c) => !c.status)), this._tlDateFilter)
      i = i.filter((c) => c.ctime && c.ctime.slice(0, 10) === this._tlDateFilter);
    else if (this._tlRange !== "all") {
      let c = /* @__PURE__ */ new Date(), h = c.getFullYear() + "-" + String(c.getMonth() + 1).padStart(2, "0") + "-" + String(c.getDate()).padStart(2, "0"), d = /* @__PURE__ */ new Date(h), p = null;
      if (this._tlRange === "day" ? p = d : this._tlRange === "week" || this._tlRange === "pweek" ? p = new Date(d.getTime() - 6 * 864e5) : this._tlRange === "month" || this._tlRange === "pmonth" ? p = new Date(d.getTime() - 29 * 864e5) : (this._tlRange === "year" || this._tlRange === "pyear") && (p = new Date(d.getTime() - 364 * 864e5)), p) {
        let u = p.getFullYear() + "-" + String(p.getMonth() + 1).padStart(2, "0") + "-" + String(p.getDate()).padStart(2, "0");
        i = i.filter((y) => {
          if (!y.ctime) return !1;
          let v = y.ctime.slice(0, 10);
          return v >= u && v <= h;
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
      let h = e.createDiv({ cls: "lkm-tl-day" }), [d, p, u] = c.key.split("-"), y = new Date(parseInt(d), parseInt(p) - 1, parseInt(u)), v = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][y.getDay()];
      h.createDiv({ cls: "lkm-tl-day-label", text: c.key + " " + t("\u5468") + v + " (" + c.items.length + ")" });
      let F = h.createDiv({ cls: "lkm-tl-items" });
      for (let T of c.items)
        this._renderTimelineItem(F, T);
    }
    if (a.length) {
      let c = e.createDiv({ cls: "lkm-tl-day lkm-tl-nodate" });
      c.createDiv({ cls: "lkm-tl-day-label", text: t("\u65E0\u65E5\u671F") + " (" + a.length + ")" });
      let h = c.createDiv({ cls: "lkm-tl-items" });
      for (let d of a)
        this._renderTimelineItem(h, d);
    }
    i.length || e.createDiv({ cls: "lkm-tl-empty", text: t("\u6682\u65E0\u7B14\u8BB0") });
  }
  _renderTimelineItem(e, s) {
    let i = e.createDiv({ cls: "lkm-tl-item" }), n = i.createDiv({ cls: "lkm-tl-item-content" });
    if (s.type) {
      let l = this.s.typeColors && this.s.typeColors[s.type], r = n.createEl("span", { cls: "lkm-tl-badge", text: s.type });
      l && (r.style.background = l);
    }
    s.zk && n.createEl("span", { cls: "lkm-tl-main-badge", text: t("\u4E3B\u7B14\u8BB0") }), n.createEl("span", { cls: "lkm-tl-title", text: s.title }), s.status && n.createEl("span", { cls: "lkm-tl-status", text: "\u2713" }), i.addEventListener("click", (l) => {
      l.target.closest("a") || (this.app.workspace.openLinkText(s.file.basename, s.file.path, l.ctrlKey || l.metaKey), this.locateFile(s.file, !0));
    });
    let a = /* @__PURE__ */ b((l, r) => {
      let c = new Le();
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
  _dashRow(e, s) {
    let i = this.s, n = e.createDiv("lkm-recent-row");
    n.title = s.isIndex ? s.title + t("\uFF0C\u70B9\u51FB\u6253\u5F00\u5173\u952E\u8BCD\u89C6\u56FE") : s.title + t("\uFF0C\u70B9\u51FB\u6253\u5F00\u7B14\u8BB0");
    let a = (i.typeColors || {})[s.type];
    if (a && (n.createSpan({ cls: "lkm-recent-dot" }).style.background = a), n.createSpan({ cls: "lkm-recent-name", text: q(s.title, 14) }), s.created && !s.mtime && n.createSpan({ cls: "lkm-recent-date", text: s.created }), s.mtime && n.createSpan({ cls: "lkm-recent-date", text: s.mtime }), !s.isIndex) {
      let o = n.createSpan({ cls: "lkm-row-jump", title: t("\u5728\u5BFC\u56FE\u4E2D\u5B9A\u4F4D") });
      try {
        nt(o, "crosshair");
      } catch {
      }
      o.addEventListener("click", (l) => {
        l.stopPropagation(), this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._dashFilters = [], this.locateFile(s.file);
      });
    }
    return n;
  }
  _renderDonut(e, s, i) {
    let r = 2 * Math.PI * 49, c = z("svg", { class: "lkm-donut-svg", viewBox: "0 0 116 116", width: 116, height: 116 });
    c.appendChild(z("circle", { cx: 58, cy: 58, r: 49, fill: "none", stroke: "var(--background-secondary)", "stroke-width": 13 }));
    let h = s.reduce((y, v) => y + v.value, 0), d = 0;
    for (let y of s) {
      let v = h ? y.value / h : 0;
      if (!v) continue;
      let F = Math.max(0, v * r - 2.5), T = z("circle", {
        cx: 58,
        cy: 58,
        r: 49,
        fill: "none",
        stroke: y.color,
        "stroke-width": 13,
        "stroke-linecap": "butt",
        "stroke-dasharray": F + " " + (r - F),
        "stroke-dashoffset": -(d * r),
        transform: "rotate(-90 58 58)",
        class: "lkm-donut-seg" + (this._isFilterActive(y.filter) ? " is-active" : "")
      });
      T.addEventListener("click", () => this._toggleDashFilter(y.filter)), c.appendChild(T), d += v;
    }
    let p = z("text", { x: 58, y: 57, class: "lkm-donut-num", "text-anchor": "middle" });
    p.textContent = String(i), c.appendChild(p);
    let u = z("text", { x: 58, y: 71, class: "lkm-donut-cap", "text-anchor": "middle" });
    u.textContent = t("\u603B\u7B14\u8BB0"), c.appendChild(u), e.appendChild(c);
  }
  _renderBarChart(e, s, i) {
    i = i || {};
    let n = i.height || 120, a = 16, o = 18, l = Math.max(e.clientWidth || 300, 120), r = Math.max(1, ...s.map((p) => p.value)), c = l / Math.max(s.length, 1), h = n - a - o, d = z("svg", { class: "lkm-bars-svg", viewBox: "0 0 " + l + " " + n, preserveAspectRatio: "none", width: "100%", height: n });
    for (let p = 1; p <= 3; p++) {
      let u = a + h * (1 - p / 3);
      d.appendChild(z("line", { x1: 0, y1: u, x2: l, y2: u, class: "lkm-bars-grid" }));
    }
    s.forEach((p, u) => {
      let y = p.value > 0 ? Math.max(3, h * p.value / r) : 0, v = u * c + c * 0.22, F = c * 0.56, T = n - o - y, E = z("rect", { x: v, y: T, width: F, height: y, rx: Math.min(4, F / 2), class: "lkm-bar" + (this._isFilterActive(p.filter) ? " is-active" : "") });
      if (p.color && (E.style.fill = p.color), p.filter && E.addEventListener("click", () => this._toggleDashFilter(p.filter)), d.appendChild(E), p.value > 0) {
        let P = z("text", { x: v + F / 2, y: T - 4, class: "lkm-bars-val", "text-anchor": "middle" });
        P.textContent = String(p.value), d.appendChild(P);
      }
      if (!i.thinLabels || u % 2 === 0) {
        let P = z("text", { x: v + F / 2, y: n - 5, class: "lkm-bars-lab", "text-anchor": "middle" });
        P.textContent = p.label, d.appendChild(P);
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
        n && this._dashFilters.some((a) => a.kind === n) && (this._dashFilters = this._dashFilters.filter((a) => a.kind !== n)), this._dashFilters = this._dashFilters.filter((a) => a.kind !== "all" && a.kind !== "kw"), this._dashFilters.push(e);
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
    let a = [];
    for (let [o, l] of i) {
      if (l.length === 1) {
        a.push(this._dashFilterLabel(l[0]));
        continue;
      }
      let r = t(o === "date" || o === "month" ? "\u521B\u5EFA\u4E8E " : o === "type" ? "\u7C7B\u578B\uFF1A" : "\u7B2C"), c = o === "depth" ? t(" \u5C42") : "";
      a.push(r + l.map((h) => h.value).join("\u3001") + c);
    }
    for (let o of n) a.push(this._dashFilterLabel(o));
    return a.join(" + ");
  }
  _dashFilterItems(e) {
    let s = [...this.notes.values()], i = this._depthMap();
    if (e.find((c) => c.kind === "kw")) {
      let c = this.app.vault.getAbstractFileByPath(ee(this.s.indexFolder)), h = new Set((c && c.children ? c.children : []).filter((d) => d instanceof Se && d.extension === "md").map((d) => d.path));
      s = s.filter((d) => h.has(d.file.path));
    }
    let a = e.filter((c) => c.kind !== "kw"), o = /* @__PURE__ */ new Set(["date", "month", "type", "depth"]), l = /* @__PURE__ */ new Map(), r = [];
    for (let c of a)
      o.has(c.kind) ? (l.has(c.kind) || l.set(c.kind, []), l.get(c.kind).push(c)) : r.push(c);
    for (let [c, h] of l)
      c === "date" ? s = s.filter((d) => h.some((p) => d.date === p.value)) : c === "month" ? s = s.filter((d) => h.some((p) => (d.date || "").slice(0, 7) === p.value)) : c === "type" ? s = s.filter((d) => h.some((p) => d.type === p.value)) : c === "depth" && (s = s.filter((d) => h.some((p) => String(i.get(d.file.path) || 0) === p.value)));
    for (let c of r)
      c.kind === "zk" ? s = s.filter((h) => h.zk) : c.kind === "done" ? s = s.filter((h) => h.status) : c.kind === "undone" ? s = s.filter((h) => !h.status) : c.kind === "orphan" ? s = s.filter((h) => !this.referenced.has(h.file.path)) : c.kind === "notype" ? s = s.filter((h) => !h.type) : c.kind === "nodate" ? s = s.filter((h) => !h.date) : c.kind === "todo" && (s = s.filter((h) => h.type === t("\u5F85\u529E") && !h.status));
    return s.map((c) => ({ title: c.title, created: c.date || "", type: c.type || "", file: c.file }));
  }
  _sortDashItems(e) {
    let s = this._dashSort || "date", i = e.slice();
    return s === "name" ? i.sort((n, a) => String(n.title).localeCompare(String(a.title), "zh")) : i.sort((n, a) => String(a.created || "").localeCompare(String(n.created || ""))), i;
  }
  _ds(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  _depthMap() {
    let e = /* @__PURE__ */ new Map(), s = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!s) return e;
    let i = Ve(this.app, this.notes, s);
    return (/* @__PURE__ */ b((function n(a, o) {
      a.note.file && !e.has(a.note.file.path) && e.set(a.note.file.path, o), a.children.forEach((l) => n(l, o + 1));
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
    let e = [...this.notes.values()], s = e.length, i = e.filter((w) => w.zk).length, n = e.filter((w) => w.status).length, a = e.filter((w) => w.type === t("\u5F85\u529E") && !w.status).length, o = e.filter((w) => !w.date).length, l = e.filter((w) => !this.referenced.has(w.file.path)).length, r = this.s.typeColors || {}, c = /* @__PURE__ */ new Map(), h = 0;
    for (let w of e)
      w.type ? c.set(w.type, (c.get(w.type) || 0) + 1) : h++;
    let d = Object.keys(r).filter((w) => c.has(w)).map((w) => ({ name: w, color: r[w], count: c.get(w) }));
    for (let [w, N] of c) r[w] || d.push({ name: w, color: "var(--text-faint)", count: N });
    let p = this._depthMap(), u = /* @__PURE__ */ new Map();
    for (let w of p.values()) w && u.set(w, (u.get(w) || 0) + 1);
    let y = u.size ? Math.max(...u.keys()) : 0, v = /* @__PURE__ */ new Date();
    v.setHours(0, 0, 0, 0);
    let F = [];
    for (let w = 11; w >= 0; w--) {
      let N = new Date(v.getFullYear(), v.getMonth() - w, 1);
      F.push({ key: N.getFullYear() + "-" + String(N.getMonth() + 1).padStart(2, "0"), count: 0 });
    }
    for (let w of e) {
      if (!w.date) continue;
      let N = F.find((_) => _.key === w.date.slice(0, 7));
      N && N.count++;
    }
    let T = 0, E = this.app.vault.getAbstractFileByPath(ee(this.s.indexFolder));
    E && E.children && (T = E.children.filter((w) => w instanceof Se && w.extension === "md").length);
    let P = /* @__PURE__ */ new Map();
    for (let w of e) w.date && P.set(w.date, (P.get(w.date) || 0) + 1);
    let k = e.filter((w) => w.zk).map((w) => {
      let N = Ve(this.app, this.notes, w), _ = 0, B = 0, Y = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ b((function j(K) {
        if (K.note.file) {
          if (Y.has(K.note.file.path)) return;
          Y.add(K.note.file.path);
        }
        _++, K.note.status && B++;
        for (let U of K.children) j(U);
      }), "walk"))(N), { path: w.file.path, title: w.title, total: _, done: B };
    }).sort((w, N) => N.total - w.total), L = /* @__PURE__ */ b((w) => ({ title: w.title, created: w.date || "", type: w.type || "", file: w.file }), "toItem"), m = e.filter((w) => w.date).sort((w, N) => String(N.date).localeCompare(String(w.date))).slice(0, 8).map(L), M = e.slice().sort((w, N) => (N.file.stat && N.file.stat.mtime || 0) - (w.file.stat && w.file.stat.mtime || 0)).slice(0, 6).map((w) => {
      let N = L(w);
      try {
        let _ = new Date(w.file.stat.mtime);
        N.mtime = String(_.getFullYear()).slice(2) + "-" + String(_.getMonth() + 1).padStart(2, "0") + "-" + String(_.getDate()).padStart(2, "0") + " " + String(_.getHours()).padStart(2, "0") + ":" + String(_.getMinutes()).padStart(2, "0");
      } catch {
      }
      return N;
    }), C = 0, S = 0;
    for (let w of e)
      for (let N of w.childLinks) {
        C++;
        let _ = this.app.metadataCache.getFirstLinkpathDest(N, w.file.path);
        (!_ || !this.notes.has(_.path)) && S++;
      }
    return { total: s, zk: i, done: n, todo: a, noDate: o, orphan: l, noType: h, byTypeOrder: d, depthCount: u, depthMax: y, monthly: F, kw: T, heat: P, branches: k, recent: m, modified: M, linkCount: C, deadLinks: S };
  }
};
b(yt, "LinkMindmapView");
var Ie = yt, vt = class extends Dt {
  constructor(e, s) {
    super(e, s), this.plugin = s;
  }
  display() {
    let { containerEl: e } = this;
    e.empty(), e.createEl("h2", { text: t("Link Mindmap \u8BBE\u7F6E") }), new R(e).setName(t("\u8BED\u8A00")).setDesc(t("\u754C\u9762\u8BED\u8A00\uFF08\u81EA\u52A8\u8DDF\u968F Obsidian \u8BBE\u7F6E\uFF09")).addDropdown((l) => {
      l.addOption("auto", t("\u81EA\u52A8") + " (Auto)"), l.addOption("zh", t("\u4E2D\u6587")), l.addOption("en", "English"), l.setValue(this.plugin.settings.language || "auto"), l.onChange(async (r) => {
        this.plugin.settings.language = r, await this.plugin.saveSettings(), this.plugin._initLang(), this.display();
      });
    }), new R(e).setName(t("\u7B14\u8BB0\u6587\u4EF6\u5939")).setDesc(t("\u5B58\u653E\u5361\u7247\u7B14\u8BB0\u7684\u76EE\u5F55")).addText((l) => l.setValue(this.plugin.settings.mainFolder).onChange(async (r) => {
      this.plugin.settings.mainFolder = r.trim(), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u5939")).setDesc(t("\u5B58\u653E\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u7684\u76EE\u5F55")).addText((l) => l.setValue(this.plugin.settings.indexFolder).onChange(async (r) => {
      this.plugin.settings.indexFolder = r.trim(), await this.plugin.saveSettings();
    })), new R(e).setName(t("\u6A21\u677F\u6587\u4EF6\u5939")).setDesc(t("\u6A21\u677F\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u65B0\u5EFA\u8282\u70B9\u65F6\u6A21\u677F\u4E0B\u62C9\u5217\u8868\u4ECE\u6B64\u6587\u4EF6\u5939\u8BFB\u53D6")).addText((l) => l.setValue(this.plugin.settings.templateFolder).onChange(async (r) => {
      this.plugin.settings.templateFolder = r.trim(), await this.plugin.saveSettings(), this.display();
    }));
    let s = (() => {
      let l = (this.plugin.settings.templateFolder || "").trim();
      if (!l) return [];
      let r = this.plugin.app.vault.getAbstractFileByPath(ee(l));
      return !r || !r.children ? [] : r.children.filter((c) => c instanceof Se && c.extension === "md");
    })();
    new R(e).setName(t("\u9ED8\u8BA4\u6A21\u677F")).setDesc(t("\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u6A21\u677F\uFF08\u53EF\u9009\uFF09")).addDropdown((l) => {
      l.addOption("", t("\u4E0D\u9009"));
      for (let r of s) l.addOption(r.path, r.basename);
      l.setValue(this.plugin.settings.templatePath || ""), l.onChange(async (r) => {
        this.plugin.settings.templatePath = r, await this.plugin.saveSettings();
      });
    }), new R(e).setName(t("\u5B50\u8282\u70B9\u94FE\u63A5\u5B57\u6BB5")).setDesc(t("\u7236\u7B14\u8BB0\u4E2D\u5B58\u653E\u5B50\u7B14\u8BB0\u94FE\u63A5\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 children\uFF09")).addText((l) => l.setValue(this.plugin.settings.linkField).onChange(async (r) => {
      this.plugin.settings.linkField = r.trim() || "children", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u7236\u8282\u70B9\u53CD\u5411\u94FE\u63A5\u5B57\u6BB5")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u5199\u5165\u5B50\u7B14\u8BB0\u7684\u7236\u94FE\u63A5\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 parent\uFF09")).addText((l) => l.setValue(this.plugin.settings.backField).onChange(async (r) => {
      this.plugin.settings.backField = r.trim() || "parent", await this.plugin.saveSettings();
    })), new R(e).setName(t("\u4E3B\u7B14\u8BB0\u6807\u8BB0\u5B57\u6BB5")).setDesc(t("\u6807\u8BB0\u5BFC\u56FE\u4E3B\u5165\u53E3\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 main\uFF09")).addText((l) => l.setValue(this.plugin.settings.zkField).onChange(async (r) => {
      this.plugin.settings.zkField = r.trim() || "main", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u5B8C\u6210\u72B6\u6001\u5B57\u6BB5")).setDesc(t("\u6807\u8BB0\u7B14\u8BB0\u662F\u5426\u5B8C\u6210\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 status\uFF09")).addText((l) => l.setValue(this.plugin.settings.statusField).onChange(async (r) => {
      this.plugin.settings.statusField = r.trim() || "status", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u7C7B\u578B\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u7C7B\u578B\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 type\uFF09")).addText((l) => l.setValue(this.plugin.settings.typeField).onChange(async (r) => {
      this.plugin.settings.typeField = r.trim() || "type", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u65E5\u671F\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u521B\u5EFA\u65E5\u671F\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 date\uFF09")).addText((l) => l.setValue(this.plugin.settings.dateField).onChange(async (r) => {
      this.plugin.settings.dateField = r.trim() || "date", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u6807\u9898\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u6807\u9898\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 title\uFF09\u3002frontmatter \u4E2D\u6709\u8BE5\u5B57\u6BB5\u65F6\u8282\u70B9\u663E\u793A\u5176\u503C\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u540D\uFF1B\u91CD\u547D\u540D\u65F6\u540C\u6B65\u66F4\u65B0\u8BE5\u5B57\u6BB5")).addText((l) => l.setValue(this.plugin.settings.titleField).onChange(async (r) => {
      this.plugin.settings.titleField = r.trim() || "title", await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u9ED8\u8BA4\u663E\u793A\u5C42\u6570")).setDesc(t("\u6253\u5F00\u65F6\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")).addText((l) => l.setValue(String(this.plugin.settings.defaultDepth)).onChange(async (r) => {
      this.plugin.settings.defaultDepth = Math.max(1, parseInt(r, 10) || 3), await this.plugin.saveSettings();
      for (let c of this.plugin.app.workspace.getLeavesOfType(ge))
        c.view instanceof Ie && (c.view.depth = this.plugin.settings.defaultDepth, c.view._expandedMem.clear());
      this.plugin.refreshViews();
    })), new R(e).setName(t("\u540D\u79F0\u6700\u5927\u5B57\u6570")).setDesc(t("\u8282\u70B9\u6807\u9898\u6700\u591A\u663E\u793A\u7684\u5B57\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7\uFF1B0 = \u663E\u793A\u5168\u90E8\u540D\u79F0")).addText((l) => l.setValue(String(this.plugin.settings.maxTitleLen)).onChange(async (r) => {
      this.plugin.settings.maxTitleLen = Math.max(0, parseInt(r, 10) || 0), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u6C34\u5E73\u95F4\u8DDD")).setDesc(t("\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09")).addText((l) => l.setValue(String(this.plugin.settings.gapX)).onChange(async (r) => {
      this.plugin.settings.gapX = Math.max(10, parseInt(r, 10) || 60), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u5782\u76F4\u95F4\u8DDD")).setDesc(t("\u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB")).addText((l) => l.setValue(String(this.plugin.settings.gapY)).onChange(async (r) => {
      this.plugin.settings.gapY = Math.max(0, parseInt(r, 10) || 8), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u8282\u70B9\u9AD8\u5EA6")).setDesc(t("\u8282\u70B9\u5361\u7247\u9AD8\u5EA6")).addText((l) => l.setValue(String(this.plugin.settings.nodeHeight)).onChange(async (r) => {
      this.plugin.settings.nodeHeight = Math.max(30, parseInt(r, 10) || 46), await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u65B0\u5EFA\u65F6\u5199\u5165\u53CD\u5411\u94FE\u63A5")).setDesc(t("\u521B\u5EFA\u5B50\u8282\u70B9\u65F6\uFF0C\u5728\u5B50\u7B14\u8BB0\u91CC\u5199\u5165\u6307\u5411\u7236\u7B14\u8BB0\u7684 parent \u5B57\u6BB5\uFF08\u7EAF\u6587\u672C\u6587\u4EF6\u540D\uFF0C\u975E wikilink\uFF0C\u5173\u7CFB\u56FE\u8C31\u4E0D\u663E\u793A\u53CC\u5411\u7BAD\u5934\uFF09")).addToggle((l) => l.setValue(this.plugin.settings.autoAddBackLink).onChange(async (r) => {
      this.plugin.settings.autoAddBackLink = r, await this.plugin.saveSettings();
    })), new R(e).setName(t("\u81EA\u52A8\u5B9A\u4F4D\u5F53\u524D\u7B14\u8BB0")).setDesc(t("\u6253\u5F00\u7B14\u8BB0\u65F6\uFF0C\u5BFC\u56FE\u81EA\u52A8\u5C55\u5F00\u5176\u6240\u5728\u5206\u652F\u3001\u9009\u4E2D\u5E76\u5C45\u4E2D\u8BE5\u8282\u70B9")).addToggle((l) => l.setValue(this.plugin.settings.autoLocate).onChange(async (r) => {
      this.plugin.settings.autoLocate = r, await this.plugin.saveSettings();
    })), new R(e).setName(t("\u663E\u793A\u521B\u5EFA\u65F6\u95F4")).setDesc(t("\u4E0E\u7C7B\u578B/\u5B50\u6570\u540C\u884C\u663E\u793A\u521B\u5EFA\u65E5\u671F\uFF08\u4F18\u5148\u53D6 frontmatter \u7684 date \u5B57\u6BB5\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF09")).addToggle((l) => l.setValue(this.plugin.settings.showCreated).onChange(async (r) => {
      this.plugin.settings.showCreated = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u663E\u793A\u7C7B\u578B")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A type \u6587\u672C")).addToggle((l) => l.setValue(this.plugin.settings.showType).onChange(async (r) => {
      this.plugin.settings.showType = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u663E\u793A\u5B50\u8282\u70B9\u6570")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A\u5B50\u8282\u70B9\u6570\u91CF")).addToggle((l) => l.setValue(this.plugin.settings.showChildCount).onChange(async (r) => {
      this.plugin.settings.showChildCount = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u663E\u793A\u6253\u5F00\u56FE\u6807")).setDesc(t("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \u270E \u6253\u5F00\u7B14\u8BB0\u6309\u94AE")).addToggle((l) => l.setValue(this.plugin.settings.showOpenIcon).onChange(async (r) => {
      this.plugin.settings.showOpenIcon = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u663E\u793A\u65B0\u589E\u56FE\u6807")).setDesc(t("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \uFF0B \u65B0\u589E\u5B50\u8282\u70B9\u6309\u94AE")).addToggle((l) => l.setValue(this.plugin.settings.showAddIcon).onChange(async (r) => {
      this.plugin.settings.showAddIcon = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u66F2\u7EBF\u8FDE\u63A5")).setDesc(t("\u8282\u70B9\u4E4B\u95F4\u7528\u66F2\u7EBF\u8FD8\u662F\u76F4\u7EBF")).addToggle((l) => l.setValue(this.plugin.settings.curve).onChange(async (r) => {
      this.plugin.settings.curve = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u5E03\u5C40\u65B9\u5411")).setDesc(t("\u6A2A\u5411\uFF1A\u4ECE\u5DE6\u5230\u53F3\u5C55\u5F00\u5B50\u8282\u70B9\uFF1B\u7EB5\u5411\uFF1A\u4ECE\u4E0A\u5230\u4E0B\u5C55\u5F00\u5B50\u8282\u70B9")).addDropdown((l) => {
      l.addOption("h", t("\u6A2A\u5411\uFF08\u5DE6\u2192\u53F3\uFF09")), l.addOption("v", t("\u7EB5\u5411\uFF08\u4E0A\u2192\u4E0B\uFF09")), l.setValue(this.plugin.settings.layoutDir || "h"), l.onChange(async (r) => {
        this.plugin.settings.layoutDir = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
      });
    }), new R(e).setName(t("\u4E3B\u8272")).setDesc(t("\u666E\u901A\u8282\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(this.plugin.settings.accent).onChange(async (r) => {
      this.plugin.settings.accent = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u4E3B\u7B14\u8BB0\u989C\u8272")).setDesc(t("main: true \u8282\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(this.plugin.settings.mainColor).onChange(async (r) => {
      this.plugin.settings.mainColor = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u91CD\u590D\u8282\u70B9\u989C\u8272")).setDesc(t("\u540C\u4E00\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\u65F6\uFF0C\u5176\u72B6\u6001\u5706\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(this.plugin.settings.multiColor).onChange(async (r) => {
      this.plugin.settings.multiColor = r, await this.plugin.saveSettings(), this.plugin.refreshViews();
    })), new R(e).setName(t("\u9009\u4E2D\u989C\u8272")).setDesc(t("\u5355\u51FB\u9009\u4E2D\u7684\u8282\u70B9\u9AD8\u4EAE\u989C\u8272")).addColorPicker((l) => l.setValue(this.plugin.settings.selectedColor).onChange(async (r) => {
      this.plugin.settings.selectedColor = r, await this.plugin.saveSettings(), this.plugin.applyThemeVars();
    })), new R(e).setName(t("\u5B8C\u6210\u8272")).setDesc(t("status \u52FE\u9009\u540E\u8282\u70B9\u7684\u6807\u8BB0\u8272\uFF08\u9ED8\u8BA4\u7EFF\u8272\uFF09")).addColorPicker((l) => l.setValue(this.plugin.settings.doneColor).onChange(async (r) => {
      this.plugin.settings.doneColor = r, await this.plugin.saveSettings(), this.plugin.applyThemeVars();
    }));
    let i = this.plugin.settings.typeColors || (this.plugin.settings.typeColors = {});
    new R(e).setName(t("\u9ED8\u8BA4\u7C7B\u578B")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u7C7B\u578B\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((l) => {
      l.addOption("", t("\u4E0D\u9009"));
      for (let r of Object.keys(i)) l.addOption(r, r);
      l.setValue(i[this.plugin.settings.defaultType] !== void 0 ? this.plugin.settings.defaultType : ""), l.onChange(async (r) => {
        this.plugin.settings.defaultType = r, await this.plugin.saveSettings();
      });
    });
    let n = "", a = /* @__PURE__ */ b(async () => {
      let l = n.trim();
      if (!l) {
        new g(t("\u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0"));
        return;
      }
      if (i[l] !== void 0) {
        new g(t("\u7C7B\u578B\u5DF2\u5B58\u5728\uFF1A") + l);
        return;
      }
      let r = ["#4ba3e5", "#e5534b", "#3fa66a", "#e5a44b", "#b07cff", "#8a6ae5", "#d978a8", "#5aa9a2"];
      i[l] = r[Object.keys(i).length % r.length], n = "", await this.plugin.saveSettings(), this.display();
    }, "addType");
    new R(e).setName(t("\u6DFB\u52A0\u7C7B\u578B")).setDesc(t("\u8F93\u5165\u540D\u79F0\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((l) => {
      l.setPlaceholder(t("\u7C7B\u578B\u540D\u79F0\uFF0C\u5982\uFF1A\u5F85\u529E")), l.onChange((r) => n = r), l.inputEl.addEventListener("keydown", (r) => {
        r.key === "Enter" && (r.preventDefault(), a());
      });
    }).addButton((l) => l.setButtonText(t("\u6DFB\u52A0")).setCta().onClick(a));
    let o = Object.keys(i);
    for (let l = 0; l < o.length; l++) {
      let r = o[l], c = l, h = this.plugin.settings.typeTemplates || (this.plugin.settings.typeTemplates = {}), d = this.plugin.app.vault.getAbstractFileByPath(ee(this.plugin.settings.templateFolder || "99-\u6A21\u677F")), p = [{ path: "", name: t("\u9ED8\u8BA4") }];
      if (d && d.children) for (let u of d.children) u instanceof Se && u.extension === "md" && p.push({ path: u.path, name: u.basename });
      new R(e).setName(r).setDesc(t("type \u4E3A\u300C") + r + t("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((u) => {
        u.setValue(String(i[r])), u.onChange(async (y) => {
          y && y !== i[r] && (i[r] = y, await this.plugin.saveSettings(), this.plugin.refreshViews());
        });
      }).addDropdown((u) => {
        for (let y of p) u.addOption(y.path, y.name);
        u.setValue(h[r] || ""), u.onChange(async (y) => {
          y ? h[r] = y : delete h[r], await this.plugin.saveSettings();
        });
      }).addButton((u) => u.setIcon("chevron-up").setTooltip(t("\u4E0A\u79FB")).setDisabled(c === 0).onClick(async () => {
        let y = Object.entries(i);
        [y[c - 1], y[c]] = [y[c], y[c - 1]], this.plugin.settings.typeColors = Object.fromEntries(y), await this.plugin.saveSettings(), this.display();
      })).addButton((u) => u.setIcon("chevron-down").setTooltip(t("\u4E0B\u79FB")).setDisabled(c === o.length - 1).onClick(async () => {
        let y = Object.entries(i);
        [y[c + 1], y[c]] = [y[c], y[c + 1]], this.plugin.settings.typeColors = Object.fromEntries(y), await this.plugin.saveSettings(), this.display();
      })).addButton((u) => u.setIcon("trash").setTooltip(t("\u5220\u9664\u7C7B\u578B\uFF1A") + r).onClick(async () => {
        delete i[r], this.plugin.settings.defaultType === r && (this.plugin.settings.defaultType = ""), await this.plugin.saveSettings(), this.display();
      }));
    }
    e.createEl("h3", { text: t("\u5BFC\u56FE\u9884\u8BBE") }), new R(e).setName(t("\u9884\u8BBE\u4FDD\u5B58\u4F4D\u7F6E")).setDesc(t("\u5BFC\u56FE\u9884\u8BBE\u7684\u4FDD\u5B58\u8DEF\u5F84\u3002\u7559\u7A7A\u5219\u4FDD\u5B58\u5728\u63D2\u4EF6\u6570\u636E\u4E2D\uFF08\u968F data.json \u540C\u6B65\uFF09\uFF1B\u586B\u5199 vault \u5185\u6587\u4EF6\u8DEF\u5F84\uFF08\u5982 link-mindmap-presets.json\uFF09\u5219\u4FDD\u5B58\u5230\u8BE5\u6587\u4EF6\uFF0C\u53EF\u968F vault \u540C\u6B65\u5230\u5176\u4ED6\u8BBE\u5907")).addText((l) => {
      l.setPlaceholder(t("\u7559\u7A7A = \u4FDD\u5B58\u5728\u63D2\u4EF6\u6570\u636E\u4E2D")), l.setValue(this.plugin.settings.savedViewLocation || ""), l.onChange(async (r) => {
        this.plugin.settings.savedViewLocation = r.trim(), await this.plugin.saveSettings(), r.trim() && await this.plugin._loadViewsFromFile();
      });
    }), e.createEl("h3", { text: t("\u914D\u7F6E\u5BFC\u5165/\u5BFC\u51FA") }), new R(e).setName(t("\u5BFC\u51FA\u914D\u7F6E")).setDesc(t("\u5C06\u5F53\u524D\u6240\u6709\u8BBE\u7F6E\u5BFC\u51FA\u4E3A JSON \u6587\u4EF6")).addButton((l) => l.setButtonText(t("\u5BFC\u51FA")).setCta().onClick(async () => {
      let r = JSON.stringify(this.plugin.settings, null, 2), h = "link-mindmap-config-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".json";
      try {
        await this.plugin.app.vault.create(h, r), new g(t("\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + h);
      } catch (d) {
        new g(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (d && d.message ? d.message : d));
      }
    })), new R(e).setName(t("\u5BFC\u5165\u914D\u7F6E")).setDesc(t("\u4ECE JSON \u6587\u4EF6\u5BFC\u5165\u8BBE\u7F6E\uFF08\u4F1A\u8986\u76D6\u5F53\u524D\u914D\u7F6E\uFF09")).addButton((l) => l.setButtonText(t("\u9009\u62E9\u6587\u4EF6")).onClick(() => {
      let r = document.createElement("input");
      r.type = "file", r.accept = ".json", r.onchange = async () => {
        let c = r.files[0];
        if (c)
          try {
            let h = await c.text(), d = JSON.parse(h);
            this.plugin.settings = Object.assign(this.plugin.settings, d), await this.plugin.saveSettings(), this.plugin.applyThemeVars(), this.plugin.refreshViews(), this.display(), new g(t("\u914D\u7F6E\u5DF2\u5BFC\u5165"));
          } catch (h) {
            new g(t("\u5BFC\u5165\u5931\u8D25\uFF1A") + (h && h.message ? h.message : h)), console.error("[link-mindmap] import config:", h);
          }
      }, r.click();
    })), new R(e).setName(t("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E")).setDesc(t("\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\uFF08\u4E0D\u4F1A\u5220\u9664\u7B14\u8BB0\uFF09")).addButton((l) => l.setButtonText(t("\u6062\u590D\u9ED8\u8BA4")).onClick(() => {
      new Re(this.app, t("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"), t("\u786E\u5B9A\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u5417\uFF1F"), async () => {
        this.plugin.settings = JSON.parse(JSON.stringify(rt)), await this.plugin.saveSettings(), this.plugin.applyThemeVars(), this.plugin.refreshViews(), this.display(), new g(t("\u5DF2\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"));
      }).open();
    }));
  }
};
b(vt, "LinkMindmapSettingTab");
var Rt = vt, _t = class extends Ft {
  async onload() {
    await this.loadSettings(), this._initLang(), await this._loadViewsFromFile(), this.registerView(ge, (e) => new Ie(e, this)), this.addRibbonIcon("git-merge", t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), () => this.activateView()), this.addCommand({ id: "open-link-mindmap", name: t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), callback: /* @__PURE__ */ b(() => this.activateView(), "callback") }), this.addCommand({ id: "open-timeline", name: t("\u6253\u5F00\u65F6\u95F4\u7EBF"), callback: /* @__PURE__ */ b(() => this.activateTimeline(), "callback") }), this.addCommand({ id: "normalize-frontmatter", name: t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), callback: /* @__PURE__ */ b(() => this._normalizeFrontmatter(), "callback") }), this.addCommand({ id: "normalize-frontmatter-current", name: t("\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), editorCallback: /* @__PURE__ */ b((e) => this._normalizeFrontmatter(e), "editorCallback") }), this.addCommand({ id: "check-links", name: t("\u68C0\u67E5\u94FE\u63A5\u5B8C\u6574\u6027"), callback: /* @__PURE__ */ b(() => this._checkLinks(), "callback") }), this.addSettingTab(new Rt(this.app, this)), this.applyThemeVars(), this.registerEvent(this.app.vault.on("create", (e) => this._onVaultChange(e))), this.registerEvent(this.app.vault.on("modify", (e) => this._onVaultChange(e))), this.registerEvent(this.app.vault.on("delete", (e) => this._onVaultChange(e))), this.registerEvent(this.app.vault.on("rename", (e, s) => this._onVaultChange(e, s))), this.registerEvent(this.app.metadataCache.on("changed", (e) => this._onVaultChange(e))), this.registerEvent(this.app.metadataCache.on("resolved", () => this._rebuildAllViews())), this.registerEvent(this.app.workspace.on("file-open", (e) => {
      for (let s of this.app.workspace.getLeavesOfType(ge))
        s.view instanceof Ie && s.view.locateFile(e);
    }));
  }
  onunload() {
    clearTimeout(this._refreshTimer), this.app.workspace.detachLeavesOfType(ge);
  }
  _onVaultChange(e, s) {
    let i = ee(this.settings.mainFolder || ""), n = /* @__PURE__ */ b((o) => !!o && (o === i || o.startsWith(i + "/")), "inFolder"), a = e && e.path;
    e && e.extension && e.extension !== "md" && !n(s) || !n(a) && !n(s) || (clearTimeout(this._refreshTimer), this._refreshTimer = setTimeout(() => this._rebuildAllViews(), 400));
  }
  _rebuildAllViews() {
    for (let e of this.app.workspace.getLeavesOfType(ge))
      e.view instanceof Ie && e.view.rebuild(!0);
  }
  async _checkLinks() {
    let e = this.settings, s = We(this.app, e), i = e.linkField || "children", n = e.backField || "parent", a = [], o = [];
    for (let d of s.map.values()) {
      for (let p of d.childLinks) {
        let u = this.app.metadataCache.getFirstLinkpathDest(p, d.file.path);
        (!u || !s.map.has(u.path)) && a.push({ file: d.file, link: p, field: i });
      }
      for (let p of d.parentLinks) {
        let u = this.app.metadataCache.getFirstLinkpathDest(p, d.file.path);
        (!u || !s.map.has(u.path)) && o.push({ file: d.file, link: p, field: n });
      }
    }
    let l = a.length + o.length;
    if (l === 0) {
      new g(t("\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5\u901A\u8FC7 \u2713"));
      return;
    }
    let r = new ke(this.app);
    r.titleEl.setText(t("\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5"));
    let c = r.contentEl.createDiv();
    if (c.createEl("p", { text: t("\u53D1\u73B0 ") + l + t(" \u4E2A\u5931\u6548\u94FE\u63A5\uFF1A"), cls: "lkm-modal-sub" }), a.length) {
      c.createEl("h4", { text: t("\u5931\u6548\u5B50\u94FE\u63A5\uFF08children \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09") });
      let d = c.createEl("ul", { cls: "lkm-check-list" });
      for (let p of a) {
        let u = d.createEl("li");
        u.createEl("span", { text: p.file.basename + " \u2192 ", cls: "lkm-check-from" }), u.createEl("span", { text: p.link, cls: "lkm-check-broken" });
      }
    }
    if (o.length) {
      c.createEl("h4", { text: t("\u5931\u6548\u7236\u94FE\u63A5\uFF08parent \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09") });
      let d = c.createEl("ul", { cls: "lkm-check-list" });
      for (let p of o) {
        let u = d.createEl("li");
        u.createEl("span", { text: p.file.basename + " \u2192 ", cls: "lkm-check-from" }), u.createEl("span", { text: p.link, cls: "lkm-check-broken" });
      }
    }
    let h = c.createDiv("lkm-modal-btns");
    h.createEl("button", { cls: "lkm-btn lkm-btn-action", text: t("\u4FEE\u590D\u5168\u90E8") }).onclick = async () => {
      r.close(), new Re(this.app, t("\u4FEE\u590D\u5931\u6548\u94FE\u63A5"), t("\u6B64\u64CD\u4F5C\u5C06\u4ECE\u7B14\u8BB0\u7684 children/parent \u5B57\u6BB5\u4E2D\u5220\u9664\u5931\u6548\u94FE\u63A5\uFF0C\u4E0D\u53EF\u64A4\u9500\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), () => this._doFixBrokenLinks(allBroken)).open();
    }, h.createEl("button", { cls: "lkm-btn", text: t("\u5173\u95ED") }).onclick = () => r.close(), r.open();
  }
  async _doFixBrokenLinks(e) {
    let s = 0, i = /* @__PURE__ */ new Map();
    for (let n of e)
      i.has(n.file.path) || i.set(n.file.path, { file: n.file, links: [] }), i.get(n.file.path).links.push(n.link);
    for (let { file: n, links: a } of i.values())
      try {
        let o = await this.app.vault.read(n), l = o.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
        if (!l) continue;
        let r = l[1], c = o.slice(l[0].length), h = !1;
        for (let d of a) {
          let p = d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), u = new RegExp(`^[ \\t]*- ["']?\\[\\[` + p + `(\\|[^\\]]*)?\\]\\]["']?[ \\t]*$`, "gm"), y = r.replace(u, "");
          if (y !== r) {
            r = y, h = !0;
            continue;
          }
          let v = new RegExp(`^[A-Za-z_][\\w-]*\\s*:\\s*["']?\\[\\[` + p + `(\\|[^\\]]*)?\\]\\]["']?[ \\t]*$`, "gm"), F = r.replace(v, "");
          F !== r && (r = F, h = !0);
        }
        h && (r = r.replace(/\n{3,}/g, `

`), await this.app.vault.modify(n, `---
` + r + `
---` + c), s++);
      } catch (o) {
        console.error("[link-mindmap] fix link:", o);
      }
    new g(t("\u5DF2\u4FEE\u590D ") + s + t(" \u4E2A\u6587\u4EF6")), this._rebuildAllViews();
  }
  async _normalizeFrontmatter(e) {
    let s = this.settings, i = s.typeField || "type", n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ b(async (c) => {
      if (!c) return null;
      if (n.has(c)) return n.get(c);
      let h = this.app.vault.getAbstractFileByPath(ee(c));
      if (!(h instanceof Se)) return null;
      let d = Je(await this.app.vault.read(h));
      return n.set(c, d.fields), d.fields;
    }, "getTemplateFields"), o = /* @__PURE__ */ b(async (c) => {
      let h = await this.app.vault.read(c), d = h.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
      if (!d) return { changed: !1, skipped: !1 };
      let p = d[1], u = h.slice(d[0].length), y = [], v = null;
      for (let _ of p.split(`
`)) {
        let B = _.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
        B ? (v && y.push(v), v = { key: B[1], lines: [_] }) : v && v.lines.push(_);
      }
      if (v && y.push(v), !y.length) return { changed: !1, skipped: !1 };
      let F = y.find((_) => _.key === i), T = F ? je((F.lines[0].match(/^.*:\s*(.*)$/) || [])[1] || "") : "", E = s.typeTemplates || {}, P = T && E[T] ? E[T] : (s.templatePath || "").trim(), k = await a(P);
      if (!k) return { changed: !1, skipped: !0 };
      let L = k.map(([_]) => _), m = /* @__PURE__ */ new Map(k), M = /* @__PURE__ */ new Map(y.map((_) => [_.key, _])), C = [];
      for (let _ of L)
        M.has(_) ? (C.push(M.get(_)), M.delete(_)) : C.push({ key: _, lines: [_ + ": " + (m.get(_) || "")] });
      for (let [, _] of M) C.push(_);
      let S = y.map((_) => _.key), w = C.map((_) => _.key), N = S.length !== w.length;
      if (!N) {
        for (let _ = 0; _ < S.length; _++)
          if (S[_] !== w[_]) {
            N = !0;
            break;
          }
      }
      if (N) {
        let _ = [];
        for (let Y of C) _.push(...Y.lines);
        let B = `---
` + _.join(`
`) + `
---
` + u;
        await this.app.vault.modify(c, B);
      }
      return { changed: N, skipped: !1 };
    }, "normalizeOne");
    if (e) {
      let c = this.app.workspace.getActiveFile();
      if (!c || c.extension !== "md") {
        new g(t("\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      let h = await o(c);
      h.skipped ? new g(t("\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7")) : h.changed ? new g(t("\u5DF2\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027 \u2713")) : new g(t("\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"));
      return;
    }
    let l = ee(s.mainFolder || ""), r = Xe(this.app, l);
    if (!r.length) {
      new g(t("\u672A\u627E\u5230\u7B14\u8BB0\u6587\u4EF6"));
      return;
    }
    new Re(this.app, t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027"), t("\u6B64\u64CD\u4F5C\u5C06\u6309\u6A21\u677F\u91CD\u6392\u6240\u6709\u7B14\u8BB0\u7684 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\u3002\u5DF2\u6709\u503C\u4E0D\u4F1A\u88AB\u4FEE\u6539\uFF0C\u4F46\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let c = 0, h = 0, d = [];
      for (let u of r) {
        let y = await o(u);
        y.skipped && h++, y.changed && (c++, d.length < 10 && d.push(u.basename));
      }
      let p;
      c ? (p = t("\u5DF2\u6574\u7406 ") + c + t(" \u4E2A\u7B14\u8BB0\u7684\u5C5E\u6027"), d.length < c ? p += t("\uFF08\u7B49\uFF09") : p += "\uFF1A" + d.join("\u3001"), h && (p += t("\uFF1B") + h + t(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7"))) : (p = t("\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"), h && (p += t("\uFF08") + h + t(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7\uFF09"))), new g(p, 15e3);
    }).open();
  }
  applyThemeVars() {
    let e = document.body;
    e.style.setProperty("--lkm-accent", this.settings.accent), e.style.setProperty("--lkm-main", this.settings.mainColor), e.style.setProperty("--lkm-multi", this.settings.multiColor), e.style.setProperty("--lkm-done", this.settings.doneColor), e.style.setProperty("--lkm-selected", this.settings.selectedColor);
  }
  async activateView() {
    let { workspace: e } = this.app, s = e.getLeavesOfType(ge)[0];
    s || (s = e.getLeaf(!0), await s.setViewState({ type: ge, active: !0 })), e.revealLeaf(s);
  }
  async activateTimeline() {
    await this.activateView();
    for (let e of this.app.workspace.getLeavesOfType(ge))
      e.view instanceof Ie && (e.view._mode = "dash", e.view._dashTab = "timeline", e.view.render());
  }
  refreshViews() {
    this.applyThemeVars();
    for (let e of this.app.workspace.getLeavesOfType(ge))
      e.view instanceof Ie && e.view.render();
  }
  async loadSettings() {
    this.settings = Object.assign({}, rt, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  _getSavedViews() {
    return this.settings.savedViews || [];
  }
  async _saveSavedViews(e) {
    let s = this.settings.savedViewLocation;
    if (s)
      try {
        let i = JSON.stringify(e, null, 2), n = this.app.vault.getAbstractFileByPath(s);
        n ? await this.app.vault.modify(n, i) : await this.app.vault.create(s, i);
      } catch (i) {
        console.error("[link-mindmap] save views to file:", i);
      }
    this.settings.savedViews = e, await this.saveSettings();
  }
  async _saveViewPreset(e, s) {
    let i = this._getSavedViews(), n = i.findIndex((o) => o.name === e), a = { name: e, state: s, time: Date.now() };
    n >= 0 ? i[n] = a : i.push(a), await this._saveSavedViews(i);
  }
  async _deleteSavedView(e) {
    let s = this._getSavedViews().filter((i) => i.name !== e);
    await this._saveSavedViews(s);
  }
  async _loadViewsFromFile() {
    let e = this.settings.savedViewLocation;
    if (e)
      try {
        let s = this.app.vault.getAbstractFileByPath(e);
        if (!s) return;
        let i = await this.app.vault.read(s), n = JSON.parse(i);
        Array.isArray(n) && (this.settings.savedViews = n, await this.saveSettings());
      } catch (s) {
        console.error("[link-mindmap] load views from file:", s);
      }
  }
  _initLang() {
    let e = this.settings.language || "auto";
    if (e === "auto") {
      let s = window.moment && window.moment.locale() || "en";
      at(s && s.startsWith("zh") ? "zh" : "en");
    } else
      at(e);
  }
};
b(_t, "LinkMindmapPlugin");
var Bt = _t;
module.exports = Bt;
