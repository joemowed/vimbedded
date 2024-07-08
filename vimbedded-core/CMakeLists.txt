cmake_minimum_required(VERSION 3.25)
include_guard()
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
# GoogleTest requires at least C++14
set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_COMPILER  "/usr/bin/clang++")
 set(CMAKE_CXX_FLAGS "-O2")
SET (CMAKE_C_COMPILER             "/usr/bin/clang")
SET (CMAKE_AR      "/usr/bin/llvm-ar")
SET (CMAKE_LINKER  "/usr/bin/llvm-ld")
SET (CMAKE_NM      "/usr/bin/llvm-nm")
SET (CMAKE_OBJDUMP "/usr/bin/llvm-objdump")
SET (CMAKE_RANLIB  "/usr/bin/llvm-ranlib")

project(launcher VERSION 1.0
    DESCRIPTION "Launcher for embedded toolchain"
    LANGUAGES CXX)
file(GLOB SOURCES "src/*.cpp")
include_directories(src/include)
add_executable(launcher.exe ${SOURCES})
