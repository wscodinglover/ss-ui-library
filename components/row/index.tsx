import React from 'react';
import { Row } from 'antd';
import {RowProps} from 'antd/lib/row'

/*
 * @notice 栅格组件，基于antd/Grid，全部为新增部分
 *
 * */
const SSGridRow: React.FC<RowProps> = props => <Row {...props} />;

export default SSGridRow;
