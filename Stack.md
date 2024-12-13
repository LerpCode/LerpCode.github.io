# Stack

## Giới Thiệu
Stack (ngăn xếp) là một cấu trúc dữ liệu tuân theo nguyên tắc LIFO (Last In, First Out) - phần tử được thêm vào sau cùng sẽ được lấy ra đầu tiên. Stack thường được sử dụng trong các bài toán liên quan đến đệ quy, duyệt đồ thị, xử lý biểu thức toán học, và hệ thống gọi hàm.

### Các phép toán cơ bản của Stack:
1. **Push(x):** Thêm phần tử `x` vào đỉnh của stack.
2. **Pop():** Loại bỏ và trả về phần tử ở đỉnh stack.
3. **Peek():** Trả về phần tử ở đỉnh mà không xóa nó.
4. **IsEmpty():** Kiểm tra stack có rỗng không.

## Công Dụng
- Quản lý lời gọi hàm (Call Stack).
- Duyệt đồ thị (DFS - Depth First Search).
- Chuyển đổi và xử lý biểu thức toán học (Infix, Postfix, Prefix).
- Kiểm tra dấu ngoặc hợp lệ trong chuỗi.
- Hoàn tác thao tác trong ứng dụng (Undo).

## Cách Sử Dụng
Stack có thể được triển khai bằng mảng hoặc danh sách liên kết. Trong C++, bạn có thể sử dụng thư viện chuẩn `<stack>`.

### Triển khai Stack bằng thư viện STL:
```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> s;

    // Push các phần tử
    s.push(10);
    s.push(20);
    s.push(30);

    // Lấy phần tử ở đỉnh stack
    cout << "Top element: " << s.top() << "\n"; // Output: 30

    // Loại bỏ phần tử ở đỉnh
    s.pop();
    cout << "Top element after pop: " << s.top() << "\n"; // Output: 20

    // Kiểm tra stack có rỗng không
    cout << "Is stack empty? " << (s.empty() ? "Yes" : "No") << "\n"; // Output: No

    return 0;
}
```

## Độ Phức Tạp
- **Push/Pop/Peek:** \(O(1)\)
- **IsEmpty:** \(O(1)\)

## Bài Tập Cơ Bản
1. Viết chương trình kiểm tra dấu ngoặc trong chuỗi có hợp lệ hay không.
2. Chuyển đổi biểu thức từ Infix sang Postfix bằng Stack.
3. Triển khai Stack bằng mảng hoặc danh sách liên kết.

### Ví dụ Bài Tập 1:
Kiểm tra dấu ngoặc trong chuỗi:
```cpp
#include <iostream>
#include <stack>
using namespace std;

bool isValidParentheses(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            if ((c == ')' && st.top() == '(') ||
                (c == '}' && st.top() == '{') ||
                (c == ']' && st.top() == '[')) {
                st.pop();
            } else {
                return false;
            }
        }
    }
    return st.empty();
}

int main() {
    string expr = "{[()]}";
    cout << (isValidParentheses(expr) ? "Valid" : "Invalid") << "\n"; // Output: Valid
    return 0;
}
```
