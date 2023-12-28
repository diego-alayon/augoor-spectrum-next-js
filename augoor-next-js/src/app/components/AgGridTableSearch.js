import React, { useEffect, useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';


ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  MenuModule,
  ColumnsToolPanelModule,
]);

const CompanyLogoRenderer = ({ value }) => (
  <span style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
    {value && (
      <img
        alt={`${value} Logo`}
        src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`}
        style={{ width: '25px', marginRight: '12px' }}
      />
    )}
    <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      {value}
    </p>
  </span>
);

const MissionResultRenderer = ({ value }) => (
  <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img
      alt={`${value}`}
      src={`https://www.ag-grid.com/example-assets/icons/${value ? 'tick-in-circle' : 'cross-in-circle'}.png`}
      style={{ width: '20px', height: '20px' }}
    />
  </span>
);

const dateFormatter = (params) => {
  return new Date(params.value).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const gridOptions = {
  columnDefs: [
      // column definition configured to show group values with the cell renderer set to 'group'
      {
          showRowGroup: true,
          cellRenderer:'agGroupCellRenderer',
          // provide extra params to the cellRenderer
          cellRendererParams: {
              // turn off the row count
              suppressCount: true,
              // turn off double click for expand
              suppressDoubleClickExpand: true,
              // enable checkbox selection
              checkbox: true,
          }
      }
  ],

  // other grid options ...
}

const AgGridTableSearch = () => {
  const [rowData, setRowData] = useState([]);

  const colDefs = useMemo(() => [
    {
      field: 'mission',
      width: 150,
      checkboxSelection: true,
      filter: 'agTextColumnFilter',
      popup: true,
      menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'],

    },
    {
      field: 'company',
      width: 130,
      cellRenderer: CompanyLogoRenderer,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'location',
      width: 225,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'date',
      valueFormatter: dateFormatter,
      filter: 'agDateColumnFilter',
    },
    {
      field: 'price',
      width: 130,
      valueFormatter: (params) => {
        return '£' + params.value.toLocaleString();
      },
      filter: 'agNumberColumnFilter',
    },
    {
      field: 'successful',
      width: 120,
      cellRenderer: MissionResultRenderer,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'rocket',
      filter: 'agTextColumnFilter',
    },
    {
        field: 'rocket',
        filter: 'agTextColumnFilter',
      },
      {
        field: 'rocket',
        filter: 'agTextColumnFilter',
      },
  ], []);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData));
  }, []);

  const defaultColDef = useMemo(() => ({
    filter: true,
    editable: true,
    resizable: true,
    floatingFilter: true
  }), []);

  return (
    <div className="ag-theme-quartz-dark" style={{ height: '600px', width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        rowSelection="multiple"
      />
    </div>
  );
};

export default AgGridTableSearch;
