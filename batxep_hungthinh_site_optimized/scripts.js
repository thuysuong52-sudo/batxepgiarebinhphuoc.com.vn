
function handleDemoForm(e){
  e.preventDefault();
  const form = e.target;
  const data = {};
  new FormData(form).forEach((v,k)=>data[k]=v);
  alert("Demo form submitted.\n"+"Bạn cần kết nối backend để gửi dữ liệu thực tế.\n\nForm data:\n"+JSON.stringify(data,null,2));
  console.log("Demo form data:", data);
}
