#include <iostream>
int main(int argc, char *argv[]) {
    std::cout << "Argument count: " << argc << "\n";
    for (int i = 1; i < argc; i++) {
        printCharStar(i, argv[i]);
    }
}
