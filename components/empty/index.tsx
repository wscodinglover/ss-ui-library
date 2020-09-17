import React from 'react';
import classNames from 'classnames';

/*
* Props
* @params [string] icon
* @params [ReactNode | string] description
* @params [ReactNode | string] image
* @params [CSSProperties] imageStyle
*
* */

type EmptyProps = {
  icon: string | undefined | null,
  description: string | undefined | null,
  vertical: boolean
}

const SS_Empty = (props: EmptyProps): JSX.Element => {
  const {icon, vertical, description} = props;
  return (
    <div className={classNames("ss-empty", {"ss-empty-colum": vertical})}>
      <span className="ss-desc-icon">
        {icon && <span className="sumscope-icon">{icon}</span>}
      </span>
      <p className="desc">{description || 'No Data / No Source'}</p>
    </div>
  )
}

export default SS_Empty;
