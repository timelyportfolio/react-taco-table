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

css_example <- readLines("https://cdn.rawgit.com/pbeshai/react-taco-table/gh-pages/site/src/components/SimpleExample.scss")
csscode <- tags$style(
  paste0(
    c(
      "\n",
      css_example[-c(1,length(css_example))],
      "\n"
    ),
    collapse = "\n"
  )
)

jscode <- "
  const data = %s

  const columns = [
    {
      id: 'speller',
      type: TacoTable.DataType.String,
      header: 'Speller',
      renderer(cellData, { column, rowData }) {
        return <a href={rowData.url} target='_blank'>{cellData}</a>;
      },
    },
    {
      id: 'year',
      type: TacoTable.DataType.NumberOrdinal,
      header: 'Year',
    },
    {
      id: 'round',
      type: TacoTable.DataType.NumberOrdinal,
      header: 'Round',
    },
    {
      id: 'affiliation',
      type: TacoTable.DataType.String,
      header: 'Affiliation',
    },
    {
      id: 'word',
      type: TacoTable.DataType.String,
      header: 'Word',
    },
    {
      id: 'spelledWord',
      type: TacoTable.DataType.String,
      header: 'Spelling',
      tdClassName(cellData, { columnSummary, column, rowData }) {
        if (rowData.error) {
          return 'error-word';
        }
        return 'correct-word';
      },
    },
    {
      id: 'value',
      type: TacoTable.DataType.Number,
      header: 'Mystery',
      renderer: TacoTable.Formatters.decFormat(1),
      firstSortDirection: TacoTable.SortDirection.Descending,
      summarize: TacoTable.Summarizers.minMaxSummarizer,
    tdStyle(cellData, { columnSummary }) {
      if (cellData === columnSummary.min) {
        return { color: 'red' };
      } else if (cellData === columnSummary.max) {
        return { color: 'green' };
      }
      
      return undefined;
    },
      tdClassName: TacoTable.TdClassNames.minMaxClassName,
    },
    ];

class SimpleExample extends React.Component {
  render() {
    return (
      <TacoTable.TacoTable
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

ReactDOM.render(<SimpleExample />, document.body);
"

browsable(
  attachDependencies(
    tagList(
      tags$head(csscode),
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