// function myProduct() {
//     console.log(document.getElementById("maSanPham").value);
//     console.log(document.getElementById("tenSanPham").value);
//     console.log(document.getElementById("kichThuoc").value);
//     console.log(document.getElementById("mauSac").value);
//     console.log(document.getElementById("gia").value);
// }
class SanPham {
    constructor(maSanPham, tenSanPham, kichThuoc, mauSac, gia) {
        this.maSanPham = maSanPham;
        this.tenSanPham = tenSanPham;
        this.kichThuoc = kichThuoc;
        this.mauSac = mauSac;
        this.gia = gia;

    }
}


let danhSachSanPham = [];
danhSachSanPham.push(new SanPham('001', 'Áo cộc', 'M', 'White', 90_000));
danhSachSanPham.push(new SanPham('002', 'Quần dài', 'S', 'Black', 50_000));

displayProduct()

function displayProduct() {
    let html = '';
    for (let i = 0; i < danhSachSanPham.length; i++) {
        html += `<tr>
          <td>${danhSachSanPham[i].maSanPham}</td>
          <td>${danhSachSanPham[i].tenSanPham}</td>
          <td>${danhSachSanPham[i].kichThuoc}</td>
          <td>${danhSachSanPham[i].mauSac}</td>
          <td>${danhSachSanPham[i].gia}</td>
          <td><button onclick="deleteProduct(${i})">Delete</button>
          <button onclick="upDateProduct(${i})">UpDate</button>
          <button onclick="editProduct(${i})">Edit</button></td>
          
      </tr>`;
    }
    document.getElementById("tbody").innerHTML = html;
}

function deleteProduct(i) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        danhSachSanPham.splice(i, 1);
        displayProduct()
    }

    function upDateProduct(i) {
        danhSachSanPham[i].maSanPham = document.getElementById("maSanPham").value;
        danhSachSanPham[i].tenSanPham = document.getElementById("tenSanPham").value;
        danhSachSanPham[i].kichThuoc = document.getElementById("kichThuoc").value;
        danhSachSanPham[i].mauSac = document.getElementById("mauSac").value;
        danhSachSanPham[i].gia = parseInt(document.getElementById("gia").value);
    }
    displayProduct();

}

function editProduct(i) {

}

function createProduct() {
    let maSanPham = document.getElementById("maSanPham").value;
    let tenSanPham = document.getElementById("tenSanPham").value;
    let kichThuoc = document.getElementById("kichThuoc").value;
    let mauSac = document.getElementById("mauSac").value;
    let gia = document.getElementById("gia").value;
    danhSachSanPham.push(new SanPham(maSanPham, tenSanPham, kichThuoc, mauSac, gia));
    displayProduct();
}
