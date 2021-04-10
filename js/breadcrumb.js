export function HandleBreadcrumb(list, id) {
  var path = window.location.pathname;
  var page = path.split("/").pop().split(".html");
  console.log(`page[0]`, page[0]);
  list.map(({ id, name }) => {
    if (id === page[0]) {
      console.log(`page`, name);
      document.getElementById(id).innerHTML = name;
    }
  });
}
