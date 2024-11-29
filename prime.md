# Số Nguyên Tố  

Số nguyên tố là các số tự nhiên lớn hơn 1 chỉ chia hết cho 1 và chính nó. Chúng rất quan trọng trong lý thuyết số và có nhiều ứng dụng trong mật mã và khoa học máy tính.  

## Kiểm Tra Số Nguyên Tố Cơ Bản  

Cách đơn giản nhất để kiểm tra số nguyên tố là sử dụng phương pháp chia thử:  

```cpp  
bool isPrime(int n) {  
    if (n <= 1) return false;  
    if (n <= 3) return true;  
    if (n % 2 == 0 || n % 3 == 0) return false;  
    
    for (int i = 5; i * i <= n; i += 6) {  
        if (n % i == 0 || n % (i + 2) == 0)  
            return false;  
    }  
    return true;  
}  
```
# Sàng Eratosthenes  

Sàng Eratosthenes là thuật toán hiệu quả để tìm tất cả số nguyên tố đến một giới hạn n. Độ phức tạp thời gian của thuật toán này là O(n log log n).  

## Mô Tả  

Thuật toán hoạt động bằng cách:  
1. Khởi tạo một mảng boolean `isPrime`, đánh dấu tất cả các số từ 2 đến n là nguyên tố.  
2. Bắt đầu từ số 2, lần lượt đánh dấu các bội số của số hiện tại là không phải số nguyên tố.  
3. Kết quả là các số còn lại chưa bị đánh dấu chính là số nguyên tố.  

## Triển Khai  

```cpp  
vector<bool> sieveOfEratosthenes(int n) {  
    vector<bool> isPrime(n + 1, true);  
    isPrime[0] = isPrime[1] = false;  
    
    for (int i = 2; i * i <= n; i++) {  
        if (isPrime[i]) {  
            for (int j = i * i; j <= n; j += i) {  
                isPrime[j] = false;  
            }  
        }  
    }  
    return isPrime;  
}  

