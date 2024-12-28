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
danhSachSanPham.push(new SanPham('002', 'Quần dài','S', 'Black', 50_000));




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
          <button onclic="upDateProduct(${i})">UpDate</button>
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

function upDateProduct(i){
    document.getElementById("maSanPham").value = danhSachSanPham.maSanPham;
    document.getElementById("tenSanPham").value = danhSachSanPham.tenSanPham;
    document.getElementById("kichThuoc").value = danhSachSanPham.kichThuoc;
    document.getElementById("mauSac").value = danhSachSanPham.mauSac;
    document.getElementById("gia").value = danhSachSanPham.gia;
displayProduct()
}

}

    function editProduct(i){

    }

    function createProduct() {
            let maSanPham = document.getElementById("maSanPham").value;
            let tenSanPham = document.getElementById("tenSanPham").value;
            let kichThuoc = document.getElementById("kichThuoc").value;
            let mauSac = document.getElementById("mauSac").value;
            let gia = document.getElementById("gia").value;
            danhSachSanPham.push(new SanPham(maSanPham, tenSanPham, kichThuoc, mauSac, gia));
            displayProduct()
        }
    }

}

displayProduct();