library(tacotableR)
library(reactR)
library(htmltools)

browsable(
  attachDependencies(
    tagList(
      
    ),
    list(
      html_dependency_react(),
      html_dependency_tacotable()
    )
  )
)

json_spelling <- paste0(
  readLines("https://cdn.rawgit.com/pbeshai/react-taco-table/gh-pages/site/src/data/spelling.json"),
  collapse="\n"
)



jscode <- "
  const data = %s

  const columns = [
    {
      id: 'speller',
      type: DataType.String,
      header: 'Speller',
      renderer(cellData, column, rowData) {
        return <a href={rowData.url} target=\"_blank\">{cellData}</a>;
      },
    },
    {
      id: 'year',
      type: DataType.NumberOrdinal,
      header: 'Year',
    },
    {
      id: 'round',
      type: DataType.NumberOrdinal,
      header: 'Round',
    },
    {
      id: 'affiliation',
      type: DataType.String,
      header: 'Affiliation',
    },
    {
      id: 'word',
      type: DataType.String,
      header: 'Word',
    },
    {
      id: 'spelledWord',
      type: DataType.String,
      header: 'Spelling',
      tdClassName(cellData, columnSummary, column, rowData) {
        if (rowData.error) {
          return 'error-word';
        }
        return 'correct-word';
      },
    },
    {
      id: 'value',
      type: DataType.Number,
      header: 'Mystery',
      renderer: Formatters.decFormat(1),
      firstSortDirection: SortDirection.Descending,
      summarize: Summarizers.minMaxSummarizer,
      tdStyle(cellData, columnSummary) {
        if (cellData === columnSummary.min) {
          return { color: 'red' };
        } else if (cellData === columnSummary.max) {
          return { color: 'green' };
        }
        
        return undefined;
      },
      tdClassName: TdClassNames.minMaxClassName,
    },
    ];

class SimpleExample extends React.Component {
  render() {
    return (
      <TacoTable
      className=\"simple-example\"
      columns={columns}
      columnHighlighting
      data={data}
      striped
      sortable
      />
    );
  }
}
"

browsable(
  attachDependencies(
    tagList(
      tags$script(HTML(
        babel_transform(
          sprintf(
            jscode,
            json_spelling
          )
        )
      ))
    ),
    list(
      html_dependency_react(),
      html_dependency_tacotable()
    )
  )
)