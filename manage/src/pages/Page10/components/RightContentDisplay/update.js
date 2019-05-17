document.write("<script type='text/javascript' src='https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js'></script>");


// 视频大小

const up_file = function () {
  const formData = new FormData($('#uploadForm')[0]);
  formData.append('phote', blob, 'myfile.txt');
  $.ajax({
    url: 'http://172.24.8.44:5000/up_photo',
    type: 'POST',
    data: formData,
    async: true,
    cashe: false,
    contentType: false,
    processData: false,
    success(returndata) {
      alert(returndata);
    },
  });
};

export default up_file();
