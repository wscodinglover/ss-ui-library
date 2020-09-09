import pkg from '../package.json';

const testDist = process.env.LIB_DIR === 'dist';

describe('ss-ui-library dist files', () => {
  // https://github.com/ant-design/ant-design/issues/1638
  // https://github.com/ant-design/ant-design/issues/1968
  it('exports modules correctly', () => {
    const rcantd = testDist ? require('../dist/ss-ui-library') : require('../components'); // eslint-disable-line
    expect(Object.keys(rcantd)).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/1970
  // https://github.com/ant-design/ant-design/issues/1804
  if (testDist) {
    it('should have ss-ui-library.version', () => {
      const rcantd = require('../dist/ss-ui-library'); // eslint-disable-line
      expect(rcantd.version).toBe(pkg.version);
    });
  }
});
