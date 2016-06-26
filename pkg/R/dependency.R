html_dependency_tacotable <- function(){
  htmltools::htmlDependency(
    name="react-taco-table",
    version="0.1.1",
    src=system.file("htmlwidgets/lib/react-taco-table/dist"),
    script="react-taco-table.js",
    stylesheet="react-taco-table.css"
  )
}