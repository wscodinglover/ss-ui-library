import React from 'react';
import { Col } from 'antd';
import {ColProps} from 'antd/lib/col'

/*
 * @notice 栅格组件，基于antd/Grid，全部为新增部分
 *
 * */
const SSGridCol: React.FC<ColProps> = props => <Col {...props} />;

export default SSGridCol;
