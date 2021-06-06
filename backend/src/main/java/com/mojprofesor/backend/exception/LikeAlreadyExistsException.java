package com.mojprofesor.backend.exception;

/**
 * @author Patryk Borchowiec
 */
public class LikeAlreadyExistsException extends Exception {

    public LikeAlreadyExistsException() {
    }

    public LikeAlreadyExistsException(String message) {
        super(message);
    }
}
