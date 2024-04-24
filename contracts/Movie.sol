// SPDX-License-Identifier: MIT

pragma solidity >=0.8.11 ;

contract Movie{
    string public movie;

    function getMovie() public view  returns (string memory){
        return movie;
    }

    function setMovie(string memory movieName) public {
        movie = movieName;
    }
}