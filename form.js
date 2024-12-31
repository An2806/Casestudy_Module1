// function myProduct() {
//     console.log(document.getElementById("maSanPham").value);
//     console.log(document.getElementById("tenSanPham").value);
//     console.log(document.getElementById("kichThuoc").value);
//     console.log(document.getElementById("mauSac").value);
//     console.log(document.getElementById("gia").value);
// }

let danhSachSanPham = [];

// Lớp SanPham: Đại diện cho một sản phẩm trong danh sách
class SanPham {
    constructor(maSanPham, tenSanPham, kichThuoc, mauSac, soLuong, gia) {
        this.maSanPham = maSanPham; // Mã sản phẩm
        this.tenSanPham = tenSanPham; // Tên sản phẩm
        this.kichThuoc = kichThuoc; // Kích thước sản phẩm (ví dụ: S, M, L)
        this.mauSac = mauSac; // Màu sắc sản phẩm
        this.soLuong = soLuong; // Số lượng sản phẩm trong kho
        this.gia = gia; // Giá sản phẩm (số nguyên)
    }
}

// Thêm một số sản phẩm mẫu vào danh sách để kiểm tra
danhSachSanPham.push(new SanPham('001', 'Áo dài','M','White', 1, 100000));
danhSachSanPham.push(new SanPham('002', 'Quần jean', 'S', 'Black', 2, 150000));
danhSachSanPham.push(new SanPham('003', 'Áo gile', 'M', 'Beige', 6, 90000));
danhSachSanPham.push(new SanPham('101', 'Chân váy dài', 'M', 'Blue', 10, 150000));

// Hàm hiển thị danh sách sản phẩm ra bảng HTML
function displayProduct() {
    let html = ''; // Biến chứa mã HTML hiển thị danh sách sản phẩm
    for (let i = 0; i < danhSachSanPham.length; i++) {
        html += `<tr>
          <td>${danhSachSanPham[i].maSanPham}</td> <!-- Mã sản phẩm -->
          <td>${danhSachSanPham[i].tenSanPham}</td> <!-- Tên sản phẩm -->
          <td>${danhSachSanPham[i].kichThuoc}</td> <!-- Kích thước -->
          <td>${danhSachSanPham[i].mauSac}</td> <!-- Màu sắc -->
          <td>${danhSachSanPham[i].soLuong}</td> <!-- Số lượng -->
          <td>${formatCurrency(danhSachSanPham[i].gia)}</td> <!-- Giá tiền -->
          <td>
            <!-- Các nút chức năng -->
            <button class="btn-edit" onclick="editProduct(${i})">Edit</button>
            <button class="btn-delete" onclick="deleteProduct(${i})">Delete</button>
          </td>
      </tr>`;
    }
    document.getElementById("tbody").innerHTML = html; // Chèn danh sách sản phẩm vào bảng HTML
}

// Hàm thêm sản phẩm mới vào danh sách
function createProduct() {
    const mst = document.getElementById("maSanPham").value.trim(); // Lấy mã sản phẩm từ input
    const ten = document.getElementById("tenSanPham").value.trim(); // Lấy tên sản phẩm từ input
    const slg = parseInt(document.getElementById("soLuong").value.trim()); // Lấy số lượng
    const price = parseInt(document.getElementById("gia").value.trim()); // Lấy giá sản phẩm

    // Kiểm tra nếu không nhập đủ thông tin
    if (!mst || isNaN(slg)) {
        alert("Nhập đầy đủ mã sản phẩm và số lượng");
        return;
    }

    // Tìm xem mã sản phẩm có tồn tại trong danh sách không
    const check = danhSachSanPham.find(sp => mst === sp.maSanPham);
    if (check) {
        // Nếu tồn tại, cập nhật tên sản phẩm, số lượng và giá
        check.tenSanPham = ten;
        check.soLuong = parseInt(check.soLuong) + slg; // Cộng thêm số lượng mới nhập
        check.gia = price; // Cập nhật giá
    } else {
        // Nếu không tồn tại, thêm sản phẩm mới
        let maSanPham = document.getElementById("maSanPham").value;
        let tenSanPham = document.getElementById("tenSanPham").value;
        let kichThuoc = document.getElementById("kichThuoc").value;
        let mauSac = document.getElementById("mauSac").value;
        let soLuong = document.getElementById("soLuong").value;
        let gia = document.getElementById("gia").value;
        danhSachSanPham.push(new SanPham(maSanPham, tenSanPham, kichThuoc, mauSac, soLuong, gia));
    }
    displayProduct(); // Cập nhật lại danh sách hiển thị
}

// Hàm chỉnh sửa thông tin sản phẩm
function editProduct(i) {
    document.getElementById("maSanPham").disabled = true; // Vô hiệu hóa ô nhập mã sản phẩm
    document.getElementById("maSanPham").value = danhSachSanPham[i].maSanPham;
    document.getElementById("tenSanPham").value = danhSachSanPham[i].tenSanPham;
    document.getElementById("kichThuoc").value = danhSachSanPham[i].kichThuoc;
    document.getElementById("mauSac").value = danhSachSanPham[i].mauSac;
    document.getElementById("soLuong").value = danhSachSanPham[i].soLuong;
    document.getElementById("gia").value = danhSachSanPham[i].gia;
}

// Hàm cập nhật sản phẩm sau khi chỉnh sửa
function upDateProduct(i) {
    let mst = document.getElementById("maSanPham").value;
    if (mst === "") {
        alert("Không có mã sản phẩm phù hợp để cập nhật.");
    } else {
        danhSachSanPham[i].tenSanPham = document.getElementById("tenSanPham").value;
        danhSachSanPham[i].kichThuoc = document.getElementById("kichThuoc").value;
        danhSachSanPham[i].mauSac = document.getElementById("mauSac").value;
        danhSachSanPham[i].soLuong = document.getElementById("soLuong").value;
        danhSachSanPham[i].gia = parseInt(document.getElementById("gia").value);
        displayProduct(); // Cập nhật lại danh sách hiển thị
    }
}

// Hàm xóa sản phẩm khỏi danh sách
function deleteProduct(i) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        danhSachSanPham.splice(i, 1); // Xóa sản phẩm
        displayProduct(); // Hiển thị lại danh sách
    }
}

// Hàm tìm kiếm sản phẩm
function searchProduct() {
    const searchKeyword = document.getElementById("tìm kiếm").value.toLowerCase().trim(); // Lấy từ khóa tìm kiếm
    const filteredList = danhSachSanPham.filter(sp =>
        sp.maSanPham.toLowerCase().includes(searchKeyword) ||
        sp.tenSanPham.toLowerCase().includes(searchKeyword) ||
        sp.kichThuoc.toLowerCase().includes(searchKeyword) ||
        sp.mauSac.toLowerCase().includes(searchKeyword)
    ); // Lọc sản phẩm theo mã hoặc tên

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
                <button class="btn-delete" onclick="deleteProduct(${i})">Delete</button>
            </td>
        </tr>`;
    }

    if (filteredList.length > 0) {
        document.getElementById("tbody").innerHTML = html; // Hiển thị danh sách sản phẩm lọc được
    } else {
        document.getElementById("tbody").innerHTML = '<tr><td colspan="7">Không tìm thấy sản phẩm phù hợp</td></tr>';
    }
}

// Hàm định dạng giá tiền (VNĐ)
function formatCurrency(value) {
    return new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(value).replace('₫', 'VNĐ');
}

// Hiển thị danh sách sản phẩm ban đầu
displayProduct();
