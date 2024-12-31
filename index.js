// Hàm thêm sản phẩm vào Local Storage
function createProduct() {
    // Lấy thông tin từ form
    const maSanPham = document.getElementById("maSanPham").value;
    const tenSanPham = document.getElementById("tenSanPham").value;
    const kichThuoc = document.getElementById("kichThuoc").value;
    const mauSac = document.getElementById("mauSac").value;
    const soLuong = document.getElementById("soLuong").value;
    const gia = document.getElementById("gia").value;

    // Tạo object sản phẩm
    const product = {
        maSanPham,
        tenSanPham,
        kichThuoc,
        mauSac,
        soLuong: parseInt(soLuong),
        gia: parseFloat(gia)
    };

    // Lấy danh sách sản phẩm từ Local Storage (nếu có)
    let productList = JSON.parse(localStorage.getItem("productList")) || [];

    // Thêm sản phẩm mới vào danh sách
    productList.push(product);

    // Lưu danh sách sản phẩm vào Local Storage
    localStorage.setItem("productList", JSON.stringify(productList));

    // Reset form sau khi thêm sản phẩm
    resetProduct();

    // Hiển thị danh sách sản phẩm ra bảng
    displayProducts();
}

// Hàm hiển thị danh sách sản phẩm từ Local Storage
function displayProducts() {
    const productList = JSON.parse(localStorage.getItem("productList")) || [];
    const tbody = document.getElementById("tbody");

    // Xóa nội dung cũ của bảng
    tbody.innerHTML = "";

    // Duyệt qua danh sách sản phẩm và tạo hàng trong bảng
    productList.forEach((product, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.maSanPham}</td>
            <td>${product.tenSanPham}</td>
            <td>${product.kichThuoc}</td>
            <td>${product.mauSac}</td>
            <td>${product.soLuong}</td>
            <td>${product.gia.toLocaleString()}VND</td>
            <td>
                <button class="btn-edit" onclick="editProduct(${index})">Sửa</button>
                <button class="btn-delete" onclick="deleteProduct(${index})">Xóa</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Hàm xóa sản phẩm
function deleteProduct(index) {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    productList.splice(index, 1); // Xóa sản phẩm tại vị trí index
    localStorage.setItem("productList", JSON.stringify(productList)); // Cập nhật Local Storage
    displayProducts(); // Hiển thị lại danh sách
}

// Hàm đặt lại form
function resetProduct() {
    document.getElementById("maSanPham").value = "";
    document.getElementById("tenSanPham").value = "";
    document.getElementById("kichThuoc").value = "S";
    document.getElementById("mauSac").value = "";
    document.getElementById("soLuong").value = "";
    document.getElementById("gia").value = "";
}

// Hàm chỉnh sửa sản phẩm
function editProduct(index) {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    const product = productList[index];

    // Hiển thị thông tin sản phẩm lên form
    document.getElementById("maSanPham").value = product.maSanPham;
    document.getElementById("tenSanPham").value = product.tenSanPham;
    document.getElementById("kichThuoc").value = product.kichThuoc;
    document.getElementById("mauSac").value = product.mauSac;
    document.getElementById("soLuong").value = product.soLuong;
    document.getElementById("gia").value = product.gia;

    // Xóa sản phẩm cũ và cập nhật lại
    deleteProduct(index);
}

// Hàm tìm kiếm sản phẩm
function searchProduct() {
    const keyword = document.querySelector(".search").value.toLowerCase();
    const productList = JSON.parse(localStorage.getItem("productList")) || [];
    const tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    productList
        .filter(product => product.tenSanPham.toLowerCase().includes(keyword))
        .forEach((product, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${product.maSanPham}</td>
                <td>${product.tenSanPham}</td>
                <td>${product.kichThuoc}</td>
                <td>${product.mauSac}</td>
                <td>${product.soLuong}</td>
                <td>${product.gia.toLocaleString()} VND</td>
                <td>
                    <button class="btn-edit" onclick="editProduct(${index})">Sửa</button>
                    <button class="btn-delete" onclick="deleteProduct(${index})">Xóa</button>
                </td>
            `;
            tbody.appendChild(row);
        });
}

// Hiển thị sản phẩm khi tải trang
document.addEventListener("DOMContentLoaded", displayProducts);
