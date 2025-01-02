
let danhSachKhanhHang = [];
class SoTietKiem {
    constructor(maSo, loaiTietKiem, hoTenKhachHang, chungMinhNhanDan, ngayMoSo, soTienGui) {
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.hoTenKhachHang = hoTenKhachHang;
        this.chungMinhNhanDan = chungMinhNhanDan;
        this.ngayMoSo = ngayMoSo;
        this.soTienGui = soTienGui;
    }
}

function displayCustomers(customers) {
    let table =  document.getElementById("table").innerHTML;
    for (let i = 0; i < danhSachKhanhHang.length; i++) {
        table += `<tr>
        <td>${danhSachKhanhHang[i].maSo}</td> 
          <td>${danhSachKhanhHang[i].loaiTietKiem}</td> 
          <td>${danhSachKhanhHang[i].hoTenKhachHang}</td>  
          <td>${danhSachKhanhHang[i].chungMinhNhanDan}</td>
          <td>${danhSachKhanhHang[i].ngayMoSo}</td>
          <td>${danhSachKhanhHang[i].soTienGui}</td>
          </tr>`
    }
    document.getElementById("table").innerHTML = table;
}

// Hàm thêm sổ tiết kiệm
function createCustomers() {

    let maSo = prompt("Nhập mã số sổ tiết kiệm (tối đa 5 ký tự):");
    // Kiểm tra mã số đã tồn tại trong danh sách chưa
    if (danhSachKhanhHang.find(book => book.maSo === maSo)) {
        alert("Mã số sổ tiết kiệm đã tồn tại!");
        return;
    }

    let loaiTietKiem = prompt("Nhập loại tiết kiệm (tối đa 10 ký tự):");
    let hoTenKhanhHang = prompt("Nhập họ tên khách hàng (tối đa 30 ký tự):");
    let chungMinhNhanDan = +prompt("Nhập chứng minh nhân dân (kiểu số):");
    let ngayMoSo = prompt("Nhập ngày mở sổ:");
    let soTienGui = +prompt("Nhập số tiền gửi:");

console.log(soTienGui);
    if (maSo.length > 5 || loaiTietKiem.length > 10 || hoTenKhanhHang.length > 30 || isNaN(chungMinhNhanDan) || isNaN(soTienGui)) {
        alert("Dữ liệu nhập không hợp lệ, vui lòng nhập lại!");
        return;
    }

    let soTietKiem = new SoTietKiem(maSo, loaiTietKiem, hoTenKhanhHang, chungMinhNhanDan,ngayMoSo, soTienGui);
    danhSachKhanhHang.push(soTietKiem);

    alert("Sổ tiết kiệm đã được thêm thành công!");
    displayCustomers();
}
function deleteCustomers() {
    let ms = prompt("Nhập mã số cần xóa:");
    for (let i = 0; i < danhSachKhanhHang.length; i++) {
        if (danhSachKhanhHang[i].maSo === ms) {
            danhSachKhanhHang.splice(i, 1);
            break;  // Exit the loop after removing the item
        }
    }
    displayCustomers();
}
