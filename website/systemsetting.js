// 密码修改功能
document.getElementById("apply-password-btn").addEventListener("click", function() {
  const currentPassword = document.getElementById("current-password").value;
  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-new-password").value;

  // 表单验证
  if (!currentPassword || !newPassword || !confirmPassword) {
      alert("请填写所有密码字段！");
      return;
  }

  if (newPassword !== confirmPassword) {
      alert("两次输入的新密码不一致！");
      return;
  }

  // 模拟密码修改成功
  alert("密码修改成功！");
  
  // 清空输入框
  document.getElementById("current-password").value = "";
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-new-password").value = "";
});

// 自动获取系统时间
document.getElementById("get-system-time").addEventListener("click", function() {
  const now = new Date();
  
  // 格式化日期: YYYY-MM-DD
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  
  // 格式化时间: HH:MM:SS
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeStr = `${hours}:${minutes}:${seconds}`;
  
  // 填充到输入框
  document.getElementById("date").value = dateStr;
  document.getElementById("time").value = timeStr;
});

// 保存日期时间设置
document.getElementById("save-date-time").addEventListener("click", function() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  
  // 验证输入
  if (!date || !time) {
      alert("请输入完整的日期和时间！");
      return;
  }
  
  // 简单的日期格式验证
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  const timePattern = /^\d{2}:\d{2}:\d{2}$/;
  
  if (!datePattern.test(date)) {
      alert("请输入正确的日期格式：YYYY-MM-DD");
      return;
  }
  
  if (!timePattern.test(time)) {
      alert("请输入正确的时间格式：HH:MM:SS");
      return;
  }
  
  // 模拟保存成功
  alert("日期和时间设置已保存！");
});

// 为日期和时间输入框添加占位符
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("date").placeholder = "YYYY-MM-DD";
  document.getElementById("time").placeholder = "HH:MM:SS";
});