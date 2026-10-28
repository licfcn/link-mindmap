"use strict";
var jt = (M, e) => () => {
  try {
    return e || M((e = { exports: {} }).exports, e), e.exports;
  } catch (n) {
    throw e = 0, n;
  }
};

// ../i18n.js
var xt = jt((os, vt) => {
  "use strict";
  var _t = {
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
      \u6811\u5F62: "Tree",
      \u5206\u53C9: "Branch",
      \u6811\u5F62\u56FE: "Tree",
      \u5206\u53C9\u56FE: "Branch",
      \u5BFC\u56FE\u6A21\u5F0F: "Map mode",
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
      \u63CF\u8FF0: "Description",
      \u63CF\u8FF0\u5B57\u6BB5: "Description Field",
      \u663E\u793A\u63CF\u8FF0: "Show Description",
      \u683C\u5F0F: "Format",
      \u9ED8\u8BA4\u7B14\u8BB0\u683C\u5F0F: "Default Note Format",
      "\u8F6C\u4E3A excalidraw": "Convert to Excalidraw",
      "\u8F6C\u6362\u5F53\u524D\u7B14\u8BB0\u4E3A excalidraw": "Convert current note to Excalidraw",
      "\u8F6C\u6362\u540E\u300C": 'After conversion, "',
      "\u300D\u7684\u6B63\u6587\u5185\u5BB9\u5C06\u4E22\u5931\uFF08\u4EC5\u4FDD\u7559 frontmatter \u5C5E\u6027\uFF09\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F": `"'s body content will be lost (only frontmatter preserved), continue?`,
      "\u8BE5\u6587\u4EF6\u5DF2\u662F excalidraw \u683C\u5F0F": "This file is already excalidraw format",
      "\u5DF2\u8F6C\u6362\u300C": 'Converted "',
      "\u300D\u4E3A excalidraw": '" to excalidraw',
      "\u8F6C\u6362\u5931\u8D25\uFF1A": "Conversion failed: ",
      \u76EE\u6807\u6587\u4EF6\u5DF2\u5B58\u5728: "Target file already exists",
      "\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7 md \u7B14\u8BB0": "Please open a markdown note first",
      \u6DFB\u52A0\u5DF2\u6709\u7B14\u8BB0: "Link Existing Note",
      "\u9009\u62E9\u8981\u5173\u8054\u7684\u7B14\u8BB0\u2026": "Select note to link\u2026",
      \u5DF2\u5173\u8054\u5230\u8BE5\u7B14\u8BB0: "Already linked to this note",
      \u6CA1\u6709\u53EF\u7528\u7684\u7B14\u8BB0: "No available notes",
      "\u4E0D\u80FD\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF": "Cannot link: would form a cycle",
      "\u5DF2\u5173\u8054\uFF1A": "Linked: ",
      "\u5173\u8054\u5931\u8D25\uFF1A": "Link failed: ",
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
      "\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09\uFF1B\u5206\u652F\u56FE\u4E2D\u4E3A\u5C42\u7EA7\u95F4\u8DDD": "Horizontal distance between parent and child; layer gap in branch mode",
      \u5782\u76F4\u95F4\u8DDD: "Vertical gap",
      \u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB: "Vertical distance between siblings",
      "\u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB\uFF1B\u5206\u652F\u56FE\u4E2D\u4E3A\u6CF3\u9053\u95F4\u8DDD": "Vertical distance between siblings; swim-lane gap in branch mode",
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
      \u663E\u793A\u91CD\u590D\u8282\u70B9\u865A\u7EBF: "Show duplicate dashed line",
      \u91CD\u590D\u8282\u70B9\u4E0E\u539F\u59CB\u8282\u70B9\u4E4B\u95F4\u7528\u865A\u7EBF\u8FDE\u63A5: "Dashed line connecting duplicate nodes to their original",
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
      "\u5207\u6362\u5BFC\u56FE\u6A21\u5F0F\uFF08\u6811\u5F62\u56FE/\u5206\u53C9\u56FE\uFF09": "Toggle map mode (tree/branch)",
      "\u6811\u5F62\u56FE\uFF1A\u5E38\u89C4\u6811\u5F62\u5E03\u5C40\uFF1B\u5206\u53C9\u56FE\uFF1A\u6A2A\u5411\u8F68\u9053\uFF1BGit \u5206\u652F\u56FE\uFF1A\u6CF3\u9053\u5E03\u5C40\uFF0C\u5B9E\u7EBF\u7236\u5B50+\u865A\u7EBF\u8DF3\u7EBF+\u65F6\u95F4\u8F74\uFF0C\u53EF\u7EB5\u6A2A\u5207\u6362": "Tree: standard tree; Branch: horizontal tracks; Git branch: swim-lane, solid parent-child + dashed jumps + time axis, toggle H/V",
      "\u6811\u5F62\u56FE\uFF1A\u5E38\u89C4\u6811\u5F62\u5E03\u5C40\uFF1B\u5206\u53C9\u56FE\uFF1A\u6A2A\u5411\u8F68\u9053\uFF1B\u5206\u652F\u56FE\uFF1A\u6CF3\u9053\u5E03\u5C40+\u8DF3\u7EBF+\u65F6\u95F4\u8F74\uFF1B\u94FE\u8DEF\u56FE\uFF1A\u6D41\u7A0B\u56FE\u98CE\u683C\u8282\u70B9+\u5144\u5F1F\u4E32\u8054+\u4EA4\u53C9\u5F15\u7528\u8DF3\u7EBF\uFF1B\u7F51\u7EDC\u56FE\uFF1A\u7269\u7406\u6A21\u62DF\u81EA\u52A8\u5E03\u5C40\uFF0C\u8282\u70B9\u591A\u65F6\u6E05\u6670\u5C55\u793A\u5173\u7CFB\u7F51\u7EDC\uFF0C\u53EF\u7EB5\u6A2A\u5207\u6362": "Tree: standard tree; Branch: horizontal tracks; Git branch: swim-lane + jumps + axis; Link: flowchart nodes + sibling chain + cross-ref jumps; Network: physics simulation auto-layout, clear network view for many nodes, toggle H/V",
      \u94FE\u8DEF\u56FE: "Link",
      \u5206\u652F\u56FE: "Git branch",
      \u7F51\u7EDC\u56FE: "Network",
      "\u5FEB\u901F\u5207\u6362\u6811\u5F62\u56FE/\u5206\u53C9\u56FE/\u5206\u652F\u56FE/\u94FE\u8DEF\u56FE/\u7F51\u7EDC\u56FE": "Quick switch: Tree / Branch / Git branch / Link / Network",
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
      "\u5C42 | ": " layer | ",
      \u4FEE\u6539\u63CF\u8FF0: "Edit description",
      "\u4FDD\u5B58\u5931\u8D25\uFF1A": "Save failed: ",
      "\u2713 \u63CF\u8FF0": "\u2713 Desc",
      \u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u7684\u6587\u4EF6\u683C\u5F0F: "Default file format for new nodes",
      "\u7B14\u8BB0\u63CF\u8FF0\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 description\uFF09": "Property name for note description (default: description)",
      "\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A description \u6587\u672C\uFF08\u540D\u79F0\u4E0B\u65B9\u5355\u72EC\u4E00\u884C\uFF09": "Show description text on node card (separate line below title)",
      "\u8282\u70B9\u5361\u7247\u9AD8\u5EA6\uFF080 = \u81EA\u9002\u5E94\uFF0C\u6309\u5185\u5BB9\u81EA\u52A8\u8C03\u6574\uFF09": "Node card height (0 = auto-fit by content)"
    }
  }, rt = "zh";
  function Yt(M) {
    rt = M || "zh";
  }
  function Kt() {
    return rt;
  }
  function Gt(M, e) {
    let n = _t[rt] && _t[rt][M] || M;
    if (e) for (let i in e) n = n.split("{" + i + "}").join(e[i]);
    return n;
  }
  vt.exports = { t: Gt, setLang: Yt, getLang: Kt };
});

// ../src.js
var T = (M, e) => M, Wt = require("obsidian"), {
  Plugin: Xt,
  ItemView: Ut,
  Notice: b,
  Modal: $e,
  Setting: ee,
  PluginSettingTab: qt,
  TFile: Xe,
  TFolder: ls,
  normalizePath: be,
  FuzzySuggestModal: Tt,
  setIcon: bt,
  Menu: qe,
  MarkdownRenderer: Jt,
  Component: Zt
} = Wt, { t, setLang: Ct } = xt(), Ie = "link-mindmap-view", Qt = "http://www.w3.org/2000/svg", Ft = {
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
  descField: "description",
  dateField: "date",
  titleField: "title",
  defaultDepth: 3,
  nodeHeight: 0,
  gapX: 60,
  gapY: 8,
  accent: "#6c8cff",
  mainColor: "#f2a65a",
  multiColor: "#ec4899",
  showCreated: !0,
  showType: !0,
  showDesc: !1,
  showChildCount: !0,
  showWordCount: !1,
  showOpenIcon: !1,
  showAddIcon: !0,
  autoLocate: !0,
  autoAddBackLink: !0,
  selectedColor: "#e5534b",
  maxTitleLen: 0,
  curve: !0,
  showDupLine: !0,
  layoutDir: "h",
  layoutMode: "tree",
  defaultType: "",
  defaultStatus: "",
  defaultNoteFormat: "md",
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
function Me(M) {
  return M ? t(M) : "";
}
T(Me, "statusLabel");
function De(M) {
  return M ? t(M) : "";
}
T(De, "typeLabel");
function He(M, e) {
  return e && (M.statusColors || {})[e] || null;
}
T(He, "statusColorOf");
function pt(M) {
  if (M == null) return "";
  if (M === !0 || String(M) === "true") return "\u5DF2\u5B8C\u6210";
  if (M === !1 || String(M) === "false" || String(M).trim() === "") return "";
  let e = String(M).trim();
  return { todo: "\u5F85\u529E", doing: "\u8FDB\u884C\u4E2D", done: "\u5DF2\u5B8C\u6210", archived: "\u5DF2\u5F52\u6863", snoozed: "\u5DF2\u6401\u7F6E" }[e] || e;
}
T(pt, "normalizeStatus");
function je(M) {
  return M == null ? [] : Array.isArray(M) ? M.slice() : [M];
}
T(je, "toArr");
function Le(M) {
  return String(M ?? "").replace(/^\[\[/, "").replace(/\]\]$/, "").split("|")[0].split("#")[0].split("^")[0].trim();
}
T(Le, "cleanLink");
function gt(M) {
  let e = [], n = /* @__PURE__ */ T((i) => {
    if (i == null) return;
    let a = String(i), s = /\[\[([^\[\]]+?)\]\]/g, o, c = !1;
    for (; (o = s.exec(a)) !== null; )
      c = !0, e.push(Le(o[1]));
    if (!c) {
      let p = Le(a.replace(/^["']+/, "").replace(/["']+$/, ""));
      p && e.push(p);
    }
  }, "push");
  return Array.isArray(M) ? M.forEach(n) : n(M), e;
}
T(gt, "extractLinks");
function we(M, e) {
  return M = String(M ?? ""), e > 0 && M.length > e ? M.slice(0, e - 1) + "\u2026" : M;
}
T(we, "truncate");
function Mt(M, e) {
  let n = 0;
  for (let i of String(M ?? ""))
    n += /[一-鿿　-〿＀-￯]/.test(i) ? e : e * 0.55;
  return n;
}
T(Mt, "estWidth");
var ct = null, dt = /* @__PURE__ */ new Map();
function Be(M, e, n) {
  let i = M + "|" + e + "|" + (n ? 1 : 0), a = dt.get(i);
  if (a !== void 0) return a;
  let s;
  try {
    ct || (ct = document.createElement("canvas").getContext("2d")), ct.font = (n ? "600 " : "") + e + 'px Inter, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif', s = ct.measureText(String(M ?? "")).width;
  } catch {
    s = Mt(M, e);
  }
  return dt.size > 2e3 && dt.clear(), dt.set(i, s), s;
}
T(Be, "measureTextWidth");
function Ge(M) {
  return String(M).replace(/[\\/:*?"<>|#^\[\]]/g, "-").trim() || t("\u672A\u547D\u540D");
}
T(Ge, "safeFileName");
function wt(M) {
  let e = String(M ?? "").replace(/^﻿/, "").replace(/\r\n/g, `
`).replace(/^\n+/, ""), n = e.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!n) return { fields: [], body: e };
  let i = [];
  for (let a of n[1].split(`
`)) {
    let s = a.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    s && i.push([s[1], s[2].trim()]);
  }
  return { fields: i, body: e.slice(n[0].length) };
}
T(wt, "splitFrontmatter");
function lt(M) {
  return M = String(M ?? "").trim(), M.length >= 2 && (M.charAt(0) === '"' && M.charAt(M.length - 1) === '"' || M.charAt(0) === "'" && M.charAt(M.length - 1) === "'") ? M.slice(1, -1) : M;
}
T(lt, "stripYamlQuotes");
function V(M, e) {
  let n = document.createElementNS(Qt, M);
  if (e) for (let i in e) n.setAttribute(i, e[i]);
  return n;
}
T(V, "svgEl");
function Dt(M, e, n) {
  let i = M && (M[n || "date"] != null ? M[n || "date"] : "");
  if (i) {
    let a = String(i).match(/(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/);
    if (a) return a[1] + "-" + String(a[2]).padStart(2, "0") + "-" + String(a[3]).padStart(2, "0");
  }
  try {
    let a = e.stat;
    if (a && a.ctime) {
      let s = new Date(a.ctime);
      return s.getFullYear() + "-" + String(s.getMonth() + 1).padStart(2, "0") + "-" + String(s.getDate()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
T(Dt, "createdOf");
function Et(M) {
  try {
    let e = M.stat;
    if (e && e.ctime) {
      let n = new Date(e.ctime);
      return n.getFullYear() + "-" + String(n.getMonth() + 1).padStart(2, "0") + "-" + String(n.getDate()).padStart(2, "0") + " " + String(n.getHours()).padStart(2, "0") + ":" + String(n.getMinutes()).padStart(2, "0") + ":" + String(n.getSeconds()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
T(Et, "fileCtime");
function Je(M, e) {
  let n = be(e || ""), i = [];
  for (let a of M.vault.getFiles())
    a.extension === "md" && (n && a.path !== n && !a.path.startsWith(n + "/") || i.push(a));
  return i;
}
T(Je, "notesInFolder");
function Lt(M, e) {
  let n = Je(M, e.mainFolder);
  if (!n.length) return !0;
  for (let i of n)
    if ((M.metadataCache.getFileCache(i) || {}).frontmatter) return !0;
  return !1;
}
T(Lt, "metadataReady");
function ut(M, e) {
  let n = e.linkField || "children", i = e.backField || "parent", a = e.zkField || "main", s = e.statusField || "status", o = e.typeField || "type", c = e.descField || "description", p = e.dateField || "date", d = e.titleField || "title", l = /* @__PURE__ */ new Map();
  for (let h of Je(M, e.mainFolder)) {
    let g = (M.metadataCache.getFileCache(h) || {}).frontmatter || {};
    l.set(h.path, {
      file: h,
      title: g[d] ? String(g[d]) : h.basename.replace(/\.excalidraw$/, ""),
      zk: g[a] === !0 || String(g[a]) === "true",
      status: pt(g[s]),
      type: g[o] != null ? String(g[o]).trim() : "",
      desc: g[c] != null ? String(g[c]).trim() : "",
      date: Dt(g, h, p),
      ctime: Et(h),
      childLinks: gt(g[n]),
      parentLinks: gt(g[i])
    });
  }
  let r = /* @__PURE__ */ new Set();
  for (let h of l.values())
    for (let g of h.childLinks) {
      let w = M.metadataCache.getFirstLinkpathDest(g, h.file.path);
      w && l.has(w.path) && r.add(w.path);
    }
  return { map: l, referenced: r };
}
T(ut, "collectNotes");
function ft(M, e, n, i) {
  let a = i === "child" ? n.childLinks : n.parentLinks, s = [];
  for (let o of a) {
    let c = M.metadataCache.getFirstLinkpathDest(o, n.file.path);
    c && e.has(c.path) && s.push(e.get(c.path));
  }
  return s;
}
T(ft, "resolveLinks");
function it(M, e, n) {
  let i = /* @__PURE__ */ new Set([n.file.path]), a = /* @__PURE__ */ T((c, p) => {
    let d = {
      note: c,
      parent: p || null,
      children: [],
      expanded: !1,
      isAlias: !1,
      key: (p ? p.key + ">" : ">") + c.file.path
    };
    for (let l of c.childLinks) {
      let r = M.metadataCache.getFirstLinkpathDest(l, c.file.path);
      if (!r) continue;
      let h = e.get(r.path);
      !h || i.has(r.path) || (i.add(r.path), d.children.push(a(h, d)), i.delete(r.path));
    }
    return d;
  }, "mk"), s = a(n, null), o = /* @__PURE__ */ new Map();
  (/* @__PURE__ */ T((function c(p) {
    if (p.note.file) {
      let d = p.note.file.path;
      o.has(d) || o.set(d, []), o.get(d).push(p);
    }
    p.children.forEach(c);
  }), "collect"))(s);
  for (let [c, p] of o) {
    if (p.length < 2) continue;
    let d = e.get(c), l = new Set(d ? ft(M, e, d, "parent").map((h) => h.file.path) : []), r = -1;
    for (let h = 0; h < p.length; h++) {
      let g = p[h].parent && p[h].parent.note.file ? p[h].parent.note.file.path : null;
      if (g && l.has(g)) {
        r = h;
        break;
      }
    }
    r < 0 && (r = 0), p.forEach((h, g) => {
      h.isAlias = g !== r;
    });
  }
  return s;
}
T(it, "buildTree");
function ht(M, e) {
  let n = [[M, 1]];
  for (; n.length; ) {
    let [i, a] = n.pop();
    i.expanded = a < e && i.children.length > 0;
    for (let s of i.children) n.push([s, a + 1]);
  }
}
T(ht, "applyDepth");
function Pt(M, e, n) {
  let i = [], a = "";
  for (let s of String(M ?? "")) {
    let o = a + s;
    a && Be(o, n, !1) > e ? (i.push(a), a = s) : a = o;
  }
  return a && i.push(a), i;
}
T(Pt, "wrapLines");
function kt(M, e, n) {
  if (Be(M, n, !1) <= e) return M;
  let i = String(M);
  for (; i.length > 1 && Be(i + "\u2026", n, !1) > e; ) i = i.slice(0, -1);
  return i + "\u2026";
}
T(kt, "truncateByWidth");
function at(M, e) {
  let n = [], i = [], a = e.layoutMode !== "branch" && e.layoutDir === "v";
  if ((/* @__PURE__ */ T((function s(o) {
    {
      let p = (1 + (e.showOpenIcon !== !1 ? 1 : 0) + (e.showAddIcon !== !1 ? 1 : 0)) * 24 + 12, d = o.note.title, l = e.maxTitleLen > 0 ? we(d, e.maxTitleLen) : d, r = Be(l, 13, !0), h = !o.note.file, g = e.showCreated && !h && o.note.date ? o.note.date : "", w = e.showType && !h && o.note.type ? De(o.note.type) : "", f = e.showChildCount && !h && o.children.length ? t("\u5B50 ") + o.children.length : "", E = e.showWordCount && !h && o.note.file ? t("\u5B57 ") + Math.max(1, Math.round((o.note.file.stat.size || 0) / 3)) : "", y = [w, f, E, g].filter(Boolean).join(" \xB7 "), _ = !!y, F = e.showDesc && !h && o.note.desc ? o.note.desc : "";
      if (e.nodeHeight === 0) {
        let m = Be(y, 11, !1);
        o._w = Math.max(80, 16 + Math.max(r, m) + p + 4), o._descLines = F ? Pt(F, o._w - 16 - p - 4, 11) : [], o._autoH = 26 + o._descLines.length * 15 + (_ ? 15 : 0) + 4;
      } else {
        let m = F ? kt(F, 140, 11) : "", D = Math.max(Be(y, 11, !1), Be(m, 11, !1));
        o._w = Math.max(80, 16 + Math.max(r, D) + p + 4), o._descLines = null, o._autoH = e.nodeHeight;
      }
      o._shown = l;
    }
    let c = o.expanded ? o.children : [];
    if (!c.length) {
      o._h = o._autoH, a && (o._subW = o._w);
      return;
    }
    if (a) {
      let p = 0;
      c.forEach((d, l) => {
        s(d), p += (d._subW || d._w) + (l ? e.gapY : 0);
      }), o._h = o._autoH, o._subW = Math.max(o._w, p);
    } else {
      let p = 0;
      c.forEach((d, l) => {
        s(d), p += d._h + (l ? e.gapY : 0);
      }), o._h = Math.max(o._autoH, p);
    }
  }), "measure"))(M), e.layoutMode === "git") {
    let s = e.layoutDir === "v";
    (/* @__PURE__ */ T((function y(_) {
      let F = _.expanded ? _.children : [];
      if (!F.length)
        return _._gw = 1, 1;
      if (F.length === 1)
        return _._gw = y(F[0]), _._gw;
      _._gw = 0;
      for (let m of F) _._gw += y(m);
      return _._gw;
    }), "gw"))(M);
    let o = 0;
    (/* @__PURE__ */ T((function y(_, F, m) {
      _._gdepth = m, m > o && (o = m), n.push(_);
      let D = _.expanded ? _.children : [];
      if (!D.length) {
        _._glane = F;
        return;
      }
      if (D.length === 1)
        y(D[0], F, m + 1), _._glane = D[0]._glane, i.push([_, D[0]]);
      else {
        y(D[0], F, m + 1), _._glane = D[0]._glane, i.push([_, D[0]]);
        let W = F + D[0]._gw;
        for (let C = 1; C < D.length; C++)
          y(D[C], W, m + 1), i.push([_, D[C]]), W += D[C]._gw;
      }
    }), "assign"))(M, 0, 0);
    let c = 0, p = 0, d = 1 / 0, l = -1 / 0;
    for (let y of n) {
      let _ = y._shown || y.note.title, F = Be(_, 13, !0);
      y._w = Math.max(90, F + 36), y._autoH = 28, c = Math.max(c, y._w), p = Math.max(p, y._autoH), d = Math.min(d, y._glane), l = Math.max(l, y._glane);
    }
    let r = Math.max(40, e.gapX), h = Math.max(1, e.gapY), g = [], w = 0;
    for (let y = d; y <= l; y++) {
      let _ = 0;
      for (let F of n) F._glane === y && (_ = Math.max(_, s ? F._w : F._autoH + 20));
      _ += h, g[y] = w + _ / 2, w += _;
    }
    let f = w / Math.max(1, l - d + 1), E = null;
    if (!s) {
      E = [];
      let y = 0;
      for (let _ = 0; _ <= o; _++) {
        let F = 0;
        for (let m of n) m._gdepth === _ && (F = Math.max(F, m._w));
        F += r, E[_] = y + F / 2, y += F;
      }
    }
    for (let y of n)
      y._h = y._autoH, s ? (y._x = g[y._glane] - y._w / 2, y._y = y._gdepth * r) : (y._x = E[y._gdepth] - y._w / 2, y._y = g[y._glane]);
    return { nodes: n, edges: i, git: !0, gvert: s, maxDepth: o, laneMin: d, laneMax: l, laneW: f, depthH: r, depthOffsets: E };
  }
  if (e.layoutMode === "graph") {
    let s = e.layoutDir === "v";
    (/* @__PURE__ */ T((function d(l) {
      let r = l._shown || l.note.title, h = Be(r, 13, !0);
      l._w = Math.max(90, h + 36), l._autoH = 28, l._h = l._autoH, n.push(l);
      let g = l.expanded ? l.children : [];
      for (let w of g)
        i.push([l, w]), d(w);
    }), "dfsMeasure"))(M);
    let o = Math.max(1, e.gapY), c = Math.max(50, e.gapX), p = 0;
    (/* @__PURE__ */ T((function d(l, r, h, g) {
      g || (l._grow = r, l._cx = h);
      let w = l.expanded ? l.children : [];
      if (!w.length)
        return r > p && (p = r), r;
      let f = g ? r : r + 1, E = h;
      for (let _ of w)
        _._grow = f, _._cx = E, E += _._w + o;
      let y = f;
      for (let _ = w.length - 1; _ >= 0; _--) {
        let F = w[_];
        (F.expanded ? F.children : []).length && (y = d(F, y + 1, F._cx, !0));
      }
      return y > p && (p = y), y;
    }), "layout"))(M, 0, 0, !1);
    for (let d of n)
      s ? (d._x = d._grow * c - d._w / 2, d._y = d._cx) : (d._x = d._cx - d._w / 2, d._y = d._grow * c);
    return { nodes: n, edges: i, graph: !0, gvert: s, maxDepth: p };
  }
  if (e.layoutMode === "force") {
    let s = e.layoutDir === "v";
    (/* @__PURE__ */ T((function m(D) {
      let W = D._shown || D.note.title, C = Be(W, 13, !0);
      D._w = Math.max(90, C + 36), D._autoH = 28, D._h = D._autoH, n.push(D);
      let A = D.expanded ? D.children : [];
      for (let x of A)
        i.push([D, x]), m(x);
    }), "dfsCollect"))(M);
    let o = /* @__PURE__ */ new Map();
    for (let m of n) o.set(m, 0);
    for (let [m, D] of i)
      o.set(m, (o.get(m) || 0) + 1), o.set(D, (o.get(D) || 0) + 1);
    let c = n.length, p = /* @__PURE__ */ new Map();
    for (let m = 0; m < c; m++) p.set(n[m], m);
    let d = Math.max(80, e.gapX * 1.5), l = Math.min(500, 200 + c * 2);
    for (let m = 0; m < c; m++) {
      let D = m / c * 2 * Math.PI, W = Math.min(400, d * 1.5);
      n[m]._fx = Math.cos(D) * W + (Math.random() - 0.5) * 30, n[m]._fy = Math.sin(D) * W + (Math.random() - 0.5) * 30;
    }
    let r = d * 0.5, h = r / l;
    for (let m = 0; m < l; m++) {
      let D = new Float64Array(c), W = new Float64Array(c);
      for (let C = 0; C < c; C++)
        for (let A = C + 1; A < c; A++) {
          let x = n[C]._fx - n[A]._fx, Y = n[C]._fy - n[A]._fy, le = x * x + Y * Y;
          le < 0.01 && (le = 0.01, x = 0.1, Y = 0.1);
          let O = Math.sqrt(le), Z = d * d / le, v = x / O * Z, U = Y / O * Z;
          D[C] += v, W[C] += U, D[A] -= v, W[A] -= U;
        }
      for (let [C, A] of i) {
        let x = p.get(C), Y = p.get(A);
        if (x == null || Y == null) continue;
        let le = n[Y]._fx - n[x]._fx, O = n[Y]._fy - n[x]._fy, Z = Math.sqrt(le * le + O * O) || 0.01, v = Z / d, U = le / Z * v, ne = O / Z * v;
        D[x] += U, W[x] += ne, D[Y] -= U, W[Y] -= ne;
      }
      for (let C = 0; C < c; C++)
        D[C] -= n[C]._fx * 5e-3, W[C] -= n[C]._fy * 5e-3;
      for (let C = 0; C < c; C++) {
        let A = Math.sqrt(D[C] * D[C] + W[C] * W[C]);
        if (A > 0) {
          let x = Math.min(A, r) / A;
          n[C]._fx += D[C] * x, n[C]._fy += W[C] * x;
        }
      }
      r -= h;
    }
    let g = 1 / 0, w = 1 / 0, f = -1 / 0, E = -1 / 0;
    for (let m of n)
      m._fx < g && (g = m._fx), m._fy < w && (w = m._fy), m._fx > f && (f = m._fx), m._fy > E && (E = m._fy);
    let y = 40;
    for (let m of n)
      m._x = m._fx - g + y - m._w / 2, m._y = m._fy - w + y;
    let _ = f - g + y * 2, F = E - w + y * 2;
    return { nodes: n, edges: i, force: !0, fvert: s, degree: o, fw: _, fh: F, maxDepth: 0, fk: d };
  }
  return (/* @__PURE__ */ T((function s(o, c, p) {
    o._x = c, o._y = p + o._h / 2, n.push(o);
    let d = o.expanded ? o.children : [];
    if (a) {
      let l = 0;
      d.forEach((g, w) => {
        l += (g._subW || g._w) + (w ? e.gapY : 0);
      });
      let r = c + o._w / 2 - l / 2, h = p + o._h + e.gapX;
      for (let g of d) {
        let w = g._subW || g._w;
        s(g, r + (w - g._w) / 2, h), i.push([o, g]), r += w + e.gapY;
      }
    } else {
      let l = p;
      for (let r of d)
        s(r, c + o._w + e.gapX, l), i.push([o, r]), l += r._h + e.gapY;
    }
  }), "place"))(M, 0, 0), { nodes: n, edges: i };
}
T(at, "layoutTree");
function ot(M) {
  return M.extension === "excalidraw" ? M.basename + ".excalidraw" : M.basename;
}
T(ot, "linkNameOf");
async function et(M, e, n, i) {
  await M.fileManager.processFrontMatter(e, (a) => {
    let s = je(a[n]);
    s.some((c) => Le(c) === i) || s.push("[[" + i + "]]"), a[n] = s;
  });
}
T(et, "addLink");
async function Ve(M, e, n, i) {
  let a = !1;
  return await M.fileManager.processFrontMatter(e, (s) => {
    let o = je(s[n]), c = o.filter((p) => {
      let d = M.metadataCache.getFirstLinkpathDest(Le(p), e.path);
      return !(d && d.path === i);
    });
    c.length !== o.length && (a = !0), c.length ? s[n] = c : delete s[n];
  }), a;
}
T(Ve, "removeLinkByPath");
var At = class extends Tt {
  constructor(e, n, i, a) {
    super(e), this.items = n, this.onChoose = i, this.setPlaceholder(a || t("\u641C\u7D22\u2026"));
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
T(At, "PickModal");
var ze = At, It = class extends $e {
  constructor(e, n, i, a, s, o) {
    if (super(e), this.items = n, this.onChoose = i, this.selected = /* @__PURE__ */ new Map(), this.searchVal = "", this.typeFilter = "", this.mainFilter = "", this.linkFilter = "", this.statusFilter = "", this.availableTypes = s || [], this.availableStatusColors = o || {}, a && a.length) {
      let c = new Map(n.map((p) => [p.path, p.label]));
      for (let p of a)
        c.has(p) && this.selected.set(p, c.get(p));
    }
  }
  onOpen() {
    let { contentEl: e } = this;
    e.addClass("lkm-multipick");
    let n = /* @__PURE__ */ T((y) => {
      y.target.tagName === "SELECT" && y.stopPropagation();
    }, "guardSelect");
    e.addEventListener("pointerdown", n, !0), e.addEventListener("mousedown", n, !0), e.createEl("h3", { text: t("\u591A\u9009\u7B14\u8BB0\u663E\u793A\u5BFC\u56FE") }), e.createEl("p", { text: t("\u641C\u7D22\u5E76\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\uFF0C\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A\uFF08\u65E0\u9700\u5173\u8054\uFF09"), cls: "lkm-modal-sub" });
    let i = new Set(this.availableTypes);
    for (let y of this.items) y.type && i.add(y.type);
    let a = [...i], s = e.createDiv("lkm-multipick-filter"), o = s.createEl("input", { type: "text", placeholder: t("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    o.addClass("lkm-multipick-input");
    let c = /* @__PURE__ */ T((y) => {
      let _ = /* @__PURE__ */ T((F) => F.stopPropagation(), "stop");
      y.addEventListener("mousedown", _), y.addEventListener("pointerdown", _), y.addEventListener("touchstart", _, { passive: !0 }), y.addEventListener("touchend", _, { passive: !0 }), y.addEventListener("click", _);
    }, "stopModalSwallow");
    if (a.length) {
      let y = s.createEl("select", { cls: "lkm-multipick-select" });
      y.createEl("option", { value: "", text: t("\u7C7B\u578B") }), y.createEl("option", { value: "__none__", text: t("\u65E0\u7C7B\u578B") });
      for (let _ of a) y.createEl("option", { value: _, text: De(_) });
      c(y), y.addEventListener("change", () => {
        this.typeFilter = y.value, f();
      });
    }
    let p = s.createEl("select", { cls: "lkm-multipick-select" });
    p.createEl("option", { value: "", text: t("\u6027\u8D28") }), p.createEl("option", { value: "1", text: t("\u4E3B\u7B14\u8BB0") }), p.createEl("option", { value: "0", text: t("\u975E\u4E3B\u7B14\u8BB0") }), c(p), p.addEventListener("change", () => {
      this.mainFilter = p.value, f();
    });
    let d = s.createEl("select", { cls: "lkm-multipick-select" });
    d.createEl("option", { value: "", text: t("\u5173\u8054") }), d.createEl("option", { value: "orphan", text: t("\u672A\u5173\u8054") }), d.createEl("option", { value: "linked", text: t("\u5DF2\u5173\u8054") }), c(d), d.addEventListener("change", () => {
      this.linkFilter = d.value, f();
    });
    let l = s.createEl("select", { cls: "lkm-multipick-select" });
    l.createEl("option", { value: "", text: t("\u72B6\u6001") }), l.createEl("option", { value: "__none__", text: t("\u65E0\u72B6\u6001") });
    for (let y of Object.keys(this.availableStatusColors || {}))
      l.createEl("option", { value: y, text: Me(y) });
    c(l), l.addEventListener("change", () => {
      this.statusFilter = l.value, f();
    });
    let r = e.createDiv("lkm-multipick-list"), h = e.createDiv("lkm-multipick-sel"), g = null, w = /* @__PURE__ */ T(() => {
      let y = this.searchVal.toLowerCase(), _ = this.typeFilter, F = [];
      for (let m of this.items)
        y && !m.label.toLowerCase().includes(y) || _ && _ === "__none__" && m.type || _ && _ !== "__none__" && m.type !== _ || this.mainFilter === "1" && !m.isMain || this.mainFilter === "0" && m.isMain || this.linkFilter === "orphan" && !m.orphan || this.linkFilter === "linked" && m.orphan || this.statusFilter === "__none__" && m.status || this.statusFilter && this.statusFilter !== "__none__" && m.status !== this.statusFilter || F.push(m);
      return F;
    }, "getFiltered"), f = /* @__PURE__ */ T(() => {
      r.empty();
      let y = w(), _ = 0, F = 100;
      for (let m = 0; m < y.length && _ < F; m++) {
        let D = y[m], W = r.createDiv("lkm-multipick-row");
        this.selected.has(D.path) && W.classList.add("is-selected"), W.createSpan({ text: D.label });
        let A = [];
        D.isMain && A.push(t("\u4E3B\u7B14\u8BB0")), D.type && A.push(De(D.type)), A.length && W.createSpan({ text: " \xB7 " + A.join(" \xB7 "), cls: "lkm-multipick-type" }), W.addEventListener("click", () => {
          this.selected.has(D.path) ? this.selected.delete(D.path) : this.selected.set(D.path, D.label), W.classList.toggle("is-selected"), h.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0"));
        }), _++;
      }
      _ === 0 ? r.createEl("p", { text: t("\u65E0\u5339\u914D\u7ED3\u679C"), cls: "lkm-modal-sub" }) : _ === F && r.createEl("p", { text: t("\u4EC5\u663E\u793A\u524D ") + F + t(" \u6761\uFF0C\u8BF7\u641C\u7D22\u7F29\u5C0F\u8303\u56F4"), cls: "lkm-modal-sub" });
    }, "renderList");
    o.addEventListener("input", () => {
      this.searchVal = o.value, g && clearTimeout(g), g = setTimeout(f, 150);
    });
    let E = e.createDiv("lkm-multipick-btns");
    new ee(E).addButton((y) => y.setButtonText(t("\u5168\u9009\u5F53\u524D")).onClick(() => {
      for (let _ of w()) this.selected.set(_.path, _.label);
      f(), h.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0"));
    })).addButton((y) => y.setButtonText(t("\u663E\u793A\u5BFC\u56FE")).setCta().onClick(() => {
      if (!this.selected.size) {
        new b(t("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      this.close(), this.onChoose([...this.selected.keys()]);
    })).addButton((y) => y.setButtonText(t("\u6E05\u9664\u6240\u6709")).onClick(() => {
      this.selected.clear(), f(), h.setText(t("\u5DF2\u9009 0 \u7BC7\u7B14\u8BB0"));
    })).addButton((y) => y.setButtonText(t("\u53D6\u6D88")).onClick(() => this.close())), h.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0")), f(), o.focus();
  }
  onClose() {
    this.contentEl.empty();
  }
};
T(It, "MultiPickModal");
var es = It, $t = class extends $e {
  constructor(e, n, i) {
    super(e), this.parentLabel = n, this.opts = i || {}, this.onSubmit = this.opts.onSubmit || (() => {
    });
  }
  onOpen() {
    let { contentEl: e } = this, n = this.opts;
    e.createEl("h3", { text: n.standalone ? t("\u65B0\u5EFA\u8282\u70B9") : t("\u65B0\u5EFA\u5B50\u8282\u70B9") }), n.standalone || e.createEl("p", { text: t("\u7236\u8282\u70B9\uFF1A") + this.parentLabel, cls: "lkm-modal-sub" });
    let i = "", a = n.defaultType || "", s = n.defaultStatus || "", o = n.defaultTemplate || "", c = !1;
    new ee(e).setName(t("\u6807\u9898")).addText((r) => {
      r.onChange((h) => i = h), r.inputEl.focus(), r.inputEl.addEventListener("keydown", (h) => {
        h.key === "Enter" && (h.preventDefault(), l());
      });
    }), new ee(e).setName(t("\u7C7B\u578B")).setDesc(t("\u5199\u5165\u7B14\u8BB0\u7684 type \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((r) => {
      r.addOption("", t("\u4E0D\u9009")), (n.types || []).forEach((h) => r.addOption(h, De(h))), r.setValue(a), r.onChange((h) => {
        a = h;
        let g = n.typeTemplates && n.typeTemplates[h];
        if (g && p) {
          let w = (n.templates || []).find((f) => f.path === be(g));
          w && (o = w.path, p.setValue(o));
        }
      });
    }), n.statuses && n.statuses.length && new ee(e).setName(t("\u72B6\u6001")).setDesc(t("\u5199\u5165\u7B14\u8BB0\u7684 status \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((r) => {
      r.addOption("", t("\u4E0D\u9009")), n.statuses.forEach((h) => r.addOption(h, Me(h))), r.setValue(s), r.onChange((h) => {
        s = h;
      });
    });
    let p = null;
    new ee(e).setName(t("\u6A21\u677F")).setDesc(t("\u4E0D\u540C\u7C7B\u578B\u53EF\u4F7F\u7528\u4E0D\u540C\u6A21\u677F")).addDropdown((r) => {
      p = r, (n.templates || []).forEach((h) => r.addOption(h.path, h.name)), r.setValue(o), r.onChange((h) => o = h);
    });
    let d = n.defaultFormat || "md";
    new ee(e).setName(t("\u683C\u5F0F")).addDropdown((r) => {
      r.addOption("md", "Markdown"), r.addOption("excalidraw", "Excalidraw"), r.setValue(d), r.onChange((h) => d = h);
    }), new ee(e).setName(t("\u4E3B\u7B14\u8BB0")).setDesc(t("\u6807\u8BB0\u4E3A\u5BFC\u56FE\u4E3B\u5165\u53E3\uFF08") + (n.zkField || "main") + ": true\uFF09").addToggle((r) => {
      r.onChange((h) => c = h);
    });
    let l = /* @__PURE__ */ T(() => {
      let r = i.trim();
      if (!r) {
        new b(t("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(r, a, o, c, s, d);
    }, "done");
    new ee(e).addButton((r) => r.setButtonText(t("\u521B\u5EFA")).setCta().onClick(l));
  }
  onClose() {
    this.contentEl.empty();
  }
};
T($t, "NewChildModal");
var St = $t, Nt = class extends $e {
  constructor(e, n, i) {
    super(e), this.currentName = n, this.onSubmit = i;
  }
  onOpen() {
    let { contentEl: e } = this;
    e.createEl("h3", { text: t("\u91CD\u547D\u540D\u6587\u4EF6") }), e.createEl("p", { text: t("\u5F53\u524D\uFF1A") + this.currentName + ".md", cls: "lkm-modal-sub" });
    let n = this.currentName;
    new ee(e).setName(t("\u65B0\u6587\u4EF6\u540D")).addText((a) => {
      a.setValue(this.currentName), a.onChange((s) => n = s), a.inputEl.focus(), a.inputEl.select(), a.inputEl.addEventListener("keydown", (s) => {
        s.key === "Enter" && (s.preventDefault(), i());
      });
    });
    let i = /* @__PURE__ */ T(() => {
      let a = n.trim();
      if (!a) {
        new b(t("\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(a);
    }, "done");
    new ee(e).addButton((a) => a.setButtonText(t("\u91CD\u547D\u540D")).setCta().onClick(i));
  }
  onClose() {
    this.contentEl.empty();
  }
};
T(Nt, "RenameModal");
var ts = Nt, Bt = class extends $e {
  constructor(e, n, i) {
    super(e), this.currentDesc = n, this.onSubmit = i;
  }
  onOpen() {
    let { contentEl: e } = this;
    e.createEl("h3", { text: t("\u4FEE\u6539\u63CF\u8FF0") });
    let n = this.currentDesc;
    new ee(e).setName(t("\u63CF\u8FF0")).addTextArea((a) => {
      a.setValue(this.currentDesc), a.onChange((s) => n = s), a.inputEl.focus();
    });
    let i = /* @__PURE__ */ T(() => {
      this.close(), this.onSubmit(n.trim());
    }, "done");
    new ee(e).addButton((a) => a.setButtonText(t("\u4FDD\u5B58")).setCta().onClick(i));
  }
  onClose() {
    this.contentEl.empty();
  }
};
T(Bt, "DescModal");
var ss = Bt, Rt = class extends $e {
  constructor(e, n, i, a, s) {
    super(e), this.titleText = n, this.message = i, this.onConfirm = a, this.danger = s !== !1;
  }
  onOpen() {
    let { contentEl: e } = this;
    this.danger && e.addClass("lkm-modal-danger"), e.createEl("h3", { text: this.titleText }), e.createEl("p", { text: this.message, cls: "lkm-modal-sub" });
    let n = e.createDiv("lkm-confirm-row");
    n.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => this.close()), n.createEl("button", { cls: "lkm2-btn-danger", text: t("\u786E\u8BA4") }).addEventListener("click", () => {
      this.close(), this.onConfirm();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
T(Rt, "ConfirmModal");
var Ye = Rt, Vt = class extends Tt {
  constructor(e, n, i) {
    super(e), this.items = n, this.onChoose = i, this.setPlaceholder(t("\u9009\u62E9\u65B0\u7684\u7236\u8282\u70B9\u2026"));
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
T(Vt, "MoveModal");
var mt = Vt, Ot = class extends Ut {
  constructor(e, n) {
    super(e), this.plugin = n, this.rootPath = null, this.depth = n.settings.defaultDepth, this.notes = /* @__PURE__ */ new Map(), this.referenced = /* @__PURE__ */ new Set(), this.currentRoot = null, this._cleanup = [], this._view = null, this._expandedMem = /* @__PURE__ */ new Map(), this._history = [], this._selected = /* @__PURE__ */ new Set(), this._batchMode = !1, this._selKey = null, this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._toolbarCollapsed = !1, this._dashFilters = [], this._dashSort = "date", this._dashSearch = "", this._dashHeatIdx = 0, this._dashBranchAll = !1, this._dashTab = "stats", this._tlSort = "desc", this._tlTypeFilter = "", this._tlSearch = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this._nodeIndex = /* @__PURE__ */ new Map();
  }
  get s() {
    return this.plugin.settings;
  }
  getViewType() {
    return Ie;
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
        let n = this.app.vault.getAbstractFileByPath(e.kwFilePath);
        n && (this._kwFile = n);
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
    let n = e.expandedMemory ? new Map(Object.entries(e.expandedMemory)) : /* @__PURE__ */ new Map(), i = e.view || null;
    await this.rebuild(!0), this._expandedMem = n, this._view = i, this.render({ fit: !0 });
  }
  async _showPresetMenu(e) {
    (!this.plugin._loadedPresets || this.plugin._loadedPresets.length === 0) && await this.plugin._loadViewsFromFile();
    let n = new qe(), i = this.plugin._getSavedViews();
    if (i.length === 0)
      n.addItem((s) => s.setTitle(t("\u6682\u65E0\u9884\u8BBE")).setIcon("bookmark").onClick(() => {
      }));
    else {
      for (let s of i) {
        let o = s.time ? new Date(s.time).toLocaleString() : "";
        n.addItem((c) => {
          c.setTitle(s.name + (o ? "  (" + o + ")" : "")).setIcon("bookmark").onClick(async () => {
            await this._restoreViewState(s.state), new b(t("\u5DF2\u6062\u590D\u9884\u8BBE\uFF1A") + s.name);
          });
        });
      }
      n.addSeparator(), n.addItem((s) => s.setTitle(t("\u66F4\u65B0\u9884\u8BBE\u2026")).setIcon("refresh-cw").onClick(() => this._showUpdatePresetMenu(e))), n.addItem((s) => s.setTitle(t("\u5220\u9664\u9884\u8BBE\u2026")).setIcon("trash").onClick(() => this._showDeletePresetMenu(e)));
    }
    n.addSeparator(), n.addItem((s) => s.setTitle(t("\u4FDD\u5B58\u5F53\u524D\u72B6\u6001\u2026")).setIcon("plus").onClick(() => this._promptSaveView()));
    let a = e.getBoundingClientRect();
    n.showAtPosition({ x: a.left, y: a.bottom });
  }
  _showDeletePresetMenu(e) {
    let n = new qe(), i = this.plugin._getSavedViews();
    for (let s of i)
      n.addItem((o) => {
        o.setTitle(s.name).setIcon("trash").onClick(async () => {
          await this.plugin._deleteSavedView(s.name), new b(t("\u5DF2\u5220\u9664\u9884\u8BBE\uFF1A") + s.name);
        });
      });
    let a = e.getBoundingClientRect();
    n.showAtPosition({ x: a.left, y: a.bottom });
  }
  _showUpdatePresetMenu(e) {
    let n = new qe(), i = this.plugin._getSavedViews();
    for (let s of i)
      n.addItem((o) => {
        o.setTitle(s.name).setIcon("refresh-cw").onClick(async () => {
          await this.plugin._saveViewPreset(s.name, this._captureViewState()), new b(t("\u5DF2\u66F4\u65B0\u9884\u8BBE\uFF1A") + s.name);
        });
      });
    let a = e.getBoundingClientRect();
    n.showAtPosition({ x: a.left, y: a.bottom });
  }
  _promptSaveView() {
    let e = new $e(this.app);
    e.titleEl.setText(t("\u4FDD\u5B58\u5BFC\u56FE\u9884\u8BBE"));
    let n = "", i = new ee(e.contentEl).setName(t("\u9884\u8BBE\u540D\u79F0")).addText((s) => {
      s.setPlaceholder(t("\u8F93\u5165\u9884\u8BBE\u540D\u79F0")), s.inputEl.focus(), s.onChange((o) => n = o), s.inputEl.addEventListener("keydown", (o) => {
        o.key === "Enter" && (o.preventDefault(), a());
      });
    }), a = /* @__PURE__ */ T(async () => {
      let s = n.trim();
      if (!s) {
        new b(t("\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.plugin._getSavedViews().some((c) => c.name === s) ? new Ye(this.app, t("\u8986\u76D6\u9884\u8BBE"), t("\u5DF2\u5B58\u5728\u540C\u540D\u9884\u8BBE\u300C") + s + t("\u300D\uFF0C\u662F\u5426\u8986\u76D6\uFF1F"), async () => {
        await this.plugin._saveViewPreset(s, this._captureViewState()), e.close(), new b(t("\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A") + s);
      }).open() : (await this.plugin._saveViewPreset(s, this._captureViewState()), e.close(), new b(t("\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A") + s));
    }, "done");
    new ee(e.contentEl).addButton((s) => s.setButtonText(t("\u4FDD\u5B58")).setCta().onClick(a)).addButton((s) => s.setButtonText(t("\u53D6\u6D88")).onClick(() => e.close())), e.open();
  }
  async _waitMetadataReady() {
    let e = this.app.metadataCache;
    Lt(this.app, this.s) || await new Promise((n) => {
      let i = !1, a = /* @__PURE__ */ T(() => {
        if (!i) {
          i = !0;
          try {
            e.offref(s), e.offref(o);
          } catch {
          }
          clearTimeout(c), n();
        }
      }, "finish"), s = e.on("resolved", a), o = e.on("changed", a), c = setTimeout(a, 6e3);
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
    let n = window.visualViewport, i = null, a = /* @__PURE__ */ T(() => {
      i && clearTimeout(i), i = setTimeout(() => {
        if (i = null, !window.matchMedia("(hover: none)").matches) return;
        let p = e.querySelector(".lkm-dash");
        if (!p) return;
        let d = e.querySelector(".lkm-toolbar"), l = d ? d.getBoundingClientRect().height : 0;
        p.style.maxHeight = n.height - l + "px";
        let r = document.activeElement;
        r && r.tagName === "INPUT" && e.contains(r) && setTimeout(() => {
          let h = r.getBoundingClientRect(), g = p.getBoundingClientRect();
          (h.top < g.top || h.bottom > g.bottom) && r.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 50);
      }, 150);
    }, "adjust"), s = /* @__PURE__ */ T(() => a(), "onResize"), o = /* @__PURE__ */ T(() => a(), "onScroll");
    n.addEventListener("resize", s), n.addEventListener("scroll", o), window.addEventListener("resize", s), this._cleanup.push(() => {
      n.removeEventListener("resize", s), n.removeEventListener("scroll", o), window.removeEventListener("resize", s);
      let c = e.querySelector(".lkm-dash");
      c && (c.style.maxHeight = "");
    }), this._adjustMobileViewport = a;
  }
  async rebuild(e) {
    let n = ut(this.app, this.s);
    this.notes = n.map, this.referenced = n.referenced;
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
    let e = [...this.notes.values()], n = e.filter((a) => a.zk).sort((a, s) => a.title.localeCompare(s.title, "zh"));
    if (n.length) return n[0].file.path;
    let i = e.filter((a) => !this.referenced.has(a.file.path)).sort((a, s) => a.title.localeCompare(s.title, "zh"));
    return i.length ? i[0].file.path : e.length ? e[0].file.path : null;
  }
  _indexTree(e) {
    this._nodeIndex = /* @__PURE__ */ new Map(), this._treePaths = /* @__PURE__ */ new Set(), this._pathNodes = /* @__PURE__ */ new Map();
    let n = /* @__PURE__ */ T((i) => {
      this._nodeIndex.set(i.key, i), i.note.file && (this._treePaths.add(i.note.file.path), this._pathNodes.has(i.note.file.path) || this._pathNodes.set(i.note.file.path, []), this._pathNodes.get(i.note.file.path).push(i)), i.children.forEach(n);
    }, "walk");
    n(e);
  }
  render(e) {
    let n = this.contentEl;
    if (this._runCleanup(), n.empty(), n.addClass("lkm-view"), n.style.overflow = "hidden", this._mode === "dash") {
      this._renderDash(n);
      return;
    }
    let i = this.s;
    n.tabIndex = -1;
    let a = /* @__PURE__ */ T((C) => {
      let A = C.target.tagName;
      if (!(A === "INPUT" || A === "TEXTAREA"))
        if (C.key === "Delete" || C.key === "Backspace") {
          if (this._selKey) {
            C.preventDefault();
            let x = this._nodeIndex.get(this._selKey);
            x && this._deleteNode(x);
          }
        } else if (C.key === "Enter") {
          if (this._selKey) {
            C.preventDefault();
            let x = this._nodeIndex.get(this._selKey);
            x && x.note.file && this.app.workspace.getLeaf(!0).openFile(x.note.file);
          }
        } else if (C.key === "Escape")
          this._batchMode ? (this._batchMode = !1, this._selected.clear(), this.render()) : this._selKey && this._select(null);
        else if (C.key === "ArrowUp" || C.key === "ArrowDown" || C.key === "ArrowLeft" || C.key === "ArrowRight") {
          if (!this._selKey) return;
          let x = this._nodeIndex.get(this._selKey);
          if (!x) return;
          if (C.preventDefault(), C.key === "ArrowLeft")
            x.expanded && x.children.length ? (x.expanded = !1, this._expandedMem.set(x.note.file ? x.note.file.path : x.key, !1), this.render()) : x.parent && this._select(x.parent.key);
          else if (C.key === "ArrowRight")
            !x.expanded && x.children.length ? (x.expanded = !0, this._expandedMem.set(x.note.file ? x.note.file.path : x.key, !0), this.render()) : x.children.length && this._select(x.children[0].key);
          else if (C.key === "ArrowUp") {
            if (x.parent) {
              let Y = x.parent.children, le = Y.indexOf(x);
              le > 0 ? this._select(Y[le - 1].key) : this._select(x.parent.key);
            }
          } else if (C.key === "ArrowDown") {
            if (x.expanded && x.children.length) {
              this._select(x.children[0].key);
              return;
            }
            let Y = x;
            for (; Y.parent; ) {
              let le = Y.parent.children, O = le.indexOf(Y);
              if (O < le.length - 1) {
                this._select(le[O + 1].key);
                return;
              }
              Y = Y.parent;
            }
          }
        } else if (C.key === " ") {
          if (this._selKey) {
            C.preventDefault();
            let x = this._nodeIndex.get(this._selKey);
            x && x.children.length && (x.expanded = !x.expanded, this._expandedMem.set(x.note.file ? x.note.file.path : x.key, x.expanded), this.render());
          }
        } else if (C.key === "n" || C.key === "N") {
          if (this._selKey) {
            C.preventDefault();
            let x = this._nodeIndex.get(this._selKey);
            x && this._addChildDialog(x);
          }
        } else C.key === "b" || C.key === "B" ? (C.preventDefault(), this._back()) : C.key === "/" && (C.preventDefault(), this.openNoteSearch());
    }, "onKeydown");
    n.addEventListener("keydown", a), this._cleanup.push(() => n.removeEventListener("keydown", a)), this._titleLenApplied !== i.maxTitleLen && (this._titleLenApplied = i.maxTitleLen);
    let s = n.createDiv("lkm-toolbar"), o = s.createEl("button", { cls: "lkm-btn lkm-toolbar-toggle", text: "\u2630" });
    o.title = t("\u5C55\u5F00/\u6298\u53E0\u5DE5\u5177\u680F"), o.onclick = () => {
      this._toolbarCollapsed = !this._toolbarCollapsed, s.classList.toggle("lkm-collapsed", this._toolbarCollapsed), this._scheduleAutoSave();
    }, this._toolbarCollapsed && s.classList.add("lkm-collapsed");
    let c = /* @__PURE__ */ T((C, A, x, Y, le, O) => {
      let Z = s.createEl("button", { cls: "lkm-btn" + (Y ? " " + Y : "") });
      return O ? (Z.createEl("span", { cls: "lkm-btn-icon", text: O }), Z.createEl("span", { text: C })) : Z.textContent = C, Z.title = A, le && (Z.disabled = !0), Z.onclick = (v) => {
        Z.disabled || x(Z, v);
      }, Z;
    }, "mkBtn"), p = this._selKey ? this._nodeIndex.get(this._selKey) : null, d = !p;
    c(t("\u5DE5\u4F5C\u53F0"), t("\u67E5\u770B\u7EDF\u8BA1\u5DE5\u4F5C\u53F0"), () => {
      this._mode = "dash", this.render();
    }, "", !1, "\u{1F4CA}"), c(t("\u4E3B\u7B14\u8BB0"), t("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u7B14\u8BB0\uFF08main: true\uFF09"), () => this.openRootPicker(), "", !1, "\u{1F4CC}"), c(t("\u5173\u952E\u8BCD"), t("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u8FC7\u6EE4"), () => this.openKeywordPicker(), "", !1, "\u{1F511}"), c(t("\u641C\u7D22"), t("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9"), () => this.openNoteSearch(), "", !1, "\u{1F50D}"), c(t("\u591A\u9009"), t("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A"), () => this.openMultiPick(), "", !1, "\u{1F4CB}"), c(t("\u65B0\u589E"), t("\u521B\u5EFA\u72EC\u7ACB\u7B14\u8BB0"), () => this.createStandaloneNote(), "", !1, "\u271A");
    let l = s.createDiv("lkm-depth");
    l.createSpan({ text: t("\u5C42") });
    let r = l.createEl("button", { cls: "lkm-step", text: "\u2212", title: t("\u51CF\u5C11\u663E\u793A\u5C42\u6570\uFF08\u5C421=\u53EA\u770B\u6839\u7B14\u8BB0\uFF09") }), h = l.createSpan({ cls: "lkm-depth-val", text: String(this.depth) }), g = l.createEl("button", { cls: "lkm-step", text: "+", title: t("\u589E\u52A0\u663E\u793A\u5C42\u6570") });
    r.onclick = () => {
      this.depth > 1 && (this.depth--, this._expandedMem.clear(), h.setText(String(this.depth)), this.render());
    }, g.onclick = () => {
      this.depth < 12 && (this.depth++, this._expandedMem.clear(), h.setText(String(this.depth)), this.render());
    };
    let w = s.createDiv("lkm-mode-sel"), f = [
      { val: "tree", label: t("\u6811\u5F62\u56FE") },
      { val: "branch", label: t("\u5206\u53C9\u56FE") },
      { val: "git", label: t("\u5206\u652F\u56FE") },
      { val: "graph", label: t("\u94FE\u8DEF\u56FE") },
      { val: "force", label: t("\u7F51\u7EDC\u56FE") }
    ], E = w.createEl("select", { cls: "lkm-mode-dropdown" });
    for (let C of f) {
      let A = E.createEl("option", { value: C.val });
      A.textContent = C.label, this.s.layoutMode === C.val && (A.selected = !0);
    }
    E.onchange = () => {
      this.s.layoutMode = E.value, this.plugin.saveSettings(), this._view = null, this.render({ fit: !0 });
    }, c(t("\u5237\u65B0"), t("\u91CD\u65B0\u8BFB\u53D6\u76EE\u5F55\u4E0E\u7B14\u8BB0\u6570\u636E"), () => this.rebuild(!0), "", !1, "\u21BB"), c(t("\u9002\u5E94"), t("\u7F29\u653E\u81F3\u5B8C\u6574\u663E\u793A\u6240\u6709\u8282\u70B9"), () => this._fit && this._fit(), "", !1, "\u2922"), c(t("\u5168\u5C55"), t("\u5C55\u5F00\u6240\u6709\u8282\u70B9"), () => this._expandAll(!0), "", !1, "\u2295"), c(t("\u5168\u6298"), t("\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9"), () => this._expandAll(!1), "", !1, "\u2296"), c(this.s.layoutDir === "v" ? t("\u7EB5\u5411") : t("\u6A2A\u5411"), t("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u6A2A\u5411/\u7EB5\u5411\uFF09"), (C) => {
      this.s.layoutDir = this.s.layoutDir === "v" ? "h" : "v", this.plugin.saveSettings(), this._view = null, this.render({ fit: !0 });
    }, this.s.layoutDir === "v" ? "is-active" : "", this.s.layoutMode === "branch", "\u21C4"), c(t("\u5FEB\u6377\u952E"), t("\u67E5\u770B\u952E\u76D8\u5FEB\u6377\u952E\u8BF4\u660E"), () => this._showShortcutHelp(), "", !1, "\u2328"), c(t("\u5E2E\u52A9"), t("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), () => this._showHelp(), "", !1, "?"), c(t("\u5BFC\u51FA"), t("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2"), (C) => this._exportMenu(C), "", !1, "\u2B07"), c(t("\u9884\u8BBE"), t("\u4FDD\u5B58/\u6062\u590D\u5BFC\u56FE\u72B6\u6001\u9884\u8BBE"), (C) => this._showPresetMenu(C), "", !1, "\u{1F516}");
    let y = c(t("\u663E\u793A"), t("\u5207\u6362\u663E\u793A\u9009\u9879"), () => {
      let C = new qe();
      C.addItem((x) => x.setTitle(this.s.showCreated ? t("\u2713 \u65F6\u95F4") : t("\u65F6\u95F4")).setIcon("calendar").onClick(() => {
        this.s.showCreated = !this.s.showCreated, this.plugin.saveSettings(), this.render();
      })), C.addItem((x) => x.setTitle(this.s.showType ? t("\u2713 \u7C7B\u578B") : t("\u7C7B\u578B")).setIcon("tag").onClick(() => {
        this.s.showType = !this.s.showType, this.plugin.saveSettings(), this.render();
      })), C.addItem((x) => x.setTitle(this.s.showDesc ? t("\u2713 \u63CF\u8FF0") : t("\u63CF\u8FF0")).setIcon("align-left").onClick(() => {
        this.s.showDesc = !this.s.showDesc, this.plugin.saveSettings(), this.render();
      })), C.addItem((x) => x.setTitle(this.s.showChildCount ? t("\u2713 \u5B50\u6570") : t("\u5B50\u6570")).setIcon("list").onClick(() => {
        this.s.showChildCount = !this.s.showChildCount, this.plugin.saveSettings(), this.render();
      })), C.addItem((x) => x.setTitle(this.s.showWordCount ? t("\u2713 \u5B57\u6570") : t("\u5B57\u6570")).setIcon("type").onClick(() => {
        this.s.showWordCount = !this.s.showWordCount, this.plugin.saveSettings(), this.render();
      })), C.addSeparator(), C.addItem((x) => x.setTitle(this.s.showOpenIcon !== !1 ? t("\u2713 \u6253\u5F00\u56FE\u6807") : t("\u6253\u5F00\u56FE\u6807")).setIcon("edit").onClick(() => {
        this.s.showOpenIcon = this.s.showOpenIcon === !1, this.plugin.saveSettings(), this.render();
      })), C.addItem((x) => x.setTitle(this.s.showAddIcon !== !1 ? t("\u2713 \u65B0\u589E\u56FE\u6807") : t("\u65B0\u589E\u56FE\u6807")).setIcon("plus-circle").onClick(() => {
        this.s.showAddIcon = this.s.showAddIcon === !1, this.plugin.saveSettings(), this.render();
      }));
      let A = y.getBoundingClientRect();
      C.showAtPosition({ x: A.left, y: A.bottom });
    });
    c(t("\u6279\u91CF"), t("\u8FDB\u5165\u6279\u91CF\u6A21\u5F0F\uFF1A\u5355\u51FB\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u540E\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664"), () => this._toggleBatch(), this._batchMode ? "is-active" : ""), this._batchMode && (s.createDiv("lkm-sel-count").setText(t("\u5DF2\u9009 ") + this._selected.size), c(t("\u5168\u9009"), t("\u9009\u4E2D\u5BFC\u56FE\u4E2D\u6240\u6709\u8282\u70B9"), () => {
      this._selected = new Set(this._nodeIndex.keys()), this.render();
    }, "lkm-btn-action"), c(t("\u53CD\u9009"), t("\u53CD\u9009\u5F53\u524D\u9009\u4E2D\u72B6\u6001"), () => {
      let A = new Set(this._nodeIndex.keys());
      for (let x of this._selected) A.delete(x);
      this._selected = A, this.render();
    }, "lkm-btn-action"), c(t("\u79FB\u52A8\u5230\u2026"), t("\u628A\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u6307\u5B9A\u7236\u7B14\u8BB0\u4E0B"), () => this._batchMoveDialog(), "lkm-btn-action"), c(t("\u5220\u9664\u9009\u4E2D"), t("\u5220\u9664\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u53CA\u5176\u7B14\u8BB0\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF09"), () => this._batchDelete(), "lkm-btn-action"), c(t("\u6539\u7C7B\u578B"), t("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u7C7B\u578B"), () => this._batchSetType(), "lkm-btn-action"), c(t("\u6539\u72B6\u6001"), t("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u72B6\u6001"), () => this._batchSetStatus(), "lkm-btn-action"), c(t("\u6807\u8BB0\u4E3B\u7B14\u8BB0"), t("\u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u4E3B\u7B14\u8BB0"), () => this._batchSetMain(!0), "lkm-btn-action"), c(t("\u53D6\u6D88\u4E3B\u7B14\u8BB0"), t("\u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u4E3B\u7B14\u8BB0\u6807\u8BB0"), () => this._batchSetMain(!1), "lkm-btn-action")), c(t("\u8BBE\u7F6E"), t("\u6253\u5F00\u63D2\u4EF6\u8BBE\u7F6E"), () => {
      this.app.setting.open(), this.app.setting.openTabById(this.plugin.manifest.id);
    }, "", !1, "\u2699"), c(t("\u83DC\u5355"), t("\u663E\u793A\u8282\u70B9\u64CD\u4F5C\u83DC\u5355\uFF08\u7B49\u540C\u53F3\u952E/\u957F\u6309\uFF09\uFF1A\u6253\u5F00/\u65B0\u589E/\u805A\u7126/\u4E0A\u7EA7/\u72B6\u6001/\u4E3B\u7B14\u8BB0/\u91CD\u547D\u540D/\u590D\u5236/\u79FB\u52A8/\u6392\u5E8F/\u5220\u9664"), (C, A) => {
      let x = this._nodeIndex.get(this._selKey);
      x && this._showNodeMenu(x, { clientX: A.clientX, clientY: A.clientY });
    }, "lkm-node-btn", !p), c(t("\u8FD4\u56DE"), t("\u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE\u4F4D\u7F6E"), () => this._back(), "", this._history.length === 0, "\u2190"), c(t("\u7B5B\u9009"), t("\u7B5B\u9009\u8282\u70B9"), () => {
      s.classList.toggle("lkm-filter-open");
    }, "lkm-filter-toggle");
    let _ = s.createEl("input", { type: "text", cls: "lkm-filter-input", placeholder: t("\u7B5B\u9009\u8282\u70B9\u2026") });
    _.value = this._filterText || "", _.addEventListener("input", () => {
      this._filterText = _.value.trim().toLowerCase(), this._applyFilter();
    });
    let F = s.createDiv("lkm-info");
    p && F.createSpan({ text: t("\u5DF2\u9009\uFF1A") + we(p.note.title, 12) + " \uFF5C " });
    let m = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (this._kwFile)
      F.createSpan({ text: t("\u5173\u952E\u8BCD\uFF1A") + this._kwFile.basename });
    else if (this._multiRoot)
      F.createSpan({ text: t("\u591A\u9009\u5BFC\u56FE\uFF08") + (this.currentRoot ? this.currentRoot.children.length : 0) + t(" \u7BC7\uFF09") });
    else if (m) {
      F.createSpan({ text: t("\u8DEF\u5F84\uFF1A") });
      let C = this._buildCrumbChain();
      C.forEach((A, x) => {
        if (C.length > 8 && x === 1) {
          F.createEl("span", { cls: "lkm-crumb-sep", text: "\u2026>" });
          return;
        }
        if (C.length > 8 && x > 1 && x < C.length - 1) return;
        x && F.createSpan({ cls: "lkm-crumb-sep", text: ">" });
        let Y = x === C.length - 1, le = we(A.note.title, 10), O = F.createEl(Y ? "span" : "a", { cls: "lkm-crumb-item" + (Y ? " lkm-crumb-cur" : ""), text: le });
        O.title = A.note.title, !Y && A.note.file && O.addEventListener("click", () => this._focusPath(A.note.file.path));
      });
    } else
      F.createSpan({ text: t("\u672A\u627E\u5230\u7B14\u8BB0") });
    let D = n.createDiv("lkm-canvas");
    if (this._kwFile && !this.app.vault.getAbstractFileByPath(this._kwFile.path) && (this._kwFile = null), !this._kwFile && !this._multiRoot && (this._selectedRootPaths = null), this._kwFile) {
      this.showKeyword(this._kwFile, e);
      return;
    }
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length) {
      this._indexTree(this.currentRoot), ht(this.currentRoot, this.depth), this._ensureSelectedVisible(this.currentRoot), this._restoreExpanded(), this._draw(D, at(this.currentRoot, this.s), e);
      return;
    }
    if (!this.rootPath || !m) {
      if (this.notes.size === 0) {
        this._renderEmptyGuide(D);
        return;
      }
      D.createDiv("lkm-empty").setText(t("\u6CA1\u6709\u627E\u5230\u4E3B\u7B14\u8BB0\uFF08") + (this.s.zkField || "main") + t(": true\uFF09\u3002\u53EF\u5728\u5BFC\u56FE\u4E2D\u53F3\u952E/\u957F\u6309\u4EFB\u610F\u8282\u70B9\u6807\u8BB0\u4E3A\u4E3B\u7B14\u8BB0\u3002"));
      return;
    }
    let W = it(this.app, this.notes, m);
    this.currentRoot = W, this._indexTree(W), ht(W, this.depth), this._restoreExpanded(), this._draw(D, at(W, this.s), e);
  }
  _restoreExpanded() {
    for (let [e, n] of this._expandedMem) {
      let i = this._pathNodes ? this._pathNodes.get(e) : null;
      if (i) for (let a of i) a.expanded = n;
    }
  }
  _ensureSelectedVisible(e) {
    !this._selectedRootPaths || !this._selectedRootPaths.size || (/* @__PURE__ */ T(function n(i) {
      if (!i.children || !i.children.length) return !1;
      let a = !1;
      for (let s of i.children)
        s.note.file && this.has(s.note.file.path) && (a = !0), n.call(this, s) && (a = !0);
      return a && (i.expanded = !0), a;
    }, "expand")).call(this._selectedRootPaths, e);
  }
  _applyFilter() {
    let e = this._filterText || "";
    for (let n of this._nodeIndex.values())
      if (n._el)
        if (!e)
          n._el.classList.remove("lkm-dim"), n._el.classList.remove("lkm-highlight");
        else {
          let i = n.note.title.toLowerCase().includes(e);
          n._el.classList.toggle("lkm-dim", !i), n._el.classList.toggle("lkm-highlight", i);
        }
  }
  async _showPreview(e, n) {
    if (!e.note.file) return;
    this._previewCache || (this._previewCache = /* @__PURE__ */ new Map());
    let i = e.note.file.path, a = this._previewCache.get(i);
    if (a === void 0)
      try {
        if (e.note.file.basename.endsWith(".excalidraw"))
          a = "![[" + e.note.file.basename + "]]";
        else {
          let p = await this.app.vault.read(e.note.file), d = p.match(/^---\n[\s\S]*?\n---\n?/);
          a = d ? p.slice(d[0].length).trim() : p.trim(), a = a.split(`
`).slice(0, 20).join(`
`).trim(), a.length > 600 && (a = a.slice(0, 600) + "\u2026");
        }
        this._previewCache.set(i, a);
      } catch {
        return;
      }
    if (!a) return;
    this._hidePreview();
    let s = document.createElement("div");
    s.className = "lkm-preview";
    let o = document.createElement("div");
    o.className = "lkm-preview-title", o.textContent = e.note.title, s.appendChild(o);
    let c = document.createElement("div");
    s.appendChild(c), s.addEventListener("mouseenter", () => {
      this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null);
    }), s.addEventListener("mouseleave", () => {
      this._hidePreview();
    }), document.body.appendChild(s), this._previewEl = s, this._previewComp = new Zt(), this._previewComp.load(), await Jt.render(this.app, a, c, i, this._previewComp), this._positionPreview(n);
  }
  _positionPreview(e) {
    if (!this._previewEl) return;
    let n = this._previewEl, i = e.clientX + 14, a = e.clientY + 14, s = n.getBoundingClientRect(), o = window.innerWidth - s.width - 8, c = window.innerHeight - s.height - 8;
    n.style.left = Math.min(i, o) + "px", n.style.top = Math.min(a, c) + "px";
  }
  _hidePreview() {
    this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null), this._previewComp && (this._previewComp.unload(), this._previewComp = null), this._previewEl && (this._previewEl.remove(), this._previewEl = null);
  }
  _focus(e) {
    let n = this._nodeIndex.get(e);
    !n || !n.note.file || this._focusPath(n.note.file.path);
  }
  _focusPath(e) {
    e && ((e !== this.rootPath || this._multiRoot) && (this._history.push({ rootPath: this.rootPath, kwFile: this._kwFile, multiRoot: this._multiRoot, currentRoot: this._multiRoot ? this.currentRoot : null }), this._kwFile = null, this._multiRoot = !1, this.rootPath = e, this._expandedMem.clear(), this._view = null, this._selKey = null), this.render());
  }
  _back() {
    if (this._history.length) {
      let e = this._history.pop();
      this._kwFile = e.kwFile || null, this._multiRoot = e.multiRoot || !1, e.multiRoot && e.currentRoot ? (this.currentRoot = e.currentRoot, this.rootPath = null) : this.rootPath = e.rootPath, this._view = null, this._selKey = null, this.render();
    } else new b(t("\u6CA1\u6709\u53EF\u8FD4\u56DE\u7684\u8282\u70B9"));
  }
  _expandAll(e) {
    for (let n of this._nodeIndex.values())
      n.children.length && (n.expanded = e, this._expandedMem.set(n.note.file ? n.note.file.path : n.key, e));
    this.render();
  }
  _showShortcutHelp() {
    let e = new $e(this.app);
    e.onOpen = () => {
      let { contentEl: n } = e;
      n.addClass("lkm-multipick"), n.createEl("h3", { text: t("\u952E\u76D8\u5FEB\u6377\u952E") });
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
      for (let [s, o] of i) {
        let c = n.createDiv("lkm-shortcut-row");
        c.createEl("span", { cls: "lkm-shortcut-key", text: s }), c.createEl("span", { cls: "lkm-shortcut-desc", text: o });
      }
      let a = n.createDiv("lkm-multipick-btns");
      new ee(a).addButton((s) => s.setButtonText(t("\u5173\u95ED")).onClick(() => e.close()));
    }, e.open();
  }
  _exportMenu(e) {
    let n = new qe();
    n.addItem((a) => a.setTitle(t("\u5BFC\u51FA SVG")).setIcon("download").onClick(() => this._exportSVG())), n.addItem((a) => a.setTitle(t("\u5BFC\u51FA PNG")).setIcon("image").onClick(() => this._exportPNG())), n.addItem((a) => a.setTitle(t("\u5BFC\u51FA Markdown \u5927\u7EB2")).setIcon("document").onClick(() => this._exportMarkdown())), n.addItem((a) => a.setTitle(t("\u5BFC\u51FA Canvas")).setIcon("layout-grid").onClick(() => this._exportCanvas()));
    let i = e.getBoundingClientRect();
    n.showAtPosition({ x: i.left, y: i.bottom + 4 });
  }
  _getSVGString() {
    let e = this.contentEl.querySelector(".lkm-svg");
    if (!e)
      return new b(t("\u672A\u627E\u5230\u5BFC\u56FE\u5185\u5BB9")), null;
    let n = e.cloneNode(!0), i = e.getBBox(), a = 30, s = i.width + a * 2, o = i.height + a * 2;
    n.setAttribute("xmlns", "http://www.w3.org/2000/svg"), n.setAttribute("width", s), n.setAttribute("height", o), n.setAttribute("viewBox", i.x - a + " " + (i.y - a) + " " + s + " " + o);
    let c = this.contentEl.querySelector(".lkm-view") || this.contentEl, p = getComputedStyle(c), d = [
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
      let _ = p.getPropertyValue(y).trim();
      _ && (l[y] = _);
    }
    l["--lkm-accent"] || (l["--lkm-accent"] = "#6c8cff"), l["--lkm-main"] || (l["--lkm-main"] = "#f2a65a"), l["--lkm-done"] || (l["--lkm-done"] = "#3fa66a");
    let r = "";
    try {
      for (let y of document.styleSheets) {
        let _;
        try {
          _ = y.cssRules;
        } catch {
          continue;
        }
        if (_)
          for (let F of _) {
            let m = F.selectorText || "";
            m.includes("lkm-") && !m.includes("lkm-toolbar") && !m.includes("lkm-btn") && !m.includes("lkm-dash") && !m.includes("lkm-cards") && !m.includes("lkm-modal") && !m.includes("lkm-multipick") && !m.includes("lkm-empty") && !m.includes("lkm-guide") && !m.includes("lkm-heat") && !m.includes("lkm-branch") && !m.includes("lkm-legend") && !m.includes("lkm-donut") && !m.includes("lkm-bars") && !m.includes("lkm-stackbar") && !m.includes("lkm-chips") && !m.includes("lkm-shortcut") && !m.includes("lkm-step") && !m.includes("lkm-depth") && !m.includes("lkm-info") && !m.includes("lkm-crumb") && !m.includes("lkm-sel-count") && (r += F.cssText + `
`);
          }
      }
    } catch (y) {
      console.error("[link-mindmap] collect CSS:", y);
    }
    let h = r;
    for (let [y, _] of Object.entries(l))
      h = h.replace(new RegExp("var\\(" + y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\)", "g"), _), h = h.replace(new RegExp("var\\(" + y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ",\\s*[^)]+\\)", "g"), _);
    h = h.replace(/var\(--[^)]+\)/g, "#888");
    let g = document.createElement("style");
    g.textContent = h, n.insertBefore(g, n.firstChild);
    let w = "path, line, circle, rect, ellipse, polygon, polyline, text", f = e.querySelectorAll(w), E = n.querySelectorAll(w);
    for (let y = 0; y < f.length && y < E.length; y++) {
      let _ = getComputedStyle(f[y]), F = _.stroke, m = _.fill, D = _.strokeWidth, W = _.strokeDasharray, C = _.opacity;
      if (F && F !== "none" && E[y].setAttribute("stroke", F), m && E[y].setAttribute("fill", m), D && D !== "0px" && E[y].setAttribute("stroke-width", D), W && W !== "none" && E[y].setAttribute("stroke-dasharray", W), C && C !== "1" && E[y].setAttribute("opacity", C), f[y].tagName === "text") {
        let A = _.fontSize, x = _.fontWeight;
        A && E[y].setAttribute("font-size", A), x && E[y].setAttribute("font-weight", x);
      }
    }
    return new XMLSerializer().serializeToString(n);
  }
  _exportSVG() {
    let e = this._getSVGString();
    if (!e) return;
    let i = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".svg";
    this.app.vault.create(i, e).then(
      () => new b(t("SVG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + i),
      (a) => new b(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a))
    );
  }
  _exportPNG() {
    let e = this._getSVGString();
    if (!e) return;
    let i = this.contentEl.querySelector(".lkm-svg").getBBox(), a = 30, s = i.width + a * 2, o = i.height + a * 2, c = new Image(), p = btoa(unescape(encodeURIComponent(e)));
    c.onload = () => {
      let d = document.createElement("canvas");
      d.width = s * 2, d.height = o * 2;
      let l = d.getContext("2d"), r = getComputedStyle(this.contentEl).getPropertyValue("--background-primary").trim() || "#ffffff";
      l.fillStyle = r, l.fillRect(0, 0, d.width, d.height), l.drawImage(c, 0, 0, d.width, d.height), d.toBlob((h) => {
        let w = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".png";
        h.arrayBuffer().then((f) => this.app.vault.createBinary(w, f).then(
          () => new b(t("PNG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + w),
          (E) => new b(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (E && E.message ? E.message : E))
        ));
      });
    }, c.onerror = () => new b(t("PNG \u5BFC\u51FA\u5931\u8D25")), c.src = "data:image/svg+xml;base64," + p;
  }
  _exportMarkdown() {
    let e = this.currentRoot;
    if (!e) {
      new b(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let n = [], i = /* @__PURE__ */ T((c, p) => {
      let d = p === 0 ? "# " : "  ".repeat(p) + "- ", l = c.note.status ? " [" + Me(c.note.status) + "]" : "", r = c.note.type ? " `" + De(c.note.type) + "`" : "", h = this.s.showDesc && c.note.desc ? " \u2014 " + c.note.desc : "";
      n.push(d + (c.note.title || c.note.file?.name || "?") + r + l + h);
      for (let g of c.children || []) i(g, p + 1);
    }, "walk");
    i(e, 0);
    let a = n.join(`
`), o = "link-mindmap-outline-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".md";
    this.app.vault.create(o, a).then(
      () => new b(t("Markdown \u5927\u7EB2\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + o),
      (c) => new b(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (c && c.message ? c.message : c))
    );
  }
  _exportCanvas() {
    let e = this.currentRoot;
    if (!e) {
      new b(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let n = 300, i = 60, a = 180, s = 20, o = this.s.layoutMode !== "branch" && this.s.layoutDir === "v", c = [], p = [], d = /* @__PURE__ */ new Map(), l = 0, r = 0, h = /* @__PURE__ */ T((F) => {
      let m = (F.children || []).filter((D) => D.note.file);
      return m.length ? m.reduce((D, W) => D + h(W), 0) : 1;
    }, "subtreeSize"), g = /* @__PURE__ */ T((F, m, D) => {
      let W = (F.children || []).filter((le) => le.note.file), C = D, A = [];
      for (let le of W) {
        let O = h(le), Z = g(le, m + 1, C);
        A.push(Z), C += O;
      }
      let x, Y;
      if (o ? (x = D * (n + a), Y = m * (i + s)) : (x = m * (n + a), A.length ? Y = (A[0].y + A[A.length - 1].y) / 2 : Y = D * (i + s)), F.note.file) {
        let le = "n" + l++;
        d.set(F.key, le), c.push({
          id: le,
          type: "file",
          file: F.note.file.path,
          x: Math.round(x),
          y: Math.round(Y),
          width: n,
          height: i
        });
      }
      return { x, y: Y };
    }, "layout");
    g(e, 0, 0);
    let w = /* @__PURE__ */ T((F) => {
      for (let m of F.children || []) {
        let D = d.get(F.key), W = d.get(m.key);
        D && W && p.push({
          id: "e" + r++,
          fromNode: D,
          toNode: W,
          fromSide: o ? "bottom" : "right",
          toSide: o ? "top" : "left",
          color: "1"
        }), w(m);
      }
    }, "collectEdges");
    w(e);
    for (let F of this._nodeIndex.values()) {
      if (!F.note.file || F.isAlias) continue;
      let m = F.parent && F.parent.note.file ? F.parent.note.file.path : null;
      for (let D of F.note.parentLinks) {
        let W = this.app.metadataCache.getFirstLinkpathDest(D, F.note.file.path);
        if (!(!W || W.path === m)) {
          for (let C of this._nodeIndex.values())
            if (C.note.file && C.note.file.path === W.path && !C.isAlias) {
              let A = d.get(F.key), x = d.get(C.key);
              A && x && p.push({ id: "e" + r++, fromNode: A, toNode: x, fromSide: o ? "bottom" : "right", toSide: o ? "top" : "left", color: "4" });
              break;
            }
        }
      }
    }
    if (this.s.showDupLine) {
      let F = /* @__PURE__ */ new Map();
      for (let m of this._nodeIndex.values()) m.note.file && (F.has(m.note.file.path) || F.set(m.note.file.path, []), F.get(m.note.file.path).push(m));
      for (let [m, D] of F) {
        if (D.length < 2) continue;
        let W = D.find((C) => !C.isAlias) || D[0];
        for (let C of D) {
          if (C === W) continue;
          let A = d.get(C.key), x = d.get(W.key);
          A && x && p.push({ id: "e" + r++, fromNode: A, toNode: x, fromSide: o ? "bottom" : "right", toSide: o ? "top" : "left", color: "4" });
        }
      }
    }
    if (!c.length) {
      new b(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u8282\u70B9"));
      return;
    }
    let E = JSON.stringify({ nodes: c, edges: p }, null, 2), _ = "link-mindmap-canvas-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".canvas";
    this.app.vault.create(_, E).then(
      () => new b(t("Canvas \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + _),
      (F) => new b(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (F && F.message ? F.message : F))
    );
  }
  _parentPathsOf(e) {
    let n = [];
    for (let i of this.notes.values())
      if (i.file.path !== e)
        for (let a of i.childLinks) {
          let s = this.app.metadataCache.getFirstLinkpathDest(a, i.file.path);
          if (s && s.path === e) {
            n.push(i.file.path);
            break;
          }
        }
    return n;
  }
  _buildCrumbChain() {
    if (!this.rootPath) return [];
    let e = [], n = /* @__PURE__ */ new Set(), i = this.rootPath;
    for (; i && !n.has(i); ) {
      n.add(i);
      let a = this.notes.get(i);
      if (!a) break;
      e.unshift({ note: a });
      let s = this._parentPathsOf(i);
      i = s.length ? s[0] : null;
    }
    return e;
  }
  _up() {
    let e = this._selKey ? this._nodeIndex.get(this._selKey) : null, n = e && e.note.file ? e.note : this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!n || !n.file) {
      new b(t("\u6CA1\u6709\u53EF\u8DF3\u8F6C\u7684\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let i = this._parentPathsOf(n.file.path);
    if (!i.length) {
      new b("\u300C" + we(n.title, 12) + t("\u300D\u6CA1\u6709\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let a = n.file.path, s = /* @__PURE__ */ T((c) => {
      this._focusPath(c);
      let p = [...this._nodeIndex.values()].find((d) => d.note.file && d.note.file.path === a);
      p && (this._selKey = p.key, this.render());
    }, "go");
    if (i.length === 1) {
      s(i[0]);
      return;
    }
    let o = i.map((c) => ({ label: (this.notes.get(c) || {}).title || c, path: c }));
    new ze(this.app, o, (c) => s(c.path), t("\u8BE5\u8282\u70B9\u6709\u591A\u4E2A\u4E0A\u7EA7\uFF0C\u9009\u62E9\u8981\u524D\u5F80\u7684\u4E0A\u7EA7\u2026")).open();
  }
  locateFile(e, n) {
    if (!n && !this.s.autoLocate || !e || e.extension !== "md" || this._batchMode || this._mode === "dash") return;
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
    let s = a[0], o = !1;
    this.rootPath !== s.note.file.path && (this._history.push({ rootPath: this.rootPath, kwFile: this._kwFile, multiRoot: this._multiRoot, currentRoot: this._multiRoot ? this.currentRoot : null }), this.rootPath = s.note.file.path, o = !0);
    for (let c = 0; c < a.length; c++)
      c < a.length - 1 && !a[c].expanded && (o = !0), a[c].expanded = !0, this._expandedMem.set(a[c].note.file ? a[c].note.file.path : a[c].key, !0);
    !o && this._selKey === i.key || (this._selKey = i.key, this.render({ centerPath: e.path }));
  }
  _findClone(e, n) {
    if (!e) return null;
    if (e.note.file && e.note.file.path === n) return e;
    for (let i of e.children || []) {
      let a = this._findClone(i, n);
      if (a) return a;
    }
    return null;
  }
  _cloneShown(e) {
    let n = e;
    for (; n && n.parent; ) {
      if (!n.parent.expanded) return !1;
      n = n.parent;
    }
    return !0;
  }
  _select(e) {
    this._selKey = e, this.render();
  }
  _copyLink(e) {
    if (!e || !e.note.file) return;
    let n = "[[" + e.note.file.basename + "]]";
    navigator.clipboard.writeText(n).then(
      () => new b(t("\u5DF2\u590D\u5236\uFF1A") + n),
      () => new b(t("\u590D\u5236\u5931\u8D25"))
    );
  }
  _copySubtree(e) {
    if (!e) return;
    let n = [], i = /* @__PURE__ */ T((a, s) => {
      let o = s === 0 ? "" : "  ".repeat(s) + "- ";
      n.push(o + "[[" + (a.note.file ? a.note.file.basename : a.note.title) + "]]");
      for (let c of a.children || []) i(c, s + 1);
    }, "walk");
    i(e, 0), navigator.clipboard.writeText(n.join(`
`)).then(
      () => new b(t("\u5DF2\u590D\u5236\u5B50\u6811\uFF08") + n.length + t(" \u4E2A\u8282\u70B9\uFF09")),
      () => new b(t("\u590D\u5236\u5931\u8D25"))
    );
  }
  _renameNode(e) {
    if (!e || !e.note.file) {
      new b(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    let n = e.note.file.basename.endsWith(".excalidraw"), i = n ? e.note.file.basename.slice(0, -11) : e.note.file.basename;
    new ts(this.app, i, async (a) => {
      try {
        let s = e.note.file.basename, o = e.note.file.parent ? e.note.file.parent.path : "", c = n ? ".excalidraw.md" : ".md", p = Ge(a), d = be((o ? o + "/" : "") + p + c);
        if (d === e.note.file.path) return;
        if (this.app.vault.getAbstractFileByPath(d)) {
          new b(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + p);
          return;
        }
        await this.app.vault.rename(e.note.file, d);
        let l = p + (n ? ".excalidraw" : ""), r = this.s.linkField || "children", h = this.s.backField || "parent";
        for (let w of this.notes.values())
          w.file.path !== d && await this.app.fileManager.processFrontMatter(w.file, (f) => {
            let E = je(f[r]), y = !1, _ = E.map((F) => Le(F) === s ? (y = !0, "[[" + l + "]]") : F);
            y && (f[r] = _), f[h] != null && Le(f[h]) === s && (f[h] = l);
          });
        let g = this.s.titleField || "title";
        await this.app.fileManager.processFrontMatter(e.note.file, (w) => {
          w[g] != null && (w[g] = p);
        }), new b(t("\u5DF2\u91CD\u547D\u540D\u4E3A ") + p), await this.rebuild(!0);
      } catch (s) {
        new b(t("\u91CD\u547D\u540D\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s)), console.error("[link-mindmap] _renameNode:", s);
      }
    }).open();
  }
  _subtreePaths(e) {
    let n = /* @__PURE__ */ new Set();
    return (/* @__PURE__ */ T((function i(a) {
      a.note.file && n.add(a.note.file.path), a.children.forEach(i);
    }), "walk"))(e), n;
  }
  _deleteNode(e) {
    if (!e || !e.note.file) {
      new b(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (e.isAlias) {
      if (!e.parent || !e.parent.note.file) {
        new b(t("\u65E0\u6CD5\u786E\u5B9A\u8BE5\u6302\u70B9\u7684\u7236\u8282\u70B9"));
        return;
      }
      new Ye(
        this.app,
        t("\u79FB\u9664\u5173\u8054"),
        "\u300C" + we(e.note.title, 16) + t(`\u300D\u662F\u91CD\u590D\u8282\u70B9\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\uFF09\u3002
\u672C\u6B21\u53EA\u79FB\u9664\u4ECE\u300C`) + we(e.parent.note.title, 16) + t("\u300D\u5230\u5B83\u7684\u5173\u8054\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\u3002"),
        async () => {
          try {
            await Ve(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), this._selKey = null, new b(t("\u5DF2\u79FB\u9664\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (a) {
            new b(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a)), console.error("[link-mindmap] removeLink:", a);
          }
        }
      ).open();
      return;
    }
    let n = e.children.length, i = new $e(this.app);
    i.onOpen = () => {
      let { contentEl: a } = i;
      a.createEl("h3", { text: t("\u5220\u9664\u8282\u70B9") }), a.createEl("p", { text: "\u300C" + we(e.note.title, 20) + "\u300D" + (n ? t("\uFF08\u542B ") + n + t(" \u4E2A\u5B50\u8282\u70B9\uFF09") : ""), cls: "lkm-modal-sub" });
      let s = a.createDiv("lkm-confirm-row");
      s.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => i.close());
      let c = s.createEl("button", { cls: "lkm-btn", text: t("\u79FB\u9664\u5F53\u524D\u5173\u8054") });
      c.title = e.parent && e.parent.note.file ? t("\u53EA\u79FB\u9664\u5F53\u524D\u7236\u8282\u70B9\u5230\u5B83\u7684\u94FE\u63A5\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559") : t("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"), (!e.parent || !e.parent.note.file) && (c.disabled = !0), c.addEventListener("click", () => {
        if (!e.parent || !e.parent.note.file) {
          new b(t("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"));
          return;
        }
        i.close(), (async () => {
          try {
            await Ve(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), this._selKey = null, new b(t("\u5DF2\u79FB\u9664\u4ECE\u300C") + we(e.parent.note.title, 14) + t("\u300D\u5230\u300C") + we(e.note.title, 14) + t("\u300D\u7684\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (l) {
            new b(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l)), console.error("[link-mindmap] removeLink:", l);
          }
        })();
      });
      let p = s.createEl("button", { cls: "lkm-btn", text: t("\u79FB\u9664\u6240\u6709\u5173\u8054") });
      p.title = t("\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559"), p.addEventListener("click", () => {
        i.close(), (async () => {
          try {
            let l = e.note.file.path;
            for (let r of this.notes.values())
              r.file.path !== l && r.childLinks.length && await Ve(this.app, r.file, this.s.linkField, l);
            this._selKey = null, new b(t("\u5DF2\u79FB\u9664\u6240\u6709\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (l) {
            new b(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (l && l.message ? l.message : l)), console.error("[link-mindmap] removeLink:", l);
          }
        })();
      });
      let d = s.createEl("button", { cls: "lkm2-btn-danger", text: t("\u5220\u9664\u6587\u4EF6") });
      d.title = t("\u79FB\u5165\u56DE\u6536\u7AD9\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664"), d.addEventListener("click", () => {
        if (!n) {
          i.close(), this._doDelete(e);
          return;
        }
        let l = new $e(this.app);
        l.onOpen = () => {
          let { contentEl: r } = l;
          r.createEl("h3", { text: t("\u5220\u9664\u5B50\u8282\u70B9") }), r.createEl("p", { text: "\u300C" + we(e.note.title, 20) + t("\u300D\u542B ") + n + t(" \u4E2A\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u4E00\u5E76\u5220\u9664\uFF1F"), cls: "lkm-modal-sub" });
          let h = r.createDiv("lkm-confirm-row");
          h.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => l.close()), h.createEl("button", { cls: "lkm-btn", text: t("\u4EC5\u5220\u6B64\u8282\u70B9") }).addEventListener("click", () => {
            l.close(), i.close(), this._doDelete(e);
          }), h.createEl("button", { cls: "lkm2-btn-danger", text: t("\u5168\u90E8\u5220\u9664") }).addEventListener("click", () => {
            l.close(), i.close(), this._doDelete(e, !0);
          });
        }, l.onClose = () => l.contentEl.empty(), l.open();
      });
    }, i.onClose = () => i.contentEl.empty(), i.open();
  }
  async _doDelete(e, n) {
    try {
      let i = n ? this._subtreePaths(e) : /* @__PURE__ */ new Set([e.note.file.path]);
      for (let s of this.notes.values())
        if (!i.has(s.file.path))
          for (let o of i)
            s.childLinks.length && await Ve(this.app, s.file, this.s.linkField, o);
      for (let s of i) {
        let o = this.app.vault.getAbstractFileByPath(s);
        o && o.path && await this.app.vault.trash(o, !0);
      }
      this._selKey = null;
      let a = i.size;
      new b(t("\u5DF2\u5220\u9664\u300C") + we(e.note.title, 16) + "\u300D" + (a > 1 ? t("\uFF08\u542B\u5B50\u8282\u70B9\u5171 ") + a + t(" \u4E2A\u6587\u4EF6\uFF09") : "") + t("\uFF08\u53EF\u5728\u56DE\u6536\u7AD9\u6062\u590D\uFF09")), await this.rebuild(!0);
    } catch (i) {
      new b(t("\u5220\u9664\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _deleteNode:", i);
    }
  }
  _showNodeMenu(e, n) {
    if (!e || !e.note.file) return;
    this._hidePreview();
    let i = new qe();
    i.addItem((s) => s.setTitle(t("\u6253\u5F00\u7B14\u8BB0")).setIcon("file-text").onClick(() => {
      this.app.workspace.getLeaf(!0).openFile(e.note.file);
    })), i.addItem((s) => s.setTitle(t("\u65B0\u589E\u5B50\u8282\u70B9")).setIcon("plus").onClick(() => this.createChild(e))), i.addItem((s) => s.setTitle(t("\u6DFB\u52A0\u5DF2\u6709\u7B14\u8BB0")).setIcon("link").onClick(() => this._linkExistingNote(e))), i.addItem((s) => s.setTitle(t("\u805A\u7126\u5230\u6B64\u8282\u70B9")).setIcon("focus").onClick(() => this._focus(e.key)));
    let a = this._parentPathsOf(e.note.file.path);
    if (i.addItem((s) => s.setTitle(t("\u8DF3\u5230\u4E0A\u7EA7")).setIcon("arrow-up").onClick(() => this._up())), a.length > 1)
      for (let s of a) {
        let o = this.notes.get(s);
        i.addItem((c) => c.setTitle("  \u21B3 " + we(o ? o.title : s, 20)).setIcon("arrow-up").onClick(() => {
          this._focusPath(s);
          let p = [...this._nodeIndex.values()].find((d) => d.note.file && d.note.file.path === e.note.file.path);
          p && (this._selKey = p.key, this.render());
        }));
      }
    i.addSeparator(), i.addItem((s) => s.setTitle(t("\u4FEE\u6539\u72B6\u6001")).setIcon("circle-dot").onClick(() => this._setStatusDialog(e))), i.addItem((s) => s.setTitle(e.note.zk ? t("\u53D6\u6D88\u4E3B\u7B14\u8BB0") : t("\u6807\u8BB0\u4E3B\u7B14\u8BB0")).setIcon("star").onClick(() => this._toggleZk(e))), i.addItem((s) => s.setTitle(t("\u4FEE\u6539\u7C7B\u578B")).setIcon("tag").onClick(() => this._setTypeDialog(e))), i.addItem((s) => s.setTitle(t("\u4FEE\u6539\u65E5\u671F")).setIcon("calendar").onClick(() => this._setDateDialog(e))), e.children.length && i.addItem((s) => s.setTitle(e.expanded ? t("\u6298\u53E0\u5B50\u8282\u70B9") : t("\u5C55\u5F00\u5B50\u8282\u70B9")).setIcon(e.expanded ? "chevron-down" : "chevron-right").onClick(() => {
      e.expanded = !e.expanded, this._expandedMem.set(e.note.file ? e.note.file.path : e.key, e.expanded), this.render();
    })), i.addSeparator(), i.addItem((s) => s.setTitle(t("\u91CD\u547D\u540D")).setIcon("pencil").onClick(() => this._renameNode(e))), i.addItem((s) => s.setTitle(t("\u4FEE\u6539\u63CF\u8FF0")).setIcon("text-cursor").onClick(() => this._editDesc(e))), i.addItem((s) => s.setTitle(t("\u590D\u5236\u94FE\u63A5")).setIcon("copy").onClick(() => this._copyLink(e))), i.addItem((s) => s.setTitle(t("\u590D\u5236\u5B50\u6811\u5927\u7EB2")).setIcon("list").onClick(() => this._copySubtree(e))), i.addItem((s) => s.setTitle(t("\u79FB\u52A8\u5230\u7236\u5361")).setIcon("corner-up-right").onClick(() => this._moveNodeDialog(e))), i.addItem((s) => s.setTitle(t("\u540C\u7EA7\u4E4B\u524D")).setIcon("arrow-up").onClick(() => this._moveSiblingDialog(e, !1))), i.addItem((s) => s.setTitle(t("\u540C\u7EA7\u4E4B\u540E")).setIcon("arrow-down").onClick(() => this._moveSiblingDialog(e, !0))), e.note.file && e.note.file.extension === "md" && !e.note.file.basename.endsWith(".excalidraw") && i.addItem((s) => s.setTitle(t("\u8F6C\u4E3A excalidraw")).setIcon("wand-2").onClick(() => this.plugin._convertToExcalidraw(e.note.file))), i.addSeparator(), i.addItem((s) => s.setTitle(e.isAlias ? t("\u79FB\u9664\u5173\u8054\uFF08\u4FDD\u7559\u6587\u4EF6\uFF09") : t("\u5220\u9664\u8282\u70B9")).setIcon("trash").onClick(() => this._deleteNode(e))), n && typeof n.preventDefault == "function" ? i.showAtMouseEvent(n) : n && n.clientX !== void 0 && i.showAtPosition({ x: n.clientX, y: n.clientY });
  }
  _isDescendant(e, n) {
    return this._subtreePaths(e).has(n);
  }
  _moveNodeDialog(e) {
    if (!e || !e.note.file) return;
    let n = this._subtreePaths(e), i = [...this.notes.values()].filter((a) => a.file.path !== e.note.file.path && !n.has(a.file.path)).sort((a, s) => a.title.localeCompare(s.title, "zh")).map((a) => ({ label: a.title, path: a.file.path }));
    if (!i.length) {
      new b(t("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new mt(this.app, i, (a) => this._moveNode(e, a.path)).open();
  }
  async _moveNode(e, n) {
    let i = e.note;
    if (!i.file) return;
    if (this._subtreePaths(e).has(n)) {
      new b(t("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let a = this.notes.get(n);
    if (!a) {
      new b(t("\u76EE\u6807\u7236\u7B14\u8BB0\u4E0D\u5B58\u5728"));
      return;
    }
    try {
      e.parent && e.parent.note.file && await Ve(this.app, e.parent.note.file, this.s.linkField, i.file.path), await et(this.app, a.file, this.s.linkField, ot(i.file)), new b(t("\u5DF2\u79FB\u52A8\u300C") + we(i.title, 14) + t("\u300D\u5230\u300C") + we(a.title, 14) + "\u300D"), await new Promise((s) => setTimeout(s, 300)), await this.rebuild(!0);
    } catch (s) {
      new b(t("\u79FB\u52A8\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
    }
  }
  _moveSiblingDialog(e, n) {
    if (!e || !e.parent || !e.parent.note.file) {
      new b(t("\u6839\u8282\u70B9\u6CA1\u6709\u540C\u7EA7\u8282\u70B9"));
      return;
    }
    let i = e.parent.children.filter((s) => s !== e);
    if (!i.length) {
      new b(t("\u6CA1\u6709\u540C\u7EA7\u8282\u70B9\u53EF\u63D2\u5165"));
      return;
    }
    let a = i.map((s) => ({ label: s.note.title, path: s.note.file.path }));
    new mt(this.app, a, (s) => this._reorderSiblings(e, s.path, n)).open();
  }
  async _reorderSiblings(e, n, i) {
    if (!e.parent || !e.parent.note.file) {
      new b(t("\u65E0\u6CD5\u6392\u5E8F\uFF1A\u591A\u9009\u6839\u8282\u70B9\u95F4\u4E0D\u80FD\u8C03\u6574\u987A\u5E8F"));
      return;
    }
    let a = e.parent.note.file;
    try {
      await this.app.fileManager.processFrontMatter(a, (s) => {
        let o = this.s.linkField, c = je(s[o]), p = /* @__PURE__ */ T((h) => c.findIndex((g) => {
          let w = this.app.metadataCache.getFirstLinkpathDest(Le(g), a.path);
          return w && w.path === h;
        }), "idxOf"), d = p(e.note.file.path);
        if (d < 0) return;
        let l = c.splice(d, 1)[0], r = p(n);
        if (r < 0) {
          c.splice(d, 0, l);
          return;
        }
        c.splice(i ? r + 1 : r, 0, l), s[o] = c;
      }), await new Promise((s) => setTimeout(s, 300)), await this.rebuild(!0);
    } catch (s) {
      new b(t("\u540C\u7EA7\u79FB\u52A8\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
    }
  }
  async _moveAndReorder(e, n, i) {
    if (!n.parent || !n.parent.note.file) {
      new b(t("\u65E0\u6CD5\u79FB\u52A8\u5230\u8BE5\u4F4D\u7F6E"));
      return;
    }
    if (this._subtreePaths(e).has(n.parent.note.file.path)) {
      new b(t("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let a = n.parent.note.file;
    try {
      if (e.parent && e.parent.note.file && await Ve(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), await this.app.fileManager.processFrontMatter(a, (s) => {
        let o = this.s.linkField, c = je(s[o]);
        c.some((g) => Le(g) === e.note.file.basename) || c.push("[[" + e.note.file.basename + "]]");
        let d = /* @__PURE__ */ T((g) => c.findIndex((w) => {
          let f = this.app.metadataCache.getFirstLinkpathDest(Le(w), a.path);
          return f && f.path === g;
        }), "idxOf"), l = d(e.note.file.path);
        if (l < 0) return;
        let r = c.splice(l, 1)[0], h = d(n.note.file.path);
        if (h < 0) {
          c.splice(l, 0, r);
          return;
        }
        c.splice(i ? h + 1 : h, 0, r), s[o] = c;
      }), this.s.autoAddBackLink) {
        let s = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(e.note.file, (o) => {
          o[s] = a.basename;
        });
      }
      new b(t("\u5DF2\u79FB\u52A8\u300C") + we(e.note.title, 14) + t("\u300D\u5230\u300C") + we(n.parent.note.title, 14) + "\u300D" + t(i ? "\u4E4B\u540E" : "\u4E4B\u524D")), await new Promise((s) => setTimeout(s, 300)), await this.rebuild(!0);
    } catch (s) {
      new b(t("\u79FB\u52A8\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
    }
  }
  _wouldCycle(e, n) {
    if (e === n) return !0;
    let i = [n], a = /* @__PURE__ */ new Set(), s = 0;
    for (; i.length && s++ < 5e3; ) {
      let o = i.pop();
      if (o === e) return !0;
      if (a.has(o)) continue;
      a.add(o);
      let c = this.notes.get(o);
      if (c)
        for (let p of c.childLinks) {
          let d = this.app.metadataCache.getFirstLinkpathDest(p, c.file.path);
          d && this.notes.has(d.path) && i.push(d.path);
        }
    }
    return !1;
  }
  async _addRelation(e, n) {
    let i = e && e.note;
    if (!i || !i.file) {
      new b(t("\u6E90\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (!n || !n.file) {
      new b(t("\u76EE\u6807\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (i.file.path === n.file.path) {
      new b(t("\u4E0D\u80FD\u5173\u8054\u5230\u81EA\u5DF1"));
      return;
    }
    if (ft(this.app, this.notes, i, "child").some((a) => a.file.path === n.file.path)) {
      new b("\u300C" + we(i.title, 12) + t("\u300D\u5DF2\u5173\u8054\u5230\u300C") + we(n.title, 12) + t("\u300D\uFF0C\u65E0\u9700\u91CD\u590D"));
      return;
    }
    if (this._wouldCycle(i.file.path, n.file.path)) {
      new b(t("\u4E0D\u80FD\u5EFA\u7ACB\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF\uFF08\u76EE\u6807\u5DF2\u662F\u300C") + we(i.title, 12) + t("\u300D\u7684\u4E0A\u7EA7\uFF09"));
      return;
    }
    try {
      if (await et(this.app, i.file, this.s.linkField, ot(n.file)), this.s.autoAddBackLink) {
        let a = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(n.file, (s) => {
          je(s[a]).some((p) => Le(p) !== "") || (s[a] = i.file.basename);
        });
      }
      new b(t("\u5DF2\u5EFA\u7ACB\u5173\u8054\uFF1A") + we(i.title, 12) + " \u2192 " + we(n.title, 12)), await new Promise((a) => setTimeout(a, 300)), await this.rebuild(!0);
    } catch (a) {
      new b(t("\u5EFA\u7ACB\u5173\u8054\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
    }
  }
  _linkExistingNote(e) {
    if (!e.note.file) return;
    let n = this._subtreePaths(e), i = [...this.notes.values()].filter((a) => a.file && !n.has(a.file.path)).map((a) => ({ label: a.title, path: a.file.path }));
    if (!i.length) {
      new b(t("\u6CA1\u6709\u53EF\u7528\u7684\u7B14\u8BB0"));
      return;
    }
    new ze(this.app, i, async (a) => {
      let s = this.notes.get(a.path);
      if (!(!s || !s.file)) {
        if (ft(this.app, this.notes, e.note, "child").some((o) => o.file.path === s.file.path)) {
          new b(t("\u5DF2\u5173\u8054\u5230\u8BE5\u7B14\u8BB0"));
          return;
        }
        if (this._wouldCycle(e.note.file.path, s.file.path)) {
          new b(t("\u4E0D\u80FD\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF"));
          return;
        }
        try {
          if (await et(this.app, e.note.file, this.s.linkField, ot(s.file)), this.s.autoAddBackLink) {
            let o = this.s.backField || "parent";
            await this.app.fileManager.processFrontMatter(s.file, (c) => {
              je(c[o]).some((l) => Le(l) !== "") || (c[o] = e.note.file.basename);
            });
          }
          new b(t("\u5DF2\u5173\u8054\uFF1A") + we(e.note.title, 12) + " \u2192 " + we(s.title, 12)), await new Promise((o) => setTimeout(o, 300)), await this.rebuild(!0);
        } catch (o) {
          new b(t("\u5173\u8054\u5931\u8D25\uFF1A") + (o && o.message ? o.message : o));
        }
      }
    }, t("\u9009\u62E9\u8981\u5173\u8054\u7684\u7B14\u8BB0\u2026")).open();
  }
  _editDesc(e) {
    e.note.file && new ss(this.app, e.note.desc, async (n) => {
      try {
        await this.app.fileManager.processFrontMatter(e.note.file, (i) => {
          i[this.s.descField || "description"] = n;
        }), await new Promise((i) => setTimeout(i, 300)), await this.rebuild(!0);
      } catch (i) {
        new b(t("\u4FDD\u5B58\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
      }
    }).open();
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
      new b(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = e.map((s) => this._nodeIndex.get(s)).filter(Boolean), i = /* @__PURE__ */ new Set();
    n.forEach((s) => this._subtreePaths(s).forEach((o) => i.add(o)));
    let a = [...this.notes.values()].filter((s) => !i.has(s.file.path)).sort((s, o) => s.title.localeCompare(o.title, "zh")).map((s) => ({ label: s.title, path: s.file.path }));
    if (!a.length) {
      new b(t("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new mt(this.app, a, async (s) => {
      let o = this.notes.get(s.path), c = 0;
      for (let p of n)
        if (p.note.file)
          try {
            p.parent && p.parent.note.file && await Ve(this.app, p.parent.note.file, this.s.linkField, p.note.file.path), await et(this.app, o.file, this.s.linkField, ot(p.note.file)), c++;
          } catch {
          }
      new b(t("\u6279\u91CF\u79FB\u52A8\u5B8C\u6210\uFF1A") + c + t(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchDelete() {
    let e = [...this._selected];
    if (!e.length) {
      new b(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = e.map((c) => this._nodeIndex.get(c)).filter((c) => c && c.note.file), i = n.filter((c) => !c.isAlias), a = new Set(i.map((c) => c.note.file.path)), s = n.filter((c) => c.isAlias && !a.has(c.note.file.path)), o = "";
    if (i.length && (o += t("\u5C06\u628A ") + i.length + t(" \u7BC7\u7B14\u8BB0\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u7684\u94FE\u63A5\u91CC\u79FB\u9664\u3002")), s.length && (o += (o ? " " : "") + t("\u53E6\u5C06\u79FB\u9664 ") + s.length + t(" \u4E2A\u989D\u5916\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09\u3002")), !o) {
      new b(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    new Ye(this.app, t("\u6279\u91CF\u5220\u9664"), o, async () => {
      let c = 0;
      for (let p of s)
        try {
          p.parent && p.parent.note.file && (await Ve(this.app, p.parent.note.file, this.s.linkField, p.note.file.path), c++);
        } catch {
        }
      for (let p of i)
        try {
          let d = p.note.file;
          for (let l of this.notes.values())
            l.file.path !== d.path && l.childLinks.length && await Ve(this.app, l.file, this.s.linkField, d.path);
          await this.app.vault.trash(d, !0), c++;
        } catch {
        }
      new b(t("\u5DF2\u5904\u7406 ") + c + t(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchSetType() {
    if (![...this._selected].length) {
      new b(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = this.s.typeColors || {}, i = Object.keys(n), a = [{ label: t("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: s, path: s });
    new ze(this.app, a, (s) => this._batchSetTypeDo(s.path), t("\u6279\u91CF\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _batchSetTypeDo(e) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new b(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let a = this.s.typeField || "type", s = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (c) => {
          e ? c[a] = e : delete c[a];
        }), s++;
      } catch (c) {
        console.error("[link-mindmap] _batchSetTypeDo:", c);
      }
    new b(t("\u5DF2\u4FEE\u6539 ") + s + t(" \u4E2A\u8282\u70B9\u7C7B\u578B\u4E3A\u300C") + (e || t("\u65E0\u7C7B\u578B")) + "\u300D"), await this.rebuild(!0);
  }
  _batchSetStatus() {
    if (![...this._selected].length) {
      new b(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = this.s.statusColors || {}, i = Object.keys(n), a = [{ label: t("\u65E0\u72B6\u6001\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: Me(s), path: s });
    new ze(this.app, a, (s) => this._batchSetStatusDo(s.path), t("\u6279\u91CF\u9009\u62E9\u72B6\u6001\u2026")).open();
  }
  async _batchSetStatusDo(e) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new b(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let a = this.s.statusField || "status", s = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (c) => {
          e ? c[a] = e : delete c[a];
        }), s++;
      } catch (c) {
        console.error("[link-mindmap] _batchSetStatusDo:", c);
      }
    new b(t("\u5DF2\u4FEE\u6539 ") + s + t(" \u4E2A\u8282\u70B9\u72B6\u6001\u4E3A\u300C") + (e ? Me(e) : t("\u65E0\u72B6\u6001")) + "\u300D"), await this.rebuild(!0);
  }
  async _batchSetMain(e) {
    let n = [...this._selected];
    if (!n.length) {
      new b(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let i = n.map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new b(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    let a = this.s.zkField || "main", s = 0;
    for (let o of i)
      try {
        await this.app.fileManager.processFrontMatter(o.note.file, (c) => {
          c[a] = e;
        }), s++;
      } catch (c) {
        console.error("[link-mindmap] _batchSetMain:", c);
      }
    new b(t("\u5DF2") + t(e ? "\u6807\u8BB0\u4E3B\u7B14\u8BB0" : "\u53D6\u6D88\u4E3B\u7B14\u8BB0") + " " + s + t(" \u4E2A\u8282\u70B9")), await this.rebuild(!0);
  }
  _setStatusDialog(e) {
    if (!e || !e.note.file) return;
    let n = this.s.statusColors || {}, i = Object.keys(n), a = [{ label: t("\u65E0\u72B6\u6001\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: Me(s) + (e.note.status === s ? " \u2713" : ""), path: s });
    new ze(this.app, a, (s) => this._setStatus(e, s.path), t("\u9009\u62E9\u72B6\u6001\u2026")).open();
  }
  async _setStatus(e, n) {
    if (e.note.file)
      try {
        let i = this.s.statusField || "status";
        await this.app.fileManager.processFrontMatter(e.note.file, (a) => {
          n ? a[i] = n : delete a[i];
        }), new b(t("\u5DF2\u4FEE\u6539\u72B6\u6001\uFF1A") + (n ? Me(n) : t("\u65E0\u72B6\u6001")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new b(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
      }
  }
  async _toggleZk(e) {
    if (e.note.file)
      try {
        let n = !1;
        await this.app.fileManager.processFrontMatter(e.note.file, (i) => {
          let a = this.s.zkField || "main";
          n = !(i[a] === !0 || String(i[a]) === "true"), i[a] = n;
        }), new b(t(n ? "\u5DF2\u6807\u8BB0\u4E3B\u7B14\u8BB0\uFF1A" : "\u5DF2\u53D6\u6D88\u4E3B\u7B14\u8BB0\uFF1A") + e.note.title), await this.rebuild(!0);
      } catch (n) {
        new b(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
      }
  }
  _setTypeDialog(e) {
    if (!e || !e.note.file) return;
    let n = this.s.typeColors || {}, i = Object.keys(n), a = [{ label: t("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: De(s) + (e.note.type === s ? " \u2713" : ""), path: s });
    new ze(this.app, a, (s) => this._setType(e, s.path), t("\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _setType(e, n) {
    if (e.note.file)
      try {
        let i = this.s.typeField || "type";
        await this.app.fileManager.processFrontMatter(e.note.file, (a) => {
          n ? a[i] = n : delete a[i];
        }), new b(t("\u5DF2\u4FEE\u6539\u7C7B\u578B\uFF1A") + (n || t("\u65E0\u7C7B\u578B")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new b(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setType:", i);
      }
  }
  _setDateDialog(e) {
    if (!e || !e.note.file) return;
    let n = new $e(this.app);
    n.onOpen = () => {
      let { contentEl: i } = n;
      i.addClass("lkm-multipick"), i.createEl("h3", { text: t("\u4FEE\u6539\u65E5\u671F") }), i.createEl("p", { text: "\u300C" + we(e.note.title, 20) + t("\u300D\u5F53\u524D\u65E5\u671F\uFF1A") + (e.note.date || t("\u65E0")), cls: "lkm-modal-sub" });
      let a = i.createEl("input", { type: "date", cls: "lkm-multipick-input" });
      a.value = e.note.date || "";
      let s = i.createDiv("lkm-multipick-btns");
      new ee(s).addButton((o) => o.setButtonText(t("\u786E\u5B9A")).setCta().onClick(() => {
        let c = a.value || "";
        n.close(), this._setDate(e, c);
      })).addButton((o) => o.setButtonText(t("\u6E05\u9664")).onClick(() => {
        n.close(), this._setDate(e, "");
      })).addButton((o) => o.setButtonText(t("\u53D6\u6D88")).onClick(() => n.close())), a.focus();
    }, n.onClose = () => n.contentEl.empty(), n.open();
  }
  async _setDate(e, n) {
    if (e.note.file)
      try {
        let i = this.s.dateField || "date";
        await this.app.fileManager.processFrontMatter(e.note.file, (a) => {
          n ? a[i] = n : delete a[i];
        }), new b(t("\u5DF2\u4FEE\u6539\u65E5\u671F\uFF1A") + (n || t("\u65E0")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new b(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setDate:", i);
      }
  }
  openRootPicker() {
    let e = [...this.notes.values()].filter((i) => i.zk).sort((i, a) => i.title.localeCompare(a.title, "zh")), n = e.length ? e : [...this.notes.values()].filter((i) => !this.referenced.has(i.file.path));
    if (!n.length) {
      new b(t("\u6CA1\u6709\u4E3B\u7B14\u8BB0\uFF08main: true\uFF09"));
      return;
    }
    new ze(
      this.app,
      n.map((i) => ({ label: i.title, path: i.file.path })),
      (i) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = i.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      t("\u9009\u62E9\u4E3B\u7B14\u8BB0\u2026")
    ).open();
  }
  openNoteSearch() {
    let e = [...this.notes.values()].sort((n, i) => n.title.localeCompare(i.title, "zh"));
    if (!e.length) {
      new b(t("\u6CA1\u6709\u53EF\u641C\u7D22\u7684\u7B14\u8BB0"));
      return;
    }
    new ze(
      this.app,
      e.map((n) => ({ label: n.title, path: n.file.path })),
      (n) => {
        this._kwFile = null, this._multiRoot = !1, this.rootPath = n.path, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render();
      },
      t("\u641C\u7D22\u7B14\u8BB0\u2026")
    ).open();
  }
  openMultiPick() {
    let e = [...this.notes.values()].sort((o, c) => (c.file.stat.ctime || 0) - (o.file.stat.ctime || 0));
    if (!e.length) {
      new b(t("\u6CA1\u6709\u53EF\u9009\u7684\u7B14\u8BB0"));
      return;
    }
    let n = [];
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length)
      n = this.currentRoot.children.map((o) => o.note.file ? o.note.file.path : null).filter(Boolean);
    else if (this._selKey) {
      let o = this._nodeIndex.get(this._selKey);
      o && o.note.file && n.push(o.note.file.path);
    }
    let i = Object.keys(this.s.typeColors || {}), a = this.s.statusColors || {}, s = e.map((o) => ({
      label: o.title,
      path: o.file.path,
      isMain: o.zk,
      type: o.type || "",
      status: o.status || "",
      orphan: !o.childLinks.length && !this.referenced.has(o.file.path)
    }));
    new es(
      this.app,
      s,
      (o) => this._showMultiRoot(o),
      n,
      i,
      a
    ).open();
  }
  _buildMultiRootTree(e, n) {
    let i = /* @__PURE__ */ new Set(), a = e.filter((r) => i.has(r.file.path) ? !1 : (i.add(r.file.path), !0)), s = a.map((r) => it(this.app, this.notes, r)), o = s.map((r) => {
      let h = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ T(function g(w) {
        w.note.file && h.add(w.note.file.path), w.children.forEach(g);
      }, "collect"))(r), h;
    }), c = a.map((r) => r.file.path), p = [], d = [];
    for (let r = 0; r < s.length; r++) {
      let h = !1;
      for (let g = 0; g < s.length; g++)
        if (r !== g && o[g].has(c[r])) {
          h = !0;
          break;
        }
      h || (p.push(s[r]), d.push(c[r]));
    }
    let l = {
      note: { file: null, title: n, zk: !1, status: "", type: "", date: "", childLinks: [], parentLinks: [] },
      parent: null,
      children: p,
      expanded: !0,
      isAlias: !1,
      key: "#root"
    };
    for (let r of p) r.parent = l;
    return { virtualRoot: l, rootPaths: d, allSelectedPaths: c };
  }
  _showMultiRoot(e) {
    let n = e.map((o) => this.notes.get(o)).filter(Boolean);
    if (!n.length) {
      new b(t("\u6CA1\u6709\u6709\u6548\u7684\u7B14\u8BB0"));
      return;
    }
    let { virtualRoot: i, rootPaths: a, allSelectedPaths: s } = this._buildMultiRootTree(n, t("\u591A\u9009\u5BFC\u56FE\uFF08") + n.length + t(" \u7BC7\uFF09"));
    this._multiRootPaths = s, this._selectedRootPaths = /* @__PURE__ */ new Set(s), this._kwFile = null, this._multiRoot = !0, this.rootPath = null, this.currentRoot = i, this._view = null, this._expandedMem.clear(), this._selKey = null, this.render({ fit: !0 });
  }
  _renderHelpContent(e) {
    e.createEl("h3", { text: t("\u6B22\u8FCE\u4F7F\u7528\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE") }), e.createEl("p", { text: t("\u7ED3\u5408\u5362\u66FC\u7B14\u8BB0\u7684\u5C42\u7EA7\u601D\u60F3\uFF0C\u5229\u7528 Obsidian \u5F3A\u5927\u7684\u53CC\u94FE\u529F\u80FD\u5EFA\u7ACB\u7B14\u8BB0\u95F4\u7684\u7236\u5B50\u5173\u7CFB\uFF0C\u53D6\u6D88\u4E86\u7F16\u53F7\u2014\u2014\u6BCF\u4E2A\u8282\u70B9\u5C31\u662F\u4E00\u7BC7\u7B14\u8BB0\uFF0C\u901A\u8FC7 frontmatter \u7684 children/parent \u94FE\u63A5\u81EA\u7136\u5173\u8054\uFF0C\u65E0\u9700\u7EF4\u62A4\u4EFB\u4F55\u7F16\u53F7\u3002"), cls: "lkm-guide-intro" });
    let n = e.createDiv("lkm-guide-steps");
    n.createEl("h4", { text: t("\u5FEB\u901F\u4E0A\u624B") });
    let i = [
      ["\u2460", t("\u521B\u5EFA\u7B14\u8BB0"), t("\u70B9\u51FB\u4E0B\u65B9\u300C\u521B\u5EFA\u7B14\u8BB0\u300D\uFF0C\u8F93\u5165\u6807\u9898\u5373\u53EF\u3002\u521B\u5EFA\u65F6\u53EF\u52FE\u9009\u300C\u4E3B\u7B14\u8BB0\u300D\u4F5C\u4E3A\u5BFC\u56FE\u5165\u53E3\u3002")],
      ["\u2461", t("\u6DFB\u52A0\u5B50\u8282\u70B9"), t("\u521B\u5EFA\u540E\uFF0C\u53F3\u952E/\u957F\u6309\u8282\u70B9 \u2192\u300C\u65B0\u589E\u5B50\u8282\u70B9\u300D\uFF0C\u81EA\u52A8\u5728\u7236\u7B14\u8BB0\u5199\u5165 children \u94FE\u63A5\u3002")],
      ["\u2462", t("\u67E5\u770B\u5BFC\u56FE"), t("\u4E3B\u7B14\u8BB0\u81EA\u52A8\u5C55\u5F00\u4E3A\u5BFC\u56FE\u6811\u3002\u62D6\u52A8\u8282\u70B9\u53EF\u79FB\u52A8\uFF0C\u62D6\u52A8\u53F3\u4FA7\u7AEF\u53E3\u53EF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\u3002")]
    ];
    for (let [f, E, y] of i) {
      let _ = n.createDiv("lkm-guide-step");
      _.createEl("span", { cls: "lkm-step-num", text: f });
      let F = _.createDiv("lkm-step-body");
      F.createEl("span", { cls: "lkm-step-title", text: E }), F.createEl("span", { cls: "lkm-step-desc", text: y });
    }
    let a = e.createDiv("lkm-guide-btns"), s = a.createEl("button", { cls: "lkm-btn lkm-btn-action", text: t("\u521B\u5EFA\u7B14\u8BB0") });
    s.onclick = () => this.createStandaloneNote();
    let o = a.createEl("button", { cls: "lkm-btn", text: t("\u521B\u5EFA\u9ED8\u8BA4\u6A21\u677F") });
    o.onclick = () => this._createDefaultTemplate();
    let c = e.createDiv("lkm-guide-help");
    c.createEl("h4", { text: t("\u5DE5\u5177\u680F\u529F\u80FD") });
    let p = [
      [t("\u5DE5\u4F5C\u53F0"), t("\u7EDF\u8BA1\u6982\u89C8\uFF1A\u7B14\u8BB0\u603B\u6570\u3001\u7C7B\u578B\u5206\u5E03\u3001\u72B6\u6001\u5206\u5E03\u3001\u521B\u5EFA\u70ED\u529B\u56FE\u3001\u5206\u652F\u5206\u5E03\uFF0C\u70B9\u51FB\u6570\u5B57\u53EF\u7B5B\u9009\u67E5\u770B")],
      [t("\u4E3B\u7B14\u8BB0"), t("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u6839\u8282\u70B9\uFF08frontmatter \u4E2D main: true \u7684\u7B14\u8BB0\uFF09")],
      [t("\u5173\u952E\u8BCD"), t("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u7B14\u8BB0\u8FC7\u6EE4\u663E\u793A\u5BFC\u56FE")],
      [t("\u641C\u7D22"), t("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9")],
      [t("\u591A\u9009"), t("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A")],
      [t("\u9884\u8BBE"), t("\u4FDD\u5B58/\u6062\u590D/\u5220\u9664\u5F53\u524D\u5BFC\u56FE\u72B6\u6001\u9884\u8BBE\uFF1B\u5173\u95ED\u5BFC\u56FE\u65F6\u81EA\u52A8\u4FDD\u5B58\u72B6\u6001\u5230 vault \u6587\u4EF6\uFF0C\u591A\u7AEF\u540C\u6B65\u540E\u81EA\u52A8\u8FD8\u539F")],
      [t("\u5C42\u6570 \xB1"), t("\u63A7\u5236\u5BFC\u56FE\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")],
      [t("\u5BFC\u56FE\u6A21\u5F0F"), t("\u5FEB\u901F\u5207\u6362\u6811\u5F62\u56FE/\u5206\u53C9\u56FE/\u5206\u652F\u56FE/\u94FE\u8DEF\u56FE/\u7F51\u7EDC\u56FE")],
      [t("\u5168\u5C55/\u5168\u6298"), t("\u4E00\u952E\u5C55\u5F00\u6216\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9")],
      [t("\u6A2A/\u7EB5"), t("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u5DE6\u2192\u53F3 \u6216 \u4E0A\u2192\u4E0B\uFF09")],
      [t("\u5BFC\u51FA"), t("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2 / Obsidian Canvas \u6587\u4EF6")],
      [t("\u6279\u91CF"), t("\u6279\u91CF\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664/\u6539\u7C7B\u578B/\u6539\u72B6\u6001")],
      [t("\u663E\u793A"), t("\u5207\u6362\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A\u65F6\u95F4\u3001\u7C7B\u578B\u3001\u5B50\u6570\u3001\u56FE\u6807\u7B49")],
      [t("\u94FE\u63A5\u68C0\u67E5"), t("\u626B\u63CF\u5931\u6548\u94FE\u63A5\u5E76\u4FEE\u590D\uFF0C\u68C0\u67E5\u672A\u5173\u8054\u7684\u5B64\u7ACB\u7B14\u8BB0")]
    ];
    for (let [f, E] of p) {
      let y = c.createDiv("lkm-guide-row");
      y.createEl("span", { cls: "lkm-guide-key", text: f }), y.createEl("span", { cls: "lkm-guide-val", text: E });
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
    for (let [f, E] of l) {
      let y = d.createDiv("lkm-guide-row");
      y.createEl("span", { cls: "lkm-guide-key", text: f }), y.createEl("span", { cls: "lkm-guide-val", text: E });
    }
    let r = e.createDiv("lkm-guide-help");
    r.createEl("h4", { text: t("\u89C6\u89C9\u8BF4\u660E") });
    let h = [
      [t("\u8FB9\u6846\u989C\u8272"), t("\u8868\u793A\u7B14\u8BB0\u7C7B\u578B\uFF08\u6536\u96C6/\u7075\u611F/\u95EA\u5FF5/\u6587\u732E/\u6C38\u4E45/\u8D44\u6E90\uFF09\uFF0C\u5728\u8BBE\u7F6E\u4E2D\u81EA\u5B9A\u4E49\u989C\u8272")],
      [t("\u5DE6\u4FA7\u5706\u70B9"), t("\u8868\u793A\u5DE5\u4F5C\u72B6\u6001\uFF08\u5F85\u529E/\u8FDB\u884C\u4E2D/\u5DF2\u5B8C\u6210/\u5DF2\u5F52\u6863/\u5DF2\u6401\u7F6E\uFF09\uFF0C\u4E0D\u540C\u72B6\u6001\u4E0D\u540C\u989C\u8272")],
      [t("\u6A59\u8272\u5706\u70B9"), t("\u4E3B\u7B14\u8BB0\u6807\u8BB0\uFF08main: true\uFF09\uFF0C\u662F\u5BFC\u56FE\u7684\u5165\u53E3\u8282\u70B9")],
      [t("\u7C89\u8272\u5706\u70B9"), t("\u91CD\u590D\u8282\u70B9\uFF0C\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u88AB\u591A\u5904\u5173\u8054\u5F15\u5165")],
      [t("\u865A\u7EBF\u534A\u900F\u660E"), t("\u5DF2\u5F52\u6863\u8282\u70B9\uFF0C\u4FDD\u7559\u94FE\u63A5\u4F46\u964D\u4F4E\u89C6\u89C9\u6743\u91CD")]
    ];
    for (let [f, E] of h) {
      let y = r.createDiv("lkm-guide-row");
      y.createEl("span", { cls: "lkm-guide-key", text: f }), y.createEl("span", { cls: "lkm-guide-val", text: E });
    }
    let g = e.createDiv("lkm-guide-help");
    g.createEl("h4", { text: t("\u547D\u4EE4\u9762\u677F") });
    let w = [
      [t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), t("\u6253\u5F00\u5BFC\u56FE\u89C6\u56FE\uFF08\u540C\u529F\u80FD\u533A\u6309\u94AE\uFF09")],
      [t("\u6253\u5F00\u65F6\u95F4\u7EBF"), t("\u6253\u5F00\u7B14\u8BB0\u65F6\u95F4\u7EBF\u89C6\u56FE\uFF0C\u6309\u521B\u5EFA\u65F6\u95F4\u6D4F\u89C8\u7B14\u8BB0")],
      [t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), t("\u6279\u91CF\u6309\u6A21\u677F\u6574\u7406 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\uFF0C\u7EDD\u4E0D\u4FEE\u6539\u5DF2\u6709\u503C")],
      [t("\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), t("\u4EC5\u6574\u7406\u5F53\u524D\u6253\u5F00\u7B14\u8BB0\u7684 frontmatter")],
      [t("\u68C0\u67E5\u94FE\u63A5\u5B8C\u6574\u6027"), t("\u626B\u63CF\u6240\u6709\u7B14\u8BB0\u7684 children \u94FE\u63A5\uFF0C\u5217\u51FA\u5931\u6548\u94FE\u63A5\u548C\u5B64\u7ACB\u7B14\u8BB0\uFF0C\u53EF\u4E00\u952E\u4FEE\u590D")],
      [t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u7C7B\u578B"), t("\u79FB\u9664\u4E0D\u5728\u7C7B\u578B\u914D\u7F6E\u5217\u8868\u5185\u7684 type \u503C")],
      [t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u72B6\u6001"), t("\u79FB\u9664\u4E0D\u5728\u72B6\u6001\u914D\u7F6E\u5217\u8868\u5185\u7684 status \u503C")],
      [t("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), t("\u6253\u5F00\u672C\u5E2E\u52A9\u624B\u518C")]
    ];
    for (let [f, E] of w) {
      let y = g.createDiv("lkm-guide-row");
      y.createEl("span", { cls: "lkm-guide-key", text: f }), y.createEl("span", { cls: "lkm-guide-val", text: E });
    }
  }
  _renderEmptyGuide(e) {
    let n = e.createDiv("lkm-empty-guide");
    this._renderHelpContent(n);
  }
  _showHelp() {
    let e = new $e(this.app);
    e.onOpen = () => {
      let { contentEl: n } = e;
      n.addClass("lkm-help-modal"), this._renderHelpContent(n);
      let i = n.createDiv("lkm-multipick-btns");
      new ee(i).addButton((a) => a.setButtonText(t("\u5173\u95ED")).onClick(() => e.close()));
    }, e.open();
  }
  async _createDefaultTemplate() {
    let e = this.s, n = (e.templateFolder || "").trim();
    if (n || (n = t("99-\u6A21\u677F"), e.templateFolder = n), !this.app.vault.getAbstractFileByPath(be(n)))
      try {
        await this.app.vault.createFolder(be(n));
      } catch (s) {
        new b(t("\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u5939\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
        return;
      }
    let a = be(n + t("/\u65B0\u8282\u70B9\u6A21\u677F.md"));
    if (this.app.vault.getAbstractFileByPath(a))
      new b(t("\u6A21\u677F\u5DF2\u5B58\u5728\uFF1A") + a);
    else {
      let s = e.linkField || "children", o = e.backField || "parent", c = e.zkField || "main", p = e.statusField || "status", d = e.typeField || "type", l = e.descField || "description", r = e.dateField || "date", h = e.titleField || "title", g = e.defaultStatus && (e.statusColors || {})[e.defaultStatus] !== void 0 ? '"' + e.defaultStatus + '"' : '""', w = `---
${s}: []
${o}: ""
${c}: false
${p}: ${g}
${r}: ""
${d}: ""
${l}: ""
${h}: ""
---

`;
      try {
        await this.app.vault.create(a, w);
      } catch (f) {
        new b(t("\u521B\u5EFA\u6A21\u677F\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
        return;
      }
    }
    e.templatePath = a, await this.plugin.saveSettings(), new b(t("\u5DF2\u521B\u5EFA\u6A21\u677F\u5E76\u8BBE\u4E3A\u9ED8\u8BA4\uFF1A") + a), this.render();
  }
  async _createFirstNote(e) {
    let n = this.s, i = Ge(e) + ".md", a = be(n.mainFolder), s = be(a + "/" + i);
    if (this.app.vault.getAbstractFileByPath(s)) {
      new b(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + i);
      return;
    }
    let o = n.linkField || "children", c = n.zkField || "main", p = n.statusField || "status", d = n.dateField || "date", l = /* @__PURE__ */ new Date(), r = l.getFullYear() + "-" + String(l.getMonth() + 1).padStart(2, "0") + "-" + String(l.getDate()).padStart(2, "0"), h = n.defaultStatus && (n.statusColors || {})[n.defaultStatus] !== void 0 ? '"' + n.defaultStatus + '"' : '""', g = `---
${o}: []
${c}: true
${p}: ${h}
${d}: "${r}"
---

`;
    try {
      await this.app.vault.create(s, g), new b(t("\u5DF2\u521B\u5EFA\u4E3B\u7B14\u8BB0\u300C") + e + "\u300D"), await this.rebuild(!0);
    } catch (w) {
      new b(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (w && w.message ? w.message : w));
    }
  }
  async openKeywordPicker() {
    let e = this.app.vault.getAbstractFileByPath(be(this.s.indexFolder)), n = (e && e.children ? e.children : []).filter((i) => i instanceof Xe && i.extension === "md");
    if (!n.length) {
      new b("\u300C" + this.s.indexFolder + t("\u300D\u91CC\u6CA1\u6709\u7D22\u5F15\u6587\u4EF6"));
      return;
    }
    new ze(
      this.app,
      n.map((i) => ({ label: i.basename, file: i })),
      (i) => this.showKeyword(i.file),
      t("\u9009\u62E9\u5173\u952E\u8BCD\u7D22\u5F15\u2026")
    ).open();
  }
  async showKeyword(e, n) {
    this._kwFile = e, this._multiRoot = !1;
    let i = this.contentEl.querySelector(".lkm-info");
    i && (i.empty(), i.setText(t("\u5173\u952E\u8BCD\uFF1A") + e.basename));
    let s = [...(await this.app.vault.read(e)).matchAll(/\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g)].map((r) => r[1].trim()), o = [], c = /* @__PURE__ */ new Set();
    for (let r of s) {
      let h = this.app.metadataCache.getFirstLinkpathDest(r, e.path);
      if (!h) continue;
      let g = this.notes.get(h.path);
      !g || c.has(g.file.path) || (c.add(g.file.path), o.push(g));
    }
    if (!o.length) {
      new b(t("\u8BE5\u7D22\u5F15\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u7B14\u8BB0\u94FE\u63A5")), this._kwFile = null, this.render();
      return;
    }
    let { virtualRoot: p, allSelectedPaths: d } = this._buildMultiRootTree(o, e.basename);
    this._selectedRootPaths = /* @__PURE__ */ new Set(d), this._multiRootPaths = d, this.currentRoot = p, this._indexTree(p), ht(p, this.depth), this._ensureSelectedVisible(p), this._restoreExpanded(), this._view = null;
    let l = this.contentEl.querySelector(".lkm-canvas");
    l && this._draw(l, at(p, this.s), Object.assign({ fit: !0 }, n || {}));
  }
  _draw(e, n, i) {
    i = i || {}, e.empty();
    let a = this.s, { nodes: s, edges: o } = n;
    if (!s.length) return;
    let c = 1 / 0, p = 1 / 0, d = -1 / 0, l = -1 / 0, r = a.layoutMode !== "branch" && a.layoutDir === "v";
    for (let u of s)
      c = Math.min(c, u._x), p = Math.min(p, u._y - u._autoH / 2), d = Math.max(d, u._x + u._w), l = Math.max(l, u._y + u._autoH / 2 + (r ? 28 : 0));
    let h = 40, g = d - c + h * 2, w = l - p + h * 2, f = V("svg", { class: "lkm-svg" }), E = V("defs"), y = V("marker", { id: "lkm-arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" });
    y.appendChild(V("path", { d: "M0,0 L10,5 L0,10 z", class: "lkm-arrow-fill" })), E.appendChild(y), f.appendChild(E);
    let _ = V("g", { class: "lkm-viewport" });
    if (f.appendChild(_), e.appendChild(f), a.layoutMode === "git") {
      let u = n.gvert, P = n.depthH, B = /* @__PURE__ */ T((I) => {
        let S = I.note.type ? (a.typeColors || {})[I.note.type] : null, L = He(a, I.note.status);
        return S || L || a.accent || "#3A6B8A";
      }, "dotColorOf"), $ = /* @__PURE__ */ T((I) => I._x + I._w / 2, "cxOf");
      if (u) {
        let I = c - 30;
        _.appendChild(V("path", { d: `M${I},${p} L${I},${l}`, class: "lkm-git-axis" }));
        for (let S = 0; S <= n.maxDepth; S++) {
          let L = S * P;
          _.appendChild(V("line", { x1: I - 5, y1: L, x2: I + 5, y2: L, class: "lkm-git-axis" }));
          let N = V("text", { x: I - 10, y: L + 4, class: "lkm-git-tick", "text-anchor": "end" });
          N.textContent = "L" + (S + 1), _.appendChild(N);
        }
      } else {
        let I = p - 30, S = n.depthOffsets || [];
        _.appendChild(V("path", { d: `M${c},${I} L${d},${I}`, class: "lkm-git-axis" }));
        for (let L = 0; L <= n.maxDepth; L++) {
          let N = S[L] != null ? S[L] : L * P;
          _.appendChild(V("line", { x1: N, y1: I - 5, x2: N, y2: I + 5, class: "lkm-git-axis" }));
          let se = V("text", { x: N, y: I - 10, class: "lkm-git-tick", "text-anchor": "middle" });
          se.textContent = "L" + (L + 1), _.appendChild(se);
        }
      }
      let R = /* @__PURE__ */ new Map();
      for (let [I, S] of o)
        R.has(I) || R.set(I, []), R.get(I).push(S);
      for (let [I, S] of R) {
        let L = $(I), N = I._y;
        if (S.length <= 1) {
          let se = S[0];
          if (!se) continue;
          let G = $(se), K = se._y, J = B(se), k;
          if (u)
            if (a.curve) {
              let H = (N + K) / 2;
              k = `M${L},${N + 8} C${L},${H} ${G},${H} ${G},${K - 8}`;
            } else k = `M${L},${N + 8} L${G},${K - 8}`;
          else if (a.curve) {
            let H = (L + G) / 2;
            k = `M${L + 8},${N} C${H},${N} ${H},${K} ${G - 8},${K}`;
          } else k = `M${L + 8},${N} L${G - 8},${K}`;
          _.appendChild(V("path", { d: k, class: "lkm-git-lane", fill: "none", stroke: J, "stroke-width": 1.8, "stroke-linecap": "round" }));
        } else {
          let se = u ? L : L + ($(S[0]) - L) * 0.5, G = u ? N + (S[0]._y - N) * 0.5 : N;
          for (let K of S) {
            let J = $(K), k = K._y, H = B(K), q;
            if (u)
              if (a.curve) {
                let de = (N + G) / 2, z = (G + k) / 2;
                q = `M${L},${N + 8} C${L},${de} ${L},${G} ${L},${G} C${L},${z} ${J},${z} ${J},${k - 8}`;
              } else q = `M${L},${N + 8} L${L},${G} L${J},${k - 8}`;
            else if (a.curve) {
              let de = (L + se) / 2, z = (se + J) / 2;
              q = `M${L + 8},${N} C${de},${N} ${se},${N} ${se},${N} C${z},${N} ${z},${k} ${J - 8},${k}`;
            } else q = `M${L + 8},${N} L${se},${N} L${J - 8},${k}`;
            _.appendChild(V("path", { d: q, class: "lkm-git-fork", fill: "none", stroke: H, "stroke-width": 1.5, "stroke-linecap": "round", "stroke-linejoin": "round" }));
          }
        }
      }
      for (let I of s) {
        if ((I.expanded ? I.children : []).length) continue;
        let L = $(I), N = I._y, se = B(I);
        if (u) {
          let G = V("line", { x1: L, y1: N + 8, x2: L, y2: N + 26, class: "lkm-git-fade" });
          G.setAttribute("stroke", se), _.appendChild(G);
        } else {
          let G = V("line", { x1: L + 8, y1: N, x2: L + 26, y2: N, class: "lkm-git-fade" });
          G.setAttribute("stroke", se), _.appendChild(G);
        }
      }
      let Q = /* @__PURE__ */ new Map();
      for (let I of s) I.note.file && Q.set(I.note.file.path, I);
      let X = /* @__PURE__ */ T((I, S) => {
        let L = $(I), N = I._y, se = $(S), G = S._y, K = se - L, J = G - N, k = Math.hypot(K, J) || 1, H = se - K / k * 14, q = G - J / k * 14, de;
        if (u) {
          let z = (L + se) / 2, oe = (N + G) / 2;
          de = `M${L},${N} Q${z},${oe - 40} ${H},${q}`;
        } else {
          let z = (L + se) / 2, oe = (N + G) / 2;
          de = `M${L},${N} Q${z - 10},${oe} ${H},${q}`;
        }
        _.appendChild(V("path", { d: de, class: "lkm-git-jump", "marker-end": "url(#lkm-arrow)" }));
      }, "drawJump");
      for (let I of s) {
        if (!I.note.file || I.isAlias) continue;
        let S = I.parent && I.parent.note.file ? I.parent.note.file.path : null;
        for (let L of I.note.parentLinks) {
          let N = this.app.metadataCache.getFirstLinkpathDest(L, I.note.file.path);
          if (!N || N.path === S) continue;
          let se = Q.get(N.path);
          !se || se === I || X(I, se);
        }
      }
      let j = /* @__PURE__ */ new Map();
      for (let I of s) I.note.file && (j.has(I.note.file.path) || j.set(I.note.file.path, []), j.get(I.note.file.path).push(I));
      if (a.showDupLine) for (let [I, S] of j) {
        if (S.length < 2) continue;
        let L = S.find((N) => !N.isAlias) || S[0];
        for (let N of S) N !== L && X(N, L);
      }
    } else if (a.layoutMode === "graph") {
      let u = n.gvert, P = 8, B = "var(--text-faint)", $ = /* @__PURE__ */ T((S) => {
        let L = S.note.type ? (a.typeColors || {})[S.note.type] : null, N = He(a, S.note.status);
        return L || N || a.accent || "#3A6B8A";
      }, "dotColorOf"), R = /* @__PURE__ */ T((S) => S._x + S._w / 2, "cxOf"), Q = /* @__PURE__ */ new Set();
      for (let [S, L] of o) {
        if (Q.has(S)) continue;
        Q.add(S);
        let N = R(S), se = S._y, G = R(L), K = L._y, J = $(L), k;
        if (u)
          if (a.curve) {
            let H = (N + G) / 2;
            k = `M${N + P},${se} C${H},${se} ${H},${K} ${G - P},${K}`;
          } else k = `M${N + P},${se} L${G - P},${K}`;
        else if (a.curve) {
          let H = (se + K) / 2;
          k = `M${N},${se + P} C${N},${H} ${G},${H} ${G},${K - P}`;
        } else k = `M${N},${se + P} L${G},${K - P}`;
        _.appendChild(V("path", { d: k, class: "lkm-edge", fill: "none", stroke: J, "stroke-width": 1.8, "stroke-linecap": "round" }));
      }
      let X = /* @__PURE__ */ new Map();
      for (let [S, L] of o)
        X.has(S) || X.set(S, []), X.get(S).push(L);
      for (let [S, L] of X)
        for (let N = 0; N < L.length - 1; N++) {
          let se = L[N], G = L[N + 1], K = R(se), J = se._y, k = R(G), H = G._y, q;
          if (u)
            if (a.curve) {
              let de = (J + H) / 2;
              q = `M${K},${J + P} C${K},${de} ${k},${de} ${k},${H - P}`;
            } else q = `M${K},${J + P} L${k},${H - P}`;
          else if (a.curve) {
            let de = (K + k) / 2;
            q = `M${K + P},${J} C${de},${J} ${de},${H} ${k - P},${H}`;
          } else q = `M${K + P},${J} L${k - P},${H}`;
          _.appendChild(V("path", { d: q, class: "lkm-edge", fill: "none", stroke: B, "stroke-width": 1.2, "stroke-linecap": "round", opacity: 0.5 }));
        }
      let j = /* @__PURE__ */ new Map();
      for (let S of s) S.note.file && j.set(S.note.file.path, S);
      for (let S of s) {
        if (!S.note.file || S.isAlias) continue;
        let L = S.parent && S.parent.note.file ? S.parent.note.file.path : null;
        for (let N of S.note.parentLinks) {
          let se = this.app.metadataCache.getFirstLinkpathDest(N, S.note.file.path);
          if (!se || se.path === L) continue;
          let G = j.get(se.path);
          if (!G || G === S) continue;
          let K = R(S), J = S._y, k = R(G), H = G._y, q = k - K, de = H - J, z = Math.hypot(q, de) || 1, oe = k - q / z * (P + 4), he = H - de / z * (P + 4), me;
          if (a.curve) {
            let pe = (K + k) / 2, ae = (J + H) / 2;
            u ? me = `M${K},${J} Q${pe + 20},${ae} ${oe},${he}` : me = `M${K},${J} Q${pe},${ae + 20} ${oe},${he}`;
          } else
            me = `M${K},${J} L${oe},${he}`;
          _.appendChild(V("path", { d: me, class: "lkm-git-jump", fill: "none", "marker-end": "url(#lkm-arrow)" }));
        }
      }
      if (a.showDupLine) {
        let S = /* @__PURE__ */ new Map();
        for (let L of s) L.note.file && (S.has(L.note.file.path) || S.set(L.note.file.path, []), S.get(L.note.file.path).push(L));
        for (let [L, N] of S) {
          if (N.length < 2) continue;
          let se = N.find((G) => !G.isAlias) || N[0];
          for (let G of N) {
            if (G === se) continue;
            let K = R(G), J = G._y, k = R(se), H = se._y, q = k - K, de = H - J, z = Math.hypot(q, de) || 1, oe = K + q / z * P, he = J + de / z * P, me = k - q / z * (P + 4), pe = H - de / z * (P + 4), ae = a.curve ? `M${oe},${he} C${(oe + me) / 2},${he} ${(oe + me) / 2},${pe} ${me},${pe}` : `M${oe},${he} L${me},${pe}`;
            _.appendChild(V("path", { d: ae, class: "lkm-git-jump", "marker-end": "url(#lkm-arrow)" }));
          }
        }
      }
      let I = !1;
      for (let S of s) {
        let L = R(S), N = S._y, se = S.note.type ? (a.typeColors || {})[S.note.type] : null, G = He(a, S.note.status), K = se || a.accent || "#3A6B8A", J = G || "#ffffff", k = V("g", { class: "lkm-git-node" + (S.note.zk ? " lkm-main" : "") + (S.isAlias ? " lkm-multi" : "") + (this._selKey === S.key ? " lkm-sel" : "") });
        S._el = k, S.note.zk && k.appendChild(V("circle", { cx: L, cy: N, r: 15, fill: a.mainColor || "#3A6B8A", opacity: 0.18 })), k.appendChild(V("circle", { cx: L, cy: N, r: 12, fill: K, opacity: 0.14 }));
        let H = V("circle", { cx: L, cy: N, r: P, class: "lkm-git-dot", fill: K, stroke: J, "stroke-width": 2.5 });
        S.isAlias && H.setAttribute("stroke-dasharray", "3 2"), k.appendChild(H);
        let q = V("text", { class: "lkm-git-label" });
        if (q.textContent = S._shown || S.note.title, u ? (q.setAttribute("x", L + 18), q.setAttribute("y", N), q.setAttribute("dominant-baseline", "central")) : (q.setAttribute("x", L), q.setAttribute("y", N - 18), q.setAttribute("text-anchor", "middle")), k.appendChild(q), S.children.length) {
          let oe = u ? L : L + 22, he = u ? N + 22 : N, me = V("circle", { cx: oe, cy: he, r: 12, class: "lkm-hit" });
          me.addEventListener("click", (ae) => {
            ae.stopPropagation(), S.expanded = !S.expanded, this._expandedMem.set(S.note.file ? S.note.file.path : S.key, S.expanded), F(S.key);
          }), k.appendChild(me);
          let pe = V("text", { x: oe, y: he + 4, class: "lkm-git-sign", "text-anchor": "middle" });
          pe.textContent = S.expanded ? "\u2212" : "+", k.appendChild(pe), S._fhit = me, S._fsign = pe;
        }
        let de = 0;
        k.addEventListener("click", (oe) => {
          if (this._batchMode) {
            oe.stopPropagation(), this._toggleSelect(S.key);
            return;
          }
          let he = Date.now(), me = he - de < 350;
          de = me ? 0 : he, me && S.note.file && (this._hidePreview(), this.app.workspace.getLeaf(!0).openFile(S.note.file));
          let pe = this._selKey;
          if (this._selKey = S.key, pe !== S.key) {
            let ae = this._nodeIndex && this._nodeIndex.get(pe);
            ae && ae._el && ae._el.classList.remove("lkm-sel");
          }
          k.classList.add("lkm-sel");
        }), k.addEventListener("contextmenu", (oe) => {
          oe.preventDefault(), oe.stopPropagation(), !this._batchMode && (this._selKey = S.key, k.classList.add("lkm-sel"), this._showNodeMenu(S, oe));
        });
        let z = null;
        k.addEventListener("mouseenter", (oe) => {
          I || (z && clearTimeout(z), z = setTimeout(() => {
            I || (z = null, this._showPreview(S, oe));
          }, 1e3));
        }), k.addEventListener("mousemove", (oe) => {
          this._previewEl && this._positionPreview(oe);
        }), k.addEventListener("mouseleave", () => {
          z && (clearTimeout(z), z = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
            this._hidePreview(), this._hideTimer = null;
          }, 200);
        }), _.appendChild(k);
      }
    } else if (a.layoutMode === "force") {
      let u = n.degree || /* @__PURE__ */ new Map(), P = /* @__PURE__ */ T((k) => {
        let H = k.note.type ? (a.typeColors || {})[k.note.type] : null, q = He(a, k.note.status);
        return H || q || a.accent || "#3A6B8A";
      }, "dotColorOf"), B = /* @__PURE__ */ T((k) => k._x + k._w / 2, "cxOf"), $ = [];
      for (let [k, H] of o) {
        let q = B(k), de = k._y, z = B(H), oe = H._y, he = P(H), me = V("line", { x1: q, y1: de, x2: z, y2: oe, class: "lkm-edge", stroke: he, "stroke-width": 1.5, opacity: 0.6 });
        _.appendChild(me), $.push({ el: me, from: k, to: H });
      }
      let R = [], Q = /* @__PURE__ */ new Map();
      for (let k of s) k.note.file && Q.set(k.note.file.path, k);
      for (let k of s) {
        if (!k.note.file || k.isAlias) continue;
        let H = k.parent && k.parent.note.file ? k.parent.note.file.path : null;
        for (let q of k.note.parentLinks) {
          let de = this.app.metadataCache.getFirstLinkpathDest(q, k.note.file.path);
          if (!de || de.path === H) continue;
          let z = Q.get(de.path);
          z && z !== k && R.push([k, z]);
        }
      }
      for (let [k, H] of R) {
        let q = B(k), de = k._y, z = B(H), oe = H._y, he = V("line", { x1: q, y1: de, x2: z, y2: oe, class: "lkm-git-jump", "marker-end": "url(#lkm-arrow)" });
        _.appendChild(he), $.push({ el: he, from: k, to: H });
      }
      if (a.showDupLine) {
        let k = /* @__PURE__ */ new Map();
        for (let H of s) H.note.file && (k.has(H.note.file.path) || k.set(H.note.file.path, []), k.get(H.note.file.path).push(H));
        for (let [H, q] of k) {
          if (q.length < 2) continue;
          let de = q.find((z) => !z.isAlias) || q[0];
          for (let z of q) {
            if (z === de) continue;
            let oe = B(z), he = z._y, me = B(de), pe = de._y, ae = V("line", { x1: oe, y1: he, x2: me, y2: pe, class: "lkm-git-jump", "marker-end": "url(#lkm-arrow)" });
            _.appendChild(ae), $.push({ el: ae, from: z, to: de });
          }
        }
      }
      let X = null;
      for (let k of s) {
        let H = B(k), q = k._y, de = u.get(k) || 0, z = Math.min(8, 3 + de * 0.5), oe = k.note.type ? (a.typeColors || {})[k.note.type] : null, he = He(a, k.note.status), me = oe || a.accent || "#3A6B8A", pe = he || "#ffffff", ae = V("g", { class: "lkm-git-node" + (k.note.zk ? " lkm-main" : "") + (k.isAlias ? " lkm-multi" : "") + (this._selKey === k.key ? " lkm-sel" : "") });
        k._el = ae;
        let Ee = V("circle", { cx: H, cy: q, r: z, class: "lkm-git-dot", fill: me, stroke: pe, "stroke-width": 2 });
        k.isAlias && Ee.setAttribute("stroke-dasharray", "3 2"), ae.appendChild(Ee);
        let Ce = V("text", { class: "lkm-git-label" });
        if (Ce.textContent = k._shown || k.note.title, Ce.setAttribute("x", H), Ce.setAttribute("y", q + z + 12), Ce.setAttribute("text-anchor", "middle"), ae.appendChild(Ce), k._fdot = Ee, k._flabel = Ce, k._fNR = z, k._finiCx = H, k._finiCy = q, k.children.length) {
          let ce = H, Se = q + z + 24, ve = V("circle", { cx: ce, cy: Se, r: 8, class: "lkm-hit" });
          ve.addEventListener("click", (ue) => {
            ue.stopPropagation(), k.expanded = !k.expanded, this._expandedMem.set(k.note.file ? k.note.file.path : k.key, k.expanded), F(k.key);
          }), ae.appendChild(ve);
          let Te = V("text", { x: ce, y: Se + 4, class: "lkm-git-sign", "text-anchor": "middle" });
          Te.textContent = k.expanded ? "\u2212" : "+", ae.appendChild(Te);
        }
        let te = 0;
        ae.addEventListener("click", (ce) => {
          if (this._batchMode) {
            ce.stopPropagation(), this._toggleSelect(k.key);
            return;
          }
          let Se = Date.now(), ve = Se - te < 350;
          te = ve ? 0 : Se, ve && k.note.file && (this._hidePreview(), this.app.workspace.getLeaf(!0).openFile(k.note.file));
          let Te = this._selKey;
          if (this._selKey = k.key, Te !== k.key) {
            let ue = this._nodeIndex && this._nodeIndex.get(Te);
            ue && ue._el && ue._el.classList.remove("lkm-sel");
          }
          ae.classList.add("lkm-sel");
        }), ae.addEventListener("contextmenu", (ce) => {
          ce.preventDefault(), ce.stopPropagation(), !this._batchMode && (this._selKey = k.key, ae.classList.add("lkm-sel"), this._showNodeMenu(k, ce));
        });
        let re = null;
        ae.addEventListener("mouseenter", (ce) => {
          X || (re && clearTimeout(re), re = setTimeout(() => {
            X || (re = null, this._showPreview(k, ce));
          }, 1e3));
        }), ae.addEventListener("mousemove", (ce) => {
          this._previewEl && this._positionPreview(ce);
        }), ae.addEventListener("mouseleave", () => {
          re && (clearTimeout(re), re = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
            this._hidePreview(), this._hideTimer = null;
          }, 200);
        }), ae.addEventListener("mousedown", (ce) => {
          if (ce.button !== 0 || ce.target.classList && ce.target.classList.contains("lkm-hit")) return;
          ce.preventDefault();
          let Se = f.getScreenCTM();
          if (!Se) return;
          let ve = f.createSVGPoint();
          ve.x = ce.clientX, ve.y = ce.clientY;
          let Te = ve.matrixTransform(Se.inverse());
          X = { node: k, dot: Ee, label: Ce, NR: z, offsetX: Te.x - H, offsetY: Te.y - q }, ae.classList.add("lkm-dragging");
        }), ae.addEventListener("touchstart", (ce) => {
          if (ce.target.classList && ce.target.classList.contains("lkm-hit") || !ce.touches.length) return;
          ce.preventDefault();
          let Se = ce.touches[0], ve = f.getScreenCTM();
          if (!ve) return;
          let Te = f.createSVGPoint();
          Te.x = Se.clientX, Te.y = Se.clientY;
          let ue = Te.matrixTransform(ve.inverse());
          X = { node: k, dot: Ee, label: Ce, NR: z, offsetX: ue.x - H, offsetY: ue.y - q }, ae.classList.add("lkm-dragging");
        }, { passive: !1 }), _.appendChild(ae);
      }
      this._forceCleanup && this._forceCleanup();
      let j = n.fk || 90, I = o.concat(R), S = s.length, L = /* @__PURE__ */ new Map();
      for (let k = 0; k < S; k++) L.set(s[k], k);
      let N = !1, se = /* @__PURE__ */ T(() => {
        for (let k of s) {
          let H = k._x + k._w / 2, q = k._y;
          k._el && k._el.setAttribute("transform", `translate(${H - k._finiCx},${q - k._finiCy})`);
        }
        for (let k of $)
          k.el.setAttribute("x1", k.from._x + k.from._w / 2), k.el.setAttribute("y1", k.from._y), k.el.setAttribute("x2", k.to._x + k.to._w / 2), k.el.setAttribute("y2", k.to._y);
      }, "updateAllPositions"), G = /* @__PURE__ */ T((k) => {
        let H = new Float64Array(S), q = new Float64Array(S);
        for (let z = 0; z < S; z++)
          for (let oe = z + 1; oe < S; oe++) {
            let he = s[z]._x + s[z]._w / 2 - (s[oe]._x + s[oe]._w / 2), me = s[z]._y - s[oe]._y, pe = he * he + me * me;
            pe < 0.01 && (pe = 0.01, he = 0.1, me = 0.1);
            let ae = Math.sqrt(pe), Ee = j * j / pe, Ce = he / ae * Ee, te = me / ae * Ee;
            H[z] += Ce, q[z] += te, H[oe] -= Ce, q[oe] -= te;
          }
        for (let [z, oe] of I) {
          let he = L.get(z), me = L.get(oe);
          if (he == null || me == null) continue;
          let pe = oe._x + oe._w / 2 - (z._x + z._w / 2), ae = oe._y - z._y, Ee = Math.sqrt(pe * pe + ae * ae) || 0.01, Ce = Ee / j, te = pe / Ee * Ce, re = ae / Ee * Ce;
          H[he] += te, q[he] += re, H[me] -= te, q[me] -= re;
        }
        let de = 0.15;
        for (let z = 0; z < S; z++)
          s[z] !== k && (s[z]._x += H[z] * de, s[z]._y += q[z] * de);
      }, "runForceIter"), K = /* @__PURE__ */ T((k) => {
        if (!X) return;
        let H = f.getScreenCTM();
        if (!H) return;
        let q = f.createSVGPoint(), de = k.touches ? k.touches[0].clientX : k.clientX, z = k.touches ? k.touches[0].clientY : k.clientY;
        q.x = de, q.y = z;
        let oe = q.matrixTransform(H.inverse()), he = oe.x - X.offsetX, me = oe.y - X.offsetY;
        X.node._x = he - X.node._w / 2, X.node._y = me;
        let pe = X.node;
        pe._el && pe._el.setAttribute("transform", `translate(${he - pe._finiCx},${me - pe._finiCy})`);
        for (let ae of $)
          ae.from === pe ? (ae.el.setAttribute("x1", he), ae.el.setAttribute("y1", me)) : ae.to === pe && (ae.el.setAttribute("x2", he), ae.el.setAttribute("y2", me));
        N || (N = !0, requestAnimationFrame(() => {
          if (N = !1, !!X) {
            for (let ae = 0; ae < 20; ae++) G(X.node);
            se();
          }
        }));
      }, "onForceMove"), J = /* @__PURE__ */ T(() => {
        X && (X.node._el && X.node._el.classList.remove("lkm-dragging"), X = null);
      }, "onForceUp");
      document.addEventListener("mousemove", K), document.addEventListener("mouseup", J), document.addEventListener("touchmove", K, { passive: !1 }), document.addEventListener("touchend", J), this._forceCleanup = () => {
        document.removeEventListener("mousemove", K), document.removeEventListener("mouseup", J), document.removeEventListener("touchmove", K), document.removeEventListener("touchend", J);
      };
    } else if (a.layoutMode === "branch") {
      let u = /* @__PURE__ */ new Map();
      for (let [P, B] of o)
        u.has(P) || u.set(P, []), u.get(P).push(B);
      for (let [P, B] of u) {
        let $ = P._x + P._w, R = P._y;
        if (B.length <= 1) {
          let Q = B[0];
          if (!Q) continue;
          let X = Q._x, j = Q._y, I = ($ + X) / 2, S = a.curve ? `M${$},${R} C${I},${R} ${I},${j} ${X},${j}` : `M${$},${R} L${X},${j}`;
          _.appendChild(V("path", { d: S, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
        } else {
          let Q = $ + (B[0]._x - $) / 2;
          _.appendChild(V("path", { d: `M${$},${R} L${Q},${R}`, class: "lkm-edge" }));
          let X = 1 / 0, j = -1 / 0;
          for (let I of B)
            X = Math.min(X, I._y), j = Math.max(j, I._y);
          _.appendChild(V("path", { d: `M${Q},${X} L${Q},${j}`, class: "lkm-edge" }));
          for (let I of B)
            _.appendChild(V("path", { d: `M${Q},${I._y} L${I._x},${I._y}`, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
        }
      }
      if (a.showDupLine) {
        let P = /* @__PURE__ */ new Map();
        for (let B of s) B.note.file && (P.has(B.note.file.path) || P.set(B.note.file.path, []), P.get(B.note.file.path).push(B));
        for (let [B, $] of P) {
          if ($.length < 2) continue;
          let R = $.find((Q) => !Q.isAlias) || $[0];
          for (let Q of $) {
            if (Q === R) continue;
            let X = R._x + R._w / 2 - (Q._x + Q._w / 2), j = R._y - Q._y, I, S, L, N;
            Math.abs(X) > Math.abs(j) ? X > 0 ? (I = Q._x + Q._w, S = Q._y, L = R._x, N = R._y) : (I = Q._x, S = Q._y, L = R._x + R._w, N = R._y) : j > 0 ? (I = Q._x + Q._w / 2, S = Q._y + Q._autoH / 2, L = R._x + R._w / 2, N = R._y - R._autoH / 2) : (I = Q._x + Q._w / 2, S = Q._y - Q._autoH / 2, L = R._x + R._w / 2, N = R._y + R._autoH / 2);
            let se = a.curve ? `M${I},${S} C${(I + L) / 2},${S} ${(I + L) / 2},${N} ${L},${N}` : `M${I},${S} L${L},${N}`;
            _.appendChild(V("path", { d: se, class: "lkm-edge", "stroke-dasharray": "4 3", opacity: 0.5, "marker-end": "url(#lkm-arrow)" }));
          }
        }
      }
    } else {
      for (let [P, B] of o) {
        let $, R, Q, X, j, I;
        if (a.layoutDir === "v") {
          $ = P._x + P._w / 2, R = P._y + P._autoH / 2, Q = B._x + B._w / 2, X = B._y - B._autoH / 2, I = (R + X) / 2;
          let S = a.curve ? `M${$},${R} C${$},${I} ${Q},${I} ${Q},${X}` : `M${$},${R} L${Q},${X}`;
          _.appendChild(V("path", { d: S, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
        } else {
          $ = P._x + P._w, R = P._y, Q = B._x, X = B._y, j = ($ + Q) / 2;
          let S = a.curve ? `M${$},${R} C${j},${R} ${j},${X} ${Q},${X}` : `M${$},${R} L${Q},${X}`;
          _.appendChild(V("path", { d: S, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
        }
      }
      let u = /* @__PURE__ */ new Map();
      for (let P of s) P.note.file && (u.has(P.note.file.path) || u.set(P.note.file.path, []), u.get(P.note.file.path).push(P));
      if (a.showDupLine) for (let [P, B] of u) {
        if (B.length < 2) continue;
        let $ = B.find((R) => !R.isAlias) || B[0];
        for (let R of B) {
          if (R === $) continue;
          let Q = $._x + $._w / 2 - (R._x + R._w / 2), X = $._y - R._y, j, I, S, L;
          Math.abs(Q) > Math.abs(X) ? Q > 0 ? (j = R._x + R._w, I = R._y, S = $._x, L = $._y) : (j = R._x, I = R._y, S = $._x + $._w, L = $._y) : X > 0 ? (j = R._x + R._w / 2, I = R._y + R._autoH / 2, S = $._x + $._w / 2, L = $._y - $._autoH / 2) : (j = R._x + R._w / 2, I = R._y - R._autoH / 2, S = $._x + $._w / 2, L = $._y + $._autoH / 2);
          let N = a.curve ? `M${j},${I} C${(j + S) / 2},${I} ${(j + S) / 2},${L} ${S},${L}` : `M${j},${I} L${S},${L}`;
          _.appendChild(V("path", { d: N, class: "lkm-edge", "stroke-dasharray": "4 3", opacity: 0.5, "marker-end": "url(#lkm-arrow)" }));
        }
      }
    }
    let F = /* @__PURE__ */ T((u) => this._draw(e, at(this.currentRoot, a), { anchorKey: u }), "redraw"), m = null, D = { before: t("\u2191 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u524D"), after: t("\u2193 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u540E"), child: t("\u2192 \u4F5C\u4E3A\u5B50\u8282\u70B9") }, W = /* @__PURE__ */ T((u, P) => {
      if (!P.note.file) return;
      this._hidePreview(), m = { node: P, sx: u.clientX, sy: u.clientY, moved: !1, target: null, zone: "child" };
      let B = document.createElement("div");
      B.className = "lkm-drag-hint", B.style.display = "none", document.body.appendChild(B);
      let $ = /* @__PURE__ */ T((j) => {
        if (!m) return;
        let I = j.clientX - m.sx, S = j.clientY - m.sy;
        if (!m.moved && Math.hypot(I, S) < 6) return;
        m.moved = !0, f.classList.add("lkm-dragging");
        let L = e.getBoundingClientRect(), N = (j.clientX - L.left - x) / A, se = (j.clientY - L.top - Y) / A, G = null, K = "child";
        for (let J of s)
          if (!(J.key === P.key || !J.note.file) && N >= J._x && N <= J._x + J._w && se >= J._y - J._autoH / 2 && se <= J._y + J._autoH / 2) {
            if (G = J, a.layoutMode !== "branch" && a.layoutDir === "v") {
              let k = (N - J._x) / J._w;
              K = k < 0.3 ? "before" : k > 0.7 ? "after" : "child";
            } else {
              let k = (se - (J._y - J._autoH / 2)) / J._autoH;
              K = k < 0.3 ? "before" : k > 0.7 ? "after" : "child";
            }
            break;
          }
        (G !== m.target || K !== m.zone) && (m.target && m.target._el && m.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), m.target = G, m.zone = K, G && G._el && (G._el.classList.add("lkm-drop-target"), K === "before" && G._el.classList.add("lkm-drop-before"), K === "after" && G._el.classList.add("lkm-drop-after"))), B.style.display = G ? "block" : "none", G && (B.textContent = D[K], B.style.left = j.clientX + 16 + "px", B.style.top = j.clientY + 16 + "px");
      }, "onMove"), R = /* @__PURE__ */ T(() => {
        window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", R), window.removeEventListener("touchmove", Q), window.removeEventListener("touchend", X), f.classList.remove("lkm-dragging"), B.remove();
        let j = m;
        m = null, j && (j.target && j.target._el && j.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), j.moved && j.target && (j.zone === "child" ? this._moveNode(j.node, j.target.note.file.path) : j.node.parent && j.target.parent && j.node.parent.note.file && j.target.parent.note.file && j.node.parent.note.file.path === j.target.parent.note.file.path ? this._reorderSiblings(j.node, j.target.note.file.path, j.zone === "after") : this._moveAndReorder(j.node, j.target, j.zone === "after")));
      }, "onUp"), Q = /* @__PURE__ */ T((j) => {
        j.touches.length && $({ clientX: j.touches[0].clientX, clientY: j.touches[0].clientY });
      }, "onTouchMove2"), X = /* @__PURE__ */ T(() => R(), "onTouchEnd2");
      window.addEventListener("mousemove", $), window.addEventListener("mouseup", R), window.addEventListener("touchmove", Q, { passive: !1 }), window.addEventListener("touchend", X);
    }, "startNodeDrag"), C = /* @__PURE__ */ T((u, P) => {
      if (!P.note.file) return;
      u.preventDefault(), u.stopPropagation(), O = !0;
      let B = V("path", { class: "lkm-wire" });
      _.appendChild(B);
      let $ = a.layoutMode !== "branch" && a.layoutDir === "v", R = $ ? P._x + P._w / 2 : P._x + P._w, Q = $ ? P._y + P._autoH / 2 : P._y, X = null, j = /* @__PURE__ */ T((G, K) => {
        let J = e.getBoundingClientRect();
        return { x: (G - J.left - x) / A, y: (K - J.top - Y) / A };
      }, "local"), I = /* @__PURE__ */ T((G, K) => {
        let J = (R + G) / 2;
        B.setAttribute("d", `M${R},${Q} C${J},${Q} ${J},${K} ${G},${K}`);
      }, "setWire");
      I(R, Q);
      let S = /* @__PURE__ */ T((G) => {
        let K = j(G.clientX, G.clientY);
        I(K.x, K.y);
        let J = null;
        for (let k of s)
          if (!(!k.note.file || k.key === P.key) && K.x >= k._x && K.x <= k._x + k._w && K.y >= k._y - k._autoH / 2 && K.y <= k._y + k._autoH / 2) {
            J = k;
            break;
          }
        J !== X && (X && X._el && X._el.classList.remove("lkm-wire-target"), X = J, X && X._el && X._el.classList.add("lkm-wire-target"));
      }, "onMove"), L = /* @__PURE__ */ T(async () => {
        O = !1, window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", L), window.removeEventListener("touchmove", N), window.removeEventListener("touchend", se), B.remove(), X && X._el && X._el.classList.remove("lkm-wire-target"), X && await this._addRelation(P, X.note);
      }, "onUp"), N = /* @__PURE__ */ T((G) => {
        G.preventDefault();
        let K = G.touches[0];
        S({ clientX: K.clientX, clientY: K.clientY });
      }, "onTouchMove"), se = /* @__PURE__ */ T(() => L(), "onTouchEnd");
      window.addEventListener("mousemove", S), window.addEventListener("mouseup", L), window.addEventListener("touchmove", N, { passive: !1 }), window.addEventListener("touchend", se);
    }, "startWire");
    for (let u of s) {
      if (a.layoutMode === "graph" || a.layoutMode === "force") continue;
      if (a.layoutMode === "git") {
        let te = u._x + u._w / 2, re = u._y, ce = u.note.type ? (a.typeColors || {})[u.note.type] : null, Se = He(a, u.note.status), ve = ce || a.accent || "#3A6B8A", Te = Se || "#ffffff", ue = V("g", { class: "lkm-git-node" + (u.note.zk ? " lkm-main" : "") + (u.isAlias ? " lkm-multi" : "") });
        u.note.zk && ue.appendChild(V("circle", { cx: te, cy: re, r: 15, fill: a.mainColor || "#3A6B8A", opacity: 0.18 })), ue.appendChild(V("circle", { cx: te, cy: re, r: 12, fill: ve, opacity: 0.14 }));
        let Ke = V("circle", { cx: te, cy: re, r: 8, class: "lkm-git-dot", fill: ve, stroke: Te, "stroke-width": 2.5 });
        u.isAlias && Ke.setAttribute("stroke-dasharray", "3 2"), ue.appendChild(Ke);
        let Ne = n.gvert, Pe = V("text", { class: "lkm-git-label" });
        if (Pe.textContent = u._shown || u.note.title, Ne ? (Pe.setAttribute("x", te + 18), Pe.setAttribute("y", re), Pe.setAttribute("dominant-baseline", "central")) : (Pe.setAttribute("x", te), Pe.setAttribute("y", re - 18), Pe.setAttribute("text-anchor", "middle")), ue.appendChild(Pe), u.children.length) {
          let Ae = Ne ? te : te + 22, tt = Ne ? re + 22 : re, st = V("circle", { cx: Ae, cy: tt, r: 12, class: "lkm-hit" });
          st.addEventListener("click", (nt) => {
            nt.stopPropagation(), u.expanded = !u.expanded, this._expandedMem.set(u.note.file ? u.note.file.path : u.key, u.expanded), F(u.key);
          }), ue.appendChild(st);
          let Qe = V("text", { x: Ae, y: tt + 4, class: "lkm-git-sign", "text-anchor": "middle" });
          Qe.textContent = u.expanded ? "\u2212" : "+", ue.appendChild(Qe);
        }
        u._el = ue, this._batchMode && this._selected.has(u.key) && ue.classList.add("lkm-selected"), this._selKey === u.key && ue.classList.add("lkm-sel");
        let yt = 0;
        ue.addEventListener("click", (Ae) => {
          if (this._batchMode) {
            Ae.stopPropagation(), this._toggleSelect(u.key);
            return;
          }
          let tt = Date.now(), st = tt - yt < 350;
          yt = st ? 0 : tt, st && u.note.file && (this._hidePreview(), this.app.workspace.getLeaf(!0).openFile(u.note.file));
          let Qe = this._selKey;
          if (this._selKey = u.key, Qe && Qe !== u.key) {
            let nt = this._nodeIndex && this._nodeIndex.get(Qe);
            nt && nt._el && nt._el.classList.remove("lkm-sel");
          }
          ue.classList.add("lkm-sel");
        }), ue.addEventListener("contextmenu", (Ae) => {
          Ae.preventDefault(), Ae.stopPropagation(), !this._batchMode && (this._selKey = u.key, ue.classList.add("lkm-sel"), this._showNodeMenu(u, Ae));
        });
        let Ue = null;
        ue.addEventListener("mouseenter", (Ae) => {
          m || (Ue && clearTimeout(Ue), Ue = setTimeout(() => {
            m || (Ue = null, this._showPreview(u, Ae));
          }, 1e3));
        }), ue.addEventListener("mousemove", (Ae) => {
          this._previewEl && this._positionPreview(Ae);
        }), ue.addEventListener("mouseleave", () => {
          Ue && (clearTimeout(Ue), Ue = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
            this._hidePreview(), this._hideTimer = null;
          }, 200);
        }), _.appendChild(ue);
        continue;
      }
      let P = !u.note.file, B = null, $ = V("g", {
        class: "lkm-node" + (u.note.zk ? " lkm-main" : "") + (u.isAlias ? " lkm-multi" : "") + (u.note.status ? " lkm-has-status" : "") + (u.note.status === "\u5DF2\u5F52\u6863" ? " lkm-archived" : ""),
        transform: `translate(${u._x},${u._y - u._autoH / 2})`
      }), R = V("rect", { width: u._w, height: u._autoH, rx: 12, ry: 12, class: "lkm-card" + (u.note.file && u.note.file.basename.endsWith(".excalidraw") ? " lkm-excalidraw" : "") }), Q = u.note.type ? (a.typeColors || {})[u.note.type] : null, X = He(a, u.note.status);
      Q && R.style.setProperty("--lkm-card-stroke", Q), $.appendChild(R);
      let j = V("g", { class: "lkm-status-dots" }), I = 6, S = /* @__PURE__ */ T((te, re) => {
        let ce = V("circle", { cx: 10, cy: I, r: 4, class: te });
        j.appendChild(ce);
        let Se = V("circle", { cx: 10, cy: I, r: 7, class: "lkm-dot-hit" }), ve = V("title");
        return ve.textContent = re, Se.appendChild(ve), j.appendChild(Se), I += 10, ce;
      }, "mkDot");
      if (u.note.zk && S("lkm-dot-zk", t("\u4E3B\u7B14\u8BB0\uFF1A\u8BE5\u7B14\u8BB0 main: true\uFF0C\u662F\u5BFC\u56FE\u7684\u4E3B\u5165\u53E3")), u.note.status) {
        let te = S("lkm-dot-status", Me(u.note.status) + t("\uFF1Astatus: ") + u.note.status);
        X && (te.style.fill = X);
      }
      u.isAlias && S("lkm-dot-multi", t("\u91CD\u590D\u8282\u70B9\uFF1A\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\u7684\u6302\u70B9\uFF09")), I > 9 && $.appendChild(j);
      let L = a.showCreated && !P && u.note.date ? u.note.date : "", N = a.showType && !P && u.note.type ? De(u.note.type) : "", se = a.showChildCount && !P && u.children.length ? t("\u5B50 ") + u.children.length : "", G = a.showWordCount && !P && u.note.file ? t("\u5B57 ") + Math.max(1, Math.round((u.note.file.stat.size || 0) / 3)) : "", K = a.nodeHeight === 0, J = a.showDesc && !P && u.note.desc ? K ? we(u.note.desc, 40) : kt(u.note.desc, Math.max(20, Math.min(u._w - 32, 140)), 11) : "", k = [N, se, G, L].filter(Boolean).join(" \xB7 "), H = !!k, q = !!J, de = K && q ? u._descLines || [J] : q ? [J] : [], z;
      K ? z = 18 : q && H ? z = 14 : q || H ? z = a.nodeHeight / 2 - 2 : z = a.nodeHeight / 2 + 5;
      let oe = V("text", { x: 16, y: z, class: "lkm-title" });
      if (oe.textContent = u._shown || u.note.title, $.appendChild(oe), de.length) {
        let te = K ? 32 : H ? 28 : a.nodeHeight / 2 + 8;
        for (let re of de) {
          let ce = V("text", { x: 16, y: te, class: "lkm-sub lkm-desc" });
          ce.textContent = re, $.appendChild(ce), te += 15;
        }
      }
      if (H) {
        let te = K ? u._autoH - 6 : a.nodeHeight - 9, re = V("text", { x: 16, y: te, class: "lkm-sub" });
        re.textContent = we(k, 50), $.appendChild(re);
      }
      let he = u._autoH / 2, me = window.innerWidth < 600, pe = me ? 12 : 10, ae = /* @__PURE__ */ T((te, re) => {
        let ce = V("title");
        ce.textContent = re, te.appendChild(ce);
      }, "addTip"), Ee = a.layoutMode !== "branch" && a.layoutDir === "v";
      if (u.children.length) {
        let te = V("g", { class: "lkm-expand" });
        ae(te, u.expanded ? t("\u6298\u53E0\u5B50\u8282\u70B9") : t("\u5C55\u5F00\u5B50\u8282\u70B9"));
        let re = Ee ? u._w / 2 : u._w + 14, ce = Ee ? u._autoH + 14 : he;
        te.appendChild(V("circle", { cx: re, cy: ce, r: pe, class: "lkm-dot" }));
        let Se = V("text", { x: re, y: ce + 5, class: "lkm-sign", "text-anchor": "middle" });
        Se.textContent = u.expanded ? "\u2212" : "+", te.appendChild(Se);
        let ve = V("circle", { cx: re, cy: ce, r: pe + 5, class: "lkm-hit" });
        ve.addEventListener("click", (Te) => {
          Te.stopPropagation(), u.expanded = !u.expanded, this._expandedMem.set(u.note.file ? u.note.file.path : u.key, u.expanded), F(u.key);
        }), ve.addEventListener("mouseenter", () => {
          B && (clearTimeout(B), B = null);
        }), te.appendChild(ve), $.appendChild(te);
      }
      if (u.note.file) {
        let te = me ? 26 : 24, re = u._w - (me ? 20 : 18), ce = V("g", { class: "lkm-connect" });
        ae(ce, t("\u62D6\u52A8\u8FDE\u7EBF\uFF1A\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u76EE\u6807\u6210\u4E3A\u672C\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u539F\u5173\u7CFB\u4FDD\u7559\uFF09"));
        let Se = re, ve = he;
        ce.appendChild(V("circle", { cx: Se, cy: ve, r: pe, class: "lkm-connect-bg" })), ce.appendChild(V("circle", { cx: Se, cy: ve, r: 2.6, class: "lkm-connect-dot" }));
        let Te = V("circle", { cx: Se, cy: ve, r: pe + 5, class: "lkm-hit" });
        if (Te.addEventListener("mousedown", (ue) => {
          this._batchMode || C(ue, u);
        }), Te.addEventListener("mouseenter", () => {
          B && (clearTimeout(B), B = null);
        }), Te.addEventListener("touchstart", (ue) => {
          this._batchMode || C(ue, u);
        }, { passive: !1 }), ce.appendChild(Te), $.appendChild(ce), a.showOpenIcon !== !1) {
          re -= te;
          let ue = V("g", { class: "lkm-open" });
          ae(ue, t("\u6253\u5F00\u7B14\u8BB0")), ue.appendChild(V("circle", { cx: re, cy: he, r: pe, class: "lkm-open-bg" }));
          let Ke = V("text", { x: re, y: he + 4, class: "lkm-open-sign", "text-anchor": "middle", transform: "rotate(90 " + re + " " + he + ")" });
          Ke.textContent = "\u270E", ue.appendChild(Ke);
          let Ne = V("circle", { cx: re, cy: he, r: pe + 3, class: "lkm-hit" });
          Ne.addEventListener("click", (Pe) => {
            Pe.stopPropagation(), this.app.workspace.getLeaf(!0).openFile(u.note.file);
          }), Ne.addEventListener("mouseenter", () => {
            B && (clearTimeout(B), B = null);
          }), ue.appendChild(Ne), $.appendChild(ue);
        }
        if (a.showAddIcon !== !1) {
          re -= te;
          let ue = V("g", { class: "lkm-add" });
          ae(ue, t("\u65B0\u589E\u5B50\u8282\u70B9\uFF08\u81EA\u52A8\u5199\u5165\u94FE\u63A5\uFF09")), ue.appendChild(V("circle", { cx: re, cy: he, r: pe, class: "lkm-add-bg" }));
          let Ke = V("text", { x: re, y: he + 4, class: "lkm-add-sign", "text-anchor": "middle" });
          Ke.textContent = "\uFF0B", ue.appendChild(Ke);
          let Ne = V("circle", { cx: re, cy: he, r: pe + 3, class: "lkm-hit" });
          Ne.addEventListener("click", (Pe) => {
            Pe.stopPropagation(), this.createChild(u);
          }), Ne.addEventListener("mouseenter", () => {
            B && (clearTimeout(B), B = null);
          }), ue.appendChild(Ne), $.appendChild(ue);
        }
      }
      u._el = $, this._batchMode && this._selected.has(u.key) && $.classList.add("lkm-selected"), this._selKey === u.key && $.classList.add("lkm-sel"), this._selectedRootPaths && u.note.file && this._selectedRootPaths.has(u.note.file.path) && $.classList.add("lkm-selected-root"), $.addEventListener("click", (te) => {
        if (this._batchMode) {
          te.stopPropagation(), this._toggleSelect(u.key);
          return;
        }
        this._select(u.key);
      }), $.addEventListener("contextmenu", (te) => {
        te.preventDefault(), te.stopPropagation(), !this._batchMode && (this._select(u.key), this._showNodeMenu(u, te));
      }), $.addEventListener("dblclick", (te) => {
        te.stopPropagation(), B && (clearTimeout(B), B = null), this._hidePreview(), !this._batchMode && (u.note.file ? this.app.workspace.getLeaf(!0).openFile(u.note.file) : u.children.length && (u.expanded = !u.expanded, this._expandedMem.set(u.note.file ? u.note.file.path : u.key, u.expanded), F(u.key)));
      }), $.addEventListener("mousedown", (te) => {
        te.button !== 0 || this._batchMode || (te.stopPropagation(), W(te, u));
      }), $.addEventListener("touchstart", (te) => {
        if (this._batchMode || !u.note.file || te.touches.length !== 1) return;
        let re = te.touches[0], ce = { clientX: re.clientX, clientY: re.clientY, preventDefault: /* @__PURE__ */ T(() => te.preventDefault(), "preventDefault"), stopPropagation: /* @__PURE__ */ T(() => te.stopPropagation(), "stopPropagation") };
        W(ce, u);
      }, { passive: !1 });
      let Ce = null;
      $.addEventListener("touchstart", (te) => {
        if (this._batchMode || !u.note.file) return;
        let re = te.touches[0];
        Ce = setTimeout(() => {
          Ce = null, this._select(u.key), this._showNodeMenu(u, { clientX: re.clientX, clientY: re.clientY });
        }, 500);
      }, { passive: !0 }), $.addEventListener("touchmove", () => {
        Ce && (clearTimeout(Ce), Ce = null);
      }, { passive: !0 }), $.addEventListener("touchend", () => {
        Ce && (clearTimeout(Ce), Ce = null);
      }, { passive: !0 }), u.note.file && !P && ($.addEventListener("mouseenter", (te) => {
        m || (B && clearTimeout(B), B = setTimeout(() => {
          m || (B = null, this._showPreview(u, te));
        }, 1e3));
      }), $.addEventListener("mousemove", (te) => {
        this._previewEl && this._positionPreview(te);
      }), $.addEventListener("mouseleave", () => {
        B && (clearTimeout(B), B = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
          this._hidePreview(), this._hideTimer = null;
        }, 200);
      })), _.appendChild($);
    }
    this._applyFilter();
    let A = 1, x = 0, Y = 0;
    this._view && (A = this._view.k, x = this._view.tx, Y = this._view.ty);
    let le = /* @__PURE__ */ T(() => _.setAttribute("transform", `translate(${x},${Y}) scale(${A})`), "apply"), O = !1, Z = /* @__PURE__ */ T(() => {
      let u = e.getBoundingClientRect(), P = u.width || e.clientWidth || 800, B = u.height || e.clientHeight || 600;
      if (A = Math.min(P / g, B / w, 1.4) || 1, r && s.length) {
        let $ = s[0];
        x = P / 2 - ($._x + $._w / 2) * A, Y = h * A - p * A;
      } else
        x = (P - g * A) / 2 - (c - h) * A, Y = (B - w * A) / 2 - (p - h) * A;
      this._view = { k: A, tx: x, ty: Y }, le();
    }, "fit");
    this._fit = Z;
    let v = /* @__PURE__ */ T((u) => {
      let P = s.find(($) => $.note.file && $.note.file.path === u);
      if (!P) return;
      let B = e.getBoundingClientRect();
      !B.width || !B.height || (x = B.width / 2 - (P._x + P._w / 2) * A, Y = B.height / 2 - P._y * A, this._view = { k: A, tx: x, ty: Y }, le());
    }, "centerOnPath");
    if (!this._view || i.fit) {
      if (requestAnimationFrame(() => {
        Z(), i.centerPath && v(i.centerPath);
      }), !i.centerPath) {
        let u = 3, P = /* @__PURE__ */ T(() => {
          u-- > 0 && Z();
        }, "onResize");
        window.addEventListener("resize", P);
        let B = setTimeout(() => window.removeEventListener("resize", P), 1500);
        this._cleanup.push(() => {
          window.removeEventListener("resize", P), clearTimeout(B);
        });
      }
    } else
      le(), i.centerPath && v(i.centerPath);
    let U = /* @__PURE__ */ T((u) => {
      u.preventDefault();
      let P = f.getBoundingClientRect(), B = u.clientX - P.left, $ = u.clientY - P.top, R = Math.max(0.2, Math.min(3, A * (u.deltaY < 0 ? 1.1 : 0.9)));
      x = B - (B - x) * (R / A), Y = $ - ($ - Y) * (R / A), A = R, this._view = { k: A, tx: x, ty: Y }, le();
    }, "onWheel");
    f.addEventListener("wheel", U, { passive: !1 }), this._cleanup.push(() => f.removeEventListener("wheel", U));
    let ne = !1, ke = !1, xe = 0, ye = 0, _e = /* @__PURE__ */ T((u) => {
      ne = !0, ke = !1, xe = u.clientX - x, ye = u.clientY - Y, f.classList.add("lkm-grabbing");
    }, "onDown"), fe = /* @__PURE__ */ T((u) => {
      ne && (!ke && Math.hypot(u.clientX - (xe + x), u.clientY - (ye + Y)) > 3 && (ke = !0), x = u.clientX - xe, Y = u.clientY - ye, this._view = { k: A, tx: x, ty: Y }, le());
    }, "onMove"), ie = /* @__PURE__ */ T(() => {
      let u = ne;
      if (ne = !1, f.classList.remove("lkm-grabbing"), u && !ke && !this._batchMode && this._selKey) {
        let P = this._nodeIndex && this._nodeIndex.get(this._selKey);
        P && P._el && P._el.classList.remove("lkm-sel"), this._selKey = null;
      }
      ke && this._scheduleAutoSave();
    }, "onUp");
    f.addEventListener("mousedown", _e), window.addEventListener("mousemove", fe), window.addEventListener("mouseup", ie), this._cleanup.push(() => {
      f.removeEventListener("mousedown", _e), window.removeEventListener("mousemove", fe), window.removeEventListener("mouseup", ie);
    });
    let ge = null, Fe = null, Re = /* @__PURE__ */ T((u) => {
      if (!O)
        if (u.stopPropagation(), u.touches.length === 2) {
          u.preventDefault();
          let P = u.touches[0].clientX - u.touches[1].clientX, B = u.touches[0].clientY - u.touches[1].clientY;
          Fe = { dist: Math.hypot(P, B), k: A }, ge = null;
        } else u.touches.length === 1 && (ge = { x: u.touches[0].clientX - x, y: u.touches[0].clientY - Y }, Fe = null, f.classList.add("lkm-grabbing"));
    }, "onTouchStart"), Oe = /* @__PURE__ */ T((u) => {
      if (!O)
        if (u.stopPropagation(), u.touches.length === 2 && Fe) {
          u.preventDefault();
          let P = u.touches[0].clientX - u.touches[1].clientX, B = u.touches[0].clientY - u.touches[1].clientY, $ = Math.max(0.2, Math.min(3, Fe.k * (Math.hypot(P, B) / Fe.dist))), R = f.getBoundingClientRect(), Q = (u.touches[0].clientX + u.touches[1].clientX) / 2 - R.left, X = (u.touches[0].clientY + u.touches[1].clientY) / 2 - R.top;
          x = Q - (Q - x) * ($ / A), Y = X - (X - Y) * ($ / A), A = $, this._view = { k: A, tx: x, ty: Y }, le();
        } else u.touches.length === 1 && ge ? (u.preventDefault(), x = u.touches[0].clientX - ge.x, Y = u.touches[0].clientY - ge.y, this._view = { k: A, tx: x, ty: Y }, le()) : u.touches.length && u.preventDefault();
    }, "onTouchMove"), Ze = /* @__PURE__ */ T((u) => {
      O || (u.stopPropagation(), u.touches.length === 0 && (ge = null, Fe = null, f.classList.remove("lkm-grabbing"), this._scheduleAutoSave()));
    }, "onTouchEnd");
    f.addEventListener("touchstart", Re, { passive: !1 }), f.addEventListener("touchmove", Oe, { passive: !1 }), f.addEventListener("touchend", Ze), f.addEventListener("touchcancel", Ze), this._cleanup.push(() => {
      f.removeEventListener("touchstart", Re), f.removeEventListener("touchmove", Oe), f.removeEventListener("touchend", Ze), f.removeEventListener("touchcancel", Ze);
    });
  }
  _templateFiles() {
    let e = this.s, n = (e.templateFolder || "").trim();
    if (!n) {
      let a = (e.templatePath || "").trim();
      if (a) {
        let s = a.lastIndexOf("/");
        n = s > 0 ? a.slice(0, s) : "";
      }
    }
    if (!n) return [];
    let i = this.app.vault.getAbstractFileByPath(be(n));
    return !i || !i.children ? [] : i.children.filter((a) => a instanceof Xe && a.extension === "md");
  }
  async _buildNewNoteBody(e, n, i, a, s, o, c, p) {
    let d = this.s, l = d.linkField || "children", r = d.backField || "parent", h = d.zkField || "main", g = d.statusField || "status", w = d.typeField || "type", f = d.dateField || "date", E = d.titleField || "title", y = /* @__PURE__ */ new Set([l, r, h, g, f, w, E]), _ = "", F = [];
    if (a) {
      let W = this.app.vault.getAbstractFileByPath(be(a));
      if (W instanceof Xe) {
        let C = wt(await this.app.vault.read(W));
        _ = C.body;
        let A = new Map(C.fields);
        i || (A.get(w) != null ? i = lt(A.get(w)) : A.get("type") != null && (i = lt(A.get("type"))));
        let x = [];
        for (let [Y, le] of [["zk", h], ["status", g], ["date", f], ["type", w], ["title", E]])
          Y !== le && A.has(Y) && !A.has(le) && x.push(Y + "\u2192" + le);
        x.length && new b(t("\u6A21\u677F\u5B57\u6BB5\u4E0E\u914D\u7F6E\u4E0D\u4E00\u81F4\uFF1A") + x.join("\uFF0C") + t("\u3002\u5DF2\u7528\u914D\u7F6E\u5B57\u6BB5\u540D\u521B\u5EFA\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6A21\u677F\u3002"), 1e4);
        for (let [Y, le] of C.fields)
          y.has(Y) || F.push([Y, le]);
      }
    }
    let m = ["---"];
    m.push(l + ": []"), e && d.autoAddBackLink && m.push(r + ': "' + e + '"'), m.push(h + ": " + (s ? "true" : "false")), m.push(g + ": " + (o ? '"' + o + '"' : '""')), m.push(f + ": " + n), m.push(w + ': "' + (i || "") + '"'), m.push(E + ': "' + (c === "excalidraw" && p ? p : "") + '"');
    for (let [W, C] of F) m.push(W + ": " + (C ?? ""));
    if (m.push("---", ""), c === "excalidraw") {
      let W = m.lastIndexOf("---");
      return W > 0 && m.splice(W, 0, "excalidraw-plugin: parsed", "tags: [excalidraw]"), m.join(`
`) + `==\u26A0  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. \u26A0== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'


## Drawing
\`\`\`compressed-json
N4IgLgngDgpiBcIYA8DGBDANgSwCYCd0B3EAGhADcZ8BnbAewDsEAmcm+gV31TkQAswYKDXgB6MQHNsYfpwBGAOlT0AtmIBeNCtlQbs6RmPry6uA4wC0KDDgLFLUTJ2lH8MTDHQ0YNMWHRJMRZFFgBORQAGMiRPVRhGMBoEAG0AXXJ0KCgAZQCwPlBJfDwc7A0+Rk5MTHIdGCIAIXRUAGtirkZcAGF6THp8BBAAYgAzcYmQAF8poA===
\`\`\`
%%`;
    }
    return m.join(`
`) + (_ || "");
  }
  async _rebuildUntilReady(e, n, i) {
    n = n || 30, i = i !== !1;
    for (let a = 0; a < n; a++) {
      if (await this.rebuild(!0), this.notes.has(e) && (!i || this._treePaths && this._treePaths.has(e)))
        return;
      await new Promise((s) => setTimeout(s, 150));
    }
    new b(t("\u5DF2\u521B\u5EFA\uFF0C\u4F46\u89C6\u56FE\u6682\u672A\u5237\u65B0\uFF0C\u8BF7\u70B9\u5237\u65B0"));
  }
  createChild(e) {
    if (!e || !e.note.file) {
      new b(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6\uFF0C\u65E0\u6CD5\u65B0\u589E\u5B50\u8282\u70B9"));
      return;
    }
    let n = this.s, i = Object.keys(n.typeColors || {}), a = i.includes(n.defaultType) ? n.defaultType : "", s = Object.keys(n.statusColors || {}), o = s.includes(n.defaultStatus) ? n.defaultStatus : "", c = [{ path: "", name: t("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let l of this._templateFiles()) c.push({ path: l.path, name: l.basename });
    let p = "", d = (n.templatePath || "").trim();
    if (d) {
      let l = c.find((r) => r.path === be(d));
      l && (p = l.path);
    }
    new St(this.app, e.note.title, {
      types: i,
      defaultType: a,
      statuses: s,
      defaultStatus: o,
      templates: c,
      defaultTemplate: p,
      typeTemplates: n.typeTemplates || {},
      defaultFormat: n.defaultNoteFormat || "md",
      zkField: n.zkField || "main",
      onSubmit: /* @__PURE__ */ T(async (l, r, h, g, w, f) => {
        try {
          let E = f === "excalidraw" ? ".excalidraw.md" : ".md", y = Ge(l) + E, _ = be(n.mainFolder), F = be(_ + "/" + y);
          if (this.app.vault.getAbstractFileByPath(F)) {
            new b(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + y);
            return;
          }
          let m = /* @__PURE__ */ new Date(), D = m.getFullYear() + "-" + String(m.getMonth() + 1).padStart(2, "0") + "-" + String(m.getDate()).padStart(2, "0"), W = await this._buildNewNoteBody(e.note.file.basename, D, r, h, g, w, f, l);
          await et(this.app, e.note.file, n.linkField, Ge(l) + (f === "excalidraw" ? ".excalidraw" : "")), await this.app.vault.create(F, W), new b(t("\u5DF2\u521B\u5EFA\u300C") + Ge(l) + t("\u300D\u5E76\u5173\u8054\u5230\u300C") + we(e.note.title, 14) + "\u300D");
          let C = e;
          for (; C; )
            this._expandedMem.set(C.note.file ? C.note.file.path : C.key, !0), C = C.parent;
          await this._rebuildUntilReady(F);
        } catch (E) {
          new b(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (E && E.message ? E.message : E));
        }
      }, "onSubmit")
    }).open();
  }
  createStandaloneNote() {
    let e = this.s, n = Object.keys(e.typeColors || {}), i = n.includes(e.defaultType) ? e.defaultType : "", a = Object.keys(e.statusColors || {}), s = a.includes(e.defaultStatus) ? e.defaultStatus : "", o = [{ path: "", name: t("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let d of this._templateFiles()) o.push({ path: d.path, name: d.basename });
    let c = "", p = (e.templatePath || "").trim();
    if (p) {
      let d = o.find((l) => l.path === be(p));
      d && (c = d.path);
    }
    new St(this.app, "", {
      types: n,
      defaultType: i,
      statuses: a,
      defaultStatus: s,
      templates: o,
      defaultTemplate: c,
      typeTemplates: e.typeTemplates || {},
      defaultFormat: e.defaultNoteFormat || "md",
      standalone: !0,
      zkField: e.zkField || "main",
      onSubmit: /* @__PURE__ */ T(async (d, l, r, h, g, w) => {
        try {
          let f = w === "excalidraw" ? ".excalidraw.md" : ".md", E = Ge(d) + f, y = be(e.mainFolder), _ = be(y + "/" + E);
          if (this.app.vault.getAbstractFileByPath(_)) {
            new b(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + E);
            return;
          }
          let F = /* @__PURE__ */ new Date(), m = F.getFullYear() + "-" + String(F.getMonth() + 1).padStart(2, "0") + "-" + String(F.getDate()).padStart(2, "0"), D = await this._buildNewNoteBody(null, m, l, r, h, g, w, d);
          await this.app.vault.create(_, D), new b(t("\u5DF2\u521B\u5EFA\u300C") + Ge(d) + "\u300D"), await this._rebuildUntilReady(_, 30, !1), this._focusPath(_);
        } catch (f) {
          new b(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (f && f.message ? f.message : f));
        }
      }, "onSubmit")
    }).open(), this._scheduleAutoSave();
  }
  _renderDash(e) {
    let n = this.s, i = e.createDiv("lkm-toolbar"), a = i.createEl("button", { cls: "lkm-btn", text: t("\u8FD4\u56DE") });
    a.title = t("\u8FD4\u56DE\u601D\u7EF4\u5BFC\u56FE"), a.onclick = () => {
      this._mode = "map", this.render();
    }, i.createSpan({ cls: "lkm-dash-title", text: t("\u5DE5\u4F5C\u53F0") });
    let s = i.createEl("button", { cls: "lkm-btn" + (this._dashTab === "timeline" ? " is-active" : ""), text: t("\u65F6\u95F4\u7EBF") });
    if (s.title = t("\u5207\u6362\u5230\u65F6\u95F4\u7EBF\u89C6\u56FE"), s.style.marginLeft = "auto", s.onclick = () => {
      this._dashTab = this._dashTab === "timeline" ? "stats" : "timeline", this.render();
    }, this._dashTab === "stats") {
      let o = this._dashStats(), c = i.createEl("button", { cls: "lkm-btn", text: t("\u590D\u5236\u7EDF\u8BA1") });
      c.title = t("\u628A\u7EDF\u8BA1\u6458\u8981\u590D\u5236\u4E3A Markdown"), c.onclick = () => {
        navigator.clipboard.writeText(this._dashSummaryMd(o)).then(
          () => new b(t("\u5DF2\u590D\u5236\u7EDF\u8BA1\u6458\u8981")),
          () => new b(t("\u590D\u5236\u5931\u8D25"))
        );
      };
      let p = e.createDiv("lkm-dash");
      if (!o.total) {
        p.createDiv("lkm-dash-h").setText("\u300C" + n.mainFolder + t("\u300D\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u7B14\u8BB0\u3002"));
        return;
      }
      let d = p.createDiv("lkm-cards"), l = [
        { num: o.total, label: t("\u7B14\u8BB0\u603B\u6570"), icon: "files", color: "#6c8cff", filter: { kind: "all" } },
        { num: o.zk, label: t("\u4E3B\u7B14\u8BB0"), icon: "star", color: "#f2a65a", filter: { kind: "zk" } },
        { num: o.kw, label: t("\u5173\u952E\u8BCD\u7D22\u5F15"), icon: "tags", color: "#b07cff", filter: { kind: "kw" } },
        { num: o.done, label: t("\u5DF2\u5B8C\u6210"), icon: "check", color: "#3fa66a", filter: { kind: "status", value: "done" } },
        { num: o.orphan, label: t("\u672A\u5173\u8054"), icon: "unlink", color: "#4ba3e5", filter: { kind: "orphan" } },
        { num: o.todo, label: t("\u5F85\u529E"), icon: "list-checks", color: "#e5534b", filter: { kind: "status", value: "todo" } },
        { num: o.linkCount, label: t("\u94FE\u63A5\u603B\u6570"), icon: "link", color: "#6c8cff" },
        { num: o.deadLinks, label: t("\u5931\u6548\u94FE\u63A5"), icon: "alert-triangle", color: "#e5534b" }
      ];
      for (let O of l) {
        let Z = O.filter && this._isFilterActive(O.filter), v = d.createDiv("lkm-card-stat lkm-card-click" + (Z ? " is-active" : "")), U = v.createDiv("lkm-card-ico");
        U.style.background = "color-mix(in srgb, " + O.color + " 16%, transparent)", U.style.color = O.color;
        try {
          bt(U, O.icon);
        } catch {
        }
        v.createDiv("lkm-stat-num").setText(String(O.num)), v.createDiv("lkm-stat-label").setText(O.label + (O.filter && o.total ? " \xB7 " + Math.round(O.num / o.total * 100) + "%" : "")), O.filter && (v.title = t("\u70B9\u51FB\u67E5\u770B\u300C") + O.label + t("\u300D\u5217\u8868"), v.addEventListener("click", () => this._toggleDashFilter(O.filter)));
      }
      {
        let O = p.createDiv("lkm-dash-two"), Z = O.createDiv("lkm-dash-sec");
        Z.createDiv("lkm-dash-h").setText(t("\u7C7B\u578B\u5206\u5E03"));
        let v = o.byTypeOrder.map((ie) => ({ label: De(ie.name), value: ie.count, color: ie.color, filter: { kind: "type", value: ie.name } }));
        o.noType && v.push({ label: t("\u672A\u6807\u6CE8"), value: o.noType, color: "var(--text-faint)", filter: { kind: "notype" } });
        let U = Z.createDiv("lkm-donut-wrap");
        this._renderDonut(U, v, o.total);
        let ne = U.createDiv("lkm-legend");
        for (let ie of v) {
          let ge = ne.createDiv("lkm-legend-row lkm-type-click" + (this._isFilterActive(ie.filter) ? " is-active" : ""));
          ge.createSpan({ cls: "lkm-legend-dot" }).style.background = ie.color, ge.createSpan({ cls: "lkm-legend-name", text: ie.label }), ge.createSpan({ cls: "lkm-legend-num", text: String(ie.value) }), ge.addEventListener("click", () => this._toggleDashFilter(ie.filter));
        }
        let ke = O.createDiv("lkm-dash-sec");
        ke.createDiv("lkm-dash-h").setText(t("\u72B6\u6001\u5206\u5E03"));
        let xe = ke.createDiv("lkm-stackbar"), ye = o.byStatusOrder.map((ie) => ({ label: Me(ie.name), value: ie.count, color: ie.color, filter: { kind: "status", value: ie.name } }));
        o.noStatus && ye.push({ label: t("\u65E0\u72B6\u6001"), value: o.noStatus, color: "var(--text-faint)", filter: { kind: "nostatus" } });
        for (let ie of ye) {
          if (!ie.value) continue;
          let ge = xe.createDiv("lkm-stackbar-seg");
          ge.style.width = Math.max(6, ie.value / o.total * 100) + "%", ge.style.background = ie.color, this._isFilterActive(ie.filter) && ge.addClass("is-active"), ge.title = ie.label + "\uFF1A" + ie.value + t(" \u7BC7\uFF0C\u70B9\u51FB\u7B5B\u9009"), ge.addEventListener("click", () => this._toggleDashFilter(ie.filter));
        }
        let _e = ke.createDiv("lkm-chips"), fe = /* @__PURE__ */ T((ie, ge, Fe, Re) => {
          let Oe = _e.createDiv("lkm-chip lkm-type-click" + (this._isFilterActive(Re) ? " is-active" : ""));
          Oe.createSpan({ cls: "lkm-legend-dot" }).style.background = Fe, Oe.createSpan({ text: ie + " " + ge }), Oe.addEventListener("click", () => this._toggleDashFilter(Re));
        }, "chip");
        for (let ie of o.byStatusOrder) fe(Me(ie.name), ie.count, ie.color, { kind: "status", value: ie.name });
        o.noStatus && fe(t("\u65E0\u72B6\u6001"), o.noStatus, "var(--text-faint)", { kind: "nostatus" }), fe(t("\u672A\u6807\u65E5\u671F"), o.noDate, "var(--text-faint)", { kind: "nodate" });
      }
      {
        let O = p.createDiv("lkm-dash-sec");
        O.createDiv("lkm-dash-h").setText(t("\u6708\u5EA6\u521B\u5EFA \xB7 \u8FD112\u4E2A\u6708\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u5F53\u6708\u65B0\u589E\uFF09"));
        let Z = O.createDiv("lkm-chart-body");
        this._renderBarChart(
          Z,
          o.monthly.map((v) => ({ label: parseInt(v.key.slice(5, 7), 10) + t("\u6708"), value: v.count, filter: { kind: "month", value: v.key } })),
          { height: window.innerWidth < 600 ? 100 : 120, thinLabels: window.innerWidth < 600 }
        );
      }
      {
        let O = p.createDiv("lkm-dash-sec");
        if (O.createDiv("lkm-dash-h").setText(t("\u6811\u6DF1\u5EA6\u5206\u5E03\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u8BE5\u5C42\u8282\u70B9\uFF09")), o.depthMax) {
          let Z = O.createDiv("lkm-chart-body"), v = [];
          for (let U = 1; U <= o.depthMax; U++) v.push({ label: t("\u7B2C") + U + t("\u5C42"), value: o.depthCount.get(U) || 0, filter: { kind: "depth", value: String(U) } });
          this._renderBarChart(Z, v, { height: window.innerWidth < 600 ? 100 : 120 });
        } else O.createDiv("lkm-heat-sum").setText(t("\u8FD8\u6CA1\u6709\u53EF\u7EDF\u8BA1\u7684\u5C42\u7EA7\u6570\u636E"));
      }
      let r = p.createDiv("lkm-dash-sec"), h = new Set([...o.heat.keys()].map((O) => O.slice(0, 4)));
      h.add(String((/* @__PURE__ */ new Date()).getFullYear()));
      let g = [...h].sort().reverse();
      this._dashHeatIdx = Math.min(this._dashHeatIdx || 0, g.length);
      let w = r.createDiv("lkm-heat-head");
      if (w.createDiv("lkm-dash-h").setText(t("\u521B\u5EFA\u70ED\u529B\u56FE \xB7 ") + (this._dashHeatIdx ? g[this._dashHeatIdx - 1] + t(" \u5E74") : t("\u8FD1\u4E00\u5E74")) + t("\uFF08\u6309 date \u5B57\u6BB5\uFF09")), this._dashHeatIdx || g.length > 1) {
        let O = w.createDiv("lkm-heat-nav"), Z = /* @__PURE__ */ T(() => {
          let ne = this.contentEl.querySelector(".lkm-dash"), ke = ne ? ne.scrollTop : 0;
          this.render();
          let xe = this.contentEl.querySelector(".lkm-dash");
          xe && (xe.scrollTop = ke);
        }, "rerender"), v = O.createEl("button", { cls: "lkm-step", text: "\u2039" });
        v.disabled = this._dashHeatIdx >= g.length;
        let U = O.createEl("button", { cls: "lkm-step", text: "\u203A" });
        U.disabled = this._dashHeatIdx <= 0, v.onclick = () => {
          this._dashHeatIdx++, Z();
        }, U.onclick = () => {
          this._dashHeatIdx--, Z();
        };
      }
      let f = 864e5, E = /* @__PURE__ */ new Date();
      E.setHours(0, 0, 0, 0);
      let y = (E.getDay() + 6) % 7, _ = window.innerWidth < 600, F = _ ? 10 : 12, m, D, W, C;
      if (this._dashHeatIdx) {
        let O = parseInt(g[this._dashHeatIdx - 1], 10), Z = new Date(O, 0, 1), v = new Date(O, 11, 31);
        m = new Date(Z.getTime() - (Z.getDay() + 6) % 7 * f), D = Z, W = v, C = Math.round((v.getTime() + (6 - (v.getDay() + 6) % 7) * f - m.getTime()) / f / 7);
      } else {
        let O = new Date(E.getTime() + (6 - y) * f);
        C = _ ? 26 : 53, m = new Date(O.getTime() - (C * 7 - 1) * f), D = m, W = E;
      }
      if (r.createDiv("lkm-heat-sum").setText(o.heat.size ? (() => {
        let O = this._ds(D), Z = this._ds(W), v = 0, U = 0, ne = { date: "", count: 0 };
        for (let [ke, xe] of o.heat) ke >= O && ke <= Z && (v += xe, U++, xe > ne.count && (ne = { date: ke, count: xe }));
        return (U ? U + t(" \u5929\u6709\u521B\u5EFA \xB7 \u5171 ") + v + t(" \u7BC7") : t("\u8BE5\u65F6\u95F4\u6BB5\u6682\u65E0\u521B\u5EFA\u8BB0\u5F55")) + (ne.count ? t(" \xB7 \u6700\u591A\u4E00\u5929 ") + ne.count + t(" \u7BC7\uFF08") + ne.date + "\uFF09" : "");
      })() : t("\u8FD8\u6CA1\u6709\u5E26 date \u5B57\u6BB5\u7684\u7B14\u8BB0")), o.heat.size) {
        let O = r.createDiv("lkm-heat-scroll"), Z = O.createDiv("lkm-heat-grid");
        Z.style.gridTemplateColumns = "26px repeat(" + C + ", " + F + "px)", Z.style.gridAutoRows = F + "px";
        let v = -1;
        for (let ye = 0; ye < C; ye++) {
          let _e = new Date(m.getTime() + ye * 7 * f);
          if (_e.getMonth() !== v) {
            v = _e.getMonth();
            let fe = Z.createDiv("lkm-heat-mon");
            fe.style.gridColumn = String(ye + 2), fe.style.gridRow = "1", fe.setText(_e.getMonth() + 1 + t("\u6708"));
          }
        }
        [t("\u4E00"), t("\u4E09"), t("\u4E94")].forEach((ye, _e) => {
          let fe = Z.createDiv("lkm-heat-wd");
          fe.style.gridColumn = "1", fe.style.gridRow = String(_e * 2 + 2), fe.setText(ye);
        });
        let U = this._ds(D), ne = this._ds(W), ke = this._ds(E), xe = null;
        for (let ye = 0; ye < C; ye++)
          for (let _e = 0; _e < 7; _e++) {
            let fe = new Date(m.getTime() + (ye * 7 + _e) * f), ie = Z.createDiv("lkm-heat-cell");
            ie.style.gridColumn = String(ye + 2), ie.style.gridRow = String(_e + 2);
            let ge = this._ds(fe);
            if (fe > E || ge < U || ge > ne) {
              ie.addClass("lkm-heat-off");
              continue;
            }
            let Fe = o.heat.get(ge) || 0, Re = Fe === 0 ? 0 : Fe === 1 ? 1 : Fe <= 2 ? 2 : Fe <= 4 ? 3 : 4;
            Re && ie.addClass("lkm-heat-l" + Re), this._isFilterActive({ kind: "date", value: ge }) && ie.addClass("is-active"), Fe && ie.addClass("lkm-heat-hit"), ge === ke && (ie.addClass("lkm-heat-today"), xe = ie), ie.title = ge + "\uFF1A" + Fe + t(" \u7BC7") + (ge === ke ? t("\uFF08\u4ECA\u5929\uFF09") : ""), ie.addEventListener("click", () => this._toggleDashFilter({ kind: "date", value: ge }));
          }
        xe && !this._dashHeatIdx && requestAnimationFrame(() => {
          let ye = xe.getBoundingClientRect(), _e = O.getBoundingClientRect();
          ye.right > _e.right - 20 && (O.scrollLeft += ye.right - _e.right + 30);
        });
      }
      let A = p.createDiv("lkm-dash-two"), x = A.createDiv("lkm-dash-sec"), Y = this._dashFilters || [];
      if (Y.length) {
        x.addClass("lkm-filter-sec");
        let O = this._sortDashItems(this._dashFilterItems(Y)), Z = x.createDiv("lkm-filter-head");
        Z.createSpan({ cls: "lkm-dash-h lkm-filter-title", text: this._dashFilterGroupLabel(Y) });
        let v = Z.createSpan({ cls: "lkm-filter-count", text: "\uFF08" + O.length + "\uFF09" }), U = Z.createEl("input", { cls: "lkm-filter-search", type: "text", attr: { placeholder: t("\u8FC7\u6EE4\u2026") } });
        U.value = this._dashSearch || "", U.addEventListener("focus", () => {
          if (!window.matchMedia("(hover: none)").matches) return;
          let fe = this.contentEl.querySelector(".lkm-dash"), ie = this.contentEl.querySelector(".lkm-toolbar");
          if (!fe || !ie) return;
          let ge = fe.scrollTop, Fe = fe.style.flex, Re = fe.style.height, Oe = /* @__PURE__ */ T(() => {
            let Ze = ie.getBoundingClientRect().bottom, u = window.visualViewport, B = (u ? u.height + u.offsetTop : window.innerHeight) - Ze;
            B > 60 && (fe.style.flex = "none", fe.style.height = B + "px"), fe.scrollTop = Math.max(0, Z.offsetTop - 50);
          }, "doAdjust");
          setTimeout(Oe, 300), setTimeout(Oe, 500), U.addEventListener("blur", () => {
            fe.style.flex = Fe, fe.style.height = Re, fe.scrollTop = ge;
          }, { once: !0 });
        });
        let ne = Z.createEl("button", { cls: "lkm-btn", text: t("\u6392\u5E8F\uFF1A") + { date: t("\u65E5\u671F"), name: t("\u540D\u79F0") }[this._dashSort || "date"] });
        ne.onclick = () => {
          this._dashSort = this._dashSort === "date" ? "name" : "date", this.render();
        };
        let ke = Z.createEl("button", { cls: "lkm-btn", text: t("\u6E05\u9664") });
        ke.onclick = () => {
          this._dashFilters = [], this._dashSearch = "", this.render();
        }, O.length || x.createDiv("lkm-heat-sum").setText(t("\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7B14\u8BB0"));
        let xe = x.createDiv("lkm-filter-list"), ye = [];
        for (let fe of O) {
          let ie = this._dashRow(xe, fe);
          ye.push({ el: ie, text: (fe.title + " " + (fe.type || "")).toLowerCase() }), ie.addEventListener("click", () => {
            fe.isIndex ? (this._kwFile = fe.file, this._multiRoot = !1, this._mode = "map", this.render()) : this.app.workspace.getLeaf(!0).openFile(fe.file);
          });
        }
        let _e = /* @__PURE__ */ T(() => {
          let fe = (this._dashSearch || "").trim().toLowerCase(), ie = 0;
          for (let ge of ye) {
            let Fe = !fe || ge.text.includes(fe);
            ge.el.style.display = Fe ? "" : "none", Fe && ie++;
          }
          v.setText("\uFF08" + (fe ? ie + "/" : "") + O.length + "\uFF09");
        }, "applySearch");
        U.addEventListener("input", () => {
          this._dashSearch = U.value, _e();
        }), _e();
      } else {
        x.createDiv("lkm-dash-h").setText(t("\u5206\u652F\u5206\u5E03 \xB7 \u5B8C\u6210\u8FDB\u5EA6")), o.branches.length || x.createDiv("lkm-heat-sum").setText(t("\u8FD8\u6CA1\u6709 main: true \u7684\u4E3B\u7B14\u8BB0"));
        let O = this._dashBranchAll && o.branches.length > 6, Z = O ? o.branches : o.branches.slice(0, 6), v = x.createDiv("lkm-filter-list lkm-branch-list"), U = o.branches[0] && o.branches[0].total || 1;
        for (let ne of Z) {
          let ke = v.createDiv("lkm-branch-row");
          ke.title = ne.title + t("\uFF0C\u70B9\u51FB\u5728\u5BFC\u56FE\u4E2D\u6253\u5F00"), ke.createSpan({ cls: "lkm-branch-name", text: we(ne.title, 10) });
          let xe = ke.createDiv("lkm-type-bar").createDiv("lkm-branch-scaler");
          xe.style.width = Math.max(3, Math.round(ne.total / U * 100)) + "%";
          let ye = xe.createDiv("lkm-branch-done");
          ye.style.width = (ne.total ? Math.round(ne.done / ne.total * 100) : 0) + "%", ke.createSpan({ cls: "lkm-type-num", text: ne.done + "/" + ne.total + " \xB7 " + Math.round(ne.done / ne.total * 100) + "%" }), ke.addEventListener("click", () => {
            this.rootPath = ne.path, this._view = null, this._kwFile = null, this._multiRoot = !1, this._mode = "map", this._expandedMem.clear(), this.render();
          });
        }
        if (o.branches.length > 6) {
          let ne = x.createEl("button", { cls: "lkm-btn", text: O ? t("\u6536\u8D77") : t("\u5C55\u5F00\u5168\u90E8 ") + o.branches.length + t(" \u4E2A\u5206\u652F") });
          ne.onclick = () => {
            this._dashBranchAll = !this._dashBranchAll, this.render();
          };
        }
      }
      let le = A.createDiv("lkm-dash-sec");
      le.createDiv("lkm-dash-h").setText(t("\u6700\u8FD1\u521B\u5EFA"));
      for (let O of o.recent)
        this._dashRow(le, O).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(O.file));
      if (o.modified.length) {
        le.createDiv("lkm-dash-h lkm-sec-gap").setText(t("\u6700\u8FD1\u4FEE\u6539"));
        for (let O of o.modified)
          this._dashRow(le, O).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile(O.file));
      }
    } else
      this._renderTimelineDash(e);
  }
  _renderTimelineDash(e) {
    let i = [...ut(this.app, this.s).map.values()], a = e.createDiv({ cls: "lkm-tl-toolbar" }), s = a.createEl("input", { type: "text", cls: "lkm-tl-search", placeholder: t("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    s.value = this._tlSearch, s.addEventListener("input", () => {
      this._tlSearch = s.value.toLowerCase().trim(), this._renderTimelineBody(w, i);
    });
    let o = a.createEl("select", { cls: "lkm-tl-typesel" });
    o.createEl("option", { value: "", text: t("\u7C7B\u578B") });
    let c = [...new Set(i.map((f) => f.type).filter(Boolean))].sort();
    for (let f of c)
      o.createEl("option", { value: f, text: De(f) });
    o.value = this._tlTypeFilter, o.addEventListener("change", () => {
      this._tlTypeFilter = o.value, this._renderTimelineBody(w, i);
    });
    let p = a.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [f, E] of [["all", t("\u65F6\u95F4")], ["day", t("\u4ECA\u65E5")], ["week", t("\u672C\u5468")], ["month", t("\u672C\u6708")], ["year", t("\u672C\u5E74")], ["pweek", t("\u8FD1\u4E00\u5468")], ["pmonth", t("\u8FD1\u4E00\u6708")], ["pyear", t("\u8FD1\u4E00\u5E74")]])
      p.createEl("option", { value: f, text: E });
    p.value = this._tlRange, p.addEventListener("change", () => {
      this._tlRange = p.value, this._renderTimelineBody(w, i);
    });
    let d = a.createEl("input", { type: "date", cls: "lkm-tl-datesel" });
    d.value = this._tlDateFilter, d.title = t("\u6309\u6307\u5B9A\u65E5\u671F\u7B5B\u9009"), d.addEventListener("change", () => {
      this._tlDateFilter = d.value, this._renderTimelineBody(w, i);
    });
    let l = a.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [f, E] of [["all", t("\u6027\u8D28")], ["zk", t("\u4E3B\u7B14\u8BB0")], ["normal", t("\u666E\u901A")]])
      l.createEl("option", { value: f, text: E });
    l.value = this._tlZkFilter, l.addEventListener("change", () => {
      this._tlZkFilter = l.value, this._renderTimelineBody(w, i);
    });
    let r = a.createEl("select", { cls: "lkm-tl-typesel" });
    r.createEl("option", { value: "all", text: t("\u72B6\u6001") }), r.createEl("option", { value: "nostatus", text: t("\u65E0\u72B6\u6001") });
    for (let f of Object.keys(this.s.statusColors || {}))
      r.createEl("option", { value: f, text: Me(f) });
    r.value = this._tlStatusFilter, r.addEventListener("change", () => {
      this._tlStatusFilter = r.value, this._renderTimelineBody(w, i);
    });
    let h = a.createEl("button", { cls: "lkm-btn lkm-tl-sortbtn", text: this._tlSort === "desc" ? t("\u65B0\u2192\u65E7") : t("\u65E7\u2192\u65B0") });
    h.addEventListener("click", () => {
      this._tlSort = this._tlSort === "desc" ? "asc" : "desc", h.textContent = this._tlSort === "desc" ? t("\u65B0\u2192\u65E7") : t("\u65E7\u2192\u65B0"), this._renderTimelineBody(w, i);
    });
    let g = a.createEl("button", { cls: "lkm-btn", text: t("\u6E05\u7A7A") });
    g.title = t("\u6E05\u7A7A\u6240\u6709\u7B5B\u9009\u6761\u4EF6"), g.addEventListener("click", () => {
      this._tlSearch = "", this._tlTypeFilter = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this.render();
    });
    let w = e.createDiv({ cls: "lkm-tl-body" });
    this._renderTimelineBody(w, i);
  }
  _renderTimelineBody(e, n) {
    e.empty();
    let i = n;
    if (this._tlTypeFilter && (i = i.filter((d) => d.type === this._tlTypeFilter)), this._tlSearch && (i = i.filter((d) => d.title.toLowerCase().includes(this._tlSearch))), this._tlZkFilter === "zk" ? i = i.filter((d) => d.zk) : this._tlZkFilter === "normal" && (i = i.filter((d) => !d.zk)), this._tlStatusFilter === "nostatus" ? i = i.filter((d) => !d.status) : this._tlStatusFilter && this._tlStatusFilter !== "all" && (i = i.filter((d) => d.status === this._tlStatusFilter)), this._tlDateFilter)
      i = i.filter((d) => d.ctime && d.ctime.slice(0, 10) === this._tlDateFilter);
    else if (this._tlRange !== "all") {
      let d = /* @__PURE__ */ new Date(), l = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"), r = /* @__PURE__ */ new Date(l), h = null;
      if (this._tlRange === "day" ? h = r : this._tlRange === "week" || this._tlRange === "pweek" ? h = new Date(r.getTime() - 6 * 864e5) : this._tlRange === "month" || this._tlRange === "pmonth" ? h = new Date(r.getTime() - 29 * 864e5) : (this._tlRange === "year" || this._tlRange === "pyear") && (h = new Date(r.getTime() - 364 * 864e5)), h) {
        let g = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0");
        i = i.filter((w) => {
          if (!w.ctime) return !1;
          let f = w.ctime.slice(0, 10);
          return f >= g && f <= l;
        });
      }
    }
    let a = i.filter((d) => d.ctime), s = i.filter((d) => !d.ctime);
    a.sort((d, l) => this._tlSort === "desc" ? String(l.ctime).localeCompare(String(d.ctime)) : String(d.ctime).localeCompare(String(l.ctime)));
    let o = [], c = null, p = null;
    for (let d of a) {
      let l = d.ctime.slice(0, 10);
      l !== c && (c = l, p = { key: l, items: [] }, o.push(p)), p.items.push(d);
    }
    for (let d of o) {
      let l = e.createDiv({ cls: "lkm-tl-day" }), [r, h, g] = d.key.split("-"), w = new Date(parseInt(r), parseInt(h) - 1, parseInt(g)), f = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][w.getDay()];
      l.createDiv({ cls: "lkm-tl-day-label", text: d.key + " " + t("\u5468") + f + " (" + d.items.length + ")" });
      let E = l.createDiv({ cls: "lkm-tl-items" });
      for (let y of d.items)
        this._renderTimelineItem(E, y);
    }
    if (s.length) {
      let d = e.createDiv({ cls: "lkm-tl-day lkm-tl-nodate" });
      d.createDiv({ cls: "lkm-tl-day-label", text: t("\u65E0\u65E5\u671F") + " (" + s.length + ")" });
      let l = d.createDiv({ cls: "lkm-tl-items" });
      for (let r of s)
        this._renderTimelineItem(l, r);
    }
    i.length || e.createDiv({ cls: "lkm-tl-empty", text: t("\u6682\u65E0\u7B14\u8BB0") });
  }
  _renderTimelineItem(e, n) {
    let i = e.createDiv({ cls: "lkm-tl-item" }), a = i.createDiv({ cls: "lkm-tl-item-content" });
    if (n.type) {
      let c = this.s.typeColors && this.s.typeColors[n.type], p = a.createEl("span", { cls: "lkm-tl-badge", text: De(n.type) });
      c && (p.style.background = c);
    }
    if (n.zk && a.createEl("span", { cls: "lkm-tl-main-badge", text: t("\u4E3B\u7B14\u8BB0") }), a.createEl("span", { cls: "lkm-tl-title", text: n.title }), n.status) {
      let c = a.createEl("span", { cls: "lkm-tl-status", text: Me(n.status) }), p = He(this.s, n.status);
      p && (c.style.background = p);
    }
    i.addEventListener("click", (c) => {
      c.target.closest("a") || (this.app.workspace.openLinkText(n.file.basename, n.file.path, c.ctrlKey || c.metaKey), this.locateFile(n.file, !0));
    });
    let s = /* @__PURE__ */ T((c, p) => {
      let d = new qe();
      d.addItem((l) => {
        l.setTitle(t("\u5728\u65B0\u6807\u7B7E\u6253\u5F00")).setIcon("file-plus").onClick(() => {
          this.app.workspace.openLinkText(n.file.basename, n.file.path, !0);
        });
      }), d.addItem((l) => {
        l.setTitle(t("\u5728\u5BFC\u56FE\u4E2D\u663E\u793A")).setIcon("git-fork").onClick(() => {
          this._mode = "map", this.locateFile(n.file, !0);
          let r = this._selKey ? this._nodeIndex.get(this._selKey) : null;
          if (!r || !r.note.file || r.note.file.path !== n.file.path) {
            this.rootPath = n.file.path, this._kwFile = null, this._multiRoot = !1, this._multiRootPaths = [], this.render();
            for (let h of this._nodeIndex.values())
              if (h.note.file && h.note.file.path === n.file.path && !h.isAlias) {
                this._selKey = h.key;
                break;
              }
            this.render();
          }
        });
      }), d.showAtPosition({ x: c, y: p });
    }, "showMenu");
    i.addEventListener("contextmenu", (c) => {
      c.preventDefault(), s(c.clientX, c.clientY);
    });
    let o = null;
    i.addEventListener("touchstart", (c) => {
      let p = c.touches[0];
      o = setTimeout(() => {
        o = null, s(p.clientX, p.clientY);
      }, 500);
    }, { passive: !0 }), i.addEventListener("touchmove", () => {
      o && (clearTimeout(o), o = null);
    }, { passive: !0 }), i.addEventListener("touchend", () => {
      o && (clearTimeout(o), o = null);
    }, { passive: !0 });
  }
  _dashRow(e, n) {
    let i = this.s, a = e.createDiv("lkm-recent-row");
    a.title = n.isIndex ? n.title + t("\uFF0C\u70B9\u51FB\u6253\u5F00\u5173\u952E\u8BCD\u89C6\u56FE") : n.title + t("\uFF0C\u70B9\u51FB\u6253\u5F00\u7B14\u8BB0");
    let s = (i.typeColors || {})[n.type];
    if (s && (a.createSpan({ cls: "lkm-recent-dot" }).style.background = s), a.createSpan({ cls: "lkm-recent-name", text: we(n.title, 14) }), n.created && !n.mtime && a.createSpan({ cls: "lkm-recent-date", text: n.created }), n.mtime && a.createSpan({ cls: "lkm-recent-date", text: n.mtime }), !n.isIndex) {
      let o = a.createSpan({ cls: "lkm-row-jump", title: t("\u5728\u5BFC\u56FE\u4E2D\u5B9A\u4F4D") });
      try {
        bt(o, "crosshair");
      } catch {
      }
      o.addEventListener("click", (c) => {
        c.stopPropagation(), this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._dashFilters = [], this.locateFile(n.file);
      });
    }
    return a;
  }
  _renderDonut(e, n, i) {
    let p = 2 * Math.PI * 49, d = V("svg", { class: "lkm-donut-svg", viewBox: "0 0 116 116", width: 116, height: 116 });
    d.appendChild(V("circle", { cx: 58, cy: 58, r: 49, fill: "none", stroke: "var(--background-secondary)", "stroke-width": 13 }));
    let l = n.reduce((w, f) => w + f.value, 0), r = 0;
    for (let w of n) {
      let f = l ? w.value / l : 0;
      if (!f) continue;
      let E = Math.max(0, f * p - 2.5), y = V("circle", {
        cx: 58,
        cy: 58,
        r: 49,
        fill: "none",
        stroke: w.color,
        "stroke-width": 13,
        "stroke-linecap": "butt",
        "stroke-dasharray": E + " " + (p - E),
        "stroke-dashoffset": -(r * p),
        transform: "rotate(-90 58 58)",
        class: "lkm-donut-seg" + (this._isFilterActive(w.filter) ? " is-active" : "")
      });
      y.addEventListener("click", () => this._toggleDashFilter(w.filter)), d.appendChild(y), r += f;
    }
    let h = V("text", { x: 58, y: 57, class: "lkm-donut-num", "text-anchor": "middle" });
    h.textContent = String(i), d.appendChild(h);
    let g = V("text", { x: 58, y: 71, class: "lkm-donut-cap", "text-anchor": "middle" });
    g.textContent = t("\u603B\u7B14\u8BB0"), d.appendChild(g), e.appendChild(d);
  }
  _renderBarChart(e, n, i) {
    i = i || {};
    let a = i.height || 120, s = 16, o = 18, c = Math.max(e.clientWidth || 300, 120), p = Math.max(1, ...n.map((h) => h.value)), d = c / Math.max(n.length, 1), l = a - s - o, r = V("svg", { class: "lkm-bars-svg", viewBox: "0 0 " + c + " " + a, preserveAspectRatio: "none", width: "100%", height: a });
    for (let h = 1; h <= 3; h++) {
      let g = s + l * (1 - h / 3);
      r.appendChild(V("line", { x1: 0, y1: g, x2: c, y2: g, class: "lkm-bars-grid" }));
    }
    n.forEach((h, g) => {
      let w = h.value > 0 ? Math.max(3, l * h.value / p) : 0, f = g * d + d * 0.22, E = d * 0.56, y = a - o - w, _ = V("rect", { x: f, y, width: E, height: w, rx: Math.min(4, E / 2), class: "lkm-bar" + (this._isFilterActive(h.filter) ? " is-active" : "") });
      if (h.color && (_.style.fill = h.color), h.filter && _.addEventListener("click", () => this._toggleDashFilter(h.filter)), r.appendChild(_), h.value > 0) {
        let F = V("text", { x: f + E / 2, y: y - 4, class: "lkm-bars-val", "text-anchor": "middle" });
        F.textContent = String(h.value), r.appendChild(F);
      }
      if (!i.thinLabels || g % 2 === 0) {
        let F = V("text", { x: f + E / 2, y: a - 5, class: "lkm-bars-lab", "text-anchor": "middle" });
        F.textContent = h.label, r.appendChild(F);
      }
    }), e.appendChild(r);
  }
  _isFilterActive(e) {
    return (this._dashFilters || []).some((n) => n.kind === e.kind && (n.value || "") === (e.value || ""));
  }
  _toggleDashFilter(e) {
    this._dashFilters = this._dashFilters || [];
    let n = { notype: "type", type: "notype" };
    if (e.kind === "all" || e.kind === "kw")
      this._dashFilters = this._isFilterActive(e) ? [] : [Object.assign({}, e)];
    else {
      let i = this._dashFilters.findIndex((a) => a.kind === e.kind && (a.value || "") === (e.value || ""));
      if (i >= 0) this._dashFilters.splice(i, 1);
      else {
        let a = n[e.kind];
        a && this._dashFilters.some((s) => s.kind === a) && (this._dashFilters = this._dashFilters.filter((s) => s.kind !== a)), this._dashFilters = this._dashFilters.filter((s) => s.kind !== "all" && s.kind !== "kw"), this._dashFilters.push(e);
      }
    }
    this.render(), this._dashFilters.length && requestAnimationFrame(() => {
      let i = this.contentEl.querySelector(".lkm-filter-sec");
      i && i.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _dashFilterLabel(e) {
    return e.kind === "all" ? t("\u5168\u90E8\u7B14\u8BB0") : e.kind === "zk" ? t("\u4E3B\u7B14\u8BB0") : e.kind === "kw" ? t("\u5173\u952E\u8BCD\u7D22\u5F15") : e.kind === "status" ? Me(e.value) : e.kind === "nostatus" ? t("\u65E0\u72B6\u6001") : e.kind === "orphan" ? t("\u672A\u5173\u8054") : e.kind === "type" ? t("\u7C7B\u578B\uFF1A") + De(e.value) : e.kind === "notype" ? t("\u672A\u6807\u6CE8\u7C7B\u578B") : e.kind === "date" || e.kind === "month" ? t("\u521B\u5EFA\u4E8E ") + e.value : e.kind === "depth" ? t("\u7B2C") + e.value + t("\u5C42") : e.kind === "nodate" ? t("\u672A\u6807\u65E5\u671F") : t("\u7B5B\u9009");
  }
  _dashFilterGroupLabel(e) {
    let n = /* @__PURE__ */ new Set(["date", "month", "type", "depth", "status"]), i = /* @__PURE__ */ new Map(), a = [];
    for (let o of e)
      n.has(o.kind) ? (i.has(o.kind) || i.set(o.kind, []), i.get(o.kind).push(o)) : a.push(o);
    let s = [];
    for (let [o, c] of i) {
      if (c.length === 1) {
        s.push(this._dashFilterLabel(c[0]));
        continue;
      }
      let p = t(o === "date" || o === "month" ? "\u521B\u5EFA\u4E8E " : o === "type" ? "\u7C7B\u578B\uFF1A" : o === "status" ? "\u72B6\u6001\uFF1A" : "\u7B2C"), d = o === "depth" ? t(" \u5C42") : "", l = o === "status" ? (r) => Me(r.value) : o === "type" ? (r) => De(r.value) : (r) => r.value;
      s.push(p + c.map(l).join("\u3001") + d);
    }
    for (let o of a) s.push(this._dashFilterLabel(o));
    return s.join(" + ");
  }
  _dashFilterItems(e) {
    let n = [...this.notes.values()], i = this._depthMap();
    if (e.find((d) => d.kind === "kw")) {
      let d = this.app.vault.getAbstractFileByPath(be(this.s.indexFolder)), l = new Set((d && d.children ? d.children : []).filter((r) => r instanceof Xe && r.extension === "md").map((r) => r.path));
      n = n.filter((r) => l.has(r.file.path));
    }
    let s = e.filter((d) => d.kind !== "kw"), o = /* @__PURE__ */ new Set(["date", "month", "type", "depth", "status"]), c = /* @__PURE__ */ new Map(), p = [];
    for (let d of s)
      o.has(d.kind) ? (c.has(d.kind) || c.set(d.kind, []), c.get(d.kind).push(d)) : p.push(d);
    for (let [d, l] of c)
      d === "date" ? n = n.filter((r) => l.some((h) => r.date === h.value)) : d === "month" ? n = n.filter((r) => l.some((h) => (r.date || "").slice(0, 7) === h.value)) : d === "type" ? n = n.filter((r) => l.some((h) => r.type === h.value)) : d === "depth" ? n = n.filter((r) => l.some((h) => String(i.get(r.file.path) || 0) === h.value)) : d === "status" && (n = n.filter((r) => l.some((h) => r.status === h.value)));
    for (let d of p)
      d.kind === "zk" ? n = n.filter((l) => l.zk) : d.kind === "nostatus" ? n = n.filter((l) => !l.status) : d.kind === "orphan" ? n = n.filter((l) => !this.referenced.has(l.file.path)) : d.kind === "notype" ? n = n.filter((l) => !l.type) : d.kind === "nodate" && (n = n.filter((l) => !l.date));
    return n.map((d) => ({ title: d.title, created: d.date || "", type: d.type || "", file: d.file }));
  }
  _sortDashItems(e) {
    let n = this._dashSort || "date", i = e.slice();
    return n === "name" ? i.sort((a, s) => String(a.title).localeCompare(String(s.title), "zh")) : i.sort((a, s) => String(s.created || "").localeCompare(String(a.created || ""))), i;
  }
  _ds(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  _depthMap() {
    let e = /* @__PURE__ */ new Map(), n = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (!n) return e;
    let i = it(this.app, this.notes, n);
    return (/* @__PURE__ */ T((function a(s, o) {
      s.note.file && !e.has(s.note.file.path) && e.set(s.note.file.path, o), s.children.forEach((c) => a(c, o + 1));
    }), "walk"))(i, 1), e;
  }
  _dashSummaryMd(e) {
    let n = [];
    n.push(t("## \u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE\u5DE5\u4F5C\u53F0\u7EDF\u8BA1 ") + this._ds(/* @__PURE__ */ new Date())), n.push(""), n.push(t("| \u6307\u6807 | \u6570\u91CF |")), n.push("| --- | --- |"), n.push(t("| \u7B14\u8BB0\u603B\u6570 | ") + e.total + " |"), n.push(t("| \u4E3B\u7B14\u8BB0 | ") + e.zk + " |"), n.push(t("| \u5173\u952E\u8BCD\u7D22\u5F15 | ") + e.kw + " |"), n.push(t("| \u672A\u5173\u8054 | ") + e.orphan + " |");
    for (let i of e.byStatusOrder) n.push("| " + Me(i.name) + " | " + i.count + " |");
    if (e.noStatus && n.push(t("| \u65E0\u72B6\u6001 | ") + e.noStatus + " |"), n.push(t("| \u672A\u6807\u6CE8\u7C7B\u578B | ") + e.noType + " |"), n.push(t("| \u672A\u6807\u65E5\u671F | ") + e.noDate + " |"), n.push(""), e.byTypeOrder.length) {
      n.push(t("### \u7C7B\u578B\u5206\u5E03")), n.push(t("| \u7C7B\u578B | \u6570\u91CF | \u5360\u6BD4 |")), n.push("| --- | --- | --- |");
      for (let i of e.byTypeOrder) n.push("| " + De(i.name) + " | " + i.count + " | " + (e.total ? Math.round(i.count / e.total * 100) : 0) + "% |");
      n.push("");
    }
    if (e.depthMax) {
      n.push(t("### \u6811\u6DF1\u5EA6\u5206\u5E03")), n.push(t("| \u5C42\u7EA7 | \u6570\u91CF |")), n.push("| --- | --- |");
      for (let i = 1; i <= e.depthMax; i++) e.depthCount.has(i) && n.push(t("| \u7B2C") + i + t("\u5C42 | ") + e.depthCount.get(i) + " |");
      n.push("");
    }
    if (e.monthly.length) {
      n.push(t("### \u8FD112\u4E2A\u6708\u521B\u5EFA")), n.push(t("| \u6708\u4EFD | \u65B0\u589E |")), n.push("| --- | --- |");
      for (let i of e.monthly) n.push("| " + i.key + " | " + i.count + " |");
      n.push("");
    }
    if (e.branches.length) {
      n.push(t("### \u5206\u652F\u5206\u5E03\uFF08\u5DF2\u5B8C\u6210/\u603B\u6570\uFF09"));
      for (let i of e.branches) n.push("- " + i.title + "\uFF1A" + i.done + "/" + i.total);
      n.push("");
    }
    return n.join(`
`);
  }
  _dashStats() {
    let e = [...this.notes.values()], n = e.length, i = e.filter((v) => v.zk).length, a = this.s.statusColors || {}, s = /* @__PURE__ */ new Map(), o = 0;
    for (let v of e)
      v.status ? s.set(v.status, (s.get(v.status) || 0) + 1) : o++;
    let c = Object.keys(a).filter((v) => s.has(v)).map((v) => ({ name: v, color: a[v], count: s.get(v) }));
    for (let [v, U] of s) a[v] || c.push({ name: v, color: "var(--text-faint)", count: U });
    let p = s.get("\u5DF2\u5B8C\u6210") || 0, d = s.get("\u5F85\u529E") || 0, l = e.filter((v) => !v.date).length, r = e.filter((v) => !this.referenced.has(v.file.path)).length, h = this.s.typeColors || {}, g = /* @__PURE__ */ new Map(), w = 0;
    for (let v of e)
      v.type ? g.set(v.type, (g.get(v.type) || 0) + 1) : w++;
    let f = Object.keys(h).filter((v) => g.has(v)).map((v) => ({ name: v, color: h[v], count: g.get(v) }));
    for (let [v, U] of g) h[v] || f.push({ name: v, color: "var(--text-faint)", count: U });
    let E = this._depthMap(), y = /* @__PURE__ */ new Map();
    for (let v of E.values()) v && y.set(v, (y.get(v) || 0) + 1);
    let _ = y.size ? Math.max(...y.keys()) : 0, F = /* @__PURE__ */ new Date();
    F.setHours(0, 0, 0, 0);
    let m = [];
    for (let v = 11; v >= 0; v--) {
      let U = new Date(F.getFullYear(), F.getMonth() - v, 1);
      m.push({ key: U.getFullYear() + "-" + String(U.getMonth() + 1).padStart(2, "0"), count: 0 });
    }
    for (let v of e) {
      if (!v.date) continue;
      let U = m.find((ne) => ne.key === v.date.slice(0, 7));
      U && U.count++;
    }
    let D = 0, W = this.app.vault.getAbstractFileByPath(be(this.s.indexFolder));
    W && W.children && (D = W.children.filter((v) => v instanceof Xe && v.extension === "md").length);
    let C = /* @__PURE__ */ new Map();
    for (let v of e) v.date && C.set(v.date, (C.get(v.date) || 0) + 1);
    let A = e.filter((v) => v.zk).map((v) => {
      let U = it(this.app, this.notes, v), ne = 0, ke = 0, xe = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ T((function ye(_e) {
        if (_e.note.file) {
          if (xe.has(_e.note.file.path)) return;
          xe.add(_e.note.file.path);
        }
        ne++, _e.note.status === "\u5DF2\u5B8C\u6210" && ke++;
        for (let fe of _e.children) ye(fe);
      }), "walk"))(U), { path: v.file.path, title: v.title, total: ne, done: ke };
    }).sort((v, U) => U.total - v.total), x = /* @__PURE__ */ T((v) => ({ title: v.title, created: v.date || "", type: v.type || "", file: v.file }), "toItem"), Y = e.filter((v) => v.date).sort((v, U) => String(U.date).localeCompare(String(v.date))).slice(0, 8).map(x), le = e.slice().sort((v, U) => (U.file.stat && U.file.stat.mtime || 0) - (v.file.stat && v.file.stat.mtime || 0)).slice(0, 6).map((v) => {
      let U = x(v);
      try {
        let ne = new Date(v.file.stat.mtime);
        U.mtime = String(ne.getFullYear()).slice(2) + "-" + String(ne.getMonth() + 1).padStart(2, "0") + "-" + String(ne.getDate()).padStart(2, "0") + " " + String(ne.getHours()).padStart(2, "0") + ":" + String(ne.getMinutes()).padStart(2, "0");
      } catch {
      }
      return U;
    }), O = 0, Z = 0;
    for (let v of e)
      for (let U of v.childLinks) {
        O++;
        let ne = this.app.metadataCache.getFirstLinkpathDest(U, v.file.path);
        (!ne || !this.notes.has(ne.path)) && Z++;
      }
    return { total: n, zk: i, done: p, todo: d, noDate: l, orphan: r, noType: w, byTypeOrder: f, byStatusOrder: c, noStatus: o, depthCount: y, depthMax: _, monthly: m, kw: D, heat: C, branches: A, recent: Y, modified: le, linkCount: O, deadLinks: Z };
  }
};
T(Ot, "LinkMindmapView");
var We = Ot, zt = class extends qt {
  constructor(e, n) {
    super(e, n), this.plugin = n;
  }
  display() {
    let { containerEl: e } = this;
    e.empty();
    let n = e.createDiv("lkm-settings-title");
    n.createEl("h2", { text: t("Link Mindmap \u8BBE\u7F6E") });
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
    }, s = this, o = {}, c = n.createEl("select", { cls: "lkm-jump-sel" });
    c.createEl("option", { value: "", text: t("\u8DF3\u8F6C\u5230\u2026") });
    for (let l of i) c.createEl("option", { value: l, text: a[l] || l });
    c.addEventListener("change", () => {
      let l = c.value;
      if (!l) return;
      let r = o[l];
      r && r.scrollIntoView({ behavior: "smooth", block: "start" }), c.value = "";
    });
    let p = (l) => {
      let r = e.createEl("h3", { cls: "lkm-sec-h" });
      r.createEl("span", { text: a[l] || l }), o[l] = r;
    }, d = {
      basic() {
        new ee(e).setName(t("\u8BED\u8A00")).setDesc(t("\u754C\u9762\u8BED\u8A00\uFF08\u81EA\u52A8\u8DDF\u968F Obsidian \u8BBE\u7F6E\uFF09")).addDropdown((r) => {
          r.addOption("auto", t("\u81EA\u52A8") + " (Auto)"), r.addOption("zh", t("\u4E2D\u6587")), r.addOption("en", "English"), r.setValue(s.plugin.settings.language || "auto"), r.onChange(async (h) => {
            s.plugin.settings.language = h, await s.plugin.saveSettings(), s.plugin._initLang(), s.display();
          });
        }), new ee(e).setName(t("\u9ED8\u8BA4\u7B14\u8BB0\u683C\u5F0F")).setDesc(t("\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u7684\u6587\u4EF6\u683C\u5F0F")).addDropdown((r) => {
          r.addOption("md", "Markdown"), r.addOption("excalidraw", "Excalidraw"), r.setValue(s.plugin.settings.defaultNoteFormat || "md"), r.onChange(async (h) => {
            s.plugin.settings.defaultNoteFormat = h, await s.plugin.saveSettings();
          });
        }), new ee(e).setName(t("\u7B14\u8BB0\u6587\u4EF6\u5939")).setDesc(t("\u5B58\u653E\u5361\u7247\u7B14\u8BB0\u7684\u76EE\u5F55")).addText((r) => r.setValue(s.plugin.settings.mainFolder).onChange(async (h) => {
          s.plugin.settings.mainFolder = h.trim(), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u5939")).setDesc(t("\u5B58\u653E\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u7684\u76EE\u5F55")).addText((r) => r.setValue(s.plugin.settings.indexFolder).onChange(async (h) => {
          s.plugin.settings.indexFolder = h.trim(), await s.plugin.saveSettings();
        })), new ee(e).setName(t("\u6A21\u677F\u6587\u4EF6\u5939")).setDesc(t("\u6A21\u677F\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u65B0\u5EFA\u8282\u70B9\u65F6\u6A21\u677F\u4E0B\u62C9\u5217\u8868\u4ECE\u6B64\u6587\u4EF6\u5939\u8BFB\u53D6")).addText((r) => r.setValue(s.plugin.settings.templateFolder).onChange(async (h) => {
          s.plugin.settings.templateFolder = h.trim(), await s.plugin.saveSettings(), s.display();
        }));
        let l = (() => {
          let r = (s.plugin.settings.templateFolder || "").trim();
          if (!r) return [];
          let h = s.plugin.app.vault.getAbstractFileByPath(be(r));
          return !h || !h.children ? [] : h.children.filter((g) => g instanceof Xe && g.extension === "md");
        })();
        new ee(e).setName(t("\u9ED8\u8BA4\u6A21\u677F")).setDesc(t("\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u6A21\u677F\uFF08\u53EF\u9009\uFF09")).addDropdown((r) => {
          r.addOption("", t("\u4E0D\u9009"));
          for (let h of l) r.addOption(h.path, h.basename);
          r.setValue(s.plugin.settings.templatePath || ""), r.onChange(async (h) => {
            s.plugin.settings.templatePath = h, await s.plugin.saveSettings();
          });
        });
      },
      fields() {
        new ee(e).setName(t("\u5B50\u8282\u70B9\u94FE\u63A5\u5B57\u6BB5")).setDesc(t("\u7236\u7B14\u8BB0\u4E2D\u5B58\u653E\u5B50\u7B14\u8BB0\u94FE\u63A5\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 children\uFF09")).addText((l) => l.setValue(s.plugin.settings.linkField).onChange(async (r) => {
          s.plugin.settings.linkField = r.trim() || "children", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u7236\u8282\u70B9\u53CD\u5411\u94FE\u63A5\u5B57\u6BB5")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u5199\u5165\u5B50\u7B14\u8BB0\u7684\u7236\u94FE\u63A5\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 parent\uFF09")).addText((l) => l.setValue(s.plugin.settings.backField).onChange(async (r) => {
          s.plugin.settings.backField = r.trim() || "parent", await s.plugin.saveSettings();
        })), new ee(e).setName(t("\u4E3B\u7B14\u8BB0\u6807\u8BB0\u5B57\u6BB5")).setDesc(t("\u6807\u8BB0\u5BFC\u56FE\u4E3B\u5165\u53E3\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 main\uFF09")).addText((l) => l.setValue(s.plugin.settings.zkField).onChange(async (r) => {
          s.plugin.settings.zkField = r.trim() || "main", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u72B6\u6001\u5B57\u6BB5")).setDesc(t("\u6807\u8BB0\u7B14\u8BB0\u5DE5\u4F5C\u72B6\u6001\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 status\uFF09")).addText((l) => l.setValue(s.plugin.settings.statusField).onChange(async (r) => {
          s.plugin.settings.statusField = r.trim() || "status", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u7C7B\u578B\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u7C7B\u578B\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 type\uFF09")).addText((l) => l.setValue(s.plugin.settings.typeField).onChange(async (r) => {
          s.plugin.settings.typeField = r.trim() || "type", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u63CF\u8FF0\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u63CF\u8FF0\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 description\uFF09")).addText((l) => l.setValue(s.plugin.settings.descField).onChange(async (r) => {
          s.plugin.settings.descField = r.trim() || "description", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u65E5\u671F\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u521B\u5EFA\u65E5\u671F\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 date\uFF09")).addText((l) => l.setValue(s.plugin.settings.dateField).onChange(async (r) => {
          s.plugin.settings.dateField = r.trim() || "date", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u6807\u9898\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u6807\u9898\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 title\uFF09\u3002frontmatter \u4E2D\u6709\u8BE5\u5B57\u6BB5\u65F6\u8282\u70B9\u663E\u793A\u5176\u503C\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u540D\uFF1B\u91CD\u547D\u540D\u65F6\u540C\u6B65\u66F4\u65B0\u8BE5\u5B57\u6BB5")).addText((l) => l.setValue(s.plugin.settings.titleField).onChange(async (r) => {
          s.plugin.settings.titleField = r.trim() || "title", await s.plugin.saveSettings(), s.plugin.refreshViews();
        }));
      },
      layout() {
        new ee(e).setName(t("\u9ED8\u8BA4\u663E\u793A\u5C42\u6570")).setDesc(t("\u6253\u5F00\u65F6\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")).addText((l) => l.setValue(String(s.plugin.settings.defaultDepth)).onChange(async (r) => {
          s.plugin.settings.defaultDepth = Math.max(1, parseInt(r, 10) || 3), await s.plugin.saveSettings();
          for (let h of s.plugin.app.workspace.getLeavesOfType(Ie))
            h.view instanceof We && (h.view.depth = s.plugin.settings.defaultDepth, h.view._expandedMem.clear());
          s.plugin.refreshViews();
        })), new ee(e).setName(t("\u540D\u79F0\u6700\u5927\u5B57\u6570")).setDesc(t("\u8282\u70B9\u6807\u9898\u6700\u591A\u663E\u793A\u7684\u5B57\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7\uFF1B0 = \u663E\u793A\u5168\u90E8\u540D\u79F0")).addText((l) => l.setValue(String(s.plugin.settings.maxTitleLen)).onChange(async (r) => {
          s.plugin.settings.maxTitleLen = Math.max(0, parseInt(r, 10) || 0), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u6C34\u5E73\u95F4\u8DDD")).setDesc(t("\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09\uFF1B\u5206\u652F\u56FE\u4E2D\u4E3A\u5C42\u7EA7\u95F4\u8DDD")).addText((l) => l.setValue(String(s.plugin.settings.gapX)).onChange(async (r) => {
          s.plugin.settings.gapX = Math.max(10, parseInt(r, 10) || 60), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u5782\u76F4\u95F4\u8DDD")).setDesc(t("\u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB\uFF1B\u5206\u652F\u56FE\u4E2D\u4E3A\u6CF3\u9053\u95F4\u8DDD")).addText((l) => l.setValue(String(s.plugin.settings.gapY)).onChange(async (r) => {
          s.plugin.settings.gapY = Math.max(0, parseInt(r, 10) || 8), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u8282\u70B9\u9AD8\u5EA6")).setDesc(t("\u8282\u70B9\u5361\u7247\u9AD8\u5EA6\uFF080 = \u81EA\u9002\u5E94\uFF0C\u6309\u5185\u5BB9\u81EA\u52A8\u8C03\u6574\uFF09")).addText((l) => l.setValue(String(s.plugin.settings.nodeHeight)).onChange(async (r) => {
          let h = parseInt(r, 10);
          s.plugin.settings.nodeHeight = isNaN(h) || h < 0 ? 46 : h, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u5E03\u5C40\u65B9\u5411")).setDesc(t("\u6A2A\u5411\uFF1A\u4ECE\u5DE6\u5230\u53F3\u5C55\u5F00\u5B50\u8282\u70B9\uFF1B\u7EB5\u5411\uFF1A\u4ECE\u4E0A\u5230\u4E0B\u5C55\u5F00\u5B50\u8282\u70B9")).addDropdown((l) => {
          l.addOption("h", t("\u6A2A\u5411\uFF08\u5DE6\u2192\u53F3\uFF09")), l.addOption("v", t("\u7EB5\u5411\uFF08\u4E0A\u2192\u4E0B\uFF09")), l.setValue(s.plugin.settings.layoutDir || "h"), l.onChange(async (r) => {
            s.plugin.settings.layoutDir = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
          });
        });
      },
      behavior() {
        new ee(e).setName(t("\u65B0\u5EFA\u65F6\u5199\u5165\u53CD\u5411\u94FE\u63A5")).setDesc(t("\u521B\u5EFA\u5B50\u8282\u70B9\u65F6\uFF0C\u5728\u5B50\u7B14\u8BB0\u91CC\u5199\u5165\u6307\u5411\u7236\u7B14\u8BB0\u7684 parent \u5B57\u6BB5\uFF08\u7EAF\u6587\u672C\u6587\u4EF6\u540D\uFF0C\u975E wikilink\uFF0C\u5173\u7CFB\u56FE\u8C31\u4E0D\u663E\u793A\u53CC\u5411\u7BAD\u5934\uFF09")).addToggle((l) => l.setValue(s.plugin.settings.autoAddBackLink).onChange(async (r) => {
          s.plugin.settings.autoAddBackLink = r, await s.plugin.saveSettings();
        })), new ee(e).setName(t("\u81EA\u52A8\u5B9A\u4F4D\u5F53\u524D\u7B14\u8BB0")).setDesc(t("\u6253\u5F00\u7B14\u8BB0\u65F6\uFF0C\u5BFC\u56FE\u81EA\u52A8\u5C55\u5F00\u5176\u6240\u5728\u5206\u652F\u3001\u9009\u4E2D\u5E76\u5C45\u4E2D\u8BE5\u8282\u70B9")).addToggle((l) => l.setValue(s.plugin.settings.autoLocate).onChange(async (r) => {
          s.plugin.settings.autoLocate = r, await s.plugin.saveSettings();
        }));
      },
      display() {
        new ee(e).setName(t("\u663E\u793A\u521B\u5EFA\u65F6\u95F4")).setDesc(t("\u4E0E\u7C7B\u578B/\u5B50\u6570\u540C\u884C\u663E\u793A\u521B\u5EFA\u65E5\u671F\uFF08\u4F18\u5148\u53D6 frontmatter \u7684 date \u5B57\u6BB5\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF09")).addToggle((l) => l.setValue(s.plugin.settings.showCreated).onChange(async (r) => {
          s.plugin.settings.showCreated = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u663E\u793A\u7C7B\u578B")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A type \u6587\u672C")).addToggle((l) => l.setValue(s.plugin.settings.showType).onChange(async (r) => {
          s.plugin.settings.showType = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u663E\u793A\u63CF\u8FF0")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A description \u6587\u672C\uFF08\u540D\u79F0\u4E0B\u65B9\u5355\u72EC\u4E00\u884C\uFF09")).addToggle((l) => l.setValue(s.plugin.settings.showDesc).onChange(async (r) => {
          s.plugin.settings.showDesc = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u663E\u793A\u5B50\u8282\u70B9\u6570")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A\u5B50\u8282\u70B9\u6570\u91CF")).addToggle((l) => l.setValue(s.plugin.settings.showChildCount).onChange(async (r) => {
          s.plugin.settings.showChildCount = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u663E\u793A\u6253\u5F00\u56FE\u6807")).setDesc(t("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \u270E \u6253\u5F00\u7B14\u8BB0\u6309\u94AE")).addToggle((l) => l.setValue(s.plugin.settings.showOpenIcon).onChange(async (r) => {
          s.plugin.settings.showOpenIcon = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u663E\u793A\u65B0\u589E\u56FE\u6807")).setDesc(t("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \uFF0B \u65B0\u589E\u5B50\u8282\u70B9\u6309\u94AE")).addToggle((l) => l.setValue(s.plugin.settings.showAddIcon).onChange(async (r) => {
          s.plugin.settings.showAddIcon = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u5BFC\u56FE\u6A21\u5F0F")).setDesc(t("\u6811\u5F62\u56FE\uFF1A\u5E38\u89C4\u6811\u5F62\u5E03\u5C40\uFF1B\u5206\u53C9\u56FE\uFF1A\u6A2A\u5411\u8F68\u9053\uFF1B\u5206\u652F\u56FE\uFF1A\u6CF3\u9053\u5E03\u5C40+\u8DF3\u7EBF+\u65F6\u95F4\u8F74\uFF1B\u94FE\u8DEF\u56FE\uFF1A\u6D41\u7A0B\u56FE\u98CE\u683C\u8282\u70B9+\u5144\u5F1F\u4E32\u8054+\u4EA4\u53C9\u5F15\u7528\u8DF3\u7EBF\uFF1B\u7F51\u7EDC\u56FE\uFF1A\u7269\u7406\u6A21\u62DF\u81EA\u52A8\u5E03\u5C40\uFF0C\u8282\u70B9\u591A\u65F6\u6E05\u6670\u5C55\u793A\u5173\u7CFB\u7F51\u7EDC\uFF0C\u53EF\u7EB5\u6A2A\u5207\u6362")).addDropdown((l) => {
          l.addOption("tree", t("\u6811\u5F62\u56FE")), l.addOption("branch", t("\u5206\u53C9\u56FE")), l.addOption("git", t("\u5206\u652F\u56FE")), l.addOption("graph", t("\u94FE\u8DEF\u56FE")), l.addOption("force", t("\u7F51\u7EDC\u56FE")), l.setValue(s.plugin.settings.layoutMode || "tree"), l.onChange(async (r) => {
            s.plugin.settings.layoutMode = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
          });
        }), new ee(e).setName(t("\u66F2\u7EBF\u8FDE\u63A5")).setDesc(t("\u8282\u70B9\u4E4B\u95F4\u7528\u66F2\u7EBF\u8FD8\u662F\u76F4\u7EBF")).addToggle((l) => l.setValue(s.plugin.settings.curve).onChange(async (r) => {
          s.plugin.settings.curve = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u663E\u793A\u91CD\u590D\u8282\u70B9\u865A\u7EBF")).setDesc(t("\u91CD\u590D\u8282\u70B9\u4E0E\u539F\u59CB\u8282\u70B9\u4E4B\u95F4\u7528\u865A\u7EBF\u8FDE\u63A5")).addToggle((l) => l.setValue(s.plugin.settings.showDupLine).onChange(async (r) => {
          s.plugin.settings.showDupLine = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        }));
      },
      colors() {
        new ee(e).setName(t("\u4E3B\u8272")).setDesc(t("\u56FE\u6807\u6309\u94AE\u3001\u8FDE\u63A5\u7EBF\u7B49\u754C\u9762\u5143\u7D20\u989C\u8272")).addColorPicker((l) => l.setValue(s.plugin.settings.accent).onChange(async (r) => {
          s.plugin.settings.accent = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u4E3B\u7B14\u8BB0\u989C\u8272")).setDesc(t("main: true \u8282\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(s.plugin.settings.mainColor).onChange(async (r) => {
          s.plugin.settings.mainColor = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u91CD\u590D\u8282\u70B9\u989C\u8272")).setDesc(t("\u540C\u4E00\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\u65F6\uFF0C\u5176\u72B6\u6001\u5706\u70B9\u989C\u8272")).addColorPicker((l) => l.setValue(s.plugin.settings.multiColor).onChange(async (r) => {
          s.plugin.settings.multiColor = r, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new ee(e).setName(t("\u9009\u4E2D\u989C\u8272")).setDesc(t("\u5355\u51FB\u9009\u4E2D\u7684\u8282\u70B9\u9AD8\u4EAE\u989C\u8272")).addColorPicker((l) => l.setValue(s.plugin.settings.selectedColor).onChange(async (r) => {
          s.plugin.settings.selectedColor = r, await s.plugin.saveSettings(), s.plugin.applyThemeVars();
        }));
      },
      types() {
        let l = s.plugin.settings.typeColors || (s.plugin.settings.typeColors = {});
        new ee(e).setName(t("\u9ED8\u8BA4\u7C7B\u578B")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u7C7B\u578B\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((w) => {
          w.addOption("", t("\u4E0D\u9009"));
          for (let f of Object.keys(l)) w.addOption(f, De(f));
          w.setValue(l[s.plugin.settings.defaultType] !== void 0 ? s.plugin.settings.defaultType : ""), w.onChange(async (f) => {
            s.plugin.settings.defaultType = f, await s.plugin.saveSettings();
          });
        });
        let r = "", h = /* @__PURE__ */ T(async () => {
          let w = r.trim();
          if (!w) {
            new b(t("\u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0"));
            return;
          }
          if (l[w] !== void 0) {
            new b(t("\u7C7B\u578B\u5DF2\u5B58\u5728\uFF1A") + w);
            return;
          }
          let f = ["#4ba3e5", "#e5534b", "#3fa66a", "#e5a44b", "#b07cff", "#8a6ae5", "#d978a8", "#5aa9a2"];
          l[w] = f[Object.keys(l).length % f.length], r = "", await s.plugin.saveSettings(), s.display();
        }, "addType");
        new ee(e).setName(t("\u6DFB\u52A0\u7C7B\u578B")).setDesc(t("\u8F93\u5165\u540D\u79F0\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((w) => {
          w.setPlaceholder(t("\u7C7B\u578B\u540D\u79F0\uFF0C\u5982\uFF1A\u5F85\u529E")), w.onChange((f) => r = f), w.inputEl.addEventListener("keydown", (f) => {
            f.key === "Enter" && (f.preventDefault(), h());
          });
        }).addButton((w) => w.setButtonText(t("\u6DFB\u52A0")).setCta().onClick(h));
        let g = Object.keys(l);
        for (let w = 0; w < g.length; w++) {
          let f = g[w], E = w, y = s.plugin.settings.typeTemplates || (s.plugin.settings.typeTemplates = {}), _ = s.plugin.app.vault.getAbstractFileByPath(be(s.plugin.settings.templateFolder || "99-\u6A21\u677F")), F = [{ path: "", name: t("\u9ED8\u8BA4") }];
          if (_ && _.children) for (let m of _.children) m instanceof Xe && m.extension === "md" && F.push({ path: m.path, name: m.basename });
          new ee(e).setName(De(f)).setDesc(t("type \u4E3A\u300C") + f + t("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((m) => {
            m.setValue(String(l[f])), m.onChange(async (D) => {
              D && D !== l[f] && (l[f] = D, await s.plugin.saveSettings(), s.plugin.refreshViews());
            });
          }).addDropdown((m) => {
            for (let D of F) m.addOption(D.path, D.name);
            m.setValue(y[f] || ""), m.onChange(async (D) => {
              D ? y[f] = D : delete y[f], await s.plugin.saveSettings();
            });
          }).addButton((m) => m.setIcon("chevron-up").setTooltip(t("\u4E0A\u79FB")).setDisabled(E === 0).onClick(async () => {
            let D = Object.entries(l);
            [D[E - 1], D[E]] = [D[E], D[E - 1]], s.plugin.settings.typeColors = Object.fromEntries(D), await s.plugin.saveSettings(), s.display();
          })).addButton((m) => m.setIcon("chevron-down").setTooltip(t("\u4E0B\u79FB")).setDisabled(E === g.length - 1).onClick(async () => {
            let D = Object.entries(l);
            [D[E + 1], D[E]] = [D[E], D[E + 1]], s.plugin.settings.typeColors = Object.fromEntries(D), await s.plugin.saveSettings(), s.display();
          })).addButton((m) => m.setIcon("trash").setTooltip(t("\u5220\u9664\u7C7B\u578B\uFF1A") + f).onClick(async () => {
            delete l[f], s.plugin.settings.defaultType === f && (s.plugin.settings.defaultType = ""), await s.plugin.saveSettings(), s.display();
          }));
        }
      },
      statuses() {
        let l = s.plugin.settings.statusColors || (s.plugin.settings.statusColors = {});
        new ee(e).setName(t("\u9ED8\u8BA4\u72B6\u6001")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u72B6\u6001\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((w) => {
          w.addOption("", t("\u4E0D\u9009"));
          for (let f of Object.keys(l)) w.addOption(f, Me(f));
          w.setValue(l[s.plugin.settings.defaultStatus] !== void 0 ? s.plugin.settings.defaultStatus : ""), w.onChange(async (f) => {
            s.plugin.settings.defaultStatus = f, await s.plugin.saveSettings();
          });
        });
        let r = "", h = /* @__PURE__ */ T(async () => {
          let w = r.trim();
          if (!w) {
            new b(t("\u8BF7\u8F93\u5165\u72B6\u6001\u6807\u8BC6"));
            return;
          }
          if (l[w] !== void 0) {
            new b(t("\u72B6\u6001\u5DF2\u5B58\u5728\uFF1A") + w);
            return;
          }
          let f = ["#e5534b", "#e5a44b", "#3fa66a", "#7f8fa6", "#b07cff", "#4ba3e5", "#d978a8", "#5aa9a2"];
          l[w] = f[Object.keys(l).length % f.length], r = "", await s.plugin.saveSettings(), s.display();
        }, "addStatus");
        new ee(e).setName(t("\u6DFB\u52A0\u72B6\u6001")).setDesc(t("\u8F93\u5165\u72B6\u6001\u6807\u8BC6\uFF08\u5982 todo/doing/done\uFF09\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((w) => {
          w.setPlaceholder(t("\u72B6\u6001\u6807\u8BC6\uFF0C\u5982\uFF1Atodo")), w.onChange((f) => r = f), w.inputEl.addEventListener("keydown", (f) => {
            f.key === "Enter" && (f.preventDefault(), h());
          });
        }).addButton((w) => w.setButtonText(t("\u6DFB\u52A0")).setCta().onClick(h));
        let g = Object.keys(l);
        for (let w = 0; w < g.length; w++) {
          let f = g[w], E = w;
          new ee(e).setName(Me(f)).setDesc(t("status \u4E3A\u300C") + f + t("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((y) => {
            y.setValue(String(l[f])), y.onChange(async (_) => {
              _ && _ !== l[f] && (l[f] = _, await s.plugin.saveSettings(), s.plugin.refreshViews());
            });
          }).addButton((y) => y.setIcon("chevron-up").setTooltip(t("\u4E0A\u79FB")).setDisabled(E === 0).onClick(async () => {
            let _ = Object.entries(l);
            [_[E - 1], _[E]] = [_[E], _[E - 1]], s.plugin.settings.statusColors = Object.fromEntries(_), await s.plugin.saveSettings(), s.display();
          })).addButton((y) => y.setIcon("chevron-down").setTooltip(t("\u4E0B\u79FB")).setDisabled(E === g.length - 1).onClick(async () => {
            let _ = Object.entries(l);
            [_[E + 1], _[E]] = [_[E], _[E + 1]], s.plugin.settings.statusColors = Object.fromEntries(_), await s.plugin.saveSettings(), s.display();
          })).addButton((y) => y.setIcon("trash").setTooltip(t("\u5220\u9664\u72B6\u6001\uFF1A") + f).onClick(async () => {
            delete l[f], s.plugin.settings.defaultStatus === f && (s.plugin.settings.defaultStatus = ""), await s.plugin.saveSettings(), s.display();
          }));
        }
      },
      presets() {
        new ee(e).setName(t("\u9884\u8BBE\u4FDD\u5B58\u4F4D\u7F6E")).setDesc(t("\u5BFC\u56FE\u9884\u8BBE\u548C\u81EA\u52A8\u72B6\u6001\u7684\u4FDD\u5B58\u8DEF\u5F84\u3002\u586B\u5199 vault \u5185\u6587\u4EF6\u8DEF\u5F84\uFF08\u5982 link-mindmap-presets.json\uFF09\u5219\u4FDD\u5B58\u5230\u8BE5\u6587\u4EF6\uFF0C\u53EF\u968F vault \u540C\u6B65\u5230\u5176\u4ED6\u8BBE\u5907\u5B9E\u73B0\u591A\u7AEF\u8FD8\u539F")).addText((l) => {
          l.setPlaceholder(t("link-mindmap-presets.json")), l.setValue(s.plugin.settings.savedViewLocation || ""), l.onChange(async (r) => {
            s.plugin.settings.savedViewLocation = r.trim(), await s.plugin.saveSettings(), r.trim() && await s.plugin._loadViewsFromFile();
          });
        });
      },
      io() {
        new ee(e).setName(t("\u5BFC\u51FA\u914D\u7F6E")).setDesc(t("\u5C06\u5F53\u524D\u6240\u6709\u8BBE\u7F6E\u5BFC\u51FA\u4E3A JSON \u6587\u4EF6")).addButton((l) => l.setButtonText(t("\u5BFC\u51FA")).setCta().onClick(async () => {
          let r = JSON.stringify(s.plugin.settings, null, 2), g = "link-mindmap-config-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".json";
          try {
            await s.plugin.app.vault.create(g, r), new b(t("\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + g);
          } catch (w) {
            new b(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (w && w.message ? w.message : w));
          }
        })), new ee(e).setName(t("\u5BFC\u5165\u914D\u7F6E")).setDesc(t("\u4ECE JSON \u6587\u4EF6\u5BFC\u5165\u8BBE\u7F6E\uFF08\u4F1A\u8986\u76D6\u5F53\u524D\u914D\u7F6E\uFF09")).addButton((l) => l.setButtonText(t("\u9009\u62E9\u6587\u4EF6")).onClick(() => {
          let r = document.createElement("input");
          r.type = "file", r.accept = ".json", r.onchange = async () => {
            let h = r.files[0];
            if (h)
              try {
                let g = await h.text(), w = JSON.parse(g);
                s.plugin.settings = Object.assign(s.plugin.settings, w), await s.plugin.saveSettings(), s.plugin.applyThemeVars(), s.plugin.refreshViews(), s.display(), new b(t("\u914D\u7F6E\u5DF2\u5BFC\u5165"));
              } catch (g) {
                new b(t("\u5BFC\u5165\u5931\u8D25\uFF1A") + (g && g.message ? g.message : g)), console.error("[link-mindmap] import config:", g);
              }
          }, r.click();
        })), new ee(e).setName(t("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E")).setDesc(t("\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\uFF08\u4E0D\u4F1A\u5220\u9664\u7B14\u8BB0\uFF09")).addButton((l) => l.setButtonText(t("\u6062\u590D\u9ED8\u8BA4")).onClick(() => {
          new Ye(s.app, t("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"), t("\u786E\u5B9A\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u5417\uFF1F"), async () => {
            s.plugin.settings = JSON.parse(JSON.stringify(Ft)), await s.plugin.saveSettings(), s.plugin.applyThemeVars(), s.plugin.refreshViews(), s.display(), new b(t("\u5DF2\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"));
          }).open();
        }));
      }
    };
    for (let l = 0; l < i.length; l++) {
      p(i[l]);
      let r = d[i[l]];
      r && r();
    }
  }
};
T(zt, "LinkMindmapSettingTab");
var ns = zt, Ht = class extends Xt {
  async onload() {
    this._autoState = null, this._loadedPresets = [], await this.loadSettings(), this._initLang(), await this._loadViewsFromFile(), this.registerView(Ie, (n) => new We(n, this)), this.addRibbonIcon("git-merge", t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), () => this.activateView()), this.addCommand({ id: "open-link-mindmap", name: t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), callback: /* @__PURE__ */ T(() => this.activateView(), "callback") }), this.addCommand({ id: "open-timeline", name: t("\u6253\u5F00\u65F6\u95F4\u7EBF"), callback: /* @__PURE__ */ T(() => this.activateTimeline(), "callback") }), this.addCommand({ id: "normalize-frontmatter", name: t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), callback: /* @__PURE__ */ T(() => this._normalizeFrontmatter(), "callback") }), this.addCommand({ id: "normalize-frontmatter-current", name: t("\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), callback: /* @__PURE__ */ T(() => this._normalizeFrontmatter(!0), "callback") }), this.addCommand({ id: "check-links", name: t("\u68C0\u67E5\u94FE\u63A5\u5B8C\u6574\u6027"), callback: /* @__PURE__ */ T(() => this._checkLinks(), "callback") }), this.addCommand({ id: "clean-invalid-types", name: t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u7C7B\u578B"), callback: /* @__PURE__ */ T(() => this._cleanInvalidTypes(), "callback") }), this.addCommand({ id: "clean-invalid-status", name: t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u72B6\u6001"), callback: /* @__PURE__ */ T(() => this._cleanInvalidStatus(), "callback") }), this.addCommand({ id: "convert-to-excalidraw", name: t("\u8F6C\u6362\u5F53\u524D\u7B14\u8BB0\u4E3A excalidraw"), callback: /* @__PURE__ */ T(() => {
      let n = this.app.workspace.getActiveFile();
      n ? this._convertToExcalidraw(n) : new b(t("\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7\u7B14\u8BB0"));
    }, "callback") }), this.addCommand({ id: "show-help", name: t("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), callback: /* @__PURE__ */ T(async () => {
      for (let n of this.app.workspace.getLeavesOfType(Ie))
        if (n.view instanceof We) {
          n.view._showHelp();
          return;
        }
      await this.activateView();
      for (let n of this.app.workspace.getLeavesOfType(Ie))
        n.view instanceof We && n.view._showHelp();
    }, "callback") }), this.addSettingTab(new ns(this.app, this)), this.applyThemeVars();
    let e = () => this.settings.savedViewLocation || "link-mindmap-presets.json";
    this.registerEvent(this.app.vault.on("create", (n) => {
      n.path === e() && (!this._autoState || !this._loadedPresets) && this._loadViewsFromFile().then(() => this._rebuildAllViews()).catch((i) => console.error("[link-mindmap] reload presets:", i)), this._onVaultChange(n);
    })), this.registerEvent(this.app.vault.on("modify", (n) => {
      n.path === e() && (!this._autoState || !this._loadedPresets) && this._loadViewsFromFile().then(() => this._rebuildAllViews()).catch((i) => console.error("[link-mindmap] reload presets:", i)), this._onVaultChange(n);
    })), this.registerEvent(this.app.vault.on("delete", (n) => this._onVaultChange(n))), this.registerEvent(this.app.vault.on("rename", (n, i) => this._onVaultChange(n, i))), this.registerEvent(this.app.metadataCache.on("changed", (n) => this._onVaultChange(n))), this.registerEvent(this.app.metadataCache.on("resolved", () => this._rebuildAllViews())), this.registerEvent(this.app.workspace.on("file-open", (n) => {
      for (let i of this.app.workspace.getLeavesOfType(Ie))
        i.view instanceof We && i.view.locateFile(n);
    }));
  }
  onunload() {
    clearTimeout(this._refreshTimer), this.app.workspace.detachLeavesOfType(Ie);
  }
  _onVaultChange(e, n) {
    let i = be(this.settings.mainFolder || ""), a = /* @__PURE__ */ T((o) => !!o && (o === i || o.startsWith(i + "/")), "inFolder"), s = e && e.path;
    e && e.extension && e.extension !== "md" && !a(n) || !a(s) && !a(n) || (clearTimeout(this._refreshTimer), this._refreshTimer = setTimeout(() => this._rebuildAllViews(), 400));
  }
  _rebuildAllViews() {
    for (let e of this.app.workspace.getLeavesOfType(Ie))
      e.view instanceof We && e.view.rebuild(!0);
  }
  async _checkLinks() {
    let e = this.settings, n = ut(this.app, e), i = e.linkField || "children", a = e.backField || "parent", s = [], o = [];
    for (let r of n.map.values()) {
      for (let h of r.childLinks) {
        let g = this.app.metadataCache.getFirstLinkpathDest(h, r.file.path);
        (!g || !n.map.has(g.path)) && s.push({ file: r.file, link: h, field: i });
      }
      for (let h of r.parentLinks) {
        let g = this.app.metadataCache.getFirstLinkpathDest(h, r.file.path);
        (!g || !n.map.has(g.path)) && o.push({ file: r.file, link: h, field: a });
      }
    }
    let c = s.length + o.length;
    if (c === 0) {
      new b(t("\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5\u901A\u8FC7 \u2713"));
      return;
    }
    let p = new $e(this.app);
    p.titleEl.setText(t("\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5"));
    let d = p.contentEl.createDiv();
    if (d.createEl("p", { text: t("\u53D1\u73B0 ") + c + t(" \u4E2A\u5931\u6548\u94FE\u63A5\uFF1A"), cls: "lkm-modal-sub" }), s.length) {
      d.createEl("h4", { text: t("\u5931\u6548\u5B50\u94FE\u63A5\uFF08children \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09") });
      let r = d.createEl("ul", { cls: "lkm-check-list" });
      for (let h of s) {
        let g = r.createEl("li");
        g.createEl("span", { text: h.file.basename + " \u2192 ", cls: "lkm-check-from" }), g.createEl("span", { text: h.link, cls: "lkm-check-broken" });
      }
    }
    if (o.length) {
      d.createEl("h4", { text: t("\u5931\u6548\u7236\u94FE\u63A5\uFF08parent \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09") });
      let r = d.createEl("ul", { cls: "lkm-check-list" });
      for (let h of o) {
        let g = r.createEl("li");
        g.createEl("span", { text: h.file.basename + " \u2192 ", cls: "lkm-check-from" }), g.createEl("span", { text: h.link, cls: "lkm-check-broken" });
      }
    }
    let l = d.createDiv("lkm-modal-btns");
    l.createEl("button", { cls: "lkm-btn lkm-btn-action", text: t("\u4FEE\u590D\u5168\u90E8") }).onclick = async () => {
      p.close(), new Ye(this.app, t("\u4FEE\u590D\u5931\u6548\u94FE\u63A5"), t("\u6B64\u64CD\u4F5C\u5C06\u4ECE\u7B14\u8BB0\u7684 children/parent \u5B57\u6BB5\u4E2D\u5220\u9664\u5931\u6548\u94FE\u63A5\uFF0C\u4E0D\u53EF\u64A4\u9500\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), () => this._doFixBrokenLinks(allBroken)).open();
    }, l.createEl("button", { cls: "lkm-btn", text: t("\u5173\u95ED") }).onclick = () => p.close(), p.open();
  }
  async _doFixBrokenLinks(e) {
    let n = 0, i = /* @__PURE__ */ new Map();
    for (let a of e)
      i.has(a.file.path) || i.set(a.file.path, { file: a.file, links: [] }), i.get(a.file.path).links.push(a.link);
    for (let { file: a, links: s } of i.values())
      try {
        let o = await this.app.vault.read(a), c = o.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
        if (!c) continue;
        let p = c[1], d = o.slice(c[0].length), l = !1;
        for (let r of s) {
          let h = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), g = new RegExp(`^[ \\t]*- ["']?\\[\\[` + h + `(\\|[^\\]]*)?\\]\\]["']?[ \\t]*$`, "gm"), w = p.replace(g, "");
          if (w !== p) {
            p = w, l = !0;
            continue;
          }
          let f = new RegExp(`^[A-Za-z_][\\w-]*\\s*:\\s*["']?\\[\\[` + h + `(\\|[^\\]]*)?\\]\\]["']?[ \\t]*$`, "gm"), E = p.replace(f, "");
          E !== p && (p = E, l = !0);
        }
        l && (p = p.replace(/\n{3,}/g, `

`), await this.app.vault.modify(a, `---
` + p + `
---` + d), n++);
      } catch (o) {
        console.error("[link-mindmap] fix link:", o);
      }
    new b(t("\u5DF2\u4FEE\u590D ") + n + t(" \u4E2A\u6587\u4EF6")), this._rebuildAllViews();
  }
  async _normalizeFrontmatter(e) {
    let n = this.settings, i = n.typeField || "type", a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ T(async (d) => {
      if (!d) return null;
      if (a.has(d)) return a.get(d);
      let l = this.app.vault.getAbstractFileByPath(be(d));
      if (!(l instanceof Xe)) return null;
      let r = wt(await this.app.vault.read(l));
      return a.set(d, r.fields), r.fields;
    }, "getTemplateFields"), o = /* @__PURE__ */ T(async (d) => {
      let l = await this.app.vault.read(d), r = l.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
      if (!r) return { changed: !1, skipped: !1 };
      let h = r[1], g = l.slice(r[0].length), w = [], f = null;
      for (let v of h.split(`
`)) {
        let U = v.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
        U ? (f && w.push(f), f = { key: U[1], lines: [v] }) : f && f.lines.push(v);
      }
      if (f && w.push(f), !w.length) return { changed: !1, skipped: !1 };
      let E = n.statusField || "status", y = w.find((v) => v.key === E);
      if (y && y.lines.length === 1) {
        let v = (y.lines[0].match(/^.*:\s*(.*)$/) || [])[1] || "", U = lt(v), ne = pt(U);
        ne !== U && (y.lines[0] = E + ": " + (ne ? '"' + ne + '"' : '""'));
      }
      let _ = w.find((v) => v.key === i), F = _ ? lt((_.lines[0].match(/^.*:\s*(.*)$/) || [])[1] || "") : "", m = n.typeTemplates || {}, D = F && m[F] ? m[F] : (n.templatePath || "").trim(), W = await s(D);
      if (!W) return { changed: !1, skipped: !0 };
      let C = W.map(([v]) => v), A = /* @__PURE__ */ new Map(W), x = /* @__PURE__ */ new Map(w.map((v) => [v.key, v])), Y = [];
      for (let v of C)
        x.has(v) ? (Y.push(x.get(v)), x.delete(v)) : Y.push({ key: v, lines: [v + ": " + (A.get(v) || "")] });
      for (let [, v] of x) Y.push(v);
      let le = [];
      for (let v of Y) le.push(...v.lines);
      let O = le.join(`
`), Z = h !== O;
      if (Z) {
        let v = `---
` + O + `
---
` + g;
        await this.app.vault.modify(d, v);
      }
      return { changed: Z, skipped: !1 };
    }, "normalizeOne");
    if (e) {
      let d = this.app.workspace.getActiveFile();
      if (!d || d.extension !== "md") {
        new b(t("\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      let l = await o(d);
      l.skipped ? new b(t("\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7")) : l.changed ? new b(t("\u5DF2\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027 \u2713")) : new b(t("\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"));
      return;
    }
    let c = be(n.mainFolder || ""), p = Je(this.app, c);
    if (!p.length) {
      new b(t("\u672A\u627E\u5230\u7B14\u8BB0\u6587\u4EF6"));
      return;
    }
    new Ye(this.app, t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027"), t("\u6B64\u64CD\u4F5C\u5C06\u6309\u6A21\u677F\u91CD\u6392\u6240\u6709\u7B14\u8BB0\u7684 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\u3002\u5DF2\u6709\u503C\u4E0D\u4F1A\u88AB\u4FEE\u6539\uFF0C\u4F46\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let d = 0, l = 0, r = [];
      for (let g of p) {
        let w = await o(g);
        w.skipped && l++, w.changed && (d++, r.length < 10 && r.push(g.basename));
      }
      let h;
      d ? (h = t("\u5DF2\u6574\u7406 ") + d + t(" \u4E2A\u7B14\u8BB0\u7684\u5C5E\u6027"), r.length < d ? h += t("\uFF08\u7B49\uFF09") : h += "\uFF1A" + r.join("\u3001"), l && (h += t("\uFF1B") + l + t(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7"))) : (h = t("\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"), l && (h += t("\uFF08") + l + t(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7\uFF09"))), new b(h, 15e3);
    }).open();
  }
  _cleanInvalidTypes() {
    let e = this.settings, n = e.typeField || "type", i = new Set(Object.keys(e.typeColors || {})), a = Je(this.app, e.mainFolder), s = [];
    for (let o of a) {
      let p = ((this.app.metadataCache.getFileCache(o) || {}).frontmatter || {})[n];
      p != null && String(p).trim() && !i.has(String(p).trim()) && s.push({ file: o, oldVal: String(p).trim() });
    }
    if (!s.length) {
      new b(t("\u6CA1\u6709\u5931\u6548\u7C7B\u578B\u9700\u8981\u6E05\u9664"));
      return;
    }
    new Ye(this.app, t("\u6E05\u9664\u5931\u6548\u7C7B\u578B"), t("\u53D1\u73B0 ") + s.length + t(" \u4E2A\u7B14\u8BB0\u7684 type \u4E0D\u5728\u914D\u7F6E\u5217\u8868\u4E2D\uFF0C\u5C06\u88AB\u6E05\u9664\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u7B14\u8BB0\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let o = 0;
      for (let c of s)
        try {
          await this.app.fileManager.processFrontMatter(c.file, (p) => {
            delete p[n];
          }), o++;
        } catch (p) {
          console.error("[link-mindmap] clean type:", p);
        }
      new b(t("\u5DF2\u6E05\u9664 ") + o + t(" \u4E2A\u7B14\u8BB0\u7684\u5931\u6548\u7C7B\u578B")), this._rebuildAllViews();
    }).open();
  }
  async _convertToExcalidraw(e) {
    if (!e || e.extension !== "md") {
      new b(t("\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7 md \u7B14\u8BB0"));
      return;
    }
    if (e.basename.endsWith(".excalidraw")) {
      new b(t("\u8BE5\u6587\u4EF6\u5DF2\u662F excalidraw \u683C\u5F0F"));
      return;
    }
    new Ye(this.app, t("\u8F6C\u4E3A excalidraw"), t("\u8F6C\u6362\u540E\u300C") + e.basename + t("\u300D\u7684\u6B63\u6587\u5185\u5BB9\u5C06\u4E22\u5931\uFF08\u4EC5\u4FDD\u7559 frontmatter \u5C5E\u6027\uFF09\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      try {
        let i = (await this.app.vault.read(e)).match(/^---\n([\s\S]*?)\n---(?:\n|$)/), a;
        i ? a = ["---", ...i[1].split(`
`), "excalidraw-plugin: parsed", "tags: [excalidraw]", "---", ""] : a = ["---", "excalidraw-plugin: parsed", "tags: [excalidraw]", "---", ""];
        let s = `==\u26A0  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. \u26A0== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'


## Drawing
\`\`\`compressed-json
N4IgLgngDgpiBcIYA8DGBDANgSwCYCd0B3EAGhADcZ8BnbAewDsEAmcm+gV31TkQAswYKDXgB6MQHNsYfpwBGAOlT0AtmIBeNCtlQbs6RmPry6uA4wC0KDDgLFLUTJ2lH8MTDHQ0YNMWHRJMRZFFgBORQAGMiRPVRhGMBoEAG0AXXJ0KCgAZQCwPlBJfDwc7A0+Rk5MTHIdGCIAIXRUAGtirkZcAGF6THp8BBAAYgAzcYmQAF8poA===
\`\`\`
%%`, o = e.path.replace(/\.md$/, ".excalidraw.md");
        if (this.app.vault.getAbstractFileByPath(o)) {
          new b(t("\u76EE\u6807\u6587\u4EF6\u5DF2\u5B58\u5728"));
          return;
        }
        await this.app.vault.create(o, a.join(`
`) + s);
        let c = e.basename, p = e.basename + ".excalidraw";
        for (let d of Je(this.app, this.settings.mainFolder))
          d.path !== e.path && await this.app.fileManager.processFrontMatter(d, (l) => {
            for (let r of [this.settings.linkField, this.settings.backField]) {
              let h = je(l[r]), g = !1, w = h.map((f) => Le(f) === c ? (g = !0, "[[" + p + "]]") : f);
              g && (l[r] = w);
            }
          });
        await this.app.vault.delete(e), new b(t("\u5DF2\u8F6C\u6362\u300C") + e.basename + t("\u300D\u4E3A excalidraw")), await new Promise((d) => setTimeout(d, 400)), await this._rebuildAllViews();
      } catch (n) {
        new b(t("\u8F6C\u6362\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
      }
    }).open();
  }
  _cleanInvalidStatus() {
    let e = this.settings, n = e.statusField || "status", i = new Set(Object.keys(e.statusColors || {})), a = Je(this.app, e.mainFolder), s = [];
    for (let o of a) {
      let c = (this.app.metadataCache.getFileCache(o) || {}).frontmatter || {}, p = pt(c[n]);
      p && !i.has(p) && s.push({ file: o, oldVal: p });
    }
    if (!s.length) {
      new b(t("\u6CA1\u6709\u5931\u6548\u72B6\u6001\u9700\u8981\u6E05\u9664"));
      return;
    }
    new Ye(this.app, t("\u6E05\u9664\u5931\u6548\u72B6\u6001"), t("\u53D1\u73B0 ") + s.length + t(" \u4E2A\u7B14\u8BB0\u7684 status \u4E0D\u5728\u914D\u7F6E\u5217\u8868\u4E2D\uFF0C\u5C06\u88AB\u6E05\u9664\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u7B14\u8BB0\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let o = 0;
      for (let c of s)
        try {
          await this.app.fileManager.processFrontMatter(c.file, (p) => {
            delete p[n];
          }), o++;
        } catch (p) {
          console.error("[link-mindmap] clean status:", p);
        }
      new b(t("\u5DF2\u6E05\u9664 ") + o + t(" \u4E2A\u7B14\u8BB0\u7684\u5931\u6548\u72B6\u6001")), this._rebuildAllViews();
    }).open();
  }
  applyThemeVars() {
    let e = document.body;
    e.style.setProperty("--lkm-accent", this.settings.accent), e.style.setProperty("--lkm-main", this.settings.mainColor), e.style.setProperty("--lkm-multi", this.settings.multiColor), e.style.setProperty("--lkm-selected", this.settings.selectedColor);
    let n = this.settings.statusColors || {};
    for (let [i, a] of Object.entries(n)) e.style.setProperty("--lkm-status-" + i, a);
  }
  async activateView() {
    let { workspace: e } = this.app, n = e.getLeavesOfType(Ie)[0];
    n || (n = e.getLeaf(!0), await n.setViewState({ type: Ie, active: !0 })), e.revealLeaf(n);
  }
  async activateTimeline() {
    await this.activateView();
    for (let e of this.app.workspace.getLeavesOfType(Ie))
      e.view instanceof We && (e.view._mode = "dash", e.view._dashTab = "timeline", e.view.render());
  }
  refreshViews() {
    this.applyThemeVars();
    for (let e of this.app.workspace.getLeavesOfType(Ie))
      e.view instanceof We && e.view.render();
  }
  async loadSettings() {
    this.settings = Object.assign({}, Ft, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  _getSavedViews() {
    return this._loadedPresets || [];
  }
  async _writePresetFile(e) {
    let n = this.settings.savedViewLocation || "link-mindmap-presets.json", i = JSON.stringify(e, null, 2), a = this.app.vault.getAbstractFileByPath(n);
    a ? await this.app.vault.modify(a, i) : await this.app.vault.create(n, i);
  }
  async _saveSavedViews(e) {
    this._loadedPresets = e;
    try {
      await this._writePresetFile({ auto: this._autoState || null, presets: e });
    } catch (n) {
      console.error("[link-mindmap] save views to file:", n);
    }
  }
  async _saveAutoState(e) {
    this._autoState = e;
    try {
      await this._writePresetFile({ auto: e, presets: this._loadedPresets || [] });
    } catch (n) {
      console.error("[link-mindmap] save auto state:", n);
    }
  }
  async _saveViewPreset(e, n) {
    let i = this._getSavedViews(), a = i.findIndex((o) => o.name === e), s = { name: e, state: n, time: Date.now() };
    a >= 0 ? i[a] = s : i.push(s), await this._saveSavedViews(i);
  }
  async _deleteSavedView(e) {
    let n = this._getSavedViews().filter((i) => i.name !== e);
    await this._saveSavedViews(n);
  }
  async _loadViewsFromFile() {
    let e = this.settings.savedViewLocation || "link-mindmap-presets.json";
    try {
      let n = this.app.vault.getAbstractFileByPath(e);
      if (!n) return;
      let i = await this.app.vault.read(n), a = JSON.parse(i);
      Array.isArray(a) ? (this._loadedPresets = a, this._autoState = null) : a && typeof a == "object" && (this._autoState = a.auto || null, this._loadedPresets = Array.isArray(a.presets) ? a.presets : []);
    } catch (n) {
      console.error("[link-mindmap] load views from file:", n);
    }
  }
  _initLang() {
    let e = this.settings.language || "auto";
    if (e === "auto") {
      let n = window.moment && window.moment.locale() || "en";
      Ct(n && n.startsWith("zh") ? "zh" : "en");
    } else
      Ct(e);
  }
};
T(Ht, "LinkMindmapPlugin");
var is = Ht;
module.exports = is;
