# Algorithm to Find the Largest Element in an Array

## Description
This algorithm finds the largest element in a one-dimensional array by iterating through each element and comparing it with the current largest value. After completing the traversal, the largest element is identified.

---

## Algorithm
1. Initialize a variable `maxValue` with the value of the first element in the array.
2. Traverse the array:
   - If the current element is greater than `maxValue`, update `maxValue`.
3. Return `maxValue` after completing the traversal.

---

## Complexity
- **Time complexity**: \(O(n)\), where \(n\) is the number of elements in the array.
- **Space complexity**: \(O(1)\), as it uses a single variable to store the largest value.

---

## C++ Implementation
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cout << "Enter the number of elements in the array: ";
    cin >> n;

    int arr[n];
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int maxValue = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxValue) 
            maxValue = arr[i];
    }

    cout << "The largest element in the array is: " << maxValue << "\n";
    return 0;
}

