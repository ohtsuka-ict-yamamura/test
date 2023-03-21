import '@testing-library/jest-dom/extend-expect';

jest.mock('remark-emoji', () => () => {});
jest.mock('remark-frontmatter', () => () => {});
jest.mock('remark-gfm', () => () => {});
jest.mock('remark-parse', () => () => {});
jest.mock('remark-rehype', () => () => {});
jest.mock('rehype-prism-plus', () => () => {});
jest.mock('rehype-stringify', () => () => {});
jest.mock('unified', () => () => {});
