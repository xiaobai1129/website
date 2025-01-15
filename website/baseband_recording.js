document.addEventListener('DOMContentLoaded', function() {
    const durationInput = document.getElementById('recording-duration');
    const recordedTime = document.getElementById('recorded-time');
    const recordBtn = document.getElementById('record-btn');
    const spinnerUp = document.querySelector('.spinner-up');
    const spinnerDown = document.querySelector('.spinner-down');
    const notification = document.getElementById('notification');

    let recordingInterval;
    let currentTime = 0;
    let targetDuration = 0;

    // 录制时长输入处理
    durationInput.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (value > 0) {
            targetDuration = value;
            recordBtn.classList.remove('disabled');
        } else {
            recordBtn.classList.add('disabled');
        }
    });

    // 上下调节按钮处理
    spinnerUp.addEventListener('click', function() {
        const currentValue = parseInt(durationInput.value) || 0;
        durationInput.value = currentValue + 1;
        durationInput.dispatchEvent(new Event('input'));
    });

    spinnerDown.addEventListener('click', function() {
        const currentValue = parseInt(durationInput.value) || 0;
        if (currentValue > 1) {
            durationInput.value = currentValue - 1;
            durationInput.dispatchEvent(new Event('input'));
        }
    });

    // 录制按钮处理
    recordBtn.addEventListener('click', function() {
        if (this.classList.contains('disabled')) {
            return;
        }

        if (this.textContent === '开始录制') {
            startRecording();
        } else {
            stopRecording();
        }
    });

    function startRecording() {
        currentTime = 0;
        recordedTime.textContent = '0';
        recordBtn.textContent = '结束录制';
        durationInput.disabled = true;

        recordingInterval = setInterval(() => {
            currentTime++;
            recordedTime.textContent = currentTime;

            if (currentTime >= targetDuration) {
                stopRecording();
            }
        }, 1000);
    }

    function stopRecording() {
        clearInterval(recordingInterval);
        durationInput.disabled = false;
        recordBtn.textContent = '开始录制';
        
        // 显示通知
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 1000);
    }

    // 限制只能输入数字
    durationInput.addEventListener('keypress', function(e) {
        if (!/\d/.test(e.key)) {
            e.preventDefault();
        }
    });
});