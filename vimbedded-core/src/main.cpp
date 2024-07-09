#include <boost/program_options.hpp>
#include <cli.hpp>
int main(int argc, char **argv) {
    cli cli(argc, argv);
    if (cli.haltOnCli()) {
        return 0;
    }
    return 0;
}
