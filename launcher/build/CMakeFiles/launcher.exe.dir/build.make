# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.28

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/jmaloney/Documents/embgdb/launcher

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/jmaloney/Documents/embgdb/launcher/build

# Include any dependencies generated for this target.
include CMakeFiles/launcher.exe.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/launcher.exe.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/launcher.exe.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/launcher.exe.dir/flags.make

CMakeFiles/launcher.exe.dir/src/main.cpp.o: CMakeFiles/launcher.exe.dir/flags.make
CMakeFiles/launcher.exe.dir/src/main.cpp.o: /home/jmaloney/Documents/embgdb/launcher/src/main.cpp
CMakeFiles/launcher.exe.dir/src/main.cpp.o: CMakeFiles/launcher.exe.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/home/jmaloney/Documents/embgdb/launcher/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/launcher.exe.dir/src/main.cpp.o"
	/usr/bin/clang++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/launcher.exe.dir/src/main.cpp.o -MF CMakeFiles/launcher.exe.dir/src/main.cpp.o.d -o CMakeFiles/launcher.exe.dir/src/main.cpp.o -c /home/jmaloney/Documents/embgdb/launcher/src/main.cpp

CMakeFiles/launcher.exe.dir/src/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/launcher.exe.dir/src/main.cpp.i"
	/usr/bin/clang++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/jmaloney/Documents/embgdb/launcher/src/main.cpp > CMakeFiles/launcher.exe.dir/src/main.cpp.i

CMakeFiles/launcher.exe.dir/src/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/launcher.exe.dir/src/main.cpp.s"
	/usr/bin/clang++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/jmaloney/Documents/embgdb/launcher/src/main.cpp -o CMakeFiles/launcher.exe.dir/src/main.cpp.s

# Object files for target launcher.exe
launcher_exe_OBJECTS = \
"CMakeFiles/launcher.exe.dir/src/main.cpp.o"

# External object files for target launcher.exe
launcher_exe_EXTERNAL_OBJECTS =

launcher.exe: CMakeFiles/launcher.exe.dir/src/main.cpp.o
launcher.exe: CMakeFiles/launcher.exe.dir/build.make
launcher.exe: CMakeFiles/launcher.exe.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=/home/jmaloney/Documents/embgdb/launcher/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable launcher.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/launcher.exe.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/launcher.exe.dir/build: launcher.exe
.PHONY : CMakeFiles/launcher.exe.dir/build

CMakeFiles/launcher.exe.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/launcher.exe.dir/cmake_clean.cmake
.PHONY : CMakeFiles/launcher.exe.dir/clean

CMakeFiles/launcher.exe.dir/depend:
	cd /home/jmaloney/Documents/embgdb/launcher/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/jmaloney/Documents/embgdb/launcher /home/jmaloney/Documents/embgdb/launcher /home/jmaloney/Documents/embgdb/launcher/build /home/jmaloney/Documents/embgdb/launcher/build /home/jmaloney/Documents/embgdb/launcher/build/CMakeFiles/launcher.exe.dir/DependInfo.cmake "--color=$(COLOR)"
.PHONY : CMakeFiles/launcher.exe.dir/depend

