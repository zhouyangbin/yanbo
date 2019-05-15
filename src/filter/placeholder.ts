//为空的时候显示 "无"
function placeholder(value: any, placeholder = "无") {
  if (value == "" || value == undefined || value == null) return placeholder;
  return value;
}

export default placeholder;
