package com.mojprofesor.backend.exception;

public class SamePasswordException extends Exception {
    public SamePasswordException() {
    }

    public SamePasswordException(String message) {
        super(message);
    }
}
