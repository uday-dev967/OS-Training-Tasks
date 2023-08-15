function merge(l, r) {
  let out = [];

  let i = 0;
  let j = 0;
  const leftLength = l.length;
  const rightLength = r.length;
  while (i < rightLength && j < leftLength) {
    if (r[i] < l[j]) {
      out.push(r[i]);
      i++;
    } else {
      out.push(l[j]);
      j++;
    }
  }
  out = [...out, ...l.slice(j, leftLength)];
  out = [...out, ...r.slice(i, rightLength)];
  // console.log(out);
  return out;
}

function divide(arr) {
  const n = arr.length;
  if (n === 1) {
    return arr;
  }
  const l = divide(arr.slice(0, Math.floor(n / 2)));
  const r = divide(arr.slice(Math.floor(n / 2), n));
  console.log(l, r);
  return merge(l, r);
}

const x = [2, 4, 8, 7, 6, 1, 3, 5];
console.log(divide(x));
