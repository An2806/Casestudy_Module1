// function myProduct() {
//     console.log(document.getElementById("maSanPham").value);
//     console.log(document.getElementById("tenSanPham").value);
//     console.log(document.getElementById("kichThuoc").value);
//     console.log(document.getElementById("mauSac").value);
//     console.log(document.getElementById("gia").value);
// }
let danhSachSanPham = [];

class SanPham {
    constructor(maSanPham, tenSanPham, kichThuoc, mauSac, soLuong, gia) {
        this.maSanPham = maSanPham;
        this.tenSanPham = tenSanPham;
        this.kichThuoc = kichThuoc;
        this.mauSac = mauSac;
        this.soLuong = soLuong;
        this.gia = gia;
    }
}

danhSachSanPham.push(new SanPham('001', 'Áo cộc', 'M', 'White', 1, 90_000));
danhSachSanPham.push(new SanPham('002', 'Quần dài', 'S', 'Black', 2, 50_000,));

function displayProduct() {
    let html = '';
    for (let i = 0; i < danhSachSanPham.length; i++) {
        html += `<tr>
          <td>${danhSachSanPham[i].maSanPham}</td>
          <td>${danhSachSanPham[i].tenSanPham}</td>
          <td>${danhSachSanPham[i].kichThuoc}</td>
          <td>${danhSachSanPham[i].mauSac}</td>
          <td>${danhSachSanPham[i].soLuong}</td>
          <td>${formatCurrency(danhSachSanPham[i].gia)}</td>
          <td>
            <button class="btn-edit" onclick="editProduct(${i})">Edit</button>
            <button class="btn-update" onclick="upDateProduct(${i})">Update</button>
            <button class="btn-delete" onclick="deleteProduct(${i})">Delete</button>
          </td>
      </tr>`;
    }
    document.getElementById("tbody").innerHTML = html;
}

function createProduct() {
    const mst = document.getElementById("maSanPham").value.trim();
    const ten = document.getElementById("tenSanPham").value.trim();
    const slg = parseInt(document.getElementById("soLuong").value.trim());
    const price = parseInt(document.getElementById("gia").value.trim());
    if (!mst || isNaN(slg)) {
        alert("Nhập đầy đủ mã sản phẩm và số lượng");
        return;
    }
    const check = danhSachSanPham.find(sp => mst === sp.maSanPham);
    if (check) {
        check.tenSanPham = ten;
        check.soLuong = parseInt(check.soLuong) + slg;
        check.gia = price;

    } else {
        let maSanPham = document.getElementById("maSanPham").value;
        let tenSanPham = document.getElementById("tenSanPham").value;
        let kichThuoc = document.getElementById("kichThuoc").value;
        let mauSac = document.getElementById("mauSac").value;
        let soLuong = document.getElementById("soLuong").value;
        let gia = document.getElementById("gia").value;
        danhSachSanPham.push(new SanPham(maSanPham, tenSanPham, kichThuoc, mauSac, soLuong, gia));
    }
    displayProduct();
}

function editProduct(i) {
    document.getElementById("maSanPham").disabled = true;
    document.getElementById("maSanPham").value = danhSachSanPham[i].maSanPham;
    document.getElementById("tenSanPham").value = danhSachSanPham[i].tenSanPham;
    document.getElementById("kichThuoc").value = danhSachSanPham[i].kichThuoc;
    document.getElementById("mauSac").value = danhSachSanPham[i].mauSac;
    document.getElementById("soLuong").value = danhSachSanPham[i].soLuong;
    document.getElementById("gia").value = danhSachSanPham[i].gia;
}

function upDateProduct(i) {
    let mst = document.getElementById("maSanPham").value;
    if (mst === "") {
        alert("Không có mã sản phẩm phù hợp để cập nhật.")
    } else {
        danhSachSanPham[i].maSanPham = document.getElementById("maSanPham").value;
        danhSachSanPham[i].tenSanPham = document.getElementById("tenSanPham").value;
        danhSachSanPham[i].kichThuoc = document.getElementById("kichThuoc").value;
        danhSachSanPham[i].mauSac = document.getElementById("mauSac").value;
        danhSachSanPham[i].soLuong = document.getElementById("soLuong").value;
        danhSachSanPham[i].gia = parseInt(document.getElementById("gia").value);
        displayProduct();
    }
}


function deleteProduct(i) {

    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        danhSachSanPham.splice(i, 1);
        displayProduct()
    }
}

function resetProduct() {
    document.getElementById("maSanPham").value = "";
    document.getElementById("tenSanPham").value = "";
    document.getElementById("kichThuoc").value = "";
    document.getElementById("mauSac").value = "";
    document.getElementById("soLuong").value = "";
    document.getElementById("gia").value = "";
}

// Tìm kiếm sản phẩm
function searchProduct() {
    const searchKeyword = document.getElementById("tìm kiếm").value.toLowerCase().trim(); // Lấy từ khóa tìm kiếm từ input
    const filteredList = danhSachSanPham.filter(sp =>
        sp.maSanPham.toLowerCase().includes(searchKeyword) ||
        sp.tenSanPham.toLowerCase().includes(searchKeyword)
    );

    let html = '';
    for (let i = 0; i < filteredList.length; i++) {
        html += `<tr>
            <td>${filteredList[i].maSanPham}</td>
            <td>${filteredList[i].tenSanPham}</td>
            <td>${filteredList[i].kichThuoc}</td>
            <td>${filteredList[i].mauSac}</td>
            <td>${filteredList[i].soLuong}</td>
            <td>${formatCurrency(filteredList[i].gia)}</td>
            <td>
                <button class="btn-edit" onclick="editProduct(${i})">Edit</button>
                <button class="btn-update" onclick="upDateProduct(${i})">Update</button>
                <button class="btn-delete" onclick="deleteProduct(${i})">Delete</button>
            </td>
        </tr>`;
    }

    // Hiển thị kết quả tìm kiếm trong bảng
    if (filteredList.length > 0) {
        document.getElementById("tbody").innerHTML = html;
    } else {
        document.getElementById("tbody").innerHTML = '<tr><td colspan="7">Không tìm thấy sản phẩm phù hợp</td></tr>';
    }
}

displayProduct(danhSachSanPham);

//Định dạng giá tiền
function formatCurrency(value) {
    // Định dạng số thành dạng "100.000 VNĐ"
    return new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(value).replace('₫', 'VNĐ');
}
