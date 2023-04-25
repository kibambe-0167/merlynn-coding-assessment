const _base_url = "https://api.up2tom.com/v3";
const _model_id = "58d3bcf97c6b1644db73ad12";
//
//
//
export async function getData() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token 9307bfd5fa011428ff198bb37547f979");
  myHeaders.append("Content-Type", "application/vnd.api+json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  var res = null;

  await fetch(`${_base_url}/model/${_model_id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      res = result;
    })
    .catch((error) => console.warn("error", error));
  return res;
}

export async function query_model(formdata) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token 9307bfd5fa011428ff198bb37547f979");
  myHeaders.append("Content-Type", "application/vnd.api+json");

  var raw = JSON.stringify({
    data: {
      type: "scenario",
      attributes: {
        input: formdata
      },
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  var res = null;

  await fetch(
    "https://api.up2tom.com/v3/decision/58d3bcf97c6b1644db73ad12",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      res = result;
    })
    .catch((error) => console.log("error", error));
  return res;
}
