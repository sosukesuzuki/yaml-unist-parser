import { getFirstContent, testCases } from "../helpers";
import { BlockLiteral } from "../types";

testCases([
  ["|\n  123\n  456\n\n\n", getFirstContent()],
  ["|+\n  123\n  456\n\n\n", getFirstContent()],
  ["|-\n  123\n  456\n\n\n", getFirstContent()],
  ["|1\n  123\n  456\n\n\n", getFirstContent()],
  ["|1+\n  123\n  456\n\n\n", getFirstContent()],
  ["|1-\n  123\n  456\n\n\n", getFirstContent()],
  ["| # hello\n", root => root],
  ["| # hello \n  123\n  456\n\n\n", root => root],
  [
    "  !!str &anchor \n  # comment  \n|\n  123\n  456\n\n\n",
    [
      getFirstContent(),
      root => getFirstContent<BlockLiteral>(root).middleComments[0],
    ],
  ],
]);
