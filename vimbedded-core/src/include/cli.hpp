#include <boost/program_options.hpp>
#include <boost/program_options/variables_map.hpp>
#include <optional>
struct CliInfo {
    // true if the application was launched in debug mode
    std::optional<bool> debug;
};
class cli {
  private:
    const int argc;
    int continueFlag = 0;
    char **argv;
    std::optional<CliInfo> cliInfoData;
    // parses the boost::program_options::variable_map to the struct CliInfo
    void toCliInfo();
    boost::program_options::variables_map varMap = boost::program_options::variables_map();
    boost::program_options::options_description desc = boost::program_options::options_description("Allowed Options");

  public:
    cli(int argc, char **argv);
    // getter for processed cli arguments
    CliInfo cliInfo();
    // returns 0 if program execution can continue.  Returns non-zero if execution should be halted (e.g. vimbedded --help).  Also displays intro message.
    int haltOnCli();
};
