#include <boost/program_options.hpp>
#include <boost/program_options/errors.hpp>
#include <cli.hpp>
#include <iostream>
namespace po = boost::program_options;
cli::cli(int argc, char **argv) : argc(argc), argv(argv) {
    desc.add_options()("help", po::bool_switch()->default_value(false),
                       "Produce help message")("dev", po::bool_switch()->default_value(false),
                                               "Launch vimbedded in debug mode.  This is meant to be used only during development, and only when launching vimbedded from within the "
                                               "cloned source code.  Changes include modifying the paths vimbedded looks for config and project files.");
    try {
        po::store(po::parse_command_line(argc, argv, desc), varMap);
    } catch (const po::unknown_option &exception) {
        std::cout << exception.what() << "\n";
        std::cout << desc << std::endl;
        continueFlag = 1;
    } catch (...) {
        std::cout << "Error, invalid option\n";
        std::cout << desc << std::endl;
        continueFlag = 1;
    }
    if (continueFlag != 0) {
        return;
    }
    po::notify(varMap);
    if (varMap["help"].as<bool>()) {
        std::cout << desc << std::endl;
        continueFlag = 1;
    }
    toCliInfo();
}
void cli::toCliInfo() {}
int cli::haltOnCli() {
    if (continueFlag == 0) {
        std::cout << "Welcome to vimbedded....." << ((varMap["dev"].as<bool>()) ? "Running in development Mode" : "Running") << "\n";
    }
    return continueFlag;
}
