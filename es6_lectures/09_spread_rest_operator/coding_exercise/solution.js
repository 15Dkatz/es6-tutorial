function butter(...z) {
  let a = [1, 2, 3, ...z];
  return a;
}

butter(4, 5, 6);
