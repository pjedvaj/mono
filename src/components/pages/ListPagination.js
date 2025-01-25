import React from 'react';
import { observer, inject } from 'mobx-react';

import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import 'rc-pagination/assets/index.css';

@inject('VehicleStore', 'ListViewStore')
@observer
class ListPagination extends React.Component {

  render() {

    const { VehicleModel } = this.props.VehicleStore;

    const { onChange, current, pageSize } = this.props.ListViewStore;

    return (
      <div className="pagination__container">
        <Pagination className="pagination" onChange={onChange}
                    current={current}
                    pageSize={pageSize}
                    total={VehicleModel.length}
                    locale={localeInfo} />
      </div>
    );
  }
}

export default ListPagination;
