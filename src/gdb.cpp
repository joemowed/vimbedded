#include <boost/process/io.hpp>
#include <gdb.hpp>
gdb::gdb() {}
std::string gdb::getCout() {
    if (!this->isFirstRead) {
        if (this->lastPeek)
    }

    std::string ret;

    return ret;
}
char gdb::peekCout() {
    this->lastPeekCout = this->gdbCout.peek();
    return this->lastPeekCout;
}
