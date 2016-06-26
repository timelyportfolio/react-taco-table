#' Dependencies for react-taco-table
#'
#' @return \code{htmlDependency}
#' @export
html_dependency_tacotable <- function(){
  htmltools::htmlDependency(
    name="react-taco-table",
    version="0.1.1",
    src=system.file("htmlwidgets/lib/react-taco-table/dist", package="tacotableR"),
    script="react-taco-table.js",
    stylesheet="react-taco-table.css"
  )
}
