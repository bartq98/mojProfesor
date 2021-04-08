package com.mojprofesor.backend.exception;

/**
 * @author Patryk Borchowiec
 */
public class StarAlreadyExistsException extends Exception {

    public StarAlreadyExistsException() {
    }

    public StarAlreadyExistsException(String message) {
        super(message);
    }
}
