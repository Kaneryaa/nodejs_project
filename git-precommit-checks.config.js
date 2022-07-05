module.exports = {
  display: {
    notifications: true,
    offendingContent: true,
    rulesSummary: false,
    shortStats: true,
    verbose: false,
  },
  rules: [
    {
      message: "You’ve got conflict markers laying around",
      regex: /^[<>|=]{4,}/m,
    },
    // {
    //   message:
    //     "Hold off the commit! You left things in explicitly marked as non-committable",
    //   regex: /do not commit/i,
    // },
    {
      message: "Looks like you still have some work to do?",
      nonBlocking: true,
      regex: /(?:FIXME|TODO)/,
    },
    // {
    //   message: 'Sure looks like you left a "if (true)" somewhere',
    //   regex: /if\s+\(?(?:.*\|\|\s*)?true\)?/,
    // },
    // JS specific
    {
      filter: /\.js$/,
      message:
        "😫 Seems that auto-imports weren’t so great on Material-UI components or styles",
      regex: /^import \{ .* \} from '@material-ui\//,
    },
    {
      filter: /\.js$/,
      message: '🤔 Hu.  There are "console.log(…)" call in there.',
      nonBlocking: true,
      regex: /^\s*console\.log/,
    },
  ],
};
