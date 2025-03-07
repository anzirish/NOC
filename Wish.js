let obj = {};
function numberOfWish(N, S) {
  for (let i = 0; i < N; i++) {
    let char = S[i];

    obj[char] = (obj[char] || 0) + 1;
  }

  let count = 0;

  while (true) {
    if (obj["w"] == undefined || obj["w"] == 0) {
      break;
    } else {
      obj["w"] = obj["w"] - 1;
    }

    if (obj["i"] == undefined || obj["i"] == 0) {
      break;
    } else {
      obj["i"] = obj["i"] - 1;
    }

    if (obj["s"] == undefined || obj["s"] == 0) {
      break;
    } else {
      obj["s"] = obj["s"] - 1;
    }

    if (obj["h"] == undefined || obj["h"] == 0) {
      break;
    } else {
      obj["h"] = obj["h"] - 1;
    }

    count++;
  }

  console.log(count);
}

numberOfWish(8, "wishwish");
