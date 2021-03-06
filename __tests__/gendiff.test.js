import { readFileSync } from 'fs';
import genDiff from '../src';

const getPathToFixture = fileName => `__tests__/__fixtures__/${fileName}`;

describe('Compare flat configs', () => {
  const expected = readFileSync(getPathToFixture('expected'), 'utf8');

  it('#JSON', () => {
    expect(genDiff(getPathToFixture('before.json'), getPathToFixture('after.json')))
      .toBe(expected);
  });

  it('#YAML', () => {
    expect(genDiff(getPathToFixture('before.yaml'), getPathToFixture('after.yaml')))
      .toBe(expected);
  });

  it('#INI', () => {
    expect(genDiff(getPathToFixture('before.ini'), getPathToFixture('after.ini')))
      .toBe(expected);
  });
});

describe('Compare nested configs', () => {
  const expected = readFileSync(getPathToFixture('nestedExpected'), 'utf8');

  it('#JSON', () => {
    expect(genDiff(getPathToFixture('nestedBefore.json'), getPathToFixture('nestedAfter.json')))
      .toBe(expected);
  });

  it('#YAML', () => {
    expect(genDiff(getPathToFixture('nestedBefore.yaml'), getPathToFixture('nestedAfter.yaml')))
      .toBe(expected);
  });

  it('#INI', () => {
    expect(genDiff(getPathToFixture('nestedBefore.ini'), getPathToFixture('nestedAfter.ini')))
      .toBe(expected);
  });
});

describe('Compare configs in plain format', () => {
  const expected = readFileSync(getPathToFixture('expectedPlain'), 'utf8');
  it('#JSON / INI', () => {
    expect(genDiff(getPathToFixture('nestedBefore.json'), getPathToFixture('nestedAfter.ini'), 'plain'))
      .toBe(expected);
  });
});

describe('Compare configs in JSON format', () => {
  const expected = readFileSync(getPathToFixture('expectedJSON'), 'utf8');
  it('#YAML / JSON', () => {
    expect(genDiff(getPathToFixture('before.yaml'), getPathToFixture('after.json'), 'json'))
      .toBe(expected);
  });
});
