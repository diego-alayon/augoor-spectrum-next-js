// components/GridExample.js
import React, { useEffect, useState, useMemo } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';

// Register the required feature modules with the Grid
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  SetFilterModule,
  MenuModule,
  ColumnsToolPanelModule,
  RowGroupingModule,
]);

const AgGridTabledemo = () => {
  const [rowData, setRowData] = useState([]);

  const columnDefs = useMemo(() => [
    { headerName: 'Athlete', field: 'athlete', minWidth: 200, showRowGroup: true, rowGroup: true },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Country', field: 'country', minWidth: 200 },
    { headerName: 'Year', field: 'year' },
    { headerName: 'Date', field: 'date', minWidth: 180 },
    { headerName: 'Sport', field: 'sport', minWidth: 200 },
    { headerName: 'Gold', field: 'gold' },
    { headerName: 'Silver', field: 'silver' },
    { headerName: 'Bronze', field: 'bronze' },
    { headerName: 'Total', field: 'total' },
  ], []);

  const defaultColDef = useMemo(() => ({
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true,  
  }), []);



  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div className="ag-theme-quartz-dark" style={{ height: 600, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        groupDisplayType={'custom'}
        groupDefaultExpanded={1}
        groupSelectsChildren={true}
      />
    </div>
  );
};

export default AgGridTabledemo;
