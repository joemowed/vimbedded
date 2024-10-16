#include <boost/process.hpp>
#include <boost/process/detail/child_decl.hpp>
#include <boost/process/io.hpp>
#include <boost/process/pipe.hpp>
class gdb {
  private:
    boost::process::ipstream gdbErr;
    boost::process::ipstream gdbCout;
    boost::process::opstream gdbInput;
    boost::process::child gdbProcess = boost::process::child("gdb-multiarch", boost::process::std_out > gdbCout, boost::process::std_err > gdbErr, boost::process::std_in < gdbInput);
    char lastPeekCout;
    bool isFirstRead;
    char peekCout();

  public:
    gdb();
    std::string getCout();
};
