# Đệ Quy

## Giới Thiệu
Đệ quy (Recursion) là một kỹ thuật lập trình trong đó một hàm tự gọi chính nó để giải quyết bài toán bằng cách chia bài toán lớn thành các bài toán con nhỏ hơn. Đệ quy thường được sử dụng trong các bài toán có cấu trúc phân nhánh hoặc các bài toán được định nghĩa lặp đi lặp lại như dãy số Fibonacci, tìm kiếm trên cây, hoặc thuật toán sắp xếp.

Một hàm đệ quy thường bao gồm:
1. **Điều kiện cơ sở** (Base case): Là điều kiện dừng, đảm bảo hàm không gọi vô hạn.
2. **Quy luật đệ quy**: Là phần logic trong đó hàm tự gọi lại chính nó với một trạng thái hoặc tham số nhỏ hơn.

## Công Dụng
- **Giải quyết bài toán phân nhánh:** Các cấu trúc như cây hoặc đồ thị thường sử dụng đệ quy để duyệt qua các nút.
- **Xử lý bài toán lặp lại:** Các bài toán như tính giai thừa, dãy số Fibonacci, hoặc kiểm tra chuỗi đối xứng.
- **Thay thế vòng lặp:** Đệ quy đôi khi được dùng thay cho các vòng lặp phức tạp, làm cho mã nguồn ngắn gọn và dễ đọc hơn.
- **Hỗ trợ phân chia và trị (Divide and Conquer):** Trong các thuật toán như quicksort hoặc mergesort.

## Cách Sử Dụng
Để sử dụng đệ quy, bạn cần thực hiện các bước sau:

1. **Xác định điều kiện cơ sở:** Điều kiện để kết thúc hàm, ngăn vòng lặp vô hạn.
2. **Xây dựng logic đệ quy:** Chia bài toán thành các bài toán nhỏ hơn và gọi lại hàm.
3. **Kiểm tra tính hợp lệ:** Đảm bảo mọi trường hợp đầu vào sẽ dẫn đến điều kiện cơ sở.

### Ví dụ:
Hàm tính giai thừa sử dụng đệ quy:
```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0 || n == 1) { // Điều kiện cơ sở
        return 1;
    }
    return n * factorial(n - 1); // Quy luật đệ quy
}

int main() {
    cout << factorial(5) << "\n"; // Output: 120
    return 0;
}
```

## Cách Khử
Đệ quy có thể được thay thế bằng vòng lặp (iteration) để tránh vấn đề tràn ngăn xếp (stack overflow):

### Ví dụ:
Hàm giai thừa không dùng đệ quy:
```cpp
#include <iostream>
using namespace std;

int factorial_iterative(int n) {
    int result = 1;
    for (int i = 2; i <= n; ++i) {
        result *= i;
    }
    return result;
}

int main() {
    cout << factorial_iterative(5) << "\n"; // Output: 120
    return 0;
}
```

## Độ Phức Tạp
- **Không gian:** Đệ quy sử dụng thêm không gian cho ngăn xếp để lưu trạng thái mỗi lần gọi hàm. Nếu có `n` lần gọi, độ phức tạp không gian là \(O(n)\).
- **Thời gian:** Tùy thuộc vào bài toán, nhưng đệ quy thường tốn kém hơn vì có nhiều lần gọi hàm. Ví dụ, đệ quy tính Fibonacci có độ phức tạp \(O(2^n)\) trong khi cách dùng vòng lặp chỉ là \(O(n)\).

## Bài Tập Cơ Bản
1. Viết hàm đệ quy tính dãy Fibonacci.

### Ví dụ:
Hàm tính dãy Fibonacci sử dụng đệ quy:
```cpp
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n == 0) return 0; // Điều kiện cơ sở
    if (n == 1) return 1; // Điều kiện cơ sở
    return fibonacci(n - 1) + fibonacci(n - 2); // Quy luật đệ quy
}

int main() {
    for (int i = 0; i < 10; ++i) {
        cout << fibonacci(i) << " ";
    }
    cout << endl; // Output: 0 1 1 2 3 5 8 13 21 34
    return 0;
}
```

2. Tìm số lớn nhất trong một danh sách bằng đệ quy.
3. Đảo ngược một chuỗi bằng đệ quy.
4. Tính tổng các số từ 1 đến \(n\) bằng đệ quy.
5. Kiểm tra một chuỗi có phải là chuỗi đối xứng (Palindrome) hay không bằng đệ quy.

### Bài Tập Nâng Cao
1. Duyệt cây nhị phân (Preorder, Inorder, Postorder) bằng đệ quy.
2. Triển khai thuật toán quicksort bằng đệ quy.
3. Tìm đường đi trong ma trận bằng đệ quy (bài toán mê cung).
