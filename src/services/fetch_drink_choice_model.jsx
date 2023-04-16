export async function getData(model_id = "58d3bcf97c6b1644db73ad12") {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token 9307bfd5fa011428ff198bb37547f979");
  myHeaders.append("Content-Type", "application/vnd.api+json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  var res = null;

  await fetch(`https://api.up2tom.com/v3/models/${model_id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      res = result;
    })
    .catch((error) => console.warn("error", error));
  return res;
}
