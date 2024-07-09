#include <boost/program_options.hpp>
#include <cli.hpp>
using namespace po = ;
cli::cli(const int argc, const char **argv) : argc(argc), argv(argv) {

    po::options_description desc("Allowed options");
    desc.add_options()("help", "produce help message")("compression", po::value<int>(), "set compression level");

    po::variables_map vm;
    po::store(po::parse_command_line(ac, av, desc), vm);
    po::notify(vm);

    if (vm.count("help")) {
        std::cout << desc << "\n";
        return 1;
    }

    if (vm.count("compression")) {
        std::cout << "Compression level was set to " << vm["compression"].as<int>() << ".\n";
    } else {
        std::cout << "Compression level was not set.\n";
    }
}
