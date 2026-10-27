"use strict";
var jt = (b, e) => () => {
  try {
    return e || b((e = { exports: {} }).exports, e), e.exports;
  } catch (n) {
    throw e = 0, n;
  }
};

// ../i18n.js
var vt = jt((os, _t) => {
  "use strict";
  var yt = {
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
      "\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09\uFF1BGit \u5206\u652F\u56FE\u4E2D\u4E3A\u5C42\u7EA7\u95F4\u8DDD": "Horizontal distance between parent and child; layer gap in Git branch mode",
      \u5782\u76F4\u95F4\u8DDD: "Vertical gap",
      \u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB: "Vertical distance between siblings",
      "\u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB\uFF1BGit \u5206\u652F\u56FE\u4E2D\u4E3A\u6CF3\u9053\u95F4\u8DDD": "Vertical distance between siblings; swim-lane gap in Git branch mode",
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
      "Git \u5206\u652F\u56FE": "Git branch",
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
  }, at = "zh";
  function Yt(b) {
    at = b || "zh";
  }
  function Gt() {
    return at;
  }
  function Kt(b, e) {
    let n = yt[at] && yt[at][b] || b;
    if (e) for (let i in e) n = n.split("{" + i + "}").join(e[i]);
    return n;
  }
  _t.exports = { t: Kt, setLang: Yt, getLang: Gt };
});

// ../src.js
var x = (b, e) => b, Wt = require("obsidian"), {
  Plugin: Xt,
  ItemView: Ut,
  Notice: _,
  Modal: Se,
  Setting: H,
  PluginSettingTab: qt,
  TFile: je,
  TFolder: ls,
  normalizePath: pe,
  FuzzySuggestModal: St,
  setIcon: xt,
  Menu: Ge,
  MarkdownRenderer: Jt,
  Component: Zt
} = Wt, { t, setLang: bt } = vt(), Ce = "link-mindmap-view", Qt = "http://www.w3.org/2000/svg", Ft = {
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
function me(b) {
  return b ? t(b) : "";
}
x(me, "statusLabel");
function ge(b) {
  return b ? t(b) : "";
}
x(ge, "typeLabel");
function Qe(b, e) {
  return e && (b.statusColors || {})[e] || null;
}
x(Qe, "statusColorOf");
function ct(b) {
  if (b == null) return "";
  if (b === !0 || String(b) === "true") return "\u5DF2\u5B8C\u6210";
  if (b === !1 || String(b) === "false" || String(b).trim() === "") return "";
  let e = String(b).trim();
  return { todo: "\u5F85\u529E", doing: "\u8FDB\u884C\u4E2D", done: "\u5DF2\u5B8C\u6210", archived: "\u5DF2\u5F52\u6863", snoozed: "\u5DF2\u6401\u7F6E" }[e] || e;
}
x(ct, "normalizeStatus");
function Ae(b) {
  return b == null ? [] : Array.isArray(b) ? b.slice() : [b];
}
x(Ae, "toArr");
function ve(b) {
  return String(b ?? "").replace(/^\[\[/, "").replace(/\]\]$/, "").split("|")[0].split("#")[0].split("^")[0].trim();
}
x(ve, "cleanLink");
function mt(b) {
  let e = [], n = /* @__PURE__ */ x((i) => {
    if (i == null) return;
    let a = String(i), s = /\[\[([^\[\]]+?)\]\]/g, o, c = !1;
    for (; (o = s.exec(a)) !== null; )
      c = !0, e.push(ve(o[1]));
    if (!c) {
      let p = ve(a.replace(/^["']+/, "").replace(/["']+$/, ""));
      p && e.push(p);
    }
  }, "push");
  return Array.isArray(b) ? b.forEach(n) : n(b), e;
}
x(mt, "extractLinks");
function le(b, e) {
  return b = String(b ?? ""), e > 0 && b.length > e ? b.slice(0, e - 1) + "\u2026" : b;
}
x(le, "truncate");
function Tt(b, e) {
  let n = 0;
  for (let i of String(b ?? ""))
    n += /[一-鿿　-〿＀-￯]/.test(i) ? e : e * 0.55;
  return n;
}
x(Tt, "estWidth");
var ot = null, lt = /* @__PURE__ */ new Map();
function Ne(b, e, n) {
  let i = b + "|" + e + "|" + (n ? 1 : 0), a = lt.get(i);
  if (a !== void 0) return a;
  let s;
  try {
    ot || (ot = document.createElement("canvas").getContext("2d")), ot.font = (n ? "600 " : "") + e + 'px Inter, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif', s = ot.measureText(String(b ?? "")).width;
  } catch {
    s = Tt(b, e);
  }
  return lt.size > 2e3 && lt.clear(), lt.set(i, s), s;
}
x(Ne, "measureTextWidth");
function ze(b) {
  return String(b).replace(/[\\/:*?"<>|#^\[\]]/g, "-").trim() || t("\u672A\u547D\u540D");
}
x(ze, "safeFileName");
function gt(b) {
  let e = String(b ?? "").replace(/^﻿/, "").replace(/\r\n/g, `
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
x(gt, "splitFrontmatter");
function nt(b) {
  return b = String(b ?? "").trim(), b.length >= 2 && (b.charAt(0) === '"' && b.charAt(b.length - 1) === '"' || b.charAt(0) === "'" && b.charAt(b.length - 1) === "'") ? b.slice(1, -1) : b;
}
x(nt, "stripYamlQuotes");
function B(b, e) {
  let n = document.createElementNS(Qt, b);
  if (e) for (let i in e) n.setAttribute(i, e[i]);
  return n;
}
x(B, "svgEl");
function Dt(b, e, n) {
  let i = b && (b[n || "date"] != null ? b[n || "date"] : "");
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
x(Dt, "createdOf");
function Et(b) {
  try {
    let e = b.stat;
    if (e && e.ctime) {
      let n = new Date(e.ctime);
      return n.getFullYear() + "-" + String(n.getMonth() + 1).padStart(2, "0") + "-" + String(n.getDate()).padStart(2, "0") + " " + String(n.getHours()).padStart(2, "0") + ":" + String(n.getMinutes()).padStart(2, "0") + ":" + String(n.getSeconds()).padStart(2, "0");
    }
  } catch {
  }
  return "";
}
x(Et, "fileCtime");
function Ke(b, e) {
  let n = pe(e || ""), i = [];
  for (let a of b.vault.getFiles())
    a.extension === "md" && (n && a.path !== n && !a.path.startsWith(n + "/") || i.push(a));
  return i;
}
x(Ke, "notesInFolder");
function Mt(b, e) {
  let n = Ke(b, e.mainFolder);
  if (!n.length) return !0;
  for (let i of n)
    if ((b.metadataCache.getFileCache(i) || {}).frontmatter) return !0;
  return !1;
}
x(Mt, "metadataReady");
function dt(b, e) {
  let n = e.linkField || "children", i = e.backField || "parent", a = e.zkField || "main", s = e.statusField || "status", o = e.typeField || "type", c = e.descField || "description", p = e.dateField || "date", d = e.titleField || "title", r = /* @__PURE__ */ new Map();
  for (let h of Ke(b, e.mainFolder)) {
    let g = (b.metadataCache.getFileCache(h) || {}).frontmatter || {};
    r.set(h.path, {
      file: h,
      title: g[d] ? String(g[d]) : h.basename.replace(/\.excalidraw$/, ""),
      zk: g[a] === !0 || String(g[a]) === "true",
      status: ct(g[s]),
      type: g[o] != null ? String(g[o]).trim() : "",
      desc: g[c] != null ? String(g[c]).trim() : "",
      date: Dt(g, h, p),
      ctime: Et(h),
      childLinks: mt(g[n]),
      parentLinks: mt(g[i])
    });
  }
  let l = /* @__PURE__ */ new Set();
  for (let h of r.values())
    for (let g of h.childLinks) {
      let k = b.metadataCache.getFirstLinkpathDest(g, h.file.path);
      k && r.has(k.path) && l.add(k.path);
    }
  return { map: r, referenced: l };
}
x(dt, "collectNotes");
function ht(b, e, n, i) {
  let a = i === "child" ? n.childLinks : n.parentLinks, s = [];
  for (let o of a) {
    let c = b.metadataCache.getFirstLinkpathDest(o, n.file.path);
    c && e.has(c.path) && s.push(e.get(c.path));
  }
  return s;
}
x(ht, "resolveLinks");
function et(b, e, n) {
  let i = /* @__PURE__ */ new Set([n.file.path]), a = /* @__PURE__ */ x((c, p) => {
    let d = {
      note: c,
      parent: p || null,
      children: [],
      expanded: !1,
      isAlias: !1,
      key: (p ? p.key + ">" : ">") + c.file.path
    };
    for (let r of c.childLinks) {
      let l = b.metadataCache.getFirstLinkpathDest(r, c.file.path);
      if (!l) continue;
      let h = e.get(l.path);
      !h || i.has(l.path) || (i.add(l.path), d.children.push(a(h, d)), i.delete(l.path));
    }
    return d;
  }, "mk"), s = a(n, null), o = /* @__PURE__ */ new Map();
  (/* @__PURE__ */ x((function c(p) {
    if (p.note.file) {
      let d = p.note.file.path;
      o.has(d) || o.set(d, []), o.get(d).push(p);
    }
    p.children.forEach(c);
  }), "collect"))(s);
  for (let [c, p] of o) {
    if (p.length < 2) continue;
    let d = e.get(c), r = new Set(d ? ht(b, e, d, "parent").map((h) => h.file.path) : []), l = -1;
    for (let h = 0; h < p.length; h++) {
      let g = p[h].parent && p[h].parent.note.file ? p[h].parent.note.file.path : null;
      if (g && r.has(g)) {
        l = h;
        break;
      }
    }
    l < 0 && (l = 0), p.forEach((h, g) => {
      h.isAlias = g !== l;
    });
  }
  return s;
}
x(et, "buildTree");
function rt(b, e) {
  let n = [[b, 1]];
  for (; n.length; ) {
    let [i, a] = n.pop();
    i.expanded = a < e && i.children.length > 0;
    for (let s of i.children) n.push([s, a + 1]);
  }
}
x(rt, "applyDepth");
function Lt(b, e, n) {
  let i = [], a = "";
  for (let s of String(b ?? "")) {
    let o = a + s;
    a && Ne(o, n, !1) > e ? (i.push(a), a = s) : a = o;
  }
  return a && i.push(a), i;
}
x(Lt, "wrapLines");
function wt(b, e, n) {
  if (Ne(b, n, !1) <= e) return b;
  let i = String(b);
  for (; i.length > 1 && Ne(i + "\u2026", n, !1) > e; ) i = i.slice(0, -1);
  return i + "\u2026";
}
x(wt, "truncateByWidth");
function tt(b, e) {
  let n = [], i = [], a = e.layoutMode !== "branch" && e.layoutDir === "v";
  if ((/* @__PURE__ */ x((function s(o) {
    if (!o._w) {
      let p = (1 + (e.showOpenIcon !== !1 ? 1 : 0) + (e.showAddIcon !== !1 ? 1 : 0)) * 24 + 12, d = o.note.title, r = e.maxTitleLen > 0 ? le(d, e.maxTitleLen) : d, l = Ne(r, 13, !0), h = !o.note.file, g = e.showCreated && !h && o.note.date ? o.note.date : "", k = e.showType && !h && o.note.type ? ge(o.note.type) : "", m = e.showChildCount && !h && o.children.length ? t("\u5B50 ") + o.children.length : "", F = e.showWordCount && !h && o.note.file ? t("\u5B57 ") + Math.max(1, Math.round((o.note.file.stat.size || 0) / 3)) : "", w = [k, m, F, g].filter(Boolean).join(" \xB7 "), y = !!w, S = e.showDesc && !h && o.note.desc ? o.note.desc : "";
      if (e.nodeHeight === 0) {
        let f = Ne(w, 11, !1);
        o._w = Math.max(80, 16 + Math.max(l, f) + p + 4), o._descLines = S ? Lt(S, o._w - 16 - p - 4, 11) : [], o._autoH = 26 + o._descLines.length * 15 + (y ? 15 : 0) + 4;
      } else {
        let f = S ? wt(S, 140, 11) : "", T = Math.max(Ne(w, 11, !1), Ne(f, 11, !1));
        o._w = Math.max(80, 16 + Math.max(l, T) + p + 4), o._descLines = null, o._autoH = e.nodeHeight;
      }
      o._shown = r;
    }
    let c = o.expanded ? o.children : [];
    if (!c.length) {
      o._h = o._autoH, a && (o._subW = o._w);
      return;
    }
    if (a) {
      let p = 0;
      c.forEach((d, r) => {
        s(d), p += (d._subW || d._w) + (r ? e.gapY : 0);
      }), o._h = o._autoH, o._subW = Math.max(o._w, p);
    } else {
      let p = 0;
      c.forEach((d, r) => {
        s(d), p += d._h + (r ? e.gapY : 0);
      }), o._h = Math.max(o._autoH, p);
    }
  }), "measure"))(b), e.layoutMode === "git") {
    let s = e.layoutDir === "v";
    (/* @__PURE__ */ x((function w(y) {
      let S = y.expanded ? y.children : [];
      if (!S.length)
        return y._gw = 1, 1;
      if (S.length === 1)
        return y._gw = w(S[0]), y._gw;
      y._gw = 0;
      for (let f of S) y._gw += w(f);
      return y._gw;
    }), "gw"))(b);
    let o = 0;
    (/* @__PURE__ */ x((function w(y, S, f) {
      y._gdepth = f, f > o && (o = f), n.push(y);
      let T = y.expanded ? y.children : [];
      if (!T.length) {
        y._glane = S;
        return;
      }
      if (T.length === 1)
        w(T[0], S, f + 1), y._glane = T[0]._glane, i.push([y, T[0]]);
      else {
        w(T[0], S, f + 1), y._glane = T[0]._glane, i.push([y, T[0]]);
        let C = S + T[0]._gw;
        for (let N = 1; N < T.length; N++)
          w(T[N], C, f + 1), i.push([y, T[N]]), C += T[N]._gw;
      }
    }), "assign"))(b, 0, 0);
    let c = 0, p = 0, d = 1 / 0, r = -1 / 0;
    for (let w of n) {
      let y = w._shown || w.note.title, S = Ne(y, 13, !0);
      w._w = Math.max(90, S + 36), w._autoH = 28, c = Math.max(c, w._w), p = Math.max(p, w._autoH), d = Math.min(d, w._glane), r = Math.max(r, w._glane);
    }
    let l = Math.max(40, e.gapX), h = Math.max(1, e.gapY), g = [], k = 0;
    for (let w = d; w <= r; w++) {
      let y = 0;
      for (let S of n) S._glane === w && (y = Math.max(y, S._w));
      y += h, g[w] = k + y / 2, k += y;
    }
    let m = k / Math.max(1, r - d + 1), F = null;
    if (!s) {
      F = [];
      let w = 0;
      for (let y = 0; y <= o; y++) {
        let S = 0;
        for (let f of n) f._gdepth === y && (S = Math.max(S, f._w));
        S += h, F[y] = w + S / 2, w += S;
      }
    }
    for (let w of n)
      w._h = w._autoH, s ? (w._x = g[w._glane] - w._w / 2, w._y = w._gdepth * l) : (w._x = F[w._gdepth] - w._w / 2, w._y = g[w._glane]);
    return { nodes: n, edges: i, git: !0, gvert: s, maxDepth: o, laneMin: d, laneMax: r, laneW: m, depthH: l, depthOffsets: F };
  }
  return (/* @__PURE__ */ x((function s(o, c, p) {
    o._x = c, o._y = p + o._h / 2, n.push(o);
    let d = o.expanded ? o.children : [];
    if (a) {
      let r = 0;
      d.forEach((g, k) => {
        r += (g._subW || g._w) + (k ? e.gapY : 0);
      });
      let l = c + o._w / 2 - r / 2, h = p + o._h + e.gapX;
      for (let g of d) {
        let k = g._subW || g._w;
        s(g, l + (k - g._w) / 2, h), i.push([o, g]), l += k + e.gapY;
      }
    } else {
      let r = p;
      for (let l of d)
        s(l, c + o._w + e.gapX, r), i.push([o, l]), r += l._h + e.gapY;
    }
  }), "place"))(b, 0, 0), { nodes: n, edges: i };
}
x(tt, "layoutTree");
function st(b) {
  return b.extension === "excalidraw" ? b.basename + ".excalidraw" : b.basename;
}
x(st, "linkNameOf");
async function Je(b, e, n, i) {
  await b.fileManager.processFrontMatter(e, (a) => {
    let s = Ae(a[n]);
    s.some((c) => ve(c) === i) || s.push("[[" + i + "]]"), a[n] = s;
  });
}
x(Je, "addLink");
async function Me(b, e, n, i) {
  let a = !1;
  return await b.fileManager.processFrontMatter(e, (s) => {
    let o = Ae(s[n]), c = o.filter((p) => {
      let d = b.metadataCache.getFirstLinkpathDest(ve(p), e.path);
      return !(d && d.path === i);
    });
    c.length !== o.length && (a = !0), c.length ? s[n] = c : delete s[n];
  }), a;
}
x(Me, "removeLinkByPath");
var Pt = class extends St {
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
x(Pt, "PickModal");
var Ie = Pt, It = class extends Se {
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
    let n = /* @__PURE__ */ x((w) => {
      w.target.tagName === "SELECT" && w.stopPropagation();
    }, "guardSelect");
    e.addEventListener("pointerdown", n, !0), e.addEventListener("mousedown", n, !0), e.createEl("h3", { text: t("\u591A\u9009\u7B14\u8BB0\u663E\u793A\u5BFC\u56FE") }), e.createEl("p", { text: t("\u641C\u7D22\u5E76\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\uFF0C\u540C\u65F6\u663E\u793A\u5728\u4E00\u5F20\u5BFC\u56FE\u4E0A\uFF08\u65E0\u9700\u5173\u8054\uFF09"), cls: "lkm-modal-sub" });
    let i = new Set(this.availableTypes);
    for (let w of this.items) w.type && i.add(w.type);
    let a = [...i], s = e.createDiv("lkm-multipick-filter"), o = s.createEl("input", { type: "text", placeholder: t("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    o.addClass("lkm-multipick-input");
    let c = /* @__PURE__ */ x((w) => {
      let y = /* @__PURE__ */ x((S) => S.stopPropagation(), "stop");
      w.addEventListener("mousedown", y), w.addEventListener("pointerdown", y), w.addEventListener("touchstart", y, { passive: !0 }), w.addEventListener("touchend", y, { passive: !0 }), w.addEventListener("click", y);
    }, "stopModalSwallow");
    if (a.length) {
      let w = s.createEl("select", { cls: "lkm-multipick-select" });
      w.createEl("option", { value: "", text: t("\u7C7B\u578B") }), w.createEl("option", { value: "__none__", text: t("\u65E0\u7C7B\u578B") });
      for (let y of a) w.createEl("option", { value: y, text: ge(y) });
      c(w), w.addEventListener("change", () => {
        this.typeFilter = w.value, m();
      });
    }
    let p = s.createEl("select", { cls: "lkm-multipick-select" });
    p.createEl("option", { value: "", text: t("\u6027\u8D28") }), p.createEl("option", { value: "1", text: t("\u4E3B\u7B14\u8BB0") }), p.createEl("option", { value: "0", text: t("\u975E\u4E3B\u7B14\u8BB0") }), c(p), p.addEventListener("change", () => {
      this.mainFilter = p.value, m();
    });
    let d = s.createEl("select", { cls: "lkm-multipick-select" });
    d.createEl("option", { value: "", text: t("\u5173\u8054") }), d.createEl("option", { value: "orphan", text: t("\u672A\u5173\u8054") }), d.createEl("option", { value: "linked", text: t("\u5DF2\u5173\u8054") }), c(d), d.addEventListener("change", () => {
      this.linkFilter = d.value, m();
    });
    let r = s.createEl("select", { cls: "lkm-multipick-select" });
    r.createEl("option", { value: "", text: t("\u72B6\u6001") }), r.createEl("option", { value: "__none__", text: t("\u65E0\u72B6\u6001") });
    for (let w of Object.keys(this.availableStatusColors || {}))
      r.createEl("option", { value: w, text: me(w) });
    c(r), r.addEventListener("change", () => {
      this.statusFilter = r.value, m();
    });
    let l = e.createDiv("lkm-multipick-list"), h = e.createDiv("lkm-multipick-sel"), g = null, k = /* @__PURE__ */ x(() => {
      let w = this.searchVal.toLowerCase(), y = this.typeFilter, S = [];
      for (let f of this.items)
        w && !f.label.toLowerCase().includes(w) || y && y === "__none__" && f.type || y && y !== "__none__" && f.type !== y || this.mainFilter === "1" && !f.isMain || this.mainFilter === "0" && f.isMain || this.linkFilter === "orphan" && !f.orphan || this.linkFilter === "linked" && f.orphan || this.statusFilter === "__none__" && f.status || this.statusFilter && this.statusFilter !== "__none__" && f.status !== this.statusFilter || S.push(f);
      return S;
    }, "getFiltered"), m = /* @__PURE__ */ x(() => {
      l.empty();
      let w = k(), y = 0, S = 100;
      for (let f = 0; f < w.length && y < S; f++) {
        let T = w[f], C = l.createDiv("lkm-multipick-row");
        this.selected.has(T.path) && C.classList.add("is-selected"), C.createSpan({ text: T.label });
        let P = [];
        T.isMain && P.push(t("\u4E3B\u7B14\u8BB0")), T.type && P.push(ge(T.type)), P.length && C.createSpan({ text: " \xB7 " + P.join(" \xB7 "), cls: "lkm-multipick-type" }), C.addEventListener("click", () => {
          this.selected.has(T.path) ? this.selected.delete(T.path) : this.selected.set(T.path, T.label), C.classList.toggle("is-selected"), h.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0"));
        }), y++;
      }
      y === 0 ? l.createEl("p", { text: t("\u65E0\u5339\u914D\u7ED3\u679C"), cls: "lkm-modal-sub" }) : y === S && l.createEl("p", { text: t("\u4EC5\u663E\u793A\u524D ") + S + t(" \u6761\uFF0C\u8BF7\u641C\u7D22\u7F29\u5C0F\u8303\u56F4"), cls: "lkm-modal-sub" });
    }, "renderList");
    o.addEventListener("input", () => {
      this.searchVal = o.value, g && clearTimeout(g), g = setTimeout(m, 150);
    });
    let F = e.createDiv("lkm-multipick-btns");
    new H(F).addButton((w) => w.setButtonText(t("\u5168\u9009\u5F53\u524D")).onClick(() => {
      for (let y of k()) this.selected.set(y.path, y.label);
      m(), h.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0"));
    })).addButton((w) => w.setButtonText(t("\u663E\u793A\u5BFC\u56FE")).setCta().onClick(() => {
      if (!this.selected.size) {
        new _(t("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      this.close(), this.onChoose([...this.selected.keys()]);
    })).addButton((w) => w.setButtonText(t("\u6E05\u9664\u6240\u6709")).onClick(() => {
      this.selected.clear(), m(), h.setText(t("\u5DF2\u9009 0 \u7BC7\u7B14\u8BB0"));
    })).addButton((w) => w.setButtonText(t("\u53D6\u6D88")).onClick(() => this.close())), h.setText(t("\u5DF2\u9009 ") + this.selected.size + t(" \u7BC7\u7B14\u8BB0")), m(), o.focus();
  }
  onClose() {
    this.contentEl.empty();
  }
};
x(It, "MultiPickModal");
var es = It, At = class extends Se {
  constructor(e, n, i) {
    super(e), this.parentLabel = n, this.opts = i || {}, this.onSubmit = this.opts.onSubmit || (() => {
    });
  }
  onOpen() {
    let { contentEl: e } = this, n = this.opts;
    e.createEl("h3", { text: n.standalone ? t("\u65B0\u5EFA\u8282\u70B9") : t("\u65B0\u5EFA\u5B50\u8282\u70B9") }), n.standalone || e.createEl("p", { text: t("\u7236\u8282\u70B9\uFF1A") + this.parentLabel, cls: "lkm-modal-sub" });
    let i = "", a = n.defaultType || "", s = n.defaultStatus || "", o = n.defaultTemplate || "", c = !1;
    new H(e).setName(t("\u6807\u9898")).addText((l) => {
      l.onChange((h) => i = h), l.inputEl.focus(), l.inputEl.addEventListener("keydown", (h) => {
        h.key === "Enter" && (h.preventDefault(), r());
      });
    }), new H(e).setName(t("\u7C7B\u578B")).setDesc(t("\u5199\u5165\u7B14\u8BB0\u7684 type \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((l) => {
      l.addOption("", t("\u4E0D\u9009")), (n.types || []).forEach((h) => l.addOption(h, ge(h))), l.setValue(a), l.onChange((h) => {
        a = h;
        let g = n.typeTemplates && n.typeTemplates[h];
        if (g && p) {
          let k = (n.templates || []).find((m) => m.path === pe(g));
          k && (o = k.path, p.setValue(o));
        }
      });
    }), n.statuses && n.statuses.length && new H(e).setName(t("\u72B6\u6001")).setDesc(t("\u5199\u5165\u7B14\u8BB0\u7684 status \u5B57\u6BB5\uFF0C\u53EF\u4E0D\u9009")).addDropdown((l) => {
      l.addOption("", t("\u4E0D\u9009")), n.statuses.forEach((h) => l.addOption(h, me(h))), l.setValue(s), l.onChange((h) => {
        s = h;
      });
    });
    let p = null;
    new H(e).setName(t("\u6A21\u677F")).setDesc(t("\u4E0D\u540C\u7C7B\u578B\u53EF\u4F7F\u7528\u4E0D\u540C\u6A21\u677F")).addDropdown((l) => {
      p = l, (n.templates || []).forEach((h) => l.addOption(h.path, h.name)), l.setValue(o), l.onChange((h) => o = h);
    });
    let d = n.defaultFormat || "md";
    new H(e).setName(t("\u683C\u5F0F")).addDropdown((l) => {
      l.addOption("md", "Markdown"), l.addOption("excalidraw", "Excalidraw"), l.setValue(d), l.onChange((h) => d = h);
    }), new H(e).setName(t("\u4E3B\u7B14\u8BB0")).setDesc(t("\u6807\u8BB0\u4E3A\u5BFC\u56FE\u4E3B\u5165\u53E3\uFF08") + (n.zkField || "main") + ": true\uFF09").addToggle((l) => {
      l.onChange((h) => c = h);
    });
    let r = /* @__PURE__ */ x(() => {
      let l = i.trim();
      if (!l) {
        new _(t("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(l, a, o, c, s, d);
    }, "done");
    new H(e).addButton((l) => l.setButtonText(t("\u521B\u5EFA")).setCta().onClick(r));
  }
  onClose() {
    this.contentEl.empty();
  }
};
x(At, "NewChildModal");
var Ct = At, Nt = class extends Se {
  constructor(e, n, i) {
    super(e), this.currentName = n, this.onSubmit = i;
  }
  onOpen() {
    let { contentEl: e } = this;
    e.createEl("h3", { text: t("\u91CD\u547D\u540D\u6587\u4EF6") }), e.createEl("p", { text: t("\u5F53\u524D\uFF1A") + this.currentName + ".md", cls: "lkm-modal-sub" });
    let n = this.currentName;
    new H(e).setName(t("\u65B0\u6587\u4EF6\u540D")).addText((a) => {
      a.setValue(this.currentName), a.onChange((s) => n = s), a.inputEl.focus(), a.inputEl.select(), a.inputEl.addEventListener("keydown", (s) => {
        s.key === "Enter" && (s.preventDefault(), i());
      });
    });
    let i = /* @__PURE__ */ x(() => {
      let a = n.trim();
      if (!a) {
        new _(t("\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.close(), this.onSubmit(a);
    }, "done");
    new H(e).addButton((a) => a.setButtonText(t("\u91CD\u547D\u540D")).setCta().onClick(i));
  }
  onClose() {
    this.contentEl.empty();
  }
};
x(Nt, "RenameModal");
var ts = Nt, Bt = class extends Se {
  constructor(e, n, i) {
    super(e), this.currentDesc = n, this.onSubmit = i;
  }
  onOpen() {
    let { contentEl: e } = this;
    e.createEl("h3", { text: t("\u4FEE\u6539\u63CF\u8FF0") });
    let n = this.currentDesc;
    new H(e).setName(t("\u63CF\u8FF0")).addTextArea((a) => {
      a.setValue(this.currentDesc), a.onChange((s) => n = s), a.inputEl.focus();
    });
    let i = /* @__PURE__ */ x(() => {
      this.close(), this.onSubmit(n.trim());
    }, "done");
    new H(e).addButton((a) => a.setButtonText(t("\u4FDD\u5B58")).setCta().onClick(i));
  }
  onClose() {
    this.contentEl.empty();
  }
};
x(Bt, "DescModal");
var ss = Bt, Rt = class extends Se {
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
x(Rt, "ConfirmModal");
var Be = Rt, Vt = class extends St {
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
x(Vt, "MoveModal");
var ft = Vt, $t = class extends Ut {
  constructor(e, n) {
    super(e), this.plugin = n, this.rootPath = null, this.depth = n.settings.defaultDepth, this.notes = /* @__PURE__ */ new Map(), this.referenced = /* @__PURE__ */ new Set(), this.currentRoot = null, this._cleanup = [], this._view = null, this._expandedMem = /* @__PURE__ */ new Map(), this._history = [], this._selected = /* @__PURE__ */ new Set(), this._batchMode = !1, this._selKey = null, this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._toolbarCollapsed = !1, this._dashFilters = [], this._dashSort = "date", this._dashSearch = "", this._dashHeatIdx = 0, this._dashBranchAll = !1, this._dashTab = "stats", this._tlSort = "desc", this._tlTypeFilter = "", this._tlSearch = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this._nodeIndex = /* @__PURE__ */ new Map();
  }
  get s() {
    return this.plugin.settings;
  }
  getViewType() {
    return Ce;
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
    let n = new Ge(), i = this.plugin._getSavedViews();
    if (i.length === 0)
      n.addItem((s) => s.setTitle(t("\u6682\u65E0\u9884\u8BBE")).setIcon("bookmark").onClick(() => {
      }));
    else {
      for (let s of i) {
        let o = s.time ? new Date(s.time).toLocaleString() : "";
        n.addItem((c) => {
          c.setTitle(s.name + (o ? "  (" + o + ")" : "")).setIcon("bookmark").onClick(async () => {
            await this._restoreViewState(s.state), new _(t("\u5DF2\u6062\u590D\u9884\u8BBE\uFF1A") + s.name);
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
    let n = new Ge(), i = this.plugin._getSavedViews();
    for (let s of i)
      n.addItem((o) => {
        o.setTitle(s.name).setIcon("trash").onClick(async () => {
          await this.plugin._deleteSavedView(s.name), new _(t("\u5DF2\u5220\u9664\u9884\u8BBE\uFF1A") + s.name);
        });
      });
    let a = e.getBoundingClientRect();
    n.showAtPosition({ x: a.left, y: a.bottom });
  }
  _showUpdatePresetMenu(e) {
    let n = new Ge(), i = this.plugin._getSavedViews();
    for (let s of i)
      n.addItem((o) => {
        o.setTitle(s.name).setIcon("refresh-cw").onClick(async () => {
          await this.plugin._saveViewPreset(s.name, this._captureViewState()), new _(t("\u5DF2\u66F4\u65B0\u9884\u8BBE\uFF1A") + s.name);
        });
      });
    let a = e.getBoundingClientRect();
    n.showAtPosition({ x: a.left, y: a.bottom });
  }
  _promptSaveView() {
    let e = new Se(this.app);
    e.titleEl.setText(t("\u4FDD\u5B58\u5BFC\u56FE\u9884\u8BBE"));
    let n = "", i = new H(e.contentEl).setName(t("\u9884\u8BBE\u540D\u79F0")).addText((s) => {
      s.setPlaceholder(t("\u8F93\u5165\u9884\u8BBE\u540D\u79F0")), s.inputEl.focus(), s.onChange((o) => n = o), s.inputEl.addEventListener("keydown", (o) => {
        o.key === "Enter" && (o.preventDefault(), a());
      });
    }), a = /* @__PURE__ */ x(async () => {
      let s = n.trim();
      if (!s) {
        new _(t("\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"));
        return;
      }
      this.plugin._getSavedViews().some((c) => c.name === s) ? new Be(this.app, t("\u8986\u76D6\u9884\u8BBE"), t("\u5DF2\u5B58\u5728\u540C\u540D\u9884\u8BBE\u300C") + s + t("\u300D\uFF0C\u662F\u5426\u8986\u76D6\uFF1F"), async () => {
        await this.plugin._saveViewPreset(s, this._captureViewState()), e.close(), new _(t("\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A") + s);
      }).open() : (await this.plugin._saveViewPreset(s, this._captureViewState()), e.close(), new _(t("\u5DF2\u4FDD\u5B58\u9884\u8BBE\uFF1A") + s));
    }, "done");
    new H(e.contentEl).addButton((s) => s.setButtonText(t("\u4FDD\u5B58")).setCta().onClick(a)).addButton((s) => s.setButtonText(t("\u53D6\u6D88")).onClick(() => e.close())), e.open();
  }
  async _waitMetadataReady() {
    let e = this.app.metadataCache;
    Mt(this.app, this.s) || await new Promise((n) => {
      let i = !1, a = /* @__PURE__ */ x(() => {
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
    let n = window.visualViewport, i = null, a = /* @__PURE__ */ x(() => {
      i && clearTimeout(i), i = setTimeout(() => {
        if (i = null, !window.matchMedia("(hover: none)").matches) return;
        let p = e.querySelector(".lkm-dash");
        if (!p) return;
        let d = e.querySelector(".lkm-toolbar"), r = d ? d.getBoundingClientRect().height : 0;
        p.style.maxHeight = n.height - r + "px";
        let l = document.activeElement;
        l && l.tagName === "INPUT" && e.contains(l) && setTimeout(() => {
          let h = l.getBoundingClientRect(), g = p.getBoundingClientRect();
          (h.top < g.top || h.bottom > g.bottom) && l.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 50);
      }, 150);
    }, "adjust"), s = /* @__PURE__ */ x(() => a(), "onResize"), o = /* @__PURE__ */ x(() => a(), "onScroll");
    n.addEventListener("resize", s), n.addEventListener("scroll", o), window.addEventListener("resize", s), this._cleanup.push(() => {
      n.removeEventListener("resize", s), n.removeEventListener("scroll", o), window.removeEventListener("resize", s);
      let c = e.querySelector(".lkm-dash");
      c && (c.style.maxHeight = "");
    }), this._adjustMobileViewport = a;
  }
  async rebuild(e) {
    let n = dt(this.app, this.s);
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
    let n = /* @__PURE__ */ x((i) => {
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
    let a = /* @__PURE__ */ x((f) => {
      let T = f.target.tagName;
      if (!(T === "INPUT" || T === "TEXTAREA"))
        if (f.key === "Delete" || f.key === "Backspace") {
          if (this._selKey) {
            f.preventDefault();
            let C = this._nodeIndex.get(this._selKey);
            C && this._deleteNode(C);
          }
        } else if (f.key === "Enter") {
          if (this._selKey) {
            f.preventDefault();
            let C = this._nodeIndex.get(this._selKey);
            C && C.note.file && this.app.workspace.getLeaf(!0).openFile(C.note.file);
          }
        } else if (f.key === "Escape")
          this._batchMode ? (this._batchMode = !1, this._selected.clear(), this.render()) : this._selKey && this._select(null);
        else if (f.key === "ArrowUp" || f.key === "ArrowDown" || f.key === "ArrowLeft" || f.key === "ArrowRight") {
          if (!this._selKey) return;
          let C = this._nodeIndex.get(this._selKey);
          if (!C) return;
          if (f.preventDefault(), f.key === "ArrowLeft")
            C.expanded && C.children.length ? (C.expanded = !1, this._expandedMem.set(C.note.file ? C.note.file.path : C.key, !1), this.render()) : C.parent && this._select(C.parent.key);
          else if (f.key === "ArrowRight")
            !C.expanded && C.children.length ? (C.expanded = !0, this._expandedMem.set(C.note.file ? C.note.file.path : C.key, !0), this.render()) : C.children.length && this._select(C.children[0].key);
          else if (f.key === "ArrowUp") {
            if (C.parent) {
              let N = C.parent.children, P = N.indexOf(C);
              P > 0 ? this._select(N[P - 1].key) : this._select(C.parent.key);
            }
          } else if (f.key === "ArrowDown") {
            if (C.expanded && C.children.length) {
              this._select(C.children[0].key);
              return;
            }
            let N = C;
            for (; N.parent; ) {
              let P = N.parent.children, V = P.indexOf(N);
              if (V < P.length - 1) {
                this._select(P[V + 1].key);
                return;
              }
              N = N.parent;
            }
          }
        } else if (f.key === " ") {
          if (this._selKey) {
            f.preventDefault();
            let C = this._nodeIndex.get(this._selKey);
            C && C.children.length && (C.expanded = !C.expanded, this._expandedMem.set(C.note.file ? C.note.file.path : C.key, C.expanded), this.render());
          }
        } else if (f.key === "n" || f.key === "N") {
          if (this._selKey) {
            f.preventDefault();
            let C = this._nodeIndex.get(this._selKey);
            C && this._addChildDialog(C);
          }
        } else f.key === "b" || f.key === "B" ? (f.preventDefault(), this._back()) : f.key === "/" && (f.preventDefault(), this.openNoteSearch());
    }, "onKeydown");
    n.addEventListener("keydown", a), this._cleanup.push(() => n.removeEventListener("keydown", a)), this._titleLenApplied !== i.maxTitleLen && (this._titleLenApplied = i.maxTitleLen);
    let s = n.createDiv("lkm-toolbar"), o = s.createEl("button", { cls: "lkm-btn lkm-toolbar-toggle", text: "\u2630" });
    o.title = t("\u5C55\u5F00/\u6298\u53E0\u5DE5\u5177\u680F"), o.onclick = () => {
      this._toolbarCollapsed = !this._toolbarCollapsed, s.classList.toggle("lkm-collapsed", this._toolbarCollapsed), this._scheduleAutoSave();
    }, this._toolbarCollapsed && s.classList.add("lkm-collapsed");
    let c = /* @__PURE__ */ x((f, T, C, N, P, V) => {
      let Y = s.createEl("button", { cls: "lkm-btn" + (N ? " " + N : "") });
      return V ? (Y.createEl("span", { cls: "lkm-btn-icon", text: V }), Y.createEl("span", { text: f })) : Y.textContent = f, Y.title = T, P && (Y.disabled = !0), Y.onclick = (ie) => {
        Y.disabled || C(Y, ie);
      }, Y;
    }, "mkBtn"), p = this._selKey ? this._nodeIndex.get(this._selKey) : null, d = !p;
    c(t("\u5DE5\u4F5C\u53F0"), t("\u67E5\u770B\u7EDF\u8BA1\u5DE5\u4F5C\u53F0"), () => {
      this._mode = "dash", this.render();
    }, "", !1, "\u{1F4CA}"), c(t("\u4E3B\u7B14\u8BB0"), t("\u9009\u62E9\u8981\u663E\u793A\u7684\u5BFC\u56FE\u7B14\u8BB0\uFF08main: true\uFF09"), () => this.openRootPicker(), "", !1, "\u{1F4CC}"), c(t("\u5173\u952E\u8BCD"), t("\u6309\u5173\u952E\u8BCD\u7D22\u5F15\u8FC7\u6EE4"), () => this.openKeywordPicker(), "", !1, "\u{1F511}"), c(t("\u641C\u7D22"), t("\u641C\u7D22\u4EFB\u610F\u7B14\u8BB0\u4F5C\u4E3A\u5BFC\u56FE\u6839\u8282\u70B9"), () => this.openNoteSearch(), "", !1, "\u{1F50D}"), c(t("\u591A\u9009"), t("\u9009\u62E9\u591A\u7BC7\u7B14\u8BB0\u540C\u65F6\u663E\u793A"), () => this.openMultiPick(), "", !1, "\u{1F4CB}"), c(t("\u65B0\u589E"), t("\u521B\u5EFA\u72EC\u7ACB\u7B14\u8BB0"), () => this.createStandaloneNote(), "", !1, "\u271A");
    let r = s.createDiv("lkm-depth");
    r.createSpan({ text: t("\u5C42") });
    let l = r.createEl("button", { cls: "lkm-step", text: "\u2212", title: t("\u51CF\u5C11\u663E\u793A\u5C42\u6570\uFF08\u5C421=\u53EA\u770B\u6839\u7B14\u8BB0\uFF09") }), h = r.createSpan({ cls: "lkm-depth-val", text: String(this.depth) }), g = r.createEl("button", { cls: "lkm-step", text: "+", title: t("\u589E\u52A0\u663E\u793A\u5C42\u6570") });
    l.onclick = () => {
      this.depth > 1 && (this.depth--, this._expandedMem.clear(), h.setText(String(this.depth)), this.render());
    }, g.onclick = () => {
      this.depth < 12 && (this.depth++, this._expandedMem.clear(), h.setText(String(this.depth)), this.render());
    }, c(t("\u5237\u65B0"), t("\u91CD\u65B0\u8BFB\u53D6\u76EE\u5F55\u4E0E\u7B14\u8BB0\u6570\u636E"), () => this.rebuild(!0), "", !1, "\u21BB"), c(t("\u9002\u5E94"), t("\u7F29\u653E\u81F3\u5B8C\u6574\u663E\u793A\u6240\u6709\u8282\u70B9"), () => this._fit && this._fit(), "", !1, "\u2922"), c(t("\u5168\u5C55"), t("\u5C55\u5F00\u6240\u6709\u8282\u70B9"), () => this._expandAll(!0), "", !1, "\u2295"), c(t("\u5168\u6298"), t("\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9"), () => this._expandAll(!1), "", !1, "\u2296"), c(this.s.layoutDir === "v" ? t("\u7EB5\u5411") : t("\u6A2A\u5411"), t("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u6A2A\u5411/\u7EB5\u5411\uFF09"), (f) => {
      this.s.layoutDir = this.s.layoutDir === "v" ? "h" : "v", this.plugin.saveSettings(), this._view = null, this.render({ fit: !0 });
    }, this.s.layoutDir === "v" ? "is-active" : "", this.s.layoutMode === "branch", "\u21C4"), c(t("\u5FEB\u6377\u952E"), t("\u67E5\u770B\u952E\u76D8\u5FEB\u6377\u952E\u8BF4\u660E"), () => this._showShortcutHelp(), "", !1, "\u2328"), c(t("\u5E2E\u52A9"), t("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), () => this._showHelp(), "", !1, "?"), c(t("\u5BFC\u51FA"), t("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2"), (f) => this._exportMenu(f), "", !1, "\u2B07"), c(t("\u9884\u8BBE"), t("\u4FDD\u5B58/\u6062\u590D\u5BFC\u56FE\u72B6\u6001\u9884\u8BBE"), (f) => this._showPresetMenu(f), "", !1, "\u{1F516}");
    let k = c(t("\u663E\u793A"), t("\u5207\u6362\u663E\u793A\u9009\u9879"), () => {
      let f = new Ge();
      f.addItem((C) => C.setTitle(this.s.showCreated ? t("\u2713 \u65F6\u95F4") : t("\u65F6\u95F4")).setIcon("calendar").onClick(() => {
        this.s.showCreated = !this.s.showCreated, this.plugin.saveSettings(), this.render();
      })), f.addItem((C) => C.setTitle(this.s.showType ? t("\u2713 \u7C7B\u578B") : t("\u7C7B\u578B")).setIcon("tag").onClick(() => {
        this.s.showType = !this.s.showType, this.plugin.saveSettings(), this.render();
      })), f.addItem((C) => C.setTitle(this.s.showDesc ? t("\u2713 \u63CF\u8FF0") : t("\u63CF\u8FF0")).setIcon("align-left").onClick(() => {
        this.s.showDesc = !this.s.showDesc, this.plugin.saveSettings(), this.render();
      })), f.addItem((C) => C.setTitle(this.s.showChildCount ? t("\u2713 \u5B50\u6570") : t("\u5B50\u6570")).setIcon("list").onClick(() => {
        this.s.showChildCount = !this.s.showChildCount, this.plugin.saveSettings(), this.render();
      })), f.addItem((C) => C.setTitle(this.s.showWordCount ? t("\u2713 \u5B57\u6570") : t("\u5B57\u6570")).setIcon("type").onClick(() => {
        this.s.showWordCount = !this.s.showWordCount, this.plugin.saveSettings(), this.render();
      })), f.addSeparator(), f.addItem((C) => C.setTitle(this.s.showOpenIcon !== !1 ? t("\u2713 \u6253\u5F00\u56FE\u6807") : t("\u6253\u5F00\u56FE\u6807")).setIcon("edit").onClick(() => {
        this.s.showOpenIcon = this.s.showOpenIcon === !1, this.plugin.saveSettings(), this.render();
      })), f.addItem((C) => C.setTitle(this.s.showAddIcon !== !1 ? t("\u2713 \u65B0\u589E\u56FE\u6807") : t("\u65B0\u589E\u56FE\u6807")).setIcon("plus-circle").onClick(() => {
        this.s.showAddIcon = this.s.showAddIcon === !1, this.plugin.saveSettings(), this.render();
      }));
      let T = k.getBoundingClientRect();
      f.showAtPosition({ x: T.left, y: T.bottom });
    });
    c(t("\u6279\u91CF"), t("\u8FDB\u5165\u6279\u91CF\u6A21\u5F0F\uFF1A\u5355\u51FB\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u540E\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664"), () => this._toggleBatch(), this._batchMode ? "is-active" : ""), this._batchMode && (s.createDiv("lkm-sel-count").setText(t("\u5DF2\u9009 ") + this._selected.size), c(t("\u5168\u9009"), t("\u9009\u4E2D\u5BFC\u56FE\u4E2D\u6240\u6709\u8282\u70B9"), () => {
      this._selected = new Set(this._nodeIndex.keys()), this.render();
    }, "lkm-btn-action"), c(t("\u53CD\u9009"), t("\u53CD\u9009\u5F53\u524D\u9009\u4E2D\u72B6\u6001"), () => {
      let T = new Set(this._nodeIndex.keys());
      for (let C of this._selected) T.delete(C);
      this._selected = T, this.render();
    }, "lkm-btn-action"), c(t("\u79FB\u52A8\u5230\u2026"), t("\u628A\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u79FB\u52A8\u5230\u6307\u5B9A\u7236\u7B14\u8BB0\u4E0B"), () => this._batchMoveDialog(), "lkm-btn-action"), c(t("\u5220\u9664\u9009\u4E2D"), t("\u5220\u9664\u6279\u91CF\u9009\u4E2D\u7684\u8282\u70B9\u53CA\u5176\u7B14\u8BB0\uFF08\u79FB\u5165\u56DE\u6536\u7AD9\uFF09"), () => this._batchDelete(), "lkm-btn-action"), c(t("\u6539\u7C7B\u578B"), t("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u7C7B\u578B"), () => this._batchSetType(), "lkm-btn-action"), c(t("\u6539\u72B6\u6001"), t("\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8282\u70B9\u7684\u72B6\u6001"), () => this._batchSetStatus(), "lkm-btn-action"), c(t("\u6807\u8BB0\u4E3B\u7B14\u8BB0"), t("\u6279\u91CF\u6807\u8BB0\u9009\u4E2D\u8282\u70B9\u4E3A\u4E3B\u7B14\u8BB0"), () => this._batchSetMain(!0), "lkm-btn-action"), c(t("\u53D6\u6D88\u4E3B\u7B14\u8BB0"), t("\u6279\u91CF\u53D6\u6D88\u9009\u4E2D\u8282\u70B9\u7684\u4E3B\u7B14\u8BB0\u6807\u8BB0"), () => this._batchSetMain(!1), "lkm-btn-action")), c(t("\u8BBE\u7F6E"), t("\u6253\u5F00\u63D2\u4EF6\u8BBE\u7F6E"), () => {
      this.app.setting.open(), this.app.setting.openTabById(this.plugin.manifest.id);
    }, "", !1, "\u2699"), c(t("\u83DC\u5355"), t("\u663E\u793A\u8282\u70B9\u64CD\u4F5C\u83DC\u5355\uFF08\u7B49\u540C\u53F3\u952E/\u957F\u6309\uFF09\uFF1A\u6253\u5F00/\u65B0\u589E/\u805A\u7126/\u4E0A\u7EA7/\u72B6\u6001/\u4E3B\u7B14\u8BB0/\u91CD\u547D\u540D/\u590D\u5236/\u79FB\u52A8/\u6392\u5E8F/\u5220\u9664"), (f, T) => {
      let C = this._nodeIndex.get(this._selKey);
      C && this._showNodeMenu(C, { clientX: T.clientX, clientY: T.clientY });
    }, "lkm-node-btn", !p), c(t("\u8FD4\u56DE"), t("\u8FD4\u56DE\u4E0A\u4E00\u6B21\u89C6\u56FE\u4F4D\u7F6E"), () => this._back(), "", this._history.length === 0, "\u2190"), c(t("\u7B5B\u9009"), t("\u7B5B\u9009\u8282\u70B9"), () => {
      s.classList.toggle("lkm-filter-open");
    }, "lkm-filter-toggle");
    let m = s.createEl("input", { type: "text", cls: "lkm-filter-input", placeholder: t("\u7B5B\u9009\u8282\u70B9\u2026") });
    m.value = this._filterText || "", m.addEventListener("input", () => {
      this._filterText = m.value.trim().toLowerCase(), this._applyFilter();
    });
    let F = s.createDiv("lkm-info");
    p && F.createSpan({ text: t("\u5DF2\u9009\uFF1A") + le(p.note.title, 12) + " \uFF5C " });
    let w = this.rootPath ? this.notes.get(this.rootPath) : null;
    if (this._kwFile)
      F.createSpan({ text: t("\u5173\u952E\u8BCD\uFF1A") + this._kwFile.basename });
    else if (this._multiRoot)
      F.createSpan({ text: t("\u591A\u9009\u5BFC\u56FE\uFF08") + (this.currentRoot ? this.currentRoot.children.length : 0) + t(" \u7BC7\uFF09") });
    else if (w) {
      F.createSpan({ text: t("\u8DEF\u5F84\uFF1A") });
      let f = this._buildCrumbChain();
      f.forEach((T, C) => {
        if (f.length > 8 && C === 1) {
          F.createEl("span", { cls: "lkm-crumb-sep", text: "\u2026>" });
          return;
        }
        if (f.length > 8 && C > 1 && C < f.length - 1) return;
        C && F.createSpan({ cls: "lkm-crumb-sep", text: ">" });
        let N = C === f.length - 1, P = le(T.note.title, 10), V = F.createEl(N ? "span" : "a", { cls: "lkm-crumb-item" + (N ? " lkm-crumb-cur" : ""), text: P });
        V.title = T.note.title, !N && T.note.file && V.addEventListener("click", () => this._focusPath(T.note.file.path));
      });
    } else
      F.createSpan({ text: t("\u672A\u627E\u5230\u7B14\u8BB0") });
    let y = n.createDiv("lkm-canvas");
    if (this._kwFile && !this.app.vault.getAbstractFileByPath(this._kwFile.path) && (this._kwFile = null), !this._kwFile && !this._multiRoot && (this._selectedRootPaths = null), this._kwFile) {
      this.showKeyword(this._kwFile, e);
      return;
    }
    if (this._multiRoot && this.currentRoot && this.currentRoot.children.length) {
      this._indexTree(this.currentRoot), rt(this.currentRoot, this.depth), this._ensureSelectedVisible(this.currentRoot), this._restoreExpanded(), this._draw(y, tt(this.currentRoot, this.s), e);
      return;
    }
    if (!this.rootPath || !w) {
      if (this.notes.size === 0) {
        this._renderEmptyGuide(y);
        return;
      }
      y.createDiv("lkm-empty").setText(t("\u6CA1\u6709\u627E\u5230\u4E3B\u7B14\u8BB0\uFF08") + (this.s.zkField || "main") + t(": true\uFF09\u3002\u53EF\u5728\u5BFC\u56FE\u4E2D\u53F3\u952E/\u957F\u6309\u4EFB\u610F\u8282\u70B9\u6807\u8BB0\u4E3A\u4E3B\u7B14\u8BB0\u3002"));
      return;
    }
    let S = et(this.app, this.notes, w);
    this.currentRoot = S, this._indexTree(S), rt(S, this.depth), this._restoreExpanded(), this._draw(y, tt(S, this.s), e);
  }
  _restoreExpanded() {
    for (let [e, n] of this._expandedMem) {
      let i = this._pathNodes ? this._pathNodes.get(e) : null;
      if (i) for (let a of i) a.expanded = n;
    }
  }
  _ensureSelectedVisible(e) {
    !this._selectedRootPaths || !this._selectedRootPaths.size || (/* @__PURE__ */ x(function n(i) {
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
    } else new _(t("\u6CA1\u6709\u53EF\u8FD4\u56DE\u7684\u8282\u70B9"));
  }
  _expandAll(e) {
    for (let n of this._nodeIndex.values())
      n.children.length && (n.expanded = e, this._expandedMem.set(n.note.file ? n.note.file.path : n.key, e));
    this.render();
  }
  _showShortcutHelp() {
    let e = new Se(this.app);
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
      new H(a).addButton((s) => s.setButtonText(t("\u5173\u95ED")).onClick(() => e.close()));
    }, e.open();
  }
  _exportMenu(e) {
    let n = new Ge();
    n.addItem((a) => a.setTitle(t("\u5BFC\u51FA SVG")).setIcon("download").onClick(() => this._exportSVG())), n.addItem((a) => a.setTitle(t("\u5BFC\u51FA PNG")).setIcon("image").onClick(() => this._exportPNG())), n.addItem((a) => a.setTitle(t("\u5BFC\u51FA Markdown \u5927\u7EB2")).setIcon("document").onClick(() => this._exportMarkdown())), n.addItem((a) => a.setTitle(t("\u5BFC\u51FA Canvas")).setIcon("layout-grid").onClick(() => this._exportCanvas()));
    let i = e.getBoundingClientRect();
    n.showAtPosition({ x: i.left, y: i.bottom + 4 });
  }
  _getSVGString() {
    let e = this.contentEl.querySelector(".lkm-svg");
    if (!e)
      return new _(t("\u672A\u627E\u5230\u5BFC\u56FE\u5185\u5BB9")), null;
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
    ], r = {};
    for (let w of d) {
      let y = p.getPropertyValue(w).trim();
      y && (r[w] = y);
    }
    r["--lkm-accent"] || (r["--lkm-accent"] = "#6c8cff"), r["--lkm-main"] || (r["--lkm-main"] = "#f2a65a"), r["--lkm-done"] || (r["--lkm-done"] = "#3fa66a");
    let l = "";
    try {
      for (let w of document.styleSheets) {
        let y;
        try {
          y = w.cssRules;
        } catch {
          continue;
        }
        if (y)
          for (let S of y) {
            let f = S.selectorText || "";
            f.includes("lkm-") && !f.includes("lkm-toolbar") && !f.includes("lkm-btn") && !f.includes("lkm-dash") && !f.includes("lkm-cards") && !f.includes("lkm-modal") && !f.includes("lkm-multipick") && !f.includes("lkm-empty") && !f.includes("lkm-guide") && !f.includes("lkm-heat") && !f.includes("lkm-branch") && !f.includes("lkm-legend") && !f.includes("lkm-donut") && !f.includes("lkm-bars") && !f.includes("lkm-stackbar") && !f.includes("lkm-chips") && !f.includes("lkm-shortcut") && !f.includes("lkm-step") && !f.includes("lkm-depth") && !f.includes("lkm-info") && !f.includes("lkm-crumb") && !f.includes("lkm-sel-count") && (l += S.cssText + `
`);
          }
      }
    } catch (w) {
      console.error("[link-mindmap] collect CSS:", w);
    }
    let h = l;
    for (let [w, y] of Object.entries(r))
      h = h.replace(new RegExp("var\\(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\)", "g"), y), h = h.replace(new RegExp("var\\(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ",\\s*[^)]+\\)", "g"), y);
    h = h.replace(/var\(--[^)]+\)/g, "#888");
    let g = document.createElement("style");
    g.textContent = h, n.insertBefore(g, n.firstChild);
    let k = "path, line, circle, rect, ellipse, polygon, polyline, text", m = e.querySelectorAll(k), F = n.querySelectorAll(k);
    for (let w = 0; w < m.length && w < F.length; w++) {
      let y = getComputedStyle(m[w]), S = y.stroke, f = y.fill, T = y.strokeWidth, C = y.strokeDasharray, N = y.opacity;
      if (S && S !== "none" && F[w].setAttribute("stroke", S), f && F[w].setAttribute("fill", f), T && T !== "0px" && F[w].setAttribute("stroke-width", T), C && C !== "none" && F[w].setAttribute("stroke-dasharray", C), N && N !== "1" && F[w].setAttribute("opacity", N), m[w].tagName === "text") {
        let P = y.fontSize, V = y.fontWeight;
        P && F[w].setAttribute("font-size", P), V && F[w].setAttribute("font-weight", V);
      }
    }
    return new XMLSerializer().serializeToString(n);
  }
  _exportSVG() {
    let e = this._getSVGString();
    if (!e) return;
    let i = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".svg";
    this.app.vault.create(i, e).then(
      () => new _(t("SVG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + i),
      (a) => new _(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a))
    );
  }
  _exportPNG() {
    let e = this._getSVGString();
    if (!e) return;
    let i = this.contentEl.querySelector(".lkm-svg").getBBox(), a = 30, s = i.width + a * 2, o = i.height + a * 2, c = new Image(), p = btoa(unescape(encodeURIComponent(e)));
    c.onload = () => {
      let d = document.createElement("canvas");
      d.width = s * 2, d.height = o * 2;
      let r = d.getContext("2d"), l = getComputedStyle(this.contentEl).getPropertyValue("--background-primary").trim() || "#ffffff";
      r.fillStyle = l, r.fillRect(0, 0, d.width, d.height), r.drawImage(c, 0, 0, d.width, d.height), d.toBlob((h) => {
        let k = "link-mindmap-export-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".png";
        h.arrayBuffer().then((m) => this.app.vault.createBinary(k, m).then(
          () => new _(t("PNG \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + k),
          (F) => new _(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (F && F.message ? F.message : F))
        ));
      });
    }, c.onerror = () => new _(t("PNG \u5BFC\u51FA\u5931\u8D25")), c.src = "data:image/svg+xml;base64," + p;
  }
  _exportMarkdown() {
    let e = this.currentRoot;
    if (!e) {
      new _(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let n = [], i = /* @__PURE__ */ x((c, p) => {
      let d = p === 0 ? "# " : "  ".repeat(p) + "- ", r = c.note.status ? " [" + me(c.note.status) + "]" : "", l = c.note.type ? " `" + ge(c.note.type) + "`" : "", h = this.s.showDesc && c.note.desc ? " \u2014 " + c.note.desc : "";
      n.push(d + (c.note.title || c.note.file?.name || "?") + l + r + h);
      for (let g of c.children || []) i(g, p + 1);
    }, "walk");
    i(e, 0);
    let a = n.join(`
`), o = "link-mindmap-outline-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".md";
    this.app.vault.create(o, a).then(
      () => new _(t("Markdown \u5927\u7EB2\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + o),
      (c) => new _(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (c && c.message ? c.message : c))
    );
  }
  _exportCanvas() {
    let e = this.currentRoot;
    if (!e) {
      new _(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u5BFC\u56FE"));
      return;
    }
    let n = 300, i = 60, a = 180, s = 20, o = this.s.layoutMode !== "branch" && this.s.layoutDir === "v", c = [], p = [], d = /* @__PURE__ */ new Map(), r = 0, l = 0, h = /* @__PURE__ */ x((S) => {
      let f = (S.children || []).filter((T) => T.note.file);
      return f.length ? f.reduce((T, C) => T + h(C), 0) : 1;
    }, "subtreeSize"), g = /* @__PURE__ */ x((S, f, T) => {
      let C = (S.children || []).filter((ie) => ie.note.file), N = T, P = [];
      for (let ie of C) {
        let $ = h(ie), J = g(ie, f + 1, N);
        P.push(J), N += $;
      }
      let V, Y;
      if (o ? (V = T * (n + a), Y = f * (i + s)) : (V = f * (n + a), P.length ? Y = (P[0].y + P[P.length - 1].y) / 2 : Y = T * (i + s)), S.note.file) {
        let ie = "n" + r++;
        d.set(S.key, ie), c.push({
          id: ie,
          type: "file",
          file: S.note.file.path,
          x: Math.round(V),
          y: Math.round(Y),
          width: n,
          height: i
        });
      }
      return { x: V, y: Y };
    }, "layout");
    g(e, 0, 0);
    let k = /* @__PURE__ */ x((S) => {
      for (let f of S.children || []) {
        let T = d.get(S.key), C = d.get(f.key);
        T && C && p.push({
          id: "e" + l++,
          fromNode: T,
          toNode: C,
          fromSide: o ? "bottom" : "right",
          toSide: o ? "top" : "left"
        }), k(f);
      }
    }, "collectEdges");
    k(e);
    for (let S of this._nodeIndex.values()) {
      if (!S.note.file || S.isAlias) continue;
      let f = S.parent && S.parent.note.file ? S.parent.note.file.path : null;
      for (let T of S.note.parentLinks) {
        let C = this.app.metadataCache.getFirstLinkpathDest(T, S.note.file.path);
        if (!(!C || C.path === f)) {
          for (let N of this._nodeIndex.values())
            if (N.note.file && N.note.file.path === C.path && !N.isAlias) {
              let P = d.get(S.key), V = d.get(N.key);
              P && V && p.push({ id: "e" + l++, fromNode: P, toNode: V, fromSide: o ? "bottom" : "right", toSide: o ? "top" : "left", color: "4" });
              break;
            }
        }
      }
    }
    if (this.s.showDupLine) {
      let S = /* @__PURE__ */ new Map();
      for (let f of this._nodeIndex.values()) f.note.file && (S.has(f.note.file.path) || S.set(f.note.file.path, []), S.get(f.note.file.path).push(f));
      for (let [f, T] of S) {
        if (T.length < 2) continue;
        let C = T.find((N) => !N.isAlias) || T[0];
        for (let N of T) {
          if (N === C) continue;
          let P = d.get(N.key), V = d.get(C.key);
          P && V && p.push({ id: "e" + l++, fromNode: P, toNode: V, fromSide: o ? "bottom" : "right", toSide: o ? "top" : "left", color: "4" });
        }
      }
    }
    if (!c.length) {
      new _(t("\u6CA1\u6709\u53EF\u5BFC\u51FA\u7684\u8282\u70B9"));
      return;
    }
    let F = JSON.stringify({ nodes: c, edges: p }, null, 2), y = "link-mindmap-canvas-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".canvas";
    this.app.vault.create(y, F).then(
      () => new _(t("Canvas \u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + y),
      (S) => new _(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (S && S.message ? S.message : S))
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
      new _(t("\u6CA1\u6709\u53EF\u8DF3\u8F6C\u7684\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let i = this._parentPathsOf(n.file.path);
    if (!i.length) {
      new _("\u300C" + le(n.title, 12) + t("\u300D\u6CA1\u6709\u4E0A\u7EA7\u7B14\u8BB0"));
      return;
    }
    let a = n.file.path, s = /* @__PURE__ */ x((c) => {
      this._focusPath(c);
      let p = [...this._nodeIndex.values()].find((d) => d.note.file && d.note.file.path === a);
      p && (this._selKey = p.key, this.render());
    }, "go");
    if (i.length === 1) {
      s(i[0]);
      return;
    }
    let o = i.map((c) => ({ label: (this.notes.get(c) || {}).title || c, path: c }));
    new Ie(this.app, o, (c) => s(c.path), t("\u8BE5\u8282\u70B9\u6709\u591A\u4E2A\u4E0A\u7EA7\uFF0C\u9009\u62E9\u8981\u524D\u5F80\u7684\u4E0A\u7EA7\u2026")).open();
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
      () => new _(t("\u5DF2\u590D\u5236\uFF1A") + n),
      () => new _(t("\u590D\u5236\u5931\u8D25"))
    );
  }
  _copySubtree(e) {
    if (!e) return;
    let n = [], i = /* @__PURE__ */ x((a, s) => {
      let o = s === 0 ? "" : "  ".repeat(s) + "- ";
      n.push(o + "[[" + (a.note.file ? a.note.file.basename : a.note.title) + "]]");
      for (let c of a.children || []) i(c, s + 1);
    }, "walk");
    i(e, 0), navigator.clipboard.writeText(n.join(`
`)).then(
      () => new _(t("\u5DF2\u590D\u5236\u5B50\u6811\uFF08") + n.length + t(" \u4E2A\u8282\u70B9\uFF09")),
      () => new _(t("\u590D\u5236\u5931\u8D25"))
    );
  }
  _renameNode(e) {
    if (!e || !e.note.file) {
      new _(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    let n = e.note.file.basename.endsWith(".excalidraw"), i = n ? e.note.file.basename.slice(0, -11) : e.note.file.basename;
    new ts(this.app, i, async (a) => {
      try {
        let s = e.note.file.basename, o = e.note.file.parent ? e.note.file.parent.path : "", c = n ? ".excalidraw.md" : ".md", p = ze(a), d = pe((o ? o + "/" : "") + p + c);
        if (d === e.note.file.path) return;
        if (this.app.vault.getAbstractFileByPath(d)) {
          new _(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + p);
          return;
        }
        await this.app.vault.rename(e.note.file, d);
        let r = p + (n ? ".excalidraw" : ""), l = this.s.linkField || "children", h = this.s.backField || "parent";
        for (let k of this.notes.values())
          k.file.path !== d && await this.app.fileManager.processFrontMatter(k.file, (m) => {
            let F = Ae(m[l]), w = !1, y = F.map((S) => ve(S) === s ? (w = !0, "[[" + r + "]]") : S);
            w && (m[l] = y), m[h] != null && ve(m[h]) === s && (m[h] = r);
          });
        let g = this.s.titleField || "title";
        await this.app.fileManager.processFrontMatter(e.note.file, (k) => {
          k[g] != null && (k[g] = p);
        }), new _(t("\u5DF2\u91CD\u547D\u540D\u4E3A ") + p), await this.rebuild(!0);
      } catch (s) {
        new _(t("\u91CD\u547D\u540D\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s)), console.error("[link-mindmap] _renameNode:", s);
      }
    }).open();
  }
  _subtreePaths(e) {
    let n = /* @__PURE__ */ new Set();
    return (/* @__PURE__ */ x((function i(a) {
      a.note.file && n.add(a.note.file.path), a.children.forEach(i);
    }), "walk"))(e), n;
  }
  _deleteNode(e) {
    if (!e || !e.note.file) {
      new _(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (e.isAlias) {
      if (!e.parent || !e.parent.note.file) {
        new _(t("\u65E0\u6CD5\u786E\u5B9A\u8BE5\u6302\u70B9\u7684\u7236\u8282\u70B9"));
        return;
      }
      new Be(
        this.app,
        t("\u79FB\u9664\u5173\u8054"),
        "\u300C" + le(e.note.title, 16) + t(`\u300D\u662F\u91CD\u590D\u8282\u70B9\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\uFF09\u3002
\u672C\u6B21\u53EA\u79FB\u9664\u4ECE\u300C`) + le(e.parent.note.title, 16) + t("\u300D\u5230\u5B83\u7684\u5173\u8054\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\u3002"),
        async () => {
          try {
            await Me(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), this._selKey = null, new _(t("\u5DF2\u79FB\u9664\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (a) {
            new _(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a)), console.error("[link-mindmap] removeLink:", a);
          }
        }
      ).open();
      return;
    }
    let n = e.children.length, i = new Se(this.app);
    i.onOpen = () => {
      let { contentEl: a } = i;
      a.createEl("h3", { text: t("\u5220\u9664\u8282\u70B9") }), a.createEl("p", { text: "\u300C" + le(e.note.title, 20) + "\u300D" + (n ? t("\uFF08\u542B ") + n + t(" \u4E2A\u5B50\u8282\u70B9\uFF09") : ""), cls: "lkm-modal-sub" });
      let s = a.createDiv("lkm-confirm-row");
      s.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => i.close());
      let c = s.createEl("button", { cls: "lkm-btn", text: t("\u79FB\u9664\u5F53\u524D\u5173\u8054") });
      c.title = e.parent && e.parent.note.file ? t("\u53EA\u79FB\u9664\u5F53\u524D\u7236\u8282\u70B9\u5230\u5B83\u7684\u94FE\u63A5\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559") : t("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"), (!e.parent || !e.parent.note.file) && (c.disabled = !0), c.addEventListener("click", () => {
        if (!e.parent || !e.parent.note.file) {
          new _(t("\u8BE5\u8282\u70B9\u662F\u6839\u8282\u70B9\uFF0C\u65E0\u7236\u5173\u8054\u53EF\u79FB\u9664"));
          return;
        }
        i.close(), (async () => {
          try {
            await Me(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), this._selKey = null, new _(t("\u5DF2\u79FB\u9664\u4ECE\u300C") + le(e.parent.note.title, 14) + t("\u300D\u5230\u300C") + le(e.note.title, 14) + t("\u300D\u7684\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (r) {
            new _(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (r && r.message ? r.message : r)), console.error("[link-mindmap] removeLink:", r);
          }
        })();
      });
      let p = s.createEl("button", { cls: "lkm-btn", text: t("\u79FB\u9664\u6240\u6709\u5173\u8054") });
      p.title = t("\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664\uFF0C\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559"), p.addEventListener("click", () => {
        i.close(), (async () => {
          try {
            let r = e.note.file.path;
            for (let l of this.notes.values())
              l.file.path !== r && l.childLinks.length && await Me(this.app, l.file, this.s.linkField, r);
            this._selKey = null, new _(t("\u5DF2\u79FB\u9664\u6240\u6709\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09")), await this.rebuild(!0);
          } catch (r) {
            new _(t("\u79FB\u9664\u5173\u8054\u5931\u8D25\uFF1A") + (r && r.message ? r.message : r)), console.error("[link-mindmap] removeLink:", r);
          }
        })();
      });
      let d = s.createEl("button", { cls: "lkm2-btn-danger", text: t("\u5220\u9664\u6587\u4EF6") });
      d.title = t("\u79FB\u5165\u56DE\u6536\u7AD9\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u94FE\u63A5\u91CC\u79FB\u9664"), d.addEventListener("click", () => {
        if (!n) {
          i.close(), this._doDelete(e);
          return;
        }
        let r = new Se(this.app);
        r.onOpen = () => {
          let { contentEl: l } = r;
          l.createEl("h3", { text: t("\u5220\u9664\u5B50\u8282\u70B9") }), l.createEl("p", { text: "\u300C" + le(e.note.title, 20) + t("\u300D\u542B ") + n + t(" \u4E2A\u5B50\u8282\u70B9\uFF0C\u662F\u5426\u4E00\u5E76\u5220\u9664\uFF1F"), cls: "lkm-modal-sub" });
          let h = l.createDiv("lkm-confirm-row");
          h.createEl("button", { cls: "lkm2-btn-ghost", text: t("\u53D6\u6D88") }).addEventListener("click", () => r.close()), h.createEl("button", { cls: "lkm-btn", text: t("\u4EC5\u5220\u6B64\u8282\u70B9") }).addEventListener("click", () => {
            r.close(), i.close(), this._doDelete(e);
          }), h.createEl("button", { cls: "lkm2-btn-danger", text: t("\u5168\u90E8\u5220\u9664") }).addEventListener("click", () => {
            r.close(), i.close(), this._doDelete(e, !0);
          });
        }, r.onClose = () => r.contentEl.empty(), r.open();
      });
    }, i.onClose = () => i.contentEl.empty(), i.open();
  }
  async _doDelete(e, n) {
    try {
      let i = n ? this._subtreePaths(e) : /* @__PURE__ */ new Set([e.note.file.path]);
      for (let s of this.notes.values())
        if (!i.has(s.file.path))
          for (let o of i)
            s.childLinks.length && await Me(this.app, s.file, this.s.linkField, o);
      for (let s of i) {
        let o = this.app.vault.getAbstractFileByPath(s);
        o && o.path && await this.app.vault.trash(o, !0);
      }
      this._selKey = null;
      let a = i.size;
      new _(t("\u5DF2\u5220\u9664\u300C") + le(e.note.title, 16) + "\u300D" + (a > 1 ? t("\uFF08\u542B\u5B50\u8282\u70B9\u5171 ") + a + t(" \u4E2A\u6587\u4EF6\uFF09") : "") + t("\uFF08\u53EF\u5728\u56DE\u6536\u7AD9\u6062\u590D\uFF09")), await this.rebuild(!0);
    } catch (i) {
      new _(t("\u5220\u9664\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _deleteNode:", i);
    }
  }
  _showNodeMenu(e, n) {
    if (!e || !e.note.file) return;
    let i = new Ge();
    i.addItem((s) => s.setTitle(t("\u6253\u5F00\u7B14\u8BB0")).setIcon("file-text").onClick(() => {
      this.app.workspace.getLeaf(!0).openFile(e.note.file);
    })), i.addItem((s) => s.setTitle(t("\u65B0\u589E\u5B50\u8282\u70B9")).setIcon("plus").onClick(() => this.createChild(e))), i.addItem((s) => s.setTitle(t("\u6DFB\u52A0\u5DF2\u6709\u7B14\u8BB0")).setIcon("link").onClick(() => this._linkExistingNote(e))), i.addItem((s) => s.setTitle(t("\u805A\u7126\u5230\u6B64\u8282\u70B9")).setIcon("focus").onClick(() => this._focus(e.key)));
    let a = this._parentPathsOf(e.note.file.path);
    if (i.addItem((s) => s.setTitle(t("\u8DF3\u5230\u4E0A\u7EA7")).setIcon("arrow-up").onClick(() => this._up())), a.length > 1)
      for (let s of a) {
        let o = this.notes.get(s);
        i.addItem((c) => c.setTitle("  \u21B3 " + le(o ? o.title : s, 20)).setIcon("arrow-up").onClick(() => {
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
      new _(t("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new ft(this.app, i, (a) => this._moveNode(e, a.path)).open();
  }
  async _moveNode(e, n) {
    let i = e.note;
    if (!i.file) return;
    if (this._subtreePaths(e).has(n)) {
      new _(t("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let a = this.notes.get(n);
    if (!a) {
      new _(t("\u76EE\u6807\u7236\u7B14\u8BB0\u4E0D\u5B58\u5728"));
      return;
    }
    try {
      e.parent && e.parent.note.file && await Me(this.app, e.parent.note.file, this.s.linkField, i.file.path), await Je(this.app, a.file, this.s.linkField, st(i.file)), new _(t("\u5DF2\u79FB\u52A8\u300C") + le(i.title, 14) + t("\u300D\u5230\u300C") + le(a.title, 14) + "\u300D"), await new Promise((s) => setTimeout(s, 300)), await this.rebuild(!0);
    } catch (s) {
      new _(t("\u79FB\u52A8\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
    }
  }
  _moveSiblingDialog(e, n) {
    if (!e || !e.parent || !e.parent.note.file) {
      new _(t("\u6839\u8282\u70B9\u6CA1\u6709\u540C\u7EA7\u8282\u70B9"));
      return;
    }
    let i = e.parent.children.filter((s) => s !== e);
    if (!i.length) {
      new _(t("\u6CA1\u6709\u540C\u7EA7\u8282\u70B9\u53EF\u63D2\u5165"));
      return;
    }
    let a = i.map((s) => ({ label: s.note.title, path: s.note.file.path }));
    new ft(this.app, a, (s) => this._reorderSiblings(e, s.path, n)).open();
  }
  async _reorderSiblings(e, n, i) {
    if (!e.parent || !e.parent.note.file) {
      new _(t("\u65E0\u6CD5\u6392\u5E8F\uFF1A\u591A\u9009\u6839\u8282\u70B9\u95F4\u4E0D\u80FD\u8C03\u6574\u987A\u5E8F"));
      return;
    }
    let a = e.parent.note.file;
    try {
      await this.app.fileManager.processFrontMatter(a, (s) => {
        let o = this.s.linkField, c = Ae(s[o]), p = /* @__PURE__ */ x((h) => c.findIndex((g) => {
          let k = this.app.metadataCache.getFirstLinkpathDest(ve(g), a.path);
          return k && k.path === h;
        }), "idxOf"), d = p(e.note.file.path);
        if (d < 0) return;
        let r = c.splice(d, 1)[0], l = p(n);
        if (l < 0) {
          c.splice(d, 0, r);
          return;
        }
        c.splice(i ? l + 1 : l, 0, r), s[o] = c;
      }), await new Promise((s) => setTimeout(s, 300)), await this.rebuild(!0);
    } catch (s) {
      new _(t("\u540C\u7EA7\u79FB\u52A8\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
    }
  }
  async _moveAndReorder(e, n, i) {
    if (!n.parent || !n.parent.note.file) {
      new _(t("\u65E0\u6CD5\u79FB\u52A8\u5230\u8BE5\u4F4D\u7F6E"));
      return;
    }
    if (this._subtreePaths(e).has(n.parent.note.file.path)) {
      new _(t("\u4E0D\u80FD\u79FB\u52A8\u5230\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\u4E0B"));
      return;
    }
    let a = n.parent.note.file;
    try {
      if (e.parent && e.parent.note.file && await Me(this.app, e.parent.note.file, this.s.linkField, e.note.file.path), await this.app.fileManager.processFrontMatter(a, (s) => {
        let o = this.s.linkField, c = Ae(s[o]);
        c.some((g) => ve(g) === e.note.file.basename) || c.push("[[" + e.note.file.basename + "]]");
        let d = /* @__PURE__ */ x((g) => c.findIndex((k) => {
          let m = this.app.metadataCache.getFirstLinkpathDest(ve(k), a.path);
          return m && m.path === g;
        }), "idxOf"), r = d(e.note.file.path);
        if (r < 0) return;
        let l = c.splice(r, 1)[0], h = d(n.note.file.path);
        if (h < 0) {
          c.splice(r, 0, l);
          return;
        }
        c.splice(i ? h + 1 : h, 0, l), s[o] = c;
      }), this.s.autoAddBackLink) {
        let s = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(e.note.file, (o) => {
          o[s] = a.basename;
        });
      }
      new _(t("\u5DF2\u79FB\u52A8\u300C") + le(e.note.title, 14) + t("\u300D\u5230\u300C") + le(n.parent.note.title, 14) + "\u300D" + t(i ? "\u4E4B\u540E" : "\u4E4B\u524D")), await new Promise((s) => setTimeout(s, 300)), await this.rebuild(!0);
    } catch (s) {
      new _(t("\u79FB\u52A8\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
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
      new _(t("\u6E90\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (!n || !n.file) {
      new _(t("\u76EE\u6807\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6"));
      return;
    }
    if (i.file.path === n.file.path) {
      new _(t("\u4E0D\u80FD\u5173\u8054\u5230\u81EA\u5DF1"));
      return;
    }
    if (ht(this.app, this.notes, i, "child").some((a) => a.file.path === n.file.path)) {
      new _("\u300C" + le(i.title, 12) + t("\u300D\u5DF2\u5173\u8054\u5230\u300C") + le(n.title, 12) + t("\u300D\uFF0C\u65E0\u9700\u91CD\u590D"));
      return;
    }
    if (this._wouldCycle(i.file.path, n.file.path)) {
      new _(t("\u4E0D\u80FD\u5EFA\u7ACB\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF\uFF08\u76EE\u6807\u5DF2\u662F\u300C") + le(i.title, 12) + t("\u300D\u7684\u4E0A\u7EA7\uFF09"));
      return;
    }
    try {
      if (await Je(this.app, i.file, this.s.linkField, st(n.file)), this.s.autoAddBackLink) {
        let a = this.s.backField || "parent";
        await this.app.fileManager.processFrontMatter(n.file, (s) => {
          Ae(s[a]).some((p) => ve(p) !== "") || (s[a] = i.file.basename);
        });
      }
      new _(t("\u5DF2\u5EFA\u7ACB\u5173\u8054\uFF1A") + le(i.title, 12) + " \u2192 " + le(n.title, 12)), await new Promise((a) => setTimeout(a, 300)), await this.rebuild(!0);
    } catch (a) {
      new _(t("\u5EFA\u7ACB\u5173\u8054\u5931\u8D25\uFF1A") + (a && a.message ? a.message : a));
    }
  }
  _linkExistingNote(e) {
    if (!e.note.file) return;
    let n = this._subtreePaths(e), i = [...this.notes.values()].filter((a) => a.file && !n.has(a.file.path)).map((a) => ({ label: a.title, path: a.file.path }));
    if (!i.length) {
      new _(t("\u6CA1\u6709\u53EF\u7528\u7684\u7B14\u8BB0"));
      return;
    }
    new Ie(this.app, i, async (a) => {
      let s = this.notes.get(a.path);
      if (!(!s || !s.file)) {
        if (ht(this.app, this.notes, e.note, "child").some((o) => o.file.path === s.file.path)) {
          new _(t("\u5DF2\u5173\u8054\u5230\u8BE5\u7B14\u8BB0"));
          return;
        }
        if (this._wouldCycle(e.note.file.path, s.file.path)) {
          new _(t("\u4E0D\u80FD\u5173\u8054\uFF1A\u4F1A\u5F62\u6210\u5FAA\u73AF"));
          return;
        }
        try {
          if (await Je(this.app, e.note.file, this.s.linkField, st(s.file)), this.s.autoAddBackLink) {
            let o = this.s.backField || "parent";
            await this.app.fileManager.processFrontMatter(s.file, (c) => {
              Ae(c[o]).some((r) => ve(r) !== "") || (c[o] = e.note.file.basename);
            });
          }
          new _(t("\u5DF2\u5173\u8054\uFF1A") + le(e.note.title, 12) + " \u2192 " + le(s.title, 12)), await new Promise((o) => setTimeout(o, 300)), await this.rebuild(!0);
        } catch (o) {
          new _(t("\u5173\u8054\u5931\u8D25\uFF1A") + (o && o.message ? o.message : o));
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
        new _(t("\u4FDD\u5B58\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
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
      new _(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = e.map((s) => this._nodeIndex.get(s)).filter(Boolean), i = /* @__PURE__ */ new Set();
    n.forEach((s) => this._subtreePaths(s).forEach((o) => i.add(o)));
    let a = [...this.notes.values()].filter((s) => !i.has(s.file.path)).sort((s, o) => s.title.localeCompare(o.title, "zh")).map((s) => ({ label: s.title, path: s.file.path }));
    if (!a.length) {
      new _(t("\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u6807\u7236\u7B14\u8BB0"));
      return;
    }
    new ft(this.app, a, async (s) => {
      let o = this.notes.get(s.path), c = 0;
      for (let p of n)
        if (p.note.file)
          try {
            p.parent && p.parent.note.file && await Me(this.app, p.parent.note.file, this.s.linkField, p.note.file.path), await Je(this.app, o.file, this.s.linkField, st(p.note.file)), c++;
          } catch {
          }
      new _(t("\u6279\u91CF\u79FB\u52A8\u5B8C\u6210\uFF1A") + c + t(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchDelete() {
    let e = [...this._selected];
    if (!e.length) {
      new _(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = e.map((c) => this._nodeIndex.get(c)).filter((c) => c && c.note.file), i = n.filter((c) => !c.isAlias), a = new Set(i.map((c) => c.note.file.path)), s = n.filter((c) => c.isAlias && !a.has(c.note.file.path)), o = "";
    if (i.length && (o += t("\u5C06\u628A ") + i.length + t(" \u7BC7\u7B14\u8BB0\u79FB\u5165\u56DE\u6536\u7AD9\uFF0C\u5E76\u4ECE\u6240\u6709\u7236\u8282\u70B9\u7684\u94FE\u63A5\u91CC\u79FB\u9664\u3002")), s.length && (o += (o ? " " : "") + t("\u53E6\u5C06\u79FB\u9664 ") + s.length + t(" \u4E2A\u989D\u5916\u5173\u8054\uFF08\u7B14\u8BB0\u6587\u4EF6\u4FDD\u7559\uFF09\u3002")), !o) {
      new _(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
      return;
    }
    new Be(this.app, t("\u6279\u91CF\u5220\u9664"), o, async () => {
      let c = 0;
      for (let p of s)
        try {
          p.parent && p.parent.note.file && (await Me(this.app, p.parent.note.file, this.s.linkField, p.note.file.path), c++);
        } catch {
        }
      for (let p of i)
        try {
          let d = p.note.file;
          for (let r of this.notes.values())
            r.file.path !== d.path && r.childLinks.length && await Me(this.app, r.file, this.s.linkField, d.path);
          await this.app.vault.trash(d, !0), c++;
        } catch {
        }
      new _(t("\u5DF2\u5904\u7406 ") + c + t(" \u4E2A\u8282\u70B9")), this._selected.clear(), this._batchMode = !1, await this.rebuild(!0);
    }).open();
  }
  _batchSetType() {
    if (![...this._selected].length) {
      new _(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = this.s.typeColors || {}, i = Object.keys(n), a = [{ label: t("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: s, path: s });
    new Ie(this.app, a, (s) => this._batchSetTypeDo(s.path), t("\u6279\u91CF\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _batchSetTypeDo(e) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new _(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
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
    new _(t("\u5DF2\u4FEE\u6539 ") + s + t(" \u4E2A\u8282\u70B9\u7C7B\u578B\u4E3A\u300C") + (e || t("\u65E0\u7C7B\u578B")) + "\u300D"), await this.rebuild(!0);
  }
  _batchSetStatus() {
    if (![...this._selected].length) {
      new _(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let n = this.s.statusColors || {}, i = Object.keys(n), a = [{ label: t("\u65E0\u72B6\u6001\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: me(s), path: s });
    new Ie(this.app, a, (s) => this._batchSetStatusDo(s.path), t("\u6279\u91CF\u9009\u62E9\u72B6\u6001\u2026")).open();
  }
  async _batchSetStatusDo(e) {
    let i = [...this._selected].map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new _(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
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
    new _(t("\u5DF2\u4FEE\u6539 ") + s + t(" \u4E2A\u8282\u70B9\u72B6\u6001\u4E3A\u300C") + (e ? me(e) : t("\u65E0\u72B6\u6001")) + "\u300D"), await this.rebuild(!0);
  }
  async _batchSetMain(e) {
    let n = [...this._selected];
    if (!n.length) {
      new _(t("\u8BF7\u5148\u9009\u62E9\u8282\u70B9"));
      return;
    }
    let i = n.map((o) => this._nodeIndex.get(o)).filter((o) => o && o.note.file && !o.isAlias);
    if (!i.length) {
      new _(t("\u6CA1\u6709\u53EF\u5904\u7406\u7684\u8282\u70B9"));
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
    new _(t("\u5DF2") + t(e ? "\u6807\u8BB0\u4E3B\u7B14\u8BB0" : "\u53D6\u6D88\u4E3B\u7B14\u8BB0") + " " + s + t(" \u4E2A\u8282\u70B9")), await this.rebuild(!0);
  }
  _setStatusDialog(e) {
    if (!e || !e.note.file) return;
    let n = this.s.statusColors || {}, i = Object.keys(n), a = [{ label: t("\u65E0\u72B6\u6001\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: me(s) + (e.note.status === s ? " \u2713" : ""), path: s });
    new Ie(this.app, a, (s) => this._setStatus(e, s.path), t("\u9009\u62E9\u72B6\u6001\u2026")).open();
  }
  async _setStatus(e, n) {
    if (e.note.file)
      try {
        let i = this.s.statusField || "status";
        await this.app.fileManager.processFrontMatter(e.note.file, (a) => {
          n ? a[i] = n : delete a[i];
        }), new _(t("\u5DF2\u4FEE\u6539\u72B6\u6001\uFF1A") + (n ? me(n) : t("\u65E0\u72B6\u6001")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new _(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i));
      }
  }
  async _toggleZk(e) {
    if (e.note.file)
      try {
        let n = !1;
        await this.app.fileManager.processFrontMatter(e.note.file, (i) => {
          let a = this.s.zkField || "main";
          n = !(i[a] === !0 || String(i[a]) === "true"), i[a] = n;
        }), new _(t(n ? "\u5DF2\u6807\u8BB0\u4E3B\u7B14\u8BB0\uFF1A" : "\u5DF2\u53D6\u6D88\u4E3B\u7B14\u8BB0\uFF1A") + e.note.title), await this.rebuild(!0);
      } catch (n) {
        new _(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
      }
  }
  _setTypeDialog(e) {
    if (!e || !e.note.file) return;
    let n = this.s.typeColors || {}, i = Object.keys(n), a = [{ label: t("\u65E0\u7C7B\u578B\uFF08\u6E05\u9664\uFF09"), path: "" }];
    for (let s of i) a.push({ label: ge(s) + (e.note.type === s ? " \u2713" : ""), path: s });
    new Ie(this.app, a, (s) => this._setType(e, s.path), t("\u9009\u62E9\u7C7B\u578B\u2026")).open();
  }
  async _setType(e, n) {
    if (e.note.file)
      try {
        let i = this.s.typeField || "type";
        await this.app.fileManager.processFrontMatter(e.note.file, (a) => {
          n ? a[i] = n : delete a[i];
        }), new _(t("\u5DF2\u4FEE\u6539\u7C7B\u578B\uFF1A") + (n || t("\u65E0\u7C7B\u578B")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new _(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setType:", i);
      }
  }
  _setDateDialog(e) {
    if (!e || !e.note.file) return;
    let n = new Se(this.app);
    n.onOpen = () => {
      let { contentEl: i } = n;
      i.addClass("lkm-multipick"), i.createEl("h3", { text: t("\u4FEE\u6539\u65E5\u671F") }), i.createEl("p", { text: "\u300C" + le(e.note.title, 20) + t("\u300D\u5F53\u524D\u65E5\u671F\uFF1A") + (e.note.date || t("\u65E0")), cls: "lkm-modal-sub" });
      let a = i.createEl("input", { type: "date", cls: "lkm-multipick-input" });
      a.value = e.note.date || "";
      let s = i.createDiv("lkm-multipick-btns");
      new H(s).addButton((o) => o.setButtonText(t("\u786E\u5B9A")).setCta().onClick(() => {
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
        }), new _(t("\u5DF2\u4FEE\u6539\u65E5\u671F\uFF1A") + (n || t("\u65E0")) + " \xB7 " + e.note.title), await this.rebuild(!0);
      } catch (i) {
        new _(t("\u64CD\u4F5C\u5931\u8D25\uFF1A") + (i && i.message ? i.message : i)), console.error("[link-mindmap] _setDate:", i);
      }
  }
  openRootPicker() {
    let e = [...this.notes.values()].filter((i) => i.zk).sort((i, a) => i.title.localeCompare(a.title, "zh")), n = e.length ? e : [...this.notes.values()].filter((i) => !this.referenced.has(i.file.path));
    if (!n.length) {
      new _(t("\u6CA1\u6709\u4E3B\u7B14\u8BB0\uFF08main: true\uFF09"));
      return;
    }
    new Ie(
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
      new _(t("\u6CA1\u6709\u53EF\u641C\u7D22\u7684\u7B14\u8BB0"));
      return;
    }
    new Ie(
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
      new _(t("\u6CA1\u6709\u53EF\u9009\u7684\u7B14\u8BB0"));
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
    let i = /* @__PURE__ */ new Set(), a = e.filter((l) => i.has(l.file.path) ? !1 : (i.add(l.file.path), !0)), s = a.map((l) => et(this.app, this.notes, l)), o = s.map((l) => {
      let h = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ x(function g(k) {
        k.note.file && h.add(k.note.file.path), k.children.forEach(g);
      }, "collect"))(l), h;
    }), c = a.map((l) => l.file.path), p = [], d = [];
    for (let l = 0; l < s.length; l++) {
      let h = !1;
      for (let g = 0; g < s.length; g++)
        if (l !== g && o[g].has(c[l])) {
          h = !0;
          break;
        }
      h || (p.push(s[l]), d.push(c[l]));
    }
    let r = {
      note: { file: null, title: n, zk: !1, status: "", type: "", date: "", childLinks: [], parentLinks: [] },
      parent: null,
      children: p,
      expanded: !0,
      isAlias: !1,
      key: "#root"
    };
    for (let l of p) l.parent = r;
    return { virtualRoot: r, rootPaths: d, allSelectedPaths: c };
  }
  _showMultiRoot(e) {
    let n = e.map((o) => this.notes.get(o)).filter(Boolean);
    if (!n.length) {
      new _(t("\u6CA1\u6709\u6709\u6548\u7684\u7B14\u8BB0"));
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
    for (let [m, F, w] of i) {
      let y = n.createDiv("lkm-guide-step");
      y.createEl("span", { cls: "lkm-step-num", text: m });
      let S = y.createDiv("lkm-step-body");
      S.createEl("span", { cls: "lkm-step-title", text: F }), S.createEl("span", { cls: "lkm-step-desc", text: w });
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
      [t("\u5168\u5C55/\u5168\u6298"), t("\u4E00\u952E\u5C55\u5F00\u6216\u6298\u53E0\u6240\u6709\u5B50\u8282\u70B9")],
      [t("\u6A2A/\u7EB5"), t("\u5207\u6362\u5E03\u5C40\u65B9\u5411\uFF08\u5DE6\u2192\u53F3 \u6216 \u4E0A\u2192\u4E0B\uFF09")],
      [t("\u5BFC\u51FA"), t("\u5BFC\u51FA\u5BFC\u56FE\u4E3A SVG / PNG / Markdown \u5927\u7EB2 / Obsidian Canvas \u6587\u4EF6")],
      [t("\u6279\u91CF"), t("\u6279\u91CF\u9009\u4E2D\u591A\u4E2A\u8282\u70B9\u7EDF\u4E00\u79FB\u52A8/\u5220\u9664/\u6539\u7C7B\u578B/\u6539\u72B6\u6001")],
      [t("\u663E\u793A"), t("\u5207\u6362\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A\u65F6\u95F4\u3001\u7C7B\u578B\u3001\u5B50\u6570\u3001\u56FE\u6807\u7B49")],
      [t("\u94FE\u63A5\u68C0\u67E5"), t("\u626B\u63CF\u5931\u6548\u94FE\u63A5\u5E76\u4FEE\u590D\uFF0C\u68C0\u67E5\u672A\u5173\u8054\u7684\u5B64\u7ACB\u7B14\u8BB0")]
    ];
    for (let [m, F] of p) {
      let w = c.createDiv("lkm-guide-row");
      w.createEl("span", { cls: "lkm-guide-key", text: m }), w.createEl("span", { cls: "lkm-guide-val", text: F });
    }
    let d = e.createDiv("lkm-guide-help");
    d.createEl("h4", { text: t("\u8282\u70B9\u64CD\u4F5C") });
    let r = [
      [t("\u53F3\u952E / \u957F\u6309"), t("\u83DC\u5355\uFF1A\u6253\u5F00\u3001\u65B0\u589E\u5B50\u8282\u70B9\u3001\u805A\u7126\u3001\u4E0A\u7EA7\u3001\u72B6\u6001\u3001\u4E3B\u7B14\u8BB0\u3001\u91CD\u547D\u540D\u3001\u590D\u5236\u3001\u79FB\u52A8\u3001\u5220\u9664")],
      [t("\u53CC\u51FB"), t("\u6253\u5F00\u7B14\u8BB0\u6587\u4EF6")],
      [t("\u62D6\u52A8\u5361\u7247"), t("\u79FB\u52A8\u8282\u70B9\u5230\u5176\u4ED6\u7236\u7B14\u8BB0\u4E0B")],
      [t("\u62D6\u52A8\u7AEF\u53E3"), t("\u8FDE\u7EBF\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u591A\u7236/\u7F51\u72B6\uFF09")],
      [t("\u65B9\u5411\u952E"), t("\u2191\u2193\u2190\u2192 \u5728\u8282\u70B9\u95F4\u5BFC\u822A")],
      ["Delete", t("\u5220\u9664\u9009\u4E2D\u8282\u70B9\uFF08\u5F39\u7A97\u9009\u62E9\uFF1A\u79FB\u9664\u5173\u8054/\u5220\u9664\u6587\u4EF6\uFF09")]
    ];
    for (let [m, F] of r) {
      let w = d.createDiv("lkm-guide-row");
      w.createEl("span", { cls: "lkm-guide-key", text: m }), w.createEl("span", { cls: "lkm-guide-val", text: F });
    }
    let l = e.createDiv("lkm-guide-help");
    l.createEl("h4", { text: t("\u89C6\u89C9\u8BF4\u660E") });
    let h = [
      [t("\u8FB9\u6846\u989C\u8272"), t("\u8868\u793A\u7B14\u8BB0\u7C7B\u578B\uFF08\u6536\u96C6/\u7075\u611F/\u95EA\u5FF5/\u6587\u732E/\u6C38\u4E45/\u8D44\u6E90\uFF09\uFF0C\u5728\u8BBE\u7F6E\u4E2D\u81EA\u5B9A\u4E49\u989C\u8272")],
      [t("\u5DE6\u4FA7\u5706\u70B9"), t("\u8868\u793A\u5DE5\u4F5C\u72B6\u6001\uFF08\u5F85\u529E/\u8FDB\u884C\u4E2D/\u5DF2\u5B8C\u6210/\u5DF2\u5F52\u6863/\u5DF2\u6401\u7F6E\uFF09\uFF0C\u4E0D\u540C\u72B6\u6001\u4E0D\u540C\u989C\u8272")],
      [t("\u6A59\u8272\u5706\u70B9"), t("\u4E3B\u7B14\u8BB0\u6807\u8BB0\uFF08main: true\uFF09\uFF0C\u662F\u5BFC\u56FE\u7684\u5165\u53E3\u8282\u70B9")],
      [t("\u7C89\u8272\u5706\u70B9"), t("\u91CD\u590D\u8282\u70B9\uFF0C\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u88AB\u591A\u5904\u5173\u8054\u5F15\u5165")],
      [t("\u865A\u7EBF\u534A\u900F\u660E"), t("\u5DF2\u5F52\u6863\u8282\u70B9\uFF0C\u4FDD\u7559\u94FE\u63A5\u4F46\u964D\u4F4E\u89C6\u89C9\u6743\u91CD")]
    ];
    for (let [m, F] of h) {
      let w = l.createDiv("lkm-guide-row");
      w.createEl("span", { cls: "lkm-guide-key", text: m }), w.createEl("span", { cls: "lkm-guide-val", text: F });
    }
    let g = e.createDiv("lkm-guide-help");
    g.createEl("h4", { text: t("\u547D\u4EE4\u9762\u677F") });
    let k = [
      [t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), t("\u6253\u5F00\u5BFC\u56FE\u89C6\u56FE\uFF08\u540C\u529F\u80FD\u533A\u6309\u94AE\uFF09")],
      [t("\u6253\u5F00\u65F6\u95F4\u7EBF"), t("\u6253\u5F00\u7B14\u8BB0\u65F6\u95F4\u7EBF\u89C6\u56FE\uFF0C\u6309\u521B\u5EFA\u65F6\u95F4\u6D4F\u89C8\u7B14\u8BB0")],
      [t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), t("\u6279\u91CF\u6309\u6A21\u677F\u6574\u7406 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\uFF0C\u7EDD\u4E0D\u4FEE\u6539\u5DF2\u6709\u503C")],
      [t("\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), t("\u4EC5\u6574\u7406\u5F53\u524D\u6253\u5F00\u7B14\u8BB0\u7684 frontmatter")],
      [t("\u68C0\u67E5\u94FE\u63A5\u5B8C\u6574\u6027"), t("\u626B\u63CF\u6240\u6709\u7B14\u8BB0\u7684 children \u94FE\u63A5\uFF0C\u5217\u51FA\u5931\u6548\u94FE\u63A5\u548C\u5B64\u7ACB\u7B14\u8BB0\uFF0C\u53EF\u4E00\u952E\u4FEE\u590D")],
      [t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u7C7B\u578B"), t("\u79FB\u9664\u4E0D\u5728\u7C7B\u578B\u914D\u7F6E\u5217\u8868\u5185\u7684 type \u503C")],
      [t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u72B6\u6001"), t("\u79FB\u9664\u4E0D\u5728\u72B6\u6001\u914D\u7F6E\u5217\u8868\u5185\u7684 status \u503C")],
      [t("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), t("\u6253\u5F00\u672C\u5E2E\u52A9\u624B\u518C")]
    ];
    for (let [m, F] of k) {
      let w = g.createDiv("lkm-guide-row");
      w.createEl("span", { cls: "lkm-guide-key", text: m }), w.createEl("span", { cls: "lkm-guide-val", text: F });
    }
  }
  _renderEmptyGuide(e) {
    let n = e.createDiv("lkm-empty-guide");
    this._renderHelpContent(n);
  }
  _showHelp() {
    let e = new Se(this.app);
    e.onOpen = () => {
      let { contentEl: n } = e;
      n.addClass("lkm-help-modal"), this._renderHelpContent(n);
      let i = n.createDiv("lkm-multipick-btns");
      new H(i).addButton((a) => a.setButtonText(t("\u5173\u95ED")).onClick(() => e.close()));
    }, e.open();
  }
  async _createDefaultTemplate() {
    let e = this.s, n = (e.templateFolder || "").trim();
    if (n || (n = t("99-\u6A21\u677F"), e.templateFolder = n), !this.app.vault.getAbstractFileByPath(pe(n)))
      try {
        await this.app.vault.createFolder(pe(n));
      } catch (s) {
        new _(t("\u521B\u5EFA\u6A21\u677F\u6587\u4EF6\u5939\u5931\u8D25\uFF1A") + (s && s.message ? s.message : s));
        return;
      }
    let a = pe(n + t("/\u65B0\u8282\u70B9\u6A21\u677F.md"));
    if (this.app.vault.getAbstractFileByPath(a))
      new _(t("\u6A21\u677F\u5DF2\u5B58\u5728\uFF1A") + a);
    else {
      let s = e.linkField || "children", o = e.backField || "parent", c = e.zkField || "main", p = e.statusField || "status", d = e.typeField || "type", r = e.descField || "description", l = e.dateField || "date", h = e.titleField || "title", g = e.defaultStatus && (e.statusColors || {})[e.defaultStatus] !== void 0 ? '"' + e.defaultStatus + '"' : '""', k = `---
${s}: []
${o}: ""
${c}: false
${p}: ${g}
${l}: ""
${d}: ""
${r}: ""
${h}: ""
---

`;
      try {
        await this.app.vault.create(a, k);
      } catch (m) {
        new _(t("\u521B\u5EFA\u6A21\u677F\u5931\u8D25\uFF1A") + (m && m.message ? m.message : m));
        return;
      }
    }
    e.templatePath = a, await this.plugin.saveSettings(), new _(t("\u5DF2\u521B\u5EFA\u6A21\u677F\u5E76\u8BBE\u4E3A\u9ED8\u8BA4\uFF1A") + a), this.render();
  }
  async _createFirstNote(e) {
    let n = this.s, i = ze(e) + ".md", a = pe(n.mainFolder), s = pe(a + "/" + i);
    if (this.app.vault.getAbstractFileByPath(s)) {
      new _(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + i);
      return;
    }
    let o = n.linkField || "children", c = n.zkField || "main", p = n.statusField || "status", d = n.dateField || "date", r = /* @__PURE__ */ new Date(), l = r.getFullYear() + "-" + String(r.getMonth() + 1).padStart(2, "0") + "-" + String(r.getDate()).padStart(2, "0"), h = n.defaultStatus && (n.statusColors || {})[n.defaultStatus] !== void 0 ? '"' + n.defaultStatus + '"' : '""', g = `---
${o}: []
${c}: true
${p}: ${h}
${d}: "${l}"
---

`;
    try {
      await this.app.vault.create(s, g), new _(t("\u5DF2\u521B\u5EFA\u4E3B\u7B14\u8BB0\u300C") + e + "\u300D"), await this.rebuild(!0);
    } catch (k) {
      new _(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (k && k.message ? k.message : k));
    }
  }
  async openKeywordPicker() {
    let e = this.app.vault.getAbstractFileByPath(pe(this.s.indexFolder)), n = (e && e.children ? e.children : []).filter((i) => i instanceof je && i.extension === "md");
    if (!n.length) {
      new _("\u300C" + this.s.indexFolder + t("\u300D\u91CC\u6CA1\u6709\u7D22\u5F15\u6587\u4EF6"));
      return;
    }
    new Ie(
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
    let s = [...(await this.app.vault.read(e)).matchAll(/\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g)].map((l) => l[1].trim()), o = [], c = /* @__PURE__ */ new Set();
    for (let l of s) {
      let h = this.app.metadataCache.getFirstLinkpathDest(l, e.path);
      if (!h) continue;
      let g = this.notes.get(h.path);
      !g || c.has(g.file.path) || (c.add(g.file.path), o.push(g));
    }
    if (!o.length) {
      new _(t("\u8BE5\u7D22\u5F15\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u7B14\u8BB0\u94FE\u63A5")), this._kwFile = null, this.render();
      return;
    }
    let { virtualRoot: p, allSelectedPaths: d } = this._buildMultiRootTree(o, e.basename);
    this._selectedRootPaths = /* @__PURE__ */ new Set(d), this._multiRootPaths = d, this.currentRoot = p, this._indexTree(p), rt(p, this.depth), this._ensureSelectedVisible(p), this._restoreExpanded(), this._view = null;
    let r = this.contentEl.querySelector(".lkm-canvas");
    r && this._draw(r, tt(p, this.s), Object.assign({ fit: !0 }, n || {}));
  }
  _draw(e, n, i) {
    i = i || {}, e.empty();
    let a = this.s, { nodes: s, edges: o } = n;
    if (!s.length) return;
    let c = 1 / 0, p = 1 / 0, d = -1 / 0, r = -1 / 0, l = a.layoutMode !== "branch" && a.layoutDir === "v";
    for (let u of s)
      c = Math.min(c, u._x), p = Math.min(p, u._y - u._autoH / 2), d = Math.max(d, u._x + u._w), r = Math.max(r, u._y + u._autoH / 2 + (l ? 28 : 0));
    let h = 40, g = d - c + h * 2, k = r - p + h * 2, m = B("svg", { class: "lkm-svg" }), F = B("defs"), w = B("marker", { id: "lkm-arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" });
    w.appendChild(B("path", { d: "M0,0 L10,5 L0,10 z", class: "lkm-arrow-fill" })), F.appendChild(w), m.appendChild(F);
    let y = B("g", { class: "lkm-viewport" });
    if (m.appendChild(y), e.appendChild(m), a.layoutMode === "git") {
      let u = n.gvert, L = n.depthH, M = /* @__PURE__ */ x((D) => {
        let j = D.note.type ? (a.typeColors || {})[D.note.type] : null, A = Qe(a, D.note.status);
        return j || A || a.accent || "#3A6B8A";
      }, "dotColorOf"), E = /* @__PURE__ */ x((D) => D._x + D._w / 2, "cxOf");
      if (u) {
        let D = c - 30;
        y.appendChild(B("path", { d: `M${D},${p} L${D},${r}`, class: "lkm-git-axis" }));
        for (let j = 0; j <= n.maxDepth; j++) {
          let A = j * L;
          y.appendChild(B("line", { x1: D - 5, y1: A, x2: D + 5, y2: A, class: "lkm-git-axis" }));
          let O = B("text", { x: D - 10, y: A + 4, class: "lkm-git-tick", "text-anchor": "end" });
          O.textContent = "L" + (j + 1), y.appendChild(O);
        }
      } else {
        let D = p - 30, j = n.depthOffsets || [];
        y.appendChild(B("path", { d: `M${c},${D} L${d},${D}`, class: "lkm-git-axis" }));
        for (let A = 0; A <= n.maxDepth; A++) {
          let O = j[A] != null ? j[A] : A * L;
          y.appendChild(B("line", { x1: O, y1: D - 5, x2: O, y2: D + 5, class: "lkm-git-axis" }));
          let se = B("text", { x: O, y: D - 10, class: "lkm-git-tick", "text-anchor": "middle" });
          se.textContent = "L" + (A + 1), y.appendChild(se);
        }
      }
      let I = /* @__PURE__ */ new Map();
      for (let [D, j] of o)
        I.has(D) || I.set(D, []), I.get(D).push(j);
      for (let [D, j] of I) {
        let A = E(D), O = D._y;
        if (j.length <= 1) {
          let se = j[0];
          if (!se) continue;
          let q = E(se), Z = se._y, ee = M(se), ne;
          if (u)
            if (a.curve) {
              let we = (O + Z) / 2;
              ne = `M${A},${O + 8} C${A},${we} ${q},${we} ${q},${Z - 8}`;
            } else ne = `M${A},${O + 8} L${q},${Z - 8}`;
          else if (a.curve) {
            let we = (A + q) / 2;
            ne = `M${A + 8},${O} C${we},${O} ${we},${Z} ${q - 8},${Z}`;
          } else ne = `M${A + 8},${O} L${q - 8},${Z}`;
          y.appendChild(B("path", { d: ne, class: "lkm-git-lane", fill: "none", stroke: ee, "stroke-width": 1.8, "stroke-linecap": "round" }));
        } else {
          let se = u ? A : A + (E(j[0]) - A) * 0.5, q = u ? O + (j[0]._y - O) * 0.5 : O;
          for (let Z of j) {
            let ee = E(Z), ne = Z._y, we = M(Z), ye;
            if (u)
              if (a.curve) {
                let Ee = (O + q) / 2, ke = (q + ne) / 2;
                ye = `M${A},${O + 8} C${A},${Ee} ${A},${q} ${A},${q} C${A},${ke} ${ee},${ke} ${ee},${ne - 8}`;
              } else ye = `M${A},${O + 8} L${A},${q} L${ee},${ne - 8}`;
            else if (a.curve) {
              let Ee = (A + se) / 2, ke = (se + ee) / 2;
              ye = `M${A + 8},${O} C${Ee},${O} ${se},${O} ${se},${O} C${ke},${O} ${ke},${ne} ${ee - 8},${ne}`;
            } else ye = `M${A + 8},${O} L${se},${O} L${ee - 8},${ne}`;
            y.appendChild(B("path", { d: ye, class: "lkm-git-fork", fill: "none", stroke: we, "stroke-width": 1.5, "stroke-linecap": "round", "stroke-linejoin": "round" }));
          }
        }
      }
      for (let D of s) {
        if ((D.expanded ? D.children : []).length) continue;
        let A = E(D), O = D._y, se = M(D);
        if (u) {
          let q = B("line", { x1: A, y1: O + 8, x2: A, y2: O + 26, class: "lkm-git-fade" });
          q.setAttribute("stroke", se), y.appendChild(q);
        } else {
          let q = B("line", { x1: A + 8, y1: O, x2: A + 26, y2: O, class: "lkm-git-fade" });
          q.setAttribute("stroke", se), y.appendChild(q);
        }
      }
      let G = /* @__PURE__ */ new Map();
      for (let D of s) D.note.file && G.set(D.note.file.path, D);
      let U = /* @__PURE__ */ x((D, j) => {
        let A = E(D), O = D._y, se = E(j), q = j._y, Z = se - A, ee = q - O, ne = Math.hypot(Z, ee) || 1, we = se - Z / ne * 14, ye = q - ee / ne * 14, Ee;
        if (u) {
          let ke = (A + se) / 2, Xe = (O + q) / 2;
          Ee = `M${A},${O} Q${ke},${Xe - 40} ${we},${ye}`;
        } else {
          let ke = (A + se) / 2, Xe = (O + q) / 2;
          Ee = `M${A},${O} Q${ke - 10},${Xe} ${we},${ye}`;
        }
        y.appendChild(B("path", { d: Ee, class: "lkm-git-jump", "marker-end": "url(#lkm-arrow)" }));
      }, "drawJump");
      for (let D of s) {
        if (!D.note.file || D.isAlias) continue;
        let j = D.parent && D.parent.note.file ? D.parent.note.file.path : null;
        for (let A of D.note.parentLinks) {
          let O = this.app.metadataCache.getFirstLinkpathDest(A, D.note.file.path);
          if (!O || O.path === j) continue;
          let se = G.get(O.path);
          !se || se === D || U(D, se);
        }
      }
      let R = /* @__PURE__ */ new Map();
      for (let D of s) D.note.file && (R.has(D.note.file.path) || R.set(D.note.file.path, []), R.get(D.note.file.path).push(D));
      if (a.showDupLine) for (let [D, j] of R) {
        if (j.length < 2) continue;
        let A = j.find((O) => !O.isAlias) || j[0];
        for (let O of j) O !== A && U(O, A);
      }
    } else if (a.layoutMode === "branch") {
      let u = /* @__PURE__ */ new Map();
      for (let [L, M] of o)
        u.has(L) || u.set(L, []), u.get(L).push(M);
      for (let [L, M] of u) {
        let E = L._x + L._w, I = L._y;
        if (M.length <= 1) {
          let G = M[0];
          if (!G) continue;
          let U = G._x, R = G._y, D = (E + U) / 2, j = a.curve ? `M${E},${I} C${D},${I} ${D},${R} ${U},${R}` : `M${E},${I} L${U},${R}`;
          y.appendChild(B("path", { d: j, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
        } else {
          let G = E + (M[0]._x - E) / 2;
          y.appendChild(B("path", { d: `M${E},${I} L${G},${I}`, class: "lkm-edge" }));
          let U = 1 / 0, R = -1 / 0;
          for (let D of M)
            U = Math.min(U, D._y), R = Math.max(R, D._y);
          y.appendChild(B("path", { d: `M${G},${U} L${G},${R}`, class: "lkm-edge" }));
          for (let D of M)
            y.appendChild(B("path", { d: `M${G},${D._y} L${D._x},${D._y}`, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
        }
      }
      if (a.showDupLine) {
        let L = /* @__PURE__ */ new Map();
        for (let M of s) M.note.file && (L.has(M.note.file.path) || L.set(M.note.file.path, []), L.get(M.note.file.path).push(M));
        for (let [M, E] of L) {
          if (E.length < 2) continue;
          let I = E.find((G) => !G.isAlias) || E[0];
          for (let G of E) {
            if (G === I) continue;
            let U = I._x + I._w / 2 - (G._x + G._w / 2), R = I._y - G._y, D, j, A, O;
            Math.abs(U) > Math.abs(R) ? U > 0 ? (D = G._x + G._w, j = G._y, A = I._x, O = I._y) : (D = G._x, j = G._y, A = I._x + I._w, O = I._y) : R > 0 ? (D = G._x + G._w / 2, j = G._y + G._autoH / 2, A = I._x + I._w / 2, O = I._y - I._autoH / 2) : (D = G._x + G._w / 2, j = G._y - G._autoH / 2, A = I._x + I._w / 2, O = I._y + I._autoH / 2);
            let se = a.curve ? `M${D},${j} C${(D + A) / 2},${j} ${(D + A) / 2},${O} ${A},${O}` : `M${D},${j} L${A},${O}`;
            y.appendChild(B("path", { d: se, class: "lkm-edge", "stroke-dasharray": "4 3", opacity: 0.5, "marker-end": "url(#lkm-arrow)" }));
          }
        }
      }
    } else {
      for (let [L, M] of o) {
        let E, I, G, U, R, D;
        if (a.layoutDir === "v") {
          E = L._x + L._w / 2, I = L._y + L._autoH / 2, G = M._x + M._w / 2, U = M._y - M._autoH / 2, D = (I + U) / 2;
          let j = a.curve ? `M${E},${I} C${E},${D} ${G},${D} ${G},${U}` : `M${E},${I} L${G},${U}`;
          y.appendChild(B("path", { d: j, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
        } else {
          E = L._x + L._w, I = L._y, G = M._x, U = M._y, R = (E + G) / 2;
          let j = a.curve ? `M${E},${I} C${R},${I} ${R},${U} ${G},${U}` : `M${E},${I} L${G},${U}`;
          y.appendChild(B("path", { d: j, class: "lkm-edge", "marker-end": "url(#lkm-arrow)" }));
        }
      }
      let u = /* @__PURE__ */ new Map();
      for (let L of s) L.note.file && (u.has(L.note.file.path) || u.set(L.note.file.path, []), u.get(L.note.file.path).push(L));
      if (a.showDupLine) for (let [L, M] of u) {
        if (M.length < 2) continue;
        let E = M.find((I) => !I.isAlias) || M[0];
        for (let I of M) {
          if (I === E) continue;
          let G = E._x + E._w / 2 - (I._x + I._w / 2), U = E._y - I._y, R, D, j, A;
          Math.abs(G) > Math.abs(U) ? G > 0 ? (R = I._x + I._w, D = I._y, j = E._x, A = E._y) : (R = I._x, D = I._y, j = E._x + E._w, A = E._y) : U > 0 ? (R = I._x + I._w / 2, D = I._y + I._autoH / 2, j = E._x + E._w / 2, A = E._y - E._autoH / 2) : (R = I._x + I._w / 2, D = I._y - I._autoH / 2, j = E._x + E._w / 2, A = E._y + E._autoH / 2);
          let O = a.curve ? `M${R},${D} C${(R + j) / 2},${D} ${(R + j) / 2},${A} ${j},${A}` : `M${R},${D} L${j},${A}`;
          y.appendChild(B("path", { d: O, class: "lkm-edge", "stroke-dasharray": "4 3", opacity: 0.5, "marker-end": "url(#lkm-arrow)" }));
        }
      }
    }
    let S = /* @__PURE__ */ x((u) => this._draw(e, tt(this.currentRoot, a), { anchorKey: u }), "redraw"), f = null, T = { before: t("\u2191 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u524D"), after: t("\u2193 \u63D2\u5165\u5230\u540C\u7EA7\u4E4B\u540E"), child: t("\u2192 \u4F5C\u4E3A\u5B50\u8282\u70B9") }, C = /* @__PURE__ */ x((u, L) => {
      if (!L.note.file) return;
      this._hidePreview(), f = { node: L, sx: u.clientX, sy: u.clientY, moved: !1, target: null, zone: "child" };
      let M = document.createElement("div");
      M.className = "lkm-drag-hint", M.style.display = "none", document.body.appendChild(M);
      let E = /* @__PURE__ */ x((R) => {
        if (!f) return;
        let D = R.clientX - f.sx, j = R.clientY - f.sy;
        if (!f.moved && Math.hypot(D, j) < 6) return;
        f.moved = !0, m.classList.add("lkm-dragging");
        let A = e.getBoundingClientRect(), O = (R.clientX - A.left - V) / P, se = (R.clientY - A.top - Y) / P, q = null, Z = "child";
        for (let ee of s)
          if (!(ee.key === L.key || !ee.note.file) && O >= ee._x && O <= ee._x + ee._w && se >= ee._y - ee._autoH / 2 && se <= ee._y + ee._autoH / 2) {
            if (q = ee, a.layoutMode !== "branch" && a.layoutDir === "v") {
              let ne = (O - ee._x) / ee._w;
              Z = ne < 0.3 ? "before" : ne > 0.7 ? "after" : "child";
            } else {
              let ne = (se - (ee._y - ee._autoH / 2)) / ee._autoH;
              Z = ne < 0.3 ? "before" : ne > 0.7 ? "after" : "child";
            }
            break;
          }
        (q !== f.target || Z !== f.zone) && (f.target && f.target._el && f.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), f.target = q, f.zone = Z, q && q._el && (q._el.classList.add("lkm-drop-target"), Z === "before" && q._el.classList.add("lkm-drop-before"), Z === "after" && q._el.classList.add("lkm-drop-after"))), M.style.display = q ? "block" : "none", q && (M.textContent = T[Z], M.style.left = R.clientX + 16 + "px", M.style.top = R.clientY + 16 + "px");
      }, "onMove"), I = /* @__PURE__ */ x(() => {
        window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", I), window.removeEventListener("touchmove", G), window.removeEventListener("touchend", U), m.classList.remove("lkm-dragging"), M.remove();
        let R = f;
        f = null, R && (R.target && R.target._el && R.target._el.classList.remove("lkm-drop-target", "lkm-drop-before", "lkm-drop-after"), R.moved && R.target && (R.zone === "child" ? this._moveNode(R.node, R.target.note.file.path) : R.node.parent && R.target.parent && R.node.parent.note.file && R.target.parent.note.file && R.node.parent.note.file.path === R.target.parent.note.file.path ? this._reorderSiblings(R.node, R.target.note.file.path, R.zone === "after") : this._moveAndReorder(R.node, R.target, R.zone === "after")));
      }, "onUp"), G = /* @__PURE__ */ x((R) => {
        R.touches.length && E({ clientX: R.touches[0].clientX, clientY: R.touches[0].clientY });
      }, "onTouchMove2"), U = /* @__PURE__ */ x(() => I(), "onTouchEnd2");
      window.addEventListener("mousemove", E), window.addEventListener("mouseup", I), window.addEventListener("touchmove", G, { passive: !1 }), window.addEventListener("touchend", U);
    }, "startNodeDrag"), N = /* @__PURE__ */ x((u, L) => {
      if (!L.note.file) return;
      u.preventDefault(), u.stopPropagation(), $ = !0;
      let M = B("path", { class: "lkm-wire" });
      y.appendChild(M);
      let E = a.layoutMode !== "branch" && a.layoutDir === "v", I = E ? L._x + L._w / 2 : L._x + L._w, G = E ? L._y + L._autoH / 2 : L._y, U = null, R = /* @__PURE__ */ x((q, Z) => {
        let ee = e.getBoundingClientRect();
        return { x: (q - ee.left - V) / P, y: (Z - ee.top - Y) / P };
      }, "local"), D = /* @__PURE__ */ x((q, Z) => {
        let ee = (I + q) / 2;
        M.setAttribute("d", `M${I},${G} C${ee},${G} ${ee},${Z} ${q},${Z}`);
      }, "setWire");
      D(I, G);
      let j = /* @__PURE__ */ x((q) => {
        let Z = R(q.clientX, q.clientY);
        D(Z.x, Z.y);
        let ee = null;
        for (let ne of s)
          if (!(!ne.note.file || ne.key === L.key) && Z.x >= ne._x && Z.x <= ne._x + ne._w && Z.y >= ne._y - ne._autoH / 2 && Z.y <= ne._y + ne._autoH / 2) {
            ee = ne;
            break;
          }
        ee !== U && (U && U._el && U._el.classList.remove("lkm-wire-target"), U = ee, U && U._el && U._el.classList.add("lkm-wire-target"));
      }, "onMove"), A = /* @__PURE__ */ x(async () => {
        $ = !1, window.removeEventListener("mousemove", j), window.removeEventListener("mouseup", A), window.removeEventListener("touchmove", O), window.removeEventListener("touchend", se), M.remove(), U && U._el && U._el.classList.remove("lkm-wire-target"), U && await this._addRelation(L, U.note);
      }, "onUp"), O = /* @__PURE__ */ x((q) => {
        q.preventDefault();
        let Z = q.touches[0];
        j({ clientX: Z.clientX, clientY: Z.clientY });
      }, "onTouchMove"), se = /* @__PURE__ */ x(() => A(), "onTouchEnd");
      window.addEventListener("mousemove", j), window.addEventListener("mouseup", A), window.addEventListener("touchmove", O, { passive: !1 }), window.addEventListener("touchend", se);
    }, "startWire");
    for (let u of s) {
      if (a.layoutMode === "git") {
        let X = u._x + u._w / 2, te = u._y, ue = u.note.type ? (a.typeColors || {})[u.note.type] : null, Fe = Qe(a, u.note.status), _e = ue || a.accent || "#3A6B8A", $e = Fe || "#ffffff", oe = B("g", { class: "lkm-git-node" + (u.note.zk ? " lkm-main" : "") + (u.isAlias ? " lkm-multi" : "") });
        u.note.zk && oe.appendChild(B("circle", { cx: X, cy: te, r: 15, fill: a.mainColor || "#3A6B8A", opacity: 0.18 })), oe.appendChild(B("circle", { cx: X, cy: te, r: 12, fill: _e, opacity: 0.14 }));
        let Oe = B("circle", { cx: X, cy: te, r: 8, fill: _e, stroke: $e, "stroke-width": 2.5 });
        u.isAlias && Oe.setAttribute("stroke-dasharray", "3 2"), oe.appendChild(Oe);
        let Te = n.gvert, xe = B("text", { class: "lkm-git-label" });
        if (xe.textContent = u._shown || u.note.title, Te ? (xe.setAttribute("x", X + 18), xe.setAttribute("y", te), xe.setAttribute("dominant-baseline", "central")) : (xe.setAttribute("x", X), xe.setAttribute("y", te - 18), xe.setAttribute("text-anchor", "middle")), oe.appendChild(xe), u.children.length) {
          let be = Te ? X : X + 16, Ze = Te ? te + 18 : te, Ue = B("circle", { cx: be, cy: Ze, r: 14, class: "lkm-hit" });
          Ue.addEventListener("click", (Ht) => {
            Ht.stopPropagation(), u.expanded = !u.expanded, this._expandedMem.set(u.note.file ? u.note.file.path : u.key, u.expanded), S(u.key);
          }), oe.appendChild(Ue);
          let qe = B("text", { x: be, y: Ze + 4, class: "lkm-git-sign", "text-anchor": "middle" });
          qe.textContent = u.expanded ? "\u2212" : "+", oe.appendChild(qe);
        }
        u._el = oe, this._batchMode && this._selected.has(u.key) && oe.classList.add("lkm-selected"), this._selKey === u.key && oe.classList.add("lkm-sel");
        let ut = 0;
        oe.addEventListener("click", (be) => {
          if (this._batchMode) {
            be.stopPropagation(), this._toggleSelect(u.key);
            return;
          }
          let Ze = Date.now();
          if (Ze - ut < 350 && u.note.file) {
            ut = 0, this.app.workspace.getLeaf(!0).openFile(u.note.file);
            return;
          }
          ut = Ze;
          let Ue = this._selKey;
          if (this._selKey = u.key, Ue && Ue !== u.key) {
            let qe = this._nodeIndex && this._nodeIndex.get(Ue);
            qe && qe._el && qe._el.classList.remove("lkm-sel");
          }
          oe.classList.add("lkm-sel");
        }), oe.addEventListener("contextmenu", (be) => {
          be.preventDefault(), be.stopPropagation(), !this._batchMode && (this._selKey = u.key, oe.classList.add("lkm-sel"), this._showNodeMenu(u, be));
        });
        let Ye = null;
        oe.addEventListener("mouseenter", (be) => {
          f || (Ye && clearTimeout(Ye), Ye = setTimeout(() => {
            f || (Ye = null, this._showPreview(u, be));
          }, 1e3));
        }), oe.addEventListener("mousemove", (be) => {
          this._previewEl && this._positionPreview(be);
        }), oe.addEventListener("mouseleave", () => {
          Ye && (clearTimeout(Ye), Ye = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
            this._hidePreview(), this._hideTimer = null;
          }, 200);
        }), y.appendChild(oe);
        continue;
      }
      let L = !u.note.file, M = null, E = B("g", {
        class: "lkm-node" + (u.note.zk ? " lkm-main" : "") + (u.isAlias ? " lkm-multi" : "") + (u.note.status ? " lkm-has-status" : "") + (u.note.status === "\u5DF2\u5F52\u6863" ? " lkm-archived" : ""),
        transform: `translate(${u._x},${u._y - u._autoH / 2})`
      }), I = B("rect", { width: u._w, height: u._autoH, rx: 12, ry: 12, class: "lkm-card" + (u.note.file && u.note.file.basename.endsWith(".excalidraw") ? " lkm-excalidraw" : "") }), G = u.note.type ? (a.typeColors || {})[u.note.type] : null, U = Qe(a, u.note.status);
      G && I.style.setProperty("--lkm-card-stroke", G), E.appendChild(I);
      let R = B("g", { class: "lkm-status-dots" }), D = 6, j = /* @__PURE__ */ x((X, te) => {
        let ue = B("circle", { cx: 10, cy: D, r: 4, class: X });
        R.appendChild(ue);
        let Fe = B("circle", { cx: 10, cy: D, r: 7, class: "lkm-dot-hit" }), _e = B("title");
        return _e.textContent = te, Fe.appendChild(_e), R.appendChild(Fe), D += 10, ue;
      }, "mkDot");
      if (u.note.zk && j("lkm-dot-zk", t("\u4E3B\u7B14\u8BB0\uFF1A\u8BE5\u7B14\u8BB0 main: true\uFF0C\u662F\u5BFC\u56FE\u7684\u4E3B\u5165\u53E3")), u.note.status) {
        let X = j("lkm-dot-status", me(u.note.status) + t("\uFF1Astatus: ") + u.note.status);
        U && (X.style.fill = U);
      }
      u.isAlias && j("lkm-dot-multi", t("\u91CD\u590D\u8282\u70B9\uFF1A\u8BE5\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\uFF08\u88AB\u989D\u5916\u5173\u8054\u5F15\u5165\u7684\u6302\u70B9\uFF09")), D > 9 && E.appendChild(R);
      let A = a.showCreated && !L && u.note.date ? u.note.date : "", O = a.showType && !L && u.note.type ? ge(u.note.type) : "", se = a.showChildCount && !L && u.children.length ? t("\u5B50 ") + u.children.length : "", q = a.showWordCount && !L && u.note.file ? t("\u5B57 ") + Math.max(1, Math.round((u.note.file.stat.size || 0) / 3)) : "", Z = a.nodeHeight === 0, ee = a.showDesc && !L && u.note.desc ? Z ? le(u.note.desc, 40) : wt(u.note.desc, Math.max(20, Math.min(u._w - 32, 140)), 11) : "", ne = [O, se, q, A].filter(Boolean).join(" \xB7 "), we = !!ne, ye = !!ee, Ee = Z && ye ? u._descLines || [ee] : ye ? [ee] : [], ke;
      Z ? ke = 18 : ye && we ? ke = 14 : ye || we ? ke = a.nodeHeight / 2 - 2 : ke = a.nodeHeight / 2 + 5;
      let Xe = B("text", { x: 16, y: ke, class: "lkm-title" });
      if (Xe.textContent = u._shown || u.note.title, E.appendChild(Xe), Ee.length) {
        let X = Z ? 32 : we ? 28 : a.nodeHeight / 2 + 8;
        for (let te of Ee) {
          let ue = B("text", { x: 16, y: X, class: "lkm-sub lkm-desc" });
          ue.textContent = te, E.appendChild(ue), X += 15;
        }
      }
      if (we) {
        let X = Z ? u._autoH - 6 : a.nodeHeight - 9, te = B("text", { x: 16, y: X, class: "lkm-sub" });
        te.textContent = le(ne, 50), E.appendChild(te);
      }
      let Pe = u._autoH / 2, pt = window.innerWidth < 600, Re = pt ? 12 : 10, it = /* @__PURE__ */ x((X, te) => {
        let ue = B("title");
        ue.textContent = te, X.appendChild(ue);
      }, "addTip"), kt = a.layoutMode !== "branch" && a.layoutDir === "v";
      if (u.children.length) {
        let X = B("g", { class: "lkm-expand" });
        it(X, u.expanded ? t("\u6298\u53E0\u5B50\u8282\u70B9") : t("\u5C55\u5F00\u5B50\u8282\u70B9"));
        let te = kt ? u._w / 2 : u._w + 14, ue = kt ? u._autoH + 14 : Pe;
        X.appendChild(B("circle", { cx: te, cy: ue, r: Re, class: "lkm-dot" }));
        let Fe = B("text", { x: te, y: ue + 5, class: "lkm-sign", "text-anchor": "middle" });
        Fe.textContent = u.expanded ? "\u2212" : "+", X.appendChild(Fe);
        let _e = B("circle", { cx: te, cy: ue, r: Re + 5, class: "lkm-hit" });
        _e.addEventListener("click", ($e) => {
          $e.stopPropagation(), u.expanded = !u.expanded, this._expandedMem.set(u.note.file ? u.note.file.path : u.key, u.expanded), S(u.key);
        }), _e.addEventListener("mouseenter", () => {
          M && (clearTimeout(M), M = null);
        }), X.appendChild(_e), E.appendChild(X);
      }
      if (u.note.file) {
        let X = pt ? 26 : 24, te = u._w - (pt ? 20 : 18), ue = B("g", { class: "lkm-connect" });
        it(ue, t("\u62D6\u52A8\u8FDE\u7EBF\uFF1A\u5EFA\u7ACB\u989D\u5916\u5173\u8054\uFF08\u76EE\u6807\u6210\u4E3A\u672C\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u539F\u5173\u7CFB\u4FDD\u7559\uFF09"));
        let Fe = te, _e = Pe;
        ue.appendChild(B("circle", { cx: Fe, cy: _e, r: Re, class: "lkm-connect-bg" })), ue.appendChild(B("circle", { cx: Fe, cy: _e, r: 2.6, class: "lkm-connect-dot" }));
        let $e = B("circle", { cx: Fe, cy: _e, r: Re + 5, class: "lkm-hit" });
        if ($e.addEventListener("mousedown", (oe) => {
          this._batchMode || N(oe, u);
        }), $e.addEventListener("mouseenter", () => {
          M && (clearTimeout(M), M = null);
        }), $e.addEventListener("touchstart", (oe) => {
          this._batchMode || N(oe, u);
        }, { passive: !1 }), ue.appendChild($e), E.appendChild(ue), a.showOpenIcon !== !1) {
          te -= X;
          let oe = B("g", { class: "lkm-open" });
          it(oe, t("\u6253\u5F00\u7B14\u8BB0")), oe.appendChild(B("circle", { cx: te, cy: Pe, r: Re, class: "lkm-open-bg" }));
          let Oe = B("text", { x: te, y: Pe + 4, class: "lkm-open-sign", "text-anchor": "middle", transform: "rotate(90 " + te + " " + Pe + ")" });
          Oe.textContent = "\u270E", oe.appendChild(Oe);
          let Te = B("circle", { cx: te, cy: Pe, r: Re + 3, class: "lkm-hit" });
          Te.addEventListener("click", (xe) => {
            xe.stopPropagation(), this.app.workspace.getLeaf(!0).openFile(u.note.file);
          }), Te.addEventListener("mouseenter", () => {
            M && (clearTimeout(M), M = null);
          }), oe.appendChild(Te), E.appendChild(oe);
        }
        if (a.showAddIcon !== !1) {
          te -= X;
          let oe = B("g", { class: "lkm-add" });
          it(oe, t("\u65B0\u589E\u5B50\u8282\u70B9\uFF08\u81EA\u52A8\u5199\u5165\u94FE\u63A5\uFF09")), oe.appendChild(B("circle", { cx: te, cy: Pe, r: Re, class: "lkm-add-bg" }));
          let Oe = B("text", { x: te, y: Pe + 4, class: "lkm-add-sign", "text-anchor": "middle" });
          Oe.textContent = "\uFF0B", oe.appendChild(Oe);
          let Te = B("circle", { cx: te, cy: Pe, r: Re + 3, class: "lkm-hit" });
          Te.addEventListener("click", (xe) => {
            xe.stopPropagation(), this.createChild(u);
          }), Te.addEventListener("mouseenter", () => {
            M && (clearTimeout(M), M = null);
          }), oe.appendChild(Te), E.appendChild(oe);
        }
      }
      u._el = E, this._batchMode && this._selected.has(u.key) && E.classList.add("lkm-selected"), this._selKey === u.key && E.classList.add("lkm-sel"), this._selectedRootPaths && u.note.file && this._selectedRootPaths.has(u.note.file.path) && E.classList.add("lkm-selected-root"), E.addEventListener("click", (X) => {
        if (this._batchMode) {
          X.stopPropagation(), this._toggleSelect(u.key);
          return;
        }
        this._select(u.key);
      }), E.addEventListener("contextmenu", (X) => {
        X.preventDefault(), X.stopPropagation(), !this._batchMode && (this._select(u.key), this._showNodeMenu(u, X));
      }), E.addEventListener("dblclick", (X) => {
        X.stopPropagation(), M && (clearTimeout(M), M = null), this._hidePreview(), !this._batchMode && (u.note.file ? this.app.workspace.getLeaf(!0).openFile(u.note.file) : u.children.length && (u.expanded = !u.expanded, this._expandedMem.set(u.note.file ? u.note.file.path : u.key, u.expanded), S(u.key)));
      }), E.addEventListener("mousedown", (X) => {
        X.button !== 0 || this._batchMode || (X.stopPropagation(), C(X, u));
      }), E.addEventListener("touchstart", (X) => {
        if (this._batchMode || !u.note.file || X.touches.length !== 1) return;
        let te = X.touches[0], ue = { clientX: te.clientX, clientY: te.clientY, preventDefault: /* @__PURE__ */ x(() => X.preventDefault(), "preventDefault"), stopPropagation: /* @__PURE__ */ x(() => X.stopPropagation(), "stopPropagation") };
        C(ue, u);
      }, { passive: !1 });
      let Ve = null;
      E.addEventListener("touchstart", (X) => {
        if (this._batchMode || !u.note.file) return;
        let te = X.touches[0];
        Ve = setTimeout(() => {
          Ve = null, this._select(u.key), this._showNodeMenu(u, { clientX: te.clientX, clientY: te.clientY });
        }, 500);
      }, { passive: !0 }), E.addEventListener("touchmove", () => {
        Ve && (clearTimeout(Ve), Ve = null);
      }, { passive: !0 }), E.addEventListener("touchend", () => {
        Ve && (clearTimeout(Ve), Ve = null);
      }, { passive: !0 }), u.note.file && !L && (E.addEventListener("mouseenter", (X) => {
        f || (M && clearTimeout(M), M = setTimeout(() => {
          f || (M = null, this._showPreview(u, X));
        }, 1e3));
      }), E.addEventListener("mousemove", (X) => {
        this._previewEl && this._positionPreview(X);
      }), E.addEventListener("mouseleave", () => {
        M && (clearTimeout(M), M = null), this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
          this._hidePreview(), this._hideTimer = null;
        }, 200);
      })), y.appendChild(E);
    }
    this._applyFilter();
    let P = 1, V = 0, Y = 0;
    this._view && (P = this._view.k, V = this._view.tx, Y = this._view.ty);
    let ie = /* @__PURE__ */ x(() => y.setAttribute("transform", `translate(${V},${Y}) scale(${P})`), "apply"), $ = !1, J = /* @__PURE__ */ x(() => {
      let u = e.getBoundingClientRect(), L = u.width || e.clientWidth || 800, M = u.height || e.clientHeight || 600;
      if (P = Math.min(L / g, M / k, 1.4) || 1, l && s.length) {
        let E = s[0];
        V = L / 2 - (E._x + E._w / 2) * P, Y = h * P - p * P;
      } else
        V = (L - g * P) / 2 - (c - h) * P, Y = (M - k * P) / 2 - (p - h) * P;
      this._view = { k: P, tx: V, ty: Y }, ie();
    }, "fit");
    this._fit = J;
    let v = /* @__PURE__ */ x((u) => {
      let L = s.find((E) => E.note.file && E.note.file.path === u);
      if (!L) return;
      let M = e.getBoundingClientRect();
      !M.width || !M.height || (V = M.width / 2 - (L._x + L._w / 2) * P, Y = M.height / 2 - L._y * P, this._view = { k: P, tx: V, ty: Y }, ie());
    }, "centerOnPath");
    if (!this._view || i.fit) {
      if (requestAnimationFrame(() => {
        J(), i.centerPath && v(i.centerPath);
      }), !i.centerPath) {
        let u = 3, L = /* @__PURE__ */ x(() => {
          u-- > 0 && J();
        }, "onResize");
        window.addEventListener("resize", L);
        let M = setTimeout(() => window.removeEventListener("resize", L), 1500);
        this._cleanup.push(() => {
          window.removeEventListener("resize", L), clearTimeout(M);
        });
      }
    } else
      ie(), i.centerPath && v(i.centerPath);
    let z = /* @__PURE__ */ x((u) => {
      u.preventDefault();
      let L = m.getBoundingClientRect(), M = u.clientX - L.left, E = u.clientY - L.top, I = Math.max(0.2, Math.min(3, P * (u.deltaY < 0 ? 1.1 : 0.9)));
      V = M - (M - V) * (I / P), Y = E - (E - Y) * (I / P), P = I, this._view = { k: P, tx: V, ty: Y }, ie();
    }, "onWheel");
    m.addEventListener("wheel", z, { passive: !1 }), this._cleanup.push(() => m.removeEventListener("wheel", z));
    let K = !1, re = !1, he = 0, ce = 0, de = /* @__PURE__ */ x((u) => {
      K = !0, re = !1, he = u.clientX - V, ce = u.clientY - Y, m.classList.add("lkm-grabbing");
    }, "onDown"), Q = /* @__PURE__ */ x((u) => {
      K && (!re && Math.hypot(u.clientX - (he + V), u.clientY - (ce + Y)) > 3 && (re = !0), V = u.clientX - he, Y = u.clientY - ce, this._view = { k: P, tx: V, ty: Y }, ie());
    }, "onMove"), W = /* @__PURE__ */ x(() => {
      let u = K;
      if (K = !1, m.classList.remove("lkm-grabbing"), u && !re && !this._batchMode && this._selKey) {
        let L = this._nodeIndex && this._nodeIndex.get(this._selKey);
        L && L._el && L._el.classList.remove("lkm-sel"), this._selKey = null;
      }
      re && this._scheduleAutoSave();
    }, "onUp");
    m.addEventListener("mousedown", de), window.addEventListener("mousemove", Q), window.addEventListener("mouseup", W), this._cleanup.push(() => {
      m.removeEventListener("mousedown", de), window.removeEventListener("mousemove", Q), window.removeEventListener("mouseup", W);
    });
    let ae = null, fe = null, De = /* @__PURE__ */ x((u) => {
      if (!$)
        if (u.stopPropagation(), u.touches.length === 2) {
          u.preventDefault();
          let L = u.touches[0].clientX - u.touches[1].clientX, M = u.touches[0].clientY - u.touches[1].clientY;
          fe = { dist: Math.hypot(L, M), k: P }, ae = null;
        } else u.touches.length === 1 && (ae = { x: u.touches[0].clientX - V, y: u.touches[0].clientY - Y }, fe = null, m.classList.add("lkm-grabbing"));
    }, "onTouchStart"), Le = /* @__PURE__ */ x((u) => {
      if (!$)
        if (u.stopPropagation(), u.touches.length === 2 && fe) {
          u.preventDefault();
          let L = u.touches[0].clientX - u.touches[1].clientX, M = u.touches[0].clientY - u.touches[1].clientY, E = Math.max(0.2, Math.min(3, fe.k * (Math.hypot(L, M) / fe.dist))), I = m.getBoundingClientRect(), G = (u.touches[0].clientX + u.touches[1].clientX) / 2 - I.left, U = (u.touches[0].clientY + u.touches[1].clientY) / 2 - I.top;
          V = G - (G - V) * (E / P), Y = U - (U - Y) * (E / P), P = E, this._view = { k: P, tx: V, ty: Y }, ie();
        } else u.touches.length === 1 && ae ? (u.preventDefault(), V = u.touches[0].clientX - ae.x, Y = u.touches[0].clientY - ae.y, this._view = { k: P, tx: V, ty: Y }, ie()) : u.touches.length && u.preventDefault();
    }, "onTouchMove"), We = /* @__PURE__ */ x((u) => {
      $ || (u.stopPropagation(), u.touches.length === 0 && (ae = null, fe = null, m.classList.remove("lkm-grabbing"), this._scheduleAutoSave()));
    }, "onTouchEnd");
    m.addEventListener("touchstart", De, { passive: !1 }), m.addEventListener("touchmove", Le, { passive: !1 }), m.addEventListener("touchend", We), m.addEventListener("touchcancel", We), this._cleanup.push(() => {
      m.removeEventListener("touchstart", De), m.removeEventListener("touchmove", Le), m.removeEventListener("touchend", We), m.removeEventListener("touchcancel", We);
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
    let i = this.app.vault.getAbstractFileByPath(pe(n));
    return !i || !i.children ? [] : i.children.filter((a) => a instanceof je && a.extension === "md");
  }
  async _buildNewNoteBody(e, n, i, a, s, o, c, p) {
    let d = this.s, r = d.linkField || "children", l = d.backField || "parent", h = d.zkField || "main", g = d.statusField || "status", k = d.typeField || "type", m = d.dateField || "date", F = d.titleField || "title", w = /* @__PURE__ */ new Set([r, l, h, g, m, k, F]), y = "", S = [];
    if (a) {
      let C = this.app.vault.getAbstractFileByPath(pe(a));
      if (C instanceof je) {
        let N = gt(await this.app.vault.read(C));
        y = N.body;
        let P = new Map(N.fields);
        i || (P.get(k) != null ? i = nt(P.get(k)) : P.get("type") != null && (i = nt(P.get("type"))));
        let V = [];
        for (let [Y, ie] of [["zk", h], ["status", g], ["date", m], ["type", k], ["title", F]])
          Y !== ie && P.has(Y) && !P.has(ie) && V.push(Y + "\u2192" + ie);
        V.length && new _(t("\u6A21\u677F\u5B57\u6BB5\u4E0E\u914D\u7F6E\u4E0D\u4E00\u81F4\uFF1A") + V.join("\uFF0C") + t("\u3002\u5DF2\u7528\u914D\u7F6E\u5B57\u6BB5\u540D\u521B\u5EFA\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6A21\u677F\u3002"), 1e4);
        for (let [Y, ie] of N.fields)
          w.has(Y) || S.push([Y, ie]);
      }
    }
    let f = ["---"];
    f.push(r + ": []"), e && d.autoAddBackLink && f.push(l + ': "' + e + '"'), f.push(h + ": " + (s ? "true" : "false")), f.push(g + ": " + (o ? '"' + o + '"' : '""')), f.push(m + ": " + n), f.push(k + ': "' + (i || "") + '"'), f.push(F + ': "' + (c === "excalidraw" && p ? p : "") + '"');
    for (let [C, N] of S) f.push(C + ": " + (N ?? ""));
    if (f.push("---", ""), c === "excalidraw") {
      let C = f.lastIndexOf("---");
      return C > 0 && f.splice(C, 0, "excalidraw-plugin: parsed", "tags: [excalidraw]"), f.join(`
`) + `==\u26A0  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. \u26A0== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'


## Drawing
\`\`\`compressed-json
N4IgLgngDgpiBcIYA8DGBDANgSwCYCd0B3EAGhADcZ8BnbAewDsEAmcm+gV31TkQAswYKDXgB6MQHNsYfpwBGAOlT0AtmIBeNCtlQbs6RmPry6uA4wC0KDDgLFLUTJ2lH8MTDHQ0YNMWHRJMRZFFgBORQAGMiRPVRhGMBoEAG0AXXJ0KCgAZQCwPlBJfDwc7A0+Rk5MTHIdGCIAIXRUAGtirkZcAGF6THp8BBAAYgAzcYmQAF8poA===
\`\`\`
%%`;
    }
    return f.join(`
`) + (y || "");
  }
  async _rebuildUntilReady(e, n, i) {
    n = n || 30, i = i !== !1;
    for (let a = 0; a < n; a++) {
      if (await this.rebuild(!0), this.notes.has(e) && (!i || this._treePaths && this._treePaths.has(e)))
        return;
      await new Promise((s) => setTimeout(s, 150));
    }
    new _(t("\u5DF2\u521B\u5EFA\uFF0C\u4F46\u89C6\u56FE\u6682\u672A\u5237\u65B0\uFF0C\u8BF7\u70B9\u5237\u65B0"));
  }
  createChild(e) {
    if (!e || !e.note.file) {
      new _(t("\u8BE5\u8282\u70B9\u6CA1\u6709\u5BF9\u5E94\u6587\u4EF6\uFF0C\u65E0\u6CD5\u65B0\u589E\u5B50\u8282\u70B9"));
      return;
    }
    let n = this.s, i = Object.keys(n.typeColors || {}), a = i.includes(n.defaultType) ? n.defaultType : "", s = Object.keys(n.statusColors || {}), o = s.includes(n.defaultStatus) ? n.defaultStatus : "", c = [{ path: "", name: t("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let r of this._templateFiles()) c.push({ path: r.path, name: r.basename });
    let p = "", d = (n.templatePath || "").trim();
    if (d) {
      let r = c.find((l) => l.path === pe(d));
      r && (p = r.path);
    }
    new Ct(this.app, e.note.title, {
      types: i,
      defaultType: a,
      statuses: s,
      defaultStatus: o,
      templates: c,
      defaultTemplate: p,
      typeTemplates: n.typeTemplates || {},
      defaultFormat: n.defaultNoteFormat || "md",
      zkField: n.zkField || "main",
      onSubmit: /* @__PURE__ */ x(async (r, l, h, g, k, m) => {
        try {
          let F = m === "excalidraw" ? ".excalidraw.md" : ".md", w = ze(r) + F, y = pe(n.mainFolder), S = pe(y + "/" + w);
          if (this.app.vault.getAbstractFileByPath(S)) {
            new _(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + w);
            return;
          }
          let f = /* @__PURE__ */ new Date(), T = f.getFullYear() + "-" + String(f.getMonth() + 1).padStart(2, "0") + "-" + String(f.getDate()).padStart(2, "0"), C = await this._buildNewNoteBody(e.note.file.basename, T, l, h, g, k, m, r);
          await Je(this.app, e.note.file, n.linkField, ze(r) + (m === "excalidraw" ? ".excalidraw" : "")), await this.app.vault.create(S, C), new _(t("\u5DF2\u521B\u5EFA\u300C") + ze(r) + t("\u300D\u5E76\u5173\u8054\u5230\u300C") + le(e.note.title, 14) + "\u300D");
          let N = e;
          for (; N; )
            this._expandedMem.set(N.note.file ? N.note.file.path : N.key, !0), N = N.parent;
          await this._rebuildUntilReady(S);
        } catch (F) {
          new _(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (F && F.message ? F.message : F));
        }
      }, "onSubmit")
    }).open();
  }
  createStandaloneNote() {
    let e = this.s, n = Object.keys(e.typeColors || {}), i = n.includes(e.defaultType) ? e.defaultType : "", a = Object.keys(e.statusColors || {}), s = a.includes(e.defaultStatus) ? e.defaultStatus : "", o = [{ path: "", name: t("\uFF08\u65E0\u6A21\u677F\uFF09") }];
    for (let d of this._templateFiles()) o.push({ path: d.path, name: d.basename });
    let c = "", p = (e.templatePath || "").trim();
    if (p) {
      let d = o.find((r) => r.path === pe(p));
      d && (c = d.path);
    }
    new Ct(this.app, "", {
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
      onSubmit: /* @__PURE__ */ x(async (d, r, l, h, g, k) => {
        try {
          let m = k === "excalidraw" ? ".excalidraw.md" : ".md", F = ze(d) + m, w = pe(e.mainFolder), y = pe(w + "/" + F);
          if (this.app.vault.getAbstractFileByPath(y)) {
            new _(t("\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A") + F);
            return;
          }
          let S = /* @__PURE__ */ new Date(), f = S.getFullYear() + "-" + String(S.getMonth() + 1).padStart(2, "0") + "-" + String(S.getDate()).padStart(2, "0"), T = await this._buildNewNoteBody(null, f, r, l, h, g, k, d);
          await this.app.vault.create(y, T), new _(t("\u5DF2\u521B\u5EFA\u300C") + ze(d) + "\u300D"), await this._rebuildUntilReady(y, 30, !1), this._focusPath(y);
        } catch (m) {
          new _(t("\u521B\u5EFA\u5931\u8D25\uFF1A") + (m && m.message ? m.message : m));
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
          () => new _(t("\u5DF2\u590D\u5236\u7EDF\u8BA1\u6458\u8981")),
          () => new _(t("\u590D\u5236\u5931\u8D25"))
        );
      };
      let p = e.createDiv("lkm-dash");
      if (!o.total) {
        p.createDiv("lkm-dash-h").setText("\u300C" + n.mainFolder + t("\u300D\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u7B14\u8BB0\u3002"));
        return;
      }
      let d = p.createDiv("lkm-cards"), r = [
        { num: o.total, label: t("\u7B14\u8BB0\u603B\u6570"), icon: "files", color: "#6c8cff", filter: { kind: "all" } },
        { num: o.zk, label: t("\u4E3B\u7B14\u8BB0"), icon: "star", color: "#f2a65a", filter: { kind: "zk" } },
        { num: o.kw, label: t("\u5173\u952E\u8BCD\u7D22\u5F15"), icon: "tags", color: "#b07cff", filter: { kind: "kw" } },
        { num: o.done, label: t("\u5DF2\u5B8C\u6210"), icon: "check", color: "#3fa66a", filter: { kind: "status", value: "done" } },
        { num: o.orphan, label: t("\u672A\u5173\u8054"), icon: "unlink", color: "#4ba3e5", filter: { kind: "orphan" } },
        { num: o.todo, label: t("\u5F85\u529E"), icon: "list-checks", color: "#e5534b", filter: { kind: "status", value: "todo" } },
        { num: o.linkCount, label: t("\u94FE\u63A5\u603B\u6570"), icon: "link", color: "#6c8cff" },
        { num: o.deadLinks, label: t("\u5931\u6548\u94FE\u63A5"), icon: "alert-triangle", color: "#e5534b" }
      ];
      for (let $ of r) {
        let J = $.filter && this._isFilterActive($.filter), v = d.createDiv("lkm-card-stat lkm-card-click" + (J ? " is-active" : "")), z = v.createDiv("lkm-card-ico");
        z.style.background = "color-mix(in srgb, " + $.color + " 16%, transparent)", z.style.color = $.color;
        try {
          xt(z, $.icon);
        } catch {
        }
        v.createDiv("lkm-stat-num").setText(String($.num)), v.createDiv("lkm-stat-label").setText($.label + ($.filter && o.total ? " \xB7 " + Math.round($.num / o.total * 100) + "%" : "")), $.filter && (v.title = t("\u70B9\u51FB\u67E5\u770B\u300C") + $.label + t("\u300D\u5217\u8868"), v.addEventListener("click", () => this._toggleDashFilter($.filter)));
      }
      {
        let $ = p.createDiv("lkm-dash-two"), J = $.createDiv("lkm-dash-sec");
        J.createDiv("lkm-dash-h").setText(t("\u7C7B\u578B\u5206\u5E03"));
        let v = o.byTypeOrder.map((W) => ({ label: ge(W.name), value: W.count, color: W.color, filter: { kind: "type", value: W.name } }));
        o.noType && v.push({ label: t("\u672A\u6807\u6CE8"), value: o.noType, color: "var(--text-faint)", filter: { kind: "notype" } });
        let z = J.createDiv("lkm-donut-wrap");
        this._renderDonut(z, v, o.total);
        let K = z.createDiv("lkm-legend");
        for (let W of v) {
          let ae = K.createDiv("lkm-legend-row lkm-type-click" + (this._isFilterActive(W.filter) ? " is-active" : ""));
          ae.createSpan({ cls: "lkm-legend-dot" }).style.background = W.color, ae.createSpan({ cls: "lkm-legend-name", text: W.label }), ae.createSpan({ cls: "lkm-legend-num", text: String(W.value) }), ae.addEventListener("click", () => this._toggleDashFilter(W.filter));
        }
        let re = $.createDiv("lkm-dash-sec");
        re.createDiv("lkm-dash-h").setText(t("\u72B6\u6001\u5206\u5E03"));
        let he = re.createDiv("lkm-stackbar"), ce = o.byStatusOrder.map((W) => ({ label: me(W.name), value: W.count, color: W.color, filter: { kind: "status", value: W.name } }));
        o.noStatus && ce.push({ label: t("\u65E0\u72B6\u6001"), value: o.noStatus, color: "var(--text-faint)", filter: { kind: "nostatus" } });
        for (let W of ce) {
          if (!W.value) continue;
          let ae = he.createDiv("lkm-stackbar-seg");
          ae.style.width = Math.max(6, W.value / o.total * 100) + "%", ae.style.background = W.color, this._isFilterActive(W.filter) && ae.addClass("is-active"), ae.title = W.label + "\uFF1A" + W.value + t(" \u7BC7\uFF0C\u70B9\u51FB\u7B5B\u9009"), ae.addEventListener("click", () => this._toggleDashFilter(W.filter));
        }
        let de = re.createDiv("lkm-chips"), Q = /* @__PURE__ */ x((W, ae, fe, De) => {
          let Le = de.createDiv("lkm-chip lkm-type-click" + (this._isFilterActive(De) ? " is-active" : ""));
          Le.createSpan({ cls: "lkm-legend-dot" }).style.background = fe, Le.createSpan({ text: W + " " + ae }), Le.addEventListener("click", () => this._toggleDashFilter(De));
        }, "chip");
        for (let W of o.byStatusOrder) Q(me(W.name), W.count, W.color, { kind: "status", value: W.name });
        o.noStatus && Q(t("\u65E0\u72B6\u6001"), o.noStatus, "var(--text-faint)", { kind: "nostatus" }), Q(t("\u672A\u6807\u65E5\u671F"), o.noDate, "var(--text-faint)", { kind: "nodate" });
      }
      {
        let $ = p.createDiv("lkm-dash-sec");
        $.createDiv("lkm-dash-h").setText(t("\u6708\u5EA6\u521B\u5EFA \xB7 \u8FD112\u4E2A\u6708\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u5F53\u6708\u65B0\u589E\uFF09"));
        let J = $.createDiv("lkm-chart-body");
        this._renderBarChart(
          J,
          o.monthly.map((v) => ({ label: parseInt(v.key.slice(5, 7), 10) + t("\u6708"), value: v.count, filter: { kind: "month", value: v.key } })),
          { height: window.innerWidth < 600 ? 100 : 120, thinLabels: window.innerWidth < 600 }
        );
      }
      {
        let $ = p.createDiv("lkm-dash-sec");
        if ($.createDiv("lkm-dash-h").setText(t("\u6811\u6DF1\u5EA6\u5206\u5E03\uFF08\u70B9\u51FB\u67F1\u5B50\u7B5B\u9009\u8BE5\u5C42\u8282\u70B9\uFF09")), o.depthMax) {
          let J = $.createDiv("lkm-chart-body"), v = [];
          for (let z = 1; z <= o.depthMax; z++) v.push({ label: t("\u7B2C") + z + t("\u5C42"), value: o.depthCount.get(z) || 0, filter: { kind: "depth", value: String(z) } });
          this._renderBarChart(J, v, { height: window.innerWidth < 600 ? 100 : 120 });
        } else $.createDiv("lkm-heat-sum").setText(t("\u8FD8\u6CA1\u6709\u53EF\u7EDF\u8BA1\u7684\u5C42\u7EA7\u6570\u636E"));
      }
      let l = p.createDiv("lkm-dash-sec"), h = new Set([...o.heat.keys()].map(($) => $.slice(0, 4)));
      h.add(String((/* @__PURE__ */ new Date()).getFullYear()));
      let g = [...h].sort().reverse();
      this._dashHeatIdx = Math.min(this._dashHeatIdx || 0, g.length);
      let k = l.createDiv("lkm-heat-head");
      if (k.createDiv("lkm-dash-h").setText(t("\u521B\u5EFA\u70ED\u529B\u56FE \xB7 ") + (this._dashHeatIdx ? g[this._dashHeatIdx - 1] + t(" \u5E74") : t("\u8FD1\u4E00\u5E74")) + t("\uFF08\u6309 date \u5B57\u6BB5\uFF09")), this._dashHeatIdx || g.length > 1) {
        let $ = k.createDiv("lkm-heat-nav"), J = /* @__PURE__ */ x(() => {
          let K = this.contentEl.querySelector(".lkm-dash"), re = K ? K.scrollTop : 0;
          this.render();
          let he = this.contentEl.querySelector(".lkm-dash");
          he && (he.scrollTop = re);
        }, "rerender"), v = $.createEl("button", { cls: "lkm-step", text: "\u2039" });
        v.disabled = this._dashHeatIdx >= g.length;
        let z = $.createEl("button", { cls: "lkm-step", text: "\u203A" });
        z.disabled = this._dashHeatIdx <= 0, v.onclick = () => {
          this._dashHeatIdx++, J();
        }, z.onclick = () => {
          this._dashHeatIdx--, J();
        };
      }
      let m = 864e5, F = /* @__PURE__ */ new Date();
      F.setHours(0, 0, 0, 0);
      let w = (F.getDay() + 6) % 7, y = window.innerWidth < 600, S = y ? 10 : 12, f, T, C, N;
      if (this._dashHeatIdx) {
        let $ = parseInt(g[this._dashHeatIdx - 1], 10), J = new Date($, 0, 1), v = new Date($, 11, 31);
        f = new Date(J.getTime() - (J.getDay() + 6) % 7 * m), T = J, C = v, N = Math.round((v.getTime() + (6 - (v.getDay() + 6) % 7) * m - f.getTime()) / m / 7);
      } else {
        let $ = new Date(F.getTime() + (6 - w) * m);
        N = y ? 26 : 53, f = new Date($.getTime() - (N * 7 - 1) * m), T = f, C = F;
      }
      if (l.createDiv("lkm-heat-sum").setText(o.heat.size ? (() => {
        let $ = this._ds(T), J = this._ds(C), v = 0, z = 0, K = { date: "", count: 0 };
        for (let [re, he] of o.heat) re >= $ && re <= J && (v += he, z++, he > K.count && (K = { date: re, count: he }));
        return (z ? z + t(" \u5929\u6709\u521B\u5EFA \xB7 \u5171 ") + v + t(" \u7BC7") : t("\u8BE5\u65F6\u95F4\u6BB5\u6682\u65E0\u521B\u5EFA\u8BB0\u5F55")) + (K.count ? t(" \xB7 \u6700\u591A\u4E00\u5929 ") + K.count + t(" \u7BC7\uFF08") + K.date + "\uFF09" : "");
      })() : t("\u8FD8\u6CA1\u6709\u5E26 date \u5B57\u6BB5\u7684\u7B14\u8BB0")), o.heat.size) {
        let $ = l.createDiv("lkm-heat-scroll"), J = $.createDiv("lkm-heat-grid");
        J.style.gridTemplateColumns = "26px repeat(" + N + ", " + S + "px)", J.style.gridAutoRows = S + "px";
        let v = -1;
        for (let ce = 0; ce < N; ce++) {
          let de = new Date(f.getTime() + ce * 7 * m);
          if (de.getMonth() !== v) {
            v = de.getMonth();
            let Q = J.createDiv("lkm-heat-mon");
            Q.style.gridColumn = String(ce + 2), Q.style.gridRow = "1", Q.setText(de.getMonth() + 1 + t("\u6708"));
          }
        }
        [t("\u4E00"), t("\u4E09"), t("\u4E94")].forEach((ce, de) => {
          let Q = J.createDiv("lkm-heat-wd");
          Q.style.gridColumn = "1", Q.style.gridRow = String(de * 2 + 2), Q.setText(ce);
        });
        let z = this._ds(T), K = this._ds(C), re = this._ds(F), he = null;
        for (let ce = 0; ce < N; ce++)
          for (let de = 0; de < 7; de++) {
            let Q = new Date(f.getTime() + (ce * 7 + de) * m), W = J.createDiv("lkm-heat-cell");
            W.style.gridColumn = String(ce + 2), W.style.gridRow = String(de + 2);
            let ae = this._ds(Q);
            if (Q > F || ae < z || ae > K) {
              W.addClass("lkm-heat-off");
              continue;
            }
            let fe = o.heat.get(ae) || 0, De = fe === 0 ? 0 : fe === 1 ? 1 : fe <= 2 ? 2 : fe <= 4 ? 3 : 4;
            De && W.addClass("lkm-heat-l" + De), this._isFilterActive({ kind: "date", value: ae }) && W.addClass("is-active"), fe && W.addClass("lkm-heat-hit"), ae === re && (W.addClass("lkm-heat-today"), he = W), W.title = ae + "\uFF1A" + fe + t(" \u7BC7") + (ae === re ? t("\uFF08\u4ECA\u5929\uFF09") : ""), W.addEventListener("click", () => this._toggleDashFilter({ kind: "date", value: ae }));
          }
        he && !this._dashHeatIdx && requestAnimationFrame(() => {
          let ce = he.getBoundingClientRect(), de = $.getBoundingClientRect();
          ce.right > de.right - 20 && ($.scrollLeft += ce.right - de.right + 30);
        });
      }
      let P = p.createDiv("lkm-dash-two"), V = P.createDiv("lkm-dash-sec"), Y = this._dashFilters || [];
      if (Y.length) {
        V.addClass("lkm-filter-sec");
        let $ = this._sortDashItems(this._dashFilterItems(Y)), J = V.createDiv("lkm-filter-head");
        J.createSpan({ cls: "lkm-dash-h lkm-filter-title", text: this._dashFilterGroupLabel(Y) });
        let v = J.createSpan({ cls: "lkm-filter-count", text: "\uFF08" + $.length + "\uFF09" }), z = J.createEl("input", { cls: "lkm-filter-search", type: "text", attr: { placeholder: t("\u8FC7\u6EE4\u2026") } });
        z.value = this._dashSearch || "", z.addEventListener("focus", () => {
          if (!window.matchMedia("(hover: none)").matches) return;
          let Q = this.contentEl.querySelector(".lkm-dash"), W = this.contentEl.querySelector(".lkm-toolbar");
          if (!Q || !W) return;
          let ae = Q.scrollTop, fe = Q.style.flex, De = Q.style.height, Le = /* @__PURE__ */ x(() => {
            let We = W.getBoundingClientRect().bottom, u = window.visualViewport, M = (u ? u.height + u.offsetTop : window.innerHeight) - We;
            M > 60 && (Q.style.flex = "none", Q.style.height = M + "px"), Q.scrollTop = Math.max(0, J.offsetTop - 50);
          }, "doAdjust");
          setTimeout(Le, 300), setTimeout(Le, 500), z.addEventListener("blur", () => {
            Q.style.flex = fe, Q.style.height = De, Q.scrollTop = ae;
          }, { once: !0 });
        });
        let K = J.createEl("button", { cls: "lkm-btn", text: t("\u6392\u5E8F\uFF1A") + { date: t("\u65E5\u671F"), name: t("\u540D\u79F0") }[this._dashSort || "date"] });
        K.onclick = () => {
          this._dashSort = this._dashSort === "date" ? "name" : "date", this.render();
        };
        let re = J.createEl("button", { cls: "lkm-btn", text: t("\u6E05\u9664") });
        re.onclick = () => {
          this._dashFilters = [], this._dashSearch = "", this.render();
        }, $.length || V.createDiv("lkm-heat-sum").setText(t("\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7B14\u8BB0"));
        let he = V.createDiv("lkm-filter-list"), ce = [];
        for (let Q of $) {
          let W = this._dashRow(he, Q);
          ce.push({ el: W, text: (Q.title + " " + (Q.type || "")).toLowerCase() }), W.addEventListener("click", () => {
            Q.isIndex ? (this._kwFile = Q.file, this._multiRoot = !1, this._mode = "map", this.render()) : this.app.workspace.getLeaf(!0).openFile(Q.file);
          });
        }
        let de = /* @__PURE__ */ x(() => {
          let Q = (this._dashSearch || "").trim().toLowerCase(), W = 0;
          for (let ae of ce) {
            let fe = !Q || ae.text.includes(Q);
            ae.el.style.display = fe ? "" : "none", fe && W++;
          }
          v.setText("\uFF08" + (Q ? W + "/" : "") + $.length + "\uFF09");
        }, "applySearch");
        z.addEventListener("input", () => {
          this._dashSearch = z.value, de();
        }), de();
      } else {
        V.createDiv("lkm-dash-h").setText(t("\u5206\u652F\u5206\u5E03 \xB7 \u5B8C\u6210\u8FDB\u5EA6")), o.branches.length || V.createDiv("lkm-heat-sum").setText(t("\u8FD8\u6CA1\u6709 main: true \u7684\u4E3B\u7B14\u8BB0"));
        let $ = this._dashBranchAll && o.branches.length > 6, J = $ ? o.branches : o.branches.slice(0, 6), v = V.createDiv("lkm-filter-list lkm-branch-list"), z = o.branches[0] && o.branches[0].total || 1;
        for (let K of J) {
          let re = v.createDiv("lkm-branch-row");
          re.title = K.title + t("\uFF0C\u70B9\u51FB\u5728\u5BFC\u56FE\u4E2D\u6253\u5F00"), re.createSpan({ cls: "lkm-branch-name", text: le(K.title, 10) });
          let he = re.createDiv("lkm-type-bar").createDiv("lkm-branch-scaler");
          he.style.width = Math.max(3, Math.round(K.total / z * 100)) + "%";
          let ce = he.createDiv("lkm-branch-done");
          ce.style.width = (K.total ? Math.round(K.done / K.total * 100) : 0) + "%", re.createSpan({ cls: "lkm-type-num", text: K.done + "/" + K.total + " \xB7 " + Math.round(K.done / K.total * 100) + "%" }), re.addEventListener("click", () => {
            this.rootPath = K.path, this._view = null, this._kwFile = null, this._multiRoot = !1, this._mode = "map", this._expandedMem.clear(), this.render();
          });
        }
        if (o.branches.length > 6) {
          let K = V.createEl("button", { cls: "lkm-btn", text: $ ? t("\u6536\u8D77") : t("\u5C55\u5F00\u5168\u90E8 ") + o.branches.length + t(" \u4E2A\u5206\u652F") });
          K.onclick = () => {
            this._dashBranchAll = !this._dashBranchAll, this.render();
          };
        }
      }
      let ie = P.createDiv("lkm-dash-sec");
      ie.createDiv("lkm-dash-h").setText(t("\u6700\u8FD1\u521B\u5EFA"));
      for (let $ of o.recent)
        this._dashRow(ie, $).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile($.file));
      if (o.modified.length) {
        ie.createDiv("lkm-dash-h lkm-sec-gap").setText(t("\u6700\u8FD1\u4FEE\u6539"));
        for (let $ of o.modified)
          this._dashRow(ie, $).addEventListener("click", () => this.app.workspace.getLeaf(!0).openFile($.file));
      }
    } else
      this._renderTimelineDash(e);
  }
  _renderTimelineDash(e) {
    let i = [...dt(this.app, this.s).map.values()], a = e.createDiv({ cls: "lkm-tl-toolbar" }), s = a.createEl("input", { type: "text", cls: "lkm-tl-search", placeholder: t("\u641C\u7D22\u7B14\u8BB0\u6807\u9898\u2026") });
    s.value = this._tlSearch, s.addEventListener("input", () => {
      this._tlSearch = s.value.toLowerCase().trim(), this._renderTimelineBody(k, i);
    });
    let o = a.createEl("select", { cls: "lkm-tl-typesel" });
    o.createEl("option", { value: "", text: t("\u7C7B\u578B") });
    let c = [...new Set(i.map((m) => m.type).filter(Boolean))].sort();
    for (let m of c)
      o.createEl("option", { value: m, text: ge(m) });
    o.value = this._tlTypeFilter, o.addEventListener("change", () => {
      this._tlTypeFilter = o.value, this._renderTimelineBody(k, i);
    });
    let p = a.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [m, F] of [["all", t("\u65F6\u95F4")], ["day", t("\u4ECA\u65E5")], ["week", t("\u672C\u5468")], ["month", t("\u672C\u6708")], ["year", t("\u672C\u5E74")], ["pweek", t("\u8FD1\u4E00\u5468")], ["pmonth", t("\u8FD1\u4E00\u6708")], ["pyear", t("\u8FD1\u4E00\u5E74")]])
      p.createEl("option", { value: m, text: F });
    p.value = this._tlRange, p.addEventListener("change", () => {
      this._tlRange = p.value, this._renderTimelineBody(k, i);
    });
    let d = a.createEl("input", { type: "date", cls: "lkm-tl-datesel" });
    d.value = this._tlDateFilter, d.title = t("\u6309\u6307\u5B9A\u65E5\u671F\u7B5B\u9009"), d.addEventListener("change", () => {
      this._tlDateFilter = d.value, this._renderTimelineBody(k, i);
    });
    let r = a.createEl("select", { cls: "lkm-tl-typesel" });
    for (let [m, F] of [["all", t("\u6027\u8D28")], ["zk", t("\u4E3B\u7B14\u8BB0")], ["normal", t("\u666E\u901A")]])
      r.createEl("option", { value: m, text: F });
    r.value = this._tlZkFilter, r.addEventListener("change", () => {
      this._tlZkFilter = r.value, this._renderTimelineBody(k, i);
    });
    let l = a.createEl("select", { cls: "lkm-tl-typesel" });
    l.createEl("option", { value: "all", text: t("\u72B6\u6001") }), l.createEl("option", { value: "nostatus", text: t("\u65E0\u72B6\u6001") });
    for (let m of Object.keys(this.s.statusColors || {}))
      l.createEl("option", { value: m, text: me(m) });
    l.value = this._tlStatusFilter, l.addEventListener("change", () => {
      this._tlStatusFilter = l.value, this._renderTimelineBody(k, i);
    });
    let h = a.createEl("button", { cls: "lkm-btn lkm-tl-sortbtn", text: this._tlSort === "desc" ? t("\u65B0\u2192\u65E7") : t("\u65E7\u2192\u65B0") });
    h.addEventListener("click", () => {
      this._tlSort = this._tlSort === "desc" ? "asc" : "desc", h.textContent = this._tlSort === "desc" ? t("\u65B0\u2192\u65E7") : t("\u65E7\u2192\u65B0"), this._renderTimelineBody(k, i);
    });
    let g = a.createEl("button", { cls: "lkm-btn", text: t("\u6E05\u7A7A") });
    g.title = t("\u6E05\u7A7A\u6240\u6709\u7B5B\u9009\u6761\u4EF6"), g.addEventListener("click", () => {
      this._tlSearch = "", this._tlTypeFilter = "", this._tlRange = "pweek", this._tlZkFilter = "all", this._tlStatusFilter = "all", this._tlDateFilter = "", this.render();
    });
    let k = e.createDiv({ cls: "lkm-tl-body" });
    this._renderTimelineBody(k, i);
  }
  _renderTimelineBody(e, n) {
    e.empty();
    let i = n;
    if (this._tlTypeFilter && (i = i.filter((d) => d.type === this._tlTypeFilter)), this._tlSearch && (i = i.filter((d) => d.title.toLowerCase().includes(this._tlSearch))), this._tlZkFilter === "zk" ? i = i.filter((d) => d.zk) : this._tlZkFilter === "normal" && (i = i.filter((d) => !d.zk)), this._tlStatusFilter === "nostatus" ? i = i.filter((d) => !d.status) : this._tlStatusFilter && this._tlStatusFilter !== "all" && (i = i.filter((d) => d.status === this._tlStatusFilter)), this._tlDateFilter)
      i = i.filter((d) => d.ctime && d.ctime.slice(0, 10) === this._tlDateFilter);
    else if (this._tlRange !== "all") {
      let d = /* @__PURE__ */ new Date(), r = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"), l = /* @__PURE__ */ new Date(r), h = null;
      if (this._tlRange === "day" ? h = l : this._tlRange === "week" || this._tlRange === "pweek" ? h = new Date(l.getTime() - 6 * 864e5) : this._tlRange === "month" || this._tlRange === "pmonth" ? h = new Date(l.getTime() - 29 * 864e5) : (this._tlRange === "year" || this._tlRange === "pyear") && (h = new Date(l.getTime() - 364 * 864e5)), h) {
        let g = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0");
        i = i.filter((k) => {
          if (!k.ctime) return !1;
          let m = k.ctime.slice(0, 10);
          return m >= g && m <= r;
        });
      }
    }
    let a = i.filter((d) => d.ctime), s = i.filter((d) => !d.ctime);
    a.sort((d, r) => this._tlSort === "desc" ? String(r.ctime).localeCompare(String(d.ctime)) : String(d.ctime).localeCompare(String(r.ctime)));
    let o = [], c = null, p = null;
    for (let d of a) {
      let r = d.ctime.slice(0, 10);
      r !== c && (c = r, p = { key: r, items: [] }, o.push(p)), p.items.push(d);
    }
    for (let d of o) {
      let r = e.createDiv({ cls: "lkm-tl-day" }), [l, h, g] = d.key.split("-"), k = new Date(parseInt(l), parseInt(h) - 1, parseInt(g)), m = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][k.getDay()];
      r.createDiv({ cls: "lkm-tl-day-label", text: d.key + " " + t("\u5468") + m + " (" + d.items.length + ")" });
      let F = r.createDiv({ cls: "lkm-tl-items" });
      for (let w of d.items)
        this._renderTimelineItem(F, w);
    }
    if (s.length) {
      let d = e.createDiv({ cls: "lkm-tl-day lkm-tl-nodate" });
      d.createDiv({ cls: "lkm-tl-day-label", text: t("\u65E0\u65E5\u671F") + " (" + s.length + ")" });
      let r = d.createDiv({ cls: "lkm-tl-items" });
      for (let l of s)
        this._renderTimelineItem(r, l);
    }
    i.length || e.createDiv({ cls: "lkm-tl-empty", text: t("\u6682\u65E0\u7B14\u8BB0") });
  }
  _renderTimelineItem(e, n) {
    let i = e.createDiv({ cls: "lkm-tl-item" }), a = i.createDiv({ cls: "lkm-tl-item-content" });
    if (n.type) {
      let c = this.s.typeColors && this.s.typeColors[n.type], p = a.createEl("span", { cls: "lkm-tl-badge", text: ge(n.type) });
      c && (p.style.background = c);
    }
    if (n.zk && a.createEl("span", { cls: "lkm-tl-main-badge", text: t("\u4E3B\u7B14\u8BB0") }), a.createEl("span", { cls: "lkm-tl-title", text: n.title }), n.status) {
      let c = a.createEl("span", { cls: "lkm-tl-status", text: me(n.status) }), p = Qe(this.s, n.status);
      p && (c.style.background = p);
    }
    i.addEventListener("click", (c) => {
      c.target.closest("a") || (this.app.workspace.openLinkText(n.file.basename, n.file.path, c.ctrlKey || c.metaKey), this.locateFile(n.file, !0));
    });
    let s = /* @__PURE__ */ x((c, p) => {
      let d = new Ge();
      d.addItem((r) => {
        r.setTitle(t("\u5728\u65B0\u6807\u7B7E\u6253\u5F00")).setIcon("file-plus").onClick(() => {
          this.app.workspace.openLinkText(n.file.basename, n.file.path, !0);
        });
      }), d.addItem((r) => {
        r.setTitle(t("\u5728\u5BFC\u56FE\u4E2D\u663E\u793A")).setIcon("git-fork").onClick(() => {
          this._mode = "map", this.locateFile(n.file, !0);
          let l = this._selKey ? this._nodeIndex.get(this._selKey) : null;
          if (!l || !l.note.file || l.note.file.path !== n.file.path) {
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
    if (s && (a.createSpan({ cls: "lkm-recent-dot" }).style.background = s), a.createSpan({ cls: "lkm-recent-name", text: le(n.title, 14) }), n.created && !n.mtime && a.createSpan({ cls: "lkm-recent-date", text: n.created }), n.mtime && a.createSpan({ cls: "lkm-recent-date", text: n.mtime }), !n.isIndex) {
      let o = a.createSpan({ cls: "lkm-row-jump", title: t("\u5728\u5BFC\u56FE\u4E2D\u5B9A\u4F4D") });
      try {
        xt(o, "crosshair");
      } catch {
      }
      o.addEventListener("click", (c) => {
        c.stopPropagation(), this._mode = "map", this._kwFile = null, this._multiRoot = !1, this._dashFilters = [], this.locateFile(n.file);
      });
    }
    return a;
  }
  _renderDonut(e, n, i) {
    let p = 2 * Math.PI * 49, d = B("svg", { class: "lkm-donut-svg", viewBox: "0 0 116 116", width: 116, height: 116 });
    d.appendChild(B("circle", { cx: 58, cy: 58, r: 49, fill: "none", stroke: "var(--background-secondary)", "stroke-width": 13 }));
    let r = n.reduce((k, m) => k + m.value, 0), l = 0;
    for (let k of n) {
      let m = r ? k.value / r : 0;
      if (!m) continue;
      let F = Math.max(0, m * p - 2.5), w = B("circle", {
        cx: 58,
        cy: 58,
        r: 49,
        fill: "none",
        stroke: k.color,
        "stroke-width": 13,
        "stroke-linecap": "butt",
        "stroke-dasharray": F + " " + (p - F),
        "stroke-dashoffset": -(l * p),
        transform: "rotate(-90 58 58)",
        class: "lkm-donut-seg" + (this._isFilterActive(k.filter) ? " is-active" : "")
      });
      w.addEventListener("click", () => this._toggleDashFilter(k.filter)), d.appendChild(w), l += m;
    }
    let h = B("text", { x: 58, y: 57, class: "lkm-donut-num", "text-anchor": "middle" });
    h.textContent = String(i), d.appendChild(h);
    let g = B("text", { x: 58, y: 71, class: "lkm-donut-cap", "text-anchor": "middle" });
    g.textContent = t("\u603B\u7B14\u8BB0"), d.appendChild(g), e.appendChild(d);
  }
  _renderBarChart(e, n, i) {
    i = i || {};
    let a = i.height || 120, s = 16, o = 18, c = Math.max(e.clientWidth || 300, 120), p = Math.max(1, ...n.map((h) => h.value)), d = c / Math.max(n.length, 1), r = a - s - o, l = B("svg", { class: "lkm-bars-svg", viewBox: "0 0 " + c + " " + a, preserveAspectRatio: "none", width: "100%", height: a });
    for (let h = 1; h <= 3; h++) {
      let g = s + r * (1 - h / 3);
      l.appendChild(B("line", { x1: 0, y1: g, x2: c, y2: g, class: "lkm-bars-grid" }));
    }
    n.forEach((h, g) => {
      let k = h.value > 0 ? Math.max(3, r * h.value / p) : 0, m = g * d + d * 0.22, F = d * 0.56, w = a - o - k, y = B("rect", { x: m, y: w, width: F, height: k, rx: Math.min(4, F / 2), class: "lkm-bar" + (this._isFilterActive(h.filter) ? " is-active" : "") });
      if (h.color && (y.style.fill = h.color), h.filter && y.addEventListener("click", () => this._toggleDashFilter(h.filter)), l.appendChild(y), h.value > 0) {
        let S = B("text", { x: m + F / 2, y: w - 4, class: "lkm-bars-val", "text-anchor": "middle" });
        S.textContent = String(h.value), l.appendChild(S);
      }
      if (!i.thinLabels || g % 2 === 0) {
        let S = B("text", { x: m + F / 2, y: a - 5, class: "lkm-bars-lab", "text-anchor": "middle" });
        S.textContent = h.label, l.appendChild(S);
      }
    }), e.appendChild(l);
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
    return e.kind === "all" ? t("\u5168\u90E8\u7B14\u8BB0") : e.kind === "zk" ? t("\u4E3B\u7B14\u8BB0") : e.kind === "kw" ? t("\u5173\u952E\u8BCD\u7D22\u5F15") : e.kind === "status" ? me(e.value) : e.kind === "nostatus" ? t("\u65E0\u72B6\u6001") : e.kind === "orphan" ? t("\u672A\u5173\u8054") : e.kind === "type" ? t("\u7C7B\u578B\uFF1A") + ge(e.value) : e.kind === "notype" ? t("\u672A\u6807\u6CE8\u7C7B\u578B") : e.kind === "date" || e.kind === "month" ? t("\u521B\u5EFA\u4E8E ") + e.value : e.kind === "depth" ? t("\u7B2C") + e.value + t("\u5C42") : e.kind === "nodate" ? t("\u672A\u6807\u65E5\u671F") : t("\u7B5B\u9009");
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
      let p = t(o === "date" || o === "month" ? "\u521B\u5EFA\u4E8E " : o === "type" ? "\u7C7B\u578B\uFF1A" : o === "status" ? "\u72B6\u6001\uFF1A" : "\u7B2C"), d = o === "depth" ? t(" \u5C42") : "", r = o === "status" ? (l) => me(l.value) : o === "type" ? (l) => ge(l.value) : (l) => l.value;
      s.push(p + c.map(r).join("\u3001") + d);
    }
    for (let o of a) s.push(this._dashFilterLabel(o));
    return s.join(" + ");
  }
  _dashFilterItems(e) {
    let n = [...this.notes.values()], i = this._depthMap();
    if (e.find((d) => d.kind === "kw")) {
      let d = this.app.vault.getAbstractFileByPath(pe(this.s.indexFolder)), r = new Set((d && d.children ? d.children : []).filter((l) => l instanceof je && l.extension === "md").map((l) => l.path));
      n = n.filter((l) => r.has(l.file.path));
    }
    let s = e.filter((d) => d.kind !== "kw"), o = /* @__PURE__ */ new Set(["date", "month", "type", "depth", "status"]), c = /* @__PURE__ */ new Map(), p = [];
    for (let d of s)
      o.has(d.kind) ? (c.has(d.kind) || c.set(d.kind, []), c.get(d.kind).push(d)) : p.push(d);
    for (let [d, r] of c)
      d === "date" ? n = n.filter((l) => r.some((h) => l.date === h.value)) : d === "month" ? n = n.filter((l) => r.some((h) => (l.date || "").slice(0, 7) === h.value)) : d === "type" ? n = n.filter((l) => r.some((h) => l.type === h.value)) : d === "depth" ? n = n.filter((l) => r.some((h) => String(i.get(l.file.path) || 0) === h.value)) : d === "status" && (n = n.filter((l) => r.some((h) => l.status === h.value)));
    for (let d of p)
      d.kind === "zk" ? n = n.filter((r) => r.zk) : d.kind === "nostatus" ? n = n.filter((r) => !r.status) : d.kind === "orphan" ? n = n.filter((r) => !this.referenced.has(r.file.path)) : d.kind === "notype" ? n = n.filter((r) => !r.type) : d.kind === "nodate" && (n = n.filter((r) => !r.date));
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
    let i = et(this.app, this.notes, n);
    return (/* @__PURE__ */ x((function a(s, o) {
      s.note.file && !e.has(s.note.file.path) && e.set(s.note.file.path, o), s.children.forEach((c) => a(c, o + 1));
    }), "walk"))(i, 1), e;
  }
  _dashSummaryMd(e) {
    let n = [];
    n.push(t("## \u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE\u5DE5\u4F5C\u53F0\u7EDF\u8BA1 ") + this._ds(/* @__PURE__ */ new Date())), n.push(""), n.push(t("| \u6307\u6807 | \u6570\u91CF |")), n.push("| --- | --- |"), n.push(t("| \u7B14\u8BB0\u603B\u6570 | ") + e.total + " |"), n.push(t("| \u4E3B\u7B14\u8BB0 | ") + e.zk + " |"), n.push(t("| \u5173\u952E\u8BCD\u7D22\u5F15 | ") + e.kw + " |"), n.push(t("| \u672A\u5173\u8054 | ") + e.orphan + " |");
    for (let i of e.byStatusOrder) n.push("| " + me(i.name) + " | " + i.count + " |");
    if (e.noStatus && n.push(t("| \u65E0\u72B6\u6001 | ") + e.noStatus + " |"), n.push(t("| \u672A\u6807\u6CE8\u7C7B\u578B | ") + e.noType + " |"), n.push(t("| \u672A\u6807\u65E5\u671F | ") + e.noDate + " |"), n.push(""), e.byTypeOrder.length) {
      n.push(t("### \u7C7B\u578B\u5206\u5E03")), n.push(t("| \u7C7B\u578B | \u6570\u91CF | \u5360\u6BD4 |")), n.push("| --- | --- | --- |");
      for (let i of e.byTypeOrder) n.push("| " + ge(i.name) + " | " + i.count + " | " + (e.total ? Math.round(i.count / e.total * 100) : 0) + "% |");
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
    for (let [v, z] of s) a[v] || c.push({ name: v, color: "var(--text-faint)", count: z });
    let p = s.get("\u5DF2\u5B8C\u6210") || 0, d = s.get("\u5F85\u529E") || 0, r = e.filter((v) => !v.date).length, l = e.filter((v) => !this.referenced.has(v.file.path)).length, h = this.s.typeColors || {}, g = /* @__PURE__ */ new Map(), k = 0;
    for (let v of e)
      v.type ? g.set(v.type, (g.get(v.type) || 0) + 1) : k++;
    let m = Object.keys(h).filter((v) => g.has(v)).map((v) => ({ name: v, color: h[v], count: g.get(v) }));
    for (let [v, z] of g) h[v] || m.push({ name: v, color: "var(--text-faint)", count: z });
    let F = this._depthMap(), w = /* @__PURE__ */ new Map();
    for (let v of F.values()) v && w.set(v, (w.get(v) || 0) + 1);
    let y = w.size ? Math.max(...w.keys()) : 0, S = /* @__PURE__ */ new Date();
    S.setHours(0, 0, 0, 0);
    let f = [];
    for (let v = 11; v >= 0; v--) {
      let z = new Date(S.getFullYear(), S.getMonth() - v, 1);
      f.push({ key: z.getFullYear() + "-" + String(z.getMonth() + 1).padStart(2, "0"), count: 0 });
    }
    for (let v of e) {
      if (!v.date) continue;
      let z = f.find((K) => K.key === v.date.slice(0, 7));
      z && z.count++;
    }
    let T = 0, C = this.app.vault.getAbstractFileByPath(pe(this.s.indexFolder));
    C && C.children && (T = C.children.filter((v) => v instanceof je && v.extension === "md").length);
    let N = /* @__PURE__ */ new Map();
    for (let v of e) v.date && N.set(v.date, (N.get(v.date) || 0) + 1);
    let P = e.filter((v) => v.zk).map((v) => {
      let z = et(this.app, this.notes, v), K = 0, re = 0, he = /* @__PURE__ */ new Set();
      return (/* @__PURE__ */ x((function ce(de) {
        if (de.note.file) {
          if (he.has(de.note.file.path)) return;
          he.add(de.note.file.path);
        }
        K++, de.note.status === "\u5DF2\u5B8C\u6210" && re++;
        for (let Q of de.children) ce(Q);
      }), "walk"))(z), { path: v.file.path, title: v.title, total: K, done: re };
    }).sort((v, z) => z.total - v.total), V = /* @__PURE__ */ x((v) => ({ title: v.title, created: v.date || "", type: v.type || "", file: v.file }), "toItem"), Y = e.filter((v) => v.date).sort((v, z) => String(z.date).localeCompare(String(v.date))).slice(0, 8).map(V), ie = e.slice().sort((v, z) => (z.file.stat && z.file.stat.mtime || 0) - (v.file.stat && v.file.stat.mtime || 0)).slice(0, 6).map((v) => {
      let z = V(v);
      try {
        let K = new Date(v.file.stat.mtime);
        z.mtime = String(K.getFullYear()).slice(2) + "-" + String(K.getMonth() + 1).padStart(2, "0") + "-" + String(K.getDate()).padStart(2, "0") + " " + String(K.getHours()).padStart(2, "0") + ":" + String(K.getMinutes()).padStart(2, "0");
      } catch {
      }
      return z;
    }), $ = 0, J = 0;
    for (let v of e)
      for (let z of v.childLinks) {
        $++;
        let K = this.app.metadataCache.getFirstLinkpathDest(z, v.file.path);
        (!K || !this.notes.has(K.path)) && J++;
      }
    return { total: n, zk: i, done: p, todo: d, noDate: r, orphan: l, noType: k, byTypeOrder: m, byStatusOrder: c, noStatus: o, depthCount: w, depthMax: y, monthly: f, kw: T, heat: N, branches: P, recent: Y, modified: ie, linkCount: $, deadLinks: J };
  }
};
x($t, "LinkMindmapView");
var He = $t, Ot = class extends qt {
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
    for (let r of i) c.createEl("option", { value: r, text: a[r] || r });
    c.addEventListener("change", () => {
      let r = c.value;
      if (!r) return;
      let l = o[r];
      l && l.scrollIntoView({ behavior: "smooth", block: "start" }), c.value = "";
    });
    let p = (r) => {
      let l = e.createEl("h3", { cls: "lkm-sec-h" });
      l.createEl("span", { text: a[r] || r }), o[r] = l;
    }, d = {
      basic() {
        new H(e).setName(t("\u8BED\u8A00")).setDesc(t("\u754C\u9762\u8BED\u8A00\uFF08\u81EA\u52A8\u8DDF\u968F Obsidian \u8BBE\u7F6E\uFF09")).addDropdown((l) => {
          l.addOption("auto", t("\u81EA\u52A8") + " (Auto)"), l.addOption("zh", t("\u4E2D\u6587")), l.addOption("en", "English"), l.setValue(s.plugin.settings.language || "auto"), l.onChange(async (h) => {
            s.plugin.settings.language = h, await s.plugin.saveSettings(), s.plugin._initLang(), s.display();
          });
        }), new H(e).setName(t("\u9ED8\u8BA4\u7B14\u8BB0\u683C\u5F0F")).setDesc(t("\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u7684\u6587\u4EF6\u683C\u5F0F")).addDropdown((l) => {
          l.addOption("md", "Markdown"), l.addOption("excalidraw", "Excalidraw"), l.setValue(s.plugin.settings.defaultNoteFormat || "md"), l.onChange(async (h) => {
            s.plugin.settings.defaultNoteFormat = h, await s.plugin.saveSettings();
          });
        }), new H(e).setName(t("\u7B14\u8BB0\u6587\u4EF6\u5939")).setDesc(t("\u5B58\u653E\u5361\u7247\u7B14\u8BB0\u7684\u76EE\u5F55")).addText((l) => l.setValue(s.plugin.settings.mainFolder).onChange(async (h) => {
          s.plugin.settings.mainFolder = h.trim(), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u5939")).setDesc(t("\u5B58\u653E\u5173\u952E\u8BCD\u7D22\u5F15\u6587\u4EF6\u7684\u76EE\u5F55")).addText((l) => l.setValue(s.plugin.settings.indexFolder).onChange(async (h) => {
          s.plugin.settings.indexFolder = h.trim(), await s.plugin.saveSettings();
        })), new H(e).setName(t("\u6A21\u677F\u6587\u4EF6\u5939")).setDesc(t("\u6A21\u677F\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u65B0\u5EFA\u8282\u70B9\u65F6\u6A21\u677F\u4E0B\u62C9\u5217\u8868\u4ECE\u6B64\u6587\u4EF6\u5939\u8BFB\u53D6")).addText((l) => l.setValue(s.plugin.settings.templateFolder).onChange(async (h) => {
          s.plugin.settings.templateFolder = h.trim(), await s.plugin.saveSettings(), s.display();
        }));
        let r = (() => {
          let l = (s.plugin.settings.templateFolder || "").trim();
          if (!l) return [];
          let h = s.plugin.app.vault.getAbstractFileByPath(pe(l));
          return !h || !h.children ? [] : h.children.filter((g) => g instanceof je && g.extension === "md");
        })();
        new H(e).setName(t("\u9ED8\u8BA4\u6A21\u677F")).setDesc(t("\u65B0\u5EFA\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u6A21\u677F\uFF08\u53EF\u9009\uFF09")).addDropdown((l) => {
          l.addOption("", t("\u4E0D\u9009"));
          for (let h of r) l.addOption(h.path, h.basename);
          l.setValue(s.plugin.settings.templatePath || ""), l.onChange(async (h) => {
            s.plugin.settings.templatePath = h, await s.plugin.saveSettings();
          });
        });
      },
      fields() {
        new H(e).setName(t("\u5B50\u8282\u70B9\u94FE\u63A5\u5B57\u6BB5")).setDesc(t("\u7236\u7B14\u8BB0\u4E2D\u5B58\u653E\u5B50\u7B14\u8BB0\u94FE\u63A5\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 children\uFF09")).addText((r) => r.setValue(s.plugin.settings.linkField).onChange(async (l) => {
          s.plugin.settings.linkField = l.trim() || "children", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u7236\u8282\u70B9\u53CD\u5411\u94FE\u63A5\u5B57\u6BB5")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u5199\u5165\u5B50\u7B14\u8BB0\u7684\u7236\u94FE\u63A5\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 parent\uFF09")).addText((r) => r.setValue(s.plugin.settings.backField).onChange(async (l) => {
          s.plugin.settings.backField = l.trim() || "parent", await s.plugin.saveSettings();
        })), new H(e).setName(t("\u4E3B\u7B14\u8BB0\u6807\u8BB0\u5B57\u6BB5")).setDesc(t("\u6807\u8BB0\u5BFC\u56FE\u4E3B\u5165\u53E3\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 main\uFF09")).addText((r) => r.setValue(s.plugin.settings.zkField).onChange(async (l) => {
          s.plugin.settings.zkField = l.trim() || "main", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u72B6\u6001\u5B57\u6BB5")).setDesc(t("\u6807\u8BB0\u7B14\u8BB0\u5DE5\u4F5C\u72B6\u6001\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 status\uFF09")).addText((r) => r.setValue(s.plugin.settings.statusField).onChange(async (l) => {
          s.plugin.settings.statusField = l.trim() || "status", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u7C7B\u578B\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u7C7B\u578B\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 type\uFF09")).addText((r) => r.setValue(s.plugin.settings.typeField).onChange(async (l) => {
          s.plugin.settings.typeField = l.trim() || "type", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u63CF\u8FF0\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u63CF\u8FF0\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 description\uFF09")).addText((r) => r.setValue(s.plugin.settings.descField).onChange(async (l) => {
          s.plugin.settings.descField = l.trim() || "description", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u65E5\u671F\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u521B\u5EFA\u65E5\u671F\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 date\uFF09")).addText((r) => r.setValue(s.plugin.settings.dateField).onChange(async (l) => {
          s.plugin.settings.dateField = l.trim() || "date", await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u6807\u9898\u5B57\u6BB5")).setDesc(t("\u7B14\u8BB0\u6807\u9898\u7684\u5C5E\u6027\u540D\uFF08\u9ED8\u8BA4 title\uFF09\u3002frontmatter \u4E2D\u6709\u8BE5\u5B57\u6BB5\u65F6\u8282\u70B9\u663E\u793A\u5176\u503C\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u540D\uFF1B\u91CD\u547D\u540D\u65F6\u540C\u6B65\u66F4\u65B0\u8BE5\u5B57\u6BB5")).addText((r) => r.setValue(s.plugin.settings.titleField).onChange(async (l) => {
          s.plugin.settings.titleField = l.trim() || "title", await s.plugin.saveSettings(), s.plugin.refreshViews();
        }));
      },
      layout() {
        new H(e).setName(t("\u9ED8\u8BA4\u663E\u793A\u5C42\u6570")).setDesc(t("\u6253\u5F00\u65F6\u9ED8\u8BA4\u5C55\u5F00\u5230\u7B2C\u51E0\u5C42")).addText((r) => r.setValue(String(s.plugin.settings.defaultDepth)).onChange(async (l) => {
          s.plugin.settings.defaultDepth = Math.max(1, parseInt(l, 10) || 3), await s.plugin.saveSettings();
          for (let h of s.plugin.app.workspace.getLeavesOfType(Ce))
            h.view instanceof He && (h.view.depth = s.plugin.settings.defaultDepth, h.view._expandedMem.clear());
          s.plugin.refreshViews();
        })), new H(e).setName(t("\u540D\u79F0\u6700\u5927\u5B57\u6570")).setDesc(t("\u8282\u70B9\u6807\u9898\u6700\u591A\u663E\u793A\u7684\u5B57\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A\u7701\u7565\u53F7\uFF1B0 = \u663E\u793A\u5168\u90E8\u540D\u79F0")).addText((r) => r.setValue(String(s.plugin.settings.maxTitleLen)).onChange(async (l) => {
          s.plugin.settings.maxTitleLen = Math.max(0, parseInt(l, 10) || 0), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u6C34\u5E73\u95F4\u8DDD")).setDesc(t("\u7236\u5B50\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u8DDD\u79BB\uFF08\u8FDE\u63A5\u7EBF\u957F\u5EA6\uFF09\uFF1BGit \u5206\u652F\u56FE\u4E2D\u4E3A\u5C42\u7EA7\u95F4\u8DDD")).addText((r) => r.setValue(String(s.plugin.settings.gapX)).onChange(async (l) => {
          s.plugin.settings.gapX = Math.max(10, parseInt(l, 10) || 60), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u5782\u76F4\u95F4\u8DDD")).setDesc(t("\u5144\u5F1F\u8282\u70B9\u95F4\u7684\u5782\u76F4\u8DDD\u79BB\uFF1BGit \u5206\u652F\u56FE\u4E2D\u4E3A\u6CF3\u9053\u95F4\u8DDD")).addText((r) => r.setValue(String(s.plugin.settings.gapY)).onChange(async (l) => {
          s.plugin.settings.gapY = Math.max(0, parseInt(l, 10) || 8), await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u8282\u70B9\u9AD8\u5EA6")).setDesc(t("\u8282\u70B9\u5361\u7247\u9AD8\u5EA6\uFF080 = \u81EA\u9002\u5E94\uFF0C\u6309\u5185\u5BB9\u81EA\u52A8\u8C03\u6574\uFF09")).addText((r) => r.setValue(String(s.plugin.settings.nodeHeight)).onChange(async (l) => {
          let h = parseInt(l, 10);
          s.plugin.settings.nodeHeight = isNaN(h) || h < 0 ? 46 : h, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u5E03\u5C40\u65B9\u5411")).setDesc(t("\u6A2A\u5411\uFF1A\u4ECE\u5DE6\u5230\u53F3\u5C55\u5F00\u5B50\u8282\u70B9\uFF1B\u7EB5\u5411\uFF1A\u4ECE\u4E0A\u5230\u4E0B\u5C55\u5F00\u5B50\u8282\u70B9")).addDropdown((r) => {
          r.addOption("h", t("\u6A2A\u5411\uFF08\u5DE6\u2192\u53F3\uFF09")), r.addOption("v", t("\u7EB5\u5411\uFF08\u4E0A\u2192\u4E0B\uFF09")), r.setValue(s.plugin.settings.layoutDir || "h"), r.onChange(async (l) => {
            s.plugin.settings.layoutDir = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
          });
        });
      },
      behavior() {
        new H(e).setName(t("\u65B0\u5EFA\u65F6\u5199\u5165\u53CD\u5411\u94FE\u63A5")).setDesc(t("\u521B\u5EFA\u5B50\u8282\u70B9\u65F6\uFF0C\u5728\u5B50\u7B14\u8BB0\u91CC\u5199\u5165\u6307\u5411\u7236\u7B14\u8BB0\u7684 parent \u5B57\u6BB5\uFF08\u7EAF\u6587\u672C\u6587\u4EF6\u540D\uFF0C\u975E wikilink\uFF0C\u5173\u7CFB\u56FE\u8C31\u4E0D\u663E\u793A\u53CC\u5411\u7BAD\u5934\uFF09")).addToggle((r) => r.setValue(s.plugin.settings.autoAddBackLink).onChange(async (l) => {
          s.plugin.settings.autoAddBackLink = l, await s.plugin.saveSettings();
        })), new H(e).setName(t("\u81EA\u52A8\u5B9A\u4F4D\u5F53\u524D\u7B14\u8BB0")).setDesc(t("\u6253\u5F00\u7B14\u8BB0\u65F6\uFF0C\u5BFC\u56FE\u81EA\u52A8\u5C55\u5F00\u5176\u6240\u5728\u5206\u652F\u3001\u9009\u4E2D\u5E76\u5C45\u4E2D\u8BE5\u8282\u70B9")).addToggle((r) => r.setValue(s.plugin.settings.autoLocate).onChange(async (l) => {
          s.plugin.settings.autoLocate = l, await s.plugin.saveSettings();
        }));
      },
      display() {
        new H(e).setName(t("\u663E\u793A\u521B\u5EFA\u65F6\u95F4")).setDesc(t("\u4E0E\u7C7B\u578B/\u5B50\u6570\u540C\u884C\u663E\u793A\u521B\u5EFA\u65E5\u671F\uFF08\u4F18\u5148\u53D6 frontmatter \u7684 date \u5B57\u6BB5\uFF0C\u5426\u5219\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF09")).addToggle((r) => r.setValue(s.plugin.settings.showCreated).onChange(async (l) => {
          s.plugin.settings.showCreated = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u663E\u793A\u7C7B\u578B")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A type \u6587\u672C")).addToggle((r) => r.setValue(s.plugin.settings.showType).onChange(async (l) => {
          s.plugin.settings.showType = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u663E\u793A\u63CF\u8FF0")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A description \u6587\u672C\uFF08\u540D\u79F0\u4E0B\u65B9\u5355\u72EC\u4E00\u884C\uFF09")).addToggle((r) => r.setValue(s.plugin.settings.showDesc).onChange(async (l) => {
          s.plugin.settings.showDesc = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u663E\u793A\u5B50\u8282\u70B9\u6570")).setDesc(t("\u8282\u70B9\u5361\u7247\u4E0A\u662F\u5426\u663E\u793A\u5B50\u8282\u70B9\u6570\u91CF")).addToggle((r) => r.setValue(s.plugin.settings.showChildCount).onChange(async (l) => {
          s.plugin.settings.showChildCount = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u663E\u793A\u6253\u5F00\u56FE\u6807")).setDesc(t("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \u270E \u6253\u5F00\u7B14\u8BB0\u6309\u94AE")).addToggle((r) => r.setValue(s.plugin.settings.showOpenIcon).onChange(async (l) => {
          s.plugin.settings.showOpenIcon = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u663E\u793A\u65B0\u589E\u56FE\u6807")).setDesc(t("\u8282\u70B9\u4E0A\u662F\u5426\u663E\u793A \uFF0B \u65B0\u589E\u5B50\u8282\u70B9\u6309\u94AE")).addToggle((r) => r.setValue(s.plugin.settings.showAddIcon).onChange(async (l) => {
          s.plugin.settings.showAddIcon = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u5BFC\u56FE\u6A21\u5F0F")).setDesc(t("\u6811\u5F62\u56FE\uFF1A\u5E38\u89C4\u6811\u5F62\u5E03\u5C40\uFF1B\u5206\u53C9\u56FE\uFF1A\u6A2A\u5411\u8F68\u9053\uFF1BGit \u5206\u652F\u56FE\uFF1A\u6CF3\u9053\u5E03\u5C40\uFF0C\u5B9E\u7EBF\u7236\u5B50+\u865A\u7EBF\u8DF3\u7EBF+\u65F6\u95F4\u8F74\uFF0C\u53EF\u7EB5\u6A2A\u5207\u6362")).addDropdown((r) => {
          r.addOption("tree", t("\u6811\u5F62\u56FE")), r.addOption("branch", t("\u5206\u53C9\u56FE")), r.addOption("git", t("Git \u5206\u652F\u56FE")), r.setValue(s.plugin.settings.layoutMode || "tree"), r.onChange(async (l) => {
            s.plugin.settings.layoutMode = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
          });
        }), new H(e).setName(t("\u66F2\u7EBF\u8FDE\u63A5")).setDesc(t("\u8282\u70B9\u4E4B\u95F4\u7528\u66F2\u7EBF\u8FD8\u662F\u76F4\u7EBF")).addToggle((r) => r.setValue(s.plugin.settings.curve).onChange(async (l) => {
          s.plugin.settings.curve = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u663E\u793A\u91CD\u590D\u8282\u70B9\u865A\u7EBF")).setDesc(t("\u91CD\u590D\u8282\u70B9\u4E0E\u539F\u59CB\u8282\u70B9\u4E4B\u95F4\u7528\u865A\u7EBF\u8FDE\u63A5")).addToggle((r) => r.setValue(s.plugin.settings.showDupLine).onChange(async (l) => {
          s.plugin.settings.showDupLine = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        }));
      },
      colors() {
        new H(e).setName(t("\u4E3B\u8272")).setDesc(t("\u56FE\u6807\u6309\u94AE\u3001\u8FDE\u63A5\u7EBF\u7B49\u754C\u9762\u5143\u7D20\u989C\u8272")).addColorPicker((r) => r.setValue(s.plugin.settings.accent).onChange(async (l) => {
          s.plugin.settings.accent = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u4E3B\u7B14\u8BB0\u989C\u8272")).setDesc(t("main: true \u8282\u70B9\u989C\u8272")).addColorPicker((r) => r.setValue(s.plugin.settings.mainColor).onChange(async (l) => {
          s.plugin.settings.mainColor = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u91CD\u590D\u8282\u70B9\u989C\u8272")).setDesc(t("\u540C\u4E00\u7B14\u8BB0\u5728\u5BFC\u56FE\u4E2D\u51FA\u73B0\u591A\u6B21\u65F6\uFF0C\u5176\u72B6\u6001\u5706\u70B9\u989C\u8272")).addColorPicker((r) => r.setValue(s.plugin.settings.multiColor).onChange(async (l) => {
          s.plugin.settings.multiColor = l, await s.plugin.saveSettings(), s.plugin.refreshViews();
        })), new H(e).setName(t("\u9009\u4E2D\u989C\u8272")).setDesc(t("\u5355\u51FB\u9009\u4E2D\u7684\u8282\u70B9\u9AD8\u4EAE\u989C\u8272")).addColorPicker((r) => r.setValue(s.plugin.settings.selectedColor).onChange(async (l) => {
          s.plugin.settings.selectedColor = l, await s.plugin.saveSettings(), s.plugin.applyThemeVars();
        }));
      },
      types() {
        let r = s.plugin.settings.typeColors || (s.plugin.settings.typeColors = {});
        new H(e).setName(t("\u9ED8\u8BA4\u7C7B\u578B")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u7C7B\u578B\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((k) => {
          k.addOption("", t("\u4E0D\u9009"));
          for (let m of Object.keys(r)) k.addOption(m, ge(m));
          k.setValue(r[s.plugin.settings.defaultType] !== void 0 ? s.plugin.settings.defaultType : ""), k.onChange(async (m) => {
            s.plugin.settings.defaultType = m, await s.plugin.saveSettings();
          });
        });
        let l = "", h = /* @__PURE__ */ x(async () => {
          let k = l.trim();
          if (!k) {
            new _(t("\u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0"));
            return;
          }
          if (r[k] !== void 0) {
            new _(t("\u7C7B\u578B\u5DF2\u5B58\u5728\uFF1A") + k);
            return;
          }
          let m = ["#4ba3e5", "#e5534b", "#3fa66a", "#e5a44b", "#b07cff", "#8a6ae5", "#d978a8", "#5aa9a2"];
          r[k] = m[Object.keys(r).length % m.length], l = "", await s.plugin.saveSettings(), s.display();
        }, "addType");
        new H(e).setName(t("\u6DFB\u52A0\u7C7B\u578B")).setDesc(t("\u8F93\u5165\u540D\u79F0\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((k) => {
          k.setPlaceholder(t("\u7C7B\u578B\u540D\u79F0\uFF0C\u5982\uFF1A\u5F85\u529E")), k.onChange((m) => l = m), k.inputEl.addEventListener("keydown", (m) => {
            m.key === "Enter" && (m.preventDefault(), h());
          });
        }).addButton((k) => k.setButtonText(t("\u6DFB\u52A0")).setCta().onClick(h));
        let g = Object.keys(r);
        for (let k = 0; k < g.length; k++) {
          let m = g[k], F = k, w = s.plugin.settings.typeTemplates || (s.plugin.settings.typeTemplates = {}), y = s.plugin.app.vault.getAbstractFileByPath(pe(s.plugin.settings.templateFolder || "99-\u6A21\u677F")), S = [{ path: "", name: t("\u9ED8\u8BA4") }];
          if (y && y.children) for (let f of y.children) f instanceof je && f.extension === "md" && S.push({ path: f.path, name: f.basename });
          new H(e).setName(ge(m)).setDesc(t("type \u4E3A\u300C") + m + t("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((f) => {
            f.setValue(String(r[m])), f.onChange(async (T) => {
              T && T !== r[m] && (r[m] = T, await s.plugin.saveSettings(), s.plugin.refreshViews());
            });
          }).addDropdown((f) => {
            for (let T of S) f.addOption(T.path, T.name);
            f.setValue(w[m] || ""), f.onChange(async (T) => {
              T ? w[m] = T : delete w[m], await s.plugin.saveSettings();
            });
          }).addButton((f) => f.setIcon("chevron-up").setTooltip(t("\u4E0A\u79FB")).setDisabled(F === 0).onClick(async () => {
            let T = Object.entries(r);
            [T[F - 1], T[F]] = [T[F], T[F - 1]], s.plugin.settings.typeColors = Object.fromEntries(T), await s.plugin.saveSettings(), s.display();
          })).addButton((f) => f.setIcon("chevron-down").setTooltip(t("\u4E0B\u79FB")).setDisabled(F === g.length - 1).onClick(async () => {
            let T = Object.entries(r);
            [T[F + 1], T[F]] = [T[F], T[F + 1]], s.plugin.settings.typeColors = Object.fromEntries(T), await s.plugin.saveSettings(), s.display();
          })).addButton((f) => f.setIcon("trash").setTooltip(t("\u5220\u9664\u7C7B\u578B\uFF1A") + m).onClick(async () => {
            delete r[m], s.plugin.settings.defaultType === m && (s.plugin.settings.defaultType = ""), await s.plugin.saveSettings(), s.display();
          }));
        }
      },
      statuses() {
        let r = s.plugin.settings.statusColors || (s.plugin.settings.statusColors = {});
        new H(e).setName(t("\u9ED8\u8BA4\u72B6\u6001")).setDesc(t("\u65B0\u5EFA\u5B50\u8282\u70B9\u65F6\u9ED8\u8BA4\u9009\u4E2D\u7684\u72B6\u6001\uFF08\u521B\u5EFA\u5F39\u7A97\u91CC\u4ECD\u53EF\u66F4\u6539\u6216\u4E0D\u9009\uFF09")).addDropdown((k) => {
          k.addOption("", t("\u4E0D\u9009"));
          for (let m of Object.keys(r)) k.addOption(m, me(m));
          k.setValue(r[s.plugin.settings.defaultStatus] !== void 0 ? s.plugin.settings.defaultStatus : ""), k.onChange(async (m) => {
            s.plugin.settings.defaultStatus = m, await s.plugin.saveSettings();
          });
        });
        let l = "", h = /* @__PURE__ */ x(async () => {
          let k = l.trim();
          if (!k) {
            new _(t("\u8BF7\u8F93\u5165\u72B6\u6001\u6807\u8BC6"));
            return;
          }
          if (r[k] !== void 0) {
            new _(t("\u72B6\u6001\u5DF2\u5B58\u5728\uFF1A") + k);
            return;
          }
          let m = ["#e5534b", "#e5a44b", "#3fa66a", "#7f8fa6", "#b07cff", "#4ba3e5", "#d978a8", "#5aa9a2"];
          r[k] = m[Object.keys(r).length % m.length], l = "", await s.plugin.saveSettings(), s.display();
        }, "addStatus");
        new H(e).setName(t("\u6DFB\u52A0\u72B6\u6001")).setDesc(t("\u8F93\u5165\u72B6\u6001\u6807\u8BC6\uFF08\u5982 todo/doing/done\uFF09\u540E\u56DE\u8F66\u6216\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u65B0\u589E\u540E\u5728\u5BF9\u5E94\u884C\u4FEE\u6539\u989C\u8272")).addText((k) => {
          k.setPlaceholder(t("\u72B6\u6001\u6807\u8BC6\uFF0C\u5982\uFF1Atodo")), k.onChange((m) => l = m), k.inputEl.addEventListener("keydown", (m) => {
            m.key === "Enter" && (m.preventDefault(), h());
          });
        }).addButton((k) => k.setButtonText(t("\u6DFB\u52A0")).setCta().onClick(h));
        let g = Object.keys(r);
        for (let k = 0; k < g.length; k++) {
          let m = g[k], F = k;
          new H(e).setName(me(m)).setDesc(t("status \u4E3A\u300C") + m + t("\u300D\u7684\u8282\u70B9\u8FB9\u6846\u4F7F\u7528\u8BE5\u989C\u8272")).addColorPicker((w) => {
            w.setValue(String(r[m])), w.onChange(async (y) => {
              y && y !== r[m] && (r[m] = y, await s.plugin.saveSettings(), s.plugin.refreshViews());
            });
          }).addButton((w) => w.setIcon("chevron-up").setTooltip(t("\u4E0A\u79FB")).setDisabled(F === 0).onClick(async () => {
            let y = Object.entries(r);
            [y[F - 1], y[F]] = [y[F], y[F - 1]], s.plugin.settings.statusColors = Object.fromEntries(y), await s.plugin.saveSettings(), s.display();
          })).addButton((w) => w.setIcon("chevron-down").setTooltip(t("\u4E0B\u79FB")).setDisabled(F === g.length - 1).onClick(async () => {
            let y = Object.entries(r);
            [y[F + 1], y[F]] = [y[F], y[F + 1]], s.plugin.settings.statusColors = Object.fromEntries(y), await s.plugin.saveSettings(), s.display();
          })).addButton((w) => w.setIcon("trash").setTooltip(t("\u5220\u9664\u72B6\u6001\uFF1A") + m).onClick(async () => {
            delete r[m], s.plugin.settings.defaultStatus === m && (s.plugin.settings.defaultStatus = ""), await s.plugin.saveSettings(), s.display();
          }));
        }
      },
      presets() {
        new H(e).setName(t("\u9884\u8BBE\u4FDD\u5B58\u4F4D\u7F6E")).setDesc(t("\u5BFC\u56FE\u9884\u8BBE\u548C\u81EA\u52A8\u72B6\u6001\u7684\u4FDD\u5B58\u8DEF\u5F84\u3002\u586B\u5199 vault \u5185\u6587\u4EF6\u8DEF\u5F84\uFF08\u5982 link-mindmap-presets.json\uFF09\u5219\u4FDD\u5B58\u5230\u8BE5\u6587\u4EF6\uFF0C\u53EF\u968F vault \u540C\u6B65\u5230\u5176\u4ED6\u8BBE\u5907\u5B9E\u73B0\u591A\u7AEF\u8FD8\u539F")).addText((r) => {
          r.setPlaceholder(t("link-mindmap-presets.json")), r.setValue(s.plugin.settings.savedViewLocation || ""), r.onChange(async (l) => {
            s.plugin.settings.savedViewLocation = l.trim(), await s.plugin.saveSettings(), l.trim() && await s.plugin._loadViewsFromFile();
          });
        });
      },
      io() {
        new H(e).setName(t("\u5BFC\u51FA\u914D\u7F6E")).setDesc(t("\u5C06\u5F53\u524D\u6240\u6709\u8BBE\u7F6E\u5BFC\u51FA\u4E3A JSON \u6587\u4EF6")).addButton((r) => r.setButtonText(t("\u5BFC\u51FA")).setCta().onClick(async () => {
          let l = JSON.stringify(s.plugin.settings, null, 2), g = "link-mindmap-config-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-") + ".json";
          try {
            await s.plugin.app.vault.create(g, l), new _(t("\u914D\u7F6E\u5DF2\u5BFC\u51FA\u5230 vault \u6839\u76EE\u5F55\uFF1A") + g);
          } catch (k) {
            new _(t("\u5BFC\u51FA\u5931\u8D25\uFF1A") + (k && k.message ? k.message : k));
          }
        })), new H(e).setName(t("\u5BFC\u5165\u914D\u7F6E")).setDesc(t("\u4ECE JSON \u6587\u4EF6\u5BFC\u5165\u8BBE\u7F6E\uFF08\u4F1A\u8986\u76D6\u5F53\u524D\u914D\u7F6E\uFF09")).addButton((r) => r.setButtonText(t("\u9009\u62E9\u6587\u4EF6")).onClick(() => {
          let l = document.createElement("input");
          l.type = "file", l.accept = ".json", l.onchange = async () => {
            let h = l.files[0];
            if (h)
              try {
                let g = await h.text(), k = JSON.parse(g);
                s.plugin.settings = Object.assign(s.plugin.settings, k), await s.plugin.saveSettings(), s.plugin.applyThemeVars(), s.plugin.refreshViews(), s.display(), new _(t("\u914D\u7F6E\u5DF2\u5BFC\u5165"));
              } catch (g) {
                new _(t("\u5BFC\u5165\u5931\u8D25\uFF1A") + (g && g.message ? g.message : g)), console.error("[link-mindmap] import config:", g);
              }
          }, l.click();
        })), new H(e).setName(t("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E")).setDesc(t("\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\uFF08\u4E0D\u4F1A\u5220\u9664\u7B14\u8BB0\uFF09")).addButton((r) => r.setButtonText(t("\u6062\u590D\u9ED8\u8BA4")).onClick(() => {
          new Be(s.app, t("\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"), t("\u786E\u5B9A\u5C06\u6240\u6709\u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u5417\uFF1F"), async () => {
            s.plugin.settings = JSON.parse(JSON.stringify(Ft)), await s.plugin.saveSettings(), s.plugin.applyThemeVars(), s.plugin.refreshViews(), s.display(), new _(t("\u5DF2\u6062\u590D\u9ED8\u8BA4\u914D\u7F6E"));
          }).open();
        }));
      }
    };
    for (let r = 0; r < i.length; r++) {
      p(i[r]);
      let l = d[i[r]];
      l && l();
    }
  }
};
x(Ot, "LinkMindmapSettingTab");
var ns = Ot, zt = class extends Xt {
  async onload() {
    this._autoState = null, this._loadedPresets = [], await this.loadSettings(), this._initLang(), await this._loadViewsFromFile(), this.registerView(Ce, (n) => new He(n, this)), this.addRibbonIcon("git-merge", t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), () => this.activateView()), this.addCommand({ id: "open-link-mindmap", name: t("\u6253\u5F00\u94FE\u63A5\u601D\u7EF4\u5BFC\u56FE"), callback: /* @__PURE__ */ x(() => this.activateView(), "callback") }), this.addCommand({ id: "open-timeline", name: t("\u6253\u5F00\u65F6\u95F4\u7EBF"), callback: /* @__PURE__ */ x(() => this.activateTimeline(), "callback") }), this.addCommand({ id: "normalize-frontmatter", name: t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), callback: /* @__PURE__ */ x(() => this._normalizeFrontmatter(), "callback") }), this.addCommand({ id: "normalize-frontmatter-current", name: t("\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\uFF08\u6309\u6A21\u677F\uFF09"), callback: /* @__PURE__ */ x(() => this._normalizeFrontmatter(!0), "callback") }), this.addCommand({ id: "check-links", name: t("\u68C0\u67E5\u94FE\u63A5\u5B8C\u6574\u6027"), callback: /* @__PURE__ */ x(() => this._checkLinks(), "callback") }), this.addCommand({ id: "clean-invalid-types", name: t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u7C7B\u578B"), callback: /* @__PURE__ */ x(() => this._cleanInvalidTypes(), "callback") }), this.addCommand({ id: "clean-invalid-status", name: t("\u6E05\u9664\u6240\u6709\u7B14\u8BB0\u5931\u6548\u72B6\u6001"), callback: /* @__PURE__ */ x(() => this._cleanInvalidStatus(), "callback") }), this.addCommand({ id: "convert-to-excalidraw", name: t("\u8F6C\u6362\u5F53\u524D\u7B14\u8BB0\u4E3A excalidraw"), callback: /* @__PURE__ */ x(() => {
      let n = this.app.workspace.getActiveFile();
      n ? this._convertToExcalidraw(n) : new _(t("\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7\u7B14\u8BB0"));
    }, "callback") }), this.addCommand({ id: "show-help", name: t("\u67E5\u770B\u4F7F\u7528\u5E2E\u52A9"), callback: /* @__PURE__ */ x(async () => {
      for (let n of this.app.workspace.getLeavesOfType(Ce))
        if (n.view instanceof He) {
          n.view._showHelp();
          return;
        }
      await this.activateView();
      for (let n of this.app.workspace.getLeavesOfType(Ce))
        n.view instanceof He && n.view._showHelp();
    }, "callback") }), this.addSettingTab(new ns(this.app, this)), this.applyThemeVars();
    let e = () => this.settings.savedViewLocation || "link-mindmap-presets.json";
    this.registerEvent(this.app.vault.on("create", (n) => {
      n.path === e() && (!this._autoState || !this._loadedPresets) && this._loadViewsFromFile().then(() => this._rebuildAllViews()).catch((i) => console.error("[link-mindmap] reload presets:", i)), this._onVaultChange(n);
    })), this.registerEvent(this.app.vault.on("modify", (n) => {
      n.path === e() && (!this._autoState || !this._loadedPresets) && this._loadViewsFromFile().then(() => this._rebuildAllViews()).catch((i) => console.error("[link-mindmap] reload presets:", i)), this._onVaultChange(n);
    })), this.registerEvent(this.app.vault.on("delete", (n) => this._onVaultChange(n))), this.registerEvent(this.app.vault.on("rename", (n, i) => this._onVaultChange(n, i))), this.registerEvent(this.app.metadataCache.on("changed", (n) => this._onVaultChange(n))), this.registerEvent(this.app.metadataCache.on("resolved", () => this._rebuildAllViews())), this.registerEvent(this.app.workspace.on("file-open", (n) => {
      for (let i of this.app.workspace.getLeavesOfType(Ce))
        i.view instanceof He && i.view.locateFile(n);
    }));
  }
  onunload() {
    clearTimeout(this._refreshTimer), this.app.workspace.detachLeavesOfType(Ce);
  }
  _onVaultChange(e, n) {
    let i = pe(this.settings.mainFolder || ""), a = /* @__PURE__ */ x((o) => !!o && (o === i || o.startsWith(i + "/")), "inFolder"), s = e && e.path;
    e && e.extension && e.extension !== "md" && !a(n) || !a(s) && !a(n) || (clearTimeout(this._refreshTimer), this._refreshTimer = setTimeout(() => this._rebuildAllViews(), 400));
  }
  _rebuildAllViews() {
    for (let e of this.app.workspace.getLeavesOfType(Ce))
      e.view instanceof He && e.view.rebuild(!0);
  }
  async _checkLinks() {
    let e = this.settings, n = dt(this.app, e), i = e.linkField || "children", a = e.backField || "parent", s = [], o = [];
    for (let l of n.map.values()) {
      for (let h of l.childLinks) {
        let g = this.app.metadataCache.getFirstLinkpathDest(h, l.file.path);
        (!g || !n.map.has(g.path)) && s.push({ file: l.file, link: h, field: i });
      }
      for (let h of l.parentLinks) {
        let g = this.app.metadataCache.getFirstLinkpathDest(h, l.file.path);
        (!g || !n.map.has(g.path)) && o.push({ file: l.file, link: h, field: a });
      }
    }
    let c = s.length + o.length;
    if (c === 0) {
      new _(t("\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5\u901A\u8FC7 \u2713"));
      return;
    }
    let p = new Se(this.app);
    p.titleEl.setText(t("\u94FE\u63A5\u5B8C\u6574\u6027\u68C0\u67E5"));
    let d = p.contentEl.createDiv();
    if (d.createEl("p", { text: t("\u53D1\u73B0 ") + c + t(" \u4E2A\u5931\u6548\u94FE\u63A5\uFF1A"), cls: "lkm-modal-sub" }), s.length) {
      d.createEl("h4", { text: t("\u5931\u6548\u5B50\u94FE\u63A5\uFF08children \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09") });
      let l = d.createEl("ul", { cls: "lkm-check-list" });
      for (let h of s) {
        let g = l.createEl("li");
        g.createEl("span", { text: h.file.basename + " \u2192 ", cls: "lkm-check-from" }), g.createEl("span", { text: h.link, cls: "lkm-check-broken" });
      }
    }
    if (o.length) {
      d.createEl("h4", { text: t("\u5931\u6548\u7236\u94FE\u63A5\uFF08parent \u6307\u5411\u4E0D\u5B58\u5728\u7684\u7B14\u8BB0\uFF09") });
      let l = d.createEl("ul", { cls: "lkm-check-list" });
      for (let h of o) {
        let g = l.createEl("li");
        g.createEl("span", { text: h.file.basename + " \u2192 ", cls: "lkm-check-from" }), g.createEl("span", { text: h.link, cls: "lkm-check-broken" });
      }
    }
    let r = d.createDiv("lkm-modal-btns");
    r.createEl("button", { cls: "lkm-btn lkm-btn-action", text: t("\u4FEE\u590D\u5168\u90E8") }).onclick = async () => {
      p.close(), new Be(this.app, t("\u4FEE\u590D\u5931\u6548\u94FE\u63A5"), t("\u6B64\u64CD\u4F5C\u5C06\u4ECE\u7B14\u8BB0\u7684 children/parent \u5B57\u6BB5\u4E2D\u5220\u9664\u5931\u6548\u94FE\u63A5\uFF0C\u4E0D\u53EF\u64A4\u9500\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), () => this._doFixBrokenLinks(allBroken)).open();
    }, r.createEl("button", { cls: "lkm-btn", text: t("\u5173\u95ED") }).onclick = () => p.close(), p.open();
  }
  async _doFixBrokenLinks(e) {
    let n = 0, i = /* @__PURE__ */ new Map();
    for (let a of e)
      i.has(a.file.path) || i.set(a.file.path, { file: a.file, links: [] }), i.get(a.file.path).links.push(a.link);
    for (let { file: a, links: s } of i.values())
      try {
        let o = await this.app.vault.read(a), c = o.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
        if (!c) continue;
        let p = c[1], d = o.slice(c[0].length), r = !1;
        for (let l of s) {
          let h = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), g = new RegExp(`^[ \\t]*- ["']?\\[\\[` + h + `(\\|[^\\]]*)?\\]\\]["']?[ \\t]*$`, "gm"), k = p.replace(g, "");
          if (k !== p) {
            p = k, r = !0;
            continue;
          }
          let m = new RegExp(`^[A-Za-z_][\\w-]*\\s*:\\s*["']?\\[\\[` + h + `(\\|[^\\]]*)?\\]\\]["']?[ \\t]*$`, "gm"), F = p.replace(m, "");
          F !== p && (p = F, r = !0);
        }
        r && (p = p.replace(/\n{3,}/g, `

`), await this.app.vault.modify(a, `---
` + p + `
---` + d), n++);
      } catch (o) {
        console.error("[link-mindmap] fix link:", o);
      }
    new _(t("\u5DF2\u4FEE\u590D ") + n + t(" \u4E2A\u6587\u4EF6")), this._rebuildAllViews();
  }
  async _normalizeFrontmatter(e) {
    let n = this.settings, i = n.typeField || "type", a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ x(async (d) => {
      if (!d) return null;
      if (a.has(d)) return a.get(d);
      let r = this.app.vault.getAbstractFileByPath(pe(d));
      if (!(r instanceof je)) return null;
      let l = gt(await this.app.vault.read(r));
      return a.set(d, l.fields), l.fields;
    }, "getTemplateFields"), o = /* @__PURE__ */ x(async (d) => {
      let r = await this.app.vault.read(d), l = r.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
      if (!l) return { changed: !1, skipped: !1 };
      let h = l[1], g = r.slice(l[0].length), k = [], m = null;
      for (let v of h.split(`
`)) {
        let z = v.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
        z ? (m && k.push(m), m = { key: z[1], lines: [v] }) : m && m.lines.push(v);
      }
      if (m && k.push(m), !k.length) return { changed: !1, skipped: !1 };
      let F = n.statusField || "status", w = k.find((v) => v.key === F);
      if (w && w.lines.length === 1) {
        let v = (w.lines[0].match(/^.*:\s*(.*)$/) || [])[1] || "", z = nt(v), K = ct(z);
        K !== z && (w.lines[0] = F + ": " + (K ? '"' + K + '"' : '""'));
      }
      let y = k.find((v) => v.key === i), S = y ? nt((y.lines[0].match(/^.*:\s*(.*)$/) || [])[1] || "") : "", f = n.typeTemplates || {}, T = S && f[S] ? f[S] : (n.templatePath || "").trim(), C = await s(T);
      if (!C) return { changed: !1, skipped: !0 };
      let N = C.map(([v]) => v), P = /* @__PURE__ */ new Map(C), V = /* @__PURE__ */ new Map(k.map((v) => [v.key, v])), Y = [];
      for (let v of N)
        V.has(v) ? (Y.push(V.get(v)), V.delete(v)) : Y.push({ key: v, lines: [v + ": " + (P.get(v) || "")] });
      for (let [, v] of V) Y.push(v);
      let ie = [];
      for (let v of Y) ie.push(...v.lines);
      let $ = ie.join(`
`), J = h !== $;
      if (J) {
        let v = `---
` + $ + `
---
` + g;
        await this.app.vault.modify(d, v);
      }
      return { changed: J, skipped: !1 };
    }, "normalizeOne");
    if (e) {
      let d = this.app.workspace.getActiveFile();
      if (!d || d.extension !== "md") {
        new _(t("\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7\u7B14\u8BB0"));
        return;
      }
      let r = await o(d);
      r.skipped ? new _(t("\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7")) : r.changed ? new _(t("\u5DF2\u6574\u7406\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027 \u2713")) : new _(t("\u5F53\u524D\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"));
      return;
    }
    let c = pe(n.mainFolder || ""), p = Ke(this.app, c);
    if (!p.length) {
      new _(t("\u672A\u627E\u5230\u7B14\u8BB0\u6587\u4EF6"));
      return;
    }
    new Be(this.app, t("\u6574\u7406\u6240\u6709\u7B14\u8BB0\u5C5E\u6027"), t("\u6B64\u64CD\u4F5C\u5C06\u6309\u6A21\u677F\u91CD\u6392\u6240\u6709\u7B14\u8BB0\u7684 frontmatter \u5B57\u6BB5\u987A\u5E8F\u5E76\u8865\u5145\u7F3A\u5931\u5B57\u6BB5\u3002\u5DF2\u6709\u503C\u4E0D\u4F1A\u88AB\u4FEE\u6539\uFF0C\u4F46\u5EFA\u8BAE\u5148\u5907\u4EFD\u6570\u636E\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let d = 0, r = 0, l = [];
      for (let g of p) {
        let k = await o(g);
        k.skipped && r++, k.changed && (d++, l.length < 10 && l.push(g.basename));
      }
      let h;
      d ? (h = t("\u5DF2\u6574\u7406 ") + d + t(" \u4E2A\u7B14\u8BB0\u7684\u5C5E\u6027"), l.length < d ? h += t("\uFF08\u7B49\uFF09") : h += "\uFF1A" + l.join("\u3001"), r && (h += t("\uFF1B") + r + t(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u5BF9\u5E94\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7"))) : (h = t("\u6240\u6709\u7B14\u8BB0\u5C5E\u6027\u5DF2\u4E0E\u6A21\u677F\u4E00\u81F4 \u2713"), r && (h += t("\uFF08") + r + t(" \u4E2A\u7B14\u8BB0\u672A\u627E\u5230\u6A21\u677F\uFF0C\u5DF2\u8DF3\u8FC7\uFF09"))), new _(h, 15e3);
    }).open();
  }
  _cleanInvalidTypes() {
    let e = this.settings, n = e.typeField || "type", i = new Set(Object.keys(e.typeColors || {})), a = Ke(this.app, e.mainFolder), s = [];
    for (let o of a) {
      let p = ((this.app.metadataCache.getFileCache(o) || {}).frontmatter || {})[n];
      p != null && String(p).trim() && !i.has(String(p).trim()) && s.push({ file: o, oldVal: String(p).trim() });
    }
    if (!s.length) {
      new _(t("\u6CA1\u6709\u5931\u6548\u7C7B\u578B\u9700\u8981\u6E05\u9664"));
      return;
    }
    new Be(this.app, t("\u6E05\u9664\u5931\u6548\u7C7B\u578B"), t("\u53D1\u73B0 ") + s.length + t(" \u4E2A\u7B14\u8BB0\u7684 type \u4E0D\u5728\u914D\u7F6E\u5217\u8868\u4E2D\uFF0C\u5C06\u88AB\u6E05\u9664\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u7B14\u8BB0\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let o = 0;
      for (let c of s)
        try {
          await this.app.fileManager.processFrontMatter(c.file, (p) => {
            delete p[n];
          }), o++;
        } catch (p) {
          console.error("[link-mindmap] clean type:", p);
        }
      new _(t("\u5DF2\u6E05\u9664 ") + o + t(" \u4E2A\u7B14\u8BB0\u7684\u5931\u6548\u7C7B\u578B")), this._rebuildAllViews();
    }).open();
  }
  async _convertToExcalidraw(e) {
    if (!e || e.extension !== "md") {
      new _(t("\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7 md \u7B14\u8BB0"));
      return;
    }
    if (e.basename.endsWith(".excalidraw")) {
      new _(t("\u8BE5\u6587\u4EF6\u5DF2\u662F excalidraw \u683C\u5F0F"));
      return;
    }
    new Be(this.app, t("\u8F6C\u4E3A excalidraw"), t("\u8F6C\u6362\u540E\u300C") + e.basename + t("\u300D\u7684\u6B63\u6587\u5185\u5BB9\u5C06\u4E22\u5931\uFF08\u4EC5\u4FDD\u7559 frontmatter \u5C5E\u6027\uFF09\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
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
          new _(t("\u76EE\u6807\u6587\u4EF6\u5DF2\u5B58\u5728"));
          return;
        }
        await this.app.vault.create(o, a.join(`
`) + s);
        let c = e.basename, p = e.basename + ".excalidraw";
        for (let d of Ke(this.app, this.settings.mainFolder))
          d.path !== e.path && await this.app.fileManager.processFrontMatter(d, (r) => {
            for (let l of [this.settings.linkField, this.settings.backField]) {
              let h = Ae(r[l]), g = !1, k = h.map((m) => ve(m) === c ? (g = !0, "[[" + p + "]]") : m);
              g && (r[l] = k);
            }
          });
        await this.app.vault.delete(e), new _(t("\u5DF2\u8F6C\u6362\u300C") + e.basename + t("\u300D\u4E3A excalidraw")), await new Promise((d) => setTimeout(d, 400)), await this._rebuildAllViews();
      } catch (n) {
        new _(t("\u8F6C\u6362\u5931\u8D25\uFF1A") + (n && n.message ? n.message : n));
      }
    }).open();
  }
  _cleanInvalidStatus() {
    let e = this.settings, n = e.statusField || "status", i = new Set(Object.keys(e.statusColors || {})), a = Ke(this.app, e.mainFolder), s = [];
    for (let o of a) {
      let c = (this.app.metadataCache.getFileCache(o) || {}).frontmatter || {}, p = ct(c[n]);
      p && !i.has(p) && s.push({ file: o, oldVal: p });
    }
    if (!s.length) {
      new _(t("\u6CA1\u6709\u5931\u6548\u72B6\u6001\u9700\u8981\u6E05\u9664"));
      return;
    }
    new Be(this.app, t("\u6E05\u9664\u5931\u6548\u72B6\u6001"), t("\u53D1\u73B0 ") + s.length + t(" \u4E2A\u7B14\u8BB0\u7684 status \u4E0D\u5728\u914D\u7F6E\u5217\u8868\u4E2D\uFF0C\u5C06\u88AB\u6E05\u9664\u3002\u5EFA\u8BAE\u5148\u5907\u4EFD\u7B14\u8BB0\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F"), async () => {
      let o = 0;
      for (let c of s)
        try {
          await this.app.fileManager.processFrontMatter(c.file, (p) => {
            delete p[n];
          }), o++;
        } catch (p) {
          console.error("[link-mindmap] clean status:", p);
        }
      new _(t("\u5DF2\u6E05\u9664 ") + o + t(" \u4E2A\u7B14\u8BB0\u7684\u5931\u6548\u72B6\u6001")), this._rebuildAllViews();
    }).open();
  }
  applyThemeVars() {
    let e = document.body;
    e.style.setProperty("--lkm-accent", this.settings.accent), e.style.setProperty("--lkm-main", this.settings.mainColor), e.style.setProperty("--lkm-multi", this.settings.multiColor), e.style.setProperty("--lkm-selected", this.settings.selectedColor);
    let n = this.settings.statusColors || {};
    for (let [i, a] of Object.entries(n)) e.style.setProperty("--lkm-status-" + i, a);
  }
  async activateView() {
    let { workspace: e } = this.app, n = e.getLeavesOfType(Ce)[0];
    n || (n = e.getLeaf(!0), await n.setViewState({ type: Ce, active: !0 })), e.revealLeaf(n);
  }
  async activateTimeline() {
    await this.activateView();
    for (let e of this.app.workspace.getLeavesOfType(Ce))
      e.view instanceof He && (e.view._mode = "dash", e.view._dashTab = "timeline", e.view.render());
  }
  refreshViews() {
    this.applyThemeVars();
    for (let e of this.app.workspace.getLeavesOfType(Ce))
      e.view instanceof He && e.view.render();
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
      bt(n && n.startsWith("zh") ? "zh" : "en");
    } else
      bt(e);
  }
};
x(zt, "LinkMindmapPlugin");
var is = zt;
module.exports = is;
