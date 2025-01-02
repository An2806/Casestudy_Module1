let danhSachKhanhHang = " ";

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
    let table = '';
    for (let i = 0; i < danhSachKhanhHang.length; i++) {
        table += `<tr>
        <td>${danhSachKhanhHang[i].maSo}</td> 
          <td>${danhSachKhanhHang[i].loaiTietKiem}</td> 
          <td>${danhSachKhanhHang[i].hoTenKhachHang}</td>  
          <td>${danhSachKhanhHang[i].chungMinhNhanDan}</td>
          <td>${danhSachKhanhHang[i].ngayMoSo}</td>
          <td>${danhSachKhanhHang[i].soTienGui}</td>
          </tr>`
        document.getElementById("table").innerHTML = table;



}
