# Queue và Priority Queue

## 1. Giới Thiệu

### 1.1 Queue
**Queue (hàng đợi)** là một cấu trúc dữ liệu tuyến tính hoạt động theo nguyên tắc **FIFO (First In First Out)**, nghĩa là phần tử được thêm vào trước sẽ được lấy ra trước. Queue thường được sử dụng trong các bài toán như:
- Xử lý tác vụ trong hệ thống.
- Lập lịch CPU.
- Mô phỏng các hệ thống hàng đợi.

### 1.2 Priority Queue
**Priority Queue (hàng đợi ưu tiên)** là một dạng mở rộng của queue, trong đó mỗi phần tử được gán một **độ ưu tiên**. Phần tử có độ ưu tiên cao hơn sẽ được xử lý trước, bất kể thứ tự thêm vào.

---

## 2. Queue

### 2.1 Các thao tác cơ bản
| Thao Tác         | Mô Tả                                    |
|-------------------|------------------------------------------|
| **`push(x)`**    | Thêm phần tử `x` vào cuối hàng đợi.      |
| **`pop()`**      | Loại bỏ phần tử ở đầu hàng đợi.          |
| **`front()`**    | Trả về phần tử ở đầu hàng đợi.           |
| **`empty()`**    | Kiểm tra xem hàng đợi có rỗng hay không. |

### 2.2 Ví dụ
```cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;

    // Thêm phần tử vào hàng đợi
    q.push(10);
    q.push(20);
    q.push(30);

    // Lấy và in các phần tử ra khỏi hàng đợi
    while (!q.empty()) {
        cout << "Front: " << q.front() << endl;
        q.pop();
    }

    return 0;
}
```

#### **Output:**
```
Front: 10
Front: 20
Front: 30
```

---

## 3. Priority Queue

### 3.1 Các thao tác cơ bản
| Thao Tác         | Mô Tả                                                         |
|-------------------|---------------------------------------------------------------|
| **`push(x)`**    | Thêm phần tử `x` vào hàng đợi ưu tiên.                        |
| **`pop()`**      | Loại bỏ phần tử có độ ưu tiên cao nhất.                       |
| **`top()`**      | Trả về phần tử có độ ưu tiên cao nhất.                        |
| **`empty()`**    | Kiểm tra xem hàng đợi có rỗng hay không.                     |

### 3.2 Lưu ý
- Mặc định, **`priority_queue`** sắp xếp các phần tử theo **thứ tự giảm dần** (phần tử lớn nhất ở trên cùng).
- Để thay đổi sang **thứ tự tăng dần**, sử dụng cấu trúc `greater<T>`.

### 3.3 Ví dụ

#### **Ví dụ 1: Priority Queue mặc định (giảm dần)**
```cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
    priority_queue<int> pq;

    // Thêm phần tử vào priority queue
    pq.push(30);
    pq.push(10);
    pq.push(20);

    // Lấy và in các phần tử
    while (!pq.empty()) {
        cout << pq.top() << endl;
        pq.pop();
    }

    return 0;
}
```

#### **Output:**
```
30
20
10
```

#### **Ví dụ 2: Priority Queue sắp xếp tăng dần**
```cpp
#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int main() {
    // Priority queue tăng dần
    priority_queue<int, vector<int>, greater<int>> pq;

    // Thêm phần tử
    pq.push(30);
    pq.push(10);
    pq.push(20);

    // Lấy và in các phần tử
    while (!pq.empty()) {
        cout << pq.top() << endl;
        pq.pop();
    }

    return 0;
}
```

#### **Output:**
```
10
20
30
```

---

## 4. Bài Tập

### 4.1 Bài Tập Cơ Bản
1. **Sử dụng Queue:**
   - Mô phỏng hệ thống quản lý tác vụ:
     - Thêm tác vụ vào hệ thống.
     - Xử lý các tác vụ theo thứ tự.
2. **Sử dụng Priority Queue:**
   - Sắp xếp một dãy số bằng cách sử dụng priority queue.

### 4.2 Bài Tập Nâng Cao
1. **Thuật toán Dijkstra:**
   - Sử dụng priority queue để tìm đường đi ngắn nhất trong đồ thị có trọng số dương.
2. **K phần tử lớn nhất:**
   - Tìm \(k\) phần tử lớn nhất trong một dãy số sử dụng priority queue.
