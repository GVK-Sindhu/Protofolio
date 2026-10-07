# C++ OOPs & Interview Notes

> Personal quick-revision notes for C++ OOPs, memory management, pointers, type casting, data structures, and basic OS/concurrency concepts.

---

# 1. Classes and Objects

## Class

A **class** is a user-defined blueprint that defines the **data/properties** and **functions/behaviors** of objects.

## Object

An **object** is an instance of a class. It represents a specific entity and occupies memory.

### Simple Example

```cpp
#include <bits/stdc++.h>
using namespace std;

class Student {
public:
    string name;
    int age;

    void getInfo() {
        cout << name << " " << age << "\n";
    }
};

int main() {
    Student s;

    s.name = "Sindhu";
    s.age = 20;

    s.getInfo();
}
```

### Class vs Object

| Class | Object |
|---|---|
| Blueprint/template | Instance of a class |
| Defines properties and behaviors | Contains actual data |
| Logical definition | Represents a specific entity |
| Objects created from it occupy memory | Occupies memory |

---

# 2. Encapsulation

**Encapsulation** means binding data and the functions that operate on that data into a single unit (class), while controlling access to the data.

### Benefits

- Data protection
- Controlled access
- Better maintainability
- Hides internal implementation

### Example

```cpp
#include <bits/stdc++.h>
using namespace std;

class Bank {
private:
    int balance;

public:
    Bank(int amount) {
        balance = amount;
    }

    void deposit(int amount) {
        balance += amount;
    }

    int getBalance() {
        return balance;
    }
};

int main() {
    Bank b(500);

    b.deposit(500);

    cout << b.getBalance() << "\n";

    // b.balance = 2000;  // ERROR: balance is private
}
```

### Key Point

Instead of allowing direct access:

```cpp
b.balance = 2000;
```

we control access through:

```cpp
b.deposit(500);
b.getBalance();
```

> **Interview answer:** Encapsulation is the bundling of data and methods together and restricting direct access to the internal state of an object.

---

# 3. Inheritance

**Inheritance** is a mechanism where a derived/child class acquires properties and member functions of a base/parent class.

### Benefits

- Code reuse
- Extensibility
- Represents an **is-a** relationship
- Supports runtime polymorphism

---

## Types of Inheritance

### 1. Single Inheritance

One derived class inherits from one base class.

```text
Person
   |
Student
```

```cpp
class Person {
public:
    string name;
    int age;

    Person(string name, int age) {
        this->name = name;
        this->age = age;
    }
};

class Student : public Person {
public:
    int rollno;

    Student(string name, int age, int rollno)
        : Person(name, age) {
        this->rollno = rollno;
    }

    void getInfo() {
        cout << "Name: " << name << "\n";
        cout << "Age: " << age << "\n";
        cout << "Roll No: " << rollno << "\n";
    }
};

int main() {
    Student s("Sindhu", 20, 95);
    s.getInfo();
}
```

### Important

```cpp
class Student : private Person
```

means inherited members become private within `Student` according to C++ access rules.

For normal examples where we want the public interface of the base class to remain public, we commonly use:

```cpp
class Student : public Person
```

---

## 2. Multilevel Inheritance

A derived class becomes the base class for another derived class.

```text
Person
   |
Student
   |
GraduateStudent
```

The bottom-level class indirectly inherits from the classes above it.

```cpp
class Person {
public:
    string name;
    int age;
};

class Student : public Person {
public:
    int rollno;
};

class GraduateStudent : public Student {
public:
    int marks;
};

int main() {
    GraduateStudent gs;

    gs.name = "Sindhu";
    gs.marks = 100;

    cout << gs.name << " " << gs.marks << "\n";
}
```

---

## 3. Multiple Inheritance

One child class inherits from multiple parent classes.

```text
Student ----\
             \
          WorkingStudent
             /
Teacher -----/
```

```cpp
class Student {
public:
    string name;
    int rollno;
};

class Teacher {
public:
    int salary;
};

class WorkingStudent : public Student, public Teacher {
public:
    int marks;
    string researchArea;
};

int main() {
    WorkingStudent ws;

    ws.name = "Sindhu";
    ws.salary = 1000;
    ws.researchArea = "CS";

    cout << ws.name << " "
         << ws.salary << " "
         << ws.researchArea << "\n";
}
```

---

## 4. Hierarchical Inheritance

Multiple child classes inherit from the same parent class.

```text
       Person
       /    \
  Student  Teacher
```

```cpp
class Person {
public:
    string name;
    int age;

    Person(string name, int age) {
        this->name = name;
        this->age = age;
    }
};

class Student : public Person {
public:
    int rollno;

    Student(string name, int age, int rollno)
        : Person(name, age) {
        this->rollno = rollno;
    }

    void getInfo() {
        cout << name << " " << age << " " << rollno << "\n";
    }
};

class Teacher : public Person {
public:
    int salary;

    Teacher(string name, int age, int salary)
        : Person(name, age) {
        this->salary = salary;
    }

    void getInfo() {
        cout << name << " " << age << " " << salary << "\n";
    }
};
```

---

## 5. Hybrid Inheritance

**Hybrid inheritance** is a combination of two or more types of inheritance.

For example, combining hierarchical and multiple inheritance can produce a diamond-shaped hierarchy.

```text
        Person
        /    \
    Student Teacher
        \    /
    WorkingStudent
```

This can lead to the **Diamond Problem**, which can be solved using **virtual inheritance**.

---

# 4. Polymorphism

**Polymorphism** means **"many forms."**

It allows the same interface/function name to behave differently depending on the situation.

## Types

1. Compile-time polymorphism
2. Runtime polymorphism

---

## 4.1 Compile-Time Polymorphism

The function to execute is determined during compilation.

Common examples:

- Function overloading
- Operator overloading

### Function Overloading

Same function name but different parameter lists.

```cpp
class Student {
public:
    string name;
    int marks;

    Student() {
        cout << "Default constructor\n";
    }

    Student(string name) {
        this->name = name;
        this->marks = 0;
    }

    Student(string name, int marks) {
        this->name = name;
        this->marks = marks;
    }

    void getInfo() {
        cout << name << "\n";
        cout << marks << "\n";
    }
};
```

Here:

```cpp
Student();
Student(string);
Student(string, int);
```

are overloaded constructors.

### Important

Overloading happens when the parameter list differs by:

- Number of parameters
- Type of parameters
- Order of parameters

Changing **only the return type** is not sufficient for function overloading.

---

# 5. Runtime Polymorphism

Runtime polymorphism is commonly achieved using:

- Inheritance
- Function overriding
- Virtual functions

---

## Function Overriding

A derived class provides its own implementation of a base-class virtual function with the same signature.

```cpp
class Parent {
public:
    virtual void show() {
        cout << "Parent\n";
    }
};

class Child : public Parent {
public:
    void show() override {
        cout << "Child\n";
    }
};

int main() {
    Child c;
    c.show();
}
```

### Important Distinction

If the base function is **not virtual**, a same-named derived function can hide the base function rather than providing runtime polymorphism.

Using:

```cpp
virtual
```

in the base class enables dynamic dispatch.

Using:

```cpp
override
```

in the derived class tells the compiler that the function is intended to override a base-class virtual function.

---

# 6. Virtual Functions

A **virtual function** is a member function declared with the `virtual` keyword in the base class.

It allows the overridden function of the actual object to be selected at runtime when accessed through a base-class pointer or reference.

### Example

```cpp
#include <bits/stdc++.h>
using namespace std;

class Payment {
public:
    virtual void pay() {
        cout << "General payment\n";
    }

    virtual ~Payment() = default;
};

class UPI : public Payment {
public:
    void pay() override {
        cout << "Paying using UPI\n";
    }
};

void makePayment(Payment* p) {
    p->pay();
}

int main() {
    UPI u;

    makePayment(&u);
}
```

Output:

```text
Paying using UPI
```

### Why?

```cpp
Payment* p = &u;
```

The pointer type is:

```text
Payment*
```

but the actual object is:

```text
UPI
```

Because `pay()` is virtual, C++ performs **dynamic dispatch** and calls:

```cpp
UPI::pay()
```

at runtime.

### Without `virtual`

If `pay()` is not virtual:

```cpp
Payment* p = &u;
p->pay();
```

the call is resolved using the static type of the pointer, so:

```text
General payment
```

is printed.

---

## Overloading vs Overriding

| Overloading | Overriding |
|---|---|
| Compile-time polymorphism | Runtime polymorphism |
| Same function name | Same function name |
| Different parameter list | Same signature |
| Usually within same class | Base + derived classes |
| Inheritance not required | Inheritance required |
| Example: `add(int,int)` and `add(int,int,int)` | Derived class redefines a virtual base function |

---

# 7. Abstraction

**Abstraction** means hiding unnecessary implementation details and showing only the essential information/interface.

Common mechanisms:

1. Access modifiers
2. Abstract classes
3. Pure virtual functions

---

## Abstract Class

A class containing at least one **pure virtual function** is an abstract class.

```cpp
virtual void area() = 0;
```

An abstract class cannot be instantiated directly.

```cpp
Shape s;   // ERROR
```

It acts as a blueprint/interface for derived classes.

### Example

```cpp
#include <iostream>
using namespace std;

class Shape {
public:
    virtual void area() = 0;

    virtual ~Shape() = default;
};

class Circle : public Shape {
public:
    int radius;

    Circle(int radius) {
        this->radius = radius;
    }

    void area() override {
        cout << "Circle area: "
             << 3.14 * radius * radius << "\n";
    }
};

class Rectangle : public Shape {
public:
    int length, width;

    Rectangle(int length, int width) {
        this->length = length;
        this->width = width;
    }

    void area() override {
        cout << "Rectangle area: "
             << length * width << "\n";
    }
};

void printArea(Shape* s) {
    s->area();
}

int main() {
    Circle c(5);
    Rectangle r(4, 6);

    printArea(&c);
    printArea(&r);
}
```

### Interview Answer

> Abstraction hides implementation details and exposes only the required interface. In C++, abstract classes and pure virtual functions are commonly used to achieve abstraction.

---

# 8. Virtual Destructor

If a class is intended to be used polymorphically, its destructor should generally be virtual.

### Why?

Suppose:

```cpp
Base* p = new Derived();
delete p;
```

If the base destructor is not virtual, deleting through the base pointer can result in **undefined behavior**.

### Example

```cpp
class Animal {
public:
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    ~Dog() {
        cout << "Dog destructor\n";
    }
};

int main() {
    Animal* a = new Dog();

    delete a;
}
```

Because the destructor is virtual, destruction happens correctly through the inheritance hierarchy.

### Interview Question

**Why should a polymorphic base class have a virtual destructor?**

> To ensure that when a derived object is deleted through a base-class pointer, the derived destructor is also called correctly.

---

# 9. Virtual Inheritance & Diamond Problem

Consider:

```text
        Animal
        /    \
      Dog    Cat
        \    /
        Hybrid
```

Without virtual inheritance, `Hybrid` can contain **two copies of `Animal`**:

```text
Hybrid
 ├── Dog
 │    └── Animal
 │
 └── Cat
      └── Animal
```

This creates ambiguity and duplicate base-class data.

## Virtual Inheritance

```cpp
class Animal {
public:
    string name;
};

class Dog : virtual public Animal {
};

class Cat : virtual public Animal {
};

class Hybrid : public Dog, public Cat {
};
```

Now `Hybrid` contains one shared `Animal` base subobject.

### Important Difference

Do not confuse:

```cpp
virtual void show();
```

with:

```cpp
class Dog : virtual public Animal
```

- `virtual` before a function → **runtime polymorphism / dynamic dispatch**
- `virtual` in inheritance → **virtual inheritance / diamond problem**

---

# 10. Memory Management

Memory management is important for understanding how C and C++ allocate and release dynamic memory.

---

## malloc

`malloc()` dynamically allocates a specified number of bytes.

```cpp
int* arr = (int*)malloc(n * sizeof(int));
```

### Characteristics

- Allocates raw memory
- Does not initialize the memory
- Does not call constructors
- Use `free()` to release it

---

## calloc

`calloc()` allocates memory for multiple elements and initializes the allocated bytes to zero.

```cpp
int* arr = (int*)calloc(n, sizeof(int));
```

---

## realloc

`realloc()` changes the size of a previously allocated memory block while preserving existing data as far as possible.

```cpp
arr = (int*)realloc(arr, newSize * sizeof(int));
```

### Important

`realloc()` may move the memory block to a new location.

---

## free

`free()` releases memory allocated using:

- `malloc()`
- `calloc()`
- `realloc()`

```cpp
free(arr);
```

---

## Complete Example

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    // malloc
    int* arr = (int*)malloc(n * sizeof(int));

    if (arr == nullptr) {
        return 1;
    }

    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    cout << "malloc: ";

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    // calloc
    int* arr1 = (int*)calloc(n, sizeof(int));

    if (arr1 == nullptr) {
        free(arr);
        return 1;
    }

    cout << "\ncalloc: ";

    for (int i = 0; i < n; i++) {
        cout << arr1[i] << " ";
    }

    // realloc
    int* tmp = (int*)realloc(arr, 10 * sizeof(int));

    if (tmp == nullptr) {
        free(arr);
        free(arr1);
        return 1;
    }

    arr = tmp;

    // Initialize newly added elements
    for (int i = n; i < 10; i++) {
        arr[i] = i + 1;
    }

    cout << "\nrealloc: ";

    for (int i = 0; i < 10; i++) {
        cout << arr[i] << " ";
    }

    free(arr);
    free(arr1);

    return 0;
}
```

---

# 11. malloc vs new

## malloc

```cpp
int* p = (int*)malloc(sizeof(int));
```

- C-style memory allocation
- Allocates raw memory
- Does not call constructors
- Release using `free()`

## new

```cpp
Student* s = new Student();
```

- C++ memory allocation
- Allocates memory
- Constructs/initializes the object
- Calls constructor
- Release using `delete`

### Comparison

| malloc | new |
|---|---|
| C-style | C++ |
| Allocates raw memory | Allocates and constructs object |
| Does not call constructor | Calls constructor |
| Returns `void*` | Returns typed pointer |
| Use `free()` | Use `delete` |

---

# 12. free vs delete

```text
malloc  → free
calloc  → free
realloc → free

new     → delete
new[]   → delete[]
```

`delete` also invokes the object's destructor.

### Never mix them

Wrong:

```cpp
int* p = new int;
free(p);
```

Wrong:

```cpp
int* p = (int*)malloc(sizeof(int));
delete p;
```

Always use the matching deallocation mechanism.

---

# 13. Stack vs Heap

```cpp
Student s;
```

Usually creates an automatic object with lifetime tied to its scope.

```cpp
Student* s = new Student();
```

Dynamically allocates an object whose lifetime must be managed.

| Stack / Automatic Storage | Heap / Dynamic Storage |
|---|---|
| Lifetime usually tied to scope | Lifetime controlled by allocation/deallocation |
| Automatically managed | Raw memory requires manual management |
| Usually fast to allocate | Dynamic allocation has overhead |
| Direct object access: `s.name` | Pointer access: `s->name` |

> Note: Modern C++ recommends RAII and smart pointers (`std::unique_ptr`, `std::shared_ptr`) instead of manually managing raw `new`/`delete` whenever possible.

---

# 14. Pointer vs Reference

## Reference

A reference is an alias for an existing object.

```cpp
int a = 10;

int& ref = a;

ref = 100;
```

Now:

```text
a   = 100
ref = 100
```

Both refer to the same object.

---

## Pointer

A pointer stores the address of an object.

```cpp
int a = 10;

int* ptr = &a;

*ptr = 100;
```

Now:

```text
a = 100
```

`*ptr` means the value stored at the address held by `ptr`.

---

## Pointer vs Reference

| Pointer | Reference |
|---|---|
| Stores an address | Alias for an existing object |
| Can be `nullptr` | Normally must refer to an object |
| Can be reassigned | Cannot be reseated |
| Uses `*` to dereference | Used directly |
| Uses `->` for member access | Uses `.` |

---

# 15. nullptr vs Dangling Pointer

## nullptr

A null pointer does not point to a valid object.

```cpp
int* p = nullptr;
```

---

## Dangling Pointer

A dangling pointer contains an address that is no longer valid.

```cpp
int* p = new int(10);

delete p;

// p is now dangling
```

Safer practice:

```cpp
delete p;
p = nullptr;
```

---

# 16. static Keyword

A **static local variable** is initialized only once and retains its value between function calls.

```cpp
#include <bits/stdc++.h>
using namespace std;

void count() {
    static int x = 0;

    x++;

    cout << x << " ";
}

int main() {
    count();
    count();
    count();
}
```

Output:

```text
1 2 3
```

### Normal local variable

A normal local variable is created when the function is called and its lifetime ends when the function returns.

### Static local variable

A static local variable:

- Is initialized only once
- Retains its value between function calls
- Has lifetime until the program ends
- Has local scope

---

# 17. Type Conversion vs Type Casting

## Type Conversion

Automatic conversion performed by the compiler.

```cpp
int a = 10;

double b = a;
```

Here:

```text
int → double
```

happens automatically.

---

## Type Casting

Explicit conversion performed by the programmer.

```cpp
double x = 10.8;

int y = static_cast<int>(x);
```

Old C-style cast:

```cpp
int y = (int)x;
```

Modern C++ generally prefers:

```cpp
int y = static_cast<int>(x);
```

---

# 18. dynamic_cast

`dynamic_cast` is mainly used for safe downcasting in polymorphic inheritance hierarchies.

The base class must be polymorphic, typically by having at least one virtual function.

```cpp
#include <iostream>
using namespace std;

class Parent {
public:
    virtual ~Parent() = default;
};

class Child : public Parent {
public:
    void show() {
        cout << "Child";
    }
};

int main() {
    Parent* p = new Child();

    Child* c = dynamic_cast<Child*>(p);

    if (c != nullptr) {
        c->show();
    }

    delete p;
}
```

If the cast fails:

```cpp
dynamic_cast<Child*>(p)
```

returns:

```cpp
nullptr
```

---

# 19. void Pointer

A `void*` is a generic pointer that can store the address of an object of any type.

```cpp
int x = 10;

void* p = &x;

cout << *static_cast<int*>(p);
```

Before dereferencing, convert it back to the correct type.

---

# 20. Struct vs Union

## Struct

A structure gives separate storage to its members.

```cpp
struct Student {
    int age;
    double marks;
};
```

Multiple members can hold meaningful values at the same time.

---

## Union

A union shares the same memory among its members.

```cpp
union Data {
    int age;
    double marks;
};
```

Only one member should generally be considered active at a time.

### Comparison

| Struct | Union |
|---|---|
| Members have separate storage | Members share storage |
| Multiple members can hold values | One active member at a time |
| Size affected by all members + padding | Size generally based on largest member + alignment |

---

# 21. Structure Padding

**Structure padding** is extra memory inserted by the compiler between or after structure members to satisfy memory alignment requirements.

Example:

```cpp
struct Student {
    char grade;
    long b;

    union Data {
        int age;
        double marks;
    } data;

    char section;
};
```

The exact size is **platform/compiler dependent**.

Check it using:

```cpp
cout << sizeof(Student);
```

### Typical Primitive Sizes

These are common values, not universal guarantees for every platform.

| Data Type | Typical Size |
|---|---:|
| `char` | 1 byte |
| `bool` | 1 byte |
| `short` | 2 bytes |
| `int` | 4 bytes |
| `float` | 4 bytes |
| `long long` | 8 bytes |
| `double` | 8 bytes |
| `long double` | Platform-dependent |
| Pointer on 32-bit | Typically 4 bytes |
| Pointer on 64-bit | Typically 8 bytes |

> **Interview tip:** Don't blindly say every `long` is 8 bytes. Its size is platform-dependent.

---

# 22. Frequency / String Example

A common interview pattern is counting character frequencies and producing a compressed representation.

For:

```text
abbccc
```

the output can be:

```text
a1b2c3
```

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s = "abbccc";

    unordered_map<char, int> freq;

    for (char ch : s) {
        freq[ch]++;
    }

    string res = "";
    unordered_set<char> seen;

    for (char ch : s) {
        if (seen.find(ch) == seen.end()) {
            res += ch;
            res += to_string(freq[ch]);

            seen.insert(ch);
        }
    }

    cout << res << "\n";
}
```

---

# 23. Singly Linked List

A singly linked list consists of nodes where each node contains:

1. Data
2. Pointer to the next node

```text
10 → 20 → 30 → nullptr
```

## Node

```cpp
struct Node {
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = nullptr;
    }
};
```

## Creating a List

```cpp
Node* head = new Node(10);

head->next = new Node(20);

head->next->next = new Node(30);
```

Result:

```text
head
 ↓
10 → 20 → 30 → nullptr
```

## Traversal

```cpp
void printList(Node* head) {
    Node* temp = head;

    while (temp != nullptr) {
        cout << temp->data << " ";
        temp = temp->next;
    }
}
```

---

## Why `Node*& head`?

When a function needs to modify the actual `head` pointer, pass the pointer by reference:

```cpp
void insertBeginning(Node*& head, int value)
```

This allows the function to change the caller's `head`.

### Example

```cpp
void insertBeginning(Node*& head, int value) {
    Node* newNode = new Node(value);

    newNode->next = head;
    head = newNode;
}
```

---

## Common Linked List Operations

### Insertion

- Insert at beginning
- Insert at end
- Insert at a specific position
- Insert in middle

### Deletion

- Delete beginning
- Delete end
- Delete at a specific position
- Delete middle

### Complexity

| Operation | Complexity |
|---|---:|
| Access by index | O(n) |
| Search | O(n) |
| Insert at beginning | O(1) |
| Delete beginning | O(1) |
| Insert at end without tail | O(n) |
| Delete end in singly linked list | O(n) |

---

# 24. Complete Linked List Operations

```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = nullptr;
    }
};

void printList(Node* head) {
    Node* temp = head;
    int len = 0;

    while (temp != nullptr) {
        cout << temp->data << " ";
        len++;
        temp = temp->next;
    }

    cout << "\nLength: " << len << "\n";
}

void insertBeginning(Node*& head, int value) {
    Node* newNode = new Node(value);

    newNode->next = head;
    head = newNode;
}

void insertEnd(Node*& head, int value) {
    Node* newNode = new Node(value);

    if (head == nullptr) {
        head = newNode;
        return;
    }

    Node* temp = head;

    while (temp->next != nullptr) {
        temp = temp->next;
    }

    temp->next = newNode;
}

void insertAt(Node*& head, int value, int pos) {
    if (pos <= 0) {
        cout << "Invalid position\n";
        return;
    }

    if (pos == 1) {
        insertBeginning(head, value);
        return;
    }

    Node* temp = head;

    for (int i = 1; i < pos - 1 && temp != nullptr; i++) {
        temp = temp->next;
    }

    if (temp == nullptr) {
        cout << "Invalid position\n";
        return;
    }

    Node* newNode = new Node(value);

    newNode->next = temp->next;
    temp->next = newNode;
}

void deleteBeginning(Node*& head) {
    if (head == nullptr) {
        return;
    }

    Node* temp = head;

    head = head->next;

    delete temp;
}

void deleteAt(Node*& head, int pos) {
    if (head == nullptr || pos <= 0) {
        return;
    }

    if (pos == 1) {
        deleteBeginning(head);
        return;
    }

    Node* temp = head;

    for (int i = 1; i < pos - 1 && temp != nullptr; i++) {
        temp = temp->next;
    }

    if (temp == nullptr || temp->next == nullptr) {
        cout << "Invalid position\n";
        return;
    }

    Node* toDelete = temp->next;

    temp->next = toDelete->next;

    delete toDelete;
}

void deleteEnd(Node*& head) {
    if (head == nullptr) {
        return;
    }

    if (head->next == nullptr) {
        delete head;
        head = nullptr;
        return;
    }

    Node* temp = head;

    while (temp->next->next != nullptr) {
        temp = temp->next;
    }

    delete temp->next;
    temp->next = nullptr;
}

int main() {
    Node* head = new Node(100);

    head->next = new Node(200);
    head->next->next = new Node(300);

    printList(head);

    insertBeginning(head, 1);
    insertAt(head, 32432, 3);
    insertEnd(head, 900);

    printList(head);

    deleteBeginning(head);
    deleteAt(head, 2);
    deleteEnd(head);

    printList(head);

    return 0;
}
```

> **Memory note:** A production-quality implementation should also clean up all remaining nodes before the program exits, or preferably use RAII/smart pointers where appropriate.

---

# 25. Mutex

A **mutex** provides mutual exclusion.

It usually allows only **one thread at a time** to enter a critical section protected by that mutex.

```text
Thread 1 ──→ [ Critical Section ]
                   ↑
                 Mutex
                   ↓
Thread 2 ──→ waits
```

Use a mutex when a shared resource should be accessed by only one thread at a time.

---

# 26. Semaphore

A **semaphore** is a synchronization mechanism based on a counter.

It can allow a specified number of threads to access a resource simultaneously.

Example:

```text
Semaphore count = 3

Thread 1 → access
Thread 2 → access
Thread 3 → access
Thread 4 → waits
```

---

# 27. Mutex vs Semaphore

| Mutex | Semaphore |
|---|---|
| Mutual exclusion mechanism | Counter-based synchronization mechanism |
| Usually one thread at a time | Can allow multiple threads |
| Used to protect critical sections | Used to control access to limited resources or for signaling |
| Has ownership semantics in common mutex implementations | Does not generally have mutex-style ownership |

### Easy Interview Answer

> A mutex is generally used to protect a critical section so that only one thread accesses it at a time, while a semaphore uses a counter and can allow multiple threads depending on the counter value.

---

# 28. Race Condition

A **race condition** occurs when multiple threads access shared data concurrently and the final result depends on the timing/interleaving of their execution.

Example:

```cpp
counter++;
```

This looks like one operation, but conceptually involves:

```text
1. Read counter
2. Modify value
3. Write value
```

If two threads perform this concurrently without proper synchronization, updates can be lost.

### Example

```text
Initial counter = 5

Thread 1 reads 5
Thread 2 reads 5

Thread 1 writes 6
Thread 2 writes 6

Expected = 7
Actual   = 6
```

A mutex or another appropriate synchronization mechanism can be used to protect the critical section.

---

# 29. Merge Sort

**Merge Sort** is a divide-and-conquer sorting algorithm.

## Steps

1. Divide the array into two halves.
2. Recursively sort both halves.
3. Merge the sorted halves.

```text
[5 2 4 1]

       divide
      /     \
   [5 2]   [4 1]

    / \      / \
   [5][2]  [4][1]

       merge
      /     \
   [2 5]   [1 4]

       merge

   [1 2 4 5]
```

## Implementation

```cpp
#include <bits/stdc++.h>
using namespace std;

void merge(vector<int>& arr, int low, int mid, int high) {
    vector<int> temp;

    int left = low;
    int right = mid + 1;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push_back(arr[left]);
            left++;
        } else {
            temp.push_back(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push_back(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push_back(arr[right]);
        right++;
    }

    for (int i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

void mergeSort(vector<int>& arr, int low, int high) {
    if (low >= high) {
        return;
    }

    int mid = low + (high - low) / 2;

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    merge(arr, low, mid, high);
}

int main() {
    int n;
    cin >> n;

    vector<int> arr(n);

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    mergeSort(arr, 0, n - 1);

    for (int x : arr) {
        cout << x << " ";
    }
}
```

## Complexity

| Metric | Complexity |
|---|---:|
| Time | O(n log n) |
| Extra Space | O(n) |
| Best Case | O(n log n) |
| Average Case | O(n log n) |
| Worst Case | O(n log n) |

### Stability

This implementation is stable because during merging it chooses the left element first when values are equal:

```cpp
if (arr[left] <= arr[right])
```

---

# 30. Quick Interview Revision

## OOPs

### Four Pillars

```text
Encapsulation
Inheritance
Polymorphism
Abstraction
```

### Must Know

- Class vs object
- Encapsulation
- Types of inheritance
- Multiple inheritance
- Diamond problem
- Virtual inheritance
- Compile-time polymorphism
- Runtime polymorphism
- Overloading vs overriding
- Virtual functions
- `override`
- Abstract class
- Pure virtual function
- Virtual destructor

---

## C++ Memory

### Must Know

- Stack vs heap
- `malloc`
- `calloc`
- `realloc`
- `free`
- `new`
- `delete`
- `new[]`
- `delete[]`
- Memory leaks
- Dangling pointers
- `nullptr`
- RAII
- Smart pointers

### Matching Rule

```text
malloc/calloc/realloc → free

new                  → delete

new[]                → delete[]
```

---

## Pointers & Casting

### Must Know

- Pointer vs reference
- `nullptr`
- Dangling pointer
- `void*`
- `static_cast`
- `dynamic_cast`

---

## Memory Layout

### Must Know

- Struct
- Union
- Structure padding
- Alignment
- `sizeof()`

---

## OS / Concurrency

### Must Know

- Process vs thread
- Race condition
- Critical section
- Mutex
- Semaphore
- Deadlock
- Starvation
- Synchronization

---

# 31. One-Line Interview Definitions

| Topic | Quick Definition |
|---|---|
| Class | Blueprint defining data and behavior |
| Object | Instance of a class |
| Encapsulation | Bundling data and methods with controlled access |
| Inheritance | Acquiring properties/behavior from a base class |
| Polymorphism | One interface having multiple forms |
| Abstraction | Hiding implementation details and exposing essentials |
| Overloading | Same function name with different parameter lists |
| Overriding | Derived class provides a new implementation of a base virtual function |
| Virtual function | Enables runtime dispatch |
| Abstract class | Class that cannot be instantiated directly |
| Pure virtual function | Virtual function declared with `= 0` |
| Virtual destructor | Ensures proper destruction through a base pointer |
| Virtual inheritance | Helps solve the diamond problem |
| Pointer | Variable that stores an address |
| Reference | Alias for an existing object |
| `nullptr` | Null pointer value |
| Dangling pointer | Pointer referring to invalid/deallocated memory |
| `malloc` | C-style raw memory allocation |
| `calloc` | C-style allocation with zero-initialized bytes |
| `realloc` | Resizes dynamically allocated memory |
| `free` | Releases C-style dynamically allocated memory |
| `new` | Allocates and constructs a C++ object |
| `delete` | Destroys and releases an object allocated with `new` |
| Mutex | Synchronization mechanism for mutual exclusion |
| Semaphore | Counter-based synchronization mechanism |
| Race condition | Incorrect/unpredictable result due to unsynchronized concurrent access |
| Merge Sort | Divide-and-conquer sorting algorithm with O(n log n) time |

---

# 32. High-Priority Interview Questions

Before an interview, make sure you can explain these **without looking at the notes**:

1. What is a class and what is an object?
2. Explain the four pillars of OOP.
3. What is encapsulation?
4. What are the types of inheritance?
5. What is multiple inheritance?
6. What is the diamond problem?
7. How does virtual inheritance solve it?
8. What is polymorphism?
9. Overloading vs overriding?
10. What is a virtual function?
11. Why do we need `virtual`?
12. Why use `override`?
13. What is an abstract class?
14. What is a pure virtual function?
15. Why should a polymorphic base class have a virtual destructor?
16. `malloc` vs `new`?
17. `free` vs `delete`?
18. Stack vs heap?
19. Pointer vs reference?
20. `nullptr` vs dangling pointer?
21. `static_cast` vs `dynamic_cast`?
22. What is a `void*`?
23. Struct vs union?
24. What is structure padding?
25. What is a race condition?
26. Mutex vs semaphore?
27. What is a critical section?
28. Explain Merge Sort and its complexity.

---

# Quick Revision Flow

```text
Classes & Objects
       ↓
Encapsulation
       ↓
Inheritance
       ↓
Polymorphism
       ↓
Virtual Functions
       ↓
Abstraction
       ↓
Virtual Destructor
       ↓
Diamond Problem
       ↓
Virtual Inheritance
       ↓
Memory Management
       ↓
Pointers & References
       ↓
Type Casting
       ↓
Struct / Union / Padding
       ↓
Linked List
       ↓
Concurrency
       ↓
Merge Sort
```

> **Goal:** Understand the concept first, then practice explaining the example/code in your own words. For interviews, being able to explain **why** something works is more important than memorizing the code.
