document.write("<script type='text/javascript' src='https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js'></script>");


// 视频大小
const constraints = { audio: true,
  video: { facingMode: 'user' },
  width: { min: 720, ideal: 720 },
  height: { min: 480, ideal: 480 },
};

const MediaUtils = {
  /**
   * 获取用户媒体设备(处理兼容的问题)
   * @param videoEnable {boolean} - 是否启用摄像头
   * @param audioEnable {boolean} - 是否启用麦克风
   * @param callback {Function} - 处理回调
   */
  getUserMedia(videoEnable, audioEnable, callback) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
      || navigator.msGetUserMedia || window.getUserMedia;
    const constraints1 = { video: videoEnable, audio: audioEnable };
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints1).then((stream) => {
        callback(false, stream);
      }).catch((err) => {
        callback(err);
      });
    } else if (navigator.getUserMedia) {
      navigator.getUserMedia(constraints1, (stream) => {
        callback(false, stream);
      }, (err) => {
        callback(err);
      });
    } else {
      callback(new Error('Not support userMedia'));
    }
  },

  /**
   * 关闭媒体流
   * @param stream {MediaStream} - 需要关闭的流
   */
  closeStream(stream) {
    if (typeof stream.stop === 'function') {
      stream.stop();
    } else {
      const trackList = [stream.getAudioTracks(), stream.getVideoTracks()];

      for (let i = 0; i < trackList.length; i++) {
        const tracks = trackList[i];
        if (tracks && tracks.length > 0) {
          for (let j = 0; j < tracks.length; j++) {
            const track = tracks[j];
            if (typeof track.stop === 'function') {
              track.stop();
            }
          }
        }
      }
    }
  },
};

// 用于存放 MediaRecorder 对象和音频Track，关闭录制和关闭媒体设备需要用到
let recorder,
  mediaStream;

// 用于存放录制后的音频文件对象和录制结束回调
let recorderFile,
  stopRecordCallback;

// 用于存放是否开启了视频录制
let videoEnabled = false;

// 录制短语音
function startRecord(enableVideo) {
  videoEnabled = enableVideo;
  MediaUtils.getUserMedia(true, true, (err, stream) => {
    if (err) {
      throw err;
    } else {
      // 通过 MediaRecorder 记录获取到的媒体流
      recorder = new MediaRecorder(stream);
      mediaStream = stream;
      let chunks = [],
        startTime = 0;
      recorder.ondataavailable = function (e) {
        chunks.push(e.data);
      };
      recorder.onstop = function (e) {
        recorderFile = new Blob(chunks, { type: recorder.mimeType });
        chunks = [];
        if (stopRecordCallback != null) {
          stopRecordCallback();
        }
      };
      recorder.start();
    }
  });
}

// 停止录制
function stopRecord(callback) {
  stopRecordCallback = callback;
  // 终止录制器
  recorder.stop();
  // 关闭媒体流
  MediaUtils.closeStream(mediaStream);
}

// 播放录制的音频
function playRecord() {
  const url = URL.createObjectURL(recorderFile);
  const dom = document.createElement(videoEnabled ? 'video' : 'audio');
  dom.autoplay = true;
  dom.src = url;
  if (videoEnabled) {
    dom.width = 640;
    dom.height = 480;
    dom.style.zIndex = '9999999';
    dom.style.position = 'fixed';
    dom.style.left = '0';
    dom.style.right = '0';
    dom.style.top = '0';
    dom.style.bottom = '0';
    dom.style.margin = 'auto';
    document.body.appendChild(dom);
  }
}
export function start() {
  startRecord(true);
  // 5秒后结束录制并播放
  setTimeout(() => {
    // 结束
    stopRecord(() => {
      // 播放
      playRecord();
    });
  }, 5000);
}

export function send() {
  const data = new FormData();

  // data.append('username', 'test');
  data.append('photo', recorderFile);

  const req = new XMLHttpRequest();
  req.open('POST', 'http://172.24.8.44:5000/up_photo', true);
  req.send(data);
  if (req.readyState === 4) {
    // 判断对象状态是否交互成功,如果成功则为200
    if (req.status === 200) {
      // 接收数据,得到服务器输出的纯文本数据
      const response = req.responseText;
      // 得到div的节点将数据显示在div上
      // const divresult = document.getElementById('result');
      alert(response);
    }
  }
  // request.onreadystatechange = function () {
  //   // 若响应完成且请求成功
  //   if (request.readyState === 4 && request.status === 200) {
  //     alert(request.toString());
  //   }
  // };
}
let max = 1;

function begin_video(callback) {
  max = 1;
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }

  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function (constraints) {
      // First get ahold of the legacy getUserMedia, if present
      const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }

      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(((resolve, reject) => {
        getUserMedia.call(navigator, constraints, resolve, reject);
      }));
    };
  }
  // const button = document.getElementById('shot');
  // button.onclick = function () {
  //   // 启动录制视频 (若需要录制音频参数指定为 false 即可)
  //   startRecord(true);
  //   // 5秒后结束录制并播放
  //   setTimeout(() => {
  //     // 结束
  //     stopRecord(() => {
  //       // 播放
  //       playRecord();
  //     });
  //   }, 5000);
  // };
  // const button2 = document.getElementById('over');
  // button2.onclick = function () {
  //   const data = new FormData();
  //
  //   data.append('username', 'test');
  //   data.append('userfile', recorderFile);
  //
  //   const req = new XMLHttpRequest();
  //   req.open('POST', 'http://xxx/xxx');
  //   req.send(data);
  // };
  navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
    alert('准备开始');
    console.log('getUserMedia:', mediaStream);
    const video = document.querySelector('video');
    if ('srcObject' in video) {
      video.srcObject = mediaStream;
    } else {
      video.src = window.URL.createObjectURL(mediaStream);
    }
    video.onloadedmetadata = function (e) {
      const promise = document.querySelector('video').play();
      if (promise !== undefined) {
        promise.catch((error) => {
          alert('浏览器禁止访问');
        }).then(() => {
          // Auto-play started
          video.play();
        });
      }
    };

    // 使用canvas进行拍照
    const canvas = document.getElementById('canvas');
    canvas.setAttribute('width', 720);
    canvas.setAttribute('height', 480);
    const button = document.getElementById('shot');

    button.onclick = function fun() {
      if (max === 1) {
        for (let i = 0; i < 5; i += 1) {
          if (max === 1) {
            // alert(i);
            setTimeout(fun, 50);
            canvas.getContext('2d').drawImage(video, 0, 0, 720, 480);
            $('img').css('src', canvas.toDataURL('image/png'));
            const data = canvas.toDataURL('image/png');

            const formData = new FormData();
            formData.append('s', 'ok');
            formData.append('photo', data);
            // const xmlhttp = new XMLHttpRequest();

            $.ajax({
              //url: 'http://52.80.240.181:5000/NPMp_photo',
              url: 'http://172.20.53.245:5000/up_photo',
              // url: 'http://172.24.8.44:5000/up_photo',
              type: 'POST',
              data: formData,
              async: true,
              cashe: false,
              contentType: false,
              processData: false,
              success(returndata) {
                if (returndata.flag === 1) {
                  const str = JSON.stringify(returndata.msg);
                  alert(str);
                } else if (returndata.flag === 2) {
                  const str = JSON.stringify(returndata.msg);
                  alert(str);
                }
                // alert(returndata);
              },
              error(returndata) {
              //  alert(`${returndata}over`);
              },
            });
          }
        }
      }
      callback();
    };
  }).catch((err) => {
    console.log();
  });
}

function fun2() {
  const button_over = document.getElementById('over');
  button_over.onclick = function fun3() {
    max = 0;
    const canvas = document.getElementById('canvas');
    canvas.setAttribute('width', 720);
    canvas.setAttribute('height', 480);
    $('img').css('src', canvas.toDataURL('image/png'));
    const data = canvas.toDataURL('image/png');
    const formData = new FormData();
    formData.append('s', 'no');
    formData.append('photo', data);
    // const xmlhttp = new XMLHttpRequest();
    alert('已发送，请等待回传消息');
    $.ajax({
      //url: 'http://52.80.240.181:5000/up_photo',
      url: 'http://172.20.53.245:5000/up_photo',
      // url: 'http://172.24.8.44:5000/up_photo',
      type: 'POST',
      data: formData,
      async: true,
      cashe: false,
      contentType: false,
      processData: false,
      success(returndata) {
        if (returndata.flag === 1) {
          const str = JSON.stringify(returndata.msg);
          alert(str);
        } else if (returndata.flag === 2) {
          const str = JSON.stringify(returndata.msg);
          alert(str);
        } else {
          const str = JSON.stringify(returndata.msg);
          alert(str);
        }
        // alert(returndata);
      },
      error(returndata) {
        alert('error');
        //  alert(`${returndata}over`);
      },
    });
  };
}

export function totalbegin() {
  begin_video(() => {
    // 播放
    fun2();
  });
}
export default begin_video();
