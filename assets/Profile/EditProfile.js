const DomId = (id) => {
  return document.getElementById(id);
};

function handleFile() {
  DomId("getFile").click();
}

DomId("files").addEventListener("change", function () {
  if (this?.files[0]?.name) {
    DomId("fileLabel").innerHTML = "1 photo selected";
  } else {
    DomId("fileLabel").innerHTML = "No file choosing";
  }
});
