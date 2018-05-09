// 为了去除obj中没有值的k
export const compact = (data: any) => {
  let obj: any = {};
  Object.keys(data)
    .filter(k => data[k] !== undefined && data[k] !== "")
    .forEach(k => {
      obj[k] = data[k];
    });
  //   console.log(obj)
  return obj;
};
