document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const freqSyncToggle = document.getElementById('freq-sync-toggle');
    const freqInputRow = document.getElementById('freq-input-row');
    const freqInput = document.getElementById('freq-input');
    const dpdEstimateBtn = document.getElementById('dpd-estimate-btn');
    const estimatingModal = document.getElementById('estimating-modal');
    const estimateContent = estimatingModal.querySelector('p');
    const correctionToggle = document.getElementById('correction-toggle');
    const dpdResetBtn = document.getElementById('dpd-reset-btn');
    const resetConfirmModal = document.getElementById('reset-confirm-modal');
    const resetConfirmBtn = document.getElementById('reset-confirm');
    const resetCancelBtn = document.getElementById('reset-cancel');
    const estimationResult = document.getElementById('estimation-result');

    // 初始化时清空估计结果
    estimationResult.value = '';

    // 频率同步开关事件
    freqSyncToggle.addEventListener('change', function() {
        if (this.checked) {
            freqInputRow.style.display = 'none';
        } else {
            freqInputRow.style.display = '';
        }
    });

    // 频率输入框精确调节
    freqInput.addEventListener('input', function() {
        let value = parseFloat(this.value);
        if (!isNaN(value)) {
            this.value = value.toFixed(3);
        }
    });

    // DPD参数估计按钮点击事件
    dpdEstimateBtn.addEventListener('click', function() {
        estimatingModal.style.display = 'block';
        estimateContent.textContent = 'DPD校正中...';
        
        // 5秒后显示成功信息
        setTimeout(() => {
            estimateContent.textContent = 'DPD校正成功！';
            // 再等1秒后关闭弹窗并更新结果
            setTimeout(() => {
                estimatingModal.style.display = 'none';
                estimationResult.value = '10 MHz';
            }, 1000);
        }, 5000);
    });

    // DPD参数复位按钮点击事件
    dpdResetBtn.addEventListener('click', function() {
        resetConfirmModal.style.display = 'block';
    });

    // 复位确认和取消按钮事件
    resetConfirmBtn.addEventListener('click', function() {
        resetConfirmModal.style.display = 'none';
        // 这里可以添加复位操作的接口调用
    });

    resetCancelBtn.addEventListener('click', function() {
        resetConfirmModal.style.display = 'none';
    });

    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === resetConfirmModal) {
            resetConfirmModal.style.display = 'none';
        }
    });

    // 为后续接口预留的数据更新函数
    function updateFrequencyData(value) {
        freqInput.value = value.toFixed(3);
    }

    function updateEstimationResult(value) {
        estimationResult.value = value;
    }
});