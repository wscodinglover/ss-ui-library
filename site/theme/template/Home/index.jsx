import React from 'react';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet-async';
import { Menu, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Page1 from './Page1';
import Footer from '../Layout/Footer';
import * as utils from '../utils';

// To store style which is only for Home and has conflicts with others.
function getStyle() {
  return `
    .main-wrapper {
      padding: 0;
    }
    #header {
      padding: 0 24px;
    }
    #header #logo {
      padding: 0;
    }
    #header .ant-row > div:last-child .header-lang-button {
      margin-right: 0;
    }
    .content-wrapper {
      padding: 40px;
    }
    .markdown .toc {
      background: #f2f4f5;
      border-left: 2px solid #eee;
    }
    .toc .bisheng-toc-h2 {
      width: auto;
    }
  `;
}

function getModuleData(props) {
  const { pathname } = props.location;
  const moduleName = /^\/?components/.test(pathname)
    ? 'components'
    : pathname
      .split('/')
      .filter(item => item)
      .slice(0, 2)
      .join('/');
  let moduleData;
  switch (moduleName) {
    case 'docs/react':
    case 'changelog':
    case 'changelog-cn':
    case 'index-cn':
    case 'index':
      moduleData = [...props.picked['docs/react'], ...props.picked.changelog];
      break;
    default:
      moduleData = props.picked[moduleName];
  }
  const excludedSuffix = utils.isZhCN(props.location.pathname) ? 'en-US.md' : 'zh-CN.md';
  return moduleData.filter(({ meta }) => !meta.filename.endsWith(excludedSuffix));
}

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  static contextTypes = {
    isMobile: PropTypes.bool.isRequired,
  };

  // eslint-disable-next-line class-methods-use-this
  docRender(props) {
    const moduleData = getModuleData(props)
    const { pathname } = props.location;
    const locale = utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';
    return (
      <Menu
        defaultSelectedKeys={[['index-cn', 'index-en'].includes(pathname) ? `docs/react/${pathname}/` : pathname]}
        mode="inline"
      >
        {
          moduleData.length && moduleData
            .sort((a, b) => {
              return a.meta.order - b.meta.order
            })
            .map((menuItem) => {
              const {title, filename} = menuItem.meta
              const url = filename.replace(/((\.zh-CN)|(\.en-US))?\.md$/i, '').toLowerCase();
              console.log(`${url}-${locale === 'zh-CN' ? 'cn' : 'en'}/`);
              return (
                <Menu.Item key={`${url}-${locale === 'zh-CN'?'cn':'en'}/`}>
                  <a
                    href={utils.getLocalizedPathname(
                      `${url}/`,
                      locale === 'zh-CN',
                    )}
                  >
                    {title}
                  </a>
                </Menu.Item>
              )
            })
        }
      </Menu>
    )
  }

  render() {
    const { intl } = this.props;
    const { isMobile } = this.context;
    const childProps = { ...this.props, isMobile, locale: intl.locale };
    console.log(childProps);
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: getStyle() }} /> {/* eslint-disable-line */}
        <Helmet encodeSpecialCharacters={false}>
          <title>{`React Ant - ${intl.formatMessage({ id: 'app.home.slogan' })}`}</title>
        </Helmet>
        <Page1 {...childProps} />
        {/*<Footer />*/}
        {/*<Row>*/}
        {/*  <Col span={4} style={{paddingTop: '40px'}}>*/}
        {/*    {this.docRender(this.props)}*/}
        {/*  </Col>*/}
        {/*  <Col span={20}>*/}
        {/*    */}
        {/*  </Col>*/}
        {/*</Row>*/}
      </>
    );
  }
}

export default injectIntl(Home);
