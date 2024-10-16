#include <boost/process.hpp>
#include <boost/process/io.hpp>
#include <boost/process/pipe.hpp>
#include <gdb.hpp>
#include <iostream>
#include <ostream>
#include <string>
#include <sys/stat.h>
constexpr const int BUFF_SIZE = 500;
int main() {

    gdb gdb;

    std::cout << gdb.getCout();

    return 0;
}
