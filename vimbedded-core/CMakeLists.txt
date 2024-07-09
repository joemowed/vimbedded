cmake_minimum_required(VERSION 3.25)
include_guard()
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_COMPILER  "/usr/bin/clang++")
 set(CMAKE_CXX_FLAGS "-O2")
SET (CMAKE_C_COMPILER             "/usr/bin/clang")
SET (CMAKE_AR      "/usr/bin/llvm-ar")
SET (CMAKE_LINKER  "/usr/bin/llvm-ld")
SET (CMAKE_NM      "/usr/bin/llvm-nm")
SET (CMAKE_OBJDUMP "/usr/bin/llvm-objdump")
SET (CMAKE_RANLIB  "/usr/bin/llvm-ranlib")

#This static definition of the include and library directories is an issue
set(BOOST_INCLUDEDIR /usr/include)
SET (BOOST_LIBRARYDIR "/usr/lib/x86_64-linux-gnu")

find_package(Boost COMPONENTS program_options REQUIRED)
project(vimbedded-core VERSION 1.0
    DESCRIPTION "Launcher for embedded toolchain"
    LANGUAGES CXX)
file(GLOB SOURCES "src/*.cpp")
include_directories(src/include)
add_executable(vimbedded-core.exe ${SOURCES})
TARGET_LINK_LIBRARIES( vimbedded-core.exe ${Boost_LIBRARIES} )
